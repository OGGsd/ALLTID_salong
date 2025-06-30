import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Calendar, Heart, Award } from 'lucide-react';
import { businessConfig, openBokaDirekt } from '../config/business';

const InfoView: React.FC = () => {
  // Force open phone app
  const handlePhoneCall = () => {
    // Force open phone app on all platforms
    const phoneNumber = businessConfig.phone;
    window.location.href = `tel:${phoneNumber}`;
  };

  // Force open email app
  const handleEmail = () => {
    // Force open default email app
    const email = businessConfig.email;
    window.location.href = `mailto:${email}`;
  };

  // Force open Google Maps
  const handleGoogleMaps = () => {
    const address = `${businessConfig.address.street}, ${businessConfig.address.postalCode} ${businessConfig.address.city}`;
    const encodedAddress = encodeURIComponent(address);
    
    // Force open Google Maps app on mobile, web on desktop
    const googleMapsApp = `comgooglemaps://?q=${encodedAddress}`;
    const googleMapsWeb = `https://maps.google.com/?q=${encodedAddress}`;
    
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Mobile: Try to open app first, then fallback to web
      window.location.href = googleMapsApp;
      // Fallback after short delay
      setTimeout(() => {
        window.open(googleMapsWeb, '_blank', 'noopener,noreferrer');
      }, 500);
    } else {
      // Desktop: Open in new tab
      window.open(googleMapsWeb, '_blank', 'noopener,noreferrer');
    }
  };

  const formatOpeningHours = () => {
    const days = {
      monday: 'Måndag',
      tuesday: 'Tisdag', 
      wednesday: 'Onsdag',
      thursday: 'Torsdag',
      friday: 'Fredag',
      saturday: 'Lördag',
      sunday: 'Söndag'
    };

    return Object.entries(businessConfig.openingHours).map(([key, hours]) => ({
      day: days[key as keyof typeof days],
      ...hours
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -2,
      scale: 1.01,
      boxShadow: "0 8px 25px rgba(26, 26, 26, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 4px 15px rgba(26, 26, 26, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="p-4 max-w-4xl mx-auto space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-6"
        variants={itemVariants}
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div 
            className="w-20 h-12 mr-3 bg-white p-2 shadow-lg object-contain border-2 border-brand-accent rounded-lg"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.6 }
            }}
          >
            <img 
              src={businessConfig.logo} 
              alt={`${businessConfig.name} Logo`} 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold text-brand-primary">
              {businessConfig.name.toUpperCase()}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {businessConfig.tagline}
            </p>
          </div>
        </div>
      </motion.div>

      {/* About section */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20"
        variants={itemVariants}
        whileHover={cardHoverVariants.hover}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Heart size={20} className="text-brand-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-brand-primary">Modern Skönhet & Välmående</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {businessConfig.description}
        </p>
      </motion.div>

      {/* Services overview */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20"
        variants={itemVariants}
        whileHover={cardHoverVariants.hover}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Award size={20} className="text-brand-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-brand-primary">Våra Tjänster</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-brand-primary text-sm md:text-base mb-2">
                Hårbehandlingar
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Klippning, färgning, slingor och behandlingar för alla hårtyper.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-brand-primary text-sm md:text-base mb-2">
                Skönhetsbehandlingar
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Ansiktsbehandlingar, ögonbryn, fransar och manikyr.
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-brand-primary text-sm md:text-base mb-2">
                Specialbehandlingar
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Brudpaket, makeup och styling för speciella tillfällen.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-brand-primary text-sm md:text-base mb-2">
                Konsultation
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                Personlig rådgivning för att hitta din perfekta look.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Opening Hours */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20"
        variants={itemVariants}
        whileHover={cardHoverVariants.hover}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Clock size={20} className="text-brand-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-brand-primary">Öppettider</h3>
        </div>
        
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {formatOpeningHours().map((dayInfo, index) => (
              <div 
                key={index}
                className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                  dayInfo.closed 
                    ? 'bg-red-50 text-red-800' 
                    : 'bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 text-brand-primary'
                }`}
              >
                <span className="font-medium">{dayInfo.day}</span>
                <span className={dayInfo.closed ? 'text-red-600 font-medium' : 'text-brand-primary'}>
                  {dayInfo.closed ? 'Stängd' : `${dayInfo.open} - ${dayInfo.close}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20"
        variants={itemVariants}
        whileHover={cardHoverVariants.hover}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin size={20} className="text-brand-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-brand-primary">Kontakt & Adress</h3>
        </div>
        
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start">
            <MapPin size={16} className="mr-3 text-brand-secondary mt-1 flex-shrink-0" />
            <div className="text-gray-700">
              <p className="font-medium text-brand-primary">{businessConfig.address.street}</p>
              <p className="text-sm">{businessConfig.address.postalCode} {businessConfig.address.city}</p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-center">
            <Phone size={16} className="mr-3 text-brand-secondary flex-shrink-0" />
            <a 
              href={`tel:${businessConfig.phone}`} 
              className="text-gray-700 hover:text-brand-primary transition-colors font-medium"
            >
              {businessConfig.phone}
            </a>
          </div>
          
          {/* Email */}
          <div className="flex items-center">
            <Mail size={16} className="mr-3 text-brand-secondary flex-shrink-0" />
            <a 
              href={`mailto:${businessConfig.email}`} 
              className="text-gray-700 hover:text-brand-primary transition-colors font-medium"
            >
              {businessConfig.email}
            </a>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <motion.button
              onClick={handlePhoneCall}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Phone size={16} className="mr-2" />
              Ring oss
            </motion.button>
            
            <motion.button
              onClick={handleEmail}
              className="flex items-center px-4 py-2 bg-brand-secondary text-white rounded-lg hover:bg-brand-primary transition-colors font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail size={16} className="mr-2" />
              E-post
            </motion.button>
            
            <motion.button
              onClick={handleGoogleMaps}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <MapPin size={16} className="mr-2" />
              Öppna i Google Maps
            </motion.button>

            {/* Boka Direkt Button */}
            <motion.button
              onClick={openBokaDirekt}
              className="flex items-center px-4 py-2 bg-brand-primary text-brand-accent rounded-lg hover:bg-brand-dark transition-colors font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Calendar size={16} className="mr-2" />
              Boka Tid
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Location Information */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20"
        variants={itemVariants}
        whileHover={cardHoverVariants.hover}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin size={20} className="text-brand-accent" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-brand-primary">Hitta hit</h3>
        </div>
        
        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <p>
            Vi ligger centralt beläget på {businessConfig.address.street} i {businessConfig.address.city}, 
            i en modern och stilren miljö som skapar den perfekta atmosfären för skönhet och välmående.
          </p>
          
          <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
            <h4 className="font-semibold text-brand-primary mb-2">Vägbeskrivning</h4>
            <ul className="space-y-1 text-sm">
              <li>• Centralt läge i Stockholm</li>
              <li>• Parkering finns i närområdet</li>
              <li>• Enkelt att nå med kollektivtrafik</li>
              <li>• Modern och stilren salong</li>
              <li>• Professionell och välkomnande miljö</li>
            </ul>
          </div>
          
          <div className="text-center">
            <motion.button
              onClick={handleGoogleMaps}
              className="inline-flex items-center px-6 py-3 bg-brand-primary text-brand-accent rounded-lg hover:bg-brand-dark transition-colors font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <MapPin size={16} className="mr-2" />
              Öppna i Google Maps
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InfoView;