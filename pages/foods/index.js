import FoodCard from "../../components/Foods/FoodCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function FoodsPage({ foods, foodsEnglish }) {
  return (
    <div>
      <Head>
        <title>Genshin | Foods</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {foods.map((food, index) => (
              <FoodCard
                food={food}
                foodEnglish={foodsEnglish[index]}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const locale = context.locale;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const foods = await genshinData.food();

  const genshinData1 = new GenshinData({ language: "english" });
  const foodsEnglish = await genshinData1.food();

  return {
    props: {
      foods,
      foodsEnglish,
    },
  };
}
