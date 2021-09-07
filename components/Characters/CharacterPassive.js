import { skillFunction } from "../../lib/localData";

export default function CharacterPassive({ id, passives }) {
  return (
    <div>
      {passives.map((value, key) => (
        <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
          <div className=" mb-2 items-start px-4">
            <img
              className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
              src={`/img/character/skills/${id}/talent_${passives[key].id}.webp`}
              alt=""
            />
            <div>
              <p className="font-black font-display text-xl h-16 flex items-center">
                {passives[key].name}
              </p>
              <div
                className="py-2"
                dangerouslySetInnerHTML={skillFunction(
                  passives[key].description
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
