import { Cog, Zap, Hammer, SprayCanIcon as Spray } from "lucide-react"

export function Equipment() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-nmb-blue to-nmb-darkblue text-white">
      {/* Golden bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-nmb-gold"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">State-of-the-Art Equipment</h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our operations are powered by advanced machinery, ensuring precision and efficiency in every project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CNC Machinery */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-nmb-gold/20 border border-white/10 hover:border-nmb-gold/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-nmb-gold/20 rounded-full group-hover:bg-nmb-gold/30 transition-colors duration-300">
                <Cog className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">CNC Machinery</h3>
              <p className="text-white/80">
                Our CNC drilling and plasma cutting machines deliver precision fabrication with computer-controlled
                accuracy for complex steel components.
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-nmb-gold/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Hydraulic Systems */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-nmb-gold/20 border border-white/10 hover:border-nmb-gold/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-nmb-gold/20 rounded-full group-hover:bg-nmb-gold/30 transition-colors duration-300">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Hydraulic Systems</h3>
              <p className="text-white/80">
                Our hydraulic press brakes and shears enable precise metal forming and cutting, handling materials up to
                25mm thickness with exceptional accuracy.
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-nmb-gold/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Welding Technology */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-nmb-gold/20 border border-white/10 hover:border-nmb-gold/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-nmb-gold/20 rounded-full group-hover:bg-nmb-gold/30 transition-colors duration-300">
                <Hammer className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Welding Technology</h3>
              <p className="text-white/80">
                Our advanced submerged arc welding machines and MIG/TIG welders create high-quality, durable joints that
                meet international standards.
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-nmb-gold/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Surface Treatment */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-nmb-gold/20 border border-white/10 hover:border-nmb-gold/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-nmb-gold/20 rounded-full group-hover:bg-nmb-gold/30 transition-colors duration-300">
                <Spray className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">Surface Treatment</h3>
              <p className="text-white/80">
                Our shot blasting systems and painting facilities ensure superior surface preparation and finishing for
                maximum durability and corrosion resistance.
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-nmb-gold/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/80 max-w-3xl mx-auto">
            Our equipment is regularly maintained and upgraded to ensure we stay at the forefront of steel fabrication
            technology, allowing us to handle projects of any scale with precision and efficiency.
          </p>
        </div>
      </div>
    </section>
  )
}

