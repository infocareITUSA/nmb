import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanyHistory } from "@/components/about/company-history"
import { Certifications } from "@/components/about/certifications"
import { Policies } from "@/components/about/policies"
import { Equipment } from "@/components/about/equipment"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHeroSection />
      <CompanyHistory />
      <Certifications />
      <Policies />
      <Equipment />
    </div>
  )
}

