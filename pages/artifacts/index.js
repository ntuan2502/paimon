import ArtifactCard from "../../components/Artifacts/ArtifactCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import { getLocale } from "../../lib/localData";

export default function ArtifactsPage({ artifacts }) {
  return (
    <div>
      <Head>
        <title>Genshin | Artifacts</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {artifacts.map((artifact, index) => (
              <ArtifactCard artifact={artifact} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const locale = context.locale;
  const genshinData = new GenshinData({ language: getLocale(locale) });
  const artifacts = await genshinData.artifacts();

  return {
    props: {
      artifacts,
    },
  };
}
