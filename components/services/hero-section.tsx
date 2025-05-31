import Image from "next/image"
import { Shield, Wrench, Building2 } from "lucide-react"

export function ServicesHeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background with gradient and pattern */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-nmb-gold mr-2"></span>
              Our Expertise
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive <span className="text-nmb-gold">Steel Fabrication</span> Solutions
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-2xl">
              From structural steel to architectural works, we deliver precision-engineered solutions tailored to your
              specific project requirements.
            </p>

            {/* Service highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Structural Steel</h3>
                </div>
                <p className="text-white/70 text-sm">Robust frameworks for industrial and commercial buildings</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Secondary Works</h3>
                </div>
                <p className="text-white/70 text-sm">Precision components for industrial applications</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Architectural</h3>
                </div>
                <p className="text-white/70 text-sm">Custom metal fabrication with aesthetic excellence</p>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="hidden lg:block relative">
            <div className="relative h-[500px] w-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/service3.jpg"
                  alt="Steel fabrication workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">40+</div>
            <div className="text-white/70 text-sm">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">500+</div>
            <div className="text-white/70 text-sm">Projects Completed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">50+</div>
            <div className="text-white/70 text-sm">Expert Engineers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">5</div>
            <div className="text-white/70 text-sm">International Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}

