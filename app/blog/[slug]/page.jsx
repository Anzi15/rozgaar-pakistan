import { db } from "../../lib/firebase/config";
import { doc, getDoc, collection, getDocs, limit } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const slug = params.slug;

  // Fetch the current blog
  const blogDoc = await getDoc(doc(db, "blogs", slug));
  const blogData = blogDoc.data();

  // Fetch more than 3 blogs (to filter later)
  const blogsSnapshot = await getDocs(collection(db, "blogs"));
  
  // Filter out the current blog and get only 3 related blogs
  const relatedBlogs = blogsSnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((blog) => blog.slug !== slug) // Remove the current blog
    .slice(0, 3); // Get the first 3 blogs

  return (
    <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <header className="mb-4 lg:mb-6 not-format flex flex-col gap-6">
        <Image
          src={blogData.coverImage}
          width={1080}
          height={720}
          className="skeleton-loading w-screen aspect-video object-cover"
          alt={blogData.title} 
        />
      </header>
      <article className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:p-0 p-6 space">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          {blogData.title}
        </h1>
        <div className="py-10">
          Apply now at:{" "}
          <a
            href={blogData?.applyLink || ""}
            target="_blank"
            className="bg-black text-white rounded-full px-7 py-2"
          >
            Apply now
          </a>
        </div>

        <section
          className="leading-8 text-xl text-gray-800"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></section>
      </article>

      {/* Related Blogs Section */}
      <section className="mx-auto w-full max-w-5xl mt-12">
        <h2 className="mb-6 text-2xl font-bold">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedBlogs.map((relatedBlog) => (
            <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`} className="group">
              <Image
                src={relatedBlog.coverImage || "/default-image.jpg"}
                width={540}
                height={300}
                className="rounded-md w-full aspect-video object-cover group-hover:opacity-90"
                alt={relatedBlog.title || "Related Blog"}
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                {relatedBlog.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
