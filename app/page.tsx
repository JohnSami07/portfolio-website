'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { initializeAnimations } from './animations.js';

export default function Home() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Hero Section */}
        <header className="text-center mb-16 bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-white/20 relative z-10 hover:shadow-3xl transition-all duration-500">
          <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-400/50 shadow-2xl hover:ring-purple-400/50 transition-all duration-300 hover:scale-110">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2F580e61cfa8e8413cb51188579f3e9f67%2F1b4dc65ce9db43f09a02b97099a39866?format=webp&width=800"
              alt="John Sami - Profile Picture"
              width={160}
              height={160}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              style={{ transform: 'rotate(90deg)' }}
              priority
            />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>John Sami</h1>
          <p className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Computer Science Student</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <a href="mailto:johnsami.315@gmail.com" className="hover:text-blue-600 transition-colors">
                johnsami.315@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:+16159382671" className="hover:text-blue-600 transition-colors">
                (615) 938-2671
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-xl border-2 border-white/50 hover:scale-110 transition-all duration-300">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F580e61cfa8e8413cb51188579f3e9f67%2Fe74ca9ee73e346999ae9aeed447c111e?format=webp&width=800"
                  alt="Nashville, TN Skyline"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                <p className="text-xl text-gray-700 leading-relaxed">
                  First-generation Egyptian college student pursuing a Bachelor of Science in Computer Science at Belmont University.
                  Passionate about software development, problem-solving, and creating innovative solutions. Currently maintaining a
                  perfect 4.0 GPA while participating in the Honors Program.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center border border-white/30">
                <div className="text-center">
                  <div className="w-full h-80 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/50 hover:ring-2 hover:ring-purple-300/50 transition-all duration-500">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F580e61cfa8e8413cb51188579f3e9f67%2F981be29b3d3147608fd8c3d163ec6ad9?format=webp&width=800"
                      alt="John Sami with family - First-generation college student"
                      width={400}
                      height={320}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      style={{objectPosition: 'center 30%', transform: 'rotate(90deg)'}}
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
                    <span className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{fontFamily: 'Georgia, serif'}}>
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
                  <div className="w-full h-60 bg-white rounded-lg mb-4 overflow-hidden shadow-xl border border-white/50">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F580e61cfa8e8413cb51188579f3e9f67%2F745a9daa78074c23a8fd8f9fcf032ba9?format=webp&width=800"
                      alt="Belmont University Campus - Aerial View"
                      width={800}
                      height={240}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Belmont University Campus</p>
                  <p className="text-xs text-gray-500 mt-1">Nashville, Tennessee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/95 to-cyan-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-cyan-600 bg-clip-text text-transparent mb-8 hover:scale-105 transition-transform duration-300 text-center">
              Experience
            </h2>
            <div className="space-y-8">

              {/* iCode Instructor */}
              <div className="bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">iCode Instructor</h3>
                    <p className="text-blue-600 font-medium text-lg">Nashville, TN</p>
                    <p className="text-gray-600">Fall 2025</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">CODE</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Teach beginner coding classes covering Python fundamentals, problem solving, and small projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Prepare lesson plans, in-class exercises, and short demos; support students during labs</span>
                  </li>
                </ul>
              </div>

              {/* Belmont University Peer Tutor */}
              <div className="bg-gradient-to-br from-purple-50/80 to-violet-100/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Peer Tutor (Volunteer)</h3>
                    <p className="text-purple-600 font-medium text-lg">Belmont University - Nashville, TN</p>
                    <p className="text-gray-600">Current</p>
                  </div>
                  <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">EDU</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Support introductory CS course with labs, debugging help, and general assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Host weekly club hours guiding students through assignments and study strategies</span>
                  </li>
                </ul>
              </div>

              {/* Python Workshop Organizer */}
              <div className="bg-gradient-to-br from-green-50/80 to-emerald-100/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Beginner Python Workshop - Organizer</h3>
                    <p className="text-green-600 font-medium text-lg">Independent Project</p>
                    <p className="text-gray-600">2025</p>
                  </div>
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">PY</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Designed and delivered a 60-minute intro workshop with slides and hands-on experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Shared materials on Github and collected feedback to improve future sessions</span>
                  </li>
                </ul>
              </div>

              {/* Auto Resale */}
              <div className="bg-gradient-to-br from-orange-50/80 to-amber-100/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Auto Resale Analyst</h3>
                    <p className="text-orange-600 font-medium text-lg">Nashville, TN</p>
                    <p className="text-gray-600">Current</p>
                  </div>
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AUTO</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Build cost models (purchase, transport, parts, labor) to forecast profit margins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Applied CS skills with structured datasets (CSV), Python for data cleaning/scoring, and repeatable checklists</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent mb-8 hover:scale-105 transition-transform duration-300 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Programming & Development */}
              <div className="bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">&lt;/&gt;</span>
                  </div>
                  Programming & Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'HTML', 'CSS'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-gradient-to-br from-purple-50/80 to-violet-100/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">⚙</span>
                  </div>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'Google Cloud', 'API Integration', 'SQL Databases', 'Excel', 'Github'].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem Solving & Analysis */}
              <div className="bg-gradient-to-br from-green-50/80 to-emerald-100/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">◆</span>
                  </div>
                  Problem Solving & Analysis
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Algorithm Design', 'Debugging', 'Data Analysis'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Communication & Leadership */}
              <div className="bg-gradient-to-br from-orange-50/80 to-amber-100/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">◇</span>
                  </div>
                  Communication & Leadership
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Public Speaking', 'Teaching', 'Cross Cultural Communication', 'Time Management', 'Collaboration'].map((skill) => (
                    <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white/95 to-indigo-50/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent mb-8 hover:scale-105 transition-transform duration-300 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

              {/* Portfolio Website */}
              <div className="bg-gradient-to-br from-purple-50/80 to-violet-100/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-purple-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Portfolio Website</h3>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">WEB</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Responsive personal website deployed with Github Pages. Features modern design,
                  smooth animations, and optimized performance with quick load times.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Next.js</span>
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Tailwind CSS</span>
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Git</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-sm shadow-lg hover:shadow-xl font-medium">
                    Live Site
                  </button>
                  <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-300 text-sm font-medium">
                    Github
                  </button>
                </div>
              </div>

              {/* Crypto Watch CLI */}
              <div className="bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-blue-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Crypto Watch CLI</h3>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CLI</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Command line application that pulls live cryptocurrency prices via CoinGecko API.
                  Supports multiple symbols and currencies with interactive watch mode.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Python</span>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">API Integration</span>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">CLI</span>
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Error Handling</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm shadow-lg hover:shadow-xl font-medium">
                    Demo
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm font-medium">
                    Github
                  </button>
                </div>
              </div>

              {/* Carflip Hub */}
              <div className="bg-gradient-to-br from-green-50/80 to-emerald-100/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-green-200/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Carflip Hub</h3>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DATA</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">IN PROGRESS</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Web application that processes auction CSVs (Copart/IAAI), cleans data, and ranks listings by ROI score.
                  Features filters, VIN decode integration, and repair cost estimation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Python</span>
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Streamlit</span>
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">FastAPI</span>
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Data Analysis</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 text-sm shadow-lg hover:shadow-xl font-medium">
                    Preview
                  </button>
                  <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300 text-sm font-medium">
                    Github
                  </button>
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
                      <a href="mailto:johnsami.315@gmail.com" className="text-blue-600 hover:underline">
                        johnsami.315@gmail.com
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
                    Send Message
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
