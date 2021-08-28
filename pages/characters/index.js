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
          <CharacterCard id="Raiden_Shogun" name="Raiden Shogun" rarity="5" />
          <CharacterCard
            id="Sangonomiya_Kokomi"
            name="Sangonomiya Kokomi"
            rarity="5"
          />
          <CharacterCard id="Kujou_Sara" name="Kujou Sara" rarity="4" />

          {characters.map((character, index) => (
            <CharacterCard
              id={character.id}
              name={character.name}
              rarity={character.rarity}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const locale = context.locale;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const characters = await genshinData.characters({
    select: ["id", "name", "rarity"],
  });

  return {
    props: {
      characters,
    },
  };
}
