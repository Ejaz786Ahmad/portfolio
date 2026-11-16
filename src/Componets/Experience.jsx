
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Yahweh Software Solutions",
      role: "Node.js Developer (Intern)",
      duration: "Sep 2025 – Apr 2026",
      description:
        "Worked on Edudibon School ERP developing backend functionality across multiple modules, HRMS features, and scheduled workflows.",
      impact:
        "Completed 4 modules independently with role-based access control",
      highlights: [
        "Project: Edudibon School ERP",
        "Completed 4 modules independently — Exam Management, Communication, Visitor Management, and Disciplinary",
        "Contributed to HRMS functionality for employee management, attendance tracking, and leave management",
        "Implemented Permit.io for role-based access control and Cron Jobs for scheduled workflows",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cron Jobs",
        "Permit.io",
      ],
    },
    {
      company: "Internshala",
      role: "MERN Stack Developer Trainee",
      duration: "May 2024 – Aug 2024",
      description:
        "MERN stack development training building web applications and implementing backend best practices.",
      impact:
        "Implemented JWT authentication and REST API best practices",
      highlights: [
        "Developed MERN stack projects and implemented JWT authentication and REST API best practices",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
  ];

  return (
    <section
      name="Experiance"
      className="hero-bg bg-[#0f172a] py-28 text-white"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-semibold">
            Professional{" "}
            <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-400">
            Experience building web and mobile applications across
            healthcare SaaS, CRM, employee management, and e-commerce.
          </p>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="relative mb-14 ml-5 sm:ml-8"
            >
              {/* TIMELINE DOT */}
              <span className="absolute -left-[30px] top-1 h-5 w-5 rounded-full border-4 border-[#0f172a] bg-cyan-400 sm:-left-[45px] sm:h-6 sm:w-6" />

              {/* EXPERIENCE CARD */}
              <div className="rounded-xl border border-gray-700 bg-[#111c3a] p-5 transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] sm:p-6">
                {/* ROLE */}
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                {/* COMPANY AND DURATION */}
                <p className="mb-4 mt-2 text-sm leading-relaxed text-cyan-400">
                  {exp.company}
                  <span className="mx-2 text-gray-500">•</span>
                  {exp.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="mb-4 leading-relaxed text-gray-300">
                  {exp.description}
                </p>

                {/* IMPACT */}
                <p className="mb-4 text-sm leading-relaxed text-cyan-400">
                  <span className="mr-2">✓</span>
                  {exp.impact}
                </p>

                {/* RESPONSIBILITIES AND ACHIEVEMENTS */}
                <ul className="mb-5 space-y-2 text-sm leading-relaxed text-gray-400">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
