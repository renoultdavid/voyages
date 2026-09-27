/* =========================================================================
   FICHIER : script.js — PARTIE 1 / 3
   Constantes de base et Sites 1 à 17
   ========================================================================= */

// Coordonnées du Foyer / Base d'exploration (Castellare-di-Casinca, Corse)
const HOME_BASE = {
  name: "Castellare-di-Casinca",
  lat: 42.4678,
  lng: 9.4756
};

// Nombre total de pays reconnus par l'ONU
const TOTAL_UN_COUNTRIES = 195;

// Référentiel des continents
const CONTINENT_TOTALS = {
  "Europe": 44,
  "Afrique": 54,
  "Asie": 48,
  "Amériques": 35,
  "Océanie": 14
};

// Totaux administratifs de premier ordre par pays
const COUNTRY_SUBDIV_TOTALS = {
  "France": { type: "Départements", total: 101, regionType: "Régions", regionTotal: 18 },
  "Égypte": { type: "Gouvernorats", total: 27 },
  "Allemagne": { type: "Länder", total: 16 },
  "Italie": { type: "Régions", total: 20 },
  "Espagne": { type: "Communautés", total: 17, provType: "Provinces", provTotal: 50 },
  "États-Unis": { type: "États", total: 50 }
};

const travelSpots = [
  {
    id: "hurghada",
    name: "Hurghada (Mer Rouge)",
    region: "Gouvernorat de la Mer-Rouge",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Mer-Rouge",
    altitude: -2,
    is_island: false,
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Récif Géologique",
    century: "XXe siècle",
    category: "plage",
    counts: { plage: 1 },
    lat: 27.2579,
    lng: 33.8116,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPVx1_9UPwnhcWOyxckSpIvYC2T7xDRFTOGeQEiu82QKFht2G6YoXd-HB0DbIDdJ4ebV00ThDFY_RWXl7IznrNWOy4kUUJPV-vv__clD_rD2Ul_nUySiLRNNiubcIxwK81MgkkBsjwr0_BIkhfXFeTpgg=w1379-h919-s-no-gm?authuser=0",
    description: "Joyau de la côte égyptienne aux portes du désert arabique. Paradis de la plongée sous-marine réputé pour ses récifs coralliens et ses eaux cristallines chaudes toute l'année. Un cadre idyllique pour observer la faune et la flore sous-marine de la mer Rouge en toute quiétude au cœur de superbes lagons. La ville offre un contraste saisissant entre l'animation des souks traditionnels de Dahar, le charme touristique de Sekalla et le luxe moderne de Marina Boulevard, créant ainsi une destination balnéaire et culturelle complète pour tous les voyageurs en quête d'évasion et de découverte.",
    visiter: "Les excursions nautiques vers l'île de Giftun constituent une option privilégiée pour l'observation des fonds marins, tandis que la découverte des récifs s'organise facilement depuis les centres spécialisés de la côte. Les spécialités culinaires locales à base de poissons frais se dégustent dans les établissements du port principal. Les édifices religieux tels que la grande mosquée Al Mina et l'église copte apportent une dimension culturelle aux promenades urbaines, et l'immensité du désert environnant se prête aux randonnées en véhicules tout-terrain sous un ciel étoilé.",
    link: "https://photos.app.goo.gl/WmQkwoGfa1tPnuex5"
  },
    {
    id: "arzon_dolmen_grah_niol",
    name: "Arzon - Dolmen de Graniol (Grah Niol)",
    region: "Bretagne (Morbihan)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Morbihan",
    region_admin: "Bretagne",
    altitude: 17,
    is_island: false,
    transport: "route",
    era_group: "prehistoire",
    era_label: "Époque Néolithique & Art Mégalithique",
    century: "Néolithique",
    category: "megalithe",
    counts: { megalithe: 1 },
    lat: 47.5458,
    lng: -2.8856,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP3mylfTlOcA12SvSWVHwA2r2OWkRvpd9XhbbKDKHV6fhZYl1dmJYAaPIF2KZuVzlpJWoY-IVWBIdT0falYOcpPtISMIY2f7__HoidSYfjy51TqbTarv9zWSqJr6TTTZa7Jl6kq_2f8AewyqHox6WIZ4w=w1820-h2426-s-no-gm?authuser=0",
    description: "Joyau du patrimoine mégalithique de la presqu'île de Rhuys, le dolmen de Graniol — ou Grah Niol (« la butte du soleil » en breton) — s'élève sur les hauteurs d'Arzon face aux rivages du golfe du Morbihan. Classé au titre des Monuments historiques dès 1889, cet ensemble sépulcral érigé au Néolithique moyen (IVe millénaire av. J.-C.) se compose d'un cairn circulaire en pierres sèches enserrant une sépulture mégalithique à couloir et chambre funéraire polygonale. Sa renommée archéologique repose sur les exceptionnelles gravures rupestres ornant plusieurs de ses dalles de soutien en granit : crosses pastorales, écussons, haches et signes géométriques y témoignent de la ferveur spirituelle et de la symbolique funéraire des premières communautés agropastorales armoricaines. Préservé au cœur d'un environnement boisé typique de la lande côtière, le monument plonge le visiteur dans les origines millénaires de l'architecture monumentale bretonne.",
    visiter: "L'accès au cairn s'effectue aisément à pied depuis le bourg d'Arzon ou les chemins de randonnée côtiers qui sillonnent la presqu'île entre le golfe et l'océan Atlantique. En approchant de la butte de pierre restaurée, le visiteur s'engage dans le couloir dallé pour admirer l'agencement robuste des orthostates de granit supportant les imposantes tables de couverture. Une observation minutieuse des parois intérieures avec une lumière rasante permet de révéler le relief des gravures pariétales millénaires, dont la signification rituelle continue de fasciner les archéologues. La halte se prolonge agréablement par une promenade vers les sentiers littoraux voisins du golfe du Morbihan, offrant de superbes points de vue maritimes au cœur d'un paysage façonné par l'histoire préhistorique.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "charm_el_naga",
    name: "Charm el-Naga",
    region: "Gouvernorat de la Mer-Rouge",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Mer-Rouge",
    altitude: -5,
    is_island: false,
    transport: "route",
    era_group: "nature",
    era_label: "Temps Géologique & Corallien",
    century: "Temps géologique",
    category: "plage",
    counts: { plage: 1 },
    lat: 27.0250,
    lng: 33.9150,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM4ecV2oWKGbD_bDkpjOGJXygG-7vPAB5pg8vehhSGDjmXvbEsBLgl1mq_Ca4hyNgW-3MaQCcw2j7AVLMu_dkwwD0f5oNA7tnUo3u31wBKwpoPwjmYa9mBom71lHlNBurZ8mVXghWFoYTwWFwcmFEW1Hg=w1225-h919-s-no-gm?authuser=0",
    description: "Baie paradisiaque et sanctuaire naturel protégé sur la mer Rouge, célèbre pour son magnifique récif corallien accessible directement depuis la plage. Les fonds marins y regorgent de poissons multicolores et d'espèces endémiques dans un état de conservation remarquable. Loin de l'agitation des grandes stations balnéaires, ce site offre un havre de paix absolu pour les amoureux de nature préservée, de calme et d'exploration sous-marine en bord de rivage.",
    visiter: "L'utilisation du masque et du tuba s'effectue directement depuis le rivage sablonneux pour observer une grande variété de poissons-perroquets, de raies et de spécimens marins protégés. Les installations de détente sur la plage permettent de profiter du panorama marin en toute tranquillité, et le restaurant panoramique offre des haltes gourmandes avec vue directe sur le rivage turquoise, dans un cadre particulièrement préservé.",
    link: "https://photos.google.com/share/AF1QipNRwK8ty9V3z_pZf-4EdBsAxQruzmu08jE2YUbNhN5qjAIvnZ-eD_YMF1h_I1jveg?key=Z19TSXNmSGNDazJoOEsxR3YyRmstR0R6aXExOWpR"
  },
  {
    id: "abu_simbel",
    name: "Abou Simbel",
    region: "Gouvernorat d'Assouan",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Assouan",
    altitude: 185,
    is_island: false,
    transport: "avion",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (-1264 av. J.-C.)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1, unesco: 1 },
    lat: 22.3372,
    lng: 31.6258,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNxJ2b7wblm68J5LebZ_FRLke0MjUtjwjstgkx1Tv2k0_QEwQ0UZFSbmXelmCFdT91Fg_IXRK4KD4VfG_TGB9x825G1ENU7rXM5cipskgHi99lQ9S7gq1uyAOXpRE7fexNraWeB-fZMY6WGCpi7Qj-hyQ=w2768-h1845-s-no-gm?authuser=0",
    description: "Chef-d'œuvre absolu de l'Égypte antique et sanctuaire monumental de Ramsès II, sauvé des eaux par une opération internationale historique de l'UNESCO. Ses colosses sculptés dans la roche dominent le lac Nasser et témoignent du génie des bâtisseurs pharaoniques à travers les millénaires. Les façades majestueuses et les salles intérieures richement décorées de bas-reliefs racontent la grandeur militaire et divine du pharaon ainsi que son amour pour son épouse Néfertari.",
    visiter: "Les colosses assis de Ramsès II se dressent à même la falaise de grès, tandis que les salles intérieures du grand temple révèlent des piliers osiriens et des peintures murales d'époque. Le sanctuaire voisin d'Hathor est consacré à la reine Néfertari, et le site propose des représentations en plein air mettant en valeur les façades rocheuses face aux rives calmes du lac Nasser.",
    link: "https://photos.google.com/share/AF1QipNZny40txWDRQ8Qb-LD1XNcYvUTphU0lnrL4IGXMN759ZNkxSRmNoWpmQcCU_W-8A?key=RVJiTzd4cDNfMkE1Y2d1Y3hJU1RMOEJ0T1dqODlR"
  },
  {
    id: "temple_seti_gournah",
    name: "Louxor - Temple de Séti Ier (Gournah)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 82,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (-1290 av. J.-C.)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7328,
    lng: 32.6281,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOCn3bnnRckhB2Ac1shOqlfDJfH3SfpYo6esxwODD6rK-dCQksCm6dsSFRbh-V9oMtoOaUJ43Heywro5BI2G7w9FKqOYKowO3AFdi_xiwfzEo_O90EXFb0uBT7VJTgZZ0KPmynrdDdmiF73ZTJTnNHSwA=w2884-h1922-s-no-gm?authuser=0",
    description: "Magnifique temple des millions d'années érigé sur la rive ouest de Louxor par le pharaon Séti Ier et achevé par son fils Ramsès II au cœur de la nécropole thébaine. Ce sanctuaire commémoratif et funéraire est dédié au culte du roi ainsi qu'au dieu Amon-Rê. Bien que partiellement ruiné dans sa partie orientale, il conserve des salles hypostyles remarquables, des chapelles richement décorées de bas-reliefs d'une grande finesse artistique et un plan architectural pionnier pour l'époque.",
    visiter: "L'exploration de l'enceinte permet d'admirer les colonnes papyracées de la salle hypostyle ainsi que les chapelles dédiées aux principales divinités et aux ancêtres royaux. Les murs préservés dévoilent des scènes rituelles et des offrandes polychromes caractéristiques du Nouvel Empire. Situé à l'entrée nord de la nécropole thébaine, le site offre un cadre calme et privilégié pour s'imprégner de l'art pharaonique loin des afflux touristiques majeurs.",
    link: "https://photos.google.com/share/AF1QipNzr_Fg6pFcitaIuS-gzg2QB15dXmm1sscmdynudrfrm9IAbsZniv6hC3TYPgAMmQ?key=c3Y0bnRPWGR6MGZCOHpQUUdCRU9WQmJkbC1tVUtn"
  },
  {
    id: "temple_louxor",
    name: "Temple de Louxor (Amon)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 76,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (-1400 av. J.-C.)",
    century: "Antiquité (XIVe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.6994,
    lng: 32.6396,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOVIqtAv6F50s3byzGMdkrnrRK0dYat5T2PO5vZTXiDE7CHYznUqxCuCN_FyK-5VmVcCOrdKGpAxExydMfCvcnA3108CC2HP-MAIQHauLvMhHK78ddOApVu4qnIQL1EnGwPo5yNAaisBG-vM8o_Wn986w=w2416-h1611-s-no-gm?authuser=0",
    description: "Sanctuaire majestueux érigé en plein cœur de la ville moderne de Louxor, dédié principalement au dieu Amon, à son épouse Mout et à leur fils Khonsou. Développé principalement par les pharaons Aménophis III et Ramsès II, ce complexe monumental est relié au grand temple de Karnak par l'impressionnante allée des sphinx. Ses immenses colonnades papyracées, ses cours péristyles et ses imposants colosses de granit témoignent de la grandeur religieuse et politique du Nouvel Empire au bord du Nil.",
    visiter: "La découverte débute par le grand pylône d'entrée encadré par les vestiges des colosses de Ramsès II et l'obélisque préservé, faisant face à l'allée processionnelle. L'allée des colonnes d'Aménophis III mène à de vastes cours à ciel ouvert baignées par la lumière du soir. Les salles intérieures dévoilent des sanctuaires transformés au fil des millénaires, incluant des chapelles romaines et une mosquée historique intégrée dans l'enceinte, offrant ainsi une fascinante superposition des civilisations.",
    link: "https://photos.google.com/share/AF1QipMtbW6CGkq4QfXr6u0f_aEpgHzyt6I3h3xQLCFSBKU9Y8SSyq4LF2ZywZTi9dgarw?key=ZTk4TUQ1ci1qV2k3YjFJb0dlaEFaR2poejBmWndn"
  },
  {
    id: "temple_karnak",
    name: "Temple de Karnak (Amon-Rê)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 78,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Moyen & Nouvel Empire)",
    century: "Antiquité (XXe siècle av. J.-C. à IVe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1, unesco: 1 },
    lat: 25.7188,
    lng: 32.6573,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOtwfMs5d5wL1IzTbxA7Z3-Z5tARLoOdWDIQWtEuAseuIBIxkYrLQYMer35gjiseXa0FB52lFZCekz_-WroF9o09HewjJKyABFSArCwXEXvcbQCYOrUOUWW6pPF1Ftpv6m_8TzY53xcx12x37egMIq1tg=w2956-h1971-s-no-gm?authuser=0",
    description: "Plus vaste complexe religieux de toute l'Antiquité et cœur battant de la théocratie thébaine, le domaine d'Amon-Rê à Karnak s'étend sur plus de cent hectares sur la rive orientale du Nil. Érigé, agrandi et remanié durant près de deux millénaires par plus de trente souverains successifs depuis le Moyen Empire jusqu'aux empereurs romains, ce sanctuaire démesuré incarnait la résidence terrestre du roi des dieux et le centre cosmologique du pouvoir royal. Franchir son colossal premier pylône ouvre sur une succession prodigieuse de cours monumentales, de propylées, d'obélisques monolithiques fendant l'azur et de chapelles consacrées aux figures divines de la triade thébaine, Amon, Mout et Khonsou. Chef-d'œuvre absolu de l'architecture mondiale, la grande salle hypostyle déploie une véritable forêt pétrifiée de cent trente-quatre colonnes de grès titanesques dont les fûts et les chapiteaux papyriformes s'élèvent jusqu'à vingt-trois mètres de hauteur sous des plafonds jadis peints d'or et de lapis-lazuli. Baigné par les eaux miroitantes du lac sacré où les prêtres purificateurs célébraient les ablutions liturgiques à l'aube, le site dégage une puissance sacrée sans égale, où chaque bloc sculpté de bas-reliefs triomphants murmure la gloire éternelle des bâtisseurs de pharaon.",
    visiter: "La découverte commence traditionnellement par le dromos d'entrée bordé de criosphinx à tête de bélier protégeant de majestueuses effigies royales, avant de franchir l'imposant premier pylône donnant accès à la vaste cour péristyle. L'émotion atteint son apogée en pénétrant dans la nef centrale de la salle hypostyle, où le jeu d'ombres et de lumière filtrant à travers les claustras de pierre sublime les hiéroglyphes monumentaux gravés par Séti Ier et son fils Ramsès II. La marche se prolonge vers le sanctuaire de la barque sacrée en granit poli, encadré par les aiguilles vertigineuses des obélisques érigés par Thoutmosis Ier et la reine Hatchepsout dominant l'enceinte de leurs silhouettes dorées. Au bord du lac sacré, les visiteurs découvrent le colossal scarabée d'Aménophis III, symbole solaire de renaissance perpétuelle autour duquel la tradition invite à effectuer plusieurs révolutions rituelles. L'exploration se parachève en longeant l'axe processionnel méridional en direction du temple de Khonsou et de la spectaculaire allée des sphinx réaménagée qui reliait autrefois Karnak au temple de Louxor dans un faste rituel inoubliable.",
    link: "https://photos.google.com/share/AF1QipMMg8FSRFZjda0onjYcUzb4V1FhHycLVSV_NZ5biFM-VhtZT0jv9K4XjAlIgFNYkg?key=R2VmWDZhcTd4NjluQzA1anFzRGw0S014X3F2ZUZn"
  },
  {
    id: "vallee_des_nobles",
    name: "Thèbes - Vallée des Nobles",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 105,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe & XIXe dynasties)",
    century: "Antiquité (XVe siècle av. J.-C. à XIIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7312,
    lng: 32.6078,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOd_OJdWviNds-jAvYJQ6fOhmKABb5wTUSd9reedexFYosDX5eY63EFb8fkeLgVl0Ober_ixxcpyNw1zN2k1O96-TbklhDfSl6jpwbssv48dg99Uwvi64lsSsixAe6N0JndHpYca3D7NODIEZ4l02REZw=w2624-h1750-s-no-gm?authuser=0",
    description: "Adossée aux falaises calcaires de la montagne thébaine sur la rive occidentale du Nil, la nécropole des Nobles déploie un ensemble funéraire exceptionnel où reposent les dignitaires, vizirs, scribes, généraux et hauts courtisans de l'âge d'or pharaonique. À l'opposé des hypogées royaux consacrés aux liturgies célestes de l'au-delà, ces sépulcres creusés à flanc de colline constituent la chronique vivante et éclatante de la civilisation égyptienne au Nouvel Empire. Éparpillées sur les secteurs historiques de Cheikh Abd el-Gourna, d'El-Khokha et d'Assassif, des centaines de chapelles rupestres s'ornent de fresques murales d'une fraîcheur prodigieuse dépeignant avec une liberté de ton et une virtuosité technique saisissantes le quotidien de l'élite thébaine. Les scènes de banquets fastueux aux danseuses graciles côtoient les travaux des champs, les vendanges dans les treilles verdoyantes, les chasses au vol dans les marais de papyrus et la réception solennelle des tributs étrangers venus d'Asie et de Nubie. Baignée par une luminosité dorée surplombant la bande fertile du fleuve, cette colline sacrée livre un témoignage d'une humanité bouleversante sur les joies terrestres et les espoirs d'éternité des grands serviteurs de pharaon.",
    visiter: "La découverte de cette nécropole s'organise par groupes de sépultures emblématiques disséminées le long des sentiers étagés montant vers Cheikh Abd el-Gourna, offrant en chemin de sublimes échappées panoramiques sur le temple de Hatchepsout et la plaine nilotique. Parmi les joyaux incontournables, la tombe de Nakht (TT52), astronome et scribe d'Amon, émerveille par sa palette chromatique intacte et sa célèbre fresque des trois musiciennes, tandis que celle de Menna (TT69), scribe cadastral, dévoile de minutieuses scènes de récolte de blé et de pesée de l'âme. La tombe inachevée de Ramose (TT55), gouverneur de Thèbes sous Akhenaton, impressionne par l'extrême finesse de ses reliefs sur calcaire blanc marquant la transition stylistique amarnienne, complétée par l'hypogée de Sennefer (TT96), dit la tombe des vignes, dont la voûte ondulée simule une tonnelle de grappes de raisin suspendues au-dessus du défunt. La marche à travers les venelles de terre battue entre les façades de torchis de l'ancien village invite à une immersion intime et émouvante dans l'art pictural pharaonique, loin des flux massifs des grands axes touristiques.",
    link: "https://photos.google.com/share/AF1QipNMD4tIHiypU_Je6aTW4w1lxzlW9xN-c97qbaIxsMc77dVfxLJcxci3czd2Scm65Q?key=Sk1lZzB1by1WbnpGVDVWODVWYlRoLW5uUjllNk1B"
  },
  {
    id: "vallee_des_artisans",
    name: "Thèbes - Vallée des Artisans (Deir el-Médineh)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 115,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe à XXe dynasties)",
    century: "Antiquité (XIVe siècle av. J.-C. à XIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7285,
    lng: 32.6014,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLIIop9G0JKvfSCc8VuoAVjmAMq9-TDvIllyPrY8t_lq9XBI_iB4lzrA8dmwBM_luSuc4zL3Iqrj86AjleX8DgPdGdf3i8CBjSbVtuUNl57dbAVk8thYxKQVQHQz4eQm6cz3EWmxxtqQraap46gkFHlQ=w2624-h1750-s-no-gm?authuser=0",
    description: "Encaissé dans un vallon aride et secret de la montagne thébaine à quelques encablures de la Vallée des Rois, le site de Deir el-Médineh abritait la confrérie d'élite des « Serviteurs dans la Place de Vérité ». Durant près de cinq siècles sous le Nouvel Empire, cette communauté autonome de sculpteurs, tailleurs de pierre, peintres et contremaîtres conçut, creusa et orna de ses propres mains les sépultures les plus grandioses des pharaons. Bénéficiant d'un statut privilégié et d'un savoir-faire technique inégalé, ces artisans d'exception s'aménagèrent sur place, à flanc de colline, de modestes hypogées familiaux surmontés de petites pyramides de brique crue. Débarrassées du carcan protocolaire et de la solennité des canons royaux, les fresques murales miniatures qu'ils peignirent pour leur propre repos éternel atteignent un sommet de délicatesse, de spontanéité et d'intensité chromatique. Sur un fond ocre doré éclatant, les scènes mythologiques du Livre des Morts côtoient des représentations intimes et attendries de la vie domestique, des épouses dévouées et des réunions de famille. Conservé grâce à la sécheresse absolue du désert et immortalisé par des milliers d'ostraca livrant le récit quotidien de leurs amours, procès et grèves ouvrières, ce vallon sacré constitue la mémoire la plus émouvante et vivante du peuple des bâtisseurs de l'Égypte antique.",
    visiter: "La découverte commence par la traversée contemplative des ruines remarquablement préservées du village en briques crues, où l'on distingue nettement la rue centrale, les seuils de portes peints de rouge, les pièces d'habitation et le colossal grand puits qui livra une inestimable collection d'écrits sur calcaire. L'émotion s'intensifie en descendant l'escalier escarpé menant au caveau funéraire de Sennedjem (TT1), artisan en chef sous Séthi Ier et Ramsès II : la petite voûte peinte, demeurée dans un état de conservation miraculeux, dévoile sur fond jaune d'or le défunt et son épouse labourant les champs d'Ialou dans l'au-delà et saluant le dieu Anubis veillant sur la momie. Juste au-dessus, l'hypogée d'Inerkhaou (TT359), contremaître de la XXe dynastie, séduit par la virtuosité géométrique de ses plafonds aux motifs polychromes et la célèbre scène du grand chat d'Héliopolis pourfendant le serpent Apophis au pied du perséa sacré. La visite se parachève en contrebas devant le temple ptolémaïque dédié à Hathor et Maât, dont l'enceinte renferme des reliefs raffinés et des chapelles commémoratives, offrant une perspective intime et bouleversante à l'écart des grands circuits de masse.",
    link: "https://photos.google.com/share/AF1QipOWESdxdcRzbO6odBKe4bKq1akK1WOZN2tksnl81-xlfatrp43shF-hVajG0AeNYg?key=VUtGeUtxRDlfcVAyVmtoNjVRMUNBWE5wd1VrbHp3"
  },
  {
    id: "temple_deir_el_medineh",
    name: "Temple de Deir el-Médineh (Hathor & Maât)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 108,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque (IIIe siècle av. J.-C. - Ptolémée IV à VIII)",
    century: "Antiquité (IIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7291,
    lng: 32.6020,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMpO1xyPvhYsSQW29Rx94KkjyOQDLm0tLNkORiJDFGPGNPf4veQ6_l9bLuZ2AUxYuVe4cEZ2OyMPXlHq0bYIM2ZqGCj2DDAcZ9IYYPJvxT9Cn-nR7OipS-LxxmBDcsg9CtQHjqT55G9C_Awf6jBlV4yNw=w2624-h1750-s-no-gm?authuser=0",
    description: "Disséminé à l'extrémité septentrionale du vallon des artisans dans un repli rocheux empreint d'une quiétude absolue, le temple de Deir el-Médineh constitue l'un des sanctuaires ptolémaïques les plus gracieux et intimistes de la rive thébaine. Érigé sous le règne de Ptolémée IV Philopator au IIIe siècle avant notre ère puis embelli par ses successeurs Ptolémée VI et Ptolémée VIII, ce joyau en grès doré s'élève sur l'emplacement de chapelles votives plus anciennes fondées dès le Nouvel Empire en hommage aux déesses protectrices Hathor et Maât. Protégé par une haute enceinte ondulée en briques crues remarquablement conservée, l'édifice se distingue par la pureté de ses proportions et la finesse voluptueuse de ses bas-reliefs caractéristiques de l'art hellénistique tardif. Fait exceptionnel dans l'architecture des temples égyptiens où les thèmes funéraires demeuraient d'ordinaire proscrits au profit des liturgies cosmiques, ses parois immortalisent avec une intensité dramatique rare la pesée du cœur tirée du Livre des Morts. Réoccupé durant les premiers siècles de notre ère par une communauté de moines coptes qui lui légua son appellation moderne de « couvent de la ville » (Deir el-Médineh), ce monument harmonieux incarne la synthèse émouvante entre la ferveur populaire des bâtisseurs de tombes et les ultimes splendeurs dynastiques des Ptolémées.",
    visiter: "La découverte s'amorce par le franchissement du portail monumental percé dans l'enceinte de briques crues, conduisant vers un élégant pronaos soutenu par deux colonnes papyriformes aux somptueux chapiteaux composites et hathoriques reliés par des murs-bahuts finement gravés. L'intérêt majeur de la visite réside dans la contemplation du vestibule intérieur, dont le mur occidental dévoile une rarissime et saisissante scène de la psychostasie : sous le regard solennel d'Osiris et des quarante-deux juges divins, Anubis et Horus procèdent à la pesée du cœur du défunt face à la plume de vérité de Maât, tandis que le monstre dévoreur Ammout attend fébrilement le verdict et que Thot consigne la sentence. Au-delà, l'enfilade des trois sanctuaires parallèles dévoile la chapelle centrale dédiée à Hathor, flanquée de celles consacrées à Amon-Sokar-Osiris et à Anubis, toutes ornées de bas-reliefs où les souverains lagides multiplient les offrandes d'encens et de colliers rituels. En contournant l'édifice, un escalier intérieur mène aux terrasses supérieures offrant un panorama splendide sur les ruines du village ouvrier, les puits archéologiques et les falaises dorées de la montagne thébaine.",
    link: "https://photos.google.com/share/AF1QipOWESdxdcRzbO6odBKe4bKq1akK1WOZN2tksnl81-xlfatrp43shF-hVajG0AeNYg?key=VUtGeUtxRDlfcVAyVmtoNjVRMUNBWE5wd1VrbHp3"
  },
  {
    id: "vallee_des_reines",
    name: "Thèbes - Vallée des Reines (Ta-Set-Neferou)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 118,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XIXe & XXe dynasties)",
    century: "Antiquité (XIIIe siècle av. J.-C. à XIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7281,
    lng: 32.5931,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMU7taj-0RQR1MwvRFxdj3GYC4j8uql9zgKkCWsctOf5pa8NmG2HJeR4dTIKxQ7sYDktflnu8AcGUFGOIyFOEPq-yqoyjFnyPFzG1L8cUGr2wSLCq45xs8o9FUqhn-XyLxX3ZWsIRrIlf1UTtmQwlCT6Q=w2624-h1750-s-no-gm?authuser=0",
    description: "Enchâssé dans une gorge sauvage au pied des falaises thébaines à l'extrémité méridionale de la nécropole, le site sacré de la Vallée des Reines portait en égyptien ancien le nom évocateur de Ta-Set-Neferou, « la place de beauté ». Choisi dès la XIXe dynastie pour servir de sépulture royale aux grandes épouses royales, princesses et jeunes princes héritiers des règnes de Ramsès II et de ses successeurs, ce vallon aride compte près d'une centaine d'hypogées creusés dans le calcaire tendre. Loin de la monumentalité austère des tombeaux des pharaons, les sépulcres s'y distinguent par une délicatesse plastique raffinée et une palette chromatique éblouissante où triomphent les nuances d'ocre vermillon, de vert malachite, de lapis-lazuli et de blanc immaculé. Chef-d'œuvre incontesté de l'art funéraire universel souvent comparé à une « Chapelle Sixtine » de l'Antiquité, la sépulture de la reine Néfertari y immortalise la beauté intemporelle de l'épouse chérie de Ramsès II guidée avec tendresse par les divinités féminines vers le repos céleste. Les tombes princières racontent quant à elles avec une gravité poignante la ferveur filiale et le passage des jeunes enfants royaux vers l'immortalité osirienne.",
    visiter: "La visite s'amorce par la remontée du sentier désertique dominé par les pitons rocheux, permettant d'accéder aux hypogées ouverts par alternance pour préserver la fragilité des pigments picturaux millénaires. L'expérience atteint son sommet avec l'émouvante descente dans la tombe de Néfertari (QV66), où les parois de stuc révèlent la souveraine vêtue de sa robe de lin plissé transparent jouant au jeu de senet, offrant des présents à Hathor et franchissant les portes de l'au-delà sous une voûte céleste poudrée d'étoiles dorées. Non loin, l'hypogée du prince Amon-her-khepeshef (QV55), fils de Ramsès III fauché dans son jeune âge, bouleverse par ses scènes d'une fraîcheur éclatante montrant le jeune prince coiffé de la tresse de l'enfance présenté par son royal père aux dieux protecteurs, ainsi que par la petite vitrine abritant un fœtus momifié découvert in situ. La visite de la tombe du prince Khâemouaset (QV44) ou de la reine Titi (QV52) parachève cette traversée intime de la nécropole thébaine, dans une atmosphère de recueillement et de splendeur préservée à l'écart des foules.",
    link: "https://photos.google.com/share/AF1QipOluBlqCu-kGHFpWRZO6iNM7Ef_o0a-E0Ii7aqapO2gWVFCd6U_ulN-QNaCJTXgHQ?key=eHluQ1RWMnJHS2x1Vk9lQWxvWVVLVXRvRmdtQ0R3"
  },
  {
    id: "temple_hatchepsout",
    name: "Thèbes - Temple d'Hatchepsout (Deir el-Bahari)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 112,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe dynastie)",
    century: "Antiquité (XVe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7383,
    lng: 32.6078,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPk75OHrQu6obpFOplp54MjErWv62Ba9IGktlvK7XXzNNKRfJVn8AqJRVRkpvSQgF-7bxq2zcTPyFYgAK5nA3W6piJ5oxOoiATNoXQRn-IhO6Y0py1gzDV_2ffYLgtS8a0enLOSK2bzzos1Io0m5hpzlA=w2624-h1750-s-no-gm?authuser=0",
    description: "Adossé avec une audace architecturale sans pareille à l'immense cirque naturel des falaises ocres de Deir el-Bahari, le temple funéraire de la reine-pharaon Hatchepsout, baptisé Djeser-Djeserou (« le sublime des sublimes »), constitue l'un des sommets incontestés de l'architecture mondiale. Conçu au XVe siècle avant notre ère par le brillant architecte royal Senenmout sous la XVIIIe dynastie, cet édifice visionnaire rompt avec les canons traditionnels pour déployer trois terrasses superposées taillées en gradins, reliées par de monumentales rampes axiales et bordées d'élégantes colonnades protodoriques. L'harmonie saisissante entre la pureté géométrique des lignes de grès clair et la verticalité grandiose de la paroi rocheuse thébaine confère au sanctuaire une impression de modernité intemporelle. Les murs des portiques immortalisent avec une minutie et une polychromie admirables les hauts faits du règne de la souveraine, notamment la théogamie relatant sa naissance divine issue d'Amon-Rê, ainsi que la mythique expédition maritime vers le mystérieux pays de Pount, rapportant or, myrrhe, bois précieux, panthères et arbres à encens déracinés avec leurs mottes de terre. Dédié au culte d'Amon ainsi qu'aux divinités protectrices Hathor et Anubis, ce monument d'exception célèbre la mémoire de la première grande reine de l'Histoire ayant exercé la plénitude du pouvoir pharaonique.",
    visiter: "La découverte s'amorce par la traversée de la vaste esplanade désertique où se devinaient jadis les allées de sphinx à tête d'Hatchepsout et les bassins de papyrus, avant d'aborder la première rampe monumentale menant au deuxième niveau. Ce palier central abrite les deux trésors narratifs du site : le portique de la naissance divine et le célèbre portique de Pount, dont les bas-reliefs détaillent les navires de charge cinglant sur la mer Rouge, les maisons sur pilotis des indigènes et les lourdes cargaisons aromatiques. Aux extrémités de cette terrasse se nichent deux joyaux religieux intimistes : la chapelle d'Anubis aux peintures funéraires intactes et la splendide chapelle d'Hathor, dont les colonnes s'achèvent par de sublimes visages hathoriques aux oreilles bovines veillant sur des offrandes rituelles. L'ascension finale vers la troisième terrasse franchit un portique orné de colosses osiriens monumentaux figurant la reine coiffée du némès et parée de la barbe postiche, prélude à la cour supérieure péristyle et au saint des saints taillé à même la roche calcaire. Depuis ce promontoire suspendu, le regard embrasse un panorama étourdissant sur la vallée du Nil et l'enfilade des temples des millions d'années bordant la rive occidentale.",
    link: "https://photos.google.com/share/AF1QipNrAwyqCKj0Yd0WNu1YGP3axCwm1Rva2ZEQah4a7NVBovqqaiV2Uiokydtq33P3EQ?key=LUFXRHlmWEJhRk1mSlk2enByUzM0UWpvUGliVDdR"
  },
  {
    id: "vallee_des_rois",
    name: "Thèbes - Vallée des Rois (Oued el-Moulouk)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 172,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe à XXe dynasties)",
    century: "Antiquité (XVIe siècle av. J.-C. à XIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7402,
    lng: 32.6014,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMFRpDqYKavLb097DDB8Vtoec_f4bF4PQPXH_DyPO04GrRrvl8MsEiuo6bNRuKoT74FTcJjh2TKu7lI47ZAVFcc-IVkIB1ZPwj16-IeW1d3Jk2b6j7PubcF3SjpshOkRwPG-bqzOjFg9VSp_mIywXsWCw=w2624-h1750-s-no-gm?authuser=0",
    description: "Encaissée dans une gorge calcaire aride et secrète de la montagne thébaine, sous l'ombre tutélaire de la cime pyramidale naturelle d'Al-Qurn, la mythique Vallée des Rois abrita pendant plus de cinq siècles le repos éternel des souverains du Nouvel Empire. Rompant avec la monumentalité visible des pyramides memphites trop vulnérables au pillage, les pharaons de la XVIIIe à la XXe dynastie choisirent d'enfoncer leurs sépulcres dans les entrailles rocheuses du désert pour préserver leurs momies et leurs fabuleux trésors funéraires. Ces hypogées vertigineux, s'enfonçant parfois sur plus de cent mètres dans la falaise, forment de véritables cathédrales souterraines conçues comme des répliques de l'au-delà cosmique. Sur les parois stuquées et peintes demeurées dans une fraîcheur chromatique miraculeuse, des fresques d'une virtuosité éclatante reproduisent les livres sacrés guidant le pharaon dans son odyssée nocturne : l'Amdouat, le Livre des Portes, le Livre des Cavernes et les constellations célestes. Découverte intacte en 1922 par Howard Carter et recelant plus de soixante-trois tombeaux royaux, cette nécropole sacrée constitue le sanctuaire le plus prestigieux et fascinant de l'archéologie mondiale.",
    visiter: "La découverte s'amorce par la traversée en navette électrique du défilé minéral jusqu'au cœur de l'oued aride, d'où partent les rampes d'accès aux différentes sépultures royales ouvertes en alternance pour protéger leurs pigments séculaires. La descente dans les hypogées constitue une expérience saisissante où la température s'élève à mesure que l'on s'enfonce dans les longs corridors couverts de hiéroglyphes minutieux. Parmi les joyaux incontournables, la tombe de Séthi Ier (KV17) éblouit par la perfection de ses bas-reliefs polychromes et son plafond astronomique, tandis que celle de Ramsès IV (KV2) ou de Ramsès VI (KV9) dévoile une nef monumentale s'achevant sous la gigantesque déesse Nout engloutissant le disque solaire au crépuscule pour l'enfanter à l'aurore. L'émotion atteint son zénith devant la célèbre sépulture de Toutânkhamon (KV62) où repose encore la momie du jeune roi sous un cercueil de quartzite, ainsi que dans les caveaux de Thoutmosis III ou d'Horemheb. La marche au fond de ce canyon brûlé par le soleil d'Égypte transporte le visiteur au plus près des croyances d'éternité des bâtisseurs de pharaon.",
    link: "https://photos.google.com/share/AF1QipPc0myyS1e0ubKBaM9KazQm8Yq5S2rSirwM2i1SjgE8nzQBJeVJByhkfyqXOg7brw?key=UTByU3NPeUs3c1dDZHpvWXE2Q01HVnFyN1kxRXdB"
  },
  {
    id: "thebes_ramesseum",
    name: "Thèbes - Ramesseum (Temple de Ramsès II)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 78,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XIXe dynastie)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7280,
    lng: 32.6105,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMvh9kjLPuS5UvlCAsITvriDjOYQ8OBYh9xsGtGjl8n5Nj6GxZjxPiEFawAn6NhTfMb2KrnXH5qKwPmIz4QaX1h5XtQnQz3jSWYLRntjezCQe9C8SomQEWYCwzHXALuIpSusnPmFctAvC6sjVoWPO2wJw=w2624-h1750-s-no-gm?authuser=0",
    description: "Dédié au culte perpétuel de Ramsès II associé au dieu suprême Amon-Rê, le Ramesseum s'élève avec une majesté mélancolique sur la rive occidentale du Nil au cœur de la plaine thébaine. Baptisé à l'origine « le Château de millions d'années d'Ousermaâtrê-Setepenrê uni à Thèbes dans le domaine d'Amon » et nommé ainsi par Champollion au XIXe siècle, ce monumental temple funéraire fut conçu pour immortaliser la gloire militaire et la piété divine du plus illustre souverain de la XIXe dynastie. Si le temps et les crues nilotiques ont en partie érodé ses cours colossales, ses ruines imposantes dégagent une poésie tragique inégalée, magnifiée par les débris titanesques du grand colosse abattu de Ramsès II en granit rose d'Assouan, bloc monolithique de plus de mille tonnes qui inspira à Shelley son célèbre poème Ozymandias. Les parois subsistantes du premier pylône et de la salle hypostyle déploient avec un dynamisme pictural saisissant les bas-reliefs épiques de la bataille de Qadech contre les Hittites, tandis que les spectaculaires voûtes de briques crues des magasins attenants témoignent de l'immense puissance économique et redistributive de ce sanctuaire pharaonique d'exception.",
    visiter: "La découverte commence par la traversée de la première cour dominée par les fragments colossaux du géant de granit gisant à terre, dont le torse, le bras et les pieds aux dimensions surhumaines permettent de mesurer la démesure des ambitions ramessides. L'itinéraire franchit ensuite la seconde cour aux piliers osiriens élégants bordée par un portique où subsiste la tête du colosse de la reine Touy, mère du pharaon, avant de pénétrer dans la forêt minérale de la grande salle hypostyle. Sous des architraves encore ornées d'inscriptions hiéroglyphiques polychromes, les quarante-huit colonnes papyriformes à chapiteaux ouverts et fermés filtrent une lumière dorée dévoilant des scènes de couronnement, de processions sacrées et la célèbre scène de l'arbre sacré perséa sur les feuilles duquel Thot et Séchat inscrivent le nom royal pour l'éternité. En contournant le sanctuaire central, l'exploration des immenses magasins voûtés en brique crue offre une immersion archéologique fascinante dans les coulisses de la gestion des céréales et des trésors sacrés, le tout sublimé par un calme admirable et une vue imprenable sur la falaise de Deir el-Bahari et les cimes de la montagne thébaine.",
    link: "https://photos.google.com/share/AF1QipMCKqQjBP2XLww6deDJUXxTSLUm7cE_7gqXIt475IvaVvZ06fxsrg3hF-ZJ7AmwLA?key=TENXSldTUXcycnUwMmFXVWUxYjJhdXVZYzF5a0J3"
  },
  {
    id: "thebes_colosses_memnon",
    name: "Thèbes - Colosses de Memnon (Aménophis III)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 75,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe dynastie)",
    century: "Antiquité (XIVe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7206,
    lng: 32.6105,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNByJ9_2Lbc1vXLFwbPNONyha79Q7dIH9R3X50vc_g8l2A-zDRGWwm61hsQUYUabguxMKJDL_4Rgis4Zn3sFchrEV5BeorFNSnGTM9p05kOpNGbU7QMYv3Sv2jKjjTA80t2e5JFmnPvJUE-fanJIA8lvw=w2624-h1750-s-no-gm?authuser=0",
    description: "Sentinelles titanesques dressées à la lisière des terres fertiles et du désert de la rive occidentale thébaine, les deux colosses de Memnon constituent les ultimes témoins visibles du plus gigantesque complexe cultuel jamais édifié en Égypte : le temple des millions d'années d'Aménophis III. Sculptés au XIVe siècle avant notre ère dans d'immenses blocs monolithiques de quartzite extraits des carrières d'El-Gabal el-Ahmar près du Caire puis transportés par voie fluviale sur plus de six cents kilomètres, ces géants assis de dix-huit mètres de hauteur et de plus de sept cents tonnes chacun gardaient majestueusement l'entrée du premier pylône du sanctuaire royal. Si les crues répétées du Nil et les séismes antiques ont ruiné le vaste temple de Kom el-Hettan qui s'étendait derrière eux, les effigies royales immortalisent toujours le souverain Aménophis III coiffé du némès divin, flanqué à la base de son trône des bas-reliefs du Sema-Taouy célébrant l'union sacrée de la Haute et de la Basse-Égypte par l'entrelacement du papyrus et du lotus. Célèbres dans toute la Méditerranée gréco-romaine après qu'un tremblement de terre en l'an 27 avant notre ère eut fissuré la statue septentrionale, provoquant au lever de l'aurore un phénomène acoustique mystérieux interprété comme la plainte matinale du héros Memnon saluant sa mère Éos, ces géants de pierre continuent de fasciner les voyageurs par leur noble et mélancolique sérénité.",
    visiter: "La découverte des colosses s'effectue librement depuis la vaste esplanade aménagée en bordure de route, permettant d'apprécier de plain-pied la monumentalité vertigineuse des deux effigies royales dominant la campagne nilotique. En observant attentivement les flancs des trônes sculptés, le visiteur remarquera la finesse des bas-reliefs figurant les génies nilotiques liant les plantes héraldiques ainsi que les représentations sculptées en ronde-bosse de la reine Tiyi et de la reine-mère Moutemouia flanquant les jambes colossales du roi. La statue nord livre une fascinante plongée épigraphique à travers la centaine d'inscriptions et de graffitis poétiques en grec et en latin gravés par les illustres pèlerins de l'Antiquité, au premier rang desquels figurent l'empereur Hadrien, l'impératrice Sabine et la poétesse Julia Balbilla venus écouter la légendaire « voix de Memnon ». L'exploration gagne à se prolonger vers l'arrière dans la vaste zone des fouilles archéologiques de Kom el-Hettan menées par la mission germano-égyptienne d'Hourig Sourouzian, où émergent progressivement des sables d'autres statues royales colossales redressées, des stèles géantes et d'impressionnants sphinx en grès. La lumière rasante du début de matinée ou de la fin d'après-midi embrase la roche dorée de quartzite, offrant un contraste pictural splendide avec les palmeraies environnantes.",
    link: "https://photos.google.com/share/AF1QipNE-dssKYq_VrDmptckw4EBMEp10lbHEGt0Qbxu8ZimPgwFLW6B-Oc3UhISRZ6Few?key=bW1qbmRGVGhSNkt3UWtGYUlOM25velYyWmJOaEd3"
  },
  {
    id: "thebes_medinet_habou",
    name: "Thèbes - Médinet Habou (Temple de Ramsès III)",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 76,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XXe dynastie)",
    century: "Antiquité (XIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.7196,
    lng: 32.6013,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM_iR5U6wiG41TixgwSD8PBCikitCe10D8ty_oXf8VbajzaeUb6VWYzWCSoreSeQO7jRcjV2HJ1RHYGrQIkFNRxH61Dl8DkszvIpRXrp4mGSS-oJ0IfAMJoE9xdNNK02xJ3RlhL8Z_mBBi99QOCUZiODA=w2624-h1750-s-no-gm?authuser=0",
    description: "Véritable forteresse sacrée ceinte de puissantes murailles crénelées de briques crues, le complexe monumental de Médinet Habou constitue le temple des millions d'années de Ramsès III et l'un des sanctuaires les plus spectaculaires et complets de l'Égypte pharaonique. Érigé au XIIe siècle avant notre ère sur un site saint où reposaient selon la cosmogonie thébaine les dieux primordiaux de l'Ogdoade d'Hermopolis, cet ensemble grandiose intègre également le vénérable petit temple d'Amon fondé sous la XVIIIe dynastie par Hatchepsout et Thoutmosis III. L'architecture militaire unique du domaine s'affirme dès son entrée monumentale matérialisée par un « migdol » d'inspiration syro-palestinienne, exceptionnel pavillon fortifié flanqué de tours crénelées d'où le pharaon dominait la plaine. Si les colossales façades des pylônes immortalisent avec un réalisme saisissant les campagnes militaires contre les Libyens et la célèbre bataille navale repoussant les redoutables Peuples de la Mer, le temple éblouit surtout par la fraîcheur miraculeuse de ses plafonds et colonnades où subsistent intacts les pigments bleus, jaunes et ocres originels. Dernier grand chef-d'œuvre architectural du Nouvel Empire avant le déclin de l'État ramesside, Médinet Habou conjugue puissance défensive, ferveur liturgique envers Amon et virtuosité polychrome absolue.",
    visiter: "La découverte s'amorce par le franchissement du haut portail oriental fortifié du migdol, dont les salles supérieures abritaient les appartements royaux privés ornés de reliefs intimistes figurant le souverain entouré des dames de son harem. Après avoir longé sur la gauche les élégantes chapelles funéraires des Divines Adoratrices d'Amon (Amenardis et Chepenoupet) et dépassé le petit temple primitif d'Amon, le visiteur se trouve saisi par l'imposant premier pylône gravé de scènes de triomphe royal. Le passage dans la première cour donne accès aux vestiges du palais royal attenant ainsi qu'aux piliers osiriens monumentaux, avant d'aborder la seconde cour, véritable apothéose artistique du site : sous les portiques péristyles abrités des ardeurs du soleil, les architraves et plafonds conservent des cartouches royaux et des motifs célestes d'une vivacité chromatique étourdissante. En parcourant les déambulatoires et les parois extérieures occidentales, les amateurs d'art militaire admireront le célèbre relief dynamique de la chasse aux taureaux sauvages dans les marais et l'affrontement maritime contre la flotte des Peuples de la Mer. La visite se conclut dans le calme feutré du sanctuaire hypostyle intérieur, offrant une plongée archéologique d'une densité émotionnelle rare.",
    link: "https://photos.google.com/share/AF1QipPzrn9sLkxepEnNE-xHPFffJ2Ib__m41dsjynhH9lVONdD8oj7WJe4O7l54WDaYxQ?key=cjFOSlQ2WW1PUm13a3dEbU5yR2s5WHUwV19Bb3hn"
  },
  {
    id: "temple_denderah",
    name: "Denderah - Temple d'Hathor",
    region: "Gouvernorat de Qena",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Qena",
    altitude: 76,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque & Romaine (Ier s. av. J.-C. - Ier s. ap. J.-C.)",
    century: "Antiquité (Ier siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 26.1420,
    lng: 32.6703,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNHuBkRjy5aioymSE7CpQUG8TvDuDxAdu3zd5ldR5sNKim6Cei2vereEnv1XBPgb2l-Czb0Y-6fN8F5SQ7OpLvI2m7N_hw69F7ur4OLmuSkTXF_FYpyGwjBN-wOFYadpC27WAsS0m3L7r2FDaw6qcNADQ=w2624-h1750-s-no-gm?authuser=0",
    description: "Majestueusement dressé sur la rive occidentale du Nil à une soixantaine de kilomètres au nord de Louxor, le complexe de Denderah abrite le temple d'Hathor, l'un des sanctuaires les plus spectaculaires et admirablement préservés de toute l'Égypte gréco-romaine. Dédié à la déesse de l'amour, de la joie, de la maternité et de la musique, ce chef-d'œuvre en grès ocre fut édifié sous les derniers souverains ptolémaïques et parachevé par les empereurs romains, d'Auguste à Trajan. Protégé par une massive enceinte de briques crues, le temple impressionne d'emblée par son immense façade monumentale et son pronaos soutenu par vingt-quatre colossales colonnes sistrophores à chapiteaux hathoriques à quadruple visage. Les récentes campagnes de restauration ont révélé la splendeur chromatique d'origine de ses plafonds astronomiques, où la déesse Nout déploie son corps constellé d'étoiles azurées pour engloutir et régénérer le disque solaire. Célèbre dans l'histoire de l'égyptologie pour avoir abrité le mystérieux zodiaque circulaire de Denderah transporté au musée du Louvre, le sanctuaire associe la ferveur des cultes osiriens à la gloire de la reine Cléopâtre VII et de son fils Ptolémée XV Césarion, immortalisés en bas-reliefs triomphants sur le mur extérieur sud.",
    visiter: "La découverte commence par la traversée de la vaste cour bordée par les deux mammisis de Nectanébo Ier et de l'époque romaine, ainsi que par les émouvants vestiges d'une basilique copte du Ve siècle. L'émotion s'intensifie en pénétrant dans la pénombre grandiose de la grande salle hypostyle, où le regard est immédiatement happé vers les plafonds d'un bleu céleste étourdissant ornés des barques sacrées, des constellations et des douze heures de la nuit. L'itinéraire franchit la salle des apparitions et les chapelles d'offrandes avant d'accéder, fait rarissime en Égypte, aux cryptes souterraines secrètes ornées de bas-reliefs d'une finesse chirurgicale figurant les fameux « mystères de Denderah ». Par un ingénieux escalier en colimaçon gravé de la procession du Nouvel An, on gagne ensuite les terrasses supérieures pour visiter la chapelle du Nouvel An et la chambre du Zodiaque, dont le moulage fidèle rappelle l'emplacement du bas-relief original. La visite s'achève par le tour extérieur du temple pour contempler la monumentale effigie de Cléopâtre VII vêtue des attributs divins face au lac sacré ceinturé de palmiers, dans une atmosphère de sérénité absolue.",
    link: "https://photos.google.com/share/AF1QipNaQawiK9x2K5Yr5hlUTi_utLdUInp7iXvtBgR6CMF-_JNEYaXhjmJfeEK-fcUxYw?key=UDF3RUV4aDRVQXNRbk5GbW43WDNXR0QtUTY3ZGtn"
  },
  {
    id: "temple_abydos",
    name: "Abydos - Temple de Séthi Ier & Osiréion",
    region: "Gouvernorat de Sohag",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Sohag",
    altitude: 72,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XIXe dynastie)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 26.1849,
    lng: 31.9189,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPRhaqbe1gAmPBRrg2rXivhKhTAC-ueYs_QIoWYLsj2fw0F0rjlnERKJC_AcVFGG0vNrYmolFl8nHb7O_TAT9kg2Q7IrcgFEd5rBLRR62bQNb0GR2co2uZHomG5gtn1cA41EDWvrYAPwg_Bz_ZKvWdFNw=w2624-h1750-s-no-gm?authuser=0",
    description: "Dressé aux confins du désert occidental à environ cent cinquante kilomètres au nord de Louxor, le sanctuaire d'Abydos incarnait pour les Égyptiens de l'Antiquité le nombril spirituel du monde et le cœur palpitant du mythe osirien. Cité sainte par excellence où reposait selon la tradition la tête sacrée d'Osiris décapité par son frère Seth, Abydos vit s'ériger au XIIIe siècle avant notre ère le chef-d'œuvre architectural et artistique du pharaon Séthi Ier, parachevé par son illustre fils Ramsès II. Édifié en calcaire fin d'une blancheur éclatante sur un plan atypique en forme de « L », le temple des millions d'années abrite les plus admirables bas-reliefs polychromes de tout l'art pharaonique, réputés pour leur modelé voluptueux, la douceur infinie de leurs traits et la délicatesse inégalée de leurs pigments ocre et turquoise. Rompant avec la tradition du sanctuaire unique, l'édifice déploie sept chapelles axiales parallèles consacrées aux grandes divinités cosmiques ainsi qu'au souverain divinisé, tandis que s'étend juste à l'arrière l'énigmatique Osiréion, cénotaphe souterrain mégalithique en granit d'Assouan qui figure l'émergence de la butte primordiale hors des eaux sombres du Noun.",
    visiter: "La découverte commence par le franchissement des deux cours extérieures pour pénétrer dans la majestueuse première salle hypostyle, où les reliefs dynamiques gravés en creux sous Ramsès II cèdent la place, dès la seconde salle, aux sublimes bas-reliefs en méplat ciselés sous Séthi Ier. L'émerveillement culmine devant l'enfilade des sept chapelles votives voûtées dédiées à Horus, Isis, Osiris, Amon-Rê, Rê-Horakhty, Ptah et Séthi Ier, dont les parois préservent des scènes rituelles d'une fraîcheur chromatique bouleversante. Dans l'aile sud, le couloir des rois dévoile un trésor historique inestimable : la célèbre Table d'Abydos, gravure murale monumentale énumérant la lignée continue de soixante-seize pharaons depuis Ménès jusqu'à Séthi Ier. En observant attentivement les architraves de la première salle, les esprits curieux remarqueront les curieux hiéroglyphes superposés dits « d'Abydos ». La visite se prolonge à l'extérieur par la contemplation en contrebas de l'Osiréion, dont les piliers colossaux émergeant d'une nappe phréatique turquoise dégagent une aura de mystère intemporelle, dans un calme absolu et une sérénité propice au recueillement.",
    link: "https://photos.google.com/share/AF1QipMwBNBmX2oQ1yogFlbAD_k6kei683WIeSyIUw9hKtTStvfbUrh-fpS6cfbiWZK1rA?key=U0RtV3lPbjBBUlQzNEdHQTFWa1d4bHpwYnVkcEFR"
  },
  {
    id: "pyramide_meidoum",
    name: "Pyramide de Meïdoum (Snéfrou)",
    region: "Gouvernorat de Beni Souef",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Beni Souef",
    altitude: 58,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.3881,
    lng: 31.1570,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLE7XfVkUuUATKZvZGt2G9iOf0GWGJEPKx6cHutSVJCNA4LgyYFDSZhBr9op2WqrSrGINcet2kMLABSPUeN53HJ5b-qqsazYCZIDWZ1IQ-F_NeTC6ouMco6ZeVrZ9FuFmw-umaZDqZ1lHRAxQR8Ptodw=w2624-h1750-s-no-gm?authuser=0",
    description: "Sentinelle solitaire dressée aux confins du désert occidental et des terres fertiles à l'orée de l'oasis du Fayoum, la pyramide de Meïdoum incarne le laboratoire architectural le plus fascinant et audacieux de toute l'Égypte pharaonique. Initiée sous le règne d'Houni puis transformée et parachevée au XXVIe siècle avant notre ère par le grand roi Snéfrou, bâtisseur prolifique et père de Khéops, cette structure monumentale marque le passage décisif de la pyramide à degrés traditionnelle vers la première pyramide géométrique à faces lisses de l'Histoire. Avec sa silhouette insolite et spectaculaire évoquant une tour-donjon médiévale à trois degrés émergeant d'une imposante colline d'éboulis calcaires, le monument suscita de nombreuses légendes locales qui lui valurent le surnom évocateur d'el-Haram el-Kaddab (« la fausse pyramide »). Longtemps attribué à un effondrement catastrophique de son parement extérieur lors de son édification, cet aspect singulier résulte en réalité de l'exploitation séculaire de son précieux calcaire fin de Tourah par les carriers antiques et médiévaux, dévoilant ainsi avec une nudité saisissante les puissantes assises internes du noyau primitif et le génie expérimental des premiers architectes royaux.",
    visiter: "La découverte commence au pied de l'immense cône de débris par l'ascension d'un escalier de bois sur la face nord pour atteindre l'entrée historique perchée à une vingtaine de mètres au-dessus du sol. L'exploration intérieure constitue une aventure archéologique intimiste et saisissante : on s'engage dans un long couloir descendant très étroit et incliné à 28 degrés plongeant sur près de soixante mètres, avant de franchir deux antichambres et de se hisser par une échelle verticale dans la chambre funéraire taillée dans la roche. Véritable prouesse technique, cette voûte en encorbellement sur quatre faces — la plus ancienne jamais conçue dans une sépulture royale égyptienne — exhale encore les effluves séculaires des madriers de cèdre du Liban d'origine scellés sous le plafond. De retour au grand jour, la marche se prolonge vers la chapelle funéraire orientale remarquablement préservée, le temple haut et l'exploration des mastabas princiers environnants, notamment le colossal mastaba 17 dont les couloirs obscurs réservent une traversée mystérieuse, dans une atmosphère de solitude et de silence absolu loin des flux touristiques de la capitale.",
    link: "https://photos.google.com/share/AF1QipO8IKuCvuHEQVErTLuZk65NeutsaWNJWrUz49BWLMhhT6VAQfKIF67-jtxceGrb2A?key=WHFSRU9OME5wTmtIb3lSbkJSbTBkUFZEOGQ4bG5R"
  },
  {
    id: "dahchour_pyramide_rouge",
    name: "Dahchour - Pyramide Rouge (Snéfrou)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 67,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1, unesco: 1 },
    lat: 29.8088,
    lng: 31.2062,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOyd3k7egcC-KbVTfiibheQpm_sCjVOcwC6eDQ4UyEgtIspCQB5ep7WWZXu5CRmAgc2vlMm5uWb57Y-bRzvWXSH8YqkIIYrg1qSzWtapvDEDNcYd1WhYvikVXGYsJW8Xew4CBbYkE_9FAaoiZFjVxBwGQ=w2684-h1789-s-no-gm?authuser=0",
    description: "Dressée avec une pureté souveraine sur le plateau désertique de Dahchour à une quarantaine de kilomètres au sud du Caire, la pyramide Rouge constitue l'un des accomplissements majeurs de l'architecture universelle : la toute première pyramide à faces lisses parfaitement réussie de l'Histoire humaine. Troisième plus imposante pyramide d'Égypte par son volume après celles de Khéops et de Khéphren, ce titan de cent quatre mètres de hauteur fut érigé au XXVIe siècle avant notre ère par le pharaon Snéfrou, fondateur de la IVe dynastie et bâtisseur le plus prolifique de l'Ancien Empire. Après les tâtonnements structurels de Meïdoum et le changement d'angle forcé de la pyramide Rhomboïdale voisine, les architectes royaux adoptèrent d'emblée une pente adoucie et constante de 43 degrés, garantissant une stabilité parfaite à cette montagne de pierre. Tirant son nom de la teinte ocre rougeoyante de son calcaire local ferrigineux — mis à nu après le pillage médiéval de son somptueux parement extérieur de calcaire blanc de Tourah —, l'édifice se dresse comme l'ultime marchepied technologique ayant rendu possible l'édification de la Grande Pyramide de Gizeh par son fils Khéops.",
    visiter: "L'aventure débute sur la face nord par l'ascension d'un grand escalier extérieur maçonné menant à l'entrée historique située à vingt-huit mètres au-dessus du désert, offrant un vaste panorama sur la pyramide Rhomboïdale et la bande verdoyante de la vallée du Nil. L'exploration intérieure procure une sensation archéologique intense : on s'engage dans un boyau très rectiligne et bas de plafond, incliné à 27 degrés, qui plonge sur plus de soixante mètres au cœur du massif rocheux. Au bas de la descente, l'atmosphère se réchauffe et dévoile successivement deux antichambres vertigineuses dotées de voûtes en encorbellement mégalithiques s'élevant à plus de douze mètres sur onze assises de blocs parfaitement jointoyés. Par un escalier en bois moderne aménagé en hauteur dans la seconde antichambre, on pénètre enfin dans la chambre funéraire supérieure orientée est-ouest, dont la voûte en encorbellement culmine à près de quinze mètres dans une pénombre solennelle imprégnée d'effluves minérales. L'absence quasi-totale de foule touristique confère à cette traversée des entrailles pharaoniques une charge mystique et intemporelle inoubliable.",
    link: "https://photos.google.com/share/AF1QipNpwcSK9L1BsvYFDmFWmey31PqN9K9z8b5yVZ1UTLOE8f5ErvX__Ml-xqDduQ1COg?key=eE9jXzM4NUR1akZydWRmNnpaWmxzZjNnanVvVklR"
  },
  {
    id: "dahchour_pyramide_rhomboidale",
    name: "Dahchour - Pyramide Rhomboïdale (Snéfrou)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 64,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.7903,
    lng: 31.2093,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMer0QHDvqpAXsu4CG0KKRpAwlG6T4ED-Vaiw0Z_WuJuADw-Lf_z4KGa1VQHoou-3jszi_lEjnbm6NRoGb4LFab-rqiPzm2JbO9q2WNGzHEpjIECqsm4_nK1fB2GnN98CtogJYVmbFVjIa5ymhbeyXf3g=w2684-h1789-s-no-gm?authuser=0",
    description: "Dressée comme une apparition extraterrestre au milieu des étendues vierges du plateau désertique de Dahchour, la pyramide Rhomboïdale constitue l'un des jalons les plus fascinants et énigmatiques de toute l'aventure constructive humaine. Érigée au XXVIe siècle avant notre ère par le pharaon Snéfrou à mi-chemin entre ses chantiers de Meïdoum et la pyramide Rouge, cette silhouette à double pente unique au monde témoigne de la dramatique crise d'ingénierie qui frappa les bâtisseurs royaux en pleine élévation. Commencée avec une pente audacieuse de cinquante-quatre degrés, la structure colossale menaça de s'effondrer sous son propre poids lorsque d'inquiétantes fissures se propagèrent dans les couloirs intérieurs, forçant les architectes à adoucir l'angle à quarante-trois degrés à partir de quarante-neuf mètres de hauteur. Ce compromis sauva le monument, qui culmine à cent cinq mètres et offre la particularité rarissime d'avoir conservé la quasi-totalité de son somptueux parement calcaire d'origine en pierre de Tourah, poli et étincelant sous le soleil d'Égypte. Seule pyramide à posséder deux entrées distinctes menant à deux réseaux indépendants de chambres funéraires, elle est flanquée au sud de son exceptionnelle pyramide satellite magnifiquement conservée.",
    visiter: "La découverte s'amorce par la contemplation extérieure de ses faces lisses vertigineuses, où le calcaire fin étincelle dans la lumière crue du désert, avant de longer la face sud pour explorer la pyramide satellite de Snéfrou dont le couloir et la chambre sont accessibles. Ouverte au public après plus de cinquante ans de fermeture, l'incursion au cœur de la pyramide Rhomboïdale procure l'une des aventures spéléologiques et archéologiques les plus mémorables d'Égypte : on s'engage sur la face nord par un boyau très étroit et plongeant de soixante-dix-neuf mètres de longueur incliné à vingt-huit degrés, obligeant à descendre courbé dans une atmosphère confinée et mystérieuse. Au fond, une succession de passerelles de bois franchit une chambre inférieure au plafond en encorbellement monumental s'élevant à plus de dix-sept mètres, avant d'emprunter un escalier suspendu vertigineux et un couloir horizontal menant au réseau occidental de la seconde chambre funéraire, encore étayée de poutres massives en cèdre du Liban vieilles de quarante-six siècles. La quiétude sauvage du désert de Dahchour, loin des circuits touristiques saturés du Caire, sublime cette immersion physique inoubliable au berceau de la géométrie monumentale.",
    link: "https://photos.google.com/share/AF1QipNpwcSK9L1BsvYFDmFWmey31PqN9K9z8b5yVZ1UTLOE8f5ErvX__Ml-xqDduQ1COg?key=eE9jXzM4NUR1akZydWRmNnpaWmxzZjNnanVvVklR"
  },
  /* =========================================================================
   FICHIER : script.js — PARTIE 2 / 3
   Sites 18 à 34 + Référentiels des catégories et siècles
   ========================================================================= */

  {
    id: "musee_louxor",
    name: "Musée de Louxor",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 75,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (1975)",
    century: "XXe siècle",
    category: "musee",
    counts: { musee: 1 },
    lat: 25.6983,
    lng: 32.6422,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOlSLP2nXJzrNz-7YmfZxfrtGaKuQMpxo7jzE8XADlNHn5wfzUnwoSPY1J3xMtLRlx3m8z9tN888ejTQ4OWG-sMIk0VM6t5q91zs02fJkeuHymN7ZYHYkhcoFohxLV5jJyCBYJhFMlJsEVgbaDhD1ebyA=w2416-h1611-s-no-gm?authuser=0",
    description: "Établissement muséographique de premier plan situé sur les rives orientales du Nil à Louxor, abritant une collection remarquable d'antiquités découvertes dans la région thébaine. Les salles lumineuses et sobres mettent en valeur des chefs-d'œuvre de sculpture pharaonique, des statues royales d'une facture exceptionnelle ainsi que des objets funéraires issus des nécropoles environnantes, offrant ainsi un éclairage scientifique et esthétique incomparable sur la civilisation égyptienne ancienne.",
    visiter: "La découverte des galeries permet d'admirer la célèbre collection de statues trouvées cachées dans la cachette du temple de Louxor, ainsi que les magnifiques pièces de la période du Nouvel Empire. L'espace dédié aux artefacts royaux met en lumière le raffinement de l'art statuaire thébain à travers les siècles. L'agencement moderne et aéré des salles facilite l'observation détaillée de chaque pièce maîtresse dans des conditions idéales.",
    link: "https://photos.google.com/share/AF1QipNaUQLL9KDZDfUY4hCnLvso3WtTVwMtD8aQKJ3FVgj0Z2XqIY_ykvLebSDLPVA0rw?key=ZG43MlMxQjc0Tl9vMDNfRU93eTdnMXZ6anBES3RB"
  },
  {
    id: "kom_ombo",
    name: "Temple de Kom Ombo",
    region: "Gouvernorat d'Assouan",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Assouan",
    altitude: 90,
    is_island: false,
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque (-180 av. J.-C.)",
    century: "Antiquité (IIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 24.4536,
    lng: 32.9575,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM7PUFtMCkaIiznC67hMHTYvSrp7icTFi1fmvfL6P3eyf__l0mGzgjqbOOIdpKlGLn0KjMYN1FBC1Lp_lsn1GDpPOkJHcvAUAgXWl5MZwkF9RD8EXB3BEHhxroatqj-63eHvfMvQ7WoFfJ-XnhbxYFm5Q=w2468-h1645-s-no-gm?authuser=0",
    description: "Sanctuaire remarquable dressé sur une colline surplombant les rives du Nil, célèbre pour son architecture double unique dédiée à deux divinités distinctes : le dieu faucon Haroëris et le dieu crocodile Sobek. Ses salles hypostyles, ses reliefs sculptés et son nilomètre ancien témoignent de l'importance religieuse et économique de ce site stratégique au carrefour des routes caravanières. Un lieu chargé d'histoire où la vénération des crocodiles sacrés rythmait la vie des prêtres pharaoniques à travers les siècles.",
    visiter: "Les doubles sanctuaires symétriques révèlent des bas-reliefs détaillés dédiés aux divinités tutélaires du site, tandis que le couloir extérieur présente des représentations d'instruments chirurgicaux antiques. La cour principale conserve des colonnades richement ornées face aux panoramas du fleuve, et le musée des crocodiles situé à proximité expose les momies de ces animaux sacrés retrouvées dans les nécropoles environnantes, complétant ainsi l'immersion historique.",
    link: "https://photos.google.com/share/AF1QipNR-DYcGyqxLai4EXbIIRgy8JE9kdE62GYsdQjDP_K8avlaYTDSztbKFL-NKhxi4g?key=ZlgzWXp5YzF6Ti03WE5Gb0s4VDJYNzQybllNNmtn"
  },
  {
    id: "temple_edfu",
    name: "Temple d'Edfou (Horus)",
    region: "Gouvernorat d'Assouan",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Assouan",
    altitude: 85,
    is_island: false,
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque (-237 av. J.-C.)",
    century: "Antiquité (IIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 24.9778,
    lng: 32.8733,
    image: "https://lh3.googleusercontent.com/pw/AP1GczODDOHLKqHDHHrENAvAJ6-1bs8Xj6qVoflzOrpcClYqlWXXRgGY_ICKgqAjr9EDeL3yN8cx6v3NmsZS5uQR7gclNIcW2wp-BvXvCloeT-CQH8X_UX4lo-ePx5yWdNmXCzthCKiYptS4X9bZy9xfXbqA0g=w2468-h1645-s-no-gm?authuser=0",
    description: "Sanctuaire monumental dédié au dieu faucon Horus, considéré comme le temple de l'Égypte antique le mieux préservé au monde. Érigé pendant la période ptolémaïque, il offre un témoignage exceptionnel sur l'architecture religieuse, les rituels sacrés et la mythologie pharaonique grâce à ses structures restées intactes à travers les millénaires. Ses immenses pylônes d'entrée, ses salles hypostyles richement décorées de bas-reliefs astronomiques et son saint des saints plongent immédiatement les voyageurs au cœur de la spiritualité de la vallée du Nil.",
    visiter: "Le franchissement du premier pylône monumental permet d'accéder à la grande cour à péristyle encadrée de colonnes richement sculptées. Les salles intérieures dévoilent des scènes mythologiques détaillées retraçant la lutte légendaire entre Horus et Seth. Les chapelles annexes et la chambre du sanctuaire abritent les vestiges des anciens rituels sacerdotaux, tandis que les structures préservées de l'enceinte offrent un panorama remarquable sur l'agencement architectural d'un grand domaine divin de l'Égypte ptolémaïque.",
    link: "https://photos.google.com/share/AF1QipNqbMqY_-InIkAJX9cPCrdTcJxd05Ei8zaKJYCjHGXrIGOmW3MY9HfCRdYEbiU_2g?key=ZlFTdkRzMzVrTDh4WmZtRjVFZEVVbHlCQ2RmM0xR"
  },
  {
    id: "temple_esna",
    name: "Temple de Khnoum à Esna",
    region: "Gouvernorat de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Louxor",
    altitude: 80,
    is_island: false,
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Gréco-Romaine (Ier-IIIe siècle)",
    century: "Antiquité (Ier siècle)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 25.2934,
    lng: 32.5543,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNZHFqtzOqeApuv0iH5AFgE7JDfw7vZbJeoRKmc_WpEzFhUdkMes7MiszZtjaHfRVEfU_bq1NtjYeu4tCGzJVoeTD43Xfxf6ySOf_gdxXkHKAYt4upzrPljYjVZR0SfpD85cIem3aV-Z54nfDIz6iXdQg=w2945-h1964-s-no-gm?authuser=0",
    description: "Sanctuaire gréco-romain spectaculaire dédié au dieu bélier Khnoum, célèbre pour sa grande salle hypostyle magnifiquement restaurée aux couleurs d'origine éclatantes. Longtemps enseveli sous les sédiments et les habitations modernes, le temple se découvre aujourd'hui en contrebas de la ville actuelle. Ses imposantes colonnes aux chapiteaux floraux uniques et son plafond astronomique richement sculpté offrent un témoignage exceptionnel sur les derniers fastes de la religion de l'Égypte antique.",
    visiter: "La descente dans l'enceinte archéologique permet d'admirer de près les fûts monolithiques sculptés de bas-reliefs aux pigments polychromes récemment mis en valeur par un minutieux travail de nettoyage. Le plafond de la salle hypostyle dévoile des représentations célestes et des scènes rituelles d'une finesse remarquable. Les inscriptions hiéroglyphiques tardives gravées sur les murs extérieurs complètent la découverte de ce joyau patrimonial de la vallée du Nil.",
    link: "https://photos.google.com/share/AF1QipP8lTc2YQ6wilMtOuwVNaP0HZHkxSfOhO1qvbQ5pEEghmOMgFewrHdnv-boONi6KQ?key=WGNwUzZMU0dDbUgwLWxvM3doWk13NkJqQUNrbDlB"
  },
  {
    id: "philae",
    name: "Temple de Philae",
    region: "Gouvernorat d'Assouan",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Assouan",
    altitude: 110,
    is_island: true,
    island_name: "Philae (Agilkia)",
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque & Romaine (-380)",
    century: "Antiquité (IVe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 24.0255,
    lng: 32.8842,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNEZkmSVkAOkW3xempadnM8SHkLXcN3lxMwF4P_v6HtDWRgGXZ7S5acbBjjdYQ9MysHS9TvU4gC2OHbpzOVelFEwDghH81UVzI3MSQWjvGtk5lcPhRiTUSWH-ddLkZdWe9EtrN-ULTtu5eSojGN3EmOQA=w2518-h1679-s-no-gm?authuser=0",
    description: "Majestueux temple dédié à la déesse Isis, dressé sur une île sacrée du Nil et également sauvé des eaux par l'UNESCO lors du déplacement des monuments de Nubie. Un site imprégné de mystère et d'une beauté architecturale inouïe. Ce complexe somptueux fut l'un des derniers bastions de la religion de l'ancienne Égypte, abritant des sanctuaires raffinés, des colonnades élégantes et des murs couverts d'inscriptions hiéroglyphiques remarquablement préservées au milieu des flots.",
    visiter: "L'approche de l'île d'Agilkia s'effectue traditionnellement par les embarcations locales naviguant sur les eaux du fleuve. Le kiosque de Trajan présente des colonnades florales remarquables, la cour principale est entourée de portiques sculptés, et les sanctuaires intérieurs conservent des témoignages majeurs des cultes isiaques, le tout baigné par les reflets lumineux du fleuve.",
    link: "https://photos.google.com/share/AF1QipPVZEvhbCKZ1OsGyi7gmCW1HWWoCPJRFurTVfJyrV-AeNttAhYo3TmhJRSCkkyIdw?key=SG1iYmYyang3QVE5Sk50NDR2aGZHTEh3aXBKQ2lB"
  },
  {
    id: "ile_elephantine",
    name: "Île Éléphantine",
    region: "Gouvernorat d'Assouan",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Assouan",
    altitude: 98,
    is_island: true,
    island_name: "Éléphantine",
    transport: "bateau",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique & Cité d'Abou",
    century: "Antiquité",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 24.0850,
    lng: 32.8870,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMe5-tPfvBETQYNCaS7NQE82xAvrOGgrkqnWcydSwujR6xCg-Fwh_4V9telxRd-O_X4ET6aLQcybNwJBJ58KjEJyB2zoQWgIyFddWJAc_vLjj4Bdgz21o8-HsKKWdkfrUQrv8eLPr2bbmslLuhpnJts2A=w2686-h1791-s-no-gm?authuser=0",
    description: "Bercée par les eaux calmes du Nil juste en aval de la première cataracte, l'île Éléphantine constitue le berceau historique et mythique de la frontière méridionale de l'Égypte antique. Véritable verrou stratégique et carrefour marchand convoité dès les premières dynasties, l'antique cité fortifiée d'Abou tirait son nom du commerce florissant de l'ivoire et des pierres précieuses venues de Nubie. Dominé par les sanctuaires millénaires dédiés au dieu bélier Khnoum, maître des crues bienfaisantes, et à son épouse Satet, le site abrite également le célèbre nilomètre étagé taillé dans la roche granitique qui permettait de scruter la montée des eaux fertilisantes. Au-delà de ses vestiges pharaoniques majeurs, l'île déploie une douceur de vivre intemporelle à travers ses villages nubiens traditionnels aux façades d'argile peintes de motifs géométriques éclatants, entourés de jardins luxuriants et de vergers ombragés par de majestueux palmiers dattiers, offrant un contraste saisissant avec l'aridité minérale des collines désertiques bordant le fleuve.",
    visiter: "L'accès à l'île s'effectue en quelques minutes de navigation à bord des felouques ou embarcations traditionnelles traversant les flots depuis la corniche d'Assouan. La découverte s'amorce à la pointe sud par l'exploration approfondie de la vaste zone archéologique, où les ruines des temples de Khnoum et de Satet côtoient les vestiges de la cité antique d'Abou et l'escalier millénaire du nilomètre plongeant dans le fleuve. La visite se prolonge agréablement à pied au fil des sentiers de terre battue serpentant à travers les paisibles villages nubiens de Siou et de Koti, réputés pour leur hospitalité chaleureuse, leurs cours ombragées et leurs cafés pittoresques. Les chemins bordés de bananiers et de palmeraies mènent à des points de vue exceptionnels sur les rochers de granit poli émergeant du lit du Nil et sur le mausolée de l'Aga Khan se dressant sur la rive occidentale, invitant à une halte contemplative inoubliable au coucher du soleil.",
    link: "https://photos.google.com/share/AF1QipNZfBT4M0PS4dNnwcK68X2Oia2tILgY86cyJSq9mDJ69FPcLPDkB9H4VMkFde2FiQ?key=bWVoRGE4X3E5dUxxVk81akd5Z3BtTzMtUm55aWx3"
  },
  {
    id: "musee_nubie_assouan",
    name: "Musée de la Nubie à Assouan",
    region: "Gouvernorat d'Assouan",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Assouan",
    altitude: 106,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (1997) & Héritage Nubien",
    century: "XXe siècle",
    category: "musee",
    counts: { musee: 1 },
    lat: 24.0792,
    lng: 32.8906,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNBtyYHTiPCJzYSSKTWjbFKtl7gKteYYMkH-JT7Q6Utpdi4D6XQTQTiAp9Ewa7lMkh9d3eENIBL5kbXdkRTDmNlPoE9tEL0hSHwXg8b1bXr-KrnXpvholz1BiSvEDmaq6XGGTEeaqQcoH9OkyPqD1s7Zg=w2574-h1715-s-no-gm?authuser=0",
    description: "Dédié à la sauvegarde et au rayonnement de la mémoire millénaire de la terre de Koush, le musée de la Nubie à Assouan s'impose comme l'un des plus remarquables complexes muséographiques du continent africain. Inauguré en 1997 sous l'égide de l'UNESCO dans le sillage de la grande campagne internationale de sauvetage des trésors nubiens engloutis par les eaux du lac Nasser, cet édifice récompensé par le prestigieux prix Aga Khan d'architecture s'intègre harmonieusement aux collines de granit rose dominant la vallée du Nil. Bâti en blocs de grès ocre rappelant l'épure et les proportions majestueuses des temples pharaoniques, le musée abrite une collection inestimable de plus de trois mille pièces d'exception, retraçant l'épopée de la région depuis les cultures néolithiques et le royaume de Kerma jusqu'à l'ère islamique en passant par la domination égyptienne et l'apogée chrétienne. Dans une scénographie aérée et baignée d'une lumière naturelle délicate, statues royales monumentales, parures en or martelé, stèles funéraires sculptées et maquettes immersives racontent avec intensité la splendeur et la résilience d'un peuple à l'identité séculaire dont la terre ancestrale fut à jamais transformée par la montée du fleuve.",
    visiter: "Le parcours muséal s'articule autour d'une vaste nef centrale descendante guidant les visiteurs à travers les grandes étapes chronologiques de la Nubie antique et médiévale, jalonné de chefs-d'œuvre tels que les colosses royaux de la XXVe dynastie nubienne et les céramiques fines méroïtiques. Des dioramas réalistes grandeur nature mettent en scène la vie quotidienne, les costumes chamarrés, les cours intérieures traditionnelles en pisé et les coutumes artisanales des Nubiens avant leur relocalisation, offrant une passerelle humaine particulièrement émouvante entre passé millénaire et mémoire vivante. La découverte se poursuit agréablement en plein air au cœur d'un parc paysager étagé d'inspiration désertique, où des canaux d'eau vive, des cascades artificielles et des sentiers plantés de palmiers et de flores indigènes serpentent entre de monumentaux blocs rocheux ornés de gravures rupestres préhistoriques authentiques. Facilement accessible à pied depuis la corniche ou en taxi depuis le centre d'Assouan, le site dispose d'espaces de repos ombragés propices à une halte contemplative incontournable pour approfondir l'histoire de la Haute-Égypte.",
    link: "https://photos.google.com/share/AF1QipNZfBT4M0PS4dNnwcK68X2Oia2tILgY86cyJSq9mDJ69FPcLPDkB9H4VMkFde2FiQ?key=bWVoRGE4X3E5dUxxVk81akd5Z3BtTzMtUm55aWx3"
  },
  {
    id: "musee_imhotep_saqqarah",
    name: "Saqqarah - Musée Imhotep",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 34,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (2006) & Héritage de l'Ancien Empire",
    century: "XXIe siècle",
    category: "musee",
    counts: { musee: 1 },
    lat: 29.8704,
    lng: 31.2251,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNQlXL7V0VuSmR8prrrDjbFqJmmuFMNyrSCiLUqNvK5LCcbHOj5BBAD055wPUQwtedURIIn-4ud9QNhRq-HiUdUDtzsTOYOMiDk1NrJXQkeZm4gC_UxOJ_4mgnpiIUqHB0vXmGvroeaP6_CZnA9a2--sw=w2988-h1993-s-no-gm?authuser=0",
    description: "Édifié au pied de l'escarpement désertique marquant l'entrée du plateau de Saqqarah, le musée Imhotep rend un hommage vibrant au premier génie universel et architecte identifié de l'Histoire, concepteur visionnaire du complexe funéraire à degrés du pharaon Djéser. Inauguré en 2006 et rouvert après une modernisation complète de ses galeries, cet établissement d'exception a été pensé comme un écrin lumineux pour abriter les trésors les plus précieux mis au jour au cours de plus d'un siècle de fouilles archéologiques dans cette nécropole memphite. Le musée célèbre également la mémoire de l'architecte et égyptologue français Jean-Philippe Lauer, qui consacra plus de soixante-dix années de sa vie à reconstituer patiemment par anastylose les portiques et les chapelles de calcaire fin du site. À travers une muséographie épurée, aérée et entièrement climatisée, le parcours donne à contempler des pièces maîtresses de l'Ancien Empire d'une finesse inouïe, depuis les célèbres carreaux de faïence bleue d'origine ornant les appartements funéraires souterrains jusqu'aux statues en bois de sycomore, sarcophages peints et reliefs d'offrandes. Ce sanctuaire pédagogique constitue le prélude idéal avant de gravir la route montant vers l'immensité minérale des pyramides et des mastabas.",
    visiter: "La visite s'amorce dans le vestibule d'honneur devant l'émouvant socle de calcaire de la statue royale de Djéser, portant gravé dans la pierre le nom d'Imhotep aux côtés de celui de son roi, témoignage exceptionnel de l'élévation d'un homme de science au rang des plus grands dignitaires de l'État pharaonique. La déambulation se poursuit à travers cinq galeries thématiques judicieusement agencées, dont le point d'orgue réside dans la reconstitution fidèle d'une paroi de la chambre bleue de Djéser, sertie de ses véritables plaques de faïence turquoise étincelantes d'une fraîcheur intacte. Les vitrines dévoilent des découvertes majeures telles que la célèbre collection d'instruments chirurgicaux en bronze trouvée dans la tombe du médecin royal Qar, des vases en albâtre translucide de l'époque thinite ainsi que des statues funéraires d'une troublante humanité. L'aile consacrée aux archives de Jean-Philippe Lauer expose avec une grande charge émotionnelle ses instruments d'arpentage, ses carnets de relevés aquarellés et son bureau de campagne, rappelant l'aventure scientifique hors norme de la redécouverte de Saqqarah. Une halte culturelle et rafraîchissante indispensable pour comprendre le berceau de l'architecture monumentale.",
    link: "https://photos.google.com/share/AF1QipMYh6XdRx9VRSnZt3ue2OwEPUbvln_2602MFhakCcqwm2frL-IEJgT3vWg_o3BQhw?key=TXlFS1kzbXJtZERaQU9FOGFqUDJuVlVHTWtoNVlR"
  },
  {
    id: "saqqarah_mastabas",
    name: "Saqqarah - Nécropole des Mastabas (Ti & Mérérouka)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 48,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - Ve & VIe dynasties)",
    century: "Antiquité (XXIVe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.8760,
    lng: 31.2214,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPm2-iD73muRH_jVot8-EE1lyBKVZCTLF39pIHWToS8yhyubMwAs5zilUHQJ8CKTJTwBLusmEB1RKN_8j-W8gHIHNdsMdhulPx-9UaBuslVVC6aemGNoYObE_BVQvwzoIcvn4PIInE4JNMYBPShsaE66Q=w2650-h1987-s-no-gm?authuser=0",
    description: "Disséminés sur le plateau désertique de Saqqarah à l'ombre bienveillante des pyramides royales, les mastabas des hauts dignitaires de l'Ancien Empire constituent la chronique visuelle la plus vivante, spontanée et éblouissante de la civilisation pharaonique à son apogée. Véritables palais d'éternité édifiés en calcaire fin de Tourah pour les vizirs, grands prêtres et intendants de cour des Ve et VIe dynasties, ces sépultures monumentales à base rectangulaire et parois inclinées rompent avec la rigueur solennelle des caveaux royaux. À l'intérieur, les chapelles funéraires déploient sur des centaines de mètres carrés de bas-reliefs d'une virtuosité ciselée inégalée, peints à l'origine de pigments éclatants. Chef-d'œuvre absolu de cet art narratif, le mastaba de Ti — haut fonctionnaire royal et surveillant des domaines sacrés — ainsi que l'immense sépulture familiale de Mérérouka, vizir tout-puissant du pharaon Téti comptant plus de trente-deux salles, immortalisent avec un naturalisme saisissant l'abondance de la vallée du Nil, la ferveur des liturgies de subsistance et l'inébranlable foi en une immortalité à l'image du monde terrestre.",
    visiter: "La découverte s'amorce par le franchissement des portiques d'entrée taillés dans le calcaire pour pénétrer dans les cours à péristyle et l'enfilade des couloirs étroits baignés d'une lumière rasante. L'émerveillement culmine devant les registres sculptés du mastaba de Ti : les parois s'animent d'un foisonnement de scènes champêtres et marécageuses où le défunt, debout sur une barque de papyrus, chasse l'hippopotame et le poisson au milieu d'oiseaux nichant dans les ombelles, tandis que se succèdent le halage des filets, les labours guidés par les bœufs et le gavage des oies. En s'approchant des serdabs dissimulés, le regard croise à travers les fentes murales la statue du défunt recevant les effluves de l'encens rituel. La visite se prolonge dans l'immense labyrinthe funéraire de Mérérouka, où les scènes de poterie, d'orfèvrerie, de danseuses acrobatiques et de scribes comptabilisant les récoltes rivalisent de minutie anatomique et d'expressivité. Cette immersion intimiste et contemplative au cœur du quotidien des bâtisseurs de l'Ancien Empire dévoile le sommet artistique de la sculpture memphite, préservé miraculeusement depuis quarante-cinq siècles.",
    link: "https://photos.google.com/share/AF1QipMYh6XdRx9VRSnZt3ue2OwEPUbvln_2602MFhakCcqwm2frL-IEJgT3vWg_o3BQhw?key=TXlFS1kzbXJtZERaQU9FOGFqUDJuVlVHTWtoNVlR"
  },
  {
    id: "saqqarah_pyramide_teti",
    name: "Saqqarah - Pyramide de Téti (Textes des Pyramides)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 52,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - VIe dynastie)",
    century: "Antiquité (XXIVe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.8753,
    lng: 31.2236,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMfxTYdfUP4yWKt--mBt4ufisLTqTfNE2AjPCYY7te7W3jVjiPUsxAK35VXk4bWdC9vly9HdljYYOqyteOIBtRw_KkgxgF-qq38sElFmwBr-aAMafdO3ekdtpCluGqPe39pw2i78b9VdT9QSs7-SGG0bw=w2650-h1766-s-no-gm?authuser=0",
    description: "Dressée au nord-est de la nécropole de Saqqarah au cœur d'un paysage lunaire de monticules et de tombes royales, la sépulture du pharaon Téti — fondateur de la VIe dynastie de l'Ancien Empire — offre un contraste spectaculaire entre son aspect extérieur dévasté et la somptuosité de ses appartements funéraires souterrains. Réduite par l'érosion séculaire et le pillage de son parement de calcaire de Tourah à une modeste colline d'éboulis arrondis culminant à une vingtaine de mètres, cette pyramide baptisée à l'origine « Les places de Téti sont stables » dissimule l'un des trésors épigraphiques et spirituels les plus inestimables de l'humanité. Téti fut en effet le deuxième souverain égyptien, après Ounas, à faire tapisser l'intégralité des parois de son antichambre et de sa chambre sépulcrale des célèbres Textes des Pyramides. Gravés avec une finesse calligraphique admirable dans le calcaire fin, ces formules liturgiques, hymnes solaires et rituels d'apothéose forment le plus ancien corpus religieux et théologique écrit au monde, conçu pour assurer l'ascension de l'âme royale vers les étoiles impérissables.",
    visiter: "L'exploration débute par la descente discrète dans une excavation sablonneuse sur la face nord de la pyramide, donnant accès à un boyau descendant très incliné et bas de plafond aménagé de traverses de bois. Au terme de cette traversée souterraine s'ouvrant après une herse de granit colossale, le visiteur pénètre dans une antichambre d'une solennité saisissante : sur les murs intacts s'étalent des colonnes verticales ininterrompues de hiéroglyphes minutieusement incisés, rehaussés à l'origine de pigments vert-bleu symbolisant la renaissance perpétuelle. L'itinéraire franchit ensuite le passage étroit menant à la chambre funéraire proprement dite, où trône le magistral sarcophage royal taillé dans un bloc monolithique de grauwacke et de basalte sombre poli, orné d'inscriptions et coiffé d'une gigantesque voûte à double chevron poudrée d'étoiles sculptées. L'atmosphère fraîche, feutrée et mystique de ce sanctuaire souterrain, souvent accessible en toute quiétude à l'écart des foules avant d'enchaîner avec les mastabas voisins de Mérérouka et de Kagemni, livre une rencontre intime et inoubliable avec la pensée métaphysique de l'âge des pyramides.",
    link: "https://photos.google.com/share/AF1QipMYh6XdRx9VRSnZt3ue2OwEPUbvln_2602MFhakCcqwm2frL-IEJgT3vWg_o3BQhw?key=TXlFS1kzbXJtZERaQU9FOGFqUDJuVlVHTWtoNVlR"
  },
  {
    id: "saqqarah_serapeum",
    name: "Saqqarah - Sérapéum (Nécropole des Taureaux Apis)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 53,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique & Époque Ptolémaïque (XIVe s. av. J.-C. - Ier s. av. J.-C.)",
    century: "Antiquité (XIVe siècle av. J.-C. à Ier siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.8761,
    lng: 31.2103,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOm9dTai3YyXLZLo6AY9NqTKPU7t-t2QngAmHWZrJYmXXv6n7xiViZWbFZcG1uuZHt2vK7wYzYxfoGzZClTYRx5OS2JpsWUfgLe0hbTGhDzy3dT6ngbUFWrJ89FXFdFhCpHs1TcAR-N1tY-bspHZf2B1A=w2650-h1766-s-no-gm?authuser=0",
    description: "Enfouie sous les dunes mouvantes du désert au nord-ouest du complexe funéraire de Djéser, la nécropole souterraine du Sérapéum constitue l'un des sanctuaires les plus énigmatiques, vertigineux et fascinants de toute l'Égypte antique. Dédié au culte d'Apis — taureau sacré incarnant sur terre la puissance vivante et régénératrice du grand dieu memphite Ptah —, cet ensemble catacombaire monumental fut fondé sous le Nouvel Empire par Aménophis III, avant que le prince Khâemouaset, illustre fils de Ramsès II et grand prêtre de Ptah, ne révolutionne le site en créant les « Grands Souterrains ». Élargie et prolongée jusqu'à la fin de la période ptolémaïque, cette cité souterraine des morts s'articule autour de galeries rectilignes taillées à même le socle rocheux, jalonnées d'immenses alcôves latérales où reposent vingt-quatre colossales cuves funéraires monolithiques en basalte sombre, diorite et granit noir ou rose d'Assouan pesant jusqu'à quatre-vingts tonnes chacune avec leurs couvercles. Mis au jour en 1851 par l'égyptologue français Auguste Mariette guidé par les fragments d'un dromos de sphinx ensablé évoqué par Strabon, ce dédale funéraire illustre une maîtrise de la découpe, du transport et du polissage mégalithique portée à un degré de perfection géométrique qui continue de défier l'imagination des ingénieurs modernes.",
    visiter: "L'exploration débute par la descente d'une rampe maçonnée s'enfonçant dans le calcaire désertique pour franchir l'entrée fortifiée des cryptes, plongeant instantanément le voyageur dans une pénombre fraîche, feutrée et solennelle où résonne le moindre pas. La déambulation s'effectue le long de la nef principale s'étirant sur plus de trois cent cinquante mètres de couloirs voûtés magnifiquement éclairés, d'où s'ouvrent en contrebas de profondes chambres sépulcrales taillées au cordeau. L'émotion vire à la sidération devant les dimensions surhumaines des sarcophages monolithiques de plusieurs mètres de haut, aux parois extérieures polies avec une brillance miroitante et parfois gravées d'inscriptions hiéroglyphiques et de cartouches dédicatoires d'une régularité chirurgicale. En observant les niches d'accès, le regard remarque les emplacements où étaient scellées les stèles votives privées des dévots et des souverains venus saluer l'apothéose osirienne de l'animal divin, ainsi qu'une cuve inachevée abandonnée dans un couloir latéral témoignant des défis herculéens de manœuvre dans un espace souterrain confiné. Cette immersion spéléologique et sacrée hors du temps offre un contraste saisissant avec les temples à ciel ouvert de la vallée du Nil et grave un souvenir impérissable au cœur des mystères de l'ancienne Memphis.",
    link: "https://photos.google.com/share/AF1QipMYh6XdRx9VRSnZt3ue2OwEPUbvln_2602MFhakCcqwm2frL-IEJgT3vWg_o3BQhw?key=TXlFS1kzbXJtZERaQU9FOGFqUDJuVlVHTWtoNVlR"
  },
  {
    id: "saqqarah_complexe_djeser",
    name: "Saqqarah - Complexe Funéraire de Djéser (Pyramide à Degrés)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 58,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IIIe dynastie)",
    century: "Antiquité (XXVIIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.8713,
    lng: 31.2164,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOeP15wzqe7pW0a5CwycfN3EShovzAz7KpqIHW2GWzMrb9XVNN3sbi6X4jKcDUIzv4JKfBoxGTsv7z39SP2CHY2t5TocTCVWeUHnYJvMRvTRq97eMq32DhoBAIgdJK0pQz-YUPH-m34PSuelB4L2ObnlA=w2650-h1766-s-no-gm?authuser=0",
    description: "Dominant le plateau désertique de Saqqarah avec une majesté fondatrice, le complexe funéraire du pharaon Djéser marque l'acte de naissance de l'architecture monumentale en pierre de taille dans l'Histoire humaine. Conçu au XXVIIe siècle avant notre ère par le grand vizir, médecin et architecte déifié Imhotep sous la IIIe dynastie, cet ensemble titanesque de quinze hectares révolutionna les traditions funéraires en superposant six mastabas de calcaire fin de tailles décroissantes, élevant ainsi la première pyramide à degrés du monde à plus de soixante mètres de hauteur. Conçue comme un escalier cosmique gigantesque permettant à l'âme royale d'escalader la voute céleste pour rejoindre les étoiles impérissables, la structure est ceinte d'une prodigieuse muraille à redans et bastions en calcaire blanc d'une blancheur étincelante s'étirant sur plus de seize cents mètres de périmètre. Vaste reproduction pétrifiée du palais royal de Memphis destinée à perpétuer dans l'éternité les liturgies du pouvoir pharaonique, le complexe associe cours cérémonielles, chapelles votives de la fête-Sed et cénotaphes souterrains, incarnant le berceau absolu de la civilisation memphite à son zénith.",
    visiter: "L'exploration commence par le franchissement de l'unique porte monumentale ouverte dans la muraille d'enceinte pour s'engager dans l'impressionnante colonnade d'entrée, où quarante colonnes fasciculées en calcaire figurant des gerbes de roseaux soutiennent un plafond de pierre imitant les rondins de bois. En débouchant sur l'immense Cour Sud baignée par la lumière éclatante du désert, le regard est foudroyé par la silhouette étagée de la pyramide se découpant sur l'azur, bordée au sud par la frise sculptée de cobras dressés (uræus) surmontant la Tombe Sud. La marche se prolonge vers la cour orientale de la fête-Sed bordée d'élégantes chapelles factices aux façades cannelées, avant de gagner la face nord de la pyramide pour contempler le célèbre serdab maçonné : à travers deux orifices circulaires percés dans la pierre, le visiteur plonge son regard dans les yeux incrustés de la statue assise de Djéser, veillant immuablement sur les offrandes depuis quarante-sept siècles. Depuis ce promontoire minéral, le panorama embrasse l'alignement des nécropoles d'Abousir et de Dahchour, livrant une émotion patrimoniale d'une intensité inégalée.",
    link: "https://photos.google.com/share/AF1QipMYh6XdRx9VRSnZt3ue2OwEPUbvln_2602MFhakCcqwm2frL-IEJgT3vWg_o3BQhw?key=TXlFS1kzbXJtZERaQU9FOGFqUDJuVlVHTWtoNVlR"
  },
  {
    id: "gizeh_temple_vallee_khephren",
    name: "Gizeh - Temple de la Vallée de Khéphren",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 20,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.9724,
    lng: 31.1398,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNP-BTRouMewjBv0Ln8gWm4HN6mLLZ9WCpYq8MAQTvLqokZlwzL1nj2lTo5Kh1peYIjAAAD-eSL9Pe2seesiLRBPzy1vyGpIoX9VSNVLjgIpdnNr89rHeXr-WhzpSidfd2xSroVfdXRUtqFx_NQz8Sb3g=w2650-h1766-s-no-gm?authuser=0",
    description: "Dressé au pied oriental du plateau de Gizeh à proximité immédiate du Grand Sphinx, le temple de la Vallée de Khéphren compte parmi les édifices mégalithiques les plus impressionnants, austères et mystérieux de toute l'Antiquité égyptienne. Édifié au XXVIe siècle avant notre ère sous la IVe dynastie pour servir de porte triomphale et de sanctuaire d'accueil au complexe funéraire du pharaon Khéphren, ce chef-d'œuvre d'ingénierie minérale témoigne d'une maîtrise absolue de la stéréotomie et du travail des roches les plus dures. Construit en gigantesques blocs de calcaire local recouverts d'un parement cyclopéen de granit rouge d'Assouan transporté sur plus de huit cents kilomètres le long du Nil, l'édifice est le temple bas le mieux conservé de tout l'Ancien Empire. C'est en son sein que se déroulaient les rituels sacrés de purification, d'embaumement royal et la liturgie cruciale de l'Ouverture de la bouche, destinée à restituer les fonctions vitales du roi défunt avant que sa dépouille ne gagne la pyramide par la chaussée montante. Mis au jour en 1852 par Auguste Mariette, le site révéla dans l'une de ses fosses la légendaire statue assise en diorite de Khéphren protégée par les ailes du faucon Horus, incarnant à jamais la souveraineté divine absolue à l'âge d'or des bâtisseurs.",
    visiter: "La découverte s'amorce depuis l'esplanade inférieure longeant le flanc sud du Sphinx, où l'on pénètre dans le vestibule d'entrée par un couloir oblique percé dans l'imposante façade de granit rose aux arêtes vives remarquablement préservées. En franchissant le seuil, le voyageur pénètre au cœur de la célèbre salle hypostyle en forme de 'T' inversé : seize piliers monolithiques en granit d'Assouan d'une perfection géométrique saisissante soutiennent encore de massives architraves horizontales, filtrant autrefois le soleil par des fentes étroites taillées sous le plafond. Au sol, le dallage en albâtre translucide contraste avec la puissance tellurique de la roche ocre, tandis que l'on observe sur le pourtour les vingt-trois socles où trônaient jadis les effigies royales sculptées dans la diorite et le schiste. Au centre de la branche occidentale de la salle, un regard attentif permet de localiser le puits cérémoniel où Auguste Mariette découvrit miraculeusement le chef-d'œuvre statuaire du pharaon Khéphren. L'itinéraire débouche ensuite sur la chaussée montante dallée s'étirant sur près de cinq cents mètres vers la seconde pyramide, offrant une perspective frontale saisissante sur le profil majestueux du Sphinx et la nécropole de Gizeh baignée par la lumière du désert.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_grand_sphinx",
    name: "Gizeh - Grand Sphinx",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 22,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.9753,
    lng: 31.1376,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNOF-n-S3utVbPnDbHcJf-cULebFfhJLRJ6et95I4YoSDJrG-GyQxDSuDbMY5t0DFZKDxQo4QzwDQLVNxheXzusDviBzPND0QzJeXrH9aH2PvTyw3UMyf7VXP33KTNCh8ekhBNf9ySN3YFjcYLfdZVIiw=w2650-h1766-s-no-gm?authuser=0",
    description: "Sentinelle colossale veillant depuis plus de quarante-cinq siècles à l'orée orientale du plateau de Gizeh, le Grand Sphinx constitue la sculpture monumentale monolithique la plus vaste et emblématique jamais conçue par l'Humanité. Sculpté directement dans un promontoire naturel de calcaire émergeant de la carrière ayant fourni les blocs des pyramides voisines, ce lion couchant à tête humaine s'étire sur plus de soixante-treize mètres de longueur et culmine à une vingtaine de mètres de hauteur. Édifié sous la IVe dynastie au XXVIe siècle avant notre ère, l'édifice est traditionnellement associé au pharaon Khéphren, dont les traits royaux idéalisés — coiffés du némès et parés de l'uræus — fusionnent avec la puissance tellurique du félin pour incarner le souverain en gardien vigilant de la cité des morts. Vénéré au Nouvel Empire sous l'aspect du dieu solaire Harmakhis (« Horus dans l'horizon »), le colosse traverse les âges entouré d'une aura de mystère universelle, résistant aux assauts du vent du désert et aux ensablements séculaires qui ensevelirent son corps sous les dunes jusqu'aux dégagements scientifiques majeurs des XIXe et XXe siècles.",
    visiter: "La découverte s'effectue en gravissant la rampe panoramique longeant le temple de la Vallée de Khéphren pour accéder à la terrasse d'observation dominant la fosse d'excavation où repose le colosse. La vue plongeante permet d'apprécier la morphologie hybride de la bête, la texture étagée des assises de calcaire jaune et la finesse résiduelle des traits du visage royal malgré les vicissitudes du temps et la perte de son nez et de sa barbe cérémonielle. En observant attentivement l'espace compris entre les deux monumentales pattes avant de calcaire maçonné, le regard découvre la célèbre Stèle du Songe en granit rouge, érigée sous la XVIIIe dynastie par le jeune pharaon Thoutmosis IV pour commémorer la promesse royale reçue du Sphinx en échange de son désensablement. L'itinéraire contourne ensuite le flanc nord de l'enclos rocheux, révélant la puissante queue recourbée enroulée sur la croupe et offrant un angle de prise de vue spectaculaire où le profil du lion s'aligne exactement avec la silhouette étagée de la pyramide de Khéphren baignée par la lumière dorée du couchant.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_pyramide_kheops",
    name: "Gizeh - Pyramide de Khéops (Grande Pyramide)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 65,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.9792,
    lng: 31.1342,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOL6UdQ2NgvSXtSJxB1zz2auY4ZqsT2NrlwNUrBsi_6BiP44Vwnz__wBTkmkUFyLA_Ms45SzeK4rBZkYRULi2Q1h-8cOwAKn2isOUGmCYlOmZew4qlF1YSOskg03mndEkfTIVbuOl5GZnLgK9ugSEPSWg=w2650-h1766-s-no-gm?authuser=0",
    description: "Seule survivante des sept merveilles du monde antique et chef-d'œuvre absolu de l'architecture mégalithique universelle, la Grande Pyramide de Khéops domine le plateau calcaire de Gizeh depuis plus de quarante-cinq siècles avec une perfection géométrique qui continue de défier l'entendement. Érigée sous la IVe dynastie au XXVIe siècle avant notre ère par le vizir et maître d'œuvre Hémiounou pour servir de tombeau d'éternité au pharaon Khéops, cette montagne de pierre artificielle culminait à l'origine à plus de cent quarante-six mètres de hauteur, demeurant l'édifice le plus élevé jamais bâti par l'homme jusqu'à l'élévation des cathédrales médiévales. Composée de plus de deux millions trois cent mille blocs de calcaire local pesant chacun en moyenne deux tonnes et demie, la structure était autrefois entièrement revêtue d'un étincelant parement poli de calcaire blanc de Tourah reflétant les rayons du soleil comme un phare cosmique à la lisière du désert libyque. Orientée avec une précision stupéfiante sur les quatre points cardinaux avec une marge d'erreur infime, elle synthétise le savoir astronomique, mathématique et théologique de l'Ancien Empire à son apogée, conçu pour propulser l'âme du souverain défunt vers les étoiles circumpolaires impérissables.",
    visiter: "La découverte commence au pied des gigantesques assises de calcaire de la face nord, où le regard mesure la démesure des blocs avant d'emprunter la brèche historique creusée au IXe siècle par le calife Al-Mamoun pour pénétrer dans les entrailles du géant. L'incursion intérieure procure une expérience physique et sensorielle inoubliable : après s'être courbé dans l'étroit couloir ascendant incliné à vingt-six degrés, le visiteur se redresse avec sidération au seuil de la Grande Galerie, prodigieuse nef en encorbellement haute de près de neuf mètres et longue de quarante-sept mètres, chef-d'œuvre de stéréotomie où les dalles de calcaire glissent dans une pénombre solennelle. Franchissant la chambre des herses, on pénètre enfin au cœur de la Chambre du Roi, salle sépulcrale entièrement tapissée de monolithes de granit rouge d'Assouan ajustés sans le moindre mortier, surmontée de cinq chambres de décharge destinées à dévier les pressions titanesques de la masse pyramidale. Devant le sarcophage royal monolithique en granit ébréché résonne une acoustique minérale enveloppante chargée de recueillement. De retour au grand jour, le circuit contourne la face sud pour observer la fosse restaurée de la célèbre barque solaire en bois de cèdre avant d'admirer les pyramides satellites des reines sous la lumière dorée du couchant.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_pyramide_henoutsen",
    name: "Gizeh - Pyramide de la Reine Hénoutsen (G1-c)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 60,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.9777,
    lng: 31.1365,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPJV6Ii0zGM90Y28LMW9kKLwLbia1w8r_06kB8TkEMGmCWpIobD6VVdwyBlzuCWGtQcCHA5aUzSXQrExrU5s9QS39RFEGmnzCwL5npAEVFM0OdfPN8r8y9IbECvQol0QtCY8JGOejHaa3wOlM-qPI22gg=w2650-h1766-s-no-gm?authuser=0",
    description: "Dressée sur le plateau calcaire de Gizeh à quelques dizaines de mètres au sud-est de la Grande Pyramide, la sépulture de la reine Hénoutsen — désignée sous la nomenclature archéologique G1-c — constitue la plus méridionale et la mieux préservée de la triade des pyramides satellites de Khéops. Fille du grand roi bâtisseur Snéfrou et épouse de son demi-frère Khéops, Hénoutsen appartenait au cœur du cercle dynastique de l'âge d'or de la IVe dynastie au XXVIe siècle avant notre ère. Culminant à l'origine à près de vingt-neuf mètres de hauteur pour une base carrée d'environ quarante-six mètres, cette montagne de calcaire local présente la particularité remarquable d'avoir conservé sur ses assises inférieures de magnifiques blocs de parement lissé en calcaire fin de Tourah. Légèrement décalée par rapport à l'alignement des deux autres tombes de reines (G1-a et G1-b) pour s'harmoniser avec l'immense mastaba du prince Khoufoukhaf, elle fut également au cœur d'une extraordinaire renaissance religieuse sous les XXIe et XXVIe dynasties saïtes : sa chapelle funéraire orientale fut alors agrandie et consacrée en temple d'Isis « Maîtresse de la Pyramide », comme l'atteste la célèbre stèle de l'Inventaire découverte en ses murs par Auguste Mariette.",
    visiter: "La découverte s'amorce par l'approche de la face nord du monument, où l'on observe la précision de l'appareillage des assises de base avant d'examiner l'entrée du boyau funéraire plongeant à flanc de colline. L'incursion intérieure permet d'emprunter un couloir descendant incliné à environ vingt-cinq degrés, s'enfonçant sous le niveau rocheux naturel du plateau pour déboucher dans une antichambre puis dans la chambre funéraire royale taillée à même le roc calcaire, pourvue d'une niche à canopes au sud. De retour à l'extérieur, l'exploration se concentre sur le flanc oriental où subsistent les murs de calcaire et les fondations du temple d'Isis d'époque tardive, offrant un émouvant témoignage de la continuité dévotionnelle du site sur plus de deux mille ans. La marche se prolonge vers le déambulatoire séparant la pyramide de la fosse de barque voisine et des mastabas des courtisans du champ Est, livrant un angle photographique spectaculaire où la silhouette étagée de la pyramide d'Hénoutsen s'aligne en contre-plongée avec la masse colossale de la Grande Pyramide baignée par la lumière dorée du désert.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_pyramide_khephren",
    name: "Gizeh - Pyramide de Khéphren",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 71,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.9759,
    lng: 31.1308,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMHNGmnFZj13hTSsFRE_EgJi13hRa1xoGli6iRQk35QmGXAa75fhDRQkv-cbsbLIAE3L-xNaHhMYqwLQpyYQFLh930CuS2iPw8JHeTDi9U0hRv4j1M4zwMRuUgmGDOS7HZ5WElZshQSW2PvVqHipSwT7Q=w2650-h1766-s-no-gm?authuser=0",
    description: "Deuxième plus imposante sépulture monumentale d'Égypte par ses proportions et silhouette la plus reconnaissable du plateau de Gizeh, la pyramide de Khéphren s'élève avec une grâce souveraine au sud-ouest de la Grande Pyramide. Érigée au XXVIe siècle avant notre ère par le fils et successeur de Khéops à l'apogée de la IVe dynastie, cette montagne artificielle baptisée à l'origine « Khéphren est grand » culminait à plus de cent quarante-trois mètres de hauteur pour une base carrée de deux cent quinze mètres. Bien que légèrement inférieure en dimensions à celle de son père, elle produit l'illusion visuelle de la surpasser en altitude grâce à son implantation sur un promontoire rocheux surélevé d'une dizaine de mètres et à une pente plus prononcée de cinquante-trois degrés. Chef-d'œuvre de stéréotomie calcaire reposant sur une assise de base cyclopéenne en granit rose d'Assouan, elle est le seul monument du site à avoir conservé au sommet son emblématique coiffe de parement d'origine en calcaire fin et poli de Tourah, vestige étincelant de la blancheur immaculée qui enveloppait autrefois toute la nécropole royale.",
    visiter: "La découverte s'amorce par l'approche de la face nord où l'on distingue les deux entrées historiques superposées, la plus basse taillée à même le socle géologique et la supérieure débouchant à onze mètres d'élévation sur les assises de maçonnerie. Pénétrer à l'intérieur procure une immersion solennelle et sportive : on s'engage dans un couloir descendant étroit et pentu plongeant sous le niveau du plateau, avant d'emprunter un boyau horizontal franchissant la chambre des herses pour déboucher dans la chambre sépulcrale royale. Taillée directement dans la roche vive et coiffée d'une gigantesque voûte en chevrons de calcaire, la salle abrite encore le somptueux sarcophage monolithique de granit noir encastré au ras du sol, dont le couvercle brisé rappelle les audaces de Giovanni Belzoni qui redécouvrit le caveau en 1818 et y laissa son célèbre graffiti au noir de fumée. De retour à l'air libre, la promenade contourne le flanc oriental pour arpenter les vestiges du temple funéraire haut et la chaussée montante dallée s'étirant sur près de cinq cents mètres vers le temple de la Vallée et le Sphinx, offrant un point de vue magistral où la coiffe calcaire dorée se découpe majestueusement sur l'azur égyptien.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_pyramide_mykerinos",
    name: "Gizeh - Pyramide de Mykérinos",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 73,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.9725,
    lng: 31.1283,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPKW5gJB4SQe9L8JzJUZxIUHCTz-jhPqsuU17BWoo7dNoR6Q3EGsJYFBVCi6D0MkJMsowjOAy3p0njZLfdieOWJNAQJFkSKkv9fK0Pln89d1XpKZXRwIZvnqhQ3AVKNDalUbaQ47TxMw8TyOAZSOGIpYg=w2650-h1766-s-no-gm?authuser=0",
    description: "Dernière-née et plus méridionale de la triade monumentale du plateau de Gizeh, la pyramide de Mykérinos clôt avec élégance l'ère des sépultures royales colossales de la IVe dynastie de l'Ancien Empire. Baptisée à l'origine « Mykérinos est divin », cette montagne artificielle érigée au XXVIe siècle avant notre ère par le fils et successeur de Khéphren culminait à près de soixante-six mètres pour une base carrée de cent trois mètres. Si ses proportions représentent moins d'un dixième du volume de la Grande Pyramide, elle compense sa moindre démesure par un raffinement de mise en œuvre et des matériaux d'une somptuosité inégalée : ses seize premières assises furent entièrement habillées de gigantesques blocs de granit rose d'Assouan acheminés sur plus de huit cents kilomètres, dont les bossages laissés bruts témoignent de l'interruption prématurée du ravalement à la mort inopinée du roi. Le complexe a également livré à l'égyptologie moderne l'un de ses plus purs trésors artistiques avec les célèbres triades sculptées en grauwacke représentant le pharaon flanqué d'Hathor et des personnifications des nomes égyptiens. Éventrée sur sa face nord par une impressionnante entaille verticale résultant des tentatives infructueuses de démolition ordonnées à la fin du XIIe siècle par le sultan ayyoubide Al-Aziz Othman, la pyramide conserve une silhouette émouvante et robuste au bord des dunes désertiques.",
    visiter: "La découverte commence au pied de la face nord où le regard mesure la puissance tellurique des imposantes assises inférieures de granit rose aux arêtes taillées avec une précision chirurgicale, avant de contempler l'immense tranchée médiévale qui met à nu les blocs du noyau calcaire intérieur. L'incursion souterraine constitue une expérience intimiste et technique remarquable : on s'engage dans un couloir descendant incliné à vingt-six degrés s'enfonçant à plus de trente mètres dans le roc géologique, franchissant une antichambre aux parois gravées d'élégantes niches à redans imitant les façades de palais avant de déboucher dans la chambre sépulcrale royale. Entièrement coffrée de massifs monolithes de granit et coiffée d'une fausse voûte en berceau creusée par-dessous dans d'immenses chevrons de pierre, la pièce abritait jadis le magnifique sarcophage de basalte à décor de façade de palais, tragiquement englouti au large des côtes espagnoles lors de son transport vers l'Angleterre en 1838. De retour à l'air libre, l'itinéraire se prolonge sur le flanc sud pour explorer les trois pyramides satellites des reines (G3-a, G3-b et G3-c) et les vestiges du temple funéraire haut, avant de reculer sur le promontoire désertique sud-ouest pour saisir l'un des alignements panoramiques les plus célèbres de la planète où Mykérinos, Khéphren et Khéops se déploient en perspective diagonale dans la lumière dorée d'Égypte.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_pyramides_reines",
    name: "Gizeh - Pyramides des Reines (Satellites de Mykérinos)",
    region: "Gouvernorat de Gizeh",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Gizeh",
    altitude: 70,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 29.9713,
    lng: 31.1282,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPJ4tAYvM_fEjvjIPayyJFoQfxDjkO0Pe00gNUwgdbhJjh7DdSDp45pw8L4I5YPvb_g0RCt8V7pZ8Rx3zKI07C3ElLeG62U_h5hpAhVvrCow5vlngwJdtmuBlBYsEwWliHg8DOYOFYrY4-RwYSlTZYseQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Bordant la lisière méridionale du complexe funéraire de Mykérinos face à l'immensité du désert libyque, la triade des pyramides satellites des reines — répertoriées sous les dénominations archéologiques G3-a, G3-b et G3-c — constitue l'un des ensembles funéraires subsidiaires les plus harmonieux du plateau de Gizeh. Érigées au XXVIe siècle avant notre ère sous la IVe dynastie pour abriter les dépouilles des épouses royales de Mykérinos, au premier rang desquelles figure sans doute la reine Khâmerernebty II, ces trois sépultures étagées d'est en ouest illustrent les fascinantes variations de conception architecturale de l'Ancien Empire. La plus orientale (G3-a), culminant jadis à près de vingt-huit mètres de hauteur pour une base carrée de quarante-quatre mètres, fut conçue comme une véritable pyramide à faces lisses pourvue d'un parement partiel de granit rose d'Assouan et d'un petit temple funéraire en calcaire et briques crues. En revanche, ses deux voisines occidentales (G3-b et G3-c), demeurées à l'état de pyramides à degrés composées de quatre à cinq gradins massifs de calcaire local, offrent une silhouette étagée d'une grande puissance géométrique. Elles rappellent que la monumentalité royale à Gizeh s'exprimait au sein d'une constellation dynastique familiale hautement hiérarchisée.",
    visiter: "La découverte s'amorce par l'approche piétonne longeant le flanc sud de la pyramide de Mykérinos, permettant de mesurer d'emblée le saisissant jeu d'échelles et de perspectives entre le titan royal et ses sentinelles princières alignées au cordeau. En observant la pyramide G3-a, la plus complète du groupe, le regard s'attarde sur les vestiges de son temple de culte en maçonnerie et sur son entrée nord qui s'enfonce par un couloir descendant vers une chambre funéraire souterraine où Richard Vyse découvrit un sarcophage de granit rose contenant les ossements d'une jeune femme. La promenade se prolonge devant les pyramides G3-b et G3-c dont les parois à gradins dénudées révèlent l'appareillage robuste des blocs de calcaire nummulitique extraits des carrières voisines du plateau. En contournant l'angle sud-ouest de la dernière pyramide pour gagner la crête des dunes, le visiteur accède à l'un des panoramas les plus grandioses et photogéniques de tout le plateau memphite : le premier plan met en valeur l'alignement rythmé des trois pyramides satellites dont les ombres crénelées s'étirent sur le sable, dialoguant à l'horizon avec la masse colossale de Mykérinos et la coiffe étincelante de Khéphren dans la lumière dorée du désert égyptien.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "caire_eglise_saint_georges",
    name: "Le Caire - Église Saint-Georges (Mar Girgis)",
    region: "Gouvernorat du Caire (Vieux Caire)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 23,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Byzantine & Héritage Romain (Xe-XXe siècle)",
    century: "Moyen Âge (Xe siècle)",
    category: "religieux",
    counts: { religieux: 1, unesco: 1, ville: 1 },
    lat: 30.0065,
    lng: 31.2301,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNoyzurir8DknmQ8XtdZ05w7nvqJMDVuvbM4ASyaYfRrYCYXShggFrxomUa1tSTfLCYbncqXIaJMa72OMym1uYNQD0JZLe8g-kKuwHZw_B28LpZHh279oa3xJNy07rtzKPu7nr31MSL3S_BcqDLkvIUPg=w2650-h1766-s-no-gm?authuser=0",
    description: "Au cœur du Vieux Caire historique dans le quartier copte de Misr al-Qadima, l'église Saint-Georges (Mar Girgis) constitue l'un des sanctuaires chrétiens les plus singuliers et spectaculaires de toute la vallée du Nil. Édifiée directement au sommet de l'une des imposantes tours rondes romaines de l'antique forteresse de Babylone érigée sous le règne de l'empereur Trajan, cette église grecque orthodoxe — siège patriarcal historique pour l'ensemble de l'Afrique — se distingue par son plan circulaire en rotonde rarissime dans l'architecture chrétienne d'Orient. Témoin d'une ferveur ininterrompue depuis les premiers siècles de notre ère, l'édifice actuel, reconstruit après l'incendie de 1904 sur des substructions remontant au Xe siècle, fusionne avec majesté la monumentalité défensive romaine et la splendeur liturgique byzantine. Dédié au saint cavalier mégalomartyr Georges de Lydda, vénéré avec une intensité égale par les chrétiens et les musulmans d'Égypte pour ses vertus protectrices et thaumaturgiques, le sanctuaire domine le dédale des venelles coptes de son élégant dôme cuivré surmonté de la croix. Inscrite au patrimoine mondial de l'UNESCO au titre du Caire historique, l'église incarne avec éclat la permanence et la vitalité du christianisme oriental au carrefour des civilisations méditerranéennes.",
    visiter: "La découverte commence par l'ascension du grand escalier monumental en hémicycle franchissant le rempart romain en briques et blocs de calcaire chaînés, dont l'épaisseur révèle la vocation militaire originelle du bastion de Babylone. En pénétrant sous l'immense rotonde centrale baignée d'une clarté solennelle filtrée par une couronne de vitraux polychromes, le regard s'élève vers la voûte du dôme où trône une fresque majestueuse du Christ Pantocrator bénissant l'assemblée au milieu des légions célestes. La nef circulaire s'articule autour d'une somptueuse iconostase en bois finement sculpté et doré ornée d'icônes byzantines étincelantes, illustrant avec un grand dynamisme pictural le supplice et le triomphe équestre de saint Georges terrassant le dragon. L'émotion s'intensifie en descendant dans la crypte semi-enterrée et les chapelles aménagées à même le fût de la tour romaine, où les fidèles viennent vénérer les célèbres chaînes de fer historiques réputées miraculeuses ayant entravé le saint martyr. La visite se prolonge paisiblement dans le cloître ombragé et le cimetière attenant bordé de tombeaux sculptés en marbre blanc, offrant un havre de recueillement et de sérénité absolue à l'écart des tumultes de la métropole cairote.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_eglise_saint_serge_bacchus",
    name: "Le Caire - Église Saint-Serge-et-Saint-Bacchus (Abou Serga)",
    region: "Gouvernorat du Caire (Vieux Caire)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 20,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Paléochrétienne & Héritage Copte (IVe-XIe siècle)",
    century: "Antiquité tardive (IVe siècle)",
    category: "religieux",
    counts: { religieux: 1 },
    lat: 30.0054,
    lng: 31.2308,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOUXPal2kg9_OYQjZ5gXWntERCgGjAP3JfOw_GAgk4jJookhgvNZlKHGCu1bzuDTL1I0e2v2Ma8VlUedNTfq3l9AjMkM5n0lFwFVCrpy3e2VFCfJnE0DqyzJo-B6NJDV1QsQSHHqYzgcDAGd9aX-2BiRQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Enchâssée dans le dédale millénaire des ruelles piétonnes du quartier copte de Misr al-Qadima à l'abri des antiques remparts de la forteresse romaine de Babylone, l'église Saint-Serge-et-Saint-Bacchus — universellement désignée sous le nom familier d'Abou Serga — constitue l'un des sanctuaires chrétiens les plus vénérables, anciens et sacrés de tout l'Orient. Fondée selon la tradition dès la fin du IVe siècle sur les lieux mêmes où la Sainte Famille (l'Enfant Jésus, la Vierge Marie et saint Joseph guidés par l'archange Gabriel) trouva refuge au terme de sa périlleuse fuite d'Hérode en terre d'Égypte, cette basilique primitive incarne le cœur spirituel battant de l'Église copte orthodoxe. Dédiée à deux hauts officiers romains de Syrie martyrisés sous l'empereur Maximien pour leur fidélité inébranlable au Christ, elle s'enfonce de plusieurs mètres sous le niveau actuel de la voirie urbaine, témoignant de l'épaisseur des siècles et des alluvions du Nil accumulées depuis l'Antiquité. Haut lieu de l'histoire patriarcale où furent élus et ordonnés nombre de pontifes d'Alexandrie jusqu'au transfert du siège vers l'Église Suspendue, l'édifice réunit une architecture basilicale d'une pureté saisissante et une atmosphère mystique d'une rare intensité au confluent des traditions bibliques et méditerranéennes.",
    visiter: "La découverte s'amorce par la descente d'un escalier de pierre abrupt s'enfonçant sous le niveau des ruelles du Vieux Caire pour pénétrer dans un narthex feutré et solennel baigné par la douce lueur des veilleuses à huile. En franchissant la porte intérieure, le regard embrasse la magnifique nef centrale séparée de ses bas-côtés par deux rangées ininterrompues de douze colonnes corinthiennes antiques de marbre blanc réemployées, dont l'une, taillée dans un granit rougeâtre sombre dépourvu de chapiteau sculpté, symbolise selon la tradition la trahison tragique de Judas. Au-dessus, la majestueuse charpente de bois en berceau renversé évoque la coque retournée de l'arche de Noé, tandis que le sanctuaire s'abrite derrière une prodigieuse iconostase en ébène et noyer du XIIIe siècle, finement marquetée d'ivoire ciselé et surmontée d'icônes byzantino-coptes représentant la Cène et les apôtres. Le point culminant de l'émotion spirituelle réside dans l'accès à la crypte souterraine semi-immergée située à une dizaine de mètres sous l'autel majeur : cet humble boyau voûté en briques crues abrite la niche rocheuse et le puits d'eau sacrée où reposa la Sainte Famille durant son séjour de trois mois, offrant un moment de recueillement et de ferveur intemporelle inoubliable.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_tombeau_sanctuaire_saint_georges",
    name: "Le Caire - Tombeau & Sanctuaire de Saint-Georges (Mar Girgis)",
    region: "Gouvernorat du Caire (Vieux Caire)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 22,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Byzantine & Héritage Copte (Xe-XVIIIe siècle)",
    century: "Moyen Âge (Xe siècle)",
    category: "religieux",
    counts: { religieux: 1 },
    lat: 30.0060,
    lng: 31.2305,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOBDNd25owkNlRakFd2Z4DGoALmOi_VunIQ-NzpF_syiRP2aI2jeqAvQ-nViTkTRKWNl-aCp4sDGKlSFvXc1AGLzsR-qMpGwEZlrdhCO5cKLxePaiGylmR-m1y4oDfEDaM9pn06fRnMj_wZnqqLB7MRpg=w2650-h1766-s-no-gm?authuser=0",
    description: "Niché dans l'enceinte sacrée du couvent copte orthodoxe de Mar Girgis (Deir al-Banat), à quelques pas de l'église grecque orthodoxe circulaire et des ruines de la forteresse de Babylone, le tombeau et sanctuaire de Saint-Georges constitue l'un des lieux de pèlerinage les plus vénérés, intenses et mystiques de tout le Caire historique. Bien que la dépouille historique du mégalomartyr Georges de Lydda repose selon la tradition en Terre Sainte, ce sanctuaire millénaire — fondé dès le Xe siècle et embelli à l'époque fatimide et mamelouke — abrite d'insignes reliques du saint cavalier ainsi que ses légendaires chaînes de fer miraculeuses. Célèbre dans tout l'Orient chrétien et fréquenté avec une ferveur égale par les fidèles coptes et les pèlerins musulmans qui attribuent au saint des vertus thaumaturgiques majeures, le site s'articule autour d'une cour feutrée gardée par de monumentales portes sculptées en bois de cèdre. Témoignage poignant d'une dévotion populaire ininterrompue depuis plus d'un millénaire, ce havre de spiritualité monastique incarne l'âme vivante du christianisme égyptien au cœur du dédale immémorial de Misr al-Qadima.",
    visiter: "L'accès au sanctuaire s'effectue en s'engageant dans une allée pavée discrète du quartier copte menant à l'imposante porte en bois sculptée de plus de sept mètres de haut, chef-d'œuvre de menuiserie fatimide qui marque l'entrée du domaine conventuel. En pénétrant dans la pénombre feutrée de la chapelle votive baignée par la lueur dorée de dizaines de cierges et de veilleuses à huile, le voyageur est immédiatement saisi par l'atmosphère de piété silencieuse où résonne le murmure des prières. Le regard est attiré par la majestueuse châsse ornée d'icônes byzantines étincelantes figurant saint Georges à cheval transperçant le dragon, entourée d'ex-voto en argent et de messages d'intercession déposés par les pèlerins. Le moment le plus marquant réside dans la découverte des célèbres chaînes de fer historiques réputées avoir entravé le martyr durant son supplice : la tradition vivante invite les visiteurs et dévots à s'enrouler rituellement les maillons autour du cou, de la taille ou des bras pour invoquer la guérison des maux du corps et de l'âme ainsi que la délivrance spirituelle. La visite se prolonge dans le déambulatoire paisible du couvent fleuri de bougainvilliers, offrant un contraste saisissant de sérénité à l'abri de l'effervescence de la métropole.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_forteresse_babylone",
    name: "Le Caire - Forteresse de Babylone (Qasr al-Cham')",
    region: "Gouvernorat du Caire (Vieux Caire)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Romaine Impériale (Ier-IVe siècle)",
    century: "Antiquité (IIe siècle)",
    category: "chateau",
    counts: { chateau: 1, archeologie: 1 },
    lat: 30.0058,
    lng: 31.2302,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLiSRKLIO4ehJTUHscH31n8pXzEj_LJJ22YnKy-BTQ3uVi9beivhgpIYBQVp2v-OUx1pgnhKiVeanvbe9JUFkMs2MPD7q8pCBm_IQ9KB2nz4yu0SH61Gn-DIdA7DwPiuOlvFxKZHbmAWk7nEP25DMbaA=w2650-h1766-s-no-gm?authuser=0",
    description: "Sentinelle militaire colossale émergeant des entrailles de Misr al-Qadima, la forteresse romaine de Babylone — dénommée Qasr al-Cham' (« le palais de la cire ou de la flamme ») par la tradition arabe médiévale — constitue le berceau urbain et castral antique à partir duquel s'est déployée la métropole cairote. Érigée au tournant des Ier et IIe siècles de notre ère sous le règne de l'empereur Trajan puis renforcée sous Dioclétien, cette puissante forteresse légionnaire commandait le débouché stratégique du canal reliant le Nil à la mer Rouge (Amnis Trajanus) ainsi que la frontière historique entre Haute et Basse-Égypte. Ses puissantes murailles et ses bastions semi-circulaires se singularisent par leur appareillage défensif typiquement romain alternant assises de moellons calcaires et bandeaux de briques rouges cuites (opus vittatum), conçu pour résister aux assauts telluriques et militaires. Théâtre du siège décisif de sept mois mené en 640-641 par le général musulman Amr ibn al-Aas contre la garnison byzantine, prélude à la fondation de la cité voisine de Fustat, la forteresse devint au fil des siècles le refuge inviolable de la communauté copte : ses tours et ses remparts cyclopéens servirent de substructions majestueuses à l'érection de sanctuaires mythiques tels que l'Église Suspendue ou l'église Saint-Georges, incarnant la sédimentation monumentale des civilisations méditerranéennes.",
    visiter: "La découverte commence au sortir de la station de métro Mar Girgis, où le voyageur est immédiatement saisi par le saisissant jeu de niveaux archéologiques : le sol romain d'origine gît à près de six mètres en contrebas du niveau de la voirie moderne, mettant à nu la puissance titanique des fortifications antiques. En descendant vers la vaste fosse d'excavation bordant la tour sud, le regard contemple l'imposante porte d'eau monumentale flanquée de ses deux tours en hémicycle remarquablement restaurées, où l'on observe la précision du chaînage de briques et les corniches en doucine sculptées dans le calcaire d'époque impériale. La promenade au pied des remparts permet de comprendre avec quelle audace architecturale les maîtres d'œuvre coptes vinrent jucher la nef de l'Église Suspendue en porte-à-faux directement sur le passage méridional de la forteresse. L'itinéraire se poursuit le long des courtines ombragées jouxtant le Musée copte, dévoilant des meurtrières préservées, des vestiges de créneaux et des salles de garde voûtées baignées d'une lumière rasante. Cette immersion au ras des fondations légionnaires offre une leçon vivante de stratigraphie urbaine, où les pierres romaines soutiennent avec une majesté impassible plus de deux millénaires d'histoire spirituelle et militaire d'Orient.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_eglise_suspendue",
    name: "Le Caire - L'Église Suspendue (Al-Moallaqa)",
    region: "Gouvernorat du Caire (Vieux Caire)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 25,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Paléochrétienne & Fatimide (IIIe-XIe siècle)",
    century: "Antiquité tardive (IIIe siècle)",
    category: "religieux",
    counts: { religieux: 1 },
    lat: 30.0052,
    lng: 31.2312,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP3Tz4rZ2saMfJeMKqyQ9r3-Tu6IPe18ZAsXlJqkjQ1Y-L_abFGpbjsCF-mlFeH6yDQFvC2aKIMQJ0wIJGusEM1acLefBSY7phwM2mCEwo-MEa_CB8LW1oHD9pD4CWj5doUZAJeV2i-7--h9LPRUAkkeA=w1757-h2635-s-no-gm?authuser=0",
    description: "Dominant fièrement l'entrée du quartier copte de Misr al-Qadima depuis le sommet des antiques bastions de la forteresse romaine de Babylone, l'église Sainte-Virginie, universellement connue sous le nom de l'Église Suspendue (Al-Moallaqa), constitue l'un des sanctuaires chrétiens les plus célèbres, gracieux et vénérables du Moyen-Orient. Fondée originellement au IIIe siècle ou au IVe siècle sur les substructures monumentales de la porte sud de l'enceinte romaine, elle doit son nom spectaculaire au fait que sa nef centrale est suspendue en porte-à-faux au-dessus du passage voûté de l'antique cité fortifiée, sans reposer directement sur le sol. Siège historique du patriarcat copte d'Alexandrie entre le VIIe et le XIIIe siècle à l'époque où le siège épiscopal fut transféré d'Alexandrie vers Le Caire, ce chef-d'œuvre de l'architecture chrétienne d'Orient fusionne avec élégance la tradition basilicale paléochrétienne et l'art décoratif islamique médiéval. Ses façades blanchies à la chaux surmontées de deux clochers jumeaux et son portail sculpté ouvrent sur un univers de spiritualité intemporelle où se côtoient le bois d'ébène marqueté d'ivoire, les marbres polychromes et les icônes byzantines étincelantes.",
    visiter: "L'accès au sanctuaire s'effectue en gravissant un majestueux escalier en marbre blanc flanqué de colonnes sculptées et de motifs géométriques, menant à une belle cour extérieure bordée de mosaïques bibliques contemporaines. En franchissant le portail d'entrée, le visiteur pénètre dans un narthex baigné par une douce lumière tamisée, ouvrant directement sur la triple nef basilicale soutenue par des colonnes de marbre blanc aux chapiteaux corinthiens finement ciselés — dont l'une, sculptée en noir, symboliserait l'un des apôtres. Le regard est immédiatement captivé par la magnifique charpente en bois apparente en forme de double toit incliné, évoquant la coque inversée de l'arche de Noé, ainsi que par la somptueuse iconostase en bois d'ébène et de cèdre incrusté d'ivoire géométrique datant du XIIe siècle. Les chapelles latérales abritent des reliques précieuses et des dizaines d'icônes séculaires attribuées à de grands maîtres coptes, tandis que les sols transparents aménagés par endroits permettent d'apercevoir les assises romaines en contrebas. Cette immersion au cœur du berceau de la foi copte offre une émotion esthétique et religieuse d'une rare intensité au carrefour de l'histoire égyptienne.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_musee_copte",
    name: "Le Caire - Musée Copte (Vieux Caire)",
    region: "Gouvernorat du Caire (Vieux Caire)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 23,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Héritage Copte & Art Chrétien d'Orient (IIIe-XXe siècle)",
    century: "Antiquité tardive & Moyen Âge",
    category: "musee",
    counts: { musee: 1 },
    lat: 30.0051,
    lng: 31.2315,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPxt4hKU8BvVr5Sc3s_Z3UzVNRV6CO9A9JV-CGPJv-xLGHGKWk0F5kiP_m7as1-pwr_nNNX-ycFgKjWRhZCFNu04WOCmA3cTDYKGjkwkVr31Gr7_93vfdcGc2KremJwU9ZKdClAVYhz1V6_oHFHGxB_kQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Niché dans l'enceinte verdoyante et feutrée de la forteresse romaine de Babylone au cœur du Vieux Caire historique, le Musée Copte abrite la plus riche, vaste et somptueuse collection d'artefacts d'art chrétien d'Orient au monde. Fondé en 1910 grâce à l'impulsion clairvoyante de Marcus Simaika Pasha pour préserver le patrimoine inestimable de l'Église d'Égypte, cet établissement muséographique fusionne l'histoire spirituelle et artistique du pays depuis les débuts de l'ère chrétienne jusqu'à la période ottomane. À travers des salles lumineuses s'articulant autour de cours intérieures ombragées et de boiseries sculptées de style mamelouk récupérées dans d'anciennes demeures cairosiennes, le parcours met en lumière la fascinante transition culturelle entre l'art pharaonique tardif, l'influence gréco-romaine et l'épanouissement de l'esthétique copte. Des manuscrits enluminés sur papyrus aux somptueuses tentures murales en lin et laine, en passant par les icônes byzantines étincelantes et les frises en calcaire ciselé, le musée dévoile le génie créatif d'une communauté millénaire qui sut maintenir vivante sa foi et son identité au carrefour des civilisations.",
    visiter: "La découverte s'amorce dans le vestibule d'accueil ouvrant sur de superbes patios fleuris où reposent des fragments architecturaux, des chapiteaux corinthiens et des stèles funéraires gravées de crosses et de colombes. Les salles d'exposition se succèdent ensuite par thématiques chronologiques et stylistiques : l'aile des textiles dévoile des tuniques brodées et des tapisseries aux motifs floraux et mythologiques d'une finesse de tissage remarquable, tandis que la section des sculptures sur bois et des icônes expose les chefs-d'œuvre de grands maîtres coptes des siècles passés. Un arrêt prolongé s'impose devant les célèbres manuscrits de Nag Hammadi et les anciennes reliures en cuir repoussé témoignant des origines de la pensée théologique chrétienne en terre d'Égypte. La visite s'achève par une déambulation reposante dans les jardins intérieurs jouxtant les antiques murailles romaines, offrant un havre de paix absolu à quelques pas de l'Église Suspendue et des sanctuaires fondateurs de Misr al-Qadima.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_musee_egyptien",
    name: "Le Caire - Musée Égyptien (Place Tahrir)",
    region: "Gouvernorat du Caire (Centre-ville)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 20,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (1902) & Trésors Pharaoniques",
    century: "XXe siècle",
    category: "musee",
    counts: { musee: 1 },
    lat: 30.0478,
    lng: 31.2336,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNfJIXTXvDHi2Qedf0CWslJ_C1rz_a4R6hnN8Wjo1HGh8KT2bqFQ4U6PS98cLMkzpiK_U3SBujWGQvhhSPODsdpVhEHfWd222nI3UsuaeMkf0UZnpTNXltqbWW9YFd9KdyYCjGLbk34mMpP-lxEtjuVcQ=w2650-h1760-s-no-gm?authuser=0",
    description: "Dressé majestueusement sur la mythique place Tahrir au cœur battant de la métropole cairote, le Musée Égyptien du Caire constitue le temple historique universel de l'égyptologie et le berceau séculaire de la préservation des antiquités pharaoniques. Inauguré en 1902 dans ce somptueux édifice néo-classique aux teintes ocre dessiné par l'architecte français Marcel Dourgnon, cet établissement muséographique abrite la plus prodigieuse collection d'artefacts de l'Antiquité au monde, avec plus de cent vingt mille chefs-d'œuvre retraçant cinq millénaires d'histoire de la vallée du Nil. Malgré les transferts partiels de ses collections vers de nouveaux sites modernes, le musée conserve une atmosphère unique de cabinet de curiosités géant à l'ancienne, où les salles hautes et les galeries labyrinthiques regorgent de statues monumentales en diorite, de stèles peintes, de sarcophages royaux et de momies princières. Des colosses d'Akhenaton aux trésors d'or massif de Tanis en passant par les scribes accroupis de l'Ancien Empire, chaque vitrine témoigne du génie créatif, de la spiritualité et du raffinement esthétique absolu des bâtisseurs de pharaon.",
    visiter: "La découverte s'amorce en franchissant les grilles du jardin extérieur parsemé de fragments architecturaux, de sphinx et de sarcophages en granit posés à l'air libre, avant de pénétrer dans le grand hall central baigné d'une lumière zénithale filtrée par la haute verrière. Le rez-de-chaussée s'articule selon un parcours chronologique rigoureux allant de l'Anction Empire au Nouvel Empire, permettant d'admirer les statues colossales d'Hatchepsout, les redoutables effigies de Ramsès II et les magnifiques triades de Mykérinos. À l'étage, l'émotion atteint son paroxysme dans les salles des trésors royaux, notamment la section dédiée aux fabuleux objets funéraires de Toutânkhamon découverts intacts dans la Vallée des Rois par Howard Carter, avec son masque funéraire en or étincelant et ses chars marquetés. La visite s'achève par la découverte des superbes bijoux de la période ptolémaïque et des salles de sculpture amarnienne, offrant un voyage esthétique et historique absolument inoubliable au cœur de l'âme égyptienne.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_madrasa_alsalih_ayyub",
    name: "Le Caire - Madrasa & Mausolée d'al-Salih Najm al-Din Ayyub",
    region: "Gouvernorat du Caire (Le Caire historique)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Ayyoubide (XIIIe siècle - 1243)",
    century: "XIIIe siècle",
    category: "religieux",
    counts: { religieux: 1 },
    lat: 30.0490,
    lng: 31.2614,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMLNP5gxHW1BTWct9gZZNPJuf6MnLgoTgToFZlGoLuD6R_1iYqxcMUGgHGOSQZSdmBmCyn3mxk6j76v_S5qCCZ7_KPv56LRqfCBWlUQyK2hpKsW9uZ210bfr5-d2oBMYWWtVswgcQxWrx0BDAlkdorQYQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Édifiée entre 1242 et 1244 en plein cœur du Caire fatimide sur l'emplacement de l'ancien Grand Palais oriental, la madrasa et le mausolée d'al-Salih Najm al-Din Ayyub constituent l'un des témoignages architecturaux et institutionnels les plus précieux, novateurs et émouvants de la dynastie ayyoubide en Égypte. Commandité par le dernier grand sultan ayyoubide al-Salih Ayyub — qui s'illustra en défendant le pays contre les croisades —, ce complexe religieux pionnier fut le tout premier en Égypte à enseigner simultanément les quatre écoles juridiques (madhabs) du sunnisme dans deux ailes distinctes séparées par une ruelle publique. Complété après sa mort par son épouse dévouée Shajarat al-Durr qui y adjoignit en 1250 son splendide mausolée funéraire, l'édifice marque l'acte de naissance du modèle architectural classique des complexes monumentaux mamelouks associant enseignement théologique et tombeau du fondateur. Dominé par son élégant minaret biconique unique de style ayyoubide dit en 'encensoir' (mabkhara), le site incarne le pont monumental entre l'art fatimide finissant et la splendeur des grands complexes islamiques médiévaux du Caire.",
    visiter: "La découverte s'amorce le long de la prestigieuse rue Al-Muizz, où l'on repère la façade sculptée et le superbe minaret ayyoubide s'élançant au-dessus des échoppes, face au complexe de Sultan Qalawun. En s'engageant dans le passage public central couvert à l'origine de madriers de bois, le visiteur accède aux vestiges des iwans et des cours intérieures où s'organisait jadis l'enseignement des oulémas. Le point culminant de la visite réside dans l'approche du mausolée surmonté d'une coupole, dont la zone de transition abrite les plus anciens muqarnas tripartites en brique sculptée du Caire ainsi qu'un mihrab somptueusement incrusté de marbres polychromes. L'atmosphère recueilli de ce sanctuaire chargé d'histoire permet d'imaginer le faste des cérémonies mameloukes où les nouveaux émirs venaient prêter allégeance au sultan. Cette halte incontournable au fil des venelles de la vieille ville offre une leçon magistrale d'architecture sacrée médiévale, dans un état de préservation qui force l'admiration des passionnés d'art oriental.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_complexe_qalawun",
    name: "Le Caire - Complexe Funéraire du Sultan Qalawun",
    region: "Gouvernorat du Caire (Le Caire historique)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke Bahrite (XIIIe siècle - 1285)",
    century: "XIIIe siècle",
    category: "religieux",
    counts: { religieux: 1 },
    lat: 30.0494,
    lng: 31.2608,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN0t98_eJrhGXh5ip1mwuzO_VNVo2fMY3uWXlODYskHluBiZmejmo-Uz5A4UHuEKMngyZbp9r6IRV5EgzphLxijOO4-FaJu6kR16LlcMfMsox22g_PvrKrTNCwAO3WRV_o_WxAhXB0gdkook6E5Pzlcpg=w2650-h1766-s-no-gm?authuser=0",
    description: "Érigé en un temps record entre 1284 et 1285 par le grand sultan mamelouk al-Mansur Saif al-Din Qalawun sur la prestigieuse artère de Bayn al-Qasrayn (rue Al-Muizz), le complexe funéraire de Qalawun constitue l'un des chefs-d'œuvre absolu, fastueux et novateurs de l'architecture islamique médiévale en Égypte. Conçu à l'emplacement de l'ancien palais fatimide, cet immense ensemble pieux et caritatif regroupait jadis une madrasa, une mosquée, un mausolée royal et un hôpital opulent (bimaristan) révolutionnaire pour son époque par ses soins médicaux gratuits et sa disposition pavillonnaire. Témoin de la magnificence de la dynastie des mamelouks bahrites, l'édifice se distingue par sa façade monumentale rythmée de hautes fenêtres à arcs brisés d'inspiration syrienne, son minaret élancé aux superbes étages superposés et un portail d'entrée somptueusement marqueté. À l'intérieur, le mausolée du fondateur surprend par la richesse étourdissante de sa décoration : ses murs sont revêtus de panneaux de marbre polychrome incrustés de nacre et de mosaïques de verre dorées, surpassant par le raffinement de son art décoratif tout ce qui avait été bâti auparavant au Caire.",
    visiter: "La découverte s'amorce en longeant la vibrante rue Al-Muizz, où l'on repère immédiatement la façade colossale et élégante du complexe s'élevant face à la madrasa d'al-Salih Ayyub. En franchissant le portail d'entrée principal, le visiteur s'engage dans un long couloir voûté qui desservait autrefois les différentes ailes de l'ancien hôpital et de l'institution d'enseignement théologique. Le point d'orgue de la visite réside dans l'accès à la salle du mausolée, dont la vaste coupole repose sur des piliers massifs en granit flanqués de colonnes antiques aux chapiteaux corinthiens sculptés. Les jeux de lumière zénithale traversant les vitraux anciens illuminent les frises en stuc ajouré, les boiseries sculptées et les superbes mihrabs incrustés de pierres semi-précieuses. Cette halte incontournable au cœur de la vieille ville offre une leçon magistrale d'architecture sacrée et civile mamelouke, dans un état de préservation qui force l'admiration des passionnés d'art oriental et d'histoire médiévale.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_madrasa_alkamilia",
    name: "Le Caire - Madrasa al-Kamilia",
    region: "Gouvernorat du Caire (Le Caire historique)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Ayyoubide (XIIIe siècle - 1225)",
    century: "XIIIe siècle",
    category: "religieux",
    counts: { religieux: 1 },
    lat: 30.0485,
    lng: 31.2618,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNhI-w3RZ_6vkvVVLJ-WWjT35yfAmUTP95SaxupyHI_-hSYdFq5h-QTU7UUkw_nQvj84Ac9Vg69DJNnAPYw9MPu7Ib87LIzrXLHZ2lmCg5BW952d9qYiYGfUO4v13oD57aoSfMUBBI3upAEWdswuyLJ1g=w2650-h1766-s-no-gm?authuser=0",
    description: "Édifiée en 1225 en plein cœur du Caire fatimide sur la prestigieuse artère de la rue Al-Muizz par le grand sultan ayyoubide al-Malik al-Kamil — neveu de Saladin —, la Madrasa al-Kamilia s'impose comme l'une des institutions d'enseignement théologique et juridique les plus prestigieuses, pionnières et influentes du Moyen Âge islamique en Égypte. Commanditée pour promouvoir activement le rite sunnite chaféite et dispenser un enseignement érudit des traditions prophétiques (hadiths), cette madrasa historique fut la toute première du pays à abriter une chaire entièrement dédiée à l'étude des sciences du Hadith, attirant les plus grands savants et oulémas du monde musulman. Bien que le temps et les transformations urbaines successives aient altéré une grande partie de sa structure primitive, les vestiges subsistants de ses iwans voûtés et de ses façades sculptées témoignent du raffinement architectural de la dynastie ayyoubide finissante. Témoin d'une époque charnière où le mécénat princier s'attachait à consolider l'orthodoxie religieuse tout en rivalisant de faste urbanistique le long des grands axes de processions, l'édifice incarne un jalon majeur dans l'histoire intellectuelle et monumentale de la capitale égyptienne.",
    visiter: "La découverte s'amorce en cheminant le long de l'animée et historique rue Al-Muizz, à proximité immédiate des grands complexes mamelouks et ayyoubides qui jalonnent l'ancienne artère princière du Caire. En s'approchant des vestiges de la façade et du portail d'entrée, le regard devine l'emplacement de l'ancienne cour intérieure et des salles d'étude où les étudiants en théologie venaient écouter les leçons magistrales des docteurs de la loi. L'atmosphère recueillie du site permet d'imaginer le rayonnement spirituel et académique de cette institution qui forma l'élite administrative et religieuse de l'Empire ayyoubide. Cette halte incontournable au fil des venelles de la vieille ville offre aux passionnés d'histoire médiévale une page fondatrice de l'architecture d'enseignement en terre d'islam, dans le prolongement direct des superbes sanctuaires voisins.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_hammam_inal",
    name: "Le Caire - Hammam d'Inal",
    region: "Gouvernorat du Caire (Le Caire historique)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke Burkite (XVe siècle - 1456)",
    century: "XVe siècle",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 30.0505,
    lng: 31.2602,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNxxQP0TTMObkuv0uZlOVNUVwjqG_iuxdHXj3ZtjATouqp9OoBBiJ0qZAyrUiOLtwORTYfOpgNyg9RVC0q_ATKuEhT0tz7ZMrdKUGQqnYFWzamWMbDswtFxH-ECllrm1DLsp4-nexJvFTYRFCzGy2Wvxw=w1757-h2635-s-no-gm?authuser=0",
    description: "Édifié en 1456 en plein cœur du quartier historique de Bayn al-Qasrayn sur la prestigieuse artère de la rue Al-Muizz par le sultan mamelouk al-Ashraf Inal, le hammam d'Inal s'impose comme l'un des témoins architecturaux civils, thermaux et sociaux les plus précieux, élégants et miraculeusement préservés du Caire médiéval. À une époque où la métropole comptait près de quatre-vingts établissements de bains publics dévoués à l'hygiène, à la détente et à la sociabilité urbaine, ce complexe thermal illustre le raffinement de l'art mamelouk burkite à travers ses superbes coupoles ajourées de verres colorés, ses voûtes de brique en étoile et son ingénieux système hydraulique alimenté par des canalisations souterraines. Destiné à accueillir les notables comme les gens du peuple dans des espaces décloisonnés selon les heures, le hammam conjuguait des salles de repos spacieuses, des bassins d'eau tiède et des étuves chaudes où la vapeur parfumée aux essences orientales offrait une parenthèse de bien-être au milieu de l'effervescence des souks et des processions princières.",
    visiter: "La découverte s'amorce en cheminant le long de la vibrante et historique rue Al-Muizz, à quelques pas des complexes de Qalawun et d'al-Salih Ayyub, pour repérer la sobre et élégante façade de pierre du bain public. En franchissant le seuil, le visiteur pénètre dans l'ancienne salle de repos et de déshabillage (bayt al-awwal), vaste espace central dont la lumière zénithale filtre à travers de minuscules ouvertures circulaires percées dans les coupoles pour créer une pénombre apaisante et intimiste. L'exploration se poursuit à travers les différentes salles thermales successives aux températures graduées — du tepidarium au caldarium —, permettant d'admirer les structures de maçonnerie anciennes, les sols en dalles de marbre patinées et les cheminées de chauffe préservées. Cette halte insolite au cœur du patrimoine civique de la vieille ville offre aux passionnés d'histoire orientale une page fascinante sur les arts de la vie quotidienne et l'ingénierie architecturale sous la dynastie des Mamelouks burkites.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_palais_beshtak",
    name: "Le Caire - Palais de Beshtak (Qasr Bashtak)",
    region: "Gouvernorat du Caire (Le Caire historique)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Le Caire",
    altitude: 22,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke Bahrite (XIVe siècle - 1334)",
    century: "XIVe siècle",
    category: "chateau",
    counts: { chateau: 1 },
    lat: 30.0506,
    lng: 31.2618,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPMXfyPq1Nzn5OK7IZlmZDBBV2VkKorKY2T115I0zJ65xi_e3gdQcZPK3zrFozbNWeUUYctwm9xgI5zuBAxSOc-9kyzLTyReZEkWy5QKx_V7KVyvdKJzNqr_klK9aBSEbBRTQgDWE7DQUV7W8S1O405Yw=w2650-h1766-s-no-gm?authuser=0",
    description: "Édifié entre 1334 et 1339 en plein cœur de la prestigieuse artère de la rue Al-Muizz sur l'emplacement de l'ancien secteur palatial fatimide de Bayn al-Qasrayn par le prince mamelouk et émir Sayf al-Din Bashtak al-Nasiri, le palais de Beshtak s'impose comme l'un des témoins civils et résidentiels princiers les plus somptueux et miraculeusement préservés du Caire médiéval. À l'origine haut de cinq étages et doté d'un système d'adduction d'eau révolutionnaire desservant l'ensemble des niveaux, ce chef-d'œuvre de l'architecture domestique et palatine mamelouke illustre la magnificence du mécénat aristocratique sous le règne du sultan al-Nasir Muhammad ibn Qalawun. Bien que les vicissitudes du temps aient en partie altéré sa structure primitive, le palais conserve son admirable grande salle de réception (qa'a) aux proportions monumentales, encadrée de baies géminées à arcs brisés et surmontée d'un plafond à caissons richement sculpté et doré. Les étages supérieurs se distinguent par leurs superbes balcons de moucharabiehs en bois ajouré, conçus pour permettre aux dames de la cour d'observer discrètement l'animation de la rue et les fastueuses processions princières en contrebas.",
    visiter: "La découverte s'amorce en cheminant le long de l'animée et historique rue Al-Muizz, à proximité immédiate du complexe de Qalawun et de la madrasa d'al-Salih Ayyub, pour repérer la noble façade de pierre rythmée de fenêtres sculptées du palais. En franchissant le seuil, le visiteur pénètre dans l'ancienne cour intérieure et monte vers la grande salle de réception, véritable cœur battant de l'édifice dont l'espace central s'ouvre sur des iwans latéraux rehaussés de frises en stuc ciselé. Le regard est immédiatement captivé par les superbes ouvertures à vitraux colorés et les claires-voies en bois qui diffusent une lumière zénithale tamisée, recréant l'atmosphère feutrée des réceptions de l'élite mamelouke. La visite se prolonge sur les coursives et balcons supérieurs offrant des perspectives saisissantes sur les toits de la vieille ville et les minarets du Caire historique. Cette halte architecturale et civile unique offre aux passionnés d'histoire orientale une immersion fascinante dans l'art de vivre des grands émirs du XIVe siècle.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "alexandrie_citadelle_qaitay",
    name: "Alexandrie - Citadelle de Qaitay",
    region: "Gouvernorat d'Alexandrie",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Alexandrie",
    altitude: 10,
    is_island: true,
    island_name: "Pharos",
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke (XVe siècle - 1477)",
    century: "XVe siècle",
    category: "chateau",
    counts: { chateau: 1, ville: 1 },
    lat: 31.2139,
    lng: 29.8856,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM13vA2rHUSd8nbsCJnjcTWMmu5-7efmRa9GNfTdAALv1g-qnbbPTmQi2kruc9TtMboTZKwWRIzXqqlaFApyByrTpXInr8sIQ5JmwirArmb5evu2BZ6uMwg4nm-l3zNxWgtcu91BuEfT6CgDhRFGE1mLg=w2650-h1766-s-no-gm?authuser=0",
    description: "Dressée fièrement sur la pointe de l'ancienne île de Pharos à l'extrémité occidentale de la grande corniche d'Alexandrie, la citadelle de Qaitay s'impose comme l'un des bastions militaires, maritimes et défensifs les plus spectaculaires de la Méditerranée orientale. Érigée en 1477 par le sultan mamelouk al-Ashraf Sayf al-Din Qaitay pour fortifier le port face aux menaces navales de l'Empire ottoman naissant, cette puissante forteresse de pierre fut bâtie en grande partie sur les substructures et avec les blocs de granit écroulés du légendaire Phare d'Alexandrie, l'une des sept merveilles du monde antique détruit par de séculaires séismes. Ses hautes murailles crénelées en calcaire ocre, rythmées de tours circulaires robustes et d'embrasures d'artillerie, encadrent un donjon central imposant d'où les garnisons mameloukes surveillaient le large. Témoin exceptionnel de l'architecture militaire islamique du XVe siècle et gardien séculaire de la métropole méditerranéenne, l'édifice fusionne la mémoire du monde antique et la grandeur stratégique de l'Égypte mamelouke.",
    visiter: "La découverte commence en empruntant la longue jetée fortifiée qui s'avance dans les flots bleus de la Méditerranée pour aborder la porte principale de la forteresse. En franchissant l'enceinte, le visiteur accède aux cours intérieures pavées et aux salles voutées en pierre calcaire qui abritaient jadis les casernes des soldats, les mosquées castrales et les immenses réserves de munitions. L'ascension vers les terrasses supérieures et les tours de guet offre un panorama maritime absolument époustouflant sur le port oriental d'Alexandrie, les vagues venant s'briser contre les blocs antiques immergés et les toits de la ville moderne. En regardant attentivement au pied des murs et dans la maçonnerie, les passionnés d'archéologie repéreront des colonnes de granit rose, des chapiteaux et des blocs de pierre pharaoniques ou ptolémaïques réemployés directement dans les fondations de la forteresse. Cette halte magistrale au grand air marin constitue l'introduction idéale pour s'imprégner de l'âme cosmopolite et maritime de la fiancée de la Méditerranée.",
    link: "https://photos.google.com/share/AF1QipPnYxYd2vfMd4_DmM5RWpIX_sRIZg9egw2MezXjyuS4hRUOZMcQgFW5CKniHiDTTA?key=eHNQd3I3ZlFiejBtZUtsdWMzam14V2lka1BOZi1R"
  },
  {
    id: "alexandrie_stanley_bridge",
    name: "Alexandrie - Pont de Stanley (Stanley Bridge)",
    region: "Gouvernorat d'Alexandrie",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Alexandrie",
    altitude: 8,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (2001) & Architecture Moderne",
    century: "XXIe siècle",
    category: "pont",
    counts: {},
    lat: 31.2343,
    lng: 29.9465,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNidNeCe7FYHzIohB40iTQSJ-KMhlrsCQJDoJvMlG2kTI5VnYPCnWWGZUP4y-KoYjsubVk7ap1jLyja2QfRrxOe3gNN1vW0FeUU1Wzu3SuMLr-FtXE9VhKy5ZTVY37oLIvqImd4gjERYadK8FQ0MdowNQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Élégant ruban de béton et d'acier jeté au-dessus des eaux azurées du golfe de Stanley sur la grande corniche d'Alexandrie, le pont de Stanley s'impose comme l'un des chefs-d'œuvre architecturaux contemporains les plus emblématiques de la métropole méditerranéenne. Inauguré en 2001 pour fluidifier la circulation côtière et valoriser le front de mer, cet ouvrage d'art long de quatre cents mètres se distingue par ses quatre superbes tours de style néo-mauresque inspirées de l'architecture des palais royaux du Caire et d'Alexandrie. S'étirant gracieusement en arc de cercle au-dessus de la plage et de la marina de Stanley, le pont offre un point de vue panoramique exceptionnel sur les vagues venant lécher les fondations de la corniche et sur les lumières chatoyantes de la ville qui s'embrasent au crépuscule. Véritable lieu de vie, de promenade nocturne et de rendez-vous incontournable pour les amoureux de la mer, l'édifice symbolise la transition harmonieuse entre le prestigieux passé cosmopolite de la fiancée de la Méditerranée et son dynamisme urbain moderne.",
    visiter: "La découverte s'amorce en empruntant les larges trottoirs piétonniers aménagés le long de la corniche pour s'avancer sur le pont au plus près des balustrades surplombant le vide marin. En cheminant d'une tour à l'autre, le regard embrasse une perspective spectaculaire sur les baies successives d'Alexandrie, le ballet des embarcations côtières et l'animation joyeuse des promeneurs accoudés au parapet. La descente vers la plage de Stanley en contrebas permet d'admirer l'ouvrage en contre-plongée, révélant la majesté de ses arches élancées éclairées à la tombée de la nuit par un subtil jeu de projecteurs. Les cafés et terrasses avoisinants invitent à une halte reposante pour déguster un thé à la menthe face aux flots en s'imprégnant de l'atmosphère maritime si caractéristique de la côte égyptienne. Cette étape architecturale moderne constitue une bouffée d'oxygène visuelle incontournable lors de l'exploration de la métropole alexandrine.",
    link: "https://photos.google.com/share/AF1QipPnYxYd2vfMd4_DmM5RWpIX_sRIZg9egw2MezXjyuS4hRUOZMcQgFW5CKniHiDzTQ?key=eHNQd3I3ZlFiejBtZUtsdWMzam14V2lka1BOZi1R"
  },
  {
    id: "alexandrie_musee_greco_romain",
    name: "Alexandrie - Musée Gréco-Romain",
    region: "Gouvernorat d'Alexandrie",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Alexandrie",
    altitude: 12,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Gréco-Romaine (Fondation 1892 & Rénovation 2023)",
    century: "Antiquité tardive & XXIe siècle",
    category: "musee",
    counts: { musee: 1 },
    lat: 31.1983,
    lng: 29.9015,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNU6I8DoTu_NkMDK1jSC2mIGF2QDICnPm5W945WvkgDKpHvdcRRTeLwSN04_7SvEXx0C6GzZR3CPBw4G2MeFuhGSmfxn17vQ8y9Me9J_vpL9FX2uL25aCNz2rF4Tdbu2GUj7HZPvCLa1WPE42T0SxNHmQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Institution muséographique majeure et prestigieuse de la Méditerranée orientale, le Musée Gréco-Romain d'Alexandrie abrite la plus fabuleuse collection au monde d'antiquités issues de la fusion des cultures grecque, romaine, pharaonique et chrétienne. Inauguré initialement en 1892 puis rouvert après une spectaculaire et profonde rénovation de long terme, ce sanctuaire de la science et de l'art abrite plus de quarante mille artefacts répartis à travers des salles lumineuses. De la célèbre tête en marbre blanc d'Alexandre le Grand aux magnifiques mosaïques polychromes de Bérénice II en passant par le monumental taureau Apis en granit et les délicates statuettes de Tanagra, chaque vitrine retrace le rayonnement intellectuel et cosmopolite de la capitale ptolémaïque. Les collections de monnaies antiques, de verreries ouvragées et de reliefs funéraires coptes témoignent du dialogue permanent entre les civilisations qui ont façonné l'histoire de la fiancée de la Méditerranée au fil des siècles.",
    visiter: "La découverte s'amorce par l'admiration de la noble façade néo-classique portant l'inscription grecque « Mouseion », avant de pénétrer dans les superbes galeries thématiques du rez-de-chaussée et de l'étage. Le parcours permet d'admirer de près le raffinement de la statuaire alexandrine où l'anatomie classique grecque épouse les symboles de la spiritualité égyptienne. Une halte prolongée s'impose devant les mosaïques murales exceptionnelles et les sculptures d'époque romaine témoignant du faste impérial sous Auguste et ses successeurs. Cette étape culturelle incontournable offre aux passionnés d'histoire antique une synthèse éblouissante des influences méditerranéennes au cœur même de la métropole alexandrine.",
    link: "https://photos.google.com/share/AF1QipPnYxYd2vfMd4_DmM5RWpIX_sRIZg9egw2MezXjyuS4hRUOZMcQgFW5CKniHiDzTQ?key=eHNQd3I3ZlFiejBtZUtsdWMzam14V2lka1BOZi1R"
  },
  {
    id: "alexandrie_theatre_romain",
    name: "Alexandrie - Théâtre Romain Antique (Kom el-Dikka)",
    region: "Gouvernorat d'Alexandrie",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Alexandrie",
    altitude: 9,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Romaine Impériale (IIe-IVe siècle)",
    century: "Antiquité (IIe siècle)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 31.1948,
    lng: 29.9042,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMXEf0woCHiuDwlAh9mw_qKdwcBNYfmVPixLaGjOuGryfkf7BW4br40FtlCF737093fbbs3S2zKbV8Zwdi4-Yf41ARxj3VRq7DzPvKiCyUm93dmQ4lw1pZZzGNwUoICLii69AalHZNbHFHMAX932dMXtQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Miraculeusement mis au jour au cœur du tissu urbain moderne d'Alexandrie lors de fouilles menées sur la colline archéologique de Kom el-Dikka, le théâtre romain antique s'impose comme l'un des vestiges monumentaux les plus fascinants et inattendus de la métropole méditerranéenne. Édifié originellement au IIe siècle de notre ère sous les Antonins puis profondément remanié à l'époque byzantine pour servir d'odéon ou de salle de concert et de réunions publiques, cet édifice semi-circulaire en marbre blanc et en pierre calcaire pouvait accueillir plus de huit cents spectateurs sur ses gradins étagés. Entouré des vestiges d'un vaste complexe résidentiel et thermal gréco-romain comprenant des bains publics, des villas luxueuses aux sols ornés de superbes mosaïques géométriques ainsi qu'un auditoire antique aux bancs de marbre disposés en fer à cheval, le site illustre le faste intellectuel, architectural et social de la capitale ptolémaïque et romaine au faîte de son rayonnement culturel.",
    visiter: "La découverte s'amorce en cheminant à travers le parc archéologique paysager de Kom el-Dikka, où les vestiges de l'époque romaine affleurent au milieu d'un jardin luxuriant parsemé de fragments de colonnes, de chapiteaux corinthiens et de stèles épigraphiques. En descendant dans la vaste cavea du théâtre, le visiteur peut admirer la régularité géométrique des treize gradins de marbre blanc immaculé importé en grande partie d'Europe, soutenus par de puissants murs de brique rouge et de calcaire. L'exploration se poursuit en contournant la scène pour explorer les vestiges des thermes impériaux adjacents, dont les fours de chauffe, les hypocaustes et les bassins témoignent de l'ingénierie hydraulique sophistiquée de l'Antiquité tardive. Cette étape archéologique incontournable offre aux passionnés d'histoire antique une immersion saisissante et paisible au beau milieu de l'effervescence de la cité alexandrine moderne.",
    link: "https://photos.google.com/share/AF1QipPnYxYd2vfMd4_DmM5RWpIX_sRIZg9egw2MezXjyuS4hRUOZMcQgFW5CKniHiDzTQ?key=eHNQd3I3ZlFiejBtZUtsdWMzam14V2lka1BOZi1R"
  },
  {
    id: "alexandrie_catacombes_kom_el_chouqafa",
    name: "Alexandrie - Catacombes de Kom el-Chouqafa",
    region: "Gouvernorat d'Alexandrie",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    subdiv: "Alexandrie",
    altitude: 5,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Romaine Impériale (IIe-IVe siècle)",
    century: "Antiquité (IIe siècle)",
    category: "archeologie",
    counts: { archeologie: 1 },
    lat: 31.1786,
    lng: 29.8932,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNJVvVDfHbc_E1Z0PVN5ygfeSqr5IBLXTIibbMVHrBZ4v3wkPPqqP9msNO4WjDlUX2fYwN3l5NXhmAPUt3OdLDbDQNtT69024LG2VhB9533rrnLZZ_dskTO86WtEuIdBRaTPbmysrrN0eRUpTBoRNLxbg=w2650-h1766-s-no-gm?authuser=0",
    description: "Trésor archéologique souterrain majeur de la Méditerranée antique et chef-d'œuvre de l'architecture funéraire gréco-romaine, les catacombes de Kom el-Chouqafa (« le monticule d'éclats ») s'enfoncent dans le calcaire à l'ouest d'Alexandrie. Édifiées au IIe siècle de notre ère à l'apogée de l'Empire romain avant d'être étendues jusqu'au IVe siècle, ces catacombes monumentales constituent l'une des sept merveilles du Moyen Âge et illustrent la fusion artistique saisissante entre les traditions funéraires pharaoniques et l'esthétique classique hellénistique et romaine. S'étageant sur trois niveaux souterrains dont le plus bas fut longtemps submergé par les infiltrations de la nappe phréatique, le site abrite un impressionnant puits central à vis, une vaste salle de banquet funéraire où les familles venaient honorer leurs défunts en brisant des vases rituels, ainsi qu'une sépulture principale aux superbes reliefs muraux syncrétiques. Le visiteur y contemple avec émerveillement le dieu Anubis vêtu en légionnaire romain et le taureau sacré Apis protégeant les sarcophages, témoignant du dialogue spirituel permanent entre les civilisations de l'antiquité tardive.",
    visiter: "La découverte s'amorce par l'approche de la structure d'accès avant d'emprunter la spirale de l'escalier hélicoïdal s'enfonçant dans la pénombre fraîche et minérale de la nécropole. L'exploration de la rotonde et de la salle de réception (triclinium) permet d'admirer les banquettes de pierre où prenaient place les convives lors des banquets commémoratifs des défunts. En progressant dans le dédale des galeries souterraines, l'émotion atteint son apogée devant la chambre funéraire principale : ses parois sculptées révèlent des bas-reliefs polychromes uniques où l'iconographie funéraire égyptienne épouse les canons anatomiques de l'art romain. La visite se poursuit par la découverte de la fameuse « salle de Caracalla », qui abriterait selon la tradition les ossements de chevaux sacrifiés lors des troubles de 215 apr. J.-C. Cette immersion spéléologique et historique au cœur du sous-sol alexandrin offre une page mémorable et mystérieuse sur les croyances d'éternité en terre d'Égypte.",
    link: "https://photos.google.com/share/AF1QipPnYxYd2vfMd4_DmM5RWpIX_sRIZg9egw2MezXjyuS4hRUOZMcQgFW5CKniHiDzTQ?key=eHNQd3I3ZlFiejBtZUtsdWMzam14V2lka1BOZi1R"
  },
  {
    id: "lac_de_nino",
    name: "Lac de Nino & Pozzi",
    region: "Haute-Corse (Massif du Rotondo)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Haute-Corse (2B)",
    region_admin: "Corse",
    altitude: 1743,
    is_island: true,
    island_name: "Corse",
    transport: "route",
    era_group: "nature",
    era_label: "Ère Glaciaire & Temps Géologique",
    century: "Temps géologique",
    category: "lac",
    counts: { lac: 1, rando: 1, parc_naturel: 1 },
    lat: 42.2575,
    lng: 8.9405,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOffslg_xvJ4kz3UwA46OCvLiQQ8HgO5_n6LBl4EchL5DDN_DeEkv4EzGRseb3NlTtyLxSXmYezSfQEZhddBZDGpPRyCNKT7Ae_d0KGx89OuDQUCUbU6TbO08b1EsR20nJyjUU2By4_zk96E43aOV2iqQ=w2318-h1546-s-no-gm?authuser=0",
    description: "Perché à 1 743 mètres d'altitude au cœur du Parc Naturel Régional de Corse et dominé par les crêtes granitiques du massif du Rotondo, le lac de Nino constitue l'un des joyaux naturels les plus emblématiques de l'île de Beauté. Ce vaste lac glaciaire s'étend au milieu d'un plateau d'altitude tapissé de pozzines verdoyantes, véritables pelouses tourbeuses constellées de trous d'eau reliés par de délicats méandres scintillants. Véritable oasis suspendue entre ciel et montagne le long du mythique sentier du GR20, le site offre un spectacle féerique où paissent paisiblement en semi-liberté des chevaux insulaires sauvages accompagnés de leurs poulains. Le contraste saisissant entre la douceur des pelouses spongieuses, la limpidité des eaux calmes et l'austérité minérale des parois rocheuses environnantes confère à cet écrin préservé une atmosphère empreinte d'une poésie et d'une sérénité incomparables.",
    visiter: "L'accès pédestre à ce sanctuaire d'altitude s'effectue principalement depuis la maison forestière de Popaghja dans la forêt territoriale de Valdu Niellu, ou via une traversée spectaculaire par le col de Vergio et la crête de Bocca a Reta. L'ascension débute à l'ombre bienfaisante des grands pins laricio avant de déboucher sur un univers minéral et grandiose récompensé par un panorama exceptionnel s'étirant jusqu'au golfe de Sagone et aux sommets environnants. Sur place, la découverte se poursuit en longeant avec précaution les berges herbeuses et les pozzines afin de préserver cet écosystème montagnard d'une grande fragilité, tout en observant à distance respectueuse la harde de chevaux sauvages en pâture. La luminosité changeante au fil de la journée sublime les reflets des crêtes dans le miroir d'eau, invitant à une halte contemplative inoubliable au cœur des grands espaces corses.",
    link: "https://photos.google.com/share/AF1QipOcHfU1z-tymFZfCQ5g7e273NPu_R8fhW62j5S8mqfHfOE8BK_jxQ79ANOfhH5n0Q?key=WVpIbVlIbXNrREllVTFMSVk0UmFnVWV6ZlpzZWJn"
  },
  {
    id: "farinole_sentier_douaniers",
    name: "Farinole & Sentier des Douaniers",
    region: "Haute-Corse (Cap Corse)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Haute-Corse (2B)",
    region_admin: "Corse",
    altitude: 35,
    is_island: true,
    island_name: "Corse",
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Génoise (XVIe siècle - 1562)",
    century: "XVIe siècle",
    category: "rando",
    counts: { rando: 1, plage: 1 },
    lat: 42.7319,
    lng: 9.3428,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMJZxrY8toY64F7BFxDsmqaxYEDxY9HN9b2NY0rMk8xnLUHSsgd4TdQ2ucSKJjdzSCqaIpEnSFMS2gvFbz5zysBVivKQXiCAyGLmdhIMzkrV7rk3SMrZczJkJnnlN3T3zxd23xpiDrEz1Ppvupq_1YZBg=w2948-h2219-s-no-gm?authuser=0",
    description: "Sentinelle sauvage dressée sur le littoral occidental du Cap Corse entre Patrimonio et Nonza, Farinole déploie une côte rocheuse tourmentée où la rudesse du schiste vert et des falaises plonge directement dans les flots turquoise de la Méditerranée. Témoin privilégié de l'histoire maritime insulaire, la tour génoise ronde bâtie en 1562 veille sur les anses marines et les déferlantes qui viennent fouetter les galets polis et le sable ocre du rivage. Le sentier des douaniers qui serpente à fleur de crête et en corniche offre une immersion totale dans les parfums entêtants de myrte, d'immortelle et de lentisque courbés par les embruns marins. Les contrastes chromatiques y sont d'une intensité saisissante, mêlant le bleu profond du grand large, la verdure argentée du maquis littoral et les nuances sombres des affleurements rocheux balayés par le vent d'ouest. Cet écrin naturel remarquablement préservé incarne la beauté brute et indomptée des marines corses, où chaque crique isolée murmure les récits séculaires des guetteurs d'autrefois.",
    visiter: "L'itinéraire pédestre s'aborde idéalement depuis la marine de Farinole ou les abords de la tour génoise pour longer les reliefs découpés surplombant les criques secrètes et les platiers rocheux du rivage. La marche en balcon dévoile des perspectives grandioses sur le golfe de Saint-Florent et les crêtes montagneuses du Nebbio se détachant à l'horizon. Les amateurs d'exploration marine trouveront dans les eaux cristallines bordant les récifs un terrain de jeu exceptionnel pour le snorkeling et la plongée, révélant une vie sous-marine foisonnante tapie entre tombants de roche et herbiers de posidonie. Les plages de sable et de galets invitent à des haltes de baignade vivifiantes dans une atmosphère paisible loin des fortes affluences. En fin de journée, l'exposition plein ouest transforme le littoral en un théâtre flamboyant où le soleil couchant embrase les tours côtières et la mer, offrant aux promeneurs une halte contemplative inoubliable au cœur du Cap Corse sauvage.",
    link: "https://photos.google.com/share/AF1QipPxc5QdKcOU0QmdDvl5D9EF4pPEd0SIms-Nsinc6b5yLpoO369hYwpzX592PVZRNw?key=OWZVUnZLSk9kQWJJZS11ODg5VE52WmUxcEpxb3dB"
  },
  {
    id: "chateau_de_chambord",
    name: "Château de Chambord",
    region: "Centre-Val de Loire (Loir-et-Cher)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Loir-et-Cher",
    region_admin: "Centre-Val de Loire",
    altitude: 83,
    is_island: false,
    transport: "route",
    era_group: "renaissance",
    era_label: "Époque Moderne & Renaissance (XVIe siècle - 1519)",
    century: "XVIe siècle",
    category: "chateau",
    counts: { chateau: 1, unesco: 1 },
    lat: 47.6162,
    lng: 1.5177,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM7mR674pInWi3CIFiACN_huSA7_QS14yjUxkwPE-hba4tXIFqjuJXp-clNqLgFhDyqtpdAJGQcvX4fp1Bv_mklfoTgZ7zTA5RnJ-b6Hx04kD3lUoFJmu9sIs3b92tRaAzRozLVagaHPnM5dK0jX0mcjA=w3092-h1739-s-no-gm?authuser=0",
    description: "Chef-d'œuvre absolu de la Renaissance française et emblème étincelant du pouvoir de François Ier, le château de Chambord s'élève au cœur du plus grand parc forestier clos d'Europe, grand comme Paris intra-muros. Commandité en 1519 comme un somptueux pavillon de chasse destiné à exalter la puissance royale et inspiré par le génie visionnaire de Léonard de Vinci, l'édifice déploie une silhouette monumentale unique associant l'architecture traditionnelle des forteresses médiévales et la fabuleuse exubérance décorative italienne. Son emblématique donjon central abrite la célèbre et spectaculaire structure de l'escalier à double révolution, où deux personnes peuvent monter et descendre simultanément sans jamais se croiser tout en s'entre-apercevant à travers les ajours de la pierre. Couronné par un foisonnement féerique de tourelles, de lucarnes sculptées et de cheminées qui se découpent sur le ciel de Sologne, le domaine incarne la quintessence du raffinement esthétique et de l'ambition architecturale des monarques de la val de Loire.",
    visiter: "La découverte s'amorce par l'approche de la vaste esplanade royale bordée par les bras canalisés du Cosson, offrant une perspective saisissante sur la façade monumentale de calcaire blanc. En franchissant le seuil, le visiteur accède au grand escalier central du donjon, point de départ idéal pour explorer les salles meublées, les appartements historiques de Louis XIV et les galeries abritant de riches collections d'objets d'art. L'ascension se poursuit vers les vastes terrasses panoramiques qui ceignent la tour lanterne : depuis ce point de vue aérien exceptionnel, le regard embrasse à trois cent soixante degrés les toits sculptés, les chimères et l'immensité verdoyante du parc domanial clos de murs. La promenade se prolonge à l'extérieur par la découverte des jardins à la française récemment restitués au pied du château, ainsi que par les sentiers forestiers invitant à la contemplation de cette merveille architecturale classée au patrimoine mondial de l'UNESCO.",
    link: "https://photos.google.com/share/AF1QipNG8HeDSAtuw9AUKuzP37jrxBArcjYVnQ4MjEBobSitUF4sSfQQ8VBP047xuVjBpg?key=d2VlWmZSbks1S1JyZGhENUdGWUZERHVnR0MtMk5n"
  },
  {
    id: "dolmen_pierre_levee_chapelle_vendomoise",
    name: "La Chapelle-Vendômoise - Dolmen de la Pierre Levée",
    region: "Centre-Val de Loire (Loir-et-Cher)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Loir-et-Cher",
    region_admin: "Centre-Val de Loire",
    altitude: 115,
    is_island: false,
    transport: "route",
    era_group: "prehistoire",
    era_label: "Époque Néolithique (Mégalithisme Ancien)",
    century: "Néolithique",
    category: "megalithe",
    counts: { megalithe: 1 },
    lat: 47.6611,
    lng: 1.2581,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPucLqNqBUoCHQVv2L_9I8AKGBBseXz8Ao7zkMSQJaHPtLOJXI2OINDZc7dhWLiw6rQfkomEWvPiOvaZ3MLd36PSK6ntTxBa5Oy_oa9X_23DxLhbN7zVjEkGh4-9f54DZmdzM-NyKUt_cFau8vK6fJltA=w2412-h1607-s-no-gm?authuser=0",
    description: "Témoignage énigmatique et majestueux des civilisations agraires du Néolithique au cœur des terres du Loir-et-Cher, le dolmen de la Pierre Levée — également désigné par la tradition populaire sous les noms de « Table du Diable » ou de « Caillotte de Gargantua » — s'impose comme l'un des monuments mégalithiques les plus remarquables et mieux conservés de la région Centre-Val de Loire. Classé au titre des Monuments historiques dès 1889, cet édifice mégalithique de type à portique présente une vaste chambre sépulcrale rectangulaire délimitée par de robustes orthostates en calcaire et meulière de Beauce, surmontée d'imposantes dalles de couverture massives. Utilisé au fil des siècles comme repère topographique et frontalier entre les anciens comtés de Vendôme et de Blois, le site est enveloppé d'un riche folklore local associant sa genèse à des jets de pierres de géants ou à des fées bâtisseuses. Entouré de mystère et baigné par la tranquillité des paysages bocagers et des sentiers de la Cisse, le dolmen offre aux passionnés de mégalithisme et de légendes ancestrales une halte intemporelle au contact direct des racines les plus anciennes du patrimoine français.",
    visiter: "La découverte s'amorce par une agréable promenade champêtre au départ du village de La Chapelle-Vendômoise, empruntant les sentiers de randonnée balisés qui serpentent à travers les cultures et les abords de la Cisse landaise. En approchant du site ombragé par les frondaisons, le visiteur découvre le mégalithisme dans toute sa vérité brute : les blocs de calcaire ocre dressés au milieu de la clairière révèlent la précision de l'agencement primitif, avec sa dalle de chevet et son portique d'entrée orienté vers l'est. La contemplation attentive de la structure permet d'observer la texture rugueuse des tables mégalithiques et la patine que les millénaires ont déposée sur la pierre. Les promeneurs en quête d'immersion historique apprécieront la sérénité absolue des lieux, propice à la rêverie et à la photographie au cœur d'un site protégé et propriété de la Société archéologique du Vendômois. Cette étape bucolique et culturelle constitue un complément idéal pour qui souhaite relier l'architecture royale des châteaux de la Loire aux vestiges mystérieux des premiers bâtisseurs de l'humanité.",
    link: "https://photos.google.com/share/AF1QipNUREvvG3QRB4z7Tm7BT8q2vTR_fSxwitwDABxlffYcEaChu6hEVFi_9QaKaG7MrA?key=WklBRlAtaUtxM1lDdGYyT21DR0FPX3RJRHRMUTF3"
  },
  {
    id: "malestroit_eglise_saint_gilles",
    name: "Malestroit - Église Saint-Gilles",
    region: "Bretagne (Morbihan)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Morbihan",
    region_admin: "Bretagne",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Médiévale (XIIe - XVIe siècle)",
    century: "Moyen Âge (XIIe siècle)",
    category: "religieux",
    counts: { religieux: 1, ville: 1 },
    lat: 47.8100,
    lng: -2.3824,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN8DSdTWH6KVBHATJDS9nf3uc55TDucdN9B8iFBsnLVgpzfpoOqPvx3YkfyGAFj-ShPhwdlKmNgPTgXXih1CrqmDsWMp4A6OpiPbdzQtX3lET1dD7lKAhyNPFAEvZZ_UkHjmyg-cb-B1M4Lc_T4uR12WA=w1976-h2635-s-no-gm?authuser=0",
    description: "Fleuron architectural de la charmante « Petite Cité de Caractère » de Malestroit au cœur du Morbihan, l'église Saint-Gilles s'impose comme un édifice religieux singulier et profondément ancré dans l'histoire médiévale bretonne. Élevée originellement au milieu du XIIe siècle (vers 1144) sur l'emplacement d'une source sacrée et d'une chapelle primitive dédiée au culte de saint Gilles, l'église connut de multiples campagnes d'agrandissement et de reconstruction suite aux aléas de l'histoire et aux incendies successifs. Son architecture extérieure se remarque par la polychromie saisissante de ses matériaux — associant les teintes sombres du grès local aux pierres de taille calcaires — et par sa rare structure à double nef accolée, coiffée par un double pignon occidental au centre duquel s'élève la gracieuse tourelle hexagonale du beffroi. Classée au titre des Monuments historiques dès 1931, elle offre aux visiteurs un voyage visuel et spirituel saisissant au carrefour de l'art roman et des exubérances gothiques flamboyantes.",
    visiter: "La découverte s'amorce sur la pittoresque place du Bouffay, où l'on contemple la façade occidentale flanquée de ses portails jumeaux finement sculptés et de ses imposants piliers extérieurs ornés des figures symboliques des Évangélistes et d'allégories morales. En franchissant le seuil, le regard est immédiatement captivé par l'atmosphère recueillie de la double nef et par la pureté des voûtes bombées de style angevin conservées dans la croisée du transept et le bras sud. Les passionnés d'art médiéval prêteront une attention particulière aux chapiteaux romans sculptés de chimères et d'animaux fantastiques ainsi qu'aux remarquables peintures murales du XIIIe siècle découvertes lors de récentes restaurations, représentant des figures animalières énigmatiques telles qu'un éléphant de combat et un félin unicorne. La promenade se prolonge le long des ruelles anciennes de Malestroit bordées de maisons à pans de bois, prolongeant cette parenthèse historique hors du temps au bord du canal de Nantes à Brest.",
    link: "https://photos.google.com/share/AF1QipO0jTn-dO4jDmXY8MNR6sDppA4-tBIaecZOuzjWih8pW6aHzKvMmIOLepaCHaKp5w?key=aE1SckM4UDhSWkl0MVZMb210cW9HZ1Joa0RvTHlB"
  },
  {
    id: "malestroit_ecluse_canal_nantes_brest",
    name: "Malestroit - Écluse du Canal de Nantes à Brest",
    region: "Bretagne (Morbihan)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Morbihan",
    region_admin: "Bretagne",
    altitude: 19,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Industrielle (XIXe siècle)",
    century: "XIXe siècle",
    category: "pont",
    counts: {},
    lat: 47.8120,
    lng: -2.3828,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMRq0BVtzKa49cb6RHZPhHvbwR2h4tI57LHD3qR4xOjIMLD9i_HfWgO7wGn7mwsbHdE8NIXnvmemF0Z1nHibrciURpYdEQtH5FwVTx0Veug6_YlGMpACkPI1A0qfIlYknKOU14LR7yq5QjGTpS8D39NOg=w2412-h1809-s-no-gm?authuser=0",
    description: "Élément pittoresque et fonctionnel du remarquable patrimoine fluvial breton, l'écluse de Malestroit rythme avec une sérénité intemporelle le cours paisible du canal de Nantes à Brest à l'orée de la charmante « Petite Cité de Caractère ». Aménagée au XIXe siècle dans le cadre de la vaste entreprise napoléonienne et royale visant à relier par voie d'eau intérieure les grands ports militaires de l'Ouest tout en contournant le blocus maritime britannique, cette infrastructure hydraulique illustre le génie civil de l'ère industrielle. Ses bajoyers en pierres de taille granitiques, son mécanisme de vanne en fonte d'époque et sa buvette ou maison éclusière aux murs fleuris de roses trémières composent un tableau bucolique d'une rare élégance, où le ballet discret des embarcations de plaisance perpétue l'animation fluviale d'autrefois.",
    visiter: "La découverte s'amorce par une agréable promenade le long du chemin de halage ombragé qui longe les berges verdoyantes du canal à quelques pas seulement du centre historique de Malestroit. En s'approchant de l'ouvrage, le visiteur peut observer le fonctionnement minutieux des portes et des vannes manœuvrées pour réguler le niveau des biefs et permettre aux bateaux de franchir la déclivité topographique. Le site constitue un spot de détente privilégié pour les randonneurs, les cyclistes empruntant la vélovoie et les photographes en quête de reflets aquatiques parfaits, avec en toile de fond les silhouettes anciennes de la cité médiévale. La halte se prolonge idéalement en terrasse le long de l'eau pour savourer la quiétude des lieux et le rythme apaisant de la navigation fluviale au cœur de la Bretagne intérieure.",
    link: "https://photos.google.com/share/AF1QipO0jTn-dO4jDmXY8MNR6sDppA4-tBIaecZOuzjWih8pW6aHzKvMmIOLepaCHaKp5w?key=aE1SckM4UDhSWkl0MVZMb210cW9HZ1Joa0RvTHlB"
  },
  {
    id: "port_navalo_promontoire",
    name: "Arzon - Promontoire de Port Navalo",
    region: "Bretagne (Morbihan)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Morbihan",
    region_admin: "Bretagne",
    altitude: 15,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Littorale",
    century: "XXe siècle",
    category: "",
    counts: {},
    lat: 47.5502,
    lng: -2.9154,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPpn3mcbR_cefuqRbq7u0gfKmaYd3BYCwmfwpWzA_qZfaRV1Xkq2B7_4yJoS4L6423l8B4N6Nm8L5yXDn3FIXHb0GiijFzHAbLeEPd1liLDJFrW3wY6-dRUes7GZQnz9KExWmFPMoei6F0mA9LDuuZOHg=w2506-h1879-s-no-gm?authuser=0",
    description: "Avancée rocheuse spectaculaire marquant la pointe occidentale de la presqu'île de Rhuys, le promontoire de Port Navalo veille tel un gardien de pierre à l'embouchure du golfe du Morbihan, là où les eaux tumultueuses de l'océan Atlantique viennent se heurter aux courants intérieurs de la petite mer. Site naturel d'une beauté saisissante façonné par les vents et les marées parmi les plus puissantes d'Europe, ce promontoire offre un panorama grandiose sur l'entrée du golfe, le phare historique, les îles de Houat et Hoedic au large, ainsi que sur le ballet incessant des voiliers et des navires reliant les îles d'un archipel légendaire. Fréquenté depuis la nuit des temps par les marins et les navigateurs redoutant la violence de ses remous, le site allie la rudesse de son cordon granitique littoral à la douceur iodée des paysages bretons du Morbihan.",
    visiter: "La découverte s'amorce par les sentiers côtiers aménagés le long des falaises dominant les courants marins, permettant d'observer les remous spectaculaires de la marée montante ou descendante. En contournant la pointe vers le sémaphore et le vieux port, le visiteur profite d'une vue à trois cent soixante degrés idéale pour admirer les couchers de soleil flamboyants sur l'océan. C'est l'étape parfaite pour respirer l'air du large et s'imprégner de l'atmosphère maritime de la presqu'île de Rhuys avant d'embarquer vers les îles.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "cascade_pont_bucatoghju",
    name: "Cascade & Pont génois du Bucatoghju",
    region: "Haute-Corse (Costa Verde)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Haute-Corse (2B)",
    region_admin: "Corse",
    altitude: 240,
    is_island: true,
    island_name: "Corse",
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Génoise & Pastorale",
    century: "XVIe siècle",
    category: "cascade",
    counts: { cascade: 1, rando: 1 },
    lat: 42.3585,
    lng: 9.5085,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNrsUFdD0qItTqvLjxxr-mtuoXqc_8g4crUQGLnmXt7hAUfoVXrp-MdsOEQqj1TAC2WXu7VRHUZcXHMeABVJCzEhGLZ2wkeEqlo_wOL4I090xq9ikLGa--M3Z1LEGHRUxZvJnsbTOdxr05oRY8RTgdseg=w2441-h1627-s-no-gm?authuser=0",
    description: "Niché sur les contreforts orientaux de la Castagniccia au cœur de la verdoyante région de la Costa Verde, le site du Bucatoghju dévoile une harmonie saisissante entre patrimoine d'ingénierie historique et nature insulaire préservée. Encaissé dans une gorge sauvage entre Santa-Maria-Poggio et San-Nicolao, le torrent bondissant du Bucatoghju se fraie un passage impétueux à travers les parois de schiste pour donner naissance à une succession de cascades impétueuses et de vasques cristallines aux reflets émeraude. Fièrement campé au-dessus des eaux vives depuis des siècles, le remarquable pont génois à arche unique en pierres sèches témoigne de l'antique voie de communication pastorale qui reliait jadis les communautés villageoises perchées aux plaines fertiles de la côte tyrrhénienne. Entouré d'une dense châtaigneraie, d'aulnes ombragés et d'un maquis odorant qui embaume l'air humide des sous-bois, cet écrin de fraîcheur offre un contraste saisissant avec la douceur du littoral marin tout proche, invitant à une parenthèse enchantée au son apaisant du ruissellement continu de la rivière.",
    visiter: "La découverte de ce site emblématique s'articule autour d'un agréable itinéraire pédestre ombragé et très accessible, cheminant au fil de l'eau entre ponts de pierre et berges moussues. Le parcours franchit le pont génois du Bucatoghju avant de remonter le long du lit du cours d'eau pour atteindre les piscines naturelles propices à des haltes de baignade vivifiantes durant la période estivale. Les randonneurs plus aguerris pourront poursuivre la marche en boucle pour découvrir les vestiges du hameau en ruine de Raghja, la chapelle Saint-Pancrace ou monter vers les tunnels de la corniche découvrant la célèbre cascade de l'Ucelluline et ses panoramas spectaculaires plongeant directement vers la mer Tyrrhénienne. Des passages aménagés sur des rondins et des galets ponctuent la progression au cœur d'une végétation luxuriante où la lumière filtre délicatement à travers les frondaisons. Cette balade constitue une immersion idéale pour les familles comme pour les passionnés d'histoire corse désireux d'associer fraîcheur montagnarde et découverte patrimoniale.",
    link: "https://photos.google.com/share/AF1QipPPgIE0CNEMhbKL0s6wFIjQQ5PsVF0DmZsFf82B0Z5jUUzkl29-fpUDw9woAze_aA?key=VEYwVzBzcldLd24tUzR1Y0VyeVFpQVlwWlpkMG9R"
  },
  {
    id: "giverny_maison_monet",
    name: "Giverny & Maison de Claude Monet",
    region: "Normandie (Eure)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    subdiv: "Eure (27)",
    region_admin: "Normandie",
    altitude: 22,
    is_island: false,
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Impressionniste (1883)",
    century: "XIXe siècle",
    category: "ville",
    counts: { ville: 1 },
    lat: 49.0753,
    lng: 1.5337,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNzF8a6tNABa-f5GaaYsOwVKQNRnGJWizJSr0pAzoBSI0Q4TvXI1pqtPLD9rBhsU98gYbPid5H40jhwo_u62N8-XTqM007sOoYIyg07iepWzLIVHBfAXnK5WY-4WNPfkOaeaasy_VOtA-ft3E7TlDpvVw=w2441-h1627-s-no-gm?authuser=0",
    description: "Blotti sur les coteaux verdoyants de la vallée de la Seine aux confins de la Normandie et de l'Île-de-France, le village bucolique de Giverny incarne le sanctuaire vivant de l'impressionnisme mondial. C'est dans ce décor préservé que le maître de la lumière, Claude Monet, choisit d'établir sa demeure et son atelier en 1883, fasciné par les subtiles variations atmosphériques et la pureté des reflets d'eau environnants. Entourée d'un somptueux écrin floral sans cesse renouvelé, sa célèbre maison au crépi rose et aux volets vert pomme dialogue harmonieusement avec le Clos Normand, véritable tableau végétal conçu comme une palette vivante à ciel ouvert. Plus bas, par-delà les voies, le jardin d'eau d'inspiration orientale révèle son iconique pont japonais drapé de glycines et son étang orné des célèbres nymphéas qui ont immortalisé son œuvre ultime. Les ruelles fleuries du village, bordées de vieilles bâtisses en pierre calcaire et d'anciennes dépendances artistiques, conservent intacte cette atmosphère poétique où la nature et l'art pictural se confondent dans une harmonie sensorielle intemporelle.",
    visiter: "La découverte débute par la visite intimiste de la maison de l'artiste, dont les pièces chaleureuses aux teintes vives restituent fidèlement le cadre de vie du peintre, depuis la lumineuse cuisine carrelée de bleu de Rouen jusqu'à l'impressionnante collection d'estampes japonaises ornant la salle à manger jaune d'or. La promenade se prolonge à travers les allées rectilignes du Clos Normand où foisonnent roses, capucines, tulipes et iris agencés selon un savant jeu de teintes et de volumes. En empruntant le passage souterrain, les visiteurs découvrent le féerique jardin d'eau, lieu de contemplation bercé par les frémissements des bambous et les reflets mouvants des nénuphars sur le miroir aquatique. Une flânerie dans le village permet ensuite de remonter la rue Claude Monet pour visiter le Musée des Impressionnismes et son jardin paysager contemporain, avant de se recueillir devant la tombe du peintre dans le paisible cimetière de l'église Sainte-Radegonde, parachevant une immersion culturelle d'une rare élégance.",
    link: "https://photos.google.com/share/AF1QipMrmXqbr4c_CdCIqjU36P_ojhe298d0xYErpGiiRFaHtNB6Zj-iIL9AfJCYRn-XZg?key=ZU1xVXFSMGROVDJTYlE5Q0ZJSXpjMl9odzJjcDB3"
  }
];

