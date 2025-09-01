"use client";
import React from "react";

export default function Footer() {
    return (
        <footer
            dir="ltr"
            className="bg-gradient-to-r from-black/90 via-[#0D51A2] to-[#04356F] text-white py-10 px-5 font-['Be_Vietnam_Pro']"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-right">

                <div>
                    <h3 className="font-[700] mb-4">مركز المساعدة</h3>
                    <ul className="space-y-2 text-sm font-[500]">
                        <li>أسئلة شائعة</li>
                        <li>تواصل معنا</li>
                        <li>الدليل الإرشادي</li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-[700] mb-4">التواصل الاجتماعي</h3>
                    <ul className="space-y-2 text-sm font-[500]">
                        <li>واتساب</li>
                        <li>فيسبوك</li>
                        <li>لينكدإن</li>
                        <li>انستجرام</li>
                    </ul>
                </div>


                <div>
                    <h3 className=" font-[700] mb-4">روابط مهمة</h3>
                    <ul className="space-y-2 text-sm font-[500]">
                        <li>خدماتنا</li>
                        <li>أعمالنا</li>
                        <li>المدونة</li>
                        <li>العروض</li>
                    </ul>
                </div>


                <div>
                    <p className="text-sm leading-6 font-[400]">
                        واكب أحدث ابتكاراتنا، وتعرف على مستجدات خدماتنا، واقرأ مقالات
                        ملهمة تساعدك على الارتقاء بمشروعك نحو النجاح.
                    </p>
                </div>
            </div>


            <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs font-[400]">
                2025 thenewcode@gmail.com
            </div>
        </footer>
    );
}
