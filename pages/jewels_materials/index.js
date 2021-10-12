import JewelsMaterialCard from "../../components/JewelsMaterials/JewelsMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function JewelsMaterialsPage({ jewelsMaterials }) {
  return (
    <div>
      <Head>
        <title>Genshin | Jewels Materials</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {jewelsMaterials.map((jewelsMaterial, index) => (
              <JewelsMaterialCard jewelsMaterial={jewelsMaterial} key={index} />
              // <a
              //   key={index}
              //   href={`https://genshin-impact.fandom.com/wiki/${jewelsMaterial.id.replace(
              //     /(^|_)(\S)/g,
              //     (s) => s.toUpperCase()
              //   )}`}
              // >
              //   {jewelsMaterial.id}
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
  const jewelsMaterials = await genshinData.jewelsMaterials();

  return {
    props: {
      jewelsMaterials,
    },
  };
}
