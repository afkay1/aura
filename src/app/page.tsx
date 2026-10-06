import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Accessories from "@/components/Accessories";
import StoryFaq from "@/components/StoryFaq";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Gallery />
        <Accessories />
        <StoryFaq />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
