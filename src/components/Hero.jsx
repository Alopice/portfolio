import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex justify-center items-center section-padding">
     
        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col justify-start items-start'
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold text-light mb-4">
            Sabeeh Ashraf.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-tertiary mb-6">
            MERN Stack & Flutter Developer
          </h2>
          <p className="text-tertiary max-w-2xl text-lg mb-8">
            Passionate about building full-stack web and mobile apps.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-secondary text-secondary px-8 py-3 rounded-md hover:bg-secondary/10 transition-colors"
          >
            View My Work
          </motion.button>
        </motion.div>
      
    </section>
  );
};

export default Hero; 