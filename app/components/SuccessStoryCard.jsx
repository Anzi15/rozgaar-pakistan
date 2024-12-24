import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const SuccessStoryCard = ({
  imgSrc = "/docs/images/blog/image-1.jpg",
  title = "Noteworthy technology acquisitions 2021",
  description = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  link = "#",
  linkText = "Read more",
}) => {
  return (
    <div className="max-w-screen mx-4 overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={link}>
        <Image
          className="rounded-t-lg"
          src={imgSrc}
          alt="SuccessStoryCard Image"
          width={500}
          height={300}
        />
      </Link>
      <div className="p-5">
        <Link href={link || "/"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "untitled"}
          </h5>
        </Link>
        <p
          dangerouslySetInnerHTML={{
            __html: description || "<p>no description</p>",
          }}
          className="mb-3 font-normal text-gray-700 dark:text-gray-400"
        ></p>
        <Link href={link}>
          <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {linkText}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </p>
        </Link>
      </div>
    </div>
  );
};

SuccessStoryCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default SuccessStoryCard;
