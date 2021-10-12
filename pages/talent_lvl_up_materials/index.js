import TalentLvlUpMaterialCard from "../../components/TalentLvlUpMaterials/TalentLvlUpMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function TalentLvlUpMaterialsPage({ talentLvlUpMaterials }) {
  return (
    <div>
      <Head>
        <title>Genshin | Talent Lvl Up Materials</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {talentLvlUpMaterials.map((talentLvlUpMaterial, index) => (
              <TalentLvlUpMaterialCard talentLvlUpMaterial={talentLvlUpMaterial} key={index} />
              // <a target="_blank"
              //   key={index}
              //   href={`https://genshin-impact.fandom.com/wiki/${talentLvlUpMaterial.id.replace(
              //     /(^|_)(\S)/g,
              //     (s) => s.toUpperCase()
              //   )}`}
              // >
              //   {talentLvlUpMaterial.id}
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
  const talentLvlUpMaterials = await genshinData.talentLvlUpMaterials();

  return {
    props: {
      talentLvlUpMaterials,
    },
  };
}
