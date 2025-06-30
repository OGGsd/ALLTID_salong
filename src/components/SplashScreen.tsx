import React from 'react';
import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

const SplashScreen: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-dark flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background elements with modern salon feel */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-brand-accent opacity-10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-16 h-16 bg-brand-gold opacity-20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="text-center px-4 relative z-10">
        {/* Logo and Brand */}
        <motion.div 
          className="flex items-center justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="w-32 h-20 md:w-40 md:h-24 mr-4 bg-white p-4 shadow-2xl flex items-center justify-center border-2 border-brand-accent rounded-lg"
              animate={{
                boxShadow: [
                  "0 4px 15px rgba(245, 245, 245, 0.4)",
                  "0 8px 25px rgba(245, 245, 245, 0.6)",
                  "0 4px 15px rgba(245, 245, 245, 0.4)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src={businessConfig.logo} 
                alt={`${businessConfig.name} Logo`} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 border-2 border-brand-accent opacity-60 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          <div className="text-left">
            <motion.h1 
              className="text-brand-accent text-xl md:text-2xl font-bold tracking-wide"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05
              }}
            >
              [ALL:TID]
            </motion.h1>
            <motion.p 
              className="text-brand-lightGold text-sm opacity-90 font-medium"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 0.9 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              SALONG
            </motion.p>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-brand-lightGold text-sm opacity-90 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {businessConfig.tagline}
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          className="mt-8 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-brand-accent rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;