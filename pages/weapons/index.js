import { useRouter } from "next/router";
import WeaponCard from "../../components/Weapons/WeaponCard";
import Head from "next/head";
import useSWR from "swr";

//https://paimon-laravel.herokuapp.com/api/data/genshin-data/vietnamese/weapons
const weapons = [
  "alley_hunter",
  "amenoma_kageuchi",
  "amos_bow",
  "apprentices_notes",
  "aquila_favonia",
  "beginners_protector",
  "black_tassel",
  "blackcliff_agate",
  "blackcliff_longsword",
  "blackcliff_pole",
  "blackcliff_slasher",
  "blackcliff_warbow",
  "bloodtainted_greatsword",
  "compound_bow",
  "cool_steel",
  "crescent_pike",
  "dark_iron_sword",
  "deathmatch",
  "debate_club",
  "dodoco_tales",
  "dragons_bane",
  "dragonspine_spear",
  "dull_blade",
  "elegy_for_the_end",
  "emerald_orb",
  "eye_of_perception",
  "favonius_codex",
  "favonius_greatsword",
  "favonius_lance",
  "favonius_sword",
  "favonius_warbow",
  "ferrous_shadow",
  "festering_desire",
  "fillet_blade",
  "freedomsworn",
  "frostbearer",
  "hakushin_ring",
  "halberd",
  "hamayumi",
  "harbinger_of_dawn",
  "hunters_bow",
  "iron_point",
  "iron_sting",
  "katsuragikiri_nagamasa",
  "kitain_cross_spear",
  "lions_roar",
  "lithic_blade",
  "lithic_spear",
  "lost_prayer_to_the_sacred_winds",
  "magic_guide",
  "mappa_mare",
  "memory_of_dust",
  "messenger",
  "mistsplitter_reforged",
  "mitternachts_waltz",
  "old_mercs_pal",
  "otherworldly_story",
  "pocket_grimoire",
  "primordial_jade_cutter",
  "primordial_jade_wingedspear",
  "prototype_amber",
  "prototype_archaic",
  "prototype_crescent",
  "prototype_rancour",
  "prototype_starglitter",
  "rainslasher",
  "raven_bow",
  "recurve_bow",
  "royal_bow",
  "royal_greatsword",
  "royal_grimoire",
  "royal_longsword",
  "royal_spear",
  "rust",
  "sacrificial_bow",
  "sacrificial_fragments",
  "sacrificial_greatsword",
  "sacrificial_sword",
  "seasoned_hunters_bow",
  "serpent_spine",
  "sharpshooters_oath",
  "silver_sword",
  "skyrider_greatsword",
  "skyrider_sword",
  "skyward_atlas",
  "skyward_blade",
  "skyward_harp",
  "skyward_pride",
  "skyward_spine",
  "slingshot",
  "snowtombed_starsilver",
  "solar_pearl",
  "song_of_broken_pines",
  "staff_of_homa",
  "summit_shaper",
  "sword_of_descension",
  "the_alley_flash",
  "the_bell",
  "the_black_sword",
  "the_flute",
  "the_stringless",
  "the_unforged",
  "the_viridescent_hunt",
  "the_widsith",
  "thrilling_tales_of_dragon_slayers",
  "thundering_pulse",
  "travelers_handy_sword",
  "twin_nephrite",
  "vortex_vanquisher",
  "waster_greatsword",
  "white_iron_greatsword",
  "white_tassel",
  "whiteblind",
  "windblume_ode",
  "wine_and_song",
  "wolfs_gravestone",
];

const Weapons = () => {
  const { locale } = useRouter();

  var localeGenshinData = "vietnamese";
  if (locale == "en") localeGenshinData = "english";
  else if (locale == "chs") localeGenshinData = "chinese-simplified";
  else if (locale == "cht") localeGenshinData = "chinese-traditional";
  else if (locale == "fr") localeGenshinData = "french";
  else if (locale == "de") localeGenshinData = "german";
  else if (locale == "id") localeGenshinData = "indonesian";
  else if (locale == "ja") localeGenshinData = "japanese";
  else if (locale == "ko") localeGenshinData = "korean";
  else if (locale == "pt") localeGenshinData = "portuguese";
  else if (locale == "ru") localeGenshinData = "russian";
  else if (locale == "sp") localeGenshinData = "spanish";
  else if (locale == "th") localeGenshinData = "thai";
  else localeGenshinData = "vietnamese";

  var dataImages = "";
  var errorImages = "";
  if (1) {
    const { data, error } = useSWR(
      "https://paimon-laravel.herokuapp.com/api/genshin-db/image/weapons"
    );
    dataImages = data;
    errorImages = error;
  }
  if (errorImages)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          failed to load
        </div>
      </div>
    );
  if (!dataImages)
    return (
      <div className="bg-white p-5 sm:p-3">
        <div className="flex justify-center items-center mx-auto h-screen w-full sm:w-5/6">
          loading...
        </div>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Genshin | Weapons</title>
      </Head>
      <div className="py-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {weapons.map((weaponName, index) => (
              <WeaponCard
                weaponName={weaponName}
                localeGenshinData={localeGenshinData}
                dataImages={dataImages}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapons;
