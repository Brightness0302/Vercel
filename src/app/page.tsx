"use client"

import Image from 'next/image'
import Label from './components/Label'
import Heading from './components/Heading'
import PField from './components/PField'
import LinkField from './components/LinkField'
import IconField from './components/IconField'
import { TabField } from '@/app/components/TabField'
import { useState } from 'react'
import Badge from './components/shared/Badge'
import Button from './components/shared/Button'
import ButtonNav from './components/ButtonNav'
import Info1Field from './components/Info1Field'
import Info2Field from './components/Info2Field'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='w-full mainPage'>
        <div className='elementor-background-overlay'></div>
        <div className='flex justify-center '>
          <div className='flex flex-col gap-4 mt-12 md:mt-28 mb-4 md:mb-20 mx-2 p-16 rounded-xl firstSection'>
            <div className='flex justify-center'>
              <LinkField className='border rounded-1hr border-gray-400 text-sm py-1.5 px-3 text-neutral-700 dark:text-neutral-200 rounded-full'>PRIMO Taxi Transport<IconField title='GO' iconName='las la-podcast' /></LinkField>
            </div>
            <Heading className='text-transparent bg-clip-text bg-gradient-to-b from-gray-500 dark:from-white to-black dark:to-gray-400 max-w-8hr text-center font-extrabold leading-10 md:leading-4nt py-6 tracking-tighter m-auto' ><span className='text-4xl'>PRIMO Taxi Rotterdam</span><br/><span className='text-5xl md:text-4nt'>24/7 Available</span><br/><span className='text-5xl md:text-4nt'>On +31 10 26 22 540</span></Heading>
            <PField className='font-normal text-base md:text-xl text-center tracking-tight text-neutral-700 dark:text-neutral-200'>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</PField>
            <div className='text-center'>
              <Button className='text-lg border border-gray-400 bg-sky-400 text-d-background rounded-lg'>Book Now</Button>
            </div>
          </div>
        </div>
        {/* <TabField 
          className='max-w-fit md:max-w-none overflow-x-auto md:overflow-x-clip'
          selectedTabIndex={selectedTab} 
          tabs={[
            {iconLightSrc:"/List/KV.svg", iconDarkSrc:"/List/KV-dark.svg", iconInactiveSrc:"/List/KV-Inactive.svg", heading:"Vercel KV", content:"Durable Redis®", id:"0"}, 
            {iconLightSrc:"/List/Blob.svg", iconDarkSrc:"/List/Blob-dark.svg", iconInactiveSrc:"/List/Blob-Inactive.svg", heading:"Vercel Postgres", content:"Serverless SQL", id:"1"},
            {iconLightSrc:"/List/Edge.svg", iconDarkSrc:"/List/Edge-dark.svg", iconInactiveSrc:"/List/Edge-Inactive.svg", heading:"Vercel Blob", content:"Fast object storage", id:"2"},
            {iconLightSrc:"/List/Postgres.svg", iconDarkSrc:"/List/Postgres-dark.svg", iconInactiveSrc:"/List/Postgres-Inactive.svg", heading:"Edge Config", content:"Ultra-low latency reads", id:"3"},
          ]} 
          setSelectedTab={setSelectedTab} 
        /> */}
      </div>
      <div className='px-6 md:px-32 items-center w-full flex flex-col justify-start gap-10 mt-0 mb-32'>
        <div className='w-full'>
          <Heading className='text-transparent text-base md:text-3.3xl bg-clip-text bg-gradient-to-b from-gray-500 dark:from-white to-black dark:to-gray-400 max-w-8hr font-extrabold leading-5 md:leading-4xl py-6 tracking-tighter' >Highly available, fully managed</Heading>
          <PField className='font-normal text-sm md:text-xl tracking-tight text-neutral-700 dark:text-neutral-200 w-full md:w-9hr'>A database designed for instant provisioning, unlimited environments, and automatic scaling. No more clusters or connection pooling.</PField>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <div>
            <img src='/Images/deluxe-enter-cab-1024x678.webp' alt='Deluxe-Enter-cab' className='rounded-2xl shadow-xl' />
          </div>
          <div className='flex flex-col gap-5'>
            <Info1Field iconName='las la-compress-arrows-alt' heading='Effortless scaling' content='Built to handle the unpredictable nature of web traffic, scaling up and down as needed.' />
            <Info1Field iconName='las la-clock' heading='Ready for the edge' content="For low-latency, high-throughput reads and writes, designed to work natively with Vercel's compute products." />
            <Info1Field iconName='las la-exclamation-triangle' heading='No management required' content="No setup required. Spend your time building your application, not managing database instances." />
          </div>
        </div>
      </div>
      <div className='px-6 md:px-32 items-center w-full flex flex-col justify-start gap-10'>
        <div className='w-full'>
          <Heading className='text-transparent text-base md:text-3.3xl bg-clip-text bg-gradient-to-b from-gray-500 dark:from-white to-black dark:to-gray-400 max-w-8hr font-extrabold leading-5 md:leading-4xl py-6 tracking-tighter' >Built for modern web frameworks</Heading>
          <PField className='font-normal text-sm md:text-xl tracking-tight text-neutral-700 dark:text-neutral-200 w-full md:w-9hr'>Designed for the evolution of JavaScript and TypeScript frameworks, Vercel KV allows developers to store and retrieve any JavaScript value with a promise-based API, without worrying about serialization.</PField>
        </div>
        <div className='flex flex-col md:flex-row justify-around gap-5 md:gap-10'>
          <div className='hidden md:flex flex-row md:flex-col gap-5 min-w-24ts justify-start'>
            <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500' imageSrc='/Buttons/Frame_427318739.svg' imageAlt='Next.js' heading='Next.js' content='Fetch saved user preferences' />
            <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500' imageSrc='/Buttons/Frame_427318740.svg' imageAlt='SvelteKit' heading='SvelteKit' content='Store session data' />
            <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500' imageSrc='/Buttons/Nuxt.svg' imageAlt='Nuxt' heading='Nuxt' content='Store session data' />
          </div>
          <div className='block md:hidden max-w-fit md:max-w-none overflow-x-auto md:overflow-x-clip'>
            <div className='flex flex-row md:flex-col gap-5 justify-start'>
              <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500 min-w-24ts' imageSrc='/Buttons/Frame_427318739.svg' imageAlt='Next.js' heading='Next.js' content='Fetch saved user preferences' />
              <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500 min-w-24ts' imageSrc='/Buttons/Frame_427318740.svg' imageAlt='SvelteKit' heading='SvelteKit' content='Store session data' />
              <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500 min-w-24ts' imageSrc='/Buttons/Nuxt.svg' imageAlt='Nuxt' heading='Nuxt' content='Store session data' />
            </div>
          </div>
          <div>
            <img className='object-contain rounded-2xl' src='/Images/vip-taxi.jpg' alt='vip-taxi' />
          </div>
        </div>
      </div>
      {/* <div className='flex justify-between p-6 md:p-32 items-center relative border border-0 border-b-gray-500 border-t-2'>
        <div className=''>
          <Badge color='red' name="Now available in Beta" className='bg-red-400 text-white dark:text-black' />
          <div className='flex flex-col gap-5'>
            <Heading className='text-transparent text-3xl md:text-6xl bg-clip-text bg-gradient-to-b from-gray-500 dark:from-white to-black dark:to-gray-400 max-w-8hr font-extrabold leading-10 md:leading-4nt py-6 tracking-tighter' >Global data for high-performance web apps</Heading>
            <PField className='font-normal text-base md:text-xl tracking-tight text-neutral-700 dark:text-neutral-200'>Vercel KV is a fully managed, globally replicated, Redis-compatible database optimized for high-performance web apps.</PField>
            <div className='flex justify-around md:justify-start'>
              <Button className="border border-gray-500 mx-5 text-neutral-200 dark:text-neutral-700 rounded-md bg-d-background dark:bg-background d-backgroundButton">Get Started</Button>
              <Button className="border border-gray-500 mx-5 text-neutral-700 dark:text-neutral-200 rounded-md bg-background dark:bg-d-background backgroundButton">View the Docs</Button>
            </div>
          </div>
        </div>
        <div className='min-w-48 md:min-w-96 min-h-48 md:min-h-96 hidden md:block'>
          <img 
            className={`absolute object-contain rounded-lg max-w-6/12 right-[0] -z-50 h-full top-0`}
            src={"/Images/Device_Desktop__Theme_Light__Type_KV.avif"}
            alt={"Deluxe-Enter-CAB"} 
          />
        </div>
      </div>
      <div className='px-6 md:px-32 items-center w-full flex flex-col justify-start gap-10'>
        <div className='w-full'>
          <Heading className='text-transparent text-base md:text-3.3xl bg-clip-text bg-gradient-to-b from-gray-500 dark:from-white to-black dark:to-gray-400 max-w-8hr font-extrabold leading-5 md:leading-4xl py-6 tracking-tighter' >Built for modern web frameworks</Heading>
          <PField className='font-normal text-sm md:text-xl tracking-tight text-neutral-700 dark:text-neutral-200 w-full md:w-9hr'>Designed for the evolution of JavaScript and TypeScript frameworks, Vercel KV allows developers to store and retrieve any JavaScript value with a promise-based API, without worrying about serialization.</PField>
        </div>
        <div className='flex flex-col md:flex-row justify-around gap-5 md:gap-10'>
          <div className='hidden md:flex flex-row md:flex-col gap-5 min-w-24ts justify-start'>
            <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500' imageSrc='/Buttons/Frame_427318739.svg' imageAlt='Next.js' heading='Next.js' content='Fetch saved user preferences' />
            <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500' imageSrc='/Buttons/Frame_427318740.svg' imageAlt='SvelteKit' heading='SvelteKit' content='Store session data' />
            <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500' imageSrc='/Buttons/Nuxt.svg' imageAlt='Nuxt' heading='Nuxt' content='Store session data' />
          </div>
          <div className='block md:hidden max-w-fit md:max-w-none overflow-x-auto md:overflow-x-clip'>
            <div className='flex flex-row md:flex-col gap-5 justify-start'>
              <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500 min-w-24ts' imageSrc='/Buttons/Frame_427318739.svg' imageAlt='Next.js' heading='Next.js' content='Fetch saved user preferences' />
              <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500 min-w-24ts' imageSrc='/Buttons/Frame_427318740.svg' imageAlt='SvelteKit' heading='SvelteKit' content='Store session data' />
              <ButtonNav className='border border-transparent dark:border-background hover:border-gray-500 dark:hover:border-gray-500 min-w-24ts' imageSrc='/Buttons/Nuxt.svg' imageAlt='Nuxt' heading='Nuxt' content='Store session data' />
            </div>
          </div>
          <div>
            <img className='object-contain rounded-2xl' src='/Images/vip-taxi.jpg' alt='vip-taxi' />
          </div>
        </div>
      </div>
      <div className="w-full h-[336px] my-24">
        <div className='gradient-image gradient-image-light block dark:hidden'></div>
        <div className='gradient-image gradient-image-dark hidden dark:block'></div>
      </div>
      
      <div className='px-6 md:px-32 items-center w-full flex flex-col justify-start gap-10 mt-0 mb-32'>
        <div className='w-full'>
          <Heading className='text-transparent text-base md:text-3.3xl bg-clip-text bg-gradient-to-b from-gray-500 dark:from-white to-black dark:to-gray-400 max-w-8hr font-extrabold leading-5 md:leading-4xl py-6 tracking-tighter' >Get started with Redis® on Vercel</Heading>
          <PField className='font-normal text-sm md:text-xl tracking-tight text-neutral-700 dark:text-neutral-200 w-full md:w-9hr'>Deploy a template that uses Vercel KV and start reading and writing data in minutes.</PField>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:flex-row gap-5'>
          <Info2Field heading='Vercel KV Next.js Starter' content='Simple Next.js template that uses Vercel KV for Redis to track pageviews.' imageSrc='/Buttons/Frame_427318739.svg' imageAlt='Nuxt' imageDesc='Built with Next.js' />
          <Info2Field heading='Vercel KV Sveltekit Starter' content='Simple Sveltekit template that uses Vercel KV for Redis to track pageviews.' imageSrc='/Buttons/Frame_427318740.svg' imageAlt='Nuxt' imageDesc='Built with Svelte' />
          <Info2Field heading='Vercel KV Next.js Starter' content='Simple Nuxt template that uses Vercel KV for Redis to track pageviews.' imageSrc='/Buttons/Nuxt.svg' imageAlt='Nuxt' imageDesc='Built with Nuxt' />
        </div>
      </div> */}
    </main>
  )
}
