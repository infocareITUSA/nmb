"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Function to check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4",
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-32 sm:w-40">
            <Image
              src="/images/nmb-logo.jpeg"
              alt="Negem Metal Buildings Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link key={item.name} href={item.href} className="relative px-4 py-2 text-sm font-medium group">
                <span
                  className={cn(
                    "transition-colors duration-200",
                    active ? "text-nmb-blue" : "text-gray-700 group-hover:text-nmb-blue",
                  )}
                >
                  {item.name}
                </span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-nmb-blue transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            )
          })}
          <div className="ml-4">
            <Link href="/contact">
              <Button className="bg-nmb-blue hover:bg-nmb-darkblue text-white">Get a Quote</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Menu" className="text-nmb-blue">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="relative h-10 w-28">
                    <Image
                      src="/images/nmb-logo.jpeg"
                      alt="Negem Metal Buildings Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-500 hover:text-nmb-blue"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 overflow-auto py-6 px-4">
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      const active = isActive(item.href)
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "flex items-center py-3 px-4 rounded-md transition-colors",
                            active
                              ? "bg-nmb-blue/10 text-nmb-blue font-medium"
                              : "text-gray-700 hover:text-nmb-blue hover:bg-nmb-blue/5",
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {active && <Circle className="h-2 w-2 mr-2 fill-nmb-blue text-nmb-blue" />}
                          {item.name}
                        </Link>
                      )
                    })}
                  </nav>

                  {/* Quick Contact in Mobile Menu */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Contact</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-nmb-blue/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-nmb-blue" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Call us directly</p>
                          <p className="text-sm font-medium text-nmb-blue">+974 5589 4464</p>
                        </div>
                      </div>
                      <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full bg-nmb-blue hover:bg-nmb-darkblue text-white">Get a Quote</Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <Link
                        href="#"
                        className="h-8 w-8 rounded-full bg-nmb-blue/10 flex items-center justify-center hover:bg-nmb-blue/20 transition-colors"
                      >
                        <svg
                          className="h-4 w-4 text-nmb-blue"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="h-8 w-8 rounded-full bg-nmb-blue/10 flex items-center justify-center hover:bg-nmb-blue/20 transition-colors"
                      >
                        <svg
                          className="h-4 w-4 text-nmb-blue"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="h-8 w-8 rounded-full bg-nmb-blue/10 flex items-center justify-center hover:bg-nmb-blue/20 transition-colors"
                      >
                        <svg
                          className="h-4 w-4 text-nmb-blue"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="text-xs text-gray-500">© {new Date().getFullYear()} NMB</div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