// Dictionnaire officiel des filtres : Culture et Nature (avec l'item Île)
const CATEGORIES = {
  tous: { label: "Tous les POI", icon: "fa-star", color: "#f59e0b", section: "culture", active: true },
  ville: { label: "Ville / Village", icon: "fa-city", color: "#b45309", section: "culture", active: true },
  musee: { label: "Musée", icon: "fa-landmark", color: "#a16207", section: "culture", active: true },
  religieux: { label: "Édifice religieux", icon: "fa-church", color: "#854d0e", section: "culture", active: true },
  chateau: { label: "Château / Palais", icon: "fa-chess-rook", color: "#713f12", section: "culture", active: true },
  pont: { label: "Ponts & Ouvrages d'art", icon: "fa-archway", color: "#a16207", section: "culture", active: true },
  place: { label: "Places de village & centre-ville", icon: "fa-square-parking", color: "#b45309", section: "culture", active: true },
  fontaine: { label: "Fontaines & Sources", icon: "fa-fountain", color: "#92400e", section: "culture", active: true },
  batiment_culturel: { label: "Bâtiments culturels", icon: "fa-building-columns", color: "#78350f", section: "culture", active: true },
  habitation: { label: "Habitations historiques", icon: "fa-house-user", color: "#451a03", section: "culture", active: true },
  archeologie: { label: "Site archéologique", icon: "fa-monument", color: "#78350f", section: "culture", active: true },
  unesco: { label: "Site UNESCO", icon: "fa-award", color: "#b45309", section: "culture", active: true },
  megalithe: { label: "Mégalithe", icon: "fa-archway", color: "#57534e", section: "culture", active: true },

  cascade: { label: "Cascade", icon: "fa-water", color: "#0284c7", section: "nature", active: true },
  lac: { label: "Lac", icon: "fa-droplet", color: "#0ea5e9", section: "nature", active: true },
  plage: { label: "Plage / Plongée", icon: "fa-umbrella-beach", color: "#06b6d4", section: "nature", active: true },
  ile: { label: "Île", icon: "fa-anchor", color: "#0891b2", section: "nature", active: true },
  grotte: { label: "Grotte", icon: "fa-mountain", color: "#0369a1", section: "nature", active: true },
  volcan: { label: "Volcan", icon: "fa-volcano", color: "#dc2626", section: "nature", active: true },
  rando: { label: "Rando", icon: "fa-person-hiking", color: "#059669", section: "nature", active: true },
  parc_naturel: { label: "Parc naturel", icon: "fa-tree", color: "#16a34a", section: "nature", active: true }
};

