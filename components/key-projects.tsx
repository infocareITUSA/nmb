import Image from "next/image"
import { Truck, Ruler, HardHat, Building2, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function KeyProjects() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium">
            Our Portfolio
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-nmb-blue">Key Projects</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
              NMB takes pride in delivering complex projects that meet the highest standards of quality, safety, and
              engineering excellence.
            </p>
          </div>
        </div>

        {/* Featured Projects - Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Project 1 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tariq Terminal Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-nmb-blue text-white text-xs font-medium px-2 py-1 rounded">
                Completed 2021
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-nmb-blue mb-2">Tariq Terminal Project</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Designed and erected 16 buildings and 13 conveyors for a phosphoric acid plant, ensuring precision
                    and adherence to safety standards.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nmb-lightgold/30">
                    <Truck className="h-6 w-6 text-nmb-blue" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Industrial
                </span>
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Structural Steel
                </span>
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Conveyors
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Well Jacket Offshore Platform"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-nmb-blue text-white text-xs font-medium px-2 py-1 rounded">
                Completed 2022
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-nmb-blue mb-2">Well Jacket Offshore Platform</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Fabricated and erected advanced steel structures for offshore platforms, designed to withstand
                    extreme marine conditions.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nmb-lightgold/30">
                    <Ruler className="h-6 w-6 text-nmb-blue" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Offshore
                </span>
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Oil & Gas
                </span>
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">Marine</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Pedestrian Bridges"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-nmb-blue text-white text-xs font-medium px-2 py-1 rounded">
                Completed 2017
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-nmb-blue mb-2">Pedestrian Bridges (Qatar)</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Engineered and erected architectural bridges with robust steel frameworks, combining aesthetics with
                    structural integrity.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nmb-lightgold/30">
                    <HardHat className="h-6 w-6 text-nmb-blue" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Infrastructure
                </span>
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Architectural
                </span>
                <span className="inline-block bg-nmb-blue/5 px-2 py-1 rounded-full text-nmb-blue text-xs">
                  Public Works
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects - Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Project 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/3 h-48 md:h-auto">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="IPP4 Amman Storage Tanks"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-nmb-lightgold/30">
                  <Building2 className="h-5 w-5 text-nmb-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-nmb-blue">IPP4 Amman Storage Tanks</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Supplied and erected 19 tanks and 4 stacks for a power plant, featuring innovative designs and
                    rigorous quality control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/3 h-48 md:h-auto">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Qatrana Cement Factory"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-nmb-lightgold/30">
                  <Wrench className="h-5 w-5 text-nmb-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-nmb-blue">Qatrana Cement Factory</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Delivered 16,000 MT of steel structures for cement production facilities, including storage tanks
                    and multi-story buildings (2008-2011).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-8">
          <Link href="/projects">
            <Button className="bg-nmb-blue hover:bg-nmb-darkblue text-white group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

