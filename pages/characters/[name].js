import CharacterBackground from "../../components/Characters/CharacterBackground";
import CharacterConstellation from "../../components/Characters/CharacterConstellation";
import CharacterSkill from "../../components/Characters/CharacterSkill";
import CharacterPassive from "../../components/Characters/CharacterPassive";
import CharacterAscension from "../../components/Characters/CharacterAscension";
import CharacterTalentMaterials from "../../components/Characters/CharacterTalentMaterials";
import { useRouter } from "next/router";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function CharacterPage({ character, region }) {
  return (
    <div>
      <Head>
        <title>Genshin | {character.name}</title>
      </Head>
      <div className="py-5">
        <div className="bg-white flex flex-row flex-wrap p-5 ">
          <div className="mx-auto w-full sm:w-5/6">
            <CharacterBackground character={character} region={region} />
            <br />
            <CharacterAscension ascension={character.ascension} />
            <CharacterTalentMaterials
              id={character.id}
              talent_materials={character.talent_materials}
            />
            <CharacterSkill id={character.id} skills={character.skills} />
            <CharacterPassive id={character.id} passives={character.passives} />
            <CharacterConstellation
              id={character.id}
              constellations={character.constellations}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths({ locales }) {
  const genshinData = new GenshinData({ language: "vietnamese" });
  const characters = await genshinData.characters({
    select: ["id"],
  });

  const paths = [];

  for (const locale of locales) {
    characters.forEach((character) => {
      paths.push({
        params: {
          name: character.id,
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
  const characters = await genshinData.characters();
  const character = characters.find((c) => c.id === context.params.name);

  const genshinData1 = new GenshinData();
  const characters1 = await genshinData1.characters();
  const character1 = characters1.find((c) => c.id === context.params.name);
  var region = "Mondstadt";
  if (character1.region) region = character1.region;
  return {
    props: {
      character,
      region,
    },
  };
}
