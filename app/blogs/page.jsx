// app/blogs/page.jsx (Server Component)
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase/config'; // Adjust path if needed
import BlogCard from '../components/BlogCard';

const BlogsPage = async () => {
  // Fetch blogs from Firestore
  const blogsSnapshot = await getDocs(collection(db, 'blogs'));
  const blogs = blogsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <div>
      <h2 className="text-3xl py-8 font-bold text-center">Latest Job Opportunities</h2>
      {blogs.length > 0 ? (
        <div className="blog-cards gap-4 grid grid-cols-3 p-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              coverImage={blog.coverImage || '/default-image.jpg'}
              title={blog.title || 'No Title'}
              loading={false}
              link={`/blog/${blog.id}`}
            />
          ))}
        </div>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default BlogsPage;
