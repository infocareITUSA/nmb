import { FileCheck, HardHat, Leaf, Shield } from "lucide-react"

export function Certifications() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-nmb-lightgold/40 to-nmb-gold/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-nmb-blue">Our Certifications</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Internationally recognized certifications that underline our commitment to quality, safety, and
              environmental sustainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ISO 9001 */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-nmb-blue/10">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-nmb-lightgold/30 opacity-90 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md">
                  <FileCheck className="h-8 w-8 text-nmb-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-nmb-blue">ISO 9001:2015</h3>
                  <p className="text-gray-600">
                    Quality Management Systems certification that demonstrates our commitment to consistently providing
                    products and services that meet customer and regulatory requirements.
                  </p>
                  <div className="flex items-center text-sm text-nmb-blue">
                    <span className="font-semibold">Benefits:</span>
                    <ul className="ml-2 flex flex-wrap gap-2">
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Enhanced Quality</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Customer Satisfaction</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Process Efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ISO 45001 */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-nmb-blue/10">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-nmb-lightgold/30 opacity-90 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md">
                  <HardHat className="h-8 w-8 text-nmb-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-nmb-blue">ISO 45001:2018</h3>
                  <p className="text-gray-600">
                    Occupational Health and Safety Management certification that helps us minimize workplace hazards and
                    create better, safer working conditions.
                  </p>
                  <div className="flex items-center text-sm text-nmb-blue">
                    <span className="font-semibold">Benefits:</span>
                    <ul className="ml-2 flex flex-wrap gap-2">
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Reduced Risks</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Legal Compliance</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Employee Protection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ISO 14001 */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-nmb-blue/10">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-nmb-lightgold/30 opacity-90 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md">
                  <Leaf className="h-8 w-8 text-nmb-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-nmb-blue">ISO 14001:2015</h3>
                  <p className="text-gray-600">
                    Environmental Management certification that demonstrates our commitment to minimizing environmental
                    impact and adhering to sustainable practices.
                  </p>
                  <div className="flex items-center text-sm text-nmb-blue">
                    <span className="font-semibold">Benefits:</span>
                    <ul className="ml-2 flex flex-wrap gap-2">
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Sustainability</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Resource Efficiency</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Waste Reduction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ASME Certifications */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-nmb-blue/10">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-nmb-lightgold/30 opacity-90 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md">
                  <Shield className="h-8 w-8 text-nmb-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-nmb-blue">ASME Certifications</h3>
                  <p className="text-gray-600">
                    American Society of Mechanical Engineers certifications including 'U', 'S', and 'R' stamps,
                    validating our capability to design and fabricate pressure vessels to international standards.
                  </p>
                  <div className="flex items-center text-sm text-nmb-blue">
                    <span className="font-semibold">Benefits:</span>
                    <ul className="ml-2 flex flex-wrap gap-2">
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Global Recognition</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Technical Excellence</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Safety Assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ICV Certification */}
          <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-nmb-blue/10 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-nmb-lightgold/30 opacity-90 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="relative z-10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-md">
                  <Shield className="h-8 w-8 text-nmb-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-nmb-blue">ICV Certification</h3>
                  <p className="text-gray-600">
                    In-Country Value certification for Negem Metal Buildings Factory Qatar, demonstrating our
                    contribution to the local economy and commitment to Qatar's development goals.
                  </p>
                  <div className="flex items-center text-sm text-nmb-blue">
                    <span className="font-semibold">Benefits:</span>
                    <ul className="ml-2 flex flex-wrap gap-2">
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Local Development</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Economic Growth</li>
                      <li className="bg-white/50 px-2 py-1 rounded-full text-xs">Competitive Advantage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our certifications are regularly audited and renewed to ensure we maintain the highest standards in quality,
            safety, and environmental responsibility across all our operations.
          </p>
        </div>
      </div>
    </section>
  )
}

