'use client'
import styles from './about.module.css'
import { usePathname } from 'next/navigation'

export default function About() {
    const pathname = usePathname()
    return (
          <div className={styles.main}>
            <h1>This is the {pathname} page using next.js</h1>
          </div>
      )
}