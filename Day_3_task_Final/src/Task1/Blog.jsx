import React, { useState } from "react";

const posts = [
  { id: 1, title: "Post 1", authorId: 101 },
  { id: 2, title: "Post 2", authorId: 102 },
];

const authors = [
  { id: 101, name: "Raza" },
  { id: 102, name: "Sara" },
];

const Blog = () => {
  const [post, setPost] = useState(posts);
  const [author, setAuthor] = useState(authors);

  return (
    <div className="  ">
      <div className="bg-white shadow-xl rounded-2xl p-6 m-2 border border-green-500 w-[400px]">
        
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Blog Posts
        </h1>

        <div className="space-y-3">
          {post.map((item) => {
            const auther = author.find(
              (a) => a.id === item.authorId
            );

            return (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <span className="font-medium text-gray-700">
                  {item.title}
                </span>
                <span className="text-blue-600 font-semibold">
                  {auther.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Current Author Preview */}
        <div className="mt-4 text-center text-gray-600">
          Current First Author:{" "}
          <span className="font-bold text-black">
            {author[0].name}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => {
            setAuthor((prev) =>
              prev.map((a) =>
                a.id === 101
                  ? { ...a, name: "Ali" }
                  : a
              )
            );
          }}
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Change Author Name
        </button>
      </div>
    </div>
  );
};

export default Blog;