import { useRouter } from "next/router";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale, star } from "../../lib/localData";

export default function ArtifactPage({ artifact }) {
  return (
    <div>
      <Head>
        <title>Genshin | {artifact.name}</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {artifact.flower ? (
              <div className="w-96 hover:shadow-xl">
                <div
                  className={`relative ${
                    artifact.max_rarity == 3 ? "bg-blue-400" : ""
                  }${artifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
                    artifact.max_rarity == 5 ? "bg-yellow-400" : ""
                  } w-96 `}
                >
                  <p
                    className={`text-lg text-white ${
                      artifact.max_rarity == 3 ? "bg-blue-500" : ""
                    }${artifact.max_rarity == 4 ? "bg-purple-500" : ""}${
                      artifact.max_rarity == 5 ? "bg-yellow-500" : ""
                    } font-semibold px-5 py-3`}
                  >
                    {artifact.flower.name}
                    {artifact.max_rarity == 3 ? " +12" : ""}
                    {artifact.max_rarity == 4 ? " +16" : ""}
                    {artifact.max_rarity == 5 ? " +20" : ""}
                  </p>
                  <img
                    className="w-40 h-auto float-right"
                    src={`/img/artifacts/${artifact.id}_flower.png`}
                  />
                  <p className="text-lg text-white font-semibold px-5 py-1">
                    {artifact.flower.relictype} ---
                  </p>
                  <div className="text-lg text-white font-semibold px-5 py-1 pt-5">
                    ---
                  </div>
                  <div className="text-xl text-white font-bold px-5 py-1">
                    ---
                  </div>
                  <div className="px-5 pt-2 py-2">
                    <div
                      className="flex h-7 w-32 text-yellow-300"
                      dangerouslySetInnerHTML={star(artifact.max_rarity)}
                    />
                  </div>

                  <div className="border-t-2 border-black"></div>
                </div>
                <div className="bg-gray-200 pb-3 text-lg">
                  <div className="text-lg font-bold px-10 pt-5 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <p className="text-lg text-green-400 font-semibold px-5 pt-1 pb-1">
                    {artifact.name}:
                  </p>
                  {artifact["1pc"] ? (
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
                      <div className="px-5 font-semibold">
                        {artifact["1pc"]}
                      </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["2pc"]}
                        </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["4pc"]}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="font-semibold px-5 py-0">
                    <p>{artifact.flower.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {artifact.plume ? (
              <div className="w-96 hover:shadow-xl">
                <div
                  className={`relative ${
                    artifact.max_rarity == 3 ? "bg-blue-400" : ""
                  }${artifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
                    artifact.max_rarity == 5 ? "bg-yellow-400" : ""
                  } w-96 `}
                >
                  <p
                    className={`text-lg text-white ${
                      artifact.max_rarity == 3 ? "bg-blue-500" : ""
                    }${artifact.max_rarity == 4 ? "bg-purple-500" : ""}${
                      artifact.max_rarity == 5 ? "bg-yellow-500" : ""
                    } font-semibold px-5 py-3`}
                  >
                    {artifact.plume.name}
                    {artifact.max_rarity == 3 ? " +12" : ""}
                    {artifact.max_rarity == 4 ? " +16" : ""}
                    {artifact.max_rarity == 5 ? " +20" : ""}
                  </p>
                  <img
                    className="w-40 h-auto float-right"
                    src={`/img/artifacts/${artifact.id}_plume.png`}
                  />
                  <p className="text-lg text-white font-semibold px-5 py-1">
                    {artifact.plume.relictype} ---
                  </p>
                  <div className="text-lg text-white font-semibold px-5 py-1 pt-5">
                    ---
                  </div>
                  <div className="text-xl text-white font-bold px-5 py-1">
                    ---
                  </div>
                  <div className="px-5 pt-2 py-2">
                    <div
                      className="flex h-7 w-32 text-yellow-300"
                      dangerouslySetInnerHTML={star(artifact.max_rarity)}
                    />
                  </div>

                  <div className="border-t-2 border-black"></div>
                </div>
                <div className="bg-gray-200 pb-3 text-lg">
                  <div className="text-lg font-bold px-10 pt-5 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <p className="text-lg text-green-400 font-semibold px-5 pt-1 pb-1">
                    {artifact.name}:
                  </p>
                  {artifact["1pc"] ? (
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
                      <div className="px-5 font-semibold">
                        {artifact["1pc"]}
                      </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["2pc"]}
                        </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["4pc"]}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="font-semibold px-5 py-0">
                    <p>{artifact.plume.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {artifact.sands ? (
              <div className="w-96 hover:shadow-xl">
                <div
                  className={`relative ${
                    artifact.max_rarity == 3 ? "bg-blue-400" : ""
                  }${artifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
                    artifact.max_rarity == 5 ? "bg-yellow-400" : ""
                  } w-96 `}
                >
                  <p
                    className={`text-lg text-white ${
                      artifact.max_rarity == 3 ? "bg-blue-500" : ""
                    }${artifact.max_rarity == 4 ? "bg-purple-500" : ""}${
                      artifact.max_rarity == 5 ? "bg-yellow-500" : ""
                    } font-semibold px-5 py-3`}
                  >
                    {artifact.sands.name}
                    {artifact.max_rarity == 3 ? " +12" : ""}
                    {artifact.max_rarity == 4 ? " +16" : ""}
                    {artifact.max_rarity == 5 ? " +20" : ""}
                  </p>
                  <img
                    className="w-40 h-auto float-right"
                    src={`/img/artifacts/${artifact.id}_sands.png`}
                  />
                  <p className="text-lg text-white font-semibold px-5 py-1">
                    {artifact.sands.relictype} ---
                  </p>
                  <div className="text-lg text-white font-semibold px-5 py-1 pt-5">
                    ---
                  </div>
                  <div className="text-xl text-white font-bold px-5 py-1">
                    ---
                  </div>
                  <div className="px-5 pt-2 py-2">
                    <div
                      className="flex h-7 w-32 text-yellow-300"
                      dangerouslySetInnerHTML={star(artifact.max_rarity)}
                    />
                  </div>

                  <div className="border-t-2 border-black"></div>
                </div>
                <div className="bg-gray-200 pb-3 text-lg">
                  <div className="text-lg font-bold px-10 pt-5 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <p className="text-lg text-green-400 font-semibold px-5 pt-1 pb-1">
                    {artifact.name}:
                  </p>
                  {artifact["1pc"] ? (
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
                      <div className="px-5 font-semibold">
                        {artifact["1pc"]}
                      </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["2pc"]}
                        </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["4pc"]}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="font-semibold px-5 py-0">
                    <p>{artifact.sands.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {artifact.goblet ? (
              <div className="w-96 hover:shadow-xl">
                <div
                  className={`relative ${
                    artifact.max_rarity == 3 ? "bg-blue-400" : ""
                  }${artifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
                    artifact.max_rarity == 5 ? "bg-yellow-400" : ""
                  } w-96 `}
                >
                  <p
                    className={`text-lg text-white ${
                      artifact.max_rarity == 3 ? "bg-blue-500" : ""
                    }${artifact.max_rarity == 4 ? "bg-purple-500" : ""}${
                      artifact.max_rarity == 5 ? "bg-yellow-500" : ""
                    } font-semibold px-5 py-3`}
                  >
                    {artifact.goblet.name}
                    {artifact.max_rarity == 3 ? " +12" : ""}
                    {artifact.max_rarity == 4 ? " +16" : ""}
                    {artifact.max_rarity == 5 ? " +20" : ""}
                  </p>
                  <img
                    className="w-40 h-auto float-right"
                    src={`/img/artifacts/${artifact.id}_goblet.png`}
                  />
                  <p className="text-lg text-white font-semibold px-5 py-1">
                    {artifact.goblet.relictype} ---
                  </p>
                  <div className="text-lg text-white font-semibold px-5 py-1 pt-5">
                    ---
                  </div>
                  <div className="text-xl text-white font-bold px-5 py-1">
                    ---
                  </div>
                  <div className="px-5 pt-2 py-2">
                    <div
                      className="flex h-7 w-32 text-yellow-300"
                      dangerouslySetInnerHTML={star(artifact.max_rarity)}
                    />
                  </div>

                  <div className="border-t-2 border-black"></div>
                </div>
                <div className="bg-gray-200 pb-3 text-lg">
                  <div className="text-lg font-bold px-10 pt-5 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <p className="text-lg text-green-400 font-semibold px-5 pt-1 pb-1">
                    {artifact.name}:
                  </p>
                  {artifact["1pc"] ? (
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
                      <div className="px-5 font-semibold">
                        {artifact["1pc"]}
                      </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["2pc"]}
                        </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["4pc"]}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="font-semibold px-5 py-0">
                    <p>{artifact.goblet.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {artifact.circlet ? (
              <div className="w-96 hover:shadow-xl">
                <div
                  className={`relative ${
                    artifact.max_rarity == 3 ? "bg-blue-400" : ""
                  }${artifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
                    artifact.max_rarity == 5 ? "bg-yellow-400" : ""
                  } w-96 `}
                >
                  <p
                    className={`text-lg text-white ${
                      artifact.max_rarity == 3 ? "bg-blue-500" : ""
                    }${artifact.max_rarity == 4 ? "bg-purple-500" : ""}${
                      artifact.max_rarity == 5 ? "bg-yellow-500" : ""
                    } font-semibold px-5 py-3`}
                  >
                    {artifact.circlet.name}
                    {artifact.max_rarity == 3 ? " +12" : ""}
                    {artifact.max_rarity == 4 ? " +16" : ""}
                    {artifact.max_rarity == 5 ? " +20" : ""}
                  </p>
                  <img
                    className="w-40 h-auto float-right"
                    src={`/img/artifacts/${artifact.id}_circlet.png`}
                  />
                  <p className="text-lg text-white font-semibold px-5 py-1">
                    {artifact.circlet.relictype} ---
                  </p>
                  <div className="text-lg text-white font-semibold px-5 py-1 pt-5">
                    ---
                  </div>
                  <div className="text-xl text-white font-bold px-5 py-1">
                    ---
                  </div>
                  <div className="px-5 pt-2 py-2">
                    <div
                      className="flex h-7 w-32 text-yellow-300"
                      dangerouslySetInnerHTML={star(artifact.max_rarity)}
                    />
                  </div>

                  <div className="border-t-2 border-black"></div>
                </div>
                <div className="bg-gray-200 pb-3 text-lg">
                  <div className="text-lg font-bold px-10 pt-5 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <div className="text-lg font-bold px-10 py-1">---</div>
                  <p className="text-lg text-green-400 font-semibold px-5 pt-1 pb-1">
                    {artifact.name}:
                  </p>
                  {artifact["1pc"] ? (
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
                      <div className="px-5 font-semibold">
                        {artifact["1pc"]}
                      </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["2pc"]}
                        </div>
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
                        <div className="px-5 font-semibold">
                          {artifact["4pc"]}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="font-semibold px-5 py-0">
                    <p>{artifact.circlet.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { locale, params } = ctx;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const artifacts = await genshinData.artifacts();
  const artifact = artifacts.find((c) => c.id === params.name);
  return {
    props: {
      artifact,
    },
  };
}
