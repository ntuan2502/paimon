import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

function createMarkup(markup) {
  var temp = "";
  for (let i = 0; i < parseInt(markup); i++) {
    temp += `    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
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
        <img
          className="w-40 h-auto float-right"
          src={`${
            dataImages[dataFood.id.replace(/_/g, "") + ".json"]
              ? dataImages[dataFood.id.replace(/_/g, "") + ".json"].image
              : ""
          }`}
        />
        <p className="text-lg text-white font-semibold px-5 py-1">
          {dataFood.dish_type ? dataFood.dish_type : "None"}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">
          {dataFood.results.special
            ? dataFood.results.special.character.name
            : "None"}
        </p>
        <div className="px-5 pt-24 py-2">
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
