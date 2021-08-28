import { skillFunction } from "../../lib/localData";

export default function CharacterConstellation({ id, constellations }) {
  return (
    <div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${id}/constellation_${constellations[0].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {constellations[0].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={skillFunction(
                constellations[0].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${id}/constellation_${constellations[1].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {constellations[1].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={skillFunction(
                constellations[1].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${id}/constellation_${constellations[2].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {constellations[2].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={skillFunction(
                constellations[2].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${id}/constellation_${constellations[3].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {constellations[3].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={skillFunction(
                constellations[3].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${id}/constellation_${constellations[4].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {constellations[4].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={skillFunction(
                constellations[4].description
              )}
            />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="mb-2 items-start px-4">
          <img
            className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
            src={`/img/character/skills/${id}/constellation_${constellations[5].id}.webp`}
            alt=""
          />
          <div>
            <p className="font-black font-display text-xl h-16 flex items-center">
              {constellations[5].name}
            </p>
            <div
              className="py-2"
              dangerouslySetInnerHTML={skillFunction(
                constellations[5].description
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
