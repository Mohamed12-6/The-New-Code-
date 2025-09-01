"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaQuoteRight, FaStar, FaTelegramPlane } from "react-icons/fa";

import logo from "/public/roket.png";
import teamImg from "/public/1 (5).jpg";
import logo7 from "/public/1 (3).png";
import logo8 from "/public/1 (2).png";
import logo9 from "../../public/1 (4).jpg";

import { Tajawal } from "next/font/google";
import { Lato } from "next/font/google";


const tajawal = Tajawal({
    subsets: ["arabic"],
    weight: ["800"],
});


const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
});
const team = [{
    name: "عمر عادل",

    role: "Frontend Developer",
    desc: "مبدعة تركز على خلق تجارب مستخدم سلسة وجذابة. تجمع بين الفن والتقنية لتحويل الأفكار إلى تصاميم واقعية تلبي احتياجات المستخدم وتعزز من تفاعلهم مع المنتجات الرقمية.",
    img: teamImg,
},
{
    name: "عبدالله",

    role: "Mobile App ",
    desc: "شغوف بابتكار حلول برمجية فعّالة وذات جودة عالية، يسعى دائمًا لتطوير تجارب المستخدم وتحويل الأفكار إلى تطبيقات عملية تلبي احتياجات العملاء.",
    img: teamImg,
},
{
    name: "الاء النتشة",
    role: "Design UX-UI",
    desc: "مبدعة تركز على خلق تجارب مستخدم سلسة وجذابة. تجمع بين الفن والتقنية لتحويل الأفكار إلى تصاميم واقعية تلبي احتياجات المستخدم وتعزز من تفاعلهم مع المنتجات الرقمية.",
    img: teamImg,
},
{
    name: "عمر عادل",

    role: "Frontend Developer",
    desc: "مبدعة تركز على خلق تجارب مستخدم سلسة وجذابة. تجمع بين الفن والتقنية لتحويل الأفكار إلى تصاميم واقعية تلبي احتياجات المستخدم وتعزز من تفاعلهم مع المنتجات الرقمية.",
    img: teamImg,
},
{
    name: "عبدالله",

    role: "Mobile App ",
    desc: "شغوف بابتكار حلول برمجية فعّالة وذات جودة عالية، يسعى دائمًا لتطوير تجارب المستخدم وتحويل الأفكار إلى تطبيقات عملية تلبي احتياجات العملاء.",
    img: teamImg,
},
{
    name: "الاء النتشة",
    role: "Design UX-UI",
    desc: "مبدعة تركز على خلق تجارب مستخدم سلسة وجذابة. تجمع بين الفن والتقنية لتحويل الأفكار إلى تصاميم واقعية تلبي احتياجات المستخدم وتعزز من تفاعلهم مع المنتجات الرقمية.",
    img: teamImg,
},
];
export default function Home() {
    return (

        <main className={`min-h-screen font-sans text-gray-900 relative flex flex-col items-center  w-full`}>
            <div className="relative z-10">


                <section
                    className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center rounded-b-3xl shadow-lg overflow-x-hidden"
                    style={{
                        backgroundImage: "url('/e0b2ea6f0b906542cb0044f14a2b9aa949008fe0.jpg')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className={`text-center text-white bg-black/40 p-6 rounded-xl ${tajawal.className}`}>
                        <h1 className="text-4xl font-bold mb-4">
                            واقعك لتصميم وبرمجة <span className="block">المواقع والتطبيقات</span>
                        </h1>

                        <p className="text-lg leading-relaxed text-white max-w-2xl mx-auto text-center space-y-2">
                            <span className="block font-normal">
                                نحن مؤسسة تصميم وبرمجة مواقع وتطبيقات رقمية قائمة على نجاح تجربة المستخدم،
                            </span>
                            <span className="block font-normal">
                                نعمل على خلق حلول نحن مؤسسة تصميم وبرمجة مواقع وتطبيقات رقمية
                            </span>
                            <span className="block font-normal">
                                تصميمية وبرمجية مبتكرة
                            </span>
                        </p>

                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white my-5 text-lg font-medium px-20 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                        >
                            اتصل الآن
                        </button>
                    </div>
                </section>



                <section className="max-w-6xl mx-auto px-6 py-12">

                    <h2 className={`text-3xl font-extrabold text-center mb-8 text-blue-700 pb-1 relative ${tajawal.className}`}>
                        <span className="text-black">من </span>
                        <span>نحن ؟</span>
                        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-24 border-b-4 border-blue-700 translate-y-2"></span>

                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="order-last md:order-none">
                            <h3 className={`text-2xl font-bold mb-4 text-gray-900 ${tajawal.className}`}>
                                خطوتك الأولى <span className="text-blue-700">نحو القمة</span>
                            </h3>
                            <p className={`text-lg text-gray-700 leading-loose max-w-2xl mx-auto text-justify space-y-2 ${lato.className}`}>
                                <span className="block">كوننا روّاد التقنية، نعمل لنجعل كل عميل رائدًا في مجاله، ونرتقي</span>
                                <span className="block">بمشاريعه نحو آفاق النجاح، لنكون خياره الأول في تقنية المعلومات</span>
                                <span className="block">ونحافظ على ريادتنا في عالم البرمجة.</span>
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <Image src={logo8} alt="فريق عمل" className="max-w-xs" />
                        </div>

                        <div className="flex justify-center">
                            <Image src={logo7} alt="رجل على قمة جبل" className="max-w-xs" />
                        </div>

                        <div className="order-last md:order-none">
                            <h3 className={`text-2xl font-bold mb-4 text-gray-900 ${tajawal.className}`}>
                                اهدافك <span className="text-blue-700">هي اهدافنا</span>
                            </h3>
                            <p className={`text-lg text-[#666666] max-w-2xl mx-auto text-justify space-y-2 ${lato.className}`}>
                                <span className="block">في واقعك، نجمع نخبة من الخبراء في مجالات متعددة</span>
                                <span className="block">لنحوّل الأفكار إلى إنجازات ملموسة. نعمل بشغف</span>
                                <span className="block">وإتقان لتمكين قدرات عملائنا، ودعم مشاريعهم </span>
                                <span className="block">لتتصدر المنافسة وتصبح معيارًا للتميز. رؤيتنا واضحة:</span>
                                <span className="block">نحول أحلامك إلى واقع يلامس القمة.</span>
                            </p>
                        </div>

                    </div>
                </section>






                <section className="w-full py-16 bg-white ">
                    <h2 className="text-3xl font-[Tajawal] font-medium text-gray-800 mb-12 text-center">خدماتنا</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 ">
                        {[{
                            title: "UI/UX DESIGN",

                            img: "/2.jpg",
                        },
                        {
                            title: "تصميم وبرمجة مواقع إلكترونية",
                            img: "/4.jpg",
                        },
                        {
                            title: "GRAPHIC DESIGN",

                            img: "/1.jpg",
                        },
                        {
                            title: "GRAPHIC DESIGN",
                            img: "/e0b2ea6f0b906542cb0044f14a2b9aa949008fe0.jpg",
                        },
                        {
                            title: "برمجة الألعاب",
                            img: "/5.jpg",
                        },
                        {
                            title: "برمجة وتصميم تطبيقات",

                            img: "/3.jpg",
                        },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className=" rounded-2xl  hover:shadow-2xl transition p-0 "
                            >
                                <div className="h-40 flex items-center justify-center rounded-xl mb-4 overflow-hidden ">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        width={300}
                                        height={160}
                                        className="object-cover rounded-xl w-full h-40"
                                    />
                                </div>
                                <h3 className="text-xl font-[Tajawal] font-bold text-gray-800 mb-0">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>




                <section className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className="text-3xl font-[Tajawal] font-medium text-center mb-12">
                        فريق العمل
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {team.map((t, idx) => (
                            <div
                                key={idx}
                                className="relative bg-blue-900 text-white rounded-2xl pt-16 pb-8 px-6 flex flex-col items-center shadow-xl"
                            >
                                <div className="absolute -top-12">
                                    <Image
                                        src={t.img}
                                        alt={t.name}
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                </div>

                                <h3 className="mt-6 text-xl font-[Tajawal] font-medium">{t.name}</h3>
                                <p className="text-sm text-cyan-300 font-[Jost] font-medium">
                                    {t.role}
                                </p>

                                <p className="text-sm font-[Tajawal] font-normal text-white/80 text-center mt-4 leading-relaxed">
                                    {t.desc}
                                </p>

                                <div className="mt-6 flex gap-4">
                                    <a href="#" aria-label="Facebook" className="hover:text-cyan-300 transition-colors">
                                        <FaFacebookF size={18} />
                                    </a>
                                    <a href="#" aria-label="LinkedIn" className="hover:text-cyan-300 transition-colors">
                                        <FaLinkedinIn size={18} />
                                    </a>
                                    <a href="#" aria-label="Telegram" className="hover:text-cyan-300 transition-colors">
                                        <FaTelegramPlane size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>





                <section className="relative w-screen overflow-x-hidden">
                    <div className="relative overflow-hidden">
                        <div className="relative h-[260px] bg-[#1862c5] rounded-2xl overflow-visible">
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute right-16 -top-32 w-[680px] h-[680px] rounded-full bg-white/10" />
                                <div className="absolute right-24 -top-24 w-[520px] h-[520px] rounded-full bg-white/5" />
                            </div>

                            <div
                                className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-10"
                                dir="rtl"
                            >
                                <div className="text-white text-right max-w-2xl w-full md:pr-[320px]">
                                    <h2 className="text-3xl md:text-4xl font-[Tajawal] font-medium mb-6">
                                        لتبدأ معنا قصة نجاحك
                                    </h2>
                                    <button className="bg-gradient-to-r from-[#1760bb] to-[#0e3d77] hover:from-[#0e3d77] hover:to-[#1760bb] transition-all text-white font-[Tajawal] font-medium text-lg px-8 py-2 rounded-lg shadow">
                                        ابدأ مشروعك
                                    </button>
                                </div>

                                <div className="hidden md:block pointer-events-none absolute bottom-0 right-6 translate-y-6 z-20">
                                    <Image
                                        src={logo}
                                        alt="rocket"
                                        width={320}
                                        height={420}
                                        className="object-contain drop-shadow-lg"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" md:hidden bg-white flex justify-center py-6">
                        <Image
                            src={logo}
                            alt="rocket"
                            width={220}
                            height={300}
                            className="object-contain drop-shadow-lg"
                            priority
                        />
                    </div>
                </section>


                <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-12 py-12 md:py-16 gap-8">
                    <div className="w-full md:w-1/2 text-right">
                        <h3 className="text-lg sm:text-xl md:text-3xl font-[Tajawal] font-bold text-[#1760bb] mb-3">
                            آراء العملاء عن تجربتهم معنا
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 max-w-md font-[Tajawal] font-medium mx-auto md:mx-0">
                            اطلع على تجارب عملائنا السعداء واكتشف كيف ساهمت خدماتنا في تعزيز نجاح مشاريعهم وتحقيق أهدافهم.
                        </p>

                        <div className="hidden md:flex justify-start gap-3">
                            <button
                                aria-label="التالي"
                                className="w-9 h-9 rounded-full bg-[#1760bb] text-white flex items-center justify-center shadow hover:bg-[#1c3879] transition"
                            >
                                <span className="text-lg">&#8594;</span>
                            </button>
                            <button
                                aria-label="السابق"
                                className="w-9 h-9 rounded-full bg-[#1760bb] text-white flex items-center justify-center shadow hover:bg-[#1c3879] transition"
                            >
                                <span className="text-lg">&#8592;</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full md:w-[56%] max-w-xl">
                        <span className="absolute -top-3 -right-3 z-0 h-3 w-40 sm:w-56 bg-[#1760bb] rounded-full shadow-sm" />
                        <span className="absolute -top-3 -right-3 z-0 w-3 h-full bg-[#1760bb] rounded-r-2xl shadow-sm" />

                        <div
                            className="relative z-10 bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 overflow-hidden"
                            style={{ boxShadow: "0px 6px 24px rgba(11,23,48,0.18)" }}
                        >
                            <div className="absolute top-4 right-4 bg-[#1760bb] p-2 sm:p-3 rounded-md">
                                <FaQuoteRight className="text-white text-lg sm:text-xl" />
                            </div>

                            <div className="flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={logo9}
                                        alt="Client"
                                        width={160}
                                        height={200}
                                        className="w-[120px] sm:w-[140px] md:w-[160px] h-[160px] sm:h-[180px] md:h-[200px] rounded-xl object-cover border border-gray-100 shadow-sm"
                                    />
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <div className="font-[Be_Vietnam_Pro] font-medium text-[#1760bb] text-base sm:text-lg">
                                        نداء أحمد
                                    </div>
                                    <div className="font-[Be_Vietnam_Pro] font-normal text-xs sm:text-sm text-gray-400">
                                        Business Mom
                                    </div>

                                    <div className="flex justify-center sm:justify-start flex-row-reverse gap-1 mt-2 text-orange-400">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FaStar key={i} size={14} />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4 max-w-[520px] font-[Tajawal] font-normal">
                                        خدمة ممتازة للغاية كانت فعلياً مفيدة وموثوقة. أبدع الفريق في التنفيذ وكان دقيقًا وملتزمًا بالمواعيد.
                                        أنصح بالتعامل معهم لكل من يبحث عن جودة واحترافية تامة.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex md:hidden justify-center gap-3 mt-6">
                            <button
                                aria-label="التالي"
                                className="w-9 h-9 rounded-full bg-[#1760bb] text-white flex items-center justify-center shadow hover:bg-[#1c3879] transition"
                            >
                                <span className="text-lg">&#8594;</span>
                            </button>
                            <button
                                aria-label="السابق"
                                className="w-9 h-9 rounded-full bg-[#1760bb] text-white flex items-center justify-center shadow hover:bg-[#1c3879] transition"
                            >
                                <span className="text-lg">&#8592;</span>
                            </button>
                        </div>
                    </div>
                </section>




            </div>
        </main>
    );
}