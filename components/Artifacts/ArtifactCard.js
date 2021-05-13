import Link from "next/link";
import useSWR from "swr";

function ArtifactCard({ artifactName, localeGenshinData }) {
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

  var dataArtifact = "";
  var errorArtifact = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/data/genshin-data/" +
        localeGenshinData +
        "/artifacts/" +
        artifactName
    );
    dataArtifact = data;
    errorArtifact = error;
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

  if (errorArtifact)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataArtifact)
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
    <Link href={`/artifacts/${dataArtifact.id}`}>
      <div className="w-96 hover:shadow-xl cursor-pointer">
        <div
          className={`relative ${
            dataArtifact.max_rarity == 3 ? "bg-blue-400" : ""
          }${dataArtifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
            dataArtifact.max_rarity == 5 ? "bg-yellow-400" : ""
          } w-96 `}
        >
          <p
            className={`text-2xl text-white ${
              dataArtifact.max_rarity == 3 ? "bg-blue-500" : ""
            }${dataArtifact.max_rarity == 4 ? "bg-purple-500" : ""}${
              dataArtifact.max_rarity == 5 ? "bg-yellow-500" : ""
            } font-semibold px-5 py-3`}
          >
            {dataArtifact.name}
          </p>
          <img
            className="w-40 h-auto float-right"
            src={`${
              dataImages[dataArtifact.id.replace(/_/g, "") + ".json"].flower
                ? dataImages[dataArtifact.id.replace(/_/g, "") + ".json"].flower
                : dataImages[dataArtifact.id.replace(/_/g, "") + ".json"]
                    .circlet
            }`}
          />
          <p className="text-lg text-white font-semibold px-5 py-1">
            Artifact Set
          </p>
          <div className="px-5 pt-24 py-2">
            <div
              className="flex h-7 w-32 text-yellow-300"
              dangerouslySetInnerHTML={createMarkup(dataArtifact.max_rarity)}
            />
          </div>

          <div className="border-t-2 border-black"></div>
        </div>
        <div className="bg-gray-200 pb-3 text-lg">
          <p className="text-lg text-green-400 font-semibold px-5 pt-5 pb-1">
            {dataArtifact.name}:
          </p>
          {dataArtifact["1pc"] ? (
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
              <div className="px-5 font-semibold">{dataArtifact["1pc"]}</div>
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
                <div className="px-5 font-semibold">{dataArtifact["2pc"]}</div>
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
                <div className="px-5 font-semibold">{dataArtifact["4pc"]}</div>
              </div>
            </div>
          )}

          <div className="font-bold px-5 py-0">
            <p>Set Includes:</p>

            {dataArtifact.flower ? <p>- {dataArtifact.flower.name}</p> : ""}
            {dataArtifact.plume ? <p>- {dataArtifact.plume.name}</p> : ""}
            {dataArtifact.sands ? <p>- {dataArtifact.sands.name}</p> : ""}
            {dataArtifact.goblet ? <p>- {dataArtifact.goblet.name}</p> : ""}
            {dataArtifact.circlet ? <p>- {dataArtifact.circlet.name}</p> : ""}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArtifactCard;
