import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with MERN stack, featuring user authentication, and product management.',
      tech: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/Alopice/phoneClient',
      demo: 'https://bookclient.vercel.app/'
    },

    {
      title: 'AR Memory Map',
      description: 'A location-based AR app where users drop, view, and revisit memory pins, built with Flutter.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      github: 'https://github.com/Alopice/memory_map_deluxe',
      demo: 'https://github.com/Alopice/memory_map_deluxe/releases'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills, built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Alopice/portfolio',
      demo: '#'
    },
    {
      title: 'StoreFlow',
      description: "A full-stack MERN ERP for mini store management, featuring inventory CRUD, POS checkout, employee management, analytics dashboard, and secure authentication.",
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'SendGrid', 'tailwindCSS'],
      github: '',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-light mb-8">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/50 p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {project.title}
                </h3>
                <p className="text-tertiary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 