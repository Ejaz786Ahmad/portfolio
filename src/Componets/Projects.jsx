import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      name: "E-Shop",
      company: "Personal Project",
      description:
        "Developed a MERN-based garments e-commerce platform with Admin, Customer, and Delivery Agent panels.",
      impact: "Integrated Razorpay payment gateway for online payment processing and transaction verification",
      process: [
        "Admin, Customer, and Delivery Agent panels",
        "Razorpay payment gateway integration",
        "Product, customer, order, and delivery workflows",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://e-shop-mu-orcin.vercel.app/",
      type: "client"
    },
    {
      name: "Edudibon School ERP",
      company: "Yahweh Software Solutions",
      description:
        "Developed backend functionality for Super Admin, Admin, HR Admin, and Employee panels across multiple ERP modules.",
      impact: "Implemented role-based authorization and automated Cron workflows",
      process: [
        "Super Admin, Admin, HR Admin, and Employee panels",
        "Exam, Communication, Visitor & Disciplinary modules",
        "REST APIs, business logic & Permit.io authorization",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      link: "",
      type: "client"
    }
  ];

  return (
    <section name="Projects" className="hero-bg py-28 bg-[#0f172a] text-white">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold">
            Client <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Production-level applications developed for real clients across CRM,
            healthcare, recruitment, and e-commerce domains.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#111c3a] border border-gray-700 p-8 rounded-xl 
              hover:border-cyan-400 
              hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] 
              hover:scale-[1.02] 
              transition duration-300"
            >

              {/* TAGS */}
              <div className="flex gap-2 mb-2">
                {index === 0 && (
                  <span className="text-xs text-cyan-400 border border-cyan-400 px-2 py-1 rounded">
                    🚀 Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.name}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {project.company}
              </p>

              <p className="text-gray-300 mb-3">
                {project.description}
              </p>

              <p className="text-sm text-cyan-400 mb-4">
                ✔ {project.impact}
              </p>

              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                {project.process.map((step, i) => (
                  <li key={i}>• {step}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-5 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
                >
                  Live Project →
                </a>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}