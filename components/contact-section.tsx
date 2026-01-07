"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionPreTitle } from "@/components/ui-elements/section-pre-title";
import { useTheme } from "next-themes";

export function ContactSection() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setMessage("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <SectionPreTitle>Ready to collaborate</SectionPreTitle>
          <h2 className="heading-lg mb-4">Get in touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss collaboration
            opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through the form or connect with me
              directly through these channels.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden transition-all group ${
                    theme === "light"
                      ? "bg-white/70 backdrop-blur-sm shadow-sm"
                      : "bg-white/5"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail
                    className={`h-5 w-5 ${
                      theme === "light" ? "text-cyan-600" : "text-cyan-400"
                    } group-hover:text-white transition-colors relative z-10`}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-base font-medium">info@seppe.it</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden transition-all group ${
                    theme === "light"
                      ? "bg-white/70 backdrop-blur-sm shadow-sm"
                      : "bg-white/5"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone
                    className={`h-5 w-5 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    } group-hover:text-white transition-colors relative z-10`}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-base font-medium">+39 3881813571</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden transition-all group ${
                    theme === "light"
                      ? "bg-white/70 backdrop-blur-sm shadow-sm"
                      : "bg-white/5"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <MapPin
                    className={`h-5 w-5 ${
                      theme === "light" ? "text-indigo-600" : "text-indigo-400"
                    } group-hover:text-white transition-colors relative z-10`}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-base font-medium">Catania, CT</p>
                </div>
              </div>
            </div>

            <div className="neon-divider my-8"></div>

            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden transition-all group ${
                  theme === "light"
                    ? "bg-white/70 backdrop-blur-sm shadow-sm"
                    : "bg-white/5"
                }`}
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  className={`h-5 w-5 ${
                    theme === "light"
                      ? "text-black group-hover:text-white"
                      : "text-white"
                  } relative z-10`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden transition-all group ${
                  theme === "light"
                    ? "bg-white/70 backdrop-blur-sm shadow-sm"
                    : "bg-white/5"
                }`}
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  className={`h-5 w-5 ${
                    theme === "light"
                      ? "text-black group-hover:text-white"
                      : "text-white"
                  } relative z-10`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden transition-all group ${
                  theme === "light"
                    ? "bg-white/70 backdrop-blur-sm shadow-sm"
                    : "bg-white/5"
                }`}
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  className={`h-5 w-5 ${
                    theme === "light"
                      ? "text-black group-hover:text-white"
                      : "text-white"
                  } relative z-10`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-neon-card p-6 relative z-20"
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 cursor-text
                  focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 ${
                    theme === "light"
                      ? "bg-white border border-gray-200 hover:border-cyan-300 focus:bg-white"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                  placeholder="email@example.com"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 resize-none cursor-text
                  focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 ${
                    theme === "light"
                      ? "bg-white border border-gray-200 hover:border-cyan-300 focus:bg-white"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 relative z-10 py-3 px-6 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 border border-white/10 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-white/20 gradient-button"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(6, 182, 212), rgb(59, 130, 246), rgb(99, 102, 241), rgb(59, 130, 246), rgb(6, 182, 212))",
                  backgroundSize: "300% 100%",
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              {isSubmitted && (
                <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-center">
                  <p className="text-cyan-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
            <style jsx>{`
              .gradient-button {
                background-position: 0% 50%;
              }
              .gradient-button:hover {
                animation: gradientMove 3s linear infinite;
                box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
              }
              @keyframes gradientMove {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              .rounded-full.group:hover {
                transform: translateY(-2px);
                box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
