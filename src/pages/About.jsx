import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {  Download } from "lucide-react"
import Resume from "../assets/resume_segoenyane.pdf"
import AboutImg from "../assets/AboutPic.png"





function About(){
    return (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link
                  to="/"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold mt-4">About Me</h1>
                <p className="text-muted-foreground mt-2">The story behind ora's aura</p>
              </div>
    
              <div className="bg-card rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  {/* Profile Image Section */}
                  <div className="md:w-1/3 relative">
                    <div className="absolute inset-0 w-full h-full object-cover overflow-hidden"> 
                        {/*className="h-full min-h-[300px] relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" */}
                      <img
                        src={AboutImg}
                        alt="Ora's Profile"
                        //fill
                        className="object-cover mix-blend-overlay w-[600px] h-[400px]"
                      />
                    </div>
                  </div>
    
                  {/* Content Section */}
                  <div className="p-8 md:w-2/3">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                      <h2 className="text-3xl font-bold">Oratile Segoenyane</h2>
                      
                    </div>
    
                    <div className="space-y-4">
                      <p className="text-lg font-medium">Software Developer</p>
    
                      <p>
                        I'm a 21 year-old goal-oriented and ambitious final-year student, pursuing a qualification in Information Technology specializing in Software Development at Belgium Campus iTversity. My
                        journey in Tech started with a curiosity about how things work, and now has evolved into a career
                        where I am not only exposed to web technologies but also get to build digital solutions every day. I enjoy creating innovative solutions and contributing to impactful projects while continuously improving my skills.
                      </p>
    
                      <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source
                        projects, or sharing my knowledge with the community. My aura represents the blend of technical
                        expertise and creative.
                      </p>
    
                      <div className="pt-4">
                        <a
                          href={Resume}
                          download = "Oratile_Segoenyane_Resume" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Timeline Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">My Journey</h2>
    
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-purple-500 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="font-semibold">2023  </div>
                    <div className="text-lg font-medium">Foundations & Discovery</div>
                    <p className="text-muted-foreground mt-1">
                      Started my tech journey through Scratch, learning programming logic and creativity.
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Explored web development basics (HTML and CSS).
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Gained first experience working with databases and understanding data flow.
                    </p>
                  </div>
    
                  <div className="relative pl-8 border-l-2 border-pink-500 pb-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                    <div className="font-semibold">2024</div>
                    <div className="text-lg font-medium">Growth and Specialization</div>
                    <p className="text-muted-foreground mt-1">
                      Advanced into front-end development.
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Strengthened programming skills and software testing practices.
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Gained an introductory understanding of Python for automation concepts.
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Built a foundation in frontend technologies, backend technologies and programming logic.
                    </p>
                  </div>
    
                  <div className="relative pl-8 border-l-2 border-orange-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500"></div>
                    <div className="font-semibold">Present</div>
                    <div className="text-lg font-medium">Portfolio and Professional Readiness</div>
                    <p className="text-muted-foreground mt-1">
                      Building a personal brand with my portfolio website.
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Preparing to take real-world projects, internships, or freelance work.
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Continuing to refine technical skills and creative approaches to problem-solving
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      )

}
export default About