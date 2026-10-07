import CampusShowcase from "@/components/CampusShowcase";

const CAMPUSES = [
  {
    id: "main",
    name: "Main Campus",
    description: "The heart of Ahlul Bait Public School. A beautifully designed campus housing the main administrative offices, grand library, and central prayer hall.",
    imageUrl: "/images/school_exterior.jpg", // We will move the generated image here
  },
  {
    id: "science",
    name: "Science & Innovation",
    description: "Our flagship technology and science center, featuring state-of-the-art laboratories and computer science facilities.",
    imageUrl: "/images/school_kids_navy.jpg",
  },
  {
    id: "arts",
    name: "Arts & Humanities",
    description: "Dedicated to literature, history, and the arts, fostering creativity and a deep understanding of human heritage.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "sports",
    name: "Sports Complex",
    description: "Home to our elite sports facilities, including indoor stadiums, swimming pools, and expansive track and field arenas.",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "primary",
    name: "Primary Education",
    description: "A nurturing environment designed specifically for our youngest learners to start their educational journey.",
    imageUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "community",
    name: "Community Center",
    description: "Focused on community service and engagement, embodying the core values of the Ashghrai Organization.",
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "research",
    name: "Advanced Studies",
    description: "Dedicated to higher learning and specialized studies. It offers peace, quiet, and incredible academic resources.",
    imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "digital",
    name: "Digital Hub",
    description: "Our modern campus for media, digital literacy, and global connectivity, fully integrated with the latest educational technology.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-slate-50">
      {/* Sticky Academic Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-[#f7c815] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Ahlul Bait Public School Logo" className="h-14 w-auto object-contain" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-[#0f3b73] leading-tight">Ahlul Bait</h1>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Public School</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 font-medium text-[#0f3b73]">
            <a href="#" className="hover:text-[#f7c815] transition-colors border-b-2 border-transparent hover:border-[#f7c815] py-1">Future Students</a>
            <a href="#" className="hover:text-[#f7c815] transition-colors border-b-2 border-transparent hover:border-[#f7c815] py-1">Programs</a>
            <a href="#" className="hover:text-[#f7c815] transition-colors border-b-2 border-transparent hover:border-[#f7c815] py-1">Admissions</a>
            <a href="#" className="hover:text-[#f7c815] transition-colors border-b-2 border-transparent hover:border-[#f7c815] py-1">About Us</a>
          </nav>
          <button className="lg:hidden text-[#0f3b73]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0f3b73] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/school_exterior.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="z-10 text-center px-4 max-w-5xl flex flex-col items-center py-20">
          <img src="/logo.png" alt="Ahlul Bait Public School Logo" className="w-48 h-48 mb-8 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          <p className="text-[#f7c815] font-bold tracking-widest uppercase mb-4 text-sm md:text-base letter-spacing-2">
            A Project of Ashghrai Organization
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg leading-tight">
            Build a Brighter Future with Us
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Quality education with Islamic values, modern teaching methods, and a safe, supportive environment. Located in Tharushah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <button className="px-8 py-4 bg-[#f7c815] hover:bg-yellow-500 text-[#0f3b73] font-bold rounded-sm transition-all shadow-lg hover:shadow-xl uppercase tracking-wide">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#0f3b73] text-white font-bold rounded-sm transition-all shadow-lg uppercase tracking-wide">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Campuses Horizontal Scroll Container */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f3b73] mb-4">Our Facilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">Play Group to Class 8 (Boys & Girls)</p>
          <div className="flex items-center justify-center gap-2 text-slate-400 animate-pulse">
            <span className="text-sm font-medium uppercase tracking-widest">Swipe or Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        
        {/* Horizontal scroll container (landscape focus) */}
        <div className="flex overflow-x-auto pb-10 px-8 gap-8 snap-x snap-mandatory">
          {CAMPUSES.map((campus, index) => (
            <div key={campus.id} className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw]">
              <CampusShowcase
                index={index}
                name={campus.name}
                description={campus.description}
                imageUrl={campus.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0f3b73] text-blue-200 py-16 text-center border-t-4 border-[#f7c815]">
        <div className="max-w-4xl mx-auto px-4">
          <img src="/logo.png" alt="Logo" className="w-24 h-24 mx-auto mb-6 object-contain drop-shadow-xl" />
          <h3 className="text-2xl font-bold text-white mb-2">Ahlul Bait Public School</h3>
          <p className="mb-2">Near Taxi Stand, Tharushah</p>
          <p className="mb-8 font-bold text-[#f7c815]">📞 03028886164</p>
          <p className="mb-8 text-sm">A Project of Ashghrai Organization</p>
          <p className="text-blue-400 text-sm">© 2026 Ahlul Bait Public School. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
