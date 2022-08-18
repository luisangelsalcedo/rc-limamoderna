const data = {
  anchors: [
    "consulta",
    "vistas",
    "video",
    "caracteristicas",
    "equipo",
    "ubicacion",
    "creditos",
    "informes",
  ],
  form: {
    action:
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfofqfJiZUpocaN-ddn2-hjWCI458Cbn9jeVmc_07XWUB7yWA/formResponse",
  },
  gallery: [
    { title: "Valente 2", sub: "FACHADA", src: "fachada-wide.jpg" },
    { title: "Lobby", sub: "AMENITIES", src: "lobby.jpg" },
    { title: "Piscina", sub: "AMENITIES", src: "piscina.jpg" },
    { title: "Funcional Gym", sub: "AMENITIES", src: "gym.jpg" },
    { title: "Zona de parrillas", sub: "AMENITIES", src: "parrillas.jpg" },
    { title: "Sum", sub: "AMENITIES", src: "sum.jpg" },
    {
      title: "Dormitorio principal",
      sub: "INTERIOR",
      src: "dormitorio-p.jpg",
    },
    {
      title: "Dormitorio secundario",
      sub: "INTERIOR",
      src: "dormitorio-s.jpg",
    },
    { title: "Sala", sub: "INTERIOR", src: "sala.jpg" },
    { title: "Terraza", sub: "AMENITIES", src: "terraza.jpg" },
    { title: "Terraza", sub: "VISTA AL MAR", src: "terraza-mar.jpg" },
  ],
  video: {
    url: "http://luissg.com/clientes/limamoderna/valente2.mp4",
    preview: "fachada.jpg",
  },
  features: [
    "Edificio con 16 pisos",
    "2 Sótanos de estacionamientos",
    "Lobby",
    "Coworking",
    "Piscina",
    "Funcional Gym",
    "SUM - Sala de reuniones",
    "Zona de parrillas",
    "Centro de lavado",
  ],
  team: {
    building: "fachada-slim.jpg",
    items: [
      {
        src: "Carlos-Ott-2.jpg",
        fullname: "Carlos Ott",
        label: "ARQUITECTO",
        bio: "Arquitecto reconocido internacionalmente por sus diseños únicos, ganador del concurso para la Ópera de la Bastilla en París (entre 1,700 participantes).",
      },
      {
        src: "Carlos-Ponde-.jpg",
        fullname: "Carlos Ponce de León",
        label: "ARQUITECTO",
        bio: "Arquitecto con destacada experiencia en proyectos corporativos y residenciales a gran escala en las zonas más exclusivas de América Latina, India, Asia y Emiratos Árabes.",
      },
      {
        src: "jordi-1-2.jpg",
        fullname: "Jordi Puig",
        label: "ARQUITECTO DE INTERIORES",
        bio: "",
      },
      {
        src: "Claudia-1-2.jpg",
        fullname: "Claudia Paz",
        label: "DISEÑO DE ILUMINACIÓN",
        bio: "",
      },
    ],
  },
  location: {
    map: "map.jpg",
    status: "Proyeto en construcción",
    district: "San Miguel",
    price: "US$ 501,000",
    offerprice: "US$ 440,000*",
    finish: "2do Semestre 2023",
  },
  credits: [
    {
      title: "FINANCIA",
      src: "banco-de-credito-del-peru-bcp.png",
      details:
        "Sólida institución financiera líder indiscutible del mercado peruano a lo largo de sus más de 115 años de trayectoria. Forma parte del conglomerado financiero local Credicorp. El banco cuenta con una filial en Bolivia y sucursales en Miami, Florida (EEUU), Chile y Panamá.",
    },
  ],
  info: {
    showroom: "Calle Libertadores 237, San Isidro",
    ventas: "Calle Manco Segundo 225 - San Miguel, Lima – Perú.",
    email: "valente2@grupocaral.com.pe",
    phone: "+51 938071005",
    schedule: "Lun. a dom. de  10:00 a 19:00 hrs",
  },
};

export default data;
