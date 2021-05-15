function CharacterAscension({ dataGenshinData, dataGenshinDB, name }) {
  var cost = 0;
  var mat11 = 0;
  var mat12 = 0;
  var mat13 = 0;
  var mat14 = 0;
  var mat2 = 0;
  var mat3 = 0;
  var mat41 = 0;
  var mat42 = 0;
  var mat43 = 0;
  for (let index = 0; index < dataGenshinData.ascension.length; index++) {
    cost += dataGenshinData.ascension[index].cost
      ? dataGenshinData.ascension[index].cost
      : 0;
    mat2 += dataGenshinData.ascension[index].mat2
      ? dataGenshinData.ascension[index].mat2.amount
      : 0;
    mat3 += dataGenshinData.ascension[index].mat3
      ? dataGenshinData.ascension[index].mat3.amount
      : 0;
    if (index == 0 || index == 1)
      mat41 += dataGenshinData.ascension[index].mat4
        ? dataGenshinData.ascension[index].mat4.amount
        : 0;
    else if (index == 2 || index == 3)
      mat42 += dataGenshinData.ascension[index].mat4
        ? dataGenshinData.ascension[index].mat4.amount
        : 0;
    else
      mat43 += dataGenshinData.ascension[index].mat4
        ? dataGenshinData.ascension[index].mat4.amount
        : 0;
    if (index == 0)
      mat11 += dataGenshinData.ascension[index].mat1
        ? dataGenshinData.ascension[index].mat1.amount
        : 0;
    else if (index == 1 || index == 2)
      mat12 += dataGenshinData.ascension[index].mat1
        ? dataGenshinData.ascension[index].mat1.amount
        : 0;
    else if (index == 3 || index == 4)
      mat13 += dataGenshinData.ascension[index].mat1
        ? dataGenshinData.ascension[index].mat1.amount
        : 0;
    else
      mat14 += dataGenshinData.ascension[index].mat1
        ? dataGenshinData.ascension[index].mat1.amount
        : 0;
  }
  if (name == "hutao") name = "hu_tao";
  return (
    <div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  {/* <thead className="bg-gray-50">
                    <tr className="bg-red-200 text-center">
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Level</span>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs text-gray-500 font-bold capitalize tracking-wider"
                      >
                        <div className="flex justify-center items-center">
                          <div className="px-2">Mora</div>
                          <img
                            src={`/img/item/mora.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs text-gray-500 font-bold capitalize tracking-wider"
                      >
                        <div className="flex justify-center items-center">
                          <div className="px-2">
                            {dataGenshinData.ascension[1].mat1.name}
                          </div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat1.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                        </div>
                      </th>
                      {dataGenshinData.ascension[1].mat2 ? (
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs text-gray-500 font-bold capitalize tracking-wider"
                        >
                          <div className="flex justify-center items-center">
                            <div className="px-2">
                              {dataGenshinData.ascension[1].mat2.name}
                            </div>
                            <img
                              src={`/img/item/${dataGenshinData.ascension[1].mat2.id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                          </div>
                        </th>
                      ) : (
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs text-gray-500 font-bold capitalize tracking-wider"
                        >
                          <div className="flex justify-center items-center">
                            <div className="px-2">null</div>
                          </div>
                        </th>
                      )}

                      <th
                        scope="col"
                        className="px-6 py-3 text-xs text-gray-500 font-bold capitalize tracking-wider"
                      >
                        <div className="flex justify-center items-center">
                          <div className="px-2">
                            {dataGenshinData.ascension[1].mat3.name}
                          </div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat3.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs text-gray-500 font-bold capitalize tracking-wider"
                      >
                        <div className="flex justify-center items-center">
                          <div className="px-2">
                            {dataGenshinData.ascension[1].mat4.name}
                          </div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat4.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                        </div>
                      </th>
                    </tr>
                  </thead> */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataGenshinData.ascension.map((attribute, index) => (
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
                          {attribute.ascension} [{attribute.level[0]} -{" "}
                          {attribute.level[1]}]
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.cost ? (
                            <div className="flex justify-end items-center w-64">
                              <div className="px-2">Mora</div>
                              <img
                                src={`/img/item/mora.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.cost ? attribute.cost : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat1 ? (
                            <div className="flex justify-end items-center w-64">
                              <div className="px-2">
                                {attribute.mat1 ? attribute.mat1.name : ""}
                              </div>
                              <img
                                src={`/img/item/${attribute.mat1.id}.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat1 ? attribute.mat1.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat2 ? (
                            <div className="flex justify-end items-center w-64">
                              <div className="px-2">
                                {attribute.mat2 ? attribute.mat2.name : ""}
                              </div>
                              <img
                                src={`/img/item/${attribute.mat2.id}.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat2 ? attribute.mat2.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat3 ? (
                            <div className="flex justify-end items-center w-64">
                              <div className="px-2">
                                {attribute.mat3 ? attribute.mat3.name : ""}
                              </div>
                              <img
                                src={`/img/item/${attribute.mat3.id}.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat3 ? attribute.mat3.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat4 ? (
                            <div className="flex justify-end items-center w-64">
                              <div className="px-2">
                                {attribute.mat4 ? attribute.mat4.name : ""}
                              </div>
                              <img
                                src={`/img/item/${attribute.mat4.id}.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat4 ? attribute.mat4.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr className={`bg-red-300`}>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold bg-red-400`}
                      >
                        Total
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex justify-end items-center">
                          <div className="px-2">Mora</div>
                          <img
                            src={`/img/item/mora.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{cost}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex justify-end items-center">
                          <img
                            src={`/img/item/${dataGenshinData.ascension[0].mat1.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat11}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat1.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat12}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[3].mat1.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat13}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[4].mat1.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat14}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {dataGenshinData.ascension[1].mat2 ? (
                          <div className="flex justify-end items-center">
                            <div className="px-2">
                              {dataGenshinData.ascension[1].mat2.name}
                            </div>
                            <img
                              src={`/img/item/${dataGenshinData.ascension[1].mat2.id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat2}</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex justify-end items-center">
                          <div className="px-2">
                            {dataGenshinData.ascension[1].mat3
                              ? dataGenshinData.ascension[1].mat3.name
                              : ""}
                          </div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat3.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat3}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex justify-end items-center">
                          <img
                            src={`/img/item/${dataGenshinData.ascension[0].mat4.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat41}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[2].mat4.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat42}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[4].mat4.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat43}</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterAscension;
