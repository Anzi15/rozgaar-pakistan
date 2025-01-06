import { db } from "../../lib/firebase/config";
import { doc, getDoc, collection, query, where, limit, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const slug = params.slug;

  // Fetch the current blog
  const blogDoc = await getDoc(doc(db, "blogs", slug));
  const blogData = blogDoc.data();

  // Fetch two related blogs whose slugs are not equal to the current blog's slug
  const relatedBlogsQuery = query(
    collection(db, "blogs"),
    where("slug", "!=", slug),
    limit(2)
  );
  const relatedBlogsSnapshot = await getDocs(relatedBlogsQuery);

  const relatedBlogs = relatedBlogsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <header className="mb-4 lg:mb-6 not-format flex flex-col gap-6">
        <Image
          src={blogData.coverImage}
          width={1080}
          height={720}
          className="skeleton-loading w-screen aspect-video object-cover"
          alt={blogData.title} // Added alt text for accessibility
        />
      </header>
      <article className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:p-0 p-6 space">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          {blogData.title}
        </h1>
        <div className="py-10">
          Apply now at:{" "}
          <a href={blogData?.applyLink || ""}   target="_blank" className="bg-black text-white rounded-full px-7 py-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedBlogs.map((relatedBlog) => (
            <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`}>
              <a className="group">
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
              </a>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
