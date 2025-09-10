import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      
      // Show success message (you can implement toast notifications here)
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white p-8 shadow-2xl border border-gray-100 relative w-full h-full"
    >
      {/* Top Blue Line */}
      <div className="absolute top-0 left-0 right-0" style={{ backgroundColor: '#47b2e4', height: '3px' }}></div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Fields - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              className={`w-full px-4 py-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                  message: 'Invalid email address' 
                }
              })}
              className={`w-full px-4 py-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject', { 
              required: 'Subject is required',
              minLength: { value: 5, message: 'Subject must be at least 5 characters' }
            })}
            className={`w-full px-4 py-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter message subject"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
            className={`w-full px-4 py-3 border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-y ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your message here..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#209dd8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#47B2E4';
            }}
            style={{
              color: '#FFFFFF',
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '16px',
              backgroundColor: '#47B2E4',
              padding: '12px 34px',
              borderRadius: '25px'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </form>

      {/* Bottom Blue Line */}
      <div className="absolute bottom-0 left-0 right-0" style={{ backgroundColor: '#47b2e4', height: '3px' }}></div>
    </motion.div>
  );
};

export default ContactForm;
