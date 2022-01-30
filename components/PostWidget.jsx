import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import defaultPic from '../public/skam-image.jpg';
import { getRecentPosts, getSimilarPosts } from "../requests";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug, categories]);

  return (
    <div className="bg-white bg-opacity-70 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-pink-600 pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-14 h-14 flex-none relative rounded-full">
            <Image
              src={post.image ? post.image.url : defaultPic}
              alt={post.title}
              unoptimized
              layout="fill"
              className="object-top absolute h-full w-full object-cover shadow-lg rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs ">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={index} passHref>
              <span className=" cursor-pointer text-md transition duration-300 hover:text-pink-600">
                {post.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
