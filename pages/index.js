import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Hero from "../components/Hero";
import { Blog } from "../components/Blog";

export default function Home({
  showbiz,
  kuriozitete,
  mode,
  trend,
  showbizBlog,
  modeBlog,
  trendBlog,
  kurioziteteBlog,
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
      />

      <p>showbizBlog</p>
      <Blog data={showbizBlog} />
      <p>modeBlog</p>
      <Blog data={modeBlog} />
      <p>trendBlog</p>
      <Blog data={trendBlog} />
      <p>kurioziteteBlog</p>
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
    },
  };
}
