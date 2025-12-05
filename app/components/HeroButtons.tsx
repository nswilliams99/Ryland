"use client";

export default function HeroButtons() {
  const scrollToOffices = () => {
    document.getElementById('office-locations')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="https://go.trashjoes.com/ryland-environmental/app/select-services"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
      >
        Start Residential Service
      </a>
      <button
        onClick={scrollToOffices}
        className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
      >
        Find Your Local Office
      </button>
    </div>
  );
}
