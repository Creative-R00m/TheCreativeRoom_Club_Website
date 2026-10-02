"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/ui/mobile-navbar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-between px-[var(--site-margin-x)] py-4'>
      <div>
        <Link href='/' className=''>
          <Image src='/logo.svg' alt='Logo' width={50} height={50} />
        </Link>
      </div>

      <div className='flex gap-6'>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "type-links-active font-medium",
                isActive
                  ? "text-primary font-extrabold"
                  : "text-secondary hover:text-secondary",
              )}
            >
              <span className='flex items-center gap-[0.4em]'>
                {isActive && (
                  <span className='inline-block h-[0.55em] w-[0.55em] rounded-full bg-current' />
                )}
                <span>{link.label}</span>
              </span>
            </Link>
          );
        })}
      </div>

      <div className='flex items-center gap-4'>
        <Button
          variant='default'
          size='default'
          radius='default'
          className='hidden sm:inline-flex'
        >
          Join Us
        </Button>
        <MobileNav links={navLinks} />
      </div>
      <div></div>
    </nav>
  );
}