// Référentiel chronologique rigoureux : Antiquité puis Ve au XXIe siècle
const CHRONOLOGICAL_CENTURIES = [
  "Préhistoire",
  "Antiquité",
  "Ve siècle",
  "VIe siècle",
  "VIIe siècle",
  "VIIIe siècle",
  "IXe siècle",
  "Xe siècle",
  "XIe siècle",
  "XIIe siècle",
  "XIIIe siècle",
  "XIVe siècle",
  "XVe siècle",
  "XVIe siècle",
  "XVIIe siècle",
  "XVIIIe siècle",
  "XIXe siècle",
  "XXe siècle",
  "XXIe siècle"
];
/* =========================================================================
   FICHIER : script.js — PARTIE 3 / 3
   Logique d'affichage, Globe 3D, Leaflet, Modales & Filtres
   ========================================================================= */

let currentMode = 'globe';
let myGlobe = null;
let myLeafletMap = null;
let leafletMarkersGroup = null;
let activeTileLayerKey = 'satellite';
let isAutoRotating = false;
let currentSelectedSpot = null;
let isTransitioningMode = false;
let activeCursorCoords = { lat: 27.2579, lng: 33.8116 };
let isFiltersPanelOpen = true;
let clusterDebounceTimeout = null;
let isCountriesMenuOpen = false;

