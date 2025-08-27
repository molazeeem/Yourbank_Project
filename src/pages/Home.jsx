import HomeHero from "../components/homeHero/HomeHero"
import OurProduct from "../components/ProductsSection/ProductsSection"
import UseCase from "../components/UseCaseSection/UseCaseSection"
import Features from "../components/Featured/Featured"
import OurTestimonials from "../components/OurTestimonialsSection/OurTestimonialsSection"
import FAQ from "../components/AA_FAQ_Display/AA_FAQ_Display"
import FooterTitleHome from "../components/FooterTitleHome/FooterTitleHome"
export default function Home() {
  return (
    <div>
      <HomeHero />
      <OurProduct />
      <UseCase />
      <Features />
      <FAQ />
      <OurTestimonials />
      <FooterTitleHome />
    </div>
  );
}
