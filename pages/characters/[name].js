import CharacterBackground from "../../components/Characters/CharacterBackground";
import CharacterConstellation from "../../components/Characters/CharacterConstellation";
import CharacterSkill from "../../components/Characters/CharacterSkill";
import CharacterPassive from "../../components/Characters/CharacterPassive";
import CharacterAscension from "../../components/Characters/CharacterAscension";
import CharacterTalentMaterials from "../../components/Characters/CharacterTalentMaterials";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";

function Character() {
  var router = useRouter();
  var { locale } = useRouter();
  var { name } = router.query;

  var localeGenshinData = "vietnamese";
  var localeGenshinDB = "Vietnamese";
  if (locale == "en") {
    localeGenshinData = "english";
    localeGenshinDB = "English";
  } else if (locale == "chs") {
    localeGenshinData = "chinese-simplified";
    localeGenshinDB = "ChineseSimplified";
  } else if (locale == "cht") {
    localeGenshinData = "chinese-traditional";
    localeGenshinDB = "ChineseTraditional";
  } else if (locale == "fr") {
    localeGenshinData = "french";
    localeGenshinDB = "French";
  } else if (locale == "de") {
    localeGenshinData = "german";
    localeGenshinDB = "German";
  } else if (locale == "id") {
    localeGenshinData = "indonesian";
    localeGenshinDB = "Indonesian";
  } else if (locale == "ja") {
    localeGenshinData = "japanese";
    localeGenshinDB = "Japanese";
  } else if (locale == "ko") {
    localeGenshinData = "korean";
    localeGenshinDB = "Korean";
  } else if (locale == "pt") {
    localeGenshinData = "portuguese";
    localeGenshinDB = "Portuguese";
  } else if (locale == "ru") {
    localeGenshinData = "russian";
    localeGenshinDB = "Russian";
  } else if (locale == "sp") {
    localeGenshinData = "spanish";
    localeGenshinDB = "Spanish";
  } else if (locale == "th") {
    localeGenshinData = "thai";
    localeGenshinDB = "Thai";
  } else {
    localeGenshinData = "vietnamese";
    localeGenshinDB = "Vietnamese";
  }

  // if (!name) {
  //   return <></>;
  // }

  var dataGenshinData = "";
  var errorGenshinData = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-data/" +
        localeGenshinData +
        "/characters/" +
        name
    );
    dataGenshinData = data;
    errorGenshinData = error;
  }

  if (name == "traveler_anemo") name = "lumine";
  else if (name == "traveler_geo") name = "aether";
  else if (name == "hu_tao") name = "hutao";

  var dataGenshinDB = "";
  var errorGenshinDB = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-db/" +
        localeGenshinDB +
        "/characters/" +
        name
    );
    dataGenshinDB = data;
    errorGenshinDB = error;
  }

  if (errorGenshinData)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataGenshinData)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );
  if (errorGenshinDB)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataGenshinDB)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Genshin | {dataGenshinData.name}</title>
      </Head>
      <div className="">
        <div className="bg-white flex flex-row flex-wrap p-5 sm:p-3">
          <div className="mx-auto w-full sm:w-5/6">
            <CharacterBackground
              dataGenshinData={dataGenshinData}
              dataGenshinDB={dataGenshinDB}
              name={name}
            />
            <br />
            <CharacterAscension
              dataGenshinData={dataGenshinData}
              dataGenshinDB={dataGenshinDB}
              name={name}
            />
            <CharacterTalentMaterials
              dataGenshinData={dataGenshinData}
              dataGenshinDB={dataGenshinDB}
              name={name}
            />
            <CharacterSkill
              dataGenshinData={dataGenshinData}
              dataGenshinDB={dataGenshinDB}
              name={name}
            />
            <CharacterPassive
              dataGenshinData={dataGenshinData}
              dataGenshinDB={dataGenshinDB}
              name={name}
            />
            <CharacterConstellation
              dataGenshinData={dataGenshinData}
              dataGenshinDB={dataGenshinDB}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
