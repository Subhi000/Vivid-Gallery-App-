/**
 * VividGallery - Standalone Visual Exploration Platform
 * Javascript Controller (Pexels API Integrated)
 */

// --- 1. Gallery Dataset (Mock Images from Unsplash) ---
const GALLERY_DATA = [
  // Nature Category (IDs 1-3)
  {
    id: 1,
    title: "Mountain Peaks",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "A breathtaking view of snow-capped mountain peaks rising above thick evergreen forests under a vibrant morning sky."
  },
  {
    id: 2,
    title: "Tranquil Forest River",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    description: "A serene river winding gently through a dense, lush green forest during a warm golden hour sunset."
  },
  {
    id: 3,
    title: "Misty Autumn Forest",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    description: "A peaceful forest enveloped in autumn colors and morning mist, reflecting the quiet beauty of changing seasons."
  },
  
  // City Category (IDs 4-6)
  {
    id: 4,
    title: "Metropolis at Dusk",
    category: "City",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
    description: "An awe-inspiring urban cityscape glowing with evening lights, showcasing architectural marvels and highway trails."
  },
  {
    id: 5,
    title: "Golden Gate Fog",
    category: "City",
    imageUrl: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80",
    description: "The iconic suspension bridge emerging from ocean fog under a clear, warm afternoon sky."
  },
  {
    id: 6,
    title: "Cyberpunk Neon Streets",
    category: "City",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    description: "Bright neon billboards and busy night traffic painting light streaks across a futuristic modern metropolis."
  },

  // Animals Category (IDs 7-9)
  {
    id: 7,
    title: "Vigilant Red Fox",
    category: "Animals",
    imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80",
    description: "An alert red fox sitting gracefully amidst dry autumn grass, showing off its rich orange coat."
  },
  {
    id: 8,
    title: "Majestic Lion Portrait",
    category: "Animals",
    imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    description: "A close-up portrait of a powerful male lion resting peacefully in the warm African savanna grassland."
  },
  {
    id: 9,
    title: "Staring Snowy Owl",
    category: "Animals",
    imageUrl: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?auto=format&fit=crop&w=800&q=80",
    description: "A striking snowy owl perched silently against a soft blurred background, looking forward with intelligent yellow eyes."
  },

  // Sports Category (IDs 10-12)
  {
    id: 10,
    title: "Illuminated Football Field",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=800&q=80",
    description: "An empty, illuminated professional football stadium arena, ready for a major championship event."
  },
  {
    id: 11,
    title: "Athlete at Start Line",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    description: "A focused runner waiting at the start blocks of a professional track, preparing to sprint forward."
  },
  {
    id: 12,
    title: "Mountain Trail Cycling",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=800&q=80",
    description: "An extreme athlete navigating a rugged mountain singletrack trail on a bicycle during sunset."
  },

  // Travel Category (IDs 13-15)
  {
    id: 13,
    title: "Adventure Map Guide",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    description: "A vintage brass compass resting on an old world travel map, suggesting open-ended exploration and adventure."
  },
  {
    id: 14,
    title: "Secluded Tropical Paradise",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "A remote tropical beach featuring clear turquoise waters, soft white sand, and swaying palm trees."
  },
  {
    id: 15,
    title: "Eiffel Tower View",
    category: "Travel",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "A stunning perspective of the historic Eiffel Tower in Paris, surrounded by green foliage under a clear afternoon sky."
  },

  // Certificates Category (IDs 16-18)
  {
    id: 16,
    title: "Professional Achievement Award",
    category: "Certificates",
    imageUrl: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&w=800&q=80",
    description: "A clean layout of an official business certificate with gold embossed emblem on textured paper."
  },
  {
    id: 17,
    title: "Gold Award Trophy",
    category: "Certificates",
    imageUrl: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=800&q=80",
    description: "A shining gold trophy standing tall under studio spotlights, symbolizing exceptional success and victory."
  },
  {
    id: 18,
    title: "Graduation Honor Scroll",
    category: "Certificates",
    imageUrl: "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=800&q=80",
    description: "A rolled university diploma tied with a blue satin ribbon, representing dedication and academic milestone."
  },

  // Aesthetic Category (IDs 19-23)
  {
    id: 19,
    title: "Cozy Café Interior",
    category: "Aesthetic",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    description: "Warm glowing lights and rustic wooden textures creating a cozy, welcoming atmosphere in a local coffee shop."
  },
  {
    id: 20,
    title: "Minimalist Desk Setup",
    category: "Aesthetic",
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    description: "A clean, modern workspace featuring neutral tones, an elegant desktop display, and a tiny green plant."
  },
  {
    id: 21,
    title: "Vintage Camera & Journal",
    category: "Aesthetic",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    description: "An antique film camera placed neatly beside an open leather journal, evoking nostalgic traveling memories."
  },
  {
    id: 22,
    title: "Dreamy Sunset Silhouette",
    category: "Aesthetic",
    imageUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
    description: "An artistic silhouette view against a beautiful pastel gradient sky during a peaceful summer evening sunset."
  },
  {
    id: 23,
    title: "Neon City Lights",
    category: "Aesthetic",
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    description: "A narrow city street illuminated by vibrant pink and blue neon signs reflecting on the wet pavement."
  },

  // Clouds Category (IDs 24-28)
  {
    id: 24,
    title: "Cotton Candy Clouds",
    category: "Clouds",
    imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    description: "Soft, fluffy cloud formations painted in dreamy hues of pastel pink and violet during late evening twilight."
  },
  {
    id: 25,
    title: "Dramatic Storm Clouds",
    category: "Clouds",
    imageUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80",
    description: "Dark, swirling tempestuous storm clouds gathering overhead, showcasing nature's electric and powerful atmosphere."
  },
  {
    id: 26,
    title: "Golden Hour Skies",
    category: "Clouds",
    imageUrl: "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=800&q=80",
    description: "Warm sunlight breaking through scattered clouds, filling the horizon with golden, amber, and orange rays."
  },
  {
    id: 27,
    title: "Mountain Cloud Piercing",
    category: "Clouds",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "High mountain peaks piercing through a sea of white clouds, illustrating high-altitude alpine wilderness."
  },
  {
    id: 28,
    title: "Aerial Cloud Sea",
    category: "Clouds",
    imageUrl: "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?auto=format&fit=crop&w=800&q=80",
    description: "A spectacular view from an airplane window looking down at an endless ocean of rolling white clouds."
  },

  // Cars Category (IDs 29-33)
  {
    id: 29,
    title: "Luxury Sports Car",
    category: "Cars",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    description: "A high-performance modern sports car showing off clean lines and aggressive racing aesthetics."
  },
  {
    id: 30,
    title: "Classic Vintage Coupe",
    category: "Cars",
    imageUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
    description: "A beautifully restored vintage classic automobile with chrome accents, radiating nostalgic charm."
  },
  {
    id: 31,
    title: "Urban Supercar",
    category: "Cars",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    description: "A sleek, powerful supercar parked on a modern city street, reflecting metropolitan skyscrapers."
  },
  {
    id: 32,
    title: "Race Car Speed",
    category: "Cars",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    description: "A high-speed race car speeding down the asphalt curves of a professional grand prix circuit track."
  },
  {
    id: 33,
    title: "Electric Concept Vehicle",
    category: "Cars",
    imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    description: "A state-of-the-art electric car with a futuristic body design charging at an urban station."
  },

  // Galaxy Category (IDs 34-38)
  {
    id: 34,
    title: "Milky Way Arch",
    category: "Galaxy",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80",
    description: "A stellar panoramic photography showing the glowing galactic core arch of the Milky Way across a dark night sky."
  },
  {
    id: 35,
    title: "Nebula Cosmic Dust",
    category: "Galaxy",
    imageUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=800&q=80",
    description: "A colorful stellar nursery nebula composed of cosmic gas and space dust glowing in deep purple and magenta."
  },
  {
    id: 36,
    title: "Star-Filled Night",
    category: "Galaxy",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80",
    description: "Countless bright stars and distant suns illuminating the vast dark night sky canopy far from city light pollution."
  },
  {
    id: 37,
    title: "Deep Space Cosmos",
    category: "Galaxy",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    description: "An awe-inspiring perspective of far-off spiral galaxies, supernovas, and star clusters drifting in deep space."
  },
  {
    id: 38,
    title: "Cosmic Abstract Art",
    category: "Galaxy",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    description: "A beautiful artistic representation of galaxy collisions, energy discharges, and celestial elements in space."
  },

  // Planets Category (IDs 39-43)
  {
    id: 39,
    title: "Earth Horizon View",
    category: "Planets",
    imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80",
    description: "A breathtaking view of planet Earth's curvature, blue oceans, and glowing atmosphere from the orbit."
  },
  {
    id: 40,
    title: "Saturn Ring Orbit",
    category: "Planets",
    imageUrl: "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=800&q=80",
    description: "An artistic celestial rendering of Saturn with its detailed icy rings suspended in the deep cosmic void."
  },
  {
    id: 41,
    title: "Mars Red Surface",
    category: "Planets",
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80", // Fixed: Replaced blank image URL
    description: "A detailed panoramic view of Mars showing red dust deserts, canyons, and rocky mountain horizons under thin atmosphere."
  },
  {
    id: 42,
    title: "Jupiter Storm Swirls",
    category: "Planets",
    imageUrl: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?auto=format&fit=crop&w=800&q=80",
    description: "A high-contrast close-up focusing on Jupiter's dynamic atmosphere, colorful cloud bands, and storm vortices."
  },
  {
    id: 43,
    title: "Solar System Orbits",
    category: "Planets",
    imageUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=800&q=80",
    description: "A stylized conceptual representation of planetary spheres orbiting around a central bright yellow sun."
  }
];

