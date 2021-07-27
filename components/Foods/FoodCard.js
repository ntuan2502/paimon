import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

function createMarkup(markup) {
  var temp = "";
  for (let i = 0; i < parseInt(markup); i++) {
    temp += `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>`;
  }
  return { __html: temp };
}
function FoodCard({ foodName, localeGenshinData, dataImages }) {
  const [foodState, setFoodState] = useState(2);

  var dataFood = "";
  var errorFood = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-data/" +
        localeGenshinData +
        "/food/" +
        foodName
    );
    dataFood = data;
    errorFood = error;
  }
  var dataFoodEnglish = "";
  var errorFoodEnglish = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-data/english/food/" +
        foodName
    );
    dataFoodEnglish = data;
    errorFoodEnglish = error;
  }

  if (errorFood)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataFood)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );

  if (errorFoodEnglish)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataFoodEnglish)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );

  return (
    // <Link href={`/foods/${dataFood.id}`}>
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${dataFood.rarity == 1 ? "bg-gray-400" : ""}${
          dataFood.rarity == 2 ? "bg-green-400" : ""
        }${dataFood.rarity == 3 ? "bg-blue-400" : ""}${
          dataFood.rarity == 4 ? "bg-purple-400" : ""
        } ${dataFood.rarity == 5 ? "bg-yellow-400" : ""} w-96 `}
      >
        <div
          className={`text-xl text-white ${
            dataFood.rarity == 1 ? "bg-gray-500" : ""
          }${dataFood.rarity == 2 ? "bg-green-500" : ""}${
            dataFood.rarity == 3 ? "bg-blue-500" : ""
          }${dataFood.rarity == 4 ? "bg-purple-500" : ""}${
            dataFood.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          {dataFood.results.suspicious && foodState == 1 ? (
            <div>{dataFood.results.suspicious.name}</div>
          ) : (
            ""
          )}
          {dataFood.results.normal && foodState == 2 ? (
            <div>{dataFood.results.normal.name}</div>
          ) : (
            ""
          )}
          {dataFood.results.delicious && foodState == 3 ? (
            <div>{dataFood.results.delicious.name}</div>
          ) : (
            ""
          )}
          {dataFood.results.special && foodState == 4 ? (
            <div>{dataFood.results.special.name}</div>
          ) : (
            ""
          )}
        </div>
        {dataFood.results.suspicious && foodState == 1 ? (
          <img
            className="w-40 h-auto float-right"
            src={`/img/food/item_suspicious_${dataFood.id}.webp`}
          />
        ) : (
          ""
        )}
        {dataFood.results.normal && foodState == 2 ? (
          <img
            className="w-40 h-auto float-right"
            src={`/img/food/item_${dataFood.id}.webp`}
          />
        ) : (
          ""
        )}
        {dataFood.results.delicious && foodState == 3 ? (
          <img
            className="w-40 h-auto float-right"
            src={`/img/food/item_delicious_${dataFood.id}.webp`}
          />
        ) : (
          ""
        )}
        {dataFood.results.special && foodState == 4 ? (
          <img
            className="w-40 h-auto float-right"
            src={`/img/food/item_${dataFoodEnglish.results.special.name
              .replace(/"/g, "")
              .replace(/\(/g, "")
              .replace(/\)/g, "")
              .replace(/'/g, "")
              .replace(/-/g, "")
              .replace(/!/g, "")
              .replace(/ /g, "_")
              .replace(/.593/g, "._593").toLowerCase()}.webp`}
          />
        ) : (
          ""
        )}
        <p className="text-lg text-white font-semibold px-5 py-1">
          {dataFood.dish_type ? dataFood.dish_type : "None"}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">
          {dataFood.results.special
            ? dataFood.results.special.character.name
            : "None"}
        </p>
        <div className="px-5 pt-20 py-2">
          <div
            className="flex h-7 w-32 text-yellow-300"
            dangerouslySetInnerHTML={createMarkup(dataFood.rarity)}
          />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="text-white flex justify-around pt-3">
          <div
            onClick={() => setFoodState(1)}
            className={`${
              foodState == 1 ? "bg-red-500" : "bg-green-500"
            } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
          >
            1
          </div>
          <div
            onClick={() => setFoodState(2)}
            className={`${
              foodState == 2 ? "bg-red-500" : "bg-green-500"
            } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
          >
            2
          </div>
          <div
            onClick={() => setFoodState(3)}
            className={`${
              foodState == 3 ? "bg-red-500" : "bg-green-500"
            } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
          >
            3
          </div>
          {dataFood.results.special ? (
            <div
              onClick={() => setFoodState(4)}
              className={`${
                foodState == 4 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              4
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="font-bold px-5 py-3">
          {dataFood.results.suspicious && foodState == 1 ? (
            <p>- {dataFood.results.suspicious.effect}</p>
          ) : (
            ""
          )}
          {dataFood.results.normal && foodState == 2 ? (
            <p>- {dataFood.results.normal.effect}</p>
          ) : (
            ""
          )}
          {dataFood.results.delicious && foodState == 3 ? (
            <p>- {dataFood.results.delicious.effect}</p>
          ) : (
            ""
          )}
          {dataFood.results.special && foodState == 4 ? (
            <p>- {dataFood.results.special.effect}</p>
          ) : (
            ""
          )}
        </div>
        <div className="font-semibold px-5 py-3">
          {dataFood.results.suspicious && foodState == 1 ? (
            <p>{dataFood.results.suspicious.description}</p>
          ) : (
            ""
          )}
          {dataFood.results.normal && foodState == 2 ? (
            <p>{dataFood.results.normal.description}</p>
          ) : (
            ""
          )}
          {dataFood.results.delicious && foodState == 3 ? (
            <p>{dataFood.results.delicious.description}</p>
          ) : (
            ""
          )}
          {dataFood.results.special && foodState == 4 ? (
            <p>{dataFood.results.special.description}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default FoodCard;
