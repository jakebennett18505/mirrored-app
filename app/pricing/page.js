'use client'

import { usePathname } from 'next/navigation'
import PageHeader from 'components/PageHeader/PageHeader.js';

export default function About() {
    const fetchedpath = usePathname()
    return (
      <PageHeader pathname={fetchedpath} />
      )
}