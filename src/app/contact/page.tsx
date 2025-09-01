'use client'
import React, { useState } from 'react'

type FormState = {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log('تم إرسال الطلب:', form)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3500)
    }

    return (
        <main className="min-h-screen flex flex-col items-center p-6 space-y-6">
            <section className="w-full max-w-3xl rounded-xl shadow-lg p-6 bg-gradient-to-l from-[#F4F4F4] to-[#8E8E8E]">
                <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">تواصل معنا</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-right text-gray-700 mb-1">الاسم الأول</label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                placeholder="الاسم الأول"
                                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-right text-gray-700 mb-1">الاسم الثاني</label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                placeholder="الاسم الثاني"
                                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-right text-gray-700 mb-1">البريد الإلكتروني</label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="مثال: thenewcode@gmail.com"
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-right text-gray-700 mb-1">رقم الهاتف</label>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="05xxxxxxxx"
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-right text-gray-700 mb-1">نص الرسالة</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="اكتب كافة تفاصيل طلبك"
                            rows={6}
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-40 py-3 rounded-md bg-gradient-to-r from-blue-700 to-blue-500 text-white font-medium shadow-md hover:opacity-90 transition"
                        >
                            أرسل طلبك
                        </button>
                    </div>

                    {submitted && (
                        <p className="text-center text-green-700 mt-2">تم إرسال الطلب بنجاح — شكرًا لتواصلك!</p>
                    )}
                </form>

            </section>

            <section className="w-full max-w-3xl rounded-xl shadow-md overflow-hidden">
                <iframe
                    src="https://www.google.com/maps?q=Desouq,+Egypt&output=embed"
                    className="w-full h-96 border-0"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>
        </main>
    )
}
