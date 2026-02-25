import React from "react";
import Image from "next/image";
import icon2 from "../../public/images/739a013903cfeeab475b5db31c59637d2e9544db.png";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark,
  MessageCircle,
  X,
} from "lucide-react";

function BlogNavigation() {
  return (
    <div className="w-full border border-[#E6E6E6] rounded-3xl p-6 ">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Author */}
        <div className="flex items-center gap-3 mb-10">
          <Image
            src={icon2} // put image in public folder
            alt="Author"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h4 className="text-sm font-semibold">Brooklyn Simmons</h4>
            <p className="text-xs text-gray-500">Author</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 text-gray-500 mb-10">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <MessageCircle size={16} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bookmark size={16} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Share2 size={16} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <X size={16} />
          </button>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="flex justify-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-gray-100">
          <ChevronLeft size={16} />
          Previous
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-sm hover:opacity-90">
          Next Blog
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default BlogNavigation;
