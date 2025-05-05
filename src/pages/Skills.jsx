import { Link } from "react-router-dom";
import { Database, Server, Palette, LayoutGrid, GitBranch } from "lucide-react"
import Footer from "../components/Footer";

function Skills(){
    const skillCategories = [
        {
          name: "Frontend Development",
          icon: <LayoutGrid className="w-6 h-6" />,
          skills: ["React", "CSS3", "JavaScript",  "HTML5", "Tailwind CSS", "DOM Manipulation"],
        },
        {
          name: "Backend Development",
          icon: <Server className="w-6 h-6" />,
          skills: ["Node.js",  "Python", "MVC Architecture", "C# (.NET)"],
        },
        {
          name: "Database",
          icon: <Database className="w-6 h-6" />,
          skills: ["MongoDB", "PostgreSQL", "MySQL"],
        },
        {
          name: "DevOps & Tools",
          icon: <GitBranch className="w-6 h-6" />,
          skills: ["GitHub", "Docker", "AWS", "Vercel"],
        },
        {
          name: "Design & UI/UX",
          icon: <Palette className="w-6 h-6" />,
          skills: ["Figma", "UI/UX Principles", "Responsive Design", "Prototyping", "Wireframing (Low & High Fidelity"],
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
                <h1 className="text-4xl font-bold mt-4">Skills</h1>
                <p className="text-muted-foreground mt-2">My technical expertise and capabilities</p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category) => (
                  <div
                    key={category.name}
                    className="bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                          {category.icon}
                        </div>
                        <h2 className="text-xl font-bold">{category.name}</h2>
                      </div>
    
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill}
                            className="p-2 bg-secondary rounded-md text-secondary-foreground hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    
              {/* Additional Skills Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Other Skills</h2>
    
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Agile Methodology",
                    "Performance Optimization",
                    "Adaptability",
                    "Accessibility",
                    "Testing",
                    "Problem Solving",
                    "Team Collaboration",
                    "Project Management",
                    "Creativity",
                    "Self-learning"

                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-secondary p-3 rounded-lg text-center hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      )

}
export default Skills