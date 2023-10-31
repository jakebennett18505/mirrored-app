'use client';

import Image from 'next/image'

import { usePathname } from 'next/navigation'
import PageHeader from '../components/PageHeader/PageHeader.js';


export default function Home() {
  const fetchedpath = usePathname()
    return (
      <PageHeader pathname={fetchedpath} />
      )
}
