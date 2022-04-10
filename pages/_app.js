import Link from "next/link";
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />;
      </main>
    </>
  );
}