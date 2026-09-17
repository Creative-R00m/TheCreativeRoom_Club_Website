import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='px-[var(--site-margin-x)]'>
      <h1>The Creative Room</h1>
      <Button variant='default' size='default' radius='oval'>
        Click Me
      </Button>

      <div
        className={`mx-[-var(--site-margin-x)] w-screen ${styles.bleedOut} ${styles.red}`}
      ></div>
    </div>
  );
}
