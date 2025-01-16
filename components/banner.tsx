import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1671751035209-1591abb5f373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Empowering Your Digital Future
        </h2>
        <p className="text-xl text-white mb-8">
          Innovative IT solutions for businesses of all sizes
        </p>
        <Button
          className="bg-[#1E90FF] text-white outline-none hover:bg-[#1565C0] hover:text-white"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
