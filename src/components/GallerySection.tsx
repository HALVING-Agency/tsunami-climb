import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const photos = [
  {
    src: '/gallery/escalada.webp',
    alt: 'Escalada en vías',
    left: '2%', top: '5%', width: '46%',
    rotation: -1.5,
    threshold: 0.05,
  },
  {
    src: '/gallery/aereo.png',
    alt: 'Silks aéreos',
    left: '63%', top: '3%', width: '20%',
    rotation: 3,
    threshold: 0.22,
  },
  {
    src: '/gallery/grupal.webp',
    alt: 'Comunidad Tsunami',
    left: '27%', top: '37%', width: '41%',
    rotation: 1.5,
    threshold: 0.38,
  },
  {
    src: encodeURI('/gallery/2. Gente en los bloques.png'),
    alt: 'Boulder',
    left: '4%', top: '50%', width: '25%',
    rotation: -2.5,
    threshold: 0.54,
  },
  {
    src: encodeURI('/gallery/5. Ambiente.png'),
    alt: 'Ambiente',
    left: '68%', top: '40%', width: '23%',
    rotation: -1.5,
    threshold: 0.69,
  },
  {
    src: encodeURI('/gallery/mas ambiente.png'),
    alt: 'Más ambiente',
    left: '31%', top: '67%', width: '35%',
    rotation: 2,
    threshold: 0.84,
  },
];

const mobilePhotos = [
  {
    src: '/gallery/escalada.webp',
    alt: 'Escalada en vías',
    left: '0%', top: '3%', width: '75%',
    rotation: -2,
    threshold: 0.05,
  },
  {
    src: '/gallery/grupal.webp',
    alt: 'Comunidad Tsunami',
    left: '20%', top: '22%', width: '75%',
    rotation: 2.5,
    threshold: 0.25,
  },
  {
    src: encodeURI('/gallery/2. Gente en los bloques.png'),
    alt: 'Bloque',
    left: '2%', top: '42%', width: '75%',
    rotation: -1.5,
    threshold: 0.50,
  },
  {
    src: encodeURI('/gallery/mas ambiente.png'),
    alt: 'Más ambiente',
    left: '18%', top: '62%', width: '75%',
    rotation: 2,
    threshold: 0.75,
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activePhotos = isMobile ? mobilePhotos : photos;

  return (
    <div ref={sectionRef} style={{ height: '500vh' }}>
      <div className="sticky top-0 h-dvh overflow-hidden bg-black">

        {activePhotos.map((photo, i) => {
          const visible = progress >= photo.threshold;
          return (
            <div
              key={i}
              className="absolute overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.7)]"
              style={{
                left: photo.left,
                top: photo.top,
                width: photo.width,
                zIndex: i + 1,
                borderRadius: '2px',
                opacity: visible ? 1 : 0,
                transform: visible
                  ? `rotate(${photo.rotation}deg)`
                  : `rotate(${photo.rotation}deg) scale(0.88) translateY(28px)`,
                transition: 'opacity 0.55s ease-out, transform 0.55s ease-out',
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                draggable={false}
                className="w-full block select-none"
                style={{ maxHeight: isMobile ? '38vh' : '52vh', objectFit: 'cover' }}
              />
            </div>
          );
        })}

        {/* Hint de scroll al final */}
        <div
          className="absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-1.5 bg-black/60 backdrop-blur-sm px-5 py-2.5 rounded-full"
          style={{
            opacity: progress >= 0.92 ? 1 : 0,
            transform: progress >= 0.92 ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(8px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">sigue bajando</span>
          <span className="text-white/30 text-sm leading-none">↓</span>
        </div>

      </div>
    </div>
  );
}
