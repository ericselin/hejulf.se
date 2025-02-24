import Head from "next/head";
import ContactUs from "../components/ContactUs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hej Ulf!</title>
        <meta
          name="description"
          content="Har du fått ett SMS från Ulf Kristersson?"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/ulf-mozaic.jpg" />
        <meta property="og:video" content="/hejulf.mp4" />
      </Head>

      <main className="">
        <ContactUs />
      </main>
    </div>
  );
}
