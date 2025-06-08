import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', color: 'accent-purple' },
        { name: 'Node.js', color: 'accent-green' },
        { name: 'Express.js', color: 'accent-orange' },
        { name: 'MongoDB', color: 'accent-green' },
        { name: 'JavaScript', color: 'accent-orange' },
        { name: 'HTML', color: 'accent-red' },
        { name: 'CSS', color: 'accent-purple' },
        { name: 'SQL', color: 'accent-green' }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', color: 'accent-blue' },
        { name: 'Dart', color: 'accent-blue' },
        { name: 'Firebase', color: 'accent-orange' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', color: 'accent-red' },
        { name: 'GitHub', color: 'accent-purple' },
        { name: 'VS Code', color: 'accent-blue' },
        { name: 'Postman', color: 'accent-orange' },
        { name: 'Vercel', color: 'accent-purple' },
        { name: 'Render', color: 'accent-red' }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-light mb-8">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/50 p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-secondary mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.97 }}
                      className={`chip-skill border bg-${skill.color}/10 text-${skill.color} hover:bg-${skill.color}/20 hover:border-${skill.color} hover:shadow-lg`}
                    >
                      <span className="px-4 py-2 block text-sm font-medium select-none">
                        {skill.name}
                      </span>
                    </motion.div>
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

export default Skills; 