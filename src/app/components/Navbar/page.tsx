"use client";
import Image from "next/image";
import logo from "/public/logo.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Tajawal } from "next/font/google";
import { useState } from "react";
import ActiveLink from "../Active/ActiveLink";
import { FiMenu, FiX } from "react-icons/fi";

const tajawal = Tajawal({
    subsets: ["arabic"],
    weight: ["500"],
});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-[#0B2C6A] text-white text-xs md:text-sm">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 space-y-2 md:space-y-0">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="w-4 h-4" />
                            <span>1220000000000</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="w-4 h-4" />
                            <span>thenewcode@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="hidden md:inline">تكلم معنا للخدمات</span>
                        <FaFacebook className="w-4 h-4 cursor-pointer hover:text-blue-500" />
                        <FaTwitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                        <FaInstagram className="w-4 h-4 cursor-pointer hover:text-pink-500" />
                    </div>
                </div>
            </div>

            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Image src={logo} alt="logo" width={40} height={40} className="h-10 w-auto" />
                    </div>

                    <ul className={`hidden md:flex space-x-6 text-base font-medium ${tajawal.className}`}>
                        <li><ActiveLink href="/">الرئيسية</ActiveLink></li>
                        <li><ActiveLink href="/about">عن الشركة</ActiveLink></li>
                        <li><ActiveLink href="/services">الخدمات</ActiveLink></li>
                        <li><ActiveLink href="#">أعمالنا</ActiveLink></li>
                        <li><ActiveLink href="#">المدونة</ActiveLink></li>
                        <li><ActiveLink href="/contact">اطلب الآن</ActiveLink></li>
                        <li><ActiveLink href="#">خدمة العملاء</ActiveLink></li>
                    </ul>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl text-gray-700"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {isOpen && (
                    <ul className={`md:hidden flex flex-col space-y-4 px-6 py-4 bg-gray-50 text-base ${tajawal.className}`}>
                        <li><ActiveLink href="/">الرئيسية</ActiveLink></li>
                        <li><ActiveLink href="/about">عن الشركة</ActiveLink></li>
                        <li><ActiveLink href="/services">الخدمات</ActiveLink></li>
                        <li><ActiveLink href="#">أعمالنا</ActiveLink></li>
                        <li><ActiveLink href="#">المدونة</ActiveLink></li>
                        <li><ActiveLink href="/contact">اطلب الآن</ActiveLink></li>
                        <li><ActiveLink href="#">خدمة العملاء</ActiveLink></li>
                    </ul>
                )}
            </nav>
        </>
    );
}
