"use client";

import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebase/config";
import { ref, deleteObject } from "firebase/storage";
import { storage } from "../lib/firebase/config";

const AdminBlogCard = ({
  link="/admin/blogs",
  title="meow",
  image="https://media.tarkett-image.com/large/TH_25094225_25187225_001.jpg",
  loading,
  onDeleteBlog = ()=>{},
}) => {
  
  const deleteBlog = async (docId) => {
    Swal.fire({
      icon: "warning",
      text: "to delete this blog post permanently",
      title: "Are you sure?",
      confirmButtonText: "Delete",
      confirmButtonColor: "red",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(docId)
          Swal.fire({
            title: "Deleting...",
            text: "Please wait while the blog post is being deleted.",
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });

          const blogRef = doc(db, "blogs", docId);
          const docSnapshot = await getDoc(blogRef);

          if (docSnapshot.exists()) {
            const blogData = docSnapshot.data();

            // Move blog data to the trash collection
            await setDoc(doc(db, "trashBlogs", docId), blogData);

            // Delete images
            const deleteImage = async (imgUrl) => {
              if (imgUrl) {
                const imgRef = ref(storage, imgUrl);
                try {
                  await deleteObject(imgRef);
                } catch (error) {
                  console.error("Error deleting image:", error);
                }
              }
            };

            // Delete the main image and any additional images if available
            const { mainImage, additionalImages = [] } = blogData;

            await Promise.all([
              deleteImage(mainImage),
              ...additionalImages.map(imageUrl => deleteImage(imageUrl))
            ]);

            // Delete the blog document
            await deleteDoc(blogRef);
            onDeleteBlog(docId);

            Swal.fire({
              icon: "success",
              text: "Blog post has been deleted and moved to trash.",
              title: "Deleted",
            });
          } else {
            Swal.fire({
              icon: "error",
              text: "Blog post not found.",
              title: "Error",
            });
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            text: "An error occurred while deleting the blog post.",
            title: "Error",
          });
          console.error("Error deleting blog post: ", error);
        }
      }
    });
  };

  return (
    <div className="bg-gray-100 border border-blue-200 rounded-lg shadow hover:scale-105 transition-all">
      <img
        src={image}
        alt={title}
        className="aspect-square w-full skeleton-loading h-64 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4">
        <h3
          className={`text-gray-700 text-left ${
            loading && "skeleton-loading"
          }`}
        >
          {title}
        </h3>
        <div className="flex justify-end gap-4 mt-4">
          <Link
            href={`/blog/${link}`}
            className="text-2xl transition text-gray-700"
          >
            <FaRegEye />
          </Link>

          <Link
            href={`/admin/blogs/${link}/edit`}
            className="text-2xl transition"
          >
            <CiEdit />
          </Link>

          <button
            className="text-2xl text-red-600 hover:text-red-800 transition"
            onClick={() => deleteBlog(link)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCard;
