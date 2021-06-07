function CharacterCardUp({ name, nameCard, rarity }) {
  function createMarkup(markup) {
    var temp = "";
    for (let i = 0; i < parseInt(markup); i++) {
      temp += `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>`;
    }
    return { __html: temp };
  }

  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 hover:shadow-xl cursor-pointer">
      <img
        className="w-96 h-auto"
        src={`/img/character/card/Character_${nameCard}_Card.webp`}
      />
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">{name}</p>
        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            {/* <p className="font-semibold text-base mb-2">Team Member</p> */}
            <div className="flex space-x-2">
              <div
                className="flex h-7 w-32 text-yellow-500"
                dangerouslySetInnerHTML={createMarkup(rarity)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCardUp;
