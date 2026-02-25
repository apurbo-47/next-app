import Image from "next/image";
import React from "react";
import icon from "../../public/images/icon.png";
import hero from "../../public/images/cf16f5201ee9e1b1490c2bf2a6b5747169ef9c4d.png";
import Article from "../components/article";
import Sidebar from "../components/sidebar";
import BlogNavigation from "../components/BlogNavigation";

const Blogs = () => {
  return (
    <main className="mt-10 mx-12">
      <div className="flex gap-5 mb-8">
        <p className="text-xl">
          Publish : <span className="font-bold">Nov 22, 2025</span>
        </p>
        <Image src={icon} alt="icon"></Image>
      </div>
      <div className="flex gap-2 mb-8">
        <button className="bg-[#E6E6E699]/60 px-5 py-2 rounded-lg">Law</button>
        <button className="bg-[#E6E6E699]/60 px-5 py-2 rounded-lg">
          Legal
        </button>
        <button className="bg-[#E6E6E699]/60 px-5 py-2 rounded-lg">
          Family Law
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-12">
          Know Your Legal Rights: What Every <br></br>
          Citizen Should Understand
        </h1>
        <Image
          className="w-7xl h-125 mb-12 rounded-4xl"
          src={hero}
          alt="hero"
        ></Image>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left Content */}
        <div className="lg:col-span-8">
          <Article />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
      <div className=" mt-20 flex items-center justify-center bg-[#E6E6E6]  mb-20">
        <BlogNavigation />
      </div>
    </main>
  );
};

export default Blogs;
