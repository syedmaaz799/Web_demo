import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface BookingFormData {
  name: string;
  service: string;
  phone: string;
  pickupLocation: string;
  vehicleName: string;
}

const BookNow: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>();

  const serviceOptions = [
    'General Service',
    'Repair Service',
    'Engine Repair'
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Booking submitted:', data);
      
      // Show success message
      alert('Booking submitted successfully! We will contact you soon.');
      reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Error submitting booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(/tire.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000000'
      }}
    >
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      />
      
      {/* Form Container */}
      <div 
        className="relative z-20 w-full mx-4 rounded-lg book-now-form"
        style={{ 
          width: '738.99px',
          height: '680.59px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          background: 'rgba(16, 17, 19, 0.9)',
          padding: '40px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          animation: 'slideUp 0.8s ease-out',
          overflow: 'auto'
        }}
      >
        {/* Form Header */}
        <div className="text-center mb-6">
          <h1 
            className="font-bold mb-4"
            style={{ 
              color: '#FFC001',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '48px',
              fontWeight: 'bold'
            }}
          >
            BOOK NOW
          </h1>
          <p 
            className="text-white"
            style={{ 
              color: '#fff',
              fontSize: '16px',
              fontFamily: 'Montserrat, sans-serif',
              marginTop: '10px',
              marginBottom: '0px'
            }}
          >
            Fill out the form below to schedule your service.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name and Service Selection - Two Column Layout */}
          <div className="grid grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label 
                className="block text-white font-bold uppercase mb-2"
                style={{ 
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: '400',
                  margin: '0px 0px 8px'
                }}
              >
                NAME
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full rounded placeholder-gray-500 focus:outline-none"
                style={{
                  backgroundColor: 'rgba(245, 245, 245, 0.9)',
                  border: 'none',
                  height: '50px',
                  borderRadius: '8px',
                  boxShadow: 'none',
                  fontWeight: '400',
                  color: '#101113',
                  padding: '0 20px',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '16px'
                }}
                placeholder="Enter your name"
                onFocus={(e) => {
                  e.target.style.setProperty('outline', 'none', 'important');
                  e.target.style.setProperty('box-shadow', '0 0 8px rgba(255, 192, 1, 0.6)', 'important');
                  e.target.style.setProperty('transform', 'scale(1.02)', 'important');
                  e.target.style.setProperty('transition', 'all 0.3s ease', 'important');
                }}
                onBlur={(e) => {
                  e.target.style.setProperty('box-shadow', 'none', 'important');
                  e.target.style.setProperty('transform', 'scale(1)', 'important');
                }}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Service Selection */}
            <div>
              <label 
                className="block text-white font-bold uppercase mb-2"
                style={{ 
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: '400',
                  margin: '0px 0px 8px'
                }}
              >
                SELECT YOUR SERVICE
              </label>
              <select
                {...register('service', { required: 'Please select a service' })}
                className="w-full rounded placeholder-gray-500 focus:outline-none"
                style={{
                  backgroundColor: 'rgba(245, 245, 245, 0.9)',
                  border: 'none',
                  height: '50px',
                  borderRadius: '8px',
                  boxShadow: 'none',
                  fontWeight: '400',
                  color: '#101113',
                  padding: '0 20px',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '16px',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  backgroundImage: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.setProperty('outline', 'none', 'important');
                  e.target.style.setProperty('box-shadow', '0 0 8px rgba(255, 192, 1, 0.6)', 'important');
                  e.target.style.setProperty('transform', 'scale(1.02)', 'important');
                  e.target.style.setProperty('transition', 'all 0.3s ease', 'important');
                }}
                onBlur={(e) => {
                  e.target.style.setProperty('box-shadow', 'none', 'important');
                  e.target.style.setProperty('transform', 'scale(1)', 'important');
                }}
              >
                <option value="">Please select</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-red-400 text-sm">{errors.service.message}</p>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label 
              className="block text-white font-bold uppercase mb-1"
              style={{ 
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                margin: '0px 0px 8px'
              }}
            >
              PHONE
            </label>
            <input
              type="tel"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: { 
                  value: /^[0-9]{10}$/, 
                  message: 'Please enter a valid 10-digit phone number' 
                }
              })}
              className="w-full rounded placeholder-gray-500 focus:outline-none"
              style={{
                backgroundColor: 'rgba(245, 245, 245, 0.9)',
                border: 'none',
                height: '50px',
                borderRadius: '8px',
                boxShadow: 'none',
                fontWeight: '400',
                color: '#101113',
                padding: '0 20px',
                width: '100%',
                transition: 'all 0.3s ease',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px'
              }}
              placeholder="Enter your phone number"
              onFocus={(e) => {
                e.target.style.setProperty('outline', 'none', 'important');
                e.target.style.setProperty('box-shadow', '0 0 8px rgba(255, 192, 1, 0.6)', 'important');
                e.target.style.setProperty('transform', 'scale(1.02)', 'important');
                e.target.style.setProperty('transition', 'all 0.3s ease', 'important');
              }}
              onBlur={(e) => {
                e.target.style.setProperty('box-shadow', 'none', 'important');
                e.target.style.setProperty('transform', 'scale(1)', 'important');
              }}
            />
            {errors.phone && (
              <p className="mt-1 text-red-400 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Pickup Location Field */}
          <div>
            <label 
              className="block text-white font-bold uppercase mb-1"
              style={{ 
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                margin: '0px 0px 8px'
              }}
            >
              PICKUP LOCATION
            </label>
            <input
              type="text"
              {...register('pickupLocation', { required: 'Pickup location is required' })}
              className="w-full rounded placeholder-gray-500 focus:outline-none"
              style={{
                backgroundColor: 'rgba(245, 245, 245, 0.9)',
                border: 'none',
                height: '50px',
                borderRadius: '8px',
                boxShadow: 'none',
                fontWeight: '400',
                color: '#101113',
                padding: '0 20px',
                width: '100%',
                transition: 'all 0.3s ease',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px'
              }}
              placeholder="Enter your address/ZIP"
              onFocus={(e) => {
                e.target.style.setProperty('outline', 'none', 'important');
                e.target.style.setProperty('box-shadow', '0 0 8px rgba(255, 192, 1, 0.6)', 'important');
                e.target.style.setProperty('transform', 'scale(1.02)', 'important');
                e.target.style.setProperty('transition', 'all 0.3s ease', 'important');
              }}
              onBlur={(e) => {
                e.target.style.setProperty('box-shadow', 'none', 'important');
                e.target.style.setProperty('transform', 'scale(1)', 'important');
              }}
            />
            {errors.pickupLocation && (
              <p className="mt-1 text-red-400 text-sm">{errors.pickupLocation.message}</p>
            )}
          </div>

          {/* Vehicle Name Field */}
          <div>
            <label 
              className="block text-white font-bold uppercase mb-1"
              style={{ 
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                margin: '0px 0px 8px'
              }}
            >
              VEHICLE NAME
            </label>
            <input
              type="text"
              {...register('vehicleName', { required: 'Vehicle name is required' })}
              className="w-full rounded placeholder-gray-500 focus:outline-none"
              style={{
                backgroundColor: 'rgba(245, 245, 245, 0.9)',
                border: 'none',
                height: '50px',
                borderRadius: '8px',
                boxShadow: 'none',
                fontWeight: '400',
                color: '#101113',
                padding: '0 20px',
                width: '100%',
                transition: 'all 0.3s ease',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px'
              }}
              placeholder="Enter your vehicle name"
              onFocus={(e) => {
                e.target.style.setProperty('outline', 'none', 'important');
                e.target.style.setProperty('box-shadow', '0 0 8px rgba(255, 192, 1, 0.6)', 'important');
                e.target.style.setProperty('transform', 'scale(1.02)', 'important');
                e.target.style.setProperty('transition', 'all 0.3s ease', 'important');
              }}
              onBlur={(e) => {
                e.target.style.setProperty('box-shadow', 'none', 'important');
                e.target.style.setProperty('transform', 'scale(1)', 'important');
              }}
            />
            {errors.vehicleName && (
              <p className="mt-1 text-red-400 text-sm">{errors.vehicleName.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className=""
            ref={(el) => {
              if (el) {
                el.style.setProperty('background-color', '#ffc001', 'important');
                el.style.setProperty('color', '#101113', 'important');
                el.style.setProperty('font-weight', '700', 'important');
                el.style.setProperty('height', '50px', 'important');
                el.style.setProperty('border', 'none', 'important');
                el.style.setProperty('width', '100%', 'important');
                el.style.setProperty('display', 'block', 'important');
                el.style.setProperty('border-radius', '8px', 'important');
                el.style.setProperty('text-transform', 'uppercase', 'important');
                el.style.setProperty('transition', 'all 0.3s ease', 'important');
                el.style.setProperty('box-shadow', '0 4px 20px rgba(255, 192, 1, 0.8)', 'important');
                el.style.setProperty('font-family', 'Montserrat, sans-serif', 'important');
                el.style.setProperty('font-size', '16px', 'important');
              }
            }}
            style={{
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 192, 1, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 192, 1, 0.8)';
              }
            }}
          >
            {isSubmitting ? 'SUBMITTING...' : 'BOOK NOW'}
          </button>
        </form>
      </div>

    </div>
  );
};

export default BookNow;