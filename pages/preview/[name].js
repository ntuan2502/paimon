import Head from "next/head";
export default function PreviewPage({ url, name }) {
  return (
    <div>
      <Head>
        <title>Preview {name}</title>
      </Head>
      <div className="min-w-full flex justify-center">
        <iframe
          src={url}
          frameBorder="0"
          width="90%"
          height="720"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const name = ctx.params.name;
  var url = "";
  if (name == "1.2")
    url = "https://webstatic-sea.mihoyo.com/ys/event/e20201216new/index.html";
  else if (name == "1.3")
    url =
      "https://webstatic-sea.mihoyo.com/ys/event/e20210128warmup/index.html";
  else if (name == "1.4")
    url =
      "https://webstatic-sea.mihoyo.com/ys/event/e20210309prediction/index.html";
  else if (name == "1.5")
    url =
      "https://webstatic-sea.mihoyo.com/ys/event/e20210422newver/index.html";
  else if (name == "1.6")
    url =
      "https://webstatic-sea.mihoyo.com/ys/event/e20210603prepage/index.html";
  else if (name == "2.0")
    url =
      "https://webstatic-sea.mihoyo.com/ys/event/e20210715-prepage/index.html";
  else if (name == "2.1")
    url =
      "https://webstatic-sea.mihoyo.com/ys/event/e20210820-preview/index.html";
  else if (name == "2.2")
    url =
      "https://webstatic-sea.mihoyo.com/ys/event/e20211004-preview/index.html";
  else url = null;

  return {
    props: {
      url,
      name,
    },
  };
}
