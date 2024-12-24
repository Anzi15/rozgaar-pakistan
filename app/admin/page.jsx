import React from "react";
import Link from "next/link";

const AdminPage = () => {
  return (
    <main className="md:w-[80vw]  h-full  md:p-12 p-3 py-8 ">
      <section className="flex w-full justify-between flex-wrap">

      <div className="flex flex-col md:text-left w-full md:w-fit h-[80%]  justify-center">
        <span className="text-[4rem] ">Wellcome</span>
        <p className="text-3xl ">to Admin Panel</p>
      </div>

       <div className="w-full md:w-[45%] ">
        <img src={"https://i.ibb.co/pf7CzKh/mangement-B2-Qkgw30.png"} alt="" />
       </div>
      </section>

      <section className="my-16 md:max-w-[80vw] overflow-hidden   flex flex-wrap gap-4 md:justify-between justify-center" >
        <p className="w-full text-left">
          Let's get Started with
        </p>
        
        <Link href={"/admin/blogs"} className="md:max-w-[45%]  bg-blue-100 rounded my-6 p-6 hover:scale-[1.02] transition-all flex flex-col items-center justify-center md:h-fit w-full">
          <h2 className="text-left text-3xl text-blue-gray-800 font-bold">
            Managing Blogs  
          </h2>

          <img className="w-full" src={"https://i.ibb.co/7tCv92S/inbox-DVz9-Dy-Wb.png"} alt="" />
        </Link>

        <Link href={"/admin/inbox"} className="md:max-w-[45%]  bg-blue-100 rounded my-6 p-6 hover:scale-[1.02] transition-all flex flex-col items-center justify-center md:h-fit w-full">
          <h2 className="text-left text-3xl text-blue-gray-800 font-bold">
            Getting Volunteers  
          </h2>

          <img className="w-full" src={"https://i.ibb.co/442w5hx/Businessman-managing-CPq-Jq-Sn6.png"} alt="" />
        </Link>
        
      </section>
    </main>
  );
};

export default AdminPage;