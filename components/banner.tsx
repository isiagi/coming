import { Button } from "@/components/ui/button"

export function Banner() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Empowering Your Digital Future</h2>
        <p className="text-xl text-white mb-8">Innovative IT solutions for businesses of all sizes</p>
        <Button size="lg">
          Get Started
        </Button>
      </div>
    </section>
  )
}

