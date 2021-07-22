import { useRouter } from "next/router";
import ArtifactCard from "../../components/Artifacts/ArtifactCard";
import Head from "next/head";

//https://paimon-laravel.herokuapp.com/api/data/genshin-data/vietnamese/artifacts
const artifacts = [
  "adventurer",
  "archaic_petra",
  "berserker",
  "blizzard_strayer",
  "bloodstained_chivalry",
  "brave_heart",
  "crimson_witch_of_flames",
  "defenders_will",
  "emblem_of_severed_fate",
  "gambler",
  "gladiators_finale",
  "heart_of_depth",
  "instructor",
  "lavawalker",
  "lucky_dog",
  "maiden_beloved",
  "martial_artist",
  "noblesse_oblige",
  "pale_flame",
  "prayers_for_destiny",
  "prayers_for_illumination",
  "prayers_for_wisdom",
  "prayers_to_springtime",
  "resolution_of_sojourner",
  "retracing_bolide",
  "scholar",
  "shimenawas_reminiscence",
  "tenacity_of_the_millelith",
  "the_exile",
  "thundering_fury",
  "thundersoother",
  "tiny_miracle",
  "traveling_doctor",
  "viridescent_venerer",
  "wanderers_troupe",
];

function Artifacts() {
  const { locale } = useRouter();

  var localeGenshinData = "vietnamese";
  if (locale == "en") localeGenshinData = "english";
  else if (locale == "chs") localeGenshinData = "chinese-simplified";
  else if (locale == "cht") localeGenshinData = "chinese-traditional";
  else if (locale == "fr") localeGenshinData = "french";
  else if (locale == "de") localeGenshinData = "german";
  else if (locale == "id") localeGenshinData = "indonesian";
  else if (locale == "ja") localeGenshinData = "japanese";
  else if (locale == "ko") localeGenshinData = "korean";
  else if (locale == "pt") localeGenshinData = "portuguese";
  else if (locale == "ru") localeGenshinData = "russian";
  else if (locale == "sp") localeGenshinData = "spanish";
  else if (locale == "th") localeGenshinData = "thai";
  else localeGenshinData = "vietnamese";

  return (
    <div>
      <Head>
        <title>Genshin | Artifacts</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {artifacts.map((artifactName, index) => (
              <ArtifactCard
                artifactName={artifactName}
                localeGenshinData={localeGenshinData}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artifacts;
