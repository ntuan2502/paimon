import CommonMaterialCard from "../../components/CommonMaterials/CommonMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function CommonMaterialsPage({ commonMaterials }) {
  return (
    <div>
      <Head>
        <title>Genshin | Common Materials</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {commonMaterials.map((commonMaterial, index) => (
              <CommonMaterialCard commonMaterial={commonMaterial} key={index} />
              // <a
              //   href={`https://genshin-impact.fandom.com/wiki/${commonMaterial.id.replace(
              //     /(^|_)(\S)/g,
              //     (s) => s.toUpperCase()
              //   )}`}
              // >
              //   {commonMaterial.id}
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
  const commonMaterials = await genshinData.commonMaterials();

  return {
    props: {
      commonMaterials,
    },
  };
}
