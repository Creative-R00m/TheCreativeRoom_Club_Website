import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            {/* logo */}
            <p>
              A community-driven creative hub for designers, developers, and
              makers at BCIT.
            </p>
          </div>
          <div>
            <div>
              <h4>Menu</h4>
              <Link href='/'>Home</Link>
              <Link href='/about'>About Us</Link>
              <Link href='/events'>Our Events</Link>
              <Link href='/contact'>Contact</Link>
            </div>
            <div>
              <h4>Socials</h4>
              <Link href='https://www.instagram.com/thecreativeroomclub/'>
                Instagram <ArrowUpRight className='inline' />
              </Link>
              <Link href='https://www.linkedin.com/company/thecreativeroomclub/'>
                LinkedIn <ArrowUpRight className='inline' />
              </Link>
              <Link href='https://www.facebook.com/thecreativeroomclub/'>
                Discord <ArrowUpRight className='inline' />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p>© 2026 The Creative Room. All rights reserved.</p>
          <div>
            <Link href='/privacy-policy'>Privacy Policy</Link>
            <Link href='/terms-of-service'>Terms of Service</Link>
          </div>
        </div>
      </div>
      {/* img */}
    </footer>
  );
}
