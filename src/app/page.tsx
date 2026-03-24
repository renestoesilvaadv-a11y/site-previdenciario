import { Header } from '@/components/layout/header'
import { HeroSection } from '@/components/sections/hero-section'
import { AuthoritySection } from '@/components/sections/authority-section'
import { CalculatorHighlight } from '@/components/sections/calculator-highlight'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { DifferentialsSection } from '@/components/sections/differentials-section'
import { FaqSection } from '@/components/sections/faq-section'
import { HomeContactSection } from '@/components/sections/home-contact-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AuthoritySection />
      <CalculatorHighlight />
      <HowItWorksSection />
      <DifferentialsSection />
      <FaqSection />
      <HomeContactSection />
    </>
  )
}