"use client";

import React from "react";
import SubNav from "./subNav";
import { ServiceHeader } from "./service-header";
import { ScrollNav } from "./scroll-nav";
import useScroll from "@/hooks/useScroll";

type Props = {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  subtitle: string;
  image: string;
  navItems: { label: string; href: string }[];
};

function SubHeroHeader({
  breadcrumbs,
  title,
  subtitle,
  image,
  navItems,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setClickedSection] = useScroll();
  return (
    <div>
      <SubNav breadcrumbs={breadcrumbs} />
      <ServiceHeader
        title={title}
        subtitle={subtitle}
        image={image}
        breadcrumbs={breadcrumbs}
      />
      <ScrollNav
        items={navItems}
        height={350}
        onSectionClick={setClickedSection}
      />
    </div>
  );
}

export default SubHeroHeader;
