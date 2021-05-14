import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

function createMarkup(markup) {
  var temp = "";
  for (let i = 0; i < parseInt(markup); i++) {
    temp += `    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>`;
  }
  return { __html: temp };
}
function replaceMarkup(markup) {
  var temp = markup;
  temp = temp.replace(/<span>/g, '<span style="color:blue;">');
  return { __html: temp };
}
function WeaponCard({ weaponName, localeGenshinData, dataImages }) {
  const [weaponState, setWeaponState] = useState(1);
  const [level, setLevel] = useState(0);

  var dataWeapon = "";
  var errorWeapon = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-data/" +
        localeGenshinData +
        "/weapons/" +
        weaponName
    );
    dataWeapon = data;
    errorWeapon = error;
  }

  if (errorWeapon)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataWeapon)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );

  return (
    // <Link href={`/weapons/${dataWeapon.id}`}>
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${dataWeapon.rarity == 1 ? "bg-gray-400" : ""}${
          dataWeapon.rarity == 2 ? "bg-green-400" : ""
        }${dataWeapon.rarity == 3 ? "bg-blue-400" : ""}${
          dataWeapon.rarity == 4 ? "bg-purple-400" : ""
        } ${dataWeapon.rarity == 5 ? "bg-yellow-400" : ""} w-96 `}
      >
        <div
          className={`text-xl text-white ${
            dataWeapon.rarity == 1 ? "bg-gray-500" : ""
          }${dataWeapon.rarity == 2 ? "bg-green-500" : ""}${
            dataWeapon.rarity == 3 ? "bg-blue-500" : ""
          }${dataWeapon.rarity == 4 ? "bg-purple-500" : ""}${
            dataWeapon.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          {dataWeapon.name}
        </div>
        <img
          className="w-40 h-auto float-right p-2"
          src={`${
            dataImages[dataWeapon.id.replace(/_/g, "") + ".json"]
              ? dataImages[dataWeapon.id.replace(/_/g, "") + ".json"].icon
              : ""
          }`}
        />
        <p className="text-md text-white font-bold px-5 pt-1">{dataWeapon.type}</p>
        {dataWeapon.secondary ? (
          <div>
            <p className="text-md text-white font-semibold px-5">
              {dataWeapon.secondary.name}
            </p>
            <p className="text-md text-white font-bold px-5">
              {dataWeapon.secondary.value}
            </p>
          </div>
        ) : (
          <div>
            <p className="text-md text-white font-semibold px-5">-</p>
            <p className="text-md text-white font-bold px-5">-</p>
          </div>
        )}
        <p className="text-md text-white font-semibold px-5">
          {dataWeapon.primary.name}
        </p>
        <p className="text-4xl text-white font-bold px-5">
          {dataWeapon.primary.value}
        </p>
        <div className="px-5 pt-0 py-1">
          <div
            className="flex h-7 w-auto text-yellow-300"
            dangerouslySetInnerHTML={createMarkup(dataWeapon.rarity)}
          />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        {dataWeapon.refinements.length > 0 ? (
          <div className="text-white flex justify-around pt-3">
            <div
              onClick={() => setWeaponState(1)}
              className={`${
                weaponState == 1 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              1
            </div>
            <div
              onClick={() => setWeaponState(2)}
              className={`${
                weaponState == 2 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              2
            </div>
            <div
              onClick={() => setWeaponState(3)}
              className={`${
                weaponState == 3 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              3
            </div>
            <div
              onClick={() => setWeaponState(4)}
              className={`${
                weaponState == 4 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              4
            </div>
            <div
              onClick={() => setWeaponState(5)}
              className={`${
                weaponState == 5 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              5
            </div>
          </div>
        ) : (
          ""
        )}

        {dataWeapon.passive != "" ? (
          <div className="font-bold px-5 pt-3">{dataWeapon.passive}</div>
        ) : (
          ""
        )}

        {dataWeapon.refinements.length > 0 ? (
          <div className="font-bold px-5 py-0">
            {dataWeapon.refinements[0] && weaponState == 1 ? (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  dataWeapon.refinements[0].desc
                )}
              />
            ) : (
              ""
            )}
            {dataWeapon.refinements[1] && weaponState == 2 ? (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  dataWeapon.refinements[1].desc
                )}
              />
            ) : (
              ""
            )}
            {dataWeapon.refinements[2] && weaponState == 3 ? (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  dataWeapon.refinements[2].desc
                )}
              />
            ) : (
              ""
            )}
            {dataWeapon.refinements[3] && weaponState == 4 ? (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  dataWeapon.refinements[3].desc
                )}
              />
            ) : (
              ""
            )}
            {dataWeapon.refinements[4] && weaponState == 5 ? (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  dataWeapon.refinements[4].desc
                )}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <div className="font-semibold px-5 py-3">{dataWeapon.description}</div>
      </div>
    </div>
    // </Link>
  );
}

export default WeaponCard;
