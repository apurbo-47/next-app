import React, { Suspense } from "react";
import getPost from "../../../lib/getPost";
import getPostComments from "../../../lib/getPostComment";
import Comments from "../../components/comments";
import getAllPosts from "../../../lib/getAllPost";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

  return (
    <div className="mt-10">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-4">{post.body}</p>
      <hr></hr>
      <Suspense fallback="<h1>Loading Comments ...</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
