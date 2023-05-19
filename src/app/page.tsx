"use client"

import Image from 'next/image'
import Label from './components/Label'
import Heading from './components/Heading'
import PField from './components/PField'
import LinkField from './components/LinkField'
import IconField from './components/IconField'
import { TabField } from '@/app/components/TabField'
import { useState } from 'react'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <div className='flex flex-col gap-4 pt-32 pb-24 px-6'>
          <div className='flex justify-center'>
            <LinkField className='border rounded-1hr border-gray-400 text-sm py-1.5 px-3 text-gray-500'>Read the Vercel Storage announcement <IconField title='GO' iconName='las la-podcast' /></LinkField>
          </div>
          <Heading className='text-transparent text-4nt bg-clip-text bg-gradient-to-b from-gray-500 dark:from-white to-black dark:to-gray-400 max-w-8hr text-center font-extrabold leading-4nt py-6 tracking-tighter' >Serverless storage designed for the web</Heading>
          <PField className='font-normal text-xl text-center tracking-tight text-gray-500'>Accelerate your Vercel Workflow with databases optimized for the fastest frontends</PField>
        </div>
        <TabField 
          selectedTabIndex={selectedTab} 
          tabs={[
            {iconLightSrc:"/List/KV.svg", iconDarkSrc:"/List/KV-dark.svg", iconInactiveSrc:"/List/KV-Inactive.svg", heading:"Vercel KV", content:"Durable Redis®", id:"0"}, 
            {iconLightSrc:"/List/Blob.svg", iconDarkSrc:"/List/Blob-dark.svg", iconInactiveSrc:"/List/Blob-Inactive.svg", heading:"Vercel Postgres", content:"Serverless SQL", id:"1"},
            {iconLightSrc:"/List/Edge.svg", iconDarkSrc:"/List/Edge-dark.svg", iconInactiveSrc:"/List/Edge-Inactive.svg", heading:"Vercel Blob", content:"Fast object storage", id:"2"},
            {iconLightSrc:"/List/Postgres.svg", iconDarkSrc:"/List/Postgres-dark.svg", iconInactiveSrc:"/List/Postgres-Inactive.svg", heading:"Edge Config", content:"Ultra-low latency reads", id:"3"},
          ]} 
          setSelectedTab={setSelectedTab} 
        />
      </div>
    </main>
  )
}
