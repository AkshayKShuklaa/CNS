import React from 'react';

const WhatsAppButton = () => {
  // Configurable WhatsApp mobile number (include country code, e.g. 91 for India)
  const phoneNumber = "919876543210"; 
  const message = "Hello! I would like to get in touch with Consult New Stream.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Ripple Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none opacity-75" />
      
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 fill-current relative z-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.99C16.458 1.875 14.026 1.83 12.012 1.83c-5.435 0-9.863 4.421-9.867 9.865-.001 1.73.457 3.42 1.32 4.933l-.994 3.635 3.72-.975zM15.86 12.44c-.21-.105-1.24-.613-1.433-.683-.19-.07-.33-.105-.47.105-.14.21-.542.683-.665.823-.122.14-.245.158-.455.053-.21-.105-.885-.327-1.686-1.04-.623-.556-1.044-1.243-1.166-1.453-.123-.21-.013-.323.092-.428.096-.095.21-.245.316-.368.105-.123.14-.21.21-.35.07-.14.035-.263-.017-.368-.053-.105-.47-1.133-.643-1.55-.17-.407-.34-.35-.47-.356-.123-.006-.263-.007-.403-.007-.14 0-.368.053-.56.263-.193.21-.737.72-.737 1.758s.755 2.035.86 2.175c.105.14 1.485 2.27 3.6 3.18.503.216.896.345 1.2.44.505.16.964.137 1.327.083.405-.06 1.24-.508 1.413-1 .173-.492.173-.913.12-1-.053-.087-.193-.14-.403-.245z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