function isOnlyIslandFilterActive() {
  if (!CATEGORIES.ile || !CATEGORIES.ile.active) return false;
  return Object.keys(CATEGORIES).every(key => key === 'ile' ? CATEGORIES[key].active : !CATEGORIES[key].active);
}

function spotMatchesFilter(spot) {
  if (CATEGORIES.tous && CATEGORIES.tous.active) return true;
  if (isOnlyIslandFilterActive()) return spot.is_island === true;
  if (!spot.category || !CATEGORIES[spot.category]) return true;
  return CATEGORIES[spot.category].active;
}

function getIslandClustersData() {
  const islandMap = new Map();
  travelSpots.forEach(s => {
    if (!s.is_island) return;
    const isl = s.island_name || s.name;
    if (!islandMap.has(isl)) {
      islandMap.set(isl, {
        islandName: isl,
        spots: [],
        flag: s.flag || '📍',
        country: s.country
      });
    }
    islandMap.get(isl).spots.push(s);
  });

  const clusters = [];
  islandMap.forEach((entry, isl) => {
    const count = entry.spots.length;
    const avgLat = entry.spots.reduce((sum, sp) => sum + sp.lat, 0) / count;
    const avgLng = entry.spots.reduce((sum, sp) => sum + sp.lng, 0) / count;
    clusters.push({
      isIslandCluster: true,
      islandName: isl,
      count: count,
      lat: avgLat,
      lng: avgLng,
      spots: entry.spots,
      flag: entry.flag,
      country: entry.country
    });
  });
  return clusters;
}

