import FoodCard from "../../components/Foods/FoodCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";
import { useState } from "react";

export default function FoodsPage({ foods, foodsEnglish, }) {
  const [special, setSpecial] = useState(false);

  return (
    <div>
      <Head>
        <title>Genshin | Foods</title>
      </Head>
      <div className="py-5">
        <div className="flex justify-center">
          <div className="m-10" onClick={() => setSpecial(!special)}>
            <div
              className={`flex flex-shrink-0 ${
                special ? "bg-blue-500" : "bg-green-500"
              } text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md`}
            >
              <div className="mr-2">{special ? "All" : "Special"}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {special
              ? foods.map((food, index) =>
                  food.results.special ? (
                    <FoodCard
                      food={food}
                      foodEnglish={foodsEnglish[index]}
                      key={index}
                    />
                  ) : (
                    ""
                  )
                )
              : foods.map((food, index) => (
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

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
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
