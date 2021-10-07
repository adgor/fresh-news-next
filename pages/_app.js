import "tailwindcss/tailwind.css";

import "../components/style.css";
import { Layout } from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
