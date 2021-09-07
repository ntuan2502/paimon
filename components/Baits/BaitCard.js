import { star, removeBr } from "../../lib/localData";

export default function BaitCard({ bait }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${bait.rarity == 1 ? "bg-gray-400" : ""}${
          bait.rarity == 2 ? "bg-green-400" : ""
        }${bait.rarity == 3 ? "bg-blue-400" : ""}${
          bait.rarity == 4 ? "bg-purple-400" : ""
        } ${bait.rarity == 5 ? "bg-yellow-400" : ""} w-96 `}
      >
        <div
          className={`text-xl text-white ${
            bait.rarity == 1 ? "bg-gray-500" : ""
          }${bait.rarity == 2 ? "bg-green-500" : ""}${
            bait.rarity == 3 ? "bg-blue-500" : ""
          }${bait.rarity == 4 ? "bg-purple-500" : ""} ${
            bait.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{bait.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/img/items/item_${bait.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {bait.type}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <div
            className="flex h-7 w-32 text-yellow-300"
            dangerouslySetInnerHTML={star(bait.rarity)}
          />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{removeBr(bait.description)}</p>
        </div>

        {bait.source ? (
          <div className="font-bold px-5">
            {bait.source.map((source, index) => (
              <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                {source}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {bait.craft ? (
          <div className="font-bold px-5 py-3 ">
            {bait.craft.items.map((craft, index) => (
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
        ) : (
          ""
        )}

        {bait.fish ? (
          <div className="font-bold px-5 py-3 ">
            {bait.fish.map((fish, index) => (
              <div className="flex" key={index}>
                - {fish.name}
                <img
                  className="w-7 h-auto mx-1"
                  src={`/img/items/item_${fish.id}.webp`}
                />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
