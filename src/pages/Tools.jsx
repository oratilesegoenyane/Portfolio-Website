import { Link } from "react-router-dom";
import { Terminal, Code, Database, Cloud, Workflow, Monitor } from "lucide-react"
import Footer from "../components/Footer";

function Tools(){
    const toolCategories = [
        {
          name: "Development Environment",
          icon: <Code className="w-6 h-6" />,
          tools: ["VS Code", "Git", "GitHub Desktop"],
        },
        {
          name: "Terminal & CLI",
          icon: <Terminal className="w-6 h-6" />,
          tools: ["Windows Terminal", "PowerShell", "npm"],
        },
        {
          name: "Deployment & Hosting",
          icon: <Cloud className="w-6 h-6" />,
          tools: ["Vercel", "Netlify", "AWS", "Google Cloud"],
        },
        {
          name: "Databases & Backend",
          icon: <Database className="w-6 h-6" />,
          tools: ["MongoDB Compass", "pgAdmin", "MySQL Workbench"],
        },
        {
          name: "Design & UI",
          icon: <Monitor className="w-6 h-6" />,
          tools: ["Figma"],
        },
        {
          name: "Productivity",
          icon: <Workflow className="w-6 h-6" />,
          tools: ["Trello", "Asana", "Discord", "Microsoft Teams", "Zoom"],
        },
      ]
    
      return (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow p-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <Link
                  to="/"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold mt-4">Tools</h1>
                <p className="text-muted-foreground mt-2">My favorite tools and technologies</p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolCategories.map((category) => (
                  <div
                    key={category.name}
                    className="bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                          {category.icon}
                        </div>
                        <h2 className="text-xl font-bold">{category.name}</h2>
                      </div>
    
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    
              {/* Terminal Section */}
              <div className="mt-12 bg-card rounded-xl shadow-md overflow-hidden">
                <div className="bg-gray-900 text-white p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-mono">terminal</div>
                </div>
                <div className="bg-gray-950 text-gray-200 p-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-green-400">user@ora-aura</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~/projects</span>
                    <span className="text-white">$ </span>
                    <span className="ml-1 animate-pulse">|</span>
                  </div>
                  <div className="mt-2 text-gray-400"># My favorite terminal commands</div>
                  <div className="mt-1">
                    <span className="text-purple-400">npm</span> run dev
                  </div>
                  <div className="mt-1">
                    <span className="text-purple-400">git</span> checkout -b feature/new-awesome-idea
                  </div>
                  <div className="mt-1">
                    <span className="text-purple-400">docker</span> compose up -d
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      )

}
export default Tools