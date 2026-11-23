import Categories from "@/components/categories";
import FeaturedServices from "@/components/featured-services";
import Hero from "@/components/hero";
import OfferBanner from "@/components/offer-banner";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedServices />
        <Categories />
        <OfferBanner />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
