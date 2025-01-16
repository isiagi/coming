import { Button } from "@/components/ui/button"

interface JobListingProps {
  title: string
  description: string
  requirements: string[]
}

export function JobListing({ title, description, requirements }: JobListingProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-gray-700">Requirements:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <Button className="w-full sm:w-auto">Apply Now</Button>
    </div>
  )
}

