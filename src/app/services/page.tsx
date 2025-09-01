import Image from "next/image";

export default function ServicesPage() {

    return (
        <>



            <section className="w-full py-16 bg-white ">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خدماتنا</h2>
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
                            <h3 className="text-xl font-bold text-gray-800 mb-0">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full max-w-2xl mx-auto mt-10 mb-4 text-center">
                <h3 className="text-lg mb-2 font-['Inter'] font-[700] text-blue-900 text-[25px]" >
                    هل أنت مستعد لأعمال أفضل وأكثر إنتاجية؟
                </h3>
                <p className="text-gray-700 mb-5 text-[20px] font-['Inter'] font-[500] ">
                    توقّف عن القلق بشأن مشاكل التكنولوجيا وركز على عملك، دعونا نقدم الدعم الذي تستحقه.
                </p>
                <button className="bg-blue-800 text-[24px] hover:bg-blue-900 transition text-white py-2 px-20 rounded-md shadow font-['Tajawal'] font-[500]">
                    اتصل الآن
                </button>
            </section>
        </>
    );
}
