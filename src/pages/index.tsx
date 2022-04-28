import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => (
  <div>
    <Link href="about">about{/* <a href="/">about</a> */}</Link>
  </div>
);

export default IndexPage;
