function MarqueeBanner() {
  return (
    <div className="mb-28 overflow-hidden bg-[#ff7a30] py-4 whitespace-nowrap">
      <div className="marquee flex gap-12 text-2xl font-black uppercase italic text-white">
        {/* First set */}
        <span>UX Design</span>
        <span className="text-white/30">✦</span>
        <span>App Design</span>
        <span className="text-white/30">✦</span>
        <span>Dashboard</span>
        <span className="text-white/30">✦</span>
        <span>Wireframe</span>
        <span className="text-white/30">✦</span>
        <span>User Research</span>
        <span className="text-white/30">✦</span>

        {/* Duplicate for seamless loop */}
        <span>UX Design</span>
        <span className="text-white/30">✦</span>
        <span>App Design</span>
        <span className="text-white/30">✦</span>
        <span>Dashboard</span>
        <span className="text-white/30">✦</span>
        <span>Wireframe</span>
        <span className="text-white/30">✦</span>
        <span>User Research</span>
        <span className="text-white/30">✦</span>
      </div>
    </div>
  );
}

export default MarqueeBanner;