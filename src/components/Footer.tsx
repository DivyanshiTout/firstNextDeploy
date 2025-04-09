"use client"; // if you're using app directory

import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiArrowFromTop,
  BiMap,
  BiPhone,
  BiTime,
  BiEnvelope
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Newsletter */}
          <div>
            <div className="grid md:grid-cols-6 "> 
            <Image src="/logo.png" className="h-8" alt="Flowbite Logo" width={30} height={50} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">What'sNext</span>
            </div>

            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="px-1 py-2 bg-purple-600 text-white rounded-md w-full text-xs font-bold">SIGN UP</button>
            </div>
            <div className="flex gap-3 mt-4 text-xl">
              <a href="#"><BiLogoFacebook /></a>
              <a href="#"><BiLogoTwitter /></a>
              <a href="#"><BiLogoLinkedin /></a>
              <a href="#"><BiLogoInstagram /></a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2 text-sm">
              {["Property Pulse", "Renovation Rescue", "Property Maintenance", "Security Services", "Relocation Assistance"].map((service, i) => (
                <li key={i} className="flex items-center hover:text-purple-700">
                  
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="font-semibold mb-4">Useful Links</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center hover:text-purple-700"><a href="/">Home</a></li>
              <li className="flex items-center hover:text-purple-700"><a href="/aboutUs">About Us</a></li>
              <li className="flex items-center hover:text-purple-700"><a href="#service-container">Services</a></li>
              <li className="flex items-center hover:text-purple-700"><a href="#">Portfolio</a></li>
              <li className="flex items-center hover:text-purple-700"><a href="/contactUs">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start hover:text-purple-700"><BiMap className="mr-2 mt-1" />2118 Thornridge Cir, Syracuse, Connecticut 35624</li>
              <li className="flex items-center hover:text-purple-700"><BiPhone className="mr-2" />+517 845 74589</li>
              <li className="flex items-center hover:text-purple-700"><BiTime className="mr-2" />9AM - 5PM (Mon-Fri)</li>
              <li className="flex items-center hover:text-purple-700"><BiEnvelope className="mr-2" />help24/7@domain.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; 2025 Consalfa. All Rights Reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0 hover:text-purple-700k">
            <a href="#">Setting & Privacy</a>
            <a href="#">FAQ</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
