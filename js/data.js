const trips = [
  {
    id: 1,
    spot: "Mar del Plata, Argentina",
    coords: "38°00′00″S, 57°33′00″W",
    level: 10,
    category: "noob",
    nextDate: "nov. 2025",
    image: "/assets/spots/mdp.jpg",
  },
  {
    id: 2,
    spot: "Mavericks, California",
    coords: "37°29′42″N, 122°30′23″W",
    level: 50,
    category: "advanced",
    nextDate: "oct. 2025",
    image: "/assets/spots/mavericks.jpg",
  },
  {
    id: 3,
    spot: "Cloudbreak, Fiji",
    coords: "17°50′05″S, 177°11′46″E",
    level: 65,
    category: "advanced",
    nextDate: "ago. 2025",
    image: "/assets/spots/cloudbreak.jpg",
  },
  {
    id: 4,
    spot: "Mentawai, Indonesia",
    coords: "2°00′00″S, 99°30′00″E",
    level: 80,
    category: "pro",
    nextDate: "ene. 2026",
    image: "/assets/spots/mentawai.jpg",
  },
  {
    id: 5,
    spot: "Nazaré, Portugal",
    coords: "39°36′52″N, 9°04′26″W",
    level: 95,
    category: "pro",
    nextDate: "jul. 2025",
    image: "/assets/spots/nazare.jpg",
  },
  {
    id: 6,
    spot: "Teahupo'o, Tahití",
    coords: "17°50′33″S, 149°15′38″W",
    level: 100,
    category: "pro",
    nextDate: "mar. 2026",
    image: "/assets/spots/teahupo.jpg",
  },
  {
    id: 7,
    spot: "Hossegor, Francia",
    coords: "43°39′43″N, 1°26′31″W",
    level: 55,
    category: "advanced",
    nextDate: "sep. 2025",
    image: "/assets/spots/hossegor.jpg",
  },
  {
    id: 8,
    spot: "Jeffreys Bay, Sudáfrica",
    coords: "34°02′36″S, 24°55′59″E",
    level: 90,
    category: "pro",
    nextDate: "dic. 2025",
    image: "/assets/spots/jeffreys.jpg",
  },
  {
    id: 9,
    spot: "Bells Beach, Australia",
    coords: "38°22′50″S, 144°17′21″E",
    level: 65,
    category: "advanced",
    nextDate: "abr. 2026",
    image: "/assets/spots/bells.jpg",
  },
  {
    id: 10,
    spot: "Pavones, Costa Rica",
    coords: "8°22′41″N, 83°08′02″W",
    level: 35,
    category: "noob",
    nextDate: "may. 2026",
    image: "/assets/spots/pavones.jpg",
  },
  {
    id: 11,
    spot: "Uluwatu, Bali",
    coords: "8°49′21″S, 115°05′28″E",
    level: 75,
    category: "pro",
    nextDate: "jun. 2025",
    image: "/assets/spots/uluwatu.jpg",
  },
  {
    id: 12,
    spot: "Playa Hermosa, Costa Rica",
    coords: "9°35′27″N, 84°38′11″W",
    level: 40,
    category: "noob",
    nextDate: "oct. 2025",
    image: "/assets/spots/hermosa.jpg",
  },
];

const surfboards = [
  {
    id: 1,
    name: "Tormenta Azul Pro",
    price: 175000,
    category: "pro",
    image: "/assets/boards/Tabla_FNL.png",
  },
  {
    id: 2,
    name: "Ala de Mar Rookie",
    price: 120000,
    category: "rookie",
    image: "/assets/boards/Tabla_Sup.png",
  },
  {
    id: 3,
    name: "Neptune Edge Advanced",
    price: 142500,
    category: "advanced",
    image: "/assets/boards/Tabla_Magna.png",
  },
  {
    id: 4,
    name: "Sunstrike Rookie",
    price: 128000,
    category: "rookie",
    image: "/assets/boards/Tabla_Rusty.png",
  },
  {
    id: 5,
    name: "Reef Slayer Pro",
    price: 210000,
    category: "pro",
    image: "/assets/boards/Tabla_Xtorsion_Fish.png",
  },
  {
    id: 6,
    name: "Pacific Pulse Advanced",
    price: 155000,
    category: "advanced",
    image: "/assets/boards/Tabla_Fish.png",
  },
  {
    id: 7,
    name: "Coral Rider Rookie",
    price: 125000,
    category: "rookie",
    image: "/assets/boards/Tabla_Coral.png",
  },
  {
    id: 8,
    name: "Ocean Dagger Advanced",
    price: 165000,
    category: "advanced",
    image: "/assets/boards/Tabla_Ocean.png",
  },
  {
    id: 9,
    name: "Typhoon Blade Pro",
    price: 230000,
    category: "pro",
    image: "/assets/boards/Tabla_Typhoon.png",
  },
  {
    id: 10,
    name: "Wave Hunter Rookie",
    price: 122000,
    category: "rookie",
    image: "/assets/boards/Tabla_Pacific.png",
  },
  {
    id: 11,
    name: "Breaker XT Advanced",
    price: 172500,
    category: "advanced",
    image: "/assets/boards/Tabla_Gum.png",
  },
  {
    id: 12,
    name: "Thunderstrike Pro",
    price: 245000,
    category: "pro",
    image: "/assets/boards/Tabla_Thunder.png",
  },
];

const dividirCantidadTablas = (n) => {
  let tablasMostradas = [];
  for (let i = 0; i < surfboards.length; i += n) {
    tablasMostradas.push(surfboards.slice(i, i + n));
  }
  return tablasMostradas;
};

const dividirCantidadTrips = (n) => {
  let tripsMostrados = [];
  for (let i = 0; i < trips.length; i += n) {
    tripsMostrados.push(trips.slice(i, i + n));
  }
  return tripsMostrados;
};




export const appState = {
  // Inicializa con dos tablas
  tablas: dividirCantidadTablas(3),
  // Indice (en 0 para arrancar con las primeras)
  tablasActual: 0,
  // Cantidad totales de tablas
  tablasTotal: dividirCantidadTablas(3).length,
  // Inicializa con dos trips
  trips: dividirCantidadTrips(2),
  // Indice (en 0 para arrancar con las primeras)
  tripsActual: 0,
  // Cantidad totales de trips
  tripsTotal: dividirCantidadTrips(2).length,
  session: {
    isLoggedIn: false,
    user: null
  },
};