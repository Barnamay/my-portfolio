
// // // import React from 'react'
// // // import Link from 'next/link'

// // // export default function Home() {
// // //   return (
// // //     <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
// // //       {/* Background Video */}
// // //       <video
// // //         autoPlay
// // //         loop
// // //         muted
// // //         playsInline
// // //         className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
// // //       >
// // //         <source src="/vid1.mp4" type="video/mp4" />
// // //       </video>

// // //       {/* Top Navigation */}
// // //       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6">
// // //         <a href="mailto:your@email.com" className="hover:underline text-sm">✉ Email</a>
// // //         <a href="/resume.pdf" download className="hover:underline text-sm">📄 Resume</a>
// // //       </header>

// // //       {/* Hero Section with Profile Image */}
// // //       <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4">
// // //         <img
// // //           src="/me2.jpg"
// // //           alt="Barnamay Chowdhury"
// // //           className="w-56 h-56 rounded-full border-4 border-white shadow-lg mb-6"
// // //         />
// // //         <h1 className="text-4xl sm:text-5xl font-bold mb-2">Barnamay Chowdhury</h1>
// // //         <p className="text-lg text-gray-300 max-w-xl mb-6">
// // //           Full Stack Developer | Content Creator | Building fast, functional and fun web experiences 🚀
// // //         </p>
// // //         <Link href="#projects">
// // //           <button className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-full shadow-xl transition-all duration-300">
// // //             View My Projects
// // //           </button>
// // //         </Link>
// // //       </section>

// // //       {/* About Section */}
// // //       <section className="relative z-10 bg-black/60 backdrop-blur-xl py-24 px-6 text-center">
// // //         <h2 className="text-3xl font-semibold mb-4">About Me</h2>
// // //         <p className="max-w-2xl mx-auto text-gray-300">
// // //           Passionate developer who loves merging creativity with code. I focus on building web apps that are not only efficient but also visually appealing and meaningful. From startup showcases to engaging event systems, I craft experiences that stand out.
// // //         </p>
// // //       </section>

// // //       {/* Project Showcase */}
// // //       <section id="projects" className="py-24 bg-gradient-to-b from-black via-purple-900 to-black px-6">
// // //         <h2 className="text-center text-4xl font-bold text-white mb-16">My Projects</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// // //           {[
// // //             {
// // //               src: '/ts.jpg',
// // //               title: 'Event Registration System',
// // //               link: 'https://barnamay.vercel.app'
// // //             },
// // //             {
// // //               src: '/event2.jpg',
// // //               title: 'Portfolio Showcase',
// // //               link: 'https://yourportfolio.vercel.app'
// // //             },
// // //             {
// // //               src: '/su.jpg',
// // //               title: 'Startup Landing Page',
// // //               link: 'https://startupdemo.vercel.app'
// // //             },
// // //           ].map(({ src, title, link }, i) => (
// // //             <a
// // //               key={i}
// // //               href={link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="group relative overflow-hidden rounded-3xl border border-purple-700 bg-white/5 backdrop-blur-md transition-all duration-500 shadow-xl hover:scale-105 hover:border-pink-500"
// // //             >
// // //               <img src={src} alt={title} className="w-full h-[300px] object-cover group-hover:blur-[1px] transition duration-300" />
// // //               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all duration-300">
// // //                 <p className="text-white text-xl font-semibold">{title}</p>
// // //               </div>
// // //             </a>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Highlights Section */}
// // //       <section className="py-24 px-6 bg-black text-white">
// // //         <h2 className="text-center text-4xl font-bold mb-10">Highlights</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
// // //           {[
// // //             {
// // //               title: 'Hackathon Finalist',
// // //               desc: 'Finalist at XYZ Hackathon 2024',
// // //               icon: '🏆'
// // //             },
// // //             {
// // //               title: 'Open Source Contributor',
// // //               desc: 'Contributions to Prisma, Next.js, React libraries',
// // //               icon: '👨‍💻'
// // //             },
// // //             {
// // //               title: 'Tech Blogger',
// // //               desc: 'Wrote over 50 articles on Medium and Dev.to',
// // //               icon: '✍️'
// // //             }
// // //           ].map(({ title, desc, icon }) => (
// // //             <div key={title} className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition">
// // //               <div className="text-4xl mb-4">{icon}</div>
// // //               <h3 className="text-2xl font-bold mb-2">{title}</h3>
// // //               <p className="text-gray-300 text-sm">{desc}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* YouTube Channel Section */}
// // //       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
// // //         <h2 className="text-4xl font-bold mb-6 text-white">🎥 YouTube Channel</h2>
// // //         <p className="text-gray-300 max-w-2xl mx-auto mb-8">
// // //           I create videos about web development, productivity and side project building.
// // //         </p>
// // //         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden">
// // //           <iframe
// // //             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
// // //             title="YouTube video"
// // //             frameBorder="0"
// // //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //             allowFullScreen
// // //             className="w-full h-full"
// // //           ></iframe>
// // //         </div>
// // //         <a
// // //           href="https://www.youtube.com/@yourchannel"
// // //           target="_blank"
// // //           className="mt-6 inline-block text-white underline hover:text-pink-400"
// // //         >
// // //           Visit My Channel
// // //         </a>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
// // //         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
// // //       </footer>
// // //     </main>
// // //   )
// // // }



// // // 'use client'

// // // import React from 'react'
// // // import Link from 'next/link'

// // // export default function Home() {
// // //   return (
// // //     <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
// // //       {/* Background Video */}
// // //       <video
// // //         autoPlay
// // //         loop
// // //         muted
// // //         playsInline
// // //         className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
// // //       >
// // //         <source src="/vid1.mp4" type="video/mp4" />
// // //       </video>

// // //       {/* Top Navigation */}
// // //       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6">
// // //         <a href="mailto:your@email.com" className="hover:underline text-sm">✉ Email</a>
// // //         <a href="/resume.pdf" download className="hover:underline text-sm">📄 Resume</a>
// // //       </header>

