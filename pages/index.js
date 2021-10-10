import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Hero from "../components/Hero";
import { Blog } from "../components/Blog";
import { BlogTrend } from "../components/BlogTrend";

export default function Home({
  showbiz,
  mode,
  trend,
  kuriozitete,
  teknologji,
  showbizBlog,
  modeBlog,
  trendBlog,
  kurioziteteBlog,
  teknologjiBlog,
  teFundit,
}) {
  // console.log(kuriozitete);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        articles={showbiz}
        kuriozitete={kuriozitete}
        mode={mode}
        trend={trend}
        teknologji={teknologji}
      />

      <Blog data={showbizBlog} />
      <Blog data={modeBlog} />
      <BlogTrend trend={trend} teFundit={teFundit} />
      <Blog data={trendBlog} />
      <Blog data={teknologjiBlog} />
      <Blog data={kurioziteteBlog} />
    </>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const db = client.db();

  const data = await db.collection("showbiz");
  // console.log(data);

  // function to get category movies call it in the props
  async function asyncGetCategory(categoryName, limit = 1, skip = 0) {
    const result = await data
      .find({ category: categoryName })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    return result;
    // console.log(result);
  }
  asyncGetCategory();

  return {
    props: {
      showbiz: JSON.parse(
        JSON.stringify(await asyncGetCategory("showbiz", 10))
      ),
      mode: JSON.parse(JSON.stringify(await asyncGetCategory("mode", 1))),
      trend: JSON.parse(JSON.stringify(await asyncGetCategory("trend", 1))),
      teknologji: JSON.parse(
        JSON.stringify(await asyncGetCategory("teknologji", 1))
      ),
      kuriozitete: JSON.parse(
        JSON.stringify(await asyncGetCategory("kuriozitete", 1))
      ),
      showbizBlog: JSON.parse(
        JSON.stringify(await asyncGetCategory("showbiz", 3, 10))
      ),
      modeBlog: JSON.parse(
        JSON.stringify(await asyncGetCategory("mode", 3, 1))
      ),
      trendBlog: JSON.parse(
        JSON.stringify(await asyncGetCategory("trend", 3, 1))
      ),
      kurioziteteBlog: JSON.parse(
        JSON.stringify(await asyncGetCategory("kuriozitete", 3, 1))
      ),
      teknologjiBlog: JSON.parse(
        JSON.stringify(await asyncGetCategory("teknologji", 3, 1))
      ),
      teFundit: JSON.parse(
        JSON.stringify(await asyncGetCategory("kuriozitete", 3))
      ),
    },
  };
}
