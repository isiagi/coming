import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <div className="p-2 bg-primary/10 rounded-full mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

