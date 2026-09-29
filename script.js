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
  initAdvancedFiltersCascade();
  runAdvancedFilter();
  setTimeout(onWindowResize, 200);
};
