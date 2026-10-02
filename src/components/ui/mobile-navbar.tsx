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

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant='ghost' size='icon' className='md:hidden' />}
      >
        <Menu className='h-5 w-5' />
        <span className='sr-only'>Toggle menu</span>
      </SheetTrigger>
      <SheetContent side='left' className='w-[280px] sm:w-[320px]'>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className='flex flex-col gap-4 mt-6'>
          <SheetClose
            nativeButton={false}
            render={<Link href='/' className='text-lg font-medium' />}
          >
            Home
          </SheetClose>
          <SheetClose
            nativeButton={false}
            render={<Link href='/events' className='text-lg font-medium' />}
          >
            Events
          </SheetClose>
          <SheetClose
            nativeButton={false}
            render={<Link href='/about' className='text-lg font-medium' />}
          >
            About
          </SheetClose>
          <SheetClose
            nativeButton={false}
            render={<Link href='/contact' className='text-lg font-medium' />}
          >
            Contact
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
