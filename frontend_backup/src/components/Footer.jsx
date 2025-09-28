import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-brand text-white h-[64px] flex items-center z-40">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between text-sm">
        <div>© {new Date().getFullYear()} NexusShop</div>
        <div className="flex gap-6">
          <a href="#" className="opacity-80 hover:opacity-100">
            About
          </a>
          <a href="#" className="opacity-80 hover:opacity-100">
            Contact
          </a>
          <a href="#" className="opacity-80 hover:opacity-100">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
