import LocalMaterialCard from "../../components/LocalMaterials/LocalMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function LocalMaterialsPage({ localMaterials }) {
  return (
    <div>
      <Head>
        <title>Genshin | Local Materials</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {localMaterials.map((localMaterial, index) => (
              <LocalMaterialCard localMaterial={localMaterial} key={index} />
              // <a
              //   key={index}
              //   href={`https://genshin-impact.fandom.com/wiki/${localMaterial.id.replace(
              //     /(^|_)(\S)/g,
              //     (s) => s.toUpperCase()
              //   )}`}
              // >
              //   {localMaterial.id}
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
  const localMaterials = await genshinData.localMaterials();

  return {
    props: {
      localMaterials,
    },
  };
}
