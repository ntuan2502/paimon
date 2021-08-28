import { useRouter } from "next/router";
import Head from "next/head";
import WeaponCard from "../../components/Weapons/WeaponCard";
import WeaponAscension from "../../components/Weapons/WeaponAscension";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function WeaponPage({ weapon }) {
  return (
    <div>
      <Head>
        <title>Genshin | {weapon.name}</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <WeaponCard weapon={weapon} />
        </div>
        <div className="bg-white flex flex-row flex-wrap p-5 ">
          <div className="mx-auto w-full sm:w-5/6">
            <WeaponAscension ascensions={weapon.ascensions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths({ locales }) {
  const genshinData = new GenshinData({ language: "vietnamese" });
  const weapons = await genshinData.weapons();

  const paths = [];

  for (const locale of locales) {
    weapons.forEach((weapon) => {
      paths.push({
        params: {
          name: weapon.id,
        },
        locale,
      });
    });
  }

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const locale = context.locale;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const weapons = await genshinData.weapons();
  const weapon = weapons.find((c) => c.id === context.params.name);

  return {
    props: {
      weapon,
    },
  };
}
