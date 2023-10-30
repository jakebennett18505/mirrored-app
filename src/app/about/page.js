'use client'
import styles from './page.module.css'
import { usePathname } from 'next/navigation'

export default function Page() {
    const pathname = usePathname()
    return (
          <div className={styles.main}>
            <h1>This the {pathname} page using next.js</h1>
          </div>
      )
}