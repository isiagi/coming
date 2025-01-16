/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// interface ScrollNavProps {
//   items: Array<{
//     label: string;
//     href: string;
//   }>;
//   height: number;
//   onSectionClick: (sectionId: string) => void;
// }

export function ScrollNav({ items, height, onSectionClick }: any) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const initialLoadRef = useRef(true);
  const scrollingRef = useRef(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mainNavHeight = 64;

  const calculateOffset = useCallback(() => {
    const navHeight = navRef.current?.offsetHeight || 64;
    return isSticky ? mainNavHeight + navHeight : height + navHeight;
  }, [height, isSticky]);

  const updateNavState = useCallback(() => {
    if (scrollingRef.current) return;

    const currentScrollY = window.scrollY;
    const shouldBeSticky = currentScrollY >= height - mainNavHeight;
    setIsSticky(shouldBeSticky);

    // Only update active section if nav is sticky
    if (shouldBeSticky) {
      const offset = calculateOffset();
      const sections = items
        .map((item: any) => ({
          href: item.href,
          element: document.querySelector(item.href),
        }))
        .filter(
          (item: any): item is { href: string; element: Element } =>
            !!item.element
        );

      let foundActive = false;
      for (const { href, element } of sections) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          if (activeItem !== href && !scrollingRef.current) {
            setActiveItem(href);
            if (!initialLoadRef.current) {
              window.history.replaceState(
                null,
                "",
                window.location.pathname + href
              );
            }
          }
          foundActive = true;
          break;
        }
      }

      if (!foundActive && currentScrollY < height) {
        const firstItemHref = items[0]?.href || "";
        if (activeItem !== firstItemHref) {
          setActiveItem(firstItemHref);
        }
      }
    } else {
      // Clear active item when not sticky
      setActiveItem("");
    }
  }, [items, height, activeItem, calculateOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollingRef.current) {
        updateNavState();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    initialLoadRef.current = false;

    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateNavState]);

  const scrollToSection = useCallback(
    (href: string, isInitial = false) => {
      // Only scroll if nav is sticky
      if (!isSticky) return;

      const element = document.querySelector(href);
      if (!element) return;

      scrollingRef.current = true;
      const offset = calculateOffset();
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - offset + 2;

      setActiveItem(href);
      if (!initialLoadRef.current) {
        window.history.pushState(null, "", window.location.pathname + href);
      }

      window.scrollTo({
        top: targetPosition,
        behavior: isInitial ? "instant" : "smooth",
      });

      setTimeout(() => {
        scrollingRef.current = false;
        updateNavState();
      }, 1000);
    },
    [calculateOffset, updateNavState, isSticky]
  );

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    // Only handle click if nav is sticky
    if (!isSticky) return;

    const sectionId = href.substring(1);
    onSectionClick(sectionId);
    scrollToSection(href);
  };

  return (
    <div
      ref={navRef}
      className={cn(
        "scroll-nav hidden md:block transition-all duration-300 ease-in-out w-full bg-white",
        isSticky ? "fixed left-0 right-0 shadow-md z-10 top-16" : "relative"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="flex space-x-8" aria-label="Page sections">
            {items.map((item: any) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors",
                  !isSticky && "pointer-events-none opacity-50",
                  activeItem === item.href
                    ? "border-[#1E90FF] text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )}
                aria-current={activeItem === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* <Button variant="destructive">GET PRICING/INFO</Button> */}
        </div>
      </div>
    </div>
  );
}
