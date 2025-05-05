import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Github, ExternalLink } from "lucide-react"
import { useState } from "react"
import Fbclone from "../assets/fbclone.jpg"
import Weather from "../assets/WeatherApp.jpg"
import Calculator from "../assets/Cal.jpg"
import WeatherPicture from "../assets/WebPic.jpg"
import Game from "../assets/Game.jpg"




const projects = [
    {
      id: 1,
      title: "Facebook Page Clone",
      description: "A static replica of Facebook's page",
      image: Fbclone,
      tags: ["HTML", "CSS"],
      github: "https://github.com/oratilesegoenyane/social-profile-page",
      demo: "https://grand-longma-e4b774.netlify.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application with interactive maps and forecasts",
      image: WeatherPicture,
      tags: ["OpenWeather API", "JavaScript", "HTML","CSS"],
      github: "https://github.com/oratilesegoenyane/js-weather-app",
      demo: "https://grand-speculoos-ec6016.netlify.app/",
    },
    {
      id: 3,
      title: "Simple Calculator",
      description: "A basic calculator that performs standard arithmetic operations",
      image: Calculator,
      tags: ["JAavaScript","HTML", "CSS"],
      github: "https://github.com/oratilesegoenyane/calculator-using-html-css-js",
      demo: "https://rad-lebkuchen-46e4f5.netlify.app/",
    },
    {
      id: 4,
      title: "Rock Paper Scissors Game",
      description: "A simple Rock Paper Scissors game against a computer opponent",
      image: Game,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/oratilesegoenyane/web-rock-paper-scissors",
      demo: "https://jocular-dragon-07f8de.netlify.app/",
    },
  ]
  
 function Projects() {
    const [activeProject, setActiveProject] = useState(null)
  
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
              <h1 className="text-4xl font-bold mt-4">Projects</h1>
              <p className="text-muted-foreground mt-2">A showcase of my development work</p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      //fill
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
  
                    {/* Overlay that appears on hover */}
                    <div
                      className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${activeProject === project.id ? "opacity-100" : "opacity-0"}`}
                    >
                      <Link
                        to={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-6 h-6 text-white" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        to={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    </div>
                  </div>
  
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
  
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <Footer />
      </div>
    )
  }
export default Projects  