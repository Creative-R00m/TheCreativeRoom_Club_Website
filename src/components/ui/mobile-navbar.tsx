"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

interface MobileNavProps {
  links: NavLink[];
}

export function MobileNav({ links }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant='link' size='icon' className='md:hidden' />}
      >
        <Menu className='size-5' />
        <span className='sr-only'>Toggle menu</span>
      </SheetTrigger>

      <SheetContent side='top' className='!h-full w-full'>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className='flex flex-col gap-4 mt-6 mx-4'>
          {links.map((link) => (
            <SheetClose
              key={link.href}
              nativeButton={false}
              render={<Link href={link.href} className='text-lg font-medium' />}
            >
              {link.label}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
