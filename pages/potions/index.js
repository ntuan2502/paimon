import PotionsCard from "../../components/Potions/PotionCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function PotionsPage({ potions }) {
  return (
    <div>
      <Head>
        <title>Genshin | Potions</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {potions.map((potion, index) => (
              <PotionsCard potion={potion} key={index} />
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
  const potions = await genshinData.potions();

  return {
    props: {
      potions,
    },
  };
}