// --- 2. educational facts dictionary for Lightbox ---
const FACTS_DATABASE = {
  nature: [
    "Bamboo is the fastest-growing woody plant in the world; it can grow up to 35 inches in a single day!",
    "Trees communicate with each other through an underground fungal network nicknamed the 'Wood Wide Web'!",
    "About 80% of Earth's oxygen is produced by marine organisms like algae and phytoplankton!"
  ],
  city: [
    "New York City is built on granite, which is strong enough to support massive skyscrapers!",
    "Tokyo is the most populous metropolitan area in the world, with over 37 million residents!",
    "Venice, Italy consists of 118 small islands separated by canals and linked by over 400 bridges!"
  ],
  animals: [
    "A fox's tail helps it balance, keeps it warm in winter, and is used to communicate with other foxes!",
    "Lions are the only cats that live in social groups, called prides, containing up to 40 lions!",
    "Snowy owls are diurnal, meaning unlike most other owls, they hunt and are active during both the day and night!"
  ],
  sports: [
    "The first modern Olympic Games were held in Athens, Greece, in 1896, with 14 participating nations!",
    "The soccer ball's classic black-and-white pentagon pattern was designed to be easily visible on black-and-white TVs!",
    "The Tour de France is the world's largest annual sporting event, covering over 3,000 kilometers!"
  ],
  travel: [
    "The Eiffel Tower can grow up to 6 inches taller during the summer due to thermal expansion of the iron!",
    "The Great Wall of China is not a single continuous wall, but a collection of walls built by different dynasties!",
    "The Maldives is the lowest-lying country in the world, with an average ground level of just 1.5 meters!"
  ],
  certificates: [
    "The word 'diploma' comes from the Greek meaning 'folded paper' or official document!",
    "Trophies date back to ancient Greece, where they were constructed on the battlefield to celebrate victories!",
    "Professional certifications can increase an individual's average earning potential by up to 20%!"
  ],
  aesthetic: [
    "The term 'aesthetic' was coined in the 18th century to describe the philosophy of art and beauty!",
    "Minimalism as an art movement emerged in New York in the 1960s, emphasizing extreme simplicity!",
    "Cozy café lighting is scientifically proven to lower cortisol levels and encourage creative writing!"
  ],
  clouds: [
    "Clouds look white because they reflect all wavelengths of sunlight equally!",
    "A single medium-sized cumulus cloud weighs about 1.1 million pounds—equivalent to about 100 elephants!",
    "No two clouds are exactly alike, as their shapes depend on constantly shifting wind, temperature, and moisture!"
  ],
  cars: [
    "The average modern car is made of about 30,000 unique individual parts!",
    "The first electric vehicle was built in the 1830s, long before gasoline cars became popular!",
    "A modern Formula 1 car can generate enough downforce to theoretically drive upside down on a ceiling at high speed!"
  ],
  galaxy: [
    "The Milky Way galaxy is estimated to be about 13.6 billion years old, nearly as old as the universe itself!",
    "There are more stars in the universe than there are grains of sand on all the beaches of planet Earth!",
    "Nebulae are stellar nurseries—massive clouds of gas and dust where new stars are born!"
  ],
  planets: [
    "Saturn's rings are not solid; they are composed of billions of individual particles of ice, rock, and dust!",
    "One day on Venus is longer than one year on Venus, because it rotates extremely slowly on its axis!",
    "Jupiter's Great Red Spot is a giant storm that is wider than the entire planet Earth and has raged for centuries!"
  ]
};

// --- 3. Local Storage State Management (Supports full Favorite Objects) ---
let favorites = JSON.parse(localStorage.getItem("gallery_favorites_items")) || [];
let viewedNature = JSON.parse(localStorage.getItem("viewed_nature_ids")) || [];
let viewedGalaxyCount = parseInt(localStorage.getItem("viewed_galaxy_count")) || 0;
let visitedCategories = JSON.parse(localStorage.getItem("visited_categories")) || ["all"];
let unlockedBadges = JSON.parse(localStorage.getItem("unlocked_badges")) || [];
let uploadedImages = JSON.parse(localStorage.getItem("gallery_uploaded_items")) || [];

// App State Variables
let currentCategory = "all";
let searchQuery = "";
let sortType = "default";
let activeFilteredItems = [...uploadedImages, ...GALLERY_DATA];
let activeLightboxIndex = 0;
let logoClicks = 0;
let logoClickTimeout;

// Global Explore Pexels State
let searchMode = "local"; // 'local' or 'explore'
let pexelsApiKey = localStorage.getItem("pexels_api_key") || "";
let pexelsQuery = "trending";
let pexelsPage = 1;
let pexelsPhotos = [];
let isFetchingPexels = false;

// --- 4. DOM Elements Cache ---
const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const favoritesFilterBtn = document.getElementById("favoritesFilterBtn");
const emptyState = document.getElementById("emptyState");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const favoritesCountSpan = document.getElementById("favoritesCount");

