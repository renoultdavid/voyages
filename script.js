/* =========================================================================
   FICHIER : script.js — Moteur cartographique, Globe 3D, Leaflet & UI
   ========================================================================= */

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
   Fusion des données POI (Volume 1 + Volume 2)
   ========================================================================= */
if (typeof SPOTS_2 !== 'undefined' && Array.isArray(SPOTS_2)) {
  travelSpots.unshift(...SPOTS_2);
}
/* =========================================================================
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
// BLOC CLUSTERS UNESCO
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

  card.classList.remove('hidden');

  if (currentMode === 'globe' && myGlobe) {
    myGlobe.pointOfView({ lat: cluster.lat, lng: cluster.lng, altitude: 0.4 }, 1000);
  } else if (currentMode === 'map' && myLeafletMap) {
    myLeafletMap.flyTo([cluster.lat, cluster.lng], 11, { duration: 1.0 });
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
// MOTEUR DE RECHERCHE PYRAMIDAL EN CASCADE
// =========================================================================

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

function getSpotCenturyMatches(spot) {
  const c = (spot.century || '').toLowerCase().trim();
  const matched = new Set();

  if (!c) return [];

  if (c.includes('préhist') || c.includes('mégalith') || c.includes('néolith') || c.includes('paléolith') || c.includes('âge du bronze') || c.includes('millénaire')) {
    matched.add("Préhistoire");
  }

  const isBeforeChrist = c.includes('av. j.-c.') || c.includes('av. jc') || c.includes('av.') || /-\s*\d+/.test(c) || c.includes('pharaon') || c.includes('ptolém');
  if (isBeforeChrist) {
    matched.add("Antiquité (avant J.-C.)");
  }

  if (!isBeforeChrist) {
    if (/\b(i|ii|iii|iv|1|2|3|4)(er|e)?\s+siècle/i.test(c) || c.includes('romain') || c.includes('antiquité tardive')) {
      matched.add("Antiquité classique & Romaine (Ier - IVe s.)");
    }
  }

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

  const countries = [...new Set(travelSpots.map(s => s.country).filter(Boolean))].sort();
  countrySel.innerHTML = '<option value="all">Tous les pays</option>' +
    countries.map(c => `<option value="${c}">${c}</option>`).join('');

  if (catSel) {
    const catKeys = Object.keys(CATEGORIES).filter(k => k !== 'tous' && k !== 'ville');
    catSel.innerHTML = '<option value="all">Toutes les catégories</option>' +
      catKeys.map(k => `<option value="${k}">${CATEGORIES[k].label || k}</option>`).join('');
  }

  if (islandSel) {
    const islands = [...new Set(travelSpots.filter(s => s.is_island).map(s => s.island_name).filter(Boolean))].sort();
    islandSel.innerHTML = '<option value="all">Toutes les îles</option>' +
      islands.map(i => `<option value="${i}">${i}</option>`).join('');
  }

  if (centurySel) {
    centurySel.innerHTML = '<option value="all">Tous les siècles / époques</option>' +
      ORDERED_CENTURY_GROUPS.map(g => `<option value="${g}">${g}</option>`).join('');
  }

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
// Dégradé d'intensité thermique des clusters (2D & 3D)
function getClusterHeatStyle(count) {
  if (count >= 50) {
    return {
      bg: 'rgba(236, 72, 153, 0.95)',      // Fuchsia néon (+50 sites)
      border: '#f472b6',
      shadow: '0 0 16px rgba(244, 114, 182, 0.85)',
      size: 38
    };
  } else if (count >= 30) {
    return {
      bg: 'rgba(249, 115, 22, 0.95)',      // Orange vif (30 à 49 sites)
      border: '#fb923c',
      shadow: '0 0 14px rgba(251, 146, 60, 0.8)',
      size: 35
    };
  } else if (count >= 15) {
    return {
      bg: 'rgba(245, 158, 11, 0.95)',      // Ambre / Doré (15 à 29 sites)
      border: '#fbbf24',
      shadow: '0 0 12px rgba(251, 191, 36, 0.75)',
      size: 32
    };
  } else if (count >= 5) {
    return {
      bg: 'rgba(16, 185, 129, 0.95)',      // Émeraude (5 à 14 sites)
      border: '#34d399',
      shadow: '0 0 10px rgba(52, 211, 153, 0.65)',
      size: 30
    };
  } else {
    return {
      bg: 'rgba(14, 116, 144, 0.95)',      // Cyan doux (2 à 4 sites)
      border: '#22d3ee',
      shadow: '0 0 8px rgba(34, 211, 238, 0.55)',
      size: 27
    };
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
        const heat = getClusterHeatStyle(count);

        anchor.innerHTML = `
          <div class="relative flex items-center justify-center pointer-events-auto">
            <div class="px-2.5 py-1 rounded-full flex items-center gap-1.5 text-white font-bold text-xs cursor-pointer hover:scale-120 transition-transform duration-150"
                 style="background-color: ${heat.bg}; border: 2px solid ${heat.border}; box-shadow: ${heat.shadow};">
              <span style="color: ${heat.border}; font-size: 10px;">📍</span>
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
        const count = cluster.getChildCount();
        const heat = getClusterHeatStyle(count);

        return L.divIcon({
          html: `<div style="background-color: ${heat.bg}; border: 2px solid ${heat.border}; box-shadow: ${heat.shadow}; width: ${heat.size}px; height: ${heat.size}px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 800; font-size: 11px; font-family: monospace;">${count}</div>`,
          className: '',
          iconSize: [heat.size, heat.size],
          iconAnchor: [heat.size / 2, heat.size / 2]
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
  if (link) {
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

  let matched = false;
  if (spot.counts) {
    Object.keys(spot.counts).forEach(catKey => {
      if (CATEGORIES[catKey] && CATEGORIES[catKey].active) matched = true;
    });
  }

  if (!matched && spot.category && CATEGORIES[spot.category] && CATEGORIES[spot.category].active) {
    matched = true;
  }

  if (!matched && CATEGORIES.ile && CATEGORIES.ile.active && spot.category === 'ile') {
    matched = true;
  }

  return matched;
}

function getFirstActiveCategoryForSpot(spot) {
  if (spot.category === 'star') {
    return 'star';
  }

  if (spot.counts) {
    for (let catKey of Object.keys(spot.counts)) {
      if (CATEGORIES[catKey] && CATEGORIES[catKey].active && catKey !== 'tous' && catKey !== 'ile') return catKey;
    }
  }

  if (spot.category && CATEGORIES[spot.category] && CATEGORIES[spot.category].active && spot.category !== 'ile') {
    return spot.category;
  }

  if (spot.category === 'ile') {
    return 'ile';
  }

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

  const recBox = document.getElementById('stat-records-container');
  if (recBox) {
    const regionCounts = {};
    validSpots.forEach(s => {
      if (s.region_admin) regionCounts[s.region_admin] = (regionCounts[s.region_admin] || 0) + 1;
    });
    let topReg = "Aucune", topRegCount = 0;
    Object.entries(regionCounts).forEach(([r, c]) => {
      if (c > topRegCount) { topRegCount = c; topReg = r; }
    });

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

// =========================================================================
// VISIONNEUSE GRAND ÉCRAN HYBRIDE : CARNET IMMERSIF & CARROUSEL CLASSIQUE
// =========================================================================

let activeModalIndex = 0;
let currentModalSpotList = [];
let currentSpotGallery = [];
let currentSpotGalleryIndex = 0;

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

 const container = document.getElementById('poi-modal-container');
  if (container) {
    container.className = "relative w-[98vw] max-w-[1700px] h-[96vh] bg-slate-900/95 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.25)] flex flex-col overflow-hidden text-slate-100";
  }

  const flagEl = document.getElementById('modal-flag');
  if (flagEl) flagEl.innerText = spot.flag || '📍';

  const breadcrumb = [spot.country, spot.region_admin || spot.region, spot.department, spot.subdiv].filter(Boolean).join(' • ');
  const breadcrumbEl = document.getElementById('modal-breadcrumb');
  if (breadcrumbEl) breadcrumbEl.innerText = breadcrumb;

  const counterEl = document.getElementById('modal-counter');
  if (counterEl) counterEl.innerText = `${activeModalIndex + 1} / ${currentModalSpotList.length}`;

  const layout = document.getElementById('modal-body-layout');
  if (!layout) return;

  const hasSections = Array.isArray(spot.sections) && spot.sections.length > 0;
  if (hasSections) {
    renderEnrichedCarnetMode(spot, layout);
  } else {
    renderClassicViewerMode(spot, layout);
  }
}

// -------------------------------------------------------------------------
// MODE 1 : CARNET DE VOYAGE (TEXTE D'ABORD, GRANDES PHOTOS EN DESSOUS)
// -------------------------------------------------------------------------
function renderEnrichedCarnetMode(spot, layout) {
  layout.className = "flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 space-y-12 custom-scrollbar bg-slate-950/80";

  const catKey = spot.category;
  const catConf = (typeof CATEGORIES !== 'undefined' && CATEGORIES[catKey]) ? CATEGORIES[catKey] : { label: catKey, color: '#06b6d4' };

  // 1. En-tête : Badges, Titre et Présentation générale (largeur élargie et responsive)
  let headerHtml = `
    <div class="space-y-4 w-full max-w-7xl mx-auto px-1 sm:px-4">
      <div class="space-y-2">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wide uppercase shadow" style="background-color: ${catConf.color || '#06b6d4'}; color: #fff;">
            ${catConf.label || catKey}
          </span>
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
            ${spot.century || spot.era_label || spot.era_group || 'Patrimoine'}
          </span>
          <span class="text-xs font-mono text-cyan-300 flex items-center gap-1">
            <i class="fa-solid fa-mountain text-amber-400"></i> ${spot.altitude || 0} m
          </span>
          ${spot.link ? `
            <a href="${spot.link}" target="_blank" class="ml-auto px-3 py-1 rounded-lg bg-cyan-950/80 hover:bg-cyan-700 border border-cyan-400/40 text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition">
              <i class="fa-solid fa-images"></i> Album Google Photos
            </a>
          ` : ''}
        </div>

        <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">${spot.name}</h2>
        <div class="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
          <i class="fa-solid fa-location-crosshairs text-cyan-400"></i> ${Number(spot.lat).toFixed(6)}°N, ${Number(spot.lng).toFixed(6)}°E
        </div>
      </div>

      ${spot.description ? `
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-inner">
          <h3 class="text-xs font-black tracking-wider uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open"></i> Présentation générale
          </h3>
          <p class="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed text-justify">${spot.description}</p>
        </div>
      ` : ''}
    </div>
  `;

  // 2. Sections de visite : Titre + Texte puis Galerie photo
  let sectionsHtml = '<div class="space-y-12 w-full max-w-7xl mx-auto px-1 sm:px-4">';
  spot.sections.forEach((sec) => {
    let photosMarkup = '';
    if (Array.isArray(sec.photos) && sec.photos.length > 0) {
      const count = sec.photos.length;

      if (count === 1) {
        // 1 photo unique
        photosMarkup = `
          <div class="w-full rounded-2xl overflow-hidden bg-slate-950/40 border border-slate-800/80 shadow-xl flex items-center justify-center p-1">
            <img src="${sec.photos[0]}" alt="${sec.title || spot.name}" class="w-full h-auto max-h-[82vh] rounded-xl object-contain cursor-zoom-in hover:opacity-95 transition block mx-auto" onclick="openLightboxZoom('${sec.photos[0]}', '${(sec.title || '').replace(/'/g, "\\'")}')">
          </div>
        `;
      } else if (count <= 4) {
        // 2 à 4 photos : rangée large ajustée à l'écran
        const rowHeight = count <= 2 ? 'h-[420px] sm:h-[520px] lg:h-[580px]' : 'h-[280px] sm:h-[340px] lg:h-[400px]';

        photosMarkup = `
          <div class="flex flex-row gap-2.5 w-full justify-center items-stretch rounded-2xl overflow-hidden bg-slate-950/40 border border-slate-800/80 shadow-xl p-2 sm:p-3">
            ${sec.photos.map(p => `
              <div class="${rowHeight} shrink min-w-0 flex items-center justify-center rounded-xl overflow-hidden bg-black/40">
                <img src="${p}" 
                     alt="${sec.title || spot.name}" 
                     class="w-auto h-full max-w-full object-contain cursor-zoom-in hover:scale-[1.01] transition-transform duration-150" 
                     onclick="openLightboxZoom('${p}', '${(sec.title || '').replace(/'/g, "\\'")}')">
              </div>
            `).join('')}
          </div>
        `;
      } else {
        // Plus de 4 photos (vitraux, collections denses)
        photosMarkup = `
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 w-full rounded-2xl overflow-hidden bg-slate-950/40 border border-slate-800/80 shadow-xl p-2 sm:p-3">
            ${sec.photos.map(p => `
              <div class="h-60 sm:h-72 flex items-center justify-center rounded-xl overflow-hidden bg-black/40 border border-slate-800/50 p-1">
                <img src="${p}" 
                     alt="${sec.title || spot.name}" 
                     class="w-auto h-full max-w-full object-contain cursor-zoom-in hover:scale-105 transition-transform duration-150" 
                     onclick="openLightboxZoom('${p}', '${(sec.title || '').replace(/'/g, "\\'")}')">
              </div>
            `).join('')}
          </div>
        `;
      }
    }
    sectionsHtml += `
      <article class="space-y-4">
        <div class="space-y-2">
          ${sec.title ? `<h4 class="text-base sm:text-lg lg:text-xl font-bold text-cyan-200 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-400"></span>${sec.title}</h4>` : ''}
          ${sec.text ? `<p class="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed text-justify bg-slate-900/60 p-4 sm:p-5 rounded-xl border border-slate-800/80">${sec.text.replace(/\n\n/g, '<br><br>')}</p>` : ''}
        </div>
        ${photosMarkup}
      </article>
    `;
  });
  sectionsHtml += '</div>';

  layout.innerHTML = headerHtml + sectionsHtml;
}
// -------------------------------------------------------------------------
// ZOOM PLEIN ÉCRAN AU CLIC (LIGHTBOX)
// -------------------------------------------------------------------------
function openLightboxZoom(src, title) {
  let box = document.getElementById('carnet-lightbox-zoom');
  if (!box) {
    box = document.createElement('div');
    box.id = 'carnet-lightbox-zoom';
    box.className = 'fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 select-none cursor-zoom-out';
    box.onclick = closeLightboxZoom;
    box.innerHTML = `
      <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700 text-white flex items-center justify-center hover:bg-rose-900/80 transition" onclick="closeLightboxZoom()">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
      <img id="carnet-lightbox-img" src="" alt="Agrandissement" class="max-w-[95vw] max-h-[88vh] object-contain rounded-lg shadow-2xl">
      <div id="carnet-lightbox-caption" class="mt-3 text-xs sm:text-sm text-slate-300 font-medium text-center px-4 max-w-3xl"></div>
    `;
    document.body.appendChild(box);
  }
  document.getElementById('carnet-lightbox-img').src = src;
  document.getElementById('carnet-lightbox-caption').innerText = title || '';
  box.style.display = 'flex';
}

function closeLightboxZoom() {
  const box = document.getElementById('carnet-lightbox-zoom');
  if (box) box.style.display = 'none';
}

function renderClassicViewerMode(spot, layout) {
  layout.className = "flex-1 flex flex-col md:flex-row overflow-hidden";
  layout.innerHTML = `
    <div id="modal-image-wrapper" class="relative bg-black flex items-center justify-center overflow-hidden w-full md:w-1/2 lg:w-3/5 h-1/2 md:h-full shrink-0 border-b md:border-b-0 md:border-r border-cyan-500/20">
      <img id="modal-image" src="" alt="Photo POI" class="max-w-full max-h-full object-contain select-none transition-opacity duration-200 cursor-zoom-in hover:opacity-95" />
      
      <button id="modal-arrow-left" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-cyan-500/80 border border-cyan-400/40 text-white flex items-center justify-center transition backdrop-blur-sm cursor-pointer shadow-lg z-20">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button id="modal-arrow-right" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-cyan-500/80 border border-cyan-400/40 text-white flex items-center justify-center transition backdrop-blur-sm cursor-pointer shadow-lg z-20">
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <div id="modal-gallery-counter" class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-bold shadow-lg backdrop-blur-sm z-20 hidden">1 / 1</div>
      <div id="modal-gallery-caption" class="absolute bottom-0 left-0 right-0 p-3 pt-6 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-[11px] sm:text-xs text-slate-200 text-center font-medium leading-relaxed backdrop-blur-[1px] z-10 hidden"></div>

      <a id="modal-album-link" href="#" target="_blank" class="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-950/80 hover:bg-cyan-600/90 border border-cyan-400/40 text-cyan-200 text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm transition shadow-lg z-20">
        <i class="fa-solid fa-images"></i> Album complet
      </a>
    </div>

    <div id="modal-text-wrapper" class="w-full md:w-1/2 lg:w-2/5 h-1/2 md:h-full overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span id="modal-badge-cat" class="px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wide uppercase shadow"></span>
          <span id="modal-badge-era" class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700"></span>
          <span id="modal-altitude" class="text-xs font-mono text-cyan-300 flex items-center gap-1"></span>
        </div>
        <h2 id="modal-title" class="text-xl sm:text-2xl font-black text-cyan-100 tracking-tight"></h2>
        <div id="modal-coords" class="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 mt-1"></div>
      </div>

      <div class="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5 sm:p-4">
        <h3 class="text-xs font-black tracking-wider uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-book-open text-[11px]"></i> Introduction & Histoire
        </h3>
        <p id="modal-description" class="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify"></p>
      </div>

      <div class="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5 sm:p-4">
        <h3 class="text-xs font-black tracking-wider uppercase text-emerald-400 mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-compass text-[11px]"></i> À Visiter & Incontournables
        </h3>
        <p id="modal-visiter" class="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify"></p>
      </div>
    </div>
  `;

  document.getElementById('modal-arrow-left')?.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateSpotGallery(-1);
  });
  document.getElementById('modal-arrow-right')?.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateSpotGallery(1);
  });

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

  const catKey = spot.category;
  const catConf = (typeof CATEGORIES !== 'undefined' && CATEGORIES[catKey]) ? CATEGORIES[catKey] : { label: catKey, color: '#06b6d4' };
  const badgeCat = document.getElementById('modal-badge-cat');
  if (badgeCat) {
    badgeCat.innerText = catConf.label || catKey;
    badgeCat.style.backgroundColor = catConf.color || '#06b6d4';
    badgeCat.style.color = '#ffffff';
  }

  const badgeEra = document.getElementById('modal-badge-era');
  if (badgeEra) {
    badgeEra.innerText = spot.century || spot.era_label || spot.era_group || 'Patrimoine';
  }

  const descEl = document.getElementById('modal-description');
  if (descEl) descEl.innerText = spot.description || "Aucune description disponible.";

  const visitEl = document.getElementById('modal-visiter');
  if (visitEl) visitEl.innerText = spot.visiter || "Informations de visite à venir.";


  currentSpotGallery = [{ url: spot.image || '', caption: '' }];
  if (Array.isArray(spot.gallery) && spot.gallery.length > 0) {
    spot.gallery.forEach(item => {
      if (item && item.url) currentSpotGallery.push(item);
    });
  }
  currentSpotGalleryIndex = 0;
  renderSpotGalleryImage();
}

function renderSpotGalleryImage() {
  if (!currentSpotGallery.length) return;

  const currentItem = currentSpotGallery[currentSpotGalleryIndex];
  const imgEl = document.getElementById('modal-image');
  const counterEl = document.getElementById('modal-gallery-counter');
  const captionEl = document.getElementById('modal-gallery-caption');
  const arrowLeft = document.getElementById('modal-arrow-left');
  const arrowRight = document.getElementById('modal-arrow-right');

  if (imgEl) {
    imgEl.src = currentItem.url;
    imgEl.onclick = () => {
      const activeSpot = currentModalSpotList[activeModalIndex];
      const spotTitle = activeSpot ? activeSpot.name : '';
      const captionText = currentItem.caption || spotTitle;
      openLightboxZoom(currentItem.url, captionText);
    };
  }

  const hasMultiplePhotos = currentSpotGallery.length > 1;
  if (arrowLeft) arrowLeft.style.display = hasMultiplePhotos ? 'flex' : 'none';
  if (arrowRight) arrowRight.style.display = hasMultiplePhotos ? 'flex' : 'none';

  if (counterEl) {
    if (hasMultiplePhotos) {
      counterEl.textContent = `${currentSpotGalleryIndex + 1} / ${currentSpotGallery.length}`;
      counterEl.classList.remove('hidden');
    } else {
      counterEl.classList.add('hidden');
    }
  }

  if (captionEl) {
    if (currentItem.caption && currentItem.caption.trim() !== '') {
      captionEl.textContent = currentItem.caption;
      captionEl.classList.remove('hidden');
    } else {
      captionEl.classList.add('hidden');
    }
  }
}

function navigateSpotGallery(direction) {
  if (currentSpotGallery.length > 1) {
    currentSpotGalleryIndex = (currentSpotGalleryIndex + direction + currentSpotGallery.length) % currentSpotGallery.length;
    renderSpotGalleryImage();
  }
}

function navigateModalSpot(direction) {
  if (!currentModalSpotList.length) return;
  activeModalIndex = (activeModalIndex + direction + currentModalSpotList.length) % currentModalSpotList.length;
  const newSpot = currentModalSpotList[activeModalIndex];
  renderModalSpot(newSpot);

  if (typeof selectSpot === 'function') {
    selectSpot(newSpot);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-btn-close')?.addEventListener('click', closePoiModalViewer);
  document.getElementById('modal-btn-prev')?.addEventListener('click', () => navigateModalSpot(-1));
  document.getElementById('modal-btn-next')?.addEventListener('click', () => navigateModalSpot(1));

  document.getElementById('poi-modal-viewer')?.addEventListener('click', (e) => {
    if (e.target.id === 'poi-modal-viewer') closePoiModalViewer();
  });

  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('poi-modal-viewer');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') closePoiModalViewer();
    if (e.key === 'ArrowLeft') {
      const hasSections = Array.isArray(currentModalSpotList[activeModalIndex]?.sections);
      if (hasSections) navigateModalSpot(-1);
      else navigateSpotGallery(-1);
    }
    if (e.key === 'ArrowRight') {
      const hasSections = Array.isArray(currentModalSpotList[activeModalIndex]?.sections);
      if (hasSections) navigateModalSpot(1);
      else navigateSpotGallery(1);
    }
  });
});
