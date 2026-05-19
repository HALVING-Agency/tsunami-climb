import { useState } from 'react';
import { useInView, anim } from '../hooks/useInView';

const activities = [
  {
    title: 'Bautismo de Escalada',
    tag: '€25 · 1.5h',
    desc: 'Tu primera vez en la pared. Monitor personal, material incluido y una experiencia que no olvidarás.',
    detail: 'Una sesión de hora y media con monitor personal dedicado exclusivamente a ti. Aprenderás las técnicas básicas de movimiento: cómo colocar los pies, agarrar las presas y leer la pared antes de subirla. Todo el material está incluido — pies de gato, arnés y magnesio. No necesitas ninguna experiencia previa. Ideal para curiosos, parejas o grupos de amigos que quieren vivir algo diferente.',
    includes: ['Monitor personal', 'Material incluido', 'Sin exp. previa', '1h 30min'],
    color: '#F97316',
  },
  {
    title: 'Escalada Libre',
    tag: 'Bono 10 visitas · €70',
    desc: 'Acceso libre a bloque y vías cuando quieras. El mejor precio para escalar a tu ritmo.',
    detail: 'Acceso total a todas las zonas del gym — bloque, vías de cuerda y zona de campus — cuando tú quieras. El bono de 10 visitas es la opción más inteligente si escalas con regularidad: te sale a 7€ la sesión. Sin horario fijo, sin compromisos. Tú marcas el ritmo.',
    includes: ['Acceso completo', 'Bloque + vías', '10 visitas', '€7 / sesión'],
    color: '#3B82F6',
  },
  {
    title: 'Clases de Escalada',
    tag: 'Adultos & grupos',
    desc: 'Programas dirigidos para mejorar técnica, fuerza y lectura de vías con nuestros monitores.',
    detail: 'Programas de entrenamiento periódicos diseñados por nuestros monitores certificados. Trabajamos técnica de movimiento, fuerza específica, lectura de vías y estrategia de escalada. Disponible para adultos de todos los niveles y para grupos. Si ya llevas tiempo escalando y quieres dar el siguiente salto, este es tu sitio.',
    includes: ['Todos los niveles', 'Monitor certificado', 'Prog. periódico', 'Grupos & adultos'],
    color: '#22C55E',
  },
  {
    title: 'Escuela Infantil',
    tag: '4 – 14 años',
    desc: 'Escalada, juego y desarrollo. Cursos y campamentos de verano diseñados para los más pequeños.',
    detail: 'La escuela infantil combina la escalada con el juego y el desarrollo motor. Los peques aprenden a moverse en la pared de forma segura y divertida, trabajando equilibrio, coordinación y confianza en sí mismos. Cursos regulares durante el curso escolar y campamentos de verano intensivos. Grupos reducidos para atención personalizada. Edad: 4 a 14 años.',
    includes: ['4 – 14 años', 'Grupos reducidos', 'Campamentos verano', 'Metodología lúdica'],
    color: '#EAB308',
  },
  {
    title: 'Silks Aéreos',
    tag: 'Nueva actividad',
    desc: 'Disciplina aérea con telas. Trabaja fuerza, flexibilidad y coordinación en el aire.',
    detail: 'Los silks aéreos son una disciplina de circo que combina acrobacias, fuerza y expresión corporal usando telas colgadas del techo. Una actividad única que trabaja el cuerpo de forma integral: brazos, core, flexibilidad y coordinación. Disponible para principiantes sin experiencia previa. Una actividad diferente que cada vez tiene más fans en el gym.',
    includes: ['Sin exp. previa', 'Fuerza & flexib.', 'Material incluido', 'Todos los niveles'],
    color: '#A855F7',
  },
  {
    title: 'Cumpleaños',
    tag: '2h con monitores',
    desc: 'La fiesta más vertical de Madrid. Juegos, escalada guiada y servicio de snacks para grupos.',
    detail: 'Celebra tu cumpleaños de una manera que nadie va a olvidar. Dos horas con monitores dedicados, circuito de juegos en la pared, escalada guiada para todos los niveles y zona de descanso con servicio de snacks. Capacidad para grupos desde 8 hasta 25 personas. Contacta con nosotros para fechas y personalización del evento.',
    includes: ['2h de actividad', 'Monitores incl.', 'Hasta 25 pers.', 'Snacks disponibles'],
    color: '#EC4899',
  },
];

export default function ActividadesSection() {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState<number | null>(null);

  const active = selected !== null ? activities[selected] : null;

  return (
    <>
      <section
        id="actividades"
        className="relative h-dvh w-full bg-black flex flex-col justify-between px-6 md:px-10 py-24 overflow-hidden snap-start"
        style={{ scrollSnapStop: 'always' }}
      >
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

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 flex-1 content-center mt-4 md:mt-8">
            {activities.map(({ title, tag, desc, color }, i) => (
              <button
                key={title}
                onClick={() => setSelected(i)}
                className={`${anim(inView, 160 + i * 90).className} group relative rounded-2xl p-3 md:p-5 flex flex-col gap-1.5 md:gap-2 transition-all duration-300 text-left cursor-pointer border border-white/10`}
                style={{
                  ...anim(inView, 160 + i * 90).style,
                  borderTopColor: color,
                  borderTopWidth: '2px',
                  backgroundColor: color + '0D',
                }}
              >
                <span className="text-[10px] uppercase tracking-widest" style={{ color: color + 'AA' }}>{tag}</span>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white font-medium text-sm md:text-base leading-snug transition-transform duration-300 group-hover:translate-x-1">
                    {title}
                  </p>
                  <span className="text-white/0 group-hover:text-white/60 transition-colors duration-300 text-sm flex-shrink-0">
                    →
                  </span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </button>
            ))}
          </div>

          {/* Bottom bar */}
          <div className={`${anim(inView, 600).className} border-t border-white/10 pt-4 flex items-center justify-between`} style={anim(inView, 600).style}>
            <p className="text-white/30 text-xs">horarios y tarifas en tsunamiclimb.com</p>
            <p className="text-white/30 text-xs">san sebastián de los reyes, madrid</p>
          </div>

        </div>
      </section>

      {/* Modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center px-5"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
          <div
            className="relative bg-neutral-950 rounded-3xl p-7 md:p-9 max-w-md w-full border border-white/10"
            style={{ borderTopColor: active.color, borderTopWidth: '2px' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors text-base leading-none"
            >
              ✕
            </button>

            <span className="text-[10px] uppercase tracking-widest" style={{ color: active.color + 'CC' }}>
              {active.tag}
            </span>

            <h3 className="text-white font-medium text-2xl md:text-3xl leading-tight mt-3 mb-4">
              {active.title}
            </h3>

            <p className="text-white/55 text-sm leading-relaxed">
              {active.detail}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {active.includes.map((item) => (
                <div key={item} className="border border-white/10 rounded-xl px-3 py-2.5">
                  <p className="text-white/50 text-xs">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/34633231023"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-white text-black text-sm font-medium rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              Reservar por WhatsApp →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
