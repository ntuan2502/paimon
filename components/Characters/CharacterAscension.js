import useSWR from "swr";

function CharacterAscension({ dataGenshinData, dataGenshinDB, name }) {
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
                      {/* {dataGenshinData.ascension.map(
                        (value, key) => (
                          <th
                            key={key}
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider"
                          >
                            {value.ascension}
                          </th>
                        )
                      )} */}
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
                          <div className="px-2">{dataGenshinData.ascension[1].mat1.name}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat1.id}.png`}
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
                          <div className="px-2">{dataGenshinData.ascension[1].mat2.name}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat2.id}.png`}
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
                          <div className="px-2">{dataGenshinData.ascension[1].mat3.name}</div>
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
                          <div className="px-2">{dataGenshinData.ascension[1].mat4.name}</div>
                          <img
                            src={`/img/item/${dataGenshinData.ascension[1].mat4.id}.png`}
                            className="w-auto h-10"
                            alt=""
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-center">
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
                          {attribute.cost}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat1.amount}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat2 ? attribute.mat2.amount : "0"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat3.amount}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {attribute.mat4.amount}
                        </td>
                      </tr>
                    ))}
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
