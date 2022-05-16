import Link from "next/link";
import Layout from "../comps/Layout";
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}