// // //       {/* Hero Section with Profile Image + About Side by Side */}
// // //       <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-10">
// // //         <img
// // //           src="/me2.jpg"
// // //           alt="Barnamay Chowdhury"
// // //           className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]"
// // //         />
// // //         <div className="max-w-xl">
// // //           <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] mb-4">
// // //             Barnamay Chowdhury
// // //           </h1>
// // //           <p className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
// // //             Full Stack Developer | Content Creator <br /> Building fast, functional and fun web experiences 🚀
// // //           </p>
// // //           <Link href="#projects">
// // //             <button className="px-8 py-3 bg-purple-700 hover:bg-pink-600 rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 text-white font-semibold">
// // //               View My Projects
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </section>

// // //       {/* About Section (Removed from previous place) */}

// // //       {/* Project Showcase */}
// // //       <section id="projects" className="py-24 bg-gradient-to-b from-black via-purple-900 to-black px-6">
// // //         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
// // //           My Projects
// // //         </h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// // //           {[
// // //             {
// // //               src: '/ts.jpg',
// // //               title: 'Event Registration System',
// // //               link: 'https://barnamay.vercel.app'
// // //             },
// // //             {
// // //               src: '/event2.jpg',
// // //               title: 'Portfolio Showcase',
// // //               link: 'https://yourportfolio.vercel.app'
// // //             },
// // //             {
// // //               src: '/su.jpg',
// // //               title: 'Startup Landing Page',
// // //               link: 'https://startupdemo.vercel.app'
// // //             },
// // //           ].map(({ src, title, link }, i) => (
// // //             <a
// // //               key={i}
// // //               href={link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="group relative overflow-hidden rounded-3xl border border-purple-700 bg-white/5 backdrop-blur-md transition-all duration-500 shadow-xl hover:scale-105 hover:border-pink-500"
// // //             >
// // //               <img src={src} alt={title} className="w-full h-[300px] object-cover group-hover:blur-[1px] transition duration-300" />
// // //               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all duration-300">
// // //                 <p className="text-white text-xl font-semibold">{title}</p>
// // //               </div>
// // //             </a>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Highlights Section */}
// // //       <section className="py-24 px-6 bg-black text-white">
// // //         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
// // //           {[
// // //             {
// // //               title: 'Hackathon Finalist',
// // //               desc: 'Finalist at XYZ Hackathon 2024',
// // //               icon: '🏆'
// // //             },
// // //             {
// // //               title: 'Open Source Contributor',
// // //               desc: 'Contributions to Prisma, Next.js, React libraries',
// // //               icon: '👨‍💻'
// // //             },
// // //             {
// // //               title: 'Tech Blogger',
// // //               desc: 'Wrote over 50 articles on Medium and Dev.to',
// // //               icon: '✍️'
// // //             }
// // //           ].map(({ title, desc, icon }) => (
// // //             <div key={title} className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
// // //               <div className="text-4xl mb-4">{icon}</div>
// // //               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
// // //               <p className="text-purple-200 text-sm">{desc}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* YouTube Channel Section */}
// // //       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
// // //         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
// // //         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
// // //           I create videos about web development, productivity and side project building.
// // //         </p>
// // //         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
// // //           <iframe
// // //             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
// // //             title="YouTube video"
// // //             frameBorder="0"
// // //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //             allowFullScreen
// // //             className="w-full h-full"
// // //           ></iframe>
// // //         </div>
// // //         <a
// // //           href="https://www.youtube.com/@yourchannel"
// // //           target="_blank"
// // //           className="mt-6 inline-block text-white underline hover:text-pink-400"
// // //         >
// // //           Visit My Channel
// // //         </a>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
// // //         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
// // //       </footer>
// // //     </main>
// // //   )
// // // }




// // // 'use client'

// // // import React from 'react'
// // // import Link from 'next/link'
// // // import ParticlesBg from '@/components/ParticlesBg'
// // // import { motion } from 'framer-motion'

// // // export default function Home() {
// // //   return (
// // //     <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
// // //       <ParticlesBg />

// // //       {/* Header */}
// // //       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6 text-sm">
// // //         <a href="mailto:your@email.com" className="hover:underline">✉ Email</a>
// // //         <a href="/resume.pdf" download className="hover:underline">📄 Resume</a>
// // //         <Link href="/about" className="hover:underline">About</Link>
// // //       </header>

// // //       {/* Hero + About Side-by-side */}
// // //       <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10 text-center md:text-left">
// // //         <img
// // //           src="/me2.jpg"
// // //           alt="Barnamay"
// // //           className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]"
// // //         />
// // //         <div className="max-w-xl">
// // //           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
// // //             className="text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] mb-4">
// // //             Barnamay Chowdhury
// // //           </motion.h1>
// // //           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
// // //             className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
// // //             Full Stack Developer | Content Creator<br />Crafting Fast, Functional & Fun Experiences 🚀
// // //           </motion.p>
// // //           <Link href="#projects">
// // //             <button className="px-8 py-3 bg-purple-700 hover:bg-pink-600 rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 text-white font-semibold">
// // //               View My Projects
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </section>

