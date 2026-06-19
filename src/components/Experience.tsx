import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="experience"
      className={`relative z-20 bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4">
          EXPERIENCE
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Professional Experience
        </h2>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-2xl font-bold mb-2">
            Co-Founder — XTICH
          </h3>

          <p className="text-zinc-400 mb-6">
            Active
          </p>

          <p className="text-zinc-300 leading-relaxed mb-6">
            XTICH is a student-focused apparel and branding startup building
            premium merchandise, custom clothing and identity-driven products
            for students and communities.
          </p>

          <ul className="space-y-2 text-zinc-400 mb-8">
            <li>• Product Planning & Strategy</li>
            <li>• Brand Development</li>
            <li>• Website & Digital Presence</li>
            <li>• Student Community Engagement</li>
          </ul>

          <a
            href="https://xtich.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-xl border border-white/10 hover:border-white/20"
          >
            Visit XTICH →
          </a>
        </div>
      </div>
    </section>
  );
}