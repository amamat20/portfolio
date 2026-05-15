import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiLocationMarker, HiCheckCircle } from "react-icons/hi";
import SectionTitle from "../ui/SectionTitle";

const contactLinks = [
  {
    icon: <HiMail className="text-xl" />,
    label: "Email",
    value: "bayu000111222@email.com",
    href: "mailto:bayu000111222@email.com",
  },
  {
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    value: "github.com/amamat20",
    href: "https://github.com/amamat20",
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn",
    value: "linkedin.com/in/bayu-putra-pamungkas",
    href: "www.linkedin.com/in/bayu-putra-pamungkas",

  },
  {
    icon: <HiLocationMarker className="text-xl" />,
    label: "Location",
    value: "Indonesia",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate sending — replace with your EmailJS / Formspree logic
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="px-6 py-24 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#39FF14]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-[#9CA3AF] leading-relaxed">
              I'm currently open to freelance work, internship opportunities,
              and interesting collaborations. Whether it's a fullstack project,
              an ML experiment, or just a chat about tech — feel free to reach
              out.
            </p>

            <div className="space-y-3 pt-4">
              {contactLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1A1A1A] rounded-xl hover:border-[#39FF14]/40 hover:text-[#39FF14] transition-all duration-300 group"
                    >
                      <span className="text-[#39FF14] group-hover:drop-shadow-[0_0_6px_#39FF14] transition-all duration-300">
                        {item.icon}
                      </span>

                      <div>
                        <p className="text-[#9CA3AF] text-xs">{item.label}</p>

                        <p className="text-[#F5F5F5] text-sm font-medium group-hover:text-[#39FF14] transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1A1A1A] rounded-xl">
                      <span className="text-[#39FF14]">{item.icon}</span>

                      <div>
                        <p className="text-[#9CA3AF] text-xs">{item.label}</p>

                        <p className="text-[#F5F5F5] text-sm font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 hover:border-[#39FF14]/30 transition-colors duration-300"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <HiCheckCircle
                  className="text-[#39FF14] text-5xl"
                  style={{ filter: "drop-shadow(0 0 10px #39FF14)" }}
                />
                <h3 className="font-heading font-bold text-[#F5F5F5] text-xl">
                  Message Sent!
                </h3>
                <p className="text-[#9CA3AF] text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-[#39FF14] text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-[#9CA3AF] text-xs uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#050505] border border-[#1A1A1A] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#39FF14] transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[#9CA3AF] text-xs uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#050505] border border-[#1A1A1A] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#39FF14] transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-[#9CA3AF] text-xs uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full bg-[#050505] border border-[#1A1A1A] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#39FF14] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#39FF14] text-[#050505] font-heading font-semibold py-3 rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
