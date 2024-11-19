"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import GoogleButton from "./GoogleButton";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle API request here
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side Images */}
      <div className="flex-1 hidden md:flex flex-col justify-start items-center p-6">
        <div className="relative w-4/5">
          <Image
            src="/dashboard1.png"
            alt="Feature 1"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            width={60}
            height={70}
          />
          <Image
            src="/dashboard1.png"
            alt="Feature 2"
            className="absolute top-12 left-12 rounded-lg shadow-lg object-cover w-4/5 h-auto opacity-90"
            width={60}
            height={70}
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex-1 flex flex-col justify-start items-center p-6">
        <div className="w-full max-w-md">
          {/* Google Sign In */}
          <GoogleButton text="Sign in with Google" />

          {/* Divider */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name (optional)
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-center items-center">
              <Button text="Sign Up" variant="primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
