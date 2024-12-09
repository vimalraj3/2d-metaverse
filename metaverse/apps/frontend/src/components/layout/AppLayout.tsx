import React from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">Metaverse</div>
            <div className="flex space-x-4">{/* Add navigation items */}</div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Metaverse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
