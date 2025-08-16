import React from 'react'
import { SiWhatsapp } from "react-icons/si";

function WaButton() {
  return (
    <div>
            {/* <!-- WhatsApp Floating Button --> */}
    <a href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20printing%20Anda."
       target="_blank"
       className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 z-50">
        <SiWhatsapp className="w-8 h-8" />
    </a>
    </div>
  )
}

export default WaButton