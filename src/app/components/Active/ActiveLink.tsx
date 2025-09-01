"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ActiveLink({ href, children }: Props) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={
                isActive
                    ? "text-[#04356F] font-['Tajawal'] font-[800]"
                    : "text-[#000000] font-['Tajawal'] font-[500]"
            }
        >
            {children}
        </Link>
    );
}
