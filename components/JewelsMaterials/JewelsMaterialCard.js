import { star } from "../../lib/localData";

export default function JewelsMaterialCard({ jewelsMaterial }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${
          jewelsMaterial.rarity == 1 ? "bg-gray-400" : ""
        }${jewelsMaterial.rarity == 2 ? "bg-green-400" : ""}${
          jewelsMaterial.rarity == 3 ? "bg-blue-400" : ""
        }${jewelsMaterial.rarity == 4 ? "bg-purple-400" : ""} ${
          jewelsMaterial.rarity == 5 ? "bg-yellow-400" : ""
        } w-96 `}
      >
        <div
          className={`text-xl text-white ${
            jewelsMaterial.rarity == 1 ? "bg-gray-500" : ""
          }${jewelsMaterial.rarity == 2 ? "bg-green-500" : ""}${
            jewelsMaterial.rarity == 3 ? "bg-blue-500" : ""
          }${jewelsMaterial.rarity == 4 ? "bg-purple-500" : ""} ${
            jewelsMaterial.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{jewelsMaterial.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/img/items/item_${jewelsMaterial.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <div
            className="flex h-7 w-32 text-yellow-300"
            dangerouslySetInnerHTML={star(jewelsMaterial.rarity)}
          />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{jewelsMaterial.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {jewelsMaterial.source ? (
          <div>
            <div className="font-bold px-5 py-3">
              {jewelsMaterial.source.map((source, index) => (
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

        {jewelsMaterial.craft ? (
          <div>
            <div className="font-bold px-5 py-3">
              <div className="flex">
                + Mora
                <img className="w-7 h-auto mx-1" src={`/img/items/item_mora.webp`} />x
                {jewelsMaterial.craft.cost}
              </div>
              {jewelsMaterial.craft.items.map((craft, index) => (
                <div className="flex" key={index}>
                  + {craft.name}
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/img/items/item_${craft.id}.webp`}
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
