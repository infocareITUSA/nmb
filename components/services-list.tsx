import { Building2, Wrench, Shield, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServicesList() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium">
            Our Capabilities
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-nmb-blue">
              Comprehensive Steel Fabrication Services
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
              We provide end-to-end solutions for all your steel fabrication needs, from design and engineering to
              fabrication and installation.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          {/* Structural Steel Solutions */}
          <div className="relative bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="absolute top-0 left-0 w-1 h-full bg-nmb-blue"></div>
            <div className="grid md:grid-cols-5 gap-6 p-8">
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-nmb-blue/10 mb-6">
                  <Building2 className="h-8 w-8 text-nmb-blue" />
                </div>
                <h3 className="text-2xl font-bold text-nmb-blue mb-4">Structural Steel Solutions</h3>
                <p className="text-gray-600 mb-6">
                  We specialize in fabricating structural steel components for commercial, industrial, and
                  infrastructure projects. Our team has extensive experience in creating beams, columns, trusses, and
                  other structural elements to precise specifications.
                </p>
                <Link
                  href="/services/structural-steel"
                  className="inline-flex items-center text-nmb-blue font-medium hover:text-nmb-darkblue group"
                >
                  Learn more about structural steel
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="md:col-span-3">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <h4 className="text-lg font-semibold text-nmb-blue mb-4">Our Structural Steel Offerings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Hot-rolled steel structures</h5>
                          <p className="text-sm text-gray-600">Durable frameworks for industrial buildings</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Pre-engineered building systems</h5>
                          <p className="text-sm text-gray-600">Cost-effective solutions for rapid construction</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Plate works</h5>
                          <p className="text-sm text-gray-600">Storage tanks, pressure vessels, and silos</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Piping systems</h5>
                          <p className="text-sm text-gray-600">Custom piping for industrial applications</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-nmb-blue mb-3">Industries We Serve</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Oil & Gas
                      </span>
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Petrochemical
                      </span>
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Construction
                      </span>
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Infrastructure
                      </span>
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Manufacturing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Steelworks */}
          <div className="relative bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="absolute top-0 left-0 w-1 h-full bg-nmb-gold"></div>
            <div className="grid md:grid-cols-5 gap-6 p-8">
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-nmb-gold/10 mb-6">
                  <Wrench className="h-8 w-8 text-nmb-gold" />
                </div>
                <h3 className="text-2xl font-bold text-nmb-blue mb-4">Secondary Steelworks</h3>
                <p className="text-gray-600 mb-6">
                  We fabricate precision secondary steel components for various industrial applications. Our advanced
                  machinery and skilled technicians ensure high-quality results for even the most complex parts.
                </p>
                <Link
                  href="/services/secondary-steelworks"
                  className="inline-flex items-center text-nmb-blue font-medium hover:text-nmb-darkblue group"
                >
                  Learn more about secondary steelworks
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="md:col-span-3">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <h4 className="text-lg font-semibold text-nmb-blue mb-4">Our Secondary Steel Offerings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-gold/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-gold" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Claddings and platforms</h5>
                          <p className="text-sm text-gray-600">Protective and functional industrial elements</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-gold/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-gold" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Canopies</h5>
                          <p className="text-sm text-gray-600">Protective coverings for various applications</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-gold/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-gold" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Staircases and ladders</h5>
                          <p className="text-sm text-gray-600">Safe access solutions for industrial settings</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-gold/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-gold" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Catwalks</h5>
                          <p className="text-sm text-gray-600">Elevated walkways for maintenance access</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-nmb-blue mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-nmb-gold/5 px-3 py-1 rounded-full text-nmb-gold text-xs">
                        Industrial Facilities
                      </span>
                      <span className="inline-block bg-nmb-gold/5 px-3 py-1 rounded-full text-nmb-gold text-xs">
                        Manufacturing Plants
                      </span>
                      <span className="inline-block bg-nmb-gold/5 px-3 py-1 rounded-full text-nmb-gold text-xs">
                        Warehouses
                      </span>
                      <span className="inline-block bg-nmb-gold/5 px-3 py-1 rounded-full text-nmb-gold text-xs">
                        Commercial Buildings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Works */}
          <div className="relative bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="absolute top-0 left-0 w-1 h-full bg-nmb-blue"></div>
            <div className="grid md:grid-cols-5 gap-6 p-8">
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-nmb-blue/10 mb-6">
                  <Shield className="h-8 w-8 text-nmb-blue" />
                </div>
                <h3 className="text-2xl font-bold text-nmb-blue mb-4">Architectural and Miscellaneous Works</h3>
                <p className="text-gray-600 mb-6">
                  We work closely with clients to develop tailored architectural steel solutions that meet specific
                  requirements. Our design team can help transform your concepts into reality with precision and
                  expertise.
                </p>
                <Link
                  href="/services/architectural-works"
                  className="inline-flex items-center text-nmb-blue font-medium hover:text-nmb-darkblue group"
                >
                  Learn more about architectural works
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="md:col-span-3">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <h4 className="text-lg font-semibold text-nmb-blue mb-4">Our Architectural Offerings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Custom metal fabrication</h5>
                          <p className="text-sm text-gray-600">Bespoke metal elements for unique projects</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Architectural steel elements</h5>
                          <p className="text-sm text-gray-600">Decorative and functional building components</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Commercial applications</h5>
                          <p className="text-sm text-gray-600">Steel solutions for retail and office spaces</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                          <Check className="h-3.5 w-3.5 text-nmb-blue" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Industrial applications</h5>
                          <p className="text-sm text-gray-600">Specialized components for industrial settings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-nmb-blue mb-3">Design Capabilities</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        3D Modeling
                      </span>
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Custom Design
                      </span>
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Structural Analysis
                      </span>
                      <span className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-xs">
                        Prototype Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-nmb-blue mb-4">Additional Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide a range of complementary services to ensure your project's success
              from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-nmb-blue mb-3">Engineering & Design</h4>
              <p className="text-gray-600 text-sm mb-4">
                Our engineering team provides comprehensive design services, from concept development to detailed
                fabrication drawings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Structural analysis and calculations</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>3D modeling and visualization</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Shop drawings and fabrication plans</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-nmb-blue mb-3">Installation & Erection</h4>
              <p className="text-gray-600 text-sm mb-4">
                Our experienced installation teams ensure your steel structures are erected safely, efficiently, and to
                specification.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Professional installation crews</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Adherence to safety standards</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Quality control and inspection</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-nmb-blue mb-3">Surface Treatment</h4>
              <p className="text-gray-600 text-sm mb-4">
                We offer comprehensive surface preparation and finishing services to protect your steel structures and
                enhance their appearance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Shot blasting and surface preparation</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Painting and powder coating</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-nmb-blue mr-2 flex-shrink-0" />
                  <span>Galvanizing and specialized coatings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link href="/contact">
            <Button className="bg-nmb-blue hover:bg-nmb-darkblue text-white group">
              Request a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

