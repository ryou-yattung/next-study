import { NextPage } from "next";
import Link from "next/link";
import { MicroCMSBlogData, BlogData } from "types/blogData";

type Props = {
  blogData: BlogData[];
};
const IndexPage: NextPage<Props> = ({ blogData }) => {
  return (
    <div>
      <h1>blogs 👋</h1>
      <ol>
        {blogData.map((blog) => (
          <li key={blog.id + blog.title}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const getStaticProps = async () => {
  const fetchBlogData = await fetch(`${process.env.MICROCMS_ENDPOINT}/blogs`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
    },
  });
  const microCMSBlogData: MicroCMSBlogData = await fetchBlogData.json();
  console.log(microCMSBlogData);

  return {
    props: {
      blogData: microCMSBlogData.contents,
    },
  };
};

export default IndexPage;
