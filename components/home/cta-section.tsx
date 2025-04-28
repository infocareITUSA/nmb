import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowUpRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background with simple gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nmb-blue to-nmb-darkblue">
        <div className="absolute top-0 left-0 right-0 h-1 bg-nmb-gold"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-nmb-gold"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-nmb-gold mr-2"></span>
              Let's Work Together
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Your <span className="text-nmb-gold">Steel Fabrication</span> Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl">
              Our team of experts is ready to help you bring your vision to life with precision engineering and quality
              craftsmanship. Contact us today for a consultation and free quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call us directly</p>
                  <p className="text-white font-medium">+974 5589 4464</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email us at</p>
                  <p className="text-white font-medium">info@nmb.qa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - CTA card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-nmb-lightgold/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-nmb-blue/10 rounded-full blur-xl"></div>

              <h3 className="text-2xl font-bold text-nmb-blue mb-4 relative z-10">Get Started Today</h3>
              <p className="text-gray-600 mb-6 relative z-10">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-4 relative z-10">
                <Link href="/contact" className="block w-full">
                  <Button className="w-full bg-nmb-blue hover:bg-nmb-darkblue text-white py-6 text-lg group">
                    Contact Our Team
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/services" className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full border-nmb-blue/20 text-nmb-blue hover:bg-nmb-blue/5 py-6 text-lg"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center text-gray-500 text-sm relative z-10">
                Fast response guaranteed. No obligation quote.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

