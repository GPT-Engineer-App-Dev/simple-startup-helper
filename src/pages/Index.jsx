import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My App</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <Button>Get Started</Button>
      </main>

      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;