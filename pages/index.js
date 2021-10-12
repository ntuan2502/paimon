import Head from "next/head";
export default function Home({ locale }) {
  if (locale == "chs" || locale == "cht") locale = "zh-tw";
  return (
    <div>
      <Head>
        <title>Genshin Impact</title>
      </Head>
      <div className="min-w-full flex justify-center">
        <iframe
          src={`https://webstatic-sea.mihoyo.com/ys/event/e20210601blue_post/index.html?gamewebview=1&page_sn=c473a7d281024854&mode=fullscreen&lang=${locale}#/update`}
          frameBorder="0"
          width="90%"
          height="720"
          allowFullScreen
        ></iframe>
      </div>
      <img src="/img/background/2.1.jpg" alt="" />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;

  return {
    props: {
      locale,
    },
  };
}