// // //       {/* Project Showcase with Flip Cards */}
// // //       <section id="projects" className="py-24 px-6 bg-gradient-to-b from-black via-purple-900 to-black">
// // //         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">My Projects</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// // //           {[{
// // //             src: '/ts.jpg',
// // //             title: 'Event System',
// // //             desc: 'Manage events securely & efficiently.',
// // //             link: 'https://barnamay.vercel.app'
// // //           }, {
// // //             src: '/event2.jpg',
// // //             title: 'Portfolio Site',
// // //             desc: 'Animated, modern personal website.',
// // //             link: 'https://yourportfolio.vercel.app'
// // //           }, {
// // //             src: '/su.jpg',
// // //             title: 'Startup Page',
// // //             desc: 'Bold, conversion-focused landing.',
// // //             link: 'https://startupdemo.vercel.app'
// // //           }].map(({ src, title, desc, link }, i) => (
// // //             <div key={i} className="group [perspective:1000px]">
// // //               <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl bg-white/10 border border-purple-500 backdrop-blur-xl">
// // //                 <div className="absolute inset-0">
// // //                   <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
// // //                 </div>
// // //                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
// // //                   <h3 className="text-xl font-bold mb-2">{title}</h3>
// // //                   <p className="text-sm text-purple-300 mb-4">{desc}</p>
// // //                   <a href={link} target="_blank" className="underline hover:text-pink-400">Visit</a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Highlights */}
// // //       <section className="py-24 px-6 bg-black">
// // //         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
// // //           {[{
// // //             title: 'Hackathon Finalist',
// // //             desc: 'Top 5 at XYZ Hackathon 2024',
// // //             icon: '🏆'
// // //           }, {
// // //             title: 'Open Source Contributor',
// // //             desc: 'Contributions to Prisma & React',
// // //             icon: '👨‍💻'
// // //           }, {
// // //             title: 'Tech Blogger',
// // //             desc: '50+ articles on Medium & Dev.to',
// // //             icon: '✍️'
// // //           }].map(({ title, desc, icon }, i) => (
// // //             <div key={i} className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
// // //               <div className="text-4xl mb-4">{icon}</div>
// // //               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
// // //               <p className="text-purple-200 text-sm">{desc}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* YouTube Section */}
// // //       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
// // //         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
// // //         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
// // //           I share videos on dev tips, productivity & side projects.
// // //         </p>
// // //         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
// // //           <iframe
// // //             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
// // //             title="YouTube video"
// // //             frameBorder="0"
// // //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //             allowFullScreen
// // //             className="w-full h-full"
// // //           ></iframe>
// // //         </div>
// // //         <a
// // //           href="https://www.youtube.com/@yourchannel"
// // //           target="_blank"
// // //           className="mt-6 inline-block text-white underline hover:text-pink-400"
// // //         >Visit My Channel</a>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
// // //         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
// // //       </footer>
// // //     </main>
// // //   )
// // // }



// // // 'use client'

// // // import React from 'react'
// // // import Link from 'next/link'
// // // import ParticlesBg from '@/components/ParticlesBg'
// // // import { motion } from 'framer-motion'

// // // export default function Home() {
// // //   return (
// // //     <main className="relative bg-black text-white font-sans overflow-x-hidden">
// // //       <ParticlesBg />

// // //       {/* Header */}
// // //       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6 text-sm">
// // //         <a href="mailto:your@email.com" className="hover:underline">✉ Email</a>
// // //         <a href="/resume.pdf" download className="hover:underline">📄 Resume</a>
// // //         <Link href="/about" className="hover:underline">About</Link>
// // //       </header>

// // //       {/* Hero Section */}
// // //       <section className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 py-24 gap-10 text-center md:text-left">
// // //         <img
// // //           src="/me2.jpg"
// // //           alt="Barnamay"
// // //           className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]"
// // //         />
// // //         <div className="max-w-xl">
// // //           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
// // //             className="text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] mb-4">
// // //             Barnamay Chowdhury
// // //           </motion.h1>
// // //           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
// // //             className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
// // //             Full Stack Developer | Content Creator<br />Crafting Fast, Functional & Fun Experiences 🚀
// // //           </motion.p>
// // //           <Link href="#projects">
// // //             <button className="px-8 py-3 bg-purple-700 hover:bg-pink-600 rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 text-white font-semibold">
// // //               View My Projects
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </section>

// // //       {/* Projects with Flip Cards */}
// // //       <section id="projects" className="py-24 px-6 bg-gradient-to-b from-black via-purple-900 to-black">
// // //         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">My Projects</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// // //           {[{
// // //             src: '/ts.jpg',
// // //             title: 'Event System',
// // //             desc: 'Manage events securely & efficiently.',
// // //             link: 'https://barnamay.vercel.app'
// // //           }, {
// // //             src: '/event2.jpg',
// // //             title: 'Portfolio Site',
// // //             desc: 'Animated, modern personal website.',
// // //             link: 'https://yourportfolio.vercel.app'
// // //           }, {
// // //             src: '/su.jpg',
// // //             title: 'Startup Page',
// // //             desc: 'Bold, conversion-focused landing.',
// // //             link: 'https://startupdemo.vercel.app'
// // //           }].map(({ src, title, desc, link }, i) => (
// // //             <div key={i} className="group [perspective:1000px]">
// // //               <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl bg-white/10 border border-purple-500 backdrop-blur-xl">
// // //                 <div className="absolute inset-0">
// // //                   <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
// // //                 </div>
// // //                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
// // //                   <h3 className="text-xl font-bold mb-2">{title}</h3>
// // //                   <p className="text-sm text-purple-300 mb-4">{desc}</p>
// // //                   <a href={link} target="_blank" className="underline hover:text-pink-400">Visit</a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Highlights */}
// // //       <section className="py-24 px-6 bg-black">
// // //         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
// // //           {[{
// // //             title: 'Hackathon Finalist',
// // //             desc: 'Top 5 at XYZ Hackathon 2024',
// // //             icon: '🏆'
// // //           }, {
// // //             title: 'Open Source Contributor',
// // //             desc: 'Contributions to Prisma & React',
// // //             icon: '👨‍💻'
// // //           }, {
// // //             title: 'Tech Blogger',
// // //             desc: '50+ articles on Medium & Dev.to',
// // //             icon: '✍️'
// // //           }].map(({ title, desc, icon }, i) => (
// // //             <div key={i} className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
// // //               <div className="text-4xl mb-4">{icon}</div>
// // //               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
// // //               <p className="text-purple-200 text-sm">{desc}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* YouTube Channel */}
// // //       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
// // //         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
// // //         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
// // //           I share videos on dev tips, productivity & side projects.
// // //         </p>
// // //         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
// // //           <iframe
// // //             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
// // //             title="YouTube video"
// // //             frameBorder="0"
// // //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //             allowFullScreen
// // //             className="w-full h-full"
// // //           ></iframe>
// // //         </div>
// // //         <a
// // //           href="https://www.youtube.com/@yourchannel"
// // //           target="_blank"
// // //           className="mt-6 inline-block text-white underline hover:text-pink-400"
// // //         >Visit My Channel</a>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
// // //         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
// // //       </footer>
// // //     </main>
// // //   )
// // // }




