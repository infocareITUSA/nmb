import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-nmb-blue to-nmb-darkblue">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-nmb-gold"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-2 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-nmb-gold mr-2"></span>
              Leading Steel Fabrication Since 1978
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                Engineering <span className="text-nmb-gold">Excellence</span> in Steel
              </h1>
              <p className="mx-auto lg:mx-0 text-white/80 text-lg md:text-xl max-w-[700px]">
                Precision steel fabrication solutions for oil & gas, petrochemical, and construction industries across
                Qatar and the MENA region.
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-2 text-white/90 mx-auto lg:mx-0 max-w-md">
                <CheckCircle className="h-5 w-5 text-nmb-gold flex-shrink-0" />
                <p className="text-sm md:text-base">ISO 9001, 14001 & 45001 Certified Company</p>
              </div>
              <div className="flex items-center gap-2 text-white/90 mx-auto lg:mx-0 max-w-md">
                <CheckCircle className="h-5 w-5 text-nmb-gold flex-shrink-0" />
                <p className="text-sm md:text-base">40+ Years of Industry Experience</p>
              </div>
              <div className="flex items-center gap-2 text-white/90 mx-auto lg:mx-0 max-w-md">
                <CheckCircle className="h-5 w-5 text-nmb-gold flex-shrink-0" />
                <p className="text-sm md:text-base">Comprehensive End-to-End Solutions</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <Link href="/services">
                <Button className="bg-white text-nmb-blue hover:bg-nmb-lightgold w-full sm:w-auto text-base group">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-nmb-gold text-white hover:bg-nmb-darkgold w-full sm:w-auto text-base">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Right content - Image with floating elements */}
          <div className="relative mx-auto lg:ml-auto">
            <div className="relative z-10">
              <div className="bg-white p-3 rounded-xl shadow-xl">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Steel fabrication workshop"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-nmb-blue/10 flex items-center justify-center">
                    <span className="text-nmb-blue font-bold">40+</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Years of</p>
                    <p className="text-sm font-semibold text-nmb-blue">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-nmb-gold/10 flex items-center justify-center">
                    <span className="text-nmb-gold font-bold">500+</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Projects</p>
                    <p className="text-sm font-semibold text-nmb-blue">Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nmb-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-nmb-blue/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

