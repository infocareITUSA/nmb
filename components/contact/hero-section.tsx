import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactHeroSection() {
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-nmb-gold mr-2"></span>
            Get In Touch
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Contact <span className="text-nmb-gold">Our Team</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We're here to answer your questions and discuss your steel fabrication needs. Reach out to us through any of
            the channels below.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Headquarters</h3>
                <p className="text-white/70 text-sm">
                  Building No.267, Street No:8
                  <br />
                  New Industrial Area
                  <br />
                  P.O Box: 16230, Doha, Qatar
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Factory/Warehouse</h3>
                <p className="text-white/70 text-sm">
                  Negem Metal Buildings Factory
                  <br />
                  Building No.26, Street No.3120
                  <br />
                  Zone No.91, Birkat Al Awamer
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Phone & Fax</h3>
                <p className="text-white/70 text-sm">
                  Phone: +974 5589 4464
                  <br />
                  Office: +974 44989908
                  <br />
                  Fax: +974 44113925
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-white/70 text-sm">
                  Monday - Thursday: 8:00 AM - 5:00 PM
                  <br />
                  Friday: 8:00 AM - 12:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Card - Centered and Prominent */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-white/70 text-sm mb-2">For inquiries and quotes:</p>
                <p className="text-white font-medium text-lg">info@negemco.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

