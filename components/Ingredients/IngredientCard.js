// import Link from "next/link";
import { star } from "../../lib/localData";

export default function IngredientCard({ ingredient }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div className={`relative bg-gray-400 w-96 `}>
        <div
          className={`text-xl text-white bg-gray-500 font-semibold px-5 py-3`}
        >
          <div>{ingredient.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/img/items/item_${ingredient.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {ingredient.type} {ingredient.location}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <div
            className="flex h-7 w-32 text-yellow-300"
            dangerouslySetInnerHTML={star(ingredient.rarity)}
          />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{ingredient.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {ingredient.source ? (
          <div>
            <div className="font-bold px-5 py-3">
              {ingredient.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
            <br />
          </div>
        ) : (
          ""
        )}

        {ingredient.processing ? (
          <div>
            <div className="font-bold px-5 py-3">
              {ingredient.processing.map((processing, index) => (
                <div className="flex" key={index}>
                  + {processing.name}
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/img/items/item_${processing.id}.webp`}
                  />
                  x{processing.amount}
                </div>
              ))}
            </div>
            <br />
          </div>
        ) : (
          ""
        )}
        {ingredient.craft ? (
          <div>
            <div className="font-bold px-5 py-3">
              {ingredient.craft.map((craft, index) => (
                <div className="flex" key={index}>
                  -&gt; {craft.name}
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/img/items/item_${craft.id}.webp`}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {ingredient.recipes ? (
          <div>
            <div className="font-bold px-5 py-3">
              {ingredient.recipes.map((recipes, index) => (
                <div className="flex" key={index}>
                  =&gt;
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/img/items/item_${recipes.id}.webp`}
                  />
                  {recipes.name}
                </div>
              ))}
            </div>
            <br />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
