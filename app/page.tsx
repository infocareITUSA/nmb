import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { LeadershipMessages } from "@/components/home/leadership-messages"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <LeadershipMessages />
      <CtaSection />
    </div>
  )
}

