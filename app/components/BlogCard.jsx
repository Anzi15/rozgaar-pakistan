import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({coverImage, title="meow is back from 2023", loading=false, link="/"}) => {
  return (
    <Link className='w-full bg-white flex flex-col rounded-xl overflow-hidden' href={`${loading ? "#" : link}`}>
        <Image  src={loading ? "https://i.ibb.co/fpV7gxF/light-gray-color-solid-background-1920x1080.png" :coverImage} width={480} height={480} className='w-full aspect-video object-cover hover:scale-105 transition-all skeleton-loading' />
        <div className='py-4'>
            <h3 className={`text-xl font-bold ${loading && "skeleton-loading"}`}  >{title}</h3>
        </div>
    </Link>
  )
}

export default BlogCard