function openIslandSummaryCard(islandCluster) {
  currentSelectedSpot = islandCluster.spots[0];
  const card = document.getElementById('destination-card');
  const flagEl = document.getElementById('card-flag');
  const regionEl = document.getElementById('card-country-region');
  const img = document.getElementById('card-img');
  const tagsContainer = document.getElementById('card-photo-tags');
  const title = document.getElementById('card-title');
  const location = document.getElementById('card-location');
  const desc = document.getElementById('card-description');
  const visiter = document.getElementById('card-visiter');
  const link = document.getElementById('card-link');
  const gmapsLink = document.getElementById('card-gmaps-link');
  const indexEl = document.getElementById('card-spot-index');

  if (indexEl) indexEl.innerText = `Île : ${islandCluster.islandName}`;
  flagEl.innerText = islandCluster.flag || '🏝️';
  regionEl.innerText = `${islandCluster.country} · Territoire Insulaire`;
  img.src = islandCluster.spots[0].image;

  tagsContainer.innerHTML = `
    <div class="px-2 xl:px-2.5 py-0.5 xl:py-1 rounded-lg text-[9px] xl:text-[11px] font-bold text-white uppercase tracking-wider shadow flex items-center gap-1.5 border border-white/20 bg-cyan-700">
      <i class="fa-solid fa-anchor"></i><span>Île (${islandCluster.islandName})</span>
    </div>
    <div class="px-2 xl:px-2.5 py-0.5 xl:py-1 rounded-lg text-[9px] xl:text-[11px] font-bold text-cyan-200 uppercase tracking-wider shadow flex items-center gap-1.5 border border-cyan-500/40 bg-slate-900">
      <i class="fa-solid fa-map-pin"></i><span>${islandCluster.count} site${islandCluster.count > 1 ? 's' : ''} exploré${islandCluster.count > 1 ? 's' : ''}</span>
    </div>
  `;

  title.innerText = `Île de ${islandCluster.islandName}`;
  location.querySelector('span').innerText = `${islandCluster.lat.toFixed(4)}°N, ${islandCluster.lng.toFixed(4)}°E (Moyenne)`;
  
  desc.innerHTML = `
    Cette terre insulaire abrite <strong>${islandCluster.count} site${islandCluster.count > 1 ? 's majeurs' : ' majeur'}</strong> de vos voyages :
    <ul class="list-disc pl-4 mt-1.5 space-y-1">
      ${islandCluster.spots.map(s => `<li><strong>${s.name}</strong> (${s.century || s.era_label})</li>`).join('')}
    </ul>
  `;

  visiter.innerHTML = `
    <div class="text-slate-300">
      Cliquez ci-dessous pour ouvrir l'un des sites insulaires :
      <div class="flex flex-col gap-1 mt-1.5">
        ${islandCluster.spots.map(s => `
          <button onclick="selectSpotById('${s.id}')" class="text-left px-2 py-1 rounded bg-slate-800 hover:bg-cyan-900/60 border border-slate-700 text-cyan-300 font-semibold text-[10px] flex items-center justify-between">
            <span>${s.name}</span> <i class="fa-solid fa-chevron-right text-[8px]"></i>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  link.href = islandCluster.spots[0].link;
  if (gmapsLink) {
    gmapsLink.href = `https://www.google.com/maps/search/?api=1&query=${islandCluster.lat},${islandCluster.lng}`;
  }

  updateSpotToggleButton();
  card.classList.remove('hidden');

  if (currentMode === 'globe' && myGlobe) {
    myGlobe.pointOfView({ lat: islandCluster.lat, lng: islandCluster.lng, altitude: 0.5 }, 1000);
  } else if (currentMode === 'map' && myLeafletMap) {
    myLeafletMap.flyTo([islandCluster.lat, islandCluster.lng], 9, { duration: 1.0 });
  }
}

