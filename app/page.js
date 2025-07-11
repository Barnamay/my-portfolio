'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/vid1.mp4" type="video/mp4" />
      </video>

      {/* Top Navigation */}
      <header className="absolute top-0 right-0 m-4 z-30 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-md flex items-center gap-4 md:gap-6 text-sm text-white font-medium transition-all duration-300 hover:shadow-pink-500/30">
        <a
          href="mailto:barnamay1234@gmail.com"
          className="flex items-center gap-1 hover:text-pink-400 transition-all duration-200"
        >
          <span>✉</span> <span>Contact Me(barnamay1234@gmail.com)</span>
        </a>
        <a
          href="/cv.pdf"
          download
          className="flex items-center gap-1 hover:text-pink-400 transition-all duration-200"
        >
          <span>📄</span> <span>Resume</span>
        </a>
      </header>


      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-8 md:gap-12">
        <img
          src="/me2.jpg"
          alt="Barnamay Chowdhury"
          className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]"
        />
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] mb-2">
            Barnamay Chowdhury
          </h1>
          <p className="text-lg text-purple-200 font-medium mb-3 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
            Full Stack Developer | Content Creator 🚀
          </p>
          <p className="text-sm text-purple-300 mb-4 italic">
            Turning ideas into interactive experiences that users love.
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            {['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="bg-white/10 text-xs text-purple-200 px-3 py-1 rounded-full border border-purple-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-4 text-xl mb-6">
            <a href="mailto:" className="hover:text-pink-400">📧barnamay1234@gmail.com</a>
            <a href="https://github.com/barnamay" target="_blank" className="hover:text-pink-400">🐙</a>
            <a href="https://linkedin.com/in/barnamay-chowdhury-614524257" target="_blank" className="hover:text-pink-400">💼</a>
            <a href="https://www.youtube.com/@barnamaychowdhury3226" target="_blank" className="hover:text-pink-400">🎬</a>
          </div>

          <Link href="#projects">
            <button className="px-8 py-3 bg-purple-700 hover:bg-pink-600 rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 text-white font-semibold">
              View My Projects
            </button>
          </Link>
        </div>
      </section>


      {/* About Me Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-purple-950 to-black text-white text-center">
        <h2 className="text-4xl font-bold mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">About Me</h2>
        <div className="max-w-4xl mx-auto text-lg text-purple-200 leading-relaxed space-y-6">
          <p>
            I am <span className="font-semibold text-white">Barnamay Chowdhury</span>, a passionate Full Stack Developer skilled in building fast, scalable, and user-focused web apps using tools like <span className="text-pink-400">Next.js</span>, <span className="text-pink-400">Prisma</span>, <span className="text-pink-400">Tailwind CSS</span>, and <span className="text-pink-400">PostgreSQL</span>.
          </p>
          <p>
            I focus on delivering projects that are not only functional but also visually delightful. I enjoy adding subtle animations, responsive layouts, and interactive UI to elevate user experiences.
          </p>
          <p>
            I also create content on <span className="text-pink-400 font-semibold">YouTube</span>, contribute to <span className="text-pink-400 font-semibold">open-source projects</span>, and actively participate in developer communities like <span className="text-pink-400 font-semibold">GDSC/Google Developer Groups</span>.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-white text-xl">
            <a href="mailto:barnamay1234@gmail.com" className="hover:text-pink-400">📧 Mail</a>
            <a href="https://github.com/barnamay" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">🐙 GitHub</a>
            <a href="https://linkedin.com/in/barnamay-chowdhury-614524257" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">💼 LinkedIn</a>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-gradient-to-b from-black via-purple-950 to-black text-white text-center">
        <div className="mt-6 flex justify-center gap-6 text-white text-xl">
            <a href="mailto:barnamay1234@gmail.com" className="hover:text-pink-400">📧 Mail</a>
            <a href="https://github.com/barnamay" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">🐙 GitHub</a>
            <a href="https://linkedin.com/in/barnamay-chowdhury-614524257" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">💼 LinkedIn</a>
          </div>
      </section>

      {/* Project Showcase */}
      {/* Project Showcase */}
      <section id="projects" className="py-24 bg-gradient-to-b from-black via-purple-900 to-black px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-30 max-w-6xl mx-auto">
          {[
            {
              video: '/vid8.mp4',
              title: 'Event Registration System',
              link: 'https://eve-reg.vercel.app/',
              desc: 'A role-based registration platform using Next.js, Prisma & PostgreSQL. Admins can approve/publish events, view participants, and export data.'
            },
            {
              video: '/vid9.mp4',
              title: 'Portfolio Showcase',
              link: 'https://my-portfolio-five-xi-77.vercel.app/',
              desc: 'A sleek personal portfolio built with Next.js, Tailwind CSS, Framer Motion. Features parallax backgrounds, flip animations, and scroll effects.'
            },
            // {
            //   video: '/vid6.mp4',
            //   title: 'Startup Landing Page',
            //   link: 'https://startupdemo.vercel.app',
            //   desc: 'A modern landing page demo for startups. Responsive, fast-loading, and animated using Tailwind CSS and glassmorphism design.'
            // },
          ].map(({ video, title, link, desc }, i) => (
            <div key={i} className="flex flex-col gap-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group [perspective:1000px] block"
              >
                <div className="relative h-56 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)] rounded-3xl shadow-xl border border-purple-700 bg-white/10 backdrop-blur-md">
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden">
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-purple-300 text-sm">Click to view</p>
                  </div>
                </div>
              </a>
              <p className="text-purple-300 text-sm text-center px-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Highlights Section */}
      <section className="py-24 px-6 bg-black text-white">
        <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[

            {
              title: 'Web Developer',
              desc: 'Developes Fullstack Website',
              icon: '💻'
            }
            ,
            {
              title: 'Science Congress Participant',
              desc: '6th Regional Science & Technology Congress',
              icon: '🔬'
            },
            {
              title: 'Worked with GDG/GDSC',
              desc: 'Collaborated with GDG/GDSC GCETTB',
              icon: '🌐'
            },
            {
              title: 'YouTuber',
              desc: 'Uploaded tutorials & dev content regularly',
              icon: '🎬'
            },
            {
              title: 'Tech Blogger',
              desc: 'Wrote articles on Medium ',
              icon: '✍️'
            }
          ].map(({ title, desc, icon }) => (
            <div key={title} className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
              <p className="text-purple-200 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-purple-900 to-black text-white text-center">
        <h2 className="text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">📸 My Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            '/gal1.jpeg',
            '/gal2.jpeg',
            '/gal3.jpg',
            '/gal4.jpg',
            '/gal5.jpeg',
            '/gal6.jpeg'
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery Image ${i + 1}`}
              className="rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 object-cover w-full h-48 brightness-100 contrast-105"
            />
          ))}
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
        <p className="text-purple-200 max-w-2xl mx-auto mb-8">
          I create videos about web development, Tourism, productivity and side project building.
        </p>
        <div className="max-w-5xl mx-auto mt-20 text-center px-4">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">📽️ Watch My Latest Creation</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
              src="https://www.youtube.com/embed/ac3422Rqawo?si=_qxpjxRBscGyH3xQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>
        <div className="relative z-50">
        <a
          href="https://www.youtube.com/@barnamaychowdhury3226"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-white underline hover:text-pink-400 relative z-20"
        >
          Visit My Channel
        </a></div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
        Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
      </footer>
    </main>
  )
}
