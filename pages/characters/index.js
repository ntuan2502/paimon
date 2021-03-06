import { useRouter } from "next/router";
import CharacterCard from "../../components/Characters/CharacterCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function CharactersPage({ characters }) {
  return (
    <div>
      <Head>
        <title>Genshin | Characters</title>
      </Head>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {/* <CharacterCard id="yun_jin" name="Yun Jin" rarity="4" disabled={true} /> */}
          <CharacterCard id="yae_miko" name="Yae Miko" rarity="5" disabled={true} />

          {characters.map((character, index) => (
            <CharacterCard
              id={character.id}
              name={character.name}
              rarity={character.rarity ? character.rarity : 5}
              disabled={false}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const characters = await genshinData.characters();

  return {
    props: {
      characters,
    },
  };
}
