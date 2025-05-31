import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building2, Wrench, Shield, ArrowRight } from "lucide-react"

export function ServicesOverview() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium mb-2">
            Our Expertise
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-nmb-blue">
              Comprehensive Steel Solutions
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From structural steel to architectural works, we deliver precision-engineered solutions tailored to your
              specific project requirements.
            </p>
          </div>
        </div>

        {/* Main services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Service 1 */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/service1.jpg"
                alt="Structural Steel Solutions"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                  <Building2 className="h-5 w-5 text-nmb-blue" />
                </div>
                <h3 className="text-lg font-bold text-white">Structural Steel</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Hot-rolled steel structures, pre-engineered building systems, plate works, and piping systems for
                industrial and commercial applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                  Industrial
                </span>
                <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                  Commercial
                </span>
                <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                  Infrastructure
                </span>
              </div>
              <Link
                href="/services#structural-steel"
                className="inline-flex items-center text-nmb-blue font-medium hover:text-nmb-darkblue group"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/service2.jpg"
                alt="Secondary Steelworks"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                  <Wrench className="h-5 w-5 text-nmb-gold" />
                </div>
                <h3 className="text-lg font-bold text-white">Secondary Steelworks</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Claddings, platforms, canopies, staircases, ladders, and catwalks for various industrial and commercial
                applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-nmb-gold/5 px-3 py-1 rounded-full text-nmb-gold text-xs">
                  Platforms
                </span>
                <span className="inline-block bg-nmb-gold/5 px-3 py-1 rounded-full text-nmb-gold text-xs">
                  Staircases
                </span>
                <span className="inline-block bg-nmb-gold/5 px-3 py-1 rounded-full text-nmb-gold text-xs">
                  Claddings
                </span>
              </div>
              <Link
                href="/services#secondary-steelworks"
                className="inline-flex items-center text-nmb-blue font-medium hover:text-nmb-darkblue group"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/service3.jpg"
                alt="Architectural Works"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                  <Shield className="h-5 w-5 text-nmb-blue" />
                </div>
                <h3 className="text-lg font-bold text-white">Architectural Works</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Custom metal fabrication for commercial and industrial applications with precision engineering and
                aesthetic excellence.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">Custom</span>
                <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                  Decorative
                </span>
                <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                  Functional
                </span>
              </div>
              <Link
                href="/services#architectural-works"
                className="inline-flex items-center text-nmb-blue font-medium hover:text-nmb-darkblue group"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-nmb-blue mb-6">
                Delivering Excellence in Every Project
              </h3>
              <p className="text-gray-600 mb-8">
                With over four decades of experience, Negem Metal Buildings Factory has established itself as a leader
                in steel fabrication across the MENA region. Our commitment to quality, safety, and customer
                satisfaction sets us apart.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nmb-blue/10">
                      <span className="text-nmb-blue font-bold">01</span>
                    </div>
                    <h4 className="font-semibold text-nmb-blue">Quality Assurance</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    ISO certified processes ensuring the highest standards in every project.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nmb-blue/10">
                      <span className="text-nmb-blue font-bold">02</span>
                    </div>
                    <h4 className="font-semibold text-nmb-blue">Expert Team</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Skilled engineers and technicians with decades of industry experience.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nmb-blue/10">
                      <span className="text-nmb-blue font-bold">03</span>
                    </div>
                    <h4 className="font-semibold text-nmb-blue">Advanced Equipment</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    State-of-the-art machinery for precision fabrication and efficiency.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nmb-blue/10">
                      <span className="text-nmb-blue font-bold">04</span>
                    </div>
                    <h4 className="font-semibold text-nmb-blue">Timely Delivery</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Commitment to meeting deadlines without compromising on quality.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-nmb-blue hover:bg-nmb-darkblue text-white group">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <div className="absolute inset-0 z-10">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/images/why-choose-us.jpeg"
                      alt="Steel fabrication workshop"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-16">
          <Link href="/services">
            <Button className="bg-nmb-blue hover:bg-nmb-darkblue text-white group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

