import Image from "next/image"
import { Award, Clock, Users } from "lucide-react"

export function AboutHeroSection() {
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
              Our Story
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-nmb-gold">Negem Metal</span> Buildings Factory
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-2xl">
              A trusted leader in steel fabrication with over 40 years of industry experience, delivering excellence
              across the MENA region.
            </p>

            {/* Company highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Excellence</h3>
                </div>
                <p className="text-white/70 text-sm">Committed to the highest standards of quality in every project</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <p className="text-white/70 text-sm">Decades of expertise in steel fabrication and engineering</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Team</h3>
                </div>
                <p className="text-white/70 text-sm">Skilled professionals dedicated to bringing your vision to life</p>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="hidden lg:block relative">
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 z-10">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/service2-old.jpg"
                    alt="Negem Metal Buildings Factory"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-3/5 z-0">
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/service3-old.jpg"
                    alt="Steel fabrication team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">1978</div>
            <div className="text-white/70 text-sm">Year Established</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">2019</div>
            <div className="text-white/70 text-sm">Qatar Branch Opened</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">100+</div>
            <div className="text-white/70 text-sm">Team Members</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-nmb-gold mb-1">5+</div>
            <div className="text-white/70 text-sm">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}

