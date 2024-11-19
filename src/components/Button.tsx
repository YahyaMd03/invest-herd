// components/Button.tsx
"use client";

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

type ButtonProps = {
  text: string;
  variant: 'primary' | 'secondary';
};

export default function Button({ text, variant }: ButtonProps) {
  return (
    <motion.button
      className={clsx(
        'px-4 py-2 rounded font-medium',
        variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-500 border border-blue-500'
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
}
