// import { promises as fs } from "fs";
import { useRouter } from "next/router";
import CharacterCard from "../../components/Characters/CharacterCard";
import CharacterCardUp from "../../components/Characters/CharacterCardUp";
import Head from "next/head";

//https://paimon-laravel.herokuapp.com/api/data/genshin-data/vietnamese/characters
const characters = [
  "albedo",
  "amber",
  "barbara",
  "beidou",
  "bennett",
  "chongyun",
  "diluc",
  "diona",
  "eula",
  "fischl",
  "ganyu",
  "hu_tao",
  "jean",
  "kaedehara_kazuha",
  "kaeya",
  "kamisato_ayaka",
  "keqing",
  "klee",
  "lisa",
  "mona",
  "ningguang",
  "noelle",
  "qiqi",
  "razor",
  "rosaria",
  "sayu",
  "sucrose",
  "tartaglia",
  "traveler_anemo",
  "traveler_geo",
  "traveler_electro",
  "venti",
  "xiangling",
  "xiao",
  "xingqiu",
  "xinyan",
  "yanfei",
  "yoimiya",
  "zhongli",
];

function Characters() {
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
        <title>Genshin | Characters</title>
      </Head>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {characters.map((characterName, index) => (
            <CharacterCard
              characterName={characterName}
              localeGenshinData={localeGenshinData}
              key={index}
            />
          ))}
          {/* {posts.map((post, index) => (
              <Character data={post} key={index} />
            ))} */}
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   var locale = "Vietnamese";
//   if (context.locale == "vi") locale = "Vietnamese";
//   else if (context.locale == "en") locale = "English";
//   else if (context.locale == "chs") locale = "ChineseSimplified";
//   else if (context.locale == "cht") locale = "ChineseTraditional";
//   else if (context.locale == "fr") locale = "French";
//   else if (context.locale == "ge") locale = "German";
//   else if (context.locale == "in") locale = "Indonesian";
//   else if (context.locale == "ja") locale = "Japanese";
//   else if (context.locale == "ko") locale = "Korean";
//   else if (context.locale == "po") locale = "Portuguese";
//   else if (context.locale == "ru") locale = "Russian";
//   else if (context.locale == "sp") locale = "Spanish";
//   else if (context.locale == "th") locale = "Thai";
//   else locale = "Vietnamese";
//   const postsDirectory = path.join(
//     process.cwd(),
//     "data/i18n/" + locale + "/characters/"
//   );
//   const filenames = await fs.readdir(postsDirectory);

//   const posts = filenames.map(async (filename) => {
//     const filePath = path.join(postsDirectory, filename);
//     const fileContents = await fs.readFile(filePath, "utf8");

//     return {
//       filename,
//       content: fileContents,
//     };
//   });

//   return {
//     props: {
//       posts: await Promise.all(posts),
//     },
//   };
// }

export default Characters;
