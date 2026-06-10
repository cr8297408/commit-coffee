import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import WhyCommit from "@/components/WhyCommit";
import Story from "@/components/Story";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Product />
      <WhyCommit />
      <Story />
      <Community />
      <Testimonials />
      <Footer />
    </main>
  );
}
