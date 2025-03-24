import Image from "next/image"
import { Quote } from "lucide-react"

export function LeadershipMessages() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium mb-2">
            Our Leadership
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-nmb-blue">
              Guided by Experience & Vision
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the leaders driving our commitment to excellence and innovation in steel fabrication.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chairman Message */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left side - Image */}
              <div className="md:col-span-2 relative">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/images/chairman.jpg"
                    alt="MAHMOUD SULEIMAN NAJEM ALKHTIB - Chairman"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nmb-blue/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">MAHMOUD SULEIMAN NAJEM ALKHTIB</h3>
                    <p className="text-white/80">Chairman</p>
                  </div>
                </div>
              </div>

              {/* Right side - Message */}
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-nmb-blue/10" />
                  <p className="text-gray-600 italic relative z-10 mb-6">
                    Negem Metal Buildings Factory, whose tradition originated in 2019, is one of the leading metal
                    fabrication companies in Qatar, providing services to residential, commercial and industrial
                    sectors. We have a dedicated team of employees, who consistently deliver quality services to our
                    customers. These quality services & vast years of experience provides a strong base for developing a
                    long lasting and better relationship with our valued customers.
                  </p>
                  <Quote className="absolute -bottom-2 -right-2 h-8 w-8 text-nmb-blue/10 transform rotate-180" />
                </div>

                <div className="flex justify-end mt-4">
                  <div className="flex items-center">
                    <div className="h-px w-12 bg-nmb-blue mr-3"></div>
                    <div className="text-nmb-blue font-semibold">Chairman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="grid md:grid-cols-5 gap-0 h-full">
              {/* Left side - Image */}
              <div className="md:col-span-2 relative">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/images/ceo.jpg"
                    alt="IYAD MAHD SULEIMAN ALKHATIB - CEO"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nmb-blue/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">IYAD MAHD SULEIMAN ALKHATIB</h3>
                    <p className="text-white/80">CEO</p>
                  </div>
                </div>
              </div>

              {/* Right side - Message */}
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-nmb-gold/10" />
                  <p className="text-gray-600 italic relative z-10 mb-6">
                    Negem Metal Buildings Factory is an Engineering based company in the field of Oil & gas,
                    Petrochemicals, Power sector, Food Industry & Architectural works. We are responsible & accountable
                    to provide excellent service to all clients in the O & G Industry, Plants, other governmental
                    organizations & the public in a qualitative efficient & timely manner in compliance customer
                    requirements.
                  </p>
                  <Quote className="absolute -bottom-2 -right-2 h-8 w-8 text-nmb-gold/10 transform rotate-180" />
                </div>

                <div className="flex justify-end mt-4">
                  <div className="flex items-center">
                    <div className="h-px w-12 bg-nmb-gold mr-3"></div>
                    <div className="text-nmb-blue font-semibold">CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-nmb-blue/5 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-nmb-blue font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-nmb-blue">Excellence</h3>
            </div>
            <p className="text-gray-600">
              We strive for excellence in every project, delivering quality that exceeds expectations and stands the
              test of time.
            </p>
          </div>

          <div className="bg-nmb-gold/5 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-nmb-gold font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-nmb-blue">Integrity</h3>
            </div>
            <p className="text-gray-600">
              We conduct business with honesty and transparency, building trust with our clients, partners, and
              employees.
            </p>
          </div>

          <div className="bg-nmb-blue/5 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-nmb-blue font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-nmb-blue">Innovation</h3>
            </div>
            <p className="text-gray-600">
              We embrace new technologies and methodologies to continuously improve our processes and solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

