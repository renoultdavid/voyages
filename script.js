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
  // --- EUROPE OCCIDENTALE & DU NORD ---
  "France": { type: "Régions", total: 18, depType: "Départements", depTotal: 101 },
  "Grande-Bretagne": { type: "Nations & Régions", total: 12, depType: "Comtés", depTotal: 48 },
  "Royaume-Uni": { type: "Nations & Régions", total: 12, depType: "Comtés", depTotal: 48 },
  "Écosse": { type: "Council Areas", total: 32 },
  "Belgique": { type: "Régions", total: 3, depType: "Provinces", depTotal: 10 },
  "Pays-Bas": { type: "Provinces", total: 12 },
  "Allemagne": { type: "Länder", total: 16 },
  "Suisse": { type: "Cantons", total: 26 },
  "Autriche": { type: "Länder", total: 9 },
  "Danemark": { type: "Régions", total: 5 },
  "Norvège": { type: "Comtés (Fylker)", total: 15 },
  "Suède": { type: "Comtés (Län)", total: 21 },
  "Finlande": { type: "Régions", total: 19 },

  // --- EUROPE DU SUD & MÉDITERRANÉE ---
  "Espagne": { type: "Communautés", total: 17, depType: "Provinces", depTotal: 50 },
  "Portugal": { type: "Districts & Régions", total: 20 },
  "Italie": { type: "Régions", total: 20, depType: "Provinces", depTotal: 107 },
  "Grèce": { type: "Périphéries", total: 13 },
  "Turquie": { type: "Provinces", total: 81 },

  // --- EUROPE CENTRALE & BALKANS ---
  "Pologne": { type: "Voïvodies", total: 16 },
  "République Tchèque": { type: "Régions (Kraje)", total: 14 },
  "Tchéquie": { type: "Régions (Kraje)", total: 14 },
  "Slovaquie": { type: "Régions (Kraje)", total: 8 },
  "Slovénie": { type: "Régions statistiques", total: 12 },
  "Croatie": { type: "Comitats (Županije)", total: 21 },
  "Bosnie-Herzégovine": { type: "Entités & Cantons", total: 10 },
  "Bosnie": { type: "Entités & Cantons", total: 10 },
  "Monténégro": { type: "Municipalités", total: 25 },
  "Albanie": { type: "Préfectures (Qarks)", total: 12 },

  // --- AMÉRIQUE DU NORD & CENTRALE ---
  "États-Unis": { type: "États", total: 50 },
  "USA": { type: "États", total: 50 },
  "Mexique": { type: "États", total: 32 },
  "Guatemala": { type: "Départements", total: 22 },
  "Honduras": { type: "Départements", total: 18 },

  // --- AMÉRIQUE DU SUD ---
  "Argentine": { type: "Provinces", total: 24 },
  "Chili": { type: "Régions", total: 16 },
  "Bolivie": { type: "Départements", total: 9 },
  "Pérou": { type: "Régions", total: 25 },

  // --- AFRIQUE ---
  "Afrique du Sud": { type: "Provinces", total: 9 },
  "Namibie": { type: "Régions", total: 14 },
  "Botswana": { type: "Districts", total: 10 },
  "Zimbabwe": { type: "Provinces", total: 10 },
  "Eswatini": { type: "Districts", total: 4 },
  "Swaziland": { type: "Districts", total: 4 },
  "Madagascar": { type: "Régions", total: 23 },
  "Tunisie": { type: "Gouvernorats", total: 24 },
  "Maroc": { type: "Régions", total: 12 },
  "Égypte": { type: "Gouvernorats", total: 27 },

  // --- ASIE ---
  "Japon": { type: "Régions", total: 8, depType: "Préfectures", depTotal: 47 },
  "Inde": { type: "États & Territoires", total: 36 },
  "Indonésie": { type: "Provinces", total: 38 },
  "Thaïlande": { type: "Provinces", total: 77 },
  "Malaisie": { type: "États & Territoires", total: 16 },
  "Singapour": { type: "Districts", total: 5 }
};

const travelSpots = [
  {
    id: "argelliers_eglise_saint_etienne",
    name: "Argelliers - Église Saint-Étienne",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Argelliers",
    altitude: 243,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Sanctuaire roman du XIIe siècle de la haute garrigue couronné d'un clocher-beffroi à campanile",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 43.697276,
    lng: 3.673922,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOlzf4PeQLsZeClUs5zWAZs1slBBX1YRFu8k5i0TzOavhz4EO8j5N6e7IO07CQ_sZNrAzX3eSMHBKgIfNp5zhZRxXJw7SCOg9tkvyRsuxR-xNyrFOR2MQpDSNwIcWqtQyBZTVPHwE0ygxwPqeWAC7UHCw=w1611-h2416-s-no-gm?authuser=0",
    description: "Dressant sa fière silhouette de calcaire au cœur d'un village médiéval lové au creux des garrigues et des chênaies du causse de la Selle, l'église paroissiale Saint-Étienne d'Argelliers est un précieux témoin de l'art roman languedocien. Mentionnée dès le XIIe siècle comme possession spirituelle dépendant de la prestigieuse abbaye bénédictine de Saint-Sauveur d'Aniane, elle fut intégrée au réseau défensif de la communauté lors des troubles de la guerre de Cent Ans et des guerres de Religion. Bâtie en moellons de calcaire blanc coquillier soigneusement équarris et appareillés, l'église présente une nef unique voûtée en berceau brisé épaulée de puissants contreforts et prolongée par une abside semi-circulaire romane. Elle est dominée par un haut clocher-tour quadrangulaire aux allures de beffroi fortifié, percé de baies campanaires en plein cintre et coiffé d'un ravissant campanile en fer forgé méridional ajouré qui permettait aux cloches de sonner tout en offrant une prise minimale aux violentes rafales de tramontane.",
    visiter: "S'arrêter sur la place ombragée du village pour admirer l'harmonieuse façade minérale et la verticalité du clocher roman surmonté de sa cage en fer forgé ouvragé. Franchir le portail d'entrée pour ressentir la fraîcheur bienfaisante des épais murs de calcaire et apprécier la pureté des lignes de la nef romane couverte de son berceau de pierre. Découvrir dans le chœur le cul-de-four de l'abside éclairé par d'étroites fenêtres en meurtrières ainsi que le mobilier de dévotion paroissiale, avant de flâner dans les ruelles caladées adjacentes bordées de maisons vigneronnes en pierre sèche et d'anciennes fontaines de village.",
    link: ""
  },
   {
    id: "laroque_vue_sur_l_herault",
    name: "Laroque - Belvédère & Vue sur les Méandres de l'Hérault",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Laroque",
    altitude: 140,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Panorama fluvial sur la retenue d'eau et les falaises calcaires du fleuve Hérault",
    century: "",
    category: "star",
    counts: {},
    lat: 43.921794,
    lng: 3.724806,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN55jlVIyU7r9407SmgybRJFa5qDsVuRm1XMTi0HrZRreb8hOWC62Am1qmhtJIahoe5xspv9cHLcIfg8aT8hAsbCXFFMNMsiXWwNW94ojPEg4v_BoXDz3K87X5_gv9YjQMDXjQZCxtzdL3lBJjiEx7iLw=w1890-h1260-s-no-gm?authuser=0",
    description: "Suspendu au-dessus d'une boucle majestueuse du fleuve côtier au débouché des gorges cévenoles, le belvédère de Laroque offre une vue imprenable sur l'un des plus spectaculaires paysages fluviaux de l'arrière-pays héraultais. À cet endroit précis, le cours impétueux de l'Hérault s'élargit et s'apaise, contenu par un déversoir historique qui alimentait jadis les filatures de soie et les moulins à blé du bourg castral. Les eaux profondes aux teintes émeraude et vert jade miroitent au pied des falaises calcaires boisées de chênes verts et de pins, composant un amphithéâtre naturel grandiose où l'eau calme reflète la verticalité du relief rocheux. Véritable porte d'entrée méridionale des Cévennes calcaires, ce promontoire paysager permet de saisir d'un seul regard l'harmonie intime entre l'écosystème aquatique d'un fleuve méditerranéen et l'implantation humaine audacieuse perchée sur son éperon.",
    visiter: "Rejoindre l'esplanade panoramique aménagée en balcon au sommet du village fortifié pour embrasser le vaste cours d'eau se faufilant entre les rives boisées. Prendre le temps d'observer le reflet des nuages et des falaises dans le plan d'eau miroitant, particulièrement lumineux en matinée lorsque le soleil éclaire les parois rocheuses de face. Repérer en contrebas les traces des anciens aménagements hydrauliques et du seuil du moulin barrant la rivière, avant de poursuivre la découverte des ruelles caladées du village en direction du donjon médiéval.",
    link: "https://photos.google.com/share/AF1QipNpEf0SxNZJscwD7gKekkrYlS9ge5xQW01u6L_o_uWpquy-N8SaNeL21AWoTNGpJw?key=MHZHUFlKa0lmdzNGYXRvYWNEcDhXRW9jMFBpcVhB"
  },
  {
    id: "laroque_chateau_et_chapelle_saint_jean",
    name: "Laroque - Château Fort & Chapelle Castrale Saint-Jean",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Laroque",
    altitude: 149,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Donjon féodal du XIe siècle et chapelle castrale juchés sur un éperon rocheux",
    century: "XIe siècle",
    category: "chateau",
    counts: { religieux: 1 },
    lat: 43.922464,
    lng: 3.723859,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPD5-ycT5RSpz_CDB-aa902Pypm_j5J6-VY_-mtaf82hb7Z3jn05WNolr2BT9_ozd7OOlkrspjZAoIrDLa8oz1m9jyqc24SVaXaMUmNFosEdusLREiQE8UZXtlUCIWDO9VUKaSU9CIZZAUNq71JqCmW9Q=w1611-h2416-s-no-gm?authuser=0",
    description: "Couronnant le sommet de l'éperon calcaire défendant le verrou naturel de la vallée de l'Hérault, l'ensemble castral de Laroque est un modèle d'architecture militaire féodale du bas Languedoc. Mentionné dès la fin du XIe siècle sous le nom de « Castrum de Ruppe » (château du rocher), il appartenait aux seigneurs de Laroque qui contrôlaient le péage fluvial et le passage des troupeaux transhumants vers le mont Aigoual. Le site est dominé par une puissante tour-donjon quadrangulaire haute de plus de vingt-sept mètres, bâtie en moellons calcaires locaux soigneusement assisés sur le rocher taillé à pic. Directement adossée à l'enceinte sommitale, la chapelle castrale Saint-Jean-Baptiste — devenue église paroissiale du bourg — présente une nef unique romane couverte d'un berceau en plein cintre et un chevet semi-circulaire fortifié, coiffé d'un clocheton ajouré. Cet ensemble minéral, remarquablement restauré, témoigne de l'imbrication étroite entre le pouvoir seigneurial protecteur et la vie spirituelle villageoise au Moyen Âge.",
    visiter: "Gravir les calades escarpées et passer sous les portes fortifiées successives du village pour atteindre la plateforme rocheuse supérieure. S'arrêter au pied du donjon pour apprécier l'appareil de pierre calcaire blanche et lever les yeux vers les corbeaux de soutènement des anciens hourds défensifs. Pousser la porte de la chapelle Saint-Jean pour découvrir la pureté de son volume roman intérieur et son chœur voûté en cul-de-four. Contourner la muraille pour contempler le panorama circulaire embrassant le cours sinueux de l'Hérault, les toits de tuiles canal du village accrochés à la pente et les premiers contreforts des Cévennes gardoises au nord.",
    link: "https://photos.google.com/share/AF1QipNpEf0SxNZJscwD7gKekkrYlS9ge5xQW01u6L_o_uWpquy-N8SaNeL21AWoTNGpJw?key=MHZHUFlKa0lmdzNGYXRvYWNEcDhXRW9jMFBpcVhB"
  },
   {
    id: "pic_saint_loup_sommet",
    name: "Cazevieille - Sommet du Pic Saint-Loup & Croix Sommitale",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Cazevieille",
    altitude: 658,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Sentinelle calcaire tutélaire de l'Hérault et belvédère mythique entre Cévennes et Méditerranée",
    century: "",
    category: "rando",
    counts: { rando: 1 },
    lat: 43.779167,
    lng: 3.811371,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMaoRG1z2c4X0-5njykDNCi1hMiQ_KQGagylDXq4CrFTInijoXtsrLb2K92cRFE0KfslxSLEt4_t5zjevdqI5-7l9e8CGIH_tHAReFly7TA-4wnIlikHf-s-KBx7qr1ETgDNDX1hufEI--o5-7M4wYfTw=w2536-h1690-s-no-gm?authuser=0",
    description: "S'élevant avec une majesté théâtrale au-dessus des garrigues et du prestigieux terroir viticole éponyme, le pic Saint-Loup est la montagne tutélaire et le phare paysager du département de l'Hérault. Véritable proue géologique calcaire du Jurassique sculptée par les plissements pyrénéo-provençaux et l'érosion krostique, le massif présente une dissymétrie spectaculaire : un versant méridional tapissé de chênes verts et de cistes montant en pente régulière, opposé à une vertigineuse falaise septentrionale plongeant à pic sur plus de trois cents mètres de verticalité pure. Le point culminant à six cent cinquante-huit mètres d'altitude, coiffé d'une monumentale croix métallique ancrée dans le roc battu par les vents, offre l'un des panoramas les plus grandioses du Midi de la France, embrassant par temps clair la ligne bleue des Cévennes et du mont Aigoual jusqu'au littoral scintillant du golfe du Lion et la Camargue.",
    visiter: "Entreprendre l'ascension pédestre classique depuis le parking de Cazevieille en suivant le sentier balisé qui serpente sous la canopée des chênes yeuses avant de déboucher sur la crête rocheuse. Progresser le long de la crête lapiazée en profitant des échappées visuelles sur la plaine héraultaise et le château de Montferrand perché en contrebas. Atteindre la croix sommitale pour savourer le vertige face au gouffre de la paroi nord et admirer le contraste entre le moutonnement vert des vignobles et l'azur méditerranéen au sud. Surveiller le ciel pour tenter d'apercevoir l'aigle de Bonelli et le martinet à ventre blanc nichant dans les failles inaccessibles de la falaise.",
    link: "https://photos.google.com/share/AF1QipOuP_s-MUztkO7728uDbhxa19HTOUEh4diwhiqI0ab_6k0vCyllEuqkNsnfJR7qqg?key=ZzNGTklHRXk2R051Z3pVREtUaEJXYU16aHFxd3hn"
  },
  {
    id: "pic_saint_loup_chapelle_saint_joseph",
    name: "Cazevieille - Chapelle Saint-Joseph & Ermitage du Pic Saint-Loup",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Cazevieille",
    altitude: 651,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Ancien ermitage et sanctuaire de pèlerinage médiéval perché sur la crête calcaire",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 43.779167,
    lng: 3.811371,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPAGNOtC80Veaw1o348r3CpIWABORW_iKNwI9OiwACRARHYYud4F2IO6MAlhdWkXJoc12iTEY0dsKqp3aPJQCUsDQDI_75f0JTcgQcWpFbr2XppQ8Ld4ww-7asANnAherphFJnx2pI8ajx7lERnaHXHFA=w2538-h1692-s-no-gm?authuser=0",
    description: "Édifiée à quelques dizaines de mètres en contrebas de la croix sommitale sur une terrasse rocheuse étroite dominant l'abîme, la chapelle Saint-Joseph — souvent désignée comme la chapelle de l'Ermitage — est un lieu sacré millénaire chargé de légendes cévenoles. Associée à l'histoire des trois frères chevaliers Guiral, Clair et Loup, partis aux croisades et devenus ermites sur les sommets environnants au retour d'Orient, la chapelle d'origine romane fut remaniée au cours des siècles pour accueillir les pèlerinages paroissiaux venus implorer la pluie ou la protection contre les épidémies. Bâtie en moellons de calcaire blanc arrachés à la montagne et protégée par une toiture basse pour résister aux tempêtes hivernales, elle jouxte les vestiges de l'ancien logis des ermites qui se succédèrent sur cette cime isolée jusqu'au milieu du XIXe siècle. Témoignage poignant de ferveur et de contemplation, cet édicule suspendu entre ciel et terre offre un asile spirituel minéral d'une exceptionnelle intensité.",
    visiter: "Pénétrer avec recueillement sous la voûte en berceau de la petite chapelle restaurée, dont la fraîcheur minérale contraste vivement avec la réverbération du soleil sur le calcaire extérieur. Découvrir la simplicité rustique de l'autel en pierre et les plaques ex-voto marquant la dévotion multiséculaire des randonneurs et pèlerins languedociens. Franchir le seuil pour faire le tour de la terrasse de l'ermitage, observer les traces des anciennes citernes rupestres aménagées pour recueillir l'eau de pluie, et contempler la vue en enfilade sur la falaise nord plongeant vertigineusement vers la vallée de la Buèges et la combe de Mortiès.",
    link: "https://photos.google.com/share/AF1QipOuP_s-MUztkO7728uDbhxa19HTOUEh4diwhiqI0ab_6k0vCyllEuqkNsnfJR7qqg?key=ZzNGTklHRXk2R051Z3pVREtUaEJXYU16aHFxd3hn"
  },
  {
    id: "saint_mathieu_col_de_la_pousterle",
    name: "Saint-Mathieu-de-Tréviers - Col de la Pousterle",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Saint-Mathieu-de-Tréviers",
    altitude: 342,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Col de passage pastoral et carrefour géologique entre garrigue et vignobles",
    century: "",
    category: "star",
    counts: {},
    lat: 43.776374,
    lng: 3.824438,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMlTxwcfXPSx-Fs_YhkUfnphTFTCx-UFcZfnhXjonUbTkjPmPCBK-mOfFzBN19WSKlwrZMmGFm1eL5wqcBHy_7E8ljAaydxINRTwWWu3UA27_GxGqc_qVygzUB2wtpgvBHvkObKyH5121RVYiz0Neverw=w2528-h1684-s-no-gm?authuser=0",
    description: "Ensellure naturelle creusée entre la face orientale effilée du pic Saint-Loup et la crête calcaire menant à la forteresse de Montferrand, le col de la Pousterle — dont le toponyme occitan « posterla » désigne une poterne ou un passage dérobé — est un carrefour stratégique et pastoral séculaire du piémont cévenol. Situé à trois cent quarante-deux mètres d'altitude, ce col permet de basculer du bassin viticole de Saint-Mathieu-de-Tréviers vers la combe sauvage de Fambétou blottie sous la formidable falaise nord. Balayé par les courants thermiques, le site offre une perspective géologique spectaculaire sur les parois stratifiées et plissées de la montagne, tout en constituant un biotope de garrigue dense dominé par les chênes kermès, le thym, le romarin et les genévriers cade. Point de passage privilégié des randonneurs du tour du Pic Saint-Loup (GR de Pays), il offre une halte aérée révélant la verticalité saisissante des à-pics calcaires.",
    visiter: "Marquer une pause au carrefour des sentiers balisés du col de la Pousterle pour apprécier le changement d'ambiance thermique et paysagère entre le versant ensoleillé et l'ombre minérale du versant septentrional. Lever les yeux vers l'impressionnante arête est du Pic Saint-Loup pour mesurer la puissance des forces tectoniques qui ont redressé ces bancs de calcaire blanc. Prendre le temps d'observer le panorama vers l'est sur la silhouette crénelée du château de Montferrand émergeant de la forêt de pins d'Alep, avant de choisir de redescendre vers la combe de Fambétou ou de poursuivre la traversée en balcon le long des sentiers odorants de la garrigue.",
    link: "https://photos.google.com/share/AF1QipOuP_s-MUztkO7728uDbhxa19HTOUEh4diwhiqI0ab_6k0vCyllEuqkNsnfJR7qqg?key=ZzNGTklHRXk2R051Z3pVREtUaEJXYU16aHFxd3hn"
  },
  {
    id: "cazevieille_tour_de_guet",
    name: "Cazevieille - Tour de Guet Médiévale du Château de Montferrand",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Cazevieille",
    altitude: 391,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Poste d'observation avancé du XIIIe siècle de la garnison féodale de Montferrand réutilisé pour la vigie DFCI",
    century: "XIIIe siècle",
    category: "star",
    counts: {},
    lat: 43.774569,
    lng: 3.787929,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNc1htlcisNYeGPVH1GjQW-mBp3Oc5yFOGtyQaBLxY23w05EJJjVHVdp83Yz0eBw1_47-68EVw2Moc4VlFygEJk4OnbLnWzBTcBklhyBsbhFnOU69xQH2y9XVjEiFZK1duvltzgnVUucXPlzPgk9bGWmQ=w2538-h1692-s-no-gm?authuser=0",
    description: "Érigée au XIIIe siècle sur une crête lapiazée dominant le village de Cazevieille, cette tour de guet médiévale constituait un poste de surveillance avancé hautement stratégique rattaché à la puissante forteresse du château de Montferrand. Occupée par la garnison féodale des comtes de Maguelone puis des évêques de Montpellier, elle permettait de verrouiller le flanc occidental du pic Saint-Loup, de contrôler les chemins muletiers traversant les garrigues et de communiquer instantanément par signaux optiques avec la place forte principale située sur l'arête orientale. Implantée sur une croupe rocheuse calcaire à près de quatre cents mètres d'altitude offrant une visibilité panoramique sans angle mort, cette sentinelle historique a trouvé une seconde jeunesse à l'époque contemporaine : elle a été réhabilitée et surmontée d'une superstructure métallique de guet forestier (DFCI) pour la détection estivale précoce des départs de feux de forêt. Cette superposition saisissante entre architecture militaire médiévale et mission moderne de protection civile en fait une étape patrimoniale majeure sur les sentiers du pic.",
    visiter: "Rejoindre la croupe calcaire par les sentiers balisés au départ de Cazevieille ou lors de la boucle du tour du Pic Saint-Loup. Approcher l'édifice pour examiner les maçonneries d'assise médiévales du XIIIe siècle ancrées directement dans le roc de garrigue, témoignant du rôle de sentinelle avancée tenu par les soldats de la garnison de Montferrand. Observer comment la vigie moderne contre les incendies s'est greffée sur ce site militaire ancestral pour exploiter son champ de vision exceptionnel. Profiter de l'esplanade sommitale pour admirer un panorama ouvert à 360 degrés, embrassant d'un côté la falaise abrupte de l'Hortus et le moutonnement des chênes kermès, et de l'autre la majestueuse pyramide rocheuse du pic Saint-Loup se découpant contre le ciel.",
    link: "https://photos.google.com/share/AF1QipOuP_s-MUztkO7728uDbhxa19HTOUEh4diwhiqI0ab_6k0vCyllEuqkNsnfJR7qqg?key=ZzNGTklHRXk2R051Z3pVREtUaEJXYU16aHFxd3hn"
  },
   {
    id: "saint_guilhem_le_desert_place_de_la_liberte",
    name: "Saint-Guilhem-le-Désert - Place de la Liberté & Platane Bicentenaire",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Saint-Guilhem-le-Désert",
    altitude: 102,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Cœur battant du village ombragé par un majestueux platane de la Liberté planté en 1855",
    century: "XIXe siècle",
    category: "star",
    counts: { place: 1 },
    lat: 43.734008,
    lng: 3.548887,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM08bXzqhtjbFP1xMkmZzx-juxvJAPkPzCYd1W7ccJGCcM4-BYpbtKsVQtlp-KbeONPCp-xwYM8GxwaKCAiO4LwVNECTShK1uBc499WElsSy-qXWWJZnswTNqVkTbv_kjkWD8E9q2ORtUBkrwWCa1T_3A=w1611-h2416-s-no-gm?authuser=0",
    description: "Cœur convivial et historique du village médiéval, la place de la Liberté déploie son esplanade pavée au pied du chevet et de l'entrée de l'abbaye de Gellone, encadrée par de hautes façades de calcaire blond aux volets colorés et toitures de tuiles canal. Le lieu tire son charme incomparable de son hôte végétal d'exception : un platane commun géant (Platanus x acerifolia) planté le 20 janvier 1855 pour commémorer l'avènement de la liberté républicaine et les grands idéaux démocratiques. Arbre remarquable de France dont la ramure gigantesque dépasse trente mètres d'envergure pour une circonférence de tronc avoisinant les six mètres, il déploie en été une voûte de feuillage dense et protectrice créant un dôme d'ombre et de fraîcheur bienfaisant au cœur de la fournaise des gorges méditerranéennes. Rythmée par le murmure de la fontaine publique en pierre abreuvée par les sources du Verdus et les terrasses de cafés animées, la place est le point de ralliement emblématique des habitants, des pèlerins de passage et des amoureux du patrimoine cévenol.",
    visiter: "S'asseoir à l'une des terrasses ombragées sous le houppier colossal du platane centenaire pour goûter à la quiétude méridionale et contempler la lumière filtrant à travers les feuilles dorées. Observer la silhouette monumentale du tronc et ses racines puissantes se glissant entre les pavés de pierre calcaire, tout en écoutant le clapotis régulier de la fontaine de la place. Admirer depuis l'esplanade la vue rapprochée sur les murs massifs de l'abbaye de Gellone et le profil abrupt des falaises calcaires environnantes, avant de s'engouffrer dans les passages sous voûtes et les ruelles fraîches qui rayonnent depuis la place vers le haut du bourg.",
    link: "https://photos.google.com/share/AF1QipO-npy7_T8Mdqf7CzI_oRqfkVrXU24M5tyvoA_59tG59z3n-VcGrt1zLUf1HveO3g?key=OGM3Vms0OFpPbFdQaW53X0p2Tnc5VmQ2Wl9uWV93"
  },
  {
    id: "saint_guilhem_le_desert_ruelles",
    name: "Saint-Guilhem-le-Désert - Ruelles Médiévales & Rives du Verdus",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Saint-Guilhem-le-Désert",
    altitude: 87,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Dédale de calades pavées, d'arcades romanes et de passages couverts accrochés aux falaises",
    century: "XIIe siècle",
    category: "star",
    counts: {},
    lat: 43.733801,
    lng: 3.551572,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOXRTHpJUyVof8JwWEJ31-qdEz2T0oqnl1QZ4j0zQxiL20oR1eirm7uHJtqfcoJuSsYbSAHrGeKxg4Pt0lIGlWXJCgONOrZQ-N5a0qly8Hc5UqBiMByAh01KkVaH_TK3EF38iWWIejYYNZqeOBWsKs-EA=w1611-h2416-s-no-gm?authuser=0",
    description: "Étagé en gradins étroits le long de la faille rocheuse creusée par le torrent du Verdus avant son confluent avec les gorges de l'Hérault, le bourg de Saint-Guilhem-le-Désert — classé parmi les Plus Beaux Villages de France et Grand Site de France — est un ensemble médiéval d'une remarquable homogénéité architecturale. Le village s'articule autour d'un lacis de « calades » (ruelles traditionnelles pavées de galets du fleuve et de blocs de calcaire taillés en chantepleure pour canaliser les eaux d'orage) enjambées d'arcs-boutants, de passages couverts sous voûtes romanes et de pontets de pierre franchissant le ruisseau. Les maisons de maîtres et échoppes artisanales des XIIe et XIVe siècles, bâties en calcaire coquillier extrait du cirque de l'Infernet, dévoilent des fenêtres géminées à colonnettes sculptées, des portes en plein cintre et des escaliers extérieurs menant à d'anciens séchoirs à châtaignes et à figues. Cet urbanisme resserré, pensé pour faire rempart aux vents violents et préserver une relative fraîcheur estivale, offre une promenade intemporelle où la pierre patinée s'accorde aux massifs de lauriers-roses et aux rosiers grimpants.",
    visiter: "Arpenter la rue du Bout-du-Monde en longeant le lit caillouteux du Verdus pour admirer les maisons séculaires accrochées à même le roc et franchir les pontets de pierre enjambant le torrent. Lever les yeux pour détailler les linteaux gravés, les fenêtres gothiques à coussièges et les arcades médiévales reliant les bâtisses par-dessus la ruelle. Découvrir les ateliers d'artisans d'art (céramistes, santonniers, tourneurs sur bois) dissimulés dans d'anciens celliers voûtés, avant de grimper par les calades supérieures menant au sentier en corniche du cirque de l'Infernet pour profiter d'une vue plongeante sur les toits de tuiles brunes et le clocher roman de l'abbaye.",
    link: "https://photos.google.com/share/AF1QipO-npy7_T8Mdqf7CzI_oRqfkVrXU24M5tyvoA_59tG59z3n-VcGrt1zLUf1HveO3g?key=OGM3Vms0OFpPbFdQaW53X0p2Tnc5VmQ2Wl9uWV93"
  },
   {
    id: "saint_guilhem_le_desert_abbaye_de_gellone",
    name: "Saint-Guilhem-le-Désert - Abbaye de Gellone (UNESCO)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Occitanie",
    department: "Hérault",
    subdiv: "Saint-Guilhem-le-Désert",
    altitude: 102,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Chef-d'œuvre du premier art roman languedocien inscrit au patrimoine mondial de l'UNESCO",
    century: "XIe siècle",
    category: "religieux",
    counts: { unesco: 1 },
    lat: 43.733945,
    lng: 3.549290,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMeOA29iULVZw4mGt-wd79Bh2uwbB3S8p9AuD2bA8Jbz_L3W0cYWdeOtt-yJYlbLRMijrOPs3Mj1fGPFgUGGvFkOR7aHdvHsFOfJxvL8pKoq-_A6TVrlMA3JtIWoRK1KC5sOzl8BUxArw8FcBDg8OIy5A=w1890-h1260-s-no-gm?authuser=0",
    description: "Fondée en 804 par Guillaume de Gellone, cousin germain de Charlemagne et héros militaire devenu moine après avoir déposé les armes, l'abbaye de Gellone est un joyau universel de l'art roman méridional, inscrit au patrimoine mondial de l'UNESCO au titre du bien « Chemins de Saint-Jacques-de-Compostelle en France » (voie d'Arles ou via Tolosana). Établie au creux des impressionnantes falaises calcaires du cirque de l'Infernet dans le val de Gellone, l'abbatiale actuelle rebâtie au XIe siècle impressionne par la majesté dépouillée de ses lignes architecturales et son chevet monumental à trois absides étagées, rythmé par des lésènes et des bandes lombardes finement sculptées. Le sanctuaire doit sa renommée millénaire et l'afflux des pèlerins médiévaux aux précieuses reliques rapportées par saint Guilhem, notamment un morceau de la Vraie Croix serti dans un reliquaire d'argent ainsi que les reliques du saint fondateur conservées dans une crypte romane voûtée. La nef, d'une verticalité exceptionnelle pour le premier art roman méditerranéen, s'élève sous un berceau en plein cintre d'une pureté acoustique souveraine, baignée par la lumière dorée filtrant à travers de fines plaques de calcite translucide.",
    visiter: "Arriver face au chevet roman pour contempler le jeu des arcatures lombardes et la patine dorée du calcaire taillé contrastant avec les murailles rocheuses du vallon. Franchir le portail pour pénétrer dans la haute nef austère, lever les yeux vers la voûte en plein cintre et admirer l'orgue historique Jean-Pierre Cavaillé achevé en 1789, miraculeusement préservé dans son état d'origine. Descendre dans la crypte du Xe siècle abritant le tombeau en marbre blanc de saint Guilhem et de ses sœurs, avant de gagner les deux galeries subsistantes du cloître roman, où chapiteaux sculptés de feuilles d'acanthe et d'animaux fantastiques rappellent la splendeur des galeries aujourd'hui en partie dispersées (notamment au musée des Cloisters de New York).",
    link: "https://photos.google.com/share/AF1QipO-npy7_T8Mdqf7CzI_oRqfkVrXU24M5tyvoA_59tG59z3n-VcGrt1zLUf1HveO3g?key=OGM3Vms0OFpPbFdQaW53X0p2Tnc5VmQ2Wl9uWV93"
  },
   {
    id: "penta_di_casinca_chapelle_saint_andre",
    name: "Penta-di-Casinca - Ruines de la Chapelle Sant'Andria",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Penta-di-Casinca",
    altitude: 291,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Vestiges d'un sanctuaire roman médiéval blotti dans la verdure au pied du village classé",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 42.467964,
    lng: 9.465874,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPAXGgrgF2zo4vEXpivmJqDw3f2D5cyparjha-4mNIul5qjN5zc8IM7mOROHXRGjTYpUUJUGEp1riBNdzNNoUPE0phphrYa-w4eOi5HlDrk6-pce2842vKVusGvy8P2ys3dNcVIIlEmdTlHNSsU7hSUcQ=w1784-h2378-s-no-gm?authuser=0",
    description: "Nichées au creux d'un vallon verdoyant sur les pentes orientales menant au village perché de Penta-di-Casinca — seul village de Corse entièrement classé au titre des Sites pittoresques —, les ruines de la chapelle Sant'Andria (Saint-André) témoignent de l'intense réseau d'édifices religieux ruraux qui maillait la microrégion à l'époque médiévale. Bâtie à l'époque romane au XIIe siècle selon les canons de l'architecture pisane insulaire, cette modeste église paroissiale ou dévotionnelle était édifiée en moellons de schiste vert et de calcaire soigneusement taillés et hourdés au mortier de chaux. Aujourd'hui à ciel ouvert et envahie par un écrin poétique de lierre, d'arbousiers et de fougères, elle conserve l'élévation remarquable de ses murs gouttereaux et l'amorce de son abside en cul-de-four semi-circulaire orientée vers le levant. Ce site empreint de mélancolie et de sérénité témoigne de la dévotion populaire envers l'apôtre saint André et de l'implantation des anciens hameaux agricoles en terrasses dominant la plaine littorale de Fium'Alto.",
    visiter: "Rejoindre les ruines en suivant le vieux sentier muletier ou la piste rurale reliant les écarts agricoles de la basse vallée aux hauteurs de Penta. Pénétrer avec respect à l'intérieur de la nef à ciel ouvert pour admirer l'appareillage régulier des blocs de schiste taillés à la broche et repérer les départs d'arcs et les fentes de jour étroites qui éclairaient jadis le chœur. Prendre le temps d'écouter le murmure du ruisseau et des feuillages dans ce havre de fraîcheur préservé, avant de poursuivre la montée pédestre vers le belvédère monumental du village de Penta-di-Casinca pour contempler le panorama s'ouvrant sur la plaine orientale et les îles toscanes.",
    link: "https://photos.google.com/share/AF1QipMULn9cKklmtM8rg4me1yrjqtjpxbMatXa9ip-lBt-FKU_H4Di4tfrGT8hZqAtCsQ?key=cGNUa214ZEM2Q0tmNjQ3UU1xVExHM05PTDFPSGVR"
  },
  {
    id: "porri_chapelle_saint_jacques",
    name: "Porri - Ancienne Chapelle San Ghjacumu (Saint-Jacques)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Porri",
    altitude: 560,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Sanctuaire d'altitude isolé sous les châtaigniers séculaires de la Casinca montagnarde",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 42.458920,
    lng: 9.445925,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMD0AfZsQMgMntSaxiq1Kp1XY19GYL-uL_bgDKwZqQDWhRp9SK4dHvMeWHqRuAxoEM0PIHHH4tDE3ccUPd2afbXUWCviI_NnSFOhPDeundUjBfHk1M9dhZjun-1ia13dj3njCQbeefYyb2b_shGk1mWSw=w1784-h1343-s-no-gm?authuser=0",
    description: "Perchée à plus de cinq cent soixante mètres d'altitude sur les contreforts boisés dominant le village montagnard de Porri, l'ancienne chapelle rurale San Ghjacumu (Saint-Jacques) est un jalon spirituel précieux et méconnu du Haut-Fium'Alto. Érigée au Moyen Âge à la croisée d'anciens chemins muletiers et de transhumance reliant les communautés de la Casinca aux crêtes de la Castagniccia et au massif du Monte San Petrone, elle servait à la fois de chapelle de confrérie, d'oratoire pour les bergers et d'étape protectrice placée sous le patronage de saint Jacques le Majeur. Construite en moellons de schiste sombre issus des carrières locales et coiffée à l'origine d'un toit à deux pans en lauzes traditionnelles (teghje), la chapelle se love sous une magnifique canopée de châtaigniers séculaires et de chênes verts. Sa maçonnerie robuste et son chevet plat ou semi-circulaire révèlent le savoir-faire rustique mais pérenne des maîtres maçons insulaires, offrant un contraste saisissant entre la rudesse de la pierre sèche et l'atmosphère sylvestre paisible qui enveloppe le sanctuaire.",
    visiter: "Gagner le sanctuaire en empruntant le sentier de randonnée pédestre ombragé qui s'élève depuis le bourg de Porri à travers les sous-bois de châtaigneraies et les terrasses de culture réhabilitées. Découvrir la façade austère percée d'une simple porte surmontée d'un linteau monolithe et admirer l'intégration parfaite de l'édifice au cœur du paysage montagnard. Faire une halte méditative à l'ombre bienfaisante des grands arbres pour profiter de la quiétude des lieux et de l'air vif d'altitude, avant de jeter un regard vers l'est pour contempler les trouées panoramiques plongeant vers la mer Tyrrhénienne.",
    link: "https://photos.google.com/share/AF1QipMULn9cKklmtM8rg4me1yrjqtjpxbMatXa9ip-lBt-FKU_H4Di4tfrGT8hZqAtCsQ?key=cGNUa214ZEM2Q0tmNjQ3UU1xVExHM05PTDFPSGVR"
  },
  {
    id: "sorbo_ocagnano_eglise_san_giovanni",
    name: "Sorbo-Ocagnano - Église San Giovanni Battista (Saint-Jean-Baptiste)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Sorbo-Ocagnano",
    altitude: 222,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Ancienne église piévane romane du XIIe siècle dominant le balcon maritime de Casinca",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 42.478315,
    lng: 9.459175,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMau9wrHFeHH_3XHFbIE66Inyws2M4DG0AVQ4Q4CRDbiBoOmCax5Qw0IGUwceIQh4l3CS4ZFkKx8iCmHYzWSZ0zLx5RlnnBZMU_XvUi-6Brk5I9RiwtPHSFFZOB-LC2tO2mrnvh6LES8Y5rd8wOxnciGg=w1784-h1190-s-no-gm?authuser=0",
    description: "Édifiée sur une terrasse panoramique en promontoire entre les hameaux de Sorbo et d'Ocagnano, l'église San Giovanni Battista est l'ancienne pieve (église baptismale et judiciaire) médiévale qui administrait spirituellement la piévanie de Casinca au Moyen Âge. Reconstruite au XIIe siècle dans un pur style roman pisan avant d'être remaniée et agrandie aux périodes classique et baroque pour répondre à la démographie paroissiale, elle séduit par la beauté lumineuse de son appareil en blocs de schiste vert et ocre soigneusement équarris. Sa façade principale s'orne d'un clocher-campanile élégant coiffé d'un dôme en coupole typique du baroque génois corse, créant une superposition architecturale harmonieuse entre la rigueur romane primitive et la grâce méridionale. Dédiée à saint Jean-Baptiste, protecteur des sources et des baptêmes, l'église abrite sous sa nef voûtée un mobilier d'art sacré d'un grand intérêt, comprenant des autels de stuc polychrome, des toiles de confrérie des XVIIe et XVIIIe siècles et de remarquables fonts baptismaux rappelant sa vocation de sanctuaire mère du canton.",
    visiter: "S'arrêter sur le vaste parvis pavé en balcon pour contempler le clocher ajouré et examiner sur les murs latéraux les assises romanes du XIIe siècle aux teintes vert amande et dorées. Pénétrer dans la nef pour admirer la clarté du maître-autel baroque richement sculpté et découvrir les retables latéraux dédiés à la Vierge et aux saints patrons locaux. Prendre le temps d'observer la cuve baptismale ancienne en pierre locale avant de sortir admirer le panorama exceptionnel qui se déploie depuis l'esplanade : une vue plongeante et dégagée sur l'immensité de la plaine orientale, les eaux scintillantes de la mer Tyrrhénienne et les contours montagneux de la presqu'île du Cap Corse au nord.",
    link: "https://photos.google.com/share/AF1QipMULn9cKklmtM8rg4me1yrjqtjpxbMatXa9ip-lBt-FKU_H4Di4tfrGT8hZqAtCsQ?key=cGNUa214ZEM2Q0tmNjQ3UU1xVExHM05PTDFPSGVR"
  },
  {
    id: "sorbo_ocagnano_chapelle_san_damianu",
    name: "Sorbo-Ocagnano - Chapelle San Damianu (Saint-Côme et Saint-Damien)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Sorbo-Ocagnano",
    altitude: 466,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Oratoire roman de crête perché sur un piton panoramique face à l'archipel toscan",
    century: "XIIe siècle",
    category: "religieux",
    counts: { rando: 1 },
    lat: 42.469312,
    lng: 9.444308,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOhGNk_OIGIueE_RiX7paf0-T-j7Vdd9joIVen1uQxkzGBUnaaXIvbo0j790efZdqcGXUbMjy4dUQrp0JPz4mQs3wKtOxSy767jK673kp7IROUxDt-XcEC2H0fguF1NjSmooag2TnbBxDipcLy8Po13vQ=w1784-h2369-s-no-gm?authuser=0",
    description: "Couronnant un éperon rocheux particulièrement spectaculaire à près de quatre cent soixante-dix mètres d'altitude au-dessus des châtaigneraies d'Ocagnano, la chapelle San Damianu (dédiée aux saints martyrs médecins Côme et Damien) est l'un des belvédères religieux les plus saisissants de la côte est de la Corse. Bâtie à l'origine au XIIe siècle dans la grande tradition de l'art roman corse puis entretenue avec ferveur par les confréries villageoises, elle présente un plan rectangulaire modeste bâti en moellons de schiste apparents et surmonté d'un clocheton à baie unique campaniforme. Utilisée jadis pour des offices votifs lors des épidémies et pour bénir les terres agricoles de la microrégion, la chapelle s'élève comme une vigie spirituelle et visuelle entre ciel et mer. L'environnement minéral qui l'entoure, tapissé de cistes, de bruyères arborescentes et de blocs de rochers gris polis par les vents d'est, compose un cadre sauvage d'une beauté austère et grandiose.",
    visiter: "Entreprendre l'ascension pédestre par le sentier communal balisé serpentant depuis le haut du village de Sorbo ou d'Ocagnano à travers le maquis haut et les sous-bois de châtaigniers. Découvrir la chapelle juchée sur son piton rocheux et admirer la simplicité chaleureuse de sa façade minérale flanquée de son campanile rustique. Gravir prudemment la petite crête rocheuse attenante pour embrasser un panorama circulaire à 360 degrés grandiose : la plaine de Casinca à vos pieds, l'embouchure du Golo au nord, et par temps clair, la ligne d'horizon soulignée par les silhouettes majestueuses des îles de Capraia, d'Elbe et de Montecristo.",
    link: "https://photos.google.com/share/AF1QipMULn9cKklmtM8rg4me1yrjqtjpxbMatXa9ip-lBt-FKU_H4Di4tfrGT8hZqAtCsQ?key=cGNUa214ZEM2Q0tmNjQ3UU1xVExHM05PTDFPSGVR"
  },
  {
    id: "venzolasca_chapelle_saint_roch",
    name: "Venzolasca - Chapelle Saint-Roch (San Roccu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Venzolasca",
    altitude: 175,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Oratoire votif de protection contre les pestes érigé à l'entrée du village en belvédère",
    century: "XVIIe siècle",
    category: "religieux",
    counts: {},
    lat: 42.485891,
    lng: 9.456132,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP7yFQAqJT_VbLShHkovVx8bIGOg2x9OsMbxdhIw5yauv0kqanPIOwW-QuTJg8A8wotm5SXztt-AVFLo8I0Fw0jLxMltwiQ8_Jde18Q34NUZkrqsiLnNjqIL12jctBMelJV1H7wur9rDKvSuks-8u8ePg=w1784-h1190-s-no-gm?authuser=0",
    description: "Établie en sentinelle protectrice à l'entrée septentrionale du bourg en amphithéâtre de Venzolasca, la chapelle Saint-Roch (San Roccu) est un sanctuaire votif emblématique de la piété populaire corse de l'époque moderne. Érigée au XVIIe siècle à la suite des grandes épidémies de peste qui frappèrent le littoral méditerranéen et la péninsule italienne, elle fut dédiée à saint Roch de Montpellier, patron tutélaire invoqué par les communautés villageoises pour préserver les familles et le bétail de la contagion. Bâtie selon un plan à nef unique sobre couvert d'un toit à deux pans de teghje et précédée d'une façade classique enduite de blanc et d'ocre, la chapelle s'orne d'un élégant fronton triangulaire et d'un petit clocheton latéral. Véritable jalon à la croisée des chemins vicinaux reliant Venzolasca à la plaine et à Sorbo-Ocagnano, l'édifice s'ouvre sur un remarquable belvédère paysager dominant les oliveraies séculaires et les coteaux en terrasses dévalant vers la mer Tyrrhénienne.",
    visiter: "Marquer une halte recueillie devant la façade de la chapelle en arrivant par la route panoramique de Venzolasca pour contempler son harmonie classique et la silhouette de son clocher à arcelle. Jeter un regard à travers les grilles ou la porte ajourée pour découvrir la statue polychrome de saint Roch accompagné de son fidèle chien lui apportant du pain, et observer les ex-voto marquant la reconnaissance des fidèles. Profiter de l'esplanade ombragée pour apprécier la vue spectaculaire sur les toits d'ardoise et de tuiles du village de Venzolasca étagé sur son éperon, avec la nappe azurée de la Méditerranée en arrière-plan.",
    link: "https://photos.google.com/share/AF1QipMULn9cKklmtM8rg4me1yrjqtjpxbMatXa9ip-lBt-FKU_H4Di4tfrGT8hZqAtCsQ?key=cGNUa214ZEM2Q0tmNjQ3UU1xVExHM05PTDFPSGVR"
  },
  {
    id: "venzolasca_chapelle_saint_sebastien",
    name: "Venzolasca - Chapelle Saint-Sébastien (San Sebastianu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Venzolasca",
    altitude: 181,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Élégante chapelle de confrérie du XVIIe siècle nichée au cœur des ruelles de schiste",
    century: "XVIIe siècle",
    category: "religieux",
    counts: {},
    lat: 42.484755,
    lng: 9.460741,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP_MEO54bORA0sclIKeQA4bZkHf2mvGZse_7xIay547ZCIuEkEWkHA4o0N2pDWS5NE1t1EjzKThJf3g6yXWCfN-5LpWNfkdpSPq1JtfKltGhl1EoUiK_ZTxUquKaCjeXn507rCKAKiKqKCmVkFWjtHRQA=w1784-h1190-s-no-gm?authuser=0",
    description: "Parfaitement intégrée au tissu urbain dense et pittoresque de Venzolasca, la chapelle Saint-Sébastien (San Sebastianu) se dresse le long d'une ruelle pavée bordée de hautes maisons de maîtres aux façades de schiste brun. Érigée au cours du XVIIe siècle sous le gouvernement génois, cette chapelle vouée au saint martyr transpercé de flèches — également invoqué comme protecteur miraculeux contre les maux épidémiques aux côtés de saint Roch — joua un rôle central dans la vie religieuse et communautaire du village en tant que siège de dévotions confraternelles. Sa façade sobre en appareil régulier est percée d'un portail rectangulaire mouluré surmonté d'un oculus circulaire et d'une corniche moulurée, coiffée par un campanile à peigne accueillant la cloche paroissiale. L'intérieur conserve une atmosphère intime et chaleureuse, marquée par un autel en stuc et boiseries peinturlurées ainsi que des peintures de dévotion illustrant le martyre de saint Sébastien soutenu par les saintes femmes romaines.",
    visiter: "Flâner dans le dédale des ruelles pavées de Venzolasca pour déboucher devant la façade soignée de Saint-Sébastien, encadrée par le pittoresque bâti ancien en schiste. Admirer les détails de maçonnerie du linteau de porte et lever les yeux vers le clocheton en arceau qui domine la ruelle étroite. Prendre le temps de s'imprégner de l'atmosphère authentique de ce cœur villageois préservé, avant de poursuivre la balade vers l'église paroissiale Sainte-Lucie toute proche et les passages sous voûtes caractéristiques de l'urbanisme médiéval et moderne de la Casinca.",
    link: "https://photos.google.com/share/AF1QipMULn9cKklmtM8rg4me1yrjqtjpxbMatXa9ip-lBt-FKU_H4Di4tfrGT8hZqAtCsQ?key=cGNUa214ZEM2Q0tmNjQ3UU1xVExHM05PTDFPSGVR"
  },
   {
    id: "barbaggio_monte_seccu",
    name: "Barbaggio - Monte Seccu (Grand Site Conca d'Oru)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Barbaggio",
    altitude: 662,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Belvédère panoramique sur les deux mers et sanctuaire botanique du chou insulaire",
    century: "",
    category: "rando",
    counts: { rando: 1 },
    lat: 42.675675,
    lng: 9.375731,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNhzdCyEomW3_tWupLFR69I2V-tg7nTwkkDqUUAndU-3L_i4D5f1BmWBJjKlYs5wWAd6SH5rz5fSCn3XpGFyGR8FXfduhU_E_Q51GgT2gOgjxg4BKCLREgCQ_88QkuM0q-NTvFVT5o_VoMSzYhkcoLHPQ=w1784-h1343-s-no-gm?authuser=0",
    description: "Culminant à plus de six cents mètres d'altitude sur la ligne de crête schisteuse et calcaire reliant le col de Teghime au massif du Pigno, le Monte Seccu est un sommet emblématique dominant la cuvette fertile du Nebbio et le vignoble réputé de Patrimonio au cœur du Grand Site de France Conca d'Oru. Véritable vigie naturelle jetée entre l'est et l'ouest de l'île, ce relief escarpé offre une situation géographique exceptionnelle permettant d'embrasser simultanément les deux mers : la mer Tyrrhénienne baignant la plaine de la Marana et le port de Bastia d'un côté, et la Méditerranée ouvrant sur le golfe turquoise de Saint-Florent et les reliefs désertiques des Agriate de l'autre. Balayé par les vents marins et tapissé d'un maquis ras xérophile parsemé d'affleurements rocheux ruiniformes, le versant occidental du Monte Seccu est également un sanctuaire écologique protégé d'importance européenne (réseau Natura 2000), abritant l'une des très rares stations sauvages au monde de Brassica insularis (le chou insulaire), relique botanique endémique protégée accrochée aux falaises calcaires.",
    visiter: "Gagner le point de départ au col de Teghime ou sur les hauteurs de Barbaggio pour s'engager sur le sentier de crête balisé remontant vers le Monte Seccu. Suivre la sente minérale qui serpente à travers les cistes, les immortelles d'Italie et les genévriers nains tout en profitant de belvédères naturels plongeant à pic sur le vignoble de Patrimonio et la plaine d'Oletta. Atteindre le cairn sommital pour jouir d'un panorama circulaire à 360 degrés d'une pureté saisissante : vers l'est, l'étang de Biguglia et l'archipel toscan (Capraia, Elbe) ; vers l'ouest, la citadelle génoise de Saint-Florent fermant son golfe étincelant et les crêtes déchiquetées du Monte Cinto et du Monte Padro fermant l'horizon montagnard. Privilégier la fin d'après-midi pour contempler le coucher de soleil embrasant le golfe et la mer de reflets dorés.",
    link: ""
  },
   {
    id: "popolasca_castellu_di_serravalle",
    name: "Popolasca - Castellu di Serravalle",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Popolasca",
    altitude: 553,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Nid d'aigle féodal des seigneurs Amondaschi verrouillant la vallée de la Tartagine et du Golo",
    century: "XIIIe siècle",
    category: "chateau",
    counts: { rando: 1 },
    lat: 42.438572,
    lng: 9.164599,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPZUaye-VeTLZRBve-zOLeC5VR20DJThe1pASdnCKyNyUy0KFxNA8YLFbu_QarQA1NJbSaPhEHtGr9IK1asXrjCiffzFb7Df2muD0Y0HRVpg4kCbUU7Uye0cfFya5mbO1r4hT4J43FjhdhVcglDjCiemg=w1784-h2369-s-no-gm?authuser=0",
    description: "Perché sur une arête rocheuse calcaire particulièrement escarpée dominant le confluent de la Tartagine et du Golo, le Castellu di Serravalle est l'une des forteresses médiévales les plus spectaculaires et stratégiques de l'intérieur de la Corse. Érigé au XIIIe siècle par la puissante lignée seigneuriale des Amondaschi — seigneurs féodaux qui contrôlaient le Caccia, le Giussani et les voies de passage transhumantes vers le Niolo —, ce nid d'aigle verrouillait l'accès entre la côte orientale et la Balagne. Les vestiges actuels comprennent une puissante tour maîtresse quadrangulaire en moellons de calcaire local soigneusement appareillés, les ruines d'une courtine d'enceinte épousant les failles vertigineuses du rocher ainsi que des traces de logis et de citernes rupestres. Théâtre d'âpres conflits entre les seigneurs locaux et l'autorité montante de la république de Gênes, le château fut assiégé à plusieurs reprises avant d'être progressivement démantelé, laissant place à des ruines grandioses qui se découpent fièrement sur le décor minéral des célèbres aiguilles de Popolasca.",
    visiter: "Rejoindre le départ du sentier depuis la route en contrebas de Popolasca ou près du pont génois de Castirla. Suivre la sente cairnée et sportive qui s'élève à travers le maquis odorant (arbousiers, cistes et chênes verts) pour grimper à l'assaut du piton rocheux. Gravir avec prudence les derniers mètres taillés dans la roche pour accéder à l'esplanade du donjon médiéval et contempler l'appareillage médiéval bravant le vide. Profiter d'un panorama circulaire à couper le souffle embrassant les aiguilles déchiquetées de Popolasca, la vallée encaissée du Golo et l'enfilade des crêtes du massif du Monte Cinto.",
    link: "https://photos.google.com/share/AF1QipPtWZFeIYzvCHFr9VyBEk0mA0NoHu-kXgfbKQP2Flw50FgUA3suQI8pWrdw_uCprg?key=YVo2WER1cFVmQWJVZWVTOExHWnFuTFQ5Q2IxeGVn"
  },
  {
    id: "castiglione_torra_di_monte_albanu",
    name: "Castiglione - Torra di Monte Albanu",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Castiglione",
    altitude: 470,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Tour de guet médiévale isolée dressée sur un piton panoramique face au massif du Cinto",
    century: "XIIIe siècle",
    category: "chateau",
    counts: { rando: 1 },
    lat: 42.421323,
    lng: 9.176825,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPJkhYYIlYT8G2zHPHVuQwf2v4u3IqeqygaRLvopS17eHcpxbJt2XGX-VgXW6mKhb0ztkKpeldxX09ll6F60loWUPoQnHJO-JiYvGov6THJJrHwBn2jtadxLo2okF6Vh5RlVuDGoqPQ41TMG2SrqtWqVA=w1784-h2369-s-no-gm?authuser=0",
    description: "Dressant sa fière silhouette de pierre au sommet d'une cime rocheuse isolée culminant à près de mille mètres d'altitude au-dessus du village de Castiglione, la Torra di Monte Albanu est un poste de guet et de transmission médiéval d'une grande valeur historique. Bâtie à l'époque féodale en liaison visuelle directe avec le Castellu di Serravalle et les autres places fortes du Caccia et du Niolo, cette tour circulaire ou sub-carrée occupait une position de surveillance militaire hors pair. Elle permettait d'observer les mouvements de troupes le long de la haute vallée du Golo et de relayer instantanément les alertes par feux nocturnes ou signaux de fumée diurnes vers les villages perchés voisins. Érigée en blocs de granite et calcaire bruts solidement hourdés, la tour défie les siècles au cœur d'une nature rude et préservée, entourée d'une végétation de maquis d'altitude et de pins d'où émergent d'impressionnants chaos rocheux sculptés par l'érosion éolienne.",
    visiter: "Emprunter l'itinéraire de randonnée pédestre balisé s'élevant depuis le village montagnard de Castiglione à travers les châtaigneraies et les rocailles. Monter de façon soutenue en suivant la ligne de crête pour atteindre le sommet du Monte Albanu où trônent les vestiges de la tour séculaire. S'approcher des soubassements pour admirer l'intégration parfaite de la maçonnerie médiévale à même la roche mère. Savourer le silence absolu de la montagne corse et contempler la perspective plongeante sur les gorges de la Scala di Santa Regina, les crêtes du Monte Padro et l'ensemble de la vallée centrale.",
    link: "https://photos.google.com/share/AF1QipPtWZFeIYzvCHFr9VyBEk0mA0NoHu-kXgfbKQP2Flw50FgUA3suQI8pWrdw_uCprg?key=YVo2WER1cFVmQWJVZWVTOExHWnFuTFQ5Q2IxeGVn"
  },
   {
    id: "parigne_l_eveque_eglise_notre_dame",
    name: "Parigné-l'Évêque - Église Notre-Dame-de-l'Assomption",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Parigné-l'Évêque",
    altitude: 73,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Ancienne possession des évêques du Mans alliant nef romane et clocher d'ardoise",
    century: "XVe siècle",
    category: "religieux",
    counts: {},
    lat: 47.937698,
    lng: 0.365678,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLMjjC1KfJjj5PXVeCSWbOUfSvpQqhH9NRg-hILoxxGevRXj4fqch5BtsBuKTOM49jwtW3WXEcKxyiAU0FFIer52S_SG53qANX1dclYeGbTJpQ9x_RYaMWXIxfxj_bU5_SadMWm-DlWCeFL9-kt95X-Q=w1784-h2369-s-no-gm?authuser=0",
    description: "Édifiée au cœur du bourg sur une butte sableuse dominant la vallée du Narais, l'église Notre-Dame-de-l'Assomption de Parigné-l'Évêque porte dans son architecture et son toponyme l'empreinte séculaire des évêques du Mans, qui y possédaient jadis un manoir et un vaste domaine temporel dès le Haut Moyen Âge. L'édifice primitif du XIIe siècle, dont subsistent les puissantes maçonneries de la nef en moellons de grès roussard ferrugineux et calcaire gréseux, a connu d'importantes campagnes de remaniement à la fin de la période gothique puis au XIXe siècle. Sa façade occidentale sobre est épaulée de robustes contreforts et percée d'un portail en arc brisé, tandis que la croisée du transept s'élève en un imposant clocher carré coiffé d'une haute flèche pyramidale élancée couverte d'ardoises. À l'intérieur, la nef charpentée s'ouvre sur un chœur lumineux et des chapelles latérales conservant un mobilier liturgique d'une grande valeur patrimoniale, comprenant des retables baroques ornés de colonnes torses, des statues en terre cuite mancelle polychrome ainsi qu'un bel ensemble de verrières figurant la Vierge patronne et les évangélisateurs du Maine.",
    visiter: "Arriver par la place de l'Église pour contempler la stature du clocher d'ardoise se détachant au-dessus des toitures du bourg et observer l'appareillage chaleureux des moellons de roussard typiques du terroir sarthois. Franchir le portail d'entrée pour s'imprégner de l'atmosphère sereine de la nef et apprécier la perspective vers le chœur réaménagé au fil des siècles. Prendre le temps de détailler la statuaire religieuse ancienne des autels secondaires, notamment les œuvres maniéristes en terre cuite et bois sculpté représentant saint Julien et la Vierge à l'Enfant. Contourner ensuite le chevet pour profiter des ruelles calmes bordées de maisons anciennes de vignerons et d'artisans, avant de prolonger la découverte vers les forêts de pins et de chênes ceinturant la commune.",
    link: ""
  },
  {
    id: "brette_les_pins_eglise_saint_martin",
    name: "Brette-les-Pins - Église Saint-Martin",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Brette-les-Pins",
    altitude: 68,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Sanctuaire néogothique du XIXe siècle enraciné à l'orée des grandes pinèdes du Belinois",
    century: "XIXe siècle",
    category: "religieux",
    counts: {},
    lat: 47.913138,
    lng: 0.338208,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOTz1TerNuQsuYVHI8LuZjtycMM0t0z6a-4kO7dN1XKXt8I6Pmt74lD5QbpJUhUgiBrdt1HV3H9iHJkyFsyVES7NE2fJAbYZHaZgZ_46C2l_uHGQPh8hNfQnqdwo2z4kab5E8bC2VDCot4ZjctBh66JPQ=w1784-h2369-s-no-gm?authuser=0",
    description: "Dressant sa fière silhouette néogothique au centre du village à l'orée des vastes massifs de pins maritimes et sylvestres du Belinois, l'église paroissiale Saint-Martin de Brette-les-Pins perpétue un patronage martinien ancestral remontant aux premiers temps de l'évangélisation du Maine. Reconstruite sous le Second Empire pour remplacer l'ancien sanctuaire médiéval devenu vétuste et inadapté à la population grandissante, elle adopte un plan régulier en croix latine bâti en pierre calcaire blanche et tuffeau, rythmé par des contreforts élancés couronnés de pinacles. Sa façade principale est précédée d'un clocher-porche monumental percé de lancettes géminées et surmonté d'une remarquable flèche octogonale en pierre finement taillée, ornée de lucarnes ajourées et de crosses végétales. L'intérieur déploie trois nefs voûtées d'ogives sur croisées d'arêtes élégantes, baignées par la clarté colorée d'un cycle complet de vitraux d'ateliers manceaux illustrant notamment le geste de charité de saint Martin partageant son manteau avec un pauvre, la vie des saints évangélisateurs locaux et les grandes dévotions rurales.",
    visiter: "Admirer depuis la place centrale la rigueur géométrique et la virtuosité des sculptures de la flèche de pierre dominant les houppiers des pins avoisinants. Pénétrer sous le clocher-porche pour découvrir l'enfilade lumineuse des croisées d'ogives soutenues par de fines colonnettes à chapiteaux de feuillages stylisés. Déambuler le long des bas-côtés pour contempler la finesse des baies vitrées narratives du XIXe siècle, en s'attardant sur les représentations de saint Martin d'Amiens à Tours. Prendre le temps d'observer le mobilier néogothique en chêne et le maître-autel sculpté avant de ressortir flâner dans ce village verdoyant bordé de sentiers sablonneux s'enfonçant sous les pinèdes.",
    link: ""
  },
   {
    id: "duneau_dolmen_pierre_couverte",
    name: "Duneau - Dolmen de la Pierre Couverte",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Duneau",
    altitude: 78,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Monumentale sépulture mégalithique collective du Néolithique en grès roussard",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 48.053841,
    lng: 0.520447,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNN9c_PN8HISe4SOl4dlh-jhnxYH_sRVVtX2Qo47Q5jTGHiQXZg_De9q1JxJcN16Rq-q8a1eZYtJH1HitZK76rccVVNtS4PcrWVxIEgQOSzM55OaFjw2hGoVNHW18JQe_8gPa5Ae00g97QEqTnZpwBY3A=w1784-h1190-s-no-gm?authuser=0",
    description: "Érigé il y a plus de quatre mille cinq cents ans par les premières communautés paysannes sédentarisées dans la plaine alluviale de l'Huisne, le dolmen de la Pierre Couverte de Duneau — classé au titre des Monuments Historiques dès 1889 — est l'un des spécimens mégalithiques les plus imposants et spectaculaires de l'Est sarthois. Bâtie à l'aide d'énormes blocs de grès roussard ferrugineux extrait localement, cette sépulture mégalithique collective appartenait à l'origine à une vaste chambre funéraire recouverte d'un tumulus de terre et de pierrailles (cairn) arasé par des millénaires de labours agricoles. Le monument conserve toujours son impressionnante table de couverture monolithe, une dalle trapézoïdale massive mesurant près de quatre mètres de long pour plus de deux mètres de large et pesant plusieurs dizaines de tonnes, reposant en équilibre parfait sur de puissants orthostates latéraux ancrés dans le sol. Lors des fouilles archéologiques menées au XIXe siècle, les couches funéraires profondes livrèrent de nombreux ossements humains accompagnés d'un riche mobilier lithique composé de haches polies en silex, de perles d'ornement et de tessons de céramique à pâte grossière caractéristiques de la culture de Seine-Oise-Marne.",
    visiter: "Rejoindre ce témoin de la Préhistoire par le chemin communal vicinal qui longe les parcelles cultivées au sud du bourg de Duneau. S'approcher de l'imposante table de couverture pour observer la texture alvéolée et les teintes sombres et oxydées du grès roussard ferrugineux patiné par les millénaires. Examiner les piliers porteurs latéraux en appréciant l'ingéniosité des bâtisseurs néolithiques qui surent caler ces blocs colossaux sans aucun liant de maçonnerie pour créer une chambre funéraire pérenne. Prendre le temps d'observer le panorama ouvert sur la plaine environnante et le vallon de l'Huisne, avant de prolonger la découverte en direction du menhir voisin de Pierrefiche.",
    link: "https://photos.google.com/share/AF1QipOOtQjEARz4RLSEyZv6FNSGm4NXzhRx0XxLUGcIWbA7sMPVSkSCjzqiyacgkf3t9g?key=TEhLQ2NHeHJGVjRBc1UwVFZrM2lzSjVIMnE3Wld3"
  },
  {
    id: "duneau_eglise_saint_cyr",
    name: "Duneau - Église Saint-Cyr-et-Sainte-Julitte",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Duneau",
    altitude: 72,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Édifice médiéval rural mariant calcaire et roussard flanqué d'un clocher d'ardoise",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 48.068988,
    lng: 0.519718,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPQ_Lw0rvgJnz64UPJ4uG4FJ2WgAyi9QrptGaoyYfUUwpm8hpgQ1Dn-7i6om_sy1AkHbRuUBPpPfmxhUz1dTqlh2QlfNORSyfPakL-L72iZvyDjKEgcJTU0ijR8zUR6mg4yzk_UP_dtfLo4yIEcJGQcrQ=w1784-h1190-s-no-gm?authuser=0",
    description: "Dressée au centre du bourg de Duneau sur une terrasse légèrement surélevée dominant le vallon bocager, l'église paroissiale Saint-Cyr-et-Sainte-Julitte est un sanctuaire d'origine romane plein de charme, placé sous le vocable du jeune martyr chrétien Cyr et de sa mère Julitte. Édifiée au cours du XIIe siècle puis remaniée à la fin de la période gothique et à l'époque classique, elle offre une maçonnerie polychrome caractéristique du patrimoine sarthois associant des moellons de grès roussard brun-rougeâtre, du calcaire blond de Bernay et des lits de silex. L'extérieur se distingue par sa nef sobre épaulée de contreforts appareillés et par son clocher carré surmonté d'une élégante flèche pyramidale couverte d'écailles d'ardoise d'Anjou. L'intérieur déploie un volume intimiste sous une belle charpente lambrissée en berceau brisé, abritant un retable baroque en tuffeau peint et doré du XVIIe siècle ainsi qu'un ensemble de statuaire religieuse ancienne illustrant la ferveur paroissiale séculaire de cette communauté rurale du Perche sarthois.",
    visiter: "Pénétrer dans le bourg pour admirer l'harmonie des matériaux rustiques composant les façades de l'église, soulignées par les chaînages d'angle en pierre calcaire et la toiture pentue. Pousser la porte pour découvrir la quiétude de la nef unique baignée d'une clarté tamisée par les vitraux historiés modernes et anciens. S'approcher du chœur pour contempler le retable d'autel baroque encadré de colonnettes à chapiteaux corinthiens et admirer les statues de saint Cyr et de sainte Julitte portant la palme du martyre. Faire le tour du chevet plat pour apprécier le calme du square paroissial arboré avant de s'engager sur les petites rues menant vers le paysage ouvert du bocage.",
    link: "https://photos.google.com/share/AF1QipOOtQjEARz4RLSEyZv6FNSGm4NXzhRx0XxLUGcIWbA7sMPVSkSCjzqiyacgkf3t9g?key=TEhLQ2NHeHJGVjRBc1UwVFZrM2lzSjVIMnE3Wld3"
  },
  {
    id: "duneau_menhir_pierrefiche",
    name: "Duneau - Menhir de la Pierre Fiche (Pierrefiche)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Duneau",
    altitude: 82,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Haut monolithe néolithique de grès dressé en bordure des terres céréalières",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 48.059874,
    lng: 0.523713,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN8hjcKYWL0yknL7_bxsV-HlWxYiyU2w0OoPry1jy9TByzfEqz4zxRCkQuCNIGAznmdn6OPkWtupIaiV8X4AjWvN0EzI7WZ-cMH4Rgvjy5WdzlwNNLKbmO49BEfznmfa49RAx5qyVTJFQJc7gR85QUAVw=w1784-h1190-s-no-gm?authuser=0",
    description: "Émergeant au milieu d'un rideau d'arbres en lisière de champs sur le territoire de Duneau, le menhir de la Pierre Fiche (ou Pierrefiche) constitue un autre jalon éminent du riche complexe mégalithique de la moyenne vallée de l'Huisne. Taillé et érigé au Néolithique il y a plus de quatre millénaires, ce monolithe en grès roussard s'élève hardiment vers le ciel à près de trois mètres de hauteur. Sa silhouette fuselée, aux arêtes émoussées par des siècles d'exposition aux intempéries et aux vents d'ouest, témoigne de l'effort technique prodigieux consenti par les bâtisseurs préhistoriques pour extraire, traîner sur des rondins de bois et redresser verticalement ce bloc de pierre pesant plusieurs tonnes. Comme nombre de pierres levées de la Sarthe, la Pierre Fiche marquait probablement une frontière territoriale, une borne de sanctuaire tribal à ciel ouvert ou une voie de passage ancestrale reliant les rives de l'Huisne aux plateaux du Perche.",
    visiter: "Rejoindre le monument en empruntant les chemins vicinaux et sentes agricoles reliant Duneau au hameau de Pierrefiche. S'approcher du monolithe pour toucher le grain rugueux de la roche ferrugineuse, marquetée de lichens dorés et gris témoignant de la pureté de l'air ambiant. Prendre du recul pour contempler la façon dont cette sentinelle de pierre plurimillénaire se découpe sur l'horizon bocager et les cultures céréalières sarthoises. Profiter de la halte pour écouter le chant des alouettes dans les chaumes et relier à pied ce mégalithe au dolmen de la Pierre Couverte situé à moins d'un kilomètre.",
    link: "https://photos.google.com/share/AF1QipOOtQjEARz4RLSEyZv6FNSGm4NXzhRx0XxLUGcIWbA7sMPVSkSCjzqiyacgkf3t9g?key=TEhLQ2NHeHJGVjRBc1UwVFZrM2lzSjVIMnE3Wld3"
  },
  {
    id: "duneau_bocage",
    name: "Duneau - Paysage Bocager & Chemins Creux du Perche Sarthois",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Duneau",
    altitude: 85,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Mosaïque agro-pastorale traditionnelle préservée rythmée de haies vives et de chênes émondés",
    century: "",
    category: "rando",
    counts: { rando: 1 },
    lat: 48.064888,
    lng: 0.527191,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOlcJ9e1y5oOSqU-ToDy-6Cjx5gPzk5D_XoE3_6ErvQZofqL_DzBaSLU8_ySQQ0bKTIQC92BBDUzjoqayI_fF3CepEm1JHUmuhQ0MGTcWZdtFmEBna2zKQJNgIZ7rIqIi5SdDRxdtqafTDPaRUDwLAKQg=w1784-h1190-s-no-gm?authuser=0",
    description: "S'étirant doucement entre les méandres de l'Huisne et les premières ondulations du Perche sarthois, le bocage de Duneau offre un exemple remarquablement préservé du paysage agraire traditionnel de l'Ouest de la France. Ce réseau vivant de parcelles herbagères et céréalières est délimité par une trame continue de haies plessées, de talus herbeux et de chemins creux ancestraux ombragés de grands chênes pédonculés menés en « trognes » (arbres têtards émondés). Véritable havre de biodiversité, ces corridors écologiques abritent une faune sylvicole et bocagère dense, servant d'abris pour les hérissons, chevreuils, chouettes chevêches et passereaux granivores, tout en jouant un rôle hydrologique protecteur fondamental contre le ruissellement des eaux de pluie. Le cheminement au fil de ces sentes de terre battue offre une immersion apaisante au cœur d'une campagne vivante où se perpétue l'élevage bovin et où la lumière filtre délicatement à travers les feuillages des aubépines et des prunelliers en fleur.",
    visiter: "Chaussé de bonnes chaussures de marche, emprunter les chemins de terre et sentiers de randonnée balisés qui sillonnent la commune à l'écart des axes routiers. Savourer la fraîcheur protectrice des chemins creux encaissés entre deux talus herbeux tapissés de fougères et de jacinthes des bois au printemps. Prendre le temps d'observer le port sculptural des vieux chênes têtards aux troncs creux servant de refuges aux insectes saproxyliques et aux chauves-souris. Profiter des trouées visuelles sur les champs ondulants pour contempler les couleurs changeantes des cultures au gré des saisons et respirer les parfums de terre humide et de foin coupé qui caractérisent la campagne sarthoise.",
    link: "https://photos.google.com/share/AF1QipOOtQjEARz4RLSEyZv6FNSGm4NXzhRx0XxLUGcIWbA7sMPVSkSCjzqiyacgkf3t9g?key=TEhLQ2NHeHJGVjRBc1UwVFZrM2lzSjVIMnE3Wld3"
  },
  {
    id: "vouvray_sur_huisne_dolmen_des_roches",
    name: "Vouvray-sur-Huisne - Dolmen des Roches",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Vouvray-sur-Huisne",
    altitude: 104,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Chambre funéraire mégalithique du Néolithique nichée sur un coteau boisé dominant la vallée",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 48.088740,
    lng: 0.553196,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP90RnJoIpSFAEbpGeT8l4jQQpmvfDW0M0ilszzsviYhEVSGvnVDFTto7DWnRidMM2eGBUVfODIcg9-g7ieY59yJfUsK7h31sb2WBYCDx_pvOO0uucKlYdyKXor0hY3EYGyvrnYjW-g0Nfhsefjty8ciw=w1784-h2369-s-no-gm?authuser=0",
    description: "Perché sur le flanc d'une colline boisée dominant avec majesté le cours sinueux de l'Huisne sur la commune de Vouvray-sur-Huisne, le dolmen des Roches est un précieux joyau de l'architecture funéraire néolithique de la région. Édifiée au IVe millénaire avant notre ère par les bâtisseurs de tombes collectives, cette structure mégalithique se compose de volumineux blocs de grès roussard et de quartzite extraits des affleurements rocheux voisins du coteau. Bien que son tumulus protecteur d'origine se soit dissipé sous l'effet de l'érosion naturelle et des siècles d'activités pastorales, le dolmen conserve une chambre intérieure bien lisible délimitée par plusieurs piliers supports verticaux robustes maintenant une puissante dalle supérieure de couverture inclinée. Lovée sous le couvert protecteur de chênes centenaires, de charmes et de ronciers, cette sépulture plurimillénaire dégage une présence minérale et mystique saisissante, témoignant de l'occupation continue et de l'organisation spatiale sacrée des premières sociétés paysannes installées sur les hauteurs du Perche sarthois.",
    visiter: "Accéder au monument en gravissant le chemin forestier et pastoral qui s'élève depuis la vallée de l'Huisne vers les crêtes boisées de Vouvray. Découvrir la chambre mégalithique émergeant au milieu des feuilles mortes et de la mousse sylvestre, en observant la disposition inclinée de la grande table de grès et les points d'appui des orthostates de soutènement. Prendre le temps d'apprécier la tranquillité profonde de ce sous-bois préservé du bruit du monde moderne, avant de jeter un regard vers le fond de la vallée à travers les frondaisons pour contempler les méandres de l'Huisne et les toits du village en contrebas.",
    link: "https://photos.google.com/share/AF1QipOOtQjEARz4RLSEyZv6FNSGm4NXzhRx0XxLUGcIWbA7sMPVSkSCjzqiyacgkf3t9g?key=TEhLQ2NHeHJGVjRBc1UwVFZrM2lzSjVIMnE3Wld3"
  },
   {
    id: "sille_le_guillaume_chateau",
    name: "Sillé-le-Guillaume - Château Fort Médiéval",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Sillé-le-Guillaume",
    altitude: 185,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Puissante forteresse militaire des marches du Maine rebâtie au XVe siècle",
    century: "XVe siècle",
    category: "chateau",
    counts: {},
    lat: 48.185012,
    lng: -0.126101,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOAEesC6bE3eAoCOfhy7thhNVlW02vrv26C29DU7otdW6PDWeQ-_enY8Nn8VlxF55s1FY0pkhyzNsqqn3ZaFTwtJ3r79p7JE5AlHAQR5SJPexUT_WEiuQbLg99VXmGOp2NXB24fQiDL68rDttmM3tO7Sg=w1784-h1343-s-no-gm?authuser=0",
    description: "Dressé fièrement au sommet d'un promontoire stratégique contrôlant les marches historiques entre le Maine, la Bretagne et la Normandie, le château fort de Sillé-le-Guillaume est l'une des places fortes médiévales les plus imposantes du département de la Sarthe. Établi dès le XIe siècle par le premier baron Guillaume Ier de Sillé, le site fut âprement disputé pendant la guerre de Cent Ans, pris puis occupé par les troupes anglaises de John Talbot avant d'être reconquis et entièrement reconstruit à la fin du XVe siècle par la puissante famille de Montecler. L'ensemble architectural s'articule autour d'une vaste cour trapézoïdale défendue par de massives courtines en moellons de grès et schiste armées de canonnières, et flanquée d'un colossal donjon circulaire du XIIe siècle haut de plus de vingt-cinq mètres. Remanié au XVIIe siècle pour adoucir son austérité militaire par le percement de larges fenêtres à meneaux et la création de logis seigneuriaux à toitures en ardoise, le château a conservé ses fossés profonds, ses tours d'angle à mâchicoulis et son châtelet d'entrée autrefois précédé d'un pont-levis, illustrant magistralement la transition entre l'art défensif féodal et les résidences seigneuriales de l'époque moderne.",
    visiter: "Franchir l'ancienne porte fortifiée pour pénétrer dans la haute cour d'honneur pavée et admirer la puissance des tours d'angle couronnées de mâchicoulis de pierre et de toitures en poivrière. Gravir les degrés en vis du grand donjon médiéval pour explorer ses salles de garde voûtées et sa charpente monumentale, tout en découvrant les expositions consacrées à l'histoire militaire de la baronnie de Sillé et aux combats de la guerre de Cent Ans. Parcourir le chemin de ronde qui relie les courtines pour bénéficier d'une vue plongeante sur les ruelles anciennes du bourg castral, la silhouette de la collégiale Notre-Dame et les moutonnements boisés du massif de la forêt de Sillé. Prendre le temps de faire le tour extérieur par les anciens fossés en herbe pour apprécier la verticalité colossale des soubassements ancrés dans le roc.",
    link: "https://photos.google.com/share/AF1QipNzttNsovalm8WxLhF4jahGCiK7WtIfEGg-m1nDg1sa8QzrHPkkUr_EtvW52eWEyg?key=ZTA1MkhvaVFmSnRTaTl4UU1mX0VXODJ6WmlQXzhR"
  },
  {
    id: "sille_le_guillaume_eglise_notre_dame",
    name: "Sillé-le-Guillaume - Église Collégiale Notre-Dame",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Sillé-le-Guillaume",
    altitude: 182,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Ancienne collégiale romane et gothique dotée d'une crypte et d'un portail sculpté du XIIIe siècle",
    century: "XIIIe siècle",
    category: "religieux",
    counts: {},
    lat: 48.184586,
    lng: -0.126587,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNQtjNrqSr-CTLgnaAsbFRvpwWwLRA_YPr-Y11DT-jGeIVUAVogHfH-gDMzJy-b5wW-0Brzf7dvSk14sL8f-vWnBKICpSLThz12s2p-bFGXmCamdZjm9_ODeLeXNphGaifnUUxpl7Cd3hHnEIstmyf5-A=w1784-h2369-s-no-gm?authuser=0",
    description: "Édifiée en contrebas immédiat des remparts du château au cœur du tissu urbain médiéval, l'église Notre-Dame de Sillé-le-Guillaume — ancienne collégiale fondée au XIIe siècle sous le patronage des barons locaux — est un remarquable édifice mariant la robustesse du roman primitif aux élégances du premier gothique de l'Ouest. En raison de la forte déclivité du terrain rocheux, l'église présente la particularité rare d'avoir été bâtie sur une imposante crypte romane voûtée du XIIe siècle, servant d'assise monumentale au chœur supérieur. Sa façade occidentale attire l'attention par son magnifique portail du XIIIe siècle en calcaire de Bernay, dont les voussures en ogive s'ornent d'une délicate dentelle de feuillages sculptés, de rinceaux végétaux et de voussures historiées représentant les vierges sages et les vierges folles. À l'intérieur, la vaste nef unique couverte d'une charpente lambrissée s'ouvre sur un transept et un chœur dotés de voûtes angevines à croisées d'ogives surbaissées, abritant un mobilier liturgique d'un grand intérêt patrimonial, dont des retables baroques du XVIIe siècle en terre cuite mancelle et des statues en bois polychrome.",
    visiter: "S'arrêter sur le parvis en pente pour admirer la richesse ornementale du portail gothique du XIIIe siècle, en détaillant les délicates sculptures des archivoltes et les chapiteaux sculptés de feuillages d'acanthe. Pousser la porte pour pénétrer dans la nef spacieuse, lever les yeux vers la voûte en coque de bateau inversée et apprécier la perspective dégagée vers le maître-autel baroque richement sculpté. Descendre dans la crypte médiévale semi-enterrée pour ressentir l'atmosphère minérale et recueillie de ses nefs basses portées par de lourds piliers carrés romans. Prendre le temps d'observer les retables en tuffeau et plâtre doré des chapelles latérales ainsi que les fonts baptismaux anciens en marbre et grès, avant de remonter par la ruelle pavée bordant l'abside pour contempler la vue en contre-plongée sur les tours du château.",
    link: "https://photos.google.com/share/AF1QipNzttNsovalm8WxLhF4jahGCiK7WtIfEGg-m1nDg1sa8QzrHPkkUr_EtvW52eWEyg?key=ZTA1MkhvaVFmSnRTaTl4UU1mX0VXODJ6WmlQXzhR"
  },
  {
    id: "sille_le_guillaume_lac_de_sille",
    name: "Sillé-le-Guillaume - Lac de Sillé (Sillé-Plage)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Sillé-le-Guillaume",
    altitude: 178,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Vaste plan d'eau forestier de trente-deux hectares niché dans le parc naturel Normandie-Maine",
    century: "",
    category: "lac",
    counts: {},
    lat: 48.209465,
    lng: -0.129315,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMGIcXHQMSL7_EdenIuUqibiiYc2qoNN0IMNSaTrvk4Duku0usKckVIo4XYRTmLfTfBfQU6GHUxsBJ3AOyOQzOzSErGN2cVvRXG_G3GoPQGeLdEkpOOkHyfe--X6DhEHYI9VUhvTtC7Dj_SwZ5cJr73_g=w1784-h1343-s-no-gm?authuser=0",
    description: "Enchâssé dans une cuvette naturelle au cœur des trois mille cinq cents hectares de la forêt domaniale de Sillé, le lac de Sillé — affectueusement surnommé « Sillé-Plage » — est une splendide nappe d'eau douce de plus de trente-deux hectares formant l'un des pôles d'écotourisme et de nature les plus réputés du parc naturel régional Normandie-Maine. Créé à l'origine pour réguler les eaux des ruisseaux forestiers et alimenter les anciennes forges et moulins de la vallée, ce bassin lacustre s'est mué au fil du XXe siècle en une station verte préservée prisée des amoureux de plein air et de baignade. Ses berges bordées d'immenses futaies de chênes rouvres, de hêtres centenaires et de pins sylvestres composent un paysage d'inspiration presque nordique où la forêt vient plonger directement dans les reflets sombres et paisibles du plan d'eau. Doté d'une plage de sable fin aménagée et surveillée en période estivale, le lac est également un écosystème aquatique d'une remarquable biodiversité, abritant carpes, brochets, perches ainsi qu'une abondante avifaune lacustre composée de grèbes huppés, de canards colverts et de hérons cendrés.",
    visiter: "Entreprendre le tour complet du lac à pied en suivant le sentier pédestre ombragé de quatre kilomètres qui serpente au ras de l'eau sous la frondaison des grands feuillus. S'arrêter sur les pontons de pêche en bois pour admirer les reflets du ciel et de la forêt dans l'eau limpide, ou poser sa serviette sur la plage de sable pour une baignade rafraîchissante. Louer un pédalo, un canoë ou un paddle pour explorer les petites anses secrètes du lac inaccessibles depuis la rive, ou s'engager sur les nombreux sentiers de randonnée balisés montant vers le belvédère du Saut du Serf et la ligne de crête des Coëvrons. Profiter des aires de pique-nique aménagées à l'ombre des pins pour une halte champêtre au grand air.",
    link: "https://photos.google.com/share/AF1QipNzttNsovalm8WxLhF4jahGCiK7WtIfEGg-m1nDg1sa8QzrHPkkUr_EtvW52eWEyg?key=ZTA1MkhvaVFmSnRTaTl4UU1mX0VXODJ6WmlQXzhR"
  },
  {
    id: "sille_le_guillaume_etang_du_jouteau",
    name: "Forêt de Sillé - Étang du Jouteau",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Sillé-le-Guillaume",
    altitude: 215,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Étang forestier sauvage et biotope préservé ceinturé de tourbières et de chênaies",
    century: "",
    category: "lac",
    counts: {},
    lat: 48.222271,
    lng: -0.107364,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNXUy7zJjclhX5r-e-RjRjdssLguMJSlJ7PbcUYiBHzlv0qfvtKoNeU0FXEwYFZ1toVqtcilNWfd2ili6_uoQCi4tZnCflKO3CrYx7z8Yc6exe-Q1mxnQB-FTDfpP0rxRrNItneSrzFh3rAsh5F5VBpVQ=w1784-h1190-s-no-gm?authuser=0",
    description: "Dissimulé dans les profondeurs sylvestres du nord-est de la forêt domaniale de Sillé, à plus de deux cents mètres d'altitude au creux d'un vallon humide et silencieux, l'étang du Jouteau est une perle secrète réservée aux promeneurs en quête d'immersion sauvage et contemplative. Aménagé autrefois par des digues artisanales en terre et moellons de grès pour servir de réserve d'eau aux activités de bûcheronnage, de flottage du bois et d'alimentation des viviers piscicoles des seigneurs du Maine, cet étang forestier est resté totalement à l'abri de l'urbanisation et des loisirs motorisés. Ses rives sauvages, colonisées par des tapis de sphaignes, des laîches, des fougères aigles et des massettes, forment une zone humide tourbeuse d'une grande valeur écologique. Entouré d'une dense chênaie-hêtraie entremêlée de résineux, le miroir d'eau reflète avec une netteté cristalline les silhouettes imposantes des arbres géants, créant une ambiance de conte de fées où le silence n'est troublé que par le chant du pic noir, le coassement des amphibiens et le bruissement des libellules au ras des nénuphars.",
    visiter: "Rejoindre ce havre de paix en empruntant les pistes forestières sablonneuses ou les sentiers balisés de grande randonnée (GR 36) traversant le cœur du massif de Sillé depuis Sillé-Plage ou le carrefour de la Queue d'Aronde. Faire lentement le tour des berges sauvages pour savourer le calme absolu et contempler les troncs d'arbres moussus se mirant dans l'eau sombre aux reflets tourbeux. Déployer ses jumelles pour observer les libellules rares (cordulies et caloptéryx) ainsi que les chevreuils venant parfois s'abreuver sur la rive opposée à la tombée du jour. Poursuivre la marche le long des sentiers en sous-bois bordés de blocs de grès et d'affleurements de quartzite armoricain pour une immersion totale dans la nature sarthoise.",
    link: "https://photos.google.com/share/AF1QipNzttNsovalm8WxLhF4jahGCiK7WtIfEGg-m1nDg1sa8QzrHPkkUr_EtvW52eWEyg?key=ZTA1MkhvaVFmSnRTaTl4UU1mX0VXODJ6WmlQXzhR"
  },
   {
    id: "lavardin_eglise_saint_genest",
    name: "Lavardin - Église Saint-Genest",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Lavardin",
    altitude: 73,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Joyau roman du Vendômois tapissé d'exceptionnelles fresques murales du XIIe au XVIe siècle",
    century: "XIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.741437,
    lng: 0.885852,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMV0-yhk5ENRTEe3JwGpOzBRw3s74I4q6-kZTMO-xYO7UCX4SWIqjESxcWPa0IOHVbSGCJDXNLYC7KsSO6taMoNbnvtLP-CdzjivkqNIEFhzgVUSB7qJtj5-cRbe-f8Z4A4_q2yGXCRmeUVwyPvU6u-lw=w2270-h1514-s-no-gm?authuser=0",
    description: "Érigée à partir de la fin du XIe siècle au pied du promontoire castral de Lavardin — classé parmi les Plus Beaux Villages de France —, l'église Saint-Genest est l'un des monuments les plus précieux et émouvants de l'art roman en Val de Loire. Bâtie en moyen appareil de pierre de tuffeau blonde, elle frappe d'abord par sa silhouette extérieure austère flanquée d'un puissant clocher-porche quadrangulaire d'allure défensive. Mais c'est une fois son portail franchi que le sanctuaire dévoile son trésor inestimable : une parure presque intégrale de peintures murales polychromes s'étendant du XIIe au XVIe siècle, redécouvertes au XIXe siècle sous un badigeon protecteur de chaux. Ces fresques magistrales illustrent avec une expressivité poignante le Christ en majesté entouré du tétramorphe et des apôtres dans le cul-de-four de l'abside, le martyre de saint Genest (comédien romain converti au christianisme sur scène), le supplice de saint Laurent sur son gril ardent ainsi qu'un saisissant Arbre de Jessé Renaissance ornant les collatéraux. Les piliers massifs de la nef s'ornent en outre de chapiteaux romans primitifs sculptés de masques grimaçants, d'entrelacs et d'animaux fantastiques.",
    visiter: "Pousser le vantail de bois sous le porche roman pour pénétrer dans une pénombre mystique révélant progressivement la splendeur ocre, rouge et blanche des pigments minéraux anciens. Avancer lentement dans la nef centrale pour détailler les scènes bibliques peintes à hauteur de regard sur les piles et les arcades, en s'attardant sur la douceur graphique des visages byzantins du XIIe siècle. Lever les yeux vers le chœur pour contempler l'immense mandorle du Christ bénissant entouré des symboles des quatre évangélistes, puis observer les chapiteaux corinthiens archaïques taillés dans la craie de tuffeau. Prendre le temps d'admirer les détails de la crucifixion et du Jugement Dernier peints sur les murs latéraux avant de ressortir admirer le chevet roman entouré du petit cimetière fleuri.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "lavardin_chateau_feodal",
    name: "Lavardin - Château Médiéval & Forteresse des Comtes de Vendôme",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Lavardin",
    altitude: 105,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Colossale sentinelle féodale réputée imprenable campée sur son éperon troglodytique",
    century: "XVe siècle",
    category: "chateau",
    counts: {},
    lat: 47.742150,
    lng: 0.882430,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOeA1ARNTDuwlVbsrfQ90nY7GreSQ_pG35VDLGjkISM2bfiTCwvRlrO0GXbABHsYsYj6f97m10kmtyScKz_qkCCItGeOMl9t1VDDPLUovyhIfl4ANp9uGw5_XaXt-T3mCNAUMkES3hHP_IigXIOjKqQig=w2270-h1514-s-no-gm?authuser=0",
    description: "Dressant ses vertigineuses ruines de pierre blanche au sommet d'une falaise de tuffeau surplombant les méandres du Loir, le château de Lavardin fut pendant des siècles le principal bastion militaire des comtes de Vendôme. Bâti dès le XIe siècle sur un site troglodytique déjà fortifié par les premiers seigneurs féodaux et sans cesse renforcé jusqu'au XVe siècle, ce colosse défensif était regardé comme l'une des forteresses les plus inexpugnables de France : il résista victorieusement en 1188 aux assauts furieux de Richard Cœur de Lion avant d'être finalement démantelé sur ordre d'Henri IV en 1590 après la capitulation de la Ligue catholique. L'ensemble conserve son colossal donjon quadrangulaire haut de vingt-six mètres, flanqué de tourelles en encorbellement et doté d'escaliers intérieurs taillés à même le roc. L'enceinte fortifiée étagée comprend trois lignes successives de remparts, de fossés creusés dans la roche vive, de ponts-levis dérobés et de souterrains refuges aménagés dans les entrailles de la colline de craie.",
    visiter: "Gravir le sentier d'accès ombragé qui monte en lacets raides depuis le vieux pont gothique sur le Loir pour franchir les portes fortifiées successives de l'enceinte basse. Pénétrer au cœur de la haute cour pour apprécier l'épaisseur herculéenne des courtines et explorer les salles voûtées du donjon orné de cheminées seigneuriales monumentales et de fenêtres à coussièges. S'engager avec prudence dans les galeries et couloirs troglodytiques creusés au Moyen Âge pour rejoindre les plateformes supérieures de tir, d'où se dévoile un panorama à couper le souffle embrassant les toits de tuiles brunes de Lavardin, le clocher de Saint-Genest et les collines verdoyantes de la vallée du Loir.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "troo_habitations_troglodytiques",
    name: "Trôo - Cité Troglodytique & Ruelles en Terrasses",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Trôo",
    altitude: 100,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Capitale troglodytique de la vallée du Loir étagée sur plusieurs niveaux de falaises",
    century: "XIIe siècle",
    category: "star",
    counts: {},
    lat: 47.776015,
    lng: 0.792536,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN9jfEJTaa9UP1Vm5tzh9ifgxT4zhwfNG2ArRTnSdW6QnMK2EyqY6zJXUZXGX3jk3j0ESgTjDoWnF34Tsn_PBivp8djnjbznMqAxMGijGYksX0BOGMEk6U6vUb7whGA9s-LNiUUJVT0wLWh3YW0okosDA=w2270-h1514-s-no-gm?authuser=0",
    description: "Accroché de façon spectaculaire à un amphithéâtre naturel de falaises de craie de tuffeau dominant le val de Loir, le village perché de Trôo est reconnu comme la capitale incontestée de l'habitat troglodytique dans la région. Véritable termitière humaine aménagée depuis l'époque médiévale, le coteau est percé sur trois à quatre niveaux superposés d'une infinité de cavités, d'anciennes carrières d'extraction de pierre, d'abris pastoraux et de demeures troglodytiques toujours habitées. Les façades en maçonnerie blanche de tuffeau semblent faire corps avec la falaise vivante, ne laissant souvent apparaître de l'extérieur qu'une porte de bois, des fenêtres grillagées et de pittoresques cheminées de briques jaillissant directement de la pelouse ou des jardins suspendus du niveau supérieur. Reliées entre elles par un labyrinthe de ruelles en pente douce, de sentiers d'escaliers taillés dans le rocher et de terrasses fleuries de rosiers grimpants et de vignes, ces habitations bénéficient d'une régulation thermique naturelle exceptionnelle, conservant une température constante d'environ douze à quatorze degrés tout au long de l'année.",
    visiter: "Arpenter le dédale piétonnier des ruelles étagées (rue Haute, rue du Château) pour observer la juxtaposition insolite des terrasses de jardins et des cheminées sortant de terre. Visiter la « Grotte Pétrifiante » avec ses concrétions calcaires millénaires et les reconstitutions muséographiques d'habitations troglodytiques d'autrefois aménagées avec leur mobilier d'époque, leurs fours à pain et leurs alcôves creusées dans la roche. Monter jusqu'au sommet de la butte féodale (le Tumulus ou Butte de Trôo) pour embrasser une vue panoramique grandiose sur les toits étagés du village, les eaux calmes du Loir bordées de peupliers et les horizons bocagers du Vendômois.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "troo_maladrerie_sainte_catherine",
    name: "Trôo - Maladrerie Sainte-Catherine",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Trôo",
    altitude: 72,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Vestiges d'une léproserie du XIIe siècle et sa chapelle romane aux fenêtres sculptées",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.776997,
    lng: 0.797877,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMenQ11CGeSqYWRaFfZuOXRIungOVCfuQZrGqpNI0UQRcJmKGUIrqpZk1hcmLNiyuTlkE_rW0IlMaAIb6a3QZkBNW4dRYCAk0mcpNRYZYFTc1WiJ5cp0W2-gvtR1F_X5og9dw2nWlaGpaESDS8fVuN4Gw=w2270-h1514-s-no-gm?authuser=0",
    description: "Établie à l'écart du bourg fortifié conformément aux règles sanitaires strictes du Moyen Âge, la maladrerie Sainte-Catherine de Trôo est l'un des rares et plus remarquables témoignages d'architecture hospitalière médiévale subsistant en Loir-et-Cher. Fondée au XIIe siècle sous le patronage des comtes de Vendôme et des seigneurs de Trôo au moment du retour des pèlerins et croisés de Terre sainte, cette léproserie accueillait et isolait les malades frappés par la lèpre le long de la route commerçante menant à Montoire. Le site conserve principalement les élégantes ruines de sa chapelle romane, remarquable par sa maçonnerie en calcaire de tuffeau régulier et son abside semi-circulaire. Sa façade et ses baies en plein cintre présentent une ornementation d'une finesse inattendue pour un établissement de réclusion médicale, soulignée par des cordons de billettes, des modillons sculptés de têtes animales stylisées et des archivoltes ornées de motifs géométriques romans.",
    visiter: "Approcher les vestiges de la chapelle médiévale depuis le chemin d'accès verdoyant pour observer l'ordonnancement de son chevet roman s'élevant au milieu des pelouses et des arbres fruitiers. Détailler la qualité de la sculpture sur pierre des baies cintrées, en examinant les décors géométriques et floraux qui encadrent les ouvertures où pénétrait la lumière du matin. S'imprégner de la quiétude mélancolique de ce lieu de mémoire et de compassion hospitalière d'autrefois, avant de poursuivre la marche vers le centre historique de Trôo ou le long des bords de la rivière.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "troo_collegiale_saint_martin",
    name: "Trôo - Collégiale Saint-Martin",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Trôo",
    altitude: 128,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Chef-d'œuvre du roman flamboyant couronnant la falaise avec ses stalles Renaissance",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.777435,
    lng: 0.792730,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP-M--MiaHZ7sZwZ0KM5aM7sV4IasTspAbsnkRnAIT2wMHAPkOaE58F1QmYv0lGz3dJI3IEKjP_FcIiiI18KBw__kCu-nJZksylvAYKyZpDLdJsoLhsVh_wXka2CREGILwGk6QExg0tq-XLnJw3YFZR4w=w2270-h1514-s-no-gm?authuser=0",
    description: "Trônant au point culminant du village sur la corniche rocheuse dominant le Loir, la collégiale Saint-Martin de Trôo est un monument majeur de l'art roman de transition vers le gothique Plantagenêt dans l'ouest de la France. Reconstruite à partir du milieu du XIIe siècle sous le règne d'Henri II Plantagenêt à l'emplacement d'un oratoire primitif fondé par saint Martin de Tours au IVe siècle, elle impressionne par la majesté de ses volumes et la blancheur lumineuse de son tuffeau. L'édifice est coiffé à la croisée du transept d'un clocher carré robuste couronné d'une flèche de pierre octogonale sculptée. À l'intérieur, la vaste nef à trois vaisseaux surprend par la richesse prodigieuse de sa sculpture ornementale : des dizaines de chapiteaux romans historiés déclinent un bestiaire fantastique de griffons, de sirènes, de lions affrontés et de scènes d'acrobates. Le chœur conserve en outre un ensemble exceptionnel de stalles en chêne du XVe siècle ornées de miséricordes sculptées de figures truculentes et satiriques inspirées de la vie quotidienne médiévale.",
    visiter: "Admirer depuis la place haute la pureté de la façade romane et les modillons sculptés qui soulignent les corniches du chevet. Pousser la porte pour découvrir l'enfilade lumineuse des travées couvertes de voûtes angevines et s'approcher des piliers pour examiner avec attention la virtuosité des chapiteaux romans aux thèmes symboliques et animaliers. Pénétrer dans le chœur pour contempler les stalles en bois sculpté, en soulevant délicatement les sièges pour observer la verve populaire des miséricordes gothiques illustrant les péchés capitaux et les proverbes du terroir vendômois. Terminer en faisant le tour de la terrasse extérieure pour jouir d'un belvédère spectaculaire plongeant sur la vallée du Loir.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "troo_porte_de_souge",
    name: "Trôo - Porte de Sougé & Remparts",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Trôo",
    altitude: 122,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Dernière porte fortifiée subsistante de l'enceinte castrale du XIIe siècle",
    century: "XIIe siècle",
    category: "star",
    counts: {},
    lat: 47.777447,
    lng: 0.791322,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOQR7tzxoUnxvdPYm_V4JPkxSm5WMxy5VYk2p3qsoGjJ6UBBIG7Cwjph9bCjxm7ZtuqPvms5TNRY_nObWXLq6egyZXXZVJtmN3rH7jGMIsWDvxcUpNOhtrG1sR3_N9gZ_uqzwzGXzFKIARMlEQlAtTPMw=w2270-h1514-s-no-gm?authuser=0",
    description: "Montant la garde sur le flanc occidental du plateau sommital, la porte de Sougé est le vestige fortifié le plus imposant et évocateur de l'ancienne enceinte castrale qui ceinturait la ville haute de Trôo au Moyen Âge. Érigée au cours du XIIe siècle pour protéger la forteresse et les chanoines de la collégiale face aux incursions ennemies venant de la province du Maine et du village voisin de Sougé, cette poterne fortifiée en moellons de tuffeau calcaire s'ouvre par une robuste arcade en arc brisé. La structure conserve l'emplacement des glissières de la herse d'arrêt en fer et les corbeaux de pierre qui soutenaient autrefois la passerelle de courtine et la bretèche de défense rapprochée. Enveloppée par la végétation et intégrée aux murets de soutènement des jardins suspendus, la porte marque une transition physique et visuelle saisissante entre les sentiers champêtres du plateau et le cœur historique pavé de la cité médiévale.",
    visiter: "Franchir l'arcade médiévale à pied pour apprécier l'épaisseur de la maçonnerie de pierre calcaire et scruter au-dessus du passage les rainures de guidage de la herse et les meurtrières de tir. Observer comment l'ouvrage s'appuie directement sur les failles naturelles du rocher de craie pour interdire tout contournement. Prendre le temps de suivre le sentier pédestre des remparts qui longe la corniche pour profiter de superbes points de vue sur les coteaux viticoles environnants et les maisons troglodytiques accrochées en contrebas.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "troo_le_puits_qui_parle",
    name: "Trôo - Le Puits qui Parle",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Trôo",
    altitude: 125,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Ouvrage hydraulique médiéval creusé à quarante-cinq mètres de profondeur produisant un écho légendaire",
    century: "XIIe siècle",
    category: "star",
    counts: {},
    lat: 47.778472,
    lng: 0.791725,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOXqydNR-4T34zvfkPmJefZ1ajBvf7xJ5CwSgXA-oteEqb1uooXkX00UJerrjJDPa61K-Unk1oQArRtbN6x0blXOb9AEX_SdwNvLeNCIiuGlTt4LsEo9BDOCTlsggJvjSlvHGnyLQeUNHkLdNL1K7Vfhw=w1611-h2416-s-no-gm?authuser=0",
    description: "Curiosité insolite et emblématique du folklore vendômois nichée sur la place haute de Trôo près du tumulus, le « Puits qui parle » est une prouesse d'excavation hydraulique creusée au cœur de la roche calcaire au XIIe siècle. Profond de près de quarante-cinq mètres pour atteindre la nappe phréatique au niveau du lit du Loir, ce puits communal avait pour fonction stratégique vitale d'assurer l'approvisionnement autonome en eau des habitants et de la garnison réfugiée sur la butte en cas de siège prolongé. Il doit son appellation mystérieuse à un phénomène acoustique naturel remarquable créé par la régularité cylindrique de son conduit vertical taillé dans le tuffeau : toute parole ou son émis au-dessus de la margelle est renvoyé avec une clarté saisissante par un écho sonore puissant et pur résonnant depuis les profondeurs abyssales. Une vieille légende populaire racontait autrefois que les fées ou les esprits du sous-sol répondaient ainsi aux questions des villageois qui osaient se pencher au-dessus de l'abîme.",
    visiter: "S'approcher de la margelle circulaire en pierre de taille protégée d'une grille de fer forgé et se pencher légèrement au-dessus de l'ouverture pour tester soi-même l'écho en prononçant quelques mots clairs vers le fond du puits. Écouter la voix revenir avec plusieurs secondes de décalage, amplifiée et modulée par la colonne d'air fraîche et humide montant du gouffre. Observer le treuil en bois à chaîne et la potence métallique qui servaient jadis à descendre les seaux d'eau, avant de contempler la table d'orientation et la vue dégagée sur le haut plateau céréalier et viticole s'étirant au nord du village.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "saint_jacques_des_guerets_eglise",
    name: "Saint-Jacques-des-Guérets - Église Saint-Jacques",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Saint-Jacques-des-Guérets",
    altitude: 68,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Halte jacquaire romane ornée de splendides fresques médiévales au bord du Loir",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.774120,
    lng: 0.795013,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOHtVYXuZuxvmr5iFGyLsHfZrGIvQoF_LoaVneKkXgLlAZh24I9qXX9JNtRsliwE3khORtS59Mip51_Ej__nMYxMcD7TIr5Flf-wswO4xVC-nRYlEaVuZdKndcGmTx0BQ-jUfGfLMOx-CJxrm4ZeAjpsQ=w2270-h1514-s-no-gm?authuser=0",
    description: "Établie dans un cadre bucolique au bord du Loir face à la falaise troglodytique de Trôo, l'église Saint-Jacques-des-Guérets est un sanctuaire roman intimiste qui jalonnait l'une des voies secondaires de pèlerinage menant vers Saint-Jacques-de-Compostelle. Érigée au début du XIIe siècle, cette église rurale à nef unique sans transept séduit par la pureté modeste de ses proportions et son abside semi-circulaire en cul-de-four couverte de tuiles plates. À l'intérieur s'est conservé un ensemble exceptionnel de fresques murales des XIIe, XIVe et XVe siècles d'un éclat et d'une fraîcheur chromatique rares, épargnées par le temps. Le cul-de-four présente un majestueux Christ pantocrator bénissant entouré du tétramorphe, tandis que les parois latérales déploient des cycles peints foisonnants illustrant le martyre de saint Jacques le Majeur, la Nativité, la Cène ainsi qu'une impressionnante résurrection des morts où les défunts sortent de leurs sépulcres au son de la trompette du Jugement Dernier.",
    visiter: "Pénétrer dans la nef unique baignée par la douce lumière filtrant des étroites fenêtres romanes en meurtrières pour contempler la richesse des pigments minéraux ocres, rouges et bruns ornant le chœur. Examiner le Christ en gloire de l'abside assis sur son trône céleste et s'attarder sur la scène de la Cène où les apôtres partagent le pain et le poisson sur une nappe blanche détaillée. Observer la statue en bois polychrome de saint Jacques pèlerin portant son bourdon et la coquille jacquaire, avant de sortir apprécier le calme champêtre des berges de la rivière et la vue frontale sur l'éperon crayeux de Trôo se découpant sur l'autre rive.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "couture_manoir_de_la_possonniere",
    name: "Vallée de Ronsard - Manoir de la Possonnière (Maison Natale de Ronsard)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Couture-sur-Loir",
    altitude: 78,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Demeure Renaissance sculptée de devises latines où naquit le prince des poètes en 1524",
    century: "XVIe siècle",
    category: "chateau",
    counts: {},
    lat: 47.746576,
    lng: 0.692344,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMbLO-TEHafBPiHTj4jUzDAxQc6p68G0LngYDuDB49mK2qrf1qikhWtJOqxqX2jImhBbljxI_Zw3-_-aFb8WtBwwpVawH4xVhsfN4WFM5r67wH_m6Pe-N8hrLerYS1Egc8Z7EOuxLTZnX7KPoCcBFXszQ=w2270-h1514-s-no-gm?authuser=0",
    description: "Niché dans un vallon intime et verdoyant à l'écart du bourg de Couture-sur-Loir, le manoir de la Possonnière est un chef-d'œuvre de la Première Renaissance française et le berceau poétique de Pierre de Ronsard, qui y vit le jour en septembre 1524. Reconstruit au tout début du XVIe siècle par son père Louis de Ronsard, chevalier revenant enrichi des guerres d'Italie menées auprès de Louis XII, le logis seigneurial s'adosse directement au coteau de tuffeau percé de pièces troglodytiques (cuisines, celliers et dépendances). La façade de tuffeau blanc est mondialement célèbre pour sa profusion de sculptures maniéristes à l'antique : médaillons de profils d'empereurs, rinceaux, cornes d'abondance et blasons royaux, accompagnés de sentences philosophiques et de devises humanistes gravées en grec et en latin (« Veritas filia temporis », « Avant partir »). C'est dans ce décor agreste, bercé par les murmures des sources et les ramures de la forêt de Gastine toute proche, que le futur « prince des poètes » puisa l'inspiration sensuelle et mélancolique de ses plus célèbres odes consacrées à Cassandre et à la rose éphémère.",
    visiter: "Traverser la cour d'honneur pour admirer le raffinement des fenêtres à meneaux sculptées et lire les maximes humanistes gravées dans la pierre au-dessus des linteaux de portes. Pénétrer dans le corps de logis pour visiter la chambre natale du poète ornée d'une splendide cheminée monumentale Renaissance, avant d'explorer les surprenantes pièces troglodytiques creusées à l'arrière dans la falaise de craie (cellier et four à pain). Déambuler dans le jardin d'inspiration Renaissance aménagé en terrasses, planté d'une roseraie exceptionnelle rassemblant des centaines de variétés de roses anciennes et modernes parfumées rendant un vibrant hommage poétique aux vers immortels de Ronsard.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "couture_l_isle_verte",
    name: "Vallée de Ronsard - L'Isle Verte (Site Poétique du Loir)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher",
    subdiv: "Couture-sur-Loir",
    altitude: 58,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Écrin fluvial et bucolique célébré par Ronsard au confluent du Loir et de la Braye",
    century: "",
    category: "star",
    counts: {},
    lat: 47.758137,
    lng: 0.697536,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOeb6Auqy2SJmvf6mAsawBTCWh5gYQdEzId6k1589d4TjxRpgU10-wReiX4A865p6JOs9FzCYU0jizDN7x03iVdTB9xsfqrsVYjO1rpuR0U25UzWbzfl0ZTDxpIXr8-Ggfe33CeYhqjmP3VXBg8V89PvA=w2270-h1514-s-no-gm?authuser=0",
    description: "Havre naturel et paisible baigné par les eaux limpides du Loir au point où la rivière s'élargit en multiples bras entourés d'îlots alluviaux, l'Isle Verte est un lieu hautement symbolique de la mémoire littéraire française. Situé à quelques kilomètres en aval du manoir natal de la Possonnière, cet écrin de verdure ombragé d'aulnes, de saules pleureurs et de frênes était la promenade de prédilection de Pierre de Ronsard, qui venait s'y recueillir pour lire les auteurs classiques grecs et latins et composer ses églogues pastorales. Séduit par la grâce mélancolique de cette île fluviale bercée par le clapotis de l'eau, le poète avait explicitement choisi ce site enchanteur pour y établir sa dernière demeure terrestre, demandant en vers célèbres qu'on lui donne un sépulcre « en cette isle verte où la course entr'ouverte du Loir autour coulant est accolant ». Bien que sa sépulture définitive ait finalement été érigée au prieuré Saint-Cosme près de Tours, l'Isle Verte conserve intacte son aura poétique et son atmosphère romantique intemporelle.",
    visiter: "Rejoindre cet îlot de fraîcheur par la passerelle de bois ou les sentiers herbeux bordant la rive pour une promenade ressourçante au fil de l'eau. S'asseoir sur les bancs disposés sous la frondaison des grands saules pour écouter le chant des passereaux et le clapotis du courant se faufilant entre les herbiers aquatiques. Relire les poèmes de la Pléiade gravés sur les pupitres d'interprétation littéraire jalonnant le parcours paysager, et profiter de la quiétude des rives pour observer le vol des martins-pêcheurs et les reflets dorés des coteaux crayeux dans la rivière.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "ponce_eglise_saint_julien",
    name: "Poncé-sur-le-Loir - Église Saint-Julien",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Poncé-sur-le-Loir",
    altitude: 64,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Monument roman du XIIe siècle conservant d'exceptionnelles fresques de combats chevaleresques",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.763133,
    lng: 0.657847,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP6BUIlUggN4tGKb7j0TOOlcpL6licj72_Sf_pVYbQyrGp799lvdpKB034truYluT5CpGj-3OG2PmRpCCknLTFldRqYeYv9jzm2aRxMIDppUlJhHy-F2k51wFU3vePbtVoosahoRiH2cNtAsjPT3e2leQ=w2270-h1514-s-no-gm?authuser=0",
    description: "Édifiée au XIIe siècle sur une terrasse dominant la vallée du Loir dans le charmant village d'artisanat d'art de Poncé-sur-le-Loir, l'église Saint-Julien est l'un des sommets les plus originaux de la fresque romane en France. D'une facture extérieure sobre en calcaire de tuffeau flanquée d'un clocher carré à baies géminées, elle abrite sous sa nef lambrissée un cycle pictural continu d'une valeur historique et iconographique inestimable, peint vers 1180. Contrairement aux programmes religieux traditionnels, les parois supérieures de la nef déploient sur plusieurs registres une spectaculaire épopée guerrière et chevaleresque contemporaine des croisades : on y contemple des charges furieuses de cavaliers en cottes de mailles munis de heaumes à nasal, de longues lances et d'écussons normands, combattant au corps à corps sous des châteaux forts à créneaux. Associées à des scènes du Nouveau Testament, à un combat d'archers et à des travaux des mois, ces peintures murales d'une vivacité narrative saisissante offrent un témoignage visuel direct de l'idéal chevaleresque et des tactiques militaires sous la dynastie des Plantagenêt.",
    visiter: "Entrer dans la nef unique pour être accueilli par le spectaculaire défilé des fresques médiévales peintes en ocre rouge et jaune sur le mur nord. Munissez-vous de jumelles ou levez le regard pour observer la minutie des détails d'armement des chevaliers médiévaux : observer les caparaçons des chevaux, les épées tirées au clair et les bannières flottant au vent lors du siège de la forteresse. Découvrir ensuite le cycle religieux du chœur illustrant le Jugement Dernier et les vieillards de l'Apocalypse, avant de ressortir admirer le panorama champêtre sur le clocher et le château Renaissance voisin réputé pour son monumental escalier sculpté.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "vallee_du_loir_caves_troglodytiques",
    name: "Vallée du Loir - Caves Troglodytiques & Tuffières de Ruillé",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Ruillé-sur-Loir",
    altitude: 70,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Réseau séculaire de galeries souterraines taillées dans la craie pour l'élevage des vins de Jasnières",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 47.728712,
    lng: 0.591678,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOCIAIrxZ97aaCZDbOanvSmBkCeJveBFVuVoSyfFCsskQF1KAXRd6fF_pDYPORlcMviBjqYbV0dQuGjATJtnpfTyUVsR3U5eDCdqdqxeAczzLWBJurnAbkX0UipVf8LMJ5joQFFCE80JOHFHImdOpLH6Q=w2270-h1708-s-no-gm?authuser=0",
    description: "Creusées à flanc de coteau dans l'épaisseur de la falaise de craie turonienne le long des méandres du Loir entre Ruillé et La Chartre, les caves troglodytiques constituent un patrimoine paysager, artisanal et géologique emblématique du vignoble de Jasnières et des Coteaux-du-Loir. Extraite dès le Moyen Âge et la Renaissance pour fournir la pierre de taille de tuffeau blanc nécessaire à l'édification des châteaux et abbayes de la région, cette roche sédimentaire a laissé place à des kilomètres de galeries obscures et de salles voûtées souterraines. Les vignerons et paysans locaux se sont promptement approprié ces excavations pour en faire des caves de vinification et de vieillissement idéales, où l'hygrométrie constante et la fraîcheur naturelle permettent au cépage roi, le chenin blanc, de s'épanouir lentement en fûts de chêne pendant des décennies. Les entrées de caves, maçonnées en pierres de taille rustiques fermées de lourdes portes en bois clouté et tapissées de lierres et de clématites, composent une ligne continue d'échoppes troglodytiques et d'habitats rupestres pittoresques enchâssés sous les vignes.",
    visiter: "Parcourir à pied ou à vélo la route des caves sinuant au pied des coteaux viticoles ensoleillés pour observer l'alignement des portes de caves creusées dans la craie vive. Pousser la porte d'un domaine viticole troglodytique pour ressentir la fraîcheur bienfaisante des entrailles de tuffeau et contempler l'enfilade des fûts et des bouteilles couvertes d'une noble poussière sous les voûtes de pierre. Découvrir les traces de pics laissées sur les parois par les carriers d'autrefois, comprendre le travail du vigneron pour élever les grands crus blancs de Jasnières aux arômes de pierre à fusil et de miel, et déguster les cuvées locales dans une ambiance minérale et authentique.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
  {
    id: "lhomme_dolmen_de_maupertuis",
    name: "L'Homme - Dolmen de Maupertuis (L'Aître aux Fées)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Lhomme",
    altitude: 135,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Monument mégalithique circulaire du Néolithique entouré de légendes féeriques",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.768581,
    lng: 0.586395,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMQ6mBu6L-M7pCXJDiqci6-hD7dGUyTH-sYIWXMYyYnWD7nsBVcScEJAU-mUusTDD6-P1iTA6bolk1AEEqKscUPPVwz1B3zRxbVjkj6efiUjgr1HpLjvKZt-Fm11hW28lQTku_n66BZAJeiRhJ_TXsspA=w1818-h2416-s-no-gm?authuser=0",
    description: "Dressé sur le plateau boisé dominant les vignobles réputés de Jasnières sur le territoire communal de Lhomme, le dolmen de Maupertuis — également connu sous le nom enchanteur d'« Aître aux Fées » — est l'un des monuments mégalithiques les plus originaux et intrigants du département de la Sarthe. Érigée au Néolithique il y a plus de quatre mille cinq cents ans par les premières communautés agropastorales installées sur les hauteurs de la vallée du Loir, cette sépulture collective en grès roussard local et poudingue quartzeux se singularise par son architecture circulaire rare, évoquant un coffre funéraire de plan arrondi entouré de blocs périphériques. Enchâssé dans un bosquet préservé à la croisée des chemins de vignes, le monument a suscité d'abondantes légendes populaires : la mémoire orale rapportait ainsi que les fées de la vallée s'y donnaient rendez-vous aux douze coups de minuit pendant les nuits de carême pour y danser et filer leur quenouille magique à l'abri des regards profanes.",
    visiter: "Rejoindre le site en suivant le sentier de randonnée pédestre balisé qui traverse les parcelles de vignes de l'AOC Jasnières depuis le belvédère sommital. Découvrir la chambre mégalithique lovée sous les chênes et les fougères, en observant l'agencement circulaire des dalles brutes de roussard et la puissante table de couverture patinée par les millénaires. Prendre le temps de faire le tour du monument pour ressentir l'aura mystique de ce lieu d'inhumation préhistorique, avant de poursuivre la balade le long de la ligne de crête pour admirer le panorama dégagé sur les coteaux viticoles dévalant vers la vallée du Loir.",
    link: "https://photos.google.com/share/AF1QipNwFGIRLzJ6bi3ZsThNM3gZPrwtI7ThTtgASFmQVOmxVzCuf-D1aRr2evmY9XTvtA?key=V1pNb1A5c1FsVHRRdkhOdWs3TFQ3S182T1dGOTVR"
  },
   {
    id: "asco_station_du_haut_asco",
    name: "Asco - Station de Ski du Haut-Asco (Stazzona d'Ascu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Asco",
    altitude: 1422,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Bout du monde d'altitude dominé par les géants de rhyolite du massif du Cinto",
    century: "XXe siècle",
    category: "rando",
    counts: { rando: 1 },
    lat: 42.399916,
    lng: 8.918855,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPSji_pjlY_1Haseb309DokWSbpdKj8n5jeCgWYknG7H3Z6kS_vAL8RQhyqLKVi-bpKYD2-ejAAPKbVtVmrUuCMNW02GKkEboeFYmxED4LpDHUGtyE7IXSz7dZ0Htr01YTqYuc821Q6iYbMrfxKMiVELA=w2918-h1946-s-no-gm?authuser=0",
    description: "Niché au fond d'un cirque glaciaire grandiose et minéral à plus de mille quatre cents mètres d'altitude, le plateau du Haut-Asco (Stazzona) est le terminus spectaculaire de la vertigineuse route qui remonte les gorges encaissées de l'Asco. Dominé par la muraille vertigineuse du Monte Cinto — point culminant de la Corse s'élevant à 2 706 mètres — et par les arêtes déchiquetées de la pointe des Éboulis et du Capu Borba, ce site de haute montagne sauvage constitue une porte d'entrée majeure vers l'univers alpin insulaire. Ancienne station pionnière des sports d'hiver en Corse créée dans les années 1960 puis réhabilitée avec son téléski moderne et son espace d'apprentissage, le Haut-Asco est surtout mondialement célèbre auprès des passionnés de grande randonnée : c'est ici que fait escale le mythique sentier du GR20, servant de camp de base incontournable après le franchissement de la pointe des Éboulis qui a remplacé le franchissement historique du dangereux cirque de la Solitude. Le paysage, d'une rudesse austère et poétique, est composé d'éboulis de rhyolite pourpre, de névés tardifs et d'une forêt d'altitude de pins laricio centenaires aux troncs massifs tordus par les rigueurs du vent et de la neige.",
    visiter: "Arriver par la route en lacets qui serpente le long du torrent pour déboucher sur le cirque sommital et embrasser d'un regard l'écrasante forteresse de pierre rouge du massif du Cinto. S'équiper pour une randonnée en suivant les balises blanches et rouges du GR20 qui grimpent hardiment vers la passerelle suspendue du vallon de Tighiettu ou s'engager sur la voie normale montant vers le sommet du Monte Cinto pour les montagnards chevronnés. Prendre le temps d'observer le vol majestueux du gypaète barbu et de l'aigle royal tournoyant au-dessus des crêtes escarpées, ou chercher les silhouettes agiles des mouflons corses sur les vires rocheuses supérieures. S'accorder une halte revigorante au refuge et gîte d'étape du Haut-Asco pour goûter à l'atmosphère chaleureuse des fins d'étapes alpines, avant de contempler au crépuscule les teintes embrasées du granite et de la roche volcanique s'éteignant sous le ciel étoilé de haute altitude.",
    link: "https://photos.google.com/share/AF1QipOJpzCMLUGUygur3jLUW9WSl9TvdalRDGgg_gU5_5-sQAHBbi8yQJ7Zrwv5fNJM8Q?key=R1BrQUxnTnJWd3VxcjNTa3FId0J3U08zMFR6dFNB"
  },
   {
    id: "lucciana_embouchure_du_golo",
    name: "Lucciana - Embouchure du Golo & Cordon Lagunaire",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Lucciana",
    altitude: 1,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Estuaire sauvage du plus long fleuve de Corse et réserve ornithologique",
    century: "",
    category: "plage",
    counts: {},
    lat: 42.523576,
    lng: 9.533545,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNSh6LgICDyjk6vBXH4tWw7-KIHY0sSQ0qUFaiHqay56d5WtVyMHaNFRBKrHy6Q08d3gQDbbqbLTpfqftZwoEvMEadr-0us2oM8Kcspd6cihOiSFkt2Abu4s9YbE0l7FxIwfuwJbqOtqdKTrg3r54Jgvw=w2918-h2198-s-no-gm?authuser=0",
    description: "Point de rencontre majestueux entre les eaux vives descendues des plus hauts massifs de l'île et les flots turquoise de la mer Tyrrhénienne, l'embouchure du Golo constitue un écosystème estuarien et dunaire d'une richesse écologique majeure sur la côte orientale corse. Long de près de quatre-vingt-dix kilomètres depuis ses sources sous le Monte Cinto, le fleuve achève ici sa course en façonnant un vaste delta alluvial sablonneux et galeteux constamment remodelé par les crues d'hiver et la houle littorale. Marquant la terminaison méridionale du lido de la Marana qui enserre l'étang de Biguglia, cette zone humide protégée abrite une mosaïque de sansouïres, de lagunes saumâtres temporaires et de cordons de dunes mobiles fixés par les oyats, les tamaris et les panicauts maritimes. Sanctuaire naturel de premier ordre intégré au réseau Natura 2000, l'estuaire sert d'escale migratoire et de site de nidification indispensable pour une multitude d'oiseaux d'eau, dont les sternes naines, les gravelots à collier interrompu, les flamants roses et diverses espèces de canards et de hérons.",
    visiter: "Gagner l'extrémité sud de la piste littorale de la Marana ou cheminer depuis le site archéologique de Mariana pour atteindre les bancs de sable sauvages de l'embouchure. Suivre le cordon dunaire à pied entre le fleuve et la mer pour observer les spectaculaires accumulations de bois flotté sculptées par les embruns et l'eau douce. Déployer des jumelles pour une séance d'ornithologie discrète en contemplant les colonies de limicoles et d'échassiers se nourrissant dans les hauts-fonds sablonneux. Prendre le temps d'admirer le contraste saisissant entre l'immensité marine d'un côté et, de l'autre, la barrière montagneuse majestueuse du San Petrone et du Cap Corse qui se détache à l'horizon.",
    link: "https://photos.google.com/share/AF1QipOEiAKxgLl8RSsod8nu9CDvC98IcAkvUQYDlBS6SI578AmSnYCPN0_df52HGiK7tQ?key=ZVpaTXptb1lxMTFQa1EwUThEVm5oWi1xc1hJdVpn"
  },
  {
    id: "lucciana_fosse_de_civattone",
    name: "Lucciana - Fosse de Civattone (U Civattone)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Lucciana",
    altitude: 2,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Canal historique de drainage et zone humide côtière de la plaine de la Marana",
    century: "",
    category: "star",
    counts: {},
    lat: 42.521315,
    lng: 9.532874,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPNq6yO-OhERQELg1kWRTKNurf1oeKERqvihYkUwwoo8yQrR4g1gWF-w3J3lZ17YjtqYqfhAk0UwHy2X7TkgCmE_XSAXlWCMdv-q8W1Ak8-QfDRT4or2sS_09_Erey4L9g7o6DM_Too-2Y5Qv8HGeGi1w=w2918-h2198-s-no-gm?authuser=0",
    description: "Sinuant entre les terres alluviales de la basse plaine agricole de Lucciana et le cordon dunaire littoral, le fossé de Civattone est un exutoire aquatique naturel et aménagé témoignant de la longue histoire de bonification de la plaine orientale corse. Jadis vaste étendue marécageuse et insalubre propice au paludisme avant les grands travaux d'assainissement entrepris dès l'époque romaine puis amplifiés au XIXe et au milieu du XXe siècle par la SOMIVAC, ce réseau de cours d'eau lent et de fossés drainants capte les ruissellements des coteaux pour les acheminer vers le milieu marin. Ses berges bordées d'épaisses roselières de phragmites, de joncs maritimes et de rideaux d'aulnes et de peupliers forment une ripisylve d'une vitalité remarquable, offrant un corridor biologique indispensable au cœur du paysage agricole. Le plan d'eau calme du Civattone accueille une riche faune aquatique dulcicole et saumâtre, comprenant la cistude d'Europe (tortue d'eau douce protégée), l'anguille européenne ainsi que de nombreuses espèces d'amphibiens et d'odonates.",
    visiter: "Parcourir les sentiers de terre longeant les berges calmes du fossé pour apprécier la fraîcheur ombragée des alignements d'arbres bordant le coursier d'eau. Observer attentivement les troncs immergés et les berges ensoleillées pour tenter d'apercevoir la cistude d'Europe prenant le soleil sur les bois morts. Profiter de la quiétude des lieux pour écouter les chants de la rousserolle effarvatte dissimulée dans les roseaux et observer le vol stationnaire des libellules au-dessus de l'eau miroitante, avant de déboucher sur la plage de sable sauvage toute proche pour contempler le large.",
    link: "https://photos.google.com/share/AF1QipOEiAKxgLl8RSsod8nu9CDvC98IcAkvUQYDlBS6SI578AmSnYCPN0_df52HGiK7tQ?key=ZVpaTXptb1lxMTFQa1EwUThEVm5oWi1xc1hJdVpn"
  },
  {
    id: "castellare_di_casinca_plage_pinarello",
    name: "Castellare-di-Casinca - Plage de Pinarello (Anghione)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Castellare-di-Casinca",
    altitude: 1,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Vaste étendue sauvage de sable blond bordée par la pinède maritime de Casinca",
    century: "",
    category: "plage",
    counts: {},
    lat: 42.488768,
    lng: 9.530163,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOqI9F88w8G29543Vyd0FEwrCJkPgSapdY5bF4cyMtwM5aqs6BCdU_sxCVVNFRqoINr_FooAegAPxVARQE2HuqfFRZ4J--7b1IaxkR4xT8thi_itCOsPTqYfue2O1XkWvrcipyBFt8skG2e5hvJ4wwNcQ=w2918-h2198-s-no-gm?authuser=0",
    description: "S'étirant avec majesté sur le littoral oriental au niveau du débouché maritime de Castellare-di-Casinca et du domaine d'Anghione, la plage de Pinarello déploie une immense étendue de sable fin et blond baignée par les eaux calmes de la mer Tyrrhénienne. À l'écart des concentrations urbaines et des ports bétonnés, ce rivage préservé tire son charme authentique de son arrière-plage boisée, où une splendide pinède de pins maritimes et de pins parasols odorants apporte une ombre bienfaisante et un parfum résineux entêtant sous la chaleur estivale. Le cordon sablonneux s'étend en pente douce dans une eau d'une grande limpidité, offrant un espace de respiration naturelle exceptionnel balayé par les brises thermiques marines. Le site conserve un caractère résolument sauvage et aéré, où les banquettes de posidonies séchées déposées par les tempêtes hivernales témoignent de la parfaite santé des herbiers marins au large et jouent leur rôle écologique protecteur contre l'érosion du trait de côte.",
    visiter: "Accéder au rivage en empruntant les sentiers sablonneux serpentant sous les frondaisons ombragées de la pinède littorale. Poser sa serviette sur le sable doux pour profiter d'une baignade sécurisante et agréable grâce à l'entrée dans l'eau très progressive, idéale pour la nage et le farniente en famille. Longer la plage à pied sur plusieurs kilomètres au ras des vagues irisées en profitant d'une vue dégagée vers l'archipel toscan par temps limpide, tout en observant en arrière-plan les pittoresques villages perchés de Casinca (Castellare, Sorbo-Ocagnano, Penta-di-Casinca) accrochés aux crêtes verdoyantes du Monte San Petrone.",
    link: "https://photos.google.com/share/AF1QipOEiAKxgLl8RSsod8nu9CDvC98IcAkvUQYDlBS6SI578AmSnYCPN0_df52HGiK7tQ?key=ZVpaTXptb1lxMTFQa1EwUThEVm5oWi1xc1hJdVpn"
  },
   {
    id: "paris_musee_du_louvre",
    name: "Paris - Musée du Louvre & Cour Napoléon",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Île-de-France",
    department: "Paris",
    subdiv: "Paris (1er arrondissement)",
    altitude: 35,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Ancien palais royal des rois de France devenu le plus grand musée d'art du monde",
    century: "XVIIe siècle",
    category: "musee",
    counts: {},
    lat: 48.861016,
    lng: 2.335836,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP1oh1WfEZsvZzftCOmg6qdqwa4ZBQUOcbPTDZUFiIBd-a3VS7udnEz3-KwIXQClzDqNOQCBbO_xcaFPmcZsPKB1eaVa7TimG9AmM5csUCfqqfOjY4CdNFuA1AXEqTsLiz_f0J2HJjHKprcabyzY524JA=w1818-h2416-s-no-gm?authuser=0",
    description: "Cœur battant de l'histoire de France et plus vaste musée d'art et d'antiquités au monde, le palais du Louvre déploie ses imposantes façades de calcaire lutécien le long de la rive droite de la Seine. À l'origine puissante forteresse médiévale édifiée par Philippe Auguste à la fin du XIIe siècle pour prémunir Paris des assauts anglo-normands, le site fut métamorphosé en fastueuse résidence royale par Charles V, puis totalement réinventé à la Renaissance par Pierre Lescot sous François Ier et Henri II. Agrandie siècle après siècle par la construction de la Grande Galerie sous Henri IV, le développement de la Cour Carrée et l'achèvement des ailes néoclassiques sous Napoléon III, cette immense cité palatiale s'est ouverte au public comme musée national en 1793 en pleine Révolution française. Au centre de la cour Napoléon trône la magistrale Pyramide de verre et d'acier inaugurée en 1989, chef-d'œuvre contemporain conçu par l'architecte Ieoh Ming Pei qui dialogue avec les pavillons classiques. Les collections encyclopédiques du Louvre embrassent plus de neuf mille ans d'histoire humaine à travers ses départements d'Orient ancien, d'Égypte pharaonique, de Grèce et Rome antiques, d'arts de l'Islam, de sculptures, d'objets d'art et de peintures maîtresses.",
    visiter: "Traverser la cour Napoléon pour admirer le contraste géométrique et lumineux entre la Pyramide de verre de Pei et les sculptures baroques couronnant les pavillons Sully, Richelieu et Denon. Pénétrer dans le hall d'accueil sous la pyramide pour descendre vers les vestiges imposants du Louvre médiéval et contempler les fossés d'origine ainsi que la base du donjon circulaire de Philippe Auguste. Gravir le grand escalier Daru pour être accueilli par le souffle triomphal de la Victoire de Samothrace déployant ses ailes de marbre au sommet de sa proue navale, avant de gagner la galerie d'Apollon pour admirer les joyaux de la Couronne de France sous les ors d'Eugène Delacroix. Découvrir la Grande Galerie et la salle des États abritant La Joconde de Léonard de Vinci, La Vierge aux rochers et Le Sacre de Napoléon par Jacques-Louis David, puis terminer par l'exploration intimiste des salles des antiquités égyptiennes réunissant le célèbre Scribe accroupi et les grands sphinx de granit.",
    link: "https://photos.google.com/share/AF1QipN06BoIewxOPodz_aFjBmlOvWEHUAvIfN39qF4PipgAOGHNnFVEcesnjhuflQT39w?key=cEtvdVYzU2VYc0ZjSERicmlyOHIxM0laMVVkTTNB"
  },
  {
    id: "paris_eglise_saint_germain_l_auxerrois",
    name: "Paris - Église Saint-Germain-l'Auxerrois",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Île-de-France",
    department: "Paris",
    subdiv: "Paris (1er arrondissement)",
    altitude: 34,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Paroisse historique des rois de France face à la colonnade du Louvre",
    century: "XVe siècle",
    category: "religieux",
    counts: {},
    lat: 48.859574,
    lng: 2.341027,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP_3kfEljQsn8ApIZygUDZadQBM8pNHJt9oktoWbu2y2SLjWGFNWmn6nrPBvU6EFgHwbfX0FPMTxO8o0IWjWmEF-RCTRFrUk1oCKylXMbBuMmV6wHIXNHjSn0s7GQ-_I44E4QfNP898GiANXBbJBFGZBw=w1818-h2416-s-no-gm?authuser=0",
    description: "Dressée directement face à la colonnade orientale du palais du Louvre dessinée par Claude Perrault, l'église Saint-Germain-l'Auxerrois est l'un des sanctuaires médiévaux les plus chargés d'histoire de Paris. Fondée dès l'époque mérovingienne sous l'invocation de saint Germain d'Auxerre, l'église fut entièrement reconstruite du XIIe au XVe siècle dans un somptueux style gothique flamboyant. Sa façade ouest est précédée d'un porche exceptionnel à cinq arcades ajourées bâti entre 1435 et 1439 par maître Jean Gauvain, surmonté d'une élégante rose et bordé de gargouilles expressives. Devenue la paroisse attitrée des rois Valois puis Bourbon résidant au Louvre, Saint-Germain-l'Auxerrois entra tragiquement dans les annales dans la nuit du 23 au 24 août 1572 : c'est le tocsin de sa cloche Marie qui donna le signal funeste du massacre de la Saint-Barthélemy ordonné contre les chefs protestants. Abrite de nombreuses sépultures d'artistes et d'architectes royaux (comme François Boucher, Jean-Baptiste Chardin ou Louis Le Vau), l'église présente une nef élancée, un remarquable chœur canonial ainsi qu'un beffroi néogothique flamboyant érigé au XIXe siècle par Théodore Ballu entre le sanctuaire et la mairie du premier arrondissement.",
    visiter: "Observer depuis la place du Louvre le grand porche flamboyant à cinq baies en arc brisé, en scrutant les statues de saints couronnant les contreforts et les voussures ciselées de rinceaux végétaux et de scènes bibliques. Franchir les portails pour apprécier l'harmonieuse ordonnance de la nef gothique et découvrir le banc d'œuvre monumental en chêne sculpté exécuté en 1682 par Le Brun et Le Pautre, où prenaient place le roi et la famille royale lors des grandes cérémonies. Parcourir le déambulatoire pour contempler le retable flamand en bois doré du début du XVIe siècle sculpté de bas-reliefs consacrés à la Passion, admirer les vitraux anciens mêlant grisailles du XIIIe siècle et panneaux flamboyants, puis se recueillir dans la chapelle de la Vierge renommée pour sa pietà et sa statuaire médiévale.",
    link: "https://photos.google.com/share/AF1QipN06BoIewxOPodz_aFjBmlOvWEHUAvIfN39qF4PipgAOGHNnFVEcesnjhuflQT39w?key=cEtvdVYzU2VYc0ZjSERicmlyOHIxM0laMVVkTTNB"
  },
   {
    id: "rouen_cathedrale_notre_dame",
    name: "Rouen - Cathédrale Notre-Dame",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 15,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Chef-d'œuvre du gothique immortalisé par Claude Monet et plus haute flèche de France",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 49.440310,
    lng: 1.095031,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNRlSoDyiK6ow8pavUAL4SatLiHNfFsXbT_qLE34K2lodEisdJjpUQad5A66h-uPAWfhb-WgVBaNVj3hL636YNrvG6aCBoxnCLbEdU7RSwWjzN5cog5XPs5YPnniiLmossh0Jgj5gMohM9NXQOmIjM6RA=w1818-h2416-s-no-gm?authuser=0",
    description: "Cœur spirituel battant de la Normandie et monument insigne de l'art médiéval européen, la primatiale Notre-Dame de Rouen déploie une façade occidentale d'une richesse ornementale prodigieuse, véritable dentelle de pierre où s'entremêlent toutes les étapes du gothique, depuis le premier art ogival du XIIe siècle jusqu'aux rinceaux flamboyants et aux dais ciselés de la Renaissance. Encadrée par la tour Saint-Romain d'époque romane tardive et la tour de Beurre érigée au début du XVIe siècle grâce aux dispenses de carême, elle est couronnée en sa croisée du transept par une monumentale flèche en fonte de fer ajourée culminant à plus de cent cinquante et un mètres, ce qui en fait la plus haute flèche d'église de France. Immortalisée par Claude Monet dans sa célébrissime série de trente toiles peintes entre 1892 et 1894 captant les métamorphoses de la lumière selon les heures du jour, la cathédrale est aussi un haut lieu de l'histoire ducale : son déambulatoire conserve les tombeaux des premiers ducs normands, dont le gisant de Rollon, premier chef viking sédentarisé, ainsi que le réceptacle de plomb renfermant le cœur embaumé du roi Richard Cœur de Lion.",
    visiter: "Se poster sur la place de la Cathédrale pour contempler la façade occidentale et chercher à retrouver les angles de vue et les variations chromatiques explorés par Claude Monet depuis l'ancienne mercerie en face. Franchir le portail central pour apprécier la verticalité vertigineuse de la nef s'élevant sur quatre niveaux et admirer le spectaculaire escalier des Libraires menant à la bibliothèque capitulaire. Faire le tour du déambulatoire pour se recueillir devant les gisants de Rollon et de Richard Cœur de Lion, examiner le somptueux tombeau Renaissance des cardinaux d'Amboise sculpté par Roulland Le Roux, puis lever les yeux dans la croisée du transept pour admirer l'intérieur de la tour-lanterne baignée de clarté zénithale.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_eglise_saint_maclou",
    name: "Rouen - Église Saint-Maclou",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 14,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Parangon absolu du gothique flamboyant normand au porche pentagonal ajouré",
    century: "XVe siècle",
    category: "religieux",
    counts: {},
    lat: 49.439858,
    lng: 1.098332,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMPc5nTqktdCLFpNp4kklPKh6M_RyBY25YH3InmuCHM9P7OJMReTr854pPE8q2WyYcFQrok-4-4S8qebVLInl_pHtmWueBuqMaXH3Teh2-CZGonKZic2aBkIw-76BgExT4Rpxh0-PCUIGp3rFUscp3gyg=w1818-h2416-s-no-gm?authuser=0",
    description: "Érigée entre 1437 et 1521 au cœur d'un quartier d'artisans drapiers et d'orfèvres en pleine effervescence économique, l'église Saint-Maclou est universellement regardée comme l'un des joyaux les plus parfaits et virtuoses du gothique flamboyant en France. Dessinée par le maître d'œuvre Pierre Robin, elle se distingue dès le premier regard par sa façade occidentale extraordinaire, précédée d'un porche convexe cintré à cinq pans entièrement ajouré, surmonté de gâbles effilés à redents et de pinacles découpés comme une résille d'orfèvrerie. Les trois portails abritent des vantaux en chêne sculptés vers le milieu du XVIe siècle dans le style maniériste attribué à Jean Goujon, illustrant la circoncision, le baptême du Christ et la mort de la Vierge. Couronnée par une tour-lanterne ajourée que coiffe une flèche octogonale en pierre reconstruite au XIXe siècle, la nef présente des proportions d'un équilibre absolu, où les nervures des croisées d'ogives retombent avec fluidité sans chapiteaux le long de colonnes fasciculées.",
    visiter: "Admirer depuis la place Saint-Maclou la silhouette mouvementée du porche courbe et s'approcher pour contempler la finesse sculpturale des panneaux de bois des vantaux de la Renaissance. Pénétrer dans la nef pour ressentir la pureté élancée du gothique flamboyant et découvrir les fonts baptismaux ainsi que le monumental escalier d'accès à la tribune d'orgue, chef-d'œuvre de menuiserie gothique en chêne sculpté sans aucun clou métallique. Découvrir les chapelles rayonnantes pour admirer les verrières anciennes du XVe siècle teintées de jaune d'argent et de bleu cobalt, avant de contourner le chevet extérieur pour observer l'harmonie des arcs-boutants retombant sur les toits des maisons avoisinantes.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_place_barthelemy",
    name: "Rouen - Place Barthélémy & Quartier Saint-Maclou",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 14,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Carrefour médiéval pavé bordé de remarquables maisons à pans de bois et encorbellements",
    century: "XVe siècle",
    category: "star",
    counts: {},
    lat: 49.439896,
    lng: 1.097805,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN9irU5aMivXqq0eZ0Rg4hw1RHH-_R4qSl8HlrSaaltkfDdSYrM83U0v4nHJ-PdIrtlq_OKUCO2OzEHyFMys84ic61kKYXI1rBRTNDpoCDNvd81XEuCT6nk2QSUjyLdxvR4rJZyXygRkDUZizI9pNavqA=w1818-h2416-s-no-gm?authuser=0",
    description: "S'ouvrant face au porche dentelé de l'église Saint-Maclou, la place Barthélémy est l'un des espaces urbains anciens les plus pittoresques et cinématographiques de la métropole normande. Pavée à l'ancienne et préservée des modernisations destructrices, elle est ceinte d'un exceptionnel alignement de maisons bourgeoises des XVe et XVIe siècles bâties à pans de bois apparents, dont les étages successifs avancent hardiment en encorbellement au-dessus de la chaussée pour gagner de précieux mètres carrés. Les sablières, sommiers et poteaux d'angle en chêne y sont ornés de bas-reliefs sculptés représentant des feuillages, des visages grotesques, des animaux fabuleux et des figures de corporations marchandes. Ce carrefour piétonnier, où déboulent de petites venelles pavées bordées de boutiques d'antiquaires, de galeries d'art et de salons de thé, restitue avec une authenticité poignante la trame urbaine de la cité aux cent clochers telle que l'arpentaient les Rouennais de la fin du Moyen Âge.",
    visiter: "S'installer au centre de la place pavée pour profiter de l'extraordinaire cadrage associant les façades polychromes à colombages aux découpes flamboyantes du porche de l'église Saint-Maclou en arrière-plan. Détailler les poteaux corniers sculptés des maisons d'angle, en repérant les traces des anciens volets d'échoppes rabattables qui servaient d'étals marchands aux drapiers. Prendre le temps de flâner dans la rue Martainville attenante à la découverte des vitrines d'antiquités et des cours intérieures cachées, avant de s'accorder une halte gastronomique en terrasse pour s'imprégner de l'atmosphère médiévale unique de ce quartier préservé.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_aitre_saint_maclou",
    name: "Rouen - Aître Saint-Maclou",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 16,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Ancien charnier de la Grande Peste du XVIe siècle sculpté de danses macabres",
    century: "XVIe siècle",
    category: "star",
    counts: {},
    lat: 49.440272,
    lng: 1.099830,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMh2XcMMphZ7TEgT-dly4smbSzcBEBuCEfY2XS_e1R_FP3qgg40tOrqgNziGNqXCooRdaF4dsUoV3mpMfPODFwFs3SxuLZbortkpo7eC_bU_HAXvT1ierzzbWUyq_DRtm2gnJm7OGYS6iU-2HtCCAOUyg=w1818-h2416-s-no-gm?authuser=0",
    description: "Aménagé à la suite de la terrible épidémie de Peste Noire de 1348 qui décima plus d'un tiers de la population rouennaise, l'aître Saint-Maclou — du latin « atrium » désignant la cour d'entrée d'un édifice sacré — est un ensemble funéraire et architectural unique en Europe occidentale. Rebâti entre 1526 et 1533 pour servir d'ossuaire de débordement, il se présente sous la forme d'un cloître rectangulaire clos dont les galeries à pans de bois et soubassements de pierre entourent une cour verdoyante. Sa célébrité mondiale provient de son extraordinaire décor funéraire sculpté en bas-relief sur les sablières et colonnes de chêne des galeries : une véritable danse macabre de la Renaissance figurant avec une minutie saisissante des crânes, des tibias entrecroisés, des cercueils, des pelles de fossoyeurs et des instruments liturgiques. Après avoir abrité une école de charité pour garçons pauvres au fil des siècles puis l'École régionale des Beaux-Arts, l'aître a fait l'objet d'une restauration intégrale méticuleuse pour renaître en pôle d'artisanat d'art, de céramique et de culture vivante.",
    visiter: "Franchir le passage voûté discret depuis la rue Martainville pour pénétrer dans la cour intérieure et ressentir le contraste saisissant entre la quiétude paisible du jardin central arboré et la puissance évocatrice de son histoire funéraire. Examiner minutieusement le long des galeries couvertes les motifs sculptés sur les poutres de chêne, en repérant les figures squelettiques entraînant clercs, chevaliers et laboureurs dans la danse de la mort. Découvrir la vitrine historique conservant le squelette momifié d'un chat trouvé dans les combles, autrefois emmuré selon d'anciennes superstitions pour chasser le mauvais œil, puis visiter les ateliers contemporains de verriers et de céramistes installés dans les ailes rénovées.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_rue_eau_de_robec",
    name: "Rouen - Rue Eau-de-Robec & Rivière des Teinturiers",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Ancien quartier des teinturiers traversé par son ruisseau bordé de passerelles fleuries",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 49.441477,
    lng: 1.100908,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPhY4BuBGv299fk4413q5LF8Tu-lJZgrYjqD08yNEZfm8LxXGIzkzhpEy4h9b7BYUNLVC6XPGbIjEmNENe7u1wEu432zxlAOrfeqUoxvmgBGabyzcV2eO7Ub3vUrzeY6QBXNU1y4WqS2RSl7BAeJHgrCQ=w1838-h1384-s-no-gm?authuser=0",
    description: "S'étirant le long de l'ancien lit du Robec — petit affluent fougueux de la Seine réputé pour la pureté de ses eaux ferrugineuses particulièrement propices à la fixation des couleurs —, la rue Eau-de-Robec était au cœur de l'industrie textile drapière et de la teinturerie qui firent la fortune de Rouen de l'époque médiévale jusqu'au XIXe siècle. Les draps de laine et de lin y étaient lavés, teints de bleu guède, d'écarlate ou de garance, puis séchés à l'air libre dans les combles ventilés des maisons riveraines. Canaliseé puis recouvert au fil des décennies pour des impératifs d'hygiène urbaine, le cours d'eau a été remis en scène au cours des années 1970 sous la forme d'un charmant canal artificiel à ciel ouvert jalonné de pontets en fer forgé. La rue présente un exceptionnel alignement de demeures bourgeoises à pans de bois des XVIe et XVIIe siècles, coiffées de greniers étagés à claire-voie et de toits mansardés où les ouvriers suspendaient jadis les coupons d'étoffes tout juste sortis des cuves.",
    visiter: "Arpenter cette longue rue pavée piétonne en longeant le cours d'eau gazouillant, en empruntant les nombreuses passerelles de métal fleuries de géraniums qui relient la chaussée aux porches des habitations. Lever les yeux vers les combles étagés pour admirer l'ingénieux système d'aération des séchoirs textiles et observer la polychromie des façades en colombages réhabilitées. Pousser la porte du Musée national de l'Éducation installé dans la somptueuse Maison des Quatre Fils Aymon au numéro 185, un hôtel particulier Renaissance en pans de bois sculptés parmi les plus beaux de la ville, avant de profiter des terrasses calmes des restaurants et librairies anciennes bordant l'eau.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_abbatiale_saint_ouen",
    name: "Rouen - Abbatiale Saint-Ouen",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 16,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Colosse du gothique rayonnant normand réputé pour sa couronne de Normandie et son orgue Cavaillé-Coll",
    century: "XIVe siècle",
    category: "religieux",
    counts: {},
    lat: 49.442562,
    lng: 1.099857,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMrmoA_plS3N9twM0gCKZR4NWJgg7y0ctIdNDGAx3IB6Pdhpn_vtfHUTcE-oAIJ5iNb__Sm3qcfRPKFMuaHgbGDEQiYr42MuByPFbH9_XwY7yNUT8vBaf1bofyLQJAU74uGWzj1IApER916oErAKTc1Zg=w1818-h2416-s-no-gm?authuser=0",
    description: "Par ses dimensions monumentales surpassant celles de nombreuses cathédrales de France — cent trente-sept mètres de longueur sous une voûte culminant à trente-trois mètres —, l'abbatiale Saint-Ouen est l'un des sommets les plus vertigineux du gothique rayonnant et flamboyant normand. Ancienne église d'un puissant monastère bénédictin fondé à l'époque mérovingienne par l'archevêque saint Ouen, sa reconstruction intégrale entreprise en 1318 sous l'abbatiat de Jean Roussel dura plus de deux siècles. Sa croisée du transept est dominée par une tour-lanterne octogonale ajourée d'une audace folle, surnommée avec admiration la « Couronne de Normandie ». L'intérieur frappe par son dépouillement majestueux et son inondation de lumière : les parois de pierre s'effacent pour laisser place à quatre-vingts baies vitrées formant un manteau de verre coloré presque continu, où subsiste une collection inestimable de vitraux des XIVe et XVIe siècles. L'édifice abrite en outre le grand orgue de tribune monumentale achevé en 1890 par Aristide Cavaillé-Coll, considéré par Charles-Marie Widor comme le chef-d'œuvre absolu de la facture d'orgue romantique mondiale.",
    visiter: "Contempler depuis les jardins de l'Hôtel de Ville le chevet étagé et la silhouette magistrale de la tour centrale coiffée de sa célèbre couronne flamboyante. Pousser les portes pour être saisi par la clarté éclatante de la nef monumentale dont les faisceaux de colonnettes sans chapiteaux s'élancent vers le ciel dans une continuité parfaite. Découvrir les vitraux médiévaux des chapelles absidiales figurant les apôtres et prélats en camaïeu de grisaille et jaune d'argent, admirer la grille en fer forgé du chœur réalisée au XVIIIe siècle, et s'approcher de la tribune occidentale pour contempler le buffet en chêne massif du mythique orgue Cavaillé-Coll.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_le_gros_horloge",
    name: "Rouen - Le Gros-Horloge & Beffroi Municipal",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 18,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Arche Renaissance monumentale enjambant la rue et abritant l'un des plus vieux mécanismes d'horloge d'Europe",
    century: "XIVe siècle",
    category: "star",
    counts: {},
    lat: 49.441561,
    lng: 1.091262,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO5SsHg1Deb3agLK4bxwuXjJ_DOKJ7Gn07bs4yVX6kfN4XVoyblyMLoFWJYEu4u30ISHNSysOMvAorHYc6STNFVMj1jwDBzNeXemiSMWA5xgRORp7u66yMw7zSDIRbEtSHYjlTRAXRmeIIIvxO67tHm3Q=w1818-h2416-s-no-gm?authuser=0",
    description: "Symbole patrimonial et cœur temporel de la cité rouennaise, le Gros-Horloge est un ensemble architectural remarquable réunissant un beffroi communal médiéval du XIVe siècle, une arche Renaissance sculptée jetée au-dessus de la voie publique et une somptueuse fontaine baroque du XVIIIe siècle. Érigée entre 1527 et 1529 par l'architecte Jean Delépine pour enjamber la principale artère commerçante reliant la place du Vieux-Marché à la cathédrale, la voûte sculptée présente sur chaque face un gigantesque cadran astronomique doré de deux mètres cinquante de diamètre. Le mécanisme en fer forgé, fabriqué en 1389 par Jourdain del Leche et en fonction ininterrompue pendant plus de cinq siècles, compte parmi les plus anciens mouvements d'horlogerie mécanique conservés au monde. Le cadran ne comporte qu'une seule aiguille dorée terminée par un agneau pascal — emblème de la corporation des drapiers et de la ville de Rouen —, tandis qu'un semainier logé dans une ouverture basse dévoile chaque jour une divinité allégorique sur son char et qu'un globe supérieur indique les phases de la Lune.",
    visiter: "Passer sous l'arche en observant les bas-reliefs sous voûte représentant le Bon Pasteur entouré de brebis, puis s'arrêter pour détailler la splendeur des cadrans dorés rayonnant sur un ciel azuré parsemé d'étoiles. Pénétrer dans le beffroi gothique pour visiter le musée du Gros-Horloge : découvrir les rouages forgés du mécanisme d'origine du XIVe siècle en mouvement, admirer les cloches séculaires dont la célèbre cloche municipale « la Rouvel » coulée en 1260, et gravir les escaliers en vis jusqu'à la plateforme sommitale du beffroi pour profiter d'un panorama circulaire exceptionnel sur les toits d'ardoise et la forêt de flèches de la ville.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_eglise_sainte_jeanne_d_arc",
    name: "Rouen - Église Sainte-Jeanne-d'Arc",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Architecture audacieuse du XXe siècle évoquant un drakkar et abritant les vitraux Renaissance de Saint-Vincent",
    century: "XXe siècle",
    category: "religieux",
    counts: {},
    lat: 49.443105,
    lng: 1.088666,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPACUU44FeC-f9D3mnK4xW7tTyoYgkz6jpvQSDPJ-6vWZ5iyjOr4V9m6nsaShheigrAqeRPZAhajkqW7JNTuh9pQTOFs6mGJPsrYuzb1r78c4yZik_aylhrso68tUwhYJXLV1jaiTsyAbODg_q7eKEKqQ=w1838-h1384-s-no-gm?authuser=0",
    description: "Inaugurée en mai 1979 sur la place du Vieux-Marché par l'architecte Louis Arretche, l'église Sainte-Jeanne-d'Arc est une œuvre majeure de l'architecture sacrée contemporaine, conçue à la fois comme un mémorial national à l'héroïne brûlée vive sur cette place en 1431 et comme un écrin protecteur pour un trésor artistique sauvé de la Seconde Guerre mondiale. Sa toiture monumentale aux courbes hardies, bardée d'écailles d'ardoise et de cuivre vert-de-gris, évoque tour à tour les flammes du bûcher ou la coque d'un drakkar viking renversé s'étirant au-dessus des halles marchandes. L'intérieur surprend par sa chaleur organique, dominé par une immense charpente en bois lamellé-collé qui descend jusqu'au sol pour enserrer une spectaculaire verrière de cinq cents mètres carrés : treize verrières Renaissance du XVIe siècle réalisées par l'école de Rouen pour l'ancienne église Saint-Vincent, détruite par les bombes de 1944 mais dont les vitraux avaient été préventivement démontés et mis à l'abri.",
    visiter: "Observer depuis la place du Vieux-Marché les formes sculpturales de la toiture en cuivre ondulant comme une vague maritime au-dessus des étals du marché couvert. Pousser les portes pour pénétrer dans un sanctuaire lumineux et apaisé où la charpente de bois blond enveloppe le visiteur. Contempler l'immense mur de lumière formé par les treize vitraux Renaissance du XVIe siècle, en s'attardant sur la richesse des détails illustrant la vie du Christ, la légende de saint Pierre et les scènes de la Vierge Marie. Admirer l'autel en pierre de taille épuré avant de sortir vers le jardin mémorial attenant où se dresse la croix commémorative.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_bucher_jeanne_d_arc",
    name: "Rouen - Lieu du Bûcher de Jeanne d'Arc (Place du Vieux-Marché)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Haut lieu de mémoire nationale marquant le supplice de l'héroïne le 30 mai 1431",
    century: "XVe siècle",
    category: "star",
    counts: {},
    lat: 49.443167,
    lng: 1.088033,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMr4osASnmiVDSsM-zIe8Hc6ya_hzLk5qDUzu2ZjvHKtws2Mxs8e9o0Kq5ydCgHZ5EhQQC5e8D94BryPXSokMr3dEcmg8NdS9jOHy282533KvCIqjH1GJyoAQTTSS9k566d79B0a5z-yTmcdplQYbADNA=w1818-h2416-s-no-gm?authuser=0",
    description: "C'est sur ce sol chargé d'histoire au cœur de la place du Vieux-Marché que s'est déroulé l'un des dénouements les plus tragiques et retentissants de l'histoire de France : le 30 mai 1431, Jeanne d'Arc, jeune bergère de Domrémy devenue chef de guerre et libératrice d'Orléans, y fut brûlée vive à l'âge de dix-neuf ans par les autorités d'occupation anglaises après un procès en hérésie instruit par l'évêque Pierre Cauchon. Le lieu précis du supplice, identifié lors de fouilles archéologiques ayant également mis au jour les fondations de l'ancienne église médiévale Saint-Sauveur et les piloris criminels, est marqué aujourd'hui par une immense croix monumentale en béton blanc haute de vingt mètres, dressée à la mémoire de la sainte patronne secondaire de la France. Une plaque de bronze scellée au sol et un petit jardin des simples planté de fleurs blanches et d'herbes aromatiques délimitent l'emplacement exact du bûcher, invitant au recueillement au milieu de l'animation urbaine de la place bordée de maisons traditionnelles à pans de bois.",
    visiter: "Se recueillir au pied de la grande croix blanche commémorative et s'approcher de la plaque de bronze gravée signalant l'emplacement exact du poteau du martyre de Jeanne d'Arc. Observer les vestiges des substructions en pierre de l'église Saint-Sauveur dégagés autour du bûcher, où furent inhumés des siècles de paroissiens rouennais. Prendre le temps d'admirer la statue en bronze de Jeanne d'Arc réalisée par Maxime Real del Sarte adossée au chevet de l'église contemporaine, la représentant le visage levé vers le ciel au milieu des flammes, avant de prolonger la découverte par les terrasses animées et les maisons anciennes ceinturant la place.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
  {
    id: "rouen_musee_des_beaux_arts",
    name: "Rouen - Musée des Beaux-Arts",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Seine-Maritime",
    subdiv: "Rouen",
    altitude: 20,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Palais des beaux-arts du XIXe siècle abritant la deuxième plus riche collection impressionniste de France",
    century: "XIXe siècle",
    category: "musee",
    counts: {},
    lat: 49.444804,
    lng: 1.094485,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM0sZuRYiWtyI6aBgxlBEheir0IYvcNA_bemVtttDRQ_9Iwct7_qXYQXURxUlSP0FIC_kMD-pJTTIHh1kqdFuJUxJGyGIAHjv5mS3kQTx3LAG3A7S9nhIHdbDxsqXn3tK0WfwECuTEgZZbn9Fe_j2mHvA=w1838-h1399-s-no-gm?authuser=0",
    description: "Installé dans un somptueux palais néoclassique érigé à la fin du XIXe siècle par l'architecte Louis Sauvageot en bordure du square Verdrel, le Musée des Beaux-Arts de Rouen conserve l'une des collections publiques les plus prestigieuses et complètes de France en dehors des musées parisiens. Fondé sous la Révolution par décret consulaire et enrichi par d'illustres mécènes normands comme François Depeaux, le musée embrasse six siècles de création artistique européenne, du XVe au XXIe siècle. Il abrite notamment des chefs-d'œuvre insignes de la Renaissance et de l'Âge d'or de la peinture européenne, signés Le Pérugin, Gérard David, Vélasquez et Le Caravage avec son bouleversant tableau « La Flagellation du Christ ». Berceau de la modernité picturale, l'institution est mondialement réputée pour sa galerie impressionniste — la deuxième plus importante de France après le musée d'Orsay —, déployant des toiles maîtresses de Claude Monet (dont plusieurs versions des Cathédrales de Rouen), Camille Pissarro, Alfred Sisley, Pierre-Auguste Renoir, Edgar Degas et l'école paysagiste de Canteleu et de Honfleur.",
    visiter: "Traverser la cour d'honneur du square Verdrel pour pénétrer dans le vaste hall central baigné d'une verrière zénithale et commencer le parcours chronologique des collections. S'attarder dans la salle espagnole et italienne pour contempler l'intensité dramatique du clair-obscur de « La Flagellation » du Caravage et le portrait d'homme de Vélasquez. Rejoindre l'étage pour plonger dans les salles impressionnistes : admirer de près les touches vibrantes de Claude Monet sur « La Cathédrale de Rouen, le portail et la tour Saint-Romain, plein soleil », contempler les vues plongeantes des ponts et quais de Rouen peintes par Camille Pissarro, puis découvrir les grands formats romantiques de Théodore Géricault, enfant illustre de la ville.",
    link: "https://photos.google.com/share/AF1QipMLwFEK_Au4ZgNwaxmnwCuxrTd2EK8rQ25YqSv_dtNmig3HlymO8KPVXpBhTWyiEA?key=eFdVT1UwTEhIUFRJVHFGWUg4bU9qRi0tTUVzWkh3"
  },
   {
    id: "pont_audemer_bords_de_la_risle",
    name: "Pont-Audemer - Bords de la Risle & Canaux des Tanneurs",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Eure",
    subdiv: "Pont-Audemer",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Venise normande sillonnée de canaux et d'anciens séchoirs à peaux à pans de bois",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 49.355003,
    lng: 0.514386,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNWdoykvxDPDFMnhDLfOEmwRRqASOeJYEA0aelEVcmTa-uIYo7syosr7vXlQGQVvac8JmKZsJirojQZ42EXFUkGtmasAnY4xTQ4nDEQ79Y-dnTwZ20fgX0CVdvax5qHeYItICCI8gVsiemFQjpsCWE9Cg=w1818-h2416-s-no-gm?authuser=0",
    description: "Surnommée avec fierté la « Venise normande », la cité historique de Pont-Audemer s'enracine au creux de la riante vallée de la Risle, à l'endroit précis où le fleuve côtier se ramifie en une multitude de bras secondaires, de biefs de dérivation et de canaux enserrant le centre médiéval. Cœur battant de la mégisserie et de la tannerie artisanale depuis le Moyen Âge, la ville s'est structurée autour de cette eau abondante indispensable au décapage, au lavage et à la préparation des cuirs. Les berges pavées et les ruelles d'eau sont bordées d'un ensemble pittoresque et exceptionnellement préservé d'anciennes maisons à colombages des XVIe et XVIIe siècles, dont les derniers étages s'ouvrent par de larges persiennes ajourées formant des séchoirs à peaux traditionnels suspendus au-dessus de la Risle. Des dizaines de petits ponts de pierre et de passerelles de fonte à fleur d'eau relient les îlots résidentiels, offrant un cadre bucolique où l'eau sombre reflète les façades colorées d'encorbellements et les massifs fleuris entretenus avec passion.",
    visiter: "Emprunter à pied la ruelle des Tanneurs et longer les quais bordant les canaux pour admirer l'enchevêtrement des passerelles privatives en fer forgé reliant directement les seuils de portes à la rue. Lever les yeux vers les combles aérés des maisons à pans de bois pour observer l'architecture spécifique des séchoirs de mégissiers aux claire-voies en chêne. Faire une halte sur le pont de la Madeleine ou celui des Carmes pour apprécier la vue plongeante sur les herbiers aquatiques oscillant dans le courant limpide de la Risle et le reflet des façades à colombages. Poursuivre la flânerie le long des venelles pavées vers les anciens lavoirs publics en bois, puis prolonger la balade vers le parc de la tour grise bordé de saules pleureurs.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "pont_audemer_eglise_saint_ouen",
    name: "Pont-Audemer - Église Saint-Ouen",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Eure",
    subdiv: "Pont-Audemer",
    altitude: 14,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Colosse inachevé du gothique flamboyant normand paré de somptueux vitraux Renaissance",
    century: "XVIe siècle",
    category: "religieux",
    counts: {},
    lat: 49.355398,
    lng: 0.515202,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMxLjNlbepX-NbibiwgbiCjpjTOZ3HAWENMaDctBqU9tGy8i94zu6iMucXHHigoQJKI6Cy2u1XvYbi3R2XEiSYcr6Nd1cfqgpO3sARsI04McGCtAHhlTsjrAoQUDPUtGxqcRJr95of_uo_BpkJKCEQrPQ=w1818-h2416-s-no-gm?authuser=0",
    description: "Dominant la Cité des Tanneurs de son imposante silhouette inachevée aux allures de cathédrale tronquée, l'église Saint-Ouen de Pont-Audemer est l'un des monuments les plus fascinants du gothique flamboyant et de la Première Renaissance en Normandie. Érigée à partir de la fin du XVe siècle sous l'impulsion de riches marchands tanneurs et mécènes locaux désireux de rivaliser avec les plus illustres sanctuaires de Rouen, elle ne put jamais voir sa tour-lanterne ni sa façade achevées en raison des ravages des guerres de Religion et de l'effondrement des budgets municipaux. Malgré cette interruption brutale, la nef impressionne par la hardiesse de ses proportions et la virtuosité technique de ses piliers prismatiques s'élançant d'un seul jet vers des voûtes à liernes et tiercerons richement ciselées. La renommée artistique majeure de Saint-Ouen repose sur sa série incomparable de quatorze verrières du XVIe siècle, œuvres virtuoses des maîtres verriers rouennais représentant avec une palette chromatique éblouissante des scènes bibliques, la légende de saint Ouen ainsi que les corporations professionnelles des donateurs.",
    visiter: "Contempler depuis la place du Général-de-Gaulle la puissante façade occidentale restée inachevée, avec ses contreforts massifs en pierre de taille blanche de Vernon sculptés de niches Renaissance, de gargouilles et de pinacles flamboyants. Pénétrer dans la vaste nef baignée d'une clarté féerique filtrée par les grandes baies pour contempler la collection inestimable de vitraux Renaissance du XVIe siècle, en s'attardant sur la verrière des tanneurs détaillant le travail des peaux. Admirer le triforium finement ajouré, la riche tribune d'orgue Renaissance en chêne sculpté de bas-reliefs représentant les vertus et les apôtres, puis faire le tour du chœur roman plus sobre du XIe siècle subsistant de l'édifice primitif.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "honfleur_vieux_bassin",
    name: "Honfleur - Le Vieux Bassin",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Calvados",
    subdiv: "Honfleur",
    altitude: 4,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Bassin maritime historique creusé sous Colbert bordé de hautes maisons d'ardoise",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 49.420345,
    lng: 0.233073,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPBM6_O3cl3cfD8S4kNQNvwXLC0zGV2cJjoI4vxld_7roXKF-cxlqaDztxx4ElEW-qHv7jYi5tDw10IIQYoGZcTYgyIR0rPUN60-CE-vgqWRSa90x3BJGjIzhSY9l9-tTKhnojoRi9SmVznbbjwQi8wWg=w2486-h1658-s-no-gm?authuser=0",
    description: "Véritable carte postale universelle de la Normandie maritime, le Vieux Bassin de Honfleur est un port d'échouage d'une harmonie scénographique absolue, creusé en 1681 sur ordre de Colbert pour remplacer un havre d'échouage médiéval trop étroit face à l'essor des expéditions vers les Amériques. Aménagé au débouché de la Claire dans l'estuaire de la Seine, ce bassin rectangulaire est mondialement réputé pour l'alignement spectaculaire des étroites maisons du quai Sainte-Catherine : hautes de cinq à sept étages, ces bâtisses mitoyennes singulières, souvent bâties en pans de bois et couvertes d'écailles d'ardoise aux reflets ardoisés et violacés, étaient adossées directement à l'ancien rempart urbain pour optimiser l'espace au sol. Berceau de l'impressionnisme et refuge privilégié des peintres de l'école de Honfleur (Eugène Boudin, Claude Monet, Gustave Courbet, Johan Barthold Jongkind), le plan d'eau miroitant accueille toujours vieux gréements, chalutiers côtiers et voiliers modernes dans une ambiance maritime vibrante et intemporelle.",
    visiter: "Faire le tour complet du bassin pavé en débutant par le quai Sainte-Catherine pour s'imprégner des reflets irisés des façades d'ardoise et des mâtures de bateaux dans l'eau salée. Prendre le temps d'observer le déchargement des crevettes grises sur les quais par les marins pêcheurs locaux ou contempler les peintres installant toujours leurs chevalets sur les pavés face au port. Déambuler ensuite le long du quai Saint-Étienne en profitant des terrasses animées et des galeries d'art, franchir la passerelle mobile qui régule l'accès maritime, puis s'asseoir sur les bancs de granit face à la Lieutenance pour contempler la lumière nacrée si particulière de l'estuaire au coucher du soleil.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "honfleur_la_lieutenance",
    name: "Honfleur - La Lieutenance & Porte de Caen",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Calvados",
    subdiv: "Honfleur",
    altitude: 5,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Dernier vestige des fortifications urbaines et résidence du lieutenant du Roi",
    century: "XVIe siècle",
    category: "chateau",
    counts: {},
    lat: 49.421001,
    lng: 0.233580,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNhDWq-Y6WL2Wz2IfY0uuReausbA-gpLQzdJPuND2QmYKWfX22C91f5v8SiUVJIZsYN2ZN6ZeSV2wcFXtoY3vG_96nUaHJEFURPyADz47AnYtVbcY37fEri6iZ3RKuGOmlStT4c9XRrVSPoQIgCH1a3sw=w1600-h1200-s-no-gm?authuser=0",
    description: "Montant la garde à l'entrée stratégique du Vieux Bassin, la Lieutenance est le vestige architectural le plus vénérable et emblématique des anciennes fortifications de Honfleur. Bâtie sur les substructions de l'ancienne porte de Caen qui perçait l'enceinte médiévale au XIVe siècle sous Charles V, cette puissante forteresse urbaine en moellons de calcaire et silex mêlés a été profondément remaniée au cours des XVIe et XVIIe siècles pour servir de logis officiel au représentant militaire et civil de la couronne, le lieutenant du Roi. Flanquée de tourelles en encorbellement coiffées de poivrières, de mâchicoulis décoratifs et de deux passages voûtés en arc brisé autrefois protégés par des herses et des ponts-levis, la bâtisse marie avec austérité l'architecture défensive militaire aux aménagements résidentiels classiques. C'est sous ses murs épais que s'embarquèrent les grands explorateurs maritimes français, notamment Samuel de Champlain qui quitta les quais de Honfleur en 1608 pour remonter le fleuve Saint-Laurent et fonder la cité de Québec.",
    visiter: "Observer depuis le quai de la Quarantaine et l'avant-port la robuste maçonnerie de pierre calcaire et les échauguettes d'angle en briques et pierres surveillant l'entrée des bassins. Franchir le passage voûté de l'ancienne porte de Caen reliant la ville close au faubourg maritime pour ressentir l'épaisseur protectrice des remparts historiques. Découvrir le parcours muséographique contemporain récemment aménagé dans les appartements intérieurs de la Lieutenance, retraçant l'épopée maritime des corsaires, des capitaines terreneuvats et des navigateurs honfleurais partis cartographier le Nouveau Monde, avant de monter sur la terrasse supérieure pour jouir d'une perspective plongeante imprenable sur l'enfilade du Vieux Bassin.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "honfleur_eglise_sainte_catherine",
    name: "Honfleur - Église Sainte-Catherine & Clocher Séparé",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Calvados",
    subdiv: "Honfleur",
    altitude: 10,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "La plus grande église de France construite entièrement en bois par des charpentiers de marine",
    century: "XVe siècle",
    category: "religieux",
    counts: {},
    lat: 49.421148,
    lng: 0.232489,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMg6uE1AACpG6TEhztjL3YdnwFNi1sQ8f7wWHssvSxXdJXrlZsv5bBxt7Ytihzkog4LoJy5u1ir3ZNSeb7tLJkNdvkuZTAfSMdDXVy8dPK4SCjDxiUeXQBrYUQd1-3wFNY8pDo2MIIMdPyYmPAfSd67cg=w2486-h1872-s-no-gm?authuser=0",
    description: "S'élevant fièrement sur une charmante place pavée au cœur du quartier historique des marins, l'église Sainte-Catherine est un chef-d'œuvre patrimonial unique en son genre : elle constitue la plus vaste église de bois avec un clocher séparé conservée en France. Érigée au lendemain de la guerre de Cent Ans par les habitants et maîtres charpentiers navals des chantiers maritimes locaux pour remplacer l'ancienne église de pierre détruite par les Anglais, elle fut conçue selon les techniques rigoureuses de la construction navale en employant le chêne issu des forêts environnantes du Touques. L'édifice se compose de deux nefs parallèles jumelées dont les voûtes intérieures spectaculaires adoptent la forme exacte de doubles coques de navires marchands renversées, soutenues par une forêt de puissants piliers de chêne équarris à la hache. Séparé de l'église pour éviter qu'un éventuel incendie provoqué par la foudre n'embrase l'édifice principal, le clocher en bois de chêne bardé d'essentes d'ardoise et solidement contreventé trône sur la place en face, abritant aujourd'hui les cloches paroissiales.",
    visiter: "Pousser le porche en bois pour être immédiatement saisi par la chaleur organique et l'odeur caractéristique de cire et de vieux chêne qui imprègne le sanctuaire. Lever les yeux vers la prodigieuse double voûte lambrissée pour admirer le savoir-faire des charpentiers de marine et repérer les sablières sculptées de figures grotesques, d'animaux marins et d'anges musiciens. Parcourir les deux nefs pour contempler le retable de la Renaissance, les ex-voto marins offerts par les équipages rescapés des tempêtes de l'Atlantique et la statuaire polychrome dédiée à sainte Catherine d'Alexandrie. Traverser ensuite la place pavée bordée de bistros typiques pour s'approcher du clocher indépendant et admirer la structure magistrale de son beffroi pyramidal ancré sur une robuste souche de chêne.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "honfleur_pont_de_normandie",
    name: "Honfleur / Le Havre - Pont de Normandie",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Calvados",
    subdiv: "Honfleur",
    altitude: 65,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Prouesse mondiale du génie civil à haubans enjambant l'estuaire de la Seine",
    century: "XXe siècle",
    category: "pont",
    counts: {},
    lat: 49.436864,
    lng: 0.273350,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPw4Ei1K56ZdvhekAKaUicBLDlss64oP55kiIrx3YXQ7Ql-hJxST1usWK99D8XlqaDdtWUrGQMWLjvhKigP4NQHVIyc5jJPXlHOUe4FcD7hDqlwElr8uFKL9DEHzicVeiLlAYpoXsn1j308xbLLVdzi0g=w1600-h1200-s-no-gm?authuser=0",
    description: "Tendant son élégant tablier d'acier et de béton au-dessus des eaux tumultueuses de l'estuaire de la Seine entre Honfleur et Le Havre, le pont de Normandie est l'un des ouvrages d'art les plus spectaculaires et novateurs du génie civil contemporain mondial. Inauguré en janvier 1995 après sept années d'un chantier titanesque conduit sous la direction de l'ingénieur Michel Virlogeux et de l'architecte François Doyelle, il détenait lors de sa mise en service le record du monde absolu de portée pour un pont à haubans, avec une travée centrale suspendue de huit cent cinquante-six mètres sans appui intermédiaire. D'une longueur totale de deux mille cent quarante et un mètres, l'ouvrage repose sur deux gigantesques pylônes en béton armé en forme de Y inversé culminant à plus de deux cent quatorze mètres au-dessus du fleuve, d'où rayonnent cent quatre-vingt-quatre haubans d'acier d'un blanc immaculé. Conçu pour résister à des vents de tempête de plus de trois cents kilomètres par heure et au déferlement des marées de la baie de Seine, ce pont aérien relie de manière magistrale la Haute et la Basse-Normandie.",
    visiter: "Rejoindre l'aire d'observation aménagée sur la rive sud côté Honfleur pour admirer le dessin sculptural des pylônes en Y et la légèreté visuelle du tablier aérodynamique fendant le ciel normand. Emprunter gratuitement à pied ou à vélo la voie piétonne sécurisée aménagée le long du parapet du pont pour une traversée aérienne vertigineuse à plus de cinquante mètres au-dessus du niveau des plus hautes marées. Contempler pendant la marche la vue panoramique grandiose sur les vasières et bancs de sable de la réserve naturelle de l'estuaire de la Seine, les grands navires porte-conteneurs remontant vers Rouen et les silhouettes portuaires du Havre se découpant sur l'horizon marin.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "deauville_les_planches",
    name: "Deauville - Les Planches & Bains Pompéiens",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Calvados",
    subdiv: "Deauville",
    altitude: 5,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Promenade littorale mythique en azobé rythmée par les cabines aux noms d'acteurs",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 49.360003,
    lng: 0.065209,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMJZEqY0QgJcQM9gMzGi2-1cRCL-qE-nhfK_RyPvqlhNH_RKsyMYXsX7qv-lKRT9JB485L-eXbWaMg6NJGdBK4_Q4jOlXRai0B6_3s3XmKxC5pzqTP2iedwea0YwfYtI_72QgPxqtDc0vnsEcTXlaJGWw=w1818-h2416-s-no-gm?authuser=0",
    description: "Bordant l'immense estran sablonneux de la Côte Fleurie face à la Manche, la promenade des Planches de Deauville est le symbole balnéaire et cinématographique le plus emblématique du chic normand. Aménagée en 1923 par l'architecte Charles Adda pour remplacer un ponton de bois dégradé, cette promenade piétonne longue de six cent cinquante-trois mètres est constituée de madriers en bois d'azobé imputrescible d'Afrique de l'Ouest, posés pour permettre aux élégantes et aristocrates des Années folles de déambuler en robe et talons le long du rivage sans s'ensabler. Les Planches longent le magnifique complexe thermal des Bains pompéiens, édifié dans un style Art déco mâtiné d'antiquité méditerranéenne avec ses mosaïques turquoises, ses atriums ouverts et ses galeries de béton blanc. Depuis 1975 et la création du Festival du Cinéma Américain, les balustrades séparant les cabines de plage individuelles en bois portent les noms gravés en lettres capitales des plus grands monstres sacrés du septième art mondial (de Clint Eastwood à Meryl Streep), immortalisant également la célèbre scène de romance tournée sur le sable par Claude Lelouch dans « Un homme et une femme ».",
    visiter: "Parcourir la célèbre promenade de bois au rythme des embruns iodés pour découvrir un à un les noms des stars et cinéastes inscrits sur les clôtures en lattes des cabines de bain Art déco. S'accorder une halte sur les marches des atriums des Bains pompéiens pour contempler l'alignement polychrome des célèbres parasols de Deauville noués selon la tradition locale et plantés sur le sable doré. S'approcher du bord de l'eau à marée basse pour admirer les cavaliers galopant au lever du jour le long des rouleaux de la mer, avant de terminer par une pause rafraîchissante au bar du Bar du Soleil face à l'étendue scintillante de la baie de Seine.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "lisieux_basilique_sainte_therese",
    name: "Lisieux - Basilique Sainte-Thérèse",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Calvados",
    subdiv: "Lisieux",
    altitude: 95,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Colosse néo-byzantin du XXe siècle et deuxième lieu de pèlerinage de France après Lourdes",
    century: "XXe siècle",
    category: "religieux",
    counts: {},
    lat: 49.139400,
    lng: 0.236163,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOwTXU8l7IyNx2Olxf8HhfygdiRsBHhdfc6jzwHQm-4mwLGXl9EKwZmFZxAanyYxRRvaITX87IkhkVxPWJ6cUbgfON4sxgGN78jBhlSgaDxPmSfopYB-9VD3OSzxRM0rBqQenMBneZX1nZM6Y14p3UPog=w1061-h688-s-no-gm?authuser=0",
    description: "Érigée sur une éminence boisée dominant la cité lexovienne et le vallon de la Touques, la basilique Sainte-Thérèse de Lisieux est l'une des plus gigantesques églises construites au XXe siècle dans le monde catholique, faisant de la ville le deuxième sanctuaire de pèlerinage de France après Lourdes. Commencée en 1929 sous l'impulsion du pape Pie XI pour honorer la carmélite sainte Thérèse de l'Enfant-Jésus et de la Sainte-Face — canonisée en 1925 et proclamée docteure de l'Église —, cette basilique monumentale conçue par l'architecte Louis Marie Cordonnier adopte un style romano-byzantin d'une imposante théâtralité. Capable d'accueillir plus de quatre mille fidèles sous sa voûte immense sans piliers intermédiaires, elle est dominée par un dôme majestueux culminant à près de quatre-vingt-quinze mètres de hauteur. L'intérieur est entièrement tapissé de plus de huit mille mètres carrés de mosaïques chatoyantes en pâte de verre et émaux de Venise créées par Pierre Gaudin, illustrant le message de la « Petite Voie » d'amour et de confiance spirituelle chère à la sainte normande.",
    visiter: "Gravir l'imposant escalier monumental ouvrant sur le parvis en terrasse pour contempler la façade de granit et de pierre blanche ornée de bas-reliefs et le dôme sommital. Pénétrer dans la vaste nef pour apprécier la clarté chaleureuse et la richesse visuelle des mosaïques polychromes recouvrant les murs et les arcades, en s'attardant sur le reliquaire doré abritant les reliques de sainte Thérèse dans le transept sud. Descendre ensuite dans la crypte semi-enterrée de trois nefs, entièrement décorée de mosaïques bleues et or retraçant la vie de Thérèse et accueillant le tombeau en marbre blanc de ses parents canonisés, Louis et Zélie Martin. Terminer par l'ascension du dôme pour profiter d'un panorama circulaire exceptionnel sur les bocages du pays d'Auge.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
  {
    id: "lisieux_cathedrale_saint_pierre",
    name: "Lisieux - Cathédrale Saint-Pierre",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Calvados",
    subdiv: "Lisieux",
    altitude: 50,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "L'un des plus anciens chefs-d'œuvre du gothique normand rescapé des bombardements de 1944",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 49.146429,
    lng: 0.226461,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOjrDMdTi7QWQNQSNQGMJ4ZS9jWlH6WpxoEODKoXyRfsj9mM7f6pYeCkU6iwfHeV25svXMOKuGwr8sVhAU0thfB-6O5aRjRd3df9j2N7oRzxAZLN1hEubAYiGmAG7WjaCMxeiV3k8F2AxQuhjUwCb8ikg=w1818-h2416-s-no-gm?authuser=0",
    description: "Trônant au cœur de la place François-Mitterrand, la cathédrale Saint-Pierre de Lisieux est un édifice médiéval insigne, réputé pour être l'un des premiers et plus purs chefs-d'œuvre du style gothique érigés sur le sol normand. Bâtie entre 1160 et 1230 sous l'épiscopat de l'évêque Arnoul (ardent partisan du roi Henri II Plantagenêt), elle devança même la construction de Notre-Dame de Paris par l'adoption précoce des arcs brisés et des voûtes sur croisées d'ogives quadripartites. Sa façade occidentale présente une étonnante asymétrie entre sa tour nord romane aux baies géminées et sa haute tour sud gothique du XVIe siècle couronnée d'une flèche élancée en charpente d'ardoise. L'intérieur séduit par la rigueur et l'élégance de ses lignes, rythmées par de puissantes piles cylindriques et un triforium ajouré d'une rare légèreté. Ayant miraculeusement réchappé aux bombardements dévastateurs de l'été 1944 qui anéantirent la quasi-totalité de la vieille ville en pans de bois, Saint-Pierre conserve une haute valeur spirituelle : c'est en effet dans cette église que la jeune Thérèse Martin assistait chaque dimanche à la messe en famille et connut sa première vocation religieuse.",
    visiter: "Admirer depuis la place du marché les trois portails sculptés de la façade occidentale et observer la transition stylistique fascinante entre les deux tours d'angle. Pénétrer dans la nef élancée pour apprécier la blancheur de la pierre calcaire de Caen et l'harmonieuse ordonnance du triforium à colonnettes normandes. Se diriger vers le déambulatoire pour découvrir la chapelle d'axe de la Vierge, restaurée au XVe siècle par Pierre Cauchon (évêque de Beauvais tristement célèbre pour avoir instruit le procès de Jeanne d'Arc et dont la sépulture repose sous les dalles), puis s'arrêter devant la chapelle latérale où la famille Martin venait prier devant la statue de la Vierge au sourire.",
    link: "https://photos.google.com/album/AF1QipNvDErfQeeB34RgIzi-LODdvp4EvQeRjHxABwKQ"
  },
   {
    id: "le_mans_cathedrale_saint_julien",
    name: "Le Mans - Cathédrale Saint-Julien",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 72,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Colosse de pierre mariant nef romane angevine et chevet gothique rayonnant",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 48.009377,
    lng: 0.198717,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMAf_j8Wn5P9ZxD9Q42vPorY29xLX-Z0OJa0dZwTcE41UR9NvAo3FpMJfpys4lxHH51JwGcoIbX36UL09eylPZbld5zuqLEH0NI8_V5A_EQQDoBypy5td73z9R208XDnBBtDq983NUiANxuJtp8z2-V2Q=w692-h919-s-no-gm?authuser=0",
    description: "Dominant majestueusement la vieille ville et la plaine de la Sarthe depuis l'éperon rocheux du plateau de la Cité, la cathédrale Saint-Julien du Mans est l'un des plus impressionnants chefs-d'œuvre de l'architecture médiévale de l'Ouest de la France. Sa silhouette unique au monde résulte d'une fusion spectaculaire entre deux époques stylistiques majeures : une austère nef romane du XIIe siècle couverte de voûtes d'ogives bombées de tradition angevine (ou Plantagenêt) et un chœur gothique rayonnant du XIIIe siècle d'une virtuosité technique éblouissante. Vues depuis la place des Jacobins, les treize chapelles rayonnantes étagées du chevet composent une véritable forêt de pierre vivante, où une double volée d'arcs-boutants pyramidaux à contreforts élancés soutient l'immense claire-voie vitrée à plus de trente-trois mètres au-dessus du sol. Dédiée à saint Julien, premier évêque évangélisateur du Maine, la cathédrale abrite une collection exceptionnelle d'art sacré, comprenant le vitrail de l'Ascension daté du milieu du XIIe siècle — considéré comme l'un des plus anciens vitraux au monde encore in situ —, ainsi que les célèbres fresques musicales peintes sous les voûtes de la chapelle de la Vierge représentant quarante-sept anges jouant des instruments de musique du XIVe siècle.",
    visiter: "Arriver par l'esplanade des Jacobins pour admirer le prodigieux enchevêtrement des arcs-boutants en V et des pinacles gothiques sculptés dans le calcaire clair et le roussard. Franchir le portail royal roman inspiré de Chartre et pénétrer dans la pénombre sereine de la nef pour observer la retombée puissante des croisées d'ogives angevines sur les piles massives. Poursuivre vers le chœur inondé de lumière où le regard est aspiré par l'élévation vertigineuse des triforiums et l'éclat rubis des baies médiévales. Ne pas manquer la chapelle axiale de la Vierge pour contempler au plafond le concert céleste des quarante-sept anges musiciens peints par Jean de Bruges en 1377, puis se recueillir devant le tombeau en marbre et albâtre de Charles d'Anjou, comte du Maine.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_menhir_pierre_saint_julien",
    name: "Le Mans - Menhir de la Pierre Saint-Julien",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 73,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Mégalithe de grès préhistorique adossé contre la façade de la cathédrale",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 48.009694,
    lng: 0.198088,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMKmEznHQ_dcyrayz-W5MjDqKgvdnXBIEWBp8HgEvUJ3gPQd2TBQ1f9zXSdcsfGTEqm0lNJUVohqRLka6FcUWCkrwTOEq5ZtI17RIzIHgw2bty4p1OMJKyd5a6y88A6T0esMxwpeyf5cJ4Pce0uvynueA=w615-h919-s-no-gm?authuser=0",
    description: "Dressé contre le flanc occidental de la cathédrale Saint-Julien à l'angle de la place Saint-Michel, le menhir de la Pierre Saint-Julien est une énigme archéologique millénaire et un témoin prodigieux de la continuité cultuelle mancelle. Érigé au Néolithique il y a plus de quatre mille ans par les premières populations sédentaires de la vallée de la Sarthe, ce monolithe en grès roussard s'élève à près de quatre mètres cinquante de hauteur au-dessus du pavé urbain. Sauvé de la destruction lors de la christianisation de la Gaule romaine et mérovingienne grâce à son intégration directe dans l'enceinte sacrée du sanctuaire paléochrétien puis de la cathédrale médiévale, il a alimenté au fil des siècles une multitude de croyances et de rituels populaires. Selon les légendes locales, la pierre posséderait des vertus propitiatoires de fertilité et de mariage : la coutume voulait ainsi que les jeunes femmes et les pèlerins viennent glisser leur pouce ou appuyer leur main au creux d'une cupule d'érosion naturelle ovoïde — surnommée le « nombril de la pierre » — pour s'assurer fécondité ou prompte union.",
    visiter: "Rejoindre l'angle sud-ouest de la cathédrale sur la place Saint-Michel pour découvrir cette masse imposante de grès foncé contrastant vivement avec la blancheur du calcaire du porche roman voisin. Poser la main sur la roche patinée par le contact de millions de doigts au fil des millénaires et observer de près la texture veinée du grès sarthois et ses cavités d'érosion naturelle. Prendre le temps d'apprécier la juxtaposition insolite et émouvante entre ce monument mégalithique issu de la Préhistoire et les contreforts sculptés du Moyen Âge qui l'enserrent dans une même étreinte patrimoniale.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_enceinte_romaine",
    name: "Le Mans - Enceinte Gallo-Romaine (Vindunum)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 58,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "antiquite",
    era_label: "La muraille romaine du Bas-Empire la mieux conservée d'Europe occidentale avec Rome et Byzance",
    century: "IIIe siècle",
    category: "archeo",
    counts: {},
    lat: 48.009763,
    lng: 0.196693,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM4kKM4R5Z52nj4J2ChIfwrHiGeY9SzjrwB19YlTMv7Ez9eMEl-kwFtHdjdVCltA24RFx2_Dki56Q-D37cXc2pXEnssJiORCZBnZ-It0W9_GQ6sRMFPf1uJuwk6J_FrBqC_1fHtnq1iQsWDxU_92zSnxA=w1264-h843-s-no-gm?authuser=0",
    description: "Édifiée à la fin du IIIe siècle de notre ère (vers 270-300) pour protéger la cité gallo-romaine de Vindunum face aux crises politiques de l'Empire et aux premières incursions barbaresques, l'enceinte romaine du Mans est un monument militaire d'une intégrité archéologique exceptionnelle, classé parmi les plus remarquables du monde romain aux côtés de Rome, Constantinople et Lugo. Déployée à l'origine sur un périmètre rectangulaire de mille trois cents mètres fortifié d'une quarantaine de tours semi-circulaires, la courtine enserre la colline dominant la Sarthe. Ce qui fait sa renommée mondiale réside dans sa spectaculaire polychromie décorative : conçue autant comme une démonstration de prestige que comme un bouclier militaire, la maçonnerie en blocage intérieur est habillée d'un parement en petit appareil régulier (opus vittatum) associant des moellons de calcaire beige, des dalles sombres de grès roussard ferrugineux et de multiples arases horizontales de briques rouges (terres cuites). Les maîtres bâtisseurs romains y ont composé de splendides motifs géométriques en chevrons, sabliers, damiers et triangles qui scintillent sous les reflets de la rivière.",
    visiter: "Emprunter la promenade aménagée en contrebas le long des quais de la Sarthe et du jardin des Tanneries pour apprécier l'élévation continue de la muraille sur plus de cinq cents mètres et admirer la majesté des douze tours défensives préservées. S'approcher des maçonneries pour examiner les frises décoratives géométriques formées par l'alternance méticuleuse des lits de briques pourpres et des moellons de roussard. Gravir l'un des escaliers publics pittoresques qui franchissent la muraille pour rejoindre la vieille ville perchée, en observant les poternes d'accès antiques et les reprises architecturales médiévales greffées sur le rempart antique.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_eglise_nd_de_la_couture",
    name: "Le Mans - Église Abbatiale Notre-Dame-de-la-Couture",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 54,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Ancienne abbatiale bénédictine réputée pour son porche du Jugement Dernier",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 48.002274,
    lng: 0.199818,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOuM2uUFwQM1fxHoZzYnvhSmrw1SKWwrkDPcUanci3haP9Zxn0rfPPT6E37QF9gR5KWXZ8asCbEJF_Bi2YOWATWiMAEt9KhYEBMZwMcrKgXZwUca8yYKYb9WwpmPvHLO7lL3tfEZE4b2bUKKJJfy-E9YA=w1373-h919-s-no-gm?authuser=0",
    description: "Fondée au VIe siècle sous l'épiscopat de saint Bertrand sous le nom d'abbaye Saint-Pierre-et-Saint-Paul de la Couture (dérivé de « cultura », en référence aux terres fertiles cultivées en dehors de l'enceinte fortifiée), Notre-Dame-de-la-Couture est l'un des plus anciens et prestigieux établissements monastiques bénédictins du Maine. Reconstruite à l'époque romane puis remaniée aux XIIe et XIIIe siècles, l'église abbatiale présente une impressionnante façade occidentale encadrée de deux tours carrées massives coiffées d'ardoise, au centre de laquelle s'ouvre un portail gothique exceptionnel dont le tympan sculpté figure un Jugement Dernier foisonnant d'expressivité. L'intérieur déploie une large nef unique sans bas-côtés couverte de grandioses voûtes Plantagenêt bombées à liernes et nervures multiples, caractéristiques de l'apogée gothique angevin. Le sanctuaire abrite des chefs-d'œuvre artistiques inestimables, dont cinq statues monumentales en terre cuite polychrome du XVIIe siècle réalisées par Germain Pilon et Charles Hoyau, ainsi que le fameux suaire de saint Bertrand d'origine byzantine précieusement conservé dans la crypte romane.",
    visiter: "Contempler depuis la place de la Préfecture la façade monumentale de l'abbatiale et scruter la finesse du tympan du portail central illustrant la résurrection des morts et la pesée des âmes par l'archange saint Michel. Franchir le seuil pour apprécier l'ampleur dégagée de la nef unique baignée d'une lumière douce, en levant les yeux vers les clés de voûte historiées de la croisée angevine. Parcourir les collatéraux du chœur pour admirer les chefs-d'œuvre de la sculpture maniériste mancelle en terre cuite, notamment la Vierge de Pitié et sainte Cécile drapée de Charles Hoyau, avant de descendre dans la crypte du Xe siècle abritant les reliques de saint Bertrand.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_vieille_ville_pilier_rouge",
    name: "Le Mans - Cité Plantagenêt & Maison du Pilier-Rouge",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 68,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Joyau d'urbanisme médiéval et d'hôtels Renaissance préservé sur vingt hectares",
    century: "XVe siècle",
    category: "star",
    counts: {},
    lat: 48.008385,
    lng: 0.196916,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO8iYqD6CqUCfJIDrggcLMsmWwkp74fEMO5s9RMmUF9WOnAzI7A3aKwb4nQdUEjeYVXyGzhfs4YpGMeL_b__Y17gkTEK9MtLy9dCcPWSROrsmmmr-JlMXx6bFAhAWhf8nVQkJrXawl_Vi7DKS2qhAV0Yw=w1373-h919-s-no-gm?authuser=0",
    description: "S'étendant sur une vingtaine d'hectares protégés au sommet de la butte antique, la Cité Plantagenêt — cœur historique du Mans où naquit le roi Henri II d'Angleterre en 1133 — est l'un des ensembles urbains anciens les mieux conservés et les plus homogènes d'Europe. Entièrement ceinturée de ruelles pavées à rigole centrale, de passages dérobés et de cours d'hôtels particuliers Renaissance aux façades de calcaire et de tuffeau richement sculptées, la cité offre un voyage immersif au cœur des XVe et XVIe siècles. Au carrefour stratégique de la Grande-Rue et de la rue Saint-Pavin se dresse l'emblématique Maison du Pilier-Rouge, bâtie vers le milieu du XVe siècle. Cette remarquable demeure à pans de bois et encorbellements successifs doit son nom au puissant poteau cornier en chêne massif peint en rouge vermillon qui soutient la sablière d'étage. Sculpté de motifs gothiques flamboyants et de figures d'artisans, ce pilier servait d'enseigne visible de loin pour les étals des marchands qui déployaient leurs échoppes à volets rabattants sur la chaussée médiévale.",
    visiter: "Flâner au hasard des ruelles pavées de la Cité Plantagenêt (rue de la Reine-Bérengère, rue des Chanoines) pour admirer l'alignement des maisons en pans de bois colorés et les portes sculptées des hôtels Renaissance (hôtel de Clévant, hôtel de Vignolles). Faire une halte prolongée devant la Maison du Pilier-Rouge pour examiner les détails sculptés du grand poteau d'angle rouge et comprendre l'organisation d'une échoppe médiévale avec ses auvents en saillie. Découvrir les cours intérieures pavées, monter les escaliers des Pans-de-Gorron et s'imprégner de l'atmosphère cinématographique qui a servi de décor naturel à de nombreux films d'époque, dont « Cyrano de Bergerac » et « Le Bossu ».",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_eglise_saint_benoit",
    name: "Le Mans - Église Saint-Benoît",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 46,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Sanctuaire d'origine médiévale campé au pied de la muraille romaine",
    century: "XXe siècle",
    category: "religieux",
    counts: {},
    lat: 48.006588,
    lng: 0.193641,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNtisHpmS1lyvm-EJzseeysHZGcktd3syLgtyP5_fsvy3AUwNYBXilA7DZQlpPnF8oRySiMcbGHGJObdVmtYUXpRGNzX1PzUlTQlPiBLCu0yWkqXo9ojNg0OenPqGUWUTQtVQiBivxvt9TlyhhaABnFTQ=w1379-h919-s-no-gm?authuser=0",
    description: "Établie au pied occidental de l'éperon de la vieille ville à quelques mètres des berges de la Sarthe et de l'enceinte romaine, l'église Saint-Benoît est un sanctuaire intimiste au passé millénaire profondément lié à la vie fluviale et ouvrière mancelle. Fondée au XIIe siècle sous le patronage de l'abbaye Saint-Julien du Pré pour desservir la corporation active des mariniers, tanneurs et blanchisseurs qui travaillaient le long du cours d'eau, l'église a été remaniée à la fin du XVe siècle au lendemain de la guerre de Cent Ans. De cette époque date sa nef unique couverte d'une élégante charpente lambrissée en berceau brisé soutenue par des entraits et poinçons sculptés de gueules de monstres et d'engoulants. Bâtie en moellons de grès roussard et de calcaire beige, elle conserve des baies flamboyantes à remplages soignés ainsi qu'une collection remarquable de retables en tuffeau et toiles peintes du XVIIe siècle illustrant la vie de saint Benoît de Nursie.",
    visiter: "Rejoindre l'église depuis le pont Yssoir ou en descendant les venelles de la Cité Plantagenêt vers les quais de la Sarthe. Pousser la porte pour découvrir la quiétude de sa nef unique et lever les yeux vers la voûte en coque de bateau inversée pour observer les sablières peintes et les gueules d'engoulants sculptées dans le chêne massif. Admirer le retable du maître-autel encadré de colonnes torses en marbre ainsi que les statues en terre cuite mancelle représentant les saints protecteurs des mariniers, puis apprécier le point de vue en sortant sur les falaises rocheuses soutenant les jardins suspendus de la cathédrale.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_place_de_la_republique",
    name: "Le Mans - Place de la République",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 51,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Cœur battant et carrefour historique de la vie urbaine mancelle depuis le XIXe siècle",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 48.004234,
    lng: 0.196562,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM0Isi78EVDez5F452dVVNBqXYa3CeWbVNfqlM8-Gyk1unSDaCboJ2Rmf3djYtSnHLOnF8XKEiJQvLOjRIloJu5BVgrbiz-yEbEGW6KZFYeiHsHKXP39xdbQS0SumYvas2voTuS9PePYSG-9Gc_KzlfKg=w1225-h919-s-no-gm?authuser=0",
    description: "Aménagée à partir de la fin du XVIIIe siècle à l'emplacement des anciens fossés de la ville et de la porte médiévale des Ponts-Neufs, la place de la République — autrefois nommée place Royale puis place des Halles — s'impose comme le centre névralgique, commerçant et civique du Mans contemporain. Conçue selon un plan rectangulaire régulier bordé d'immeubles cossus en pierre de tuffeau et balcons en fer forgé du Second Empire, la place opère la jonction spatiale harmonieuse entre le quartier commerçant piétonnier et les avenues modernes. Elle est dominée par plusieurs édifices de grand caractère, au premier rang desquels se dresse la chapelle conventuelle de la Visitation avec son dôme remarquable, ainsi que l'ancien hôtel de la Caisse d'Épargne et l'immeuble monumental du Crédit Lyonnais orné de cariatides sculptées. Traversée par les lignes du tramway moderne qui ont rendu à l'espace central sa vocation piétonne conviviale, la place vibre au rythme des terrasses de cafés animées, des rassemblements populaires et des marchés gourmands.",
    visiter: "Traverser cette vaste esplanade piétonne pavée de granit clair pour s'imprégner du dynamisme urbain manceau et contempler les élégantes façades haussmanniennes en calcaire blanc ordonnancées autour de la place. S'arrêter devant l'immeuble d'angle de la Caisse d'Épargne pour admirer son horloge monumentale et ses sculptures allégoriques avant de contempler la façade classique de la chapelle de la Visitation. Profiter d'une pause en terrasse face aux fontaines jaillissantes pour observer le passage du tramway, puis s'engager dans la commerçante rue des Minimes bordée de boutiques ou remonter vers la vieille ville par la pittoresque rue des Ponts-Neufs.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_chapelle_de_la_visitation",
    name: "Le Mans - Chapelle de la Visitation",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 52,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Rarissime chef-d'œuvre de l'architecture religieuse baroque en pays manceau",
    century: "XVIIIe siècle",
    category: "religieux",
    counts: {},
    lat: 48.004217,
    lng: 0.195677,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP9Vw36xCUFj6dqM3UQLVot-RpsP5cEFcqFd8NjyI5bg6haxYxQvelnLMlsSEICcsNPW3t0Mw8CNMT91Utmy16sR2C7-KhHTYG7DOuVn23LQD7QzD23WLd7D4R4UwTqCT7KRldYzoQvsziS2gB2raLO9A=w1379-h919-s-no-gm?authuser=0",
    description: "Bordant le côté occidental de la place de la République, la chapelle de la Visitation est l'un des rares et plus élégants édifices baroques de l'Ouest de la France, inspiré des modèles religieux du classicisme romain et parisien. Érigée entre 1714 et 1723 selon les plans de l'architecte et religieuse sœur Anne-Victoire Pillon pour le couvent des Visitandines, elle se signale de loin par son monumental dôme octogonal coiffé d'un lanternon en ardoise qui culmine à plus de trente mètres de hauteur. Sa façade sobre en pierre de taille de tuffeau, scandée de pilastres toscans et surmontée d'un grand fronton triangulaire, masque une composition intérieure en croix grecque d'une harmonie géométrique saisissante. Les religieuses cloîtrées y assistaient aux offices depuis des tribunes supérieures discrètement grillagées donnant directement sur le sanctuaire central baigné par la lumière dorée tombant des huit baies de la coupole.",
    visiter: "Pousser le lourd portail de chêne pour pénétrer sous l'immense coupole centrale et ressentir la plénitude de son plan centré circulaire. Lever les yeux vers le dôme pour admirer la pureté des arcs de pierre et le jeu de lumière zénithale filtrée par la lanterne sommitale. Découvrir le maître-autel baroque richement sculpté de marbre blanc et de stucs dorés, ainsi que la chapelle funéraire latérale abritant la mémoire des sœurs martyres sous la Terreur révolutionnaire. Prendre le temps d'observer les balustrades des anciennes tribunes en fer forgé où les religieuses contemplaient le Saint-Sacrement sans être vues des fidèles de la nef.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_fontaine_saint_aldric",
    name: "Le Mans - Fontaine Saint-Aldric",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 78,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Source miraculeuse carolingienne enchâssée dans un édicule de pierre séculaire",
    century: "XVIe siècle",
    category: "fontaine",
    counts: {},
    lat: 48.011950,
    lng: 0.220299,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPlqPUvR46j5Ko__hBAAP4OwoAhnb-UBamMb_HASSR7jCdbLbrJRbbLyleED9uvHkymgvub5vAmIdqQQBYT_E5dacjd7MCbkFHC6G2vVVCSfy62tUdnwGylJZ3T1LSD0RrNW_9hfBO6_Gx-HqzJP8IPZA=w613-h919-s-no-gm?authuser=0",
    description: "Dissimulée dans un vallon paisible au nord-est du centre urbain dans le quartier éponyme, la fontaine Saint-Aldric est une source miraculeuse millénaire dont les origines remontent directement à la renaissance carolingienne du IXe siècle. Selon les chroniques ecclésiastiques montoises, l'évêque saint Aldric (790-856), conseiller intime des empereurs Louis le Pieux et Charles le Chauve, découvrit cette source bienfaisante jaillissant des failles gréseuses et fit aménager un bassin de captage en pierre pour alimenter en eau pure les populations et créer une halte hospitalière pour les voyageurs. Réputée depuis le Haut Moyen Âge pour ses vertus thérapeutiques miraculeuses — en particulier pour le soulagement des affections oculaires et des fièvres —, la source fut protégée par un édicule voûté en pierre de roussard et calcaire surmonté d'une niche abritant la statue du prélat. Traversant les siècles comme un lieu de dévotion populaire et de pèlerinage paroissial, cette fontaine demeure un havre de fraîcheur et un précieux témoin de la mémoire spirituelle et hydraulique du Mans.",
    visiter: "Marquer une halte recueillie devant ce monument d'eau séculaire niché dans son écrin de verdure ombragé d'acacias et de frênes. Observer l'appareillage rustique des blocs de grès patinés par le ruissellement continuel de l'eau et s'approcher de la niche abritant la silhouette sculptée de saint Aldric crossé et mitré. Écouter le murmure limpide du mince filet d'eau se déversant dans le bassin inférieur pavé, et prendre le temps d'apprécier la tranquillité de ce site préservé qui perpétue depuis plus de onze siècles la mémoire du grand évêque bâtisseur du Maine.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_musee_de_tesse",
    name: "Le Mans - Musée de Tessé (Beaux-Arts & Égypte Antique)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 60,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Musée des beaux-arts installé dans l'ancien évêché abritant la tombe reconstituée de Néfertari",
    century: "XIXe siècle",
    category: "musee",
    counts: {},
    lat: 48.010307,
    lng: 0.203472,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOFfLvtT0rSnCxw7a_L6wmfIq-lr2KBCfNBfbz6sRtX2WRRsITKMSklps8m3ns2yHw10Cqt5lmjNYcTAJ5c1Ro-C1fQ_m5dCp-0F-_WWNsfo6gHbi6Gdnk4vKIi4oSOo1DQhCRVLfn-lvH4u3aMuZG7DA=w1373-h919-s-no-gm?authuser=0",
    description: "Aménagé dans l'ancien palais épiscopal de Tessé édifié au XIXe siècle en bordure du splendide parc paysager éponyme, le musée de Tessé est le musée des Beaux-Arts de la ville du Mans. Héritier des riches saisies révolutionnaires et des donations des grandes familles nobles sarthoises, l'établissement conserve une collection exceptionnelle de peintures et sculptures s'étendant du XIVe au XXe siècle, particulièrement illustrée par les primitifs italiens et flamands, la peinture caravagesque du Grand Siècle et les toiles majeures de Philippe de Champaigne, Georges de La Tour et Simon Vouet. L'originalité mondiale du musée réside toutefois dans son sous-sol : un espace muséographique spectaculaire entièrement dédié à l'Égypte pharaonique, abritant la reconstitution grandeur nature et à l'identique de deux tombes princières thébaines de la Vallée des Reines, dont le célèbre caveau funéraire de la reine Néfertari, grande épouse royale de Ramsès II, ainsi que celui du scribe royal Sennefer.",
    visiter: "Déambuler dans les salons du rez-de-chaussée pour contempler les chefs-d'œuvre de la peinture d'histoire classique, la célèbre série des toiles comiques du « Roman Comique » de Scarron peintes par Jean-Baptiste Pater, ainsi que l'étonnant « Sommeil d'Élie » de Philippe de Champaigne. Descendre ensuite l'escalier menant à la galerie égyptienne souterraine pour une expérience immersive unique : pénétrer à l'intérieur des répliques exactes des chambres funéraires de Néfertari et de Sennefer pour admirer l'éclat flamboyant des hiéroglyphes et fresques mythologiques reproduites avec une minutie scientifique absolue. Conclure la visite par une flânerie reposante au bord du bassin et sous les arbres centenaires du jardin paysager de Tessé.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_musee_jean_claude_boulard",
    name: "Le Mans - Musée Jean-Claude Boulard (Carré Plantagenêt)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 64,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Musée d'archéologie et d'histoire déployé au pied de la muraille romaine",
    century: "XXIe siècle",
    category: "musee",
    counts: {},
    lat: 48.007269,
    lng: 0.198076,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPB1NNS8hur43BW1GohV-pK1nBNFJF0Qb8-miOzwcmm2Ue5j4OsCxuBcMQfqSepUYq3FMnBuIILWcdU3LGsqesrR41epmMDYP5so9NGJF1Da1TLhnJHVXgeuEJWvUVeOrj-GLrhsFVVGmbUv0vdDH6zPw=w1225-h919-s-no-gm?authuser=0",
    description: "Inauguré en 2009 sous le nom de Carré Plantagenêt puis rebaptisé en hommage à l'ancien sénateur-maire du Mans, le musée d'Archéologie et d'Histoire Jean-Claude Boulard est un joyau muséographique contemporain inséré au pied de la muraille romaine et des contreforts de la vieille ville. Conçu par les architectes de l'atelier de l'Île, le bâtiment associe avec virtuosité la pierre calcaire blonde, le verre et l'acier dans un dialogue subtil avec les maçonneries gallo-romaines antiques mises au jour in situ. Sur plus de mille deux cents mètres carrés d'expositions permanentes, le musée retrace l'épopée humaine et matérielle du territoire sarthois depuis les premiers bifaces paléolithiques et les trésors gaulois des Aulerques Cénomans, jusqu'au rayonnement exceptionnel de la cour d'Anjou-Plantagenêt au Moyen Âge. Le parcours met en valeur des trésors nationaux, notamment le prestigieux trésor monétaire gaulois d'Allonnes, les décors peints thermaux romains de la cour d'Assé et le rarissime émail champlevé de Geoffroy V Plantagenêt, chef-d'œuvre absolu de l'orfèvrerie limousine du XIIe siècle.",
    visiter: "Débuter le parcours muséographique chronologique au niveau des fondations archéologiques pour observer les vestiges authentiques de l'enceinte antique intégrés à l'architecture moderne. Examiner les somptueuses parures gauloises en or et bronze ainsi que les maquettes interactives restituant la cité romaine de Vindunum et ses arènes monumentales. Marquer un temps d'arrêt devant la célébrissime plaque funéraire en émail champlevé de Geoffroy V Plantagenêt pour admirer la finesse des émaux bleus et or représentant le comte d'Anjou armé de son bouclier aux lionceaux d'or. Profiter de la muséographie tactile et interactive particulièrement adaptée aux familles pour comprendre l'évolution du bâti médiéval manceau.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_musee_vert",
    name: "Le Mans - Le Musée Vert (Muséum d'Histoire Naturelle)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 53,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Muséum d'histoire naturelle abritant des collections paléontologiques mondialement renommées",
    century: "XXe siècle",
    category: "musee",
    counts: {},
    lat: 47.986791,
    lng: 0.208420,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOtftrMtp6EZFo-FuL9mueYZI21vq9gRuFi_vvjvve3t5WL8YxEpHwvCQFlPucHsaY6sl_yqdebrc9KRfoDLkpwCXGlezQ8u9zK0nJL4xyOS2GAWGQaxng49c-gXNzzLekYRG27G8g7_2VjMFypzq22Ww=w1379-h919-s-no-gm?authuser=0",
    description: "Installé dans le quartier sud du Mans au sein d'un ancien groupe scolaire en briques et tuffeau réhabilité, le Musée Vert est le Muséum d'histoire naturelle de la métropole mancelle. Conservant plus de quatre cent mille spécimens naturalisés, roches, fossiles et herbiers historiques constitués depuis le début du XIXe siècle par les savants naturalistes sarthois, l'institution jouit d'une réputation scientifique internationale, particulièrement dans le domaine de la paléontologie. Le musée abrite en effet les stratotypes de référence mondiale du Cénomanien (période géologique du Crétacé supérieur définie au Mans en 1847 par Alcide d'Orbigny) et présente de spectaculaires fossiles de reptiles marins, de dinosaures, d'ammonites géantes et de poissons préhistoriques exhumés dans les carrières de calcaire et de roussard de la région. Ses galeries permanentes consacrées à la faune régionale, aux oiseaux migrateurs de la vallée de la Sarthe et à la géologie offrent une plongée pédagogique vivante au cœur de la biodiversité et de l'histoire de la Terre.",
    visiter: "Explorer la salle permanente « Sarthe Sauvage » pour découvrir la richesse des écosystèmes forestiers, bocagers et fluviaux locaux à travers des dioramas fidèlement reconstitués présentant cervidés, loutres d'Europe, rapaces nocturnes et passereaux protégés. S'attarder dans la section géologique et paléontologique « Mémoire de Terre » pour contempler les squelettes fossilisés d'ichtyosaures et de plésiosaures, ainsi que les dents géantes de carcharodontosaures découvertes en Sarthe. Participer aux ateliers interactifs de microscopie et consulter les expositions temporaires thématiques qui abordent avec clarté les grands enjeux écologiques et de préservation de la biodiversité planétaire.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_musee_des_24_heures",
    name: "Le Mans - Musée des 24 Heures du Mans",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 58,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Temple international de l'endurance automobile et panthéon des bolides de légende",
    century: "XXe siècle",
    category: "musee",
    counts: {},
    lat: 47.956974,
    lng: 0.208782,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMUCfEwlxdKjv2QO-pWnmeTku0bYhSp17y01ZJ5kqzlJ3rf6v0bJU0AVgyzCsvZd9GxQhvi-mXxL5rVxQAwORgVhGDAOgqP8Z3I6r2oERTaCmsL7md869OB0CFkooP2147DbDgIo-LvzHZ5d6qYBZp0-Q=w1379-h919-s-no-gm?authuser=0",
    description: "Implanté à l'entrée principale du mythique circuit des 24 Heures du Mans, le musée officiel de l'Automobile Club de l'Ouest (ACO) est un sanctuaire d'envergure mondiale célébrant la plus grande et exigeante course d'endurance automobile de la planète, disputée sans discontinuer depuis 1923. Déployé sur une vaste nef muséographique de cinq mille mètres carrés entièrement rénovée, l'établissement retrace l'épopée héroïque des pilotes, des constructeurs visionnaires et des innovations technologiques nées sur l'asphalte manceau (freins à disque, phares antibrouillard, moteurs rotatifs, hybridation et motorisation hydrogène). La collection permanente rassemble plus de cent quarante véhicules d'exception ayant forgé la légende de l'épreuve : des pionnières Chenard et Walcker des années vingt jusqu'aux monstres de puissance contemporains, en passant par les légendaires Bentley Boys, Jaguar Type D, Ford GT40 victorieuses du duel historique face à Ferrari, Porsche 917, Matra-Simca bleu de France, Peugeot 905 et prototypes Audi e-tron invaincus.",
    visiter: "Parcourir la grande allée des légendes pour contempler au plus près les carrosseries fuselées des prototypes victorieux portant encore les traces héroïques de la course (poussière de frein et projections de gomme). Découvrir la galerie des héros mettant en scène les combinaisons, casques et trophées des plus grands pilotes de l'histoire, d'Ickx à Kristensen en passant par Pescarolo. S'immerger dans les espaces interactifs présentant des simulateurs de pilotage, des moteurs éclatés et des projections d'archives audiovisuelles captant l'intensité des départs en épi et des relais nocturnes sous la pluie battante, avant d'accéder directement aux passerelles surplombant le virage du Raccordement.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
  {
    id: "le_mans_circuit_des_24_heures",
    name: "Le Mans - Circuit des 24 Heures (Ligne Droite des Hunaudières & Virages Mythiques)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 54,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Tracé mythique de 13,6 kilomètres mêlant portions routières publiques et piste permanente",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 47.951763,
    lng: 0.207054,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNU7P4Ly3ubwWYXn2aJoA_il2YgcNQDv1xraCugb_bTEsdSOc9SKWfp2mo7AFW6TA_ZsoAWYwE-aQzVv4HKYvH5WW5B4mHhiMcpN-LETnsqU3I3m8WLs7zaRY7UhxaF3ntrim69DQ8_fgTwe4xIiWNJnQ=w1225-h919-s-no-gm?authuser=0",
    description: "Créé en mai 1923 sous l'égide de Georges Durand et de l'Automobile Club de l'Ouest, le grand circuit des 24 Heures du Mans — officiellement baptisé circuit de la Sarthe — est un théâtre sportif mondialement mythique mesurant treize kilomètres six cent vingt-six. Unique en son genre dans le sport mécanique moderne, son tracé non permanent utilise pour une large part des portions de routes départementales ouvertes à la circulation publique tout au long de l'année, raccordées à la piste fermée du circuit Bugatti. Le ruban d'asphalte traverse des portions légendaires qui ont écrit l'histoire de la vitesse pure : la passerelle Dunlop enjambant le premier virage serré, la vertigineuse courbe de la Forêt menant au virage du Tertre-Rouge, puis la vertigineuse ligne droite des Hunaudières (Mulsanne Straight) longue de près de six kilomètres où les bolides atteignaient plus de quatre cents kilomètres par heure avant l'adjonction de deux chicanes en 1990, sans oublier le freinage d'Arnage et l'enchaînement technique des courbes Porsche.",
    visiter: "Franchir l'arche d'entrée du circuit pour monter dans les tribunes surplombant la célèbre ligne droite des stands et admirer l'emblématique passerelle publicitaire Dunlop dressée au sommet de la montée. S'approcher de la piste pour ressentir l'inclinaison des virages serrés du raccordement et de la chicane Ford, ou emprunter en voiture ou à vélo les portions publiques de la route départementale D338 pour parcourir soi-même la légendaire ligne droite des Hunaudières jusqu'au virage en épingle d'Arnage. Privilégier une visite lors des essais ou des grandes épreuves historiques (Le Mans Classic) pour vibrer au grondement des mécaniques lancé dans la nuit sous les projecteurs géants.",
    link: "https://photos.google.com/share/AF1QipN6hvq2Fyep-bA3X2sqUF7bO-kwuwNvoIUiXUbfk5q2N47EaSZEtx3WIuDdyD8grQ?key=Q0E2Nl9xdy1yMFd4SFdyWjJjX0hyQVA1MUJjNVpB"
  },
   {
    id: "montfort_le_gesnois_tombe_du_croise",
    name: "Montfort-le-Gesnois - Tombeau du Croisé (Cimetière Saint-André)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Montfort-le-Gesnois",
    altitude: 62,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Plus ancien monument funéraire de la Sarthe orné de symboles de chevalerie",
    century: "XIIe siècle",
    category: "star",
    counts: {},
    lat: 48.049735,
    lng: 0.419438,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPOOnVBXCWzAazKaCJUTDXOWTAywkqUiaqsWdn64t2sZDQLBv6lZ1C21lAN5h3M6LMIw_yJ8tBQ8G7ArDLOSbvfNrdZ1BT3a8G_u89TEoDaK090_swwPqaP8eT7tYmidVSByfxbjJ2riinWJ-J3azEtjA=w1818-h2416-s-no-gm?authuser=0",
    description: "Érigé à l'ombre des ifs séculaires du cimetière Saint-André dans l'ancienne paroisse de Pont-de-Gennes, le tombeau dit du Croisé est considéré par les historiens comme le plus vénérable et ancien monument funéraire sculpté du département de la Sarthe. Daté de la fin du XIIe siècle ou des premières années du XIIIe siècle, ce sépulcre en grès roussard et calcaire gréseux local s'apparente aux tombes d'apparat des chevaliers bannerets revenus des expéditions de Terre sainte à l'époque de la troisième croisade menée par Philippe Auguste et Richard Cœur de Lion. La tradition locale et les chroniques du Perche sarthois y associent la mémoire d'un seigneur de la maison de Lauresse ou de Pont-de-Gennes, parti combattre en Orient avant de revenir finir ses jours en dévotion sur ses terres ligériennes. Le monument se compose d'un coffre de pierre surmonté d'une imposante dalle sculptée en bâtière, profondément gravée d'une longue épée de chevalier à garde droite et d'une croix pattée aux extrémités ancrées, symboles indubitables de la vocation militaire et de la foi chrétienne du défunt.",
    visiter: "Pénétrer dans le cimetière Saint-André par la route de Connerré pour rejoindre l'allée centrale où se dresse ce tombeau médiéval exceptionnellement préservé des outrages du temps. Approcher la dalle sommitale pour examiner de près la gravure en bas-relief de l'épée médiévale à pommeau discoïdal et la croix de Terre sainte sculptées dans le grain sombre de la pierre de roussard, témoignages poignants des rituels d'inhumation de la noblesse féodale du Haut Moyen Âge. Prendre le temps de contempler la patine multiséculaire et les marques de taille laissées par les maîtres carriers d'autrefois, avant de poursuivre la découverte du riche patrimoine de Montfort-le-Gesnois vers le pont romain enjambant l'Huisne et l'église Saint-Gilles située à quelques centaines de mètres.",
    link: "https://photos.google.com/share/AF1QipOb3ShaKNG_lsJde2nz8dRyz9nGHRogFP31vgkL6iaR4Hd7feMJ2OdoN8Q2CULzwg?key=WTRicjlYODZGMUhveTFOQXdEVk0tNEt3Ry1HVTBn"
  },
   {
    id: "le_mans_abbaye_de_l_epau",
    name: "Le Mans - Abbaye Royale de l'Épau",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Yvré-l'Évêque",
    altitude: 48,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Chef-d'œuvre cistercien fondé en 1229 par la reine Bérengère de Navarre",
    century: "XIIIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.991181,
    lng: 0.242396,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOE8gI6nXJGhHu3-4IMkuMnNlPyf1iOu2DnhgcSy1i7TUzbtmM6MbJQpWjRUbPsrmb5B2JNnte3N1KAo4dll2EIgq0xSAKotworPOztozdKhJwk8EspeHHCW7AccPCuwkmskow1iWXEr1gLyHNJEA4f1w=w1658-h1244-s-no-gm?authuser=0",
    description: "Fondée en 1229 par la reine Bérengère de Navarre, veuve de Richard Cœur de Lion et dame du Mans, l'abbaye royale de l'Épau (originellement nommée la Piété-Dieu de l'Épau) est l'un des ensembles monastiques cisterciens les plus complets et remarquablement préservés de l'Ouest de la France. Érigée sur les rives fertiles de l'Huisne selon la stricte règle de saint Bernard prônant le dépouillement décoratif et la pureté des lignes, l'abbaye déploie une superbe église abbatiale en pierre calcaire de Bernay et roussard, dotée d'un vaste transept baigné par la lumière d'une immense verrière de chevet à réseau rayonnant. Les bâtiments conventuels préservent une exceptionnelle salle capitulaire aux voûtes d'ogives surbaissées retombant sur de fines colonnes monolithes, le chauffoir des moines, le scriptorium ainsi que l'immense dortoir haut à charpente en carène de vaisseau renversée lambrissée de chêne. Après avoir traversé les tourments de la guerre de Cent Ans et les dégradations agricoles post-révolutionnaires, le domaine a été racheté et méticuleusement restauré par le Conseil départemental de la Sarthe, abritant notamment le gisant d'origine en pierre de tuffeau de la reine Bérengère.",
    visiter: "Franchir le porche monumental pour pénétrer dans la cour d'honneur avant d'entrer dans la majestueuse église abbatiale, où règne une acoustique souveraine mise en valeur lors du prestigieux festival musical de l'Épau. Se recueillir devant le tombeau et le gisant médiéval de la reine Bérengère de Navarre, parée de ses attributs royaux et tenant un livre de prières entre ses mains. Parcourir les trois galeries subsistantes du cloître cistercien et s'arrêter dans la salle du chapitre pour contempler l'équilibre parfait de ses croisées d'ogives du XIIIe siècle. Monter à l'étage pour admirer la nef monumentale du dortoir des moines et sa charpente médiévale en chêne longue de quarante mètres, puis terminer par une flânerie dans le jardin potager biologique monastique d'un hectare et demi cultivé en permaculture selon les préceptes historiques cisterciens.",
    link: "https://photos.google.com/share/AF1QipPlfdZcGXM8KMgTnk1rdclEVZ3CZg3rIqYyRAkJIj7Kwo52vC-Ctwlm4YpYSeLm2g?key=eml2TnB3bDloX1lYNmtxRjdYQUJJUTBZTVR6XzhR"
  },
  {
    id: "le_mans_plan_d_eau_arche_de_la_nature",
    name: "Le Mans - Plan d'Eau de l'Arche de la Nature",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Yvré-l'Évêque",
    altitude: 46,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Bassin lacustre paysager au cœur des cinq cents hectares du grand parc périurbain",
    century: "",
    category: "lac",
    counts: {},
    lat: 47.992376,
    lng: 0.252720,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPkqSkIYyE9BpiPJD112OUTC_2LlfkXKIOlgbdphRMwT4AEtS6qHAAak4ejCfjnzlRrYKjRZigaJ2JnRyH-eqM3sPhKkmWF__j8ELvumVmaWWlJ4i9cXpXqNlM6U-zzXSI8WReZ3qYF97FNxcjzPn4Dpg=w1658-h1107-s-no-gm?authuser=0",
    description: "Étendue d'eau paisible miroitant au cœur du vaste domaine protégé de l'Arche de la Nature — poumon vert de plus de quatre cent cinquante hectares aménagé aux portes orientales de l'agglomération mancelle —, le plan d'eau constitue un biotope humide remarquable enserré entre prairies humides bocagères et massifs forestiers de résineux et de feuillus. Alimenté par les rus secondaires et les nappes alluviales de la basse vallée de l'Huisne, ce bassin lacustre a été pensé pour favoriser la biodiversité faunistique et floristique locale tout en offrant une coupure naturelle apaisante aux promeneurs et cyclistes. Ses rives douces, plantées de saules pleureurs, de frênes, d'iris d'eau et de ceintures de roseaux, servent de zone de gagnage et de refuge privilégié pour une riche avifaune aquatique comprenant grèbes huppés, foulques macroules, martins-pêcheurs et hérons cendrés.",
    visiter: "Faire le tour pédestre complet du plan d'eau en empruntant les sentiers stabilisés aménagés sur les berges herbeuses, rythmés par des pontons de bois discrètement intégrés pour l'observation des oiseaux et la détente au fil de l'eau. Profiter des trouées paysagères pour admirer les reflets de la forêt dans l'eau calme et écouter le concert des grenouilles et passereaux aquatiques. Poursuivre la promenade vers la Maison de la Prairie toute proche et ses enclos d'espèces animales domestiques régionales rustiques (bovins Saosnois, porcs Blanc de l'Ouest, baudets du Poitou), avant d'explorer les vastes allées cavalières et forestières menant vers le bocage sarthois.",
    link: "https://photos.google.com/share/AF1QipPlfdZcGXM8KMgTnk1rdclEVZ3CZg3rIqYyRAkJIj7Kwo52vC-Ctwlm4YpYSeLm2g?key=eml2TnB3bDloX1lYNmtxRjdYQUJJUTBZTVR6XzhR"
  },
  {
    id: "le_mans_maison_de_l_eau",
    name: "Le Mans - Maison de l'Eau & Bassins Historiques",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Le Mans",
    altitude: 44,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Ancienne usine des eaux du Mans du XIXe siècle réhabilitée en pôle éco-pédagogique",
    century: "XIXe siècle",
    category: "musee",
    counts: {},
    lat: 47.994224,
    lng: 0.236399,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP2Py6jbA6goVwxwNNzTUtcCs5hxY6Tk7tLwzJZUR6tuYmyMteo3dJkdd8hGNaThF7nHL9ueZUeHopMmjj4o-3ri1Gt5o8oVbVQTDmyicgGmnLTkDnW9M8EIQ5TEvfNQGmmgxey3Yk920G2qRTJCMtF2Q=w1658-h1105-s-no-gm?authuser=0",
    description: "Installée dans l'ancienne usine des eaux de la ville du Mans construite en 1854 sur la rive gauche de l'Huisne, la Maison de l'Eau constitue un témoignage majeur de l'archéologie industrielle sarthoise du Second Empire au service de la salubrité publique urbaine. Conçu sous la direction de l'ingénieur hydraulicien Ernest Bollée, ce complexe technique avait pour mission d'extraire, filtrer et refouler quotidiennement l'eau de la rivière vers les réservoirs sommitaillaires de la ville haute afin d'approvisionner les fontaines et les foyers manceaux. Les bâtiments de briques rouges, de tuffeau et de verre abritent toujours dans leur salle des machines la monumentale machine à vapeur thermique de 1904 et les pompes hydrauliques à pistons jumelés entraînées par l'énergie des eaux du barrage de l'Épau. Entièrement réaménagé au sein de l'Arche de la Nature, le lieu propose aujourd'hui un pôle muséographique et aquariologique interactif dévoilant les écosystèmes dulcicoles et les enjeux environnementaux liés à la préservation des rivières.",
    visiter: "Pénétrer dans l'imposant bâtiment historique des machines pour contempler la gigantesque pompe hydraulique à pistons et la machinerie à vapeur du début du XXe siècle, dont les engrenages massifs et les volants d'inertie en fonte lustrée évoquent les grandes heures de l'essor industriel. Descendre observer la chaîne des bassins de décantation et d'épuration avant d'explorer les aquariums géants intérieurs présentant plus d'une trentaine d'espèces de poissons d'eau douce peuplant l'Huisne et la Sarthe (brochets, carpes cuir, tanches, silures et perches). Parcourir le sentier d'interprétation longeant le barrage mobile à aiguilles et le déversoir régulateur pour comprendre le fonctionnement séculaire du moulin à eau et des vannes fluviales.",
    link: "https://photos.google.com/share/AF1QipPlfdZcGXM8KMgTnk1rdclEVZ3CZg3rIqYyRAkJIj7Kwo52vC-Ctwlm4YpYSeLm2g?key=eml2TnB3bDloX1lYNmtxRjdYQUJJUTBZTVR6XzhR"
  },
  {
    id: "le_mans_eolienne_bollee",
    name: "Le Mans - Éolienne Bollée de l'Épau",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Le Mans",
    altitude: 45,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Prouesse d'ingénierie hydraulique à turbine éolienne en fonte (Monument Historique)",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.994634,
    lng: 0.235082,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNQ4tLY1xfqANdg2kXQ8_LP7KOT3Q8MHgslqOXiMrHaRJ6LC3XwpR7ss6nKs2NEqqrVgx0udIG1h1xMQ4UUGLXhMIPr6LR9D-FXKx0K5rrMZ_Jkr3g1TkZBWcsQ86cbITkWNgmTguKxFHiQ2nlgW9xsOg=w1611-h2416-s-no-gm?authuser=0",
    description: "Érigée à quelques pas de la Maison de l'Eau au bord de l'Huisne, l'éolienne Bollée est un chef-d'œuvre mondial de l'ingénierie mécanique sarthoise du XIXe siècle, inventé et breveté en 1868 par le fondeur et mécanicien Ernest-Sylvain Bollée. Conçue comme un aéromoteur à vent novateur destiné au pompage autonome des eaux souterraines sans aucune dépense d'énergie fossile, elle se distingue radicalement des moulins traditionnels par sa turbine circulaire composée d'un stator fixe à aubes directrices et d'un rotor mobile d'une efficacité aérodynamique révolutionnaire pour l'époque. Perchée au sommet d'un pylône élancé en treillis de fer forgé haubané enserrant un escalier hélicoïdal en fonte d'une élégance aérienne, la machine est équipée d'une commande d'orientation par papillon girouette automatique. Classé au titre des Monuments Historiques, cet exemplaire remarquablement restauré illustre le génie inventif de la dynastie industrielle mancelle des Bollée qui marqua profondément l'histoire des cloches, des machines hydrauliques, de l'automobile et de l'aviation.",
    visiter: "Approcher le pied du mât métallique pour admirer la légèreté géométrique du treillis d'acier et la volée suspendue de l'escalier en colimaçon qui permettait aux mécaniciens d'atteindre la nacelle d'entretien située à plus de vingt mètres du sol. Lever les yeux vers la turbine en fonte et son système de carénage à aubes hélicoïdales pour saisir le principe de fonctionnement de ce moteur éolien pionnier. Consulter les pupitres explicatifs bordant l'esplanade décrivant le mécanisme d'engrenages coniques et la transmission par tringle verticale actionnant les pompes de refoulement, avant d'admirer la vue sur les prairies inondables de l'Arche de la Nature et les rives calmes de la rivière.",
    link: "https://photos.google.com/share/AF1QipPlfdZcGXM8KMgTnk1rdclEVZ3CZg3rIqYyRAkJIj7Kwo52vC-Ctwlm4YpYSeLm2g?key=eml2TnB3bDloX1lYNmtxRjdYQUJJUTBZTVR6XzhR"
  },
   {
    id: "san_nicolao_aqueduc_ercate",
    name: "San-Nicolao - Aqueduc & Pont de l'Ercate (U Gualdu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "San-Nicolao",
    altitude: 110,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Ouvrage d'art hydraulique du XIXe siècle enjambant le torrent au cœur du maquis",
    century: "XIXe siècle",
    category: "pont",
    counts: {},
    lat: 42.377728,
    lng: 9.517242,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP9REr56i0PueI5feoksqDYaxQXbFnxV920YFvwykFi5-q8ewPRqyCuEz2ytowz3kWUTEJP9Riqdoknep5SPDh3yEZE4Bj00j4NDbp4ywxI0fhn5Pd9Sx50m9TUNR8Nu4j-cH_nurOUxEkArnSrneXpZA=w1886-h1258-s-no-gm?authuser=0",
    description: "Niché dans un vallon encaissé et luxuriant de la Costa Verde sur les hauteurs de Moriani-Plage, l'aqueduc de l'Ercate — souvent associé au pont-aqueduc du Gualdu — est un remarquable chef-d'œuvre de génie civil et d'ingénierie hydraulique rurale édifié au cours du XIXe siècle. Conçu pour capter les eaux vives et impétueuses dévalant des contreforts du massif de la Castagniccia afin d'alimenter les cultures en terrasses de la plaine, les moulins à farine et les premières infrastructures agricoles du littoral oriental, cet ouvrage monumental enjambe la gorge rocheuse au moyen d'élégantes arches en plein cintre d'une grande hardiesse. Bâti en moellons de schiste vert et de gneiss soigneusement taillés et jointoyés au mortier de chaux grasse, l'aqueduc s'intègre avec une rare harmonie au sein d'une nature sauvage où se mêlent fougères arborescentes, lianes de salsepareille, aulnes et mousses épaisses. Traversé en sa partie sommitale par un canal d'écoulement pavé, il témoigne de la maîtrise technique des maîtres maçons insulaires de l'époque qui savaient défier le relief accidenté des vallées corses pour dompter la précieuse ressource aquifère.",
    visiter: "Rejoindre ce site enchanteur en empruntant le sentier ombragé qui part des abords de la route de corniche ou des sentiers de randonnée de la boucle de San-Nicolao. Descendre prudemment vers la rivière pour apprécier la monumentalité des piles de maçonnerie ancrées directement dans la roche vive et contempler l'enfilade des arches de pierre se détachant au-dessus des vasques d'eau cristalline. Traverser le tablier supérieur avec précaution en suivant l'ancien coursier hydraulique pour profiter d'une vue plongeante sur les cascades en contrebas et écouter le bruissement apaisant de l'eau s'écoulant au fond du ravin. Ne pas manquer d'observer les lichens et la végétation rupestre colonisant les parements de schiste, créant un tableau romantique et intemporel particulièrement rafraîchissant aux heures chaudes de l'été.",
    link: "https://photos.google.com/share/AF1QipPPgIE0CNEMhbKL0s6wFIjQQ5PsVF0DmZsFf82B0Z5jUUzkl29-fpUDw9woAze_aA?key=VEYwVzBzcldLd24tUzR1Y0VyeVFpQVlwWlpkMG9R"
  },
  {
    id: "san_nicolao_eglise_paroissiale",
    name: "San-Nicolao - Église Saint-Nicolas (Ghjesgia Santi Niculaiu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "San-Nicolao",
    altitude: 275,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Joyau de l'art baroque corse flanqué d'un exceptionnel campanile à quatre étages",
    century: "XVIIIe siècle",
    category: "religieux",
    counts: {},
    lat: 42.370061,
    lng: 9.499881,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPXK2THj_KWTf1eCzffL0Y_AQjn6A006Llns_GiU8LkKvCiiSnf3GEconJ1wv7RnvopuruvqABavp5AsXMn0lQqnbaa897-lJ7bc833kxkA3aspN3lSD5dfcdMrgjlU7STU_esz-3-qJQH8SjqqHsJ7EQ=w1886-h1258-s-no-gm?authuser=0",
    description: "Trônant en belvédère spectaculaire au cœur du village perché de San-Nicolao, l'église paroissiale Saint-Nicolas (Ghjesgia Santi Niculaiu) est considérée comme l'un des plus précieux joyaux de l'architecture religieuse baroque de la Costa Verde et de la Castagniccia orientale. Érigée au début du XVIIIe siècle pour remplacer un édifice médiéval devenu trop exigu face à l'essor démographique, elle présente une remarquable façade classique ordonnancée à deux niveaux, rythmée par des pilastres doriques et corinthiens en stuc et couronnée d'un fronton triangulaire gracieux. Cependant, la célébrité de l'édifice réside principalement dans son vertigineux campanile érigé à partir de 1743 par l'architecte Giovanni Domenico Lucchesi : s'élevant à près de quarante mètres de hauteur, cette tour élancée en schiste crépi déploie quatre étages polygonaux ajourés de baies cintrées et de balustrades sculptées, couronnés par une coupole en bulbe remarquable classée au titre des Monuments Historiques. À l'intérieur, la vaste nef unique voûtée en berceau s'enrichit d'une profusion de stucs baroques polychromes, de marbres veinés, d'un maître-autel monumental orné de gradins et d'un tableau d'autel représentant saint Nicolas protégeant les navigateurs et les enfants.",
    visiter: "Arriver sur le parvis en terrasse dallé de pierres schisteuses pour admirer d'un coup d'œil la prestance théâtrale de la façade et la silhouette altière du campanile qui domine la vallée. Prendre le temps d'observer le panorama grandiose qui s'ouvre depuis l'esplanade sur les toits de lauze du bourg, la mer Tyrrhénienne et l'horizon où se découpent nettement l'île d'Elbe et celle de Montecristo. Pousser les portes en bois sculpté pour découvrir la pénombre chaleureuse de la nef, lever les yeux vers les fresques en trompe-l'œil qui ornent la voûte et examiner les chapelles latérales dédiées au Rosaire et aux confréries locales, riches en statuaire en bois doré et en retables ouvragés. Faire enfin le tour extérieur de l'abside pour contempler le calage parfait des maçonneries sur le flanc escarpé de la colline.",
    link: "https://photos.google.com/share/AF1QipPPgIE0CNEMhbKL0s6wFIjQQ5PsVF0DmZsFf82B0Z5jUUzkl29-fpUDw9woAze_aA?key=VEYwVzBzcldLd24tUzR1Y0VyeVFpQVlwWlpkMG9R"
  },
  {
    id: "san_nicolao_hameau_raghja",
    name: "San-Nicolao - Hameau Abandonné de Raghja",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "San-Nicolao",
    altitude: 310,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Ancien village d'altitude déserté témoignant de l'exode rural en Castagniccia",
    century: "XVIIIe siècle",
    category: "star",
    counts: {},
    lat: 42.365493,
    lng: 9.499133,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPqW7bQDCjgC6lF1KVMBzluWW50mUY8f37TPgUaHvulkTR8eAmYq20qyNt1cj6IS1tJGp3-zCwmAQWfax9vyVAR7VLxOIHYeWqBtFhGWyYh9I6Ytvnmuco8z3wWynFHx9a9VIaS9L-dCwx6b64r3nU-2A=w1886-h1258-s-no-gm?authuser=0",
    description: "Dissimulé dans un écrin de châtaigneraies séculaires et de chênes verts au sud du chef-lieu communal, le hameau abandonné de Raghja est un lieu d'une beauté mélancolique saisissante, figé dans le temps depuis le début du XXe siècle. Autrefois habité par une communauté vigoureuse d'agriculteurs, de charbonniers et d'éleveurs vivant en quasi-autarcie des fruits de la terre et de la châtaigne, le site a subi de plein fouet l'hécatombe de la Première Guerre mondiale puis l'attrait de la plaine littorale et des villes, conduisant à son délaissement progressif. Aujourd'hui, les maisons fortes en schiste étagé, les pressoirs à vin, les fours à pain collectifs et les séchoirs à châtaignes traditionnels (i grigli) dressent leurs murs robustes sans toitures, envahis amoureusement par les mousses, les fougères et le lierre grimpant. L'ordonnancement des passages voûtés, des ruelles en escaliers taillées à même la roche et des linteaux de portes sculptés laisse deviner le soin apporté à chaque demeure et la cohésion de la vie villageoise insulaire d'autrefois.",
    visiter: "Accéder au hameau fantôme par le sentier muletier balisé qui serpente sous la canopée des vieux châtaigniers noueux au départ de San-Nicolao ou du village de Santa-Maria-Poggio. Déambuler avec précaution au milieu des venelles envahies par la végétation sauvage pour explorer les ruines romantiques des bâtisses de pierre sèche, en observant les vestiges de cheminées intérieures, d'éviers en lauze (teghje) et de niches murales. S'imprégner du silence profond des lieux, troublé seulement par le bruissement du vent dans les feuillages et le tintement lointain des cloches de chèvres, tout en observant depuis les fenêtres éventrées des perspectives splendides sur le bleu de la mer Tyrrhénienne.",
    link: "https://photos.google.com/share/AF1QipPPgIE0CNEMhbKL0s6wFIjQQ5PsVF0DmZsFf82B0Z5jUUzkl29-fpUDw9woAze_aA?key=VEYwVzBzcldLd24tUzR1Y0VyeVFpQVlwWlpkMG9R"
  },
  {
    id: "san_nicolao_hameau_fano",
    name: "San-Nicolao - Hameau de Fano (Fanu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "San-Nicolao",
    altitude: 340,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Hameau de moyenne montagne authentique aux maisons fortes et venelles pavées",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 42.365882,
    lng: 9.497059,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNHt56fqncu4n1EJdvVDDvtYqjraNjr8uERloeMRqUGiiKXlyc5p1fzkDUV5Q6gKyhD9Vvhwj3d4AjIyKxodd9xQzTQ8OGjt_horIy_FVse-_b6YdtYklWmToBLBRGq0u8gjn7k0O5yrDyZFfB8kSWtnQ=w1611-h2416-s-no-gm?authuser=0",
    description: "Établi sur une croupe rocheuse ensoleillée dominant les méandres de la Costa Verde à quelques centaines de mètres à l'ouest de Raghja, le hameau de Fano (Fanu) constitue un bel exemple de lieu de vie préservé de la haute commune de San-Nicolao. Contrairement à son voisin déserté, Fano a su conserver des habitations vivantes et fidèlement restaurées, composées de hautes maisons de maître corses en moellons de schiste apparents s'élevant sur trois à quatre niveaux. Ces édifices austères et nobles, aux fenêtres étroites conçues jadis pour se prémunir des attaques et des intempéries hivernales, sont reliés par un lacis de venelles dallées en pente raide, de couloirs sous voûtes et de perrons en encorbellement. Le hameau bénéficie d'une situation géographique privilégiée, niché à l'abri des crêtes rocheuses et offrant une vue plongeante et spectaculaire sur les vergers d'oliviers, les collines boisées et la plaine de Moriani qui s'étire vers la côte.",
    visiter: "Flâner tranquillement à pied dans les ruelles étroites du hameau pour admirer le savoir-faire des bâtisseurs d'autrefois, les linteaux gravés au-dessus des portes massives en châtaignier et les petits jardins en terrasses fleuris de lauriers-roses et de bougainvilliers. Profiter de l'atmosphère sereine et authentique du village, loin du tumulte balnéaire, pour échanger avec les habitants et contempler les panoramas étourdissants sur le littoral et la mer Tyrrhénienne. Poursuivre la marche le long des anciens sentiers de transhumance qui partent du haut du hameau pour s'enfoncer vers les crêtes de la Castagniccia à travers le maquis parfumé de myrte et de calicotome.",
    link: "https://photos.google.com/share/AF1QipPPgIE0CNEMhbKL0s6wFIjQQ5PsVF0DmZsFf82B0Z5jUUzkl29-fpUDw9woAze_aA?key=VEYwVzBzcldLd24tUzR1Y0VyeVFpQVlwWlpkMG9R"
  },
  {
    id: "san_giovanni_di_moriani_fontaine_serpentina",
    name: "Costa Verde - Fontaine de Serpentina",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "San-Giovanni-di-Moriani",
    altitude: 460,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Fontaine séculaire en schiste et source d'eau pure de montagne en bord de route",
    century: "XIXe siècle",
    category: "fontaine",
    counts: {},
    lat: 42.347871,
    lng: 9.494555,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOQHNyDFFVqiGLfz9k8rH20mlf3gYnID9Tf2722zUfvij8yYqOYUa7YiHVjnU5dTvkw8K7EoMBCqk-aOvMAa25kiZ3iJbkfB1XTH0lGCKYWM97ROh4pviAPB4R6nc8md4mFywTftIdhBczg-vtShpu93g=w1886-h1258-s-no-gm?authuser=0",
    description: "Enchâssée contre le talus rocheux le long de la route sinueuse reliant les villages de montagne de San-Giovanni-di-Moriani et Santa-Lucia-di-Moriani, la fontaine de Serpentina est une étape incontournable du petit patrimoine vernaculaire de la Costa Verde. Taillée dans le schiste local et appareillée avec une grande sobriété architecturale, cette fontaine traditionnelle capte l'une des sources les plus pures et les plus fraîches de la vallée, filtrée naturellement à travers les failles granitiques et les racines profondes des châtaigneraies du haut massif. Dotée d'un muret protecteur en pierre sèche surmonté d'un fronton discret et d'un canon déversant continuellement une eau limpide et glacée dans une auge de pierre polie par le temps, la fontaine doit son nom évocateur aux méandres sinueux des sentiers et ruisseaux serpentant à travers le vallon forestier. Elle constituait historiquement un point de ravitaillement vital pour les voyageurs, les bergers lors de la transhumance et les bêtes de somme gravissant les pentes escarpées de la vallée.",
    visiter: "Marquer une halte désaltérante au bord de la chaussée pour savourer la fraîcheur exceptionnelle de cette eau de source pure descendant directement des sommets de la Castagniccia. S'asseoir quelques instants sur le banc de pierre aménagé à côté de la fontaine pour écouter le chant cristallin de la source dans la quiétude montagnarde, tout en observant le travail soigné des moellons de schiste tapissés de capillaires et de mousses humides. Profiter de l'emplacement ombragé sous les frondaisons épaisses des châtaigniers et des chênes pour admirer la vue échappée vers les villages étagés sur les crêtes d'en face et la ligne bleue de la mer au loin.",
    link: "https://photos.google.com/share/AF1QipPPgIE0CNEMhbKL0s6wFIjQQ5PsVF0DmZsFf82B0Z5jUUzkl29-fpUDw9woAze_aA?key=VEYwVzBzcldLd24tUzR1Y0VyeVFpQVlwWlpkMG9R"
  },
   {
    id: "olmo_village",
    name: "Casinca - Village d'Olmo",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Olmo",
    altitude: 540,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Village perché traditionnel de Casinca bâti en belvédère sur la plaine orientale",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 42.495825,
    lng: 9.406504,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOJLG8UK11lk3ywpVgunJ6Y7xvlbz0yxNGtwoHxjbC2pohoTkCbsDHCumBIw-hv40QD2LltBUYkng7akVuzqNhVXb88gLEg01rf7yG7s-n1oJw9yRk-3l4RgQd7HMfX7wADNHQC4AI-8XgzkLqSo9jonw=w2036-h1359-s-no-gm?authuser=0",
    description: "Accroché en balcon spectaculaire sur les premiers contreforts orientaux du massif schisteux du Monte San Petrone, le village d'Olmo incarne la quintessence des communautés perchées de la microrégion de Casinca. Dominant la basse vallée du Golo et l'immense plaine agricole menant jusqu'au cordon lagunaire de la Marana, ce bourg de moyenne montagne séduit par son architecture vernaculaire étagée, où d'imposantes maisons de maître aux hautes façades de moellons de schiste appareillés et aux toitures de lauzes (teghje) s'imbriquent étroitement les unes dans les autres pour faire face aux vents et à l'histoire. Entouré de châtaigneraies séculaires, d'oliveraies étagées en terrasses soutenues par des murets de pierres sèches et de maquis dense, Olmo a préservé son atmosphère paisible et son caractère communautaire préservé des grands flux touristiques du littoral insulaire.",
    visiter: "Flâner au cœur du bourg en gravissant ses venelles étroites et escarpées, dallées de pierre de schiste, pour apprécier les linteaux gravés, les passages voûtés en berceau et les fontaines anciennes qui ponctuent l'espace public. Monter jusqu'à l'église paroissiale Saint-Cyr (San Quilico) dont le campanile baroque domine les toits d'ardoise et offre un belvédère panoramique exceptionnel embrassant toute la côte orientale, la mer Tyrrhénienne et, par temps clair, les contours bleutés des îles de l'archipel toscan (Elbe, Montecristo et Capraia). Profiter de la fraîcheur des sous-bois de châtaigniers entourant le village pour explorer les sentiers de pays ancestraux qui reliaient jadis les communautés agro-pastorales de Casinca et de Castagniccia.",
    link: "https://photos.google.com/share/AF1QipP8pf_Tx1YVMHgANk_QHrGG9jgWeu4YK52Uv80tbN4YtvZcTYTxYGhCVGABIy_3KA?key=Z0dKRm9vZFJJLWY4TzRNSkktVkZMRlJQdWR0RXNB"
  },
  {
    id: "olmo_rando_cretes",
    name: "Casinca - Randonnée des Crêtes d'Olmo",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Olmo",
    altitude: 680,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Ligne de crête panoramique dominant le défilé du Golo et la plaine de Casinca",
    century: "",
    category: "rando",
    counts: { rando: 1 },
    lat: 42.499332,
    lng: 9.418243,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPPgW1rs4Aq-kz985UGBBZUcyjXMV969jdEB5OwJ6TOUsH2B2uwlDELrZlfNd2lfCbY5ooA2BbY73wEbegkSLKh5f5NwaVC9YlDsk1_aLSFuAhNjIXelBl2MxN19lZ5jj1Uek67X2Lj5YYbxRkIOvdLzg=w1739-h1309-s-no-gm?authuser=0",
    description: "S'élevant hardiment au-dessus du village d'Olmo sur l'arête dorsale qui sépare le bassin versant du Golo des vallons intérieurs de la Casinca, la ligne de crête d'Olmo constitue un itinéraire de randonnée exceptionnel pour son panorama à 360 degrés. Serpentant au milieu d'une lande d'altitude tapissée d'arbousiers, de bruyères arborescentes et de cistes de Crète mêlés à des affleurements de schistes lustrés étincelant au soleil, ce parcours aérien plonge d'un côté vers les gorges encaissées du Golo et la route historique de Ponte-Novu, et s'ouvre de l'autre sur l'amphithéâtre verdoyant des villages de Loreto-di-Casinca, Silvareccio et Castellare-di-Casinca s'égrenant jusqu'à la côte.",
    visiter: "Entreprendre l'ascension depuis le haut du village d'Olmo en suivant les sentiers pastoraux bien tracés qui montent régulièrement vers la ligne de crête à travers les bois de chênes verts et de châtaigniers. Parcourir le sentier sommital pour profiter des trouées visuelles saisissantes, observer les rapaces (milans royaux et faucons crécerelles) planant au-dessus des vallons encaissés, et faire une halte contemplative sur les promontoires rocheux dominant la mer Tyrrhénienne et l'étang de Biguglia. Prévoir de bonnes chaussures de marche pour progresser confortablement sur les sentes caillouteuses et apprécier la flore endémique au fil des saisons.",
    link: "https://photos.google.com/share/AF1QipP8pf_Tx1YVMHgANk_QHrGG9jgWeu4YK52Uv80tbN4YtvZcTYTxYGhCVGABIy_3KA?key=Z0dKRm9vZFJJLWY4TzRNSkktVkZMRlJQdWR0RXNB"
  },
  {
    id: "monte_anzianna_chjesa_carognu",
    name: "Monte - Anziana Chjesa di Carognu (Ruines de l'Ancienne Église)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Monte",
    altitude: 510,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Vestiges d'église médiévale et lieu de mémoire isolé au creux du maquis",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 42.479960,
    lng: 9.389087,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMbqh0pu87NCYsvQlIiiMVq-emHDvviUHGKWvCydl18_5nZWzXKZGn2nkHuOx7EZ4kcH5GmcDe25eCgtir7aar96NmZIU1WnMTO3v3-sMj8NsSBUXJrmNX3nyw_muLxvUa_B8whOjm5VJHJ3YO_wmffcw=w1739-h1159-s-no-gm?authuser=0",
    description: "Émouvante sentinelle du passé religieux et médiéval de la commune de Monte, l'ancienne église de Carognu dresse ses pans de murs ruinés dans un environnement sauvage et préservé, dissimulé sous les ramures des châtaigniers et les frondaisons épaisses du maquis corse. Édifié selon les préceptes de l'art roman pisan insulaire, cet ancien sanctuaire paroissial desservait autrefois un hameau rural aujourd'hui disparu des cartes administratives. Bâtie en moellons de schiste vert et de calcaire taillés et assemblés au mortier de chaux, la structure conserve la silhouette reconnaissable de son abside en cul-de-four et l'amorce de sa nef unique, témoignant de la ferveur spirituelle qui animait ces communautés agropastorales avant le regroupement des habitats vers les bourgs principaux.",
    visiter: "Rejoindre ce site patrimonial discret en empruntant les anciens chemins muletiers reliant les différents hameaux de Monte et d'Olmo, dans une ambiance de quiétude absolue bercée par le chant des oiseaux forestiers. Approcher les vestiges de la maçonnerie médiévale pour examiner les techniques d'appareillage en pierre sèche et les corniches résiduelles qui soulignent l'arrondi de l'abside romane. Prendre le temps d'observer la manière dont la végétation insulaire (mousses, lierres et fougères) a lentement colonisé la ruine, créant une atmosphère romantique propice au recueillement et à la photographie patrimoniale.",
    link: "https://photos.google.com/share/AF1QipP8pf_Tx1YVMHgANk_QHrGG9jgWeu4YK52Uv80tbN4YtvZcTYTxYGhCVGABIy_3KA?key=Z0dKRm9vZFJJLWY4TzRNSkktVkZMRlJQdWR0RXNB"
  },
  {
    id: "monte_hameau_divina",
    name: "Monte - Hameau de Divina",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Monte",
    altitude: 460,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Hameau traditionnel corse accroché au versant oriental de la vallée",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 42.482496,
    lng: 9.383190,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOCjSh79eVkZf7gSxxPWR9UpAVT9vkQMQerBsfHj4zj0wr8Bru44lb0QRs_OK4-UpRlYzn4gdLl-oD_9kLOtZ-f8QEb4b-W0Nqj-2V-LbnBsyrhJwL_3UEF85mJhwY6O-DWZl5Ykq-DpaP5xJOrwpRUzg=w1739-h1161-s-no-gm?authuser=0",
    description: "Niché sur un replat d'épaulement boisé dominant le thalweg intérieur de la commune de Monte, le hameau de Divina est un modèle préservé de l'habitat dispersé traditionnel de moyenne montagne corse. Caractérisé par un ensemble resserré de maisons fortes en schiste gris-vert, surmontées de toitures couvertes de teghje et flanquées de séchoirs à châtaignes traditionnels (i grigli), Divina témoigne de l'ingéniosité des anciens bâtisseurs pour tirer parti du relief accidenté. Entouré de vergers d'agrumes, d'anciens potagers en terrasses et de sources d'eau vive descendant des hauteurs, ce hameau authentique respire une tranquillité intemporelle où le lien entre l'architecture de pierre et le paysage végétal environnant demeure intact.",
    visiter: "Déambuler à pied le long de l'unique ruelle piétonne pavée qui traverse le hameau pour observer les escaliers extérieurs en pierre menant aux étages d'habitation et les voûtes de soutènement enjambant les passages. Découvrir la petite chapelle ou l'oratoire de quartier qui servait de cœur dévotionnel aux habitants de Divina, et contempler la vue plongeante sur les versants boisés tapissés de châtaigneraies et d'aulnes. Poursuivre la marche en direction des sources et anciens lavoirs du hameau pour apprécier l'ingénieux réseau d'irrigation traditionnel canalisant l'eau de montagne.",
    link: "https://photos.google.com/share/AF1QipP8pf_Tx1YVMHgANk_QHrGG9jgWeu4YK52Uv80tbN4YtvZcTYTxYGhCVGABIy_3KA?key=Z0dKRm9vZFJJLWY4TzRNSkktVkZMRlJQdWR0RXNB"
  },
  {
    id: "monte_hameau_ferlaja",
    name: "Monte - Hameau de Ferlaja",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Monte",
    altitude: 430,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Hameau patrimonial de schiste ceinturé de châtaigniers séculaires",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 42.464014,
    lng: 9.388858,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPE9jDtFCMHdAXjAZ1mg2r1S6VYFVLCEfYg9dkjAj85waUCGHVodJcZ7YuBd4-8xn0A43z8-G9eY_Y5fWf8-XwBwEmJEZNz7MWhR1KhSaTyVUH-ceTZCKRUFiSTZCwiXWyIpMwR57pxhMS2J3rzdwVgIQ=w1739-h1159-s-no-gm?authuser=0",
    description: "S'étirant le long d'une croupe ensoleillée au sud du territoire communal de Monte, le hameau de Ferlaja compose un tableau architectural rural remarquable par son homogénéité et sa parfaite symbiose avec le milieu naturel. Bâties avec les blocs de schiste lustré extraits directement de la montagne, ses maisons séculaires aux murs épais et aux petites fenêtres conçues pour conserver la fraîcheur estivale témoignent du mode de vie autarcique des communautés rurales d'autrefois. Le hameau est ceinturé par une majestueuse châtaigneraie aux arbres multiséculaires aux troncs tortueux, rappelant le rôle nourricier fondamental de « l'arbre à pain » (l'arburu) dans l'économie et la survie des villages de la région jusqu'au milieu du XXe siècle.",
    visiter: "Traverser le hameau par ses sentes de terre et de pavés rustiques pour contempler l'appareillage soigné des maçonneries traditionnelles et la noblesse des linteaux monolithes. S'attarder à l'ombre bienfaisante des grands châtaigniers bordant les habitations et écouter le murmure des ruisseaux qui dévalent vers la vallée. Découvrir les anciens fours à pain communaux et les aires de battage en plein air (l'aghje) où l'on séparait jadis le grain de la paille, témoins précieux de la mémoire paysanne insulaire.",
    link: "https://photos.google.com/share/AF1QipP8pf_Tx1YVMHgANk_QHrGG9jgWeu4YK52Uv80tbN4YtvZcTYTxYGhCVGABIy_3KA?key=Z0dKRm9vZFJJLWY4TzRNSkktVkZMRlJQdWR0RXNB"
  },
   {
    id: "ile_rousse_tour_pietra",
    name: "L'Île-Rousse - Tour Génoise de la Pietra & Phare",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "L'Île-Rousse",
    altitude: 64,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Sentinelle littorale génoise édifiée sur les dômes de porphyre rouge de la presqu'île",
    century: "XVIe siècle",
    category: "chateau",
    counts: {},
    lat: 42.643505,
    lng: 8.935121,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMaU1TxuFIkh2AL5E1TUfA4dp0DBfkHHyaxsYx1gpI5BLgPq0n5odzJk32xKAZZuWf7Sq4up9pt775Vglm_zWTSk8cwfxgG-VG-9UKw0uzNuh7XTB2B5P_zKsLvS-AMJQl_VMpePow_nQ8K7agtxH_FqA=w1221-h919-s-no-gm?authuser=0",
    description: "Dressée au sommet des roches de porphyre ocre rouge qui ont donné son nom à la cité paoline de L'Île-Rousse, la tour de la Pietra est l'un des emblèmes maritimes les plus spectaculaires de la Balagne. Érigée au XVIe siècle sous l'autorité génoise pour verrouiller la côte septentrionale face aux incursions barbaresques, cette tour ronde de guet s'élève sur un éperon rocheux déchiqueté autrefois totalement insulaire, désormais rattaché au port et au continent par une digue carrossable. Bâtie en moellons de granite et de roche volcanique locale liés au mortier de chaux, elle conserve sa base légèrement tronconique et sa plateforme sommitale à mâchicoulis d'où les sentinelles allumaient des feux d'alarme visibles depuis Calvi jusqu'au Cap Corse. Flanquée du phare de la Pietra construit au XIXe siècle pour guider la navigation dans le golfe de Saint-Florent, la tour offre un contraste saisissant entre la teinte rougeoyante des falaises de rhyolite polies par les embruns et l'outremer intense de la Méditerranée.",
    visiter: "Partir à pied depuis le port de plaisance ou la place Paoli en empruntant la digue promenade qui relie la terre ferme aux îlots de porphyre rouge. Gravir le sentier pavé qui monte en lacets réguliers à travers un maquis ras d'immortelles, de cinéraires maritimes et de griffes de sorcière jusqu'à l'esplanade sommitale de la tour et du phare. Faire le tour de l'ouvrage pour admirer les parois rocheuses tombant à pic dans les remous de la mer et contempler le vaste panorama qui embrasse toute la baie de L'Île-Rousse, les crêtes montagneuses du Monte San Petrone et du Monte Padro en arrière-plan, ainsi que les villages perchés de Haute-Balagne. Privilégier la fin d'après-midi au coucher du soleil, lorsque la lumière rasante enflamme littéralement le porphyre en lui conférant des nuances pourpres et dorées inoubliables.",
    link: "https://photos.google.com/share/AF1QipOUGVc_ce4DHk2BAb-NVLUQVtx5_rVgcr5yTIoi9giThvdBL_vym7WmhC8QZl6UAA?key=OHFXcU9xSVB6aUpmU2dwaVJhWDdVdExoWkMxZGd3"
  },
  {
    id: "ile_rousse_plage_bodri",
    name: "Balagne - Plage de Bodri (Bodre)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Corbara",
    altitude: 2,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Anse sauvage de sable blanc immaculé et eaux turquoise ceinturée par le maquis",
    century: "",
    category: "plage",
    counts: {},
    lat: 42.629014,
    lng: 8.912106,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOz89-y1nxEe2_0mNEEQil1vGeyDDXXAPqMRmoigHRikpMjUXD7OkJyR1zb_p1GBodu_hA30KNkuJQFozmLkg6r7pWLCMoh1HnX61nxxsmlwwj4Y2GbrKk-5jomYvdpG_TpDHl--Jy7yqbz1AuzlNhy_w=w1221-h919-s-no-gm?authuser=0",
    description: "Nichée au creux d'un amphithéâtre naturel préservé sur la commune de Corbara à quelques kilomètres au sud-ouest de L'Île-Rousse, la plage de Bodri est réputée comme l'un des plus beaux joyaux balnéaires de Balagne. Cette anse protégée des vents dominants déploie un arc de cercle parfait de sable d'une blancheur éclatante et d'une finesse rare, dont les grains de quartz d'origine granitique confèrent à l'eau des dégradés turquoise et lagon dignes des mers du Sud. Dépourvue de constructions en dur sur son front de mer, Bodri est bordée par un cordon dunaire mobile végétalisé d'oyats, de chardons maritimes et de lis des sables, protégé par le Conservatoire du littoral. L'arrière-plage est ceinturée par une végétation odorante de myrtes, de cistes et de lentisques qui s'élève vers la voie ferrée où circule le célèbre train micheline « U Trinichellu », offrant aux baigneurs un cadre naturel sauvage et préservé de l'urbanisation touristique.",
    visiter: "Accéder au site en descendant à l'arrêt ferroviaire de Bodri via le train des plages reliant Calvi à L'Île-Rousse, ou en stationnant sur le parking aménagé sur les hauteurs avant de descendre par le sentier piétonnier sablonneux à travers le maquis parfumé. Poser sa serviette sur le sable fin pour nager dans une eau cristalline à la visibilité sous-marine exceptionnelle, propice à la randonnée palmée le long des platiers rocheux encadrant l'anse où évoluent dorades, saupes et sars. Poursuivre la découverte en suivant le sentier douanier qui monte sur la crête rocheuse vers l'ouest pour rejoindre en quelques minutes de marche la plage voisine de Ghjunchitu, tout en profitant de vues plongeantes splendides sur les dégradés azur de la baie.",
    link: "https://photos.google.com/share/AF1QipOUGVc_ce4DHk2BAb-NVLUQVtx5_rVgcr5yTIoi9giThvdBL_vym7WmhC8QZl6UAA?key=OHFXcU9xSVB6aUpmU2dwaVJhWDdVdExoWkMxZGd3"
  },
  {
    id: "ile_rousse_plage_ghjunchitu",
    name: "Balagne - Plage de Ghjunchitu (Junquiddu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Corbara",
    altitude: 3,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Vaste étendue sauvage de sable farineux frangée de dunes et de rochers granitiques",
    century: "",
    category: "plage",
    counts: {},
    lat: 42.627295,
    lng: 8.905632,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNzDLyA_hV6644OU3kqByaesjRoS7afxGLOj6Zs21rdrDLoVILF-qBOq2WJEtUrn8rDKpe3w_8Pq2c9JHRE7VBjedPkIgEpfZRmYTJyT7YNVwRaJg8jDPUguB2R4AlRH2pDI4qziKSEJWDe0tLtbkcsDQ=w1221-h919-s-no-gm?authuser=0",
    description: "Voisine immédiate de Bodri dont elle n'est séparée que par un promontoire granitique rasant, la plage de Ghjunchitu — parfois orthographiée Giuncheto ou Junquiddu — déploie plus de cinq cents mètres de rivage sauvage d'une pureté saisissante. Son nom, tiré du corse « ghjunco » désignant le jonc de mer, évoque la riche flore dunaire qui tapisse les monticules de sable blanc s'étirant jusqu'aux contreforts du maquis balanin. Plus spacieuse et aérée que sa voisine, Ghjunchitu offre un sable blond et farineux particulièrement doux au toucher, plongeant dans des eaux d'une clarté absolue qui varient du bleu turquoise au bleu roi selon la profondeur des hauts-fonds sablonneux. Balayée par les brises légères du large, cette plage restée à l'état brut séduit par sa quiétude, l'absence totale de digues ou d'aménagements massifs, et son panorama dégagé vers le golfe de Calvi et la presqu'île de la Revellata au loin.",
    visiter: "Gagner la plage à pied par le sentier littoral reliant Bodri à Ghjunchitu ou par la sente ombragée descendant à travers les oliviers sauvages et les bruyères depuis le parking supérieur. S'installer sur la vaste bande de sable fin pour une journée de détente balnéaire, avec une entrée dans l'eau douce et progressive idéale pour la baignade. Explorer les chaos rocheux bordant l'extrémité sud avec masque et tuba pour découvrir une faune marine abondante dissimulée dans les anfractuosités rocheuses, ou s'accorder une pause rafraîchissante à la paillote discrète intégrée sous la végétation en retrait de plage tout en contemplant les vagues irisées.",
    link: "https://photos.google.com/share/AF1QipOUGVc_ce4DHk2BAb-NVLUQVtx5_rVgcr5yTIoi9giThvdBL_vym7WmhC8QZl6UAA?key=OHFXcU9xSVB6aUpmU2dwaVJhWDdVdExoWkMxZGd3"
  },
   {
    id: "nantes_chateau_ducs_bretagne",
    name: "Nantes - Château des Ducs de Bretagne",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Nantes",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Dernier château des bords de Loire avant l'océan et résidence ducale bretonne",
    century: "XVe siècle",
    category: "chateau",
    counts: {},
    lat: 47.215473,
    lng: -1.549351,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPCFdsAYUCt03t3yZy2hQpeIUIq-9SmLXMfXxUkO6rcSZkKf7QJJxzPK6G4irw_eWTYK2w0SRu48JSosgKDdnzexLe1vEUr_zaQKUW-OthOjiU3Cuu7XMTA5rAIaz7Fha_3ALideGBxFKs2JAFh3Npu2A=w1379-h919-s-no-gm?authuser=0",
    description: "Dernier grand château édifié sur les rives de la Loire avant que le fleuve ne se jette dans l'océan Atlantique, le château des ducs de Bretagne incarne de manière magistrale le chant du cygne de l'indépendance bretonne. Érigé à partir de 1466 sous l'impulsion du duc François II, soucieux de protéger sa capitale face aux ambitions centralisatrices de la couronne de France, puis achevé par sa fille, la duchesse Anne de Bretagne deux fois reine de France, ce monument constitue une prouesse d'architecture militaire et princière. Côté ville, l'édifice oppose aux regards une redoutable enceinte fortifiée de granit sombre, flanquée de sept tours imposantes aux épaisses murailles percées de canonnières et ceinturée par de profondes douves autrefois alimentées par les eaux de la Loire. Dès le pont-levis franchi, cette rudesse défensive s'efface pour laisser place à la blancheur éblouissante du tuffeau et au raffinement de la Première Renaissance. Dans la cour d'honneur se déploient le Grand Logis orné de lucarnes gothiques flamboyantes, la tour de la Couronne d'Or percée de loggias à l'italienne, ainsi que le Grand Gouvernement et le bâtiment du Harnachement, composant un décor d'une noblesse insigne qui a traversé l'histoire de France, depuis la signature solennelle de l'Édit de Nantes par Henri IV en 1598 jusqu'à sa reconversion patrimoniale contemporaine.",
    visiter: "Pénétrer dans la vaste cour intérieure en franchissant le pont-levis monumental et commencer par parcourir le chemin de ronde intégral, librement accessible sur plus de cinq cents mètres linéaires le long des courtines crénelées. Cette déambulation en hauteur offre des perspectives remarquables et variées, plongeant d'un côté sur les toits d'ardoise et les façades de tuffeau finement ciselées du palais ducal, et s'ouvrant de l'autre sur les douves verdoyantes, le miroir d'eau, la tour LU et le quartier historique environnant. Prendre le temps d'observer les détails sculptés de la tour de la Couronne d'Or dont les motifs préfigurent l'art de la Renaissance en Val de Loire. Descendre ensuite dans la cour pour visiter les collections permanentes du musée d'Histoire de Nantes réparties à travers les trente-deux salles restaurées du Grand Logis, retraçant l'évolution de la cité fluviale et maritime, la traite négrière atlantique, les guerres de Vendée et le passé industriel nantais, avant de terminer par une promenade contemplative au bord des douves pavées bordées de magnolias.",
    link: "https://photos.google.com/share/AF1QipNA-WajdV28rziPVi0hp3zq0PyAWWMSkNtis-tm3qUDmjaXU_K2XVfaWMdQqQZRGA?key=VWVyclhYQzBiblpDMTE1MTNTUXg4X1lwR1dfRHp3"
  },
  {
    id: "nantes_passage_pommeraye",
    name: "Nantes - Passage Pommeraye",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Nantes",
    altitude: 18,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Galerie marchande couverte monumentale du XIXe siècle sur trois niveaux",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.213549,
    lng: -1.559665,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPHPfbDIuP44qg3yMuV_tDnR0b0tA8aZLbWIrz5UbsHgmcjNCjr4H67TIn7DEMR6tmky1Rhp85NtlTJfrul-E_tNvlmisTofVQW-Cxu_mnvK_f0tg3Rds8wlSJxml5rZ_bwvYVT0lIk6F448xNaOxmU9A=w613-h919-s-no-gm?authuser=0",
    description: "Inauguré en juillet 1843 sous le règne de Louis-Philippe, le passage Pommeraye s'impose incontestablement comme l'une des galeries couvertes les plus audacieuses et élégantes du patrimoine architectural européen du XIXe siècle. Conçu par les architectes Jean-Baptiste Buron et Hippolyte Durand-Gasselin sous l'impulsion du notaire Louis Pommeraye qui y consacra toute sa fortune, cet aménagement monumental relève le défi technique de relier la commerçante rue de la Fosse, établie au niveau des anciens quais, à la bourgeoise rue Santeuil juchée sur les hauteurs de la colline, en rachetant un dénivelé topographique abrupt de plus de neuf mètres. Organisé sur trois niveaux superposés reliés par un vertigineux escalier central en bois de chêne et fonte moulée, l'espace est coiffé d'une gigantesque verrière à armature métallique qui diffuse une lumière zénithale cristalline. L'ornementation d'inspiration néoclassique et éclectique y est d'une richesse foisonnante : d'admirables statues d'adolescents drapés à l'antique tenant des torchères ornent les paliers, tandis que des médaillons, des rinceaux dorés et des allégories sculptées par Guillaume Grootaërs célèbrent le négoce maritime, l'industrie et les beaux-arts. Véritable féerie architecturale, le lieu a marqué l'imaginaire des surréalistes comme André Breton et a servi de décor emblématique aux films de Jacques Demy, notamment dans « Lola ».",
    visiter: "Pénétrer dans le passage soit par la volée basse de la rue de la Fosse, soit par le niveau supérieur de la rue Santeuil pour apprécier d'emblée la spectaculaire profondeur de champ offerte par la perspective des paliers étagés. Emprunter pas à pas le magistral escalier de chêne dont les marches grincent doucement sous les pieds, en prenant le temps de détailler la virtuosité des balustrades en fer forgé aux entrelacs végétaux et la finesse expressive des statues de torchères juchées sur les pilastres de fonte. Lever les yeux vers la grande verrière zénithale pour admirer la clarté changeante qui baigne les coursives supérieures suspendues au-dessus du vide. Parcourir les trois galeries marchandes à la découverte des vitrines en bois sculpté, des boutiques raffinées, des librairies et des salons de thé traditionnels qui perpétuent l'élégance du commerce nantais du siècle passé, puis poursuivre l'exploration vers la galerie contemporaine Cœur de Nantes afin de mesurer la subtile greffe moderne apportée à ce chef-d'œuvre classé Monument Historique.",
    link: "https://photos.google.com/share/AF1QipNA-WajdV28rziPVi0hp3zq0PyAWWMSkNtis-tm3qUDmjaXU_K2XVfaWMdQqQZRGA?key=VWVyclhYQzBiblpDMTE1MTNTUXg4X1lwR1dfRHp3"
  },
  {
    id: "nantes_cathedrale_saint_pierre_saint_paul",
    name: "Nantes - Cathédrale Saint-Pierre-et-Saint-Paul",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Nantes",
    altitude: 20,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Chef-d'œuvre du gothique flamboyant breton abritant le tombeau de François II",
    century: "XVe siècle",
    category: "religieux",
    counts: {},
    lat: 47.218461,
    lng: -1.550148,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOZ3oZBjxtjmIaSzVd8XxkMZm1aaheLc_I4B8Fv0HPHH8rZGLL-RRd-vNJz_8QSeRsIezDLZGwxKkrw3uZRH3nt3DTVjfMxLhXwaI5c6tMuMf9-dpBf0khn4402wvfOY4xkjNg_BRo0AMp9Zy8nTSYsew=w692-h919-s-no-gm?authuser=0",
    description: "Édifiée sur une durée phénoménale de plus de quatre cent cinquante ans entre la pose solennelle de sa première pierre en 1434 par le duc Jean V et son achèvement complet en 1891, la cathédrale Saint-Pierre-et-Saint-Paul de Nantes est un sommet du gothique flamboyant en Bretagne. Bâtie en calcaire blanc et tuffeau ligérien, elle présente une imposante façade occidentale encadrée par deux massives tours carrées dépourvues de flèches, rythmée par trois portails richement sculptés dont les voussures racontent l'histoire sainte et le Jugement Dernier. L'intérieur surprend par son élévation et sa pureté lumineuse : avec une hauteur sous voûte atteignant plus de trente-sept mètres et demi, la nef nantaise surpasse de plusieurs mètres celle de Notre-Dame de Paris. Malgré les drames qui ont jalonné son histoire — notamment les bombardements de 1944, l'incendie de toiture de 1972 et le sinistre criminel de 2020 qui a détruit le grand orgue du XVIIe siècle —, l'édifice conserve des trésors d'art funéraire d'une valeur inestimable, au premier rang desquels trône le tombeau de François II et de Marguerite de Foix, sculpté en marbre de Carrare polychrome par Michel Colombe au tout début du XVIe siècle sur ordre d'Anne de Bretagne.",
    visiter: "Débuter la visite par la place Saint-Pierre afin de contempler la façade occidentale et s'attarder sur les sculptures détaillées des trois portails ogivaux, en repérant les armoiries ducales bretonnes et les scènes gravées dans la pierre calcaire. Pénétrer à l'intérieur pour ressentir l'immense souffle vertical de la grande nef baignée d'une clarté éclatante due à la blancheur du tuffeau et à la hauteur prodigieuse des piliers fasciculés sans chapiteaux. Se diriger vers le transept sud pour admirer le cénotaphe ducal de François II : observer minutieusement les gisants reposant sous la garde de lions et de lévriers, ainsi que les quatre statues d'angle incarnant les vertus cardinales, en s'attardant sur la Prudence représentée avec un double visage, jeune fille au miroir regardant vers l'avenir et vieillard barbu tourné vers le passé. Visiter la crypte romane du XIe siècle abritant les reliquaires et le trésor épiscopal pour mesurer la continuité cultuelle de ce site habité par la foi depuis plus d'un millénaire.",
    link: "https://photos.google.com/share/AF1QipNA-WajdV28rziPVi0hp3zq0PyAWWMSkNtis-tm3qUDmjaXU_K2XVfaWMdQqQZRGA?key=VWVyclhYQzBiblpDMTE1MTNTUXg4X1lwR1dfRHp3"
  },
  {
    id: "nantes_porte_saint_pierre",
    name: "Nantes - Porte Saint-Pierre & Tracé de l'Enceinte",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Nantes",
    altitude: 21,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Dernière porte fortifiée subsistante de l'enceinte médiévale nantaise",
    century: "XVe siècle",
    category: "star",
    counts: {},
    lat: 47.218994,
    lng: -1.550346,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMKDuAOesTEGRuvrK5YzVt-0QDSB8DbiMuPQpZNF6A165GKOAVnq1Nu6bAI-u9Y9I6Rz6nXS4D4ZCmsaxpdugdQ1S1q6dWA7yN7Ps-Ung6NlZ-GH8bAzoSMw6mRNHqPi0lh58wmgTlPrEYd-4YqjcSGPg=w692-h919-s-no-gm?authuser=0",
    description: "Érigée au XVe siècle sous l'autorité des ducs de Bretagne, la porte Saint-Pierre constitue le dernier vestige complet de la ceinture de fortifications qui protégeait jadis la cité nantaise contre les invasions terrestres et fluviales. Construite en moellons de granit dur maçonnés et appareillée de calcaire, cette haute porte voûtée venait se greffer directement sur les fondations de l'antique mur d'enceinte gallo-romain édifié à la fin du IIIe siècle de notre ère, dont les puissantes assises en petit appareil et lits de tuiles subsistent encore à sa base immédiate. Flanquée par le chevet majestueux de la cathédrale, la porte contrôlait l'accès septentrional de la ville et s'ouvrait vers les routes stratégiques menant à Rennes et à Paris. Dotée à l'origine d'un pont-levis jeté au-dessus d'un fossé profond, d'une herse de fer coulissante et de créneaux de tir assurant la défense rapprochée, elle fut épargnée par les grands démantèlements urbains du XVIIIe siècle pour servir d'annexe aux services de la ville et au chapitre cathédral, conservant ainsi un témoignage saisissant de la morphologie militaire médiévale de Nantes.",
    visiter: "Franchir le porche monumental en arc brisé pour apprécier l'épaisseur impressionnante de ses murs en grand appareil et observer attentivement la fente verticale de guidage de l'ancienne herse médiévale au ras de la voûte. Examiner au pied du monument les vestiges de maçonnerie gallo-romaine mis en valeur par des fouilles archéologiques, identifiables à leurs assises régulières de petits moellons entrecoupées de cordons de briques rouges. Poursuivre la découverte en s'engageant sur le cours Saint-Pierre contigu, large promenade plantée de platanes et de marronniers aménagée au XVIIIe siècle le long de l'ancien tracé des fossés comblés, pour admirer la vue majestueuse sur le chevet de la cathédrale et contempler au loin la silhouette néoclassique de la colonne Louis-XVI dressée sur la place Maréchal-Foch.",
    link: "https://photos.google.com/share/AF1QipNA-WajdV28rziPVi0hp3zq0PyAWWMSkNtis-tm3qUDmjaXU_K2XVfaWMdQqQZRGA?key=VWVyclhYQzBiblpDMTE1MTNTUXg4X1lwR1dfRHp3"
  },
  {
    id: "nantes_eglise_sainte_croix",
    name: "Nantes - Église Sainte-Croix & Beffroi du Bouffay",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Nantes",
    altitude: 10,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Église baroque surmontée du beffroi municipal et de l'horloge du Bouffay",
    century: "XVIIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.215418,
    lng: -1.553906,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMH4NUE0E225rZwJ75KAlb5NoA-XRyvYn2W0hq1hTWcN7Aappvehx1fKoA9mk466cyxawAkUZyyJZu35lArJVmXvZhFnfZvIM-WEf6a8CxEdSKrtaO3AjZU9zmpcCUhwdWuFstk8djPafdB1on_8ctPyg=w692-h919-s-no-gm?authuser=0",
    description: "Dressée fièrement à la charnière du quartier médiéval du Bouffay et des percées urbaines modernes, l'église Sainte-Croix est un édifice singulier mariant le classicisme religieux du XVIIe siècle aux symboles civiques de la municipalité nantaise. Reconstruite à partir de 1685 à l'emplacement d'un sanctuaire du XIe siècle, l'église présente une sobre façade en pierre de tuffeau d'inspiration jésuite ornée de pilastres doriques et d'un fronton triangulaire. Sa silhouette emblématique lui fut conférée en 1860 lors de l'adjonction audacieuse d'une tour-lanterne polygonale surmontant le portail, conçue par l'architecte Henri Driollet pour abriter le beffroi de la ville. Ce campanile élancé abrite l'ancienne horloge municipale et la célèbre cloche du Bouffay, fondue en 1663 et pesant plus de huit tonnes, autrefois installée dans la tour du château des ducs de Bretagne. Le sommet de la tour est couronné d'un dôme en plomb d'où s'élancent des figures d'anges musiciens en zinc doré sonnant de la trompette, marquant le paysage aérien de la cité comme un repère familier des riverains et des marchands.",
    visiter: "Prendre du recul depuis la place Sainte-Croix ou le débouché de la rue de la Juiverie pour admirer la verticalité surprenante du beffroi communal dressé au-dessus de l'église et scruter les détails baroques des anges aux trompettes dorées entourant le dôme sommital. Pénétrer sous le porche pour découvrir une nef unique et spacieuse aux élégantes voûtes lambrissées, réputée pour son acoustique remarquable. S'approcher du chœur pour admirer la chaire en bois sculpté du XVIIIe siècle ornée de panneaux en bas-relief provenant de l'abbaye d'Alonne, ainsi que les retables de marbre et de stuc encadrant les chapelles latérales. Conclure la visite en déambulant dans les ruelles pavées environnantes du quartier du Bouffay, riches en maisons à pans de bois et cours médiévales secrètes.",
    link: "https://photos.google.com/share/AF1QipNA-WajdV28rziPVi0hp3zq0PyAWWMSkNtis-tm3qUDmjaXU_K2XVfaWMdQqQZRGA?key=VWVyclhYQzBiblpDMTE1MTNTUXg4X1lwR1dfRHp3"
  },
  {
    id: "nantes_musee_des_arts",
    name: "Nantes - Musée d'Arts de Nantes",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Nantes",
    altitude: 22,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Palais des beaux-arts XIXe agrandi par le cube d'art contemporain",
    century: "XIXe siècle",
    category: "musee",
    counts: {},
    lat: 47.219296,
    lng: -1.547079,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMnCLAfcZWmZGBjL-hrUvxigSL7rrt0h3jGTNq4f9S5_TGJVqoPzo0MLbfqwTG2-Ce_1iuZI0dumeiMfZC3MattrRI0LwS25Z1aEw8w8UG_8nXUcI9EjF2ZJp4dxKGFI27WlXZE7mgmQIoUk8KsYKESmQ=w621-h919-s-no-gm?authuser=0",
    description: "Créé par décret consulaire sous Napoléon Bonaparte en 1801 aux côtés de quatorze autres grands musées de province, le musée d'Arts de Nantes abrite l'une des plus riches et prestigieuses collections encyclopédiques de France hors de Paris. Installé dans un vaste palais néoclassique inauguré en 1900 selon les plans de Clément Josso, l'édifice s'organise autour d'un monumental patio central ceinturé de galeries à arcades. À l'issue d'une métamorphose architecturale spectaculaire menée de 2011 à 2017 par le cabinet britannique Stanton Williams, le musée s'est agrandi d'un bâtiment d'avant-garde immaculé baptisé « le Cube », reliant le palais historique à la chapelle de l'Oratoire du XVIIe siècle par un jeu subtil de passerelles de verre et de coursives semi-enterrées. Ses collections embrassent plus de huit siècles de création artistique, depuis les retables primitifs italiens et les chefs-d'œuvre de la peinture classique du Grand Siècle (La Tour, Rubens, Watteau), jusqu'aux toiles maîtresses du XIXe siècle (Ingres, Delacroix, Courbet, Monet) et aux grands courants modernes et contemporains incarnés par Sonia Delaunay, Kandinsky, Soulages ou Giuseppe Penone.",
    visiter: "Entrer dans le grand patio baigné par la verrière zénithale dont la toiture translucide filtre harmonieusement la lumière naturelle, et monter le grand escalier monumental bordé de fresques pour commencer le parcours chronologique des salles supérieures. Prendre le temps d'admirer les trois chefs-d'œuvre insignes de Georges de La Tour, en particulier « Le Songe de saint Joseph » et « Le Joueur de vielle », célèbres pour la maîtrise absolue de leur clair-obscur à la lueur de la bougie. Traverser les salles néoclassiques et romantiques pour contempler « Le Bain turc » d'Ingres et « Les Cribleuses de blé » de Gustave Courbet, avant de gagner les coursives suspendues menant au « Cube ». Dans cet espace contemporain aux volumes épurés et parois de marbre blanc translucide, découvrir les installations d'art cinétique, les toiles géométriques et les sculptures monumentales des artistes actuels, puis faire une halte dans la chapelle de l'Oratoire attenante qui accueille des expositions temporaires immersives sous ses voûtes de pierre.",
    link: "https://photos.google.com/share/AF1QipNA-WajdV28rziPVi0hp3zq0PyAWWMSkNtis-tm3qUDmjaXU_K2XVfaWMdQqQZRGA?key=VWVyclhYQzBiblpDMTE1MTNTUXg4X1lwR1dfRHp3"
  },
  {
    id: "nantes_le_lieu_unique",
    name: "Nantes - Le Lieu Unique & Tour LU",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Loire-Atlantique",
    subdiv: "Nantes",
    altitude: 8,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Ancienne biscuiterie Lefèvre-Utile reconvertie en scène nationale et tour Art nouveau",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 47.215491,
    lng: -1.546194,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNiVtvlHrpTZPe00ou_KIQrupYNI8nHwY53q0kYS1rXA1sgohmmiBH_fZY4TahVJoCPfIt1mzR9Ac_JoTRfDqYT7zOxVWfqYr3gYXv-u8fcv4gK-V2uI9nqR1jY_e4ARInW_rgT65Z91GfqbhK5DWHXmw=w692-h919-s-no-gm?authuser=0",
    description: "Sentinelle industrielle dressée au bord du canal Saint-Félix face au château des ducs de Bretagne, la tour LU est l'icône architecturale et ouvrière la plus emblématique du Nantes du début du XXe siècle. Érigée en 1909 par l'architecte Auguste Bluysen pour encadrer l'usine des célèbres biscuits Lefèvre-Utile qui produisait le fameux Petit Beurre, cette tour extravagante s'inspirait des pavillons des Expositions Universelles. Coiffée d'un dôme ajouré, surmontée d'une renommée ailée et décorée de mosaïques polychromes, de lettrages dorés et de décors Art nouveau vantant l'industrie biscuitière, elle faisait jadis la paire avec une tour jumelle détruite dans les années 1970. Sauvée de la démolition grâce à la mobilisation des citoyens et restaurée minutieusement à la fin des années 1990, l'ancienne usine désaffectée a rouvert ses portes lors des célébrations de l'an 2000 sous le nom de « Le Lieu Unique ». Devenu scène nationale pluridisciplinaire sous l'impulsion de Jean Blaise, le complexe réunit aujourd'hui théâtre d'avant-garde, musique contemporaine, ateliers de création, bar convivial, restaurant et hammam au sein d'une immense friche brute conservant toute sa mémoire industrielle.",
    visiter: "Admirer depuis les berges du quai Ferdinand-Favre la profusion ornementale de la tour LU, avec ses mosaïques azurées, ses rinceaux dorés et sa flèche découpée sur le ciel nantais. Gravir les escaliers intérieurs de la tour jusqu'à son belvédère sommital pour actionner le gyrorama — dispositif optique insolite actionné à la manivelle — qui permet d'observer un panorama circulaire exceptionnel à 360 degrés sur la cathédrale, la tour Bretagne, la gare et le canal. Redescendre dans la grande nef centrale du Lieu Unique pour s'imprégner de son atmosphère conviviale et alternative, en contemplant les structures métalliques d'origine et les murs de briques patinées par les décennies de fabrication biscuitière, puis parcourir les espaces d'expositions temporaires consacrés aux arts visuels contemporains avant de boire un café en terrasse au bord de l'eau.",
    link: "https://photos.google.com/share/AF1QipNA-WajdV28rziPVi0hp3zq0PyAWWMSkNtis-tm3qUDmjaXU_K2XVfaWMdQqQZRGA?key=VWVyclhYQzBiblpDMTE1MTNTUXg4X1lwR1dfRHp3"
  },
   {
    id: "allonnes_sanctuaire_mars_mullo",
    name: "Allonnes - Sanctuaire Gallo-Romain de Mars Mullo (La Tour aux Fées)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe",
    subdiv: "Allonnes",
    altitude: 52,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "antiquite",
    era_label: "Haut lieu cultuel gallo-romain majeur de la cité des Aulerques Cénomans",
    century: "IIe siècle",
    category: "archeo",
    counts: {},
    lat: 47.968539,
    lng: 0.166377,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNEAMlC_6Vg8tLVwDb6dabEr2rg9KdQ5hZHBvTmgUEWgyfGuxlVmBPpkPVdK0U5W6yf_H3cGrd96qXQLJkJO7Y6z5VxSe-j6u25qlKWRFsDw9pAvj2tszcLLO-RuYDS0vnYymbd91CoMbjx4eyw2FzzDg=w1901-h1431-s-no-gm?authuser=0",
    description: "Implanté sur les hauteurs dominant le confluent de la Sarthe et de l'Huisne face au Mans antique, le sanctuaire de Mars Mullo à Allonnes est l'un des ensembles religieux monumentaux les plus prestigieux de la Gaule romaine. Établi sur un lieu de culte gaulois remontant au IVe siècle avant notre ère, ce grand complexe de pèlerinage dédié à Mars Mullo — divinité syncrétique protectrice et guérisseuse honorée par le peuple des Aulerques Cénomans — fut doté au IIe siècle d'un temple à plan centré gigantesque. Enserré dans une vaste esplanade de péribole rythmée de galeries à colonnades, l'édifice conserve les puissants pans de maçonnerie en petit appareil régulier de sa cella circulaire, surnommée traditionnellement « la Tour aux Fées ».",
    visiter: "Parcourir le parc archéologique aménagé en sous-bois pour découvrir les substructions dégagées du sanctuaire monumental. Observer de près l'élévation remarquable des murs de la cella en moellons calcaires et lits de briques (opus mixtum), imaginer la colonnade entourant le temple d'époque antonine et consulter les panneaux explicatifs qui retracent l'évolution du site, des fosses sacrificielles gauloises jusqu'aux thermes et au théâtre de pèlerinage voisins.",
    link: ""
  },
   {
    id: "sene_le_ranquin",
    name: "Séné - Anse & Marais du Ranquin",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 5,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Anse estuarienne protégée au fond du goulet de Conleau et de la Marle",
    century: "",
    category: "star",
    counts: {},
    lat: 47.614696,
    lng: -2.762547,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO5k0W6VnVIaS1BMr0uvsJ1o9E7E6o9HJausVYz9h3911VHxx6CcXCGyjh7JUH8DgiiPUF81ADpkcXx6XCaupdX7Q2czQASC4gtSwcZVrzcGaYxIAeffZmyrZV1rNwOM81W-zhbScAjwzq4tvuaVjn-QA=w1901-h1426-s-no-gm?authuser=0",
    description: "Enchâssée dans l'un des replis intimes du littoral sinagot, l'anse du Ranquin offre un paysage maritime calme où les marées rythment la découverte d'immenses vasières nourricières. Bordé d'une végétation de prés-salés, de schorres et de pinèdes maritimes, ce bras d'eau abrité fait face aux méandres conduisant vers le chenal de Vannes et le goulet de Conleau, servant de havre naturel pour de petites embarcations traditionnelles.",
    visiter: "Emprunter le sentier côtier qui serpente entre ajoncs et pins parasols pour admirer le contraste des vasières aux reflets argentés à marée basse. Observer les hérons cendrés et aigrettes garzettes en quête de coquillages et petits poissons au fond de la crique.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_port_barrarach",
    name: "Séné - Cale & Port de Barrarac'h",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 4,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Cale de passage historique reliant Séné à la presqu'île de Conleau",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.625579,
    lng: -2.774881,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOLO-PEbJGd9U61lrEY1c0p1EQLOHBPgtJy2VaEffM92QDIOZXZ7SJuLmswatHKINbfs5Ik-HhePO2pdGaCgVzqZ2pF5PXcJXGN935xdVcpln2qXg2V_6NneoRC9XFqWUFGCiRXFMQ4GuefhZMqf2W2Lw=w1901-h1267-s-no-gm?authuser=0",
    description: "Établi sur la rive orientale du chenal de Vannes, le petit port de Barrarac'h a longtemps servi de point de traversée fluvial stratégique. C'est d'ici que le bac à chaîne puis les passeurs à la godille assuraient la liaison directe avec la pointe de Conleau, évitant ainsi le grand détour par le fond de la ria pour les pêcheurs et paysans sinagots. Aujourd'hui, sa longue cale pavée plongeant dans le courant conserve un charme maritime authentique face au va-et-vient des voiliers.",
    visiter: "S'avancer sur la cale de pierre pour contempler de près le passage resserré du goulet maritime de Conleau. Prendre le temps d'observer le ballet des plates et des bateaux de plaisance manœuvrant dans le courant de marée.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_port_anna",
    name: "Séné - Port-Anna (Berceau des Sinagots)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 5,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Dernier port de pêche traditionnel en activité du golfe du Morbihan",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.623500,
    lng: -2.779191,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOw2zmhvKa7nmekw6nYX15ngVvUoorULlx2N077WH5jkOGOfhnaNdrhkmDhexUZg2I3WBOEs-qXCGC0QpmM80Ms8jVWo37wvTrSMBbyROWl3zzMR3C5otrzsYLW0hTFU1F8qIxZXZhwU2ddx4hKWWGAHQ=w1901-h1267-s-no-gm?authuser=0",
    description: "Aménagé à la fin du XIXe siècle à la pointe de Bellevue, Port-Anna est un haut lieu du patrimoine maritime breton et l'ultime bastion des pêcheurs côtiers du golfe. Berceau historique du sinagot — ce célèbre cotre traditionnel à deux mâts et voiles rouge cachou non haubanées —, le port accueille encore les débarquements de bars, de crevettes et de dorades rapportés par les chalutiers locaux, sous le regard des anciennes maisons d'armateurs et des casiers à crustacés empilés sur les quais.",
    visiter: "Se promener sur la jetée de granit pour admirer les sinagots historiques amarrés au mouillage et s'imprégner de l'atmosphère laborieuse et iodée du port. Déguster des fruits de mer et des huîtres creuses aux terrasses de la cale en profitant de la vue imprenable sur l'entrée de la rivière de Vannes.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_presqu_ile_villeneuve",
    name: "Séné - Presqu'île de Villeneuve",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 6,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Langue côtière sauvage s'avançant dans les anses saumâtres du Morbihan",
    century: "",
    category: "star",
    counts: {},
    lat: 47.593819,
    lng: -2.729067,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOlCM2KM2IPbR2J0pKl8J57jWcpAUAKSmLXIOvvRlTDkaQPX5HviBiXrxqZ986nRKU62Pd_wZKsgMktweqQxL2gaSxvrH9dbgF9QXVa5n4jAGmByhnyWOuPB00z2qAnWKcUbg53EaWySzM5Xfssu--jZA=w1901-h1267-s-no-gm?authuser=0",
    description: "S'étirant au sud de la commune de Séné vers les îles de Boëdic et Boëd, la presqu'île de Villeneuve est un fin cordon de terre préservé où se côtoient prés-salés, claires ostréicoles et murets de pierres sèches. Isolé de l'effervescence urbaine, ce promontoire boisé de chênes et d'ajoncs offre un belvédère de premier ordre sur les méandres intérieurs de la petite mer et les parcs ostréicoles traditionnels.",
    visiter: "Suivre le chemin piétonnier littoral qui fait le tour de la pointe pour savourer le calme d'un rivage préservé. Observer les oiseaux limicoles qui sondent les vasières découvrantes et contempler la vue panoramique sur les sinuosités du golfe.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_croix_de_montsarrac",
    name: "Séné - Croix de Montsarrac (Kerarden)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Croix de carrefour monolithique en granit taillé sur les chemins sauniers",
    century: "XVIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.595852,
    lng: -2.716696,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMu3GcWTRy6aEjWfOiSJfD46wiQ4VMhf25DlwMCWM1oLoYoj_BVKKg8TWqJC3GSZWa1l6eZ0hrmP0VWlaTYUiiUah8jbgtzM9hgn11SV4iYkeC65K-6gg_mR3HU21UHK6Hkz9h-DYwlU-Tlrne7Vl7XGQ=w1757-h2635-s-no-gm?authuser=0",
    description: "Érigée à un carrefour champêtre au cœur du terroir de Montsarrac et de Kerarden, cette vénérable croix de granit gris témoigne de la foi profonde des marins et des paludiers sinagots à l'aube des temps modernes. Taillée d'un seul bloc et fichée sur un socle massif, elle servait autrefois de repère géographique pour les convois de sel acheminés depuis les salines littorales vers l'arrière-pays vannetais.",
    visiter: "Marquer une halte lors d'une balade rurale pour observer la sobriété de la taille de pierre et les mousses qui patinent ce calvaire séculaire. Découvrir les venelles du hameau de Montsarrac aux longères bretonnes fleuries d'hortensias.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_pointe_du_bill",
    name: "Séné - Pointe du Bill",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 8,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Cap rocheux et grève de galets avançant face au passage de Boëd",
    century: "",
    category: "star",
    counts: {},
    lat: 47.599475,
    lng: -2.733038,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPB9FZ8xEUjBqGwwDSmyc37qkHQFP_CdENm-GSKdHfTSZUFfINA3hsZ0wuIQw-VF3p2_gdjuH3fSRQEzMu1i5QXV1PedZwZN5-H0gH4S6e9zpsB-CLJOaqCqLzm082-It2jwMi44RluDi4rj605Z-_UHA=w1901-h1267-s-no-gm?authuser=0",
    description: "Avancée stratégique dessinant l'entrée occidentale de l'anse de Moustérian, la pointe du Bill est un éperon de schiste et de terre battu par les brises du golfe. Face à elle s'étirent les silhouettes sauvages des îles de Boëdic et de Boëd, ainsi que les parcs à huîtres qui se découvrent lors des grandes marées. Sa grève sauvage mêle galets, sable roux et coquillages brisés sous la frondaison des pins maritimes.",
    visiter: "Rejoindre l'extrémité de la pointe par le sentier des douaniers pour profiter d'un panorama dégagé sur les îles centrales du golfe. Regarder passer les dériveurs de l'école de voile voisine et contempler le jeu des marées modelant les bancs de sable découvrants.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_plage_mousterian",
    name: "Séné - Plage de Moustérian",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 3,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Plus grande plage familiale de Séné bordée d'un cordon dunaire préservé",
    century: "",
    category: "plage",
    counts: {},
    lat: 47.605032,
    lng: -2.740607,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMESg--ZZa4EgtfjxlspzhkQuyoDNqYrN4Cd1AIo3wjtk_9SvPIq05lIU3JAQZ06CqhCaTSEp8cQRmEQN0eq_VdRhk6XgZ-9be6b9A7FJpktGPc-e_Ltvm63-2pPEPzGJxb1Mf0cv-13YbqZ9u28B-WcQ=w1901-h1267-s-no-gm?authuser=0",
    description: "Principale plage sablonneuse de la commune de Séné, la grève de Moustérian se déploie en un large croissant de sable doré protégé des vagues du large. Très appréciée pour ses eaux calmes et tempérées propices à la baignade et aux sports de glisse nautique, elle offre une perspective directe sur l'île de Boëd et abrite en arrière-plage un espace naturel sensible d'oyats et de landes côtières.",
    visiter: "Poser sa serviette sur le sable fin et se baigner à marée haute dans les eaux abritées du golfe. Longer l'estran à pied vers le centre nautique ou poursuivre vers la pointe de Moustérian pour admirer les dériveurs et catamarans évoluer sur le plan d'eau.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_dolmen_gorneveze",
    name: "Séné - Dolmen du Gornevèze",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 14,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Sépulture funéraire mégalithique néolithique à couloir (Classé Monument Historique)",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.608005,
    lng: -2.745282,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOLoUm2J_PHtPTvvK4V7ORGpJGbHMcTAWOvayILfeiaCnnX72F9dniU_s2j2ZaSfmzOm8wTgzdt_WDAVqpFwj4UEL-sQRvWi7pcK8NcOZLzjzermYcqlX9MAlUtsEXL2pfceEGtuyaTkoqBv7GXAS3mHw=w1901-h1267-s-no-gm?authuser=0",
    description: "Érigé il y a plus de cinq mille ans sur une légère colline dominant l'anse de Moustérian, le dolmen du Gornevèze est l'un des rares témoins mégalithiques bien préservés de la presqu'île de Séné. Cette sépulture à couloir néolithique conserve sa robuste table de couverture en granite reposant sur plusieurs dalles verticales de soutien, formant une chambre funéraire autrefois dissimulée sous un imposant tumulus circulaire de terre et de pierres.",
    visiter: "Gagner ce monument néolithique niché en lisière d'un bois de chênes et de pins. Observer l'appareillage millénaire des blocs de granite et la chambre funéraire témoignant des premiers peuplements préhistoriques s'étant établis sur les rives du Morbihan.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_fontaine_de_langle",
    name: "Séné - Fontaine de Langle",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 8,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Édicule de fontaine et lavoir en moellons de granite du terroir sinagot",
    century: "XVIIIe siècle",
    category: "fontaine",
    counts: {},
    lat: 47.617862,
    lng: -2.772545,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM-ohSjgpKIUN6Mhzr_1zJ4R-5FjA0mtsdL0kJ23YveRD62QB47PDzUfwDDGUTRVNNYbGsc2w0VZYbDcbEtDaQywywIFJka8I7X57Mt8hS2RUicyKSS7CJcANbLXAWcSjgLDtooq-MpaWBGuL8mRpPfNg=w1901-h1267-s-no-gm?authuser=0",
    description: "Implantée dans un pli de terrain humide à proximité du hameau de Langle et du littoral de Port-Anna, la fontaine de Langle est un exemple remarquable du petit patrimoine rural breton lié à l'eau. Protégée par une niche voûtée en maçonnerie de granite, cette source intarissable alimentait les maisonnées voisines et déversait son eau claire dans un lavoir pavé où les lavandières se rassemblaient quotidiennement.",
    visiter: "Faire une halte paisible devant cette fontaine rurale ombragée par les saules et les fougères. Remarquer la pureté de la source captée dans la roche et apprécier la préservation de ce lieu de mémoire du quotidien paysan.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_ile_de_boed",
    name: "Séné - Île de Boëd (Passage submersible du passage de l'île)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 9,
    is_island: true,
    island_name: "Île de Boëd",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Île sauvage accessible à pied sec à marée basse par un tombolo sablonneux",
    century: "",
    category: "rando",
    counts: { rando: 1 },
    lat: 47.606711,
    lng: -2.759652,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOtZhVmgYnB3wDMk3BlCmaL36ro-NoCIX2ukxkYNcEvhkOj_DvppB7sRpGHx_YOBaLGXUbhzUEN7Qa7BftITrzodgLLNTeO4EWlMzMuBQc9V9zk5WFbYa1UJDwz-Dv_Swj9aRMlbjtAF_5-pcwQJQCMow=w1901-h1267-s-no-gm?authuser=0",
    description: "S'étirant au large de Séné face à Moustérian, l'île de Boëd est une des rares îles privées et protégées du golfe du Morbihan accessible à pied sec par les randonneurs lors des marées basses de fort coefficient. Traversée d'est en ouest par des sentes bordées de landes d'ajoncs, de pins maritimes et d'anciennes parcelles maraîchères délimitées par des murets de pierre, Boëd conserve un caractère pastoral et maritime brut d'une rare quiétude.",
    visiter: "Consulter soigneusement la table des marées pour traverser l'estran sablonneux à pied sec depuis la cale de Cadouarn ou de Mousterian. Parcourir le sentier insulaire dans un silence total en humant les parfums de pinède et de goémon, tout en surveillant le retour de la mer montante pour regagner la terre ferme.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_ile_de_boed_tour_tenero",
    name: "Séné - Île de Boëd - Pointe & Tour Ténéro",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 11,
    is_island: true,
    island_name: "Île de Boëd",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Ancien moulin à vent transformé en tour belvédère à la pointe sud-est de Boëd",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.602787,
    lng: -2.754782,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNDZpWKMfg1nnEnRmpkzYxdQ2pY4VF4EgfY_j5R62qNvmsZoC4fYJLzErjUbC1wv2y2lDdr22-y0kDF0P3IBhg-ftqIGxswbRJilsFtjDE6R5q9RfwkOj6QLh2HZ9hMhsddJsOjyf1r_UCgXbW3fiFiaA=w1901-h1267-s-no-gm?authuser=0",
    description: "Dressée fièrement sur la pointe sud-est de l'île de Boëd, la tour Ténéro est une silhouette emblématique reconnaissable de loin par tous les navigateurs du golfe. Bâtie en moellons de schiste et de granit sur les vestiges d'un ancien moulin à vent insulaire, cette tour cylindrique crénelée domine un escarpement rocheux plongeant dans le courant menant vers l'île d'Arz. Elle offre un panorama spectaculaire embrassant le goulet maritime, les parcs à huîtres et le vaste plan d'eau central.",
    visiter: "Rejoindre la pointe méridionale de Boëd pour contempler cette tour de garde insolite posée entre ciel et mer. Admirer la vue circulaire sur l'île d'Arz toute proche et observer les voiliers négociant le chenal avec le courant de marée.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
  {
    id: "sene_reserve_naturelle_marais",
    name: "Séné - Réserve Naturelle Nationale des Marais de Séné",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Séné",
    altitude: 4,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Plus grand espace littoral protégé du golfe du Morbihan et sanctuaire d'avifaune",
    century: "",
    category: "parc_naturel",
    counts: {},
    lat: 47.616672,
    lng: -2.712241,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPxN83APcgajHdYxjCy6pGAN1BcF-LZrdTLyhFMM3REEiq5i_DVX-1GHHpBp3rT_EE1GS3Jiajm4bkGsl3tV_6plqGDxXyX5tjYsP_rG5CidyniOvcUWgXMYBCgvPlQxgiWRaMcH1aBf92g_oznirKWWw=w1901-h1431-s-no-gm?authuser=0",
    description: "Étendue sur plus de cinq cents hectares d'anciens marais salants, de vasières lagunaires et de prairies humides, la Réserve Naturelle Nationale des Marais de Séné est le sanctuaire écologique le plus important du golfe du Morbihan. Classé d'intérêt international pour la protection des oiseaux d'eau, ce vaste biotope saumâtre accueille des milliers de limicoles, d'échassiers et de canards en escale migratoire ou en nidification, notamment l'avocette élégante, la spatule blanche, l'échasse blanche et le chevalier gambette.",
    visiter: "Parcourir les sentiers balisés aménagés sur les digues d'argile entre les bassins d'eau salée. Pénétrer dans les observatoires ornithologiques en bois équipés de longues-vues pour admirer de très près les colonies d'oiseaux sauvages sans les déranger, et visiter le centre d'accueil pédagogique pour comprendre l'histoire saunière et la faune des marais.",
    link: "https://photos.google.com/share/AF1QipNnphodHd7ZJ7e3O9m06dVLlvS2pe1Fbp1GBVfWd8HrXhC-g9yEs717mSChDtrbcA?key=azV2OGVSRUZ0c29VVFF1OXF0X1ViQ2NXRFlBM1pR"
  },
   {
    id: "vannes_remparts_tour_connetable",
    name: "Vannes - Remparts Médiévaux & Tour du Connétable",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Fortifications urbaines médiévales et tour de flanquement ducale en grand appareil",
    century: "XVe siècle",
    category: "chateau",
    counts: {},
    lat: 47.656247,
    lng: -2.755941,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMHTiy0QIN4O0mLO0b01IzxmIx8NxtN1LJTOBrUjUcw0HGYyJF0ubFlpqWNi6Wo3r8JzT8q0Td5iYh3RSRXt7jAwFjsFNKzYYOAagoTZHpAM9zzrGQ_oIDOzaQxWaPncEDXEyvBNVhBTuw9eExjLbi1kw=w2219-h1480-s-no-gm?authuser=0",
    description: "Témoignage grandiose de la puissance des ducs de Bretagne qui établirent leur cour à Vannes aux XIVe et XVe siècles, l'enceinte fortifiée déploie l'un des ensembles de remparts urbains les mieux conservés de France. Dominant les douves transformées en parterres à la française fleuris au bord de la rivière de la Marle, la tour du Connétable se dresse comme le joyau défensif et résidentiel du circuit. Bâtie sous le règne du duc Jean IV en grand appareil de granit appareillé, cette tour semi-circulaire à cinq niveaux allie la robustesse d'un ouvrage d'artillerie percé de canonnières et de mâchicoulis à l'élégance d'une demeure seigneuriale dotée de fenêtres à meneaux et de hautes toitures d'ardoise.",
    visiter: "Parcourir la promenade aménagée le long des anciens fossés au pied des murailles pour apprécier la monumentalité des courtines et la rigueur géométrique des jardins de la Garenne. Emprunter la poterne médiévale pour grimper sur le chemin de ronde et admirer la vue panoramique sur les toits d'ardoise du centre ancien, avant de contempler l'architecture militaire et les créneaux de la tour du Connétable.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
  {
    id: "vannes_lavoirs_de_la_garenne",
    name: "Vannes - Lavoirs de la Garenne",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 8,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Lavoir public pittoresque à galerie de bois cintré sur les rives de la Marle",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.655754,
    lng: -2.755391,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMUOGmS4NAAJxkZ0tpWtW72gd2_8rGBMU_R2OikjTfVPNiaNop3U5xTnr6zmnFVHHGm6Dzjjo5D0HSS8PpFiN-klRKKJH0EnxP0svxok7jcQFzYR2oIOrAzT7c-ZpLzYvnAr2Dx27NaXWsLMiXlmA_Z7w=w2219-h1480-s-no-gm?authuser=0",
    description: "Édifiés au début du XIXe siècle au pied immédiat des puissantes murailles médiévales et de la porte Poterne, les lavoirs de la Garenne composent l'un des décors les plus romantiques et photogéniques de la cité des Vénètes. Suivant la courbure gracieuse de la rivière de la Marle, ce long bâtiment à pans de bois et charpente d'ardoise posé sur des piles de granit servait autrefois de lieu d'activité intense et de sociabilité pour les lavandières vannetaises. Les reflets de la toiture ondulée dans les eaux calmes de la rivière, entourée de massifs horticoles impeccables, forment un contraste saisissant avec la verticalité minérale des remparts.",
    visiter: "Longer les berges pavées de la Marle pour observer la remarquable charpente en berceau de bois et le plan incliné où s'agenouillaient les lavandières. Photographier la perspective depuis le ponton de pierre en embrassant à la fois les lavoirs, le rideau d'eau et les tours d'angle des fortifications de la haute ville.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
  {
    id: "vannes_centre_historique",
    name: "Vannes - Cœur Historique & Maisons à Pans de Bois",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 18,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "renaissance",
    era_label: "Secteur sauvegardé aux ruelles médiévales pavées et façades polychromes à encorbellement",
    century: "XVIe siècle",
    category: "star",
    counts: {},
    lat: 47.656892,
    lng: -2.757660,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOvKu8mh1lFN_PA8dzQputTNKbG7tNWXHo_ZsTWdn9kP3zVoFJVxT7qIo6rLv8RHV5PagRNTR3v5hgP9qAa_Dg4KshTlWw7kZrYlGbH920bJu-wyj8VZy5XaxOdw6J019m-hOiRPaLSSNFU83_EZhI4Fw=w2219-h1480-s-no-gm?authuser=0",
    description: "Enserré à l'intérieur de sa ceinture de remparts, le centre historique de Vannes est un dédale enchanteur de ruelles médiévales pavées, de placettes intimes et de cours secrètes préservées des outrages du temps. Comptant plus de cent soixante-dix demeures à colombages et à pans de bois construites entre les XVe et XVIIe siècles, la cité dévoile des façades polychromes ornées d'encorbellements hardis, de sablières richement sculptées et de motifs renaissants. Autour de la place Henri-IV et de la rue Saint-Salomon, l'ambiance marchande perpétue une tradition urbaine séculaire au pied des logis patriciens de granit.",
    visiter: "Flâner au hasard des venelles pavées en levant les yeux vers les étages en surplomb des maisons médiévales colorées. Faire une halte sur la place Henri-IV pour apprécier l'harmonie des pignons à pans de bois, explorer les petites boutiques d'artisans d'art et s'imprégner de l'atmosphère animée de cette ville d'art et d'histoire.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
  {
    id: "vannes_et_sa_femme",
    name: "Vannes - Enseigne « Vannes et sa Femme »",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 17,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Sculpture polychrome en granit taillée à l'angle d'une maison à colombages",
    century: "XVIe siècle",
    category: "star",
    counts: {},
    lat: 47.656728,
    lng: -2.757568,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOFyfPPFpl8q_3IiEy7Ha3E-0M3RaozShgiPIyxmYmSc2AaAqS6EtVuQZ2QDxdr-68QBCDqmjFNPOeXEe1-rwr4SboTfgVte6ZI8w4rTMTKGfgqfGLwaZpwZlshkvbAhi8hyaqcypPlwzW6_YpnDlX8JA=w2219-h1480-s-no-gm?authuser=0",
    description: "Véritable emblème populaire et mascotte chaleureuse de la ville, le haut-relief sculpté de « Vannes et sa femme » trône à l'angle de la rue du Bienheureux Pierre-René Rogues et de la rue Noé. Incrustée dans la maçonnerie d'une maison à pans de bois du XVIe siècle, cette œuvre en granit peint représente un couple de bourgeois jovials aux visages ronds et souriants, amputés de leurs mains sans doute lors des tourments révolutionnaires. Probable enseigne commerciale d'un cabaretier ou souvenir attendri des propriétaires d'alors, cette sculpture demeure l'un des détails patrimoniaux les plus chers au cœur des Vannetais.",
    visiter: "Lever la tête au carrefour piétonnier pour contempler les expressions riantes et bienveillantes de ces deux figures emblématiques taillées dans le granit breton. Remarquer les détails des costumes d'époque Renaissance et immortaliser ce célèbre symbole urbain avant de poursuivre vers le château Gaillard tout proche.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
  {
    id: "vannes_cathedrale_saint_pierre",
    name: "Vannes - Cathédrale Saint-Pierre",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 20,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Édifice gothique composite abritant le tombeau de saint Vincent Ferrier",
    century: "XVe siècle",
    category: "religieux",
    counts: {},
    lat: 47.657802,
    lng: -2.756973,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOUr4GJ6zNTHbwiN9dxDiQtpoUy_bHOm_IF4WgBoClRxPstkMGkE1H24YhWIL8RvkMDq3vO2YJcjfxhwYUqX84upUs6vkhTxJ7fFlmSEJ-G9Ar7Uln-wTqEYDouQvblYZflyU0kQcqqs5aNwsBsCbvXtA=w1580-h1053-s-no-gm?authuser=0",
    description: "Dominant la colline du Mené au point culminant de la vieille ville, la cathédrale Saint-Pierre est le plus imposant sanctuaire du diocèse de Vannes, s'étirant sur une longueur exceptionnelle de cent dix mètres. Reconstruite à l'emplacement d'un édifice roman dont subsiste le puissant clocher carré du XIIIe siècle, la cathédrale présente une immense nef gothique sans bas-côtés, réaménagée du XVe au XIXe siècle. Elle abrite la sépulture et les reliques de saint Vincent Ferrier, célèbre prédicateur valencien mort à Vannes en 1419, ainsi qu'une chapelle axiale ornée de remarquables retables et de tapisseries d'Aubusson.",
    visiter: "Pénétrer dans la vaste nef pour apprécier l'élégance de la voûte et la clarté des élévations gothiques. Se recueillir devant le tombeau de saint Vincent Ferrier dans le transept, contempler la magnifique rotonde Renaissance édifiée par le chanoine de Guéméné et jeter un coup d’œil aux stalles sculptées du chœur ainsi qu'aux galeries du cloître attenant.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
  {
    id: "vannes_port_de_plaisance",
    name: "Vannes - Port de Plaisance & Esplanade du Port",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 4,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Bassin à flot historique ouvrant sur le golfe du Morbihan via le chenal de la Marle",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.654043,
    lng: -2.757986,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP3V8R7FEHtRRXS94la7xMeuzui4H6NU7eAUmwnyuahb81lQxeoZ0XB9q0OfJh8-RdawgSZe-zW6QKI3EFXvI_JSjWsUVzTdkF46jHVYe6eX8g0CSCwfETdfzcM0tm7EU-hZgwbF3qWkQR56C8LfmJ31w=w2219-h1480-s-no-gm?authuser=0",
    description: "S'engouffrant jusqu'au pied de la porte Saint-Vincent et des remparts méridonaux, le port de plaisance de Vannes est le cœur battant maritime de la ville. Relié aux flots du golfe du Morbihan par un long chenal sinueux régulé par une écluse de retenue, ce bassin à flot accueille des centaines de voiliers, de gréements traditionnels et de sinagots aux voiles ocre rouge. Les quais arborés de la Rabine et la place Gambetta déploient une enfilade animée de terrasses de cafés, de brasseries et de promenades piétonnes très prisées des marins comme des promeneurs.",
    visiter: "Traverser la majestueuse porte Saint-Vincent du XVIIIe siècle pour déboucher sur la place Gambetta en fer à cheval face aux mâts des navires. Flâner le long de l'esplanade plantée d'arbres séculaires de la rive droite ou gauche, observer les manœuvres de franchissement des pontons à l'heure des marées et admirer le va-et-vient des bateaux traditionnels bretons.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
  {
    id: "vannes_menhir_kerbiquette",
    name: "Vannes - Menhir de Kerbiquette (Roh-Pri)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 48,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Menhir néolithique monolithe en granite dressé sur les hauteurs nord de Vannes",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.687209,
    lng: -2.773479,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOcKuRLPj8aZ4HAqIz9hPP9YaCU79bA87nUpZa0ktVtjuxTkXjKO3xVz-v0fKnXKXEU97DjEUCgpeIyPK_frqcWJBgb2e1VKZBn7eQXmQ2aa2-X9Dlqgm_eVo_z9eoJKV2FRF5yqmVIeLtkbi5AZAKNgw=w1757-h2635-s-no-gm?authuser=0",
    description: "Implanté sur le plateau boisé dominant les quartiers nord de Vannes, le menhir de Kerbiquette (également connu sous le toponyme de Roh-Pri ou pierre de terre) est un témoin précieux du mégalithisme périurbain. Érigé au cours du Néolithique il y a plus de six millénaires, ce bloc monolithe en granite brut se dresse à plus de trois mètres de hauteur, présentant une silhouette effilée et trapézoïdale profondément patinée par les siècles. Autrefois intégré à un vaste réseau de repères rituels et territoriaux reliant le plateau vannetais aux landes intérieures des landes de Lanvaux, le site a fait l'objet de fouilles et d'aménagements protecteurs.",
    visiter: "Rejoindre ce secteur préservé des faubourgs vannetais pour contempler la puissance d'ancrage de ce monolithe de granite dressé par les premiers pasteurs néolithiques. Découvrir la quiétude champêtre du sous-bois environnant et mesurer la hauteur impressionnante de la pierre couverte de mousses et lichens.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
  {
    id: "vannes_presqu_ile_conleau",
    name: "Vannes - Presqu'île & Piscine d'Eau de Mer de Conleau",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Vannes",
    altitude: 5,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Ancienne station balnéaire insulaire reliée par une digue face aux îles du Golfe",
    century: "XIXe siècle",
    category: "plage",
    counts: {},
    lat: 47.627625,
    lng: -2.777256,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM2Hkti6FI4s1ZViaihURHivXrhvnL5xeYa1WXFzk2LAUXCSu_RC_I06QRVmV42cHEu6HrYbLdcgGeT4oaqJ911YZLSJYO91XVJxASqUCSNzzSefMBmdnAPKGU5JC8klIkhYWADTW6RjoivmQTogjWorA=w2219-h1480-s-no-gm?authuser=0",
    description: "Véritable avant-poste maritime de Vannes sur les eaux du golfe du Morbihan, la presqu'île de Conleau était à l'origine une île rocheuse couverte de pins, rattachée au continent en 1879 par une digue-route aménagée. Transformée en station balnéaire élégante à la Belle Époque sous l'impulsion de passionnés qui y bâtirent un chalet suisse et des bains de mer, Conleau séduit par son atmosphère maritime hors du temps. Elle dispose d'une célèbre piscine naturelle d'eau de mer régulée par les marées et bordée d'une plage sablonneuse, offrant un observatoire exceptionnel sur le goulet resserré où transitent les navires en route vers Séné ou l'île d'Arz.",
    visiter: "Faire le tour pédestre ombragé de la presqu'île sous la frondaison des pins maritimes pour respirer l'air iodé et admirer la vue panoramique sur les îles et les parcs ostréicoles. Se baigner dans le grand bassin d'eau de mer à marée haute, ou s'attabler aux terrasses du café historique de Conleau pour contempler le balai des voiliers franchissant le détroit.",
    link: "https://photos.google.com/share/AF1QipNlMPNwHBbaxlcTEAzamK3009GZIredm7xE38n5kU01_Il977cOhLQfbRPGScqmeA?key=S1Q1aEdhRjMwdDlPVUtCcjF6eV9zTjBtRzZ2Z3VR"
  },
   {
    id: "ile_aux_moines_port",
    name: "Île-aux-Moines - Port du Léresto & Débarcadère",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 3,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "bateau",
    era_group: "contemporain",
    era_label: "Port d'escale maritime reliant l'île à Port-Blanc en cinq minutes de traversée",
    century: "XXe siècle",
    category: "rando",
    counts: { rando: 1 },
    lat: 47.598415,
    lng: -2.848765,
    image: "https://lh3.googleusercontent.com/pw/AP1GczObI6PWQMrWBBz-uNfi7lf2XRNPbyQHjBDRJiNaGCFA5MOU6fQnFG8qUvvQQ8HxLXLUlrQUY_VZUVas_6YBD60jE96GJPRoWJa2Nqn8ebvA-Y4bLZJS0Bm6NZeOAJcpMpdMOmZs71xRWb9s3PsgBdiTrA=w2642-h1989-s-no-gm?authuser=0",
    description: "Porte d'entrée emblématique de la perle du golfe du Morbihan, le port du Léresto accueille les vedettes insulaires reliant en quelques minutes la pointe de Port-Blanc sur le continent à l'Île-aux-Moines. Animée par le va-et-vient des bateaux traditionnels, des doris et des loueurs de bicyclettes, cette anse abritée offre un premier contact pittoresque avec l'ambiance insulaire piétonne, bordée de cales de granit et dominée par les terrasses de café donnant sur le chenal.",
    visiter: "Débarquer sur le quai animé et contempler le ballet des sinagots et voiliers traditionnels évoluant dans le détroit marin. Louer un vélo ou lacer ses chaussures de marche pour entamer le grand périple pédestre autour de l'île en s'imprégnant de la douceur microclimatique locale.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_chapelle_esperance",
    name: "Île-aux-Moines - Chapelle Notre-Dame d'Espérance",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 22,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Sanctuaire marin néogothique érigé sur les hauteurs du bourg insulaire",
    century: "XIXe siècle",
    category: "religieux",
    counts: {},
    lat: 47.597746,
    lng: -2.844814,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPCYQRZBVluzd2flp51T3FtbugQKYVns6zutGiHYG1_hSs2w-ae7GjFeqKQKcz3SnMCKyu7-lTcm_SMjrnGU-6eehMo8EEMBFQ4MDEMe7qZmzsrlQRPYJB5Wk96Npo4GlCFC-G5KflScGtG43MOXROL-Q=w1984-h2635-s-no-gm?authuser=0",
    description: "Édifiée en 1854 sur un point haut dominant la montée vers le bourg, la chapelle Notre-Dame d'Espérance est un haut lieu de ferveur maritime où les familles de marins venaient implorer la protection de la Vierge lors des périlleuses campagnes de pêche et de cabotage au long cours. Cette sobre chapelle en moellons de granit surmontée d'un clocheton ajouré abrite une nef lumineuse ornée d'ex-voto marins, de vitraux évoquant la vie insulaire et d'une statue tutélaire de Notre-Dame.",
    visiter: "Pousser la porte de bois pour se recueillir dans le calme de la nef et observer la finesse des maquettes de vaisseaux suspendues en guise de remerciement pour les marins rescapés des tempêtes de l'Atlantique. Découvrir l'enclos arboré d'hortensias et d'eucalyptus qui entoure ce sanctuaire paisible.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_pointe_du_trech",
    name: "Île-aux-Moines - Pointe du Trech & Calvaire",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 12,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Promontoire septentrional et croix monumentale veillant sur le détroit d'Arradon",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    lat: 47.606886,
    lng: -2.838129,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOB7sZqoRFcgOhJGCZyj_2lqoQNmJEBYEbJBivRI5Medb__IdTMcOM73CP5jhNrt81E88JaNR2oJd1Be8UMJzqjnwDLyNbA0klVk1BCgPEA0-eGqF-WmyAW1pjIyZbsholoXq-jLbD98eXOyf6CRe3ITQ=w1984-h2635-s-no-gm?authuser=0",
    description: "Éperon granitique le plus septentrional de l'Île-aux-Moines, la pointe du Trech s'avance audacieusement vers la pointe d'Arradon, resserrant le passage maritime du golfe où circulent de puissants courants d'estran. Coiffée d'un calvaire de granit dressé face aux flots en mémoire des péris en mer, la pointe offre un panorama imprenable sur l'archipel intérieur, les îles voisines de Logoden et les parcs ostréicoles battus par les marées.",
    visiter: "Rejoindre le promontoire par le sentier littoral bordé de pins maritimes et d'ajoncs d'Europe. S'asseoir au pied de la croix de pierre pour contempler le spectaculaire chassé-croisé des voiliers et kayakistes négociant la passe du Trech au gré des marées.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_eglise_saint_michel",
    name: "Île-aux-Moines - Église Saint-Michel",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 27,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Cœur paroissial insulaire orné d'un clocher de granit et d'ex-voto maritimes",
    century: "XIXe siècle",
    category: "religieux",
    counts: {},
    lat: 47.598519,
    lng: -2.842402,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMgUqboyZO6pPbWqfcqX-Jgj_ADXBx3G8Psaw1hAMunKB8Zepb6Ac5xZAYWou31Pji6MdKR6kGl6ZsX-TLZTz1y6m2xA-cdYCvRSn4qwKk_s-e6TjOan9MFUFpXfYCKg3RjR6Qg0DJg0zWBKvacVYoGRA=w1984-h2635-s-no-gm?authuser=0",
    description: "Trônant au cœur du village aux venelles pavées et aux maisons de capitaines bordées de figuiers, l'église Saint-Michel constitue le centre spirituel historique de l'Île-aux-Moines. Reconstruite en 1826 en grand appareil de granit sur l'emplacement d'un ancien sanctuaire du monastère de Redon, elle se distingue par sa tour-clocher trapue, son buste reliquaire en bois doré de saint Vincent Ferrier et ses maquettes de frégates et trois-mâts offertes par les marins insulaires.",
    visiter: "Flâner sur la place de l'église ombragée avant de découvrir la nef ornée de boiseries chaleureuses et les impressionnants maquettes de navires suspendues aux voûtes en ex-voto. Parcourir les ruelles adjacentes du bourg fleuries de mimosas et de camélias.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_fontaine_gueric",
    name: "Île-aux-Moines - Fontaine du Guéric",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 15,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Point d'eau patrimonial traditionnel en granit encastré dans le talus insulaire",
    century: "XVIIIe siècle",
    category: "fontaine",
    counts: {},
    lat: 47.592867,
    lng: -2.840212,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMBsJNR-86eSs_kw2UJ8AbHW0Vcf445Bm2vRuOzivgLu5NhRkquza0kQeFT8_8MWy9TiEQix04HmF1IrqvVrQvJQlcqUG3k2Yn9q-3Z5lnFYeYKx1Y6kRRBg947IK6eHKd-ypk18x-aYYWIBFAW-Ynz4Q=w1984-h2635-s-no-gm?authuser=0",
    description: "Niché dans un vallon verdoyant le long d'un chemin creux menant vers la côte orientale, l'édicule de la fontaine du Guéric est un témoignage essentiel de l'ingéniosité des insulaires pour capter les précieuses nappes d'eau douce de l'île. Bâtie en gros blocs de granit appareillés et coiffée d'un toit de pierres plates, cette fontaine voûtée approvisionnait autrefois les habitants du hameau et leurs bêtes, tout en servant de lavoir et de halte fraîche pour les laboureurs.",
    visiter: "Faire une halte rafraîchissante sous la frondaison des chênes pour admirer la rigole d'eau claire et le bassin pavé préservé de cette fontaine rurale. Apprécier le calme bucolique de ce secteur préservé des grands flux touristiques.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_pointe_du_brouel",
    name: "Île-aux-Moines - Pointe du Brouel",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 8,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Cap sauvage s'avançant face aux chenaux de l'île d'Arz et de Saint-Armel",
    century: "",
    category: "star",
    counts: {},
    lat: 47.591466,
    lng: -2.832707,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMST0rcmR-GcUnXCR_BM-ZnGxw5WGRtuFbUcy-LCorCbZM0p6L5cEKSff4NyqUSbrBfsKhbZ3oABE37gaoJQMC-GV5KLqczHVycM7ZD9iFfYifsJSTiSk7UuAJ_zSQBpCR4VNh-dEuFBGIbnyB3WdaMbQ=w2642-h1989-s-no-gm?authuser=0",
    description: "Dessinant l'un des bras de la croix que forme l'Île-aux-Moines, la pointe du Brouel s'étire vers le sud-est dans les eaux calmes du golfe en faisant face au littoral voisin de l'île d'Arz. Frangée d'une côte basse où alternent taillis maritimes de chênes verts, grèves de galets et murets de pierre sèche envahis de lichens, cette avancée paisible offre une vue remarquable sur le chenal d'Arz et les méandres intérieurs de la petite mer.",
    visiter: "Marcher le long du sentier douanier côtier jusqu'au bout de la pointe pour profiter d'un panorama dégagé sur les îles du golfe et les parcs ostréicoles. Observer les oiseaux de mer (aigrettes, cormorans et bernaches) se nourrissant à marée basse dans les anses abritées.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_ilot_brouel",
    name: "Île-aux-Moines - Île de Brouel",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 4,
    is_island: true,
    island_name: "Île de Brouel",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Île accessible à pied sec à marée basse face à la pointe du Brouel",
    century: "",
    category: "star",
    counts: {},
    lat: 47.587093,
    lng: -2.828558,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN_8KPGNLAOTAG5go9yJmmQ1quGKNVOumSnAoxeTnZep1mGunwSfVeGB9KPrb3UAIBMKwOQEMvOGL89UUhp27rp8DWgFYTpJFHgFCc5lH7OeAI-ysWf3K3ePhaAwMtPEP0IZ91LR8k5HpoQ4ANI2JzVXg=w2642-h1989-s-no-gm?authuser=0",
    description: "Sentinelle de terre et de roc située au sud-est de la pointe du Brouel, l'île de Brouel émerge des eaux miroitantes de l'anse. Accessible à pied sec à marée basse en franchissant l'estran coquillier et les herbiers marins, ce monticule insulaire végétalisé offre un point de vue sauvage et privilégié sur le plan d'eau intérieur du golfe du Morbihan et les rives préservées de l'île d'Arz.",
    visiter: "Profiter de la marée basse pour traverser l'estran et gagner à pied sec l'île de Brouel. Faire le tour de ce promontoire maritime isolé, observer les oiseaux de rivage qui y trouvent refuge et surveiller la marée montante pour regagner la terre ferme à temps.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_plage_du_vran",
    name: "Île-aux-Moines - Plage du Vran & Anse du Guerric",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 2,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Anse sablonneuse intime bordée de pins maritimes face à l'ouest",
    century: "",
    category: "plage",
    counts: {},
    lat: 47.589926,
    lng: -2.845990,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPR8xTvX35z2seIEHQj9BAPzVunb487WJ7C-062T25K3RWaFBsGrGZhZsvEyaNTjFY5Ukq8NGXD-GFSbd6ntK_2_HCyucrJPzWOfvCtmtVb2yn7nUezbZzHxbkbZ7xV0m9pYOr-ypevMe_0_x7mBWIF_g=w2642-h1989-s-no-gm?authuser=0",
    description: "Abritée au creux de la côte occidentale de l'île, la plage du Vran est une séduisante grève de sable fin et de coquillages protégée des brises marines par un cordon de pins et de chênes verts. Orientée vers le chenal menant vers l'île de Berder et la presqu'île de Rhuys, cette conche paisible offre des eaux calmes et tempérées idéales pour la baignade en famille à marée haute.",
    visiter: "Poser sa serviette sur le sable doré et profiter d'une baignade revigorante dans les eaux limpides du golfe. Flâner le long de l'estran rocheux à marée basse pour chercher des coquillages ou admirer les voiliers au mouillage dans la baie.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_fontaine_salzen",
    name: "Île-aux-Moines - Fontaine de Salzen",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 12,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Bassin de source et lavoir de granit séculaire au sud de l'île",
    century: "XVIIIe siècle",
    category: "fontaine",
    counts: {},
    lat: 47.579582,
    lng: -2.852033,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOGpaxvx1N-Au-9Og1R9PfzUT8OtddljplU0O9eUfoy3lc-pB9bHO_1E5zQlEq7LqBgJkEch4OTpp9ZoeMvnohGjg_oxIiGOEgqiWmZ0Th-hpqJDTNhXXXtOtIY9Tgnm4WNURQ6tOkzANDpEWFyMFDJwQ=w2642-h1989-s-no-gm?authuser=0",
    description: "Située en bordure de la route du sud conduisant vers la pointe de Nioul, la fontaine de Salzen témoigne de la vie quotidienne des communautés rurales de l'Île-aux-Moines avant l'adduction d'eau courante. Cet édifice maçonné en granit gris abrite une source pérenne protégée sous une voûte de pierre, attenante à un ancien bassin de rouissage et de lavage du linge.",
    visiter: "S'arrêter au bord du chemin de randonnée pour admirer la structure rustique en pierre de taille entourée de fougères et de mousses. Imaginer les rassemblements des lavandières de Salzen rythmant autrefois la vie du sud de l'île.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_pointe_de_brannec",
    name: "Île-aux-Moines - Pointe de Brannec & Falaises Sud",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 10,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "nature",
    era_label: "Extrémité méridionale sauvage et venteuse face à l'entrée océanique du golfe",
    century: "",
    category: "star",
    counts: {},
    lat: 47.566325,
    lng: -2.848967,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNDvnCNQZlHss6QssHBP-VMhpSIxI0JyOYOZY_2DkJbUAf_JjYpHNkgF4zNlL1C_saSkkYUgHt2hJi6_EM5YMwXS8QXnwFJikim40DS2IaB8kBjr41shBHI8xIs38fpSdSpw4Z3gDLQKys-QYPcEGWHYg=w2642-h1989-s-no-gm?authuser=0",
    description: "Battue par les embruns océaniques à l'extrême sud de l'Île-aux-Moines, la pointe de Brannec marque la transition entre les eaux protégées du bassin intérieur et les courants vifs de la passe de Port-Navalo. Dominée par une lande rase d'ajoncs nains, de bruyères et de pins maritimes courbés par le vent d'ouest, la pointe offre un panorama grandiose à 180 degrés embrassant la presqu'île de Rhuys, l'île de Gavrinis et la sortie vers l'océan Atlantique.",
    visiter: "Gagner l'extrémité sud par le sentier côtier escarpé pour ressentir la force du grand large et admirer les courants tourbillonnants au confluent des passes. Faire une pause contemplative sur les dalles de granite sculptées par l'érosion marine.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_dolmen_penhap",
    name: "Île-aux-Moines - Dolmen de Penhap",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 18,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Monument mégalithique funéraire néolithique gravé (Classé Monument Historique)",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.571320,
    lng: -2.857794,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMzn0YVW4xDeeML1qf8PIZbsP5oiEAsqfQxk4hJcVfXbNb0HiieLUvA5_oCU_fibGyBscYFqrtXmrVve6hXHht106TvoAjZkTXsq-gojUf799KgWN_nQBrBlKs3FAsn7LUqV_A7jRKkhOoH5pqABgIPmQ=w2642-h1989-s-no-gm?authuser=0",
    description: "Sépulture mégalithique la mieux conservée de l'Île-aux-Moines, le dolmen de Penhap se dresse au cœur d'une lande sauvage d'ajoncs et de genêts sur les hauteurs du sud de l'île. Datant d'environ 4000 avant notre ère, cette tombe à couloir conserve une colossale table de couverture de près de quinze tonnes reposant en équilibre sur ses piliers supports, dont l'un présente des gravures préhistoriques représentant une hache emmanchée.",
    visiter: "Pénétrer dans l'enclos mégalithique classé pour admirer l'impressionnante chambre funéraire et chercher du regard les gravures néolithiques sur le pilier d'entrée. Découvrir la lande de Penhap et ses panoramas maritimes environnants.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_dolmen_kerno",
    name: "Île-aux-Moines - Dolmen du Kerno",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 20,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Sépulture néolithique en granite nichée sous la pinède insulaire",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.582310,
    lng: -2.855357,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPjE7NstYZqR58gDBgVzMUrOwPTgWl_Fem3Hfmh3S4jx1yNfTdHXlkuYjA5oZg-tGxi0VVCtDGA-kHvmMEtRX9mC1gNGl2vAiRkcbFm3wg1kTXuEJLa_UeR4tRj6Dpwx1xah77n02FlFoyflDyQXXYJvg=w2642-h1989-s-no-gm?authuser=0",
    description: "Dissimulé sous les ombrages d'un bosquet de pins maritimes à mi-chemin entre le bourg et le sud de l'île, le dolmen du Kerno constitue un autre maillon précieux du riche sanctuaire néolithique de l'île. Composé d'une dalle de couverture reposant sur plusieurs orthostates de granit brut, ce dolmen témoigne de la forte densité démographique et spirituelle de ces terres émergées à l'époque où le golfe était encore une vallée fluviale fertile.",
    visiter: "Rejoindre le monument par les sentes sablonneuses qui sillonnent le secteur boisé du Kerno. Observer la disposition des blocs mégalithiques intégrés au sous-bois et apprécier la fraîcheur de la pinède après la marche le long du littoral.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
  {
    id: "ile_aux_moines_cromlech_kergonan",
    name: "Île-aux-Moines - Cromlech de Kergonan",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Île-aux-Moines",
    altitude: 24,
    is_island: true,
    island_name: "Île-aux-Moines",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Enceinte mégalithique circulaire en fer à cheval (Classé Monument Historique)",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.590653,
    lng: -2.851808,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO4TG1_FnwHYOGwmTsglcSm5yWyyTd-3_vJgGuUuSSLUUfq1oUv087Kr97W5Uiq5WSI6tkRolAgb1zEidZsSiLI-LH_hoxChvpIxVY4DJ2Vo33EekYVz5X-q4V2eCEkvuYK5J1CFYVYYTyX7LW4X9y8zw=w2642-h1989-s-no-gm?authuser=0",
    description: "Plus vaste enceinte mégalithique de Bretagne insulaire avec son diamètre de plus de soixante-dix mètres, le cromlech de Kergonan forme un impressionnant demi-cercle en fer à cheval composé de vingt-quatre menhirs de granit encore debout. Érigé au IVe millénaire avant notre ère au centre géographique de l'île, ce temple solaire et rituel mégalithique s'ouvre vers l'est et s'intègre harmonieusement aux jardins et murets de pierre sèche du hameau de Kergonan.",
    visiter: "Parcourir le pourtour du cercle mégalithique et mesurer la stature imposante du plus grand menhir du site, surnommé « le Moine », dressé à plus de trois mètres de haut. Découvrir l'alignement géométrique des monolithes préservés en lisière des habitations traditionnelles.",
    link: "https://photos.google.com/share/AF1QipN0IBf9VXEF8vsQECkipbYNwuKHKHzqNAd2_qf3PY9SD-tMVl8PzJIDYTDzk7RPSw?key=VjhtV1U2dlBGWXRkVnYyZTZyX1hxUlpJR0NTWnlR"
  },
   {
    id: "belz_saint_cado_chapelle",
    name: "Ria d'Étel - Îlot & Chapelle Saint-Cado",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Belz",
    altitude: 4,
    is_island: true,
    island_name: "Saint-Cado",
    transport: "a_pied",
    era_group: "medieval",
    era_label: "Ancien prieuré roman et chaussée légendaire bâtie par le Diable",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 47.686608,
    lng: -3.184286,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNNrJ5kXK5P9blc5NUJM9I9SKfvkBQzB41t0_4j9U2Jt4uRiLJcIMMMxjGRhDteu78eU_s3lB8_fe2xkKMQ7KeLL4reV9u3NBmhZhY3ml5Du7JWCEMmmzWrXvj7wbQxZH82-niyf-bnB0hkGBM6LjSTeA=w2653-h1769-s-no-gm?authuser=0",
    description: "Relié à la terre ferme par un pont de pierre séculaire traversant les eaux changeantes de la ria d'Étel, l'îlot de Saint-Cado est un lieu emblématique du patrimoine maritime et spirituel breton. Bâtie sur un ancien tertre insulaire où le moine gallois Cado fonda un ermitage au VIe siècle, la chapelle romane du XIIe siècle dévoile une sobre nef de granit couverte d'une charpente lambrissée, un autel dédié à saint Cado et une tribune sculptée remarquable. Le hameau de pêcheurs aux venelles fleuries de roses trémières s'organise autour de l'édifice, s'achevant au sud par un calvaire monumental à degrés et une fontaine de dévotion semi-submersible léchée par les marées.",
    visiter: "Traverser le pont de pierre au ras de l'eau pour pénétrer dans le cœur préservé de l'îlot piétonnier. Entrer dans la chapelle pour s'asseoir sur le « lit de pierre » de saint Cado, réputé autrefois guérir la surdité, et contempler les ex-voto de bateaux suspendus sous les voûtes. Poursuivre la promenade le long de la jetée sud jusqu'à la fontaine d'eau douce régulièrement engloutie par la mer montante, tout en admirant la lumière changeante qui embrase les vasières et les parcs ostréicoles à marée basse.",
    link: "https://photos.google.com/share/AF1QipM-ClSqzBHKnPezVkqhkJHWn9QGmLqOlNITgMxupEkgiHqmmDJdOjonEseyFWPNkw?key=a1lHZWpZQldzQkxxZEt0Z0w0LTRTcVIzWWVLRDln"
  },
  {
    id: "belz_ilot_nichtarguerc_maison_bleue",
    name: "Ria d'Étel - Maison de Nichtarguér (Maison aux volets bleus)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Belz",
    altitude: 2,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "contemporain",
    era_label: "Ancienne maisonnette de gardien d'huîtres posée sur un récif de granit",
    century: "XIXe siècle",
    category: "naturel",
    counts: {},
    lat: 47.685607,
    lng: -3.187492,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMmp_uSvt3j1G5atFxqxjvl4Ez8-_BqbSWW9Rmyy4Lw75XsFcGDSpu4MShc4_LXkdxiOOuQ0cyRXsaWczgXsXuQ8GXp-Y_bLmVxOE2ErtTihCVV6NYJ0l1YL2NQOSMM9qmcL1SyPYrMhm0DeKPpPYswGQ=w2653-h1492-s-no-gm?authuser=0",
    description: "Véritable carte postale de la Bretagne et symbole visuel de la ria d'Étel, la maisonnette aux volets bleus de l'îlot de Nichtarguér se dresse fièrement sur un minuscule rocher de granit ceinturé d'eaux calmes et de vasières. Érigée en 1894 pour héberger le gardien des parcs ostréicoles environnants et sa famille, cette modeste bâtisse en pierre flanquée de ses volets couleur azur veillait nuit et jour sur les précieux bancs d'huîtres plates afin de décourager le pillage. Entièrement encerclée par le flot lors des pleines mers, elle offre une silhouette poétique et solitaire qui dialogue harmonieusement avec les reflets dorés des couchers de soleil sur le goulet.",
    visiter: "Admirer et photographier cette silhouette iconique depuis la rive sud de l'îlot de Saint-Cado ou depuis la cale de mise à l'eau de Belz, le site lui-même étant privé et inaccessible au public pour préserver sa quiétude. Profiter des nuances infinies de lumière à l'heure dorée lorsque les volets bleus et la pierre granitique se détachent sur les eaux miroitantes de la ria, ou observer les aigrettes, hérons et courlis posés sur les platiers rocheux au pied de la maison à marée basse.",
    link: "https://photos.google.com/share/AF1QipM-ClSqzBHKnPezVkqhkJHWn9QGmLqOlNITgMxupEkgiHqmmDJdOjonEseyFWPNkw?key=a1lHZWpZQldzQkxxZEt0Z0w0LTRTcVIzWWVLRDln"
  },
  {
    id: "belz_dolmen_kergueran",
    name: "Belz - Dolmen de Kergueran",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Belz",
    altitude: 12,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Sépulture mégalithique néolithique à couloir (Classé Monument Historique)",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.679869,
    lng: -3.186965,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO5KZYUSISJFF1M1PAgG79pV8Ep1_Pbz2tW4mZu1bjgeiEzBCxFRDyBb_jo9s2JedpoGdwA7y-9sro5lG0RGq0-Q6ee0Y9Yo5VVKUTKGB1DDFuQsZevL95hyArz-cXxkNx1q9KPdpeXZJPxM3xelOJc_A=w2653-h1998-s-no-gm?authuser=0",
    description: "Dissimulé dans un bosquet champêtre au sud-ouest du bourg de Belz, le dolmen de Kergueran est un vestige remarquable de la puissante concentration mégalithique qui jalonne le bassin de la ria d'Étel. Datant du Néolithique moyen, ce dolmen à couloir conserve une imposante table de couverture en granite massif reposant sur plusieurs orthostates verticaux formant une chambre funéraire polygonale. Autrefois recouvert d'un cairn de pierrailles et d'un tumulus de terre aujourd'hui presque entièrement arasés par l'érosion et les travaux agricoles, le monument témoigne du culte funéraire et de l'occupation continue du territoire par les premières sociétés d'agriculteurs-éleveurs armoricains.",
    visiter: "Rejoindre le monument en empruntant les sentes piétonnes bordées de haies de chênes et de talus fleuris depuis la route menant aux hameaux de la ria. Observer la remarquable disposition d'équilibre de l'épaisse dalle sommitale sur ses supports rocheux et scruter les surfaces de granit piquées de cupules et de mousses. Profiter du calme champêtre de ce sous-bois pour apprécier la continuité paysagère entre ces tombes mégalithiques et les rivages estuariens tout proches.",
    link: "https://photos.google.com/share/AF1QipM-ClSqzBHKnPezVkqhkJHWn9QGmLqOlNITgMxupEkgiHqmmDJdOjonEseyFWPNkw?key=a1lHZWpZQldzQkxxZEt0Z0w0LTRTcVIzWWVLRDln"
  },
  {
    id: "belz_pointe_larmor_bignac",
    name: "Ria d'Étel - Pointe de Larmor & Anse du Bignac",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Belz",
    altitude: 6,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Sentier littoral côtier de la ria d'Étel entre pinèdes maritimes et parcs à huîtres",
    century: "",
    category: "naturel",
    counts: { rando: 1 },
    lat: 47.671771,
    lng: -3.201420,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLxHjoAUcrrKvB-OX2t45zwe4-4LJS_ZcWoSikq4uJy32pSwlL0H2xf2Lb3M9ZUXFDURa6rGsL1pHZVBlVzVe0CunOLOCAEOHpfH2Q5javnWL-7y-H3YQzISCT7KIezO6FqxI3_Jki7ovksIXPkJvOdQ=w2653-h1998-s-no-gm?authuser=0",
    description: "S'avançant comme un promontoire boisé dans les méandres intérieurs de la ria d'Étel, la pointe de Larmor et l'anse du Bignac offrent l'une des escapades littorales les plus sauvages et apaisantes de la commune de Belz. Bordée par un sentier de randonnée cheminant au plus près de l'estran sous les ramures protectrices des pins maritimes et des chênes, cette côte échancrée alterne petites grèves de coquillages concassés, platins rocheux couverts de goémon et chenaux d'estuaire calmes. Le panorama s'ouvre généreusement sur les rives sauvages de Locoal-Mendon et sur le ballet des chalands ostréicoles manœuvrant entre les tables métalliques au fil des marées.",
    visiter: "Suivre la boucle de randonnée côtière balisée au départ des abords du Bignac pour longer les rives paisibles de la ria en humant les parfums de résine de pin et de sel marin. Contempler les oiseaux limicoles qui fouillent la vase nourricière à marée descendante et s'arrêter sur les rochers de la pointe pour admirer les nuances émeraudes du goulet marin. Découvrir les parcs ostréicoles en activité et les cabanes d'écaillage traditionnelles qui ponctuent les contours abrités de l'anse.",
    link: "https://photos.google.com/share/AF1QipM-ClSqzBHKnPezVkqhkJHWn9QGmLqOlNITgMxupEkgiHqmmDJdOjonEseyFWPNkw?key=a1lHZWpZQldzQkxxZEt0Z0w0LTRTcVIzWWVLRDln"
  },
  {
    id: "belz_dolmen_kerlutu",
    name: "Belz - Dolmen de Kerlutu",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Belz",
    altitude: 10,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Chambre mégalithique funéraire néolithique érigée en lisière bocagère",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.674069,
    lng: -3.180848,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP-_dwo9e_NrI6ymCUTrdWZaJDxW3EYFY9TnlgiP1xgImCu8qfJwupads8fzj3udwRDh-GOiwZVxASuRHODXhRFfb6fsLpL6pBLhp_H_g-tNfg3p7cvX_IqqX3JmdoAEmYK4QPfCKOhAaDfBHSj2-alUw=w2653-h1998-s-no-gm?authuser=0",
    description: "Érigé il y a plus de cinq millénaires sur un léger relief dominant l'arrière-pays de la ria, le dolmen de Kerlutu témoigne de la ferveur architecturale funéraire des constructeurs du Néolithique armoricain. Ce monument mégalithique comprend une imposante dalle de couverture trapézoïdale reposant solidement sur des piliers verticaux en granite indigène, dessinant une chambre sépulcrale orientée traditionnellement vers l'est. Parfaitement intégré dans le paysage de bocage et de murets de pierre sèche, le site conserve l'émouvante empreinte des premiers rites funéraires collectifs pratiqués le long des voies de passage reliant l'océan aux terres intérieures du Morbihan.",
    visiter: "Accéder au mégalithe par les chemins ruraux ombragés reliant le secteur de Kerlutu au réseau de sentiers de randonnée de Belz. Contempler l'assemblage millénaire des blocs bruts de schiste et de granite, taillés et dressés sans mortier avec une ingénierie remarquable de l'équilibre. Prendre le temps d'observer les lichens dorés incrustés sur la pierre et d'apprécier la tranquillité bucolique de ce sanctuaire néolithique préservé des circuits touristiques battus.",
    link: "https://photos.google.com/share/AF1QipM-ClSqzBHKnPezVkqhkJHWn9QGmLqOlNITgMxupEkgiHqmmDJdOjonEseyFWPNkw?key=a1lHZWpZQldzQkxxZEt0Z0w0LTRTcVIzWWVLRDln"
  },
  {
    id: "belz_dolmen_kerhuen",
    name: "Belz - Dolmens de Kerhuen (Er-Mané)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Belz",
    altitude: 18,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Complexe de tombes mégalithiques néolithiques (Classé Monument Historique)",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.681305,
    lng: -3.173730,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP4Vqt06nAUIGBNWhjxf9mAo-ADvAU1FT4l967GrYUGITxT_WbO0rTDEp38zKuIjOEtNej1sKYzudPjR6nhnzWSOsGp67NrKy9Nu9-fNDJ5DzSODR3O_mrBQnscCv-xojZvy9vKN6LcGQeZHGZKSJQr3w=w2653-h1998-s-no-gm?authuser=0",
    description: "Dressé sur la hauteur d'Er-Mané à proximité du village de Belz, le site de Kerhuen abrite l'un des ensembles mégalithiques les plus remarquables et les mieux conservés de la région. Composé de deux sépultures dolméniques distinctes à couloir d'accès, il impressionne par l'état de conservation de sa chambre principale surmontée d'une table monolithe en granite d'un volume et d'un poids considérables. Protégé au titre des Monuments historiques depuis 1934, cet ensemble funéraire monumental servait de nécropole collective aux élites paysannes néolithiques entre 4000 et 3000 avant notre ère, attestant de techniques de levage et de bardage des monolithes exceptionnelles.",
    visiter: "Pénétrer dans le bosquet préservé où se dressent les deux dolmens pour étudier de près l'agencement géométrique des orthostates de soutien. Contourner la chambre sépulcrale pour apprécier la masse colossale de la dalle de toiture soutenue par ses piliers millénaires et observer les vestiges du couloir d'accès autrefois réservé aux cérémonies d'inhumation. Admirer le jeu d'ombres créé par le feuillage des châtaigniers et des ajoncs qui enveloppent ces pierres dressées dans une atmosphère de légende.",
    link: "https://photos.google.com/share/AF1QipM-ClSqzBHKnPezVkqhkJHWn9QGmLqOlNITgMxupEkgiHqmmDJdOjonEseyFWPNkw?key=a1lHZWpZQldzQkxxZEt0Z0w0LTRTcVIzWWVLRDln"
  },
  {
    id: "belz_dolmen_moulin_des_oies",
    name: "Belz - Dolmen du Moulin des Oies (Boccinis Vras)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Belz",
    altitude: 14,
    is_island: false,
    island_name: "",
    transport: "a_pied",
    era_group: "prehistoire",
    era_label: "Sépulture néolithique en pierre dominant le bassin maritime du Moulin des Oies",
    century: "",
    category: "megalithe",
    counts: {},
    lat: 47.681907,
    lng: -3.179387,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMJTNFE8GZ_z4VSBmQYGcSZ01hF5troFnSakHcrbLM27ZYR7Jz9jT9xxvRufm0Hyw6FpQbJ-6GOSIdS1tVw7ROsaxPlX-Jx3Fdv6STTgvprySlIQIV4fKnuDGAQ8qZgKtg9hvVZ8jVswHjWW6dvX10Bsw=w2653-h1998-s-no-gm?authuser=0",
    description: "Surplombant le vaste plan d'eau marin du Moulin des Oies qui communique avec la ria d'Étel, le dolmen de Boccinis Vras constitue un précieux repère archéologique néolithique du pays de Belz. Implanté sur un promontoire stratégique contrôlant autrefois le passage des chenaux maritimes, le mégalithe conserve sa volumineuse table de recouvrement en granite posée sur ses piliers supports dressés à la verticale, formant une chambre sépulcrale simple. Ce lieu de mémoire et de recueillement millénaire s'inscrit au sein d'un corridor funéraire majeur reliant les sanctuaires côtiers de Carnac et Locoal-Mendon aux berges nourricières de la petite mer d'Étel.",
    visiter: "Rejoindre le dolmen en longeant le chemin qui mène vers les rives du Moulin des Oies et les anciens moulins à marée du secteur. Découvrir la chambre de pierre et contempler la manière dont les bâtisseurs préhistoriques ont sélectionné et orienté ce bloc granitique face aux vents d'ouest. Poursuivre la balade le long de la berge pour observer les oiseaux d'eau (aigrettes, tadornes de Belon et cygnes) évoluant sur la retenue marine, particulièrement photogénique aux heures de marée haute.",
    link: "https://photos.google.com/share/AF1QipM-ClSqzBHKnPezVkqhkJHWn9QGmLqOlNITgMxupEkgiHqmmDJdOjonEseyFWPNkw?key=a1lHZWpZQldzQkxxZEt0Z0w0LTRTcVIzWWVLRDln"
  },
   {
    id: "morbihan_ile_berder",
    name: "Golfe du Morbihan - Île Berder & Passage Submersible",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Larmor-Baden",
    altitude: 5,
    is_island: true,
    island_name: "Île Berder",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Île accessible à marée basse par un tombolo submersible face au courant de la Jument",
    century: "",
    category: "naturel",
    counts: { rando: 1 },
    lat: 47.579964,
    lng: -2.886317,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNClU1Vv7sWtM6kgfS8D9rLizNqiPk-YmPceT-0azOAkvN4Z96ZUVffI5vnGLNgUb9r_o8YBvKVUh5guLzLWZU0_lN1vncsY-kYlAR4fmRamtCuiC-tI9e9uE9zeJ_2kNcYxvuzfrerFaPt-SoHlKsefQ=w2549-h1919-s-no-gm?authuser=0",
    description: "Joyau végétal et maritime niché au cœur du golfe du Morbihan sur la commune de Larmor-Baden, l'île Berder offre une expérience insulaire fascinante rythmée par le flux et le reflux des marées. Reliée au continent par une chaussée submersible de pavés et de goémon qui se découvre uniquement à marée basse, l'île déploie un sentier côtier d'environ deux kilomètres et demi ombragé par une végétation luxuriante aux accents presque méditerranéens, composée de pins maritimes centenaires, de chênes verts, de palmiers et d'ajoncs fleuris. À sa pointe sud, le regard plonge sur le courant de la Jument, le deuxième courant de marée le plus puissant d'Europe, où les eaux s'engouffrent avec une force spectaculaire entre Berder et l'île aux Moines en formant d'impressionnants tourbillons d'écume.",
    visiter: "Consulter impérativement l'horaire de la marée basse avant de franchir à pied sec la chaussée submersible recouverte de coquillages reliant Larmor-Baden à l'île. Parcourir la boucle pédestre intégrale qui fait le tour du littoral sous la frondaison des grands pins parasols pour admirer les criques sauvages de sable fin et les panoramas sans cesse renouvelés sur l'île aux Moines et l'île de la Jument. Faire une halte contemplative à la pointe méridionale pour observer le déferlement assourdissant du courant marin, puis jeter un œil au manoir flanqué de sa haute tour carrée et à la chapelle néogothique Sainte-Anne édifiée par le comte Dillon.",
    link: "https://photos.google.com/share/AF1QipMqnQ0IuLbC4uN2v2e3O65c3qUIJTKVz82bE0vYAc59n2I8rQVJQht66uYPRrF25w?key=eGpISkxfSEE4RzVGNm0wSHZjWWxIdWRSUFZSQ0xR"
  },
  {
    id: "baden_plage_des_sept_iles",
    name: "Golfe du Morbihan - Les Sept Îles & Baie de Baden",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan",
    subdiv: "Baden",
    altitude: 3,
    is_island: true,
    island_name: "Les Sept Îles",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Île accessible à pied sec par un cordon dunaire submersible bordant la rivière d'Auray",
    century: "",
    category: "plage",
    counts: { rando: 1 },
    lat: 47.584968,
    lng: -2.932932,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNKRgexn4YYtcbV_gqgTv7k4VjhoqnbO9lo26F9_PIWMFdtwKXzIBaIABoTPiKXRgPTe1C7wX6pRAUs95CP8bMEzYldAY0NOl1fziU4unEyjAw5qSxXMXAsYLHmU5tey1VYJthYwdyl2DhN08XbCKANCA=w2549-h1919-s-no-gm?authuser=0",
    description: "Située sur le littoral préservé de Baden, en bordure du goulet maritime reliant la ria d'Auray aux eaux abritées du golfe du Morbihan, la presqu'île des Sept Îles constitue l'un des espaces naturels les plus sauvages et paisibles de la côte morbihannaise. Contrairement à ce que son nom suggère, le site se compose d'une seule et même île étirée, reliée à la terre ferme par un tombolo de sable blanc et de galets qui disparaît complètement sous la mer lors des pleines mers de vives-eaux. Bordée de petites grèves de sable doré, de landes d'ajoncs et de falaises de schiste basses battues par les vagues, la baie offre un décor marin changeant où se mêlent parcs ostréicoles traditionnels, voiliers au mouillage et vols d'aigrettes garzettes.",
    visiter: "Traverser le cordon dunaire à pied lors de la marée descendante pour gagner les Sept Îles et s'installer sur sa plage intimiste orientée vers le sud et l'ouest, propice à la baignade à l'abri des vents dominants. Suivre la sente côtière qui serpente parmi les ajoncs et les genêts pour admirer la vue dégagée sur Locmariaquer, Port-Navalo et l'entrée majestueuse de la rivière d'Auray ponctuée de pinasses ostréicoles. Prendre garde à la montée des eaux pour retraverser le banc de sable avant qu'il ne soit submergé, ou poursuivre la balade le long du sentier des douaniers (GR 34) qui borde la baie de Locmiquel.",
    link: "https://photos.google.com/share/AF1QipMqnQ0IuLbC4uN2v2e3O65c3qUIJTKVz82bE0vYAc59n2I8rQVJQht66uYPRrF25w?key=eGpISkxfSEE4RzVGNm0wSHZjWWxIdWRSUFZSQ0xR"
  },
   {
    id: "ostriconi_plage",
    name: "Balagne - Plage de l'Ostriconi & Dunes de l'Agriate",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Palasca",
    altitude: 2,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Site naturel classé Grand Site de France et protégé par le Conservatoire du littoral",
    century: "",
    category: "plage",
    counts: {},
    lat: 42.662842,
    lng: 9.061173,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP7OkbdDReBx9gwcc4l899wYSEaLgVCPumTTw9gPdeDJ2fvFdzo9XTzytNWc-fLpAu6NX6bxFBAl1y_B31JT3Q5V0HAxjeJkE89sBbjHAS33c4Zw3mHDLhOwAxocL_dF_VGf1RBbc86i4oXwJm_YoJtUQ=w2549-h1706-s-no-gm?authuser=0",
    description: "Marquant la frontière naturelle spectaculaire entre la fertile plaine de Balagne et le désert minéral des Agriate, la plage de l'Ostriconi déploie une vaste étendue de sable blanc immaculé bordée par les eaux turquoise du golfe de Saint-Florent. Classé Grand Site de France et rigoureusement protégé par le Conservatoire du littoral, ce havre sauvage est traversé par les méandres paresseux de la rivière Ostriconi, formant un estuaire lagunaire ceinturé de dunes littorales mobiles parmi les plus hautes de Corse, d'oyats et de maquis piqué de genévriers séculaires sculptés par le libeccio. Dépourvue de toute construction humaine et inaccessible aux véhicules motorisés, l'anse conserve une authenticité brute où se reposent régulièrement des vaches insulaires en liberté.",
    visiter: "Stationner sur les hauteurs le long de la route territoriale puis descendre le sentier panoramique taillé dans la terre rouge qui offre une vue plongeante splendide sur le cordon dunaire et les étangs côtiers. Franchir la rivière à gué ou contourner les zones humides pour poser sa serviette sur le sable fin et nager dans des eaux cristallines aux dégradés émeraude. Découvrir l'arrière-plage dunaire en respectant les ganivelles de protection du biotope, et admirer au coucher du soleil les crêtes ocres du désert s'enflammer face aux reflets marins.",
    link: "https://photos.google.com/share/AF1QipPB9Tbdc51OoxHIQXyjt6OC7jR9EhI6Qd1cnzcPZCcPMvkrqpBJXZOA7kNRN4lBLg?key=MHZiZ3dQbjY2aC1sS3FvWW1qUWRvbk9mLVExMEtR"
  },
  {
    id: "palasca_punta_liatoggiu",
    name: "Agriate - Crête & Sommet de Punta Liatoggiu",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Palasca",
    altitude: 222,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Belvédère rocheux granitique dominant l'entrée sud-ouest du désert des Agriate",
    century: "",
    category: "naturel",
    counts: { rando: 1 },
    lat: 42.667237,
    lng: 9.073988,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMImqQ_nn8QpLGQ7KMbS8RvK8H-AvRMKTGh1Dk6zOz5MXMCYsYYMCFPTmlJozRWCzi61yEx0_Shhe9VDwukdp45SVccrZes9n_qfBTPVJzdMWwZ6ve2xoXrKS8fzyVbpFxW6ZzMbrOw0TpwFqtJoLS3xg=w2549-h1699-s-no-gm?authuser=0",
    description: "Culminant à deux cent vingt-deux mètres d'altitude au-dessus des flots, la Punta Liatoggiu dresse son dôme de granite sculpté de taffoni monumentaux comme une sentinelle veillant sur l'entrée occidentale du désert des Agriate. Accessible uniquement à pied par d'anciens chemins douaniers et des sentes pastorales rocailleuses, ce sommet aride offre l'un des panoramas côtiers les plus grandioses de Haute-Corse. La crête dénudée, balayée par les embruns et couverte d'un maquis rasant d'immortelles, de cistes et de lentisques, plonge vers l'ouest sur l'amphithéâtre dunaire de l'Ostriconi et s'ouvre au nord sur l'enfilade sauvage des anses rocheuses menant jusqu'à la pointe du Ghignu et les lointaines montagnes du Cap Corse.",
    visiter: "Entreprendre la randonnée pédestre sportive depuis la plage de l'Ostriconi en suivant le tracé balisé du sentier des douaniers avant de bifurquer sur la crête ascendante menant au dôme sommital. Gravir les derniers blocs de granite fissuré pour s'installer sur les dalles sommitales et profiter d'un panorama aérien à couper le souffle embrassant les étangs littoraux, la côte déchiquetée des Agriate et les contreforts du Monte Padro en arrière-plan. Prévoir de l'eau en quantité et un chapeau, l'itinéraire évoluant en plein vent et sous un soleil battant sans aucune zone ombragée.",
    link: "https://photos.google.com/share/AF1QipPB9Tbdc51OoxHIQXyjt6OC7jR9EhI6Qd1cnzcPZCcPMvkrqpBJXZOA7kNRN4lBLg?key=MHZiZ3dQbjY2aC1sS3FvWW1qUWRvbk9mLVExMEtR"
  },
   {
    id: "san_giovanni_di_moriani_pont_de_l_enfer",
    name: "San-Giovanni-di-Moriani - Pont de l'Enfer (Ponte à l'Infernu)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "San-Giovanni-di-Moriani",
    altitude: 165,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "moderne",
    era_label: "Ouvrage d'art génois traditionnel en pierre sèche (Époque moderne)",
    century: "XVIIe siècle",
    category: "naturel",
    counts: { rando: 1 },
    lat: 42.388453,
    lng: 9.474430,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOV_QRZWDlHvoICaceRqTpHIpj-Bw8xcdtVQ169F5w3XNzSAJjfdj3JBV_3bTG6eYUKm7IVdkIdKDvsNf52XuQPK9EmUbTyp8jv5j6f-ja1C3ZSuaJaQepjFpSkNGebYkbZ4qNZ2NpPlePAn3alXDOu2w=w2549-h1919-s-no-gm?authuser=0",
    description: "Niché dans les replis verdoyants de la Costa Verde au cœur de la vallée encaissée du Bucatoghju, le pont de l'Enfer (Ponte à l'Infernu) enjambe une gorge sauvage dominée par de hautes parois rocheuses et une forêt dense de châtaigniers séculaires. Bâti selon les techniques traditionnelles génoises avec une arche unique en plein cintre en moellons de schiste liés au mortier de chaux, ce pont muletier permettait autrefois de relier les hameaux perchés de la piève de Moriani aux zones d'estive et aux moulins à farine de châtaigne de la haute vallée. Le toponyme spectaculaire du lieu provient du grondement assourdissant des eaux tumultueuses s'engouffrant dans la faille rocheuse lors des crues printanières et automnales.",
    visiter: "Emprunter le sentier de randonnée pédestre ombragé qui part des hauteurs du village de San-Giovanni-di-Moriani et descend à travers le sous-bois de châtaigniers, de mousses et de fougères géantes. S'arrêter sur le tablier pavé du pont de pierre pour contempler l'enfilade des cascades, des vasques d'eau pure cristalline et des marmites de géants creusées dans la roche lustrée par les millénaires. Les amateurs de fraîcheur peuvent descendre prudemment sur les berges rocheuses pour tremper les pieds dans l'eau vive du torrent avant de poursuivre la boucle balisée en direction de la cascade de l'Ucelluline.",
    link: "https://photos.google.com/share/AF1QipPRcmCbDTEzJMDi4WQTbyjOOdhUJGOvcOXzTwnlKnzkwZGt5s4gMQG_IRDN8iRoIQ?key=M3U0c2RJVmdRUVBMVnYyWXpjUGtLM0ROXy1ncGNn"
  },
   {
    id: "scandola_reserve_naturelle",
    name: "Golfe de Porto - Réserve Naturelle de Scandola",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Corse-du-Sud",
    subdiv: "Osani",
    altitude: 15,
    is_island: true,
    island_name: "Corse",
    transport: "bateau",
    era_group: "naturel",
    era_label: "Ancienne caldeira volcanique sous-marine effondrée (Paléozoïque)",
    century: "",
    category: "parc_naturel",
    unesco_name: "Golfe de Porto : calanche de Piana, golfe de Girolata, réserve de Scandola",
    counts: {},
    lat: 42.369572,
    lng: 8.543016,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPGfpIOmmvEsHwkuDyysesip7daRn22yvFu4vOt-fEexwbO5ekLSohkSz-zKWZ24DMbm7fVR1Tbo2n71GtS1wLizjZOc8gRt6_Ulc0_1vyQBBkE7DmFtkv6_dxb6E-Chc3n8BpZ56GdpEizWG6Md6cMyA=w1600-h1200-s-no-gm?authuser=0",
    description: "Joyau écologique et géologique absolu inscrit au patrimoine mondial de l'UNESCO en 1983, la presqu'île de Scandola est la première réserve naturelle de France à la fois marine et terrestre. Vestige d'un ancien complexe volcanique effondré vieux de deux cent cinquante millions d'années, le site déploie une féerie de falaises de rhyolite rouge sang tombant à pic dans une mer turquoise d'une pureté exceptionnelle, percées de grottes marines, de failles vertigineuses et d'orgues basaltiques prismatiques parfaits. Sanctuaire intégral strictement protégé et inaccessible par la route, Scandola abrite une biodiversité marine et aviaire remarquable, offrant notamment un refuge inviolé au mythique balbuzard pêcheur (l'aigle de mer), au faucon pèlerin, au cormoran huppé ainsi qu'à de riches herbiers de posidonies sous-marins abritant mérous bruns et corail rouge.",
    visiter: "Approcher le domaine de Scandola par la mer à bord d'une vedette de promenade ou d'une embarcation respectueuse de la faune, au départ de Galéria, Porto ou Calvi. Naviguer au ralenti au ras des tombants de porphyre rouge pour contempler les orgues volcaniques géométriques plongeant dans l'eau limpide et observer aux jumelles les nids monumentaux de branchages construits par les couples de balbuzards au sommet des pitons rocheux isolés. Pénétrer à l'entrée des failles étroites pour observer le contraste saisissant entre la roche pourpre, les reflets émeraude de la Méditerranée et les colonies d'algues calcifiées formant de rares trottoirs marins fossilisés.",
    link: "https://photos.google.com/share/AF1QipP7PQw4sXND64gGz0qB-BIQlm8HtACPjw6A177nWM7bfF9jK63R0gMfU2Q0CSsxkQ?key=ekl0VU9pZnFyekdBb0tXSWpscnBURVJzOFNFX25n"
  },
  {
    id: "girolata_village_et_fortin",
    name: "Golfe de Girolata - Village & Fortin Génois",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Corse-du-Sud",
    subdiv: "Osani",
    altitude: 10,
    is_island: true,
    island_name: "Corse",
    transport: "bateau",
    era_group: "moderne",
    era_label: "Fortin bastionné édifié au milieu du XVIe siècle (vers 1552) par la République de Gênes",
    century: "XVIe siècle",
    category: "star",
    unesco_name: "Golfe de Porto : calanche de Piana, golfe de Girolata, réserve de Scandola",
    counts: {},
    lat: 42.349294,
    lng: 8.612946,
    image: "https://lh3.googleusercontent.com/pw/AP1GczObcw36GqyefKpB7Jw9pB3kqPyMl8jDUeDWv8MY_PPa5o7iMvr6FJmlbx2Dznppn6CFYPXtbQONpadTyABRlQkOmoKur1BiuUL-B2BqMLytTzXrcPXN-wG_fxTRxX9VPgpqmJ2TTJ5QZGH2bjUwya65vg=w2549-h1919-s-no-gm?authuser=0",
    description: "Niché au creux d'un golfe splendide dominé par de hautes crêtes d'eucalyptus et de maquis, le hameau maritime de Girolata possède la particularité unique de n'être relié à aucun réseau routier, n'étant accessible que par la voie des flots ou par un sentier muletier escarpé. Sa petite anse naturelle servit de mouillage stratégique dès l'Antiquité avant d'être fortifiée en 1552 par la République de Gênes, qui fit dresser sur un éperon rocheux défendant la baie un puissant fortin bastionné polygonal ceint d'une tour d'artillerie. C'est dans ces eaux abritées qu'eut lieu en 1540 la capture historique du célèbre corsaire ottoman Dragut par la flotte génoise de Giannettino Doria. Aujourd'hui classé à l'UNESCO, ce village hors du temps vit au rythme des allées et venues des bateaux et de ses célèbres vaches sauvages se reposant paisiblement sur la plage de sable doré.",
    visiter: "Débarquer sur le ponton de bois du port naturel après une traversée maritime, ou rejoindre le village à pied en empruntant le spectaculaire sentier muletier du facteur (traversant le col de la Croix à travers le maquis odorant avec une vue plongeante continue sur le golfe). Remonter le chemin de terre bordé de cabanes de pêcheurs, de lauriers-roses et de paillotes conviviales pour gravir l'éperon rocheux du fortin génois privé. Déjeuner les pieds dans le sable en observant les voiliers au mouillage dans les eaux calmes de la calanque et faire une halte baignade sur la plage de galets de Focaghia au sud de la presqu'île.",
    link: "https://photos.google.com/share/AF1QipP7PQw4sXND64gGz0qB-BIQlm8HtACPjw6A177nWM7bfF9jK63R0gMfU2Q0CSsxkQ?key=ekl0VU9pZnFyekdBb0tXSWpscnBURVJzOFNFX25n"
  },
   {
    id: "piana_falaises_capu_rossu",
    name: "Golfe de Porto - Falaises Méridionales & Capu Rossu",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Corse-du-Sud",
    subdiv: "Piana",
    altitude: 165,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Complexe volcanique et plutonique calco-alcalin hercynien (Rhyolites et granites rouges)",
    century: "",
    category: "naturel",
    unesco_name: "Golfe de Porto : calanche de Piana, golfe de Girolata, réserve de Scandola",
    counts: {},
    lat: 42.245904,
    lng: 8.583878,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPwRniLWx6Ji-TLHxa7hQLcxvLWrni4FsIqwaMQZCJ6nAEqGAReziOnb3jZWpF3SCHUnR2vNuWn6NtS9PuPjjCQ0NutLxwwnADtEmyUpXAlwRCmN2wvGylgG5TZIZgk9sJmyYjikcoy_uKVMlkuvlUF_A=w2549-h1919-s-no-gm?authuser=0",
    description: "Verrouillant la rive méridionale du majestueux golfe de Porto, la presqu'île du Capu Rossu déploie une muraille maritime spectaculaire inscrite au patrimoine mondial de l'UNESCO. Façonnées dans des porphyres et granites rouges d'origine volcanique vieux de plus de deux cent cinquante millions d'années, ces falaises monumentales tombent à pic dans les abysses de la Méditerranée depuis plus de trois cents mètres de hauteur. L'action combinée des embruns marins salés et des vents d'ouest a sculpté la roche en un dédale saisissant de taffoni — alvéoles d'érosion caractéristiques de l'île —, d'arches naturelles et d'éperons déchiquetés plongeant dans des eaux d'un bleu cobalt d'une pureté absolue, dominés à leur sommet par la silhouette solitaire de la tour génoise de Turghiu.",
    visiter: "Emprunter le sentier de randonnée pédestre balisé qui démarre du parking de la buvette du Capu Rossu pour traverser un plateau aride de maquis bas parfumé d'immortelles et de romarin. Dépasser les anciens bergeries en pierre sèche de Turghiu avant d'attaquer la rude montée finale taillée en lacets dans la roche pourpre. Depuis la crête des falaises, contempler le panorama vertigineux sur les golfes de Porto et de Girolata, la réserve de Scandola fermant l'horizon au nord, et la baie de Cargèse s'étirant au sud. En fin d'après-midi, la lumière rasante embrase le granite dans un flamboiement de teintes pourpres et orangées exceptionnel.",
    link: "https://photos.google.com/share/AF1QipMn5lN5apwGen5RvQA56G3PAdgefbz3bKHzQManIiwjO1W6l_d4f5_c2SLpBMAhEw?key=ZjhSSEhaejM1WjJ0ZUVQN3pOdXExN0dNUWF5U1dn"
  },
   {
    id: "galeria_eglise_sainte_marie",
    name: "Galéria - Église Sainte-Marie (Santa Maria)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Galéria",
    altitude: 22,
    is_island: true,
    island_name: "Corse",
    transport: "voiture",
    era_group: "contemporaine",
    era_label: "Édifiée au milieu du XIXe siècle (1864) lors de l'essor du village littoral",
    century: "XIXe siècle",
    category: "religieux",
    counts: {},
    lat: 42.409461,
    lng: 8.647662,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPD-O9Xq43EL-K4T3JWQ8-t0PEc7E49L-WbUILhJVzt2nrJADfKSOoI2Lwjvb6ot_a_XnFMXGghNtXJLJInTZDgTprCs89iNw1hXHdGJXtjGwGxMuXna_dXhCfItGXcUB-UsBeZmx5LBiXmn7o2jR40oQ=w1984-h2635-s-no-gm?authuser=0",
    description: "Érigée au cœur du village de Galéria en 1864, l'église paroissiale Sainte-Marie témoigne de la sédentarisation définitive des pasteurs et cultivateurs du Filosorma sur le littoral au XIXe siècle. Présentant une sobre architecture néoclassique corse, elle se distingue par sa façade enduite aux tonalités chaleureuses, couronnée d'un fronton triangulaire et flanquée d'un élégant clocher-tour quadrangulaire à lanternon ajouré. À l'intérieur, la nef unique voûtée en berceau abrite un chœur décoré dans la tradition locale avec un maître-autel en marbre polychrome, des statues processionnelles vénérées lors des fêtes mariales et de touchants tableaux liturgiques évoquant la protection spirituelle des marins et des gens de la terre face aux rigueurs de l'isolement maritime.",
    visiter: "Pousser la porte de l'église pour profiter de la fraîcheur du sanctuaire et observer les détails des autels latéraux et de la statuaire populaire corse. Faire une halte sur le parvis ombragé de palmiers et d'oliviers, véritable place de vie du village, qui offre une belle perspective sur les maisons de granit et le profil rocheux des crêtes environnantes. Poursuivre ensuite à pied à travers les ruelles calmes de Galéria pour rejoindre les terrasses de café bordant l'avenue principale menant au petit port de pêche.",
    link: "https://photos.google.com/share/AF1QipMhX8jyxxj2AofzPQIpQVDzjI1XfmNmyhwc97QT66KFOi7FSMJ-57SartoyuHoekg?key=bU0tMi1UNW4xWWxnb3I1b3lTZldHazltVDBRRzdR"
  },
  {
    id: "galeria_chjucu_capu_tondu",
    name: "Galéria - Crête du Chjucu Capu Tondu",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Galéria",
    altitude: 184,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Formation géologique volcanique hercynienne de la côte occidentale",
    century: "",
    category: "naturel",
    counts: { rando: 1 },
    lat: 42.402232,
    lng: 8.647227,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPxqjTpwERteCOoPNEFPVIltuf3oK6UYvHOBHdD37BjFf4QxCb0Fdlrw0DODiuhssrvEOB_prxD0rdNcjxchgBCeGKyxrCvfLKDRX30x1-M2jSvXEqQ-Ocs0kc2CI1aFPw7QjoXIyVrDBk8ImdzHFAubQ=w3089-h2059-s-no-gm?authuser=0",
    description: "Dominant immédiatement le sud du bourg de Galéria, le piton arrondi de Chjucu Capu Tondu dresse son échine de roches érodées et son dôme de maquis face aux eaux scintillantes de la baie. Ce promontoire naturel sert de formidable belvédère d'altitude modeste mais à forte personnalité, offrant une vue plongeante spectaculaire sur les toits du village, la tour génoise et l'estuaire du Fango. Façonné dans les granites et les rhyolites rouges de la bordure septentrionale de Scandola, ce sommet mineur est parcouru de sentes pastorales rocailleuses bordées de cistes cotonneux, de lentisques et d'immortelles sauvages, exhalant un parfum capiteux sous le soleil méditerranéen.",
    visiter: "Emprunter les sentes de randonnée qui s'élèvent depuis le village à travers le maquis pour gagner les crêtes rocheuses sommitales. Profiter d'un panorama panoramique à 360 degrés embrassant le golfe de Galéria, la réserve de Scandola fermant l'horizon au sud-ouest, et la longue vallée encaissée du Fango qui serpente jusqu'aux barres neigeuses de la Grande Barrière et de la Paglia Orba. Choisir les heures de fin d'après-midi pour observer la lumière dorée embraser les versants rocheux et la mer turquoise.",
    link: "https://photos.google.com/share/AF1QipMhX8jyxxj2AofzPQIpQVDzjI1XfmNmyhwc97QT66KFOi7FSMJ-57SartoyuHoekg?key=bU0tMi1UNW4xWWxnb3I1b3lTZldHazltVDBRRzdR"
  },
  {
    id: "galeria_porcu_liccatu",
    name: "Galéria - Sentier & Point de Vue de Porcu Liccatu",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Galéria",
    altitude: 145,
    is_island: true,
    island_name: "Corse",
    transport: "a_pied",
    era_group: "naturel",
    era_label: "Contreforts littoraux sauvages du massif volcanique de Scandola",
    century: "",
    category: "naturel",
    counts: { rando: 1 },
    lat: 42.397262,
    lng: 8.621814,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP01F1aGaA-LLzQDtK4u1oMjcE1QeV0YxOddSUaohK3PqV_7Vez7_3LqyxEPN1DF1qGTQp4D3Q_22azuAOv6SGncL59a7kyaar6AcXnPsbGBEiDj55GwY7sfCs362lTGkUZLe2tGkuo3DowU4soHpydpQ=w2896-h1944-s-no-gm?authuser=0",
    description: "Accroché aux contreforts côtiers à l'ouest du golfe de Galéria sur le tracé menant vers les abords de la réserve naturelle de Scandola, le secteur de Porcu Liccatu présente un relief chaotique sculpté par l'érosion éolienne et marine. Ce passage sauvage sur le sentier littoral offre une plongée saisissante sur des criques inaccessibles d'eau cristalline, ceinturées de falaises de roches ocres et pourpres parsemées de genévriers phoeniciens nains agrippés à la pierre. Zone d'une tranquillité absolue balayée par les brises du large, c'est un point d'observation privilégié pour apercevoir les balbuzards pêcheurs planant au-dessus des tombants marins.",
    visiter: "Randonner sur le sentier balisé côtier reliant Galéria à la pointe de Ciuttone pour atteindre le belvédère sauvage de Porcu Liccatu. S'asseoir sur les dalles de granite rouge poli pour admirer l'enfilade des falaises déchiquetées plongeant dans un dégradé de bleus profonds et d'émeraude. Prévoir de bonnes chaussures de marche et de l'eau, le sentier serpentant au cœur d'un maquis dense et parfumé sans le moindre point d'ombre, avant de redescendre vers les petites calanques secrètes du littoral pour une halte contemplative.",
    link: "https://photos.google.com/share/AF1QipMhX8jyxxj2AofzPQIpQVDzjI1XfmNmyhwc97QT66KFOi7FSMJ-57SartoyuHoekg?key=bU0tMi1UNW4xWWxnb3I1b3lTZldHazltVDBRRzdR"
  },
  {
    id: "galeria_plage_galeria",
    name: "Galéria - Plage de Galéria & Baie du Village",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Galéria",
    altitude: 1,
    is_island: true,
    island_name: "Corse",
    transport: "voiture",
    era_group: "naturel",
    era_label: "Anse littorale naturelle et cordon de galets du Filosorma",
    century: "",
    category: "plage",
    counts: {},
    lat: 42.414056,
    lng: 8.651302,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPlMAKOqYkQW86xxcbgGrAV-SVnGlpXVspQAScK-kraSx6eeNUy3Gj5Cm9aItuDjfA5LO0nX8F2GFT5mRRNncMLLU6Apg7Yr_eMw5IxHLHUxUmZIKVTKkbthYGoPNJb63AOQ1592wFyhd4GBIIFQKMltg=w3089-h2059-s-no-gm?authuser=0",
    description: "Étendue au pied immédiat du village, la plage de Galéria forme un long arc de cercle sauvage composé d'un mélange caractéristique de sable grossier doré et de galets roulés polis par le ressac. Ouverte sur une baie abritée aux eaux calmes et d'une clarté remarquable, elle offre un cadre maritime préservé face à la tour génoise historique dressée sur son éperon rocheux. Ce rivage tranquille, bordé de tamaris et de quelques barques de pêche traditionnelles tirées sur les galets, contraste avec l'effervescence des grandes plages touristiques de Balagne, conservant une authenticité pastorale et maritime intacte au débouché de la haute vallée montagneuse.",
    visiter: "Poser sa serviette sur le cordon littoral pour une baignade rafraîchissante dans des eaux limpides aux fonds sous-marins riches en poissons de roche (idéal avec palmes, masque et tuba). Longer le bord de l'eau vers le nord jusqu'à la base de la tour génoise de Galéria pour photographier le coucher du soleil tombant directement dans la mer à l'horizon. Profiter des terrasses de restaurants et paillotes les pieds dans l'eau pour savourer du poisson frais local face au spectacle paisible des embarcations amarrées dans la baie.",
    link: "https://photos.google.com/share/AF1QipMhX8jyxxj2AofzPQIpQVDzjI1XfmNmyhwc97QT66KFOi7FSMJ-57SartoyuHoekg?key=bU0tMi1UNW4xWWxnb3I1b3lTZldHazltVDBRRzdR"
  },
  {
    id: "galeria_delta_du_fango",
    name: "Galéria - Delta du Fango (Réserve de Biosphère)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse",
    subdiv: "Galéria",
    altitude: 2,
    is_island: true,
    island_name: "Corse",
    transport: "voiture",
    era_group: "naturel",
    era_label: "Site naturel classé Réserve de Biosphère par l'UNESCO (MAB 1977)",
    century: "",
    category: "naturel",
    counts: {},
    lat: 42.419117,
    lng: 8.658653,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOk-jkMTU29XN-3NY6g1dmpFLvgi5CT1sO90ZjA5WhbSHNvQzkm0FCkbZUaNbZGGInWRZuqI4lD-9M_j5OGGW_6uniByK284wXRF_8owLO4vazBQfQvFLHmG1I1TbaAqy3CYuXKtWYp16QohR_YV3QRaA=w3089-h2059-s-no-gm?authuser=0",
    description: "Joyau écologique majeur classé Réserve de biosphère par l'UNESCO, le delta du Fango constitue une zone humide littorale d'une valeur biologique inestimable à l'embouchure du fleuve côtier. Les eaux douces descendant des crêtes de la Paglia Orba y rencontrent la mer Méditerranée au cœur d'une forêt marécageuse d'aulnes glutineux séculaires, d'iris d'eau et de roseaux. Cet écosystème amphibie protégé sert de sanctuaire et de zone de reproduction privilégiée à une faune protégée remarquable, notamment la cistude d'Europe (tortue d'eau douce endémique), le martin-pêcheur, le héron pourpré et une multitude de libellules chatoyantes évoluant dans un silence végétal féerique.",
    visiter: "Louer un canoë ou un kayak à propulsion manuelle sans moteur à l'entrée de l'estuaire pour glisser en silence sur les méandres calmes du fleuve ombragés par la voûte d'aulnes géants. Observer sur les troncs immergés les tortues d'eau cistudes se chauffant au soleil et guetter le vol bleu électrique des martins-pêcheurs effleurant l'eau. Pour les marcheurs, emprunter le sentier d'interprétation balisé serpentant sur les berges entre le pont génois et la plage de galets de l'embouchure, jalonné de panneaux pédagogiques expliquant l'équilibre fragile de cette réserve naturelle.",
    link: "https://photos.google.com/share/AF1QipMhX8jyxxj2AofzPQIpQVDzjI1XfmNmyhwc97QT66KFOi7FSMJ-57SartoyuHoekg?key=bU0tMi1UNW4xWWxnb3I1b3lTZldHazltVDBRRzdR"
  },
   {
    id: "kyoto_sanjusangendo",
    name: "Kyoto - Temple Sanjūsangen-dō (Rengeō-in)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 18,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Fondé en 1164 par Go-Shirakawa, reconstruit en 1266 (Époque de Kamakura)",
    century: "XIIIe siècle",
    category: "religieux",
    counts: {},
    lat: 34.988336,
    lng: 135.771978,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN02U6dUgk1gurp5Hu09-OLt9xZmD4SqKuZ7bZzIhOnZag4I16AlehQ-e05xmq4lqlUjabI5aOiG6fWv8ZBldjMQpXr2vLtGDFYWJEz6eewy8dX1MLa1At0dBS57O8TAwyIkxC3WPyPpSISp9PSe7c1JA=w2549-h1699-s-no-gm?authuser=0",
    description: "Fondé à l'origine en 1164 par l'empereur retiré Go-Shirakawa avec l'appui financier du puissant Taira no Kiyomori, le temple Rengeō-in — universellement désigné sous le nom vernaculaire de Sanjūsangen-dō en raison de ses trente-trois intervalles entre colonnes — abrite la plus spectaculaire armée de statues bouddhiques du Japon. Reconstruit en 1266 après un incendie dévastateur, son hall principal long de cent vingt mètres constitue le plus long édifice en bois du monde. La nef abrite un bataillon impressionnant de 1 001 statues dorées à la feuille de Kannon aux onze têtes et mille bras, taillées dans le cyprès du Japon par les maîtres sculpteurs de l'école Kei, dont le légendaire Tankei. Au centre trône un monumental Kannon assis de plus de trois mètres de haut, tandis qu'au premier plan veillent vingt-huit divinités protectrices hindoues intégrées au panthéon bouddhique ainsi que les effigies expressives de Fūjin (dieu du Vent) et Raijin (dieu du Tonnerre), chefs-d'œuvre absolus de l'art sculptural de Kamakura classés Trésors nationaux.",
    visiter: "Pénétrer en silence dans l'immense nef plongée dans une pénombre sacrée et marcher le long de l'estrade étagée où scintille l'armée dorée des mille Kannon sculptés, dont la tradition assure que chaque visiteur peut y retrouver les traits d'un être cher disparu. Détailler au plus près les regards incrustés de cristal de roche et le réalisme anatomique saisissant des vingt-huit gardiens célestes et des statues de Raijin et Fūjin. Flâner ensuite dans le parc extérieur longeant la façade sud du hall : c'est sur cette esplanade dallée de 120 mètres que se dispute depuis l'époque d'Edo le mythique concours annuel de tir à l'arc Tōshiya, au cours duquel les archers doivent décocher leurs flèches d'un bout à l'autre sans toucher le toit ni le sol.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_pagode_yasaka_houkanji",
    name: "Kyoto - Pagode de Yasaka (Temple Hōkan-ji)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 52,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Fondé selon la tradition en 592 (Prince Shōtoku), structure actuelle de 1440 (Époque Muromachi)",
    century: "XVe siècle",
    category: "religieux",
    counts: {},
    lat: 34.998560,
    lng: 135.779374,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMq4FfKAfbWEWc2x9ZIhhnoIhO4tz4ZJuTyO4sr76KZWcbxpOxbsrPV95hSEph0tYw3aAyLbpbgWn30fpx1UG8nf7gp3khHbVBXlqQ9csEu5Is44deEXMbQz0JRTgNA14l9q5ksEev0PPqeMmgOYtqQxw=w1757-h2635-s-no-gm?authuser=0",
    description: "Repère visuel emblématique de l'est de Kyoto, la pagode à cinq étages de Yasaka domine avec majesté les toits de tuiles sombres et les ruelles pavées du quartier préservé de Higashiyama. Selon les chroniques anciennes, le temple Hōkan-ji aurait été fondé en 592 par le régent Shōtoku Taishi, initiateur légendaire du bouddhisme au Japon, suite à une vision mystique. Rasé et incendié à plusieurs reprises durant les guerres féodales qui ravagèrent la capitale impériale, l'édifice actuel en bois sombre et aux toitures d'écorce superposées culmine à quarante-six mètres de hauteur et fut reconstruit en 1440 par le shogun Ashikaga Yoshinori. Seule survivante d'un complexe monastique autrefois gigantesque, cette tour quintuple abrite en son cœur un imposant pilier central (shinbashira) et de précieuses représentations des cinq bouddhas de la sagesse.",
    visiter: "Photographier la silhouette de la pagode s'élevant au fond de la ruelle en pente Yasaka-dōri, encadrée par les façades traditionnelles en bois machiya, particulièrement lors de la lumière rasante du crépuscule. Lorsque les portes du temple sont ouvertes au public, franchir l'enceinte pour gravir les escaliers de bois raides menant au deuxième niveau de la tour, afin de contempler la technique d'emboîtement des poutres sans clou conçue pour résister aux séismes et observer de près les fresques bouddhiques du XVe siècle ornant la base du pilier central.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_sannenzaka",
    name: "Kyoto - Ruelles Historiques de Sannenzaka & Ninenzaka",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 68,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo à Meiji (District de préservation de l'architecture traditionnelle)",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    lat: 34.996780,
    lng: 135.781038,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO89GGyb1y2h5z9SawUzqCQAA_fJCznZbWITNy8o9VbHfvAvTc-XeSgUsGhkUv6pFAsT5SHvxTteKTr2VHHCoaXfiR1h50UUGmkJh5L7UnG9vnkjnK6Zf2-LPCqrCsEyaWCjlObZIfh-JvA63M2Adl5TA=w2549-h1699-s-no-gm?authuser=0",
    description: "Cœur battant de l'architecture civile de l'époque d'Edo à Kyoto, les ruelles en escaliers de Sannenzaka (la « pente de trois ans ») et de Ninenzaka constituent l'une des zones de protection du patrimoine urbain les plus célèbres du pays. Tracé à l'origine en 808 sous le règne de l'empereur Saga pour permettre aux fidèles et aux femmes enceintes d'accéder au sanctuaire de prière pour les naissances heureuses du Kiyomizu-dera, ce chemin piétonnier pavé de larges dalles de granit est bordé de maisons marchandes machiya en bois sombre, d'anciennes auberges ryokan et de boutiques d'artisanat d'art protégées par des auvents en tuiles kawara et des treillis en cèdre. Une vieille légende populaire prétend avec humour que toute personne trébuchant dans ces marches s'expose à trois années de malchance, ce qui incitait les pèlerins à faire l'acquisition de gourdes protectrices vendues par les commerçants du quartier.",
    visiter: "Descendre avec précaution les célèbres volées de marches en pierre de Sannenzaka pour s'imprégner de l'atmosphère médiévale de l'ancienne capitale, au son des socques de bois des visiteurs en kimono traditionnel. Explorer les échoppes artisanales proposant des céramiques de Kiyomizu-yaki, des éventails peints à la main, des laques et des douceurs typiques comme les biscuits yatsuhashi parfumés à la cannelle. Poursuivre la déambulation vers Ninenzaka pour découvrir l'insolite Starbucks aménagé dans une authentique maison de maître de l'époque Taishō, doté de tatamis au sol et de jardins intérieurs de mousse zen.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_kiyomizudera_hondo",
    name: "Kyoto - Temple Kiyomizu-dera (Terrasse du Hondō)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 125,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Fondé en 778 (Époque de Nara), pavillon actuel érigé en 1633 par Tokugawa Iemitsu",
    century: "XVIIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Kyoto (villes de Kyoto, Uji et Otsu)",
    counts: {},
    lat: 34.994913,
    lng: 135.785153,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOtBplP4nZIWX-X7lsksTYXOOETopPCSrefBe-DB_QvGOjjO0Yv69W_U-3Hir9nx4PW33zeBi--pMvLW8y-RxpLs-niF4L5qJS9BFPZKpEQNJG8mXTtzM7wVzIw3g23RGlqpJWjdl6an9hOSOBns3kIIA=w2549-h1699-s-no-gm?authuser=0",
    description: "Inscrit au patrimoine mondial de l'UNESCO et perché sur les flancs boisés du mont Otowa, le temple Kiyomizu-dera (« temple de l'eau pure ») fut fondé en 778 par le moine Enchin et le général Sakanoue no Tamuramaro. Le bâtiment principal actuel (Hondō), chef-d'œuvre de charpenterie nippone érigé en 1633 sous les ordres du troisième shogun Tokugawa Iemitsu, est universellement célèbre pour son audacieuse terrasse sur pilotis (Kiyomizu no butai) qui s'avance à treize mètres au-dessus du ravin. Soutenue par un entrelacs magistral de cent trente-neuf piliers de zelkova géants assemblés sans aucun clou métallique selon la méthode traditionnelle du kake-zukuri, la terrasse servait à l'origine de scène rituelle pour les danses Kagura dédiées à la statue secrète de Kannon aux onze têtes. L'expression populaire japonaise « sauter de la terrasse de Kiyomizu » est devenue synonyme de prendre une décision radicale et audacieuse.",
    visiter: "Avancer sur les larges planches de cyprès patinées de la terrasse suspendue pour profiter d'un panorama vertigineux sur la mer de cimes d'érables et les collines de Higashiyama, avec en contrebas toute la plaine urbaine de Kyoto s'étendant jusqu'à la silhouette moderne de la tour de Kyoto. Pénétrer dans le sanctuaire sombre du Hondō pour observer les autels bouddhiques et faire sonner le bol chantant géant en bronze. Emprunter ensuite le sentier en corniche faisant le tour du vallon pour admirer la perspective en surplomb la plus célèbre du Japon, dévoilant la proue de bois suspendue au-dessus de la canopée flamboyante.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_kiyomizudera_porte_niomon",
    name: "Kyoto - Kiyomizu-dera (Porte Niō-mon & Pagode Sanjū-no-tō)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 108,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Porte Niō-mon rebâtie vers 1500 (Époque Muromachi), pagode reconstruite en 1632",
    century: "XVIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Kyoto (villes de Kyoto, Uji et Otsu)",
    counts: {},
    lat: 34.995137,
    lng: 135.783794,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMCqIWBQj5B7xA5kx_iVNXz8p4IwWGy4GfT-WoMYJlgmldFceg-AQBwJphKvGbqLRQYimakqG21PmTY63B1CEk_DJa1NZmbf_O0MYaaY7Z5cdEYtfSM3iVYi6ziJaSYeobLa76yb3C-OF1Uw44DVx4fyg=w896-h1190-s-no-gm?authuser=0",
    description: "Avant-poste théâtral ouvrant l'accès sacré au Kiyomizu-dera, l'esplanade occidentale regroupe un ensemble spectaculaire d'édifices peints d'un rouge vermillon éclatant contrastant avec le vert sombre de la montagne. Dominant le grand escalier de pierre, l'imposante porte des gardiens Niō-mon (reconstruite vers 1500 après les ravages de la guerre d'Ōnin) s'élève sur quatorze mètres de hauteur avec son toit à double pente en croupe et ses puissantes statues sculptées des rois protecteurs Kongo-rikishi. Juste derrière s'élance la majestueuse pagode à trois étages (Sanjū-no-tō), érigée à l'origine en 847 et rebâtie en 1632 sous l'ère d'Edo. Culminant à près de trente-et-un mètres, elle constitue l'une des plus hautes pagodes à trois niveaux de tout le Japon, célèbre pour ses avant-toits ouvragés et sa statue centrale de Dainichi Nyorai.",
    visiter: "Gravir les larges marches menant à la porte Niō-mon et s'attarder devant les grilles latérales pour contempler les poses musculeuses et les expressions féroces des colosses guerriers Niō gardant le seuil. Admirer à proximité la surprenante lanterne de fer forgé et le clocher Shōrō suspendu. S'approcher ensuite du socle de la pagode Sanjū-no-tō pour lever les yeux vers ses plafonds à caissons aux motifs floraux et géométriques colorés, offrant un cadrage photographique spectaculaire sur les toits vernissés et la vallée de Kyoto.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_kiyomizudera_koyasugi",
    name: "Kyoto - Kiyomizu-dera (Pagode Koyasu & Cascade Otowa)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 120,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Pagode Koyasu érigée en 1500 (transférée en 1911), cascade Otowa d'époque Nara",
    century: "XVIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Kyoto (villes de Kyoto, Uji et Otsu)",
    counts: {},
    lat: 34.993000,
    lng: 135.784903,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOz3G9PgBsULHXi8sgxA4eaNi_RjDpd2LhvPjk9aXgkDVouzimcyiBtqgZbx6eLphIxscnzQdoHfTzl4pxRKaQMgWbDVvNXHUZ98b-CMI64HccbH0x5MFSsONRTm-1iD7xcUkoo6KK-Og20odEbebZPyg=w1757-h2635-s-no-gm?authuser=0",
    description: "Dressée sur la crête méridionale faisant face au grand hall de Kiyomizu-dera, la pagode Koyasu-no-tō est une élégante tour vermillon à trois niveaux datant de 1500. Dédiée à Koyasu Kannon, divinité bouddhique protectrice des accouchements sans douleur et de la santé des nouveau-nés, elle est le but d'un pèlerinage pieux pour les mères de famille depuis des siècles. En contrebas dans la gorge coule la source sacrée Otowa-no-taki, dont les eaux pures et fraîches jaillissant de la roche mère donnèrent son nom au temple. Canal cérébré en trois filets distincts se déversant depuis une toiture de pierre dans un bassin purificateur, cette source millénaire est investie selon les croyances de trois vertus cardinales : la réussite aux études et aux examens, la félicité amoureuse et la longévité de l'existence.",
    visiter: "Emprunter le chemin forestier montant vers la pagode Koyasu pour profiter de la plus belle vue panoramique latérale sur les pilotis de bois géants du grand hall Hondō émergeant de la forêt d'érables. Redescendre ensuite au fond du vallon pour faire la queue devant la cascade sacrée Otowa-no-taki : munissez-vous d'une longue louche métallique désinfectée aux rayons UV pour recueillir l'eau de l'un des trois jets sacrés et la boire dans le creux de la main. La tradition spirituelle commande de ne boire qu'à une seule source, car boire aux trois est perçu comme une preuve d'avidité qui annule les bienfaits divins.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_sanctuaire_yasaka_jinja",
    name: "Kyoto - Sanctuaire Shinto Yasaka-jinja (Gion-sha)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 45,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Fondé en 656, pavillon principal reconstruit en 1654 par le shogunat Tokugawa",
    century: "XVIIe siècle",
    category: "religieux",
    counts: {},
    lat: 35.003487,
    lng: 135.778548,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNmm7O7VVEYpxJYCrDjtEcTiMPSfWN8iZ0NWelbXeSbLzlyL5h3Om4B9nbnuHogu6F7LIb_3B36VaGeBJ04y5W1JhF1rRp8U1dood7YEyc3cK4TdzwZs2FDqXW_EFmLpk1ecGdqkoQJKKIC7sWPjSzjcQ=w2549-h1919-s-no-gm?authuser=0",
    description: "Établi à la frontière orientale du célèbre quartier des geishas de Gion, le sanctuaire Yasaka-jinja (historiquement appelé Gion-sha) est l'un des centres spirituels shinto les plus vibrants de la ville. Fondé dès 656 par l'envoyé coréen Irishi et dédié au puissant dieu des tempêtes et de la mer Susanoo-no-Mikoto ainsi qu'à son épouse Kushinadahime, il devint célèbre en 869 lorsque la cour impériale y organisa des rituels de purification pour conjurer une épidémie de peste meurtrière, donnant naissance au prestigieux Gion Matsuri, le plus important festival du Japon. Son impressionnant pavillon principal (Honden), reconstruit en 1654 sous les ordres du shogun Tokugawa Ietsuna et classé Trésor national, associe sous un immense toit unique de bardeaux de cyprès le sanctuaire intérieur et la salle de prière selon le rare style architectural gion-zukuri.",
    visiter: "Franchir la monumentale porte à étage vermillon Nishi-rōmon dominant le carrefour animé de l'avenue Shijō-dōri pour pénétrer dans l'enceinte sacrée. Découvrir la vaste scène centrale de danse rituelle (Buden), ceinturée par des centaines de lanternes de papier blanc offertes par les maisons de thé et commerces de Gion, illuminées d'une féerie dorée à la tombée de la nuit. Visiter le petit sanctuaire annexe Utsukushi-gozen-sha dédié aux déesses de la beauté, où les geikos, maikos et visiteurs viennent déposer quelques gouttes d'eau miraculeuse sacrée (Biyōsui) sur leur visage pour purifier leur peau et cultiver leur grâce intérieure.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_temple_toji",
    name: "Kyoto - Grand Temple Tō-ji (Kyō-ō-gokoku-ji)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 21,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Fondé en 796, pagode actuelle reconstruite en 1644 par Tokugawa Iemitsu",
    century: "XVIIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Kyoto (villes de Kyoto, Uji et Otsu)",
    counts: {},
    lat: 34.980582,
    lng: 135.748156,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMWghJeORcme_4j-XJweVwqm0DnPsaiwiE3IKHZ3fgUxkTYSGfErj8g_Ey5XkhB7Vx7VakstF9WKoBxNXmQti7AqhV0h77xnf6Yze3MYf1_wyqqGYOmGKg1sXK7o9CWnCW7ZqgXyfwctRbi42dW3xTqpw=w1825-h2635-s-no-gm?authuser=0",
    description: "Fondé en 796 immédiatement après le transfert de la capitale à Heian-kyō pour garder l'entrée sud de la cité impériale, le Tō-ji (« temple de l'Est ») fut confié en 823 par l'empereur Saga au célèbre maître spirituel Kōbō Daishi (Kūkai), devenant le siège de l'école bouddhique ésotérique Shingon. Inscrit au patrimoine mondial de l'UNESCO, le monastère abrite la plus haute pagode en bois de tout l'archipel nippon, dressant sa flèche de bronze à cinquante-cinq mètres de hauteur (reconstruite en 1644 par le shogun Tokugawa Iemitsu). Au cœur du domaine, le hall de conférence (Kōdō) matérialise dans l'espace en trois dimensions un spectaculaire mandala ésotérique sculpté composé de vingt-et-une statues en bois de l'époque de Heian, dominées par les féroces rois de la science Myōō dont l'impressionnant Fudō Myōō armé de son épée de vérité.",
    visiter: "Contempler l'altière pagode à cinq étages se reflétant dans les eaux calmes de l'étang aux lotus Hyōtan-ike, entourée d'un superbe jardin de promenade planté de cerisiers pleureurs. Pénétrer à l'intérieur du grand hall Kondo pour admirer la monumentale triade dorée de Yakushi Nyorai (le Bouddha guérisseur) reposant sur un socle orné des douze généraux célestes. Se recueillir dans le hall Kōdō devant l'incroyable alignement sculptural du mandala vivant ésotérique conçu par Kūkai. Si vous visitez le site le 21 du mois, parcourez l'immense marché aux puces populaire Kōbō-san qui envahit tout le parc de stands d'antiquités, de kimonos anciens et de gastronomie de rue.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_chateau_nijojo",
    name: "Kyoto - Château de Nijō (Palais Ninomaru)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 35,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Édifié en 1603 par Tokugawa Ieyasu, agrandi en 1626 (Époque d'Edo)",
    century: "XVIIe siècle",
    category: "chateau",
    unesco_name: "Monuments historiques de l'ancienne Kyoto (villes de Kyoto, Uji et Otsu)",
    counts: {},
    lat: 35.014168,
    lng: 135.749785,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM9A1itiLTuU9tfjnpbff03BpxokSZM1Xwl0DKda9IEubdync0K1Pbapc9DDwIIBLhqhgnjm-4iUbPs-cimrc3TjNRsxuHhl_uCz0N8QQOOVJIGLrumZh0wKj4rrbCTKl7BiBTkHUxZnbrS9a5eEQBZWA=w2549-h1919-s-no-gm?authuser=0",
    description: "Symbole magistral de l'autorité militaire écrasante des shoguns sur la cour impériale, le château de Nijō fut édifié à partir de 1603 par Tokugawa Ieyasu pour servir de résidence officielle lors de ses séjours à Kyoto, puis agrandi en 1626 pour la visite historique de l'empereur Go-Mizunoo. Inscrit au patrimoine mondial de l'UNESCO, le complexe est célèbre pour son palais Ninomaru, somptueux chef-d'œuvre de l'architecture résidentielle de style shoin-zukuri composé de six pavillons reliés en escalier. L'édifice intègre un ingénieux système de sécurité défensif : le plancher rossignol (uguisubari), dont les crochets métalliques fixés sous les lames de bois émettent un pépiement d'oiseau caractéristique au moindre pas pour déjouer les intrusions d'assassins ninjas. C'est dans la grande salle d'audience Ōhiroma de ce palais que le quinzième shogun, Tokugawa Yoshinobu, remit officiellement ses pouvoirs à l'empereur Meiji en 1867, mettant un terme à plus de deux siècles et demi de règne féodal des Tokugawa.",
    visiter: "Franchir la spectaculaire porte Karamon décorée de dorures rutilantes, de grues célestes et de lions chinois sculptés en ronde-bosse. Retirer ses chaussures pour parcourir les couloirs du palais Ninomaru en écoutant chanter sous ses pieds les planches du parquet rossignol. Admirer à travers les salles d'audience successives les sublimes cloisons coulissantes fusuma peintes sur fond d'or massif par les maîtres de l'école Kanō (notamment les majestueux tigres et les pins tricentenaires de Kanō Tan'yū). Conclure par une promenade dans le jardin classique Ninomaru dessiné par le génial paysagiste Kobori Enshū, orné de pierres dressées spectaculaires symbolisant les îles des immortels sur un vaste plan d'eau.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_fushimi_senbon_torii",
    name: "Kyoto - Fushimi Inari-taisha (Allée des Senbon Torii)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 65,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Fondé en 711 par le clan Hata, torii offerts depuis l'époque d'Edo à nos jours",
    century: "VIIIe siècle",
    category: "religieux",
    counts: {},
    lat: 34.967162,
    lng: 135.774300,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOHYQdOPHf0KglgvTOZzUMxq3DqNTwP-15fSu3d50FjoQ_61MiGFk8J_8RXz4FqNDhcc0u63aaGMW9qNK2c_gnFl-ZQ5Vw4ggyuwA7sm-HI3SKrot3H7Dkg5egayvT_ux0uTcQKDYI9wHz6min4V9ogNg=w2549-h1919-s-no-gm?authuser=0",
    description: "Grand sanctuaire de tête veillant sur plus de trente mille sanctuaires Inari à travers tout le Japon, le Fushimi Inari-taisha fut établi en 711 sur la montagne sacrée d'Inari-san par la famille aristocratique Hata. Dédié à Inari Ōkami, divinité shinto ancestrale du riz, de l'agriculture, de la prospérité commerciale et des affaires florissantes, le site est célèbre dans le monde entier pour ses fascinants Senbon Torii (« mille portiques »), un dédale continu de près de dix mille portiques vermillon en bois formant de véritables tunnels écarlates à travers la forêt de cèdres. Chacun de ces portiques a été offert par une entreprise commerciale, une corporation financière ou un fidèle reconnaissant, portant gravé à l'encre noire sur ses montants le nom du donateur et la date de la consécration pour garantir fortune et protection divine.",
    visiter: "S'engager sous les galeries jumelles des Senbon Torii pour une expérience visuelle et spirituelle immersive, où les rayons du soleil filtrent à travers les espacements des piliers laqués de vermillon. Observer au long du parcours les innombrables statues de pierre de renards sacrés (kitsune), messagers célestes d'Inari, tenant dans leur gueule une clé de grenier à grains, un rouleau de sutra ou un joyau d'abondance et parés de bavoirs rouges offerts par les fidèles. Découvrir à mi-parcours le carrefour d'Okusha Hōhaisho pour tenter l'épreuve de divination de la pierre Omokaru-ishi : formulez un vœu et soulevez la lourde sphère de pierre ; si elle vous semble plus légère que prévu, votre vœu se réalisera promptement.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_fushimi_kumataka_shrine",
    name: "Kyoto - Fushimi Inari (Sanctuaire Kumataka-sha & Étang Shin-ike)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 110,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Culte montagnard ésotérique shinto d'époque Heian à Edo",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 34.968272,
    lng: 135.778589,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOzmRnh9WjXMoxG3ChAS4ylK304_D1b4ubN_XSoMbR7KD9TRBk-dqNZi_mHUb62NbzfNEyS8JkoqArkaKRtYz4andicXi1X4uCgF_sagebdt42USHXYUIGeWNct_8Tw0itGpmEwylco_r08mfXsRXdHfQ=w2549-h1919-s-no-gm?authuser=0",
    description: "Niché plus haut sur les sentiers escarpés du mont Inari au bord de l'étang sacré Shin-ike (également appelé Kodama-ike), le sanctuaire Kumataka-sha (« sanctuaire du faucon ours ») baigne dans une atmosphère mystique et intimiste remarquable. Dédié à la divinité Kumataka Daimyōjin réputée accorder la force d'esprit, la ténacité et le succès dans les entreprises les plus difficiles, ce haut lieu de dévotion populaire est réputé pour son rituel des battements de mains : la tradition veut que la personne cherchant un être cher disparu ou la solution à une épreuve frappe deux fois dans ses mains en direction de la surface sombre de l'étang ; la direction d'où revient l'écho indique la voie à suivre pour trouver la réponse espérée. Les abords du sanctuaire sont densément encombrés de milliers de minuscules torii votifs et de cierges allumés par les pèlerins dans la pénombre des sous-bois.",
    visiter: "Faire une halte méditative sur la terrasse de bois surplombant les eaux sombres du bassin Shin-ike, où se reflètent les branches des pins et la multitude de torii miniatures offerts par les pèlerins. Pénétrer dans l'antre du petit pavillon Kumataka-sha illuminé par la lueur vacillante de centaines de bougies votives blanches produisant une chaleur et une odeur de cire caractéristiques. Profiter du calme de l'auberge traditionnelle de repos voisine pour déguster un thé vert matcha réconfortant accompagné d'un plat de nouilles kitsune udon garnies de tofu frit (l'offrande favorite des renards sacrés) avant de poursuivre l'ascension vers le sommet du mont Inari.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
  {
    id: "kyoto_arashiyama_sagano_bambouseraie",
    name: "Kyoto - Arashiyama (Bambouseraie Sauvage de Sagano)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Kyoto",
    altitude: 48,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Site naturel et paysager protégé (Villégiature aristocratique depuis l'Époque de Heian)",
    century: "IXe siècle",
    category: "naturel",
    counts: {},
    lat: 35.016701,
    lng: 135.670927,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO4cD232hITKPo1esZHRMlVB0dXItDBqHGPVAiyRETyxYo6EKiaEq9W6ScCwhzgF5ll72PGvQACPMnxN_SaS0h501MZ2ACtk11LfwcIRsd4z_B5KTEMJvv1lxB73Rqt6hFUuAj8BD4G1gQApm5WYkHtlg=w2549-h1912-s-no-gm?authuser=0",
    description: "Écrin naturel emblématique s'étendant à l'ouest de la ville entre le temple Tenryū-ji et la villa Ōkōchi Sansō, la forêt de bambous de Sagano est un chef-d'œuvre paysager façonné dès l'époque de Heian, lorsque les aristocrates de la cour impériale choisirent le district d'Arashiyama pour y établir leurs résidences secondaires de villégiature et composer des poèmes waka. Formée d'une futaie dense de bambous géants mōsō s'élançant droit vers le ciel à plus de vingt mètres de haut, l'allée sinueuse est bordée de traditionnelles clôtures de branchages tressés. Ce site possède une dimension sensorielle unique : le bruissement délicat des tiges creuses s'entrechoquant et le sifflement du vent dans les feuilles suspendues ont été officiellement classés par le ministère japonais de l'Environnement parmi les « Cent paysages sonores du Japon à préserver absolument ».",
    visiter: "Arpenter l'allée ombragée de terre battue au petit matin lorsque la lumière dorée transperce la haute canopée verdoyante et crée des jeux d'ombres mouvants sur le sol. S'arrêter un instant pour fermer les yeux et écouter le craquement envoûtant des tiges oscillant sous les rafales de vent. Emprunter le passage longeant le sanctuaire Nonomiya-jinja, ancien lieu de retraite et de purification des princesses impériales avant leur départ pour le grand sanctuaire d'Ise immortalisé dans Le Dit du Genji. Prolonger la marche vers le nord en direction du temple Gio-ji, réputé pour son extraordinaire jardin de mousses émeraude niché au cœur de la bambouseraie.",
    link: "https://photos.google.com/share/AF1QipPyiv1eIMsVXO0ftzSTgJMBL_SdyMhPxzsv9CsQKH9YTKBEfbQfCZdz6RS1c4JX7g?key=UURaU2VvUkF0R19wTnZSMW5ib2pPMjI5alBia3VB"
  },
   {
    id: "omihachiman_village_hachimanbori",
    name: "Ōmihachiman - Canal Hachiman-bori & Quartier Historique des Marchands",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Shiga",
    subdiv: "Ōmihachiman",
    altitude: 95,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque Azuchi-Momoyama à Edo (fondé en 1585 par Toyotomi Hidetsugu)",
    century: "XVIe siècle",
    category: "star",
    counts: {},
    lat: 35.139581,
    lng: 136.089297,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOJc-FIzuk0-DaCirDcdU_WI2IVGla2SOH2sCiRim-_asRqEfiM3Ti2c60as7LNZ6dRdOvkpcbHyvSSMTsKD2nvcALMAttxIJP8cbcpkQVTWQstqbqm9knG9gpZAou6qYc_XAXpvmTOh0Qg5RhK3f4A9g=w2570-h1714-s-no-gm?authuser=0",
    description: "Cité marchande féodale remarquablement préservée au bord du lac Biwa, Ōmihachiman fut fondée en 1585 par Toyotomi Hidetsugu (neveu et héritier de Toyotomi Hideyoshi) autour de son château érigé sur le mont Hachiman. Pour stimuler l'économie locale et attirer les corporations artisanales, le seigneur fit creuser le canal Hachiman-bori, reliant directement le système de douves castrales aux grandes voies de navigation marchandes du lac Biwa. Devenu le berceau des célèbres marchands d'Ōmi (Ōmi shōnin) réputés dans tout l'archipel pour leur philosophie éthique du sanpō yoshi (« bénéfique pour le vendeur, pour l'acheteur et pour la société »), le quartier aligne le long de ses voies d'eau et de ses ruelles pavées de magnifiques entrepôts aux murs blancs de torchis (kura), des résidences de négociants en bois sombre et des treillis en cèdre ajouré. Classé District de préservation pour un groupe de bâtiments traditionnels d'importance nationale, ce paysage fluvial bordé de saules et de cerisiers a servi de décor authentique à d'innombrables drames historiques et films de samouraïs (jidaigeki).",
    visiter: "Descendre le long des berges pavées de pierre moussue du canal Hachiman-bori pour une promenade contemplative sous la frondaison des saules pleureurs et des cerisiers, en observant les barques traditionnelles en bois manœuvrées à la perche glisser sur l'eau calme. Remonter vers les rues historiques Shinmachi-dōri et Nagaharachō pour admirer l'architecture marchande des XVIIIe et XIXe siècles, notamment les anciennes demeures familiales Nishikawa et Ban avec leurs cours intérieures pavées et leurs lourdes portes de grange renforcées de ferrures. Goûter dans les auberges traditionnelles du quartier à la gastronomie locale réputée, en particulier le bœuf d'Ōmi fondant (l'un des trois plus prestigieux bœufs wagyu du Japon) et le konnyaku rouge cuisiné selon les recettes séculaires des marchands féodaux.",
    link: "https://photos.google.com/share/AF1QipP4X1fpqf0Y75EKuQyXJmdRL1FfTrdSw6HPtP8GppT73g28sBneQrPCduKFTdpkgw?key=NWpYc1JIM2NabXFEeFJ1dGY2RGZXX3pEcENrVldB"
  },
  {
    id: "omihachiman_sanctuaire_himure_hachimangu",
    name: "Ōmihachiman - Sanctuaire Shinto Himure Hachimangū",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Shiga",
    subdiv: "Ōmihachiman",
    altitude: 102,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Fondé selon la tradition en 131 (reconstruit à l'Époque de Heian en 991)",
    century: "Xe siècle",
    category: "religieux",
    counts: {},
    lat: 35.140797,
    lng: 136.089397,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNQYqh6Q22TL-ynyTAzwE9FJ4g-HlGpiuBz6gB2uS3_c9Z0-gTa7t2O5fpB0iYGvj9_7mbTkiB7B1TXpF_lRuzQ6knHB8veaTwqzDYLFwxmy2zrMQwuqQ_dOdP6QR0k4XY7r4c_AVkWWTCG62zVaEfrjg=w2570-h1714-s-no-gm?authuser=0",
    description: "Écrin spirituel majeur et cœur sacré de la cité, le sanctuaire shinto Himure Hachimangū étend son enceinte solennelle au pied du mont Hachiman, au débouché direct du canal historique. Selon les chroniques légendaires du sanctuaire, son culte remonterait à l'an 131 sous l'empereur Seimu, avant d'être officiellement refondé en 991 par l'empereur Ichijō qui y fit transférer les divinités tutélaires Hachiman (Honoré sous les traits de l'empereur divinisé Ōjin, de sa mère l'impératrice Jingū et de la déesse Himegami). Vénéré durant des siècles par les samouraïs de Shiga comme protecteur des armes, le sanctuaire devint sous l'ère d'Edo le patron spirituel absolu des marchands d'Ōmi, qui lui firent don de somptueux bâtiments en bois brut et d'émouvantes tablettes votives (ema) peintes illustrant leurs navires marchands naviguant jusqu'au Siam et en Indochine. Le sanctuaire est le théâtre de deux des célébrations les plus spectaculaires du Japon : le Sagichō Matsuri en mars (défilé de chars géants incendiaires couronnés de sculptures comestibles faites de céréales) et le Hachiman Matsuri en avril avec ses monumentales torches de roseaux embrasées la nuit.",
    visiter: "Franchir le monumental torii de pierre bordant les eaux du canal Hachiman-bori et emprunter la chaussée ombragée de cèdres géants et de lanternes votives conduisant au cœur du bois sacré. Pénétrer sous l'imposante porte à étage Romon aux boiseries patinées pour accéder à la cour intérieure dominée par le hall de prière Haiden et le sanctuaire principal Honden aux toitures courbées en bardeaux de cyprès hinoki. Observer la riche collection de tablettes votives en bois suspendues sous les galeries, dont les célèbres peintures navales d'Annan-sen offertes par les marchands d'Ōmi au XVIIe siècle. Juste à côté de l'entrée du sanctuaire, emprunter la cabine du téléphérique Hachimanyama Ropeway pour s'élever jusqu'au sommet du mont Hachiman afin de contempler les vestiges du château féodal et un panorama grandiose embrassant toute la plaine agricole, les toits d'Ōmihachiman et l'immensité miroitante du lac Biwa.",
    link: "https://photos.google.com/share/AF1QipP4X1fpqf0Y75EKuQyXJmdRL1FfTrdSw6HPtP8GppT73g28sBneQrPCduKFTdpkgw?key=NWpYc1JIM2NabXFEeFJ1dGY2RGZXX3pEcENrVldB"
  },
   {
    id: "uji_temple_byodoin",
    name: "Uji - Temple Byōdō-in (Pavillon du Phénix)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Uji",
    altitude: 18,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Heian & Apogée de la Terre Pure (fondé en 1052, Hōō-dō érigé en 1053)",
    century: "XIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Kyoto (villes de Kyoto, Uji et Otsu)",
    counts: {},
    lat: 34.889300,
    lng: 135.808105,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOd8QW-gl2UMmNAznVXY3EosuXVZfBOY176IuvGeH9VMLxVqAB79GVsr-Ntl1989ATZoDKt0vZG7F14tFzGqNCWLvm_xAw76XEUDEN_5Ub5upjL0wARoklKW3B0ik3KasSCsbDszrbuyoLxnJvm_VNX-w=w1379-h919-s-no-gm?authuser=0",
    description: "Joyau suprême de l'architecture aristocratique de l'époque de Heian inscrit au patrimoine mondial de l'UNESCO, le Byōdō-in fut fondé en 1052 par le régent impérial Fujiwara no Yorimichi, transformant la somptueuse villa de villégiature de son père Fujiwara no Michinaga en sanctuaire bouddhique de l'école Jōdo. Conçu pour matérialiser sur Terre le paradis occidental d'Amida (le Gokuraku Jōdo), son célébrissime Pavillon du Phénix (Hōō-dō) — édifié en 1053 au cœur d'un étang en miroir — constitue l'une des structures en bois les plus emblématiques de l'archipel, immortalisée au revers des pièces de dix yens. Sa silhouette aérienne évoque un oiseau mythologique déployant ses ailes, couronnée sur les faîtes de sa toiture par deux phénix dorés en bronze protecteurs. Unique rescapé des incendies guerriers du Moyen Âge féodal, il abrite l'ultime chef-d'œuvre authentifié du sculpteur génial Jōchō : un monumental Bouddha Amida en cèdre doré à la feuille trônant au milieu de cinquante-deux délicats bodhisattvas célestes musiciens sculptés flottant sur des nuages de bois ajouré.",
    visiter: "Contempler depuis la rive orientale de l'étang Aji-ike le reflet parfait du Pavillon du Phénix étincelant sur les eaux calmes, bordées de glycines centenaires et de pins nains taillés. Traverser les galeries pour pénétrer sous la nef centrale du Hōō-dō lors d'une visite guidée intimiste, afin de contempler dans la pénombre sacrée le colosse doré d'Amida assis sur son socle de lotus et lever les yeux vers le dais céleste incrusté de nacre et de miroirs de bronze. Descendre ensuite dans le musée ultramoderne souterrain Hōshōkan, intégré sous les pelouses du parc pour ne pas altérer la perspective historique : on y admire de près, sous un éclairage muséographique d'orfèvre, les phénix en bronze d'origine du XIe siècle classés Trésors nationaux, la cloche du temple aux reliefs bouddhiques d'une finesse inouïe et la ronde poétique des bodhisattvas musiciens volant sur leurs nuages.",
    link: "https://photos.google.com/u/0/share/AF1QipNcBDwJne8WYN3fxz95yYuT5nTGt3RMeN2Jlh3mkixzbpQa6HsuiTsCuM6ISi0Veg?hl=fr_CA&key=ZXp1SWVCZG5VX0lPd0dhRzg0VkhsdlBaR0ZHemZ3"
  },
  {
    id: "uji_pont_uji_hashi",
    name: "Uji - Pont Historique d'Uji (Uji-bashi)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Uji",
    altitude: 15,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Fondé en 646 (Époque d'Asuka), reconstruit dans le style traditionnel Heian en 1996",
    century: "VIIe siècle",
    category: "pont",
    counts: {},
    lat: 34.892691,
    lng: 135.805820,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNyUp9XC-CYgzY6A9L0Zk77Gq7-SLnZ-KCag_8NP9l0RfdSbwI3ngBctvuncVhGed_oxRF3NgKvlRh7fSAt-6biGh1tna3aXVVy8ZCwLzBKF3MMiA9c_Vi_Bvm0EES9OBeXiz_Ddc1ASc3xa-PtEm-Fqw=w1379-h919-s-no-gm?authuser=0",
    description: "Édifié originellement en 646 par le moine Dōshō sous l'ère Taika, l'Uji-bashi compte parmi les trois plus anciens ponts documentés de toute l'histoire du Japon avec le pont de Seta et celui de Yamazaki. Enjambant les eaux tumultueuses et limpides de la rivière Uji-gawa qui s'échappent du lac Biwa, cet ouvrage d'art séculaire a servi de verrou stratégique lors des grandes guerres féodales (notamment les affrontements du Genpei en 1180 opposant les clans Minamoto et Taira) tout en occupant une place magistrale dans la littérature classique nippone, servant de décor central aux dix derniers chapitres (« Uji Jūjō ») du Dit du Genji écrit par Murasaki Shikibu au XIe siècle. Reconstruit en 1996 en harmonisant une ingénierie moderne à l'esthétique féodale, le pont long de cent cinquante-cinq mètres déploie une superbe structure de cyprès du Japon (hinoki) ornée de balustrades couronnées de boutons de lotus en bronze (giboshi) et d'un célèbre balcon en encorbellement (San-no-ma), d'où le maître de thé Sen no Rikyū puisait rituellement l'eau de la rivière pour la cérémonie du thé de Toyotomi Hideyoshi.",
    visiter: "Traverser à pied ce large pont de bois pour profiter d'un panorama grandiose sur les collines verdoyantes drapées de brume bordant les gorges de l'Uji-gawa et les terrasses de plantations de thé vert s'étageant sur les versants. Faire une halte sur l'avancée du balcon San-no-ma, surplombant directement les remous du courant, pour photographier la perspective filante du pont et imaginer les grands maîtres de thé y descendant leurs seaux de bois. S'arrêter à l'extrémité occidentale devant le monument de pierre commémorant la rédaction du Dit du Genji et la statue assise de l'écrivaine Murasaki Shikibu, avant de remonter la promenade fluviale ombragée jalonnée de salons de thé séculaires servant le célèbre matcha d'Uji.",
    link: "https://photos.google.com/u/0/share/AF1QipNcBDwJne8WYN3fxz95yYuT5nTGt3RMeN2Jlh3mkixzbpQa6HsuiTsCuM6ISi0Veg?hl=fr_CA&key=ZXp1SWVCZG5VX0lPd0dhRzg0VkhsdlBaR0ZHemZ3"
  },
  {
    id: "uji_sanctuaire_uji_jinja",
    name: "Uji - Sanctuaire Shinto Uji-jinja",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Uji",
    altitude: 20,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Kamakura & Culte Impérial (reconstruit au début de l'ère Kamakura)",
    century: "XIIIe siècle",
    category: "religieux",
    counts: {},
    lat: 34.890995,
    lng: 135.810568,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMl6e_IYTbery7_q7xZU0BW7m8GiQBd-1xHw6_-eEcuQimWxmt9kImxTYa2NApXv9mTh9gMMnsojqhQSZVNaF5iG8ockitjVk-qR_eDDI61d9EMA3aYASMza60Xf2Ui8XWsAlFeHay-bMHwwerdZYlCww=w1379-h919-s-no-gm?authuser=0",
    description: "Établi sur la rive orientale de la rivière Uji au pied de la colline sacrée d'Asahirayama, le sanctuaire shinto Uji-jinja formait jusqu'à la séparation du shintoïsme et du bouddhisme à l'ère Meiji une entité cultuelle unique avec son illustre voisin Ujigami-jinja, portant alors le nom de Rikyū-shimo-sha (« sanctuaire inférieur de la villa impériale »). Le site est dédié à la mémoire du jeune prince impérial Uji no Wakiiratsuko, fils de l'empereur Ōjin et figure légendaire de piété filiale confucéenne, qui choisit de se donner la mort en ces lieux au IVe siècle pour laisser le trône impérial à son frère aîné (le futur empereur Nintoku) et éviter une guerre de succession fratricide. Son pavillon principal (Honden), datant du début de l'époque de Kamakura et classé Bien culturel important national, abrite une statue assise en bois du prince divinisé, tandis que le sanctuaire est placé sous la protection mystique du Mikaeri-usagi, le « lapin qui se retourne », divin guide zoomorphe célébré par les étudiants venant prier pour le succès aux examens et la droiture de leur voie.",
    visiter: "Franchir le torii vermillon bordant les rives calmes du fleuve et remonter l'allée ombragée de lanternes jusqu'au pavillon de purification (Chōzuya), orné d'une touchante fontaine sculptée à l'effigie du lapin sacré Mikaeri-usagi crachant l'eau pure. S'approcher du hall d'adoration Haiden pour observer les élégantes sculptures de bois brut et la toiture en bardeaux de cyprès patinée par les siècles, encadrée par la luxuriance des cèdres et des érables du mont Asagiri. Acheter l'un des célèbres omikuji (divinations poétiques) dissimulés dans de petites figurines en poterie peinte représentant le lapin blanc jetant un regard en arrière, symbole de sagesse invitant le croyant à ne jamais s'égarer dans ses choix de vie.",
    link: "https://photos.google.com/u/0/share/AF1QipNcBDwJne8WYN3fxz95yYuT5nTGt3RMeN2Jlh3mkixzbpQa6HsuiTsCuM6ISi0Veg?hl=fr_CA&key=ZXp1SWVCZG5VX0lPd0dhRzg0VkhsdlBaR0ZHemZ3"
  },
  {
    id: "uji_sanctuaire_ujigami_jinja",
    name: "Uji - Sanctuaire Ujigami-jinja (Le Plus Ancien Sanctuaire Shinto)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Kyoto",
    subdiv: "Uji",
    altitude: 25,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Heian (Honden édifié vers 1060 - Plus ancienne structure shinto du Japon)",
    century: "XIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Kyoto (villes de Kyoto, Uji et Otsu)",
    counts: {},
    lat: 34.891957,
    lng: 135.811173,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMi-lyBhC_SFoaFSgYXTzB2KP2Gp6pAE1dxlh0k_jhE-H-Fh6xnYjLPwn3FnvieGG4qFpCH0fufqU7QPKA6mTShjCVteslksJd1fyX-toh9QFs82-SVn06UE8TxJhaJhYAtBSyMytgVu5ZYCRsZ09UpBw=w1379-h919-s-no-gm?authuser=0",
    description: "Dissimulé dans un écrin de cèdres géants et de mousses séculaires au pied du mont Asahirayama, le sanctuaire shinto Ujigami-jinja est un trésor d'une valeur patrimoniale inestimable inscrit au patrimoine mondial de l'UNESCO. Anciennement désigné sous le nom de Rikyū-kami-sha (« sanctuaire supérieur de la villa impériale »), il servit historiquement de sanctuaire tutélaire gardien veillant sur le temple Byōdō-in voisin situé de l'autre côté de la rive. Les expertises dendrochronologiques modernes ont révélé que les bois de son pavillon principal (Honden) furent abattus vers 1060, faisant de cet édifice le plus ancien bâtiment shinto originel encore debout dans tout l'archipel nippon. Conçu dans le style archaïque nagare-zukuri à trois travées protégées sous une toiture commune d'écorce de cyprès, il abrite trois chapelles intérieures dédiées à l'empereur Ōjin, à son fils l'empereur Nintoku et au prince sacrifié Uji no Wakiiratsuko. L'enceinte conserve également un splendide pavillon de prière (Haiden) de l'époque de Kamakura bâti dans le style résidentiel raffiné shinden-zukuri des aristocrates de Heian.",
    visiter: "Franchir le sobre torii de bois pour pénétrer dans la cour sacrée tapissée de graviers immaculés, encadrée par deux monticules coniques de sable purifié (Kiyome-no-suna ou tatesuna) servant à conjurer les mauvais esprits. S'approcher du hall Haiden pour admirer la délicatesse des auvents retroussés d'écorce de cyprès et les auvents asymétriques datant de 1215. Découvrir la source sacrée Kirihara-sui abritée sous un pavillon de bois moussus : c'est l'unique survivante des « Sept Célèbres Sources d'Uji » dont l'eau minérale d'une pureté exceptionnelle est encore puisée aujourd'hui par les maîtres de thé pour les cérémonies rituelles. Lever les yeux vers le Honden surélevé sur la terrasse rocheuse supérieure pour contempler la sobre perfection du plus vieux sanctuaire shinto du Japon.",
    link: "https://photos.google.com/u/0/share/AF1QipNcBDwJne8WYN3fxz95yYuT5nTGt3RMeN2Jlh3mkixzbpQa6HsuiTsCuM6ISi0Veg?hl=fr_CA&key=ZXp1SWVCZG5VX0lPd0dhRzg0VkhsdlBaR0ZHemZ3"
  },
   {
    id: "nara_ukimido_pavilion",
    name: "Nara - Pavillon Ukimidō (Parc de Nara)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Nara",
    subdiv: "Nara",
    altitude: 82,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Taishō & Architecture Flottante (1916 - Restauré en 1994)",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 34.680101,
    lng: 135.838862,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNm5WMgBmJCqNJ-1FVau8RDI8VshE1Oq7hhoXbrFmYmCgOmiS8lwq7iS3jfbbmqv8U0lo6AGpxL1YFUFCfLOwMVMOjCYZrRw-PjZL60jtlzq6tm8ppmwto8K9gPsHrNgEdVyrryYxM-QA1vBUbQDDaUsA=w642-h919-s-no-gm?authuser=0",
    description: "Gracieux pavillon hexagonal en bois de cèdre semblant flotter en apesanteur au-dessus des eaux calmes de l'étang Sagi-ike au cœur du parc de Nara, Ukimidō constitue l'un des tableaux paysagers les plus poétiques et romantiques de l'ancienne capitale impériale. Édifié originellement en 1916 sous l'ère Taishō puis fidèlement restauré en 1994 dans les règles de l'artisanat traditionnel, l'édifice repose sur de solides pilotis de bois foncé et se coiffe d'une élégante toiture d'écorce et de tuiles aux auvents délicatement retroussés. Relié à la rive par deux passerelles en bois arquées, il dialogue harmonieusement avec la végétation environnante composée de cerisiers pleureurs, de saules et d'érables japonais qui enflamment ses reflets au fil des saisons, fréquemment veillé par les cerfs sika sacrés venant s'abreuver sur les berges au crépuscule.",
    visiter: "Emprunter l'une des passerelles de bois pour accéder au cœur du pavillon ouvert et profiter d'un moment de quiétude absolue bercé par le clapotis de l'eau et le frémissement des feuillages. Observer les carpes koï multicolores et les tortues d'eau nageant autour des pilotis, tout en guettant les hardes de cerfs sika déambulant librement entre les sous-bois et le rivage. Durant la belle saison, louer une barque à rames traditionnelle pour glisser sous la tonnelle et contempler le pavillon depuis le miroir de l'étang. À la tombée de la nuit, le site s'illumine subtilement d'une lueur dorée féerique se reflétant dans l'eau sombre, offrant une halte contemplative incontournable en marge des grands axes touristiques.",
    link: "https://photos.google.com/u/0/share/AF1QipN1cNgRGSYTU9dkjwObX3nPIk5sJDXkeTvojuRS0MRFvMJRUfqAEpEe968HmUc4lA?hl=fr_CA&key=Q1p5VUJpZXl3b1FkVnVXLThWVUl5dHV3TXM0bV93"
  },
  {
    id: "nara_temple_kofukuji",
    name: "Nara - Temple Kōfuku-ji & Pagode à Cinq Étages",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Nara",
    subdiv: "Nara",
    altitude: 75,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Nara & Fief du Clan Fujiwara (fondé en 669, transféré en 710)",
    century: "VIIIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Nara",
    counts: {},
    lat: 34.682569,
    lng: 135.831332,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNEEPD36IK7xmHUaYtoW742vAbG-XK6bX51oA4jBwSFUDxodvJMfEkC8pDIUVnEV01T7WsGz3tig3qOE-UdCklZOqIVWMpVx6BFDeVjJsPPW3qZyCGxPsbj06TPsTTPsBMnquR2ZpYiPLvSEIvO5lTV1w=w1379-h919-s-no-gm?authuser=0",
    description: "Foyer spirituel et politique majeur de l'ancienne capitale Heijō-kyō et temple tutélaire du tout-puissant clan aristocratique des Fujiwara, le Kōfuku-ji s'impose comme l'un des « Sept Grands Temples » fondateurs de Nara. Transféré sur ce promontoire en 710 lors de l'établissement de la capitale impériale par l'aristocrate Fujiwara no Fuhito, ce vaste ensemble monastique affilié à l'école Hossō-shū compta à son apogée féodale plus de cent cinquante édifices. Inscrit au patrimoine mondial de l'UNESCO au titre des « Monuments historiques de l'ancienne Nara », le complexe est universellement célèbre pour sa majestueuse pagode à cinq étages (Gojūnotō) : culminant à plus de cinquante mètres de hauteur, elle constitue la deuxième plus haute pagode en bois de tout l'archipel nippon et l'emblème graphique séculaire de la cité. Son musée des trésors nationaux (Kokuhōkan) abrite l'une des plus exceptionnelles collections de statuaire bouddhique en bois et laque sèche de l'époque de Nara, dominée par la célèbre effigie d'Ashura à trois visages et six bras.",
    visiter: "Arpenter la vaste esplanade de gravier blanc bordée de cerfs sika en liberté pour contempler l'immense pagode à cinq étages reconstruite en 1426, dont les proportions monumentales se découpent fièrement sur l'azur. Découvrir la seconde pagode à trois étages de style Heian et l'élégant pavillon octogonal Nan'en-dō, étape majeure du pèlerinage des trente-trois temples de Kannon du Kansai. Visiter le grand pavillon central reconstitué (Chū-Kondō) pour admirer ses impressionnantes colonnades vermillon et ses statues dorées de Bouddha historique, puis pénétrer dans le musée Kokuhōkan pour contempler de près les chefs-d'œuvre de l'art sculptural du VIIIe siècle, notamment la célèbre statue d'Ashura à la troublante expression mélancolique et les monumentales têtes de Bouddha en bronze de la période Asuka.",
    link: "https://photos.google.com/u/0/share/AF1QipN1cNgRGSYTU9dkjwObX3nPIk5sJDXkeTvojuRS0MRFvMJRUfqAEpEe968HmUc4lA?hl=fr_CA&key=Q1p5VUJpZXl3b1FkVnVXLThWVUl5dHV3TXM0bV93"
  },
  {
    id: "nara_temple_todaiji_daibutsuden",
    name: "Nara - Grand Temple Tōdai-ji (Hall du Grand Bouddha)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Nara",
    subdiv: "Nara",
    altitude: 88,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Nara & Apogée Bouddhique Impériale (fondé en 752)",
    century: "VIIIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Nara",
    counts: {},
    lat: 34.688421,
    lng: 135.839862,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMvBfgqsSs5Z1WTuWdvaI5EnCPxdOT6Cslns3XIAXaPKx7Z_2_aZ13obDnyhbW4yXAQh4__QVrewCdaghsiPrr2hK1v50dVXVY6AdtnPWcNhLJyOjdDcDmcdbKq2MI1KAsN6yujEADDGZyPoDdrPJfMTQ=w1379-h919-s-no-gm?authuser=0",
    description: "Sommet absolu de l'architecture monumentale en bois et cœur spirituel impérial de l'époque de Nara, le Tōdai-ji (« Grand Temple de l'Est ») fut fondé en 752 par l'empereur Shōmu pour protéger la nation des calamités et asseoir l'autorité religieuse centrale de l'empire. Inscrit au patrimoine mondial de l'UNESCO, son pavillon principal, le Daibutsuden (Hall du Grand Bouddha), s'impose comme l'une des plus vastes structures en bois sous un même toit au monde, s'étirant sur près de cinquante-sept mètres de façade et cinquante mètres de hauteur — bien qu'il ne représente que les deux tiers de l'édifice d'origine ravagé par les incendies guerriers médiévaux. Ce vaisseau colossal abrite en son sein l'une des merveilles de la métallurgie antique universelle : le Grand Bouddha de Nara (Nara no Daibutsu), statue monumentale en bronze de Vairocana haute de près de quinze mètres et pesant plus de cinq cents tonnes, coulée à la suite d'un effort national sans précédent mobilisant des centaines de milliers d'artisans au VIIIe siècle.",
    visiter: "S'avancer sur la longue chaussée dallée de pierre bordée de cerfs sika pour mesurer la démesure herculéenne du Daibutsuden s'élevant face au ciel. Pénétrer à l'intérieur du hall colossal dans une pénombre sacrée imprégnée d'effluves d'encens pour contempler la stature vertigineuse du Grand Bouddha de bronze trônant sur son socle de pétales de lotus gravés, flanqué des bodhisattvas dorés Kokūzō et Nyoirin Kannon ainsi que des imposantes effigies guerrières des Rois célestes Kōmokuten et Tamonten. Contourner la statue par l'arrière pour observer l'un des piliers de soutien en bois percé à sa base d'une étroite ouverture rectangulaire aux dimensions d'une narine du colosse : la tradition populaire assure que quiconque parvient à s'y faufiler s'assure l'illumination spirituelle et la bonne fortune pour l'éternité.",
    link: "https://photos.google.com/u/0/share/AF1QipN1cNgRGSYTU9dkjwObX3nPIk5sJDXkeTvojuRS0MRFvMJRUfqAEpEe968HmUc4lA?hl=fr_CA&key=Q1p5VUJpZXl3b1FkVnVXLThWVUl5dHV3TXM0bV93"
  },
  {
    id: "nara_todaiji_nandaimon",
    name: "Nara - Grande Porte du Sud du Tōdai-ji (Nandaimon)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Nara",
    subdiv: "Nara",
    altitude: 80,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Kamakura & Style Daibutsuyō (reconstruite en 1199)",
    century: "XIIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Nara",
    counts: {},
    lat: 34.685651,
    lng: 135.839843,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP_RKylL0NzbI72YGOtpxwfBNy11lFy-EmzASTTh-VGYwdni934dMTt9PcVh4W49t61ZJUaQ_79-E81fHrmg2ZkR2MrjcdC0HT86T05hzJJaUmqlsopyeF8UeAroh0vzmhAuKevsjUfwJubBKnThpXJYQ=w1379-h919-s-no-gm?authuser=0",
    description: "Sas d'entrée monumental et triomphal ouvrant la voie sacrée vers le complexe du Tōdai-ji, la Grande Porte du Sud (Nandaimon) compte parmi les chefs-d'œuvre les plus puissants, audacieux et imposants de toute l'architecture en bois féodale du Japon. Détruite par un typhon à l'époque de Heian, elle fut somptueusement rebâtie en 1199 sous l'impulsion du moine Chōgen selon le style Daibutsuyō (« style du Grand Bouddha »), d'inspiration continentale Song. S'élevant à plus de vingt-cinq mètres de hauteur sur cinq travées de charpente colossale en zelkova et cèdre brut assemblées sans le moindre ornement superflu, cette structure titanique abrite dans ses niches latérales l'un des sommets incontestés de la sculpture mondiale : les deux statues colossales de gardiens célestes Niō (Kongōrikishi), hautes de plus de huit mètres et sculptées en bois en un temps record de soixante-neuf jours en 1203 par les maîtres géniaux de l'école Kei, Unkei et Kaikei.",
    visiter: "S'approcher de l'édifice par la longue allée animée peuplée de cerfs sika quémandant des galettes shika-senbei, en levant les yeux pour mesurer la force brute de la charpente aux poutres maîtresses massives apparentes étagées sous la double toiture. S'arrêter sous le porche monumental devant les deux niches grillagées pour contempler avec saisissement la virtuosité anatomique, la tension musculaire explosive et le dynamisme terrifiant des deux statues de Niō classées Trésors nationaux : à gauche, Agyō ouvrant la bouche pour prononcer la première voyelle sanskrite marquant le commencement cosmique, et à droite, Ungyō aux lèvres closes scellant la fin des temps. Poursuivre ensuite la marche le long du dromos dallé conduisant directement vers le bassin des miroirs et le grand hall du Daibutsuden.",
    link: "https://photos.google.com/u/0/share/AF1QipN1cNgRGSYTU9dkjwObX3nPIk5sJDXkeTvojuRS0MRFvMJRUfqAEpEe968HmUc4lA?hl=fr_CA&key=Q1p5VUJpZXl3b1FkVnVXLThWVUl5dHV3TXM0bV93"
  },
  {
    id: "nara_sanctuaire_kasugataisha",
    name: "Nara - Grand Sanctuaire Kasuga-taisha",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Nara",
    subdiv: "Nara",
    altitude: 105,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Nara & Culte Shinto des Fujiwara (fondé en 768)",
    century: "VIIIe siècle",
    category: "religieux",
    unesco_name: "Monuments historiques de l'ancienne Nara",
    counts: {},
    lat: 34.681565,
    lng: 135.848289,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPs9uYkS05ydHQjfCpSD2JmPkWwCbD-fgXAjXpUbsWAFCXo_OkSjouxorxk5xitIz3nhwya_6NT3Iiilih9336acUIVIbzc987-nLGdTrtg2RoFtYAJQ68YYo04sN2ZDt4EaymACcpZ0OBNKs4TRi100A=w1379-h919-s-no-gm?authuser=0",
    description: "Niché au pied des collines boisées sacrées du mont Kasugayama à l'orée orientale du parc de Nara, le grand sanctuaire shinto Kasuga-taisha fut fondé en 768 par la puissante lignée des Fujiwara pour implorer la protection divine sur la nouvelle capitale impériale. Écrin vermillon étincelant tranchant avec la luxuriance de la forêt primaire séculaire où la coupe d'arbres et la chasse demeurent strictement prohibées depuis plus d'un millénaire, ce haut lieu de dévotion est dédié à quatre divinités majeures du panthéon autochtone, dont Takemikazuchi no Mikoto, descendu selon la légende sur le dos d'un cerf blanc céleste — consacrant ainsi les cerfs sika comme des messagers divins inviolables. Inscrit au patrimoine mondial de l'UNESCO, le sanctuaire a donné son nom au style architectural shinto kasuga-zukuri et se singularise dans tout l'archipel par sa profusion extraordinaire de lanternes votives : plus de deux mille monumentales lanternes de pierre moussues bordant les allées forestières et un millier de lanternes de bronze ciselé suspendues sous les auvents laqués des galeries.",
    visiter: "Gravir la majestueuse allée forestière sablonneuse ombragée de cèdres géants millénaires, bordée par une forêt minérale ininterrompue de lanternes de pierre recouvertes de mousse où les cerfs sika circulent paisiblement. Franchir le grand torii pour pénétrer dans l'enceinte sacrée ceinte de galeries vermillon étincelantes et de murs blancs, admirant l'alignement féerique des centaines de lanternes de bronze patiné suspendues aux avant-toits. Découvrir la chambre obscure Fujinami-no-ya, où des dizaines de lanternes sont maintenues allumées toute l'année dans le noir complet pour recréer la féerie nocturne des grandes fêtes du Mandōrō (en février et août). Flâner dans le jardin botanique Manyo adjacent réputé pour ses tonnelles de glycines séculaires japonaises en fleurs au printemps, avant de contempler l'immense cèdre sacré vieux de plus de huit cents ans enraciné au pied du pavillon principal.",
    link: "https://photos.google.com/u/0/share/AF1QipN1cNgRGSYTU9dkjwObX3nPIk5sJDXkeTvojuRS0MRFvMJRUfqAEpEe968HmUc4lA?hl=fr_CA&key=Q1p5VUJpZXl3b1FkVnVXLThWVUl5dHV3TXM0bV93"
  },
   {
    id: "osaka_quartier_shinsekai",
    name: "Osaka - Quartier Rétro de Shinsekai & Tsūtenkaku",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 12,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Meiji à Shōwa (fondé en 1912)",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 34.652140,
    lng: 135.506193,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM-TBaG_TvVspX6YB2XqofwuU1_mtst1do7IsoCIFDfbDuWCyzv8N3cUYJNRtJRLHpBveX-8Qhf2ytgIJzEd6IAKeCX-AhpYHDHhUUzlfjDwM3b8ThwdBPz8wA2ccBV9A-pG3xtKAYXUx_C3ZEzMFa9gw=w1221-h919-s-no-gm?authuser=0",
    description: "Quartier populaire et nostalgique né en 1912 au sud d'Osaka, Shinsekai (« le Nouveau Monde ») fut conçu comme une vitrine futuriste mariant l'urbanisme parisien dans sa partie nord aux attractions new-yorkaises de Coney Island au sud. Dominé par la silhouette métallique de la tour Tsūtenkaku (« la tour qui touche le ciel »), le secteur a conservé son atmosphère brute de l'époque Shōwa d'après-guerre avec ses lanternes géantes en papier, ses enseignes tridimensionnelles exubérantes de poissons fugu et ses effigies dorées de Billiken, dieu malicieux de la chance. Célèbre berceau culinaire des kushikatsu (brochettes frites trempées dans une sauce commune), le quartier offre une immersion sensorielle haute en couleur, témoin vibrant de la convivialité chaleureuse et populaire d'Osaka.",
    visiter: "Déambuler sous les néons étincelants de l'artère commerçante Janjan Yokocho bordée d'échoppes de tir à l'arc, de salles de mahjong et de comptoirs de brochettes croustillantes. S'asseoir dans un izakaya traditionnel pour déguster des kushikatsu fumants en respectant la règle sacrée de ne jamais tremper deux fois sa brochette dans le bac de sauce. Grimper au sommet de la tour Tsūtenkaku pour caresser la plante des pieds de la statue de Billiken réputée exaucer les vœux, tester le toboggan extérieur tubulaire transparent et contempler la vue panoramique sur les toits d'Osaka.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_temple_isshinji",
    name: "Osaka - Temple Isshin-ji (Les Bouddhas d'Os)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 16,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Kamakura & Tradition Ōbutsu (fondé en 1185)",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    lat: 34.653026,
    lng: 135.511134,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP0oVfr5yAwo940ceZIWFjQ40sOFfcTduudhThuWZxbQeKkB8n9Xl2yTACYWcEtxkuOPy0KjmAg8SpCOQi88JwK6KIgLNd5-oM79mThBmM1tGa4zYPZuOe_a99bVE1yWmCoUdy8KNHUGFkTfxgmDYqnCA=w1379-h919-s-no-gm?authuser=0",
    description: "Fondé en 1185 par le grand maître bouddhiste Hōnen, père de l'école de la Terre Pure (Jōdo-shū), le temple Isshin-ji se distingue par une tradition funéraire unique au monde. Depuis 1887, le sanctuaire accueille sans distinction de culte les cendres funéraires de dizaines de milliers de défunts confiées par leurs familles : tous les dix ans, ces ossements incinérés sont broyés, mêlés à de la résine et sculptés pour façonner une monumentale statue de Bouddha (Okotsu Butsu). Treize de ces statues sacrées ont ainsi été créées au fil des générations, symbolisant l'égalité absolue de tous les êtres humains dans la mort et l'illumination. Le temple surprend également par son architecture contemporaine audacieuse, mêlant portes d'entrée monumentales en acier et béton brut gardées par de colossales statues en bronze de divinités gardiennes Niō sculptées par l'artiste Sano Gaho.",
    visiter: "Franchir la porte Sanmon d'avant-garde aux lignes architecturales modernes en béton et verre, encadrée par les impressionnantes statues musclées des guerriers gardiens Niō. Se recueillir dans le hall principal Kōdō devant les statues d'Okotsu Butsu où brûle un encens continu, enveloppé par la ferveur silencieuse des familles venues honorer leurs ancêtres. Parcourir les allées paisibles du cimetière et du jardin intérieur parsemé de stèles commémoratives, dont le tombeau du général samouraï Honda Tadatomo tombé lors du siège d'Osaka en 1615, où les fidèles viennent déposer des bouteilles de saké pour faire le vœu d'arrêter l'alcool.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_temple_shitennōji",
    name: "Osaka - Grand Temple Shi Tennō-ji",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 18,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Asuka (fondé en 593 par le Prince Shōtoku)",
    century: "VIe siècle",
    category: "religieux",
    counts: {},
    lat: 34.654305,
    lng: 135.516063,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMU-UbT2UGmY_8OrVbIAVoCQ8wcvXKuJHXWvusaFLnz2-gyJTdv51ST5pwRRIjBIeYl7IAd_52VlNsDNsfm_I7l6ctTYTpLf9np6JXucQG0elDNKlHpSjeOe0GdHGmQNt9SjDemZB0nbmgVffBuKJDGUQ=w1221-h919-s-no-gm?authuser=0",
    description: "Considéré comme le plus ancien temple bouddhiste officiel administré par l'État au Japon, le Shi Tennō-ji fut fondé en 593 par le régent prince Shōtoku Taishi, figure fondatrice de la civilisation japonaise qui introduisit le bouddhisme dans l'archipel. Dédié aux quatre rois célestes protecteurs (Shi Tennō), le complexe monastique a conservé rigoureusement à travers quatorze siècles de reconstructions fidèles son plan d'origine de style Asuka (Shitennōji-shiki) : une disposition axiale rectiligne parfaite sud-nord alignant la porte centrale (Chūmon), la pagode à cinq étages (Gojūnotō), le pavillon d'or (Kondō) et le grand hall de lecture (Kōdō), ceinturés d'un cloître couvert. Véritable phare spirituel et historique, ce sanctuaire vermillon incarne les racines mêmes du bouddhisme nippon.",
    visiter: "Franchir le monumental torii de pierre érigé en 1294 (l'un des plus anciens du Japon marquant l'entrée d'un temple bouddhiste) et pénétrer dans l'enceinte sacrée centrale ceinte de galeries laquées de rouge. Pénétrer dans le pavillon Kondō pour contempler la statue sacrée de la Kannon Guanyin entourée de fresques murales bouddhiques, puis gravir les escaliers étroits de la pagode à cinq étages pour embrasser la perspective aérienne sur la cour. Flâner le long de l'étang Kame-no-ike peuplé de centaines de tortues d'eau douce se réchauffant sur les pierres, et explorer le paisible jardin paysager Gokuraku-jōdo (« le jardin de la Terre Pure ») abritant des étangs sinueux, des cours d'eau et des pavillons de thé préservés.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_temple_hozenji",
    name: "Osaka - Temple Hōzen-ji & Ruelle Hōzenji-Yokochō",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 5,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (fondé en 1637)",
    century: "XVIIe siècle",
    category: "religieux",
    counts: {},
    lat: 34.667980,
    lng: 135.502482,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMy3d5OIYCQKMUkY44iinngaKPSmzXyxhuR47w2fKkD4imFJpIpPaSsV75CeC4W8zaogTYEKY8TSXbxvwojx8e0buOQy7oP3WIOVwKFhxK3Dt4_r_Yf4avHfJ4cbUZeoK4eHUy1-JT6O9EFGjihRKFSZQ=w1221-h919-s-no-gm?authuser=0",
    description: "Havre de paix spirituel et enclave intemporelle dissimulée à quelques pas de l'agitation frénétique de Dōtonbori, le temple bouddhiste Hōzen-ji veille sur le quartier de Namba depuis 1637. Rattaché à l'école Jōdo-shū, il est mondialement célèbre pour sa statue miraculeuse de Fudō Myōō, divinité bouddhique protectrice au visage courroucé entourée de flammes, affectueusement surnommée Mizukake Fudō (« le Fudō aspergé d'eau »). Unique vestige ayant échappé aux incendies et aux bombardements de la Seconde Guerre mondiale, la statue est aujourd'hui entièrement recouverte d'un épais manteau vivant de mousse verte veloutée, fruit d'un rituel séculaire où les fidèles puisent de l'eau de source pour l'asperger en formulant des vœux de santé, d'amour ou de prospérité commerciale. Le temple s'ouvre sur Hōzenji-Yokochō, une allée pavée historique bordée de restaurants traditionnels et de lanternes en papier.",
    visiter: "S'avancer dans la cour intime du temple bercée par la fumée d'encens et prendre l'une des longues louches en bois pour puiser de l'eau claire dans le bassin sacré. Asperger avec déférence la statue entièrement tapissée de mousse de Mizukake Fudō et ses deux acolytes Kongara et Seitaka Doji en formulant un vœu silencieux. S'engager ensuite le long des quatre-vingts mètres de venelles pavées de pierre de Hōzenji-Yokochō, admirer les façades en bois sombre et les rideaux noren des petites tavernes Kappō, et s'arrêter dans le salon historique Meoto Zenzai pour déguster la célèbre soupe sucrée aux haricots rouges azuki servie en deux bols inséparables, symbole traditionnel de concorde conjugale.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_nipponbashi_denden_town",
    name: "Osaka - Quartier Électronique de Nipponbashi (Denden Town)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 6,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Épicentre Électronique & Pop Culture Otaku d'Osaka",
    century: "XXIe siècle",
    category: "star",
    counts: {},
    lat: 34.660502,
    lng: 135.505905,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNfQpnjuECWCybdmES_EAddTdliyn5yM6vUGuEm1_Ara-xsxGNQmqhS1EH435Bwo9n0J4WVFjUQUMgYBREPDOAVffaR0L5TmRriR82NnBi9t6TQ66PL8_IXwlcDxvbuQnnkf-S1ZILkh3I54A8MB5N_8A=w692-h919-s-no-gm?authuser=0",
    description: "Pendant occidental mythique du quartier tokyoïte d'Akihabara, Nipponbashi — universellement surnommé Denden Town (« la ville électrique ») — s'étire le long des avenues Sakaisuji et Ota Road au cœur de l'arrondissement de Naniwa. Né dans les décennies d'après-guerre autour d'un dense marché de composants radio et d'outillage électrique, le quartier s'est mué avec éclat en temple absolu de la sous-culture otaku, des mangas, du rétrogaming, des cartes à collectionner et des figurines d'animation. Moins policé et plus convivial que son homologue de la capitale, Denden Town regorge de minuscules boutiques spécialisées dans l'électronique de pointe, d'ateliers de robotique, d'immenses magasins de figurines étagés (comme Animate, Mandarake ou Kotobukiya) et de maid cafés traditionnels, constituant une étape emblématique de la culture geek japonaise.",
    visiter: "Arpenter l'artère centrale Sakaisuji pour dénicher des composants informatiques, du matériel audio haute-fidélité et des gadgets électroniques rares. Obliquer vers la rue parallèle Ota Road, véritable cœur battant des passionnés de pop culture, pour fouiller les vitrines remplies de milliers de figurines de collection en résine, de maquettes Gunpla et de mangas anciens. Explorer les salles d'arcade étagées de Taito Station ou Namco pour observer la dextérité des joueurs locaux sur les bornes de rythme et tester les machines attrape-peluches (UFO catchers). Chiner des consoles de jeux vidéo rétro légendaires (Famicom, Super Nintendo, Game Boy) chez Super Potato dans une atmosphère vintage unique.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_canal_dotonbori",
    name: "Osaka - Canal & Quartier Festif de Dōtonbori",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 4,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Épicentre Nocturne & Théâtre des Saveurs (creusé en 1612)",
    century: "XXIe siècle",
    category: "star",
    counts: {},
    lat: 34.669139,
    lng: 135.501557,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPFEiery79fnVtCmd1-Qy066lD7PLLDvy2u6xP7rmZiPiX1wjeb6gvvX3MinxFMrMcU341yRkTqmO1FJs7fo8fc7No5j2MdmgOIVt5jwJXgKlZ01PTS-yj5VPCSihDMxPhzbG6e_eFOMc1iRINcQS4jJg=w1221-h919-s-no-gm?authuser=0",
    description: "Cœur incandescent, joyeux et démesuré d'Osaka, le quartier de Dōtonbori s'articule le long de son canal historique creusé en 1612 par le marchand Yasui Dōton pour relier deux rivières régionales. Devenu sous l'époque d'Edo le quartier attitré des théâtres de kabuki et de marionnettes bunraku, le secteur s'est métamorphosé en l'une des avenues gastronomiques et nocturnes les plus célèbres du globe. C'est ici que s'incarne avec panache la philosophie du kuidaore (« manger jusqu'à la ruine financière »), proclamée par des façades commerciales monumentales décorées de créatures géantes animées : crabe articulé géant de Kani Dōraku, pieuvres géantes, têtes de bœuf et dragons cracheurs de fumée. Dominé par l'emblématique enseigne lumineuse du coureur Glico franchissant la ligne d'arrivée depuis 1935 sur le pont Ebisubashi, Dōtonbori offre un spectacle visuel étourdissant où l'effervescence de la street-food côtoie les reflets multicolores des néons miroitant sur les eaux du canal.",
    visiter: "Rejoindre le pont piétonnier Ebisubashi pour prendre l'incontournable photo souvenir en mimant la pose victorieuse du coureur Glico les bras levés devant son écran géant. Flâner le long de la promenade basse aménagée Tonbori River Walk longeant l'eau pour admirer les reflets flamboyants des enseignes géantes et voir passer les bateaux de croisière urbaine. S'arrêter devant les étals de rue fumants pour déguster sur le pouce les grands classiques d'Osaka : des boulettes de poulpe brûlantes takoyaki nappées de sauce et de flocons de bonite séchée dansante, des galettes de chou okonomiyaki grillées sur plaque teppan, et des gyozas croustillants. Photographier la roue foraine ovale jaune géante intégrée à la façade du magasin Don Quijote dominant le canal.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_chateau_osaka",
    name: "Osaka - Château d'Osaka (Osaka-jō)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 35,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque Azuchi-Momoyama (fondé en 1583 par Toyotomi Hideyoshi)",
    century: "XVIe siècle",
    category: "chateau",
    counts: {},
    lat: 34.686777,
    lng: 135.525794,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNbRchP53XPW3YfymBadHGqAI-_rlDcx2UgQfEx9pde66V8aiYZFcwWQ392dNg4s7NPz7xzzDffo3mbrF_lj7YfMB6LxMEWp1xyiFGRjFI_dy7OKMTmNze2Xo5YmrmCLSqSLddpbV6chfLVVYveQkFkog=w1379-h919-s-no-gm?authuser=0",
    description: "Symbole monumental de la puissance féodale nippone et de l'unification du Japon à la fin du XVIe siècle, le château d'Osaka (Osaka-jō) fut érigé à partir de 1583 par le grand seigneur de guerre Toyotomi Hideyoshi sur l'emplacement de l'ancien temple-forteresse Ishiyama Hongan-ji. Conçu pour être la forteresse la plus imprenable et opulente du pays, il présente un colossal système défensif composé de deux réseaux concentriques de douves monumentales et de remparts vertigineux bâtis à l'aide de monolithes de granit titanesques pesant jusqu'à plus de cent tonnes (comme la célèbre pierre Takoishi de trente-six mètres carrés). Détruit lors du dramatique siège d'Osaka en 1615 puis reconstruit par le shogunat Tokugawa, son donjon majestueux à cinq étages extérieurs et huit niveaux intérieurs s'habille de murs d'un blanc pur et de toitures vertes rehaussées de dorures éclatantes et d'ornements de carpes shachihoko en or massif, dominant un immense parc de plus de cent hectares planté de milliers de cerisiers.",
    visiter: "Franchir la colossale porte Otemon et longer les douves baignées d'eau calme avant de s'arrêter avec stupéfaction devant la pierre géante Takoishi intégrée dans le mur d'enceinte de la porte Sakura-mon. Pénétrer dans le donjon central rénové pour parcourir son riche musée historique exposant des armures complètes de samouraïs, des paravents peints retraçant la bataille d'Osaka et des lettres calligraphiées de Toyotomi Hideyoshi. Monter au huitième étage sur la terrasse d'observation extérieure panoramique perchée à cinquante mètres de hauteur pour embrasser une vue saisissante sur les douves, le parc arboré et les gratte-ciel de la métropole. Se promener ensuite dans le jardin Nishinomaru pour admirer la perspective magistrale du château se reflétant sur les eaux.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_quartier_nakazakicho",
    name: "Osaka - Quartier Bohème de Nakazakichō",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 8,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Shōwa Préservée & Avant-Garde Bohème",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 34.708622,
    lng: 135.503394,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMN3GQOtPfHENPX7XtXfJ1JLpqeAhZYRK5YbF7beqE6gbWmL9O201TzlDqFsGO-wgterMgE6TNhM_jy6IFs30-RzZuYsXBssXJz_Ii9_DvNVMfpOiTDH0vIV3z1NCzT2rYERyy4T9P2rBLt5vh93zWC6w=w1379-h919-s-no-gm?authuser=0",
    description: "Miraculeusement épargné par les intenses bombardements de la Seconde Guerre mondiale qui rasèrent la quasi-totalité d'Osaka, le quartier intimiste de Nakazakichō constitue l'un des rares témoins authentiques de l'habitat populaire urbain des ères Taishō et du début Shōwa. Niché à quelques minutes de marche des gratte-ciel vertigineux de la gare d'Umeda, ce dédale de venelles piétonnes étroites bordées de maisons traditionnelles en bois (machiya et nagaya) a trouvé une seconde jeunesse artistique et bohème. Sans dénaturer l'architecture d'époque aux façades patinées, aux tuiles anciennes et aux enchevêtrements de câbles électriques aériens, une communauté créative de jeunes artisans, stylistes et restaurateurs y a aménagé des galeries d'art indépendantes, des cafés rétro feutrés, des librairies d'occasion et des friperies vintage, créant une oasis de calme et de poésie urbaine hors du temps.",
    visiter: "Se perdre au hasard des venelles sinueuses et silencieuses en observant les détails des façades d'époque, les pots de fleurs disposés sur les pas-de-porte et les chats de quartier somnolant à l'ombre des toitures basses. Pousser la porte coulissante en bois d'une ancienne maison mitoyenne nagaya réhabilitée pour déguster un café filtre artisanal ou un gâteau maison dans un salon rétro aux poutres apparentes meublé d'objets chinés. Explorer les boutiques d'artisanat indépendant, les ateliers de créateurs textiles et les concept-stores de vêtements vintage disséminés dans les cours intérieures, offrant une respiration douce et bucolique en contraste absolu avec le gigantisme moderne du pôle d'Umeda tout proche.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_nintendo_store_daimaru",
    name: "Osaka - Nintendo Store & Pokémon Center (Daimaru Umeda)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 50,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Pop Culture Vidéoludique (inauguré en 2022)",
    century: "XXIe siècle",
    category: "star",
    counts: {},
    lat: 34.702154,
    lng: 135.496644,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN7sm_BAmQzZzLa4sHaFJW7DKbtIA3u3TvgLMaWKIAz98z8UsSQnyAn2cDBz5Y8kskZ-JQi7Uo5XOodudmKfjwv9h8-0r7wg0b9hXorXqGQbJt6UQvo-R4wDE-Z1fOALOjw4h7VXhO_aOSZploTdg_FQQ=w692-h919-s-no-gm?authuser=0",
    description: "Temple officiel de la culture vidéoludique contemporaine situé au 13e étage du grand magasin Daimaru Umeda au cœur du complexe de la gare d'Osaka, le magasin Nintendo OSAKA s'impose comme le deuxième magasin officiel de la firme historique ouvert au Japon après celui de Tokyo. Inauguré fin 2022, cet espace immersif ultramoderne célèbre l'univers des franchises légendaires créées par l'entreprise kyotoïte fondée en 1889 : Super Mario, The Legend of Zelda, Splatoon et Animal Crossing. Flanqué du gigantesque Pokémon Center Osaka adjacent et de corners dédiés à Capcom et One Piece, cet étage concentre le sommet de la pop culture et du divertissement graphique japonais. Baigné de musiques orchestrales familières tirées des jeux et rythmé par des écrans interactifs diffusant des animations exclusives, le lieu attire passionnés de gaming et collectionneurs du monde entier en quête de pièces exclusives introuvables ailleurs.",
    visiter: "Prendre les ascenseurs rapides du grand magasin Daimaru jusqu'au 13e étage pour être accueilli à l'entrée de la boutique par de spectaculaires statues géantes grandeur nature de Mario sortant d'un tuyau vert, de Link bandant son arc et des Inklings de Splatoon. Parcourir les allées éclatantes pour découvrir les milliers de produits dérivés exclusifs estampillés du logo rouge Nintendo : figurines de collection de haute précision, vêtements urbains, papeterie créative et vaisselle thématique. Prolonger la visite dans l'espace voisin du Pokémon Center Osaka pour saluer les grandes statues de Pikachu et des Pokémon de départ, explorer les rayons de peluches géantes du Pokédex national et découvrir les vitrines de cartes à collectionner officielles.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
  {
    id: "osaka_umeda_sky_building",
    name: "Osaka - Tour Umeda Sky Building & Observatoire Flottant",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture d'Osaka",
    subdiv: "Osaka",
    altitude: 173,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Postmodernisme & Architecture Futuriste Hiroshi Hara (1993)",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 34.705577,
    lng: 135.490207,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNsw29mZXnjY41aa8zweJYPli_niONPvB4J5zM0h118wA2Yv1ywz6jseCrN6D0BOwSne1HR20bOCmBouM0_9GyYFHLG9kYfLNcG4w7nTadsMy20D_6Q8MNZoNLdibXLw9OTUui6nM9iGRG5yPCgqCYFSw=w735-h919-s-no-gm?authuser=0",
    description: "Chef-d'œuvre audacieux de l'architecture rétrofuturiste internationale conçu par le maître Hiroshi Hara et inauguré en 1993, l'Umeda Sky Building dresse sa silhouette monumentale de 173 mètres de hauteur dans l'arrondissement de Kita. Composé de deux tours jumelles de quarante étages entièrement revêtues de verre miroitant reflétant les variations du ciel, l'édifice est couronné à son sommet par une plate-forme circulaire spectaculaire : l'Observatoire du Jardin Flottant (Kuchu Teien). Véritable exploit d'ingénierie parasismique, cette structure annulaire d'un millier de tonnes fut entièrement pré-assemblée au sol avant d'être hissée dans les airs par de puissants vérins hydrauliques. Relié par d'incroyables escaliers mécaniques tubulaires suspendus dans le vide spatial entre les deux tours, l'édifice offre un panorama à 360 degrés sans vitre sur toute la métropole d'Osaka, le fleuve Yodo et la baie d'Osaka s'étendant jusqu'à l'île d'Awaji.",
    visiter: "Prendre les ascenseurs vitrés à grande vitesse filant le long de la façade extérieure jusqu'au 35e étage, puis s'engager dans l'impressionnant escalator tubulaire suspendu dans le vide traversant l'atrium central entre les deux tours pour accéder au dôme de l'observatoire. Franchir les portes vitrées du 40e étage pour accéder au Sky Walk, terrasse circulaire à ciel ouvert unique au monde où l'on ressent le souffle vivifiant des vents d'altitude en admirant la vue panoramique circulaire sur l'océan urbain de gratte-ciel d'Osaka, les ponts enjambant le fleuve Yodo et le coucher de soleil flamboyant sur la mer intérieure. À la nuit tombée, contempler le sol de la passerelle extérieure incrusté de particules phosphorescentes créant l'illusion d'une voie lactée lumineuse sous les pieds, avant de descendre au sous-sol dans la rue commerçante Takimi-koji reconstituant avec nostalgie une venelle d'Osaka des années 1920.",
    link: "https://photos.google.com/u/0/share/AF1QipP-qVxbxRbghKHs7bMWHS2EmJjssopfxJKsOzRgMq7x08PnWRd26GUfh1KFjqkFLw?hl=fr_CA&key=aEc0YUZYT1pwMDFDZ3hMWFdrWVFURDhXbXpDeWxB"
  },
   {
    id: "himeji_chateau_himeji",
    name: "Himeji - Château de Himeji (Shirasagi-jō)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Hyōgo",
    subdiv: "Himeji",
    altitude: 45,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque Azuchi-Momoyama & Début Edo (achevé en 1609)",
    century: "XVIIe siècle",
    category: "chateau",
    unesco_name: "Himeji-jo",
    counts: {},
    lat: 34.839084,
    lng: 134.693971,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN4WFspKMaNJPHkEGoGYT39OiUiJU16HOFA-ft4Suc31yJ1H9GSk2ljZMwPhPuOa1MAXgz2sBp39VCjjahUHwb2xca4XWkIJs7E7bOP9SkQRtPVVMmIJFXgEcigxBKVo2PRLZx9_lNOkk1lFG6PfjF4XQ=w1379-h919-s-no-gm?authuser=0",
    description: "Surnommé le « Héron blanc » (Shirasagi-jō) en raison de ses élégantes façades immaculées recouvertes de plâtre blanc résistant au feu, le château de Himeji est le plus vaste, majestueux et spectaculaire donjon féodal préservé de tout le Japon. Trésor national inscrit au patrimoine mondial de l'UNESCO dès 1993, cet ensemble castral de type hirayamajiro (forteresse sur colline de plaine) fut porté à son apogée entre 1601 et 1609 par le seigneur Ikeda Terumasa. Épargné miraculeusement par les guerres civiles féodales, les bombardements de la Seconde Guerre mondiale et les séismes majeurs, il déploie un formidable système défensif labyrinthique composé de portes fortifiées en chicane, de meurtrières dissimulées (sama) et d'un grand donjon central (Daitenshu) de six étages relié à trois tours secondaires par des galeries blindées. Véritable chef-d'œuvre de la charpenterie japonaise traditionnelle assemblée sans clou métallique, il incarne l'apogée militaire et esthétique de l'architecture des samouraïs à l'aube de l'ère d'Edo.",
    visiter: "Franchir la monumentale porte Otemon et remonter les allées en pente bordées de hauts murs de pierre cyclopéenne en éventail (ōgi-no-kōbai) et de remparts crénelés percés de meurtrières triangulaires et rectangulaires. Traverser les multiples portes fortifiées en chicane conçues pour désorienter les assaillants avant de pénétrer au cœur du grand donjon de bois sombre. Déchaussé sur les planchers de pin patinés, gravir les volées d'escaliers intérieurs très pentus pour contempler les deux monumentaux piliers maîtresses en cèdre et sapin traversant toute la structure, les râteliers d'armes médiévales et les trappes de défense pour jeter pierres et liquides bouillants. Atteindre le dernier étage abritant le sanctuaire shinto Osakabe-jinja pour jouir d'une vue circulaire panoramique imprenable sur les toits sculptés de tuiles armoriées ornées de poissons mythologiques protecteurs shachihoko et sur l'ensemble de la ville de Himeji.",
    link: "https://photos.google.com/u/0/share/AF1QipPKnXoV4FXvajDZ_QCz-mA_squf3grEpTszI8zDp_m-m0zQC-ni5lBT2Uo9gdV2Yw?hl=fr_CA&key=NTE2d2Fpd0pHVlA1UElldFBmLV9wQ0UwNXFSMmtR"
  },
  {
    id: "himeji_jardins_kokoen",
    name: "Himeji - Jardins Traditionnels de Kōko-en",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Hyōgo",
    subdiv: "Himeji",
    altitude: 20,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Jardins Traditionnels de Style Époque d'Edo (inaugurés en 1992)",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 34.837541,
    lng: 134.690147,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNhiGSJwiJEIFKtt7wEuDCgC-aFy2k83T66BKyA5YbImgyI7moqdC0kAKAXjJK3-ReJfqQKOrDspesl5pYeRuUVaT81OVuxiljR1RDRzjTBl64K1YUiY1d6sMiDGrmr_TqDEqmgZdlG0BmjENWrQskVrA=w1221-h919-s-no-gm?authuser=0",
    description: "Aménagé en 1992 pour célébrer le centenaire de la municipalité de Himeji, Kōko-en est un splendide ensemble de neuf jardins paysagers traditionnels clos de murs, édifié sur l'emplacement archéologique précis des anciennes résidences des samouraïs et du manoir seigneurial occidental (Nishi-Oyashiki) du clan Sakai. Ceinturés de nobles murs de torchis et de tuiles d'époque (tsujibei), ces jardins reliés par des passages couverts et des portes seigneuriales restaurées restituent avec un raffinement magistral l'art horticole et paysager de l'époque d'Edo. Chaque enclos développe une thématique végétale et sensorielle distincte : le grand jardin de la résidence seigneuriale avec cascade et vaste étang de carpes koï, le jardin des bambous, le jardin des conifères, le jardin des fleurs ou encore le jardin du pavillon de thé. Utilisant avec virtuosité la technique du paysage emprunté (shakkei), le domaine cadre magnifiquement la silhouette blanche du château de Himeji en arrière-plan des érables et des pins taillés en nuages.",
    visiter: "Franchir la porte seigneuriale Nagayamon et s'engager sous la galerie en bois de cèdre du pavillon Cho-on-sai, qui s'avance sur les eaux limpides du grand étang peuplé de carpes koï multicolores nageant au pied d'une cascade tumultueuse. Flâner le long des sentiers dallés bordés de lanternes de pierre moussues et franchir les ponts de bois arqués reliant les neuf jardins thématiques. Découvrir le calme feutré du jardin des bambous abritant une quinzaine de variétés rares oscillant sous le vent, puis s'arrêter au pavillon de thé Souju-an, conçu selon les règles strictes de l'école Urasenke, pour savourer un thé matcha mousseux accompagné d'une confiserie wagashi de saison face au jardin d'eau. Admirer les trouées paysagères à travers les feuillages d'érables flamboyants révélant le donjon blanc de Himeji se découpant sur le ciel.",
    link: "https://photos.google.com/u/0/share/AF1QipPKnXoV4FXvajDZ_QCz-mA_squf3grEpTszI8zDp_m-m0zQC-ni5lBT2Uo9gdV2Yw?hl=fr_CA&key=NTE2d2Fpd0pHVlA1UElldFBmLV9wQ0UwNXFSMmtR"
  },
   {
    id: "tatsuno_chateau_tatsuno",
    name: "Tatsuno - Château de Tatsuno (Tatsuno-jō)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Hyōgo",
    subdiv: "Tatsuno",
    altitude: 58,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque Muromachi à Edo (fondé vers 1499, reconstruit en 1672)",
    century: "XVIIe siècle",
    category: "chateau",
    counts: {},
    lat: 34.868695,
    lng: 134.544766,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPb2kZE9iXDXFrQiFr-bulNX4scu-N-FmRJYfMye5P3k4qsVXyS8vEHbFeZzPinyASY_mWhnm1SMGoy1LZbOIjsw13LFN4ZiBtcOfwlXFwIoqSzayUO79ED7qUHHdqO6gdLWVXpm7FU_LAgFfxZjOXbsQ=w1221-h919-s-no-gm?authuser=0",
    description: "Édifié originellement en 1499 par le clan Akamatsu au sommet du mont Keigo sous la forme d'une place forte de montagne (yamajiro), le château de Tatsuno fut profondément remanié en 1672 sous l'époque d'Edo par le seigneur Yasumasa Wakisaka pour devenir une forteresse de plaine au pied du relief (hirayamajiro). Fief seigneurial dominant la vallée fertile de l'Ibo-gawa et le quartier historique préservé aux façades blanches de la « Petite Kyoto du Harima », le domaine castral se distingue par ses imposants murs de soutènement en pierres cyclopéennes, ses douves asséchées et ses courtines immaculées. Reconstruit fidèlement selon les techniques artisanales traditionnelles en charpente de cèdre et toitures de tuiles sombres kuruma-gawara, le complexe comprend un élégant logis seigneurial (Honmaru Goten), des tourelles de guet d'angle (yagura) et une monumentale porte fortifiée d'honneur (Uzumon), témoignant de la grandeur militaire et politique des daimyos sous le shogunat Tokugawa.",
    visiter: "Franchir la puissante porte en bois massif Uzumon et longer les hauts remparts de pierre moussue bordés de cerisiers pour accéder à l'esplanade du Honmaru. Visiter les appartements intérieurs du palais seigneurial Goten, où l'on découvre de vastes enfilades de tatamis parfumés, des cloisons coulissantes en papier washi et des pièces d'exposition présentant des armes de samouraïs d'époque, des sabres, des armures laquées et des cartes cadastrales féodales du domaine de Tatsuno. S'attarder sur la galerie d'observation extérieure pour embrasser un panorama plongeant sur les toits d'ardoise de la vieille ville marchande, les fabriques séculaires de sauce soja et la silhouette boisée du mont Keigo où subsistent les vestiges de la forteresse primitive médiévale.",
    link: "https://photos.google.com/u/0/share/AF1QipPUxlujlWKyir2WyoJjhQ68Tu0ol8DL1aIB8mm27u1PhEE0D_xYCyXm77LXyuWdAQ?hl=fr_CA&key=b0V2ZTg4alNnZ0FETldBZ1RZNnlfNlN5OUg3NGtB"
  },
   {
    id: "shinonsen_port_igumi",
    name: "Shin'onsen - Port de Pêche d'Igumi",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kansai",
    department: "Préfecture de Hyōgo",
    subdiv: "Shin'onsen",
    altitude: 4,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Littoral Maritime & Tradition de la Mer du Japon",
    century: "XXe siècle",
    category: "star",
    counts: {},
    lat: 35.615539,
    lng: 134.388342,
    image: "https://lh3.googleusercontent.com/pw/AP1GczND2GzlsppT8WvInnF5F3oMleaac4uKvADO4PvatrMZsazwCFGUO0otXEES6U7a7y9Ptvdz-6zWvpLAaNU9_L_pem81SDByh67oz11D5_iT6BaWQk6ZLGN10K2TgL6NhxlfifVVX-VOb_oWJcrpkWVmMA=w1379-h919-s-no-gm?authuser=0",
    description: "Niché au creux d'une anse rocheuse abritée sur le littoral tourmenté de la mer du Japon, le port de pêche d'Igumi incarne l'authenticité paisible des hameaux côtiers du nord du Kansai. Protégé des assauts de la houle d'hiver par de puissantes digues de béton et des rangées de tétrapodes, ce havre traditionnel vit au rythme de la pêche locale au crabe des neiges (Matsuba-gani), aux calmars et aux poissons de roche. Encerclé par des collines boisées tombant à pic dans des eaux émeraude, le village aligne ses maisons de pêcheurs aux façades de bois sombre coiffées de tuiles vernissées, témoignant d'une communion séculaire entre les communautés littorales et les reliefs déchiquetés du géoparc San'in Kaigan.",
    visiter: "Arpenter les quais calmes bordés de barques de pêche côtières et de casiers empilés pour observer le va-et-vient des marins débarquant les prises du jour. Suivre la jetée principale jusqu'au phare guidant l'entrée du bassin afin d'admirer la découpe spectaculaire des falaises maritimes et les déferlantes s'écrasant contre les blocs de protection. Flâner ensuite dans les ruelles intimes du village d'Igumi pour contempler l'architecture sobre des habitations traditionnelles adaptées aux rigueurs des hivers maritimes.",
    link: "https://photos.google.com/u/0/share/AF1QipNotf_9dJvJ1HrGUeURi4zx3V946GW9cpHOV6y7aIpRYSfE29Em-4q4Qs0FE8Hcfg?hl=fr_CA&key=X3VlMDdITVZVa2NQQk9KNWZzTGs5akpDOTFsUHFR"
  },
  {
    id: "iwami_arashigahama_beach",
    name: "Iwami - Crique Sauvage d'Arashigahama",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Chūgoku",
    department: "Préfecture de Tottori",
    subdiv: "Iwami",
    altitude: 6,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "Temps géologique (littoral d'érosion volcanique)",
    century: "",
    category: "plage",
    counts: {},
    lat: 35.605430,
    lng: 134.370861,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMCmDXOOp2AmaYye-LuyP1wTBKQXO3zOPmLRG4DclkHAPHuwoTGE9vpiCN5EHy2LggZEoIc14LSjb5DfwSuWNr76986A-IPblF5c0Xp9OVD85LbXvx9FmE7bi7ePrbZemxhLmCSHhVznjY55ZsjVQst8w=w1221-h919-s-no-gm?authuser=0",
    description: "Écrin sauvage et préservé de la côte d'Uradome au sein du géoparc mondial UNESCO San'in Kaigan, la plage d'Arashigahama offre une anse marine spectaculaire cernée de falaises rocheuses couvertes de pins maritimes noueux. Façonné par des millions d'années d'érosion marine et d'intempéries hivernales caractéristiques de la mer du Japon, ce rivage mêle galets polis et sable doré bordant des eaux d'une limpidité cristalline exceptionnelle. Véritable havre de nature brute à l'écart des grands flux touristiques, le site dévoile de saisissants contrastes entre la blancheur de la roche granitique sculptée par les vagues, la verdure profonde de la végétation littorale et la palette turquoise du plan d'eau.",
    visiter: "Descendre le sentier escarpé serpentant à travers les sous-bois de pins côtiers pour atteindre cette grève isolée et silencieuse. Longer le bord de l'eau pour observer de près les cavités d'érosion, les récifs submergés et les empilements de galets multicolores battus par le ressac. Profiter de la clarté saisissante des eaux pour une séance de baignade vivifiante ou de snorkeling le long des tombants rocheux, tout en admirant les perspectives marines ouvertes vers les îlots sauvages émergeant au large.",
    link: "https://photos.google.com/u/0/share/AF1QipNotf_9dJvJ1HrGUeURi4zx3V946GW9cpHOV6y7aIpRYSfE29Em-4q4Qs0FE8Hcfg?key=X3VlMDdITVZVa2NQQk9KNWZzTGs5akpDOTFsUHFR&hl=fr_CA"
  },
  {
    id: "iwami_kamogaiso_coast",
    name: "Iwami - Plage & Récifs de Kamogaiso (Côte d'Uradome)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Chūgoku",
    department: "Préfecture de Tottori",
    subdiv: "Iwami",
    altitude: 5,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "Temps géologique (chaos granitique d'Uradome)",
    century: "",
    category: "plage",
    counts: {},
    lat: 35.589115,
    lng: 134.300699,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPi2znRo5H-g5wOqoHpVJHRhwm4AKkFmEQLbmUHhgMElir_zpH9owLXdK38wK5g5Xv43UwudDXmmaM5cNT8S64bdMcPQsssYH57lFPkEcOp2GXkefyKoqzB9UjlKz9eL3F1JNcD3tRNxYegOwU5awuF1A=w1379-h919-s-no-gm?authuser=0",
    description: "Considéré comme l'un des joyaux géologiques les plus célèbres de la côte d'Uradome, le site de Kamogaiso déploie un paysage marin féerique composé d'une anse sablonneuse parsemée d'îlots rocheux et de pitons de granit blanc coiffés de conifères japonais. Ce chaos minéral sculpté par la puissance des vagues et les vents marins présente un dédale d'arches naturelles, de failles et de récifs immergés baignés par des eaux d'une transparence tropicale oscillant entre émeraude et saphir. Cité comme l'une des étapes emblématiques du géoparc mondial UNESCO San'in Kaigan, Kamogaiso offre une synthèse magistrale de l'esthétique paysagère côtière nippone, immortalisée depuis des siècles par les artistes et poètes contemplant la mer du Japon.",
    visiter: "Emprunter les passerelles et sentiers de randonnée côtiers aménagés en corniche qui surplombent la crique avant de descendre directement sur la grève de sable clair. Parcourir les platiers rocheux à marée descendante pour contempler les cavités marines, les arches naturelles forgées dans le granit et les piscines de marée peuplées d'anémones et de petits crustacés. S'avancer le long de la plage pour saisir les contrastes visuels saisissants entre la blancheur éclatante de la roche, le vert profond des pins accrochés aux crêtes et la clarté abyssale des lagons d'Uradome.",
    link: "https://photos.google.com/u/0/share/AF1QipNotf_9dJvJ1HrGUeURi4zx3V946GW9cpHOV6y7aIpRYSfE29Em-4q4Qs0FE8Hcfg?key=X3VlMDdITVZVa2NQQk9KNWZzTGs5akpDOTFsUHFR&hl=fr_CA"
  },
  {
    id: "tottori_dunes_de_sable",
    name: "Tottori - Dunes de Sable de Tottori (Tottori Sakyū)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Chūgoku",
    department: "Préfecture de Tottori",
    subdiv: "Tottori",
    altitude: 45,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "Temps géologique (édifice dunaire littoral de 100 000 ans)",
    century: "",
    category: "star",
    counts: {},
    lat: 35.545510,
    lng: 134.232494,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM1GuMtxWRQTRISasg6aULfL2HLkKx-kYIlSmOJY0Rh5xo0i1eGLoNCUZuHcdPcXJX6gWSDrIUVJbPavMAJvSQ3EwCuCybjfXCgCANOagN6xVmKkrpJXRfOmRu4vVFNAmrRZzOJ6FqAAEut7b-S7xhubQ=w1221-h919-s-no-gm?authuser=0",
    description: "Vaste désert côtier s'étirant sur seize kilomètres le long du littoral de la mer du Japon, les dunes de Tottori (Tottori Sakyū) constituent le système dunaire actif le plus spectaculaire et renommé de l'archipel nippon. Né de l'accumulation continue de sables volcaniques arrachés aux monts Chūgoku par le fleuve Sendai puis rejetés sur la côte par les puissants courants marins depuis plus de cent mille ans, le site déploie des crêtes sablonneuses monumentales pouvant culminer à près de cinquante mètres de hauteur. Perpétuellement redessiné par les bourrasques venues du large, le paysage alterne cratères éoliens profonds (suribachi) et délicates ondulations de sable éphémères (fumon). Classé Monument naturel national au sein du parc national San'in Kaigan, cet horizon désertique plongeant directement dans l'azur marin offre un spectacle d'une démesure insolite et saisissante au Japon.",
    visiter: "Gravir la pente abrupte de la monumentale crête principale, surnommée le « Dos du Cheval » (Umanose), pour être saisi au sommet par la vue plongeante vertigineuse sur les déferlantes bleu cobalt de la mer du Japon. Retirer ses chaussures pour fouler pieds nus la douceur du sable et observer les spectaculaires motifs de vagues éoliennes tracés par les vents matinaux sur les pentes vierges. Admirer les oasis temporaires qui se forment au creux des dépressions dunaire lors des pluies, puis contempler le coucher du soleil qui embrase les crêtes sablonneuses d'une lumière cuivrée avant de visiter le Musée du Sable voisin exposant d'impressionnantes sculptures éphémères géantes.",
    link: "https://photos.google.com/u/0/share/AF1QipNotf_9dJvJ1HrGUeURi4zx3V946GW9cpHOV6y7aIpRYSfE29Em-4q4Qs0FE8Hcfg?key=X3VlMDdITVZVa2NQQk9KNWZzTGs5akpDOTFsUHFR&hl=fr_CA"
  },
   {
    id: "toyooka_genbudo_park",
    name: "Toyooka - Parc Géologique des Grottes de Genbudō",
    country: "Japon",
    region_admin: "Kansai",
    department: "Préfecture de Hyōgo",
    subdiv: "Toyooka",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.588530,
    lng: 134.804707,
    altitude: 25,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "Temps géologique (orgues basaltiques de 1,6 Ma)",
    century: "",
    category: "volcan",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczMsO7gUtoQqTldjIVJDgEwGQA9EgQ4Ul6G0IjCaQHKKEJHAIUFDeCcoXmTqgBzmh5TTWlWcmxGBJ2XOtJ8PE1krgoxdcZxFZweqkGNIqOU8lEPtW5QbpD-bmuQgwCwHQgeEoa8OQ17W4Fn5Z-jYilV8qA=w2500-h1667-s-no-gm?authuser=0",
    description: "Site naturel et géologique spectaculaire bordant la rivière Maruyama, le parc de Genbudō abrite cinq cavités nées du refroidissement d'une coulée de lave volcanique survenue il y a environ 1,6 million d'années (Pléistocène). En se solidifiant lentement, le basalte s'est rétracté pour former d'impressionnantes colonnades prismatiques hexagonales et pentagonales (orgues basaltiques). C'est précisément en étudiant l'orientation magnétique des minéraux de ces parois en 1926 que le géophysicien japonais Motonori Matuyama découvrit l'inversion du champ magnétique terrestre, une avancée scientifique fondamentale pour la géologie moderne.",
    visiter: "Suivre les sentiers aménagés reliant les cinq grottes principales, chacune nommée d'après l'une des quatre créatures mythologiques célestes : Genbudō (la tortue noire), Seiryūdō (le dragon bleu), Byakkodō (le tigre blanc) et Suzakudō (l'oiseau vermillon). Observer de près la précision géométrique stupéfiante des orgues de basalte dressées à la verticale ou incurvées en éventail. Admirer les eaux calmes du bassin reflétant la paroi de Seiryūdō et visiter le musée adjacent présentant de remarquables spécimens minéralogiques et des fossiles découverts dans la région du géoparc San'in Kaigan.",
    link: "https://photos.google.com/share/AF1QipNHqMHL_7SfOOebUsfihtPZgGMLCn1oe35fxna2Gela_KTco3kKxBr-c43Vfpze6g?key=ekw0TTc2eVAzVkpoajI4a2RKMGJPbmduVE5VOHR3"
  },
  {
    id: "toyooka_kinosaki_onsen",
    name: "Toyooka - Village Thermal de Kinosaki Onsen",
    country: "Japon",
    region_admin: "Kansai",
    department: "Préfecture de Hyōgo",
    subdiv: "Toyooka",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.625765,
    lng: 134.807645,
    altitude: 10,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Nara (fondation thermale en 717)",
    century: "VIIIe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczORQZpGdZPVa5eWQKV-O1z89jQcy77BtD1mSf7QUs4tzEA78bfvclCKW7XcEJAOZ8F35iXmsEby2XJoUv0CUag2tgrUpnk51R5wowqarYzjWA_3OmHtszquPOBlNtpfsU75kVLWdAP-w2_td_dxxg4grg=w1984-h2635-s-no-gm?authuser=0",
    description: "Célèbre cité thermale réputée depuis plus de mille trois cents ans, Kinosaki Onsen s'étire le long du canal Otani ombragé de saules pleureurs et enjambé de pittoresques ponts de pierre voûtés. Découverte selon la légende par le moine bouddhiste Dōchi Shōnin en 717 après mille jours de prières continues, la station est le berceau d'une tradition balnéaire authentique où les visiteurs arpentent les ruelles pavées vêtus d'un yukata léger et chaussés de sandales en bois geta pour effectuer la tournée des sept bains publics sacrés (soto-yu). Le charme nostalgique de ses auberges ryokan a également inspiré nombre de grands écrivains du début du XXe siècle, dont Naoya Shiga.",
    visiter: "Revêtir un yukata traditionnel et enfiler des geta pour déambuler le long du canal bordé de lanternes à gaz et de façades en bois d'époque Taishō. Pratiquer le soto-yu meguri en faisant tamponner son pass thermal dans les sept établissements de bains publics aux vertus et ambiances variées, notamment Goshonoyu (le bain du palais impérial avec cascade en plein air) et Ichino-yu. Déguster les spécialités locales au gré des étals : crabe des neiges de Matsuba en saison hivernale, bœuf de Tajima grillé, ou glaces et œufs mollets cuits dans les fontaines thermales fumantes.",
    link: "https://photos.google.com/share/AF1QipPbMybVwT70dG-fxC9dpMr9Kofb6vrj6_bAO_MzntChEQatvuxl4r7OdJxauWTxNA?key=dkd0WEFtYkNzQWlzeHUyVmZhOEFCQmNjRmxRd3RB"
  },
   {
    id: "hakone_jinja",
    name: "Hakone - Sanctuaire Hakone-jinja",
    country: "Japon",
    region_admin: "Kantō",
    department: "Préfecture de Kanagawa",
    subdiv: "Hakone",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.203097,
    lng: 139.025652,
    altitude: 730,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Nara (fondation en 757)",
    century: "VIIIe siècle",
    category: "religieux",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczMvD3ciQXpmwu9IT0f_D5NiJv25AyM6EQ2gmbdqMuaf7dGKoRIvgqabiLl_aFqkDGzuLzywLTKynXXqhi3zibu_kuiSlGireG4XqJ2Kp7SpNARfg7rSalBLCppay06ME0lsmNl1K6wlitbzNVDgji6yUw=w1921-h2635-s-no-gm?authuser=0",
    description: "Niché au cœur d'une forêt millénaire de cryptomérias géants au pied du mont Hakone, le sanctuaire shinto Hakone-jinja borde les rives mystiques du lac Ashi. Fondé en 757 par le moine Mangan à la suite d'une révélation divine, ce haut lieu de vénération montagnarde fut historiquement révéré par les guerriers samouraïs, notamment Minamoto no Yoritomo et Tokugawa Ieyasu, venus y implorer la victoire militaire et la protection divine sur la route du Tōkaidō. Le site est mondialement réputé pour son spectaculaire « torii de la paix » (Heiwa no Torii), érigé en 1952 directement dans les eaux calmes du lac, reliant symboliquement le monde des esprits à l'immensité aquatique.",
    visiter: "Descendre le sentier pavé de marches en pierre plongeant vers la grève du lac Ashi pour admirer le torii vermillon émergeant des eaux, cadrant au loin les collines boisées et les bateaux pirates. Remonter la majestueuse allée bordée de cèdres japonais centenaires parsemée de lanternes en pierre moussues jusqu'au pavillon principal (Haiden). Se purifier les mains à la fontaine sacrée aux neuf têtes de dragon du sanctuaire Kuzuryū-jinja adjacent, réputée apporter chance et santé. Contempler les riches ornements laqués de rouge et d'or de l'architecture shinto traditionnelle, visiter la salle du trésor abritant des armes de samouraïs médiévales, et savourer la quiétude mystique de ce sanctuaire enveloppé par les brumes d'altitude.",
    link: "https://photos.google.com/share/AF1QipP2x_M2T2jlHQCM_ahzzALakyiWoCRSkhDcC3NQeFMmr2zmlaGVDiWS_ZEihVS-xA?key=dTZwRmhEU1ZnRElUTjI0VmJtMktjMVlzVTF2SW5B"
  },
  {
    id: "hakone_taikan_observation_deck",
    name: "Hakone - Belvédère du Mont Taikan (Mt. Taikan)",
    country: "Japon",
    region_admin: "Kantō",
    department: "Préfecture de Kanagawa",
    subdiv: "Yugawara",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.184912,
    lng: 139.048983,
    altitude: 1011,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "panorama naturel",
    century: "",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczNyAmGBaH__FFwnim8A9mCB3Roq1OgbRkwmjSaJjzHn-hPn4MAH8LsW3UFGYYcUoB9ELlwKX00Ry-cVQow0iKQsqJ7X_dwsCWWXeW3EZORQHytlwDykiQO_Os8eXDekOYe27gF_scCSwYBxtA7DW32B4A=w2489-h1451-s-no-gm?authuser=0",
    description: "Culminant à plus de mille mètres d'altitude sur la ligne de crête séparant Hakone de Yugawara, le belvédère du mont Taikan offre l'une des perspectives panoramiques les plus grandioses de l'archipel nippon. Nommé en hommage au maître peintre Yokoyama Taikan qui aimait y contempler la perfection des paysages, ce promontoire venteux embrasse d'un seul regard le miroir bleu du lac Ashi encaissé dans son ancienne caldeira, surmonté en arrière-plan par le cône parfait et enneigé du mont Fuji. Par temps clair, la vue s'étire vers le sud jusqu'à la péninsule d'Izu et les eaux scintillantes de la baie de Sagami.",
    visiter: "Accéder à l'aire d'observation par la route scénique d'altitude Anest Iwata Turnpike. Rejoindre la terrasse panoramique extérieure pour saisir le contraste saisissant entre la surface étincelante du lac Ashi en contrebas et la silhouette iconique du mont Fuji se découpant sur l'horizon. Profiter des longues-vues pour scruter les crêtes volcaniques de la caldeira de Hakone et les fumerolles lointaines de la vallée. Découvrir l'espace d'accueil du Taikanzan Lounge pour observer le paysage à l'abri des vents frais de montagne, un spot prisé des photographes de paysages et des passionnés de mécanique automobile venus sillonner les lacets du col.",
    link: "https://photos.google.com/share/AF1QipP2x_M2T2jlHQCM_ahzzALakyiWoCRSkhDcC3NQeFMmr2zmlaGVDiWS_ZEihVS-xA?key=dTZwRmhEU1ZnRElUTjI0VmJtMktjMVlzVTF2SW5B"
  },
  {
    id: "hakone_owakudani",
    name: "Hakone - Vallée Volcanique d'Ōwakudani",
    country: "Japon",
    region_admin: "Kantō",
    department: "Préfecture de Kanagawa",
    subdiv: "Hakone",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.243178,
    lng: 139.020073,
    altitude: 1040,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "Temps géologique (caldeira volcanique active)",
    century: "",
    category: "volcan",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczNwITNCC9nLODN7BfHhEhkhAiCboaLhxDjnZVGaGlCQmx2edqv_ZViNN6xtUkBJi8MUbgnZg-O2w1B_bxM4lo20ilmXYlskUw4hHmLLcAGsev6zhtY-YXdA2rRnAexEqtJjB_Wx-Y1IA9m76AxdcJnLcQ=w2489-h1660-s-no-gm?authuser=0",
    description: "Anciennement nommée Jigokudani (« la vallée de l'enfer »), Ōwakudani est une impressionnante gorge volcanique active née de l'effondrement partiel du mont Kamiyama lors d'une gigantesque explosion phréatique il y a environ trois mille ans. Ce paysage désolé et minéral, aux pentes blanchies par les dépôts de soufre, est perpétuellement balayé par d'épaisses fumerolles toxiques s'échappant d'évents rocheux sous haute pression. Des sources thermales bouillonnantes y jaillissent à plus de 80 °C, exploitées depuis des siècles pour alimenter les célèbres stations d'onsen de la région et perpétuer des traditions culinaires volcaniques insolites.",
    visiter: "Arriver en téléphérique panoramique (Hakone Ropeway) pour survoler les abîmes fumants de la caldeira et contempler le mont Fuji se dressant à l'ouest. Suivre les passerelles d'observation sécurisées au milieu des vapeurs soufrées crépitantes et des cours d'eau bouillonnants aux teintes ocre et grisâtres. Goûter impérativement aux célèbres kuro-tamago, des œufs de poule cuits directement dans les eaux géothermales : la réaction chimique entre le fer et le soufre noircit leur coquille, et la légende locale affirme que chacun d'eux prolonge l'existence de sept années. Parcourir le centre géologique pour comprendre l'activité volcanique sous-jacente de l'arc d'Izu.",
    link: "https://photos.google.com/share/AF1QipMYB4APoUA2rYtsXgB4ouiv4REvI6AMgBC-ViPLgUUkc69iEXL7A58bbvj1oZtVrw?key=TW5JVEJ1SF9FWVNyS3NVWXYwUVpUV2M3dm85eG1R"
  },
  {
    id: "fuji_oshino_hakkai",
    name: "Oshino - Sources Sacrées d'Oshino Hakkai",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture de Yamanashi",
    subdiv: "Oshino",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.460160,
    lng: 138.832079,
    altitude: 935,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo à Meiji (sources sacrées du Fuji)",
    century: "XIXe siècle",
    category: "star",
    unesco_name: "Fujisan, lieu sacré et source d'inspiration artistique",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczN4GaFFvDwOoo39gh_l5ngCtHI9FWc0xniHMgArYQTokdnxLwTTuuMFUeJSL-wtEuIW9SmibsomjyIdGFHxpChFbcEZuiS92OyAUt8BQm7uCtvDDxZW0eC06ljjAeZMVt47FLtpnH0wAnDXn2V7A75vnA=w2966-h1978-s-no-gm?authuser=0",
    description: "Écrin préservé niché sur le plateau entre le lac Kawaguchiko et le lac Yamanakako, Oshino Hakkai regroupe huit étangs de résurgence limpides issus de la fonte des neiges du mont Fuji. Filtrées pendant plus de huit décennies à travers les épaisses strates de laves poreuses du volcan, ces eaux atteignent une pureté et une transparence cristallines exceptionnelles, maintenues à une température constante de 13 °C toute l'année. Vénéré depuis le Moyen Âge comme un lieu de purification rituelle (misogi) avant l'ascension sacrée du Fuji-san, le hameau a conservé son charme bucolique traditionnel avec ses vieilles fermes au toit de chaume, ses roues à aubes en bois et ses saules pleureurs se reflétant dans les bassins.",
    visiter: "Déambuler d'étang en étang (notamment Waku-ike, Deguchi-ike et Kagami-ike) pour observer la fascinante clarté de l'eau révélant des fonds rocheux tapissés d'algues émeraudes et de grosses truites arc-en-ciel nageant en suspension. Se désaltérer directement à la fontaine jaillissante en forme de dragon crachant l'eau pure du Fuji. Admirer le reflet parfait du mont Fuji dans le bassin Kagami-ike (« l'étang miroir ») lors des matinées calmes et ensoleillées. Flâner le long des échoppes villageoises proposant des spécialités artisanales arrosées à l'eau de source, comme les nouilles soba fraîches, les galettes de riz soufflé grillées au feu de bois et le kusa mochi à l'armoise cuit sur plaque.",
    link: "https://photos.google.com/share/AF1QipOKa7sY5q9IwYyaNjgeYx1zb7ZhC6prQpD291yo9OZ-jOG6y5VxEPVBkxh1T7KFnw?key=TDJUWTl2SVhxaXU5R1AwVGpvNVVIXzNhelZJbnF3"
  },
  {
    id: "fuji_nakanokura_pass",
    name: "Lac Motosu - Belvédère du Col Nakanokura",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture de Yamanashi",
    subdiv: "Minobu",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.474105,
    lng: 138.575735,
    altitude: 1045,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "Panorama iconique du billet de 1000 yens",
    century: "",
    category: "star",
    unesco_name: "Fujisan, lieu sacré et source d'inspiration artistique",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczO1xRH56hURTiSJPHonupDMufdqMaQTrfgYADXxslz9MMHtbGbBj9wnGXqHC-GBx0GtOtgh_ZTCgVdCFQfdf0LOShIZg75Yhxv5bexgbyvApxuSPCKRvI8rPVCgO41oSXMxddGtzQSjaR-hH2KvTURluA=w2250-h1499-s-no-gm?authuser=0",
    description: "Perché sur les pentes boisées qui dominent la rive nord-ouest du lac Motosu (le plus profond des cinq lacs du Fuji), le belvédère du col Nakanokura constitue l'un des panoramas les plus célèbres et symboliques du Japon. C'est exactement depuis cet éperon rocheux que le photographe Kōyō Okada captura en 1935 son légendaire cliché « Kohan no Haru » (Printemps au bord du lac), immortalisant le mont Fuji se mirant dans les flots cobalt. Cette composition magistrale connut une renommée nationale absolue en devenant l'illustration gravée ornant le dos des billets de 5000 yens, puis de l'actuel billet de 1000 yens en circulation dans tout le pays.",
    visiter: "Emprunter le sentier de randonnée pentu et sinueux serpentant sous les sous-bois de feuillus depuis le bord du lac Motosu (environ trente minutes de marche soutenue). Atteindre la plate-forme en bois aménagée en belvédère à pic pour contempler l'immense cône volcanique se dressant symétriquement au-dessus des eaux bleu nuit du lac. Sortir un billet de 1000 yens de sa poche pour comparer directement l'illustration officielle avec le panorama réel qui se déploie sous ses yeux. Profiter du calme absolu de cette rive sauvage préservée de l'urbanisation, particulièrement magique aux premières lueurs du soleil matinal lorsque les brumes se dissipent sur l'eau.",
    link: "https://photos.google.com/share/AF1QipOKa7sY5q9IwYyaNjgeYx1zb7ZhC6prQpD291yo9OZ-jOG6y5VxEPVBkxh1T7KFnw?key=TDJUWTl2SVhxaXU5R1AwVGpvNVVIXzNhelZJbnF3"
  },
  {
    id: "matsumoto_castle",
    name: "Matsumoto - Château de Matsumoto (Karasu-jō)",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture de Nagano",
    subdiv: "Matsumoto",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.238695,
    lng: 137.969051,
    altitude: 590,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque Azuchi-Momoyama (construit vers 1592-1604)",
    century: "XVIe siècle",
    category: "chateau",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczN-wH08400iBAkTGgyxVt7f35yEnosRohonUXnhwvEu7hhiP-4ca-WO9A5c2tc34xEzy1QSK99nW4vJ1hpbmsaZmYrFHKkP2Mq5pJP0BM1_79mDsnmJIpU1rkpS3namiJi8sblyNFcDp8qBcJCEVRwa4Q=w2966-h2234-s-no-gm?authuser=0",
    description: "Surnommé le « Corbeau noir » (Karasu-jō) en raison de son bardage en bois sombre laqué de noir, le château de Matsumoto est l'un des douze donjons originaux (Tenshu) subsistant au Japon et classé Trésor National. Édifié entre 1592 et 1604 par le clan Ishikawa au cœur des Alpes japonaises, il présente une structure unique de type hirajiro (forteresse de plaine) ceinte d'un triple réseau de douves d'eau limpide alimentées par les sources alpines. Témoin capital de la transition féodale nippone, il juxtapose un donjon guerrier truffé de meurtrières à arquebuses et une délicate aile d'observation de la lune (Tsukimi-yagura) ajoutée en temps de paix vers 1635.",
    visiter: "Traverser le pont rouge arqué franchissant les larges douves peuplées de carpes koï et de cygnes blancs pour admirer les reflets de la façade noire se découpant sur les sommets enneigés des Alpes du Nord. Pénétrer à l'intérieur du donjon d'origine de six étages pour découvrir la charpente massive en cèdre et en pin assemblée sans un seul clou métallique. Gravir les escaliers de bois vertigineux aux marches abruptes inclinées jusqu'à 61 degrés. Observer l'impressionnante collection d'armes à feu d'époque (mousquets teppō, arquebuses et armures de samouraïs), puis atteindre l'étage sommital pour embrasser une vue panoramique circulaire sur les toits de Matsumoto et les cimes environnantes.",
    link: "https://photos.google.com/share/AF1QipOBiQjtWCtuT8t_Ox4TgxcQlm4ofqOLfVj1v2WM96D_XUHLdRFjBK-UNOzxmG2oLw?key=TVZleVgyU01sZzhHcms0TXYzemNoTVRKOFhkWFJn"
  },
  {
    id: "okuhida_hirayu_waterfall",
    name: "Okuhida - Cascade de Hirayu (Hirayu Ōtaki)",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture de Gifu",
    subdiv: "Takayama",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.177787,
    lng: 137.559627,
    altitude: 1315,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "nature",
    era_label: "Site naturel classé (Top 100 des cascades du Japon)",
    century: "",
    category: "cascade",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczOOF_QPj2U6rYpL2K3VKjYJBnoQ5izgTjUHWhBe1SyFL7fvlu1Njkk824VYRcQpVitsFVGOxB3Cy9X6jgf4343dBEqfhd-9TWDzMvrmEuHY1_pr4hMIxGt3lU1hS251d0ZUGnaLDW60PsAIwRn5-FVDAg=w1984-h2635-s-no-gm?authuser=0",
    description: "Surgissant d'une abrupte falaise de basalte volcanique au cœur des forêts d'altitude de la station thermale d'Okuhida Onsengō, la cascade de Hirayu (Hirayu Ōtaki) figure parmi les cent plus belles chutes d'eau du Japon. Haute de soixante-quatre mètres pour six mètres de large, elle est alimentée par les eaux de fonte et les résurgences fraîches du mont Norikura voisin. Selon les légendes guerrières régionales du XVIe siècle, les troupes épuisées du seigneur Takeda Shingen furent guidées vers les sources thermales bienfaisantes de Hirayu par un mystérieux singe blanc apparu près de cette chute d'eau écumante.",
    visiter: "Emprunter le paisible sentier pédestre forestier bordé de torrents tumultueux et de conifères alpins depuis le parking de Hirayu Onsen. Atteindre la plate-forme d'observation en bois située au pied du canyon pour ressentir le souffle puissant de l'air frais et la brumisation vivifiante dégagée par le fracas des flots contre les roches moussues. Admirer la vigueur du rideau d'eau blanche vertical fendant la gorge boisée, particulièrement spectaculaire en été au milieu des frondaisons verdoyantes, flamboyant lors du rougeoiement automnal des érables (kōyō), ou complètement métamorphosé en un gigantesque pilier de glace bleue lors des grands gels d'hiver.",
    link: "https://photos.google.com/share/AF1QipOIJ2YE2gBqnx4TIM4FdLuiNfcq1Yi6pKtvSJwTV_X0VCnOZD-Ufld39Tv-UWjrDQ?key=enh1UHZreXRzeWRlVDJxNDJxbGFsajRhUmM3U3pn"
  },
  {
    id: "takayama_sanmachi_suji",
    name: "Takayama - Quartier Historique de Sanmachi Suji",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture de Gifu",
    subdiv: "Takayama",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.141057,
    lng: 137.259638,
    altitude: 575,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (XVIIe - XIXe siècle)",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczPP60gKj01L9lje_zLAnALqIsQWQUm_PmXfiUgyQR3fIqRvq9_09wpdNv46imbOtYAM3huQoH8xufIGUHoNOP3XbIgY-a2d2yD6DWBSk0MPi1eVkijiwp16zItaQZNUk5Qr5R0tX63lOqJRJ4YJsUXXMg=w2966-h2234-s-no-gm?authuser=0",
    description: "Cœur battant de la vieille ville marchande de Takayama au creux de la province montagnarde de Hida, Sanmachi Suji est un ensemble exceptionnellement préservé de ruelles historiques bordées de machiya (maisons de ville marchandes) en bois sombre datant de l'époque d'Edo. Protégée par son isolement alpin, la cité prospéra grâce au savoir-faire réputé de ses maîtres charpentiers et ébénistes réquisitionnés par la cour impériale. Les façades en treillis de bois ajouré (kōshi), les auvents bas et les rigoles d'eau vive courant le long des pas-de-porte témoignent de l'opulence des marchands de bois, de soie et surtout des grandes brasseries familiales de saké qui font la renommée du quartier.",
    visiter: "Arpenter les trois rues parallèles principales (Kami-Sannomachi, Kami-Ninomachi et Kami-Ichinomachi) au son du clapotis de l'eau claire s'écoulant dans les caniveaux pavés traditionnels. Repérer les imposantes boules d'aiguilles de cèdre (sugidama) suspendues sous les auvents marquant l'entrée des vénérables brasseries de saké pour participer à des dégustations de crus locaux servis dans des coupelles d'ochoko. Déguster de délicieuses brochettes ou sushis de bœuf persillé de Hida (Hida-gyu) préparés à la minute par les étals de rue, chiner des objets en laque sculptée traditionnelle (Hida shunkei), et visiter les cours intérieures ombragées des anciennes demeures marchandes reconverties en galeries d'artisans.",
    link: "https://photos.google.com/share/AF1QipOqFTc9o_f_UUJ0HTPSBzmBgjx83dhRdvcWUQ9rrdxC5e9s09dBYQrqrxawDwaXBw?key=VHczcjVlaVNkdU9pdWJ3ekJLOTcxQjZJTlNsbFRR"
  },
  {
    id: "shirakawago_ogimachi",
    name: "Shirakawa-gō - Village Historique d'Ogimachi (Gasshō-zukuri)",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture de Gifu",
    subdiv: "Shirakawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.258920,
    lng: 136.907130,
    altitude: 500,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo à Meiji (Patrimoine Mondial UNESCO 1995)",
    century: "XVIIIe siècle",
    category: "star",
     unesco_name: "Villages historiques de Shirakawa-go et Gokayama",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczMDcc3BE31AHhnhn3VH9nMLewnfjtsp2LPT2kIfKRTVoDuPp8E1uFSLypg8_wXf2DTfxVvU2oxwyv-7In7HAw5a9ADRAdKktbIUsEQE7TBPbQGlng0Oqsi7SyjvkBFLrPHOoseT36El682DrV48iRkK4g=w2966-h1978-s-no-gm?authuser=0",
    description: "Niché dans la vallée isolée du fleuve Shōkawa au cœur de montagnes sauvages jadis coupées du monde en hiver, Ogimachi est le plus grand village préservé de Shirakawa-gō, inscrit au patrimoine mondial de l'UNESCO depuis 1995. Il est mondialement réputé pour ses spectaculaires demeures paysannes traditionnelles de style gasshō-zukuri (« construites comme des mains en prière »). Dotées de vertigineuses toitures de chaume inclinées jusqu'à 60 degrés pour supporter les mètres de neige poudreuse hivernale sans s'effondrer, ces bâtisses en bois de plusieurs étages hébergeaient de vastes familles patriarcales et abritaient dans leurs combles ventilés d'immenses élevages de vers à soie.",
    visiter: "Prendre de la hauteur en montant au belvédère du château d'Ogimachi (Shiroyama) pour embrasser la vue de carte postale sur l'ensemble du hameau niché entre les rizières verdoyantes et les pentes alpines boisées. Flâner le long des venelles bordées de canaux d'eau de source regorgeant de truites, entre les bâtisses au chaume blond patiné par le temps. Visiter l'intérieur de la maison Wada ou de la maison Nagase pour gravir les échelles de meunier menant aux vastes greniers en charpente d'orme assemblée par des cordages de chanvre. S'imprégner de l'esprit du yui, ce système de solidarité communautaire séculaire où tous les villageois s'unissent pour refaire le chaume d'un toit en une seule journée.",
    link: "https://photos.google.com/share/AF1QipO-9fthuckrHo5lqfqnWJDKX2OiAbRSSIVyLUw0n2_g-OQRylmTLkag1BfDfYWbRQ?key=SXB3Qm1pdHR0dC1Qc2kwdE5tUW4wN1hzVGk2UDR3"
  },
  {
    id: "shirakawago_shirakawa_hachiman",
    name: "Shirakawa-gō - Sanctuaire Shirakawa Hachiman-jinja",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture de Gifu",
    subdiv: "Shirakawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.255001,
    lng: 136.905674,
    altitude: 505,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Nara (fondation vers 708-715)",
    century: "VIIIe siècle",
    category: "religieux",
     unesco_name: "Villages historiques de Shirakawa-go et Gokayama",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczOT_XhWFijb0vWJ6OrCq-jq-BqhmyPKHDR9wzpLLHBdaeCzQ52sggj4e5IoogwHZJDWoFg1f7mMD0xvRLK6FR5KWmf38NmDZOKepo2aFIEhSSyQX5tSjPAV_rn9QMOZwJPRmaCAefLLnNWZrRhO7PVq7g=w2966-h1978-s-no-gm?authuser=0",
    description: "Érigé à l'orée méridionale du village d'Ogimachi au pied de falaises boisées dominées par d'immenses cèdres japonais, le sanctuaire Shirakawa Hachiman-jinja est le gardien spirituel de la vallée de Shirakawa-gō. Fondé selon la tradition orale au début du VIIIe siècle (ère Wadō), il est dédié à Hachiman, protecteur de la communauté contre les calamités et les incendies. Ce lieu saint discret est célèbre dans tout le pays pour être le théâtre annuel du festival Doburoku (Doburoku Matsuri) chaque mois d'octobre, une célébration séculaire où l'on offre aux divinités puis aux pèlerins un saké blanc rustique non filtré, spécialement brassé au sanctuaire selon des méthodes ancestrales.",
    visiter: "Franchir le sobre torii de bois sombre se dressant à l'ombre d'un cèdre géant classé monument naturel pour pénétrer dans la cour sablonneuse et silencieuse du sanctuaire. Admirer la structure en bois vieilli du pavillon Haiden, ornée de tentures blanches portant le blason shinto et entourée d'arbres séculaires aux troncs massifs. Découvrir le petit musée du Doburoku aménagé dans l'enceinte pour comprendre l'histoire et les secrets de fermentation de ce saké rituel laiteux, et observer les maquettes illustrant les danses du lion (shishimai) exécutées par les villageois lors des fêtes automnales en costumes d'époque.",
    link: "https://photos.google.com/share/AF1QipO-9fthuckrHo5lqfqnWJDKX2OiAbRSSIVyLUw0n2_g-OQRylmTLkag1BfDfYWbRQ?key=SXB3Qm1pdHR0dC1Qc2kwdE5tUW4wN1hzVGk2UDR3"
  },
  {
    id: "kanazawa_higashi_chaya",
    name: "Kanazawa - Quartier des Geishas de Higashi Chaya",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture d'Ishikawa",
    subdiv: "Kanazawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.572552,
    lng: 136.666463,
    altitude: 18,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (établi en 1820)",
    century: "XIXe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczM_FfEBfd1rKSwY7e7l8TEQBrIG0VbzMCtUnA_K7WKtrN9LiWeKsml0Bz1mU8-ZPX1Qyf4KNH0HBlZMdyJicdhV9l_uAEZAurtD96nzlepY9MGmS6WEELPB9R4AztLvXCs1zqm43tCkuXrnPDH3wNFJcg=w2966-h1978-s-no-gm?authuser=0",
    description: "Établi officiellement en 1820 par le puissant clan Maeda régnant sur le domaine de Kaga, Higashi Chaya est le plus vaste et prestigieux des quartiers de maisons de thé (chayagai) de Kanazawa. Dévolu aux arts raffinés du spectacle, de la musique au shamisen, de la poésie et de la danse dispensés par les geishas (geiko), le quartier se distingue par son architecture féodale unique : des bâtisses en bois à étage dotées de grilles fines et ajourées appelées kimusuko, dissimulant l'intérieur des salons aux regards des passants tout en laissant passer la lumière. Kanazawa étant le cœur national de l'artisanat de la feuille d'or (kanazawa haku), ce quartier incarne le sommet du raffinement esthétique d'Edo.",
    visiter: "Arpenter l'allée centrale pavée bordée de façades en bois sombre parfaitement alignées et s'imprégner de l'atmosphère feutrée d'autrefois. Pousser les portes de la maison de thé historique Shima, transformée en musée, pour admirer les salons de réception traditionnels aux tatamis dorés, les instruments de musique anciens et le petit jardin intérieur. Visiter la maison Kaikaro ou la boutique d'orfèvrerie Hakuichi pour découvrir une pièce d'or entière tapissée de feuilles d'or et déguster la fameuse glace artisanale enveloppée d'une feuille d'or comestible étincelante. Flâner au crépuscule lorsque les lanternes de papier s'illuminent et que résonne parfois le son étouffé d'un shamisen.",
    link: "https://photos.google.com/share/AF1QipOe497_gZlxHEk4kXngagUk3X4z3IIX6fTII-zbuf_m9_TBFokmB_oXmbA5rIGzqg?key=dVQyQXBrRWdEdWs5WFZQOVZPQi15dmEzeG1reGZn"
  },
  {
    id: "kanazawa_kenrokuen",
    name: "Kanazawa - Jardin Kenroku-en",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture d'Ishikawa",
    subdiv: "Kanazawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.562647,
    lng: 136.663088,
    altitude: 52,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (aménagé du XVIIe au XIXe siècle)",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczMcTUcV22McvMAERDMuW8_6AeAz5q4gx-Ax82R2RM_QKe67-h-ll98Zx9fVv16qoHguEN5Xo6OGyYN5amQku5yhRtYBicuKP_SWnntT37gdz82StlVrHWAdKEeuQ91blTG154u8LFDCmVdRX-guNE9QxA=w2966-h2234-s-no-gm?authuser=0",
    description: "Considéré comme l'un des « Trois Grands Jardins » les plus éblouissants du Japon (avec le Kairaku-en et le Kōraku-en), le Kenroku-en fut façonné pendant près de deux siècles par les seigneurs Maeda successifs à l'extérieur des remparts du château de Kanazawa. Son nom, tiré d'un traité chinois de la dynastie Song, signifie le « Jardin des Six Caractéristiques sublimées », réunissant trois couples de qualités pourtant réputées incompatibles : l'immensité et la réclusion, l'artifice humain et le charme vénérable du temps, la fraîcheur des cours d'eau et la splendeur des panoramas lointains. Pins taillés en nuages, étangs sinueux, ponts de pierre et collines artificielles composent un tableau vivant parfait.",
    visiter: "Admirer la célèbre lanterne Kotoji-tōrō à deux pieds de pierre inégaux dressée au bord de l'étang Kasumiga-ike, devenue l'emblème graphique de Kanazawa. Contempler l'ingénieux pin Karasaki-matsu aux branches étalées au ras de l'eau, soutenu en automne et en hiver par le yukizuri, une armature conique magistrale de cordages de paille le protégeant des lourdes neiges humides. Observer le jet d'eau naturel Funsui, considéré comme la plus ancienne fontaine mécanique du Japon fonctionnant par simple pression hydrostatique. Parcourir les sentiers moussus ombragés, traverser le pont des oies sauvages (Gankō-bashi) et contempler la vue panoramique plongeant sur les collines d'Utatsuyama et la plaine côtière.",
    link: "https://photos.google.com/share/AF1QipOe497_gZlxHEk4kXngagUk3X4z3IIX6fTII-zbuf_m9_TBFokmB_oXmbA5rIGzqg?key=dVQyQXBrRWdEdWs5WFZQOVZPQi15dmEzeG1reGZn"
  },
  {
    id: "kanazawa_shiguretei",
    name: "Kanazawa - Pavillon de Thé Shigure-tei (Kenroku-en)",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture d'Ishikawa",
    subdiv: "Kanazawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.561926,
    lng: 136.661664,
    altitude: 50,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (construit vers 1676, reconstruit en 2000)",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczO_T-kjaiLg6ppxxI4HTMFjnqze_oPHzLbybKgPaVUZAM532Z4LNAz42D1SeeIo4tx42oN9XFtz6jcwUbPyIV2devVX0t5NxGqJ4S7rnDUGSSqmrrFL6mlueTuLn6JnScg4gqCaNu0PmIfMTof4k89cEg=w896-h1190-s-no-gm?authuser=0",
    description: "Édifié à l'origine en 1676 par Maeda Tsunanori lors de la création de la villa Renchitei qui préfigura le jardin Kenroku-en, le Shigure-tei est un joyau d'architecture sukiya-zukuri dédié à la cérémonie du thé. Épargné par les transformations militaires et fidèlement restitué sur ses fondations d'origine en l'an 2000, ce pavillon en bois noble de cèdre et cloisons coulissantes en papier washi s'ouvre généreusement sur un ravissant jardin privé d'eau et de mousses. Les seigneurs féodaux venaient y goûter l'art délicat du thé tout en écoutant le doux crépitement des averses passagères (shigure) sur la toiture d'écorce de cyprès.",
    visiter: "Retirer ses chaussures à l'entrée de la bâtisse pour fouler les nattes de tatami impeccables parfumées à la paille de jonc. S'asseoir en tailleur ou à genoux face aux cloisons entièrement ouvertes sur la terrasse en bois surplombant le jardin de mousses verdoyantes et le petit étang bordé de rocailles. Participer à la dégustation rituelle d'un bol de thé vert matcha fouetté ou de sencha de première récolte, accompagné d'une pâtisserie fraîche traditionnelle (wagashi) sculptée selon les motifs floraux de la saison en cours. Admirer les détails épurés des boiseries artisanales, les peintures de rouleaux suspendues dans l'alcôve tokonoma et la sérénité absolue qui émane de ce havre préservé.",
    link: "https://photos.google.com/share/AF1QipOe497_gZlxHEk4kXngagUk3X4z3IIX6fTII-zbuf_m9_TBFokmB_oXmbA5rIGzqg?key=dVQyQXBrRWdEdWs5WFZQOVZPQi15dmEzeG1reGZn"
  },
  {
    id: "kanazawa_shrine",
    name: "Kanazawa - Sanctuaire Kanazawa-jinja",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture d'Ishikawa",
    subdiv: "Kanazawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.560607,
    lng: 136.662745,
    altitude: 53,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (fondation en 1794)",
    century: "XVIIIe siècle",
    category: "religieux",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczO2GtPbJpZ7-EgY24ckemQqbCqZurRDajCWrsI604Ecxb4shDUJbTxKpWcz5BDzjl0RJakIh62MLxQuwT6TL_nbQ2dDLhrFnIw1JCTkUZItlMpb_zxE8QdoBdb0oSyISnykJTpaIcP1AikIe8Usv2lfTA=w2966-h1978-s-no-gm?authuser=0",
    description: "Fondé en 1794 par le onzième seigneur de Kaga, Maeda Harunaga, à l'extrémité méridionale du jardin Kenroku-en, le sanctuaire Kanazawa-jinja fut initialement conçu pour protéger l'école médicale et littéraire du domaine féodal (Meirindō). Il est consacré à Sugawara no Michizane (Tenjin), vénéré dans tout l'archipel comme le dieu des lettres, des études et de la réussite aux examens, ainsi qu'à la déesse blanche du mont Hakusan. L'enceinte abrite également le puits légendaire Kinjō Reitaku (« le marais de l'or étincelant ») où le paysan Imohori Tōgoro lava jadis ses ignames sauvages et y découvrit de la poussière d'or natif, donnant son nom à la ville : Kanazawa (« le marais doré »).",
    visiter: "Passer sous l'élégant torii vermillon bordé de lanternes votives et saluer les statues de taureaux sacrés couchés (messagers de Tenjin) dont le museau poli de bronze est caressé par les fidèles pour attirer la sagesse et la clarté d'esprit. Découvrir la source sacrée Kinjō Reitaku protégée par une charmille hexagonale de pierre et de bois, berceau toponymique mythique de Kanazawa. Observer les milliers d'amulettes et de plaques votives de bois (ema) suspendues par les étudiants préparant leurs concours universitaires. Pénétrer dans le sanctuaire secondaire adjacent de Shiranohebi-sha abritant un kami serpent blanc invoqué pour la prospérité financière et la bonne fortune des entreprises.",
    link: "https://photos.google.com/share/AF1QipOe497_gZlxHEk4kXngagUk3X4z3IIX6fTII-zbuf_m9_TBFokmB_oXmbA5rIGzqg?key=dVQyQXBrRWdEdWs5WFZQOVZPQi15dmEzeG1reGZn"
  },
  {
    id: "kanazawa_nagamachi_district",
    name: "Kanazawa - Quartier Féodal des Samouraïs de Nagamachi",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture d'Ishikawa",
    subdiv: "Kanazawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.563770,
    lng: 136.650748,
    altitude: 15,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (XVIIe - XIXe siècle)",
    century: "XVIIe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczMeWn2AWIsfLcfCFMuX77BRCc82Yq_4ObJxeoGcVM3U5lSeuLgFyTNcVDeKq2aulPHIlxx5Ig00SrIW-daAHgHgNzr588QxSS5fMaJ7Az523yRfLdD2QSid9OwyBPOGdxKfSFI-86dfgpK9VOpD_fdhRw=w2966-h1978-s-no-gm?authuser=0",
    description: "Situé au pied des anciennes douves occidentales du château de Kanazawa, Nagamachi est le quartier historique le plus authentique où résidaient autrefois les samouraïs de rang moyen et supérieur servant le clan Maeda. Tracé selon un plan labyrinthique destiné à dérouter d'éventuels assaillants, le quartier est célèbre pour ses ruelles pavées bordées de dobei, de hauts murs d'enceinte en terre crue et paille recouverts de tuiles plates protégeant les demeures seigneuriales des regards. Le long des ruelles coule le canal Onosho, le plus ancien canal d'irrigation de la ville creusé au XVIe siècle pour acheminer vivres, bois de construction et matières premières depuis la côte vers la forteresse.",
    visiter: "Flâner le long des ruelles sinueuses pavées de galets en longeant les murets de pisé ocre coiffés de tuiles grises. Observer en période hivernale les komokake, ces nattes de paille tressée fixées le long des murs pour empêcher le gel et la fonte de la neige lourde de détériorer la terre séchée séculaire. Longer le cours d'eau du canal Onosho en observant les passerelles de pierre privées permettant aux habitants d'accéder à leurs cours intérieures. Pousser les lourdes portes en bois des cours ouvertes au public pour contempler les avant-toits ouvragés, les lanternes de pierre et l'ordonnancement rigoureux de cet ancien monde guerrier figé dans le temps.",
    link: "https://photos.google.com/share/AF1QipOe497_gZlxHEk4kXngagUk3X4z3IIX6fTII-zbuf_m9_TBFokmB_oXmbA5rIGzqg?key=dVQyQXBrRWdEdWs5WFZQOVZPQi15dmEzeG1reGZn"
  },
  {
    id: "kanazawa_nomura_residence",
    name: "Kanazawa - Résidence de Samouraï de la Famille Nomura (Nomura-ke)",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture d'Ishikawa",
    subdiv: "Kanazawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.564005,
    lng: 136.650071,
    altitude: 16,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (XVIe - XIXe siècle)",
    century: "XVIe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczPTV2Dsv3L4CtWJthCpI_ZNIdqPa7Bs6XSwsIj7Tf0Z29SbHSvAvB4Y36QILnB4pmgzERd5e_z9CkAuqUVrwdJFG_qYKKq0QMDvIiCkLn1xgMYNYZ7sT0IyJt7idASfcX-8TRdrdrtbKB4ta37HO63qlg=w1757-h2635-s-no-gm?authuser=0",
    description: "Véritable chef-d'œuvre du patrimoine résidentiel féodal situé au cœur du quartier de Nagamachi, la demeure Nomura-ke appartenait à une lignée d'éminents officiers samouraïs qui servirent fidèlement les seigneurs Maeda pendant onze générations, depuis l'attribution du domaine à Nomura Denbei Nobuhide au XVIe siècle. La bâtisse allie la rigueur martiale d'une lignée de guerriers d'élite au raffinement suprême des arts décoratifs : plafonds ouvragés en cyprès hinoki de haute futaie, paravents peints à l'or fin par l'artiste officiel de la cour Maeda, et armure complète de samouraï exposée dans l'antichambre. Son jardin intérieur miniature, primé mondialement, condense la quintessence de la philosophie paysagère japonaise.",
    visiter: "Découvrir dès l'entrée la formidable armure complète de samouraï en fer laqué et soie portée par le maître des lieux sous l'ère féodale. Parcourir les salons bordés de tatamis pour admirer les cloisons fusuma décorées de peintures paysagères à l'encre de Chine et dorures signées par l'école Kanō. S'asseoir au bord de l'engawa (galerie en bois ouverte) pour contempler l'extraordinaire jardin d'eau miniature : un ruisseau serpentant au pied des rochers moussus, enjambé d'un pont de pierre incurvé et d'une cascade murm древante alimentant un bassin peuplé de carpes koï multicolores nageant jusqu'au ras du plancher. Monter à l'étage pour déguster un thé matcha dans le pavillon de thé suspendu au-dessus de la canopée du jardin.",
    link: "https://photos.google.com/share/AF1QipOe497_gZlxHEk4kXngagUk3X4z3IIX6fTII-zbuf_m9_TBFokmB_oXmbA5rIGzqg?key=dVQyQXBrRWdEdWs5WFZQOVZPQi15dmEzeG1reGZn"
  },
  {
    id: "kanazawa_takada_house",
    name: "Kanazawa - Ancienne Demeure de Samouraï Takada (Takada-ke)",
    country: "Japon",
    region_admin: "Chūbu",
    department: "Préfecture d'Ishikawa",
    subdiv: "Kanazawa",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 36.565112,
    lng: 136.649320,
    altitude: 17,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "moderne",
    era_label: "Époque d'Edo (XVIIIe - XIXe siècle)",
    century: "XVIIIe siècle",
    category: "star",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczNb5lK0FCd9NfIeMxLsQl2rbp3AyWdcuRd7QytGcCD1EW4iCPspcQUPBBkZb1e-e2yPS19z5aILGcxuh2Qado2LCeCvGyNmN9RghQZBFfg6gpeG4eNkm3b1q5TvZ0tsiyR4Yi80ZyqWsozbMT670Wt6-A=w2966-h1978-s-no-gm?authuser=0",
    description: "Témoignage historique précieux du mode de vie des vassaux militaires de rang moyen, la maison de la famille Takada se dresse discrètement au cœur du quartier féodal de Nagamachi. Bien que le bâtiment d'habitation principal ait disparu avec le temps, le domaine conserve intacte sa splendide porte d'entrée seigneuriale à avant-corps (Nagayamon) ainsi que les logements annexes réservés aux domestiques, palefreniers et gardes du corps armés. Restauré avec un grand souci d'authenticité pédagogique, le site met en valeur la structure défensive des portes de samouraïs et abrite un superbe jardin traditionnel en promenade conçu pour le ressourcement et la contemplation.",
    visiter: "Franchir l'imposante porte d'entrée Nagayamon aux lourds vantaux de chêne cerclés de ferronneries et aux fenêtres à barreaux de bois destinées à la surveillance de la ruelle. Découvrir les quartiers des serviteurs restaurés présentant des outils de la vie quotidienne, des uniformes et des maquettes expliquant l'architecture des résidences guerrières d'Edo. Parcourir le sentier circulaire en dalles de pierre qui serpente à travers le ravissant jardin paysager d'inspiration chisen-kaiyū-shiki : admirer les étangs étagés alimentés par l'eau vive du canal Onosho, les bosquets d'érables, les bambous nains et les arrangements minéraux offrant une quiétude absolue à l'écart du flux touristique.",
    link: "https://photos.google.com/share/AF1QipOe497_gZlxHEk4kXngagUk3X4z3IIX6fTII-zbuf_m9_TBFokmB_oXmbA5rIGzqg?key=dVQyQXBrRWdEdWs5WFZQOVZPQi15dmEzeG1reGZn"
  },
   {
    id: "kamakura_kotoku_in",
    name: "Kamakura - Temple Kōtoku-in (Grand Bouddha Daibutsu)",
    country: "Japon",
    region_admin: "Kantō",
    department: "Préfecture de Kanagawa",
    subdiv: "Kamakura",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.316722,
    lng: 139.535707,
    altitude: 18,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Kamakura (fondation vers 1252)",
    century: "XIIIe siècle",
    category: "religieux",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczNSsO43hEowvejKb1E0gvpFTIj_6Qd5-vNydIudhrMt0CFnRnZed51V5BEpz8mdwsufhEArLwhy9t6WpvoiqI0CqYr0WLOHRT0hGkdzMSUL3Qx7SGQCARTxRk12iOadc7Ul3Ai5vKwWpOR1DL_KWYAtaw=w1757-h2635-s-no-gm?authuser=0",
    description: "Le temple bouddhiste Kōtoku-in, affilié à la branche Jōdo-shū (terre pure), abrite l'une des icônes les plus célèbres du Japon féodal : le Grand Bouddha de Kamakura (Kamakura Daibutsu). Cette colossale statue de bronze d'Amitābha, haute de plus de onze mètres et pesant près de cent vingt et une tonnes, fut coulée à partir de 1252 sous le shogunat de Kamakura. Initialement abritée au sein d'un immense hall en bois (Daibutsuden), la structure fut emportée à maintes reprises par des tempêtes, des incendies et finalement par le grand tsunami dévastateur de 1498 (période Muromachi). Depuis lors, le colosse trône majestueusement en plein air contre un rideau de collines boisées, son visage serein et penché vers l'avant conférant un sentiment de quiétude bienveillante qui a traversé les siècles sans jamais être réenfermé entre quatre murs.",
    visiter: "Traverser la porte d'entrée Niōmon ornée de ses deux gardiens célestes sculptés, puis s'avancer dans la vaste cour de gravier clair dominée par la silhouette massive du Bouddha de bronze. Admirer la finesse du drapé plissé de la toge, les traces subsistantes de dorure à la feuille d'or près des oreilles et les grandes fleurs de lotus en bronze fondues à l'époque d'Edo. Contourner la statue pour observer les volets d'aération ménagés dans le dos du colosse et, si l'accès est ouvert, pénétrer à l'intérieur même du corps creux du Bouddha pour observer l'incroyable technique d'assemblage des plaques de bronze médiévales. Ne pas manquer, suspendues à l'arrière, les gigantesques sandales de paille (waraji) tressées et offertes régulièrement par des écoliers pour symboliser la marche protectrice de la divinité à travers le pays.",
    link: "https://photos.google.com/share/AF1QipOeq0r9ChAdmfv81FKQ1TYDpks6V2hx0qOiJ_7Qtst8lg6zkp0W8pY8Y1VK9FRysg?key=WFNCSTZDRjNmZElFdm95OGl4UzROZ2s5MTNLRUFR"
  },
  {
    id: "kamakura_hase_dera",
    name: "Kamakura - Temple Hase-dera (Hase Kannon)",
    country: "Japon",
    region_admin: "Kantō",
    department: "Préfecture de Kanagawa",
    subdiv: "Kamakura",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.312572,
    lng: 139.533257,
    altitude: 32,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Nara (fondation en 736)",
    century: "VIIIe siècle",
    category: "religieux",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczNfQSDIDJhMD8GM2fcguqITMvS0QDOOCj_ujUBkH-zA7xHc46Fw3M71MiIqymCwlvznXPR4V_eNWHQ00NImzAUwRFpBNNvjU8FHwzBrfDIA3sMdcL1QnBhXk25e5wz-3e_7zeDSb6ThN2HQ0zPCG7HsrQ=w2489-h1660-s-no-gm?authuser=0",
    description: "Édifié en 736 à flanc de colline boisée face à l'océan, le temple Hase-dera compte parmi les plus anciens sanctuaires bouddhistes de Kamakura, rattaché à la secte Jōdo. Le lieu est célèbre dans tout l'archipel pour abriter une monumentale statue de Kannon aux onze têtes (Jūichimen Kannon), haute de neuf mètres et sculptée dans un unique tronc de camphrier doré à la feuille. Selon la pieuse légende, le moine Tokudō tailla deux statues identiques dans le même arbre sacré en 721 : l'une fut installée au temple Hasedera de Nara, tandis que la seconde fut jetée à la mer pour guider les âmes, venant s'échouer quinze ans plus tard sur la plage de Yuigahama, tout près d'ici. Le complexe s'étage en plusieurs terrasses végétales où se côtoient jardins d'eau, étangs de carpes koï, bosquets d'hortensias réputés et cavités rocheuses sacrées dédiées à Benzaiten.",
    visiter: "Franchir la porte Sanmon reconnaissable à sa grande lanterne rouge et flâner le long des étangs étagés du jardin bas peuplés de carpes koï. Gravir les escaliers de pierre ombragés menant à la terrasse intermédiaire pour saluer les milliers de petites statuettes votives en pierre de Jizō Bosatsu (protecteur des enfants et des âmes voyageuses), coiffées de bonnets de laine rouge. Monter ensuite sur l'esplanade supérieure pour se recueillir devant la statue de la Kannon aux onze visages dans le pavillon principal Kannon-dō. Profiter de la terrasse panoramique offrant une vue dégagée sur les toits de Kamakura, la baie de Sagami et la plage de Yuigahama. Enfin, allumer une bougie votive dans la galerie rocheuse obscure de Benten-kutsu creusée à même la falaise, où se dissimulent de multiples représentations de Benzaiten et de ses fidèles disciples.",
    link: "https://photos.google.com/share/AF1QipOeq0r9ChAdmfv81FKQ1TYDpks6V2hx0qOiJ_7Qtst8lg6zkp0W8pY8Y1VK9FRysg?key=WFNCSTZDRjNmZElFdm95OGl4UzROZ2s5MTNLRUFR"
  },
  {
    id: "kamakura_tsurugaoka_hachimangu",
    name: "Kamakura - Sanctuaire Tsurugaoka Hachimangū",
    country: "Japon",
    region_admin: "Kantō",
    department: "Préfecture de Kanagawa",
    subdiv: "Kamakura",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.325689,
    lng: 139.556155,
    altitude: 15,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Kamakura (fondation en 1180)",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczPkHDjFZhvKkwiJsgU0SMGJ7sjMwTx2ALhuGvYF7aO098aYvQvZ2a2K9XLz_HwyxrynDUeDCpVQu87WNDTy2e0_bI95yFhSsCx7lj7REtM4CHnnAaNoiqybHJGwFgj2X3pF9Kx9AkMFXss81SUPJSo6NA=w1984-h2635-s-no-gm?authuser=0",
    description: "Cœur spirituel, politique et historique de l'ancienne capitale shogunale, le Tsurugaoka Hachimangū est le plus important sanctuaire shinto de Kamakura. Fondé en 1063 sur la côte par Minamoto no Yoriyoshi puis transféré et magnifié à son emplacement actuel en 1180 par son descendant Minamoto no Yoritomo, il est consacré à Hachiman, divinité tutélaire de la guerre, de la famille impériale et du puissant clan Minamoto. Structuré selon un axe nord-sud monumental (le Wakamiya Ōji) qui relie directement le sanctuaire à l'océan Pacifique, le domaine a été le théâtre d'événements majeurs du Moyen Âge nippon, notamment l'assassinat en 1219 du troisième shogun Minamoto no Sanetomo. Ses imposants pavillons vermillon, adossés au mont Daijin, incarnent la synthèse parfaite entre la solennité guerrière du premier bakufu et l'élégance rituelle shinto.",
    visiter: "Emprunter la longue allée centrale bordée de cerisiers (Dankazura) menant au troisième grand torii vermillon marquant l'entrée sacrée. Franchir le pont arqué Taiko-bashi et contempler les deux grands étangs Genpei parsemés de fleurs de lotus en été et reliés par de petits îlots pittoresques. Découvrir la scène rituelle Maiden au bas de la colline, où eurent lieu les légendaires danses de Dame Shizuka, avant d'attaquer la grande volée de soixante et une marches en pierre. Observer sur la gauche le jeune rejeton issu de l'arbre millénaire (le ginkgo géant tombé lors d'une tempête en 2010), puis se recueillir devant le grand pavillon Hongū (Jōgū) aux frises sculptées flamboyantes et aux tentures impériales. Visiter le musée des trésors du sanctuaire et flâner sur l'allée équestre où se déroulent chaque automne les spectaculaires tirs à l'arc à cheval (yabusame).",
    link: "https://photos.google.com/share/AF1QipOeq0r9ChAdmfv81FKQ1TYDpks6V2hx0qOiJ_7Qtst8lg6zkp0W8pY8Y1VK9FRysg?key=WFNCSTZDRjNmZElFdm95OGl4UzROZ2s5MTNLRUFR"
  },
   {
    id: "kamakura_zeniarai_benzaiten",
    name: "Kamakura - Sanctuaire Zeniarai Benzaiten Ugafuku-jinja",
    country: "Japon",
    region_admin: "Kantō",
    department: "Préfecture de Kanagawa",
    subdiv: "Kamakura",
    continent: "Asie",
    flag: "🇯🇵",
    lat: 35.325797,
    lng: 139.542118,
    altitude: 55,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque de Kamakura (fondation en 1185)",
    century: "XIIe siècle",
    category: "religieux",
    counts: {},
    image: "https://lh3.googleusercontent.com/pw/AP1GczPBQw6yHGbYk6K4_oJYbN6S-vEVgw7ReSBF0wte-P80Gap7KojEtXM9ntgbLQ5GUKnmcRLsFd0OUKJeoadn9WvUHiE4lEy84EarR4MizfVgoWuagm9Vc0DOYVQQICpcPaCiV-1zObyAIJVKHJLL0rQTwQ=w2489-h1660-s-no-gm?authuser=0",
    description: "Niché au creux des collines boisées occidentales de Kamakura, le sanctuaire Zeniarai Benzaiten Ugafuku-jinja offre une expérience mystique saisissante, débutant dès son entrée : un long tunnel taillé à même la roche qui débouche sur une clairière encaissée bordée de parois abruptes et de centaines de torii en bois. Fondé en 1185 par le premier shogun Minamoto no Yoritomo à la suite d'un songe prémonitoire envoyé par le dieu serpent Ugafukujin, ce lieu saint présente la particularité rare d'avoir préservé un syncrétisme spirituel complet (shinbutsu shūgō) associant la divinité shinto autochtone à Benzaiten, déesse bouddhiste de l'éloquence, des arts et de la fortune. Au cœur du complexe s'ouvre une grotte naturelle obscure d'où sourd une eau sacrée réputée miraculeuse, attirant depuis plus de huit siècles fidèles, marchands et pèlerins venus accomplir le célèbre rite de purification des pièces de monnaie.",
    visiter: "Franchir le tunnel rocheux percé dans la falaise et passer sous la succession serrée de torii votifs offerts par les dévots. Se procurer un petit panier d'osier, une bougie et de l'encens au pavillon d'accueil avant de pénétrer dans la caverne sacrée (Okumiya). Placer sa monnaie (pièces ou billets) dans le tamis d'osier et l'arroser à l'aide des longues louches en bambou avec l'eau de source sacrée (Zeniarai-mizu) : la tradition promet que l'argent purifié et dépensé avec sagesse reviendra multiplié à son propriétaire. Découvrir les petits autels secondaires disséminés contre la paroi de grès moussue, les étals de talismans (omamori) dédiés à la prospérité financière, et s'imprégner de l'atmosphère intemporelle de cette combe secrète avant de poursuivre la marche vers les sentiers de randonnée de Genjiyama.",
    link: "https://photos.google.com/share/AF1QipOeq0r9ChAdmfv81FKQ1TYDpks6V2hx0qOiJ_7Qtst8lg6zkp0W8pY8Y1VK9FRysg?key=WFNCSTZDRjNmZElFdm95OGl4UzROZ2s5MTNLRUFR"
  },
   {
    id: "tokyo_quartier_shibuya",
    name: "Tokyo - Quartier de Shibuya & Carrefour Scramble",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 18,
    is_island: true,
island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Mégalopole Moderne & Épicentre Urbain",
    century: "XXIe siècle",
    category: "star",
    lat: 35.659652,
    lng: 139.700588,
    image: "https://lh3.googleusercontent.com/pw/AP1GczM37nwaZBOnuR6Z0xDT4u2NkpWqFUe0ZYytSGm03l2JvHIvdHDNXeBS-RV69G04Xpd0AJ-_C8PECyqFtDfEP8dUPyzupq8sEBvhdrdiiVfC4mvSVA2bszcMZVr_yzKZG725mxjMp5cDNqu0_F8iU4-K3w=w1379-h919-s-no-gm?authuser=0",
    description: "Épicentre incandescent de la modernité tokyoïte et carrefour piétonnier le plus célèbre, dense et traversé au monde, le quartier de Shibuya incarne la pulsation vitale de la capitale japonaise à son paroxysme d'intensité urbaine. Déployé autour de son immense complexe ferroviaire drainant quotidiennement des millions de voyageurs, le secteur est mondialement réputé pour son spectaculaire « Scramble Crossing », intersection géante où le trafic automobile s'interrompt simultanément dans toutes les directions pour laisser déferler une marée humaine compacte de plus de trois mille personnes à chaque passage au feu vert. Ce ballet cinétique parfaitement ordonné et hypnotique se déroule sous le regard scintillant d'écrans géants cathodiques diffusant sans relâche clips musicaux et réclames futuristes, encadrés par des façades commerciales monumentales telles que le célèbre cylindre de mode du Shibuya 109. Véritable creuset des avant-gardes vestimentaires, des tendances musicales et des innovations de la jeunesse nippone, le quartier juxtapose l'effervescence high-tech de ses boulevards bordés de gratte-ciel récents à l'intimité feutrée de ses ruelles adjacentes ombragées de bars musicaux et de minuscules comptoirs de restauration, composant une fresque sociologique et architecturale qui fascine les observateurs du monde entier.",
    visiter: "La découverte commence dès la sortie emblématique « Hachikō-guchi » de la gare de Shibuya, où les visiteurs s'arrêtent traditionnellement devant la célèbre statue en bronze du chien Hachikō, point de ralliement mythique de la métropole commémorant la fidélité absolue de l'animal attendant son maître défunt chaque soir dans les années 1920. S'élancer ensuite au cœur du carrefour diagonal constitue une expérience sensorielle inoubliable : on se fond dans ce flot continu de passants, enveloppé par les jingles électroniques, les annonces sonores et les faisceaux lumineux des panneaux publicitaires géants qui embrasent la place dès la tombée du jour. Pour embrasser ce spectacle d'en haut, les baies vitrées de la terrasse suspendue du Shibuya Sky ou les étages des cafés environnants offrent des panoramas plongeants saisissants sur l'incroyable chorégraphie des parapluies les jours de pluie. La flânerie se prolonge à travers les pentes animées de Center-Gai, rue piétonne jalonnée de boutiques de disques vinyles, de magasins d'électronique et de karaokés vertigineux, avant de s'engager vers les dédales plus calmes de Dōgenzaka et les passerelles aériennes ultramodernes reliant les nouveaux complexes de Shibuya Scramble Square et Miyashita Park.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_ameyoko_market",
    name: "Tokyo - Marché Populaire d'Ameyoko (Ueno)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 6,
    is_island: true,
island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Shōwa & Mémoire Populaire d'Après-Guerre (1945)",
    century: "XXe siècle",
    category: "star",
    lat: 35.709955,
    lng: 139.774493,
    image: "https://lh3.googleusercontent.com/pw/AP1GczO50C7Ekd1JdS95F3pbbwaTzJzd1V1wc3g6vsD-FYSA7Glk6Nu7mTIWMcTuX0_blVwKohuKR-ROSF-kw099hMOMAjLwguDUcIKjgdsujMoB16utkNSDOOLp53SKqqdGNdQMZXvJO8kuMHDyZ4sx6Z8oUg=w692-h919-s-no-gm?authuser=0",
    description: "Artère commerçante vibrante et tumultueuse courant à ciel ouvert directement sous les viaducs ferroviaires surélevés reliant les gares d'Ueno et d'Okachimachi, la rue marchande d'Ameyoko (Ameya-Yokochō) constitue l'un des ultimes et plus authentiques témoins du Tokyo populaire de l'après-guerre. Née sur les décombres de 1945 sous la forme d'un marché noir informel où les Tokyoïtes affamés venaient échanger du sucre brut et acheter des friandises artisanales (ameya) ainsi que des surplus de rations et des denrées américaines (Amerika-yokocho) débarquées par les troupes d'occupation, cette venelle étroite de près de cinq cents mètres a su préserver son effervescence brute et marchande. Bordée de centaines d'échoppes bariolées serrées les unes contre les autres sous le grondement régulier des trains de la ligne Yamanote passant au-dessus des têtes, elle dégage une atmosphère unique de souk asiatique où résonnent les apostrophes gutturales rythmées des marchands haranguant la foule à grands cris (kakegoe). Véritable bazar à ciel ouvert où se côtoient produits de la mer étalés sur glace, fruits exotiques tranchés, vêtements d'armée, cosmétiques dégriffés et épices orientales, Ameyoko incarne la résilience joyeuse, populaire et cosmopolite du vieux quartier traditionnel de Shitamachi.",
    visiter: "La déambulation dans cette artère pittoresque s'effectue au coude-à-coude dans une ambiance sonore et olfactive électrisante, rythmée par les cris traditionnels des poissonniers proposant à la criée thon rouge frais, saumon séché, crabes géants d'Hokkaidō et algues nori à prix bradés. Les visiteurs s'arrêtent devant les marchands de confiseries pour assister au spectacle du vendeur de chocolat qui remplit des sacs entiers à ras bord en scandant des formules d'encouragement théâtrales jusqu'à ce que la pile menace de s'effondrer. Les étals de street-food invitent à une halte gourmande spontanée sur le pouce pour déguster des brochettes de fruits frais glacés, des takoyaki croustillants fumants, des brochettes yakitori grillées au charbon de bois ou des bols de ramen servis sur de modestes tabourets en plastique calés sous les arcades de béton ferroviaires. En s'enfonçant dans les sous-sols du bâtiment Ameyoko Center Building, on découvre un incroyable marché souterrain asiatique regorgeant d'ingrédients rares, d'épices chinoises, de poissons vivants et de condiments d'Asie du Sud-Est, offrant une immersion sensorielle dépaysante à mille lieues des galeries aseptisées des grands magasins de la capitale.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_skytree",
    name: "Tokyo - Tour Tokyo Skytree (Sumida)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 634,
    is_island: true,
island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Prouesse Technologique & Néo-Futurisme (2012)",
    century: "XXIe siècle",
    category: "star",
    lat: 35.710795,
    lng: 139.810598,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMch_gAw2o3J5Ua_tQYAFbjiq1mU3u8KpFxonCd-q3B_lEQt5C0fpuqbwg93c_bmvNB6LTloQca_o-CVN3PRu-ZtZh0STuSCpBteXMi-pEXOHuyhKnXre2byepbn171SfBa-GIhHdPkf2rDmRg2v0TOdQ=w1455-h919-s-no-gm?authuser=0",
    description: "Flèche titanesque fendant l'azur tokyoïte au cœur de l'arrondissement de Sumida, la Tokyo Skytree s'élève à la hauteur vertigineuse de 634 mètres, ce qui en fait la plus haute tour de transmission autoportante du monde et la troisième plus haute structure artificielle de la planète. Inaugurée en mai 2012 pour relayer la télédiffusion numérique au-dessus des gratte-ciel de la mégapole en remplacement de la vénérable Tour de Tokyo devenue trop basse, elle constitue une prouesse d'ingénierie parasismique d'avant-garde. Sa silhouette néo-futuriste immaculée d'une blancheur bleutée subtile (Aijiro) fusionne la modernité technologique la plus poussée avec les canons géométriques de l'art traditionnel nippon : sa base triangulaire au sol se métamorphose progressivement en une forme cylindrique parfaite au sommet selon les courbes délicates du sabre de samouraï (sori) et du galbe des colonnes de temples anciens (mukuri). Dotée d'un pilier central en béton armé (shinbashira) structurellement désolidarisé de l'armature métallique extérieure selon le principe antisismique séculaire des pagodes à cinq étages, la tour est conçue pour dissiper jusqu'à 50 % de l'énergie des séismes majeurs, incarnant le phare technologique et protecteur de la baie de Tokyo.",
    visiter: "L'ascension vers les cieux s'effectue à bord d'ascenseurs ultra-rapides et silencieux filant à six cents mètres par minute, décorés de panneaux muraux évoquant les quatre saisons tokyoïtes, pour déboucher en cinquante secondes sur le premier observatoire du Tembo Deck situé à 350 mètres d'altitude. Depuis cette immense rotonde vitrée panoramique sur trois niveaux, le regard embrasse un panorama étourdissant à trois cent soixante degrés sur l'océan infini des toits de Tokyo, les méandres de la rivière Sumida et, par temps clair, la silhouette majestueuse et enneigée du mont Fuji se découpant sur l'horizon lointain. Les visiteurs en quête de sensations fortes testent leur aplomb sur la célèbre section de plancher de verre transparent (Glass Floor), contemplant le vide vertigineux de l'armature d'acier sous leurs semelles. Un second ensemble d'ascenseurs transparents hisse ensuite les voyageurs jusqu'à la Tembo Galleria à 450 mètres de hauteur, où une rampe tubulaire en spirale de verre suspendue dans les airs mène jusqu'au point culminant accessible de Sorakara Point (451,2 mètres), offrant l'impression saisissante de marcher littéralement au milieu des nuages au-dessus de la plus grande agglomération du globe.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_pokemon_center_skytree",
    name: "Tokyo - Pokémon Center Skytree Town (Solamachi)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 15,
    is_island: true,
island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Pop Culture Vidéoludique (2016)",
    century: "XXIe siècle",
    category: "star",
    lat: 35.710659,
    lng: 139.812873,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNgUWb9YHFeW1HxXyXwM-Q5gtxN_V0arOIF6Y-pFSEKA842nHlxEY0N1lfHyFzsaWg5EERLsSwJJ9HdHsXpSogEV75nWaGpv-iMhJDlXfp9htf6hcb1_ugr95O6zW5Ln_OoRqgoiDjx8UysHOekaescmw=w692-h919-s-no-gm?authuser=0",
    description: "Temple thématique emblématique de la culture vidéoludique contemporaine et sanctuaire officiel de la franchise de divertissement la plus lucrative et populaire de l'histoire humaine, le Pokémon Center Skytree Town déploie son univers féerique au quatrième étage du vaste complexe commercial Tokyo Solamachi, directement au pied de la Tokyo Skytree. Ouverte à l'été 2016 pour célébrer les vingt ans de la saga créée par Satoshi Tajiri, cette enseigne officielle se singularise par son parrainage exclusif placé sous l'égide du légendaire Pokémon draconique céleste Rayquaza, maître des cieux issu de la région d'Hoenn, dont la mythologie aérienne fait écho à la verticalité vertigineuse de la tour qui le surplombe. Espace immersif baigné d'écrans animés, d'effets visuels futuristes et de thèmes musicaux orchestraux familiers tirés des jeux vidéo Nintendo, la boutique matérialise dans le monde réel les fameux Centres Pokémon virtuels où les dresseurs viennent soigner leurs créatures et s'équiper. Phénomène socioculturel mondial transcendant les générations, le lieu attire aussi bien les passionnés de gaming que les familles et collectionneurs internationaux en quête d'éditions exclusives introuvables ailleurs dans l'archipel nippon.",
    visiter: "La visite s'amorce devant l'entrée spectaculaire du magasin où trône une monumentale statue grandeur nature sculptée avec un réalisme saisissant figurant le dragon céleste Rayquaza émergeant des cieux, chevauché avec malice par Pikachu paré de son inséparable queue en éclair. En franchissant les portes de ce paradis coloré, les amateurs découvrent d'immenses gondoles thématiques débordant de milliers de peluches officielles représentant l'intégralité du Pokédex national, depuis les figures fondatrices de la première génération comme Dracaufeu, Évoli ou Bulbizarre jusqu'aux légendaires les plus récents. Une section exclusive est spécialement consacrée aux produits dérivés estampillés Skytree Town, dévoilant des pin's commémoratifs, des figurines articulées et des peluches de Pikachu coiffé d'un béret aux motifs de la tour ou costumé d'un poncho Rayquaza vert et noir étincelant. Les passionnés du jeu de cartes à collectionner officiel (JCC Pokémon) s'attardent devant les vitrines de boosters récents et de boîtes de rangement exclusives, tandis que des bornes interactives permettent aux joueurs nomades de recevoir des distributions d'événements virtuels spéciaux sur leurs consoles, composant une étape ludique et colorée incontournable lors de l'exploration de Sumida.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_akihabara_electric_town",
    name: "Tokyo - Quartier d'Akihabara Electric Town (Chiyoda)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 5,
    is_island: true,
island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Mecque Électronique & Culture Otaku (Après-Guerre - XXIe siècle)",
    century: "XXIe siècle",
    category: "star",
    lat: 35.699474,
    lng: 139.771391,
    image: "https://lh3.googleusercontent.com/pw/AP1GczN2Qxh8x1OI34rK93Pnt0i2QUJ_XrInulKpQmk1FhlhZ2iHsQi7lBVzYfN5Ya7Tl_of-8SYf2JPu8WF15ihe6Beh-rx_HaQAHuy55rPcctBSuKXiKpxxnvUlTWavxDWZyD4Rw_4ZLwZOA3egEyNV-jD5A=w1221-h919-s-no-gm?authuser=0",
    description: "Mecque planétaire incontestée de la sous-culture otaku, temple mondial des mangas, des animes et du rétrogaming, et berceau historique des composants électroniques d'après-guerre, le quartier d'Akihabara — universellement surnommé Akiba ou Denki-gai (« la ville électrique ») — déploie son labyrinthe d'enseignes géantes au cœur de l'arrondissement de Chiyoda. Né dans les années 1940 et 1950 autour d'un modeste marché noir de lampes radio et de câblages récupérés sous les ponts de chemin de fer, le secteur s'imposa durant les décennies de la haute croissance économique comme la vitrine technologique étincelante de l'électroménager et de la micro-informatique japonaise naissante. À partir des années 1990 et 2000, le quartier connut une formidable mutation sociologique en devenant la terre promise de la pop culture graphique, concentrant des centaines d'immeubles entiers consacrés aux figurines de collection en résine, aux jeux de cartes à jouer, aux doujinshi et aux maid cafés où des serveuses costumées traitent les clients comme des maîtres de maison. Bordé par l'artère centrale Chūō-dōri où les façades vitrées des gratte-ciel s'habillent d'immenses fresques d'héroïnes de mangas aux yeux démesurés, Akihabara forme un paysage urbain cyberpunk sans équivalent sur le globe, vibrant au rythme des jingles publicitaires criards et de la passion dévorante de communautés de fans venues du monde entier.",
    visiter: "La découverte s'amorce dès la sortie Electric Town de la gare JR d'Akihabara, où le visiteur plonge instantanément dans un univers sensoriel saturé d'écrans néon géants, de musiques de jeux d'arcade et de jeunes filles en costumes victoriens distribuant des prospectus sur le trottoir. Les passionnés de nouvelles technologies et de composants électroniques débuteront par l'exploration des venelles d'origine du Radio Kaikan historique ou des ruelles obscures du Radio Center, véritables cavernes d'Ali Baba débordant de condensateurs, de micro-circuits, de diodes et de connectiques vendus au détail. La visite se poursuit dans les cathédrales verticales de la pop culture comme Mandarake Complex, Kotobukiya, AmiAmi ou Sofmap, où l'on gravit d'étroits escaliers mécaniques desservant huit étages de figurines rares, de maquettes Gundam et d'artbooks de collection. Une immersion dans les célèbres salles d'arcade étagées de Sega (GiGO) ou Taito Hey permet de contempler la virtuosité hallucinante des joueurs japonais sur les bornes de rythme musicales ou de s'essayer aux machines attrape-peluches (UFO catchers). Les dimanches après-midi, l'avenue principale Chūō-dōri est rendue entièrement piétonne (Hokōsha Tengoku), permettant de flâner librement au milieu des façades chamarrées et d'immortaliser l'atmosphère électrique de cette ruche humaine d'anthologie.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_omoide_yokocho",
    name: "Tokyo - Ruelle Omoide Yokochō (Shinjuku)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 35,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque d'Après-Guerre & Convivialité Nostalgique (1946)",
    century: "XXe siècle",
    category: "star",
    lat: 35.692701,
    lng: 139.699455,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPcqCOSrpJzd7w6yaJ0v09S5iI2BPIPyFG7jZ01va1FRjPdgkDBbT5vVzc1trb-AfznldDPC95sIad73psySXBrMalxVx4CsKbknKG-FcrlFyyRPsKXw7jEY651huo0NRZSjgmy_F_xHY4d_1DIpBCRbg=w692-h919-s-no-gm?authuser=0",
    description: "Enclave nostalgique miraculeusement préservée le long des voies ferrées à la sortie nord-ouest de la titanesque gare de Shinjuku, l'allée d'Omoide Yokochō (« l'allée des souvenirs ») — historiquement connue sous le sobriquet plus gouailleur de Shonben Yokochō (« l'allée du pipi ») — transporte le voyageur dans le Tokyo populaire, chaleureux et enfumé de l'immédiat après-guerre. Apparu dès 1946 sous la forme d'un dédale de baraquements précaires de marché noir où se vendaient alcools de contrebande et abats de bœuf ou de porc grillés (motsuyaki) échappant au rationnement strict des viandes nobles, ce réseau serré de deux venelles parallèles pavées d'à peine deux mètres de largeur a su résister à toutes les vagues successives de spéculation immobilière. Reconstruit fidèlement dans les règles de l'art après un incendie dévastateur en 1999, le site concentre aujourd'hui une soixantaine de minuscules comptoirs de restauration en bois patiné, pouvant accueillir pour la plupart à peine cinq à huit convives assis au coude-à-coude autour du gril du cuisinier. Les lampions rouges et jaunes en papier suspendus sous de faux feuillages de cerisiers ou d'érables d'automne, mêlés aux volutes d'encens de graisses grillées et aux murmures des verres de bière qui s'entrechoquent, composent un tableau vivant d'une poésie urbaine poignante au pied des gratte-ciel scintillants.",
    visiter: "Pénétrer dans cette ruelle étroite à la nuit tombée constitue un choc sensoriel et visuel inoubliable : on se faufile entre les façades de bois sombre noircies par les fumées et les auvents bas pour s'imprégner des effluves irrésistibles de sauces soja caramélisées (tare) et de braises de charbon blanc de chêne binchōtan. L'expérience authentique invite à pousser le rideau court noren d'une échoppe minuscule pour trouver une place vacante sur un tabouret de bois patiné face au maître-grilleur, afin de commander des assortiments de brochettes traditionnelles yakitori de poulet fermier, de brochettes d'abats croustillants ou de légumes de saison saisis à vif sur la grille. Les salarymen tokyoïtes en costume s'y détendent après leur journée de bureau aux côtés des voyageurs de passage dans une convivialité désarmante, trinquant au son des bières pression fraîches, des verres de saké nihonshu tiédi ou des grands verres de whisky highball pétillants. En levant les yeux entre les toitures de tôle ondulée couvertes d'enchevêtrements pittoresques de fils électriques, le visiteur mesure avec émerveillement le contraste architectural saisissant entre ce sanctuaire populaire d'époque Shōwa et la silhouette de verre géante des tours modernes de Shinjuku émergeant dans la nuit tokyoïte.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_tocho_north_observation_deck",
    name: "Tokyo - Observatoire Nord du Siège du Gouvernement Métropolitain (Tochō)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 202,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Postmodernisme & Architecture Monumentale Kenzo Tange (1991)",
    century: "XXe siècle",
    category: "star",
    lat: 35.689515,
    lng: 139.692054,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNwo8UE6nZlZnBL11zfw3sJm8mvSNeRcCqZxnuRWzxHXaybYCtdKc2vQU-rt6XEZZepBbuADsPKImyskXtfYKSS_pD-AbotlD3z_gglKqHQ8-JNoqyTGNIL-KT4iEvMsWLKjpXp_ijDJnS6eJSEkK_Cuw=w1221-h919-s-no-gm?authuser=0",
    description: "Symbole monumental du pouvoir civique tokyoïte et chef-d'œuvre du postmodernisme architectural international, le complexe du Siège du Gouvernement Métropolitain de Tokyo (Tōkyō-to Chōsha), universellement désigné sous le diminutif de Tochō, domine le quartier d'affaires de Nishi-Shinjuku de ses deux tours jumelles culminant à 243 mètres de hauteur. Conçu par le maître visionnaire de l'architecture contemporaine nippone Kenzō Tange et inauguré au printemps 1991 au zénith de la bulle économique japonaise pour un coût colossal de plus d'un milliard de dollars, l'édifice s'inspire avec audace de la verticalité hiératique et des façades ouvragées des cathédrales gothiques occidentales — évoquant en particulier Notre-Dame de Paris — tout en intégrant des trames géométriques en damier rappelant les paravents traditionnels japonais et les microprocesseurs électroniques modernes. Le bâtiment principal abrite au 45e étage de sa tour nord un spectaculaire observatoire panoramique public perché à 202 mètres au-dessus du sol, conçu dès l'origine pour offrir gratuitement aux citoyens et aux voyageurs du monde entier une vue plongeante sans égale sur l'immensité de la préfecture tokyoïte et l'infinie étendue urbaine de la plaine du Kantō.",
    visiter: "La visite s'amorce au rez-de-chaussée du bâtiment numéro 1 par un passage filtré de sécurité avant d'emprunter des ascenseurs express dédiés gravissant les quarante-cinq étages à la vitesse vertigineuse de huit mètres par seconde pour atteindre l'observatoire nord en moins de cinquante-cinq secondes. En débouchant sur la vaste esplanade vitrée circulaire ceinturée de baies toute hauteur, le visiteur est foudroyé par la vue panoramique à 360 degrés embrassant tout l'écosystème de la mégapole : à l'est se déploient les forêts urbaines des parcs de Shinjuku Gyoen et Meiji-jingū encadrant les silhouettes lointaines de la Tokyo Skytree et de la Tour de Tokyo, tandis qu'à l'ouest s'étire l'alignement des gratte-ciel de verre et de granit du quartier des affaires. Par matin d'hiver très sec ou au coucher du soleil, la contemplation atteint un sommet d'émotion lorsque la silhouette pyramidale immaculée du mont Fuji émerge distinctement au-dessus de l'horizon vaporeux dans une lumière dorée ou rosée saisissante. L'observatoire abrite également des espaces de repos, une boutique d'artisanat traditionnel tokyoïte ainsi qu'un magnifique piano à queue laqué d'or orné de motifs géométriques conçu par la célèbre artiste Yayoi Kusama, sur lequel les musiciens de passage viennent improviser librement des mélodies contemplatives au-dessus de la ville.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_quartier_shinjuku",
    name: "Tokyo - Quartier de Shinjuku (Kabukichō & Gratte-ciel)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 38,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Mégalopole Moderne & Gare la Plus Fréquentée du Monde",
    century: "XXIe siècle",
    category: "star",
    lat: 35.692570,
    lng: 139.700715,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMTS6U2-lEY-BsGsboZwyOAwR6ziyK7ndb0XmKvYQOrrfWXSFskIjvkzIyN9Bs6gZ2ah9vAAXtFdH8zg5pPvvU1RqVteIYiHfM7VRsBN3E65Skl5Y_IGWuArcpaydC_mcqhIh4I34_nT93Wbg5GQdaWMw=w1221-h919-s-no-gm?authuser=0",
    description: "Cœur battant démesuré, fascinant et protéiforme de la capitale japonaise, l'arrondissement de Shinjuku s'articule autour de sa gare ferroviaire centrale titanesque, officiellement reconnue par le livre Guinness des records comme la plus fréquentée de la planète avec plus de 3,6 millions d'usagers transitant chaque jour par ses quelque deux cents sorties souterraines. Ancien relais de poste de Naitō-Shinjuku établi au XVIIe siècle le long de la grande route féodale du Kōshū Kaidō sous l'époque d'Edo, le quartier a muté au fil du XXe siècle pour incarner la dualité architecturale et sociologique absolue de Tokyo. À l'ouest (Nishi-Shinjuku), sur un sol rocheux d'une exceptionnelle stabilité géologique ayant résisté au séisme de 1923, s'érige la première forêt de gratte-ciel parasismiques du pays, véritable Manhattan tokyoïte abritant sièges de multinationales, grands hôtels de luxe et l'imposant complexe gouvernemental du Tochō. À l'opposé diamétral vers l'est s'étend l'univers incandescent de Kabukichō, le plus vaste et célèbre quartier nocturne de divertissement d'Asie, baigné de néons étourdissants, de salles de pachinko rugissantes, de bars à thèmes et de cinémas monumentaux veillés par la silhouette menaçante d'un Godzilla grandeur nature dressé sur un toit terrasse.",
    visiter: "La découverte s'amorce en s'extrayant du labyrinthe souterrain de la gare pour émerger sur la place de la sortie Est, dominée par le célèbre écran 3D incurvé géant de Cross Shinjuku où un chat calico géant animé semble saluer la foule avec malice depuis le sommet de l'immeuble. La traversée de l'avenue Yasukuni mène sous l'arche lumineuse rouge emblématique de Kabukichō Ichibangai, porte d'entrée d'un dédale de rues piétonnes électriques où les visiteurs déambulent sous les panneaux luminescents géants jusqu'à l'esplanade du cinéma Toho pour photographier la tête colossale de Godzilla émettant rugissements et fumées à chaque heure pile. À quelques pas de là, le voyageur s'engouffre dans le réseau intimiste du Golden Gai, minuscule quartier constitué de six allées étroites préservées où s'empilent plus de deux cents micro-bars thématiques artistiques et bohèmes pouvant à peine accueillir quatre à cinq personnes au comptoir. Pour achever la découverte, une marche vers les larges avenues calmes et aérées de Nishi-Shinjuku permet de contempler en contre-plongée la silhouette vertigineuse des tours Mode Gakuen Cocoon Tower et Sompo Japan, offrant un contraste saisissant entre la fête nocturne débridée et la rigueur financière internationale.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_tour_de_tokyo",
    name: "Tokyo - Tour de Tokyo (Minato)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 333,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Shōwa & Renaissance d'Après-Guerre (1958)",
    century: "XXe siècle",
    category: "star",
    lat: 35.658312,
    lng: 139.745199,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOYUOVWCbkEIPw4tZGhbYxLVHfpwchUJiNsQH0QNrGIPnZxXz086eesULkoWrMN6C-9DQAil4NwUHiVC5YPB1FNcT3kh-rkCC9oK2uoeRKk_n3ekyvm1Ud-3H6Ay57EIlJITnd5rb5dTYkP7e3VgGsxeQ=w1379-h919-s-no-gm?authuser=0",
    description: "Silhouette iconique, romantique et bienveillante dominant le paysage urbain de l'arrondissement de Minato depuis plus de six décennies, la Tour de Tokyo (Tōkyō Tawā) incarne avec éclat la renaissance économique, l'optimisme technologique et la fierté retrouvée du Japon d'après-guerre. Conçue par l'architecte prolifique Tachū Naitō et inaugurée en décembre 1958, cette imposante tour de télécommunication autoportante en treillis d'acier culmine à 332,9 mètres de hauteur, surpassant de quelques mètres son illustre modèle d'inspiration, la tour Eiffel de Paris, tout en affichant un poids réduit de moitié (environ 4 000 tonnes) grâce aux progrès de la métallurgie nippone. Symbole éclatant de l'ingéniosité industrielle de l'époque Shōwa, un tiers de son armature métallique provient du recyclage de l'acier de chars d'assaut américains endommagés lors de la guerre de Corée. Peinte de teintes réglementaires alternant blanc pur et orange international pour satisfaire aux normes strictes de la sécurité aérienne, la tour a servi de repère visuel et émotionnel indissociable du quotidien des Tokyoïtes, immortalisée dans d'innombrables films de cinéma, mangas cultes et œuvres d'animation japonaise à travers les générations.",
    visiter: "La découverte commence dès l'approche au pied de la structure par le complexe de loisirs de Tokyo FootTown, d'où le regard se perd avec vertige dans l'entrelacs des poutres peintes d'un orange éclatant montant vers le ciel. L'ascension vers l'observatoire principal (Main Deck), perché à 150 mètres d'altitude sur deux niveaux vitrés, s'effectue soit par des ascenseurs rapides, soit pour les plus sportifs en gravissant les quelque six cents marches de l'escalier extérieur à ciel ouvert offrant des sensations fortes face au vide. La vue circulaire plonge sur les toits d'ardoise et le parc de sépultures du temple séculaire voisin Zōjō-ji, s'étirant au loin vers la baie de Tokyo, le Rainbow Bridge et le quartier ultramoderne de Roppongi Hills. Les amateurs de vertige contempleront la ville sous leurs pieds à travers les hublots transparents du Skywalk Window, avant d'emprunter, pour une expérience encore plus exclusive, l'ascenseur menant au Top Deck à 250 mètres d'altitude, réaménagé avec de spectaculaires miroirs géométriques démultipliant les lumières de la ville. À la nuit tombée, la tour se métamorphose en un joyau scintillant sous ses éclairages Landmark Light dorés en hiver et blancs en été, parachevant une étape émotionnelle majeure de tout séjour tokyoïte.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_sanctuaire_asakusa",
    name: "Tokyo - Sanctuaire d'Asakusa (Sanja-sama)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 5,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Edo & Shogunat Tokugawa (1649)",
    century: "XVIIe siècle",
    category: "religieux",
    lat: 35.714435,
    lng: 139.796701,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNVlErgZ5v6mtnbqxXxKFofYVLC8jQx8hcgJbfq38xtbCIze838ALn_8m31IMBT57BBYTS5sTsSIpkwdiDHFhvEcYIYieQDND29Urs8pr_ST1N97ua_linf94qEp4q9clDq3fHIZ9kvtjHbNjj_ttzTQg=w1379-h919-s-no-gm?authuser=0",
    description: "Niché dans l'ombre tutélaire du grand temple bouddhique Sensō-ji au cœur du quartier historique et populaire de Taitō, le sanctuaire d'Asakusa, affectueusement nommé Sanja-sama (« le sanctuaire des trois divinités »), constitue l'un des rares et précieux chefs-d'œuvre de l'architecture shintoïste du début de l'époque d'Edo à avoir miraculeusement survécu aux bombardements dévastateurs de la Seconde Guerre mondiale ainsi qu'aux séismes majeurs. Érigé en 1649 sous les ordres du troisième shogun Tokugawa Iemitsu, cet édifice classé Bien culturel important d'État illustre avec un éclat souverain le style architectural gongen-zukuri, où le pavillon des offrandes (heiden) et le saint des saints (honden) sont reliés sous une même toiture complexe aux courbes élégantes, rehaussée de laques sombres, de ferrures dorées et de délicats motifs sculptés en bois polychrome représentant des bêtes mythologiques et des dragons protecteurs. Le sanctuaire est dédié aux trois figures fondatrices laïques qui présidèrent à l'origine sacrée du quartier au VIIe siècle : les deux frères pêcheurs Hinokuma no Hamanari et Takenari, qui découvrirent dans leurs filets la statuette miraculeuse de Kannon dans les eaux de la rivière Sumida, ainsi que le sage lettré Hajino Nakatomo qui reconnut la divinité et consacra sa vie à son culte. Foyer spirituel indissociable de l'identité des artisans et marchands du vieux Tokyo d'autrefois (shitamachi), il accueille chaque année en mai le Sanja Matsuri, l'un des trois plus gigantesques, fervents et spectaculaires festivals shintoïstes de tout l'archipel nippon, durant lequel une centaine de sanctuaires portatifs (mikoshi) est portée à dos d'homme dans une transe collective inoubliable.",
    visiter: "La découverte s'amorce après avoir longé le flanc oriental de l'immense esplanade du Sensō-ji, en franchissant le discret torii de granit qui marque le seuil sacré séparant l'effervescence touristique du temple bouddhique de la solennité feutrée de l'enclos shintoïste. Le visiteur s'arrête tout d'abord devant le pavillon d'ablution rituel (temizuya) orné de sculptures de dragons en bronze pour accomplir la purification ancestrale des mains et de la bouche, avant d'aborder la façade richement décorée du bâtiment principal dont les teintes sombres contrastent harmonieusement avec la luxuriance des pins et ginkgos centenaires veillant sur la cour sacrée. En observant attentivement la zone de transition sous les auvents de bois, on peut admirer la virtuosité des assemblages sans le moindre clou et la vivacité intacte des pigments minéraux préservés depuis près de quatre siècles, figurant des oiseaux de paradis et des rinceaux végétaux d'inspiration céleste. Les fidèles et les voyageurs s'avancent vers l'autel de prière pour jeter une offrande dans le tronc de bois, s'incliner deux fois, frapper deux fois dans leurs mains en signe d'appel aux esprits kami, puis formuler une prière silencieuse avant de s'incliner une dernière fois avec déférence. Tout autour de la nef, des présentoirs abritent des centaines de plaquettes ema en bois gravées de vœux calligraphiés ainsi que des omikuji, bandes de papier divinatoires nouées aux grillages pour conjurer le mauvais sort. Cette halte d'une rare densité spirituelle offre un témoignage authentique et bouleversant sur la cohabitation séculaire du shintoïsme et du bouddhisme (shinbutsu shūgō), permettant d'apprécier la persistance vivante des rites traditionnels japonais au milieu de la modernité urbaine tokyoïte.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_ueno_toshogu",
    name: "Tokyo - Sanctuaire Ueno Tōshō-gū (Parc d'Ueno)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 18,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Edo & Shogunat Tokugawa (1627 - 1651)",
    century: "XVIIe siècle",
    category: "religieux",
    lat: 35.715338,
    lng: 139.771061,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP56aA_-i-lkaKAUHevY7xIE0Q-WruBb6LnMRS59Pr2F51p6348GUdtx6NtdlTzkJZAe4FCKkYuXYgASjxmYWau8_rr4NFLEl9pdlavMev6b6H5pGQfreFXoHbWTSo1Q2etX9Ruk5dZetpf4j5OSh7o2A=w1379-h919-s-no-gm?authuser=0",
    description: "Sommet éblouissant de l'art décoratif shintoïste et mémorial dynastique d'une richesse inouïe niché au cœur de la colline verdoyante du parc d'Ueno, le sanctuaire Ueno Tōshō-gū fut érigé originellement en 1627 par le seigneur féodal Tōdō Takatora avant d'être somptueusement reconstruit et agrandi en 1651 par le troisième shogun Tokugawa Iemitsu pour égaler le faste du grand mausolée de Nikkō. Dédié à la mémoire divinisée de Tokugawa Ieyasu — le fondateur visionnaire du shogunat d'Edo qui unifia le Japon déchiré par les guerres civiles et instaura deux siècles et demi de paix intérieure —, le complexe incarne l'apogée spectaculaire du style architectural gongen-zukuri. Entièrement revêtu de feuilles d'or étincelantes qui lui valent le surnom immémorial de « sanctuaire doré », l'édifice principal associe avec virtuosité laques vermillon, sculptures sur bois polychromes en haut-relief et bronzes massifs ciselés figurant fleurs de pivoine, oiseaux légendaires et motifs géométriques complexes. Miraculeusement épargné par la terrible bataille d'Ueno lors de la guerre de Boshin en 1868, par le grand séisme du Kantō de 1923 et par les flammes de la Seconde Guerre mondiale, ce chef-d'œuvre classé Bien culturel important d'État constitue un témoignage rarissime et d'une authenticité absolue sur la magnificence architecturale et la puissance politique de la caste samouraï au XVIIe siècle.",
    visiter: "L'approche du sanctuaire constitue une véritable progression initiatique à travers une allée dallée majestueuse bordée par plus de deux cent cinquante monumentales lanternes de pierre (ishidōrō) et une cinquantaine de lanternes en bronze massif offertes au fil des générations par les plus puissants seigneurs féodaux (daimyō) de l'empire en signe d'allégeance éternelle au clan Tokugawa. En progressant sous les frondaisons centenaires, le regard est happé par l'extraordinaire porte d'honneur Karamon de style chinois, dont les battants sculptés dans un bois d'une finesse chirurgicale dévoilent les célèbres deux dragons attribués au maître sculpteur légendaire Hidari Jingorō, réputés descendre s'abreuver chaque nuit dans l'étang voisin de Shinobazu. Une clôture ajourée en treillage de bois doré (sukibei) de près de deux cent cinquante mètres de pourtour ceint le saint des saints, décorée de dizaines de panneaux sculptés représentant avec un naturalisme stupéfiant la faune terrestre et céleste, depuis les oiseaux d'eau jusqu'aux créatures marines. En longeant l'enceinte, les visiteurs accèdent au célèbre jardin de pivoines d'hiver et de printemps (Botan-en), où de somptueuses corolles aux teintes éclatantes s'abritent sous de petits parasols de paille traditionnels tressés à la main créant un tableau végétal féerique. La visite permet d'approcher au plus près l'austère flamme éternelle de la paix d'Hiroshima entretenue sur place, offrant un moment de recueillement d'une solennité poignante avant de poursuivre la découverte des allées ombragées d'Ueno.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_hanazono_inari_gojoten",
    name: "Tokyo - Sanctuaires Hanazono Inari & Gojōten (Ueno)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 14,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque Ancienne & Période d'Edo (Fondation antique - 1654)",
    century: "XVIIe siècle",
    category: "religieux",
    lat: 35.713567,
    lng: 139.772321,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMvlFP61W_gUisklY4bX2gl0aVT6-08820umAt_wnmlCOoXDJeWyDtRqWqLV-5Q5PxX2Qsug02NidcbM6he05RaI6f7ugL9hlAugHHITo69T84APDnoTeiLFn_j-Wcb8vSNzeusCkON3wTXRCRbbC1InQ=w603-h919-s-no-gm?authuser=0",
    description: "Enchâssé dans une gorge boisée secrète et escarpée sur les contreforts occidentaux du parc d'Ueno, le complexe sacré jumeau des sanctuaires Hanazono Inari et Gojōten-jinja forme l'un des recoins les plus envoûtants, intimistes et mystiques de tout le cœur historique tokyoïte. Bien que le Gojōten-jinja puise ses racines légendaires dans la plus haute Antiquité nippone — fondé il y a plus de mille neuf cents ans sous le règne de l'empereur Keikō pour honorer Ōnamuchi no Mikoto et Sukunabikona no Mikoto, divinités tutélaires suprêmes de la médecine, des remèdes curatifs et des sources thermales —, le site fut transféré sur cette colline sacrée en 1654 lors de l'urbanisation de la cité d'Edo. Il partage son enceinte feutrée avec le sanctuaire Hanazono Inari, vénéré quant à lui comme le sanctuaire des fleurs dédié au culte du renard céleste d'Inari, esprit bienveillant de la fertilité agraire, des mariages heureux, de la concorde familiale et du succès des entreprises humaines. L'atmosphère du lieu est marquée par une déclivité topographique spectaculaire où la roche affleurante, tapissée de mousses humides et ombragée par d'immenses érables japonais et des cerisiers séculaires, crée une rupture sensorielle saisissante avec les larges boulevards animés du quartier voisin d'Ueno.",
    visiter: "La traversée de ce sanctuaire s'aborde traditionnellement par la descente féerique d'un long tunnel sinueux composé de dizaines de portiques torii vermillon serrés les uns contre les autres, offerts au fil des siècles par des dévots et des commerçants reconnaissants dont les noms restent calligraphiés en caractères noirs au dos des montants de bois. En s'enfonçant sous cette voûte écarlate où la lumière du jour filtre délicatement à travers les feuillages, le visiteur découvre des autels rupestres miniatures dissimulés dans de petites cavités rocheuses naturelles (Ana Inari), gardées par de fidèles statues de renards messagers (kitsune) sculptées dans la pierre, parées de bavoirs votifs en tissu rouge et enserrant dans leurs gueules les clefs des greniers à riz ou le joyau sacré. En contrebas de la gorge, l'esplanade s'ouvre sur le pavillon de prière plus vaste et solennel du Gojōten-jinja, où les fidèles viennent chercher des talismans protecteurs contre la maladie et formuler des prières de prompt rétablissement pour leurs proches devant les grilles de bois laqué. L'immersion se poursuit le long des escaliers dérobés menant vers le bassin des ablutions et les lanternes de pierre couvertes de mousse, offrant aux promeneurs une halte contemplative d'une rare intensité poétique où se respire l'âme mystique et silencieuse du Japon d'autrefois.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_kiyomizu_kannon_do",
    name: "Tokyo - Temple Kiyomizu Kannon-dō (Parc d'Ueno)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 16,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Edo & École Tendai (1631)",
    century: "XVIIe siècle",
    category: "religieux",
    lat: 35.712536,
    lng: 139.773466,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPYHb7DUyck7UHJSghtxjsM2d2i-mqlwIonG2t4eGK0s5bI__eaCig2aYzW8QVE4dK0wKL7mA5bMcpnEJkHvIzHFL22RtHsMgQ-8RaNClY12_pB5PxNTFIriwAsagAoK-ml9yq-gyXIICV1Ctd-Bwc0ZA=w1379-h919-s-no-gm?authuser=0",
    description: "Érigé en 1631 sur les hauteurs de la colline d'Ueno par le grand dignitaire et moine érudit Tenkai de la secte bouddhique Tendai, le Kiyomizu Kannon-dō s'impose comme le plus ancien et admirable sanctuaire bouddhiste conservé dans son état d'origine au sein du parc d'Ueno. Conçu sous le règne des premiers shoguns Tokugawa pour servir de pendant septentrional prestigieux au mythique temple Kiyomizu-dera de Kyōto, l'édifice s'inspire directement de son illustre modèle en s'élevant sur une audacieuse terrasse en encorbellement de bois vermillon (butai) construite à flanc de falaise selon la technique traditionnelle kake-zukuri. Dédié à Senju Kannon, la divinité de la compassion infinie aux mille bras sculptée par le maître d'art sacré Eshin Sōzu au Xe siècle, le temple est également un haut lieu de ferveur pour Kosodate Kannon, protectrice bienveillante de la conception, de la maternité et des jeunes enfants. Ayant miraculeusement survécu aux guerres civiles, aux incendies périodiques et aux ravages des conflits modernes, ce joyau vermillon classé Bien culturel important d'État illustre avec majesté la volonté du pouvoir féodal d'Edo de transposer dans la nouvelle capitale guerrière les chefs-d'œuvre architecturaux et la sacralité raffinée de l'ancienne cour impériale de l'Ouest.",
    visiter: "La visite s'amorce par l'ascension de l'escalier de pierre menant au promontoire boisé, d'où la terrasse suspendue en charpente rouge vif offre une perspective aérienne splendide sur la plaine basse et l'étang de Shinobazu. C'est depuis cette estrade panoramique que le regard découvre le légendaire « Pin de la Lune » (Tsuki no Matsu), pin noir centenaire dont une branche a été méticuleusement guidée et courbée par les maîtres jardiniers pour former une boucle végétale circulaire parfaite encadrant le paysage lointain, motif rendu universellement célèbre par le maître de l'estampe Utagawa Hiroshige dans ses Cent vues d'Edo. En pénétrant sur le déambulatoire de bois patiné où résonne le son cristallin des cloches à vent et le tintement des prières, les visiteurs contemplent les impressionnantes étagères intérieures où sont délicatement alignées des centaines de poupées traditionnelles (ningyō) déposées par les mères de famille : chaque année en septembre, un office funéraire rituel (Ningyō Kuyō) y est solennellement célébré pour libérer avec gratitude les âmes de ces figurines ayant accompagné l'enfance. L'ambiance feutrée, imprégnée d'effluves d'encens et rythmée par le murmure des dévotions matinales, invite à une halte contemplative d'une rare élégance au carrefour des traditions bouddhiques et de l'art paysager japonais.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_shinobazu_no_ike_bentendo",
    name: "Tokyo - Étang de Shinobazu & Temple Bentendō (Ueno)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 3,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Edo & Culte de Benzaiten (1625 - Reconstruit 1958)",
    century: "XVIIe siècle",
    category: "religieux",
    lat: 35.712212,
    lng: 139.771554,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPqxozrsH7NIlNWgsolyYOLE5ZqiShmKhUWjQzYJ0q_d9FCmoMbH3n6ksPk0PD_662NJsyqa8OEgcmKxl8oSu1R7iYj-RtCeUXHlq6W1fBkDXsvJD6wKLeTD5TEmiwlIlP0U7WwF6IlPlVuY7W_jAQ2jQ=w1379-h919-s-no-gm?authuser=0",
    description: "Écrin lacustre spectaculaire et sanctuaire aquatique insulaire s'étendant sur plus de seize hectares au pied méridional de la colline d'Ueno, l'étang de Shinobazu (Shinobazu no Ike) forme l'un des paysages naturels et spirituels les plus emblématiques et poétiques de la capitale nippone. Façonné originellement à l'époque d'Edo par le moine Tenkai pour reproduire à l'échelle tokyoïte le cadre grandiose du lac Biwa et de l'île sacrée de Chikubu, l'étang abrite en son centre, sur une île artificielle reliée par des digues piétonnes, le splendide temple octogonal du Bentendō. Dédié à Benzaiten — divinité bouddhique majeure issue de la déesse védique Saraswati, patronne des arts, de la musique, des lettres, de la sagesse et des eaux vives —, le sanctuaire se singularise par sa somptueuse toiture octogonale aux auvents recourbés couverte de cuivre et ses façades richement parées d'ornements vermillon et d'or. Divisé en trois bassins distincts — l'étang aux lotus tapissé de feuilles gigantesques, l'étang aux barques récréatif et le sanctuaire ornithologique des cormorans —, le site déploie un contraste saisissant entre la luxuriance végétale aquatique et les silhouettes verticales des gratte-ciel modernes ceinturant le quartier d'Ueno.",
    visiter: "La découverte s'amorce en empruntant la longue chaussée pavée bordée de lanternes en pierre et de saules pleureurs qui s'élance sur les eaux pour atteindre l'île centrale du Bentendō. Dès l'entrée sur le terre-plein sacré, le visiteur remarque d'étonnants monuments votifs en bronze et en pierre sculptée érigés par les corporations tokyoïtes en hommage aux êtres vivants sacrifiés pour la subsistance humaine, tels que le monument aux poissons, aux lunettes ou aux instruments de musique. En pénétrant sous la rotonde du pavillon baignée par les lueurs dorées des veilleuses et les volutes d'encens, on peut contempler la statue sacrée de Benzaiten représentée avec ses huit bras armés d'attributs célestes veillant sur la fortune des dévots. Durant les mois d'été, l'étang offre un spectacle visuel d'une féerie sans pareille : des milliers de fleurs de lotus d'un rose immaculé émergent au-dessus de feuilles gigantesques couvrant entièrement la nappe d'eau, ouvrant leurs corolles aux premières lueurs de l'aube dans un parfum délicat. La promenade se prolonge le long des berges aménagées où les citadins canotent en barques traditionnelles au milieu des reflets miroitants des gratte-ciel, offrant une respiration bucolique et spirituelle incontournable.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_hanazono_jinja",
    name: "Tokyo - Sanctuaire Hanazono-jinja (Shinjuku)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 34,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Edo & Protection de Shinjuku (Fondé avant 1590)",
    century: "XVIe siècle",
    category: "religieux",
    lat: 35.693521,
    lng: 139.705439,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMuGu1jAdVuSPzXsQgokyzb-EiAr7xOin30LXY_oVb3DA_B8EwjPza3g7X3GjaKFnbr8EhqjMdmJeCY71qnFeaWzZ2YyJH9K8OWkEE-gru8dbnxpIG-WpUz5zTeJ88wAUu0LHB1KCTYtSRQO8nA1Bf3lg=w1221-h919-s-no-gm?authuser=0",
    description: "Véritable sanctuaire tutélaire et poumon spirituel immémorial enclavé au beau milieu de la jungle de béton et de néons du quartier ultramoderne de Shinjuku, Hanazono-jinja veille sur le cœur économique et nocturne de Tokyo depuis plus de quatre siècles. Établi bien avant l'accession de la dynastie Tokugawa au pouvoir en 1590 par le clan seigneurial des Kasai, le sanctuaire fut déplacé à son emplacement actuel sous l'ère Kan'ei lorsque le domaine fut concédé au maître de poste impérial, occupant jadis une terre réputée pour ses somptueux jardins de fleurs impériaux qui lui léguèrent son nom poétique de Hanazono (« le jardin de fleurs »). Dédié à trois divinités majeures du panthéon shintoïste — Ukanomitama no Kami (esprit de l'agriculture et du commerce), Yamato Takeru no Mikoto (héros guerrier légendaire) et Ukano Mitama —, ce sanctuaire vermillon vif incarne le protecteur divin absolu des commerçants, des gens de spectacle, des artistes et des résidents de l'arrondissement le plus effervescent de la planète. Ayant su renaître de ses cendres après les incendies dévastateurs d'Edo et les bombardements de 1945, le site déploie une énergie tellurique saisissante où la dévotion shintoïste la plus pure côtoie immédiatement les ruelles interlopes du Golden Gai et les avenues commerçantes baignées d'enseignes lumineuses.",
    visiter: "L'accès au sanctuaire s'effectue en franchissant l'imposant torii en acier rouge vif dressé le long de l'avenue Meiji-dōri, ouvrant sur une vaste allée pavée bordée d'arbres sacrés et de lanternes traditionnelles qui étouffent progressivement les bruits assourdissants de la mégapole. En pénétrant sur l'esplanade centrale, le regard est captivé par la haute silhouette laquée de rouge du bâtiment principal de prière (haiden), dont les auvents de cuivre patiné et les sculptures de têtes de lions shishi montent la garde face aux gratte-ciel scintillants en arrière-plan. Une déambulation sur le côté oriental permet de découvrir deux sanctuaires subsidiaires hautement vénérés : le sanctuaire Itoku Inari, abrité sous un alignement intimiste de petits torii vermillon où les fidèles viennent prier pour les rencontres amoureuses et l'harmonie des couples, ainsi que le sanctuaire Geinō Asama, lieu de dévotion unique où chanteurs, acteurs de kabuki, musiciens et personnalités du show-business tokyoïte viennent déposer des plaquettes votives ema rouges pour bénir leur carrière artistique. Les dimanches matin, la cour accueille un marché aux puces d'antiquités très couru où chiner kimonos en soie, céramiques et estampes anciennes, tandis qu'en novembre, le festival des foires du coq (Tori no Ichi) embrase le sanctuaire d'une foule en liesse venue acheter des râteaux porte-bonheur kumade richement parés d'or.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_zojo_ji",
    name: "Tokyo - Grand Temple Zōjō-ji (Minato)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 12,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Edo & Temple Familial des Tokugawa (1393 - 1598)",
    century: "XIVe siècle",
    category: "religieux",
    lat: 35.657404,
    lng: 139.748640,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPO935T49ThYlBQYOTYydf6bJ3lZBaxNSnEoki713gqOvMrqWVX_CszM3VpBB7DJLtv4x4BuuclVtWNXpaq5E8DBnfK_LLMp_JPkmO-YPHDbyXWMOg_lji2EJE8FkYSSc2iF-_sFwD-eXABKXxMAHHclg=w1379-h919-s-no-gm?authuser=0",
    description: "Édifié originellement en 1393 par l'école bouddhique Jōdo-shū (secte de la Terre Pure) et transféré à son emplacement actuel en 1598 par le grand unificateur Tokugawa Ieyasu qui en fit le temple funéraire et tutélaire attitré de sa dynastie shogunale, le Zōjō-ji s'impose comme l'un des sanctuaires les plus monumentaux, historiques et solennels de Tokyo. À son apogée sous l'époque d'Edo, cet immense complexe monastique s'étendait sur des centaines d'hectares, abritant plus de quarante-huit temples annexes et logeant jusqu'à trois mille moines étudiants chargés de prier pour la pérennité du gouvernement shogunal. Le site conserve en son sein le prestigieux mausolée funéraire abritant les tombes et cénotaphes monumentaux de six des quinze shoguns Tokugawa, de leurs épouses et de princes héritiers impériaux. Échappant miraculeusement aux incendies et aux bombardements alliés de 1945 qui détruisirent la majeure partie des nefs en bois, sa gigantesque porte d'entrée principale Sangedatsumon, construite en 1622 en bois de cèdre laqué de rouge vermillon, constitue la plus ancienne structure d'époque d'Edo préservée dans tout Tokyo. Aujourd'hui, le temple offre une confrontation architecturale saisissante et mondialement célèbre, où la majesté austère des toitures bouddhiques centenaires se découpe directement au pied de la silhouette rouge et blanche futuriste de la Tour de Tokyo.",
    visiter: "La découverte débute par le franchissement vertigineux de la porte Sangedatsumon haute de plus de vingt et un mètres, chef-d'œuvre classé Bien culturel important d'État dont le franchissement est réputé purifier rituellement le visiteur des trois poisons de l'âme bouddhique : l'avidité, la colère et l'ignorance. En s'avançant sur la gigantesque esplanade dallée s'étirant vers le Daibonsho (la grande cloche de bronze coulée en 1673 pesant plus de quinze tonnes), le regard est saisi par le contraste visuel étourdissant entre le grand pavillon de prière Daiden aux toitures d'ardoise massives et l'armature métallique élancée de la Tour de Tokyo dressée juste à l'arrière. L'exploration se prolonge avec émotion le long du jardin latéral des enfants jizō (Sentai Kosodate Jizō) : des centaines de statuettes de pierre émouvantes, coiffées de bonnets de laine rouge tricotés à la main et portant de petits moulins à vent multicolores qui tournoient dans la brise, y sont veillées par les familles en hommage aux âmes des enfants disparus ou non nés. Une visite du musée du trésor en sous-sol permet d'admirer les maquettes minutieuses en bronze et laque du mausolée du deuxième shogun Hidetada ainsi que de superbes rouleaux enluminés, avant de se recueillir devant l'austère cimetière royal des Tokugawa abrité derrière d'imposantes portes de bronze armoriées du blason aux trois feuilles de mauve.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_musee_art_occidental",
    name: "Tokyo - Musée National de l'Art Occidental (Le Corbusier)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 20,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Moderne & Chef-d'œuvre Le Corbusier (1959)",
    century: "XXe siècle",
    category: "musee",
    unesco_name: "L'Œuvre architecturale de Le Corbusier, une contribution exceptionnelle au Mouvement Moderne",
    lat: 35.715176,
    lng: 139.775492,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNoPyfUJ_MTflm0r7tKiA9mVizblTc6_i06Bsjv5zH_S_PEJ6DNm5Hfn6g0oPav_acPGtlGGvZBB_xr8ddDVXpUj0Zx-ghtkcnNXdeElxkMu6D78ptwwgsMIqARLcOP8EPQ4J59yaHUQcYHQZtOu2T07g=w1221-h919-s-no-gm?authuser=0",
    description: "Fleuron muséographique international et unique accomplissement architectural du maître moderniste franco-suisse Le Corbusier en Extrême-Orient, le Musée National de l'Art Occidental (NMWA) s'élève fièrement sur l'esplanade culturelle du parc d'Ueno. Conçu à la fin des années 1950 et inauguré en juin 1959 pour abriter la fabuleuse collection de l'industriel nippon Kōjirō Matsukata restituée par la France après la guerre, le bâtiment principal matérialise avec une rigueur magistrale le concept théorique cher à Le Corbusier de « musée à croissance illimitée ». Édifié en béton brut bouchardé et reposant sur un socle de pilotis puissants qui libèrent l'espace au sol, l'édifice s'articule autour d'une monumentale salle centrale à double hauteur coiffée d'une verrière zénithale prismatique éclairant une rampe hélicoïdale descendante. Inscrit sur la prestigieuse liste du patrimoine mondial de l'UNESCO au titre de « L'Œuvre architecturale de Le Corbusier, une contribution exceptionnelle au Mouvement Moderne », ce sanctuaire artistique abrite la plus riche collection d'art occidental d'Asie, déployant des chefs-d'œuvre inestimables de la Renaissance jusqu'au début du XXe siècle, de Véronèse et Rubens jusqu'à Monet, Renoir, Van Gogh, Cézanne et Picasso.",
    visiter: "La découverte s'amorce dès la vaste cour extérieure pavée à ciel ouvert, véritable jardin de sculptures monumentales en bronze où les visiteurs peuvent admirer en accès libre des fontes originales majeures d'Auguste Rodin telles que la colossale Porte de l'Enfer, Le Penseur en position méditative sur son rocher ou Les Bourgeois de Calais, entourées de bronzes d'Antoine Bourdelle. En pénétrant dans le hall d'accueil du rez-de-chaussée, le regard s'élève vers l'impressionnante mezzanine polygonale baignée d'une douce lumière naturelle filtrée par les lanterneaux pyramidaux du plafond, illustrant à merveille le système modulaire proportionnel du Modulor développé par l'architecte. L'itinéraire muséographique s'élève par la rampe intérieure vers les galeries d'exposition où les œuvres dialoguent avec les ouvertures oblongues et les textures minérales du béton d'origine : les toiles lumineuses des Nymphéas de Claude Monet côtoient les chefs-d'œuvre de Delacroix, Courbet, Manet et Degas dans une muséographie épurée de rang mondial. Une extension harmonieuse conçue par ses élèves japonais Kunio Maekawa et Junzō Sakakura prolonge la visite vers les collections d'art contemporain et les expositions temporaires, faisant de cette étape un dialogue culturel et architectural universel d'une intensité rare entre l'Occident et l'archipel nippon.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_musee_nature_sciences",
    name: "Tokyo - Musée National de la Nature et des Sciences (Ueno)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 21,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Histoire Naturelle (Fondation 1877 - 1931)",
    century: "XXe siècle",
    category: "musee",
    lat: 35.716515,
    lng: 139.776183,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNcJ07ILKViD4JVd3ResfVrRifn97BFtLgYjJJtdCT1Vk13Y5rvU_oRaVBAby1oR-b-4N5kgqZvZPKrRQtsuGVFF3n8asQFB3C8zM39LdV_6jYRHv2k0Z_A-RwBb1Y019ve3-86klb39p2jvrefTCftiA=w1221-h919-s-no-gm?authuser=0",
    description: "Doyen des institutions scientifiques et temple absolu de la recherche naturaliste au Japon, le Musée National de la Nature et des Sciences (Kahaku) déploie ses imposantes ailes d'exposition à la lisière nord-est du parc d'Ueno depuis sa fondation en 1877 durant les grandes réformes de l'ère Meiji. Son édifice historique central, baptisé Pavillon du Japon et parachevé en 1931 dans un noble style néo-Renaissance coiffé d'un dôme majestueux et agencé selon la silhouette symbolique d'un aéroplane vu du ciel, est classé Bien culturel important d'État pour son exceptionnelle valeur patrimoniale et architecturale. Conservant plus de quatre millions et demi de spécimens zoologiques, botaniques, géologiques et technologiques, l'établissement retrace l'histoire millénaire de l'archipel nippon, la genèse de sa faune endémique façonnée par les glaciations insulaires et l'aventure humaine des premiers chasseurs-cueilleurs de la période Jōmon jusqu'aux pionniers de l'industrie moderne. Adossé à cet écrin ancien, le vaste Pavillon Global contemporain propose une immersion spectaculaire dans l'arbre du vivant universel, l'évolution cosmique des espèces terrestres et les lois fondamentales de la physique, s'imposant comme le phare intellectuel et éducatif le plus prestigieux d'Asie dans le domaine des sciences de la Terre.",
    visiter: "La découverte commence devant l'esplanade extérieure accueillant deux emblèmes monumentaux de la science nippone : une spectaculaire reproduction grandeur nature d'une baleine bleue de trente mètres semblant plonger dans le sol et la locomotive à vapeur historique D51 qui tractait autrefois les convois à travers les montagnes du pays. En pénétrant dans le hall d'honneur du Pavillon du Japon, le regard est ébloui par la grande rotonde sous coupole sertie de vitraux néo-classiques et d'escaliers de marbre blanc, avant d'arpenter les galeries dédiées aux richesses naturelles de l'archipel : on y contemple les squelettes montés du célèbre plésiosaure Futabasaurus découvert au Japon, des spécimens naturalisés du loup d'Honshū aujourd'hui éteint, ainsi que la dépouille naturalisée émouvante du légendaire chien Hachikō, symbole national de fidélité absolue. Le passage vers le Pavillon Global entraîne le voyageur au cœur d'une forêt minérale de squelettes géants de dinosaures (Tyrannosaurus, Triceratops), complétée par la spectaculaire galerie de la biodiversité animale où des centaines de mammifères naturalisés défilent en procession sous les projecteurs. L'expérience immersive culmine au cinéma circulaire 360 Theatre, où les spectateurs avancent sur une passerelle suspendue au centre d'une sphère vidéo totale pour un voyage vertigineux à travers les fonds marins préhistoriques et les origines de l'Univers.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tokyo_takeshita_street_harajuku",
    name: "Tokyo - Rue Takeshita (Harajuku, Shibuya)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 32,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Pop Culture Kawaii",
    century: "XXIe siècle",
    category: "star",
    lat: 35.671325,
    lng: 139.704375,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMujW2maeQUnSzKEaBdWB1G_hk2wPalNicEQTHxmqfsJxOrwG-PnNDc32l_iKMeHa7MWTPRQtJ1YAM50h6cZI0UIR793Wx77o4ZnbKzJKHHabGMyw3UI4DuPXX6IH8sM7vbKTN4lisEraWYc8oLOMGW6w=w692-h919-s-no-gm?authuser=0",
    description: "Épicentre planétaire de la mode alternative subversive, creuset incandescent de la pop culture adolescente et temple absolu de l'esthétique kawaii (« mignon »), la rue Takeshita (Takeshita-dōri) déroule son ruban piétonnier ultra-vibrant sur environ quatre cents mètres de longueur au cœur du quartier branché d'Harajuku dans l'arrondissement de Shibuya. Apparue dans le sillage de l'après-guerre et métamorphosée à partir des années 1970 et 1980 en un laboratoire d'avant-garde vestimentaire spontané où la jeunesse tokyoïte venait s'émanciper des uniformes scolaires stricts, cette ruelle étroite et dense concentre une infinité de boutiques indépendantes extravagantes, de friperies vintage, de concept-stores futuristes et de stands culinaires aux couleurs fluorescentes. C'est ici qu'ont éclos et fleuri les sous-cultures visuelles qui ont fasciné le monde entier, des silhouettes néo-victoriennes des Gothic Lolitas aux fusions féeriques du style Decora surchargé d'accessoires, en passant par les tendances du Cosplay et de la mode Cyberpunk. Véritable baromètre en temps réel des modes urbaines nippones et phénomène de société international, la rue offre une immersion sensorielle étourdissante où la musique pop acidulée, les effluves sucrées de crêpes enroulées et la marée humaine ininterrompue créent une atmosphère festive unique au monde.",
    visiter: "La découverte s'amorce dès le franchissement de la monumentale arche électronique lumineuse marquant l'entrée de la rue face à la sortie moderne de la gare JR Harajuku, dont l'écran géant diffuse en temps réel le flux des passants s'engouffrant dans cette artère piétonne électrique. En progressant au coude-à-coude dans cette allée cosmopolite bordée de néons et de façades peintes de teintes pastel, le visiteur s'arrête devant les échoppes emblématiques de crêpes japonaises roulées en cônes débordant de chantilly, de fraises fraîches, de matcha et de génoise, véritable rituel gourmand incontournable de tout passage à Harajuku. Les passionnés de shopping et de curiosités urbaines dénicheront dans les sous-sols et les galeries étagées des boutiques d'accessoires déjantés, des boutiques de mode urbaine unisexe, des magasins de chaussettes fantaisie et les célèbres photomatons purikura où les jeunes personnalisent instantanément leurs portraits numériques à grand renfort d'effets scintillants et d'yeux agrandis. La traversée gagne à être prolongée par les ruelles adjacentes plus calmes d'Ura-Harajuku et la luxueuse avenue ombragée d'Omotesandō toute proche, offrant un saisissant grand écart sociologique entre le temple de la contre-culture adolescente et le luxe épuré des grands créateurs de mode internationale.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn&hl=fr_CA"
  },
  {
    id: "tuffe_chateau_de_cheronne",
    name: "Tuffé Val de la Chéronne - Château de Chéronne",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe (72)",
    subdiv: "Tuffé Val de la Chéronne",
    altitude: 72,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Renaissance & Siècle des Lumières (XVIe - XVIIIe siècle)",
    century: "XVIe siècle",
    category: "chateau",
    lat: 48.128388,
    lng: 0.509067,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNBn-eu_a8A3F-O-CD7aiFVBjuAHpLXczsp9VXMCc4CxTdPjci6i9BFPV16E-SDo3jPgc_tZ4Ic1f2m4NpDvzgQnLPzxmRra1bX4bvsCgfBImucC5PTgJhhhjW07au0jfCf0hPJq2uUyWWRft_l8i4tGQ=w1379-h919-s-no-gm?authuser=0",
    description: "Écrin d'élégance architecturale et de mémoire seigneuriale dissimulé au cœur du bocage vallonné du Perche Sarthois, le château de Chéronne se dresse au sein d'un domaine paysager exceptionnel de plusieurs centaines d'hectares bordé par les méandres de la rivière éponyme. Édifié originellement à la fin du Moyen Âge et au tournant de la Renaissance au XVIe siècle comme une place forte rurale pourvue de tours de guet et de douves en eau vive, l'édifice connut une profonde métamorphose résidentielle au XVIIIe siècle sous le règne de Louis XV. Le logis seigneurial présente une harmonieuse façade en calcaire blond et brique locale rythmée de hautes fenêtres à croisées, dominée par de monumentales toitures d'ardoise et une élégante tourelle d'escalier en poivrière qui rappelle sa vocation castrale primitive. Transformé au siècle des Lumières en une demeure d'agrément raffinée ouverte sur la nature, le domaine se distingue par son parc à l'anglaise composé d'arbres séculaires remarquables, de vastes pièces d'eau alimentées par les sources environnantes et de dépendances préservées comprenant écuries, orangerie et colombier d'époque. Véritable témoin du grand art de vivre aristocratique en terre mancelle, Chéronne a su traverser les siècles en conservant intacte l'intimité de son atmosphère sylvestre et la beauté sereine de ses lignes d'inspiration classique.",
    visiter: "La découverte de ce joyau percheron s'amorce par l'accès à la longue allée cavalière ombragée qui traverse les boisements du domaine pour déboucher sur la perspective grandiose de la cour d'honneur et des façades ouvragées se reflétant dans les douves d'eau calme. En cheminant le long des parterres engazonnés, le visiteur prend le temps de contempler les délicates modénatures de pierre blanche, les chaînages d'angle ouvragés et les ferronneries anciennes qui ornent le logis seigneurial et son perron d'honneur. La promenade invite à une immersion contemplative au cœur du vaste parc arboré où se déploient des essences rares, des cèdres bicentenaires et des sentiers bucoliques longeant les berges de la Chéronne jusqu'aux plans d'eau poissonneux où nichent hérons cendrés et martins-pêcheurs. Les amoureux d'histoire et de patrimoine architectural apprécieront l'observation minutieuse des éléments défensifs d'origine habilement intégrés aux agrandissements classiques, ainsi que le remarquable état de conservation des pavillons d'entrée et des coursives de service. Cette halte bucolique et majestueuse constitue une étape incontournable pour quiconque souhaite explorer les splendeurs cachées de la campagne sarthoise, offrant un havre de paix intemporel loin du tumulte des grands circuits touristiques régionaux.",
    link: "https://photos.google.com/u/0/share/AF1QipPCIuy4pWcQiw-zMj_7SJ_9G-E7QryQBXms9HurKeqfM-8eO3Ck3L9DbKFylzjmtg?key=eE5OWVV2X3VvNzlzVXY1S0VBYTh6cW9FSkVNUHRB&hl=fr_CA"
  },
  {
    id: "tuffe_plan_d_eau",
    name: "Tuffé Val de la Chéronne - Plan d'eau de Tuffé",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe (72)",
    subdiv: "Tuffé Val de la Chéronne",
    altitude: 68,
    is_island: false,
    transport: "route",
    era_group: "nature",
    era_label: "Bassin Fluvial & Écrin Bocager Contemporain",
    century: "XXe siècle",
    category: "star",
    lat: 48.119205,
    lng: 0.514056,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOhbeT083TV3SXzhn0DANKgnEFUh-mHih_sV_znXmhhH9k8jmEE8v0A52I_z0j90U2S3QyaLqbrzGt5ZsuZSlPOWLDtivr8fvo1qjD5ne0N2jjHflUHjMCOaW4Oia5849wuBBrGUk1FnoNypKjtNvRIvw=w1380-h919-s-no-gm?authuser=0",
    description: "Vaste miroir d'eau douce étendu sur plus de quarante hectares au creux de la vallée de la Chéronne, le plan d'eau de Tuffé s'impose comme le poumon environnemental, paysager et récréatif majeur du terroir du Perche Sarthois. Aménagé dans la seconde moitié du XXe siècle pour valoriser les zones humides alluviales bordant la commune tout en régulant les crues du bassin-versant, ce site naturel remarquable marie avec élégance les fonctions de réserve biologique aquatique et de lieu de promenade incontournable. Ceinturé d'une dense ceinture végétale composée de saules pleureurs, d'aulnes glutineux, de roseaux et de prairies bocagères inondables, le lac s'intègre avec une rare harmonie dans le relief légèrement vallonné de la campagne environnante. Lieu de halte migratoire privilégié pour de nombreuses espèces ornithologiques telles que le grèbe huppé, les sarcelles et les foulques macroules, ce vaste plan d'eau offre tout au long de l'année des ambiances changeantes où les brumes matinales glissant sur les flots cèdent la place à de spectaculaires miroitements crépusculaires sous la lumière dorée de l'Ouest. Le site incarne ainsi la parfaite conciliation entre respect de la biodiversité riveraine et mise en valeur des charmes agrestes de la Sarthe rurale.",
    visiter: "L'exploration du site s'articule idéalement autour de la boucle pédestre et cyclable aménagée qui fait le tour complet du plan d'eau sur plusieurs kilomètres de sentiers stabilisés, ombragés et parfaitement accessibles à tous les profils de promeneurs. En cheminant sur les berges, le regard embrasse de superbes perspectives panoramiques sur la nappe scintillante, avec au loin les silhouettes pittoresques du bourg de Tuffé et les frondaisons imposantes des coteaux boisés avoisinants. Plusieurs pontons de bois et observatoires discrets permettent aux passionnés de photographie et d'ornithologie de contempler le ballet des oiseaux d'eau nichant dans les herbiers littoraux, tandis que les pêcheurs profitent de postes tranquilles réputés pour les carnassiers et les carpes. Durant la belle saison, les abords du plan d'eau s'animent d'activités nautiques douces comme le canoë, le kayak, le paddle et le pédalo, complétées par des espaces de détente en pelouse propices à de longues pauses pique-nique sous les arbres. Une passerelle aménagée permet également de connecter facilement la promenade aux vestiges historiques de l'abbaye Notre-Dame toute proche, prolongeant naturellement la sortie par une parenthèse patrimoniale enrichissante.",
    link: "https://photos.google.com/u/0/share/AF1QipPCIuy4pWcQiw-zMj_7SJ_9G-E7QryQBXms9HurKeqfM-8eO3Ck3L9DbKFylzjmtg?key=eE5OWVV2X3VvNzlzVXY1S0VBYTh6cW9FSkVNUHRB&hl=fr_CA"
  },
  {
    id: "tuffe_abbaye_notre_dame",
    name: "Tuffé Val de la Chéronne - Abbaye Notre-Dame",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe (72)",
    subdiv: "Tuffé Val de la Chéronne",
    altitude: 69,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Bénédictine & Siècle Classique (VIIe - XVIIe siècle)",
    century: "VIIe siècle",
    category: "religieux",
    lat: 48.115150,
    lng: 0.516343,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP0VFKDtDEtTDsrYwHQX4dfc2kv6bLKjTQmLid7qn6T5EkNueviGl3IAz8If5f9-pSZ_A3EpI5WGrK4M4FSgpJv9dpeyNarolieNDdWUoQTrKxahNfy2nynbc2k4AhckTE6pZKopNZcb1n2jDx-fHMIbw=w1221-h919-s-no-gm?authuser=0",
    description: "Vénérable foyer de spiritualité monastique et d'érudition bénédictine fondé dès l'aube du haut Moyen Âge au VIIe siècle sous le patronage de saint Innocent, évêque du Mans, l'abbaye Notre-Dame de Tuffé constitue un jalon historique majeur de l'ancienne province du Maine. Ravagée à plusieurs reprises par les incursions guerrières et les vicissitudes de l'Histoire, notamment lors de la guerre de Cent Ans et des guerres de Religion, la communauté monastique connut une splendide renaissance architecturale et spirituelle au XVIIe siècle grâce à son rattachement à la prestigieuse congrégation de Saint-Maur. Les majestueux bâtiments conventuels subsistants en pierre de taille calcaire et moellons de grès témoignent de cette reconstruction mauriste classique, affirmant une sobriété monumentale rythmée par de hauts combles à la Mansart, de nobles frontons triangulaires et des enfilades de baies cintrées régulières. Adossé à la rivière Chéronne qui alimentait jadis le moulin abbatial et les tanneries de la confrérie, ce complexe régulier comprenait logis prioral, cloître intérieur, dortoirs voûtés et vastes celliers de stockage céréalier. Partiellement démantelé au lendemain de la Révolution française, le monument conserve une prestance solennelle remarquable qui illustre l'empreinte séculaire de la règle de saint Benoît sur l'organisation territoriale et économique de la vallée.",
    visiter: "La visite du domaine abbatial s'amorce par le franchissement de l'ancien porche d'entrée pavé pour déboucher dans la cour intérieure dominée par l'imposant logis mauriste du XVIIe siècle, dont la rigueur classique et les façades de pierre blonde captent magnifiquement la clarté zénithale. Les promeneurs peuvent déambuler le long des vestiges des ailes monastiques pour apprécier la stéréotomie soignée des encadrements de fenêtres, les corniches sculptées et la majesté des toitures restaurées. Des panneaux d'interprétation historiques jalonnent le parcours pour reconstituer l'implantation d'origine de l'église abbatiale aujourd'hui disparue, le tracé des galeries de circulation et le rôle civilisateur des moines dans le drainage des marais environnants. La marche se prolonge paisiblement le long des biefs et des anciens canaux hydrauliques ombragés par de grands arbres centenaires, menant jusqu'au pont de pierre enjambant la Chéronne où s'écoule une eau vive et transparente. L'atmosphère de calme absolu et de recueillement qui imprègne l'enclos monastique invite à une halte méditative incontournable, complétant de manière idéale la découverte du patrimoine villageois et des rives du plan d'eau de Tuffé.",
    link: "https://photos.google.com/u/0/share/AF1QipPCIuy4pWcQiw-zMj_7SJ_9G-E7QryQBXms9HurKeqfM-8eO3Ck3L9DbKFylzjmtg?key=eE5OWVV2X3VvNzlzVXY1S0VBYTh6cW9FSkVNUHRB&hl=fr_CA"
  },
  {
    id: "tokyo_sanctuaire_meiji_jingu",
    name: "Tokyo - Sanctuaire Meiji-jingū (Shibuya)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 35,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Taishō & Modernisation Meiji (1920)",
    century: "XXe siècle",
    category: "religieux",
    lat: 35.675754,
    lng: 139.699465,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOkZOoxmCVBNsXM8FFOAFUaqOaYJa5kvE8K7b8JuDm8Je577Z8FGkBfEWl3FlohIs2Q2Tf5mMat3C_xmK1vo10GEUuawdU8wDtmTLd6YGAnXK3YgI679Ngp92apST1LFshBhkVO2vmXEaCUFM4rCMDocA=w1379-h919-s-no-gm?authuser=0",
    description: "Cœur spirituel battant et sanctuaire shintoïste le plus vénérable et emblématique de la mégapole tokyoïte, le Meiji-jingū s'étend comme une oasis de silence solennel de plus de soixante-dix hectares enclavée entre les quartiers électriques de Harajuku et de Shibuya. Consacré en 1920 aux âmes divinisées (kami) de l'empereur Meiji — souverain visionnaire qui présida à la spectaculaire ouverture du Japon sur la modernité à la fin du XIXe siècle — et de son épouse l'impératrice Shōken, le site incarne le modèle architectural nagare-zukuri dans toute sa pureté classique. Édifiés en cyprès du Japon (hinoki) au grain d'or et coiffés d'épaisses toitures d'écorce de cuivre vert-de-gris aux courbes organiques, les pavillons sacrés se déploient au sein d'une immense forêt sempervirente entièrement plantée à la main lors de sa fondation, riche de plus de cent vingt mille arbres donnés par les provinces de tout l'archipel nippon. Reconstruit fidèlement selon les préceptes traditionnels après les destructions de la Seconde Guerre mondiale, ce sanctuaire tutélaire célèbre l'union indissoluble entre le culte des ancêtres impériaux, le profond respect de la nature sacrée et la marche résolue du pays vers la modernité.",
    visiter: "La découverte commence dès la sortie de la station Harajuku en franchissant le monumental premier torii en bois de cèdre millénaire de Taïwan, portique sacré purificateur marquant le passage de l'effervescence urbaine vers le domaine des esprits. La progression s'effectue le long de larges allées rectilignes tapissées de gravier crissant sous le pas, bordées par les célèbres rangées de fûts de saké sacrificiels (kazaridaru) richement décorés de calligraphies traditionnelles faisant face aux barriques de vin français de Bourgogne offertes par les domaines viticoles. Après avoir accompli le rituel ancestral d'ablution des mains et de la bouche au pavillon de purification (temizuya), le visiteur franchit l'imposante porte extérieure pour pénétrer dans la vaste cour centrale ensoleillée où s'élève le bâtiment principal de prière (haiden) encadré par deux arbres camphriers sacrés liés par une corde shimenawa. Il est coutumier d'y inscrire ses vœux intimes sur les plaquettes de bois votives (ema) suspendues aux grilles, ou d'avoir le privilège d'assister à une procession nuptiale shintoïste solennelle guidée par des prêtres en toges immaculées et des servantes miko vêtues de pourpre sous de grandes ombrelles écarlates. La visite gagne à se prolonger dans le jardin intérieur impérial (Gyoen), réputé pour son étang aux nénuphars et sa splendide floraison d'iris en juin au milieu d'une paix absolue.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?hl=fr_CA&key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn"
  },
  {
    id: "tokyo_sanctuaire_kameido_tenjin",
    name: "Tokyo - Sanctuaire Kameido Tenjin (Kōtō)",
    country: "Japon",
    continent: "Asie",
    flag: "🇯🇵",
    region_admin: "Kantō",
    department: "Préfecture de Tokyo",
    subdiv: "Tokyo",
    altitude: 4,
    is_island: true,
    island_name: "Honshū",
    transport: "avion",
    era_group: "medievale",
    era_label: "Époque d'Edo & Héritage des Lettrés (1662)",
    century: "XVIIe siècle",
    category: "religieux",
    lat: 35.702853,
    lng: 139.820679,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOBKihLFHLgVhLiw_qbvVElF67xegorWBYWblnc2IDEPNf0AQoqjy4w4Zkdf0UxNYWGpM9nIkmvsrzN9KNOgdgPgkHGZT0JCPjJkl416JbK55gJNlp6hKUtBl9-fLPtkWClyQ5HyIvt9orCdNXVzyd7fQ=w1379-h919-s-no-gm?authuser=0",
    description: "Joyau d'art paysager shintoïste et sanctuaire de dévotion lettrée niché au cœur des quartiers traditionnels de l'est de Tokyo dans l'arrondissement de Kōtō, Kameido Tenjinsha puise ses origines en 1662 sous le shogunat des Tokugawa à l'époque d'Edo. Dédié à Sugawara no Michizane — illustre ministre, poète et lettré du IXe siècle déifié sous le nom de Tenjin, kami tutélaire des études, de la calligraphie et de la réussite académique —, le sanctuaire fut conçu comme une réplique miniaturisée et raffinée du vénérable Dazaifu Tenmangū de l'île de Kyūshū. Son architecture sacrée vermillon se distingue par son exceptionnel jardin aquatique d'inspiration zen, traversé par deux ponts tambours en arc hautement symboliques enjambant un vaste étang sinueux en forme de sinogramme pour le cœur (shinji-ike). Célèbre dans toute l'histoire de l'art nippon pour avoir inspiré aux maîtres de l'estampe ukiyo-e tels que Hiroshige ses plus célèbres gravures sur bois, le site crée aujourd'hui un contraste visuel saisissant entre la poésie végétale séculaire de ses tonnelles de glycines suspendues et la verticalité futuriste de la tour Tokyo Skytree dressant sa flèche d'acier en arrière-plan immédiat.",
    visiter: "La découverte s'amorce par le franchissement du grand portique torii rouge vif ouvrant sur la perspective centrale de l'étang sacré peuplé de carpes koï multicolores et de dizaines d'tortues d'eau douce venues se réchauffer sur les pierres émergées. La traversée des ponts tambours voûtés (Taiko-bashi) constitue un temps fort de la déambulation : le premier pont en dos d'âne pentu symbolise le passage du passé terrestre, tandis que le second pont tambour incarne l'espérance vers l'avenir, préparant l'esprit à l'approche de la demeure divine. Au printemps, les visiteurs affluent pour contempler les tonnelles suspendues au-dessus de l'eau où retombent de somptueuses grappes de glycines mauves (fuji) parfumées, ainsi que la floraison précoce des pruniers sacrés dont Sugawara no Michizane était particulièrement épris. Devant le pavillon principal de prière (honden), étudiants et lycéens viennent nombreux frotter les cornes de la statue en bronze du bœuf couché pour solliciter l'inspiration et accrocher des plaquettes de bois ema implorant le succès aux concours. Cette halte contemplative offre une plongée fascinante dans la culture populaire tokyoïte au carrefour de la tradition d'Edo et du paysage moderne.",
    link: "https://photos.google.com/u/0/share/AF1QipO9cIQqS1v_VNBaZ14RicxeMmd21cxk_rmzJHZ6BCrKIGwhFziijEGsqkndRXkUcA?key=ZEVnSHVKQkFtVXRISXRES1dKZGVud0V1ZkdTdGpn"
  },
 {
    id: "montfort_le_gesnois_vallee_huisne",
    name: "Montfort-le-Gesnois - Vallée de l'Huisne",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe (72)",
    subdiv: "Montfort-le-Gesnois",
    altitude: 58,
    is_island: false,
    transport: "route",
    era_group: "nature",
    era_label: "Bocage Fluvial & Espace Naturel",
    century: "",
    category: "",
    lat: 48.050233,
    lng: 0.444481,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPgIfPfRDV0Te188tt1HIi3p_JegNBxpVtmA7vUJ3igI8KPvLoet7GwjjdvYpyQlPTgSKP8CGiWD7C9kY6oVByvIVz76XLxJtQxdCaBBwSX1JYA_9HAcFzHYzZIlDvl-_YVzAUYjHncAWW9sRYYkSaFng=w2468-h1388-s-no-gm?authuser=0",
    description: "Écrin de verdure traversant le Pays du Perche Sarthois, la vallée de l'Huisne déploie à l'est de Montfort-le-Gesnois un paysage fluvial préservé où se mêlent méandres paisibles, prairies inondables et coteaux boisés. Principal cours d'eau du bassin sarthois avant sa confluence avec la Sarthe au Mans, la rivière a façonné un écosystème humide d'une grande richesse écologique, ponctué d'anciens moulins, de peupleraies et de ripisylves denses. Véritable couloir biologique pour la faune aquatique et les oiseaux d'eau douce, le site offre une respiration naturelle remarquable où les reflets changeants de la rivière dialoguent avec les douces ondulations du bocage et la quiétude rurale du terroir.",
    visiter: "La découverte des berges s'effectue idéalement à pied ou à vélo le long des chemins de halage et des sentiers de promenade qui bordent le cours d'eau en direction du Perche. Les promeneurs peuvent y observer une faune diversifiée, notamment le martin-pêcheur, le héron cendré et de nombreuses espèces d'odonates évoluant au-dessus des calmes nappes d'eau. La rivière constitue également un parcours réputé pour la pêche de loisir et les balades en canoë-kayak permettant de glisser au ras de l'eau au milieu des frondaisons d'aulnes et de saules. C'est une halte bucolique parfaite pour s'imprégner de l'atmosphère apaisante des rives de l'Huisne en marge des cœurs historiques du village.",
    link: "https://photos.google.com/share/AF1QipOb3ShaKNG_lsJde2nz8dRyz9nGHRogFP31vgkL6iaR4Hd7feMJ2OdoN8Q2CULzwg?key=WTRicjlYODZGMUhveTFOQXdEVk0tNEt3Ry1HVTBn"
  },
   {
    id: "montfort_le_gesnois_pont_romain",
    name: "Montfort-le-Gesnois - Pont « Romain » sur l'Huisne",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe (72)",
    subdiv: "Montfort-le-Gesnois",
    altitude: 60,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Médiévale (XVe siècle)",
    century: "XVe siècle",
    category: "pont",
    lat: 48.0462,
    lng: 0.4174,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOlfiF0SXCa-qMAwPBaKDwxDuRlxBBvBDE3zjgkUmpX3EmguxyXCdC9B_x4QokRGCgiJ7MJEm6vWzy529utudl1LMvUOqq6HKi4waTKsTfHP_ilWNsbfzYFB_uClJTh56GuWJA0KBc_D6hrhDzgpyJi_A=w2468-h1858-s-no-gm?authuser=0",
    description: "Emblème patrimonial de Montfort-le-Gesnois enjambant paisiblement les eaux de l'Huisne, le pont dit « romain » est en réalité un remarquable ouvrage d'art médiéval édifié au XVe siècle sur le tracé d'un ancien gué antique. Classé au titre des Monuments historiques dès 1927, cet édifice en maçonnerie de calcaire et de grès roussard déploie dix arches surbaissées rythmées par de robustes avant-becs triangulaires conçus pour fendre le courant lors des crues fluviales. Témoin privilégié des voies de communication historiques reliant Le Mans à Paris et à la Normandie, ce pont pittoresque s'intègre harmonieusement au paysage verdoyant des berges ombragées, conférant au village sarthois un charme d'époque et une sérénité intemporelle.",
    visiter: "La découverte s'amorce le long des berges aménagées de l'Huisne, offrant un point de vue idéal pour admirer l'enfilade des arches de pierre et leurs reflets scintillants dans l'eau. Une promenade piétonne sur le tablier permet d'apprécier la patine séculaire des dalles et d'observer les refuges aménagés au droit des piles pour laisser passer les attelages d'autrefois. Le site constitue un havre de quiétude très apprécié pour la flânerie, les haltes pique-nique au bord de l'eau et le départ de balades pédestres vers les quartiers historiques de Montfort et du Gesnois. La lumière de fin de journée y met particulièrement en valeur les teintes chaudes de la pierre locale.",
    link: "https://photos.google.com/share/AF1QipOb3ShaKNG_lsJde2nz8dRyz9nGHRogFP31vgkL6iaR4Hd7feMJ2OdoN8Q2CULzwg?key=WTRicjlYODZGMUhveTFOQXdEVk0tNEt3Ry1HVTBn"
  },
  {
    id: "montfort_le_gesnois_eglise_saint_gilles",
    name: "Montfort-le-Gesnois - Église Saint-Gilles (Montfort)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe (72)",
    subdiv: "Montfort-le-Gesnois",
    altitude: 65,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Romane & Médiévale (XIe - XVIe siècle)",
    century: "XIe siècle",
    category: "religieux",
    lat: 48.0471,
    lng: 0.4171,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMoiouR2K-BQ9MNpIlCZQckkbO9sQxCvLyOzbTSYkL3NVAKPdamTeWdx46qH0tGRRQjgKftQJ4X6KaH48j_a9XgNZzGxVKMbbfkFW0Tt90Phy6UQFlkviOFLYFB4TMt5mV09QzFKHHBymxPul1aedqgrQ=w2468-h1858-s-no-gm?authuser=0",
    description: "Perchée sur les hauteurs du coteau dominant la vallée de l'Huisne, l'église Saint-Gilles veille sur le bourg historique de Montfort depuis le Moyen Âge. Érigée originellement au XIe siècle puis agrandie et remaniée aux XVe et XVIe siècles, elle s'ancre dans le riche passé féodal de la cité dominée jadis par son château fort. L'édifice se caractérise par son appareillage mêlant calcaire local et grès roussard, sa silhouette trapue typiquement sarthoise et son clocher coiffé d'une flèche charpentée d'ardoise. À l'intérieur, la nef abrite un précieux mobilier liturgique, plusieurs retables anciens ainsi que des boiseries sculptées témoignant de la ferveur paroissiale séculaire de cette communauté commerçante et rurale.",
    visiter: "La montée vers l'église depuis le bas du village s'effectue par des ruelles pittoresques grimpant le long du coteau, offrant de belles échappées panoramiques sur la vallée de l'Huisne. En pénétrant sous la voûte lambrissée, le visiteur découvrira le calme recueilli de la nef et les détails des statues polychromes ornant les chapelles latérales. Une attention particulière peut être portée aux vestiges romans intégrés dans la maçonnerie des murs gouttereaux. La visite se prolonge agréablement par une déambulation dans le quartier ancien attenant, où subsistent d'anciennes bâtisses en pierre et les traces de l'enceinte castrale médiévale.",
    link: "https://photos.google.com/share/AF1QipOb3ShaKNG_lsJde2nz8dRyz9nGHRogFP31vgkL6iaR4Hd7feMJ2OdoN8Q2CULzwg?key=WTRicjlYODZGMUhveTFOQXdEVk0tNEt3Ry1HVTBn"
  },
  {
    id: "montfort_le_gesnois_eglise_notre_dame",
    name: "Montfort-le-Gesnois - Église Notre-Dame (Le Gesnois)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Pays de la Loire",
    department: "Sarthe (72)",
    subdiv: "Montfort-le-Gesnois",
    altitude: 62,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Gothique & Moderne (XIIe - XIXe siècle)",
    century: "XIXe siècle",
    category: "religieux",
    lat: 48.0493,
    lng: 0.4034,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPj9tW2XwH7uCW-MeBh7Tg4gBKYDWc125uCrEqwNV53kJYQlAB9kSNEPy825l66SweLarshAyEb5lf5gfiBqELsSB4R2oPxg-zAvKLzBTtrcOWy1_Nh7BgKWqb9-hWmrQ7247Nlnex3OR5SOIJNHB5QUw=w2468-h1645-s-no-gm?authuser=0",
    description: "Édifiée au cœur de la paroisse du Gesnois sur la rive sud de l'Huisne, l'église Notre-Dame témoigne de l'histoire singulière de Montfort-le-Gesnois, née de la fusion en 1986 de deux bourgs séculaires jadis rivaux. Fondée au XIIe siècle et profondément remaniée aux périodes gothique et classique avant une campagne de restauration au XIXe siècle, elle se distingue par sa tour-clocher massive servant de porche d'entrée et par sa nef spacieuse éclairée de baies ogivales. Construite avec les matériaux emblématiques du terroir sarthois, elle conserve un ensemble remarquable de mobilier d'art sacré, notamment des autels sculptés en tuffeau et des vitraux racontant les dévotions mariales qui animaient autrefois les confréries locales.",
    visiter: "L'accès à l'église s'effectue au centre de la place du Gesnois, point de départ commode pour explorer la partie méridionale de la commune. En franchissant le portail sous le clocher, on apprécie la belle luminosité du vaisseau central mettant en valeur les boiseries du chœur et la finesse des statues de la Vierge. La visite de cet édifice offre un contraste architectural intéressant avec l'église Saint-Gilles perchée de l'autre côté de la rivière. On peut ensuite rejoindre les berges verdoyantes de l'Huisne et le pont médiéval par une agréable liaison piétonne d'à peine quelques minutes à pied.",
    link: "https://photos.google.com/share/AF1QipOb3ShaKNG_lsJde2nz8dRyz9nGHRogFP31vgkL6iaR4Hd7feMJ2OdoN8Q2CULzwg?key=WTRicjlYODZGMUhveTFOQXdEVk0tNEt3Ry1HVTBn"
  },
  {
    id: "sarzeau_port_du_logeo",
    name: "Sarzeau - Port du Logeo",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Sarzeau",
    altitude: 6,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Maritime",
    century: "XIXe siècle",
    category: "star",
    lat: 47.5464,
    lng: -2.8462,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNEmUKRqBa4pMbgZfTWJ1qAZqKKywxx1RMq-kFBUIoFAldzgSXC9JKpDRSZsbFm5uFZUjLMhPf3bp4gWK6sNhWAramoHGiB_rXCmKBW0zrSBuz1Rr_KmGBs8BwpMOOtwWIYq4T2yFO2pI2XGMTFXPNRGw=w1820-h1213-s-no-gm?authuser=0",
    description: "Havre naturel niché sur le littoral nord de la presqu'île de Rhuys, le port du Logeo s'ouvre sur les eaux calmes du golfe du Morbihan à l'abri des vents dominants. Ancien port de cabotage très actif aux XVIIIe et XIXe siècles pour l'exportation du vin blanc de Rhuys et du sel des marais vers Brest et les grands ports de l'Atlantique, il est aujourd'hui un port d'échouage et de plaisance plein de charme. Sa cale pavée historique, bordée d'anciennes maisons de capitaines et d'échoppes de marins, accueille le va-et-vient des plates ostréicoles et des voiliers traditionnels. Le plan d'eau offre une vue imprenable sur les îles du golfe, créant une atmosphère maritime paisible et authentique au rythme des marées.",
    visiter: "La découverte s'effectue en flânant sur le quai et la jetée en granit pour admirer les bateaux traditionnels au mouillage et le panorama ouvert vers l'île aux Moines et l'île d'Arz. Les terrasses des cafés et les cabanes de dégustation permettent de savourer des huîtres creuses fraîchement débarquées face à la mer. Le sentier côtier du GR34 borde directement le port, invitant à poursuivre la promenade le long des pointes rocheuses ombragées de pins et des petites criques sauvages. C'est également un point d'embarquement privilégié pour des excursions nautiques à la découverte des chenaux et des courants de la petite mer.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "saint_gildas_abbaye_de_rhuys",
    name: "Saint-Gildas-de-Rhuys - Abbaye Saint-Gildas",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Saint-Gildas-de-Rhuys",
    altitude: 27,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Romane & Abélard (VIe - XIe siècle)",
    century: "XIe siècle",
    category: "religieux",
    lat: 47.4999,
    lng: -2.8397,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMqzlEjkj8VBklj0Il15t03qGxrOQlueuZzF1HhNvY6mtfsoYqHbsE9TaNPK84nYjz5GX20POUKaI7MZUNFy07bj6sbs0wxJ2fTDzkYYV_nJLXTvpvJErow3-mVTIpyJqgUCRTlMWOwMOrJGZ9-ObFQfQ=w1820-h1364-s-no-gm?authuser=0",
    description: "Haut lieu de la spiritualité bretonne dominant le grand large depuis la presqu'île de Rhuys, l'abbaye Saint-Gildas puise ses origines au VIe siècle avec l'arrivée du moine gallois Gildas le Sage. Reconstruite au XIe siècle par saint Félix après les dévastations scandinaves, l'abbatiale actuelle constitue l'un des plus insignes chefs-d'œuvre de l'art roman en Bretagne. Son chœur et son déambulatoire à chapelles rayonnantes déploient un ensemble remarquable de chapiteaux sculptés d'animaux fantastiques, de feuillages stylisés et de motifs bibliques. L'histoire du monastère est également immortalisée par le séjour tumultueux du philosophe Pierre Abélard, qui en devint l'abbé au XIIe siècle et tenta d'en réformer la règle face à des moines rebelles. Classée au titre des Monuments historiques dès 1840 par Prosper Mérimée, l'église abrite également les tombeaux des ducs de Bretagne et un inestimable trésor d'orfèvrerie sacrée.",
    visiter: "La visite commence par la nef et le transept roman, avant de gagner le déambulatoire pour contempler de près les célèbres chapiteaux historiés du XIe siècle admirablement mis en lumière. Dans le transept nord, le tombeau de saint Gildas et les dalles funéraires des ducs de Bretagne méritent une observation attentive. La salle du Trésor expose de précieuses reliques enchâssées dans l'or et l'argent, dont les bustes et bras reliquaires des saints bretons. La promenade se prolonge à l'extérieur dans le jardin de l'abbaye et le bourg monastique, avant d'emprunter le chemin menant vers les falaises côtières du Grand Mont où saint Gildas venait prier face à l'immensité de l'océan Atlantique.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "sarzeau_domaine_de_suscinio",
    name: "Sarzeau - Château & Domaine de Suscinio",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Sarzeau",
    altitude: 12,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Ducale & Médiévale (XIIIe - XVe siècle)",
    century: "XIIIe siècle",
    category: "chateau",
    lat: 47.5125,
    lng: -2.7287,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPDKhrY8zVy37Dz1ZqLT0qZIIIIxd_kq1RpB5B5fatxRMZ4vi3UKUwaKokv-3W_yWlbtIRfRB9Z04Df3vxN1vfGABW9esgJDn7YdMeDEmMv_XhZBEKkN58jSJ5MIne7ApKE3YfsUJ9AGSUqGm4PgscDIA=w1820-h1213-s-no-gm?authuser=0",
    description: "Majestueuse résidence d'agrément et forteresse de chasse des ducs de Bretagne, le château de Suscinio dresse ses imposantes murailles de granit entre marais salants, landes et océan Atlantique. Édifié à partir du début du XIIIe siècle par Pierre Mauclerc puis agrandi jusqu'au XVe siècle par les ducs Jean IV et Jean V, ce fleuron castral médiéval est ceint de profondes douves en eau et flanqué de six tours monumentales crénelées à mâchicoulis. Le domaine est mondialement réputé pour sa chapelle castrale retrouvée en ruine, d'où fut extrait un pavement médiéval exceptionnel de plus de trente mille carreaux de faïence et de terre cuite vernissée figurant animaux héraldiques, chevaliers et rinceaux fleuris. Remarquablement restauré après des siècles d'abandon consécutifs à la Révolution, Suscinio incarne la puissance politique et le faste princier de la Bretagne indépendante.",
    visiter: "La découverte s'amorce par le franchissement du pont fixe au-dessus des douves pour pénétrer dans la vaste cour d'honneur pavée bordée par les logis ducaux. Le parcours muséographique interactif traverse la grande salle des banquets, les cuisines voûtées, les chambres seigneuriales aux cheminées monumentales et les courtines supérieures offrant un point de vue aérien sur les marais littoraux et la plage de Landrezac. Une halte prolongée s'impose dans la salle des pavages médiévaux pour admirer la richesse polychrome des céramiques restaurées. La visite se prolonge en extérieur sur les sentiers écologiques aménagés au cœur des marais d'eau douce et d'eau salée, véritable havre ornithologique abritant aigrettes, hérons et tadornes de Belon face au château.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "sarzeau_pointe_de_penvins",
    name: "Sarzeau - Chapelle Notre-Dame-de-la-Côte (Pointe de Penvins)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Sarzeau",
    altitude: 8,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Néo-Gothique & Gardienne des Flots (XIXe siècle)",
    century: "XIXe siècle",
    category: "religieux",
    lat: 47.4937,
    lng: -2.6811,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMTTPS4hsQDRPEWHVjviYGFEd6GIvvH-Hmity-gUDXkgu04B7C_TorikQrUTzvyhTxjXhcFanWKnc1n7vN4ATo6_6Q1gi-kQqyAHnEs927yaTFwhIMCP27lnIXXSr9d_hTAL8R_qu7Cv2or74nmUCm7Bw=w1820-h1213-s-no-gm?authuser=0",
    description: "Sentinelle solitaire campée sur une avancée herbeuse battue par les vents et la houle atlantique, la chapelle Notre-Dame-de-la-Côte marque l'extrémité sauvage de la pointe de Penvins à Sarzeau. Reconstruite à la fin du XIXe siècle (vers 1876-1877) dans un style néo-gothique robuste en moellons de granit sur l'emplacement d'un oratoire primitif attesté dès le Moyen Âge, elle présente un plan atypique en forme de croix grecque parfaitement symétrique. Conçue pour résister aux tempêtes hivernales tout en servant d'amer bien visible pour les marins naviguant au large de la presqu'île de Rhuys, la chapelle était traditionnellement le lieu où les femmes de marins et de marins-pêcheurs venaient implorer la protection de la Vierge pour leurs proches en mer. Son dôme discret et sa toiture d'ardoise se découpant sur l'horizon océanique forment un emblème maritime d'une poésie saisissante.",
    visiter: "L'accès à la pointe s'effectue par une route côtière menant à un espace naturel protégé, d'où un sentier piétonnier d'ajoncs et de graminées marines permet de rejoindre l'édifice en bordure de falaise. En contournant la chapelle, le regard embrasse un vaste panorama maritime à trois cent soixante degrés s'étendant de la baie de Kercambre à la pointe du Moré et l'estuaire de la Vilaine au loin. L'intérieur sobre, baigné d'une clarté douce filtrée par d'étroites baies ogivales, abrite des statues votives et des ex-voto de bateaux rappelant la ferveur des périls maritimes d'autrefois. La promenade se poursuit naturellement le long des plages de sable et des cordons dunaires qui flanquent la pointe, spot très apprécié pour respirer le grand air iodé et observer le vol des oiseaux côtiers.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "saint_armel_passage_ile_tascon",
    name: "Saint-Armel - Passage gué de l'Île Tascon",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Saint-Armel",
    altitude: 4,
    is_island: true,
    island_name: "Tascon",
    transport: "route",
    era_group: "nature",
    era_label: "Terre Insulaire & Rythme des Marées",
    century: "",
    category: "ile",
    lat: 47.5708,
    lng: -2.7277,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMHadiyMqOAFQfJ0fVDpJluc9IdMNMTP-RX-N_f1Q2y-HkQCrUva2Wtdn0YzKON2wsElQhEA-UQOiIs71vniS9tmD9QGt2v-y_dUoIjvluntpjh6vzoaOIujCOWLU0F7KjeUuqNuTi28lrl7kBgslr6Lw=w1820-h1024-s-no-gm?authuser=0",
    description: "Véritable passage submersible d'anthologie au fond du golfe du Morbihan, la chaussée submersible de l'île Tascon relie le continent depuis la commune de Saint-Armel à la troisième plus grande île de la petite mer. Longue d'environ quatre cents mètres, cette route empierrée et dallée n'émerge que deux fois par jour à marée basse, disparaissant entièrement sous plusieurs mètres d'eau salée au jusant. L'île Tascon, sanctuaire agricole et préservé resté habité par une poignée d'agriculteurs et d'éleveurs, déploie un paysage pastoral unique bordé de marais, de salines et de prairies bocagères où paissent des vaches face à la mer. Ce cordon marin éphémère incarne avec force la respiration marine du golfe, où la notion de terre insulaire prend tout son sens au rythme immuable du coefficient des marées.",
    visiter: "La traversée de ce passage maritime nécessite de consulter impérativement les horaires et coefficients de marée avant de s'engager, le passage n'étant praticable à pied ou à vélo qu'environ deux heures avant et après la basse mer. L'expérience de franchir cette bande de chaussée bordée d'algues et de parcs à huîtres découvrants procure une sensation d'évasion maritime rare. Une fois sur l'île, les chemins de terre invitent à une boucle pédestre respectueuse de la tranquillité des lieux et de l'avifaune migratrice nichant dans les vasières (bernaches cravants, tadornes, courlis). Le retour vers Saint-Armel offre une vue superbe sur les anciens marais salants de Lasné, parachevant une immersion insulaire saisissante.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "hurghada",
    name: "Hurghada (Mer Rouge)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de la Mer-Rouge",
    department: "Mer-Rouge",
    subdiv: "Hurghada",
    altitude: -2,
    is_island: false,
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Récif Géologique",
    century: "XXe siècle",
    category: "plage",
    lat: 27.2579,
    lng: 33.8116,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPVx1_9UPwnhcWOyxckSpIvYC2T7xDRFTOGeQEiu82QKFht2G6YoXd-HB0DbIDdJ4ebV00ThDFY_RWXl7IznrNWOy4kUUJPV-vv__clD_rD2Ul_nUySiLRNNiubcIxwK81MgkkBsjwr0_BIkhfXFeTpgg=w1379-h919-s-no-gm?authuser=0",
    description: "Joyau de la côte égyptienne aux portes du désert arabique. Paradis de la plongée sous-marine réputé pour ses récifs coralliens et ses eaux cristallines chaudes toute l'année. Un cadre idyllique pour observer la faune et la flore sous-marine de la mer Rouge en toute quiétude au cœur de superbes lagons. La ville offre un contraste saisissant entre l'animation des souks traditionnels de Dahar, le charme touristique de Sekalla et le luxe moderne de Marina Boulevard, créant ainsi une destination balnéaire et culturelle complète pour tous les voyageurs en quête d'évasion et de découverte.",
    visiter: "Les excursions nautiques vers l'île de Giftun constituent une option privilégiée pour l'observation des fonds marins, tandis que la découverte des récifs s'organise facilement depuis les centres spécialisés de la côte. Les spécialités culinaires locales à base de poissons frais se dégustent dans les établissements du port principal. Les édifices religieux tels que la grande mosquée Al Mina et l'église copte apportent une dimension culturelle aux promenades urbaines, et l'immensité du désert environnant se prête aux randonnées en véhicules tout-terrain sous un ciel étoilé.",
    link: "https://photos.app.goo.gl/WmQkwoGfa1tPnuex5"
  },
  {
    id: "sarzeau_menhir_kermaillard",
    name: "Sarzeau - Menhir de Kermaillard",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Sarzeau",
    altitude: 18,
    is_island: false,
    transport: "route",
    era_group: "prehistoire",
    era_label: "Époque Néolithique & Art Mégalithique",
    century: "Néolithique",
    category: "megalithe",
    lat: 47.5359,
    lng: -2.8492,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLeIWMywN2K6S4tQVWYlE-w7HN5MIfd29FFjzUKTmINa5Bi5j7IlYA6zAhUcgoHBU0k4sUnsLFXL8eh8vM0uGd_t8rxHDCfbfzZ2eFmauLnyzcuZM7uC2ysvPQgdPcpmXFympxLrwqGUbbbcnZuHOcjw=w1757-h2635-s-no-gm?authuser=0",
    description: "Dressé fièrement dans la campagne de Sarzeau au cœur de la presqu'île de Rhuys, le menhir de Kermaillard compte parmi les stèles gravées les plus spectaculaires et énigmatiques du mégalithisme armoricain. Érigé vers 4500 avant notre ère puis volontairement abattu lors des bouleversements rituels de la fin du Néolithique, ce monolithe colossal en granit feuilleté de plus de cinq mètres de hauteur a été redressé en 1988 après avoir passé des millénaires couché dans la lande. L'exceptionnelle finesse de son art rupestre en fait un monument de référence : ses parois révèlent un superbe motif en écusson sommé d'une crosse, un bovidé ainsi qu'une vingtaine de cupules creusées dans la roche. Témoin privilégié de la ferveur symbolique des premiers éleveurs du littoral atlantique, le menhir impose par son profil anthropomorphe veillant entre marais et bocage.",
    visiter: "La découverte s'amorce le long d'une petite allée verdoyante aménagée en lisière du hameau de Kermaillard, accessible aisément à pied ou à vélo depuis le bourg de Sarzeau et les pistes côtières de la presqu'île. En faisant le tour du géant de pierre, le visiteur remarquera la texture étagée du bloc et les incisions pariétales qui s'animent sous la lumière rasante du soleil matinal ou de fin d'après-midi. Des panneaux explicatifs installés sur le site éclairent le contexte de sa redécouverte, sa symbolique pastorale et les techniques néolithiques de halage. La promenade se prolonge agréablement vers les sentiers boisés environnants menant aux rives méridionales du golfe du Morbihan, offrant une halte paisible empreinte de mystère préhistorique.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "sarzeau_dolmen_porh_brillac",
    name: "Sarzeau - Dolmen de Porh Brillac",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Sarzeau",
    altitude: 12,
    is_island: false,
    transport: "route",
    era_group: "prehistoire",
    era_label: "Époque Néolithique (Mégalithisme Ancien)",
    century: "Néolithique",
    category: "megalithe",
    lat: 47.5426,
    lng: -2.8101,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOI8pJGVbK9Bxv6UTxyjdTs238Moc9US-PtYPNZL6Uz_gPy2W4Or6NdBH8pGKi9ZLDU_SpqS6L8C9nRzZkdBZDnjD7dnvqthkyMVrgqMSs5y37D499GuFy4qhkDN23N5OnukUD_5DDGpk89fbtjOOvRAA=w1820-h2426-s-no-gm?authuser=0",
    description: "Niché sur les rives septentrionales de la presqu'île de Rhuys à deux pas de la baie de Brillac, le dolmen de Porh Brillac témoigne de l'antique présence des bâtisseurs de tombes collectives au bord du golfe du Morbihan. Cet édifice mégalithique funéraire, vestige d'une sépulture à couloir datant du IVe millénaire avant notre ère, a vu disparaître son tumulus de terre et de pierres d'origine pour ne laisser apparaître que son imposante chambre funéraire. Formée d'orthostates en granit brut solidement ancrés dans le sol et surmontée d'une épaisse dalle de couverture tabulaire, la structure résiste immuablement aux assauts des vents d'ouest et des marées. Entouré d'une végétation maritime mêlant ajoncs et pins maritimes, ce monument discret dégage une poésie intemporelle face aux anses calmes et aux estuaires intérieurs de la petite mer.",
    visiter: "L'accès au dolmen s'effectue en empruntant les venelles du village côtier de Brillac ou les sentiers côtiers du GR34 qui longent le golfe du Morbihan entre pointes rocheuses et parcs ostréicoles. En s'approchant de la chambre mégalithique, le visiteur peut apprécier la force d'assemblage des piliers de soutien et la surface patinée par l'air salin de la table de couverture. Le site offre un point de départ remarquable pour contempler les variations d'eaux calmes de la baie de Brillac et le vol des oiseaux marins nichant dans les vasières voisines. Cette halte bucolique et archéologique complète idéalement la visite des alignements et menhirs disséminés sur le territoire de Sarzeau.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "arzon_dolmen_grah_niol",
    name: "Arzon - Dolmen de Graniol (Grah Niol)",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Arzon",
    altitude: 17,
    is_island: false,
    transport: "route",
    era_group: "prehistoire",
    era_label: "Époque Néolithique & Art Mégalithique",
    century: "Néolithique",
    category: "megalithe",
    lat: 47.5537,
    lng: -2.8911,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP3mylfTlOcA12SvSWVHwA2r2OWkRvpd9XhbbKDKHV6fhZYl1dmJYAaPIF2KZuVzlpJWoY-IVWBIdT0falYOcpPtISMIY2f7__HoidSYfjy51TqbTarv9zWSqJr6TTTZa7Jl6kq_2f8AewyqHox6WIZ4w=w1820-h2426-s-no-gm?authuser=0",
    description: "Joyau du patrimoine mégalithique de la presqu'île de Rhuys, le dolmen de Graniol — ou Grah Niol (« la butte du soleil » en breton) — s'élève sur les hauteurs d'Arzon face aux rivages du golfe du Morbihan. Classé au titre des Monuments historiques dès 1889, cet ensemble sépulcral érigé au Néolithique moyen (IVe millénaire av. J.-C.) se compose d'un cairn circulaire en pierres sèches enserrant une sépulture mégalithique à couloir et chambre funéraire polygonale. Sa renommée archéologique repose sur les exceptionnelles gravures rupestres ornant plusieurs de ses dalles de soutien en granit : crosses pastorales, écussons, haches et signes géométriques y témoignent de la ferveur spirituelle et de la symbolique funéraire des premières communautés agropastorales armoricaines. Préservé au cœur d'un environnement boisé typique de la lande côtière, le monument plonge le visiteur dans les origines millénaires de l'architecture monumentale bretonne.",
    visiter: "L'accès au cairn s'effectue aisément à pied depuis le bourg d'Arzon ou les chemins de randonnée côtiers qui sillonnent la presqu'île entre le golfe et l'océan Atlantique. En approchant de la butte de pierre restaurée, le visiteur s'engage dans le couloir dallé pour admirer l'agencement robuste des orthostates de granit supportant les imposantes tables de couverture. Une observation minutieuse des parois intérieures avec une lumière rasante permet de révéler le relief des gravures pariétales millénaires, dont la signification rituelle continue de fasciner les archéologues. La halte se prolonge agréablement par une promenade vers les sentiers littoraux voisins du golfe du Morbihan, offrant de superbes points de vue maritimes au cœur d'un paysage façonné par l'histoire préhistorique.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "charm_el_naga",
    name: "Charm el-Naga",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de la Mer-Rouge",
    department: "Mer-Rouge",
    subdiv: "Safaga",
    altitude: -5,
    is_island: false,
    transport: "route",
    era_group: "nature",
    era_label: "Temps Géologique & Corallien",
    century: "",
    category: "plage",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Assouan",
    department: "Assouan",
    subdiv: "Abou Simbel",
    altitude: 185,
    is_island: false,
    transport: "avion",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (-1264 av. J.-C.)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Monuments de Nubie d'Abou Simbel à Philae",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 82,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (-1290 av. J.-C.)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 76,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (-1400 av. J.-C.)",
    century: "Antiquité (XIVe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 78,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Moyen & Nouvel Empire)",
    century: "Antiquité (XXe siècle av. J.-C. à IVe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 105,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe & XIXe dynasties)",
    century: "Antiquité (XVe siècle av. J.-C. à XIIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 115,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe à XXe dynasties)",
    century: "Antiquité (XIVe siècle av. J.-C. à XIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
    lat: 25.7285,
    lng: 32.6014,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLIIop9G0JKvfSCc8VuoAVjmAMq9-TDvIllyPrY8t_lq9XBI_iB4lzrA8dmwBM_luSuc4zL3Iqrj86AjleX8DgPdGdf3i8CBjSbVtuUNl57dbAVk8thYxKQVQHQz4eQm6cz3EWmxxtqQraap46gkFHlQ=w2624-h1750-s-no-gm?authuser=0",
    description: "Encaissé dans un vallon aride et secret de la montagne thébaine à quelques encablures de la Vallée des Rois, le site de Deir el-Médineh abritait la confrérie d'élite des « Serviteurs dans la Place de Vérité ». Durant près de cinq siècles sous le Nouvel Empire, cette communauté autonome de sculpteurs, tailleurs de pierre, peintres et contremaîtres conçut, creusa et orna de ses propres mains les sépultures les plus grandioses des pharaons. Bénéficiant d'un statut privilégié et d'un savoir-faire technique inégalé, ces artisans d'exception s'aménagèrent sur place, à flanc de colline, de modestes hypogées familiaux surmontés de petites pyramides de brique crue. Débarrassées du carcan protocolaire et de la solennité des canons royaux, les fresques murales miniatures qu'ils peignirent pour leur propre repos éternel atteignent un sommet de délicatesse, de spontanéité et d'intensité chromatique. Sur un fond ocre doré éclatant, les scènes mythologiques du Livre des Morts côtoient des représentations intimes et attendries de la vie domestique, des épouses dévouées et des réunions de famille. Conservé grâce à la sécheresse absolue du désert et immortalisé par des milliers d'ostraca livrant le récit quotidien de leurs amours, procès et grèves ouvrières, ce vallon sacré constitue la mémoire la plus émouvante et vivante du peuple des bâtisseurs de l'Égypte antique.",
    visiter: "La découverte commence par la traversée contemplative des ruines remarquablement préservées du village en briques crues, où l'on distingue nettement la rue centrale, les seuils de portes peints de rouge, les pièces d'habitation et le colossal grand puits qui livra une inestimable collection d'écrits sur calcaire. L'émotion s'intensifie en descendant l'escalier escarpé menant au caveau funéraire de Sennedjem (TT1), artisan en chef sous Séthi Ier et Ramsès II : la petite voûte peinte, demeurée dans un état de conservation miraculeux, dévoile sur fond jaune d'or le défunt et son épouse labourant les champs d'Ialou dans l'au-delà et saluant le dieu Anubis veillant sur la momie. Juste au-dessus, l'hypogée d'Inerkhaou (TT359), contremaître de la XXe dynastie, séduit par la virtuosité géométrique de ses plafonds aux motifs polychromes et la célèbre scène du grand chat d'Héliopolis forfendant le serpent Apophis au pied du perséa sacré. La visite se parachève en contrebas devant le temple ptolémaïque dédié à Hathor et Maât, dont l'enceinte renferme des reliefs raffinés et des chapelles commémoratives, offrant une perspective intime et bouleversante à l'écart des grands circuits de masse.",
    link: "https://photos.google.com/share/AF1QipOWESdxdcRzbO6odBKe4bKq1akK1WOZN2tksnl81-xlfatrp43shF-hVajG0AeNYg?key=VUtGeUtxRDlfcVAyVmtoNjVRMUNBWE5wd1VrbHp3"
  },
  {
    id: "temple_deir_el_medineh",
    name: "Temple de Deir el-Médineh (Hathor & Maât)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 108,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque (IIIe siècle av. J.-C. - Ptolémée IV à VIII)",
    century: "Antiquité (IIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 118,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XIXe & XXe dynasties)",
    century: "Antiquité (XIIIe siècle av. J.-C. à XIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 112,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe dynastie)",
    century: "Antiquité (XVe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 172,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe à XXe dynasties)",
    century: "Antiquité (XVIe siècle av. J.-C. à XIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 78,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XIXe dynastie)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 75,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XVIIIe dynastie)",
    century: "Antiquité (XIVe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 76,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XXe dynastie)",
    century: "Antiquité (XIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Thèbes antique et sa nécropole",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Qena",
    department: "Qena",
    subdiv: "Denderah",
    altitude: 76,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque & Romaine (Ier s. av. J.-C. - Ier s. ap. J.-C.)",
    century: "Antiquité (Ier siècle av. J.-C.)",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Sohag",
    department: "Sohag",
    subdiv: "Abydos",
    altitude: 72,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Nouvel Empire - XIXe dynastie)",
    century: "Antiquité (XIIIe siècle av. J.-C.)",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Beni Souef",
    department: "Beni Souef",
    subdiv: "Meïdoum",
    altitude: 58,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Dahchour",
    altitude: 67,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Dahchour",
    altitude: 64,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
    lat: 29.7903,
    lng: 31.2093,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMer0QHDvqpAXsu4CG0KKRpAwlG6T4ED-Vaiw0Z_WuJuADw-Lf_z4KGa1VQHoou-3jszi_lEjnbm6NRoGb4LFab-rqiPzm2JbO9q2WNGzHEpjIECqsm4_nK1fB2GnN98CtogJYVmbFVjIa5ymhbeyXf3g=w2684-h1789-s-no-gm?authuser=0",
    description: "Dressée comme une apparition extraterrestre au milieu des étendues vierges du plateau désertique de Dahchour, la pyramide Rhomboïdale constitue l'un des jalons les plus fascinants et énigmatiques de toute l'aventure constructive humaine. Érigée au XXVIe siècle avant notre ère par le pharaon Snéfrou à mi-chemin entre ses chantiers de Meïdoum et la pyramide Rouge, cette silhouette à double pente unique au monde témoigne de la dramatique crise d'ingénierie qui frappa les bâtisseurs royaux en pleine élévation. Commencée avec une pente audacieuse de cinquante-quatre degrés, la structure colossale menaça de s'effondrer sous son propre poids lorsque d'inquiétantes fissures se propagèrent dans les couloirs intérieurs, forçant les architectes à adoucir l'angle à quarante-trois degrés à partir de quarante-neuf mètres de hauteur. Ce compromis sauva le monument, qui culmine à cent cinq mètres et offre la particularité rarissime d'avoir conservé la quasi-totalité de son somptueux parement calcaire d'origine en pierre de Tourah, poli et étincelant sous le soleil d'Égypte. Seule pyramide à posséder deux entrées distinctes menant à deux réseaux indépendants de chambres funéraires, elle est flanquée au sud de son exceptionnelle pyramide satellite magnifiquement conservée.",
    visiter: "La découverte s'amorce par la contemplation extérieure de ses faces lisses vertigineuses, où le calcaire fin étincelle dans la lumière crue du désert, avant de longer la face sud pour explorer la pyramide satellite de Snéfrou dont le couloir et la chambre sont accessibles. Ouverte au public après plus de cinquante ans de fermeture, l'incursion au cœur de la pyramide Rhomboïdale procure l'une des aventures spéléologiques et archéologiques les plus mémorables d'Égypte : on s'engage sur la face nord par un boyau très étroit et plongeant de soixante-dix-neuf mètres de longueur incliné à vingt-huit degrés, obligeant à descendre courbé dans une atmosphère confinée et mystérieuse. Au fond, une succession de passerelles de bois franchit une chambre inférieure au plafond en encorbellement monumental s'élevant à plus de dix-sept mètres, avant d'emprunter un escalier suspendu vertigineux et un couloir horizontal menant au réseau occidental de la seconde chambre funéraire, encore étayée de poutres massives en cèdre du Liban vieilles de quarante-six siècles. La quiétude sauvage du désert de Dahchour, loin des circuits touristiques saturés du Caire, sublime cette immersion physique inoubliable au berceau de la géométrie monumentale.",
    link: "https://photos.google.com/share/AF1QipNpwcSK9L1BsvYFDmFWmey31PqN9K9z8b5yVZ1UTLOE8f5ErvX__Ml-xqDduQ1COg?key=eE9jXzM4NUR1akZydWRmNnpaWmxzZjNnanVvVklR"
  },
  {
    id: "musee_louxor",
    name: "Musée de Louxor",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Louxor",
    altitude: 75,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (1975)",
    century: "XXe siècle",
    category: "musee",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Assouan",
    department: "Assouan",
    subdiv: "Kom Ombo",
    altitude: 90,
    is_island: false,
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque (-180 av. J.-C.)",
    century: "Antiquité (IIe siècle av. J.-C.)",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Assouan",
    department: "Assouan",
    subdiv: "Edfou",
    altitude: 85,
    is_island: false,
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque (-237 av. J.-C.)",
    century: "Antiquité (IIIe siècle av. J.-C.)",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Louxor",
    department: "Louxor",
    subdiv: "Esna",
    altitude: 80,
    is_island: false,
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Gréco-Romaine (Ier-IIIe siècle)",
    century: "Antiquité (Ier siècle)",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Assouan",
    department: "Assouan",
    subdiv: "Assouan",
    altitude: 110,
    is_island: true,
    island_name: "Philae",
    transport: "bateau",
    era_group: "ptolemaique",
    era_label: "Période Ptolémaïque & Romaine (-380)",
    century: "Antiquité (IVe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Monuments de Nubie d'Abou Simbel à Philae",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Assouan",
    department: "Assouan",
    subdiv: "Assouan",
    altitude: 98,
    is_island: true,
    island_name: "Éléphantine",
    transport: "bateau",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique & Cité d'Abou",
    century: "Antiquité",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Assouan",
    department: "Assouan",
    subdiv: "Assouan",
    altitude: 106,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (1997) & Héritage Nubien",
    century: "XXe siècle",
    category: "musee",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Saqqarah",
    altitude: 34,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (2006) & Héritage de l'Ancien Empire",
    century: "XXIe siècle",
    category: "musee",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Saqqarah",
    altitude: 48,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - Ve & VIe dynasties)",
    century: "Antiquité (XXIVe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Saqqarah",
    altitude: 52,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - VIe dynastie)",
    century: "Antiquité (XXIVe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Saqqarah",
    altitude: 53,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique & Époque Ptolémaïque (XIVe s. av. J.-C. - Ier s. av. J.-C.)",
    century: "Antiquité (XIVe siècle av. J.-C. à Ier siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Saqqarah",
    altitude: 58,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IIIe dynastie)",
    century: "Antiquité (XXVIIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Gizeh",
    altitude: 20,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Gizeh",
    altitude: 22,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Gizeh",
    altitude: 65,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
    lat: 29.9792,
    lng: 31.1342,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOL6UdQ2NgvSXtSJxB1zz2auY4ZqsT2NrlwNUrBsi_6BiP44Vwnz__wBTkmkUFyLA_Ms45SzeK4rBZkYRULi2Q1h-8cOwAKn2isOUGmCYlOmZew4qlF1YSOskg03mndEkfTIVbuOl5GZnLgK9ugSEPSWg=w2650-h1766-s-no-gm?authuser=0",
    description: "Seule survivante des sept merveilles du monde antique et chef-d'œuvre absolu de l'architecture mégalithique universelle, la Grande Pyramide de Khéops domine le plateau calcaire de Gizeh depuis plus de quarante-cinq siècles avec une perfection géométrique qui continue de défier l'entendement. Érigée sous la IVe dynastie au XXVIe siècle avant notre ère par le vizir et maître d'œuvre Hémiounou pour servir de tombeau d'éternité au pharaon Khéops, cette montagne de pierre artificielle culminait à l'origine à plus de cent quarante-six mètres de hauteur, demeurant l'édifice le plus élevé jamais bâti par l'homme jusqu'à l'élévation des cathédrales médiévales. Composée de plus de deux millions trois cent mille blocs de calcaire local pesant chacun en moyenne deux tonnes et demie, la structure était autrefois entièrement revêtue d'un étincelant parement poli de calcaire blanc de Tourah reflétant les rayons du soleil comme un phare cosmique à la lisière du désert libyque. Orientée avec une précision stupéfiante sur les quatre points cardinaux avec une marge d'erreur infime, elle synthétise le savoir astronomique, mathématique et théologique de l'Ancien Empire à son apogée, conçu pour propulser l'âme du souverain défunt vers les étoiles circumpolaires impérissables.",
    visiter: "La découverte commence au pied des gigantesques assises de calcaire de la face nord, où le regard mesure la démesure des blocs avant d'emprunter la brèche historique creusée au IXe siècle par le calife Al-Mamoun pour pénétrer dans les entrailles du géant. L'incursion intérieure procure une expérience physique et sensorielle inoubliable : après s'être courbé dans l'étroit couloir ascendant incliné à vingt-six degrés, le visiteur se redresse avec sidération au seuil de la Grande Galerie, prodigieuse nef en encorbellement haute de près de neuf mètres et longue de quarante-sept mètres, chef-d'œuvre de stéréotomie où les dalles de calcaire glissent dans une pénombre solennelle. Franchissant la chambre des herses, ou pénètre enfin au cœur de la Chambre du Roi, salle sépulcrale entièrement tapissée de monolithes de granit rouge d'Assouan ajustés sans le moindre mortier, surmontée de cinq chambres de décharge destinées à dévier les pressions titanesques de la masse pyramidale. Devant le sarcophage royal monolithique en granit ébréché résonne une acoustique minérale enveloppante chargée de recueillement. De retour au grand jour, le circuit contourne la face sud pour observer la fosse restaurée de la célèbre barque solaire en bois de cèdre avant d'admirer les pyramides satellites des reines sous la lumière dorée du couchant.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_pyramide_henoutsen",
    name: "Gizeh - Pyramide de la Reine Hénoutsen (G1-c)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Gizeh",
    altitude: 60,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
    lat: 29.9777,
    lng: 31.1365,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPJV6Ii0zGM90Y28LMW9kKLwLbia1w8r_06kB8TkEMGmCWpIobD6VVdwyBlzuCWGtQcCHA5aUzSXQrExrU5s9QS39RFEGmnzCwL5npAEVFM0OdfPN8r8y9IbECvQol0QtCY8JGOejHaa3wOlM-qPI22gg=w2650-h1766-s-no-gm?authuser=0",
    description: "Dressée sur le plateau calcaire de Gizeh à quelques dizaines de mètres au sud-est de la Grande Pyramide, la sépulture de la reine Hénoutsen — désignée sous la nomenclature archéologique G1-c — constitue la plus méridionale et la mieux préservée de la triade des pyramides satellites de Khéops. Fille du grand roi bâtisseur Snéfrou et épouse de son demi-frère Khéops, Hénoutsen appartenait au cœur du cercle dynastique de l'âge d'or de la IVe dynastie au XXVIe siècle avant notre ère. Culminant à l'origine à près de vingt-neuf mètres de hauteur pour une base carrée d'environ quarante-six mètres, cette montagne de calcaire local présente la particularité remarquable d'avoir conservé sur ses assises inférieures de magnifiques blocs de parement lissé en calcaire fin de Tourah. Légèrement décalée par rapport à l'alignement des deux autres tombes de reines (G1-a et G1-b) pour s'harmoniser avec l'immense mastaba du prince Khoufoukhaf, elle fut également au cœur d'une extraordinaire renaissance religieuse sous les XXIe et XXe dynasties saïtes : sa chapelle funéraire orientale fut alors agrandie et consacrée en temple d'Isis « Maîtresse de la Pyramide », comme l'atteste la célèbre stèle de l'Inventaire découverte en ses murs par Auguste Mariette.",
    visiter: "La découverte s'amorce par l'approche de la face nord du monument, où l'on observe la précision de l'appareillage des assises de base avant d'examiner l'entrée du boyau funéraire plongeant à flanc de colline. L'incursion intérieure permet d'emprunter un couloir descendant incliné à environ vingt-cinq degrés, s'enfonçant sous le niveau rocheux naturel du plateau pour déboucher dans une antichambre puis dans la chambre funéraire royale taillée à même le roc calcaire, pourvue d'une niche à canopes au sud. De retour à l'extérieur, l'exploration se concentre sur le flanc oriental où subsistent les murs de calcaire et les fondations du temple d'Isis d'époque tardive, offrant un émouvant témoignage de la continuité dévotionnelle du site sur plus de deux mille ans. La marche se prolonge vers le déambulatoire séparant la pyramide de la fosse de barque voisine et des mastabas des courtisans du champ Est, livrant un angle photographique spectaculaire où la silhouette étagée de la pyramide d'Hénoutsen s'aligne en contre-plongée avec la masse colossale de la Grande Pyramide baignée par la lumière dorée du désert.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "gizeh_pyramide_khephren",
    name: "Gizeh - Pyramide de Khéphren",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Gizeh",
    altitude: 71,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Gizeh",
    altitude: 73,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat de Gizeh",
    department: "Gizeh",
    subdiv: "Gizeh",
    altitude: 70,
    is_island: false,
    transport: "route",
    era_group: "pharaonique",
    era_label: "Antiquité Pharaonique (Ancien Empire - IVe dynastie)",
    century: "Antiquité (XXVIe siècle av. J.-C.)",
    category: "archeologie",
     unesco_name: "Memphis et sa nécropole – les zones des pyramides de Gizeh à Dahchour",
    lat: 29.9713,
    lng: 31.1282,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPJ4tAYvM_fEjvjIPayyJFoQfxDjkO0Pe00gNUwgdbhJjh7DdSDp45pw8L4I5YPvb_g0RCt8V7pZ8Rx3zKI07C3ElLeG62U_h5hpAhVvrCow5vlngwJdtmuBlBYsEwWliHg8DOYOFYrY4-RwYSlTZYseQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Bordant la lisière méridionale du complexe funéraire de Mykérinos face à l'immensité du désert libyque, la triade des pyramides satellites des reines — répertoriées sous les dénominations archéologiques G3-a, G3-b et G3-c — constitue l'un des ensembles funéraires subsidiaires les plus harmonieux du plateau de Gizeh. Érigées au XXVIe siècle avant notre ère sous la IVe dynastie pour abriter les dépouilles des épouses royales de Mykérinos, au premier rang desquelles figure sans doute la reine Khâmerernebty II, ces trois sépultures étagées d'est en ouest illustrent les fascinantes variations de conception architecturale de l'Ancien Empire. La plus orientale (G3-a), culminant jadis à près de vingt-huit mètres de hauteur pour une base carrée de quarante-quatre mètres, fut conçue comme une véritable pyramide à faces lisses pourvue d'un parement partiel de granit rose d'Assouan et d'un petit temple funéraire en calcaire et briques crues. En revanche, ses deux voisines occidentales (G3-b et G3-c), demeurées à l'état de pyramides à degrés composées de quatre à cinq gradins massifs de calcaire local, offrent une silhouette étagée d'une grande puissance géométrique. Elles rappellent que la monumentalité royale à Gizeh s'exprimait au sein d'une constellation dynastique familiale hautement hiérarchisée.",
    visiter: "La découverte s'amorce par l'approche piétonne longeant le flanc sud de la pyramide de Mykérinos, permettant d'apprécier d'emblée le saisissant jeu d'échelles et de perspectives entre le titan royal et ses sentinelles princières alignées au cordeau. En observant la pyramide G3-a, la plus complète du groupe, le regard s'attarde sur les vestiges de son temple de culte en maçonnerie et sur son entrée nord qui s'enfonce par un couloir descendant vers une chambre funéraire souterraine où Richard Vyse découvrit un sarcophage de granit rose contenant les ossements d'une jeune femme. La promenade se prolonge devant les pyramides G3-b et G3-c dont les parois à gradins dénudées révèlent l'appareillage robuste des blocs de calcaire nummulitique extraits des carrières voisines du plateau. En contournant l'angle sud-ouest de la dernière pyramide pour gagner la crête des dunes, le visiteur accède à l'un des panoramas les plus grandioses et photogéniques de tout le plateau memphite : le premier plan met en valeur l'alignement rythmé des trois pyramides satellites dont les ombres crénelées s'étirent sur le sable, dialoguant à l'horizon avec la masse colossale de Mykérinos et la coiffe étincelante de Khéphren dans la lumière dorée du désert égyptien.",
    link: "https://photos.google.com/share/AF1QipPZ5plJybSHlkaMCg-QIKLkGgV1kgRwxjK-SRbFE3kmL4y6GlisgTQGRQ3BriHiyg?key=akRKZVRKbDFYVGhPQ0V1SDJyaERNMVhDQkdmWDRn"
  },
  {
    id: "caire_eglise_saint_georges",
    name: "Le Caire - Église Saint-Georges (Mar Girgis)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Vieux Caire",
    altitude: 23,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Byzantine & Héritage Romain (Xe-XXe siècle)",
    century: "Moyen Âge (Xe siècle)",
    category: "religieux",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Vieux Caire",
    altitude: 20,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Paléochrétienne & Héritage Copte (IVe-XIe siècle)",
    century: "Antiquité tardive (IVe siècle)",
    category: "religieux",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Vieux Caire",
    altitude: 22,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Byzantine & Héritage Copte (Xe-XVIIIe siècle)",
    century: "Moyen Âge (Xe siècle)",
    category: "religieux",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Vieux Caire",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Romaine Impériale (Ier-IVe siècle)",
    century: "Antiquité (IIe siècle)",
    category: "chateau",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Vieux Caire",
    altitude: 25,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Paléochrétienne & Fatimide (IIIe-XIe siècle)",
    century: "Antiquité tardive (IIIe siècle)",
    category: "religieux",
     unesco_name: "Le Caire historique",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Vieux Caire",
    altitude: 23,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Héritage Copte & Art Chrétien d'Orient (IIIe-XXe siècle)",
    century: "Antiquité tardive & Moyen Âge",
    category: "musee",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Centre-ville",
    altitude: 20,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (1902) & Trésors Pharaoniques",
    century: "XXe siècle",
    category: "musee",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Le Caire historique",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Ayyoubide (XIIIe siècle - 1243)",
    century: "XIIIe siècle",
    category: "religieux",
     unesco_name: "Le Caire historique",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Le Caire historique",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke Bahrite (XIIIe siècle - 1285)",
    century: "XIIIe siècle",
    category: "religieux",
     unesco_name: "Le Caire historique",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Le Caire historique",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Ayyoubide (XIIIe siècle - 1225)",
    century: "XIIIe siècle",
    category: "religieux",
     unesco_name: "Le Caire historique",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Le Caire historique",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke Burkite (XVe siècle - 1456)",
    century: "XVe siècle",
    category: "archeologie",
     unesco_name: "Le Caire historique",
    lat: 30.0505,
    lng: 31.2613,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNxxQP0TTMObkuv0uZlOVNUVwjqG_iuxdHXj3ZtjATouqp9OoBBiJ0qZAyrUiOLtwORTYfOpgNyg9RVC0q_ATKuEhT0tz7ZMrdKUGQqnYFWzamWMbDswtFxH-ECllrm1DLsp4-nexJvFTYRFCzGy2Wvxw=w1757-h2635-s-no-gm?authuser=0",
    description: "Édifié en 1456 en plein cœur du quartier historique de Bayn al-Qasrayn sur la prestigieuse artère de la rue Al-Muizz par le sultan mamelouk al-Ashraf Inal, le hammam d'Inal s'impose comme l'un des témoins architecturaux civils, thermaux et sociaux les plus précieux, élégants et miraculeusement préservés du Caire médiéval. À une époque où la métropole comptait près de quatre-vingts établissements de bains publics dévoués à l'hygiène, à la détente et à la sociabilité urbaine, ce complexe thermal illustre le raffinement de l'art mamelouk burkite à travers ses superbes coupoles ajourées de verres colorés, ses voûtes de brique en étoile et son ingénieux système hydraulique alimenté par des canalisations souterraines. Destiné à accueillir les notables comme les gens du peuple dans des espaces décloisonnés selon les heures, le hammam conjuguait des salles de repos spacieuses, des bassins d'eau tiède et des étuves chaudes où la vapeur parfumée aux essences orientales offrait une parenthèse de bien-être au milieu de l'effervescence des souks et des processions princières.",
    visiter: "La découverte s'amorce en cheminant le long de la vibrante et historique rue Al-Muizz, à quelques pas des complexes de Qalawun et d'al-Salih Ayyub, pour repérer la sobre et élégante façade de pierre du bain public. En franchissant le seuil, le visiteur pénètre dans l'ancienne salle de repos et de déshabillage (bayt al-awwal), vaste espace central dont la lumière zénithale filtre à travers de minuscules ouvertures circulaires percées dans les coupoles pour créer une pénombre apaisante et intimiste. L'exploration se poursuit à travers les différentes salles thermales successives aux températures graduées — du tepidarium au caldarium —, permettant d'admirer les structures de maçonnerie anciennes, les sols en dalles de marbre patinées et les cheminées de chauffe préservées. Cette halte insolite au cœur du patrimoine civique de la vieille ville offre aux passionnés d'histoire orientale une page fascinante sur les arts de la vie quotidienne et l'ingénierie architecturale sous la dynastie des Mamelouks burkites.",
    link: "https://photos.google.com/share/AF1QipPveY8Q8lsqfxyBwImKztpZTuw9SNuAaXh9jboz_2ggxTkXmszTQoq5Bhp_jLZE8g?key=T280S0p5Wk5jS2VpTThWb250TThqQUpXNV9yZ3Zn"
  },
  {
    id: "caire_palais_beshtak",
    name: "Le Caire - Palais de Beshtak (Qasr Bashtak)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat du Caire",
    department: "Le Caire",
    subdiv: "Le Caire historique",
    altitude: 22,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke Bahrite (XIVe siècle - 1334)",
    century: "XIVe siècle",
    category: "chateau",
     unesco_name: "Le Caire historique",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Alexandrie",
    department: "Alexandrie",
    subdiv: "Alexandrie",
    altitude: 10,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Mamelouke (XVe siècle - 1477)",
    century: "XVe siècle",
    category: "chateau",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Alexandrie",
    department: "Alexandrie",
    subdiv: "Alexandrie",
    altitude: 8,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine (2001) & Architecture Moderne",
    century: "XXIe siècle",
    category: "pont",
    lat: 31.2353,
    lng: 29.9489,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNidNeCe7FYHzIohB40iTQSJ-KMhlrsCQJDoJvMlG2kTI5VnYPCnWWGZUP4y-KoYjsubVk7ap1jLyja2QfRrxOe3gNN1vW0FeUU1Wzu3SuMLr-FtXE9VhKy5ZTVY37oLIvqImd4gjERYadK8FQ0MdowNQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Élégant ruban de béton et d'acier jeté au-dessus des eaux azurées du golfe de Stanley sur la grande corniche d'Alexandrie, le pont de Stanley s'impose comme l'un des chefs-d'œuvre architecturaux contemporains les plus emblématiques de la métropole méditerranéenne. Inauguré en 2001 pour fluidifier la circulation côtière et valoriser le front de mer, cet ouvrage d'art long de quatre cents mètres se distingue par ses quatre superbes tours de style néo-mauresque inspirées de l'architecture des palais royaux du Caire et d'Alexandrie. S'étirant gracieusement en arc de cercle au-dessus de la plage et de la marina de Stanley, le pont offre un point de vue panoramique exceptionnel sur les vagues venant lécher les fondations de la corniche et sur les lumières chatoyantes de la ville qui s'embrasent au crépuscule. Véritable lieu de vie, de promenade nocturne et de rendez-vous incontournable pour les amoureux de la mer, l'édifice symbolise la transition harmonieuse entre le prestigieux passé cosmopolite de la fiancée de la Méditerranée et son dynamisme urbain moderne.",
    visiter: "La découverte s'amorce en empruntant les larges trottoirs piétonniers aménagés le long de la corniche pour s'avancer sur le pont au plus près des balustrades surplombant le vide marin. En cheminant d'une tour à l'autre, le regard embrasse une perspective spectaculaire sur les baies successives d'Alexandrie, le ballet des embarcations côtières et l'animation joyeuse des promeneurs accoudés au parapet. La descente vers la plage de Stanley en contrebas permet d'admirer l'ouvrage en contre-plongée, révélant la majesté de ses arches élancées éclairées à la tombée de la nuit par un subtil jeu de projecteurs. Les cafés et terrasses avoisinants invitent à une halte reposante pour déguster un thé à la menthe face aux flots en s'imprégnant de l'atmosphère maritime si caractéristique de la côte égyptienne. Cette étape architecturale moderne constitue une bouffée d'oxygène visuelle incontournable lors de l'exploration de la métropole alexandrine.",
    link: "https://photos.google.com/share/AF1QipPnYxYd2vfMd4_DmM5RWpIX_sRIZg9egw2MezXjyuS4hRUOZMcQgFW5CKniHiDzTQ?key=eHNQd3I3ZlFiejBtZUtsdWMzam14V2lka1BOZi1R"
  },
  {
    id: "alexandrie_musee_greco_romain",
    name: "Alexandrie - Musée Gréco-Romain",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Alexandrie",
    department: "Alexandrie",
    subdiv: "Alexandrie",
    altitude: 12,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Gréco-Romaine (Fondation 1892 & Rénovation 2023)",
    century: "Antiquité tardive & XXIe siècle",
    category: "musee",
    lat: 31.1991,
    lng: 29.9066,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNU6I8DoTu_NkMDK1jSC2mIGF2QDICnPm5W945WvkgDKpHvdcRRTeLwSN04_7SvEXx0C6GzZR3CPBw4G2MeFuhGSmfxn17vQ8y9Me9J_vpL9FX2uL25aCNz2rF4Tdbu2GUj7HZPvCLa1WPE42T0SxNHmQ=w2650-h1766-s-no-gm?authuser=0",
    description: "Institution muséographique majeure et prestigieuse de la Méditerranée orientale, le Musée Gréco-Romain d'Alexandrie abrite la plus fabuleuse collection au monde d'antiquités issues de la fusion des cultures grecque, romaine, pharaonique et chrétienne. Inauguré initialement en 1892 puis rouvert après une spectaculaire et profonde rénovation de long terme, ce sanctuaire de la science et de l'art abrite plus de quarante mille artefacts répartis à travers des salles lumineuses. De la célèbre tête en marbre blanc d'Alexandre le Grand aux magnifiques mosaïques polychromes de Bérénice II en passant par le monumental taureau Apis en granit et les délicates statuettes de Tanagra, chaque vitrine retrace le rayonnement intellectuel et cosmopolite de la capitale ptolémaïque. Les collections de monnaies antiques, de verreries ouvragées et de reliefs funéraires coptes témoignent du dialogue permanent entre les civilisations qui ont façonné l'histoire de la fiancée de la Méditerranée au fil des siècles.",
    visiter: "La découverte s'amorce par l'admiration de la noble façade néo-classique portant l'inscription grecque « Mouseion », avant de pénétrer dans les superbes galeries thématiques du rez-de-chaussée et de l'étage. Le parcours permet d'admirer de près le raffinement de la statuaire alexandrine où l'anatomie classique grecque épouse les symboles de la spiritualité égyptienne. Une halte prolongée s'impose devant les mosaïques murales exceptionnelles et les sculptures d'époque romaine témoignant du faste impérial sous Auguste et ses successeurs. Cette étape culturelle incontournable offre aux passionnés d'histoire antique une synthèse éblouissante des influences méditerranéennes au cœur même de la métropole alexandrine.",
    link: "https://photos.google.com/share/AF1QipPnYxYd2vfMd4_DmM5RWpIX_sRIZg9egw2MezXjyuS4hRUOZMcQgFW5CKniHiDzTQ?key=eHNQd3I3ZlFiejBtZUtsdWMzam14V2lka1BOZi1R"
  },
  {
    id: "alexandrie_theatre_romain",
    name: "Alexandrie - Théâtre Romain Antique (Kom el-Dikka)",
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Alexandrie",
    department: "Alexandrie",
    subdiv: "Alexandrie",
    altitude: 9,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Romaine Impériale (IIe-IVe siècle)",
    century: "Antiquité (IIe siècle)",
    category: "archeologie",
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
    country: "Égypte",
    continent: "Afrique",
    flag: "🇪🇬",
    region_admin: "Gouvernorat d'Alexandrie",
    department: "Alexandrie",
    subdiv: "Alexandrie",
    altitude: 5,
    is_island: false,
    transport: "route",
    era_group: "ptolemaique",
    era_label: "Époque Romaine Impériale (IIe-IVe siècle)",
    century: "Antiquité (IIe siècle)",
    category: "archeologie",
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
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse (2B)",
    subdiv: "Corte",
    altitude: 1743,
    is_island: true,
    island_name: "Corse",
    transport: "route",
    era_group: "nature",
    era_label: "Ère Glaciaire & Temps Géologique",
    century: "Temps géologique",
    category: "lac",
    lat: 42.2575,
    lng: 8.9405,
    image: "https://lh3.googleusercontent.com/pw/AP1GczOffslg_xvJ4kz3UwA46OCvLiQQ8HgO5_n6LBl4EchL5DDN_DeEkv4EzGRseb3NlTtyLxSXmYezSfQEZhddBZDGpPRyCNKT7Ae_d0KGx89OuDQUCUbU6TbO08b1EsR20nJyjUU2By4_zk96E43aOV2iqQ=w2318-h1546-s-no-gm?authuser=0",
    description: "Perché à 1 743 mètres d'altitude au cœur du Parc Naturel Régional de Corse et dominé par les crêtes granitiques du massif du Rotondo, le lac de Nino constitue l'un des joyaux naturels les plus emblématiques de l'île de Beauté. Ce vaste lac glaciaire s'étend au milieu d'un plateau d'altitude tapissé de pozzines verdoyantes, véritables pelouses tourbeuses constellées d'eaux reliées par de délicats méandres scintillants. Véritable oasis suspendue entre ciel et montagne le long du mythique sentier du GR20, le site offre un spectacle féerique où paissent paisiblement en semi-liberté des chevaux insulaires sauvages accompagnés de leurs poulains. Le contraste saisissant entre la douceur des pelouses spongieuses, la limpidité des eaux calmes et l'austérité minérale des parois rocheuses environnantes confère à cet écrin préservé une atmosphère empreinte d'une poésie et d'une sérénité incomparables.",
    visiter: "L'accès pédestre à ce sanctuaire d'altitude s'effectue principalement depuis la maison forestière de Popaghja dans la forêt territoriale de Valdu Niellu, ou via une traversée spectaculaire par le col de Vergio et la crête de Bocca a Reta. L'ascension débute à l'ombre bienfaisante des grands pins laricio avant de déboucher sur un univers minéral et grandiose récompensé par un panorama exceptionnel s'étirant jusqu'au golfe de Sagone et aux sommets environnants. Sur place, la découverte se poursuit en longeant avec précaution les berges herbeuses et les pozzines afin de préserver cet écosystème montagnard d'une grande fragilité, tout en observant à distance respectueuse la harde de chevaux sauvages en pâture. La luminosité changeante au fil de la journée sublime les reflets des crêtes dans le miroir d'eau, invitant à une halte contemplative inoubliable au cœur des grands espaces corses.",
    link: "https://photos.google.com/share/AF1QipOcHfU1z-tymFZfCQ5g7e273NPu_R8fhW62j5S8mqfHfOE8BK_jxQ79ANOfhH5n0Q?key=WVpIbVlIbXNrREllVTFMSVk0UmFnVWV6ZlpzZWJn"
  },
  {
    id: "farinole_sentier_douaniers",
    name: "Farinole & Sentier des Douaniers",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse (2B)",
    subdiv: "Farinole",
    altitude: 35,
    is_island: true,
    island_name: "Corse",
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Génoise (XVIe siècle - 1562)",
    century: "XVIe siècle",
    category: "rando",
    lat: 42.7184,
    lng: 9.3284,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMJZxrY8toY64F7BFxDsmqaxYEDxY9HN9b2NY0rMk8xnLUHSsgd4TdQ2ucSKJjdzSCqaIpEnSFMS2gvFbz5zysBVivKQXiCAyGLmdhIMzkrV7rk3SMrZczJkJnnlN3T3zxd23xpiDrEz1Ppvupq_1YZBg=w2948-h2219-s-no-gm?authuser=0",
    description: "Sentinelle sauvage dressée sur le littoral occidental du Cap Corse entre Patrimonio et Nonza, Farinole déploie une côte rocheuse tourmentée où la rudesse du schiste vert et des falaises plonge directement dans les flots turquoise de la Méditerranée. Témoin privilégié de l'histoire maritime insulaire, la tour génoise ronde bâtie en 1562 veille sur les anses marines et les déferlantes qui viennent fouetter les galets polis et le sable ocre du rivage. Le sentier des douaniers qui serpente à fleur de crête et en corniche offre une immersion totale dans les parfums entêtants de myrte, d'immortelle et de lentisque courbés par les embruns marins. Les contrastes chromatiques y sont d'une intensité saisissante, mêlant le bleu profond du grand large, la verdure argentée du maquis littoral et les nuances sombres des affleurements rocheux balayés par le vent d'ouest. Cet écrin naturel remarquablement préservé incarne la beauté brute et indomptée des marines corses, où chaque crique isolée murmure les récits séculaires des guetteurs d'autrefois.",
    visiter: "L'itinéraire pédestre s'aborde idéalement depuis la marine de Farinole ou les abords de la tour génoise pour longer les reliefs découpés surplombant les criques secrètes et les platiers rocheux du rivage. La marche en balcon dévoile des perspectives grandioses sur le golfe de Saint-Florent et les crêtes montagneuses du Nebbio se détachant à l'horizon. Les amateurs d'exploration marine trouveront dans les eaux cristallines bordant les récifs un terrain de jeu exceptionnel pour le snorkeling et la plongée, révélant une vie sous-marine foisonnante tapie entre tombants de roche et herbiers de posidonie. Les plages de sable et de galets invitent à des haltes de baignade vivifiantes dans une atmosphère paisible loin des fortes affluences. En fin de journée, l'exposition plein ouest transforme le littoral en un théâtre flamboyant où le soleil couchant embrase les tours côtières et la mer, offrant aux promeneurs une halte contemplative inoubliable au cœur du Cap Corse sauvage.",
    link: "https://photos.google.com/share/AF1QipPxc5QdKcOU0QmdDvl5D9EF4pPEd0SIms-Nsinc6b5yLpoO369hYwpzX592PVZRNw?key=OWZVUnZLSk9kQWJJZS11ODg5VE52WmUxcEpxb3dB"
  },
  {
    id: "chateau_de_chambord",
    name: "Château de Chambord",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher (41)",
    subdiv: "Chambord",
    altitude: 83,
    is_island: false,
    transport: "route",
    era_group: "renaissance",
    era_label: "Époque Moderne & Renaissance (XVIe siècle - 1519)",
    century: "XVIe siècle",
    category: "chateau",
     unesco_name: "Val de Loire entre Sully-sur-Loire et Chalonnes",
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
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Centre-Val de Loire",
    department: "Loir-et-Cher (41)",
    subdiv: "La Chapelle-Vendômoise",
    altitude: 115,
    is_island: false,
    transport: "route",
    era_group: "prehistoire",
    era_label: "Époque Néolithique (Mégalithisme Ancien)",
    century: "Néolithique",
    category: "megalithe",
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
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Malestroit",
    altitude: 21,
    is_island: false,
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Médiévale (XIIe - XVIe siècle)",
    century: "Moyen Âge (XIIe siècle)",
    category: "religieux",
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
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Malestroit",
    altitude: 19,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Industrielle (XIXe siècle)",
    century: "XIXe siècle",
    category: "pont",
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
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Bretagne",
    department: "Morbihan (56)",
    subdiv: "Arzon",
    altitude: 15,
    is_island: false,
    transport: "route",
    era_group: "contemporain",
    era_label: "Époque Contemporaine & Littorale",
    century: "XXe siècle",
    category: "",
    lat: 47.5483,
    lng: -2.9191,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPpn3mcbR_cefuqRbq7u0gfKmaYd3BYCwmfwpWzA_qZfaRV1Xkq2B7_4yJoS4L6423l8B4N6Nm8L5yXDn3FIXHb0GiijFzHAbLeEPd1liLDJFrW3wY6-dRUes7GZQnz9KExWmFPMoei6F0mA9LDuuZOHg=w2506-h1879-s-no-gm?authuser=0",
    description: "Avancée rocheuse spectaculaire marquant la pointe occidentale de la presqu'île de Rhuys, le promontoire de Port Navalo veille tel un gardien de pierre à l'embouchure du golfe du Morbihan, là où les eaux tumultueuses de l'océan Atlantique viennent se heurter aux courants intérieurs de la petite mer. Site naturel d'une beauté saisissante façonné par les vents et les marées parmi les plus puissantes d'Europe, ce promontoire offre un panorama grandiose sur l'entrée du golfe, le phare historique, les îles de Houat et Hoedic au large, ainsi que sur le ballet incessant des voiliers et des navires reliant les îles d'un archipel légendaire. Fréquenté depuis la nuit des temps par les marins et les navigateurs redoutant la violence de ses remous, le site allie la rudesse de son cordon granitique littoral à la douceur iodée des paysages bretons du Morbihan.",
    visiter: "La découverte s'amorce par les sentiers côtiers aménagés le long des falaises dominant les courants marins, permettant d'observer les remous spectaculaires de la marée montante ou descendante. En contournant la pointe vers le sémaphore et le vieux port, le visiteur profite d'une vue à trois cent soignante degrés idéale pour admirer les couchers de soleil flamboyants sur l'océan. C'est l'étape parfaite pour respirer l'air du large et s'imprégner de l'atmosphère maritime de la presqu'île de Rhuys avant d'embarquer vers les îles.",
    link: "https://photos.google.com/share/AF1QipPb2RZUrZYfIddwN_N0UP-fz4jVTYg8fCDgm8Y9JSsv2B5LfXJfa4tlgBswvp_R2Q?key=RlpMbXVDNWdZSTJpYm1QeEFvVm9HOWxLZlVoMUlR"
  },
  {
    id: "cascade_pont_bucatoghju",
    name: "Cascade & Pont génois du Bucatoghju",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Corse",
    department: "Haute-Corse (2B)",
    subdiv: "San-Nicolao",
    altitude: 240,
    is_island: true,
    island_name: "Corse",
    transport: "route",
    era_group: "medievale",
    era_label: "Époque Génoise & Pastorale",
    century: "XVIe siècle",
    category: "cascade",
    lat: 42.3612,
    lng: 9.5002,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNrsUFdD0qItTqvLjxxr-mtuoXqc_8g4crUQGLnmXt7hAUfoVXrp-MdsOEQqj1TAC2WXu7VRHUZcXHMeABVJCzEhGLZ2wkeEqlo_wOL4I090xq9ikLGa--M3Z1LEGHRUxZvJnsbTOdxr05oRY8RTgdseg=w2441-h1627-s-no-gm?authuser=0",
    description: "Niché sur les contreforts orientaux de la Castagniccia au cœur de la verdoyante région de la Costa Verde, le site du Bucatoghju dévoile une harmonie saisissante entre patrimoine d'ingénierie historique et nature insulaire préservée. Encaissé dans une gorge sauvage entre Santa-Maria-Poggio et San-Nicolao, le torrent bondissant du Bucatoghju se fraie un passage impétueux à travers les parois de schiste pour donner naissance à une succession de cascades impétueuses et de vasques cristallines aux reflets émeraude. Fièrement campé au-dessus des eaux vives depuis des siècles, le remarquable pont génois à arche unique en pierres sèches témoigne de l'antique voie de communication pastorale qui reliait jadis les communautés villageoises perchées aux plaines fertiles de la côte tyrrhénienne. Entouré d'une dense châtaigneraie, d'aulnes ombragés et d'un maquis odorant qui embaume l'air humide des sous-bois, cet écrin de fraîcheur offre un contraste saisissant avec la douceur du littoral marin tout proche, invitant à une parenthèse enchantée au son apaisant du ruissellement continu de la rivière.",
    visiter: "La découverte de ce site emblématique s'articule autour d'un agréable itinéraire pédestre ombragé et très accessible, cheminant au fil de l'eau entre ponts de pierre et berges moussues. Le parcours franchit le pont génois du Bucatoghju avant de remonter le long du lit du cours d'eau pour atteindre les piscines naturelles propices à des haltes de baignade vivifiantes durant la période estivale. Les randonneurs plus aguerris pourront poursuivre la marche en boucle pour découvrir les vestiges du hameau en ruine de Raghja, la chapelle Saint-Pancrace ou monter vers les tunnels de la corniche découvrant la célèbre cascade de l'Ucelluline et ses panoramas spectaculaires plongeant directement vers la mer Tyrrhénienne. Des passages aménagés sur des rondins et des galets ponctuent la progression au cœur d'une végétation luxuriante où la lumière filtre délicatement à travers les frondaisons. Cette balade constitue une immersion idéale pour les familles comme pour les passionnés d'histoire corse désireux d'associer fraîcheur montagnarde et découverte patrimoniale.",
    link: "https://photos.google.com/share/AF1QipPPgIE0CNEMhbKL0s6wFIjQQ5PsVF0DmZsFf82B0Z5jUUzkl29-fpUDw9woAze_aA?key=VEYwVzBzcldLd24tUzR1Y0VyeVFpQVlwWlpkMG9R"
  },
  {
    id: "giverny_maison_monet",
    name: "Giverny & Maison de Claude Monet",
    country: "France",
    continent: "Europe",
    flag: "🇫🇷",
    region_admin: "Normandie",
    department: "Eure (27)",
    subdiv: "Giverny",
    altitude: 22,
    is_island: false,
    transport: "avion",
    era_group: "contemporain",
    era_label: "Époque Impressionniste (1883)",
    century: "XIXe siècle",
    category: "ville",
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
  tous: { label: "Tous les POI", icon: "fa-earth-americas", color: "#f59e0b", section: "culture", active: true },
  musee: { label: "Musée", icon: "fa-landmark", color: "#a16207", section: "culture", active: true },
  religieux: { label: "Édifice religieux", icon: "fa-church", color: "#854d0e", section: "culture", active: true },
  chateau: { label: "Château / Palais", icon: "fa-chess-rook", color: "#713f12", section: "culture", active: true },
  pont: { label: "Ponts & Ouvrages d'art", icon: "fa-archway", color: "#a16207", section: "culture", active: true },
  place: { label: "Places de village & centre-ville", icon: "fa-square-parking", color: "#b45309", section: "culture", active: true },
  fontaine: { label: "Fontaines & Sources", icon: "fa-droplet", color: "#0284c7", section: "culture", active: true },
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
        spots: [],
        villes: new Set()
      });
    }
    const entry = countryMap.get(country);
    entry.spots.push(s);
    if (s.subdiv) {
      entry.villes.add(s.subdiv);
    }
  });

  const sortedCountries = Array.from(countryMap.values()).sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  if (badge) badge.innerText = `${sortedCountries.length} explorés`;

  sortedCountries.forEach(c => {
    const nbVilles = c.villes.size;
    const nbSites = c.spots.length;

    const row = document.createElement('div');
    row.className = 'flex items-center justify-between p-1.5 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/20 hover:border-indigo-400/50 cursor-pointer transition select-none group';
    row.innerHTML = `
      <div class="flex items-center gap-2 min-w-0 pr-1">
        <span class="text-base shrink-0 group-hover:scale-110 transition-transform">${c.flag}</span>
        <span class="text-xs font-semibold text-indigo-100 group-hover:text-white truncate">${c.name}</span>
      </div>
      <span class="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-900/70 border border-indigo-500/40 text-indigo-300 shrink-0">
        ${nbVilles} ville${nbVilles > 1 ? 's' : ''} · ${nbSites} site${nbSites > 1 ? 's' : ''}
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
// ==========================================
// BLOC CLUSTERS UNESCO (À COLLER ICI)
// ==========================================

function isOnlyUnescoFilterActive() {
  if (!CATEGORIES.unesco || !CATEGORIES.unesco.active) return false;
  return Object.keys(CATEGORIES).every(key => key === 'unesco' ? CATEGORIES[key].active : !CATEGORIES[key].active);
}

function getUnescoClustersData() {
  const unescoMap = new Map();
  travelSpots.forEach(s => {
    const isUnesco = Boolean(s.unesco_name || s.category === 'unesco' || (s.counts && s.counts.unesco));
    if (!isUnesco) return;
    const fullName = s.unesco_name || s.name;

    // Nom court pour que la pastille reste fine et sur une seule ligne
    let shortName = fullName;
    if (fullName.includes("Val de Loire")) shortName = "Val de Loire";
    else if (fullName.includes("Memphis")) shortName = "Gizeh à Dahchour";
    else if (fullName.includes("Thèbes")) shortName = "Thèbes antique";
    else if (fullName.includes("Nubie")) shortName = "Abou Simbel à Philae";
    else if (fullName.includes("Le Caire")) shortName = "Le Caire historique";
    else if (fullName.includes("Shirakawa")) shortName = "Shirakawa-gō";
    else if (fullName.includes("Fujisan")) shortName = "Mont Fuji";
    else if (fullName.includes("Corbusier")) shortName = "Le Corbusier";

    if (!unescoMap.has(fullName)) {
      unescoMap.set(fullName, {
        unescoName: fullName,
        shortLabel: shortName,
        spots: [],
        flag: s.flag || '🏛️',
        country: s.country
      });
    }
    unescoMap.get(fullName).spots.push(s);
  });

  const clusters = [];
  unescoMap.forEach((entry, fullName) => {
    const count = entry.spots.length;
    const avgLat = entry.spots.reduce((sum, sp) => sum + sp.lat, 0) / count;
    const avgLng = entry.spots.reduce((sum, sp) => sum + sp.lng, 0) / count;
    clusters.push({
      isUnescoCluster: true,
      unescoName: fullName,
      shortLabel: entry.shortLabel,
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

function openUnescoSummaryCard(cluster) {
  currentSelectedSpot = cluster.spots[0];
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

  if (indexEl) indexEl.innerText = `Patrimoine Mondial UNESCO`;
  flagEl.innerText = cluster.flag || '🏛️';
  regionEl.innerText = `${cluster.country} · Bien UNESCO`;
  img.src = cluster.spots[0].image;

  tagsContainer.innerHTML = `
    <div class="px-2.5 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider shadow flex items-center gap-1.5 border border-amber-400/40 bg-amber-900">
      <i class="fa-solid fa-award"></i><span>Bien UNESCO</span>
    </div>
    <div class="px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-200 uppercase tracking-wider shadow flex items-center gap-1.5 border border-amber-500/40 bg-slate-900">
      <i class="fa-solid fa-monument"></i><span>${cluster.count} site${cluster.count > 1 ? 's' : ''} exploré${cluster.count > 1 ? 's' : ''}</span>
    </div>
  `;

  title.innerText = cluster.unescoName;
  location.querySelector('span').innerText = `${cluster.lat.toFixed(4)}°N, ${cluster.lng.toFixed(4)}°E`;

  desc.innerHTML = `
    Ce bien inscrit au Patrimoine Mondial regroupe <strong>${cluster.count} monument${cluster.count > 1 ? 's' : ''}</strong> de vos voyages :
    <ul class="list-disc pl-4 mt-1.5 space-y-1">
      ${cluster.spots.map(s => `<li><strong>${s.name}</strong> (${s.century || s.era_label})</li>`).join('')}
    </ul>
  `;

  visiter.innerHTML = `
    <div class="text-slate-300">
      Monuments explorés au sein de ce bien :
      <div class="flex flex-col gap-1 mt-1.5">
        ${cluster.spots.map(s => `
          <button onclick="selectSpotById('${s.id}')" class="text-left px-2 py-1 rounded bg-slate-800 hover:bg-amber-950/60 border border-slate-700 text-amber-300 font-semibold text-[10px] flex items-center justify-between">
            <span>${s.name}</span> <i class="fa-solid fa-chevron-right text-[8px]"></i>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  link.href = cluster.spots[0].link;
  if (gmapsLink) {
    gmapsLink.href = `https://www.google.com/maps/search/?api=1&query=${cluster.lat},${cluster.lng}`;
  }

  updateSpotToggleButton();
  card.classList.remove('hidden');

  if (currentMode === 'globe' && myGlobe) {
    myGlobe.pointOfView({ lat: cluster.lat, lng: cluster.lng, altitude: 0.4 }, 1000);
  } else if (currentMode === 'map' && myLeafletMap) {
    myLeafletMap.flyTo([cluster.lat, cluster.lng], 11, { duration: 1.0 });
  }
}

// ==========================================
// FIN DU BLOC CLUSTERS UNESCO
// ==

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

// =========================================================================
// MOTEUR DE RECHERCHE PYRAMIDAL EN CASCADE (Pays > Région > Dép > Commune)
// =========================================================================

// Liste officielle et ordonnée de la chronologie du carnet
const ORDERED_CENTURY_GROUPS = [
  "Préhistoire",
  "Antiquité (avant J.-C.)",
  "Antiquité classique & Romaine (Ier - IVe s.)",
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

// Identifie rigoureusement à quelle(s) période(s) officielle(s) appartient un site
function getSpotCenturyMatches(spot) {
  const c = (spot.century || '').toLowerCase().trim();
  const matched = new Set();

  if (!c) return [];

  // 1. Préhistoire (uniquement l'activité humaine préhistorique et mégalithique)
  if (c.includes('préhist') || c.includes('mégalith') || c.includes('néolith') || c.includes('paléolith') || c.includes('âge du bronze') || c.includes('millénaire')) {
    matched.add("Préhistoire");
  }

  // 2. Antiquité avant notre ère (AVANT J.-C.)
  const isBeforeChrist = c.includes('av. j.-c.') || c.includes('av. jc') || c.includes('av.') || /-\s*\d+/.test(c) || c.includes('pharaon') || c.includes('ptolém');
  if (isBeforeChrist) {
    matched.add("Antiquité (avant J.-C.)");
  }

  // 3. Ier au IVe siècle de notre ère (après J.-C.)
  if (!isBeforeChrist) {
    if (/\b(i|ii|iii|iv|1|2|3|4)(er|e)?\s+siècle/i.test(c) || c.includes('romain') || c.includes('antiquité tardive')) {
      matched.add("Antiquité classique & Romaine (Ier - IVe s.)");
    }
  }

  // 4. Siècles du Ve au XXIe siècle (STRICTEMENT APRÈS J.-C.)
  // Si le texte mentionne "av. J.-C.", on INTERDIT le classement dans ces siècles modernes/médiévaux
  if (!isBeforeChrist) {
    const romanMap = [
      { label: "Ve siècle", regex: /\b(v|5)(e)?\s+siècle/i },
      { label: "VIe siècle", regex: /\b(vi|6)(e)?\s+siècle/i },
      { label: "VIIe siècle", regex: /\b(vii|7)(e)?\s+siècle/i },
      { label: "VIIIe siècle", regex: /\b(viii|8)(e)?\s+siècle/i },
      { label: "IXe siècle", regex: /\b(ix|9)(e)?\s+siècle/i },
      { label: "Xe siècle", regex: /\b(x|10)(e)?\s+siècle/i },
      { label: "XIe siècle", regex: /\b(xi|11)(e)?\s+siècle/i },
      { label: "XIIe siècle", regex: /\b(xii|12)(e)?\s+siècle/i },
      { label: "XIIIe siècle", regex: /\b(xiii|13)(e)?\s+siècle/i },
      { label: "XIVe siècle", regex: /\b(xiv|14)(e)?\s+siècle/i },
      { label: "XVe siècle", regex: /\b(xv|15)(e)?\s+siècle/i },
      { label: "XVIe siècle", regex: /\b(xvi|16)(e)?\s+siècle/i },
      { label: "XVIIe siècle", regex: /\b(xvii|17)(e)?\s+siècle/i },
      { label: "XVIIIe siècle", regex: /\b(xviii|18)(e)?\s+siècle/i },
      { label: "XIXe siècle", regex: /\b(xix|19)(e)?\s+siècle/i },
      { label: "XXe siècle", regex: /\b(xx|20)(e)?\s+siècle/i },
      { label: "XXIe siècle", regex: /\b(xxi|21)(e)?\s+siècle/i }
    ];

    romanMap.forEach(r => {
      if (r.regex.test(c)) {
        matched.add(r.label);
      }
    });
  }

  return Array.from(matched);
}

function spotMatchesCentury(spot, chosenGroup) {
  if (!chosenGroup || chosenGroup === 'all') return true;
  const matches = getSpotCenturyMatches(spot);
  return matches.includes(chosenGroup);
}
function initAdvancedFiltersCascade() {
  const countrySel = document.getElementById('adv-filter-country');
  const regionSel = document.getElementById('adv-filter-region');
  const deptSel = document.getElementById('adv-filter-dept');
  const citySel = document.getElementById('adv-filter-city');
  const catSel = document.getElementById('adv-filter-category');
  const islandSel = document.getElementById('adv-filter-island');
  const centurySel = document.getElementById('adv-filter-century');
  const unescoCheck = document.getElementById('adv-filter-unesco');

  if (!countrySel) return;

  // 1. Remplir les pays existants dans vos POI
  const countries = [...new Set(travelSpots.map(s => s.country).filter(Boolean))].sort();
  countrySel.innerHTML = '<option value="all">Tous les pays</option>' +
    countries.map(c => `<option value="${c}">${c}</option>`).join('');

  // 2. Remplir les catégories officielles (sans "ville" ni "tous")
  if (catSel) {
    const catKeys = Object.keys(CATEGORIES).filter(k => k !== 'tous' && k !== 'ville');
    catSel.innerHTML = '<option value="all">Toutes les catégories</option>' +
      catKeys.map(k => `<option value="${k}">${CATEGORIES[k].label || k}</option>`).join('');
  }

  // 3. Remplir les îles
  if (islandSel) {
    const islands = [...new Set(travelSpots.filter(s => s.is_island).map(s => s.island_name).filter(Boolean))].sort();
    islandSel.innerHTML = '<option value="all">Toutes les îles</option>' +
      islands.map(i => `<option value="${i}">${i}</option>`).join('');
  }

  // 4. Remplir la liste officielle des époques et siècles (Ve au XXIe)
  if (centurySel) {
    centurySel.innerHTML = '<option value="all">Tous les siècles / époques</option>' +
      ORDERED_CENTURY_GROUPS.map(g => `<option value="${g}">${g}</option>`).join('');
  }
  // 5. Écouteurs de changement en cascade
  countrySel.onchange = () => {
    updateCascadeRegions();
    runAdvancedFilter();
  };

  if (regionSel) {
    regionSel.onchange = () => {
      updateCascadeDepts();
      runAdvancedFilter();
    };
  }

  if (deptSel) {
    deptSel.onchange = () => {
      updateCascadeCities();
      runAdvancedFilter();
    };
  }

  if (citySel) citySel.onchange = () => runAdvancedFilter();
  if (catSel) catSel.onchange = () => runAdvancedFilter();
  if (centurySel) centurySel.onchange = () => runAdvancedFilter();
  if (islandSel) islandSel.onchange = () => runAdvancedFilter();
  if (unescoCheck) unescoCheck.onchange = () => runAdvancedFilter();
}

function updateCascadeRegions() {
  const country = document.getElementById('adv-filter-country')?.value;
  const regionSel = document.getElementById('adv-filter-region');

  if (!regionSel) return;

  if (!country || country === 'all') {
    regionSel.innerHTML = '<option value="all">Toutes les régions</option>';
    regionSel.disabled = true;
  } else {
    const spots = travelSpots.filter(s => s.country === country);
    const regions = [...new Set(spots.map(s => s.region_admin || s.region).filter(Boolean))].sort();
    regionSel.innerHTML = '<option value="all">Toutes les régions</option>' +
      regions.map(r => `<option value="${r}">${r}</option>`).join('');
    regionSel.disabled = regions.length === 0;
  }

  updateCascadeDepts();
}

function updateCascadeDepts() {
  const country = document.getElementById('adv-filter-country')?.value;
  const region = document.getElementById('adv-filter-region')?.value;
  const deptSel = document.getElementById('adv-filter-dept');

  if (!deptSel) return;

  if (!country || country === 'all' || !region || region === 'all') {
    deptSel.innerHTML = '<option value="all">Tous départements</option>';
    deptSel.disabled = true;
  } else {
    const spots = travelSpots.filter(s => s.country === country && (s.region_admin === region || s.region === region));
    const depts = [...new Set(spots.map(s => s.department).filter(Boolean))].sort();
    deptSel.innerHTML = '<option value="all">Tous départements</option>' +
      depts.map(d => `<option value="${d}">${d}</option>`).join('');
    deptSel.disabled = depts.length === 0;
  }

  updateCascadeCities();
}

function updateCascadeCities() {
  const country = document.getElementById('adv-filter-country')?.value;
  const region = document.getElementById('adv-filter-region')?.value;
  const dept = document.getElementById('adv-filter-dept')?.value;
  const citySel = document.getElementById('adv-filter-city');

  if (!citySel) return;

  if (!country || country === 'all') {
    citySel.innerHTML = '<option value="all">Toutes communes</option>';
    citySel.disabled = true;
    return;
  }

  let spots = travelSpots.filter(s => s.country === country);
  if (region && region !== 'all') {
    spots = spots.filter(s => s.region_admin === region || s.region === region);
  }
  if (dept && dept !== 'all') {
    spots = spots.filter(s => s.department === dept);
  }

  const cities = [...new Set(spots.map(s => s.subdiv).filter(Boolean))].sort();
  citySel.innerHTML = '<option value="all">Toutes communes</option>' +
    cities.map(c => `<option value="${c}">${c}</option>`).join('');
  citySel.disabled = cities.length === 0;
}

// Variable mémorisant le mode d'affichage ('grid' = mosaïque par défaut, 'list' = liste)
let currentAdvancedViewMode = 'grid';

function setAdvancedViewMode(mode) {
  currentAdvancedViewMode = mode;
  const btnGrid = document.getElementById('adv-view-grid-btn');
  const btnList = document.getElementById('adv-view-list-btn');

  if (mode === 'grid') {
    btnGrid?.classList.add('bg-cyan-500', 'text-white', 'shadow');
    btnGrid?.classList.remove('text-slate-400');
    btnList?.classList.remove('bg-cyan-500', 'text-white', 'shadow');
    btnList?.classList.add('text-slate-400');
  } else {
    btnList?.classList.add('bg-cyan-500', 'text-white', 'shadow');
    btnList?.classList.remove('text-slate-400');
    btnGrid?.classList.remove('bg-cyan-500', 'text-white', 'shadow');
    btnGrid?.classList.add('text-slate-400');
  }

  runAdvancedFilter();
}

function runAdvancedFilter() {
  const countryVal = document.getElementById('adv-filter-country')?.value || 'all';
  const regionVal = document.getElementById('adv-filter-region')?.value || 'all';
  const deptVal = document.getElementById('adv-filter-dept')?.value || 'all';
  const cityVal = document.getElementById('adv-filter-city')?.value || 'all';
  const catVal = document.getElementById('adv-filter-category')?.value || 'all';
  const centuryVal = document.getElementById('adv-filter-century')?.value || 'all';
  const islandVal = document.getElementById('adv-filter-island')?.value || 'all';
  const unescoOnly = document.getElementById('adv-filter-unesco')?.checked || false;

  const filtered = travelSpots.filter(s => {
    if (countryVal !== 'all' && s.country !== countryVal) return false;
    if (regionVal !== 'all' && (s.region_admin !== regionVal && s.region !== regionVal)) return false;
    if (deptVal !== 'all' && s.department !== deptVal) return false;
    if (cityVal !== 'all' && s.subdiv !== cityVal) return false;

    if (catVal !== 'all') {
      const isDirect = s.category === catVal;
      const inCounts = s.counts && typeof s.counts[catVal] === 'number' && s.counts[catVal] > 0;
      if (!isDirect && !inCounts) return false;
    }

    if (islandVal !== 'all') {
      if (s.island_name !== islandVal) return false;
    }

    if (centuryVal !== 'all') {
      if (typeof spotMatchesCentury === 'function') {
        if (!spotMatchesCentury(s, centuryVal)) return false;
      } else {
        if (s.century !== centuryVal) return false;
      }
    }

   if (unescoOnly) {
      const isUnesco = Boolean(
        s.unesco_name ||
        s.category === 'unesco' ||
        (s.counts && s.counts.unesco > 0)
      );
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
    listEl.className = 'w-full';
    listEl.innerHTML = `
      <div class="p-6 text-center text-xs text-slate-400 bg-slate-900/50 rounded-2xl border border-slate-800">
        <i class="fa-solid fa-magnifying-glass text-xl mb-2 text-slate-500"></i>
        <div>Aucun site ne correspond à cette combinaison de critères.</div>
      </div>
    `;
    return;
  }

  // --- RENDU EN MOSAÏQUE D'IMAGES (5 COLONNES SUR GRAND ÉCRAN) ---
  if (currentAdvancedViewMode === 'grid') {
    listEl.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-3';

    filtered.forEach(spot => {
      const card = document.createElement('div');
      card.className = 'group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-cyan-500/20 flex flex-col';

      const islandBadge = spot.is_island ? `<span class="px-1.5 py-0.5 rounded text-[8px] bg-cyan-950/90 border border-cyan-400 text-cyan-200 font-bold backdrop-blur-sm">🏝️ ${spot.island_name || ''}</span>` : '';
      const fallbackImg = 'https://placehold.co/600x400/0f172a/38bdf8?text=Voyage';

      card.innerHTML = `
        <div class="relative w-full h-28 sm:h-32 overflow-hidden bg-slate-950 shrink-0">
          <img src="${spot.image || fallbackImg}" alt="${spot.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='${fallbackImg}'">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div class="absolute top-1.5 left-1.5 flex items-center gap-1">
            <span class="text-xs px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-700/80">${spot.flag || '📍'}</span>
            ${islandBadge}
          </div>
          <div class="absolute bottom-1.5 left-2 right-2">
            <h4 class="text-xs font-bold text-white truncate drop-shadow">${spot.name}</h4>
          </div>
        </div>
        <div class="p-2 flex flex-col justify-between flex-1 gap-1 text-[10px]">
          <div class="text-cyan-400 truncate font-medium">
            <i class="fa-solid fa-location-dot text-[9px] mr-1"></i>${spot.subdiv || spot.department || spot.country}
          </div>
          <div class="flex items-center justify-between text-slate-400 text-[9px] pt-1 border-t border-slate-800/80">
            <span class="truncate">${spot.century || spot.era_group || ''}</span>
            <span class="text-cyan-400 font-bold group-hover:translate-x-0.5 transition-transform"><i class="fa-solid fa-chevron-right text-[8px]"></i></span>
          </div>
        </div>
      `;

      card.onclick = () => {
        closeAllPopups();
        selectSpot(spot);
      };

      listEl.appendChild(card);
    });

  // --- RENDU EN LISTE COMPACTE ALTERNATIVE ---
  } else {
    listEl.className = 'space-y-1.5';

    filtered.forEach(spot => {
      const item = document.createElement('div');
      item.className = 'flex items-center justify-between p-2 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition select-none group';

      const islandBadge = spot.is_island ? `<span class="px-1 py-0.2 rounded text-[8px] bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-bold ml-1">🏝️ ${spot.island_name || ''}</span>` : '';
      const locBreadcrumb = [spot.subdiv, spot.department, spot.country].filter(Boolean).join(' · ');

      item.innerHTML = `
        <div class="flex items-center gap-2 min-w-0 pr-1">
          <span class="text-sm shrink-0 group-hover:scale-110 transition-transform">${spot.flag || '📍'}</span>
          <div class="min-w-0">
            <div class="text-[11px] font-bold text-white truncate flex items-center">${spot.name} ${islandBadge}</div>
            <div class="text-[9px] text-cyan-400 truncate">${locBreadcrumb} · ${spot.century || spot.era_group || ''}</div>
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

  updateCascadeRegions();
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
    contemporain: { label: "XIXe - XXIe s.", span: "1883 à nos jours", icon: "🎨", count: 0, color: "#a855f7" },
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
        regions: new Set(),
        depts: new Set(),
        cities: new Set(),
        spots: []
      };
    }
    if (s.region_admin) subdivData[s.country].regions.add(s.region_admin);
    if (s.department) subdivData[s.country].depts.add(s.department);
    if (s.subdiv) subdivData[s.country].cities.add(s.subdiv);
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
    Object.keys(subdivData).sort().forEach(countryName => {
      const data = subdivData[countryName];
      const ref = COUNTRY_SUBDIV_TOTALS[countryName] || { type: "Régions", total: Math.max(data.regions.size, 10) };
      
      const mainCount = data.regions.size;
      const mainPct = Math.min(100, Math.round((mainCount / ref.total) * 100));

      const card = document.createElement('div');
      card.className = 'p-2 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5';

      let secondaryHtml = '';
      if (ref.depTotal && data.depts.size > 0) {
        const depPct = Math.min(100, Math.round((data.depts.size / ref.depTotal) * 100));
        secondaryHtml = `
          <div class="flex justify-between items-center text-[9px] text-slate-400 mt-1 border-t border-slate-900 pt-1">
            <span>${ref.depType || 'Subdivisions'} : ${Array.from(data.depts).join(', ')}</span>
            <span class="font-mono font-bold text-slate-300">${data.depts.size} / ${ref.depTotal} (${depPct}%)</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="flex justify-between items-center text-[11px] font-bold">
          <span class="text-white flex items-center gap-1.5">${data.flag} ${countryName}</span>
          <span class="font-mono text-cyan-300">${mainCount} / ${ref.total} ${ref.type.toLowerCase()}</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full" style="width: ${Math.max(3, mainPct)}%;"></div>
        </div>
        <div class="text-[9px] text-slate-400">
          <span class="text-slate-300 font-medium">Explorées :</span> ${Array.from(data.regions).join(', ') || 'Non renseigné'}
        </div>
        ${secondaryHtml}
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
           (s.region_admin && s.region_admin.toLowerCase().includes(q)) ||
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
          <div class="text-[9px] text-cyan-400 truncate">${spot.country} · ${spot.region_admin || spot.region || ''}</div>
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
    .globeImageUrl('https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg')
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
              <span class="font-mono text-xs font-black tracking-tight text-cyan-200 whitespace-nowrap">${d.islandName}</span>
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
       if (d.isUnescoCluster) {
        anchor.innerHTML = `
          <div class="relative flex items-center justify-center pointer-events-auto">
            <div class="px-2.5 py-1 rounded-full flex items-center gap-1.5 text-white font-bold text-xs bg-amber-950/95 border-2 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)] cursor-pointer hover:scale-115 transition-transform duration-150 whitespace-nowrap">
              <span class="text-xs">🏛️</span>
              <span class="font-mono text-xs font-black tracking-tight text-amber-200">${d.shortLabel}</span>
              <span class="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black">${d.count}</span>
            </div>
            <div class="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-lg bg-slate-950/95 border border-amber-400/50 text-[10px] font-bold text-amber-300 shadow-xl z-50">
              ${d.unescoName} (${d.count} site${d.count > 1 ? 's' : ''})
            </div>
          </div>
        `;
        anchor.onclick = (e) => {
          e.stopPropagation();
          openUnescoSummaryCard(d);
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
     const cat = CATEGORIES[activeCatKey] || CATEGORIES[spot.category] || (CATEGORIES.star || { color: '#eab308', icon: 'fa-star' });

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
      maxClusterRadius: 35,
      disableClusteringAtZoom: 13,
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
   if (isOnlyUnescoFilterActive()) {
    const unescoClusters = getUnescoClustersData();
    unescoClusters.forEach(cluster => {
      const unescoIcon = L.divIcon({
        className: 'custom-unesco-pin',
        html: `
          <div class="px-2 py-1 rounded-full flex items-center gap-1.5 bg-amber-950/95 border-2 border-amber-400 text-white shadow-xl cursor-pointer hover:scale-115 transition whitespace-nowrap">
            <span class="text-[11px]">🏛️</span>
            <span class="font-bold text-[10px] text-amber-200">${cluster.shortLabel}</span>
            <span class="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 font-black text-[9px]">${cluster.count}</span>
          </div>
        `,
        iconSize: 'auto',
        iconAnchor: [50, 13]
      });

      const marker = L.marker([cluster.lat, cluster.lng], { icon: unescoIcon });
      marker.bindTooltip(`<span>🏛️ ${cluster.unescoName} (${cluster.count} site${cluster.count > 1 ? 's' : ''})</span>`, {
        direction: 'top',
        offset: [0, -12],
        className: 'custom-leaflet-tooltip'
      });
      marker.on('click', () => openUnescoSummaryCard(cluster));
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
  const geoBreadcrumb = [spot.country, spot.region_admin || spot.region, spot.department, spot.subdiv].filter(Boolean).join(' · ');
  regionEl.innerText = geoBreadcrumb || spot.country;
  img.src = spot.image;
  img.classList.add('cursor-pointer', 'hover:opacity-90', 'transition');
  img.title = "Cliquer pour agrandir en plein écran";
  img.onclick = () => openPoiModalViewer(spot);

  if (img.parentElement) {
    img.parentElement.classList.add('cursor-pointer');
    img.parentElement.onclick = () => openPoiModalViewer(spot);
  }
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
  // L'île ne s'ajoute comme catégorie visuelle que si le site est explicitement tagué "ile"
  if (spot.category === 'ile' && !spotCategories.includes('ile')) {
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
  if (CATEGORIES.tous && CATEGORIES.tous.active) return true;

  // 1. Prise en charge universelle du filtre UNESCO quand il est coché
  if (CATEGORIES.unesco && CATEGORIES.unesco.active) {
    const isUnesco = Boolean(
      spot.category === 'unesco' ||
      spot.unesco_name ||
      spot.unesco ||
      spot.is_unesco ||
      (spot.counts && spot.counts.unesco) ||
      (Array.isArray(spot.tags) && spot.tags.includes('unesco'))
    );
    if (isUnesco) return true;
  }

  // 2. Vérifie les sous-catégories déclarées dans counts
  let matched = false;
  if (spot.counts) {
    Object.keys(spot.counts).forEach(catKey => {
      if (CATEGORIES[catKey] && CATEGORIES[catKey].active) matched = true;
    });
  }

  // 3. Catégorie principale du site si cochée
  if (!matched && spot.category && CATEGORIES[spot.category] && CATEGORIES[spot.category].active) {
    matched = true;
  }

  // 4. Catégorie île uniquement si le site est explicitement classé "ile"
  if (!matched && CATEGORIES.ile && CATEGORIES.ile.active && spot.category === 'ile') {
    matched = true;
  }

  return matched;
}

function getFirstActiveCategoryForSpot(spot) {
  // 1. Si tagué 'star' (incontournable) -> priorité absolue à 'star' (ÉTOILE JAUNE)
  if (spot.category === 'star') {
    return 'star';
  }

  // 2. Vérifie les sous-catégories spécifiques (counts)
  if (spot.counts) {
    for (let catKey of Object.keys(spot.counts)) {
      if (CATEGORIES[catKey] && CATEGORIES[catKey].active && catKey !== 'tous' && catKey !== 'ile') return catKey;
    }
  }

  // 3. Catégorie principale du spot si active
  if (spot.category && CATEGORIES[spot.category] && CATEGORIES[spot.category].active && spot.category !== 'ile') {
    return spot.category;
  }

  // 4. Catégorie 'ile' UNIQUEMENT si le spot a explicitement category: "ile"
  if (spot.category === 'ile') {
    return 'ile';
  }

  // 5. Par défaut : 'star' (étoile) si défini, sinon 'tous'
  return CATEGORIES.star ? 'star' : 'tous';
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
   if (isOnlyUnescoFilterActive()) {
    const unescoClusters = getUnescoClustersData();
    myGlobe.htmlElementsData(unescoClusters);
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
    // Ne jamais afficher de ligne "star" dans la colonne de gauche
    if (key === 'star') return;

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
    } else if (key === 'unesco') {
      // Décompte STRICT et EXACT des biens UNESCO uniques
      const uniqueUnescoSites = new Set();
      travelSpots.forEach(s => {
        const isUnesco = Boolean(
          s.unesco_name ||
          s.category === 'unesco' ||
          s.unesco ||
          s.is_unesco ||
          (s.counts && s.counts.unesco) ||
          (Array.isArray(s.tags) && s.tags.includes('unesco'))
        );
        if (isUnesco) {
          const unescoIdentifier = s.unesco_name || s.name;
          uniqueUnescoSites.add(unescoIdentifier);
        }
      });
      count = uniqueUnescoSites.size;
    } else {
      travelSpots.forEach(s => {
        const isDirect = (s.category === key);
        const inCounts = (s.counts && typeof s.counts[key] === 'number' && s.counts[key] > 0);
        if (isDirect || inCounts) {
          count += 1;
        }
      });
    }

   const row = document.createElement('label');
    row.className = 'flex items-center justify-between p-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 cursor-pointer transition select-none border border-slate-800/60';
    row.innerHTML = `
      <div class="flex items-center gap-2 min-w-0 pr-1">
        <input type="checkbox" ${cat.active ? 'checked' : ''} onchange="toggleCategory('${key}')" class="w-3.5 h-3.5 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-0 cursor-pointer shrink-0">
        <div class="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] shrink-0 shadow" style="background-color: ${cat.color};">
          <i class="fa-solid ${cat.icon}"></i>
        </div>
        <span class="text-slate-200 text-xs font-semibold truncate">${cat.label}</span>
      </div>
      <span class="min-w-[28px] text-center font-mono font-bold text-[11px] px-1.5 py-0.5 rounded bg-slate-950/70 border border-slate-800 shrink-0 ${count > 0 ? 'text-cyan-300' : 'text-slate-500'}"${tooltipText}>${count}</span>
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
  initAdvancedFiltersCascade();
  runAdvancedFilter();
  setTimeout(onWindowResize, 200);
};
function toggleStatisticsDashboard() {
  const modal = document.getElementById('statistics-dashboard-modal');
  if (!modal) return;
  const isHidden = modal.classList.toggle('hidden');
  if (!isHidden) {
    computeAllStatistics();
    renderCockpitDashboardDetails();
  }
}

function renderCockpitDashboardDetails() {
  const validSpots = travelSpots.filter(s => typeof s.lat === 'number' && typeof s.lng === 'number');
  if (validSpots.length === 0) return;

  // 1. Liste des Îles détaillées
  const islandBox = document.getElementById('stat-islands-breakdown');
  if (islandBox) {
    islandBox.innerHTML = '';
    const islandsMap = {};
    validSpots.forEach(s => {
      if (s.is_island) {
        const name = s.island_name || 'Île non nommée';
        islandsMap[name] = (islandsMap[name] || 0) + 1;
      }
    });

    const sortedIslands = Object.entries(islandsMap).sort((a, b) => b[1] - a[1]);
    sortedIslands.forEach(([name, count]) => {
      const row = document.createElement('div');
      row.className = 'flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800';
      row.innerHTML = `
        <span class="text-slate-200 font-bold flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span> ${name}
        </span>
        <span class="font-mono text-cyan-300 font-black text-xs px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">${count} POI</span>
      `;
      islandBox.appendChild(row);
    });
  }

  // 2. Profil des étages d'altitude (Histogramme)
  const altBarsBox = document.getElementById('stat-alt-bars');
  if (altBarsBox) {
    altBarsBox.innerHTML = '';
    const tiers = [
      { label: "Littoral & Plaines (≤ 100m)", min: -100, max: 100, color: "from-blue-500 to-cyan-400" },
      { label: "Collines (101m - 500m)", min: 101, max: 500, color: "from-emerald-500 to-teal-400" },
      { label: "Moyenne Montagne (501m - 1200m)", min: 501, max: 1200, color: "from-amber-500 to-yellow-400" },
      { label: "Haute Altitude (> 1200m)", min: 1201, max: 9999, color: "from-rose-500 to-pink-500" }
    ];

    const spotsWithAlt = validSpots.filter(s => typeof s.altitude === 'number' && !isNaN(s.altitude));
    const total = spotsWithAlt.length || 1;

    tiers.forEach(t => {
      const count = spotsWithAlt.filter(s => s.altitude >= t.min && s.altitude <= t.max).length;
      const pct = Math.round((count / total) * 100);
      const bar = document.createElement('div');
      bar.className = 'space-y-1';
      bar.innerHTML = `
        <div class="flex justify-between text-[10px]">
          <span class="text-slate-300 font-medium">${t.label}</span>
          <span class="font-mono text-slate-400 font-bold">${count} sites (${pct}%)</span>
        </div>
        <div class="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
          <div class="bg-gradient-to-r ${t.color} h-full rounded-full" style="width: ${pct}%;"></div>
        </div>
      `;
      altBarsBox.appendChild(bar);
    });
  }

  // 3. Carte 5 : Records & Distinctions
  const recBox = document.getElementById('stat-records-container');
  if (recBox) {
    // Région championne
    const regionCounts = {};
    validSpots.forEach(s => {
      if (s.region_admin) regionCounts[s.region_admin] = (regionCounts[s.region_admin] || 0) + 1;
    });
    let topReg = "Aucune", topRegCount = 0;
    Object.entries(regionCounts).forEach(([r, c]) => {
      if (c > topRegCount) { topRegCount = c; topReg = r; }
    });

    // Époque championne
    const eraCounts = {};
    validSpots.forEach(s => {
      if (s.era_group) eraCounts[s.era_group] = (eraCounts[s.era_group] || 0) + 1;
    });
    let topEra = "Moderne", topEraCount = 0;
    Object.entries(eraCounts).forEach(([e, c]) => {
      if (c > topEraCount) { topEraCount = c; topEra = e; }
    });

    recBox.innerHTML = `
      <div class="p-3 rounded-xl bg-gradient-to-r from-amber-950/40 to-slate-950 border border-amber-500/30 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-sm shadow">
            👑
          </div>
          <div>
            <div class="text-[9px] uppercase font-bold text-amber-300">Région Star des Carnets</div>
            <div class="text-xs font-extrabold text-white">${topReg}</div>
          </div>
        </div>
        <span class="font-mono text-amber-300 font-black text-sm px-2.5 py-1 rounded-lg bg-amber-950/80 border border-amber-500/40">${topRegCount} POI</span>
      </div>

      <div class="p-3 rounded-xl bg-gradient-to-r from-purple-950/40 to-slate-950 border border-purple-500/30 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-sm shadow">
            ⏳
          </div>
          <div>
            <div class="text-[9px] uppercase font-bold text-purple-300">Époque Dominante</div>
            <div class="text-xs font-extrabold text-white capitalize">${topEra}</div>
          </div>
        </div>
        <span class="font-mono text-purple-300 font-black text-sm px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-500/40">${topEraCount} POI</span>
      </div>

      <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
        <div class="text-[9px] uppercase font-bold text-cyan-400 flex items-center gap-1.5">
          <i class="fa-solid fa-plane-departure text-cyan-400"></i> Densité de Voyage
        </div>
        <div class="text-[11px] text-slate-300 flex justify-between items-center">
          <span>Nombre total de sites indexés</span>
          <span class="font-mono text-cyan-300 font-black text-xs">${validSpots.length} POI</span>
        </div>
      </div>
    `;
  }
}
// ==========================================
// VISIONNEUSE PLEIN ÉCRAN DYNAMIQUE
// ==========================================

let activeModalIndex = 0;
let currentModalSpotList = [];

// Fonction principale d'affichage de la visionneuse
function openPoiModalViewer(spot) {
  if (typeof getFilteredSpots === 'function') {
    currentModalSpotList = getFilteredSpots();
  } else {
    currentModalSpotList = [spot];
  }
  
  activeModalIndex = currentModalSpotList.findIndex(s => s.id === spot.id);
  if (activeModalIndex === -1) {
    currentModalSpotList = [spot];
    activeModalIndex = 0;
  }

  renderModalSpot(spot);

  const modal = document.getElementById('poi-modal-viewer');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closePoiModalViewer() {
  const modal = document.getElementById('poi-modal-viewer');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function renderModalSpot(spot) {
  const modal = document.getElementById('poi-modal-viewer');
  if (!modal || !spot) return;

  // 1. Remplissage des textes et métadonnées
  const flagEl = document.getElementById('modal-flag');
  if (flagEl) flagEl.innerText = spot.flag || '📍';
  
  const breadcrumb = [spot.country, spot.region_admin, spot.department, spot.subdiv].filter(Boolean).join(' • ');
  const breadcrumbEl = document.getElementById('modal-breadcrumb');
  if (breadcrumbEl) breadcrumbEl.innerText = breadcrumb;

  const counterEl = document.getElementById('modal-counter');
  if (counterEl) counterEl.innerText = `${activeModalIndex + 1} / ${currentModalSpotList.length}`;

  const titleEl = document.getElementById('modal-title');
  if (titleEl) titleEl.innerText = spot.name;
  
  const coordsEl = document.getElementById('modal-coords');
  if (coordsEl) {
    coordsEl.innerHTML = `<i class="fa-solid fa-location-crosshairs text-cyan-400"></i> ${Number(spot.lat).toFixed(6)}°N, ${Number(spot.lng).toFixed(6)}°E`;
  }

  const altEl = document.getElementById('modal-altitude');
  if (altEl) {
    altEl.innerHTML = `<i class="fa-solid fa-mountain text-amber-400"></i> ${spot.altitude || 0} m`;
  }

  // Badge catégorie
  const catKey = spot.category;
  const catConf = (typeof CATEGORIES !== 'undefined' && CATEGORIES[catKey]) ? CATEGORIES[catKey] : { label: catKey, color: '#06b6d4' };
  const badgeCat = document.getElementById('modal-badge-cat');
  if (badgeCat) {
    badgeCat.innerText = catConf.label || catKey;
    badgeCat.style.backgroundColor = catConf.color || '#06b6d4';
    badgeCat.style.color = '#ffffff';
  }

  // Badge Époque / Siècle
  const badgeEra = document.getElementById('modal-badge-era');
  if (badgeEra) {
    badgeEra.innerText = spot.century || spot.era_label || spot.era_group || 'Patrimoine';
  }

  // Textes complets
  const descEl = document.getElementById('modal-description');
  if (descEl) descEl.innerText = spot.description || "Aucune description disponible.";

  const visitEl = document.getElementById('modal-visiter');
  if (visitEl) visitEl.innerText = spot.visiter || "Informations de visite à venir.";

  // Lien album
  const linkAlbum = document.getElementById('modal-album-link');
  if (linkAlbum) {
    if (spot.link) {
      linkAlbum.href = spot.link;
      linkAlbum.classList.remove('hidden');
    } else {
      linkAlbum.classList.add('hidden');
    }
  }

  // 2. Gestion intelligente de la photo et détection Paysage / Portrait
  const imgEl = document.getElementById('modal-image');
  const layout = document.getElementById('modal-body-layout');
  const imgWrapper = document.getElementById('modal-image-wrapper');
  const textWrapper = document.getElementById('modal-text-wrapper');

  if (imgEl) {
    imgEl.onload = function() {
      const isPortrait = this.naturalHeight > this.naturalWidth;

      if (isPortrait) {
        // MODE PORTRAIT : Côte à côte (Photo à gauche, Texte à droite)
        if (layout) layout.className = "flex-1 flex flex-col md:flex-row overflow-hidden";
        if (imgWrapper) imgWrapper.className = "relative bg-black flex items-center justify-center overflow-hidden w-full md:w-1/2 lg:w-3/5 h-1/2 md:h-full shrink-0 border-b md:border-b-0 md:border-r border-cyan-500/20";
        if (textWrapper) textWrapper.className = "w-full md:w-1/2 lg:w-2/5 h-1/2 md:h-full overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar";
      } else {
        // MODE PAYSAGE : Superposé (2/3 image en haut, 1/3 texte en bas)
        if (layout) layout.className = "flex-1 flex flex-col overflow-hidden";
        if (imgWrapper) imgWrapper.className = "relative bg-black flex items-center justify-center overflow-hidden w-full h-[62%] sm:h-[65%] shrink-0 border-b border-cyan-500/20";
        if (textWrapper) textWrapper.className = "flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar";
      }
    };

    imgEl.src = spot.image || '';
  }
}

// Navigation précédent / suivant
function navigateModalSpot(direction) {
  if (!currentModalSpotList.length) return;
  activeModalIndex = (activeModalIndex + direction + currentModalSpotList.length) % currentModalSpotList.length;
  const newSpot = currentModalSpotList[activeModalIndex];
  renderModalSpot(newSpot);
  
  if (typeof selectSpot === 'function') {
    selectSpot(newSpot);
  }
}

// Initialisation automatique de tous les boutons et raccourcis clavier
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-btn-close')?.addEventListener('click', closePoiModalViewer);
  document.getElementById('modal-btn-prev')?.addEventListener('click', () => navigateModalSpot(-1));
  document.getElementById('modal-btn-next')?.addEventListener('click', () => navigateModalSpot(1));
  document.getElementById('modal-arrow-left')?.addEventListener('click', () => navigateModalSpot(-1));
  document.getElementById('modal-arrow-right')?.addEventListener('click', () => navigateModalSpot(1));

  // Clic en dehors de la fenêtre pour fermer
  document.getElementById('poi-modal-viewer')?.addEventListener('click', (e) => {
    if (e.target.id === 'poi-modal-viewer') closePoiModalViewer();
  });

  // Touches Clavier : Échap pour fermer, Flèches Gauche/Droite
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('poi-modal-viewer');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') closePoiModalViewer();
    if (e.key === 'ArrowLeft') navigateModalSpot(-1);
    if (e.key === 'ArrowRight') navigateModalSpot(1);
  });
});
