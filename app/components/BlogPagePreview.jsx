import Image from "next/image";
import Link from "next/link";

const BlogPagePreview = ({ blogData }) => {
  //     const coverImage = URL.revokeObjectURL(blogData.coverImage.preview);

  // const hasUploadedFiles = uploadedFiles.length > 0;
  // const hasDisplayImg = Boolean(displayImg);

  return (
    <main className="pb-16 lg:pb-24 bg-white antialiased">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue md:p-0 p-6">
        <header className="mb-4 lg:mb-6 not-format flex flex-col gap-6">
          <Image
            src={blogData.coverImage.preview}
            width={1080}
            height={720}
            className="skeleton-loading w-screen aspect-video object-cover "
            alt={blogData.title} // Added alt text for accessibility
          />
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
            {blogData.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></section>
      </article>
    </main>
  );
};

export default BlogPagePreview;
