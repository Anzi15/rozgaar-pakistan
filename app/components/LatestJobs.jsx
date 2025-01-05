"use client"
import React, { useEffect, useState } from 'react';
import { getDocs, query, collection, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase/config';
import BlogCard from './BlogCard';

const LatestJobs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, 'blogs'); // Adjust 'blogs' to your Firestore collection name
        const blogsQuery = query(blogsRef, orderBy('createdAt', 'desc'), limit(5)); // Fetch the 5 most recent blogs
        const querySnapshot = await getDocs(blogsQuery);

        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return (
  <>
    <h2 className='text-3xl py-8 font-bold text-center'>Latest Blogs</h2>  
  <div className='blog-cards grid grid-cols-3 p-8 gap-3'>

    <BlogCard loading={true}/>
    <BlogCard loading={true}/>
    <BlogCard loading={true}/>
  </div>
  </>
  
);

  return (
    <div>
      <h2 className='text-3xl py-8 font-bold text-center'>Latest Blogs</h2>
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
    </div>
  );
};

export default LatestJobs;
