import CharacterBackground from "../../components/Characters/CharacterBackground";
import CharacterConstellation from "../../components/Characters/CharacterConstellation";
import CharacterSkill from "../../components/Characters/CharacterSkill";
import CharacterPassive from "../../components/Characters/CharacterPassive";
import CharacterAscension from "../../components/Characters/CharacterAscension";
import CharacterTalentMaterials from "../../components/Characters/CharacterTalentMaterials";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function CharacterPage({ character, region, basePath }) {
  return (
    <div>
      <Head>
        <title>Genshin | {character.name}</title>
        <meta
          itemProp="name"
          content={`${character.name} - ${character.title}`}
        />
        <meta itemProp="description" content={character.description} />
        <meta
          itemProp="image"
          content={`${basePath}/img/character/backgrounds/${character.id}.png`}
        />

        <meta
          itemProp="name"
          content={`${character.name} - ${character.title}`}
        />
        <meta itemProp="description" content={character.description} />
        <meta
          itemProp="image"
          content={`${basePath}/img/character/backgrounds/${character.id}.png`}
        />

        <meta property="og:url" content="https://paimon.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${character.name} - ${character.title}`}
        />
        <meta property="og:description" content={character.description} />
        <meta
          property="og:image"
          content={`${basePath}/img/character/backgrounds/${character.id}.png`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${character.name} - ${character.title}`}
        />
        <meta name="twitter:description" content={character.description} />
        <meta
          name="twitter:image"
          content={`${basePath}/img/character/backgrounds/${character.id}.png`}
        />
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
            <hr />
            <CharacterPassive id={character.id} passives={character.passives} />
            <hr />
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

export async function getServerSideProps(ctx) {
  const { locale, params } = ctx;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const characters = await genshinData.characters();
  const character = characters.find((c) => c.id === params.name);

  const genshinData1 = new GenshinData();
  const characters1 = await genshinData1.characters();
  const character1 = characters1.find((c) => c.id === params.name);
  var region = "Mondstadt";
  if (character1.region) region = character1.region;

  const basePath =
    "https://raw.githubusercontent.com/ntuan2502/paimon/main/public";

  return {
    props: {
      character,
      region,
      basePath,
    },
  };
}
