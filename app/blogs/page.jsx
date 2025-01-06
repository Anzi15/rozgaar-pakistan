import React from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../lib/firebase/config'
import BlogCard from '../components/BlogCard'

const page = async () => {
    const blogsDocs = await getDocs(collection(db,"blogs"));
    let blogs = [];
    blogsDocs.forEach(blogDoc => {
        blogs.push({...blogDoc.data(), id: blogDoc.id})
    });
  return (
    <div>    <div>
    <h2 className='text-3xl py-8 font-bold text-center'>Latest Job opportunities</h2>
    {blogs.length > 0 ? (
      <div className="blog-cards grid grid-cols-3 p-8">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            coverImage={blog.coverImage || '/default-image.jpg'} // Fallback for missing images
            title={blog.title || 'No Title'}
            loading={false}
            link={`/blog/${blog.id}`} // Adjust based on your routing setup
          />
        ))}
      </div>
    ) : (
      <p>No blogs available.</p>
    )}
  </div></div>
  )
}

export default page