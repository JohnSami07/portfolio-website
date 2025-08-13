'use client';
import { useEffect } from 'react';
import { initializeAnimations } from './animations.js';

export default function Home() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-16 bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-white/20 relative z-10 hover:shadow-3xl transition-all duration-500">
          <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-400/50 shadow-2xl hover:ring-purple-400/50 transition-all duration-300 hover:scale-110">
            <img
              src="/images/IMG_3180.jpeg"
              alt="John Sami - Profile Picture"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">John Sami</h1>
          <p className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium mb-6 animate-pulse">Computer Science Student</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <a href="mailto:samijohn207@gmail.com" className="hover:text-blue-600 transition-colors">
                samijohn207@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:+16159382671" className="hover:text-blue-600 transition-colors">
                (615) 938-2671
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/images/image.jpeg"
                  alt="Nashville, TN"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Nashville, TN</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  First-generation Egyptian college student pursuing a Bachelor of Science in Computer Science at Belmont University.
                  Passionate about software development, problem-solving, and creating innovative solutions. Currently maintaining a
                  perfect 4.0 GPA while participating in the Honors Program.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-64 bg-white rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/IMG_7029.jpeg"
                      alt="John Sami - About me photo"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
              Education
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-600 font-medium">Belmont University, Nashville, TN</p>
                  <p className="text-gray-600 mb-2">August 2025 - May 2029</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      GPA: 4.0/4.0
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Honors Program
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      First-generation College Student
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Programming I-II",
                      "Calculus I-II",
                      "Discrete Mathematics",
                      "Managing Business Systems",
                      "Database Design and Analysis"
                    ].map((course) => (
                      <span key={course} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-48 bg-white rounded-lg mb-4 overflow-hidden shadow-lg">
                    <img
                      src="/images/image-full.jpg"
                      alt="Belmont University Campus"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Belmont University</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">J</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Java</h3>
                <p className="text-blue-700 text-sm">Object-oriented programming</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">C++</span>
                </div>
                <h3 className="font-bold text-green-900 mb-2">C++</h3>
                <p className="text-green-700 text-sm">Systems programming</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">SQL</span>
                </div>
                <h3 className="font-bold text-purple-900 mb-2">SQL</h3>
                <p className="text-purple-700 text-sm">Database management</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">&lt;/&gt;</span>
                </div>
                <h3 className="font-bold text-orange-900 mb-2">HTML</h3>
                <p className="text-orange-700 text-sm">Web development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/95 to-indigo-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-blue-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Personal Budget Tracker</h3>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                    IMG
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  A comprehensive budgeting application built with React and Firebase. Features expense tracking,
                  budget goals, and financial insights with interactive charts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Firebase</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">Chart.js</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm shadow-lg hover:shadow-xl">
                    View Demo
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm">
                    View Code
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-green-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Study Planner App</h3>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                    IMG
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  A productivity app for students to manage assignments, track study sessions, and set academic goals.
                  Includes calendar integration and progress tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">Flask</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">SQLite</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 text-sm shadow-lg hover:shadow-xl">
                    View Demo
                  </button>
                  <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300 text-sm">
                    View Code
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-purple-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Portfolio Website</h3>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                    IMG
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  This responsive portfolio website built with Next.js and Tailwind CSS. Features modern design,
                  smooth animations, and optimized performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">Next.js</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">Tailwind CSS</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">TypeScript</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-sm shadow-lg hover:shadow-xl">
                    View Live
                  </button>
                  <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-300 text-sm">
                    View Code
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500 py-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">+</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-600 mb-2">Additional Project</h3>
                  <p className="text-gray-500">Space reserved for future projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-pink-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  I'm always interested in new opportunities, collaborations, and conversations about technology.
                  Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <span className="text-blue-600 font-semibold">@</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:samijohn207@gmail.com" className="text-blue-600 hover:underline">
                        samijohn207@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <span className="text-green-600 font-semibold">#</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+16159382671" className="text-green-600 hover:underline">
                        (615) 938-2671
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <span className="text-purple-600 font-semibold">in</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a href="#" className="text-purple-600 hover:underline">
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h3 className="font-bold bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent mb-4">Quick Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg focus:shadow-xl"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg focus:shadow-xl"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg focus:shadow-xl resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  >
                    Send Message ✨
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
