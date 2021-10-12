import FishCard from "../../components/Fish/FishCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function FishPage({ fish }) {
  return (
    <div>
      <Head>
        <title>Genshin | Fish</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {fish.map((fish, index) => (
              <FishCard
                fish={fish}
                key={index}
              />
              // <a target="_blank"
              //   key={index}
              //   href={`https://genshin-impact.fandom.com/wiki/${fish.id.replace(
              //     /(^|_)(\S)/g,
              //     (s) => s.toUpperCase()
              //   ).replace("_Of_", "_of_").replace("_A_", "_a_").replace("_The_", "_the_")}`}
              // >
              //   {fish.id}
              // </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const fish = await genshinData.fish();

  return {
    props: {
      fish,
    },
  };
}
