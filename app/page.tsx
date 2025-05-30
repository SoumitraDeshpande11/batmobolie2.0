'use client';

import BatmobileCanvas from './components/BatmobileCanvas';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      {/* Hero Section */}
      <section className="h-screen relative bg-black">
        <BatmobileCanvas />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-black/30">
          <motion.h1 
            className="text-6xl font-orbitron font-bold neon-glow mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Batmobile Project
          </motion.h1>
          <motion.p 
            className="text-xl font-poppins text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Designed in 3D. Engineered with Passion.
          </motion.p>
          <motion.button 
            className="px-8 py-3 bg-transparent border-2 border-neon-blue rounded-full font-orbitron text-neon-blue neon-border hover:bg-neon-blue hover:text-black transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore
          </motion.button>
        </div>
      </section>

      {/* Additional sections will be added in subsequent updates */}
    </main>
  );
}