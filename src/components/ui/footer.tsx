"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Our Events" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className='bg-cover bg-top bg-no-repeat'
      style={{ backgroundImage: "url('/images/paper-rip-1.png')" }}
    >
      <div className='px-[var(--site-margin-x)] pt-48 pb-14 flex flex-col gap-12'>
        <div className='flex flex-col items-center justify-center gap-12 md:flex-row md:justify-between md:gap-0'>
          <div className='flex max-w-[30ch] flex-col items-center justify-between text-center md:items-start md:text-left'>
            <Image
              src='/logo_primary.svg'
              alt='Logo'
              width={150}
              height={150}
            />
            <p className='type-body'>
              A community-driven creative hub for designers, developers, and
              makers at BCIT.
            </p>
          </div>
          <div className='flex w-full flex-row justify-around text-center md:w-auto md:justify-start md:gap-14'>
            <div className='flex flex-col items-center gap-4'>
              <h4 className='type-label uppercase mb-2'>Menu</h4>
              {menuLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "type-body hover:underline",
                      isActive ? "text-primary" : "text-secondary",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className='flex flex-col items-center gap-4'>
              <h4 className='type-label uppercase mb-2'>Socials</h4>
              <Link
                className='type-body text-secondary hover:underline'
                href='https://www.instagram.com/thecreativeroom.damd/'
              >
                Instagram{" "}
                <ArrowUpRight className='inline' strokeWidth={1.5} size={20} />
              </Link>
              <Link
                className='type-body text-secondary hover:underline'
                href='https://www.linkedin.com/company/thecreativeroomclub/'
              >
                LinkedIn{" "}
                <ArrowUpRight className='inline' strokeWidth={1.5} size={20} />
              </Link>
              <Link
                className='type-body text-secondary hover:underline'
                href='https://discord.gg/creative-room'
              >
                Discord{" "}
                <ArrowUpRight className='inline' strokeWidth={1.5} size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse items-center justify-center gap-6 text-center md:flex-row md:justify-between md:gap-0'>
          <p className='type-body text-muted md:text-left'>
            © 2026 The Creative Room. All rights reserved.
          </p>
          <div className='flex flex-row gap-6 text-center'>
            <Link
              className='type-body text-muted hover:underline'
              href='/privacy-policy'
            >
              Privacy Policy
            </Link>
            <Link
              className='type-body text-muted hover:underline'
              href='/terms-of-service'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
