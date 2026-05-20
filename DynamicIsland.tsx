import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DynamicIslandProps {
  isVisible: boolean;
  children: React.ReactNode;
}

/**
 * A Dynamic Island component implementation that anchors to the bottom.
 * Uses Framer Motion for smooth scale and position transitions.
 */
const DynamicIsland: React.FC<DynamicIslandProps> = ({ isVisible, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)', // Manually add transform for centering
            zIndex: 9999,
            backgroundColor: 'red', // Make it highly visible
            color: '#fff',
            borderRadius: '2.5rem',
            padding: '12px 24px',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            minWidth: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {children || "Dynamic Island Test"}
        </div>
      )}
    </AnimatePresence>
  );
};

export default DynamicIsland;
