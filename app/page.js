"use client"
import BodySection from '@/components/Body/BodySection'
import HeroSection from '@/components/Hero/HeroSection'
import LowerSection from '@/components/LowerBody.js/LowerSection'
// import { SessionProviver } from 'next-auth/react'


export default function Home() {
  
  return (
    // <SessionProviver session={session}>
    <div>
      <HeroSection/>
      <BodySection/>
      <LowerSection/>
    </div>
    // </SessionProviver>

  )
}
