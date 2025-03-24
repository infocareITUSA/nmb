import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-nmb-darkblue to-[#072a47] text-white">
      {/* Main footer content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-lg inline-block">
                <div className="relative h-10 w-28">
                  <Image src="/images/nmb-logo.jpeg" alt="Negem Metal Buildings Logo" fill className="object-contain" />
                </div>
              </div>
            </div>
            <p className="text-xs text-white/80 max-w-xs">
              Leading steel fabrication company serving Qatar and the MENA region since 1978, delivering excellence in
              structural steel solutions.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-3.5 w-3.5 text-white" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-3.5 w-3.5 text-white" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-3.5 w-3.5 text-white" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-white" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-nmb-gold"></span>
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-nmb-gold"></span>
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Structural Steel Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Secondary Steelworks
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Architectural Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-white/80 hover:text-white flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-nmb-gold mr-2 group-hover:w-2.5 transition-all"></span>
                  Installation & Erection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-nmb-gold"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-nmb-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium mb-1">Headquarters</p>
                  <p className="text-white/70 text-xs">
                    Building No.267, Street No:8
                    <br />
                    New Industrial Area
                    <br />
                    P.O Box: 16230, Doha, Qatar
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-nmb-gold shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium mb-1">Phone</p>
                  <p className="text-white/70 text-xs">+974 5589 4464, 44989908</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-nmb-gold shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium mb-1">Email</p>
                  <p className="text-white/70 text-xs">info@negemco.com</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-nmb-gold shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium mb-1">Working Hours</p>
                  <p className="text-white/70 text-xs">Mon-Thu: 8AM-5PM | Fri: 8AM-12PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} Negem Metal Buildings Factory. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy-policy" className="text-xs text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms-of-service" className="text-xs text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

