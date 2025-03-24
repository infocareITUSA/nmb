"use client"

import { ContactHeroSection } from "@/components/contact/hero-section"
import { ContactForm } from "@/components/contact/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHeroSection />
      <ContactForm />
    </div>
  )
}

