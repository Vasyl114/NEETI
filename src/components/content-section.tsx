interface ContentSectionProps {
  title?: string;
  content?: string;
  imageUrl?: string;
  reverse?: boolean;
}

export default function ContentSection({ 
  title = "Section Title",
  content = "Add your content here. This is a placeholder text that demonstrates how your content will appear in this section.",
  imageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  reverse = false
}: ContentSectionProps) {
  return (
    <section 
      className="py-20 px-4"
      style={{ backgroundColor: '#000000' }}
    >
      <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ 
              color: 'var(--starlight)',
              textShadow: '0 0 20px var(--digital-cyan)',
            }}
          >
            {title}
          </h2>
          
          <p 
            className="text-lg leading-relaxed"
            style={{ color: 'var(--tungsten-steel)' }}
          >
            {content}
          </p>

          <button
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_var(--digital-cyan)]"
            style={{
              backgroundColor: 'var(--plasma-magenta)',
              color: 'var(--starlight)',
            }}
          >
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <div 
            className="rounded-2xl overflow-hidden"
            style={{
              border: '2px solid var(--digital-cyan)',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
            }}
          >
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}