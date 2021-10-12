import WeaponCard from "../../components/Weapons/WeaponCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function WeaponsPage({ weapons }) {
  return (
    <div>
      <Head>
        <title>Genshin | Weapons</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {weapons.map((weapon, index) => (
              <WeaponCard weapon={weapon} key={index} />
              //   <a
              //     key={index}
              //     href={`https://genshin-impact.fandom.com/wiki/${weapon.id.replace(
              //       /(^|_)(\S)/g,
              //       (s) => s.toUpperCase()
              //     )}`}
              //   >
              //     {weapon.id}
              //   </a>
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
  const weapons = await genshinData.weapons();

  return {
    props: {
      weapons,
    },
  };
}
