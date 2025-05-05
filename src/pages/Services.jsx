import { Link } from "react-router-dom";
import { Code, Layout, Database, Server, Palette, Sparkles } from "lucide-react"
import Footer from "../components/Footer";
//import { Image } from "lucide-react";


import BackendPic from "../assets/PicBackend.jpg"
import CreativePic from "../assets/PicCreativity.jpg"
import DatabasePic from "../assets/PicDatabase.jpg"
import FrontPic from "../assets/PicFrontend.jpg"
import UiPic from "../assets/PicUX.jpg"
import TransPic from "../assets/PicTrans.jpg"
import Database2 from "../assets/Database2.jpg"
import Transformation2 from "../assets/Transformation2.jpg"
import UX2 from "../assets/UX2.jpg"

//import Media from "../assets/Media.jpg"
{/*"/placeholder.svg?height=400&width=600", */}
 
function Services(){
    const services = [
        {
          id: 1,
          title: "Web Development",
          description: "Custom websites and web applications built with modern technologies and best practices.",
          icon: <Code className="w-10 h-10" />,
          image: FrontPic,
          features: [
            "Responsive design for all devices",
            "Performance optimization",
            "Modern frameworks and libraries (Tailwindcss, React, Next.js)",
          ],
        },
        {
          id: 2,
          title: "UI/UX Design",
          description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
          icon: <Layout className="w-10 h-10" />,
          image: UX2,
          features: [
            "User research and personas",
            "Wireframing and prototyping",
            "Visual design and branding",
            "Usability testing",
            "Design systems",
          ],
        },
        {
          id: 3,
          title: "Database Design",
          description: "Efficient, scalable database solutions tailored to your specific needs.",
          icon: <Database className="w-10 h-10" />,
          image: Database2,
          features: [
            "Schema design and optimization",
            "Data migration and integration",
            "Query optimization",
            "NoSQL and SQL databases",
            "Data security implementation",
          ],
        },
        {
          id: 4,
          title: "Backend Development",
          description: "Robust server-side solutions that power your applications.",
          icon: <Server className="w-10 h-10" />,
          image: BackendPic,
          features: [
            "API development",
            "Authentication systems",
            "Performance optimization",
          ],
        },
        {
          id: 5,
          title: "Creative Direction",
          description: "Strategic creative guidance to bring your vision to life.",
          icon: <Palette className="w-10 h-10" />,
          image: CreativePic,
          features: [
            "Brand identity development",
            "Visual storytelling",
            "Creative strategy",
            "Art direction",
          ],
        },
        {
          id: 6,
          title: "Digital Transformation",
          description: "Helping businesses evolve and thrive in the digital landscape.",
          icon: <Sparkles className="w-10 h-10" />,
          image: Transformation2,
          features: [
            "Technology assessment",
            "Digital strategy development",
            "Process automation",
          ],
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
                <h1 className="text-4xl font-bold mt-4">Services</h1>
                <p className="text-muted-foreground mt-2">What I can do for you</p>
              </div>
   
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="group bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                       // className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                        className ="h-200 w-800 overflow-hidden object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <div className="text-white">{service.icon}</div>
                      </div>
                    </div>
                   
   
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
   
                      <h4 className="font-medium text-sm mb-2">What's included:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 text-purple-500">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
   
              {/* Call to Action */}
              <div className="mt-16 bg-card rounded-xl shadow-md overflow-hidden">
                <div className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to work together?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                    Let's discuss how I can help bring your ideas to life. Whether you need a complete project or specific
                    services, I'm here to help.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
   
          <Footer />
        </div>
      )
 
}
export default Services