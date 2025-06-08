import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from "axios";
import { ClipLoader } from 'react-spinners';

const Contact = () => {
  const server = import.meta.env.VITE_MAILER_SERVER;
  const reciever = import.meta.env.VITE_RECIEVER;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const response = await axios.post(
        `${server}/send`,
        {
          name:formData.name,
          email:formData.email,
          reciever:reciever,
          message:formData.message

        },
        
      );
      setLoading(false);
      if(response.status == 200){
        toast.success("message sent successfully",
          {
            theme:'colored'
          }
        );
      }
    }
    catch(err){
      return toast.error("error occured",
        {
          theme:'colored'
        }
      );
    }
    


    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          
        >
          <h2 className="text-3xl font-bold text-light mb-8">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-tertiary mb-6">
                I'm currently looking for internship opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to you!
                <br/><br />
                Kannur, Kerala, India<br/>
                GMT+5:30 {"(IST)"}
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href="mailto:sabeeh.ashrftv@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-secondary transition-colors"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/alopice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-secondary transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/sabeehtv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-secondary transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-tertiary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary/50 border border-secondary/20 rounded-md text-light focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-tertiary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary/50 border border-secondary/20 rounded-md text-light focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-tertiary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-primary/50 border border-secondary/20 rounded-md text-light focus:outline-none focus:border-secondary"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-secondary text-primary px-6 py-2 rounded-md font-medium hover:bg-secondary/90 transition-colors flex justify-center items-center"
              >
                Send Message
                {isLoading && <ClipLoader size={20} className='ml-2'/>}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 