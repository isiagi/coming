
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;

}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (

    <Card className="flex flex-col items-center text-center group">
      <CardHeader>
        <div className="w-20 h-10 rounded-full px-1 flex bg-blue-100 mb-4 items-center justify-start group-hover:bg-blue-200 transition-colors duration-300 ease-in-out group-hover:justify-end transition-all duration-400">
          <div>{icon}</div>
        </div>

        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>

  );
}