function selectSpotById(id) {
  const spot = travelSpots.find(s => s.id === id);
  if (spot) selectSpot(spot);
}

function toggleFiltersPanel() {
  isFiltersPanelOpen = !isFiltersPanelOpen;
  const panel = document.getElementById('filters-panel');
  const btnOpen = document.getElementById('btn-open-filters');
  if (panel && btnOpen) {
    if (isFiltersPanelOpen) {
      panel.style.transform = 'translateX(0)';
      panel.style.opacity = '1';
      panel.style.pointerEvents = 'auto';
      panel.style.width = '';
      panel.style.padding = '0.625rem';
      panel.style.borderWidth = '1px';
      btnOpen.classList.add('hidden');
    } else {
      panel.style.transform = 'translateX(-100%)';
      panel.style.opacity = '0';
      panel.style.pointerEvents = 'none';
      panel.style.width = '0';
      panel.style.padding = '0';
      panel.style.borderWidth = '0';
      btnOpen.classList.remove('hidden');
    }
  }
}

function toggleCountriesMenu(event) {
  if (event) event.stopPropagation();
  isCountriesMenuOpen = !isCountriesMenuOpen;
  const menu = document.getElementById('countries-dropdown');
  const chevron = document.getElementById('icon-countries-chevron');
  if (!menu) return;

  if (isCountriesMenuOpen) {
    renderCountriesDropdown();
    menu.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
    closeQuickSearchResults();
    closeAllPopups();
  } else {
    menu.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }
}

