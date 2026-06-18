import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C'],
    color: 'indigo',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
    color: 'emerald',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
    color: 'sky',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'IoT',
    skills: ['ESP8266', 'Arduino IDE', 'Telegram Bot API'],
    color: 'amber',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Currently Learning',
    skills: ['Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Data Analysis', 'TensorFlow'],
    color: 'rose',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const getColorStyles = (color: string) => {
  switch (color) {
    case 'indigo':
      return {
        badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/25',
        text: 'text-indigo-400',
        bgGlow: 'group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.15)] border-indigo-500/10 hover:border-indigo-500/35',
      };
    case 'emerald':
      return {
        badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/25',
        text: 'text-emerald-400',
        bgGlow: 'group-hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)] border-emerald-500/10 hover:border-emerald-500/35',
      };
    case 'sky':
      return {
        badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20 hover:bg-sky-500/25',
        text: 'text-sky-400',
        bgGlow: 'group-hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.15)] border-sky-500/10 hover:border-sky-500/35',
      };
    case 'amber':
      return {
        badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/25',
        text: 'text-amber-400',
        bgGlow: 'group-hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.15)] border-amber-500/10 hover:border-amber-500/35',
      };
    case 'rose':
    default:
      return {
        badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/25',
        text: 'text-rose-400',
        bgGlow: 'group-hover:shadow-[0_0_25px_-5px_rgba(244,63,94,0.15)] border-rose-500/10 hover:border-rose-500/35',
      };
  }
};

export default function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="skills"
      className={`relative z-20 bg-[#060606] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Title */}
        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          02 // Expertise
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
          Technical <span className="gradient-text">Skillset</span>.
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const styles = getColorStyles(category.color);
            return (
              <div
                key={category.title}
                className={`group p-6 rounded-2xl bg-white/[0.015] border transition-all duration-300 hover:bg-white/[0.03] ${styles.bgGlow}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg bg-white/[0.02] border border-white/5 transition-all duration-300 group-hover:scale-110 ${styles.text}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-md border transition-all duration-200 select-none ${styles.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
