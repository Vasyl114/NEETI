import SpaceNavigation from "@/components/space-navigation";
import SpaceHero from "@/components/space-hero";
import ContentSection from "@/components/content-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SpaceNavigation />
      <SpaceHero />

      <ContentSection
        title="About Us"
        content="Our team is powered by student volunteers dedicated to enhancing the IST community. We create and manage engaging events and activities that foster connection, learning, and growth."
        imageUrl="/team2526.jpg"
      />

      <ContentSection
        title="Telecommunications and Informatics Engineering Outreach"
        content="Every year, we work to bring our Bachelor's and Master's degree programs to more and more students across the country, by visiting schools and participation in events such as Futurália."
        imageUrl="/polo-tagus.jpg"
        reverse
      />

      <ContentSection
        title="SHELF - Our repository"
        content="We provide students with the study materials they need to succeed academically and prepare for their future careers."
        imageUrl="/telecom.jpg"
      />

      <Footer />
    </div>
  );
}
