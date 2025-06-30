import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp, User, Award, Scissors, Palette, Sparkles, GraduationCap } from 'lucide-react';
import BookingIframe from './BookingIframe';
import { staff, type Service } from '../config/business';
import { serviceCategories } from '../config/services';

const BookingView: React.FC = () => {
  const [selectedStylist, setSelectedStylist] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const toggleStylist = (stylistName: string) => {
    setSelectedStylist(selectedStylist === stylistName ? null : stylistName);
  };

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  const handleBookingClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeBookingIframe = () => {
    setSelectedService(null);
  };

  // Get stylist services
  const getStylistServices = (stylistName: string) => {
    const stylistServices: Service[] = [];
    serviceCategories.forEach(category => {
      category.services.forEach(service => {
        if (service.stylist === stylistName) {
          stylistServices.push(service);
        }
      });
    });
    return stylistServices;
  };

  // Get category icon - Same icons for all categories
  const getCategoryIcon = (categoryTitle: string) => {
    if (categoryTitle.includes('Hår') || categoryTitle.includes('Klipp')) return <Scissors size={20} className="text-brand-gold" />;
    if (categoryTitle.includes('Färg') || categoryTitle.includes('Folieslingor')) return <Palette size={20} className="text-brand-gold" />;
    if (categoryTitle.includes('Frans') || categoryTitle.includes('bryn')) return <Sparkles size={20} className="text-brand-gold" />;
    if (categoryTitle.includes('Löshår')) return <Award size={20} className="text-brand-gold" />;
    if (categoryTitle.includes('Styling')) return <Sparkles size={20} className="text-brand-gold" />;
    if (categoryTitle.includes('Öronhåltagning')) return <Award size={20} className="text-brand-gold" />;
    if (categoryTitle.includes('Salongskur')) return <Sparkles size={20} className="text-brand-gold" />;
    if (categoryTitle.includes('Uppsättning')) return <Award size={20} className="text-brand-gold" />;
    return <Award size={20} className="text-brand-gold" />;
  };

  // Get stylist badge
  const getStylistBadge = (stylistName: string) => {
    if (stylistName === "Marina") {
      return (
        <div className="absolute -top-1 -right-1 bg-brand-gold text-brand-primary text-xs px-2 py-1 rounded-full font-bold">
          TRAINEE
        </div>
      );
    }
    if (stylistName === "Isabelle") {
      return (
        <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          ELEV
        </div>
      );
    }
    return null;
  };

  // Separate professional services from trainee/elev services
  const professionalCategories = serviceCategories.filter(category => 
    !category.title.includes('Trainee') && 
    !category.title.includes('Elev') &&
    category.services.some(service => !service.stylist)
  );

  const traineeElevCategories = serviceCategories.filter(category => 
    category.title.includes('Trainee') || category.title.includes('Elev')
  );

  // Clean animation variants
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

  const stylistCardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const serviceVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.div 
        className="p-4 max-w-4xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Service Categories FIRST */}
        {professionalCategories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-brand-gold transition-colors duration-300"
            variants={categoryVariants}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Category Header */}
            <motion.button
              onClick={() => toggleCategory(category.title)}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {getCategoryIcon(category.title)}
                </div>
                <div className="text-left">
                  <motion.h4 
                    className="text-base font-bold text-brand-primary"
                    whileHover={{ color: "#d4af37" }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.title}
                  </motion.h4>
                  <span className="text-xs text-gray-500">
                    {category.services.filter(service => !service.stylist).length} tjänster
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {expandedCategory === category.title ? (
                  <ChevronUp size={20} className="text-brand-gold" />
                ) : (
                  <ChevronDown size={20} className="text-gray-600" />
                )}
              </motion.div>
            </motion.button>

            {/* Services List */}
            <AnimatePresence>
              {expandedCategory === category.title && (
                <motion.div 
                  className="border-t border-gray-100 bg-gray-50"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div
                    className="p-4 space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    {category.services.filter(service => !service.stylist).map((service, serviceIndex) => (
                      <motion.div 
                        key={serviceIndex} 
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                        variants={serviceVariants}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h5 className="font-semibold text-brand-primary text-sm leading-tight flex-1 mr-3">
                            {service.name}
                          </h5>
                          <div className="text-right flex-shrink-0">
                            <motion.div 
                              className="font-bold text-brand-gold text-sm"
                              whileHover={{ scale: 1.05 }}
                            >
                              {service.price}
                            </motion.div>
                          </div>
                        </div>
                        
                        {service.description && (
                          <p className="text-xs text-gray-600 mb-3">{service.description}</p>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600">
                            <Clock size={12} className="mr-1" />
                            <span className="text-xs">{service.duration}</span>
                          </div>
                          <motion.button 
                            onClick={() => handleBookingClick(service)}
                            className="bg-brand-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-secondary transition-colors duration-200 shadow-md border border-brand-gold"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "#d4af37",
                              color: "#1a1a1a"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            BOKA
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Trainee and Elev Stylists BELOW - Updated with same icons and "Elev Stylist" title */}
        <div className="space-y-3">
          {staff.map((stylist, index) => {
            const stylistServices = getStylistServices(stylist.name);
            const isExpanded = selectedStylist === stylist.name;
            
            // Skip if no services for this stylist
            if (stylistServices.length === 0) return null;
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-brand-gold transition-colors duration-300"
                variants={stylistCardVariants}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Stylist Header with proper title structure and same icon */}
                <motion.button
                  onClick={() => toggleStylist(stylist.name)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center">
                    {/* Same icon as other categories */}
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Award size={20} className="text-brand-gold" />
                    </div>

                    {/* Stylist Info with updated title structure */}
                    <div className="text-left">
                      <motion.h4 
                        className="text-base font-bold text-brand-primary"
                        whileHover={{ color: "#d4af37" }}
                        transition={{ duration: 0.2 }}
                      >
                        {stylist.title === "Elev" ? "Elev Stylist" : stylist.title}
                      </motion.h4>
                      <p className="text-sm text-gray-600 font-medium">{stylist.name}</p>
                      <div className="text-xs text-brand-gold mt-1">
                        {stylistServices.length} tjänster tillgängliga
                      </div>
                    </div>
                  </div>
                  
                  {/* Expand Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isExpanded ? (
                      <ChevronUp size={20} className="text-brand-gold" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Services Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      className="border-t border-gray-100 bg-gray-50"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-4">
                        <h5 className="font-semibold text-brand-primary text-sm mb-3">
                          Tillgängliga tjänster
                        </h5>
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.05
                              }
                            }
                          }}
                          className="space-y-3"
                        >
                          {stylistServices.map((service, serviceIndex) => (
                            <motion.div 
                              key={serviceIndex} 
                              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                              variants={serviceVariants}
                              whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              <div className="flex justify-between items-start mb-3">
                                <h5 className="font-semibold text-brand-primary text-sm leading-tight flex-1 mr-3">
                                  {service.name}
                                </h5>
                                <div className="text-right flex-shrink-0">
                                  <motion.div 
                                    className="font-bold text-brand-gold text-sm"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {service.price}
                                  </motion.div>
                                </div>
                              </div>
                              
                              {service.description && (
                                <p className="text-xs text-gray-600 mb-3">{service.description}</p>
                              )}
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-gray-600">
                                  <Clock size={12} className="mr-1" />
                                  <span className="text-xs">{service.duration}</span>
                                </div>
                                <motion.button 
                                  onClick={() => handleBookingClick(service)}
                                  className="bg-brand-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-secondary transition-colors duration-200 shadow-md border border-brand-gold"
                                  whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "#d4af37",
                                    color: "#1a1a1a"
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                  BOKA
                                </motion.button>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Booking Iframe Modal */}
      <AnimatePresence>
        {selectedService && (
          <BookingIframe
            bookingUrl={selectedService.bookingUrl}
            serviceName={selectedService.name}
            onClose={closeBookingIframe}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingView;