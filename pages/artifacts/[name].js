import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";

function createMarkup(markup) {
  var temp = "";
  for (let i = 0; i < parseInt(markup); i++) {
    temp += `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>`;
  }
  return { __html: temp };
}

const Artifact = () => {
  var router = useRouter();
  var { locale } = useRouter();
  var { name } = router.query;

  if (!name) return <></>;

  var localeGenshinData = "vietnamese";
  var localeGenshinDB = "Vietnamese";
  if (locale == "en") {
    localeGenshinData = "english";
    localeGenshinDB = "English";
  } else if (locale == "chs") {
    localeGenshinData = "chinese-simplified";
    localeGenshinDB = "ChineseSimplified";
  } else if (locale == "cht") {
    localeGenshinData = "chinese-traditional";
    localeGenshinDB = "ChineseTraditional";
  } else if (locale == "fr") {
    localeGenshinData = "french";
    localeGenshinDB = "French";
  } else if (locale == "de") {
    localeGenshinData = "german";
    localeGenshinDB = "German";
  } else if (locale == "id") {
    localeGenshinData = "indonesian";
    localeGenshinDB = "Indonesian";
  } else if (locale == "ja") {
    localeGenshinData = "japanese";
    localeGenshinDB = "Japanese";
  } else if (locale == "ko") {
    localeGenshinData = "korean";
    localeGenshinDB = "Korean";
  } else if (locale == "pt") {
    localeGenshinData = "portuguese";
    localeGenshinDB = "Portuguese";
  } else if (locale == "ru") {
    localeGenshinData = "russian";
    localeGenshinDB = "Russian";
  } else if (locale == "sp") {
    localeGenshinData = "spanish";
    localeGenshinDB = "Spanish";
  } else if (locale == "th") {
    localeGenshinData = "thai";
    localeGenshinDB = "Thai";
  } else {
    localeGenshinData = "vietnamese";
    localeGenshinDB = "Vietnamese";
  }

  var dataArtifactGenshinData = "";
  var errorArtifactGenshinData = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-data/" +
        localeGenshinData +
        "/artifacts/" +
        name
    );
    dataArtifactGenshinData = data;
    errorArtifactGenshinData = error;
  }

  var dataArtifactGenshinDB = "";
  var errorArtifactGenshinDB = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-db/" +
        localeGenshinDB +
        "/artifacts/" +
        name.replace(/_/g, "")
    );
    dataArtifactGenshinDB = data;
    errorArtifactGenshinDB = error;
  }

  var dataImages = "";
  var errorImages = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/genshin-db/image/artifacts"
    );
    dataImages = data;
    errorImages = error;
  }

  if (errorArtifactGenshinData)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataArtifactGenshinData)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );
  if (errorArtifactGenshinDB)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataArtifactGenshinDB)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );
  if (errorImages)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataImages)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Genshin | {dataArtifactGenshinData.name}</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <div className="w-96 hover:shadow-xl">
              <div
                className={`relative ${
                  dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-400" : ""
                }${
                  dataArtifactGenshinData.max_rarity == 4 ? "bg-purple-400" : ""
                } ${
                  dataArtifactGenshinData.max_rarity == 5 ? "bg-yellow-400" : ""
                } w-96 `}
              >
                <p
                  className={`text-lg text-white ${
                    dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-500" : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 4
                      ? "bg-purple-500"
                      : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 5
                      ? "bg-yellow-500"
                      : ""
                  } font-semibold px-5 py-3`}
                >
                  {dataArtifactGenshinData.flower.name}
                  {dataArtifactGenshinData.max_rarity == 3 ? " +12" : ""}
                  {dataArtifactGenshinData.max_rarity == 4 ? " +16" : ""}
                  {dataArtifactGenshinData.max_rarity == 5 ? " +20" : ""}
                </p>
                <img
                  className="w-40 h-auto float-right"
                  src={`${
                    dataImages[
                      dataArtifactGenshinData.id.replace(/_/g, "") + ".json"
                    ].flower
                  }`}
                />
                <p className="text-lg text-white font-semibold px-5 py-1">
                  {dataArtifactGenshinDB.flower.relictype}
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
                    dangerouslySetInnerHTML={createMarkup(
                      dataArtifactGenshinData.max_rarity
                    )}
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
                  {dataArtifactGenshinData.name}:
                </p>
                {dataArtifactGenshinData["1pc"] ? (
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
                      {dataArtifactGenshinData["1pc"]}
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
                        {dataArtifactGenshinData["2pc"]}
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
                        {dataArtifactGenshinData["4pc"]}
                      </div>
                    </div>
                  </div>
                )}

                <div className="font-semibold px-5 py-0">
                  <p>{dataArtifactGenshinData.flower.description}</p>
                </div>
              </div>
            </div>
            <div className="w-96 hover:shadow-xl">
              <div
                className={`relative ${
                  dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-400" : ""
                }${
                  dataArtifactGenshinData.max_rarity == 4 ? "bg-purple-400" : ""
                } ${
                  dataArtifactGenshinData.max_rarity == 5 ? "bg-yellow-400" : ""
                } w-96 `}
              >
                <p
                  className={`text-lg text-white ${
                    dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-500" : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 4
                      ? "bg-purple-500"
                      : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 5
                      ? "bg-yellow-500"
                      : ""
                  } font-semibold px-5 py-3`}
                >
                  {dataArtifactGenshinData.plume.name}
                  {dataArtifactGenshinData.max_rarity == 3 ? " +12" : ""}
                  {dataArtifactGenshinData.max_rarity == 4 ? " +16" : ""}
                  {dataArtifactGenshinData.max_rarity == 5 ? " +20" : ""}
                </p>
                <img
                  className="w-40 h-auto float-right"
                  src={`${
                    dataImages[
                      dataArtifactGenshinData.id.replace(/_/g, "") + ".json"
                    ].plume
                  }`}
                />
                <p className="text-lg text-white font-semibold px-5 py-1">
                  {dataArtifactGenshinDB.plume.relictype}
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
                    dangerouslySetInnerHTML={createMarkup(
                      dataArtifactGenshinData.max_rarity
                    )}
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
                  {dataArtifactGenshinData.name}:
                </p>
                {dataArtifactGenshinData["1pc"] ? (
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
                      {dataArtifactGenshinData["1pc"]}
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
                        {dataArtifactGenshinData["2pc"]}
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
                        {dataArtifactGenshinData["4pc"]}
                      </div>
                    </div>
                  </div>
                )}

                <div className="font-semibold px-5 py-0">
                  <p>{dataArtifactGenshinData.plume.description}</p>
                </div>
              </div>
            </div>
            <div className="w-96 hover:shadow-xl">
              <div
                className={`relative ${
                  dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-400" : ""
                }${
                  dataArtifactGenshinData.max_rarity == 4 ? "bg-purple-400" : ""
                } ${
                  dataArtifactGenshinData.max_rarity == 5 ? "bg-yellow-400" : ""
                } w-96 `}
              >
                <p
                  className={`text-lg text-white ${
                    dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-500" : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 4
                      ? "bg-purple-500"
                      : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 5
                      ? "bg-yellow-500"
                      : ""
                  } font-semibold px-5 py-3`}
                >
                  {dataArtifactGenshinData.sands.name}
                  {dataArtifactGenshinData.max_rarity == 3 ? " +12" : ""}
                  {dataArtifactGenshinData.max_rarity == 4 ? " +16" : ""}
                  {dataArtifactGenshinData.max_rarity == 5 ? " +20" : ""}
                </p>
                <img
                  className="w-40 h-auto float-right"
                  src={`${
                    dataImages[
                      dataArtifactGenshinData.id.replace(/_/g, "") + ".json"
                    ].sands
                  }`}
                />
                <p className="text-lg text-white font-semibold px-5 py-1">
                  {dataArtifactGenshinDB.sands.relictype}
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
                    dangerouslySetInnerHTML={createMarkup(
                      dataArtifactGenshinData.max_rarity
                    )}
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
                  {dataArtifactGenshinData.name}:
                </p>
                {dataArtifactGenshinData["1pc"] ? (
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
                      {dataArtifactGenshinData["1pc"]}
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
                        {dataArtifactGenshinData["2pc"]}
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
                        {dataArtifactGenshinData["4pc"]}
                      </div>
                    </div>
                  </div>
                )}

                <div className="font-semibold px-5 py-0">
                  <p>{dataArtifactGenshinData.sands.description}</p>
                </div>
              </div>
            </div>
            <div className="w-96 hover:shadow-xl">
              <div
                className={`relative ${
                  dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-400" : ""
                }${
                  dataArtifactGenshinData.max_rarity == 4 ? "bg-purple-400" : ""
                } ${
                  dataArtifactGenshinData.max_rarity == 5 ? "bg-yellow-400" : ""
                } w-96 `}
              >
                <p
                  className={`text-lg text-white ${
                    dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-500" : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 4
                      ? "bg-purple-500"
                      : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 5
                      ? "bg-yellow-500"
                      : ""
                  } font-semibold px-5 py-3`}
                >
                  {dataArtifactGenshinData.goblet.name}
                  {dataArtifactGenshinData.max_rarity == 3 ? " +12" : ""}
                  {dataArtifactGenshinData.max_rarity == 4 ? " +16" : ""}
                  {dataArtifactGenshinData.max_rarity == 5 ? " +20" : ""}
                </p>
                <img
                  className="w-40 h-auto float-right"
                  src={`${
                    dataImages[
                      dataArtifactGenshinData.id.replace(/_/g, "") + ".json"
                    ].goblet
                  }`}
                />
                <p className="text-lg text-white font-semibold px-5 py-1">
                  {dataArtifactGenshinDB.goblet.relictype}
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
                    dangerouslySetInnerHTML={createMarkup(
                      dataArtifactGenshinData.max_rarity
                    )}
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
                  {dataArtifactGenshinData.name}:
                </p>
                {dataArtifactGenshinData["1pc"] ? (
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
                      {dataArtifactGenshinData["1pc"]}
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
                        {dataArtifactGenshinData["2pc"]}
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
                        {dataArtifactGenshinData["4pc"]}
                      </div>
                    </div>
                  </div>
                )}

                <div className="font-semibold px-5 py-0">
                  <p>{dataArtifactGenshinData.goblet.description}</p>
                </div>
              </div>
            </div>
            <div className="w-96 hover:shadow-xl">
              <div
                className={`relative ${
                  dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-400" : ""
                }${
                  dataArtifactGenshinData.max_rarity == 4 ? "bg-purple-400" : ""
                } ${
                  dataArtifactGenshinData.max_rarity == 5 ? "bg-yellow-400" : ""
                } w-96 `}
              >
                <p
                  className={`text-lg text-white ${
                    dataArtifactGenshinData.max_rarity == 3 ? "bg-blue-500" : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 4
                      ? "bg-purple-500"
                      : ""
                  }${
                    dataArtifactGenshinData.max_rarity == 5
                      ? "bg-yellow-500"
                      : ""
                  } font-semibold px-5 py-3`}
                >
                  {dataArtifactGenshinData.circlet.name}
                  {dataArtifactGenshinData.max_rarity == 3 ? " +12" : ""}
                  {dataArtifactGenshinData.max_rarity == 4 ? " +16" : ""}
                  {dataArtifactGenshinData.max_rarity == 5 ? " +20" : ""}
                </p>
                <img
                  className="w-40 h-auto float-right"
                  src={`${
                    dataImages[
                      dataArtifactGenshinData.id.replace(/_/g, "") + ".json"
                    ].circlet
                  }`}
                />
                <p className="text-lg text-white font-semibold px-5 py-1">
                  {dataArtifactGenshinDB.circlet.relictype}
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
                    dangerouslySetInnerHTML={createMarkup(
                      dataArtifactGenshinData.max_rarity
                    )}
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
                  {dataArtifactGenshinData.name}:
                </p>
                {dataArtifactGenshinData["1pc"] ? (
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
                      {dataArtifactGenshinData["1pc"]}
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
                        {dataArtifactGenshinData["2pc"]}
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
                        {dataArtifactGenshinData["4pc"]}
                      </div>
                    </div>
                  </div>
                )}

                <div className="font-semibold px-5 py-0">
                  <p>{dataArtifactGenshinData.circlet.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifact;
