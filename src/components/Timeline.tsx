import { useInView } from '../hooks/useInView';

const milestones = [
  {
    year: '2025',
    title: 'Started Computer Science Engineering',
    desc: 'Began the formal academic foundation in algorithms, system structures, and software engineering methodologies.',
  },{
  year: '2025',
  title: 'Co-Founded XTICH',
  desc: 'Co-founded XTICH, a student-focused apparel and branding startup. Leading product strategy, brand development, website presence, and student community growth.',
  isHighlight: true,
},
{
  year: '2025',
  title: 'Launched XTICH Website',
  desc: 'Designed and launched xtich.in to establish the brand’s online presence and connect with students across campuses.',
},
  {
    year: '2025',
    title: 'Built Multiple Web Development Projects',
    desc: 'Learned HTML, CSS, JavaScript, and React to create responsive and modern web interfaces.',
  },
  {
    year: '2025',
    title: 'Created SecureVault Password Manager',
    desc: 'Designed an interactive security dashboard for managing passwords locally with cryptographic tools and local storage.',
  },
  {
    year: '2025',
    title: 'Developed IoT Laser Security System',
    desc: 'Integrated ESP8266, laser modules, and physical sensors with the Telegram Bot API for real-time remote alerts.',
  },
  {
    year: '2025',
    title: 'Built Premium Personal Portfolio',
    desc: 'Created an agency-inspired cinematic portfolio with React, TypeScript, Vite, and video interaction mechanics.',
  },
  {
    year: '2025',
    title: 'Started Learning Artificial Intelligence & Machine Learning',
    desc: 'Began training models, studying deep learning frameworks, neural networks, data analysis pipelines, and TensorFlow.',
  },
  {
    year: 'Future',
    title: 'AI/ML Engineer',
    desc: 'Aspiring to bridge machine learning theory and software development to build smart products and automate solutions.',
    isFuture: true,
  },
];

export default function Timeline() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="timeline"
      className={`relative z-20 bg-[#060606] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Title */}
        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          04 // Timeline
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
          My <span className="gradient-text">Journey</span>.
        </h2>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
          
          {milestones.map((item, index) => {
            if (item.isFuture) {
              return (
                <div
                  key={index}
                  className="relative opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transitionDelay: `${index * 80}ms`
                  }}
                >
                  {/* Dotted indicator dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-dashed border-indigo-400 bg-[#060606]">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                  </span>

                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.005] border border-dashed border-white/10 hover:border-indigo-500/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2.5 py-0.5 rounded">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs sm:text-[13.5px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="relative"
                style={{
                  transitionDelay: `${index * 80}ms`
                }}
              >
                {/* Glowing active indicator dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                </span>

                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-emerald-500/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-[13.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