function closeCountriesMenu() {
  isCountriesMenuOpen = false;
  const menu = document.getElementById('countries-dropdown');
  const chevron = document.getElementById('icon-countries-chevron');
  if (menu) menu.classList.add('hidden');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
}

function renderCountriesDropdown() {
  const container = document.getElementById('countries-list-container');
  const badge = document.getElementById('dropdown-country-badge');
  if (!container) return;
  container.innerHTML = '';

  const countryMap = new Map();
  travelSpots.forEach(s => {
    const country = s.country || "Autre";
    if (!countryMap.has(country)) {
      countryMap.set(country, {
        name: country,
        flag: s.flag || "📍",
        count: 0,
        spots: []
      });
    }
    const entry = countryMap.get(country);
    entry.count++;
    entry.spots.push(s);
  });

  const sortedCountries = Array.from(countryMap.values()).sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  if (badge) badge.innerText = `${sortedCountries.length} explorés`;

  sortedCountries.forEach(c => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-1.5 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/20 hover:border-indigo-400/50 cursor-pointer transition select-none group';
    row.innerHTML = `
      <div class="flex items-center gap-2 min-w-0 pr-1">
        <span class="text-base shrink-0 group-hover:scale-110 transition-transform">${c.flag}</span>
        <span class="text-xs font-semibold text-indigo-100 group-hover:text-white truncate">${c.name}</span>
      </div>
      <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-900/70 border border-indigo-500/40 text-indigo-300 shrink-0">
        ${c.count} ${c.count > 1 ? 'sites' : 'site'}
      </span>
    `;
    row.onclick = (e) => {
      e.stopPropagation();
      closeCountriesMenu();
      flyToCountry(c);
    };
    container.appendChild(row);
  });
}

function flyToCountry(countryData) {
  if (!countryData || !countryData.spots || countryData.spots.length === 0) return;
  const spots = countryData.spots;
  const avgLat = spots.reduce((sum, s) => sum + s.lat, 0) / spots.length;
  const avgLng = spots.reduce((sum, s) => sum + s.lng, 0) / spots.length;

  if (currentMode === 'globe') {
    if (myGlobe) myGlobe.pointOfView({ lat: avgLat, lng: avgLng, altitude: 0.9 }, 1200);
  } else {
    if (myLeafletMap) myLeafletMap.flyTo([avgLat, avgLng], 6, { duration: 1.2 });
  }
}

function getHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function togglePopup(popupId, event) {
  if (event) event.stopPropagation();
  const popup = document.getElementById(popupId);
  if (!popup) return;

  const willOpen = popup.classList.contains('hidden');
  closeAllPopups();
  closeCountriesMenu();
  closeQuickSearchResults();

  if (willOpen) {
    if (popupId === 'modal-advanced') {
      initAdvancedFilterOptions();
      runAdvancedFilter();
    } else {
      computeAllStatistics();
    }
    popup.classList.remove('hidden');
  }
}

function closeAllPopups() {
  ['modal-home', 'modal-territories', 'modal-advanced', 'modal-altitude', 'modal-chrono'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}

function switchTerritoryTab(tab) {
  const btnWorld = document.getElementById('tab-btn-world');
  const btnSubdiv = document.getElementById('tab-btn-subdiv');
  const contentWorld = document.getElementById('tab-content-world');
  const contentSubdiv = document.getElementById('tab-content-subdiv');

  if (tab === 'world') {
    btnWorld.className = "flex-1 py-1 rounded-lg text-[10px] font-bold transition bg-blue-600 text-white shadow";
    btnSubdiv.className = "flex-1 py-1 rounded-lg text-[10px] font-bold transition text-slate-400 hover:text-white";
    contentWorld.classList.remove('hidden');
    contentSubdiv.classList.add('hidden');
  } else {
    btnSubdiv.className = "flex-1 py-1 rounded-lg text-[10px] font-bold transition bg-blue-600 text-white shadow";
    btnWorld.className = "flex-1 py-1 rounded-lg text-[10px] font-bold transition text-slate-400 hover:text-white";
    contentSubdiv.classList.remove('hidden');
    contentWorld.classList.add('hidden');
  }
}

function spotMatchesCentury(spot, selectedCentury) {
  if (!selectedCentury || selectedCentury === 'all') return true;
  const spotCent = (spot.century || "").toLowerCase();
  const selCent = selectedCentury.toLowerCase();

  if (selCent === 'préhistoire') {
    return spotCent.includes('préhistoire') || 
           spotCent.includes('néolithique') || 
           spotCent.includes('paléolithique') || 
           spot.era_group === 'prehistoire' || 
           spot.category === 'megalithe';
  }

  if (selCent === 'antiquité') {
    return spotCent.includes('antiquité') || spot.era_group === 'pharaonique' || spot.era_group === 'ptolemaique';
  }

  const cleanSel = selCent.replace('siècle', '').trim();
  const isNegative = spotCent.includes('av. j.-c.');
  if (isNegative) return false;

  const regex = new RegExp(`(^|[^a-z0-9])${cleanSel}([^a-z0-9]|$)`, 'i');
  return regex.test(spotCent);
}

function initAdvancedFilterOptions() {
  const selectCountry = document.getElementById('adv-filter-country');
  const selectCategory = document.getElementById('adv-filter-category');
  const selectCentury = document.getElementById('adv-filter-century');
  const selectIsland = document.getElementById('adv-filter-island');

  if (!selectCountry || !selectCategory || !selectCentury || !selectIsland) return;
  if (selectCentury.children.length > 1) return;

  const countries = Array.from(new Set(travelSpots.map(s => s.country))).sort((a,b) => a.localeCompare(b,'fr'));
  countries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.innerText = c;
    selectCountry.appendChild(opt);
  });

  Object.keys(CATEGORIES).forEach(k => {
    const opt = document.createElement('option');
    opt.value = k;
    opt.innerText = CATEGORIES[k].label;
    selectCategory.appendChild(opt);
  });

  CHRONOLOGICAL_CENTURIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.innerText = c;
    selectCentury.appendChild(opt);
  });

  const uniqueIslands = Array.from(new Set(travelSpots.filter(s => s.is_island).map(s => s.island_name))).sort((a,b) => a.localeCompare(b,'fr'));
  uniqueIslands.forEach(isl => {
    const opt = document.createElement('option');
    opt.value = isl;
    const count = travelSpots.filter(s => s.island_name === isl).length;
    opt.innerText = `🏝️ ${isl} (${count} site${count > 1 ? 's' : ''})`;
    selectIsland.appendChild(opt);
  });
}

function runAdvancedFilter() {
  const countryVal = document.getElementById('adv-filter-country')?.value || 'all';
  const catVal = document.getElementById('adv-filter-category')?.value || 'all';
  const centuryVal = document.getElementById('adv-filter-century')?.value || 'all';
  const islandVal = document.getElementById('adv-filter-island')?.value || 'all';
  const unescoOnly = document.getElementById('adv-filter-unesco')?.checked || false;

  const filtered = travelSpots.filter(s => {
    if (countryVal !== 'all' && s.country !== countryVal) return false;
    
    if (catVal !== 'all') {
      if (catVal === 'ile') {
        if (!s.is_island && (!s.counts || !s.counts.ile)) return false;
      } else {
        const hasCount = s.counts && typeof s.counts[catVal] === 'number' && s.counts[catVal] > 0;
        const isDirectCat = s.category === catVal;
        if (!hasCount && !isDirectCat) return false;
      }
    }

    if (islandVal !== 'all') {
      if (s.island_name !== islandVal) return false;
    }

    if (!spotMatchesCentury(s, centuryVal)) return false;

    if (unescoOnly) {
      const isUnesco = (s.counts && s.counts.unesco) || s.category === 'unesco';
      if (!isUnesco) return false;
    }

    return true;
  });

  const countEl = document.getElementById('adv-results-count');
  const listEl = document.getElementById('adv-results-list');
  if (countEl) countEl.innerText = filtered.length;
  if (!listEl) return;

  listEl.innerHTML = '';
  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="p-3 text-center text-[10px] text-slate-400 bg-slate-900/50 rounded-xl">
        Aucun site ne correspond à cette combinaison de critères.
      </div>
    `;
    return;
  }

  filtered.forEach(spot => {
    const item = document.createElement('div');
    item.className = 'flex items-center justify-between p-2 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition select-none group';
    const islandBadge = spot.is_island ? `<span class="px-1 py-0.2 rounded text-[8px] bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-bold ml-1">🏝️ ${spot.island_name}</span>` : '';
    item.innerHTML = `
      <div class="flex items-center gap-2 min-w-0 pr-1">
        <span class="text-sm shrink-0 group-hover:scale-110 transition-transform">${spot.flag || '📍'}</span>
        <div class="min-w-0">
          <div class="text-[11px] font-bold text-white truncate flex items-center">${spot.name} ${islandBadge}</div>
          <div class="text-[9px] text-cyan-400 truncate">${spot.country} · ${spot.century || spot.era_group || ''}</div>
        </div>
      </div>
      <i class="fa-solid fa-chevron-right text-[10px] text-slate-500 group-hover:text-cyan-300 transition-colors shrink-0"></i>
    `;
    item.onclick = () => {
      closeAllPopups();
      selectSpot(spot);
    };
    listEl.appendChild(item);
  });
}

function resetAdvancedFilters() {
  const c = document.getElementById('adv-filter-country');
  const k = document.getElementById('adv-filter-category');
  const t = document.getElementById('adv-filter-century');
  const isl = document.getElementById('adv-filter-island');
  const u = document.getElementById('adv-filter-unesco');
  if (c) c.value = 'all';
  if (k) k.value = 'all';
  if (t) t.value = 'all';
  if (isl) isl.value = 'all';
  if (u) u.checked = false;
  runAdvancedFilter();
}

function computeAllStatistics() {
  if (!travelSpots || travelSpots.length === 0) return;

  let farthestFromHome = travelSpots[0];
  let maxDistFromHome = 0;
  let totalDistFromHome = 0;

  let northSpot = travelSpots[0];
  let southSpot = travelSpots[0];
  let westSpot = travelSpots[0];
  let eastSpot = travelSpots[0];

  let zenithSpot = travelSpots[0];
  let nadirSpot = travelSpots[0];
  let islandCount = 0;

  let unescoCount = 0;
  let chronoMap = {
    pharaonique: { label: "Antiquité Pharaonique", span: "-1500 à -1200 av. J.-C.", icon: "🏺", count: 0, color: "#f59e0b" },
    ptolemaique: { label: "Période Ptolémaïque & Romaine", span: "-300 à +300", icon: "🏛️", count: 0, color: "#38bdf8" },
    medievale: { label: "Époque Médiévale & Génoise", span: "XVIe - XVIIIe s.", icon: "🏰", count: 0, color: "#818cf8" },
    contemporain: { label: "XIXe - XXIe s. & Impressionnisme", span: "1883 à nos jours", icon: "🎨", count: 0, color: "#a855f7" },
    nature: { label: "Temps Géologique & Ère Glaciaire", span: "Temps long", icon: "🌿", count: 0, color: "#10b981" }
  };

  const visitedCountries = new Set();
  const continentCount = { "Europe": 0, "Afrique": 0, "Asie": 0, "Amériques": 0, "Océanie": 0 };
  const subdivData = {};

  travelSpots.forEach(s => {
    const d = getHaversineDistanceKm(HOME_BASE.lat, HOME_BASE.lng, s.lat, s.lng);
    totalDistFromHome += d;
    if (d > maxDistFromHome) {
      maxDistFromHome = d;
      farthestFromHome = s;
    }

    if (s.lat > northSpot.lat) northSpot = s;
    if (s.lat < southSpot.lat) southSpot = s;
    if (s.lng < westSpot.lng) westSpot = s;
    if (s.lng > eastSpot.lng) eastSpot = s;

    const alt = typeof s.altitude === 'number' ? s.altitude : 50;
    if (alt > (typeof zenithSpot.altitude === 'number' ? zenithSpot.altitude : 50)) zenithSpot = s;
    if (alt < (typeof nadirSpot.altitude === 'number' ? nadirSpot.altitude : 50)) nadirSpot = s;

    if (s.is_island) islandCount++;
    if ((s.counts && s.counts.unesco) || s.category === 'unesco') unescoCount++;

    const era = s.era_group || "contemporain";
    if (chronoMap[era]) chronoMap[era].count++;

    visitedCountries.add(s.country);
    if (s.continent && continentCount[s.continent] !== undefined) {
      continentCount[s.continent]++;
    }

    if (!subdivData[s.country]) {
      subdivData[s.country] = {
        flag: s.flag || '📍',
        subdivs: new Set(),
        regions: new Set(),
        spots: []
      };
    }
    if (s.subdiv) subdivData[s.country].subdivs.add(s.subdiv);
    if (s.region_admin) subdivData[s.country].regions.add(s.region_admin);
    subdivData[s.country].spots.push(s);
  });

  const homeFarthestDistEl = document.getElementById('stat-home-farthest-dist');
  const homeFarthestNameEl = document.getElementById('stat-home-farthest-name');
  if (homeFarthestDistEl) homeFarthestDistEl.innerText = `${maxDistFromHome.toLocaleString('fr-FR')} km`;
  if (homeFarthestNameEl) {
    homeFarthestNameEl.innerHTML = `${farthestFromHome.flag || '📍'} <span class="hover:text-amber-300 cursor-pointer underline">${farthestFromHome.name}</span>`;
    homeFarthestNameEl.onclick = () => { closeAllPopups(); selectSpot(farthestFromHome); };
  }

  const setCardinal = (elementId, spot, suffix) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.innerText = `${spot.name} (${suffix})`;
      el.title = `${spot.name} (${spot.country}) - Cliquez pour y aller`;
      el.onclick = () => { closeAllPopups(); selectSpot(spot); };
      el.classList.add('cursor-pointer', 'hover:underline');
    }
  };
  setCardinal('stat-cardinal-north', northSpot, `${northSpot.lat.toFixed(1)}°N`);
  setCardinal('stat-cardinal-south', southSpot, `${southSpot.lat.toFixed(1)}°N`);
  setCardinal('stat-cardinal-west', westSpot, `${Math.abs(westSpot.lng).toFixed(1)}°${westSpot.lng < 0 ? 'O' : 'E'}`);
  setCardinal('stat-cardinal-east', eastSpot, `${eastSpot.lng.toFixed(1)}°E`);

  let maxDistPair = 0;
  let bestPair = { a: travelSpots[0], b: travelSpots[0] };
  for (let i = 0; i < travelSpots.length; i++) {
    for (let j = i + 1; j < travelSpots.length; j++) {
      const d = getHaversineDistanceKm(travelSpots[i].lat, travelSpots[i].lng, travelSpots[j].lat, travelSpots[j].lng);
      if (d > maxDistPair) {
        maxDistPair = d;
        bestPair = { a: travelSpots[i], b: travelSpots[j] };
      }
    }
  }
  const maxDistEl = document.getElementById('stat-max-dist');
  const maxPairEl = document.getElementById('stat-max-pair');
  if (maxDistEl) maxDistEl.innerText = `${maxDistPair.toLocaleString('fr-FR')} km`;
  if (maxPairEl) maxPairEl.innerText = `${bestPair.a.name} ⇄ ${bestPair.b.name}`;

  const onuCount = visitedCountries.size;
  const onuPct = ((onuCount / TOTAL_UN_COUNTRIES) * 100).toFixed(2);
  const onuFractEl = document.getElementById('stat-onu-fraction');
  const onuPctEl = document.getElementById('stat-onu-pct');
  const onuBarEl = document.getElementById('stat-onu-bar');
  if (onuFractEl) onuFractEl.innerText = `${onuCount} / ${TOTAL_UN_COUNTRIES} pays`;
  if (onuPctEl) onuPctEl.innerText = `${onuPct.replace('.', ',')}%`;
  if (onuBarEl) onuBarEl.style.width = `${Math.max(1, onuPct)}%`;

  const contContainer = document.getElementById('stat-continents-container');
  if (contContainer) {
    contContainer.innerHTML = '';
    const continentIcons = { "Europe": "🇪🇺", "Afrique": "🌍", "Asie": "🌏", "Amériques": "🌎", "Océanie": "🌊" };
    Object.keys(CONTINENT_TOTALS).forEach(cont => {
      const totalCountries = CONTINENT_TOTALS[cont];
      const visitedInCont = new Set(travelSpots.filter(s => s.continent === cont).map(s => s.country)).size;
      const pct = Math.round((visitedInCont / totalCountries) * 100);

      const row = document.createElement('div');
      row.className = 'space-y-0.5';
      row.innerHTML = `
        <div class="flex justify-between items-center text-[10px]">
          <span class="text-slate-200 font-medium">${continentIcons[cont] || '🌐'} ${cont}</span>
          <span class="font-mono text-cyan-300 font-bold">${visitedInCont} / ${totalCountries} <span class="text-slate-500 font-normal text-[9px]">(${pct}%)</span></span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full" style="width: ${Math.max(1, pct)}%;"></div>
        </div>
      `;
      contContainer.appendChild(row);
    });
  }

  const subdivList = document.getElementById('stat-subdivisions-list');
  if (subdivList) {
    subdivList.innerHTML = '';
    Object.keys(subdivData).forEach(countryName => {
      const data = subdivData[countryName];
      const ref = COUNTRY_SUBDIV_TOTALS[countryName] || { type: "Subdivisions", total: 20 };
      const subdivCount = data.subdivs.size;
      const subdivPct = Math.round((subdivCount / ref.total) * 100);

      const card = document.createElement('div');
      card.className = 'p-2 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5';
      
      let regionsHtml = '';
      if (ref.regionTotal && data.regions.size > 0) {
        const regPct = Math.round((data.regions.size / ref.regionTotal) * 100);
        regionsHtml = `
          <div class="flex justify-between items-center text-[9px] text-slate-400 mt-1">
            <span>Régions : ${Array.from(data.regions).join(', ')}</span>
            <span class="font-mono font-bold text-slate-300">${data.regions.size} / ${ref.regionTotal} (${regPct}%)</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="flex justify-between items-center text-[11px] font-bold">
          <span class="text-white flex items-center gap-1.5">${data.flag} ${countryName}</span>
          <span class="font-mono text-cyan-300">${subdivCount} / ${ref.total} ${ref.type.toLowerCase()}</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full" style="width: ${Math.max(2, subdivPct)}%;"></div>
        </div>
        <div class="text-[9px] text-slate-400">
          <span class="text-slate-300 font-medium">Explorés :</span> ${Array.from(data.subdivs).join(', ')}
        </div>
        ${regionsHtml}
      `;
      subdivList.appendChild(card);
    });
  }

  const zenithAlt = typeof zenithSpot.altitude === 'number' ? zenithSpot.altitude : 1743;
  const nadirAlt = typeof nadirSpot.altitude === 'number' ? nadirSpot.altitude : -5;
  const amplitude = zenithAlt - nadirAlt;

  const altMaxVal = document.getElementById('stat-alt-max-val');
  const altMaxName = document.getElementById('stat-alt-max-name');
  const altMinVal = document.getElementById('stat-alt-min-val');
  const altMinName = document.getElementById('stat-alt-min-name');
  const altAmp = document.getElementById('stat-alt-amplitude');

  if (altMaxVal) altMaxVal.innerText = `${zenithAlt > 0 ? '+' : ''}${zenithAlt} m`;
  if (altMaxName) altMaxName.innerText = zenithSpot.name;
  if (altMinVal) altMinVal.innerText = `${nadirAlt > 0 ? '+' : ''}${nadirAlt} m`;
  if (altMinName) altMinName.innerText = nadirSpot.name;
  if (altAmp) altAmp.innerText = `${amplitude} m de dénivelé`;

  const islandPct = Math.round((islandCount / travelSpots.length) * 100);
  const mainlandPct = 100 - islandPct;
  const islPctEl = document.getElementById('stat-islands-pct');
  const mainPctEl = document.getElementById('stat-mainland-pct');
  const barIsl = document.getElementById('stat-bar-islands');
  const barMain = document.getElementById('stat-bar-mainland');
  const noteIsl = document.getElementById('stat-islands-note');

  const uniqueIslandsCount = new Set(travelSpots.filter(s => s.is_island).map(s => s.island_name || s.name)).size;

  if (islPctEl) islPctEl.innerText = `${islandPct}%`;
  if (mainPctEl) mainPctEl.innerText = `${mainlandPct}%`;
  if (barIsl) barIsl.style.width = `${islandPct}%`;
  if (barMain) barMain.style.width = `${mainlandPct}%`;
  if (noteIsl) noteIsl.innerText = `« ${uniqueIslandsCount} îles explorées : vous passez ${islandPct}% de vos explorations les pieds entourés d'eau ! »`;

  const unescoCountVal = document.getElementById('stat-unesco-count-val');
  const unescoPctVal = document.getElementById('stat-unesco-pct-val');
  if (unescoCountVal) unescoCountVal.innerText = unescoCount;
  if (unescoPctVal) unescoPctVal.innerText = `${Math.round((unescoCount / travelSpots.length) * 100)}%`;

  const chronoContainer = document.getElementById('stat-chrono-breakdown');
  if (chronoContainer) {
    chronoContainer.innerHTML = '';
    Object.keys(chronoMap).forEach(k => {
      const item = chronoMap[k];
      const pct = Math.round((item.count / travelSpots.length) * 100);

      const row = document.createElement('div');
      row.className = 'p-1.5 rounded-lg bg-slate-950/70 border border-slate-800/80 space-y-1';
      row.innerHTML = `
        <div class="flex justify-between items-center text-[10px]">
          <span class="font-medium text-slate-200">${item.icon} ${item.label}</span>
          <span class="font-mono text-indigo-300 font-bold">${item.count} <span class="text-slate-500 font-normal">(${pct}%)</span></span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
          <div class="h-full rounded-full transition-all duration-300" style="background-color: ${item.color}; width: ${Math.max(2, pct)}%;"></div>
        </div>
        <div class="text-[8px] text-slate-400 italic">${item.span}</div>
      `;
      chronoContainer.appendChild(row);
    });
  }
}

