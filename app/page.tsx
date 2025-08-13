export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-16 bg-white rounded-2xl shadow-lg p-12">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
            JS
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">John Sami</h1>
          <p className="text-2xl text-blue-600 font-medium mb-6">Computer Science Student</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:samijohn207@gmail.com" className="hover:text-blue-600 transition-colors">
                samijohn207@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+16159382671" className="hover:text-blue-600 transition-colors">
                (615) 938-2671
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Nashville, TN</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💼</span>
              <a href="#" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">👨‍💻</span>
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              First-generation Egyptian college student pursuing a Bachelor of Science in Computer Science at Belmont University.
              Passionate about software development, problem-solving, and creating innovative solutions. Currently maintaining a
              perfect 4.0 GPA while participating in the Honors Program.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              Education
            </h2>
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
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-4">Programming Languages</h3>
                <div className="space-y-2">
                  {["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"].map((skill) => (
                    <div key={skill} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-4">Frameworks & Tools</h3>
                <div className="space-y-2">
                  {["React", "Next.js", "Node.js", "Git", "Docker", "VS Code"].map((skill) => (
                    <div key={skill} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-purple-900 mb-4">Database & Cloud</h3>
                <div className="space-y-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "AWS", "Firebase", "RESTful APIs"].map((skill) => (
                    <div key={skill} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💰</span>
                  <h3 className="text-xl font-bold text-gray-900">Personal Budget Tracker</h3>
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
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    View Demo
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                    View Code
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📚</span>
                  <h3 className="text-xl font-bold text-gray-900">Study Planner App</h3>
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
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    View Demo
                  </button>
                  <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors text-sm">
                    View Code
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🌐</span>
                  <h3 className="text-xl font-bold text-gray-900">Portfolio Website</h3>
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
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    View Live
                  </button>
                  <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors text-sm">
                    View Code
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🎮</span>
                  <h3 className="text-xl font-bold text-gray-900">Java Game Collection</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Collection of classic games implemented in Java including Tic-Tac-Toe, Snake, and Pong.
                  Demonstrates object-oriented programming and game development concepts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">Java</span>
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">Swing</span>
                  <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">OOP</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                    Play Games
                  </button>
                  <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors text-sm">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">📫</span>
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
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:samijohn207@gmail.com" className="text-blue-600 hover:underline">
                        samijohn207@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+16159382671" className="text-green-600 hover:underline">
                        (615) 938-2671
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600">💼</span>
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
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
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
