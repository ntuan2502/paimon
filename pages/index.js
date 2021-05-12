import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Genshin Impact</title>
        <meta name="description" content="Paimon Impact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-w-full min-h-screen">
        <img src="/img/background/index.jpg" alt="" />
      </div>
    </div>
  );
}
