'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { usePathname } from 'next/navigation'



export default function Home() {
  const pathname = usePathname()
  return (
    <div className={styles.main}>
      <h1>This is the {pathname} page using next.js</h1>
    </div>
)
}
