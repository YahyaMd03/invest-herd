"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

export default function GoogleButton({text}: {text: string}, ) {
  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <motion.div
      className="flex flex-row items-center justify-center w-full mb-4 border-2 border-blue-500 rounded-lg p-3 gap-2 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleGoogleSignIn}
    >
      <span className="text-blue-500 font-medium">{text}</span>
      <motion.div
        className="w-5 h-5"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          className="w-full h-full"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.2 0 5.8 1.1 7.8 3l5.8-5.8C33.5 3.4 28.2 1.5 24 1.5 14.5 1.5 6.9 7.9 4.3 16.5h0L10.6 21c1.7-5.5 6.8-9.5 13.4-9.5Z"
          />
          <path
            fill="#34A853"
            d="M10.6 27v5.4h0C13.5 39 18.2 42.5 24 42.5c5.3 0 9.7-1.7 13.1-4.5l-5.4-5.3c-2 1.4-4.5 2.2-7.6 2.2-6.4 0-11.7-4.2-13.5-10Z"
          />
          <path
            fill="#4A90E2"
            d="M42.4 24.5h-1.3V24H24v8.5h10.4c-1.8 3.8-5.3 6.5-10.4 6.5h0v5.4h0c6.8 0 12.7-2.7 16.9-7.4l0-0.1Z"
          />
          <path
            fill="#FBBC05"
            d="M10.6 27c-0.4-1.1-0.6-2.3-0.6-3.5s0.2-2.4 0.6-3.5h0L4.3 16.5C3.5 18.8 3 21.3 3 24s0.5 5.2 1.3 7.5l6.3-4.5Z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
