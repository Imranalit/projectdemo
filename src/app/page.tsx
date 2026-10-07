import CampusShowcase from "@/components/CampusShowcase";

const CAMPUSES = [
  {
    id: "main",
    name: "Main Campus",
    description: "The heart of Ahlul Bait Public School. A beautifully designed campus housing the main administrative offices, grand library, and central prayer hall.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "science",
    name: "Science & Innovation Wing",
    description: "Our flagship technology and science center, featuring state-of-the-art laboratories and computer science facilities.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "arts",
    name: "Arts & Humanities Center",
    description: "Dedicated to literature, history, and the arts, fostering creativity and a deep understanding of human heritage.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "sports",
    name: "Sports & Athletics Complex",
    description: "Home to our elite sports facilities, including indoor stadiums, swimming pools, and expansive track and field arenas.",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "primary",
    name: "Primary Education Campus",
    description: "A nurturing environment designed specifically for our youngest learners to start their educational journey.",
    imageUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "community",
    name: "Community Outreach Center",
    description: "Focused on community service and engagement, embodying the core values of the Ashghrai Organization.",
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "research",
    name: "Advanced Studies Institute",
    description: "Dedicated to higher learning and specialized studies. It offers peace, quiet, and incredible academic resources.",
    imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "digital",
    name: "Digital Learning Hub",
    description: "Our modern campus for media, digital literacy, and global connectivity, fully integrated with the latest educational technology.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="z-10 text-center px-4 max-w-5xl">
          <p className="text-emerald-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            A Project of Ashghrai Organization
          </p>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6">
            Ahlul Bait Public School
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Excellence in education rooted in strong community values. Discover a place where future leaders are nurtured across our eight specialized campuses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-colors shadow-lg">
              Apply for Admission
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-emerald-400 hover:bg-emerald-800 text-white font-bold rounded-full transition-colors">
              Explore Programs
            </button>
          </div>
          <div className="animate-bounce text-emerald-400 mt-16">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Facilities & Campuses</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Explore the diverse learning environments tailored for every stage of educational development at Ahlul Bait Public School.</p>
      </section>

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
      <footer className="bg-emerald-950 text-emerald-200 py-16 text-center border-t border-emerald-900">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Ahlul Bait Public School</h3>
          <p className="mb-8">A Project of Ashghrai Organization</p>
          <div className="flex justify-center gap-6 mb-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Admissions</a>
            <a href="#" className="hover:text-white transition-colors">Academic Programs</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="hover:text-white transition-colors">About Ashghrai</a>
          </div>
          <p className="text-emerald-500 text-sm">© 2026 Ahlul Bait Public School. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
