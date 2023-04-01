import React, { Fragment } from "react";

import Link from "next/link";
import { useAppSelector } from "@/Redux/store";
import { IInitialState } from "@/Redux/AllType";
import Description from "../Description";
import RelatedPost from "../RelatedPost";
import { useRouter } from "next/router";

const PostDetails = () => {
  const allBlog: any = useAppSelector((state) => state.blog);
  const router = useRouter();
  const { id } = router.query;
  const idAsNumber = Number(id);
  const blog = allBlog.find((a: IInitialState) => a.id === idAsNumber);
  const relatedBlog: any = [];

  for (let i = 0; i < blog.tags.length; i++) {
    allBlog.map((a: IInitialState) => {
      if (a.tags.includes(blog.tags[i]) && a.id !== blog.id)
        relatedBlog.push(a);
    });
  }
  console.log(relatedBlog);

  return (
    <Fragment>
      <Link href="/">
        <div className="container mt-8">
          <p className="inline-block text-gray-600 home-btn" id="lws-goHome">
            <i className="mr-2 fa-solid fa-house"></i>Go Home
          </p>
        </div>
      </Link>
      <section className="post-page-container">
        <Description blog={blog} />

        <aside>
          <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
            Related Posts
          </h4>
          <div className="space-y-4 related-post-container">
            {relatedBlog.map((related: IInitialState) => {
              return <RelatedPost related={related} />;
            })}
          </div>
        </aside>
      </section>
    </Fragment>
  );
};

export default PostDetails;
