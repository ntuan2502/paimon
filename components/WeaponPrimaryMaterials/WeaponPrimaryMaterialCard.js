import { star } from "../../lib/localData";

export default function WeaponPrimaryMaterialCard({ weaponPrimaryMaterial }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${
          weaponPrimaryMaterial.rarity == 1 ? "bg-gray-400" : ""
        }${weaponPrimaryMaterial.rarity == 2 ? "bg-green-400" : ""}${
          weaponPrimaryMaterial.rarity == 3 ? "bg-blue-400" : ""
        }${weaponPrimaryMaterial.rarity == 4 ? "bg-purple-400" : ""} ${
          weaponPrimaryMaterial.rarity == 5 ? "bg-yellow-400" : ""
        } w-96 `}
      >
        <div
          className={`text-xl text-white ${
            weaponPrimaryMaterial.rarity == 1 ? "bg-gray-500" : ""
          }${weaponPrimaryMaterial.rarity == 2 ? "bg-green-500" : ""}${
            weaponPrimaryMaterial.rarity == 3 ? "bg-blue-500" : ""
          }${weaponPrimaryMaterial.rarity == 4 ? "bg-purple-500" : ""} ${
            weaponPrimaryMaterial.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{weaponPrimaryMaterial.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/img/weapon_primary_materials/item_${weaponPrimaryMaterial.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {weaponPrimaryMaterial.location
            ? weaponPrimaryMaterial.location
            : "---"}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <div
            className="flex h-7 w-32 text-yellow-300"
            dangerouslySetInnerHTML={star(weaponPrimaryMaterial.rarity)}
          />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{weaponPrimaryMaterial.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {weaponPrimaryMaterial.source ? (
          <div>
            <div className="font-bold px-5">
              {weaponPrimaryMaterial.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {weaponPrimaryMaterial.days ? (
          <div>
            <div className="font-bold px-5">
              <div className="border-2 border-gray-400 p-2 my-2">
                {weaponPrimaryMaterial.domain +
                  ": " +
                  weaponPrimaryMaterial.days.map((days, index) => " " + days)}
              </div>
            </div>
            <br />
          </div>
        ) : (
          ""
        )}

        {weaponPrimaryMaterial.craft ? (
          <div>
            <div className="font-bold px-5 py-3 ">
              <div className="flex">
                + Mora
                <img className="w-7 h-auto mx-1" src={`/img/item/mora.png`} />x
                {weaponPrimaryMaterial.craft.cost}
              </div>
              {weaponPrimaryMaterial.craft.items.map((craft, index) => (
                <div className="flex" key={index}>
                  + {craft.name}
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/img/weapon_primary_materials/item_${craft.id}.webp`}
                  />
                  x{craft.amount}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
