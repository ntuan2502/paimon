import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";
import WeaponCard from "../../components/Weapons/WeaponCard";
import WeaponAscension from "../../components/Weapons/WeaponAscension";

function Weapon() {
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

  var dataGenshinData = "";
  var errorGenshinData = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-data/" +
        localeGenshinData +
        "/weapons/" +
        name
    );
    dataGenshinData = data;
    errorGenshinData = error;
  }

  var dataImages = "";
  var errorImages = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/genshin-db/image/weapons"
    );
    dataImages = data;
    errorImages = error;
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
  if (errorImages)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataImages)
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
      <div className="py-5">
        <div className="flex items-center justify-center">
          <WeaponCard
            weaponName={dataGenshinData.id}
            localeGenshinData={localeGenshinData}
            dataImages={dataImages}
          />
        </div>
        <div className="bg-white flex flex-row flex-wrap p-5 ">
          <div className="mx-auto w-full sm:w-5/6">
            <WeaponAscension
              weaponName={dataGenshinData.id}
              dataGenshinData={dataGenshinData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weapon;