// // // 'use client'

// // // import React from 'react'
// // // import Link from 'next/link'
// // // import ParticlesBg from '@/components/ParticlesBg'
// // // import { motion } from 'framer-motion'

// // // export default function Home() {
// // //   return (
// // //     <main className="relative bg-black text-white font-sans overflow-x-hidden">
// // //       <ParticlesBg />

// // //       {/* Header */}
// // //       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6 text-sm">
// // //         <a href="mailto:your@email.com" className="hover:underline">✉ Email</a>
// // //         <a href="/resume.pdf" download className="hover:underline">📄 Resume</a>
// // //         <Link href="/about" className="hover:underline">About</Link>
// // //       </header>

// // //       {/* Hero Section */}
// // //       {/* Hero + Projects Background Video Section */}
// // //       <section className="relative z-0 pt-24 pb-0 px-6 overflow-hidden">

// // //         {/* 🔥 Background Video (merged behind hero + projects) */}
// // //         <video
// // //           autoPlay
// // //           loop
// // //           muted
// // //           playsInline
// // //           className="absolute inset-0 w-full h-full object-cover opacity-60 z-[-1]"
// // //         >
// // //           <source src="/vid1.mp4" type="video/mp4" />
// // //           Your browser does not support the video tag.
// // //         </video>

// // //         {/* ✨ Gradient Overlay to merge with "My Projects" */}
// // //         <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-black/70 to-[#2a003f] z-0" />

// // //         {/* Hero Content */}
// // //         <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left relative z-10">
// // //           <img
// // //             src="/me2.jpg"
// // //             alt="Barnamay"
// // //             className="relative z-20 w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]"
// // //           />
// // //           <div className="max-w-xl">
// // //             <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
// // //               className="text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] mb-4">
// // //               Barnamay Chowdhury
// // //             </motion.h1>
// // //             <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
// // //               className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
// // //               Full Stack Developer | Content Creator<br />Crafting Fast, Functional & Fun Experiences 🚀
// // //             </motion.p>
// // //             <Link href="#projects">
// // //               <button className="px-8 py-3 bg-purple-700 hover:bg-pink-600 rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 text-white font-semibold">
// // //                 View My Projects
// // //               </button>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* My Projects Section (Directly continues visually from video) */}
// // //       <section id="projects" className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#2a003f] via-purple-900 to-black">
// // //         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">My Projects</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// // //           {[{
// // //             src: '/ts.jpg',
// // //             title: 'Event System',
// // //             desc: 'Manage events securely & efficiently.',
// // //             link: 'https://barnamay.vercel.app'
// // //           }, {
// // //             src: '/event2.jpg',
// // //             title: 'Portfolio Site',
// // //             desc: 'Animated, modern personal website.',
// // //             link: 'https://yourportfolio.vercel.app'
// // //           }, {
// // //             src: '/su.jpg',
// // //             title: 'Startup Page',
// // //             desc: 'Bold, conversion-focused landing.',
// // //             link: 'https://startupdemo.vercel.app'
// // //           }].map(({ src, title, desc, link }, i) => (
// // //             <div key={i} className="group [perspective:1000px]">
// // //               <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl bg-white/10 border border-purple-500 backdrop-blur-xl">
// // //                 <div className="absolute inset-0">
// // //                   <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
// // //                 </div>
// // //                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
// // //                   <h3 className="text-xl font-bold mb-2">{title}</h3>
// // //                   <p className="text-sm text-purple-300 mb-4">{desc}</p>
// // //                   <a href={link} target="_blank" className="underline hover:text-pink-400">Visit</a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>


// // //       {/* Highlights */}
// // //       <section className="py-24 px-6 bg-black">
// // //         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
// // //           {[{
// // //             title: 'Hackathon Finalist',
// // //             desc: 'Top 5 at XYZ Hackathon 2024',
// // //             icon: '🏆'
// // //           }, {
// // //             title: 'Open Source Contributor',
// // //             desc: 'Contributions to Prisma & React',
// // //             icon: '👨‍💻'
// // //           }, {
// // //             title: 'Tech Blogger',
// // //             desc: '50+ articles on Medium & Dev.to',
// // //             icon: '✍️'
// // //           }].map(({ title, desc, icon }, i) => (
// // //             <div key={i} className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
// // //               <div className="text-4xl mb-4">{icon}</div>
// // //               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
// // //               <p className="text-purple-200 text-sm">{desc}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* YouTube Channel */}
// // //       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
// // //         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
// // //         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
// // //           I share videos on dev tips, productivity & side projects.
// // //         </p>
// // //         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
// // //           <iframe
// // //             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
// // //             title="YouTube video"
// // //             frameBorder="0"
// // //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //             allowFullScreen
// // //             className="w-full h-full"
// // //           ></iframe>
// // //         </div>
// // //         <a
// // //           href="https://www.youtube.com/@yourchannel"
// // //           target="_blank"
// // //           className="mt-6 inline-block text-white underline hover:text-pink-400"
// // //         >Visit My Channel</a>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
// // //         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
// // //       </footer>
// // //     </main>
// // //   )
// // // }




// // 'use client'

// // import React from 'react'
// // import Link from 'next/link'
// // import ParticlesBg from '@/components/ParticlesBg'
// // import { motion } from 'framer-motion'

// // export default function Home() {
// //   return (
// //     <main className="relative bg-black text-white font-sans overflow-x-hidden">
// //       <ParticlesBg />

// //       {/* Header */}
// //       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6 text-sm">
// //         <a href="mailto:your@email.com" className="hover:underline">✉ Email</a>
// //         <a href="/resume.pdf" download className="hover:underline">📄 Resume</a>
// //         <Link href="/about" className="hover:underline">About</Link>
// //       </header>

// //       {/* Hero + Projects Background Video Section */}
// //       <section className="relative z-0 pt-24 pb-0 px-6 overflow-hidden">
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           className="absolute inset-0 w-full h-full object-cover opacity-60 z-[-1]"
// //         >
// //           <source src="/vid1.mp4" type="video/mp4" />
// //         </video>

