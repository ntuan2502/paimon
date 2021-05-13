import Link from "next/link";
import useSWR from "swr";

function CharacterCard({ characterName, localeGenshinData }) {
  function createMarkup(markup) {
    var temp = "";
    for (let i = 0; i < parseInt(markup); i++) {
      temp += `    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>`;
    }
    return { __html: temp };
  }

  const { data, error } = useSWR(
    "https://paimon-laravel.herokuapp.com/api/data/genshin-data/" +
      localeGenshinData +
      "/characters/" +
      characterName
  );

  if (error) return <div className="pt-16">failed to load</div>;
  if (!data) return <div className="pt-16">loading...</div>;

  return (
    <Link href={`/characters/${data.id}`}>
      <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 hover:shadow-xl cursor-pointer">
        <img
          className="w-96 h-auto"
          src={`/img/character/card/Character_${data.id}_Card.webp`}
        />
        <div className="mt-8">
          <p className="text-xl font-semibold my-2">{data.name}</p>
          {/* <div className="flex space-x-2 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>{data.region ? data.region : "null"}</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>
              {data.birthday[0] !== null
                ? data.birthday[0] + "/" + data.birthday[1]
                : "null"}
            </p>
          </div> */}
          <div className="border-t-2"></div>

          <div className="flex justify-between">
            <div className="my-2">
              {/* <p className="font-semibold text-base mb-2">Team Member</p> */}
              <div className="flex space-x-2">
                <div
                  className="flex h-7 w-32 text-yellow-500"
                  dangerouslySetInnerHTML={createMarkup(data.rarity)}
                />
                {/* <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="w-6 h-6 rounded-full"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                className="w-6 h-6 rounded-full"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                className="w-6 h-6 rounded-full"
              /> */}
              </div>
            </div>
            {/* <div className="my-2">
            <p className="font-semibold text-base mb-2">Progress</p>
            <div className="text-base text-gray-400 font-semibold">
              <p>34%</p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
