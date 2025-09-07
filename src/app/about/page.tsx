import Link from "next/link";
import logo from "/public/00bd2918836832cef79b9ec3b4df0cd2b80e3033.jpg";
import Image from "next/image";

export default function About() {
    return (
        <main className=" bg-gray-50 flex flex-col items-center">
            <section className="w-full max-w-3xl mx-auto mt-8  rounded-xl p-8">
                <h2 className="text-center text-xl text-blue-900 mb-4 font-['Tajawal'] font-[800] text-[36px]">
                    واقعك The New Code
                </h2>
                <p className="text-justify text-gray-700 leading-relaxed mb-2 font-['Inter'] font-[400] text-[20px]">
                    شركة تقنية مبتكرة متخصصة في تطوير الحلول البرمجية وتصميم التجارب الرقمية المتكاملة، تهدف إلى مساعدة الأفراد والمؤسسات على الانتقال بسلاسة إلى عصر الرقمنة. نقدم مجموعة متنوعة من الخدمات تشمل تصميم وتطوير المواقع والتطبيقات، برمجة الأنظمة المخصصة، تطوير المنصات التعليمية، وحلول التجارة الإلكترونية، مع التركيز على الجودة العالية وتجربة المستخدم المميزة.
                    نعمل بفلسفة
                    الكود الجديد
                    التي تعكس التزامنا بابتكار أساليب برمجية حديثة وذكية، تواكب التطورات التقنية وتلبي احتياجات السوق المحلي والعالمي. فريقنا يتكون من مبرمجين ومصممين محترفين يمتلكون خبرة واسعة في UI/UX، والتقنيات الحديثة مثل React، Node.js، وLaravel، إضافة إلى التزامنا بمعايير الأمان والمرونة في جميع المشاريع.
                    رؤيتنا أن نكون شريكك الرقمي الموثوق الذي يحول أفكارك إلى منتجات ناجحة تحقق لك التميز والتأثير في عالم التقنية.
                </p>
            </section>

            <section className="w-full max-w-2xl mx-auto mt-5 mb-4 text-center">
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

            <div className="relative w-full h-80">
                <Image
                    src={logo}
                    alt="كود على اللابتوب"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </main>
    );
}
