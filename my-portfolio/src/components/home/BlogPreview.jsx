import { Link } from "react-router-dom";
import { homeData } from "../../data/homeData";
import BlogCard from "../cards/BlogCard";

function BlogPreview() {
  const { blogPreview } = homeData;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 md:px-8">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
          {blogPreview.title.main}
          <br />
          {blogPreview.title.sub}
        </h2>

        <Link
          to={blogPreview.button.path}
          className="w-fit rounded-full bg-[#ff7a30] px-8 py-3 font-bold text-white"
        >
          {blogPreview.button.text}
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogPreview.posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}

export default BlogPreview;