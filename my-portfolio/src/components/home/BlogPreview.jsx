import { blogPosts } from "../../data/blogPosts";
import BlogCard from "../cards/BlogCard";

function BlogPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 md:px-8">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
          From my
          <br />
          blog post
        </h2>

        <button className="w-fit rounded-full bg-[#ff7a30] px-8 py-3 font-bold text-white">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}

export default BlogPreview;