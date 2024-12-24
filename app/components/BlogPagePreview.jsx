import Image from "next/image";
import Link from "next/link";

const BlogPagePreview = ({ blogData }) => {
  //     const coverImage = URL.revokeObjectURL(blogData.coverImage.preview);

  // const hasUploadedFiles = uploadedFiles.length > 0;
  // const hasDisplayImg = Boolean(displayImg);

  console.log(blogData)
  return (
    <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:p-0 p-6">
        <header className="mb-4 lg:mb-6 not-format flex flex-col gap-6">
          <Image
            src={blogData.coverImage.preview}
            width={1080}
            height={720}
            className="skeleton-loading w-screen aspect-video object-cover "
            alt={blogData.title} // Added alt text for accessibility
          />
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            {blogData.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></section>
        <section className="aspect-video rounded-lg w-full bg-blue-500 flex md:flex-row flex-col-reverse">
          <Image
            src={"https://i.ibb.co/VV2mxG4/humans.png"}
            width={480}
            height={480}
            className="md:h-full md:w-fit w-full aspect-square md:block hidden"
            alt="Human illustration" // Added alt text for accessibility
          />
          <div className="md:w-1/2 w-full p-4 flex flex-col justify-center items-start">
            <h3 className="text-white font-bold text-3xl">
              We can't help everyone, but everyone can help someone.
            </h3>
            <Link
              href={"/donate"}
              className="bg-white rounded-full px-3 py-2 text-blue-500 font-bold no-underline"
            >
              Donate Now
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default BlogPagePreview;
