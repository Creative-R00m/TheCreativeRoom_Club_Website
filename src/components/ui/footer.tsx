import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className='bg-no-repeat bg-[length:100%_100%]'
      style={{ backgroundImage: "url('/images/paper-rip-1.png')" }}
    >
      <div className='px-[var(--site-margin-x)] pt-48 pb-14 flex flex-col gap-12'>
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
              <Link href='/' className='type-body hover:underline'>
                Home
              </Link>{" "}
              {/* black only when on that page, else gray */}
              <Link
                href='/about'
                className='type-body text-secondary hover:underline'
              >
                About Us
              </Link>
              <Link
                href='/events'
                className='type-body text-secondary hover:underline'
              >
                Our Events
              </Link>
              <Link
                href='/contact'
                className='type-body text-secondary hover:underline'
              >
                Contact
              </Link>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className='type-label uppercase mb-2'>Socials</h4>
              <Link
                className='type-body text-secondary hover:underline'
                href='https://www.instagram.com/thecreativeroomclub/'
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
        <div className='flex flex-row justify-between'>
          <p className='type-body text-muted'>
            © 2026 The Creative Room. All rights reserved.
          </p>
          <div className='flex flex-row gap-6'>
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
