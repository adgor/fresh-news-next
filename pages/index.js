import Head from "next/head";
import SwiperProv from "../components/SwiperProv";
import clientPromise from "../lib/mongodb";
import ResponsiveSlider from "../components/slider/ResponsiveSlider";
import ResponsiveSliderList from "../components/slider/ResponsiveSliderList";

export default function Home({ showbiz }) {
  console.log(showbiz);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>
      </main>

      <div class="grid grid-cols-3 gap-4">
        <div class="row-span-2 bg-red-500 ...">
          {/* <SwiperProv /> */}
          <ResponsiveSliderList>
            <ResponsiveSlider
              data={showbiz}
              href={"/category/Aksion"}
              categoryTitle={"Aksion"}
            />
          </ResponsiveSliderList>
        </div>
        <div class=" bg-gray-600 ...">2</div>
        <div class=" bg-gray-600 ...">3</div>
        <div class=" bg-gray-600 ...">4</div>
        <div class=" bg-gray-600 ...">5</div>
      </div>

      <div>
        {showbiz.map((article, i) => (
          <div key={i}>
            <h3>{article.title}</h3>
            <span>{article.category}</span>
            {article.content.map((cat, i) => (
              <p key={i}>
                <span>{cat}</span>
              </p>
            ))}
            <span> {} </span>
          </div>
        ))}
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
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
  async function asyncGetCategory(categoryName) {
    const result = await data
      .find({ category: categoryName })
      .sort({ _id: -1 })
      .limit(6)
      .toArray();
    return result;
    // console.log(result);
  }
  asyncGetCategory();

  return {
    props: {
      showbiz: JSON.parse(
        JSON.stringify(await asyncGetCategory("kuriozitete"))
      ),
    },
  };
}
