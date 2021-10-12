import { useRouter } from "next/router";
import Head from "next/head";
import WeaponCard from "../../components/Weapons/WeaponCard";
import WeaponAscension from "../../components/Weapons/WeaponAscension";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function WeaponPage({ weapon, basePath }) {
  return (
    <div>
      <Head>
        <title>Genshin | {weapon.name}</title>
        <meta itemProp="name" content={weapon.name} />
        <meta itemProp="description" content={weapon.description} />
        <meta
          itemProp="image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />

        <meta itemProp="name" content={weapon.name} />
        <meta itemProp="description" content={weapon.description} />
        <meta
          itemProp="image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />

        <meta property="og:url" content="https://paimon.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={weapon.name} />
        <meta property="og:description" content={weapon.description} />
        <meta
          property="og:image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={weapon.name} />
        <meta name="twitter:description" content={weapon.description} />
        <meta
          name="twitter:image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />
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

export async function getServerSideProps(ctx) {
  const { locale, params } = ctx;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const weapons = await genshinData.weapons();
  const weapon = weapons.find((c) => c.id === params.name);

  const basePath =
    "https://raw.githubusercontent.com/ntuan2502/paimon/main/public";

  return {
    props: {
      weapon,
      basePath,
    },
  };
}
