import { useEffect, useRef, useState } from 'react';

const CROSSFADE_S = 1.2;

// Drives opacity + translateY based on scroll progress
function applyReveal(el: HTMLElement | null, progress: number, start: number) {
  if (!el) return;
  const t = Math.max(0, Math.min(1, (progress - start) / 0.18));
  el.style.opacity = String(t);
  el.style.transform = `translateY(${(1 - t) * 28}px)`;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const word1Ref = useRef<HTMLHeadingElement>(null);
  const word2Ref = useRef<HTMLHeadingElement>(null);
  const word3Ref = useRef<HTMLHeadingElement>(null);
  const [showA, setShowA] = useState(true);

  // Scroll-driven word reveal
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const scrollable = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / scrollable));
      applyReveal(word1Ref.current, p, 0.0);
      applyReveal(word2Ref.current, p, 0.32);
      applyReveal(word3Ref.current, p, 0.64);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Crossfade video loop
  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;
    let crossfading = false;
    let current = a;
    let next = b;
    let rafId: number;
    a.play();
    const tick = () => {
      if (!crossfading && current.duration) {
        const timeLeft = current.duration - current.currentTime;
        if (timeLeft <= CROSSFADE_S) {
          crossfading = true;
          next.currentTime = 0;
          next.play();
          setShowA((s) => !s);
          setTimeout(() => {
            current.pause();
            current.currentTime = 0;
            [current, next] = [next, current];
            crossfading = false;
          }, CROSSFADE_S * 1000);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafId); a.pause(); b.pause(); };
  }, []);

  const videoClass = (active: boolean) =>
    `absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out ${active ? 'opacity-100' : 'opacity-0'}`;

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{ height: '300vh' }}
      className="relative"
    >
      {/* Sticky viewport — stays fixed while scrolling through 300vh */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-black">

        <video
          ref={videoARef}
          className={videoClass(showA)}
          style={{ transitionDuration: `${CROSSFADE_S * 1000}ms` }}
          src="/hero.mp4"
          preload="auto"
          muted
          playsInline
        />
        <video
          ref={videoBRef}
          className={videoClass(!showA)}
          style={{ transitionDuration: `${CROSSFADE_S * 1000}ms` }}
          src="/hero.mp4"
          preload="auto"
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/45" />

        {/* Words — start invisible, driven by scroll progress */}
        <div className="relative h-full w-full">
          <h1
            ref={word1Ref}
            className="hero-title absolute text-white font-medium text-[18vw] md:text-[13vw] left-4 md:left-10 top-[18%]"
            style={{ opacity: 0, transform: 'translateY(28px)' }}
          >
            climb
          </h1>
          <h1
            ref={word2Ref}
            className="hero-title absolute text-white font-medium text-[18vw] md:text-[13vw] right-4 md:right-10 top-[38%]"
            style={{ opacity: 0, transform: 'translateY(28px)' }}
          >
            your
          </h1>
          <h1
            ref={word3Ref}
            className="hero-title absolute text-white font-medium text-[18vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]"
            style={{ opacity: 0, transform: 'translateY(28px)' }}
          >
            limits
          </h1>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
        </div>
      </div>
    </section>
  );
}
