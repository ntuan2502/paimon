import Link from "next/link";
import { star } from "../../lib/localData";

export default function CharacterCard({ id, name, rarity, disabled }) {
  return (
    <Link href={`${disabled === false ? "/characters/" + id : "#"}`}>
      <a>
        <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 hover:shadow-xl cursor-pointer">
          <img
            className="w-96 h-auto"
            src={`/img/character/card/character_${id}_card.webp`}
          />
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">
              {name} {disabled === true ? "(*)" : ""}
            </p>
            <div className="border-t-2"></div>
            <div className="flex justify-between">
              <div className="my-2">
                <div className="flex space-x-2">
                  <div
                    className="flex h-7 w-32 text-yellow-500"
                    dangerouslySetInnerHTML={star(rarity)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
