/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, Suspense } from "react";
import { ServiceHeader } from "@/components/service-header";
import { ScrollNav } from "@/components/scroll-nav";
import SubNav from "@/components/subNav";

interface Breadcrumb {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  headerImage: string;
  breadcrumbs: Breadcrumb[];
  navItems: NavItem[];
  overview?: {
    title: string;
    content: string;
  };
  children: React.ReactNode;
}

function ServicePageContent({
  title,
  subtitle,
  headerImage,
  breadcrumbs,
  navItems,
  overview,
  children,
}: ServicePageLayoutProps) {
  const [activeSection, setActiveSection] = useState("");
  const [clickedSection, setClickedSection] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        setClickedSection(sectionId);

        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const navHeight = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    const handleScroll = () => {
      const navHeight = 80;

      navItems.forEach(({ href }) => {
        const sectionId = href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 20 && rect.bottom >= navHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const handleSectionClick = (sectionId: string) => {
    setClickedSection(sectionId);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // const getSectionPadding = (sectionId: string) => {
  //   return clickedSection === sectionId ? "pt-28" : "";
  // };

  return (
    <>
      <SubNav breadcrumbs={breadcrumbs} />
      <ServiceHeader
        title={title}
        subtitle={subtitle}
        image={headerImage}
        breadcrumbs={breadcrumbs}
      />
      <ScrollNav
        items={navItems}
        height={350}
        onSectionClick={handleSectionClick}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {overview && (
          <section id="all" className="min-h-[10vh]">
            <h2 className="text-3xl font-bold mb-6">{overview.title}</h2>
            <p>{overview.content}</p>
          </section>
        )}

        {children}
      </div>
    </>
  );
}

export default function ServicePageLayout(props: ServicePageLayoutProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicePageContent {...props} />
    </Suspense>
  );
}