// Mode & Settings controllers
const modeToggler = document.getElementById("modeToggler");
const modeLocalBtn = document.getElementById("modeLocalBtn");
const modeExploreBtn = document.getElementById("modeExploreBtn");
const sortSelectWrapper = document.getElementById("sortSelectWrapper");
const apiKeyToggleBtn = document.getElementById("apiKeyToggleBtn");
const exploreTagList = document.getElementById("exploreTagList");

// Load More paginator
const loadMoreContainer = document.getElementById("loadMoreContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const loadMoreSpinner = document.getElementById("loadMoreSpinner");

// API Key Modal elements
const apiKeyModal = document.getElementById("apiKeyModal");
const apiModalClose = document.getElementById("apiModalClose");
const pexelsKeyInput = document.getElementById("pexelsKeyInput");
const apiSaveBtn = document.getElementById("apiSaveBtn");
const apiRemoveBtn = document.getElementById("apiRemoveBtn");

// Upload Modal elements
const uploadToggleBtn = document.getElementById("uploadToggleBtn");
const uploadModal = document.getElementById("uploadModal");
const uploadModalClose = document.getElementById("uploadModalClose");
const dragDropZone = document.getElementById("dragDropZone");
const fileInput = document.getElementById("fileInput");
const dragDropContent = document.getElementById("dragDropContent");
const imagePreviewWrapper = document.getElementById("imagePreviewWrapper");
const imagePreview = document.getElementById("imagePreview");
const removePreviewBtn = document.getElementById("removePreviewBtn");
const uploadForm = document.getElementById("uploadForm");
const uploadTitle = document.getElementById("uploadTitle");
const uploadDescription = document.getElementById("uploadDescription");
const uploadSubmitBtn = document.getElementById("uploadSubmitBtn");
const browseText = document.getElementById("browseText");

// Scan Search Modal elements
const scanSearchBtn = document.getElementById("scanSearchBtn");
const scanModal = document.getElementById("scanModal");
const scanModalClose = document.getElementById("scanModalClose");
const scanDragDropZone = document.getElementById("scanDragDropZone");
const scanFileInput = document.getElementById("scanFileInput");
const scanDragDropContent = document.getElementById("scanDragDropContent");
const scanPreviewWrapper = document.getElementById("scanPreviewWrapper");
const scanPreview = document.getElementById("scanPreview");
const removeScanPreviewBtn = document.getElementById("removeScanPreviewBtn");
const scanSubmitBtn = document.getElementById("scanSubmitBtn");
const scanBrowseText = document.getElementById("scanBrowseText");
const scannerLine = document.getElementById("scannerLine");

// Header and Easter Egg targets
const logoSection = document.getElementById("logoSection");
const logoIcon = document.getElementById("logoIcon");
const logoTitleText = document.getElementById("logoTitleText");

// Featured section (Image of the Day)
const featuredSection = document.getElementById("featuredSection");
const featuredImgContainer = document.getElementById("featuredImgContainer");
const featuredImg = document.getElementById("featuredImg");
const featuredTitle = document.getElementById("featuredTitle");
const featuredActionBtn = document.getElementById("featuredActionBtn");

// Lightbox Elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxDownload = document.getElementById("lightboxDownload");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxCount = document.getElementById("lightboxCount");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxFactContent = document.getElementById("lightboxFactContent");

// Achievements Elements
const achievementsToggleBtn = document.getElementById("achievementsToggleBtn");
const achievementsModal = document.getElementById("achievementsModal");
const achievementsClose = document.getElementById("achievementsClose");
const achievementsList = document.getElementById("achievementsList");

// Toast Notification
const explorationToast = document.getElementById("explorationToast");
const toastTitle = document.getElementById("toastTitle");

// Animated Canvas Background Elements
const bgCanvas = document.getElementById("bgCanvas");
const ctx = bgCanvas.getContext("2d");
const cloudBg = document.getElementById("cloudBg");
let canvasAnimFrame;
let particles = [];
let animMode = "none"; // 'galaxy', 'nature', 'sports', 'confetti', 'none'

// --- 5. Responsive Masonry Columns Renderer ---
function renderGallery(items) {
  // Clear grid
  galleryGrid.innerHTML = "";
  
  if (items.length === 0) {
    galleryGrid.appendChild(emptyState);
    emptyState.style.display = "flex";
    return;
  }
  
  emptyState.style.display = "none";

  // Calculate columns based on viewport width
  const viewportWidth = window.innerWidth;
  let numCols = 4;
  if (viewportWidth < 500) numCols = 1;
  else if (viewportWidth < 768) numCols = 2;
  else if (viewportWidth < 1200) numCols = 3;

  // Create columns elements
  const cols = [];
  for (let i = 0; i < numCols; i++) {
    const col = document.createElement("div");
    col.className = "masonry-col";
    galleryGrid.appendChild(col);
    cols.push(col);
  }

  // Distribute items into columns sequentially
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View ${item.title}`);
    card.style.animationDelay = `${(index % 12) * 0.05}s`;

    const isFav = favorites.some(f => f.id === item.id);

    // Photographer attributions tag inside card
    const photographerHtml = item.photographer ? `
      <div class="card-photographer" title="View photographer's Pexels profile">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
        <span>By <a href="${item.photographerUrl || '#'}" target="_blank" onclick="event.stopPropagation();">${item.photographer}</a></span>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="card-img-wrapper">
        <div class="card-loader">
          <div class="spinner"></div>
        </div>
        
        <img src="${item.imageUrl}" alt="${item.title}" loading="lazy" style="opacity:0;">
        
        <!-- Heart Toggler -->
        <button class="favorite-btn ${isFav ? 'favorited' : ''}" aria-label="Favorite this image" title="Favorite this image" data-id="${item.id}">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>

        <div class="card-hover-overlay">
          <div class="overlay-action-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="card-info">
        <div class="card-meta">
          ${photographerHtml}
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">${item.description}</p>
      </div>
    `;

    const img = card.querySelector("img");
    const loader = card.querySelector(".card-loader");

    img.onload = () => {
      img.style.opacity = "1";
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 300);
    };
    
    if (img.complete) {
      img.style.opacity = "1";
      loader.style.display = "none";
      loader.remove();
    }

    // Toggle heart favorites
    const favBtn = card.querySelector(".favorite-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(item, favBtn);
    });

    // Lightbox triggers
    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    // 3D Tilt hover events
    card.addEventListener("mousemove", (e) => handleTilt(e, card));
    card.addEventListener("mouseleave", () => resetTilt(card));

    cols[index % numCols].appendChild(card);
  });
}

// --- 6. 3D Card Tilt Math Engine ---
function handleTilt(e, card) {
  const rect = card.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const xRotate = ((mouseY / rect.height) - 0.5) * -12;
  const yRotate = ((mouseX / rect.width) - 0.5) * 12;

  card.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) scale(1.02)`;
}

function resetTilt(card) {
  card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
}

// --- 7. Search, Filtering, and Sorting Router ---
function applyFiltersAndSort() {
  if (searchMode === "explore") {
    fetchPexelsExploreSearch();
    return;
  }

  // Local Collection Filtering
  const allLocalItems = [...uploadedImages, ...GALLERY_DATA];
  let result = allLocalItems.filter(item => {
    let matchesCategory = false;
    if (currentCategory === "all") {
      matchesCategory = true;
    } else if (currentCategory === "favorites") {
      matchesCategory = favorites.some(f => f.id === item.id);
    } else {
      matchesCategory = item.category.toLowerCase() === currentCategory.toLowerCase();
    }
    
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(query) || 
                          item.category.toLowerCase().includes(query) ||
                          item.description.toLowerCase().includes(query);
    
    return matchesCategory && matchesSearch;
  });

  // Local Favorites selector override (merges Pexels saved photos)
  if (currentCategory === "favorites") {
    // Show all favorites (local AND explore Pexels favorites)
    result = [...favorites];
    
    // Apply optional text search filtering to favorites
    const query = searchQuery.trim().toLowerCase();
    if (query !== "") {
      result = result.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }
  }

  // Sort Stage
  if (sortType === "name-asc") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "name-desc") {
    result.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortType === "category") {
    result.sort((a, b) => a.category.localeCompare(b.category));
  }

  activeFilteredItems = result;
  renderGallery(activeFilteredItems);
  updateCategoryAnimation();
}

