import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="flex flex-col items-center text-center p-6 h-full hover:shadow-lg transition-all duration-300 ease-in-out group">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300 ease-in-out">
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </Card>
    </Link>
  );
}
