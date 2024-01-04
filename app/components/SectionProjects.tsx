import React from 'react'
import Image from 'next/image'
import CardProject from './CardProject'

export default function SectionProjects() {
  return (
    <main className=''>
      <section>
        <h1>Here are a few of my favorite projects.</h1>
        <span></span>
      </section>
      <section className='grid grid-cols-3 gap-4'>
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </main>
  )
}
