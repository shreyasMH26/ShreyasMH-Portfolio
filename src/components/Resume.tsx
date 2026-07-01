import { useInView } from '../hooks/useInView';

export default function Resume() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="resume"
      className={`relative z-20 bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Title */}
        <div
          className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          05 // Career Doc
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Resume.
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Download my latest resume to learn more about my education,
          technical skills, projects, and achievements.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition"
          >
            Download Resume
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}