// --- 8. Global Pexels API Explore Engine ---
function fetchPexelsExploreSearch() {
  if (isFetchingPexels) return;

  // If no API key set: display settings prompt
  if (!pexelsApiKey.trim()) {
    loadMoreContainer.style.display = "none";
    galleryGrid.innerHTML = `
      <div class="api-notice-box">
        <svg class="api-notice-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
        <h3 class="api-notice-title">Pexels API Key Required</h3>
        <p class="api-notice-text">To unlock global search for any image in the world, configure your free Pexels authorization key.</p>
        <button class="api-setup-btn" id="apiNoticeSetupBtn">Configure API Key</button>
        <p class="api-notice-text">Don't have a key? Sign up for free in 30 seconds at <a href="https://www.pexels.com/api/new/" class="api-link" target="_blank">Pexels.com/api</a>.</p>
      </div>
    `;
    
    // Bind click event inside notice box
    document.getElementById("apiNoticeSetupBtn").addEventListener("click", () => {
      apiKeyModal.classList.add("active");
      pexelsKeyInput.focus();
    });
    return;
  }

  isFetchingPexels = true;
  
  // Show spinner
  const loadingOverlay = document.createElement("div");
  loadingOverlay.className = "api-notice-box";
  loadingOverlay.innerHTML = `
    <div class="spinner" style="width: 50px; height: 50px; border-width: 4px;"></div>
    <p style="margin-top: 1rem; color: var(--text-secondary); font-weight: 500;">Fetching photos for "${pexelsQuery}"...</p>
  `;

  if (pexelsPage === 1) {
    galleryGrid.innerHTML = "";
    galleryGrid.appendChild(loadingOverlay);
    loadMoreContainer.style.display = "none";
  } else {
    loadMoreSpinner.style.display = "inline-block";
  }

  // Adjust URL based on query type
  let url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(pexelsQuery)}&per_page=16&page=${pexelsPage}`;
  if (pexelsQuery.toLowerCase() === "trending") {
    url = `https://api.pexels.com/v1/curated?per_page=16&page=${pexelsPage}`;
  }

  fetch(url, {
    headers: {
      Authorization: pexelsApiKey
    }
  })
  .then(res => {
    if (!res.ok) throw new Error("API limits exceeded or invalid key");
    return res.json();
  })
  .then(data => {
    isFetchingPexels = false;
    loadMoreSpinner.style.display = "none";

    const mappedPhotos = data.photos.map(photo => ({
      id: `pexels-${photo.id}`,
      title: photo.alt || `Global Photo by ${photo.photographer}`,
      category: "Explore",
      imageUrl: photo.src.large,
      downloadUrl: photo.src.original,
      description: `Beautifully captured by photographer ${photo.photographer}. Available under free Pexels licensing.`,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url
    }));

    if (pexelsPage === 1) {
      pexelsPhotos = mappedPhotos;
    } else {
      pexelsPhotos = [...pexelsPhotos, ...mappedPhotos];
    }

    // Filter uploaded images matching the current Pexels search query
    let matchingUploads = [];
    const query = pexelsQuery.trim().toLowerCase();
    if (query === "trending") {
      matchingUploads = [...uploadedImages];
    } else {
      matchingUploads = uploadedImages.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
    }

    // Merge uploaded custom images at the top of the Pexels results list
    activeFilteredItems = [...matchingUploads, ...pexelsPhotos];

    if (activeFilteredItems.length === 0) {
      galleryGrid.innerHTML = `
        <div class="empty-state" style="display: flex;">
          <svg class="empty-state-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h2 class="empty-state-title">No images found</h2>
          <p class="empty-state-text">No results found on Pexels or in your uploads for "${pexelsQuery}". Try another keyword.</p>
        </div>
      `;
      loadMoreContainer.style.display = "none";
    } else {
      renderGallery(activeFilteredItems);

      // Verify if pagination is possible
      if (data.next_page) {
        loadMoreContainer.style.display = "flex";
      } else {
        loadMoreContainer.style.display = "none";
      }
    }
  })
  .catch(() => {
    isFetchingPexels = false;
    loadMoreSpinner.style.display = "none";
    galleryGrid.innerHTML = `
      <div class="empty-state" style="display: flex;">
        <svg class="empty-state-icon" style="color: #ef4444;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h2 class="empty-state-title">Pexels Search Failed</h2>
        <p class="empty-state-text">Unable to query Pexels. Please verify your Pexels authorization key is correct and you have an active network connection.</p>
      </div>
    `;
    loadMoreContainer.style.display = "none";
  });
}

// --- 9. Favorites Feature Management ---
function toggleFavorite(item, btn) {
  const index = favorites.findIndex(f => f.id === item.id);
  
  if (index === -1) {
    // Store complete photo data
    favorites.push({
      id: item.id,
      title: item.title,
      category: item.category,
      imageUrl: item.imageUrl,
      downloadUrl: item.downloadUrl || item.imageUrl,
      description: item.description,
      photographer: item.photographer || null,
      photographerUrl: item.photographerUrl || null
    });
    btn.classList.add("favorited");
  } else {
    favorites.splice(index, 1);
    btn.classList.remove("favorited");
    
    if (currentCategory === "favorites") {
      setTimeout(() => applyFiltersAndSort(), 300);
    }
  }

  localStorage.setItem("gallery_favorites_items", JSON.stringify(favorites));
  updateFavoritesBadge();
  checkAchievements();
}

function updateFavoritesBadge() {
  favoritesCountSpan.textContent = favorites.length;
}

// --- 10. Featured Section: Image of the Day ---
function initFeaturedImage() {
  const today = new Date();
  const dayHash = today.getFullYear() + today.getMonth() + today.getDate();
  const featuredIndex = dayHash % GALLERY_DATA.length;
  
  const item = GALLERY_DATA[featuredIndex];
  if (!item) return;

  featuredImg.src = item.imageUrl;
  featuredImg.alt = `Featured Image of the Day: ${item.title}`;
  featuredTitle.textContent = item.title;

  const openFeatured = () => {
    // If explore mode active, temporarily switch back to local to show featured
    if (searchMode === "explore") {
      switchToLocalMode();
    }
    
    currentCategory = "all";
    favoritesFilterBtn.classList.remove("active");
    applyFiltersAndSort();
    
    const idx = activeFilteredItems.findIndex(i => i.id === item.id);
    if (idx !== -1) {
      openLightbox(idx);
    }
  };

  featuredImgContainer.addEventListener("click", openFeatured);
  featuredImgContainer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFeatured();
    }
  });
  featuredActionBtn.addEventListener("click", openFeatured);
}