function navigateSpot(direction) {
  if (!travelSpots || travelSpots.length === 0) return;
  const currentIndex = currentSelectedSpot ? travelSpots.findIndex(s => s.id === currentSelectedSpot.id) : 0;
  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = travelSpots.length - 1;
  if (nextIndex >= travelSpots.length) nextIndex = 0;
  selectSpot(travelSpots[nextIndex]);
}

function copyCurrentGPS() {
  if (!currentSelectedSpot) return;
  const text = `${currentSelectedSpot.lat.toFixed(4)}, ${currentSelectedSpot.lng.toFixed(4)}`;
  navigator.clipboard.writeText(text).catch(() => {
    document.execCommand('copy');
  });
  const feedback = document.getElementById('copy-gps-feedback');
  if (feedback) {
    feedback.innerText = "Copié !";
    setTimeout(() => { feedback.innerText = "GPS"; }, 1500);
  }
}

function handleQuickSearch(query) {
  const q = (query || "").trim().toLowerCase();
  const resultsContainer = document.getElementById('quick-search-results');
  const clearBtn = document.getElementById('quick-search-clear');
  if (!resultsContainer) return;

  if (clearBtn) {
    if (q.length > 0) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }

  if (q.length === 0) {
    resultsContainer.innerHTML = '';
    resultsContainer.classList.add('hidden');
    return;
  }

  const matches = travelSpots.filter(s => {
    return s.name.toLowerCase().includes(q) ||
           (s.region && s.region.toLowerCase().includes(q)) ||
           s.country.toLowerCase().includes(q) ||
           (s.description && s.description.toLowerCase().includes(q));
  }).slice(0, 7);

  resultsContainer.innerHTML = '';
  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="p-3 text-center text-xs text-slate-400">
        Aucun lieu trouvé pour « <span class="text-white">${query}</span> »
      </div>
    `;
  } else {
    matches.forEach(spot => {
      const item = document.createElement('div');
      item.className = 'flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-800/90 cursor-pointer transition border border-transparent hover:border-cyan-500/30';
      item.innerHTML = `
        <span class="text-sm shrink-0">${spot.flag || '📍'}</span>
        <div class="min-w-0 flex-1">
          <div class="text-xs font-semibold text-white truncate">${spot.name}</div>
          <div class="text-[9px] text-cyan-400 truncate">${spot.country} · ${spot.region || ''}</div>
        </div>
        <i class="fa-solid fa-arrow-right text-[10px] text-slate-500 mr-1"></i>
      `;
      item.onclick = () => {
        selectSpot(spot);
        closeQuickSearchResults();
      };
      resultsContainer.appendChild(item);
    });
  }
  resultsContainer.classList.remove('hidden');
  closeCountriesMenu();
  closeAllPopups();
}

function clearQuickSearch() {
  const input = document.getElementById('quick-search-input');
  if (input) input.value = '';
  handleQuickSearch('');
}

function closeQuickSearchResults() {
  const resultsContainer = document.getElementById('quick-search-results');
  if (resultsContainer) resultsContainer.classList.add('hidden');
}

function pickRandomDestination() {
  if (!travelSpots || travelSpots.length === 0) return;
  const randomIndex = Math.floor(Math.random() * travelSpots.length);
  selectSpot(travelSpots[randomIndex]);
}

function toggleFullScreen() {
  const icon = document.getElementById('fullscreen-icon');
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      if (icon) icon.className = "fa-solid fa-compress text-xs";
    }).catch(err => console.warn(err));
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        if (icon) icon.className = "fa-solid fa-expand text-xs";
      }).catch(err => console.warn(err));
    }
  }
}

document.addEventListener('click', (e) => {
  const countryMenu = document.getElementById('countries-dropdown');
  const countryBtn = document.getElementById('btn-dropdown-countries');
  if (countryMenu && !countryMenu.contains(e.target) && !countryBtn.contains(e.target)) {
    closeCountriesMenu();
  }

  ['modal-home', 'modal-territories', 'modal-advanced', 'modal-altitude', 'modal-chrono'].forEach(id => {
    const modal = document.getElementById(id);
    const trigger = document.getElementById('btn-popup-' + id.replace('modal-', ''));
    if (modal && !modal.contains(e.target) && trigger && !trigger.contains(e.target)) {
      modal.classList.add('hidden');
    }
  });

  const searchInput = document.getElementById('quick-search-input');
  const searchResults = document.getElementById('quick-search-results');
  if (searchResults && !searchResults.contains(e.target) && searchInput !== e.target) {
    closeQuickSearchResults();
  }
});

function normalizeLongitude(lng) {
  return ((((lng + 180) % 360) + 360) % 360) - 180;
}

function getExactGlobeCenterCoords() {
  if (!myGlobe) return { lat: 27.2579, lng: 33.8116 };
  if (currentSelectedSpot) {
    return { lat: currentSelectedSpot.lat, lng: currentSelectedSpot.lng };
  }
  const container = document.getElementById('globe-container');
  const width = container ? container.clientWidth : window.innerWidth;
  const height = container ? container.clientHeight : window.innerHeight;
  if (typeof myGlobe.toGlobeCoords === 'function') {
    const centerCoords = myGlobe.toGlobeCoords(width / 2, height / 2);
    if (centerCoords && !isNaN(centerCoords.lat) && !isNaN(centerCoords.lng)) {
      return { lat: Math.max(-85, Math.min(85, centerCoords.lat)), lng: normalizeLongitude(centerCoords.lng) };
    }
  }
  const pov = myGlobe.pointOfView();
  return { lat: Math.max(-85, Math.min(85, pov.lat || 0)), lng: normalizeLongitude(pov.lng || 0) };
}

const TILE_LAYERS = {
  satellite: {
    name: "Satellite Esri HD",
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri, Maxar'
  },
  topo: {
    name: "Relief & Rando Topo",
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenTopoMap'
  }
};
let currentTileLayerInstance = null;

function checkContinuousGlobeZoom() {
  if (currentMode !== 'globe' || !myGlobe || isTransitioningMode) return;
  const pov = myGlobe.pointOfView();
  if (pov && typeof pov.altitude === 'number' && pov.altitude <= 0.22) {
    isTransitioningMode = true;
    const target = activeCursorCoords || getExactGlobeCenterCoords();
    setViewingMode('map', target, 9);
    setTimeout(() => { isTransitioningMode = false; }, 1200);
  }
}

function initGlobe() {
  const container = document.getElementById('globe-container');
  if (!container || typeof Globe !== 'function') return;

  myGlobe = Globe()(container)
    .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
    .backgroundColor('rgba(2, 6, 23, 1)')
    .showAtmosphere(false)
    .htmlElementsData([])
    .htmlLat(d => d.lat)
    .htmlLng(d => d.lng)
    .htmlAltitude(0.015)
    .htmlElement(d => {
      const anchor = document.createElement('div');
      anchor.className = 'globe-marker-anchor group';

      if (d.isIslandCluster) {
        anchor.innerHTML = `
          <div class="relative flex items-center justify-center pointer-events-auto">
            <div class="px-2.5 py-1 rounded-full flex items-center gap-1.5 text-white font-bold text-xs bg-cyan-950/95 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] cursor-pointer hover:scale-120 transition-transform duration-150">
              <span class="text-xs">🏝️</span>
              <span class="font-mono text-xs font-black tracking-tight text-cyan-200">${d.islandName}</span>
              <span class="px-1 py-0.2 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-black">${d.count}</span>
            </div>
            <div class="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-lg bg-slate-950/95 border border-cyan-400/50 text-[10px] font-bold text-cyan-300 shadow-xl z-50">
              Île (${d.islandName}) : ${d.count} site${d.count > 1 ? 's' : ''}
            </div>
          </div>
        `;
        anchor.onclick = (e) => {
          e.stopPropagation();
          openIslandSummaryCard(d);
        };
        return anchor;
      }

      if (d.isCluster) {
        const count = d.count;
        anchor.innerHTML = `
          <div class="relative flex items-center justify-center pointer-events-auto">
            <div class="px-3 py-1 rounded-full flex items-center gap-1.5 text-white font-bold text-xs bg-slate-900/95 border-2 border-cyan-400 shadow-xl cursor-pointer hover:scale-115 hover:border-cyan-300 transition-transform duration-150">
              <span class="text-cyan-400 text-[10px]">📍</span>
              <span class="font-mono text-xs font-black tracking-tight text-white">${count}</span>
            </div>
            <div class="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-lg bg-slate-950/95 border border-cyan-400/50 text-[10px] font-bold text-cyan-300 shadow-xl z-50">
              ${count} sites regroupés
            </div>
          </div>
        `;
        anchor.onclick = (e) => {
          e.stopPropagation();
          myGlobe.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.35 }, 900);
        };
        return anchor;
      }

      const spot = d.spot;
      const activeCatKey = getFirstActiveCategoryForSpot(spot);
      const cat = CATEGORIES[activeCatKey] || CATEGORIES[spot.category] || { color: '#06b6d4', icon: 'fa-location-dot' };

      anchor.innerHTML = `
        <div class="relative flex items-center justify-center pointer-events-auto">
          <div class="relative w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] border-2 border-white/90 shadow-lg cursor-pointer hover:scale-120 transition-transform duration-150" style="background-color: ${cat.color};">
            <i class="fa-solid ${cat.icon}"></i>
          </div>
          <div class="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-1 rounded-lg bg-slate-950/95 border border-cyan-400/60 text-[10px] font-bold text-white shadow-2xl flex items-center gap-1.5 z-50">
            <span>${spot.flag || '📍'}</span>
            <span>${spot.name}</span>
          </div>
        </div>
      `;
      anchor.onclick = (e) => {
        e.stopPropagation();
        selectSpot(spot);
      };
      return anchor;
    });

  myGlobe.pointOfView({ lat: 27.2579, lng: 33.8116, altitude: 2.1 }, 0);

  try {
    if (typeof myGlobe.renderer === 'function') {
      myGlobe.renderer().setPixelRatio(1);
    }
  } catch (e) {
    console.warn("Ajustement du pixel ratio ignoré :", e);
  }

  const controls = myGlobe.controls();
  controls.autoRotate = false;
  controls.autoRotateSpeed = 0.5;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 101;
  controls.maxDistance = 1200;
  controls.enabled = true;

  controls.addEventListener('start', () => {
    if (isAutoRotating) {
      controls.autoRotate = false;
      isAutoRotating = false;
      updateAutoRotateIcon();
    }
  });

  container.addEventListener('pointermove', (e) => {
    const rect = container.getBoundingClientRect();
    if (typeof myGlobe.toGlobeCoords === 'function') {
      const coords = myGlobe.toGlobeCoords(e.clientX - rect.left, e.clientY - rect.top);
      if (coords && !isNaN(coords.lat)) {
        activeCursorCoords = { lat: coords.lat, lng: normalizeLongitude(coords.lng) };
      }
    }
  });

  controls.addEventListener('change', () => {
    checkContinuousGlobeZoom();
    if (clusterDebounceTimeout) clearTimeout(clusterDebounceTimeout);
    clusterDebounceTimeout = setTimeout(updateGlobeDisplay, 90);
  });

  updateGlobeDisplay();
}

function initLeafletMap(initialCenter = [27.2579, 33.8116], initialZoom = 10) {
  const container = document.getElementById('leaflet-container');
  if (!container || myLeafletMap) return;

  myLeafletMap = L.map('leaflet-container', {
    center: initialCenter,
    zoom: initialZoom,
    zoomControl: false,
    maxZoom: 18,
    minZoom: 3
  });

  currentTileLayerInstance = L.tileLayer(TILE_LAYERS.satellite.url, {
    attribution: TILE_LAYERS.satellite.attribution,
    maxZoom: 18
  }).addTo(myLeafletMap);

  if (typeof L.markerClusterGroup === 'function') {
    leafletMarkersGroup = L.markerClusterGroup({
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      maxClusterRadius: 80,
      disableClusteringAtZoom: 18,
      animate: true,
      animateAddingMarkers: false,
      chunkedLoading: true,
      iconCreateFunction: function(cluster) {
        return L.divIcon({
          html: `<span>${cluster.getChildCount()}</span>`,
          className: 'custom-cluster-icon',
          iconSize: L.point(32, 32)
        });
      }
    });

    leafletMarkersGroup.on('clusterclick', function (a) {
      const currentZoom = myLeafletMap.getZoom();
      const targetZoom = Math.min(myLeafletMap.getMaxZoom(), currentZoom + 2);
      myLeafletMap.setView(a.latlng, targetZoom, { animate: true });
    });
  } else {
    leafletMarkersGroup = L.featureGroup();
  }

  myLeafletMap.addLayer(leafletMarkersGroup);

  myLeafletMap.on('zoomend', () => {
    if (currentMode === 'map' && myLeafletMap.getZoom() <= 5 && !isTransitioningMode) {
      isTransitioningMode = true;
      const center = myLeafletMap.getCenter();
      setViewingMode('globe', { lat: center.lat, lng: center.lng, altitude: 2.1 });
    }
  });

  updateLeafletDisplay();
}

function updateLeafletDisplay() {
  if (!myLeafletMap || !leafletMarkersGroup) return;
  leafletMarkersGroup.clearLayers();
  const markersToAdd = [];

  if (isOnlyIslandFilterActive()) {
    const islandClusters = getIslandClustersData();
    islandClusters.forEach(cluster => {
      const islandIcon = L.divIcon({
        className: 'custom-island-pin',
        html: `
          <div class="px-2 py-1 rounded-full flex items-center gap-1 bg-cyan-950 border-2 border-cyan-400 text-white shadow-xl cursor-pointer hover:scale-115 transition">
            <span class="text-[11px]">🏝️</span>
            <span class="font-bold text-[10px] text-cyan-200">${cluster.islandName}</span>
            <span class="px-1 py-0.2 rounded-full bg-cyan-500 text-slate-950 font-black text-[9px]">${cluster.count}</span>
          </div>
        `,
        iconSize: [95, 26],
        iconAnchor: [47, 13]
      });

      const marker = L.marker([cluster.lat, cluster.lng], { icon: islandIcon });
      marker.bindTooltip(`<span>🏝️ ${cluster.islandName} (${cluster.count} site${cluster.count > 1 ? 's' : ''})</span>`, {
        direction: 'top',
        offset: [0, -12],
        className: 'custom-leaflet-tooltip'
      });
      marker.on('click', () => openIslandSummaryCard(cluster));
      leafletMarkersGroup.addLayer(marker);
    });
    return;
  }

  getFilteredSpots().forEach(spot => {
    const activeCatKey = getFirstActiveCategoryForSpot(spot);
    const cat = CATEGORIES[activeCatKey] || CATEGORIES[spot.category] || { color: '#06b6d4', icon: 'fa-location-dot' };
    
    const customIcon = L.divIcon({
      className: 'custom-pin',
      html: `<div style="background-color: ${cat.color}; box-shadow: 0 0 8px ${cat.color};" class="w-6 h-6 rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg cursor-pointer transform hover:scale-125 transition"><i class="fa-solid ${cat.icon} text-[10px]"></i></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    const marker = L.marker([spot.lat, spot.lng], { icon: customIcon });

    marker.bindTooltip(`<span>${spot.flag || '📍'}</span> <span class="font-bold">${spot.name}</span>`, {
      direction: 'top',
      offset: [0, -12],
      className: 'custom-leaflet-tooltip'
    });

    marker.on('click', () => selectSpot(spot));
    markersToAdd.push(marker);
  });

  if (typeof leafletMarkersGroup.addLayers === 'function') {
    leafletMarkersGroup.addLayers(markersToAdd);
  } else {
    markersToAdd.forEach(m => leafletMarkersGroup.addLayer(m));
  }
}

function setViewingMode(mode, targetCoords = null, targetZoom = null) {
  currentMode = mode;
  isTransitioningMode = false;

  const globeView = document.getElementById('globe-view');
  const mapView = document.getElementById('map-view');
  const btnGlobe = document.getElementById('btn-mode-globe');
  const btnMap = document.getElementById('btn-mode-map');
  const headerIcon = document.getElementById('header-mode-icon');
  const subtitle = document.getElementById('header-subtitle');
  const btnTiles = document.getElementById('btn-toggle-tiles');
  const btnRotate = document.getElementById('btn-toggle-rotate');

  if (mode === 'map') {
    let lat = targetCoords ? targetCoords.lat : (activeCursorCoords ? activeCursorCoords.lat : 27.2579);
    let lng = targetCoords ? normalizeLongitude(targetCoords.lng) : (activeCursorCoords ? activeCursorCoords.lng : 33.8116);
    let zoom = targetZoom || 9;

    globeView.style.opacity = '0';
    globeView.style.pointerEvents = 'none';
    mapView.style.opacity = '1';
    mapView.style.pointerEvents = 'auto';

    btnMap.classList.add('bg-cyan-500', 'text-white', 'shadow');
    btnMap.classList.remove('text-slate-300');
    btnGlobe.classList.remove('bg-cyan-500', 'text-white', 'shadow');
    btnGlobe.classList.add('text-slate-300');

    headerIcon.className = "fa-solid fa-map-location-dot text-xs text-cyan-300";
    subtitle.innerText = "Zoom Haute Précision (2D)";
    btnTiles.classList.remove('hidden');
    btnRotate.classList.add('hidden');

    if (!myLeafletMap) {
      initLeafletMap([lat, lng], zoom);
    } else {
      myLeafletMap.setView([lat, lng], zoom, { animate: false });
      setTimeout(() => {
        myLeafletMap.invalidateSize();
        updateLeafletDisplay();
      }, 60);
    }
  } else {
    let lat = targetCoords ? targetCoords.lat : 27.2579;
    let lng = targetCoords ? normalizeLongitude(targetCoords.lng) : 33.8116;
    let altitude = targetCoords && targetCoords.altitude ? targetCoords.altitude : 2.1;

    mapView.style.opacity = '0';
    mapView.style.pointerEvents = 'none';
    globeView.style.opacity = '1';
    globeView.style.pointerEvents = 'auto';

    btnGlobe.classList.add('bg-cyan-500', 'text-white', 'shadow');
    btnGlobe.classList.remove('text-slate-300');
    btnMap.classList.remove('bg-cyan-500', 'text-white', 'shadow');
    btnMap.classList.add('text-slate-300');

    headerIcon.className = "fa-solid fa-earth-africa text-xs";
    subtitle.innerText = "Vue planétaire 3D";
    btnTiles.classList.add('hidden');
    btnRotate.classList.remove('hidden');

    if (myGlobe) {
      isTransitioningMode = true;
      const controls = myGlobe.controls();
      if (controls) controls.enabled = true;
      setTimeout(onWindowResize, 100);
      myGlobe.pointOfView({ lat: lat, lng: lng, altitude: altitude }, 600);
      setTimeout(() => {
        isTransitioningMode = false;
      }, 1000);
    }
  }
  updateSpotToggleButton();
}

function triggerManualMapSwitch() {
  const target = getExactGlobeCenterCoords();
  setViewingMode('map', target, 9);
}

function selectSpot(spot) {
  currentSelectedSpot = spot;
  const card = document.getElementById('destination-card');
  const flagEl = document.getElementById('card-flag');
  const regionEl = document.getElementById('card-country-region');
  const img = document.getElementById('card-img');
  const tagsContainer = document.getElementById('card-photo-tags');
  const title = document.getElementById('card-title');
  const location = document.getElementById('card-location');
  const desc = document.getElementById('card-description');
  const visiter = document.getElementById('card-visiter');
  const link = document.getElementById('card-link');
  const gmapsLink = document.getElementById('card-gmaps-link');
  const indexEl = document.getElementById('card-spot-index');

  const spotIdx = travelSpots.findIndex(s => s.id === spot.id);
  if (indexEl && spotIdx !== -1) {
    indexEl.innerText = `${spotIdx + 1} / ${travelSpots.length}`;
  }

  flagEl.innerText = spot.flag || '📍';
  regionEl.innerText = `${spot.country} · ${spot.region || 'Région non spécifiée'}`;
  img.src = spot.image;
  tagsContainer.innerHTML = '';

  let spotCategories = [];
  if (spot.counts) {
    Object.keys(spot.counts).forEach(k => {
      if (CATEGORIES[k]) spotCategories.push(k);
    });
  }
  if (spotCategories.length === 0) {
    if (spot.category) {
      spotCategories.push(spot.category);
    } else {
      spotCategories.push('tous');
    }
  }
  if (spot.is_island && !spotCategories.includes('ile')) {
    spotCategories.push('ile');
  }

  spotCategories.forEach(catKey => {
    const cat = CATEGORIES[catKey];
    if (!cat) return;
    const tag = document.createElement('div');
    tag.className = 'px-2 xl:px-2.5 py-0.5 xl:py-1 rounded-lg text-[9px] xl:text-[11px] font-bold text-white uppercase tracking-wider shadow flex items-center gap-1.5 border border-white/20';
    tag.style.backgroundColor = cat.color;
    const labelText = (catKey === 'ile' && spot.island_name) ? `Île (${spot.island_name})` : cat.label;
    tag.innerHTML = `<i class="fa-solid ${cat.icon}"></i><span>${labelText}</span>`;
    tagsContainer.appendChild(tag);
  });

  title.innerText = spot.name;
  location.querySelector('span').innerText = `${spot.lat.toFixed(4)}°N, ${spot.lng.toFixed(4)}°E (${spot.altitude > 0 ? '+' : ''}${spot.altitude} m)`;
  desc.innerText = spot.description;
  visiter.innerText = spot.visiter || "Aucun détail complémentaire renseigné pour ce site.";
  link.href = spot.link;

  if (gmapsLink) {
    gmapsLink.href = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;
  }

  updateSpotToggleButton();
  card.classList.remove('hidden');

  if (currentMode === 'globe' && myGlobe) {
    myGlobe.pointOfView({ lat: spot.lat, lng: spot.lng, altitude: 0.35 }, 1000);
  } else if (currentMode === 'map' && myLeafletMap) {
    const currentZoom = myLeafletMap.getZoom();
    const targetZoom = Math.max(currentZoom, 13);
    myLeafletMap.setView([spot.lat, spot.lng], targetZoom, { animate: true });
  }
}

function closeSpotCard() {
  currentSelectedSpot = null;
  document.getElementById('destination-card').classList.add('hidden');
}

function toggleCurrentSpotViewMode() {
  if (currentMode === 'globe') {
    if (currentSelectedSpot) {
      setViewingMode('map', { lat: currentSelectedSpot.lat, lng: currentSelectedSpot.lng }, 13);
    } else {
      triggerManualMapSwitch();
    }
  } else {
    closeSpotCard();
    setViewingMode('globe', { lat: 27.2579, lng: 33.8116, altitude: 2.1 });
  }
}

function updateSpotToggleButton() {
  const btnIcon = document.getElementById('card-btn-icon');
  const btnLabel = document.getElementById('card-btn-label');
  if (!btnIcon || !btnLabel) return;
  if (currentMode === 'globe') {
    btnIcon.className = "fa-solid fa-map-location-dot text-cyan-400 text-[10px]";
    btnLabel.innerText = "Explorer en 2D";
  } else {
    btnIcon.className = "fa-solid fa-globe text-cyan-400 text-[10px]";
    btnLabel.innerText = "Observer en 3D";
  }
}

function spotMatchesActiveFilters(spot) {
  if (CATEGORIES.tous && CATEGORIES.tous.active) {
    return true;
  }

  let matched = false;
  if (spot.counts) {
    Object.keys(spot.counts).forEach(catKey => {
      if (CATEGORIES[catKey] && CATEGORIES[catKey].active) matched = true;
    });
  }
  if (!matched && spot.category && CATEGORIES[spot.category] && CATEGORIES[spot.category].active) {
    matched = true;
  }
  if (!matched && CATEGORIES.ile && CATEGORIES.ile.active && spot.is_island) {
    matched = true;
  }
  return matched;
}

function getFirstActiveCategoryForSpot(spot) {
  if (spot.counts) {
    for (let catKey of Object.keys(spot.counts)) {
      if (CATEGORIES[catKey] && CATEGORIES[catKey].active && catKey !== 'tous') return catKey;
    }
  }
  if (spot.category && CATEGORIES[spot.category] && CATEGORIES[spot.category].active) {
    return spot.category;
  }
  if (CATEGORIES.ile && CATEGORIES.ile.active && spot.is_island) {
    return 'ile';
  }
  return 'tous';
}

function getFilteredSpots() {
  return travelSpots.filter(spot => spotMatchesActiveFilters(spot));
}

function updateGlobeDisplay() {
  if (!myGlobe) return;

  if (isOnlyIslandFilterActive()) {
    const islandClusters = getIslandClustersData();
    myGlobe.htmlElementsData(islandClusters);
    updateStats();
    return;
  }
  
  const filteredSpots = getFilteredSpots();
  const pov = myGlobe.pointOfView();
  const altitude = (pov && typeof pov.altitude === 'number' && !isNaN(pov.altitude)) ? pov.altitude : 2.0;

  const visibleSpots = filteredSpots.filter(spot => {
    const dLat = (spot.lat - (pov.lat || 0)) * Math.PI / 180;
    const dLng = (spot.lng - (pov.lng || 0)) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos((pov.lat || 0) * Math.PI / 180) * Math.cos(spot.lat * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return c < (Math.PI / 2 + 0.1);
  });

  if (altitude <= 0.18) {
    myGlobe.htmlElementsData(visibleSpots.map(spot => ({ spot, lat: spot.lat, lng: spot.lng })));
    updateStats();
    return;
  }

  const clusterThresholdDeg = altitude >= 1.6 ? 26 : Math.max(0.6, (altitude - 0.15) * 8.5);
  const clusters = [];

  visibleSpots.forEach(spot => {
    let placedInCluster = false;
    for (let cluster of clusters) {
      const dLat = Math.abs(cluster.centerLat - spot.lat);
      const dLng = Math.abs(normalizeLongitude(cluster.centerLng - spot.lng));
      const dist = Math.sqrt(dLat * dLat + dLng * dLng);

      if (dist <= clusterThresholdDeg) {
        cluster.spots.push(spot);
        cluster.centerLat = cluster.spots.reduce((acc, s) => acc + s.lat, 0) / cluster.spots.length;
        cluster.centerLng = cluster.spots.reduce((acc, s) => acc + s.lng, 0) / cluster.spots.length;
        placedInCluster = true;
        break;
      }
    }

    if (!placedInCluster) {
      clusters.push({
        centerLat: spot.lat,
        centerLng: spot.lng,
        spots: [spot]
      });
    }
  });

  const finalElements = clusters.map(c => {
    if (c.spots.length > 1) {
      return {
        isCluster: true,
        lat: c.centerLat,
        lng: c.centerLng,
        count: c.spots.length,
        spots: c.spots
      };
    } else {
      return {
        spot: c.spots[0],
        lat: c.spots[0].lat,
        lng: c.spots[0].lng
      };
    }
  });

  myGlobe.htmlElementsData(finalElements);
  updateStats();
}

function renderUnifiedCategoryList() {
  const container = document.getElementById('unified-category-list');
  if (!container) return;
  container.innerHTML = '';

  let lastSection = null;

  Object.keys(CATEGORIES).forEach(key => {
    const cat = CATEGORIES[key];

    if (cat.section !== lastSection) {
      lastSection = cat.section;
      if (container.children.length > 0) {
        const sep = document.createElement('div');
        sep.className = 'w-full h-[1px] bg-slate-700/80 my-1.5';
        container.appendChild(sep);
      }
      const sectionHeader = document.createElement('div');
      sectionHeader.className = 'text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 px-1.5 py-0.5 rounded';
      if (key === 'tous') {
        lastSection = null;
      } else {
        if (lastSection === 'culture') {
          sectionHeader.className += ' text-amber-500 bg-amber-950/50 border border-amber-600/30';
          sectionHeader.innerHTML = '<i class="fa-solid fa-landmark text-[8px]"></i> Culture';
        } else {
          sectionHeader.className += ' text-cyan-400 bg-cyan-950/50 border border-cyan-600/30';
          sectionHeader.innerHTML = '<i class="fa-solid fa-water text-[8px]"></i> Nature';
        }
        container.appendChild(sectionHeader);
      }
    }

    let count = 0;
    let tooltipText = '';

    if (key === 'tous') {
      count = travelSpots.length;
    } else if (key === 'ile') {
      const uniqueIslands = new Set();
      travelSpots.forEach(s => {
        if (s.is_island) {
          uniqueIslands.add(s.island_name || s.name);
        }
      });
      count = uniqueIslands.size;
      tooltipText = ` title="Îles explorées (${count}) : ${Array.from(uniqueIslands).join(', ')}"`;
    } else {
      travelSpots.forEach(s => {
        if (s.counts && typeof s.counts[key] === 'number') {
          count += s.counts[key];
        } else if (s.category === key) {
          count += 1;
        }
      });
    }

    const row = document.createElement('label');
    row.className = 'flex items-center justify-between p-1 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 cursor-pointer transition select-none border border-slate-800/60';
    row.innerHTML = `
      <div class="flex items-center gap-1.5 min-w-0 pr-1">
        <input type="checkbox" ${cat.active ? 'checked' : ''} onchange="toggleCategory('${key}')" class="w-3 h-3 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-0 cursor-pointer shrink-0">
        <div class="w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] shrink-0 shadow" style="background-color: ${cat.color};">
          <i class="fa-solid ${cat.icon}"></i>
        </div>
        <span class="text-slate-200 text-[10px] font-medium truncate">${cat.label}</span>
      </div>
      <span class="min-w-[26px] text-center font-mono font-bold text-[9px] px-1 py-0.5 rounded bg-slate-950/70 border border-slate-800 shrink-0 ${count > 0 ? 'text-cyan-300' : 'text-slate-500'}"${tooltipText}>${count}</span>
    `;
    container.appendChild(row);
  });
}

function toggleCategory(key) {
  if (CATEGORIES[key]) {
    CATEGORIES[key].active = !CATEGORIES[key].active;
    updateGlobeDisplay();
    updateLeafletDisplay();
    updateStats();
  }
}

function setAllFilters(state) {
  Object.keys(CATEGORIES).forEach(k => {
    CATEGORIES[k].active = state;
  });
  renderUnifiedCategoryList();
  updateGlobeDisplay();
  updateLeafletDisplay();
  updateStats();
}

function updateStats() {
  let totalSites = travelSpots.length;
  const statSitesEl = document.getElementById('header-stat-sites');
  if (statSitesEl) statSitesEl.innerText = totalSites;

  const uniqueCountries = new Set(travelSpots.map(s => s.country)).size;
  const statCountriesEl = document.getElementById('header-stat-countries');
  if (statCountriesEl) statCountriesEl.innerText = uniqueCountries;
}

function zoomMapIn() {
  if (currentMode === 'map' && myLeafletMap) {
    myLeafletMap.zoomIn();
  } else if (myGlobe) {
    const pov = myGlobe.pointOfView();
    const nextAlt = pov.altitude - 0.35;
    if (nextAlt <= 0.28) {
      const target = activeCursorCoords || getExactGlobeCenterCoords();
      setViewingMode('map', target, 9);
    } else {
      myGlobe.pointOfView({ altitude: nextAlt }, 350);
    }
  }
}

function zoomMapOut() {
  if (currentMode === 'map' && myLeafletMap) {
    if (myLeafletMap.getZoom() <= 5) {
      const center = myLeafletMap.getCenter();
      setViewingMode('globe', { lat: center.lat, lng: center.lng, altitude: 2.1 });
    } else {
      myLeafletMap.zoomOut();
    }
  } else if (myGlobe) {
    const pov = myGlobe.pointOfView();
    myGlobe.pointOfView({ altitude: Math.min(3.5, pov.altitude + 0.35) }, 350);
  }
}

function toggleMapTileLayer() {
  if (!myLeafletMap || !currentTileLayerInstance) return;
  myLeafletMap.removeLayer(currentTileLayerInstance);
  if (activeTileLayerKey === 'satellite') {
    activeTileLayerKey = 'topo';
    currentTileLayerInstance = L.tileLayer(TILE_LAYERS.topo.url, { maxZoom: 17 }).addTo(myLeafletMap);
  } else {
    activeTileLayerKey = 'satellite';
    currentTileLayerInstance = L.tileLayer(TILE_LAYERS.satellite.url, { maxZoom: 18 }).addTo(myLeafletMap);
  }
}

function toggleGlobeAutoRotate() {
  if (!myGlobe) return;
  isAutoRotating = !isAutoRotating;
  myGlobe.controls().autoRotate = isAutoRotating;
  updateAutoRotateIcon();
}

function updateAutoRotateIcon() {
  const icon = document.getElementById('icon-auto-rotate');
  if (icon) icon.className = isAutoRotating ? "fa-solid fa-pause text-xs" : "fa-solid fa-play text-xs";
}

function onWindowResize() {
  const container = document.getElementById('globe-container');
  if (myGlobe && container) {
    myGlobe.width(container.clientWidth);
    myGlobe.height(container.clientHeight);
  }
  if (myLeafletMap) myLeafletMap.invalidateSize();
}

window.addEventListener('resize', onWindowResize);
window.onload = function () {
  initGlobe();
  renderUnifiedCategoryList();
  updateStats();
  setTimeout(onWindowResize, 200);
};
