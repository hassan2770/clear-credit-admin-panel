import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main>
      <Link href={"/dashboard"}>Go to Dashboard</Link>
    </main>
  )
}
