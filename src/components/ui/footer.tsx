import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className='px-[var(--site-margin-x)] py-14 flex flex-col gap-12'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col justify-between max-w-[30ch]'>
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
          <div className='flex flex-row gap-14'>
            <div className='flex flex-col gap-4'>
              <h4 className='type-label uppercase mb-2'>Menu</h4>
              <Link href='/' className='type-body'>
                Home
              </Link>{" "}
              {/* black only when on that page, else gray */}
              <Link href='/about' className='type-body text-secondary'>
                About Us
              </Link>
              <Link href='/events' className='type-body text-secondary'>
                Our Events
              </Link>
              <Link href='/contact' className='type-body text-secondary'>
                Contact
              </Link>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='type-label uppercase mb-2'>Socials</h4>
              <Link
                className='type-body text-secondary'
                href='https://www.instagram.com/thecreativeroomclub/'
              >
                Instagram <ArrowUpRight className='inline' />
              </Link>
              <Link
                className='type-body text-secondary'
                href='https://www.linkedin.com/company/thecreativeroomclub/'
              >
                LinkedIn <ArrowUpRight className='inline' />
              </Link>
              <Link
                className='type-body text-secondary'
                href='https://www.facebook.com/thecreativeroomclub/'
              >
                Discord <ArrowUpRight className='inline' />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='type-body text-muted'>
            © 2026 The Creative Room. All rights reserved.
          </p>
          <div className='flex flex-row gap-6'>
            <Link className='type-body text-muted' href='/privacy-policy'>
              Privacy Policy
            </Link>
            <Link className='type-body text-muted' href='/terms-of-service'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      {/* img */}
    </footer>
  );
}
