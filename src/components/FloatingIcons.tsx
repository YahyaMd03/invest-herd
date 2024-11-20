'use client';

import { Moon, Sun, ChartCandlestick, ChartLine } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingIcons() {
  return (
    <div>
      {/* Moon Icon */}
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dragElastic={0.5}
        whileHover={{ scale: 1.2 }}
        animate={{
          y: [0, -10, 0], // Floating animation: up, down, back to original
        }}
        transition={{
          duration: 3, // 3 seconds for a full float cycle
          repeat: Infinity, // Loop forever
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          cursor: 'grab',
        }}
        className='z-10'

      >
        <Moon size={40} />
      </motion.div>

      {/* Sun Icon */}
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dragElastic={0.5}
        whileHover={{ scale: 1.2 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          top: '80%',
          right: '30%',
          cursor: 'grab',
        }}
        className='z-10'

      >
        <Sun size={40} />
      </motion.div>

      {/* chart Icon */}
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dragElastic={0.5}
        whileHover={{ scale: 1.2 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          bottom: '80%',
          left: '30%',
          cursor: 'grab',   
        }}
        className='z-10'
      >
        <ChartCandlestick size={40} />
      </motion.div>

      {/* chart Icon */}
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dragElastic={0.5}
        whileHover={{ scale: 1.2 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '30%',
          cursor: 'grab',   
        }}
        className='z-10'
      >
        <ChartLine size={40} />
      </motion.div>
    </div>
  );
}