// //         <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-black/70 to-[#2a003f] z-0" />

// //         <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left relative z-10">
// //           <motion.img
// //             src="/me2.jpg"
// //             alt="Barnamay"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8 }}
// //             className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300"
// //           />
// //           <div className="max-w-xl">
// //             <motion.h1
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.7 }}
// //               className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-4"
// //             >
// //               Barnamay Chowdhury
// //             </motion.h1>
// //             <motion.p
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.3 }}
// //               className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
// //             >
// //               Full Stack Developer | Content Creator<br />Crafting Fast, Functional & Fun Experiences 🚀
// //             </motion.p>
// //             <Link href="#projects">
// //               <motion.button
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="px-8 py-3 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 rounded-full shadow-lg text-white font-semibold transition-all duration-300"
// //               >
// //                 View My Projects
// //               </motion.button>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* My Projects Section */}
// //       <section id="projects" className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#2a003f] via-purple-900 to-black">
// //         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse">My Projects</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
// //           {[{
// //             src: '/ts.jpg',
// //             title: 'Event System',
// //             desc: 'Manage events securely & efficiently.',
// //             link: 'https://barnamay.vercel.app'
// //           }, {
// //             src: '/event2.jpg',
// //             title: 'Portfolio Site',
// //             desc: 'Animated, modern personal website.',
// //             link: 'https://yourportfolio.vercel.app'
// //           }, {
// //             src: '/su.jpg',
// //             title: 'Startup Page',
// //             desc: 'Bold, conversion-focused landing.',
// //             link: 'https://startupdemo.vercel.app'
// //           }].map(({ src, title, desc, link }, i) => (
// //             <div key={i} className="group [perspective:1000px]">
// //               <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl bg-white/10 border border-purple-500 backdrop-blur-xl">
// //                 <div className="absolute inset-0">
// //                   <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
// //                 </div>
// //                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
// //                   <h3 className="text-xl font-bold mb-2">{title}</h3>
// //                   <p className="text-sm text-purple-300 mb-4">{desc}</p>
// //                   <a href={link} target="_blank" className="underline hover:text-pink-400">Visit</a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Highlights */}
// //       <section className="py-24 px-6 bg-black">
// //         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
// //           {[{
// //             title: 'Hackathon Finalist',
// //             desc: 'Top 5 at XYZ Hackathon 2024',
// //             icon: '🏆'
// //           }, {
// //             title: 'Open Source Contributor',
// //             desc: 'Contributions to Prisma & React',
// //             icon: '👨‍💻'
// //           }, {
// //             title: 'Tech Blogger',
// //             desc: '50+ articles on Medium & Dev.to',
// //             icon: '✍️'
// //           }].map(({ title, desc, icon }, i) => (
// //             <motion.div
// //               key={i}
// //               whileHover={{ scale: 1.05 }}
// //               className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 transition"
// //             >
// //               <div className="text-4xl mb-4">{icon}</div>
// //               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
// //               <p className="text-purple-200 text-sm">{desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* YouTube Channel */}
// //       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
// //         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
// //         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
// //           I share videos on dev tips, productivity & side projects.
// //         </p>
// //         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
// //           <iframe
// //             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
// //             title="YouTube video"
// //             frameBorder="0"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //             allowFullScreen
// //             className="w-full h-full"
// //           ></iframe>
// //         </div>
// //         <a
// //           href="https://www.youtube.com/@yourchannel"
// //           target="_blank"
// //           className="mt-6 inline-block text-white underline hover:text-pink-400"
// //         >Visit My Channel</a>
// //       </section>

// //       {/* Footer */}
// //       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
// //         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
// //       </footer>
// //     </main>
// //   )
// // }




// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import ParticlesBg from '@/components/ParticlesBg'
// import { motion } from 'framer-motion'

// export default function Home() {
//   return (
//     <main className="relative bg-black text-white font-sans overflow-x-hidden">
//       <ParticlesBg />

//       {/* Header */}
//       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6 text-sm">
//         <a href="mailto:your@email.com" className="hover:underline">✉ Email</a>
//         <a href="/resume.pdf" download className="hover:underline">📄 Resume</a>
//         <Link href="/about" className="hover:underline">About</Link>
//       </header>

//       {/* Hero + Projects Background Video Section */}
//       <section className="relative z-0 pt-24 pb-0 px-6 overflow-hidden">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full min-h-[150vh] object-cover opacity-40 z-[-1] scale-105 blur-[1px]"
//         >
//           <source src="/vid1.mp4" type="video/mp4" />
//         </video>

//         <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-black/60 to-[#2a003f]/80 z-0 opacity-40" />

//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left relative z-10">
//           <motion.img
//             src="/me2.jpg"
//             alt="Barnamay"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300"
//           />
//           <div className="max-w-xl">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-4"
//             >
//               Barnamay Chowdhury
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
//             >
//               Full Stack Developer | Content Creator<br />Crafting Fast, Functional & Fun Experiences 🚀
//             </motion.p>
//             <Link href="#projects">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 rounded-full shadow-lg text-white font-semibold transition-all duration-300"
//               >
//                 View My Projects
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* My Projects Section */}
//       <section id="projects" className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-[#2a003f]/80 to-black/90">
//         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse">My Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[{
//             src: '/ts.jpg',
//             title: 'Event System',
//             desc: 'Manage events securely & efficiently.',
//             link: 'https://barnamay.vercel.app'
//           }, {
//             src: '/event2.jpg',
//             title: 'Portfolio Site',
//             desc: 'Animated, modern personal website.',
//             link: 'https://yourportfolio.vercel.app'
//           }, {
//             src: '/su.jpg',
//             title: 'Startup Page',
//             desc: 'Bold, conversion-focused landing.',
//             link: 'https://startupdemo.vercel.app'
//           }].map(({ src, title, desc, link }, i) => (
//             <div key={i} className="group [perspective:1000px]">
//               <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl bg-white/10 border border-purple-500 backdrop-blur-xl">
//                 <div className="absolute inset-0">
//                   <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                   <h3 className="text-xl font-bold mb-2">{title}</h3>
//                   <p className="text-sm text-purple-300 mb-4">{desc}</p>
//                   <a href={link} target="_blank" className="underline hover:text-pink-400">Visit</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="py-24 px-6 bg-black">
//         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           {[{
//             title: 'Hackathon Finalist',
//             desc: 'Top 5 at XYZ Hackathon 2024',
//             icon: '🏆'
//           }, {
//             title: 'Open Source Contributor',
//             desc: 'Contributions to Prisma & React',
//             icon: '👨‍💻'
//           }, {
//             title: 'Tech Blogger',
//             desc: '50+ articles on Medium & Dev.to',
//             icon: '✍️'
//           }].map(({ title, desc, icon }, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 transition"
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
//               <p className="text-purple-200 text-sm">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* YouTube Channel */}
//       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
//         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
//           I share videos on dev tips, productivity & side projects.
//         </p>
//         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
//           <iframe
//             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//             title="YouTube video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//         <a
//           href="https://www.youtube.com/@yourchannel"
//           target="_blank"
//           className="mt-6 inline-block text-white underline hover:text-pink-400"
//         >Visit My Channel</a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
//         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
//       </footer>
//     </main>
//   )
// }




// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import ParticlesBg from '@/components/ParticlesBg'
// import { motion } from 'framer-motion'

// export default function Home() {
//   return (
//     <main className="relative bg-black text-white font-sans overflow-x-hidden">
//       <ParticlesBg />

//       {/* 🔥 Global Background Video (spanning whole page) */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="fixed top-0 left-0 w-full h-full object-cover opacity-30 -z-10 scale-105 blur-sm"
//       >
//         <source src="/vid1.mp4" type="video/mp4" />
//       </video>

//       {/* Header */}
//       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6 text-sm">
//         <a href="mailto:your@email.com" className="hover:underline">✉ Email</a>
//         <a href="/resume.pdf" download className="hover:underline">📄 Resume</a>
//         <Link href="/about" className="hover:underline">About</Link>
//       </header>

//       {/* Hero Section */}
//       <section className="relative z-10 pt-24 pb-0 px-6 overflow-hidden">
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
//           <motion.img
//             src="/me2.jpg"
//             alt="Barnamay"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300"
//           />
//           <div className="max-w-xl">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-4"
//             >
//               Barnamay Chowdhury
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
//             >
//               Full Stack Developer | Content Creator<br />Crafting Fast, Functional & Fun Experiences 🚀
//             </motion.p>
//             <Link href="#projects">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 rounded-full shadow-lg text-white font-semibold transition-all duration-300"
//               >
//                 View My Projects
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* My Projects Section */}
//       <section id="projects" className="relative z-10 py-24 px-6 bg-gradient-to-b from-black/60 via-[#2a003f]/80 to-black/90 backdrop-blur-sm">
//         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse">My Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[{
//             src: '/ts.jpg',
//             title: 'Event System',
//             desc: 'Manage events securely & efficiently.',
//             link: 'https://barnamay.vercel.app'
//           }, {
//             src: '/event2.jpg',
//             title: 'Portfolio Site',
//             desc: 'Animated, modern personal website.',
//             link: 'https://yourportfolio.vercel.app'
//           }, {
//             src: '/su.jpg',
//             title: 'Startup Page',
//             desc: 'Bold, conversion-focused landing.',
//             link: 'https://startupdemo.vercel.app'
//           }].map(({ src, title, desc, link }, i) => (
//             <div key={i} className="group [perspective:1000px]">
//               <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl bg-white/10 border border-purple-500 backdrop-blur-xl">
//                 <div className="absolute inset-0">
//                   <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                   <h3 className="text-xl font-bold mb-2">{title}</h3>
//                   <p className="text-sm text-purple-300 mb-4">{desc}</p>
//                   <a href={link} target="_blank" className="underline hover:text-pink-400">Visit</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="py-24 px-6 bg-black">
//         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           {[{
//             title: 'Hackathon Finalist',
//             desc: 'Top 5 at XYZ Hackathon 2024',
//             icon: '🏆'
//           }, {
//             title: 'Open Source Contributor',
//             desc: 'Contributions to Prisma & React',
//             icon: '👨‍💻'
//           }, {
//             title: 'Tech Blogger',
//             desc: '50+ articles on Medium & Dev.to',
//             icon: '✍️'
//           }].map(({ title, desc, icon }, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 transition"
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
//               <p className="text-purple-200 text-sm">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* YouTube Channel */}
//       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
//         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
//           I share videos on dev tips, productivity & side projects.
//         </p>
//         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
//           <iframe
//             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//             title="YouTube video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//         <a
//           href="https://www.youtube.com/@yourchannel"
//           target="_blank"
//           className="mt-6 inline-block text-white underline hover:text-pink-400"
//         >Visit My Channel</a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
//         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
//       </footer>
//     </main>
//   )
// }





// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import ParticlesBg from '@/components/ParticlesBg'
// import { motion } from 'framer-motion'

// export default function Home() {
//   return (
//     <main className="relative bg-black text-white font-sans overflow-x-hidden">
//       <ParticlesBg />

//       {/* Header */}
//       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6 text-sm">
//         <a href="mailto:your@email.com" className="hover:underline">✉ Email</a>
//         <a href="/resume.pdf" download className="hover:underline">📄 Resume</a>
//         <Link href="/about" className="hover:underline">About</Link>
//       </header>

//       {/* Hero + Projects Background Video Section */}
//       <section className="relative z-0 pt-24 pb-0 px-6 overflow-hidden">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover opacity-60 z-[-1]"
//         >
//           <source src="/vid1.mp4" type="video/mp4" />
//         </video>

//         <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-black/70 to-[#2a003f] z-0" />

