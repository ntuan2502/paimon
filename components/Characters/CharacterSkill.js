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

function CharacterSkill({ dataGenshinData, dataGenshinDB, name }) {
  if (name == "hutao") name = "hu_tao";
  return (
    <div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/talent_${dataGenshinData.skills[0].id.replace("normal_attack_", "")}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.skills[0].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.skills[0].description
              )}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="bg-red-200">
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Level</span>
                      </th>
                      {dataGenshinData.skills[0].attributes[0][1].map(
                        (value, key) => (
                          <th
                            key={key}
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider"
                          >
                            {key + 1}
                          </th>
                        )
                      )}

                      {/* <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataGenshinData.skills[0].attributes.map(
                      (attribute, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 != 0 ? "bg-green-100" : "bg-blue-100"
                          }`}
                        >
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold ${
                              index % 2 != 0 ? "bg-green-200" : "bg-blue-200"
                            }`}
                          >
                            {attribute[0]}
                          </td>
                          {dataGenshinData.skills[0].attributes[0][1].map(
                            (value, key) => (
                              <td
                                key={key}
                                className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                              >
                                {attribute[1][key]}
                              </td>
                            )
                          )}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/talent_${dataGenshinData.skills[1].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.skills[1].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.skills[1].description
              )}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="bg-red-200">
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Level</span>
                      </th>
                      {dataGenshinData.skills[1].attributes[0][1].map(
                        (value, key) => (
                          <th
                            key={key}
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider"
                          >
                            {key + 1}
                          </th>
                        )
                      )}

                      {/* <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataGenshinData.skills[1].attributes.map(
                      (attribute, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 != 0 ? "bg-green-100" : "bg-blue-100"
                          }`}
                        >
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold ${
                              index % 2 != 0 ? "bg-green-200" : "bg-blue-200"
                            }`}
                          >
                            {attribute[0]}
                          </td>
                          {dataGenshinData.skills[1].attributes[0][1].map(
                            (value, key) => (
                              <td
                                key={key}
                                className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                              >
                                {attribute[1][key]}
                              </td>
                            )
                          )}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${name}/talent_${dataGenshinData.skills[2].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {dataGenshinData.skills[2].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={createMarkup(
                dataGenshinData.skills[2].description
              )}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="bg-red-200">
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Level</span>
                      </th>
                      {dataGenshinData.skills[2].attributes[0][1].map(
                        (value, key) => (
                          <th
                            key={key}
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider"
                          >
                            {key + 1}
                          </th>
                        )
                      )}

                      {/* <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataGenshinData.skills[2].attributes.map(
                      (attribute, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 != 0 ? "bg-green-100" : "bg-blue-100"
                          }`}
                        >
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold ${
                              index % 2 != 0 ? "bg-green-200" : "bg-blue-200"
                            }`}
                          >
                            {attribute[0]}
                          </td>
                          {dataGenshinData.skills[2].attributes[0][1].map(
                            (value, key) => (
                              <td
                                key={key}
                                className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                              >
                                {attribute[1][key]}
                              </td>
                            )
                          )}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {dataGenshinData.skills[3] ? (
        <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
          <div className="mb-2 items-start px-4">
            <img
              className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
              src={`/img/character/skills/${name}/talent_${dataGenshinData.skills[3].id}.webp`}
              alt=""
            />
            <div>
              <p className="font-black font-display text-xl h-16 flex items-center">
                {dataGenshinData.skills[3].name}
              </p>
              <div
                className="py-2"
                dangerouslySetInnerHTML={createMarkup(
                  dataGenshinData.skills[3].description
                )}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="bg-red-200">
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Level</span>
                        </th>
                        {dataGenshinData.skills[3].attributes[0][1].map(
                          (value, key) => (
                            <th
                              key={key}
                              scope="col"
                              className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider"
                            >
                              {key + 1}
                            </th>
                          )
                        )}

                        {/* <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dataGenshinData.skills[3].attributes.map(
                        (attribute, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 != 0 ? "bg-green-100" : "bg-blue-100"
                            }`}
                          >
                            <td
                              className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold ${
                                index % 2 != 0 ? "bg-green-200" : "bg-blue-200"
                              }`}
                            >
                              {attribute[0]}
                            </td>
                            {dataGenshinData.skills[3].attributes[0][1].map(
                              (value, key) => (
                                <td
                                  key={key}
                                  className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                                >
                                  {attribute[1][key]}
                                </td>
                              )
                            )}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CharacterSkill;
