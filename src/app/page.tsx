"use client";

import { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

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
      <section className="relative min-h-[85vh] flex items-center bg-[#2c3e50] text-white overflow-hidden border-b-[16px] border-[#fdbf38]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/school_exterior.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale-[30%]"></div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-0 flex flex-col lg:flex-row items-center justify-between min-h-[85vh]">
          
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left pt-10 lg:pt-0 z-20">
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-tight mb-4 drop-shadow-lg leading-[1.1]">
              Your Kids<br />Deserve The<br />Best Education
            </h1>
            <p className="text-lg lg:text-2xl text-gray-100 font-medium mb-10 drop-shadow-md">
              e Learning, Expert Teachers & Safe Environment
            </p>
            <button className="px-10 py-4 bg-[#fdbf38] hover:bg-yellow-500 text-white font-bold rounded-full transition-all shadow-xl text-lg hover:shadow-2xl transform hover:-translate-y-1">
              Admission Now
            </button>
          </div>

          {/* Right Column (Image + Circle) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-16 lg:mt-0 h-[500px] lg:h-[750px]">
            {/* Bright Blue Circle Blob - Made smaller */}
            <div className="absolute right-[-5%] sm:right-[10%] lg:right-[0%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] bg-[#00b4ff] rounded-full z-0 overflow-hidden shadow-inner"></div>

            {/* Students Image - Made larger */}
            <img 
              src="/images/students_transparent.png" 
              alt="Students" 
              className="relative z-10 h-[110%] lg:h-[115%] w-auto object-contain object-bottom drop-shadow-2xl translate-y-6 lg:translate-y-10 origin-bottom" 
            />
          </div>
        </div>
      </section>

      {/* Campuses Horizontal Scroll Container */}
      <section className="py-16 bg-white overflow-hidden relative group">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f3b73] mb-4">Our Facilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-4">Play Group to Class 8 (Boys & Girls)</p>
        </div>
        
        {/* Horizontal scroll container (landscape focus) */}
        <div ref={scrollRef} className="flex overflow-x-auto pb-10 px-8 gap-8 snap-x snap-mandatory">
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

        {/* Slider Controls */}
        <div className="flex justify-center items-center gap-4 mt-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center bg-[#0f3b73] text-white rounded-full hover:bg-[#f7c815] hover:text-[#0f3b73] transition-colors shadow-md"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center bg-[#0f3b73] text-white rounded-full hover:bg-[#f7c815] hover:text-[#0f3b73] transition-colors shadow-md"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
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
