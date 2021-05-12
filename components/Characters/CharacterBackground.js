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

const CharacterBackground = ({ dataGenshinData, dataGenshinDB, name }) => {
  return (
    <div
      className={`rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased ${
        dataGenshinData.region == "Liyue" ? "bg-liyue" : "bg-mondstadt"
      } bg-no-repeat bg-cover bg-blend-multiply`}
    >
      <div className="md:w-1/3 w-full px-3 flex flex-row flex-wrap">
        <div className="w-full text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div className="text-2xl text-white leading-tight">
            {dataGenshinData.name}
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.title}</span>
          </div>
          <div className="text-normal text-gray-300">
            <div
              className="pb-1 flex w-20 text-yellow-500"
              dangerouslySetInnerHTML={createMarkup(dataGenshinData.rarity)}
            />
          </div>
          <br />
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.weapon_type} - {dataGenshinData.element}</span>
          </div>
          <br />
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinDB.birthday}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.constellation}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.affiliation}</span>
          </div>
          <br />
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.cv.english}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.cv.chinese}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.cv.japanese}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{dataGenshinData.cv.korean}</span>
          </div>
          <br />
          <div className="text-sm text-gray-300 pt-3 md:pt-0 bottom-0 right-0">
            {dataGenshinData.description}
          </div>
          <br />
        </div>
      </div>

      <div className="md:w-2/3 w-full flex justify-center items-center">
        <img
          className="rounded-lg antialiased"
          src={`/img/character/1/backgrounds/${name}.png`}
        />
      </div>
    </div>
  );
};

export default CharacterBackground;
