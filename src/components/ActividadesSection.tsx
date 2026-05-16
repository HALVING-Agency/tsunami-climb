import { useInView, anim } from '../hooks/useInView';

const activities = [
  {
    title: 'Bautismo de Escalada',
    tag: '€25 · 1.5h',
    desc: 'Tu primera vez en la pared. Monitor personal, material incluido y una experiencia que no olvidarás.',
  },
  {
    title: 'Escalada Libre',
    tag: 'Bono 10 visitas · €70',
    desc: 'Acceso libre a boulder y vías cuando quieras. El mejor precio para escalar a tu ritmo.',
  },
  {
    title: 'Clases de Escalada',
    tag: 'Adultos & grupos',
    desc: 'Programas dirigidos para mejorar técnica, fuerza y lectura de vías con nuestros monitores.',
  },
  {
    title: 'Escuela Infantil',
    tag: '4 – 14 años',
    desc: 'Escalada, juego y desarrollo. Cursos y campamentos de verano diseñados para los más pequeños.',
  },
  {
    title: 'Silks Aéreos',
    tag: 'Nueva actividad',
    desc: 'Disciplina aérea con telas. Trabaja fuerza, flexibilidad y coordinación en el aire.',
  },
  {
    title: 'Cumpleaños',
    tag: '2h con monitores',
    desc: 'La fiesta más vertical de Madrid. Juegos, escalada guiada y servicio de snacks para grupos.',
  },
];

export default function ActividadesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="actividades" className="relative h-dvh w-full bg-black flex flex-col justify-between px-6 md:px-10 py-24 overflow-hidden snap-start" style={{ scrollSnapStop: 'always' }}>
      <div ref={ref} className="flex flex-col h-full justify-between">

        {/* Section label */}
        <div className={`${anim(inView, 0).className} flex items-center gap-4`} style={anim(inView, 0).style}>
          <span className="text-white/30 text-xs tracking-widest uppercase">03</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Headline */}
        <h2
          className={`${anim(inView, 80).className} hero-title text-white font-medium text-[11vw] md:text-[8vw] leading-none -mt-4`}
          style={anim(inView, 80).style}
        >
          actividades.
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 flex-1 content-center">
          {activities.map(({ title, tag, desc }, i) => (
            <div
              key={title}
              className={`${anim(inView, 160 + i * 60).className} border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col gap-2 hover:border-white/30 transition-colors`}
              style={anim(inView, 160 + i * 60).style}
            >
              <span className="text-white/30 text-[10px] uppercase tracking-widest">{tag}</span>
              <p className="text-white font-medium text-sm md:text-base leading-snug">{title}</p>
              <p className="text-white/40 text-xs leading-relaxed hidden md:block">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`${anim(inView, 600).className} border-t border-white/10 pt-4 flex items-center justify-between`} style={anim(inView, 600).style}>
          <p className="text-white/30 text-xs">horarios y tarifas en tsunamiclimb.com</p>
          <p className="text-white/30 text-xs">san sebastián de los reyes, madrid</p>
        </div>

      </div>
    </section>
  );
}
