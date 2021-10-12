import ElementalStoneMaterialCard from "../../components/ElementalStoneMaterials/ElementalStoneMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function ElementalStoneMaterialsPage({ elementalStoneMaterials }) {
  return (
    <div>
      <Head>
        <title>Genshin | Elemental Stone Materials</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {elementalStoneMaterials.map((elementalStoneMaterial, index) => (
              <ElementalStoneMaterialCard elementalStoneMaterial={elementalStoneMaterial} key={index} />
              // <a
              //   href={`https://genshin-impact.fandom.com/wiki/${elementalStoneMaterial.id.replace(
              //     /(^|_)(\S)/g,
              //     (s) => s.toUpperCase()
              //   )}`}
              // >
              //   {elementalStoneMaterial.id}
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
  const elementalStoneMaterials = await genshinData.elementalStoneMaterials();

  return {
    props: {
      elementalStoneMaterials,
    },
  };
}
