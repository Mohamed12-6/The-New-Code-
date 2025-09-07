



"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
 { title: "UI/UX DESIGN", img: "/2.jpg" },
                            { title: "تصميم وبرمجة مواقع إلكترونية", img: "/4.jpg" },
                            { title: "GRAPHIC DESIGN", img: "/1.jpg" },
                            { title: "GRAPHIC DESIGN", img: "/e0b2ea6f0b906542cb0044f14a2b9aa949008fe0.jpg" },
                            { title: "برمجة الألعاب", img: "/5.jpg" },
                            { title: "برمجة وتصميم تطبيقات", img: "/3.jpg" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index:number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
<>
    <section className="w-full py-16 bg-white">
      <h2 className="text-3xl font-[Tajawal] font-medium text-gray-800 mb-12 text-center">
        خدماتنا
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <div
            key={i}
            onClick={() => openModal(i)}
            className="group relative rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="h-40 overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                width={300}
                height={160}
                className="object-cover w-full h-40 rounded-t-2xl transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 relative z-10">
              <h3 className="text-xl font-[Tajawal] font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        ))}
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 ">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold cursor-pointer"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl font-bold cursor-pointer"
          >
              ›
            
          </button>

          <Image
            src={services[currentIndex].img}
            alt="Preview"
            width={800}
            height={600}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl font-bold cursor-pointer"
          >
               ‹
          </button>
        </div>
      )}
    </section>

    
            <section className="w-full max-w-2xl mx-auto mt-10 mb-4 text-center">
                <h3 className="text-lg mb-2 font-['Inter'] font-[700] text-blue-900 text-[25px]" >
                    هل أنت مستعد لأعمال أفضل وأكثر إنتاجية؟
                </h3>
                <p className="text-gray-700 mb-5 text-[20px] font-['Inter'] font-[500] ">
                    توقّف عن القلق بشأن مشاكل التكنولوجيا وركز على عملك، دعونا نقدم الدعم الذي تستحقه.
                </p>
  <Link href="/contact">
  <button
    className="text-[24px] text-white py-2 px-20 rounded-md shadow font-['Tajawal'] font-[500] 
               bg-gradient-to-r from-[#04356F] to-[#0866D5] 
               hover:from-[#032a58] hover:to-[#0650a8] 
               transition duration-300 cursor-pointer" 
  >
    اتصل الآن
  </button>
</Link>
            </section>
</>
  );
}

