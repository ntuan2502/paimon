import Link from "next/link";
import { star } from "../../lib/localData";

function ArtifactCard({ artifact }) {
  return (
    <Link href={`/artifacts/${artifact.id}`}>
      <a>
        <div className="w-96 hover:shadow-xl cursor-pointer">
          <div
            className={`relative ${
              artifact.max_rarity == 3 ? "bg-blue-400" : ""
            }${artifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
              artifact.max_rarity == 5 ? "bg-yellow-400" : ""
            } w-96 `}
          >
            <p
              className={`text-2xl text-white ${
                artifact.max_rarity == 3 ? "bg-blue-500" : ""
              }${artifact.max_rarity == 4 ? "bg-purple-500" : ""}${
                artifact.max_rarity == 5 ? "bg-yellow-500" : ""
              } font-semibold px-5 py-3`}
            >
              {artifact.name}
            </p>
            <img
              className="w-40 h-auto float-right"
              src={`/img/artifacts/${artifact.id}_circlet.png`}
            />
            <p className="text-lg text-white font-semibold px-5 py-1">
              ---
            </p>
            <div className="px-5 pt-24 py-2">
              <div
                className="flex h-7 w-32 text-yellow-300"
                dangerouslySetInnerHTML={star(artifact.max_rarity)}
              />
            </div>

            <div className="border-t-2 border-black"></div>
          </div>
          <div className="bg-gray-200 pb-3 text-lg">
            <p className="text-lg text-green-400 font-semibold px-5 pt-5 pb-1">
              {artifact.name}:
            </p>
            {artifact.one_pc ? (
              <div className="px-5 flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div className="px-5 font-semibold">{artifact.one_pc}</div>
              </div>
            ) : (
              <div>
                <div className="px-5 flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div className="px-5 font-semibold">{artifact.two_pc}</div>
                </div>
                <div className="px-5 flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div className="px-5 font-semibold">{artifact.four_pc}</div>
                </div>
              </div>
            )}

            <div className="font-bold px-5 py-0">
              <p>---</p>

              {artifact.flower ? <p>- {artifact.flower.name}</p> : ""}
              {artifact.plume ? <p>- {artifact.plume.name}</p> : ""}
              {artifact.sands ? <p>- {artifact.sands.name}</p> : ""}
              {artifact.goblet ? <p>- {artifact.goblet.name}</p> : ""}
              {artifact.circlet ? <p>- {artifact.circlet.name}</p> : ""}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ArtifactCard;
