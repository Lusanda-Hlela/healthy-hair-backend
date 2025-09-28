import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="text-nexus-gold font-bold">✦ NexusShop</div>
          <p className="mt-2 text-sm">
            Discover premium hair care tailored for your needs.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Support</h5>
          <ul className="text-sm space-y-1">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Customer Service</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Legal</h5>
          <ul className="text-sm space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-400 py-4">
        <div className="max-w-6xl mx-auto px-6 text-sm">
          © 2024 NexusShop, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
