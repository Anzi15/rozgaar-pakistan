"use client"; // Indicate that this is a client component

import { db } from "../../../lib/firebase/config";
import Preview from "../../../components/BlogPagePreview.jsx";
import { useState, useEffect, useRef } from "react";
import ImageDropZone from "../../../components/ImageDropZone.jsx";
import TiptapEditor from "../../../components/TiptapEditor.jsx";
import "rsuite/TagInput/styles/index.css";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { TagsInput } from "react-tag-input-component";
import InputField from "../../../components/InputField";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation"; // Use Next.js router
import uploadImage from "../../../helper/imageUploader";

const AdminNewBlogPage = () => {
  const router = useRouter(); // Use Next.js router
  if (!router) return;
  const placeholderImg =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  const [isTitleAlreadyExisting, setIsTitleAlreadyExisting] = useState(false);
  const [isSlugAlreadyExisting, setIsSlugAlreadyExisting] = useState(false); // New state for slug existence
  const [coverImage, setCoverImage] = useState(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState(""); // New state for slug
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState(
    `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui metus, aliquam a dapibus ut, faucibus et tortor. Quisque at vulputate ante, sed interdum tortor. Aliquam erat volutpat. Praesent vel tellus nisi. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce consequat vulputate maximus. Sed rhoncus in tellus ut laoreet. Nullam blandit in nisl id tincidunt. Integer vitae euismod tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas mollis id mi vel condimentum. Maecenas non leo non lectus egestas vehicula sed eget ipsum. Etiam ultrices tempus nisl, non fringilla enim tincidunt a. Sed vitae auctor ex.</p>`
  );
  const [selectedTags, setSelectedTags] = useState([]);
  const FormRef = useRef(null);
  const [publishing, setPublishing] = useState(false);
  const [publishingMsg, setPublishingMsg] = useState("Publishing..");

  // Function to format slug
  const formatSlug = (input) => {
    return input
      .toLowerCase() // Convert to lowercase
      .trim() // Trim whitespace from both ends
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ""); // Remove invalid characters (only allow lowercase letters, numbers, and hyphens)
  };

  useEffect(() => {
    const checkForExistence = async () => {
      if (slug.length) {
        try {
          const docRef = doc(db, "blogs", slug);
          const docSnap = await getDoc(docRef);

          setIsSlugAlreadyExisting(docSnap.exists());
        } catch (error) {
          console.error("Error checking document:", error);
        }
      } else {
        setIsSlugAlreadyExisting(false);
      }
    };
    checkForExistence();
  }, [slug]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const uploadResult = await uploadImage(file);
      setCoverImage(uploadResult); // Save uploaded image info
    }
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (!coverImage) {
      toast.error("Upload Cover Image!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Early return if images are not uploaded
    }
    if (isSlugAlreadyExisting) {
      toast.error("Slug already exists! Please choose a different one.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Early return if slug already exists
    }

    setPublishing(true);
    const uploadedCoverImage = await uploadImage(coverImage.preview);

    const blogData = {
      coverImage: uploadedCoverImage.originalUrl,
      coverImageThumbnails: uploadedCoverImage.thumbnails,
      title,
      content,
      createdAt: Timestamp.now(),
      tags: selectedTags,
    };

    console.log(blogData);
    try {
      setPublishingMsg("Connecting to database..");
      const docRef = doc(db, "blogs", slug); // Use slug as document ID
      await setDoc(docRef, blogData);
      setPublishingMsg("All Set !!");
      Swal.fire({
        text: "Blog Added",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "View Blogs",
        cancelButtonText: "Add another Blog",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/admin/blogs"); // Use Next.js router for navigation
        } else {
          window.location.reload();
        }
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      {publishing && (
        <div className="w-full h-screen fixed z-30 inset-0 bg-white flex items-center justify-center flex-col">
          <h1 className="text-black z-50 text-2xl">Publishing Blog</h1>
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/028/712/381/original/tim-gilardi-bunny-loading-animation3.gif?1595286299"
            className="w-1/2 md:w-[15rem] mx-auto my-5"
            alt="Loading.."
          />
          <p>{publishingMsg}</p>
        </div>
      )}

      <main className="py-16 px-4 md:w-[80vw] w-screen p-4">
        <div className="w-full flex flex-col justify-center items-center mb-16">
          <h1 className="text-4xl text-left text-gray-800 ">Add a blog </h1>
          <h3 className="text-xl text-left text-gray-800 ">
            Let's create a masterpiece, together{" "}
          </h3>
        </div>

        <section className="md:flex ">
          <form
            className="md:w-1/2 w-full md:px-10"
            onSubmit={handleFormSubmission}
            ref={FormRef}
          >
            <h4 className="py-8 text-left">Add few details to get started</h4>

            <div className="flex flex-col gap-4 ">
              <ImageDropZone storeFileToUpload={setCoverImage} />

              <InputField
                inputName={"Title"}
                inputType="text"
                valueReturner={setTitle}
                requiredInput={true}
                inputValue={title}
                errorMsg={
                  isTitleAlreadyExisting &&
                  "Blog Already exists, kindly change the title"
                }
              />

              {/* New Input for Slug */}
              <InputField
                inputName={"Slug (Unique)"}
                inputType="text"
                valueReturner={(value) => setSlug(formatSlug(value))} // Format the slug on input
                requiredInput={true}
                inputValue={slug}
                errorMsg={
                  isSlugAlreadyExisting &&
                  "Slug already exists! Please choose a different one."
                }
              />

              <div className="max-w-full">
                <TiptapEditor updateHtml={setContent} />
              </div>
            </div>

            <div>
              <TagsInput
                value={selectedTags}
                onChange={(tags) =>
                  setSelectedTags(tags.map((tag) => tag.toLowerCase()))
                }
                name="tags"
                placeHolder="Enter Tags"
                separators={["Enter", ",", " "]}
              />
              <em className="text-left">
                Add tags to show them in relevant collections{" "}
              </em>
            </div>

            <div className="my-10 gap-4 flex ">
              <button
                type="submit"
                className="bg-red-600 rounded text-white p-4 w-full"
              >
                Add Blog
              </button>
            </div>
          </form>

          <div className="md:w-1/2 w-full flex flex-col px-5">
            <h4 className="py-8 text-left">Preview</h4>
            <Preview
              blogData={{
                title: title || "Blog Title",
                coverImage: coverImage
                  ? coverImage
                  : { preview: placeholderImg },
                content: content,
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminNewBlogPage;
