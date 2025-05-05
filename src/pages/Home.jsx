import { Link } from "react-router-dom";
import Footer from "../components/Footer";  
import { Computer, Terminal, Lightbulb } from "lucide-react"    
import { useEffect, useState } from "react";
//you might need to import motion from framer-motion


function Home(){
    const [activeBox, setActiveBox] = useState(null)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const boxes = [
    {
      id: 1,
      icon: <Computer className="w-16 h-16" fill="none" stroke="currentColor" />,
      title: "Developer",
      description: "Crafting digital experiences through code and creativity",
      links: [
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
      ],
    },
    {
      id: 2,
      icon: <Terminal className="w-16 h-16" fill="none" stroke="currentColor" />,
      title: "Tech Enthusiast",
      description: "Exploring the command line and the depths of technology",
      links: [
        { name: "Tools", href: "/tools" },
        { name: "Services", href: "/services" },
      ],
    },
    {
      id: 3,
      icon: <Lightbulb className="w-16 h-16" fill="none" stroke="currentColor"/>,
      title: "Creative Aura",
      description: "Illuminating ideas and bringing innovation to life",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full p-4">
       
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center mb-16 relative">
          {/* Animated aura circle */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            {/* Main circle with gradient */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 dark:from-purple-500/30 dark:via-pink-500/30 dark:to-orange-500/30 animate-pulse"></div>

            {/* Animated rings */}
            <div className="absolute w-80 h-80 rounded-full border border-purple-500/30 dark:border-purple-400/40 animate-ping opacity-20"></div>
            <div className="absolute w-72 h-72 rounded-full border border-pink-500/20 dark:border-pink-400/30 animate-spin-slow"></div>
            <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-orange-500/10 dark:border-orange-400/20 animate-reverse-spin"></div>

            {/* Animated particles */}
            <div className="absolute w-72 h-72">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 opacity-70"
                  style={{
                    top: `${50 + 35 * Math.sin((i / 12) * Math.PI * 2)}%`,
                    left: `${50 + 35 * Math.cos((i / 12) * Math.PI * 2)}%`,
                    animation: `float-particle ${3 + (i % 3)}s infinite ease-in-out ${i * 0.25}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Animated logo text with standard font */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold animate-text-breathe">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-purple-400 dark:via-pink-300 dark:to-orange-300">
                ora&apos;s aura
              </span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-400/20 dark:from-purple-400/30 dark:via-pink-300/30 dark:to-orange-300/30 blur-xl opacity-30 animate-pulse"></div>
          </div>

          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Exploring the intersection of development, technology, and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {boxes.map((box) => (
            <div
              key={box.id}
              className={`relative bg-card rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
                activeBox === box.id ? "scale-105 shadow-xl z-10" : activeBox !== null ? "scale-95 opacity-70" : ""
              }`}
              onMouseEnter={() => setActiveBox(box.id)}
              onMouseLeave={() => setActiveBox(null)}
            >
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="text-purple-500 mb-4 transition-transform duration-300 hover:scale-110">{box.icon}</div>
                <h2 className="text-xl font-bold mb-2">{box.title}</h2>
                <p className="text-muted-foreground mb-6">{box.description}</p>

                <div
                  className={`mt-auto transition-all duration-300 ${activeBox === box.id ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="flex flex-col gap-2">
                    {box.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )

}
export default Home