import Head from "next/head";
import Link from "next/link";
const datas = [
  {
    name: "",
    description: "",
    imageSrc:
      "https://webstatic-sea.mihoyo.com/upload/static-resource/2021/08/17/88c0d39f0d25503b262acc92ae78b724_8731313710328186113.jpg",
    imageAlt: "",
    href: "/preview/2.1",
  },
  {
    name: "",
    description: "",
    imageSrc:
      "https://webstatic-sea.mihoyo.com/upload/event/2021/07/13/e876bbcd988710f08eef28968f4aa7bd_7604367289228764240.jpg",
    imageAlt: "",
    href: "/preview/2.0",
  },
  {
    name: "",
    description: "",
    imageSrc:
      "https://webstatic-sea.mihoyo.com/upload/static-resource/2021/05/31/af57ac20733e433cac9a25425a65012c_8370422078331104123.jpg",
    imageAlt: "",
    href: "/preview/1.6",
  },
  {
    name: "",
    description: "",
    imageSrc:
      "https://webstatic-sea.mihoyo.com/upload/static-resource/2021/04/19/e9ec2999302e4748e8ff81ec00086d3f_2210485654457984806.png",
    imageAlt: "",
    href: "/preview/1.5",
  },
  {
    name: "",
    description: "",
    imageSrc:
      "https://webstatic-sea.mihoyo.com/upload/static-resource/2021/03/08/b0d00e90531d6c576ff73c08437e8354_1550357174888561878.jpg",
    imageAlt: "",
    href: "/preview/1.4",
  },
  {
    name: "",
    description: "",
    imageSrc:
      "https://webstatic-sea.mihoyo.com/upload/static-resource/2021/01/26/d2eedd86177b641984b3e3c8435ed8f9_6983180864625434706.png",
    imageAlt: "",
    href: "/preview/1.3",
  },
  {
    name: "",
    description: "",
    imageSrc:
      "https://uploadstatic-sea.mihoyo.com/hk4e/upload/event/202012/share_1608258853_8099.png",
    imageAlt: "",
    href: "/preview/1.2",
  },
];
export default function PreviewPage({ url }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Genshin Impact Preview</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900"></h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {datas.map((data, index) => (
              <div key={index} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={data.imageSrc}
                    alt={data.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={data.href}>
                    <a>
                      <span className="absolute inset-0" />
                      {data.name}
                    </a>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
