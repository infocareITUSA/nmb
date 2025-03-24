import { Award, Clock, Target, Shield, Check } from "lucide-react"

export function Policies() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium">
            Our Principles
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-nmb-blue">Company Policies</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
              The principles that guide our work and relationships with clients, ensuring excellence in everything we
              do.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Quality Policy */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nmb-blue/10 group-hover:bg-nmb-blue/20 transition-colors duration-300">
                  <Award className="h-8 w-8 text-nmb-blue" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 group-hover:bg-nmb-blue/5 transition-colors duration-300">
                  <Shield className="h-5 w-5 text-nmb-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-nmb-blue mb-4">Quality Policy</h3>
              <p className="text-gray-600 mb-6">
                NMB strives for total customer satisfaction by delivering services that meet international quality
                standards, actively involving employees in quality initiatives, and maintaining an ISO 9001-compliant
                Quality Management System.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-blue" />
                  </div>
                  <p className="text-gray-600 text-sm">ISO 9001:2015 certified processes</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-blue" />
                  </div>
                  <p className="text-gray-600 text-sm">Continuous improvement methodology</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-blue" />
                  </div>
                  <p className="text-gray-600 text-sm">Regular quality audits and reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Policy */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nmb-gold/10 group-hover:bg-nmb-gold/20 transition-colors duration-300">
                  <Clock className="h-8 w-8 text-nmb-gold" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 group-hover:bg-nmb-gold/5 transition-colors duration-300">
                  <Shield className="h-5 w-5 text-nmb-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-nmb-blue mb-4">Security Policy</h3>
              <p className="text-gray-600 mb-6">
                We prioritize the confidentiality, integrity, and availability of company assets. By complying with
                Qatar's legal framework and adopting risk management protocols, we safeguard physical and digital
                resources.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-gold/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-gold" />
                  </div>
                  <p className="text-gray-600 text-sm">Comprehensive risk assessment</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-gold/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-gold" />
                  </div>
                  <p className="text-gray-600 text-sm">Secure data management protocols</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-gold/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-gold" />
                  </div>
                  <p className="text-gray-600 text-sm">Regular security training for staff</p>
                </div>
              </div>
            </div>
          </div>

          {/* HSE Policy */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-nmb-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nmb-blue/10 group-hover:bg-nmb-blue/20 transition-colors duration-300">
                  <Target className="h-8 w-8 text-nmb-blue" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 group-hover:bg-nmb-blue/5 transition-colors duration-300">
                  <Shield className="h-5 w-5 text-nmb-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-nmb-blue mb-4">HSE Policy</h3>
              <p className="text-gray-600 mb-6">
                Our HSE policy focuses on creating a safe working environment, adhering to international standards, and
                addressing community concerns to minimize risks and ensure sustainability.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-blue" />
                  </div>
                  <p className="text-gray-600 text-sm">ISO 45001:2018 certified safety systems</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-blue" />
                  </div>
                  <p className="text-gray-600 text-sm">Environmental sustainability practices</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nmb-blue/10 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-nmb-blue" />
                  </div>
                  <p className="text-gray-600 text-sm">Regular safety training and drills</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Statement */}
        <div className="mt-16 bg-nmb-blue/5 rounded-xl p-8 border border-nmb-blue/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                <Shield className="h-10 w-10 text-nmb-blue" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-nmb-blue mb-2">Our Commitment to Excellence</h3>
              <p className="text-gray-600">
                At Negem Metal Buildings Factory, our policies are more than just documents—they're the foundation of
                our operations. We regularly review and update our policies to ensure they reflect the latest industry
                standards and best practices. Our management team is committed to implementing these policies at every
                level of our organization, creating a culture of quality, safety, and integrity that benefits our
                clients, employees, and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