//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left relative z-10">
//           <motion.img
//             src="/me2.jpg"
//             alt="Barnamay"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-300"
//           />
//           <div className="max-w-xl">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-4"
//             >
//               Barnamay Chowdhury
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]"
//             >
//               Full Stack Developer | Content Creator<br />Crafting Fast, Functional & Fun Experiences 🚀
//             </motion.p>
//             <Link href="#projects">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 rounded-full shadow-lg text-white font-semibold transition-all duration-300"
//               >
//                 View My Projects
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* My Projects Section */}
//       <section id="projects" className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#2a003f] via-purple-900 to-black">
//         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse">My Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[{
//             src: '/ts.jpg',
//             title: 'Event System',
//             desc: 'Manage events securely & efficiently.',
//             link: 'https://barnamay.vercel.app'
//           }, {
//             src: '/event2.jpg',
//             title: 'Portfolio Site',
//             desc: 'Animated, modern personal website.',
//             link: 'https://yourportfolio.vercel.app'
//           }, {
//             src: '/su.jpg',
//             title: 'Startup Page',
//             desc: 'Bold, conversion-focused landing.',
//             link: 'https://startupdemo.vercel.app'
//           }].map(({ src, title, desc, link }, i) => (
//             <div key={i} className="group [perspective:1000px]">
//               <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-xl bg-white/10 border border-purple-500 backdrop-blur-xl">
//                 <div className="absolute inset-0">
//                   <img src={src} alt={title} className="h-full w-full object-cover rounded-3xl" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                   <h3 className="text-xl font-bold mb-2">{title}</h3>
//                   <p className="text-sm text-purple-300 mb-4">{desc}</p>
//                   <a href={link} target="_blank" className="underline hover:text-pink-400">Visit</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="py-24 px-6 bg-black">
//         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           {[{
//             title: 'Hackathon Finalist',
//             desc: 'Top 5 at XYZ Hackathon 2024',
//             icon: '🏆'
//           }, {
//             title: 'Open Source Contributor',
//             desc: 'Contributions to Prisma & React',
//             icon: '👨‍💻'
//           }, {
//             title: 'Tech Blogger',
//             desc: '50+ articles on Medium & Dev.to',
//             icon: '✍️'
//           }].map(({ title, desc, icon }, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 transition"
//             >
//               <div className="text-4xl mb-4">{icon}</div>
//               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
//               <p className="text-purple-200 text-sm">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* YouTube Channel */}
//       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
//         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
//           I share videos on dev tips, productivity & side projects.
//         </p>
//         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
//           <iframe
//             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//             title="YouTube video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//         <a
//           href="https://www.youtube.com/@yourchannel"
//           target="_blank"
//           className="mt-6 inline-block text-white underline hover:text-pink-400"
//         >Visit My Channel</a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
//         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
//       </footer>
//     </main>
//   )
// }



// 'use client'

// import React from 'react'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 blur-sm"
//       >
//         <source src="/vid1.mp4" type="video/mp4" />
//       </video>

//       {/* Top Navigation */}
//       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6">
//         <a href="mailto:your@email.com" className="hover:underline text-sm">✉ Email</a>
//         <a href="/resume.pdf" download className="hover:underline text-sm">📄 Resume</a>
//       </header>

//       {/* Hero Section with Profile Image + About Side by Side */}
//       <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-10">
//         <img
//           src="/me2.jpg"
//           alt="Barnamay Chowdhury"
//           className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]"
//         />
//         <div className="max-w-xl">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] mb-4">
//             Barnamay Chowdhury
//           </h1>
//           <p className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
//             Full Stack Developer | Content Creator <br /> Building fast, functional and fun web experiences 🚀
//           </p>
//           <Link href="#projects">
//             <button className="px-8 py-3 bg-purple-700 hover:bg-pink-600 rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 text-white font-semibold">
//               View My Projects
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* About Section (Removed from previous place) */}

