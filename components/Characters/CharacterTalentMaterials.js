function CharacterTalentMaterials({ dataGenshinData, dataGenshinDB, name }) {

  var cost = 0;
  var mat11 = 0;
  var mat12 = 0;
  var mat13 = 0;

  var mat121 = 0;
  var mat122 = 0;
  var mat123 = 0;
  var mat131 = 0;
  var mat132 = 0;
  var mat133 = 0;

  var mat21 = 0;
  var mat22 = 0;
  var mat23 = 0;
  var mat3 = 0;
  var mat4 = 0;

  for (
    let index = 0;
    index < dataGenshinData.talent_materials.length;
    index++
  ) {
    cost += dataGenshinData.talent_materials[index].cost;

    if (name != "aether" && name != "lumine") {
      if (index == 0) {
        mat11 += dataGenshinData.talent_materials[index].items[0].amount;
        mat21 += dataGenshinData.talent_materials[index].items[1].amount;
      } else if (index == 1 || index == 2 || index == 3 || index == 4) {
        mat12 += dataGenshinData.talent_materials[index].items[0].amount;
        mat22 += dataGenshinData.talent_materials[index].items[1].amount;
      } else {
        mat13 += dataGenshinData.talent_materials[index].items[0].amount;
        mat23 += dataGenshinData.talent_materials[index].items[1].amount;
        mat3 += dataGenshinData.talent_materials[index].items[2].amount;
        if (index == dataGenshinData.talent_materials.length - 1)
          mat4 += dataGenshinData.talent_materials[index].items[3].amount;
      }
    } else {
      if (index == 0) {
        mat11 += dataGenshinData.talent_materials[index].items[0].amount;
        mat21 += dataGenshinData.talent_materials[index].items[1].amount;
      } else if (index == 1 || index == 4) {
        mat121 += dataGenshinData.talent_materials[index].items[0].amount;
        mat22 += dataGenshinData.talent_materials[index].items[1].amount;
      } else if (index == 2) {
        mat122 += dataGenshinData.talent_materials[index].items[0].amount;
        mat22 += dataGenshinData.talent_materials[index].items[1].amount;
      } else if (index == 3) {
        mat123 += dataGenshinData.talent_materials[index].items[0].amount;
        mat22 += dataGenshinData.talent_materials[index].items[1].amount;
      } else {
        mat23 += dataGenshinData.talent_materials[index].items[1].amount;
        mat3 += dataGenshinData.talent_materials[index].items[2].amount;
        if (index == dataGenshinData.talent_materials.length - 1)
          mat4 += dataGenshinData.talent_materials[index].items[3].amount;
        if (index == 5 || index == 8) {
          mat131 += dataGenshinData.talent_materials[index].items[0].amount;
        } else if (index == 6) {
          mat132 += dataGenshinData.talent_materials[index].items[0].amount;
        } else if (index == 7) {
          mat133 += dataGenshinData.talent_materials[index].items[0].amount;
        }
      }
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
                  <thead className="bg-gray-50">
                    <tr className="bg-red-200 text-center">
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Level</span>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {dataGenshinData.talent_materials.map(
                      (attribute, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2 != 0 ? "bg-green-100" : "bg-blue-100"
                          }`}
                        >
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold text-center ${
                              index % 2 != 0 ? "bg-green-200" : "bg-blue-200"
                            }`}
                          >
                            {attribute.level}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex">
                              <div className="flex items-center w-48">
                                <img
                                  src={`/img/item/mora.png`}
                                  className="w-10 h-auto"
                                  alt=""
                                />
                                <div className="px-2 flex">
                                  Mora
                                  <div className="font-bold px-1">
                                    x{attribute.cost}
                                  </div>
                                </div>
                              </div>
                              {attribute.items.map((value, key) => (
                                <div key={key} className="flex items-center w-72">
                                  <img
                                    src={`/img/item/${value.id}.png`}
                                    className="w-10 h-auto"
                                    alt=""
                                  />
                                  <div className="px-2 flex">
                                    {value.name}
                                    <div className="font-bold px-1">
                                      x{value.amount}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                    <tr className={`bg-red-400`}>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-bold bg-red-500 text-center`}
                      >
                        Total
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        {name != "aether" && name != "lumine" ? (
                          <div className="flex items-center">
                            <img
                              src={`/img/item/mora.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{cost}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat11}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat21}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat12}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat22}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat13}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat23}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[2].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[3].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat4}</div>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <img
                              src={`/img/item/mora.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{cost}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat11}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat21}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat121}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[3].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat123}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[2].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat122}</div>

                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat22}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[5].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat131}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[7].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat133}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[6].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat132}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[5].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat22}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[2].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[3].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat4}</div>
                          </div>
                        )}
                      </td>
                    </tr>
                    <tr className={`bg-green-400`}>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm text-white font-bold bg-green-500 text-center`}
                      >
                        Total x3
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                        {name != "aether" && name != "lumine" ? (
                          <div className="flex items-center">
                            <img
                              src={`/img/item/mora.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{cost*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat11*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat21*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat12*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat22*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat13*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat23*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[2].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat3*3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[3].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat4*3}</div>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <img
                              src={`/img/item/mora.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{cost}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat11}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[0].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat21}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat121}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[3].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat123}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[2].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat122}</div>

                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[1].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat22}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[5].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat131}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[7].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat133}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[6].items[0].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat132}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[5].items[1].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat22}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[2].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat3}</div>
                            <img
                              src={`/img/item/${dataGenshinData.talent_materials[8].items[3].id}.png`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat4}</div>
                          </div>
                        )}
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

export default CharacterTalentMaterials;
