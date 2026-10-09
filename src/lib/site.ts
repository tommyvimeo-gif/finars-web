export type Category = "stanovanjsko" | "javno" | "poslovno" | "sport" | "interier";

export type Project = {
  year: string;
  title: string;
  category: Category;
  place: string;
  image: string;
};

export const PHOTOS = {
  hisa: "/photos/hisa.jpg",
  interier: "/photos/interier.jpg",
  stolpnica: "/photos/stolpnica.jpg",
  bazen: "/photos/bazen.jpg",
  dom: "/photos/dom.jpg",
  trgovina: "/photos/trgovina.jpg",
} as const;

export const projects: Project[] = [
  { year: "2016", title: "Parkirna hiša Sallaumines", category: "poslovno", place: "Francija", image: PHOTOS.stolpnica },
  { year: "2016", title: "Notranja oprema študentskega doma Ptič", category: "interier", place: "Portorož", image: PHOTOS.interier },
  { year: "2015", title: "Prenova poslovalnice NLB Trbovlje", category: "poslovno", place: "Trbovlje", image: PHOTOS.trgovina },
  { year: "2015", title: "Prenova študentskega doma Ptič", category: "javno", place: "Portorož", image: PHOTOS.dom },
  { year: "2014", title: "Prizidek vrtca Mojca", category: "javno", place: "Ljubljana", image: PHOTOS.dom },
  { year: "2014", title: "Študentski dom DŠD Koper", category: "javno", place: "Koper", image: PHOTOS.dom },
  { year: "2013", title: "Hiša v gozdu", category: "stanovanjsko", place: "Slovenija", image: PHOTOS.hisa },
  { year: "2013", title: "Olimpijski bazenski kompleks", category: "sport", place: "Libija", image: PHOTOS.bazen },
  { year: "2013", title: "Prenova OŠ Revirski borci", category: "javno", place: "Trbovlje", image: PHOTOS.dom },
  { year: "2013", title: "Stanovanjsko naselje Podčetrtek", category: "stanovanjsko", place: "Podčetrtek", image: PHOTOS.hisa },
  { year: "2013", title: "Retail center Kragujevac", category: "poslovno", place: "Srbija", image: PHOTOS.trgovina },
  { year: "2012", title: "Mercator Novo mesto", category: "poslovno", place: "Novo mesto", image: PHOTOS.stolpnica },
  { year: "2012", title: "Hotelski center Tripoli", category: "javno", place: "Libija", image: PHOTOS.interier },
  { year: "2012", title: "Športna dvorana in bazen Tripoli", category: "sport", place: "Libija", image: PHOTOS.bazen },
  { year: "2012", title: "Dvorana Bonifika — natečaj", category: "sport", place: "Koper", image: PHOTOS.bazen },
  { year: "2011", title: "Vila Arbos", category: "stanovanjsko", place: "Slovenija", image: PHOTOS.hisa },
  { year: "2011", title: "Mladinski center Trbovlje", category: "javno", place: "Trbovlje", image: PHOTOS.dom },
  { year: "2011", title: "Pasivna lesena hiša", category: "stanovanjsko", place: "Slovenija", image: PHOTOS.hisa },
  { year: "2011", title: "Tuš Domžale", category: "poslovno", place: "Domžale", image: PHOTOS.trgovina },
  { year: "2010", title: "Tekmovalni bazen Trbovlje", category: "sport", place: "Trbovlje", image: PHOTOS.bazen },
  { year: "2010", title: "Stanovanjski blok K5", category: "stanovanjsko", place: "Slovenija", image: PHOTOS.dom },
  { year: "2009", title: "Mercator Škofja Loka", category: "poslovno", place: "Škofja Loka", image: PHOTOS.stolpnica },
  { year: "2009", title: "Stanovanjsko naselje Tomačevo", category: "stanovanjsko", place: "Ljubljana", image: PHOTOS.hisa },
  { year: "2008", title: "Stanovanjski blok Aurora", category: "stanovanjsko", place: "Slovenija", image: PHOTOS.dom },
  { year: "2007", title: "SPAR Litija", category: "poslovno", place: "Litija", image: PHOTOS.trgovina },
  { year: "2005", title: "SPAR Trbovlje", category: "poslovno", place: "Trbovlje", image: PHOTOS.trgovina },
];

export const categoryLabels: Record<Category | "vsi", string> = {
  vsi: "Vsi",
  stanovanjsko: "Stanovanjsko",
  javno: "Javno",
  poslovno: "Poslovno",
  sport: "Šport",
  interier: "Interier",
};

export const team = [
  { initials: "KČ", name: "Kristijan Čuk", role: "u.d.i.a. · strokovni direktor" },
  { initials: "BD", name: "Borut Dolar", role: "poslovni direktor" },
  { initials: "UD", name: "Urša Dirjec Meško", role: "u.d.i.a." },
  { initials: "IG", name: "Irena Gorjup Gračner", role: "u.d.i.a." },
  { initials: "SŠ", name: "Simon Škrbec", role: "u.d.i.a." },
  { initials: "DS", name: "Dijana Subašič", role: "d.i.g." },
  { initials: "VM", name: "Vladimir Mladenović", role: "u.d.i.a." },
  { initials: "ŠV", name: "Špela Volaj", role: "dipl. ekon." },
];
