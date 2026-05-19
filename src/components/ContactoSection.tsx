import { useInView, anim } from '../hooks/useInView';

export default function ContactoSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contacto" className="relative h-dvh w-full bg-black flex flex-col justify-between px-6 md:px-10 py-24 overflow-hidden snap-start" style={{ scrollSnapStop: 'always' }}>
      <div ref={ref} className="flex flex-col h-full justify-between">

        {/* Section label */}
        <div className={`${anim(inView, 0).className} flex items-center gap-4`} style={anim(inView, 0).style}>
          <span className="text-white/30 text-xs tracking-widest uppercase">05</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Headline staggered */}
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className={`${anim(inView, 80).className} hero-title text-white font-medium text-[11vw] md:text-[9vw] leading-none`}
            style={anim(inView, 80).style}
          >
            ¿listo para
          </h2>
          <h2
            className={`${anim(inView, 160).className} hero-title text-white font-medium text-[11vw] md:text-[9vw] leading-none text-right`}
            style={anim(inView, 160).style}
          >
            escalar?
          </h2>

          {/* Info grid — 2 cols on mobile, 4 on desktop */}
          <div
            className={`${anim(inView, 280).className} mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6`}
            style={anim(inView, 280).style}
          >
            <div className="min-w-0">
              <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-widest mb-1.5">ubicación</p>
              <p className="text-white text-xs md:text-sm">Avda. de Bruselas</p>
              <p className="text-white/60 text-xs md:text-sm">San Sebastián de los Reyes</p>
              <p className="text-white/60 text-xs md:text-sm">Madrid</p>
            </div>
            <div className="min-w-0">
              <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-widest mb-1.5">horario</p>
              <p className="text-white text-xs md:text-sm">L, X, V · 10:00–22:00</p>
              <p className="text-white/60 text-xs md:text-sm">M, J · 16:00–22:00</p>
              <p className="text-white/60 text-xs md:text-sm">Sáb · 10:00–20:00</p>
              <p className="text-white/60 text-xs md:text-sm">Dom · 10:00–15:00</p>
            </div>
            <div className="min-w-0">
              <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-widest mb-1.5">contacto</p>
              <p className="text-white text-xs md:text-sm truncate">contacto@tsunamiclimb.com</p>
              <a
                href="https://wa.me/34633231023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 text-xs md:text-sm hover:text-white transition-colors"
              >
                +34 633 23 10 23
              </a>
            </div>
            <div className="min-w-0">
              <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-widest mb-1.5">redes</p>
              <a
                href="https://www.instagram.com/tsunamiclimb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs md:text-sm hover:text-white/70 transition-colors block"
              >
                @tsunamiclimb
              </a>
              <p className="text-white/60 text-xs md:text-sm">Instagram</p>
            </div>
          </div>

          {/* Map */}
          <div
            className={`${anim(inView, 360).className} mt-4 md:mt-8 rounded-xl overflow-hidden border border-white/10 opacity-80`}
            style={anim(inView, 360).style}
          >
            <iframe
              src="https://www.google.com/maps?q=Tsunami+Climb+San+Sebastian+de+los+Reyes&output=embed"
              width="100%"
              className="h-28 md:h-52 block"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tsunami Climbing Gym"
            />
          </div>
        </div>

        {/* Footer bar */}
        <div
          className={`${anim(inView, 480).className} border-t border-white/10 pt-5 flex items-center justify-between`}
          style={anim(inView, 480).style}
        >
          <div className="hidden md:block bg-white rounded-full px-3 py-1.5">
            <img src="/logo.jpg" alt="Tsunami Climbing Gym" className="h-6 w-auto" />
          </div>
          <p className="text-white/20 text-xs">© 2025 Tsunami Climbing Gym</p>
        </div>

      </div>
    </section>
  );
}
