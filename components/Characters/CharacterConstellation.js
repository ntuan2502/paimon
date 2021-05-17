import useSWR from "swr";

function createMarkup(markup) {
  var temp = markup;
  for (let i = 0; i < 50; i++) {
    if (i % 2 == 0)
      temp = temp.replace(/\*\*/, '<span style="color: #FFD780FF;">');
    else temp = temp.replace(/\*\*/, "</span> ");
  }
  temp = temp
    .replace(/<span>/g, '<span style="font-weight: bold;">')
    .replace(/\n/g, "<br>")
    .replace(/·/g, "- ")
    .replace(/Anemo/g, '<span style="color: #80FFD7FF;">Anemo</span>')
    .replace(/Hydro/g, '<span style="color: #80C0FFFF;">Hydro</span>')
    .replace(/Pyro/g, '<span style="color: #FF9999FF;">Pyro</span>')
    .replace(/Cryo/g, '<span style="color: #99FFFFFF;">Cryo</span>')
    .replace(/Electro/g, '<span style="color: #FFACFFFF;">Electro</span>')
    .replace(/Geo/g, '<span style="color: #FFE699FF;">Geo</span>')
    .replace(
      /Nguyên Tố Phong/g,
      '<span style="color: #80FFD7FF;">Nguyên Tố Phong</span>'
    )
    .replace(
      /Nguyên Tố Thủy/g,
      '<span style="color: #80C0FFFF;">Nguyên Tố Thủy</span>'
    )
    .replace(
      /Nguyên Tố Hỏa/g,
      '<span style="color: #FF9999FF;">Nguyên Tố Hỏa</span>'
    )
    .replace(
      /Nguyên Tố Băng/g,
      '<span style="color: #99FFFFFF;">Nguyên Tố Băng</span>'
    )
    .replace(
      /Nguyên Tố Lôi/g,
      '<span style="color: #FFACFFFF;">Nguyên Tố Lôi</span>'
    )
    .replace(
      /Nguyên Tố Nham/g,
      '<span style="color: #FFE699FF;">Nguyên Tố Nham</span>'
    );
  return { __html: temp };
}

function CharacterConstellation({ dataGenshinData, dataGenshinDB }) {
  var name = dataGenshinData.id;
  if (name == "traveler_anemo") name = "lumine";
  else if (name == "traveler_geo") name = "aether";

  return (
    <div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/constellation_${dataGenshinData.constellations[0].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.constellations[0].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.constellations[0].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/constellation_${dataGenshinData.constellations[1].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.constellations[1].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.constellations[1].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/constellation_${dataGenshinData.constellations[2].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.constellations[2].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.constellations[2].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/constellation_${dataGenshinData.constellations[3].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.constellations[3].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.constellations[3].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/constellation_${dataGenshinData.constellations[4].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.constellations[4].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.constellations[4].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/constellation_${dataGenshinData.constellations[5].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.constellations[5].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.constellations[5].description
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterConstellation;