// --- 11. Lightbox Controls with photographer attributions & Facts ---
function openLightbox(index) {
  activeLightboxIndex = index;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
  
  const item = activeFilteredItems[activeLightboxIndex];
  if (item) {
    trackExplorationProgress(item);
  }
  
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = activeFilteredItems[activeLightboxIndex];
  if (!item) return;

  lightboxImage.style.opacity = "0";
  lightboxImage.style.transform = "scale(0.96)";

  setTimeout(() => {
    lightboxImage.src = item.imageUrl;
    lightboxImage.alt = item.title;
    lightboxCategory.textContent = item.category;
    lightboxTitle.textContent = item.title;
    lightboxDescription.textContent = item.description;
    lightboxCount.textContent = `${activeLightboxIndex + 1} / ${activeFilteredItems.length}`;
    
    // Inject photographer attribution inside lightbox if applicable
    let attributionEl = lightbox.querySelector(".lightbox-photographer-credit");
    if (!attributionEl) {
      attributionEl = document.createElement("div");
      attributionEl.className = "lightbox-photographer-credit";
      lightboxTitle.parentNode.insertBefore(attributionEl, lightboxDescription);
    }
    
    if (item.photographer) {
      attributionEl.innerHTML = `By <a href="${item.photographerUrl || '#'}" target="_blank">${item.photographer}</a> on Pexels`;
      attributionEl.style.display = "block";
    } else {
      attributionEl.style.display = "none";
    }

    // Facts display
    const catFacts = FACTS_DATABASE[item.category.toLowerCase()] || ["Exploring the world reveals details of color, shadow, and nature!"];
    const randomFact = catFacts[activeLightboxIndex % catFacts.length];
    lightboxFactContent.textContent = randomFact;

    lightboxImage.onload = () => {
      lightboxImage.style.opacity = "1";
      lightboxImage.style.transform = "scale(1)";
    };
    
    lightboxImage.style.opacity = "1";
    lightboxImage.style.transform = "scale(1)";
  }, 120);
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  if (activeFilteredItems.length <= 1) return;

  if (direction === "next") {
    activeLightboxIndex = (activeLightboxIndex + 1) % activeFilteredItems.length;
  } else if (direction === "prev") {
    activeLightboxIndex = (activeLightboxIndex - 1 + activeFilteredItems.length) % activeFilteredItems.length;
  }
  
  const item = activeFilteredItems[activeLightboxIndex];
  if (item) {
    trackExplorationProgress(item);
  }

  updateLightboxContent();
}

function downloadLightboxImage() {
  const item = activeFilteredItems[activeLightboxIndex];
  if (!item) return;

  const btn = lightboxDownload;
  btn.style.pointerEvents = "none";
  btn.style.opacity = "0.5";

  const downloadSrc = item.downloadUrl || item.imageUrl;

  fetch(downloadSrc)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${item.title.replace(/\s+/g, "_")}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      btn.style.pointerEvents = "";
      btn.style.opacity = "1";
    })
    .catch(() => {
      window.open(downloadSrc, "_blank");
      btn.style.pointerEvents = "";
      btn.style.opacity = "1";
    });
}

// --- 12. Mode Toggle Handling Functions ---
function switchToLocalMode() {
  searchMode = "local";
  modeToggler.classList.remove("explore-active");
  modeLocalBtn.classList.add("active");
  modeExploreBtn.classList.remove("active");
  
  // Toggle controls visibility
  sortSelectWrapper.style.display = "block";
  favoritesFilterBtn.style.display = "flex";
  exploreTagList.style.display = "none";
  loadMoreContainer.style.display = "none";
  
  searchInput.placeholder = "Search by title or description...";
  searchInput.value = searchQuery;
  
  applyFiltersAndSort();
}

function switchToExploreMode() {
  searchMode = "explore";
  modeToggler.classList.add("explore-active");
  modeLocalBtn.classList.remove("active");
  modeExploreBtn.classList.add("active");
  
  // Toggle controls visibility
  sortSelectWrapper.style.display = "none";
  favoritesFilterBtn.style.display = "none";
  exploreTagList.style.display = "flex";
  
  searchInput.placeholder = "Search the world on Pexels (e.g. anime, dogs)...";
  
  pexelsPage = 1;
  // If search query is empty, default to "trending"
  pexelsQuery = searchInput.value.trim() || "trending";
  searchInput.value = pexelsQuery === "trending" ? "" : pexelsQuery;
  
  applyFiltersAndSort();
}

// --- 13. Gamified Achievements Exploration Tracker ---
function trackExplorationProgress(item) {
  let changed = false;

  // Nature explorer set
  if (item.category.toLowerCase() === "nature") {
    if (!viewedNature.includes(item.id)) {
      viewedNature.push(item.id);
      localStorage.setItem("viewed_nature_ids", JSON.stringify(viewedNature));
      changed = true;
    }
  }

  // Cosmic views
  if (item.category.toLowerCase() === "galaxy") {
    viewedGalaxyCount++;
    localStorage.setItem("viewed_galaxy_count", viewedGalaxyCount.toString());
    changed = true;
  }

  // Visited categories list
  if (!visitedCategories.includes(item.category.toLowerCase())) {
    visitedCategories.push(item.category.toLowerCase());
    localStorage.setItem("visited_categories", JSON.stringify(visitedCategories));
    changed = true;
  }

  if (changed) {
    checkAchievements();
  }
}

