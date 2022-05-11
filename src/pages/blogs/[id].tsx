import type { NextPage } from "next";
import { MicroCMSBlogData, BlogData } from "types/blogData";

type Props = {
  blogData: BlogData;
};

const Index: NextPage<Props> = ({ blogData }) => {
  return (
    <div>
      <h1>ブログタイトル：{blogData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogData.body }}>
        {/* {blogData.title} */}
      </div>
    </div>
  );
};

//使えるパスの登録
export const getStaticProps = async ({ params }) => {
  const fetchBlogData = await fetch(
    `${process.env.MICROCMS_ENDPOINT}blogs/${params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
      },
    }
  );
  const blogData: BlogData = await fetchBlogData.json();
  console.log(blogData);

  return {
    props: {
      blogData,
    },
  };
};

export const getStaticPaths = async ({ params }) => {
  const fetchBlogData = await fetch(`${process.env.MICROCMS_ENDPOINT}blogs`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
    },
  });
  const microCMSBlogData: MicroCMSBlogData = await fetchBlogData.json();

  const paths = microCMSBlogData.contents.map((blogData) => ({
    params: { id: blogData.id },
  }));

  return { paths, fallback: false };
};
export default Index;
