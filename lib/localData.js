export function getLocale(language) {
  if (language == "en") return "english";
  else if (language == "chs") return "chinese-simplified";
  else if (language == "cht") return "chinese-traditional";
  else if (language == "fr") return "french";
  else if (language == "de") return "german";
  else if (language == "id") return "indonesian";
  else if (language == "ja") return "japanese";
  else if (language == "ko") return "korean";
  else if (language == "pt") return "portuguese";
  else if (language == "ru") return "russian";
  else if (language == "es") return "spanish";
  else if (language == "th") return "thai";
  else return "vietnamese";
}

export function star(markup) {
  var temp = "";
  for (let i = 0; i < parseInt(markup); i++) {
    temp += `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>`;
  }
  return { __html: temp };
}

export function skillFunction(markup) {
  var temp = markup;
  for (let i = 0; i < 50; i++) {
    if (i % 2 == 0)
      temp = temp.replace(/\*\*/, '<span style="color: #FFD780FF;">');
    else temp = temp.replace(/\*\*/, "</span> ");
  }
  temp = temp
    .replace(/·/g, "- ")
    .replace(/<span>/g, '<span style="font-weight: bold;">')
    .replace(/\n/g, "<br>");
  // .replace(/Anemo DMG/g, '<span style="color: #80FFD7FF;">Anemo DMG</span>')
  // .replace(/Hydro DMG/g, '<span style="color: #80C0FFFF;">Hydro DMG</span>')
  // .replace(/Pyro DMG/g, '<span style="color: #FF9999FF;">Pyro DMG</span>')
  // .replace(/Cryo DMG/g, '<span style="color: #99FFFFFF;">Cryo DMG</span>')
  // .replace(/Electro DMG/g, '<span style="color: #FFACFFFF;">Electro DMG</span>')
  // .replace(/Geo DMG/g, '<span style="color: #FFE699FF;">Geo DMG</span>')
  // .replace(
  //   /Nguyên Tố Phong/g,
  //   '<span style="color: #80FFD7FF;">Nguyên Tố Phong</span>'
  // )
  // .replace(
  //   /Nguyên Tố Thủy/g,
  //   '<span style="color: #80C0FFFF;">Nguyên Tố Thủy</span>'
  // )
  // .replace(
  //   /Nguyên Tố Hỏa/g,
  //   '<span style="color: #FF9999FF;">Nguyên Tố Hỏa</span>'
  // )
  // .replace(
  //   /Nguyên Tố Băng/g,
  //   '<span style="color: #99FFFFFF;">Nguyên Tố Băng</span>'
  // )
  // .replace(
  //   /Nguyên Tố Lôi/g,
  //   '<span style="color: #FFACFFFF;">Nguyên Tố Lôi</span>'
  // )
  // .replace(
  //   /Nguyên Tố Nham/g,
  //   '<span style="color: #FFE699FF;">Nguyên Tố Nham</span>'
  // );
  return { __html: temp };
}
