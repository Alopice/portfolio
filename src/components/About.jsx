import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-light mb-8">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-tertiary">
                I am a recent graduate with a Bachelor of Computer Applications (BCA) degree,
                passionate about web and mobile app development. My journey in technology
                has equipped me with a strong foundation in both frontend and backend development.
              </p>
              <p className="text-tertiary">
                I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and
                Flutter development, allowing me to create both web and mobile applications
                with modern technologies and best practices.
              </p>
              <p className="text-tertiary">
                Currently, I am seeking internship opportunities to gain real-world experience
                and contribute to meaningful projects while continuing to expand my skills
                and knowledge in the field.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-secondary/10 border border-secondary/20">
                <img 
                
                src="/mypfp.jpeg" alt="" />
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 