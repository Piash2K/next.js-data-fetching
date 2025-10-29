import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};
export async function generateMetadata({ params}) {
  const id = (await params).id
 
  // fetch post information
  const singlePost = await getSinglePost(id)
  return {
    title: singlePost.title,
    description: singlePost.body,
  }
}

export default async function singlePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return <div >
  <h1 className="text-2xl font-bold">{singlePost.title}</h1>
  <h1>{singlePost.body}</h1>
  </div>;
}
