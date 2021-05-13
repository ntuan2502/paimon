import useSWR from "swr";

function CharacterTalentMaterials({ dataGenshinData, dataGenshinDB, name }) {
  if (name == "hutao") name = "hu_tao";
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
                            <div>
                              <div className="flex items-center">
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
                              <div>
                                {attribute.items.map((value, key) => (
                                  <div key={key} className="flex items-center">
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
                            </div>
                          </td>
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
    </div>
  );
}

export default CharacterTalentMaterials;
