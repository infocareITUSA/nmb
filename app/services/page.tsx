import { ServicesHeroSection } from "@/components/services/hero-section"
import { ServicesList } from "@/components/services/services-list"
import { KeyProjects } from "@/components/services/key-projects"
import { ServicesCta } from "@/components/services/services-cta"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHeroSection />
      <ServicesList />
      <KeyProjects />
      <ServicesCta />
    </div>
  )
}

