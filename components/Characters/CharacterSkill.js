import { skillFunction } from "../../lib/localData";

export default function CharacterSkill({ id, skills }) {
  return (
    <div>
      {skills.map((value, key) => (
        <div className="py-4 rounded-xl bg-item flex flex-col mb-4" key={key}>
          <div className="mb-2 items-start px-4">
            <img
              className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
              src={`/img/character/skills/${id}/talent_${skills[key].id.replace(
                "normal_attack_",
                ""
              )}.webp`}
              alt=""
            />
            <div>
              <p className="font-black font-display text-xl h-16 flex items-center">
                {skills[key].name}
              </p>
              <div
                className="py-2"
                dangerouslySetInnerHTML={skillFunction(skills[key].description)}
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
                        {skills[key].attributes[0][1].map((value, key) => (
                          <th
                            key={key}
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider"
                          >
                            {key + 1}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {skills[key].attributes.map((attribute, index) => (
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
                          {skills[key].attributes[0][1].map((value, key) => (
                            <td
                              key={key}
                              className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                              {attribute[1][key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
