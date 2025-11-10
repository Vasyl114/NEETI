import SpaceNavigation from '@/components/space-navigation';
import SpaceHero from '@/components/space-hero';
import ContentSection from '@/components/content-section';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SpaceNavigation />
      <SpaceHero />
      
      <ContentSection 
        title="Innovation Hub"
        content="Discover cutting-edge projects and ideas created by students, for students. Our platform connects creative minds and fosters collaboration across disciplines."
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
      />
      
      <ContentSection 
        title="Collaborative Learning"
        content="Join a community of passionate learners sharing knowledge and building together. From coding to design, find resources and mentorship to accelerate your growth."
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
        reverse
      />
      
      <ContentSection 
        title="Future Ready"
        content="Prepare for tomorrow's challenges with hands-on experience and real-world projects. Build your portfolio while making meaningful connections with peers worldwide."
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
      />
    </div>
  );
}