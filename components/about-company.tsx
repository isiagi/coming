import Image from 'next/image'

export function AboutCompany() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Datahub Systems Technologies (DST)</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative w-full h-[400px] lg:h-full">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Datahub Systems Technologies"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col">
            <div className="space-y-4 text-gray-700">
              <p>
                DST is an IT company that specializes in providing comprehensive technology solutions for businesses of all sizes. Our mission is to help our clients stay ahead of the curve in today's fast-paced digital landscape by delivering cutting-edge solutions that drive growth and improve efficiency.
              </p>
              <p>
                Dedication to providing and delivering responsive and professional services to our clients is engraved deep in our souls while being committed to meeting the unique needs of each business we work with. We have understood the importance of staying ahead of the curve in today's fast-paced digital landscape, and therefore are committed to staying current with the latest technologies and industry trends to ensure that our clients have access to the most advanced solutions on the market.
              </p>
              <p>
                In addition to our solutions, we also offer a range of training and consulting services to help our customers realise their mission. We believe that continuous learning and improvement is key to staying competitive in today's fast-paced business environment.
              </p>
              <p>
                We understand the importance of communication and transparency when it comes to delivering projects on time and budget. Our team is dedicated to providing responsive and professional service to our clients. We believe in building long-term relationships with our clients and we strive to become a trusted technology partner for them.
              </p>
              <p>
                One of the keys of our success is our customer service. Technology can be a bit complex, which is why we provide exceptional customer service and support to ensure that our customers are able to fully utilize the solutions we provide. Our pride is on the ability to understand the assignement from our customers' unique needs and tailor our solutions to fit those specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

