import { useRouter } from "next/router";
import FoodCard from "../../components/Foods/FoodCard";
import Head from "next/head";
import useSWR from "swr";

//https://paimon-laravel.herokuapp.com/api/data/genshin-data/vietnamese/food
const foods = [
  "adeptus_temptation",
  "adventurers_breakfast_sandwich",
  "almond_tofu",
  "bamboo_shoot_soup",
  "barbatos_ratatouille",
  "blackback_perch_stew",
  "calla_lily_seafood_soup",
  "chickenmushroom_skewer",
  "cold_cut_platter",
  "come_and_get_it",
  "crab_ham_veggie_bake",
  "crab_roe_tofu",
  "cream_stew",
  "crispy_potato_shrimp_platter",
  "crystal_shrimp",
  "cured_pork_dry_hotpot",
  "fishermans_toast",
  "flaming_red_bolognese",
  "fragrant_mashed_potatoes",
  "fried_radish_balls",
  "fullmoon_egg",
  "golden_chicken_burger",
  "golden_crab",
  "golden_fried_chicken",
  "golden_shrimp_balls",
  "goulash",
  "grilled_tiger_fish",
  "jade_parcels",
  "jewelry_soup",
  "jueyun_chili_chicken",
  "jueyun_guoba",
  "lotus_flower_crisp",
  "lotus_seed_and_bird_egg_soup",
  "matsutake_meat_rolls",
  "mint_jelly",
  "mint_salad",
  "minty_meat_rolls",
  "mondstadt_grilled_fish",
  "mondstadt_hash_brown",
  "moon_pie",
  "mora_meat",
  "mushroom_pizza",
  "noodles_with_mountain_delicacies",
  "northern_apple_stew",
  "northern_smoked_chicken",
  "pile_em_up",
  "qingce_stir_fry",
  "radish_veggie_soup",
  "satisfying_salad",
  "sauted_matsutake",
  "squirrel_fish",
  "steak",
  "sticky_honey_roast",
  "stirfried_filet",
  "stirfried_fish_noodles",
  "stone_harbor_delicacies",
  "sunshine_sprat",
  "sweet_madame",
  "tea_break_pancake",
  "teyvat_fried_egg",
  "tianshu_meat",
  "triplelayered_consomm",
  "universal_peace",
  "vegetarian_abalone",
  "zhongyuan_chop_suey",
];

function Foods() {
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

  var dataImages = "";
  var errorImages = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/genshin-db/image/recipes"
    );
    dataImages = data;
    errorImages = error;
  }
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
        <title>Genshin | Foods</title>
      </Head>
      <div className="pt-16">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {foods.map((foodName, index) => (
              <FoodCard
                foodName={foodName}
                localeGenshinData={localeGenshinData}
                dataImages={dataImages}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foods;
