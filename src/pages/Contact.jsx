import { Link } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";
import {  MapPin, Send, Github, Twitter, Linkedin } from "lucide-react"

function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    
      const [isSubmitting, setIsSubmitting] = useState(false)
      const [isSubmitted, setIsSubmitted] = useState(false)
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
    
        // Simulate form submission
        setTimeout(() => {
          setIsSubmitting(false)
          setIsSubmitted(true)
          setFormData({ name: "", email: "", subject: "", message: "" })
    
          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false)
          }, 5000)
        }, 1500)
      }
    
      return (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow p-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Link
                  to="/"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold mt-4">Contact Me</h1>
                <p className="text-muted-foreground mt-2">
                  Get in touch for collaborations or questions
                </p>
              </div>
    
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="bg-card rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
    
                    <div className="space-y-6">
    
                      <div className="flex items-start">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mr-4">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-muted-foreground">Pretoria, South Africa</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="mt-8">
                      <h3 className="font-medium mb-3">Follow Me</h3>
                      <div className="flex gap-4">
                        <a
                          href="https://github.com/oratilesegoenyane"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-secondary hover:bg-purple-100 dark:hover:bg-purple-900/30 text-foreground hover:text-purple-600 dark:hover:text-purple-400 rounded-lg transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/oratile-segoenyane-280a452b8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-secondary hover:bg-purple-100 dark:hover:bg-purple-900/30 text-foreground hover:text-purple-600 dark:hover:text-purple-400 rounded-lg transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Contact Form */}
                <div className="bg-card rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
    
                    {isSubmitted ? (
                      <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg">
                        <p className="font-medium">Thank you for your message!</p>
                        <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                          />
                        </div>
    
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                          />
                        </div>
    
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                          />
                        </div>
    
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                          ></textarea>
                        </div>
    
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      )

}
export default Contact