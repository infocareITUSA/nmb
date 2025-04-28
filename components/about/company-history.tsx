import Image from "next/image"

export function CompanyHistory() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block bg-nmb-blue/5 px-3 py-1 rounded-full text-nmb-blue text-sm font-medium">
            Our History
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-nmb-blue">Our Company Journey</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
              From our founding to the present day, we've maintained a commitment to quality and excellence in steel
              fabrication.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-nmb-blue mb-4">Our Founding</h3>
                <p className="text-gray-600">
                  Established in 1978, Negem Co For Engineering & Contracting began as a humble factory specializing in
                  structural steel. Over decades, it has evolved into a leading steel fabrication company, expanding
                  operations to a state-of-the-art facility in 1996.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-nmb-blue mb-4">Regional Growth</h3>
                <p className="text-gray-600">
                  Today, Negemco serves a diverse clientele across Jordan and the MENA region, with expertise in
                  designing, manufacturing, and erecting steel structures for various industries, including oil and gas,
                  petrochemical, and construction.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-nmb-blue mb-4">Qatar Expansion</h3>
                <p className="text-gray-600">
                  After successfully running the business in Jordan, we have started our branch in Qatar on 14/04/2019.
                  We have successfully operated and completed many projects across Qatar.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl">
              <Image src="/images/qatar.jpg" alt="Company workshop" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Established</p>
                      <p className="text-xl font-bold text-nmb-blue">1978</p>
                    </div>
                    <div className="h-10 w-px bg-gray-200"></div>
                    <div>
                      <p className="text-sm text-gray-500">Qatar Branch</p>
                      <p className="text-xl font-bold text-nmb-blue">2019</p>
                    </div>
                    <div className="h-10 w-px bg-gray-200"></div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="text-xl font-bold text-nmb-blue">40+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/service3-old.jpg"
                  alt="Historical company photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/service1.jpg"
                  alt="Modern facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Present Day - Simple Version */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-nmb-blue/10">
                <span className="text-3xl font-bold text-nmb-blue">Now</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-nmb-blue mb-4">Our Commitment Today</h3>
              <p className="text-gray-600">
                Our commitment to quality, safety, and customer satisfaction remains at the core of everything we do.
                With operations in both Jordan and Qatar, we continue to serve the MENA region with excellence in steel
                fabrication, bringing decades of expertise to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

