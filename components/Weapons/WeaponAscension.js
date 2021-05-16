function WeaponAscension({ dataGenshinData, dataGenshinDB, name }) {
  var cost = 0;
  var mat11 = 0;
  var mat12 = 0;
  var mat13 = 0;
  var mat14 = 0;
  var mat21 = 0;
  var mat22 = 0;
  var mat23 = 0;
  var mat31 = 0;
  var mat32 = 0;
  var mat33 = 0;

  for (let index = 0; index < dataGenshinData.ascensions.length; index++) {
    if (index == 0) continue;
    cost += dataGenshinData.ascensions[index].cost;
    if (index == 1) {
      mat11 += dataGenshinData.ascensions[index].materials[0].amount;
      mat21 += dataGenshinData.ascensions[index].materials[1].amount;
      mat31 += dataGenshinData.ascensions[index].materials[2].amount;
    } else if (index == 2) {
      mat12 += dataGenshinData.ascensions[index].materials[0].amount;
      mat21 += dataGenshinData.ascensions[index].materials[1].amount;
      mat31 += dataGenshinData.ascensions[index].materials[2].amount;
    } else if (index == 3) {
      mat12 += dataGenshinData.ascensions[index].materials[0].amount;
      mat22 += dataGenshinData.ascensions[index].materials[1].amount;
      mat32 += dataGenshinData.ascensions[index].materials[2].amount;
    } else if (index == 4) {
      mat13 += dataGenshinData.ascensions[index].materials[0].amount;
      mat22 += dataGenshinData.ascensions[index].materials[1].amount;
      mat32 += dataGenshinData.ascensions[index].materials[2].amount;
    } else if (index == 5) {
      mat13 += dataGenshinData.ascensions[index].materials[0].amount;
      mat23 += dataGenshinData.ascensions[index].materials[1].amount;
      mat33 += dataGenshinData.ascensions[index].materials[2].amount;
    } else if (index == 6) {
      mat14 += dataGenshinData.ascensions[index].materials[0].amount;
      mat23 += dataGenshinData.ascensions[index].materials[1].amount;
      mat33 += dataGenshinData.ascensions[index].materials[2].amount;
    }
  }

  return (
    <div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataGenshinData.ascensions.map((attribute, index) => (
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
                          {attribute.ascensionLevel}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 flex">
                          {attribute.cost ? (
                            <div className="flex items-center w-72">
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

                          {attribute.materials[0] ? (
                            <div className="flex items-center w-72">
                              <div className="px-2">
                                {attribute.materials[0]
                                  ? attribute.materials[0].name
                                  : ""}
                              </div>
                              <img
                                src={`/img/item/${attribute.materials[0].id}.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x
                                {attribute.materials[0]
                                  ? attribute.materials[0].amount
                                  : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}

                          {attribute.materials[1] ? (
                            <div className="flex items-center w-72">
                              <div className="px-2">
                                {attribute.materials[1]
                                  ? attribute.materials[1].name
                                  : ""}
                              </div>
                              <img
                                src={`/img/item/${attribute.materials[1].id}.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x
                                {attribute.materials[1]
                                  ? attribute.materials[1].amount
                                  : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}

                          {attribute.materials[2] ? (
                            <div className="flex items-center w-72">
                              <div className="px-2">
                                {attribute.materials[2]
                                  ? attribute.materials[2].name
                                  : ""}
                              </div>
                              <img
                                src={`/img/item/${attribute.materials[2].id}.png`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x
                                {attribute.materials[2]
                                  ? attribute.materials[2].amount
                                  : "0"}
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
                        <div className="flex items-center">
                          <img
                            src={`/img/item/mora.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{cost}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[1].materials[0].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat11}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[1].materials[1].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat21}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[1].materials[2].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat31}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[3].materials[0].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat12}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[4].materials[1].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat22}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[4].materials[2].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat32}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[6].materials[0].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat13}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[6].materials[1].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat23}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascensions[6].materials[2].id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat33}</div>
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

export default WeaponAscension;
