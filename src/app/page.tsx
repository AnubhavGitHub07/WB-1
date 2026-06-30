import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import CraftsmanshipProcess from "@/components/sections/CraftsmanshipProcess";
import HomeGallery from "@/components/sections/HomeGallery";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Philosophy />
      <CraftsmanshipProcess />
      <HomeGallery />
      <ContactCTA />
    </div>
  );
}
