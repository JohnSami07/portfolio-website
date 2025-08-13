export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">John Sami</h1>
          <p className="text-xl text-gray-600">Welcome to my portfolio</p>
        </header>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Personal portfolio website showcasing my projects, resume, and contact information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Project 1</h3>
              <p className="text-gray-600">Project description coming soon...</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Project 2</h3>
              <p className="text-gray-600">Project description coming soon...</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">Get in touch with me for collaborations and opportunities.</p>
        </section>
      </div>
    </main>
  )
}
