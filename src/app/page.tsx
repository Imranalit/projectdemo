import CampusShowcase from "@/components/CampusShowcase";

const CAMPUSES = [
  {
    id: "north",
    name: "North Campus",
    description: "Our flagship technology and science center, featuring state-of-the-art laboratories, robotics facilities, and the grand observatory.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "south",
    name: "South Campus",
    description: "The heart of arts and humanities. A beautifully designed campus housing the conservatory, art galleries, and the main auditorium.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "east",
    name: "East Campus",
    description: "Home to our elite sports facilities, including an Olympic-sized swimming pool, indoor stadiums, and expansive track and field arenas.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "west",
    name: "West Campus",
    description: "The business and entrepreneurship hub, designed like a modern corporate plaza to inspire the next generation of innovators.",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "central",
    name: "Central Campus",
    description: "Our historic main campus, blending gothic architecture with modern interiors. The administrative heart of the institution.",
    imageUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "lakeside",
    name: "Lakeside Campus",
    description: "Focused on environmental and ecological studies. Set against a serene lake, featuring biological reserves and sustainable architecture.",
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "hilltop",
    name: "Hilltop Campus",
    description: "Dedicated to advanced research and postgraduate studies. Overlooking the city, it offers peace, quiet, and incredible facilities.",
    imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "downtown",
    name: "Downtown Campus",
    description: "Our urban campus for media, law, and urban studies, fully integrated with the vibrant city life and industry partnerships.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6">
            Explore Our World
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-10">
            Eight magnificent campuses, one unified vision of excellence. Discover the perfect environment for your journey.
          </p>
          <div className="animate-bounce text-slate-400 mt-12">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Campuses */}
      {CAMPUSES.map((campus, index) => (
        <CampusShowcase
          key={campus.id}
          index={index}
          name={campus.name}
          description={campus.description}
          imageUrl={campus.imageUrl}
        />
      ))}
      
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center">
        <p>© 2026 Elite School Network. All rights reserved.</p>
      </footer>
    </main>
  );
}