function checkAchievements() {
  const badges = [
    {
      id: "natureExplorer",
      name: "Nature Explorer",
      desc: "View all nature photos in the gallery.",
      current: viewedNature.length,
      target: 3,
      svg: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 6l2.5 5h-5L12 6zm0 5l3 6H9l3-6z"/>`
    },
    {
      id: "cosmicTraveler",
      name: "Cosmic Traveler",
      desc: "Open galaxy imagery 20 times.",
      current: viewedGalaxyCount,
      target: 20,
      svg: `<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/>`
    },
    {
      id: "collector",
      name: "Collector",
      desc: "Save 10 favorite photos in your board.",
      current: favorites.length,
      target: 10,
      svg: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`
    },
    {
      id: "galleryMaster",
      name: "Gallery Master",
      desc: "Explore images from all 11 categories.",
      current: visitedCategories.filter(c => c !== "all").length,
      target: 11,
      svg: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`
    },
    {
      id: "shutterbug",
      name: "Shutterbug",
      desc: "Post your first custom uploaded image.",
      current: uploadedImages.length,
      target: 1,
      svg: `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>`
    },
    {
      id: "masterCreator",
      name: "Master Creator",
      desc: "Post 5 custom uploaded images.",
      current: uploadedImages.length,
      target: 5,
      svg: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`
    }
  ];

  achievementsList.innerHTML = "";
  
  badges.forEach(badge => {
    const isCompleted = badge.current >= badge.target;
    const progressPercent = Math.min(100, Math.floor((badge.current / badge.target) * 100));

    const badgeEl = document.createElement("div");
    badgeEl.className = `badge-item ${isCompleted ? 'unlocked' : ''}`;
    
    badgeEl.innerHTML = `
      <div class="badge-icon-container">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          ${badge.svg}
        </svg>
      </div>
      <div class="badge-details">
        <div class="badge-name">${badge.name}</div>
        <div class="badge-desc">${badge.desc}</div>
        <div class="badge-progress-container">
          <div class="badge-progress-bar">
            <div class="badge-progress-fill" style="width: ${progressPercent}%"></div>
          </div>
          <span class="badge-progress-text">${badge.current}/${badge.target}</span>
        </div>
      </div>
    `;

    achievementsList.appendChild(badgeEl);

    if (isCompleted && !unlockedBadges.includes(badge.id)) {
      unlockedBadges.push(badge.id);
      localStorage.setItem("unlocked_badges", JSON.stringify(unlockedBadges));
      triggerUnlockToast(badge.name);
    }
  });
}

function triggerUnlockToast(name) {
  toastTitle.textContent = name;
  explorationToast.classList.add("show");
  
  triggerConfetti();

  setTimeout(() => {
    explorationToast.classList.remove("show");
  }, 4000);
}

// --- 14. Dynamic Canvas Background Rendering Loop ---
function resizeCanvas() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}

function updateCategoryAnimation() {
  const currentTab = currentCategory.toLowerCase();
  
  if (currentTab === "galaxy") {
    setAnimMode("galaxy");
  } else if (currentTab === "nature") {
    setAnimMode("nature");
  } else if (currentTab === "sports") {
    setAnimMode("sports");
  } else if (currentTab === "clouds") {
    setAnimMode("clouds");
  } else {
    setAnimMode("none");
  }
}

function setAnimMode(mode) {
  if (animMode === mode) return;

  animMode = mode;
  particles = [];
  cloudBg.classList.remove("active");
  cloudBg.innerHTML = "";

  if (canvasAnimFrame) {
    cancelAnimationFrame(canvasAnimFrame);
  }

  if (mode === "none") {
    ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    return;
  }

  if (mode === "galaxy") {
    for (let i = 0; i < 75; i++) {
      particles.push({
        x: Math.random() * bgCanvas.width,
        y: Math.random() * bgCanvas.height,
        r: Math.random() * 1.8 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005
      });
    }
    loopGalaxy();
  } else if (mode === "nature") {
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * bgCanvas.width,
        y: Math.random() * -100 - 20,
        r: Math.random() * 8 + 5,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * 360,
        rotSpeed: Math.random() * 1 - 0.5,
        color: ['#10b981', '#f59e0b', '#ef4444', '#10b981'][Math.floor(Math.random() * 4)]
      });
    }
    loopNature();
  } else if (mode === "sports") {
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * bgCanvas.width,
        y: Math.random() * bgCanvas.height,
        len: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 4,
        alpha: Math.random() * 0.15 + 0.05
      });
    }
    loopSports();
  } else if (mode === "clouds") {
    cloudBg.classList.add("active");
    for (let i = 0; i < 6; i++) {
      const cloud = document.createElement("div");
      cloud.className = "cloud-element";
      cloud.style.width = `${Math.random() * 250 + 150}px`;
      cloud.style.height = `${Math.random() * 80 + 50}px`;
      cloud.style.top = `${Math.random() * 80}%`;
      cloud.style.left = `-${Math.random() * 300 + 200}px`;
      cloud.style.animationDelay = `${i * 8}s`;
      cloud.style.opacity = `${Math.random() * 0.4 + 0.2}`;
      cloudBg.appendChild(cloud);
    }
  }
}

function loopGalaxy() {
  if (animMode !== "galaxy") return;
  ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  
  ctx.fillStyle = "white";
  particles.forEach(star => {
    star.alpha += star.speed;
    if (star.alpha > 1 || star.alpha < 0) {
      star.speed = -star.speed;
    }
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalAlpha = 1;
  canvasAnimFrame = requestAnimationFrame(loopGalaxy);
}

function loopNature() {
  if (animMode !== "nature") return;
  ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  particles.forEach(leaf => {
    leaf.y += leaf.speedY;
    leaf.x += leaf.speedX;
    leaf.rotation += leaf.rotSpeed;

    if (leaf.y > bgCanvas.height) {
      leaf.y = -50;
      leaf.x = Math.random() * bgCanvas.width;
    }

    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate((leaf.rotation * Math.PI) / 180);
    ctx.fillStyle = leaf.color;
    ctx.globalAlpha = 0.6;
    
    ctx.beginPath();
    ctx.moveTo(0, -leaf.r);
    ctx.quadraticCurveTo(leaf.r / 2, -leaf.r / 2, 0, leaf.r);
    ctx.quadraticCurveTo(-leaf.r / 2, -leaf.r / 2, 0, -leaf.r);
    ctx.fill();
    ctx.restore();
  });

  ctx.globalAlpha = 1;
  canvasAnimFrame = requestAnimationFrame(loopNature);
}

function loopSports() {
  if (animMode !== "sports") return;
  ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  ctx.strokeStyle = document.documentElement.getAttribute("data-theme") === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
  ctx.lineWidth = 2;

  particles.forEach(line => {
    line.x += line.speed;
    if (line.x > bgCanvas.width) {
      line.x = -line.len;
      line.y = Math.random() * bgCanvas.height;
    }

    ctx.globalAlpha = line.alpha;
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x + line.len, line.y);
    ctx.stroke();
  });

  ctx.globalAlpha = 1;
  canvasAnimFrame = requestAnimationFrame(loopSports);
}

function triggerConfetti() {
  const oldMode = animMode;
  animMode = "confetti";
  particles = [];
  
  if (canvasAnimFrame) {
    cancelAnimationFrame(canvasAnimFrame);
  }

  const colors = ['#6366f1', '#ec4899', '#10b981', '#fbbf24', '#3b82f6'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: bgCanvas.width / 2,
      y: bgCanvas.height / 2 - 50,
      r: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 10 + 5,
      gravity: 0.25,
      rot: Math.random() * 360,
      rotSpeed: Math.random() * 5 - 2.5,
      opacity: 1
    });
  }

  let duration = 0;
  function loopConfetti() {
    if (animMode !== "confetti") return;
    ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

    particles.forEach(p => {
      p.speed *= 0.96;
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed + p.gravity;
      p.opacity -= 0.008;
      p.rot += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
      ctx.restore();
    });

    duration++;
    if (duration > 180) {
      animMode = "none";
      ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      updateCategoryAnimation();
    } else {
      canvasAnimFrame = requestAnimationFrame(loopConfetti);
    }
  }

  loopConfetti();
}

// --- 15. Hidden Easter Egg: Explorer Mode ---
function handleLogoClick() {
  logoClicks++;
  logoIcon.style.transform = `scale(${1 + logoClicks * 0.08}) rotate(${logoClicks * 25}deg)`;
  
  clearTimeout(logoClickTimeout);
  
  if (logoClicks >= 5) {
    activateExplorerMode();
    logoClicks = 0;
  } else {
    logoClickTimeout = setTimeout(() => {
      logoClicks = 0;
      logoIcon.style.transform = "";
    }, 1500);
  }
}

function activateExplorerMode() {
  document.body.classList.add("explorer-mode-active");
  logoTitleText.style.background = "linear-gradient(135deg, #10b981, #3b82f6, #ec4899)";
  logoTitleText.style.webkitBackgroundClip = "text";
  logoTitleText.style.webkitTextFillColor = "transparent";

  triggerConfetti();

  toastTitle.textContent = "🔓 EXPLORER MODE ACTIVATED!";
  explorationToast.classList.add("show");

  setTimeout(() => {
    explorationToast.classList.remove("show");
  }, 4500);
}

// --- 16. Event Listeners Registration ---

// Mode switching selectors
modeLocalBtn.addEventListener("click", switchToLocalMode);
modeExploreBtn.addEventListener("click", switchToExploreMode);

// Pexels API settings Modal close/toggles
apiKeyToggleBtn.addEventListener("click", () => {
  pexelsKeyInput.value = pexelsApiKey;
  apiKeyModal.classList.add("active");
});

apiModalClose.addEventListener("click", () => {
  apiKeyModal.classList.remove("active");
});

apiKeyModal.addEventListener("click", (e) => {
  if (e.target === apiKeyModal) {
    apiKeyModal.classList.remove("active");
  }
});

apiSaveBtn.addEventListener("click", () => {
  const value = pexelsKeyInput.value.trim();
  pexelsApiKey = value;
  localStorage.setItem("pexels_api_key", value);
  apiKeyModal.classList.remove("active");
  
  // Set glow indicators on button if key present
  if (value !== "") {
    apiKeyToggleBtn.classList.add("has-key");
  } else {
    apiKeyToggleBtn.classList.remove("has-key");
  }
  
  // Rerun explore searches if active
  if (searchMode === "explore") {
    pexelsPage = 1;
    applyFiltersAndSort();
  }
});

apiRemoveBtn.addEventListener("click", () => {
  pexelsApiKey = "";
  pexelsKeyInput.value = "";
  localStorage.removeItem("pexels_api_key");
  apiKeyModal.classList.remove("active");
  apiKeyToggleBtn.classList.remove("has-key");
  
  if (searchMode === "explore") {
    pexelsPage = 1;
    applyFiltersAndSort();
  }
});

// Pexels Pagination (Load More)
loadMoreBtn.addEventListener("click", () => {
  if (searchMode === "explore" && !isFetchingPexels) {
    pexelsPage++;
    applyFiltersAndSort();
  }
});

// Pexels quick tag selection chips
exploreTagList.addEventListener("click", (e) => {
  const chip = e.target.closest(".filter-btn");
  if (!chip) return;

  exploreTagList.querySelectorAll(".filter-btn").forEach(t => t.classList.remove("active"));
  chip.classList.add("active");

  const query = chip.dataset.tag;
  pexelsQuery = query;
  searchInput.value = query === "trending" ? "" : query;
  pexelsPage = 1;
  applyFiltersAndSort();
});

// Search input key press & events
searchInput.addEventListener("input", (e) => {
  if (searchMode === "local") {
    searchQuery = e.target.value;
    applyFiltersAndSort();
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (searchMode === "explore") {
      pexelsQuery = query || "trending";
      pexelsPage = 1;
      
      // Update quick chips active styling
      exploreTagList.querySelectorAll(".filter-btn").forEach(t => t.classList.remove("active"));
      const matchingChip = exploreTagList.querySelector(`[data-tag="${pexelsQuery.toLowerCase()}"]`);
      if (matchingChip) {
        matchingChip.classList.add("active");
      }
      
      applyFiltersAndSort();
    } else {
      searchQuery = query;
      applyFiltersAndSort();
    }
  }
});

// Sort select dropdown
sortSelect.addEventListener("change", (e) => {
  sortType = e.target.value;
  applyFiltersAndSort();
});

// Favorites Filter Toggle chip
favoritesFilterBtn.addEventListener("click", () => {
  if (currentCategory === "favorites") {
    currentCategory = "all";
    favoritesFilterBtn.classList.remove("active");
  } else {
    currentCategory = "favorites";
    favoritesFilterBtn.classList.add("active");
  }
  applyFiltersAndSort();
});

// Reset Empty State
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  
  if (searchMode === "explore") {
    pexelsQuery = "trending";
    pexelsPage = 1;
    exploreTagList.querySelectorAll(".filter-btn").forEach(t => t.classList.remove("active"));
    exploreTagList.querySelector('[data-tag="trending"]').classList.add("active");
  } else {
    sortSelect.value = "default";
    sortType = "default";
    favoritesFilterBtn.classList.remove("active");
    currentCategory = "all";
  }
  applyFiltersAndSort();
});

// Lightbox triggers
lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => navigateLightbox("prev"));
lightboxNext.addEventListener("click", () => navigateLightbox("next"));
lightboxDownload.addEventListener("click", downloadLightboxImage);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-content-wrapper") || e.target.classList.contains("lightbox-image-container")) {
    closeLightbox();
  }
});

// Achievements Toggle button
achievementsToggleBtn.addEventListener("click", () => {
  checkAchievements();
  achievementsModal.classList.add("active");
});

achievementsClose.addEventListener("click", () => {
  achievementsModal.classList.remove("active");
});

achievementsModal.addEventListener("click", (e) => {
  if (e.target === achievementsModal) {
    achievementsModal.classList.remove("active");
  }
});

// Logo Click Easter Egg
logoSection.addEventListener("click", handleLogoClick);

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  
  switch(e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowLeft":
    case "Left":
      navigateLightbox("prev");
      break;
    case "ArrowRight":
    case "Right":
      navigateLightbox("next");
      break;
  }
});

// --- 16.5. Custom Image Upload and Local Posting Engine ---
let currentUploadedFile = null;

function downscaleImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        const maxDim = 800;
        
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to optimized JPEG dataURL (0.75 quality)
        const dataUrl = canvas.toDataURL("image/jpeg", 0.75);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

function handleFileSelection(file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Please select a valid image file.");
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.src = e.target.result;
    dragDropContent.style.display = "none";
    imagePreviewWrapper.style.display = "block";
  };
  reader.readAsDataURL(file);
  currentUploadedFile = file;
}

function resetFileSelection() {
  currentUploadedFile = null;
  imagePreview.src = "";
  imagePreviewWrapper.style.display = "none";
  dragDropContent.style.display = "flex";
  fileInput.value = "";
}

function resetUploadForm() {
  uploadForm.reset();
  resetFileSelection();
}

// Modal open/close bindings
uploadToggleBtn.addEventListener("click", () => {
  // If in explore mode, revert to local gallery to show uploaded images
  if (searchMode === "explore") {
    switchToLocalMode();
  }
  uploadModal.classList.add("active");
  resetUploadForm();
});

uploadModalClose.addEventListener("click", () => {
  uploadModal.classList.remove("active");
});

uploadModal.addEventListener("click", (e) => {
  if (e.target === uploadModal) {
    uploadModal.classList.remove("active");
  }
});

// Drag and drop event listeners
dragDropZone.addEventListener("click", (e) => {
  // Trigger file browser if not clicking remove button
  if (e.target.id !== "removePreviewBtn" && !e.target.closest("#removePreviewBtn")) {
    fileInput.click();
  }
});

dragDropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dragDropZone.classList.add("dragover");
});

dragDropZone.addEventListener("dragleave", () => {
  dragDropZone.classList.remove("dragover");
});

dragDropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dragDropZone.classList.remove("dragover");
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    handleFileSelection(e.dataTransfer.files[0]);
  }
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files && e.target.files.length > 0) {
    handleFileSelection(e.target.files[0]);
  }
});

removePreviewBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  resetFileSelection();
});

// Submit Form Handler
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  if (!currentUploadedFile) {
    alert("Please choose or drop an image file first.");
    return;
  }
  
  uploadSubmitBtn.disabled = true;
  uploadSubmitBtn.textContent = "Downscaling & Publishing...";
  
  try {
    const optimizedBase64 = await downscaleImage(currentUploadedFile);
    
    const newPhoto = {
      id: `upload-${Date.now()}`,
      title: uploadTitle.value.trim(),
      category: "Upload",
      imageUrl: optimizedBase64,
      downloadUrl: optimizedBase64,
      description: uploadDescription.value.trim() || "A beautiful memory shared by the user."
    };
    
    // Save to start of local uploads state array
    uploadedImages.unshift(newPhoto);
    localStorage.setItem("gallery_uploaded_items", JSON.stringify(uploadedImages));
    
    // Rerender gallery with active filters
    applyFiltersAndSort();
    
    // Toast and confetti triggers
    triggerConfetti();
    toastTitle.textContent = "🎉 PHOTO POSTED SUCCESSFULLY!";
    explorationToast.classList.add("show");
    setTimeout(() => {
      explorationToast.classList.remove("show");
    }, 4000);
    
    // Close modal and reset form
    uploadModal.classList.remove("active");
    resetUploadForm();
    
    // Run badge accomplishments updates
    checkAchievements();
  } catch (err) {
    console.error("Upload error:", err);
    alert("Failed to process image. Please try another file.");
  } finally {
    uploadSubmitBtn.disabled = false;
    uploadSubmitBtn.textContent = "Post Image";
  }
});

// --- 16.6. Scan-to-Search (Visual Search) Engine ---
let currentScanFile = null;

function handleScanFileSelection(file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Please select a valid image file to scan.");
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    scanPreview.src = e.target.result;
    scanDragDropContent.style.display = "none";
    scanPreviewWrapper.style.display = "block";
    scanSubmitBtn.disabled = false;
  };
  reader.readAsDataURL(file);
  currentScanFile = file;
}

function resetScanSelection() {
  currentScanFile = null;
  scanPreview.src = "";
  scanPreviewWrapper.style.display = "none";
  scanDragDropContent.style.display = "flex";
  scanFileInput.value = "";
  scanSubmitBtn.disabled = true;
  scanPreviewWrapper.classList.remove("scanning");
}

scanSearchBtn.addEventListener("click", () => {
  scanModal.classList.add("active");
  resetScanSelection();
});

scanModalClose.addEventListener("click", () => {
  scanModal.classList.remove("active");
});

scanModal.addEventListener("click", (e) => {
  if (e.target === scanModal) {
    scanModal.classList.remove("active");
  }
});

// Drag and drop event listeners for scan modal
scanDragDropZone.addEventListener("click", (e) => {
  if (e.target.id !== "removeScanPreviewBtn" && !e.target.closest("#removeScanPreviewBtn")) {
    scanFileInput.click();
  }
});

scanDragDropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  scanDragDropZone.classList.add("dragover");
});

scanDragDropZone.addEventListener("dragleave", () => {
  scanDragDropZone.classList.remove("dragover");
});

scanDragDropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  scanDragDropZone.classList.remove("dragover");
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    handleScanFileSelection(e.dataTransfer.files[0]);
  }
});

scanFileInput.addEventListener("change", (e) => {
  if (e.target.files && e.target.files.length > 0) {
    handleScanFileSelection(e.target.files[0]);
  }
});

removeScanPreviewBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  resetScanSelection();
});

// Helper: Calculate average color of an image source
function getAverageColor(imgEl) {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imgEl, 0, 0, 1, 1);
  const data = ctx.getImageData(0, 0, 1, 1).data;
  return { r: data[0], g: data[1], b: data[2] };
}

// Cache of calculated average colors for images to avoid recalculation
const colorCache = {};

// Async helper: fetch image average color from URL with CORS
function getAverageColorFromUrl(url) {
  if (colorCache[url]) {
    return Promise.resolve(colorCache[url]);
  }
  
  return new Promise((resolve) => {
    const img = new Image();
    if (!url.startsWith("data:")) {
      img.crossOrigin = "anonymous";
      img.src = url + (url.includes('?') ? '&' : '?') + 'cors_bypass=1';
    } else {
      img.src = url;
    }
    img.onload = () => {
      const rgb = getAverageColor(img);
      colorCache[url] = rgb;
      resolve(rgb);
    };
    img.onerror = () => {
      resolve({ r: 128, g: 128, b: 128 }); // neutral gray default
    };
  });
}

// Visual Search execute handler
scanSubmitBtn.addEventListener("click", async () => {
  if (!currentScanFile) return;
  
  scanSubmitBtn.disabled = true;
  scanSubmitBtn.textContent = "Scanning image pixels...";
  scanPreviewWrapper.classList.add("scanning");
  
  // Wait 2.5 seconds to play the high-tech scanning laser animation
  await new Promise((resolve) => setTimeout(resolve, 2500));
  
  try {
    // 1. Get average color of query image
    const queryRgb = getAverageColor(scanPreview);
    
    // 2. We rank all items in the current active view (activeFilteredItems)
    const promises = activeFilteredItems.map(async (item) => {
      const itemRgb = await getAverageColorFromUrl(item.imageUrl);
      // Euclidean distance in RGB color space
      const distance = Math.sqrt(
        Math.pow(queryRgb.r - itemRgb.r, 2) +
        Math.pow(queryRgb.g - itemRgb.g, 2) +
        Math.pow(queryRgb.b - itemRgb.b, 2)
      );
      return { item, distance };
    });
    
    const results = await Promise.all(promises);
    
    // Sort by distance ascending (closest match first)
    results.sort((a, b) => a.distance - b.distance);
    
    // Extract sorted list
    activeFilteredItems = results.map(r => r.item);
    
    // Render the sorted grid!
    renderGallery(activeFilteredItems);
    
    // Success Toast Notification
    toastTitle.textContent = "🔍 VISUAL SCAN SEARCH COMPLETE!";
    explorationToast.classList.add("show");
    setTimeout(() => {
      explorationToast.classList.remove("show");
    }, 4000);
    
    // Close modal
    scanModal.classList.remove("active");
    resetScanSelection();
  } catch (err) {
    console.error("Scan search error:", err);
    alert("Visual scanning failed. Make sure the file format is valid.");
  } finally {
    scanSubmitBtn.disabled = false;
    scanSubmitBtn.textContent = "Scan & Search Gallery";
  }
});

// Theme Initializer
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = systemPrefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", initialTheme);
    localStorage.setItem("theme", initialTheme);
  }
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
});

// Resize handler
window.addEventListener("resize", () => {
  resizeCanvas();
  applyFiltersAndSort();
});

// --- 17. Bootstrap Application ---
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent default chrome install banner from popping up immediately
  e.preventDefault();
  deferredPrompt = e;
  console.log("PWA: 'beforeinstallprompt' event stashed.");
});

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  resizeCanvas();
  
  // Set initial highlights on API key toggle if key is configured
  if (pexelsApiKey !== "") {
    apiKeyToggleBtn.classList.add("has-key");
  }
  
  updateFavoritesBadge();
  initFeaturedImage();
  checkAchievements();
  
  applyFiltersAndSort();

  // Register PWA service worker for offline support
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js")
        .then((reg) => {
          console.log("PWA: Service Worker registered successfully on scope:", reg.scope);
        })
        .catch((err) => {
          console.error("PWA: Service Worker registration failed:", err);
        });
    });
  }
});
