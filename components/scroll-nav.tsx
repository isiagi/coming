"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { debounce } from "lodash";

interface ScrollNavProps {
  items: Array<{
    label: string;
    href: string;
  }>;
  height: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSectionClick: any;
}

export function ScrollNav({ items, height, onSectionClick }: ScrollNavProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const scrollingRef = useRef(false);
  const initialLoadRef = useRef(true);

  const debouncedScroll = debounce(() => {
    const currentScrollY = window.scrollY;
    const headerHeight = height;
    const shouldBeSticky = currentScrollY > headerHeight;

    setIsSticky(shouldBeSticky);

    if (!scrollingRef.current) {
      const navHeight = isSticky ? 80 : 80 + height; // Adjust offset based on sticky state

      let currentActive = "";
      for (const { href } of items) {
        const element = document.querySelector(href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 20 && rect.bottom >= navHeight) {
            currentActive = href;
            break;
          }
        }
      }

      if (currentActive !== activeItem) {
        setActiveItem(currentActive);
        if (currentActive && !scrollingRef.current && !initialLoadRef.current) {
          history.replaceState(null, "", currentActive);
        }
      }
    }
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);

    // Handle initial hash and prevent URL change on refresh
    const hash = window.location.hash;
    if (hash) {
      setActiveItem(hash);
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 40;
        const navOffset = 80;
        const totalOffset = headerOffset + navOffset - 10; // Reduced padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - totalOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "instant",
        });
      }
    }

    // Set initial load to false after a short delay
    const timer = setTimeout(() => {
      initialLoadRef.current = false;
    }, 500);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      debouncedScroll.cancel();
      clearTimeout(timer);
    };
  }, [height, items]);

  const calculateScrollOffset = () => {
    const currentScrollY = window.scrollY;
    const headerHeight = height;
    const shouldBeSticky = currentScrollY > headerHeight;

    // Reduced padding in the offset calculation
    return shouldBeSticky ? 50 : 90;
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    scrollingRef.current = true;
    const offsetPosition =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      calculateScrollOffset();

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActiveItem(href);
    // Only update URL if not in initial load
    if (!initialLoadRef.current) {
      history.pushState(null, "", href);
    }

    setTimeout(() => {
      scrollingRef.current = false;
    }, 1000);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    onSectionClick(sectionId);
    scrollToSection(href);
  };

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out w-full bg-white",
        isSticky ? "fixed left-0 right-0 shadow-md z-10 top-16" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="flex space-x-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors",
                  activeItem === item.href
                    ? "border-red-600 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button variant="destructive">GET PRICING/INFO</Button>
        </div>
      </div>
    </div>
  );
}
