import { JobListing } from './job-listing'

interface Job {
  title: string
  description: string
  requirements: string[]
}

interface JobListingsProps {
  jobs: Job[]
}

export function JobListings({ jobs }: JobListingsProps) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-8 px-4 bg-white rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">No Current Openings</h3>
        <p className="text-gray-600">
          We don't have any open positions right now, but we're always on the lookout for talented individuals to join our team.
        </p>
        <p className="mt-4 text-gray-600">
          Please check back later or submit your information in the form below to stay updated on future opportunities.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {jobs.map((job, index) => (
        <JobListing
          key={index}
          title={job.title}
          description={job.description}
          requirements={job.requirements}
        />
      ))}
    </div>
  )
}

