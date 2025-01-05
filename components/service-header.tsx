"use client";

interface ServiceHeaderProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
}

export function ServiceHeader({ title, subtitle, image }: ServiceHeaderProps) {
  return (
    <div className="relative min-h-[350px] bg-gradient-to-b from-sky-100 to-white overflow-hidden flex items-center">
      <div>
        {/* Meteor effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={`absolute inset-0 bg-cover bg-center bg-[#000] bg-blend-overlay bg-opacity-30`}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-0 pt-8">
          {/* Breadcrumbs */}

          {/* Hero Content */}
          <div className="flex items-center justify-between pb-16 md:pb-1">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
              <p className="text-xl text-white">{subtitle}</p>
            </div>
            {/* <div className="hidden lg:block">
            <img
              src={image}
              alt=""
              className="h-96 w-auto object-contain"
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