//       {/* Project Showcase */}
//       <section id="projects" className="py-24 bg-gradient-to-b from-black via-purple-900 to-black px-6">
//         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
//           My Projects
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             {
//               video: '/vid4.mp4', // your video file here
//               title: 'Event Registration System',
//               link: 'https://barnamay.vercel.app',
//               isVideo: true
//             },

//             {
//               src: '/event2.jpg',
//               title: 'Portfolio Showcase',
//               link: 'https://yourportfolio.vercel.app'
//             },
//             {
//               src: '/su.jpg',
//               title: 'Startup Landing Page',
//               link: 'https://startupdemo.vercel.app'
//             },
//           ].map(({ src, title, link }, i) => (
//             <a
//               key={i}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative overflow-hidden rounded-3xl border border-purple-700 bg-white/5 backdrop-blur-md transition-all duration-500 shadow-xl hover:scale-105 hover:border-pink-500"
//             >
//               <img src={src} alt={title} className="w-full h-[300px] object-cover group-hover:blur-[1px] transition duration-300" />
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all duration-300">
//                 <p className="text-white text-xl font-semibold">{title}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-24 px-6 bg-black text-white">
//         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           {[
//             {
//               title: 'Hackathon Finalist',
//               desc: 'Finalist at XYZ Hackathon 2024',
//               icon: '🏆'
//             },
//             {
//               title: 'Open Source Contributor',
//               desc: 'Contributions to Prisma, Next.js, React libraries',
//               icon: '👨‍💻'
//             },
//             {
//               title: 'Tech Blogger',
//               desc: 'Wrote over 50 articles on Medium and Dev.to',
//               icon: '✍️'
//             }
//           ].map(({ title, desc, icon }) => (
//             <div key={title} className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
//               <div className="text-4xl mb-4">{icon}</div>
//               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
//               <p className="text-purple-200 text-sm">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* YouTube Channel Section */}
//       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
//         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
//           I create videos about web development, productivity and side project building.
//         </p>
//         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
//           <iframe
//             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//             title="YouTube video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//         <a
//           href="https://www.youtube.com/@yourchannel"
//           target="_blank"
//           className="mt-6 inline-block text-white underline hover:text-pink-400"
//         >
//           Visit My Channel
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
//         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
//       </footer>
//     </main>
//   )
// }




// 'use client'

// import React from 'react'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 blur-sm"
//       >
//         <source src="/vid1.mp4" type="video/mp4" />
//       </video>

//       {/* Top Navigation */}
//       <header className="absolute top-0 right-0 p-4 z-20 flex items-center gap-6">
//         <a href="mailto:your@email.com" className="hover:underline text-sm">✉ Email</a>
//         <a href="/resume.pdf" download className="hover:underline text-sm">📄 Resume</a>
//       </header>

//       {/* Hero Section */}
//       <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-10">
//         <img
//           src="/me2.jpg"
//           alt="Barnamay Chowdhury"
//           className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.3)]"
//         />
//         <div className="max-w-xl">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] mb-4">
//             Barnamay Chowdhury
//           </h1>
//           <p className="text-lg text-purple-200 font-medium mb-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
//             Full Stack Developer | Content Creator <br /> Building fast, functional and fun web experiences 🚀
//           </p>
//           <Link href="#projects">
//             <button className="px-8 py-3 bg-purple-700 hover:bg-pink-600 rounded-full shadow-lg shadow-pink-500/40 transition-all duration-300 text-white font-semibold">
//               View My Projects
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Project Showcase */}
//       <section id="projects" className="py-24 bg-gradient-to-b from-black via-purple-900 to-black px-6">
//         <h2 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
//           My Projects
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             {
//               video: '/vid8.mp4',
//               title: 'Event Registration System',
//               link: 'https://eve-reg.vercel.app/'
//             },
//             {
//               video: '/vid5.mp4',
//               title: 'Portfolio Showcase',
//               link: 'https://yourportfolio.vercel.app'
//             },
//             {
//               video: '/vid6.mp4',
//               title: 'Startup Landing Page',
//               link: 'https://startupdemo.vercel.app'
//             },
//           ].map(({ video, title, link }, i) => (
//             <a
//               key={i}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group [perspective:1000px] block"
//             >
//               <div className="relative h-56 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-active:[transform:rotateY(180deg)] rounded-3xl shadow-xl border border-purple-700 bg-white/10 backdrop-blur-md">

//                 {/* Front Side */}
//                 <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden">
//                   <video
//                     src={video}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white p-4 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                   <h3 className="text-xl font-bold mb-2">{title}</h3>
//                   <p className="text-purple-300 text-sm">Click to view</p>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>

//       </section>


//       {/* Highlights Section */}
//       <section className="py-24 px-6 bg-black text-white">
//         <h2 className="text-center text-4xl font-bold mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Highlights</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           {[
//             {
//               title: 'Hackathon Finalist',
//               desc: 'Finalist at XYZ Hackathon 2024',
//               icon: '🏆'
//             },
//             {
//               title: 'Open Source Contributor',
//               desc: 'Contributions to Prisma, Next.js, React libraries',
//               icon: '👨‍💻'
//             },
//             {
//               title: 'Tech Blogger',
//               desc: 'Wrote over 50 articles on Medium and Dev.to',
//               icon: '✍️'
//             }
//           ].map(({ title, desc, icon }) => (
//             <div key={title} className="p-6 rounded-xl bg-white/5 border border-purple-700 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
//               <div className="text-4xl mb-4">{icon}</div>
//               <h3 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{title}</h3>
//               <p className="text-purple-200 text-sm">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* YouTube Channel Section */}
//       <section className="py-24 bg-gradient-to-t from-black via-pink-900 to-black px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">🎥 YouTube Channel</h2>
//         <p className="text-purple-200 max-w-2xl mx-auto mb-8">
//           I create videos about web development, productivity and side project building.
//         </p>
//         <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
//           <iframe
//             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//             title="YouTube video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//         <a
//           href="https://www.youtube.com/@yourchannel"
//           target="_blank"
//           className="mt-6 inline-block text-white underline hover:text-pink-400"
//         >
//           Visit My Channel
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
//         Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
//       </footer>
//     </main>
//   )
// }




'use client'

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
          <span>✉</span> <span>Contact Me</span>
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
            <a href="mailto:barnamay1234@gmail.com" className="hover:text-pink-400">📧</a>
            <a href="https://github.com/barnamay" target="_blank" className="hover:text-pink-400">🐙</a>
            <a href="https://linkedin.com/in/barnamay" target="_blank" className="hover:text-pink-400">💼</a>
            <a href="https://youtube.com/@yourchannel" target="_blank" className="hover:text-pink-400">🎬</a>
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
            I'm <span className="font-semibold text-white">Barnamay Chowdhury</span>, a passionate Full Stack Developer skilled in building fast, scalable, and user-focused web apps using tools like <span className="text-pink-400">Next.js</span>, <span className="text-pink-400">Prisma</span>, <span className="text-pink-400">Tailwind CSS</span>, and <span className="text-pink-400">PostgreSQL</span>.
          </p>
          <p>
            I focus on delivering projects that are not only functional but also visually delightful. I enjoy adding subtle animations, responsive layouts, and interactive UI to elevate user experiences.
          </p>
          <p>
            I also create content on <span className="text-pink-400 font-semibold">YouTube</span>, contribute to <span className="text-pink-400 font-semibold">open-source projects</span>, and actively participate in developer communities like <span className="text-pink-400 font-semibold">GDSC/Google Developer Groups</span>.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-white text-xl">
            <a href="mailto:your@email.com" className="hover:text-pink-400">📧 Mail</a>
            <a href="https://github.com/barnamay" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">🐙 GitHub</a>
            <a href="https://linkedin.com/in/barnamay" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">💼 LinkedIn</a>
          </div>
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
              video: '/vid5.mp4',
              title: 'Portfolio Showcase',
              link: 'https://yourportfolio.vercel.app',
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
              title: 'YouTube Creator',
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
            '/gal1.jpg',
            '/gal2.jpg',
            '/gal3.jpg',
            '/gal4.jpg',
            '/gal5.jpg',
            '/gal6.jpg'
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
        <div className="max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg shadow-pink-500/30">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <a
          href="https://www.youtube.com/@yourchannel"
          target="_blank"
          className="mt-6 inline-block text-white underline hover:text-pink-400"
        >
          Visit My Channel
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-8 bg-black/80 border-t border-white/10">
        Built with 💖 by <span className="text-white font-semibold">Barnamay</span> — 2025
      </footer>
    </main>
  )
}
