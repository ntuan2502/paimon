import IngredientsCard from "../../components/Ingredients/IngredientCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function IngredientsPage({ ingredients }) {
  return (
    <div>
      <Head>
        <title>Genshin | Ingredients</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {ingredients.map((ingredient, index) => (
              <IngredientsCard ingredient={ingredient} key={index} />
              // <a href={`https://genshin-impact.fandom.com/wiki/${ingredient.id}`}>{ingredient.id}</a>
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
  const ingredients = await genshinData.ingredients();

  return {
    props: {
      ingredients,
    },
  };
}
