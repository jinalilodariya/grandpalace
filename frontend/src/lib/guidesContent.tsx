import grandPalaceStorefront from "@/assets/grand-palace-storefront.jpg";

export interface GuideFAQ {
  q: string;
  a: string;
}

export type GuideBlockType = "listing" | "text" | "box" | "row" | "menuList";

export interface GuideMenuColumn {
  title: string;
  vegItems?: string[];
  nonVegItems?: string[];
}

export interface GuideBulletItem {
  title: string;
  description: string;
}

export interface GuideSection {
  heading: string;
  body: string[];
  /** Legacy freeform bullets — kept for old content. New content should use bulletItems instead. */
  bullets?: string[];
  /** Structured Title + Description bullets, rendered as styled cards matching Features/Dietary. */
  bulletItems?: GuideBulletItem[];
  image?: string;
  imageAlt?: string;
  /** A 2-column photo grid (e.g. two cake options side by side) — separate from the single `image` field above. */
  images?: string[];
  /** A 2-column photo grid where each photo has its own name/caption underneath (e.g. two cake flavours). */
  imageGrid?: { url: string; label: string }[];
  /** A horizontally swipeable photo slider (scroll-snap, no JS) — used on the featured ranked-listing card. */
  imageSlider?: string[];
  /** Highlighted "must-try" dish pills on a ranked-listing card — separate from generic bullets so they stand out visually. */
  mustTryDishes?: string[];
  /** Unified contact/booking panel on a ranked-listing card (phone/website/reviews/booking), rendered together with address/timing rather than as plain bullets. */
  contactInfo?: {
    phone?: string;
    phoneHref?: string;
    website?: string;
    websiteHref?: string;
    reviewHref?: string;
    reviewLabel?: string;
    bookHref?: string;
    bookLabel?: string;
  };
  /** Key into GuideTemplate's BANNER_STYLES — shown as a styled icon banner when there's no photo. */
  bannerIcon?: string;
  /** Explicit render mode. When unset, falls back to the old heuristic (heading starting "1. " etc. = listing, else text). */
  blockType?: GuideBlockType;
  /** Used by the "row" block type — each string renders as one small card in a horizontal row. */
  items?: string[];
  /** Used by the "menuList" block type — a dark-banded, multi-column dish list (e.g. Entrées / Curries), each split into Vegetarian / Non-Vegetarian. */
  menuColumns?: GuideMenuColumn[];
  /** Used by the "menuList" block type — a footer line for items included across every column (e.g. "Dal, Rice, Breads"). */
  menuFooter?: string;
  /** Whether to show the Address/Timing facts table. Defaults to true; hides automatically if both are empty. */
  showFactsTable?: boolean;
  /** Replaces the old Area/Dietary/Groups per-card facts table. */
  address?: string;
  timing?: string;
  /** One or more centered buttons rendered below a "row" block's card grid (e.g. "View Full Menu"). */
  sectionCta?: { label: string; href: string } | { label: string; href: string }[];
}

export interface GuidePricingRow {
  item: string;
  price: string;
  note?: string;
}

export interface GuideQuickFact {
  label: string;
  value: string;
}

export interface GuideExternalLink {
  label: string;
  href: string;
  source: string;
}

export interface GuideComparisonRow {
  name: string;
  area: string;
  style: string;
  dietary: string;
  goodForGroups: boolean;
  highlight?: boolean;
}

export interface GuideComparisonTable {
  title: string;
  note?: string;
  rows: GuideComparisonRow[];
}

export interface GuideContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tag: "Local" | "Catering" | "Events" | "Dining";
  publishedDate: string;
  publishedDateDisplay: string;
  updatedDate: string;
  updatedDateDisplay: string;
  excerpt: string;
  intro: string;
  /** Short, direct answer to the core search query — surfaced in a callout for AI/answer-engine (AEO/GEO) extraction. */
  quickAnswer?: string;
  /** Full-width image rendered below the hero band, above the reviewer strip. */
  heroImage?: string;
  heroImageAlt?: string;
  quickFacts?: GuideQuickFact[];
  sections: GuideSection[];
  comparisonTable?: GuideComparisonTable;
  pricingTable?: { title: string; note?: string; rows: GuidePricingRow[] };
  /** Authoritative third-party links (transport, tourism, etc.) that back up claims in the guide. */
  externalLinks?: GuideExternalLink[];
  faq: GuideFAQ[];
  relatedSlugs: string[];
  ctaLabel: string;
  ctaHref: string;
  /** "listicle" = ranked-card grid + comparison table (GuideTemplate). "normal" = simple
   *  single-column article layout (NormalGuideTemplate). Undefined only happens for the
   *  bundled static guides below, which are all pre-existing listicle-style content — treat
   *  undefined as "listicle" wherever this field is read, to avoid changing their appearance. */
  guideType?: "normal" | "listicle";
}

const AUTHOR_NAME = "Nirav Shah";
// Exact, approved copy — do not paraphrase, shorten, or add a tagline line.
const AUTHOR_BIO_PARAGRAPHS = [
  "Nirav Shah is a hospitality professional with a strong passion for food culture, restaurant design, and exceptional customer experience. From over 10 years, he has explored Sydney’s diverse culinary scene with a thoughtful and informed perspective, gaining hands-on insight into how successful restaurants deliver quality dining.",
  "With a deep appreciation for flavor, ambience, and service, Nirav focuses on both lunch and dinner experiences when evaluating dining venues. His recommendations are shaped by personal visits and careful research, highlighting restaurants that consistently offer memorable and well-rounded dining experiences worth returning to.",
];

export const GUIDE_AUTHOR = { name: AUTHOR_NAME, bioParagraphs: AUTHOR_BIO_PARAGRAPHS };

export const REVIEWER = {
  name: "The Grand Palace Management Team",
  note: "Reviewed for factual accuracy — hours, pricing and location details are checked against our current bookings system.",
};

export const RESTAURANT_ADDRESS = "Basement, 261 George Street, Sydney, NSW 2000";
export const RESTAURANT_PHONE_DISPLAY = "(02) 8021 7696";
export const RESTAURANT_PHONE_TEL = "+61280217696";
export const RESTAURANT_EMAIL = "bookings@thegrandpalace.com.au";

const HOURS_BLOCK = [
  "Lunch: Monday – Sunday, 12:00pm – 3:00pm",
  "Dinner: Sunday – Thursday, 5:00pm – 10:00pm",
  "Dinner: Friday – Saturday, 5:00pm – 10:30pm",
  "Venue for hire: Saturday – Sunday, 12:00pm – 3:00pm",
];

export const guidesContent: Record<string, GuideContent> = {
  "indian-restaurant-near-wynyard-station-sydney": {
    slug: "indian-restaurant-near-wynyard-station-sydney",
    title: "Indian Restaurant Near Wynyard Station, Sydney CBD — The Grand Palace",
    metaTitle: "Indian Restaurant Near Wynyard Station Sydney | The Grand Palace",
    metaDescription:
      "The Grand Palace is the closest authentic Indian restaurant to Wynyard Station — a 90-second walk via MetCentre. HACCP certified, halal meat, open daily. Call (02) 8021 7696 or book online.",
    tag: "Local",
    publishedDate: "2026-06-26",
    publishedDateDisplay: "Jun 26, 2026",
    updatedDate: "2026-08-18",
    updatedDateDisplay: "Aug 18, 2026",
    excerpt:
      "The Grand Palace is the closest authentic Indian restaurant to Wynyard Station in Sydney CBD — a 90-second walk via the MetCentre exit on George Street.",
    intro:
      "If you're near Wynyard Station and craving proper Indian food, you don't need to go far. The Grand Palace sits in the basement at 261 George Street, about a 90-second walk from the station via the MetCentre exit — close enough for a working lunch, easy enough for a relaxed dinner after work.",
    quickAnswer:
      "The Grand Palace Indian Restaurant is the closest authentic Indian restaurant to Wynyard Station in Sydney CBD — a 90-second walk via the MetCentre exit on George Street.\n\nOpen daily for lunch from 12:00pm and dinner from 5:00pm. HACCP certified kitchen, halal-certified meats, and a full vegetarian menu including Jain options. Book online or call (02) 8021 7696.",
    quickFacts: [
      { label: "Address", value: "Basement, 261 George Street, Sydney NSW 2000" },
      { label: "Phone", value: "(02) 8021 7696" },
      { label: "Email", value: "bookings@thegrandpalace.com.au" },
      { label: "Lunch", value: "Monday – Sunday: 12:00pm – 3:00pm" },
      { label: "Dinner", value: "Sun – Thu: 5:00pm – 10:00pm · Fri – Sat: 5:00pm – 10:30pm" },
      { label: "Distance", value: "90 seconds from Wynyard Station via MetCentre exit" },
      {
        label: "Certified",
        value: "HACCP Certified · Gold Catering Licence · Halal Certified Meats",
      },
    ],
    sections: [
      {
        heading: "How to Get Here from Wynyard Station",
        blockType: "text",
        body: [
          "### Step-by-Step Walking Directions\n1. Exit Wynyard Station via the **MetCentre exit** (George Street side)\n2. Walk through the **MetCentre shopping arcade** — approximately 30 seconds, covered\n3. Exit onto **George Street**, turn **left (south)**\n4. Walk approximately **50 metres** along George Street\n5. Look for the entrance at **261 George Street** — basement level\n6. Take the stairs or lift **down to the Basement**\n7. The Grand Palace entrance is directly ahead",
          "### Train Lines at Wynyard\nWynyard Station is served by all main Sydney train lines — **T1, T2, T3, T4, and T8**. From most inner-city stops, the journey to Wynyard is under 10 minutes.",
          "### By Bus\nMultiple bus routes stop on York Street and Clarence Street, within a 2-minute walk. Services run frequently throughout the day and evening.",
          "### By Car\nPaid parking is available at Wilson Parking on York Street and Secure Parking near Wynyard — both within a short walk. Street parking on George Street is metered.",
        ],
      },
      {
        heading: "About the Venue",
        blockType: "text",
        body: [
          "The Grand Palace occupies a full basement level beneath 261 George Street — a warm, richly decorated Indian dining room in the heart of Sydney CBD. The underground setting creates a calm, enclosed atmosphere that feels a world away from the busy streets above.",
          "The kitchen is **HACCP certified** — meeting Australia's highest food safety standards. The restaurant holds a **Gold Catering Licence** and serves **halal-certified meats** across the entire menu. The venue is also available for **private hire** for corporate events, birthday celebrations, and wedding catering.",
          "### Dietary Options Available",
        ],
        bullets: [
          "Halal certified meats — all meats on the menu",
          "Full vegetarian menu — extensive selection, clearly labelled",
          "Vegan options — available across the menu",
          "Jain-friendly dishes — no onion, no garlic, on request",
          "Gluten-conscious options — available, please ask staff",
        ],
      },
      {
        heading: "Perfect For",
        blockType: "row",
        body: [
          "The Grand Palace suits a wide range of occasions — all within 90 seconds of Wynyard Station.",
        ],
        items: [
          "💼 Business Lunch\nQuiet, professional setting for client lunches and team meals. Private dining available for groups. HACCP certified kitchen.",
          "🌙 After-Work Dinner\nOpen until 10pm weekdays, 10:30pm on Friday and Saturday. Fully licensed bar. No BYO.",
          "🎂 Birthday Celebration\nDedicated [birthday packages](/birthday-package) available. Private dining spaces can be arranged.",
          "👥 Group Dining\nVenue accommodates up to 125 guests. Advance booking recommended for groups.",
          "🏢 Corporate Events\nIn-venue corporate dining and [external office catering](/office-catering) both available. Fully licensed, HACCP certified.",
          "🕌 Halal Dining\nFully halal-certified meats. One of the few fine dining Indian restaurants in Sydney CBD with full halal certification.",
        ],
      },
      {
        heading: "Why Choose The Grand Palace Near Wynyard",
        blockType: "box",
        body: [
          "If you are looking for an Indian restaurant near Wynyard Station, The Grand Palace offers something rare in Sydney CBD — an authentic, HACCP-certified kitchen with halal-certified meats, a full vegetarian menu, and a dining room that works as well for a business lunch as it does for a birthday celebration.",
          "At just a **90-second walk from Wynyard** via the MetCentre, it is the most conveniently located Indian restaurant for workers, visitors, and locals across the CBD. Whether you are planning ahead or looking for somewhere to eat today, the team at The Grand Palace is ready to welcome you.",
          "Book your table online, call **(02) 8021 7696**, or simply walk in — open daily for lunch from 12:00pm and dinner from 5:00pm.",
        ],
      },
    ],
    faq: [
      {
        q: "How far is The Grand Palace from Wynyard Station?",
        a: "About a 90-second walk via the MetCentre exit on George Street — approximately 50 metres from the station exit to the restaurant entrance at Basement, 261 George Street.",
      },
      {
        q: "Do I need a reservation?",
        a: "Reservations are recommended, particularly on Friday and Saturday evenings and for groups of 6 or more. Walk-ins are welcome subject to availability. Book online at thegrandpalace.com.au/book-a-table or call (02) 8021 7696.",
      },
      {
        q: "Is The Grand Palace halal certified?",
        a: "Yes — The Grand Palace serves halal-certified meats across the entire menu. The restaurant also offers a full vegetarian menu and Jain-friendly dishes (no onion, no garlic) on request.",
      },
      {
        q: "What are the opening hours?",
        a: "Lunch: Monday to Sunday, 12:00pm to 3:00pm. Dinner: Sunday to Thursday 5:00pm to 10:00pm, Friday and Saturday 5:00pm to 10:30pm. The kitchen closes 30 minutes before the restaurant's closing time.",
      },
      {
        q: "Is The Grand Palace suitable for a business lunch?",
        a: "Yes — the restaurant has a calm, professional atmosphere suited to business lunches and client meals. Private dining is available for group bookings. Contact the team at bookings@thegrandpalace.com.au to arrange.",
      },
      {
        q: "Can large groups dine at The Grand Palace?",
        a: "Yes — the venue accommodates up to 125 guests. For groups, advance booking is strongly recommended. Contact the team directly to discuss arrangements.",
      },
      {
        q: "Is there parking nearby?",
        a: "Wilson Parking on York Street and Secure Parking near Wynyard are both within a short walk. Street parking on George Street is metered. The restaurant does not offer parking validation.",
      },
      {
        q: "Does The Grand Palace have vegetarian and vegan options?",
        a: "Yes — a full vegetarian menu is available. Vegan and gluten-conscious options are also offered. Jain cuisine (no onion, no garlic) is available on request. Please inform staff of dietary requirements when booking or on arrival.",
      },
      {
        q: "Can I order food for delivery from near Wynyard?",
        a: "Yes — The Grand Palace offers online ordering for delivery within the CBD. Order at thegrandpalace.com.au/whats-on/order-online. Office catering is also available for corporate teams.",
      },
      {
        q: "How do I get to The Grand Palace from Circular Quay?",
        a: "Walk south on George Street for approximately 12 minutes, or take any T-line train one stop from Circular Quay to Wynyard Station, then follow the MetCentre exit directions above — total journey under 5 minutes.",
      },
    ],
    relatedSlugs: [
      "indian-restaurant-near-martin-place",
      "indian-restaurant-near-town-hall-station",
      "corporate-catering-sydney-cbd",
    ],
    ctaLabel: "Book a Table",
    ctaHref: "/book-a-table",
    guideType: "normal",
  },

  "indian-restaurant-near-martin-place": {
    slug: "indian-restaurant-near-martin-place",
    title: "Indian Restaurant Near Martin Place Sydney — 5 Minutes from The Grand Palace",
    metaTitle: "Indian Restaurant Near Martin Place Sydney | The Grand Palace",
    metaDescription:
      "Working near Martin Place? The Grand Palace is about a 5-minute walk away — halal-certified fine-dining Indian food in Sydney CBD for lunch, dinner and group bookings.",
    tag: "Local",
    publishedDate: "2026-07-22",
    publishedDateDisplay: "Jul 22, 2026",
    updatedDate: "2026-08-18",
    updatedDateDisplay: "Aug 18, 2026",
    guideType: "normal",
    excerpt:
      "Based near Martin Place? The Grand Palace is a short walk away in Sydney CBD's George Street dining strip — ideal for client lunches and after-work dinners.",
    intro:
      "Martin Place is the heart of Sydney's banking and legal district, and it's easy to fall back on the same handful of cafes and food courts nearby out of convenience. The Grand Palace, in the basement at 261 George Street, is about a **5-minute walk** from Martin Place — close enough for a proper sit-down lunch without losing your whole break, and an easy after-work dinner spot for teams finishing near the Place.",
    quickAnswer:
      "The Grand Palace is about a **5-minute walk** from Martin Place: head north on George Street toward Wynyard, and our basement dining room at 261 George Street is on your right. Lunch runs 12–3pm daily and dinner from 5pm, with private dining spaces available for client and team bookings. Call [(02) 8021 7696](tel:+61280217696) or [book online](/book-a-table).",
    quickFacts: [
      { label: "Distance from Martin Place", value: "5-minute walk north on George Street" },
      { label: "Lunch hours", value: "12:00pm – 3:00pm, daily" },
      { label: "Dinner hours", value: "5:00pm – 10:00pm (Sun–Thu), 5:00pm – 10:30pm (Fri–Sat)" },
      { label: "Certified", value: "HACCP Certified · Halal Certified Meats" },
    ],
    sections: [
      {
        heading: "{{color:#c8720a}}Getting to The Grand Palace from Martin Place{{/color}}",
        image:
          "https://booriz1miux5j9vr.public.blob.vercel-storage.com/resized-Hero_030-hllw0VdEWrIyRyZozlJ09qFFpIEwiA.jpg",
        imageAlt: "A signature spread of dishes at The Grand Palace, Sydney CBD",
        body: [
          "From Martin Place, head north on George Street toward Wynyard — The Grand Palace's basement entrance at [261 George Street](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%2C%20NSW%202000%2C%20Australia) is around a 5-minute walk, in the same stretch of the CBD as Wynyard Station and the Bridge Street Light Rail stop.",
          "Coming from a Martin Place office block, it's an easy walk with no need to cross to the other side of the CBD — useful if you're working around a short lunch window. If you'd rather not walk, it's also a short, direct taxi or rideshare trip along George Street, with paid parking available nearby at Wilson Parking and Secure Parking.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Why Choose The Grand Palace{{/color}}",
        blockType: "row",
        image:
          "https://booriz1miux5j9vr.public.blob.vercel-storage.com/resized-Hero_045-wEydhaRCSNtUpNenKcwF9Nj9MHUma5.JPG",
        imageAlt: "Dishes from The Grand Palace's menu, set against a tropical living wall",
        body: [],
        items: [
          "Authentic Recipes\nTraditional Indian spice blends and cooking techniques, not a simplified tourist menu.",
          "HACCP Certified & Halal\nCertified kitchen with halal-certified meats across the non-vegetarian range.",
          "A Proper Dining Room\nPalace-inspired décor suited to a client lunch or an after-work dinner alike.",
          "Genuine Dietary Coverage\nVegetarian and vegan dishes throughout, [Jain](/guides/jain-restaurants-in-sydney-no-onion-no-garlic) (no onion/garlic) on request.",
        ],
      },
      {
        heading: "{{color:#c8720a}}A Step Up from a Desk Lunch{{/color}}",
        blockType: "row",
        body: [
          "For teams and clients based around Martin Place, The Grand Palace offers a proper sit-down alternative to sandwich platters or food-court Indian — [halal-certified](/guides/best-halal-restaurant-in-sydney) across the non-vegetarian range, with vegetarian, vegan and Jain options throughout. Set menus are also available to keep group ordering simple.",
        ],
        items: [
          "Shahi Paneer\nCottage cheese in a rich, creamy tomato-based gravy.",
          "Dal Makhani\nSlow-simmered black lentils, finished with cream and butter.",
          "Gunpowder Gobhi\nA crisp, spice-crusted cauliflower starter.",
          "Malai Kofta\nVegetable and paneer dumplings in a creamy, mildly spiced gravy.",
          "Butter Chicken\nRich, creamy tomato gravy — the most-ordered dish on the menu.",
          "Lamb Rogan Josh\nSlow-cooked lamb in a deep, aromatic curry.",
        ],
        sectionCta: { label: "View Full Menu", href: "/menu" },
      },
      {
        heading: "{{color:#c8720a}}Birthdays, Corporate Lunches & Private Events{{/color}}",
        blockType: "row",
        body: [
          "If you're organising for a group rather than just yourself, there's a format for it.",
        ],
        items: [
          "Corporate Catering\n[Catering boxes](/office-catering) from $75, or [full-service catering](/venue-catering) delivered and set up at your office.",
          "Birthday Dinners\n[$150 birthday package](/birthday-package) with a personalised cake, balloons and décor.",
          "Private Venue Hire\n[Hire the whole restaurant](/venue-for-hire) for up to 125 guests.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Good to Know Before You Book{{/color}}",
        blockType: "text",
        body: [
          "Lunch runs seven days a week — useful if your team's schedule doesn't line up with a standard Monday–Friday booking pattern.",
        ],
        bullets: [
          "**No BYO** — fully licensed",
          "**Card surcharge** applies; 10% surcharge on public holidays and special events",
          "**Private dining spaces** available for a more discreet client meeting",
        ],
      },
      {
        heading: "{{color:#c8720a}}Conclusion{{/color}}",
        body: [
          "If you're based around Martin Place and want more than another desk lunch or food-court run, The Grand Palace is close enough to reach comfortably within a lunch break and worth the short walk for dinner after work.",
          "Between the sit-down dining room, private spaces for client meetings, and catering or venue-hire options for larger office groups, it covers most of what a Martin Place team actually needs from a nearby restaurant.",
          "[Book a table](/book-a-table) or call [(02) 8021 7696](tel:+61280217696) to arrange a group booking.",
        ],
      },
    ],
    faq: [
      {
        q: "How far is The Grand Palace from Martin Place?",
        a: "About a 5-minute walk north on George Street, in the same CBD stretch as Wynyard Station.",
      },
      {
        q: "Is it suitable for a client lunch near Martin Place?",
        a: "Yes — the dining room is set up for a proper sit-down lunch service, with private dining spaces available if you need a more discreet setting for a client or team lunch.",
      },
      {
        q: "Does The Grand Palace do corporate catering for offices near Martin Place?",
        a: "Yes — both [individually packed catering boxes](/office-catering) for meetings and [full-service catering](/venue-catering) for larger events, delivered and set up at your office.",
      },
      {
        q: "Can I book a private space for a business meeting near Martin Place?",
        a: "Yes — private dining spaces are available for client meetings, team lunches and after-work functions, in addition to the main dining room. For an exclusive event, the [whole restaurant can be hired](/venue-for-hire).",
      },
      {
        q: "Does The Grand Palace do birthday dinners for teams near Martin Place?",
        a: "Yes — the [$150 birthday package](/birthday-package) includes a personalised cake, balloons, banner and décor, with set menus from $40pp.",
      },
      {
        q: "Is halal food available near Martin Place?",
        a: "Yes — The Grand Palace's non-vegetarian menu is [halal-certified](/guides/best-halal-restaurant-in-sydney), alongside vegetarian, vegan and Jain options.",
      },
    ],
    externalLinks: [
      {
        label: "Martin Place precinct information",
        href: "https://transportnsw.info/",
        source: "Transport for NSW",
      },
    ],
    relatedSlugs: [
      "indian-restaurant-near-wynyard-station-sydney",
      "how-to-plan-office-lunch-catering-in-sydney",
      "restaurant-for-birthday-dinner",
    ],
    ctaLabel: "Book a Table",
    ctaHref: "/book-a-table",
  },

  "indian-restaurant-near-town-hall-station": {
    slug: "indian-restaurant-near-town-hall-station",
    title: "Indian Restaurant Near Town Hall Station Sydney — Just One Stop to The Grand Palace",
    metaTitle: "Indian Restaurant Near Town Hall Station Sydney | The Grand Palace",
    metaDescription:
      "Near Town Hall Station? The Grand Palace is one train stop away at Wynyard, or about a 15-minute walk — fine-dining Indian food in Sydney CBD.",
    tag: "Local",
    publishedDate: "2026-07-22",
    publishedDateDisplay: "Jul 22, 2026",
    updatedDate: "2026-08-18",
    updatedDateDisplay: "Aug 18, 2026",
    guideType: "normal",
    excerpt:
      "Based near Town Hall? The Grand Palace is one train stop up the line at Wynyard, or a straightforward walk up George Street.",
    intro:
      "Town Hall is one of the busiest interchanges in the city, and it's genuinely worth the short trip up George Street or one stop on the train to reach The Grand Palace, in the basement at 261 George Street. It's about a **15-minute walk** directly up George Street, or a **2–3 minute train ride** to Wynyard Station, from which the restaurant is a further 1-minute walk.",
    quickAnswer:
      "From Town Hall Station, the fastest route to The Grand Palace is one train stop to Wynyard (T1/T7/T8/T9), then a 1-minute walk through the MetCentre to 261 George Street. Walking the whole way up George Street takes about 15 minutes. Lunch runs 12–3pm daily, dinner from 5pm. Call [(02) 8021 7696](tel:+61280217696) or [book online](/book-a-table).",
    quickFacts: [
      { label: "Train", value: "1 stop to Wynyard (T1/T7/T8/T9), then 1-minute walk" },
      { label: "Walking", value: "~15 minutes north on George Street" },
      { label: "Lunch hours", value: "12:00pm – 3:00pm, daily" },
      { label: "Dinner hours", value: "5:00pm – 10:00pm (Sun–Thu), 5:00pm – 10:30pm (Fri–Sat)" },
      { label: "Certified", value: "HACCP Certified · Halal Certified Meats" },
    ],
    sections: [
      {
        heading: "{{color:#c8720a}}Getting to The Grand Palace from Town Hall Station{{/color}}",
        image:
          "https://booriz1miux5j9vr.public.blob.vercel-storage.com/Hero_001-FplNabdSZNZfJj4tlERXr9Ykghx9w3.jpg",
        imageAlt: "A signature spread of dishes at The Grand Palace, Sydney CBD",
        body: [
          "The simplest route is the train: from Town Hall, it's one stop to Wynyard on the **T1/T7/T8/T9** lines, then about a minute's walk through the MetCentre to [261 George Street](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%2C%20NSW%202000%2C%20Australia). If you'd rather walk the whole way, head north on George Street — it's a straightforward, mostly flat **15-minute walk** through the CBD, passing Wynyard and the Bridge Street Light Rail stop along the way.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Why Choose The Grand Palace{{/color}}",
        blockType: "row",
        image:
          "https://booriz1miux5j9vr.public.blob.vercel-storage.com/resized-Hero_015-JIwAw8PpRyWeeJflKFnTGzyxY9Ze3C.jpg",
        imageAlt:
          "Dining at The Grand Palace, set beneath the restaurant's hand-carved antique doors",
        body: [],
        items: [
          "Authentic Recipes\nTraditional Indian spice blends and cooking techniques, not a simplified tourist menu.",
          "HACCP Certified & Halal\nCertified kitchen with halal-certified meats across the non-vegetarian range.",
          "A Proper Dining Room\nPalace-inspired décor — a genuine sit-down experience, not a quick-service stop.",
          "Genuine Dietary Coverage\nVegetarian and vegan dishes throughout, [Jain](/guides/jain-restaurants-in-sydney-no-onion-no-garlic) (no onion/garlic) on request.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Worth the Trip Up George Street{{/color}}",
        blockType: "row",
        body: [
          "The Grand Palace is a fine-dining Indian restaurant rather than a quick-service option — palace-inspired décor, halal-certified meat across the menu, and vegetarian, vegan and Jain options available throughout. Set menus are also available to keep group ordering simple.",
        ],
        items: [
          "Shahi Paneer\nCottage cheese in a rich, creamy tomato-based gravy.",
          "Dal Makhani\nSlow-simmered black lentils, finished with cream and butter.",
          "Gunpowder Gobhi\nA crisp, spice-crusted cauliflower starter.",
          "Malai Kofta\nVegetable and paneer dumplings in a creamy, mildly spiced gravy.",
          "Butter Chicken\nRich, creamy tomato gravy — the most-ordered dish on the menu.",
          "Lamb Rogan Josh\nSlow-cooked lamb in a deep, aromatic curry.",
        ],
        sectionCta: { label: "View Full Menu", href: "/menu" },
      },
      {
        heading: "{{color:#c8720a}}Birthdays, Corporate Lunches & Private Events{{/color}}",
        blockType: "row",
        body: [
          "For groups coming from the Town Hall / QVB end of the CBD, there's a format for every kind of booking.",
        ],
        items: [
          "Corporate Catering\n[Catering boxes](/office-catering) from $75, or [full-service catering](/venue-catering) delivered and set up at your office.",
          "Birthday Dinners\n[$150 birthday package](/birthday-package) with a personalised cake, balloons and décor.",
          "Private Venue Hire\n[Hire the whole restaurant](/venue-for-hire) for up to 125 guests.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Good to Know Before You Book{{/color}}",
        blockType: "text",
        body: [],
        bullets: [
          "**No BYO** — fully licensed",
          "**Card surcharge** applies; 10% surcharge on public holidays and special events",
        ],
      },
      {
        heading: "{{color:#c8720a}}Conclusion{{/color}}",
        body: [
          "From Town Hall, reaching The Grand Palace is a quick one-stop train ride or a straightforward 15-minute walk up George Street — a small detour for a genuine sit-down Indian dining experience rather than another quick-service option near the station.",
          "For a proper lunch or dinner, a birthday, or a group booking that needs more than a food-court table, it's worth the trip up the strip.",
          "[Book a table](/book-a-table) or call [(02) 8021 7696](tel:+61280217696).",
        ],
      },
    ],
    faq: [
      {
        q: "How do I get to The Grand Palace from Town Hall Station?",
        a: "The fastest way is one train stop to Wynyard, then a 1-minute walk. Walking the whole way up George Street takes about 15 minutes.",
      },
      {
        q: "Is it worth the trip from Town Hall for lunch?",
        a: "Yes — The Grand Palace is a sit-down fine-dining experience rather than a food-court option, and lunch runs from 12:00pm to 3:00pm daily.",
      },
      {
        q: "Does The Grand Palace do corporate catering for offices near Town Hall?",
        a: "Yes — both [individually packed catering boxes](/office-catering) for meetings and [full-service catering](/venue-catering) for larger events, delivered and set up at your office.",
      },
      {
        q: "Can I book a birthday dinner near Town Hall Station?",
        a: "Yes — the [$150 birthday package](/birthday-package) includes a personalised cake, balloons, banner and décor, with set menus from $40pp.",
      },
      {
        q: "Is halal food available near Town Hall Station?",
        a: "Yes — The Grand Palace's non-vegetarian menu is halal-certified, alongside vegetarian, vegan and Jain options.",
      },
    ],
    relatedSlugs: [
      "indian-restaurant-near-wynyard-station-sydney",
      "indian-restaurant-near-martin-place",
      "best-indian-restaurant-near-me-sydney-cbd-the-grand-palace-guide",
    ],
    ctaLabel: "Book a Table",
    ctaHref: "/book-a-table",
  },

  "best-halal-restaurant-in-sydney": {
    slug: "best-halal-restaurant-in-sydney",
    title: "Best Halal Indian Restaurant Sydney 2026 — Complete Guide",
    metaTitle: "Best Halal Indian Restaurant Sydney 2026 | The Grand Palace",
    metaDescription:
      "The Grand Palace is a fine-dining Indian restaurant in Sydney CBD using halal-certified meat across the entire menu. See our halal dishes, hours and location.",
    tag: "Dining",
    publishedDate: "2026-04-23",
    publishedDateDisplay: "Apr 23, 2026",
    updatedDate: "2026-05-26",
    updatedDateDisplay: "May 26, 2026",
    excerpt:
      "Searching for a halal Indian restaurant in Sydney? The Grand Palace on George Street, Sydney CBD, is your answer.",
    intro:
      "The Grand Palace is one of the very few fine-dining Indian restaurants in Sydney CBD that uses halal-certified meat across its entire non-vegetarian menu — not just a handful of dishes. Combined with a palace-inspired dining room rather than a casual takeaway setting, it's built for guests who want a proper halal dining experience, not a compromise.",
    sections: [
      {
        heading: "Our halal certification, in plain terms",
        body: [
          "All chicken, lamb and beef dishes on our menu are prepared with halal-certified meat sourced from certified suppliers. There is no pork or pork-derived ingredient anywhere on the menu, and no alcohol is used in food preparation.",
        ],
      },
      {
        heading: "Halal dishes to try",
        body: [],
        bullets: [
          "Entrées: Murgh Afghani Tikka, Saffron Chicken Tikka, Kakori Kebab",
          "Curries: Butter Chicken, Chicken Tikka Masala, Kashmiri Rogan Josh, Masala Fish Curry",
        ],
      },
      {
        heading: "Beyond halal — other dietary needs",
        body: [
          "The kitchen also accommodates vegetarian, vegan and gluten-friendly requirements, and can prepare dishes to a no-onion/no-garlic (Jain) standard with advance notice — ask your server or mention it when booking.",
        ],
      },
      {
        heading: "Visit us",
        body: [
          "The Grand Palace is in the basement at 261 George Street, Sydney CBD — about a 1-minute walk from Wynyard Station.",
        ],
        bullets: HOURS_BLOCK,
      },
    ],
    faq: [
      {
        q: "Is The Grand Palace halal certified?",
        a: "Yes. The Grand Palace uses halal-certified meat across all non-vegetarian dishes on the menu, sourced from certified suppliers, with no pork or alcohol used in food preparation.",
      },
      {
        q: "Are there vegetarian and vegan options as well as halal?",
        a: "Yes — the menu includes dedicated vegetarian and vegan dishes alongside the halal non-vegetarian range, and gluten-friendly options are available.",
      },
      {
        q: "Can you prepare no-onion, no-garlic (Jain) dishes?",
        a: "Yes, with advance notice. Let us know when booking or ordering and the kitchen will prepare your dishes to a no-onion/no-garlic standard.",
      },
    ],
    relatedSlugs: [
      "jain-restaurants-sydney",
      "indian-restaurant-near-wynyard-station-sydney",
      "best-indian-restaurant-sydney",
    ],
    ctaLabel: "Book a Table",
    ctaHref: "/book-a-table",
  },

  "corporate-catering-sydney-cbd": {
    slug: "corporate-catering-sydney-cbd",
    title: "Corporate Catering Sydney CBD — Indian Food for Office Lunches & Dinners",
    metaTitle: "Corporate Catering Sydney CBD | The Grand Palace",
    metaDescription:
      "The Grand Palace offers Indian corporate catering across Sydney CBD — individually packed catering boxes from $75, or full on-site catering for larger events.",
    tag: "Catering",
    publishedDate: "2026-06-26",
    publishedDateDisplay: "Jun 26, 2026",
    updatedDate: "2026-07-22",
    updatedDateDisplay: "Jul 22, 2026",
    excerpt:
      "Organising catering for a meeting, training session, office lunch, or corporate event? Discover how The Grand Palace delivers premium Indian catering.",
    intro:
      "The Grand Palace provides corporate catering across Sydney's CBD as an alternative to standard sandwich platters — proper Indian food for office lunches, training sessions, board meetings and client functions, available for both lunch and dinner.",
    sections: [
      {
        heading: "Two ways to order corporate catering",
        body: [
          "Catering boxes — individually packaged vegetarian or non-vegetarian meals, built for meetings and training sessions where guests eat at their desks or in a boardroom rather than sitting down to a full meal.",
          "On-site catering — buffet setups, food stations or plated meals delivered and arranged at your venue, suited to larger gatherings and evening functions.",
        ],
      },
      {
        heading: "Custom menus built around your event",
        body: [
          "Every order is built around guest numbers, meal timing and dietary requirements. Menu selections span starters, mains, sides, desserts and beverages, with vegetarian, vegan, gluten-free and halal options throughout — the kitchen is halal-certified and HACCP approved.",
        ],
      },
      {
        heading: "How to book corporate catering",
        body: [],
        bullets: [
          "Select your catering style — individually packed boxes or full on-site service",
          "Customise the menu — vegetarian, non-vegetarian or mixed selections",
          "Confirm guest count, date and delivery/setup requirements",
          "Our team manages preparation through to service",
        ],
      },
      {
        heading: "Who we cater for",
        body: [],
        bullets: [
          "Office lunches and weekday team catering",
          "Board meetings and executive lunches",
          "Training sessions and conferences",
          "Client meetings and networking events",
          "Staff appreciation lunches and end-of-year functions",
        ],
      },
    ],
    pricingTable: {
      title: "Corporate catering pricing",
      note: "On-site event packages are quoted per person based on menu and guest count; contact us for a tailored quote.",
      rows: [
        { item: "Vegetarian Platter Box", price: "$75 / box", note: "Pickup or CBD delivery" },
        { item: "Non-Vegetarian Platter Box", price: "$85 / box", note: "Pickup or CBD delivery" },
        {
          item: "On-site catering packages",
          price: "From $45 / person",
          note: "Buffet, food stations or plated service",
        },
        {
          item: "Set menu banquets",
          price: "From $65 / person",
          note: "Minimum 2 guests, dine-in",
        },
        {
          item: "Minimum charge (dine-in)",
          price: "$35 / person",
          note: "Children aged 5–10: $25",
        },
      ],
    },
    faq: [
      {
        q: "Does The Grand Palace do corporate catering in Sydney CBD?",
        a: "Yes — two formats are available: individually packed catering boxes for meetings and training sessions, and full on-site catering (buffet, food stations or plated service) for larger events, for both lunch and dinner.",
      },
      {
        q: "What are catering boxes and when should I use them?",
        a: "Catering boxes are individually packed vegetarian ($75) or non-vegetarian ($85) meals, designed for meetings and training sessions where guests eat at their desks or in a boardroom rather than sitting down to a full meal.",
      },
      {
        q: "How many people can The Grand Palace cater for?",
        a: "The dining room accommodates up to 125 guests for on-site dine-in events across five private dining rooms. External delivery/catering guest numbers are confirmed at booking.",
      },
      {
        q: "Is the corporate catering from The Grand Palace halal?",
        a: "Yes — the kitchen is halal-certified and HACCP approved, and vegetarian, vegan and gluten-free options are available on request.",
      },
    ],
    relatedSlugs: [
      "how-to-plan-office-lunch-catering-sydney",
      "indian-catering-box-sydney",
      "indian-restaurant-near-martin-place",
    ],
    ctaLabel: "Enquire Now",
    ctaHref: "/office-catering",
  },

  "indian-wedding-catering-sydney": {
    slug: "indian-wedding-catering-sydney",
    title: "Indian Wedding Catering Sydney — Your Complete Planning Guide",
    metaTitle: "Indian Wedding Catering Sydney | The Grand Palace",
    metaDescription:
      "Planning Indian wedding catering in Sydney? A complete guide to menu planning, budgeting, timelines and choosing a HACCP-certified caterer — from The Grand Palace.",
    tag: "Events",
    publishedDate: "2026-05-13",
    publishedDateDisplay: "May 13, 2026",
    updatedDate: "2026-07-22",
    updatedDateDisplay: "Jul 22, 2026",
    excerpt:
      "Planning the perfect Indian wedding catering in Sydney is one of the most important decisions you'll make. Here's your complete guide.",
    intro:
      "A traditional Indian wedding feast — a dawat — is a carefully curated spread of dishes that spans multiple courses, accommodates diverse guests, and honours the traditions and tastes of both families. In Australia, Indian wedding receptions typically blend traditional North Indian wedding dishes with modern event requirements: clear dietary labelling, hygienic service standards, and formal presentation.",
    sections: [
      {
        heading: "Traditional dishes for an Indian wedding menu in Sydney",
        body: [],
        bullets: [
          "Starters: Chicken Tikka, Samosa, Seekh Kebab, Paneer Tikka, Prawn Masala, Onion Bhaji",
          "Main course: Butter Chicken, Paneer Butter Masala, Lamb Rogan Josh, Dal Makhani, Chicken Biryani, Vegetable Biryani, Chicken Tikka Masala, Chana Masala",
          "Breads & accompaniments: Garlic Naan, Plain Naan, Roti (Chapati), Basmati Rice",
        ],
      },
      {
        heading: "How to choose an Indian wedding caterer in Sydney",
        body: [],
        bullets: [
          "HACCP certification for food safety",
          "Experience catering for large groups (50+ guests)",
          "Menu customisation flexibility",
          "Dietary accommodation — vegetarian, vegan, halal, gluten-free",
          "Tasting session availability",
          "References and reviews",
          "Clear, itemised pricing and a written contract",
        ],
      },
      {
        heading: "A six-month planning timeline",
        body: [],
        bullets: [
          "6 months before: initial enquiry and date confirmation",
          "4 months before: menu planning and tasting session",
          "3 months before: menu finalisation and contract signing",
          "1 month before: final guest count and dietary confirmation",
          "1 week before: final logistics confirmation",
        ],
      },
      {
        heading: "Budgeting for Indian wedding catering",
        body: [
          "Indian wedding catering in Sydney is typically priced per head, and every wedding is different — guest count, menu tiers and service style all move the final number. As a starting reference, our standard set menu banquets range from $65 to $95 per person (see the pricing table below); a wedding-specific quote will build on this depending on your course count, service style and guest numbers.",
        ],
        bullets: [
          "Get written quotes, not verbal ones",
          "Confirm exactly what's included in the price",
          "Add a 10% buffer for guest-count increases",
          "Ask about surcharges for extra dietary requirements",
          "Pay a deposit to secure your date",
        ],
      },
      {
        heading: "Why choose The Grand Palace",
        body: [],
        bullets: [
          "HACCP-certified, halal-certified kitchen",
          "Authentic North Indian cuisine",
          "Palace-inspired dining room for a formal setting",
          "Full dietary flexibility — vegetarian, vegan, halal, gluten-free, Jain",
          "Sydney CBD location, easy for interstate and local guests",
          "Experience catering events up to 125 guests across five private dining rooms",
        ],
      },
    ],
    pricingTable: {
      title: "Indicative per-person pricing (starting point)",
      note: "A full wedding quote depends on course count, guest numbers and service style — this reflects our standard banquet tiers as a starting reference, confirmed at consultation.",
      rows: [
        { item: "Vegetarian Banquet", price: "From $65 / person", note: "Minimum 2 guests" },
        { item: "Non-Vegetarian Banquet", price: "From $70 / person", note: "Minimum 2 guests" },
        { item: "TGP Special Banquet", price: "From $95 / person", note: "Minimum 2 guests" },
      ],
    },
    faq: [
      {
        q: "How much does Indian wedding catering cost in Sydney?",
        a: "Pricing is per head and depends on menu tier, course count and guest numbers. Our standard banquets start from $65 per person as a reference point — request a written, itemised quote for your exact guest count and menu.",
      },
      {
        q: "Is The Grand Palace HACCP certified?",
        a: "Yes, the kitchen is HACCP certified, which is worth confirming with any caterer handling a large wedding guest list.",
      },
      {
        q: "Can you cater for mixed dietary requirements at a wedding?",
        a: "Yes — vegetarian, vegan, halal, gluten-free and Jain (no onion/no garlic) requirements can all be accommodated with advance notice.",
      },
    ],
    relatedSlugs: [
      "corporate-catering-sydney-cbd",
      "private-event-venue-hire-sydney-cbd",
      "jain-restaurants-sydney",
    ],
    ctaLabel: "Enquire About Wedding Catering",
    ctaHref: "/venue-catering",
  },

  "best-vegan-restaurant-sydney": {
    slug: "best-vegan-restaurant-sydney",
    title: "Best 15 Vegan Restaurant in Sydney",
    metaTitle: "Best Vegan Restaurant in Sydney | The Grand Palace",
    metaDescription:
      "Looking for vegan-friendly Indian food in Sydney CBD? The Grand Palace serves dedicated vegan dishes across starters, curries and biryanis — here's what to order and what to check before you book.",
    tag: "Dining",
    publishedDate: "2025-12-31",
    publishedDateDisplay: "Dec 31, 2025",
    updatedDate: "2026-07-27",
    updatedDateDisplay: "Jul 27, 2026",
    excerpt:
      "Sydney has become a thriving destination for vegan food lovers, offering everything from plant-based fine dining to casual vegan cafes.",
    intro:
      "Vegan dining in Sydney has moved well beyond salads and smoothie bowls — plant-based eaters now expect the same depth of flavour, feature-for-feature, as everyone else at the table. Below is a genuine cross-section of the city's standout vegan and vegan-friendly kitchens: fully plant-based fine diners, neighbourhood cafés, a vegan pub, and a proper Indian menu with vegan dishes built in from the start. Each listing covers what it's best for, its stand-out features, and its dietary flexibility — including where we, [The Grand Palace](/menu), fit into that picture, and what to actually check before you book anywhere.",
    quickAnswer:
      "For a full sit-down vegan Indian meal in Sydney CBD, The Grand Palace serves a dedicated line of vegan dishes across starters, curries, rice and biryani, available lunch and dinner, daily. For fully plant-based fine dining, Yellow in Potts Point is Sydney's best-known option; for casual and inner-west dining, Yulli's, Gigi Pizzeria, Miss Sina and Mama B's at the Chippo Hotel are well-regarded choices.",
    quickFacts: [
      { label: "Vegan dishes at The Grand Palace", value: "Lunch and dinner, every day" },
      {
        label: "Dietary flexibility",
        value: "Vegan, vegetarian, gluten-friendly, halal — all on one menu",
      },
    ],
    comparisonTable: {
      title: "Compare at a Glance",
      note: "The Grand Palace runs a mixed halal Indian menu with a dedicated vegan selection; the rest of the list is fully vegan kitchens.",
      rows: [
        {
          name: "The Grand Palace",
          area: "Sydney CBD",
          style: "Indian fine dining",
          dietary: "Vegan dishes + halal, vegetarian menu",
          goodForGroups: true,
          highlight: true,
        },
        {
          name: "Yellow",
          area: "Potts Point",
          style: "Vegan fine dining",
          dietary: "Fully vegan, GF options",
          goodForGroups: false,
        },
        {
          name: "Towzen",
          area: "Sydney CBD",
          style: "Japanese-inspired",
          dietary: "Fully vegan",
          goodForGroups: false,
        },
        {
          name: "Gigi Pizzeria",
          area: "Newtown",
          style: "Vegan pizzeria",
          dietary: "Fully vegan, GF bases",
          goodForGroups: false,
        },
        {
          name: "Yulli's",
          area: "Surry Hills",
          style: "Small plates / bar",
          dietary: "Plant-based menu, GF options",
          goodForGroups: true,
        },
        {
          name: "Miss Sina",
          area: "Marrickville",
          style: "Vegan bakery & café",
          dietary: "Fully vegan",
          goodForGroups: false,
        },
        {
          name: "Mama B's (Chippo Hotel)",
          area: "Chippendale",
          style: "Vegan pub food",
          dietary: "Fully vegan",
          goodForGroups: true,
        },
        {
          name: "Little Turtle",
          area: "Enmore",
          style: "Vegan Thai",
          dietary: "Fully vegan",
          goodForGroups: false,
        },
        {
          name: "Golden Lotus",
          area: "Newtown",
          style: "Vegan Vietnamese, BYO",
          dietary: "Fully vegan",
          goodForGroups: false,
        },
      ],
    },
    sections: [
      {
        heading: "What actually makes a restaurant vegan-friendly",
        body: [
          "A single 'vegan option' bolted onto an otherwise meat-and-dairy-heavy menu isn't the same as a kitchen that treats plant-based dining as standard. The difference worth checking for: dishes clearly labelled vegan across every course (not just entrées), a kitchen willing to adjust standard dishes on request, and enough range that a group with mixed dietary needs can still share plates comfortably. The list below includes both fully vegan venues and mixed-menu restaurants — like ours — that take vegan dining seriously rather than treating it as an afterthought.",
        ],
      },
      {
        heading: "1. The Grand Palace — Sydney CBD",
        image: grandPalaceStorefront,
        imageAlt: "The Grand Palace Indian Restaurant storefront on George Street, Sydney CBD",
        body: [
          "Our own kitchen, in the basement at 261 George Street, keeps a proper spread of vegan dishes across starters, lentil and vegetable curries, rice and biryani, drawing on North Indian vegetarian cooking that's naturally plant-based once dairy and ghee are removed. It's best suited to a group booking or a proper sit-down meal rather than a quick solo lunch.",
        ],
        bullets: [
          "Best for: a full multi-course vegan Indian meal, including group set menu banquets",
          "Try: Chana Masala, Dal Tadka (vegan preparation), Baingan Bharta, Vegetable Biryani",
          "Features: palace-inspired dining room, five private dining spaces, seats up to 125",
          "Dietary options: vegan, vegetarian, halal, gluten-friendly and Jain (no onion/no garlic) on request",
          "[Book a table](/book-a-table) or [view the full menu](/menu)",
        ],
      },
      {
        heading: "2. Yellow — Potts Point",
        bannerIcon: "fine-dining",
        body: [
          "An award-winning, fully vegan fine diner known for its seasonal, produce-driven multi-course tasting menu — a genuine plant-based degustation rather than a vegetable side-dish approach.",
        ],
        bullets: [
          "Best for: a special-occasion vegan fine dining experience",
          "Features: seasonal tasting menu, wine and non-alcoholic pairing options, nature-inspired dining room",
          "Dietary options: fully vegan menu, with gluten-free adaptations available — worth confirming any allergies when booking",
        ],
      },
      {
        heading: "3. Towzen — Sydney CBD",
        bannerIcon: "ramen",
        body: [
          "A fully vegan restaurant with roots in Kyoto-style cooking, known for dishes like its Truffle Ramen made with a walnut-mylk broth — a good option if you want vegan food that doesn't taste like a substitution.",
        ],
        bullets: [
          "Best for: modern, Japanese-influenced vegan cooking",
          "Features: Kyoto-inspired small plates and ramen, central CBD location",
          "Dietary options: fully vegan menu",
        ],
      },
      {
        heading: "4. Gigi Pizzeria — Newtown",
        bannerIcon: "pizza",
        body: [
          "A vegan pizzeria that's also a certified member of the Associazione Verace Pizza Napoletana, meaning the wood-fired, Napoletana-style bases are held to the same standard as traditional Italian pizzerias — just entirely plant-based. It's popular enough that they don't take bookings, so an early arrival helps on weekends.",
        ],
        bullets: [
          "Best for: casual vegan pizza night",
          "Features: wood-fired Napoletana-style pizza, no reservations (walk-in only)",
          "Dietary options: fully vegan menu, with gluten-free bases available",
        ],
      },
      {
        heading: "5. Yulli's — Surry Hills",
        bannerIcon: "smallplates",
        body: [
          "One of Sydney's longer-running vegetarian and vegan-friendly restaurants, with a globally-inspired small-plates menu that's popular for relaxed group dinners.",
        ],
        bullets: [
          "Best for: a casual vegan-friendly group dinner in Surry Hills",
          "Features: eclectic small-plates sharing menu, relaxed bar-restaurant atmosphere",
          "Dietary options: fully plant-based dishes throughout, with a separate gluten-free menu",
        ],
      },
      {
        heading: "6. Miss Sina — Marrickville",
        bannerIcon: "bakery",
        body: [
          "A fully vegan bakery and café known for brunch dishes and baked goods, including German-inspired pastries and its well-known cinnamon scrolls.",
        ],
        bullets: [
          "Best for: vegan brunch and bakery treats",
          "Features: fresh-baked pastries daily, casual café setting",
          "Dietary options: fully vegan menu throughout",
        ],
      },
      {
        heading: "7. Mama B's at the Chippo Hotel — Chippendale",
        bannerIcon: "pub",
        body: [
          "Sydney's first fully vegan pub bistro, serving plant-based takes on classic pub food inside the Chippo Hotel — itself Australia's first all-vegan pub, including the bar.",
        ],
        bullets: [
          "Best for: vegan pub food with a proper pub atmosphere",
          "Features: classic pub-food menu (burgers, bangers and mash, loaded fries) made fully plant-based, full bar",
          "Dietary options: fully vegan kitchen and bar",
        ],
      },
      {
        heading: "8. Little Turtle — Enmore",
        bannerIcon: "thai",
        body: [
          "A popular, fully vegan Thai kitchen known for reworking classic Thai dishes into plant-based versions without losing the flavour balance the cuisine is known for.",
        ],
        bullets: [
          "Best for: vegan Thai food",
          "Features: cosy, stylish dining room; classic Thai dishes reworked plant-based",
          "Dietary options: fully vegan menu",
        ],
      },
      {
        heading: "9. Golden Lotus — Newtown",
        bannerIcon: "vietnamese",
        body: [
          "A budget-friendly, BYO Vietnamese restaurant directly across from Newtown Station, easily spotted by its pink 'Veganism Is Magic' neon sign. A solid pick if you want a quick, inexpensive vegan meal rather than a sit-down occasion.",
        ],
        bullets: [
          "Best for: a quick, inexpensive vegan Vietnamese meal",
          "Features: BYO, casual walk-in dining, right next to Newtown Station",
          "Dietary options: fully vegan menu",
        ],
      },
      {
        heading: "Wrapping up",
        body: [
          "Sydney's vegan scene spans a genuinely wide range — from a five-course tasting menu at Yellow to a quick pub feed at Mama B's, with a lot of ground in between. For a full sit-down Indian meal with proper depth across starters, curries and biryani — and the option to bring a group with mixed dietary needs to the same table — [The Grand Palace](/menu) remains our recommendation, with [set menu banquets](/set-menu) making group ordering simple.",
        ],
      },
    ],
    faq: [
      {
        q: "Does The Grand Palace have a dedicated vegan menu?",
        a: "Yes — vegan dishes are clearly marked across starters, curries, rice and biryani, and the kitchen can adjust select standard dishes to remove dairy and ghee on request.",
      },
      {
        q: "What's the best vegan restaurant in Sydney for a group booking?",
        a: "It depends on the group — for a full sit-down Indian meal with a shared vegan set menu, The Grand Palace's group banquets work well; for a fully plant-based menu across the whole table, Yulli's or Mama B's at the Chippo Hotel are solid casual options.",
      },
      {
        q: "Is Indian food naturally vegan-friendly?",
        a: "A lot of it is — dishes built around lentils, chickpeas and vegetables are traditionally plant-based. The main things to check are ghee (clarified butter) and cream, which most Indian kitchens, including ours, can substitute out on request.",
      },
      {
        q: "Which of these restaurants are fully vegan, versus vegan-friendly?",
        a: "Yellow, Towzen, Gigi Pizzeria, Miss Sina, Mama B's, Little Turtle and Golden Lotus are fully vegan kitchens. Yulli's is vegetarian-based with extensive vegan options. The Grand Palace is a mixed halal Indian menu with a dedicated vegan selection rather than an all-vegan kitchen.",
      },
    ],
    externalLinks: [
      {
        label: "More vegan dining recommendations across Sydney",
        href: "https://www.sydney.com/articles/the-best-vegan-restaurants-in-sydney",
        source: "Sydney.com — official Destination NSW tourism guide",
      },
    ],
    relatedSlugs: [
      "best-halal-restaurant-in-sydney",
      "vegetarian-restaurants-chippendale",
      "jain-restaurants-sydney",
    ],
    ctaLabel: "View the Menu",
    ctaHref: "/menu",
  },

  "vegetarian-restaurants-chippendale": {
    slug: "vegetarian-restaurants-chippendale",
    title: "Top Vegetarian-Friendly Restaurants near Chippendale",
    metaTitle: "Vegetarian-Friendly Indian Restaurant near Chippendale | The Grand Palace",
    metaDescription:
      "Based near Chippendale and after proper sit-down vegetarian Indian food? The Grand Palace in Sydney CBD is a short trip away, with a full vegetarian and vegan menu.",
    tag: "Dining",
    publishedDate: "2025-06-26",
    publishedDateDisplay: "Jun 26, 2025",
    updatedDate: "2026-07-27",
    updatedDateDisplay: "Jul 27, 2026",
    excerpt:
      "Chippendale and its surrounding areas have become a popular hub for diverse and inclusive dining options in Sydney.",
    intro:
      "Chippendale has built a strong reputation for its own café, small-bar and hawker-alley dining scene, with a genuinely good spread of vegetarian options within walking distance. Below is an honest look at the standout vegetarian-friendly spots in and around Chippendale — including [The Grand Palace](/menu), a short trip north in Sydney CBD, for when you want a full multi-course vegetarian Indian menu rather than a single plant-based special.",
    quickAnswer:
      "For casual vegetarian dining right in Chippendale, Spice Alley and Andiamo Trattoria are both local options within walking distance. For a full sit-down vegetarian Indian meal, The Grand Palace in Sydney CBD is roughly a 20-minute walk or a short trip via Central Station, with vegetarian dishes served across the whole menu, lunch and dinner, daily.",
    quickFacts: [
      {
        label: "Distance from Chippendale to The Grand Palace",
        value: "~2.5km — short train, taxi or rideshare trip via Central",
      },
      {
        label: "Vegetarian & vegan dishes",
        value: "Available across the full menu, lunch and dinner",
      },
    ],
    comparisonTable: {
      title: "Compare at a Glance",
      note: "Mina Maria's main restaurant is in Newtown, with a smaller counter in Chippendale itself — everything else listed is directly in or immediately around Chippendale.",
      rows: [
        {
          name: "The Grand Palace",
          area: "Sydney CBD",
          style: "Indian fine dining",
          dietary: "Vegetarian, vegan, halal, GF",
          goodForGroups: true,
          highlight: true,
        },
        {
          name: "Spice Alley",
          area: "Chippendale",
          style: "Asian hawker laneway",
          dietary: "Vegetarian-friendly stalls",
          goodForGroups: true,
        },
        {
          name: "Mina Maria",
          area: "Newtown (Chippendale counter)",
          style: "Vegan café",
          dietary: "Fully vegan",
          goodForGroups: false,
        },
        {
          name: "Andiamo Trattoria",
          area: "Chippendale",
          style: "Vegetarian Italian",
          dietary: "Vegetarian + vegan menu",
          goodForGroups: true,
        },
        {
          name: "Hari's Vegetarian",
          area: "Haymarket",
          style: "Vegetarian Indian-style",
          dietary: "Fully vegetarian/vegan",
          goodForGroups: false,
        },
      ],
    },
    sections: [
      {
        heading: "1. The Grand Palace — Sydney CBD",
        image: grandPalaceStorefront,
        imageAlt: "The Grand Palace Indian Restaurant storefront on George Street, Sydney CBD",
        body: [
          "The most direct route from Chippendale is via Central Station, followed by a walk north up George Street toward Wynyard — our basement entrance at 261 George Street is on the way. By car or rideshare it's usually well under 10 minutes outside peak traffic. It's a different kind of meal to a quick vegetarian bite: a full multi-course Indian menu, better suited to a group dinner or a slower weekend lunch.",
        ],
        bullets: [
          "Try: Shahi Paneer, Paneer Butter Masala, Dal Makhani, Vegetable Biryani",
          "For groups: [set menu banquets](/set-menu) from $65 per person include a dedicated vegetarian tier",
          "Also accommodates: vegan, gluten-friendly and halal requests on the same menu",
          "[Book a table](/book-a-table), [view the menu](/menu) or see our [location and directions](/contact)",
        ],
      },
      {
        heading: "2. Spice Alley — Chippendale",
        bannerIcon: "ramen",
        body: [
          "An open-air hawker-style laneway right in Chippendale, with a rotating line-up of Asian food stalls — a good option if you want to graze across a few different vegetarian dishes casually rather than sit down to a set menu.",
        ],
        bullets: ["Best for: casual, walk-up vegetarian street food in Chippendale itself"],
      },
      {
        heading: "3. Mina Maria — Newtown, with a Chippendale counter",
        bannerIcon: "bakery",
        body: [
          "Mina Maria's main plant-based restaurant is on King Street in Newtown; it also runs a smaller retail counter in Chippendale, inside The Old Rum Store on Kensington Street. Worth knowing which location you're heading to before you go.",
        ],
        bullets: [
          "Best for: vegan café food, if you don't mind the short trip to the Newtown restaurant",
        ],
      },
      {
        heading: "4. Andiamo Trattoria — Chippendale",
        bannerIcon: "pizza",
        body: [
          "A vegetarian and vegan-friendly Italian spot in the heart of Chippendale, popular for its relaxed atmosphere and service.",
        ],
        bullets: ["Best for: vegetarian Italian in Chippendale"],
      },
      {
        heading: "5. Hari's Vegetarian — Haymarket",
        bannerIcon: "smallplates",
        body: [
          "A relaxed vegan and vegetarian restaurant with a strong Indian-leaning menu — curries, dal, salads and quick bites — in Haymarket, a short trip from Chippendale.",
        ],
        bullets: ["Best for: casual vegan/vegetarian Indian-style food"],
      },
    ],
    faq: [
      {
        q: "How far is The Grand Palace from Chippendale?",
        a: "About 2.5km — roughly a 20-minute walk, a short trip via Central Station, or under 10 minutes by car or rideshare outside peak traffic.",
      },
      {
        q: "Is there vegetarian food within walking distance of Chippendale itself?",
        a: "Yes — Spice Alley and Andiamo Trattoria are both vegetarian-friendly options right in Chippendale. Mina Maria's main restaurant is a short trip away in Newtown, though it has a small retail counter in Chippendale too.",
      },
      {
        q: "Where should I go from Chippendale for a full vegetarian Indian menu, not just a couple of dishes?",
        a: "The Grand Palace in Sydney CBD — vegetarian dishes span starters, paneer and lentil curries, biryani and breads, with vegan and gluten-friendly options clearly marked throughout, plus set menu banquets for groups.",
      },
    ],
    externalLinks: [
      {
        label: "Getting around Sydney CBD and Central",
        href: "https://transportnsw.info/",
        source: "Transport for NSW",
      },
    ],
    relatedSlugs: [
      "best-vegan-restaurant-sydney",
      "best-halal-restaurant-in-sydney",
      "indian-restaurant-near-town-hall-station",
    ],
    ctaLabel: "Book a Table",
    ctaHref: "/book-a-table",
  },
  // Festive post — Navratri/Diwali 2026
  "navratri-catering-sydney": {
    publishedDate: "2026-09-29",
    publishedDateDisplay: "Sep 29, 2026",
    updatedDate: "2026-09-29",
    updatedDateDisplay: "Sep 29, 2026",
    guideType: "normal",
    slug: "navratri-catering-sydney",
    tag: "Catering",
    title: "Navratri Catering in Sydney: Vegetarian Food for Garba Nights & Navratri Parties",
    metaTitle: "Navratri Catering Sydney — Vegetarian & Jain-Friendly | TGP",
    metaDescription:
      "Planning a garba night or Navratri party in Sydney? TGP caters 100% vegetarian Gujarati & Kathiyavadi menus, Jain-friendly on request, from $40pp.",
    excerpt:
      "A practical guide to catering a garba night or Navratri get-together in Sydney — what to serve, dietary needs, how much to order and how to book with TGP.",
    intro:
      "Navratri means nine nights of garba, dandiya and gatherings with family and community — and a lot of hungry guests between dances. For most hosts the food has to be **fully vegetarian**, often **Jain-friendly**, and ready to serve a crowd. The Grand Palace Indian Restaurant caters exactly that through its **[Gujarati & Kathiyavadi catering](/whats-on/gujarati-kathiyavadi-catering-sydney)** — 100% vegetarian menus from $40 per person, at your venue or ours.",
    quickAnswer:
      "TGP (The Grand Palace Indian Restaurant) caters Navratri events across Sydney with **100% vegetarian Gujarati & Kathiyavadi menus from $40 per person**, with **Jain-friendly dishes** (no onion, no garlic, no root vegetables) on request. Catering is available at your own venue or in-house in Sydney CBD for up to 125 guests. Call [(02) 8021 7696](tel:+61280217696), WhatsApp [0422 984 570](https://wa.me/61422984570) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au).",
    quickFacts: [
      {
        label: "Price",
        value: "From $40 per person",
      },
      {
        label: "Menu",
        value: "100% vegetarian Gujarati & Kathiyavadi",
      },
      {
        label: "Jain",
        value: "No onion, no garlic, no root vegetables — on request",
      },
      {
        label: "Certified",
        value: "HACCP Certified Kitchen · Gold Catering Licence",
      },
    ],
    sections: [
      {
        heading: "{{color:#c8720a}}Why Navratri Catering Needs Its Own Plan{{/color}}",
        blockType: "row",
        body: [
          "Navratri food isn't just any party menu. Most guests eat vegetarian through the festival, many follow Jain practice, and some keep a vrat (fast) on certain days — so a menu that works for everyone has to be planned that way from the start, not adjusted on the night.",
        ],
        items: [
          "100% Vegetarian\nNo meat, fish or egg on the menu, so no guest has to ask what's safe to eat.",
          "Jain-Friendly on Request\nDishes prepared without onion, garlic or root vegetables when you ask in advance.",
          "Built for a Crowd\nBuffet-style food that holds well through a long evening of garba and dandiya.",
        ],
      },
      {
        heading: "{{color:#c8720a}}What to Serve at a Garba Night or Navratri Party{{/color}}",
        blockType: "row",
        body: [
          "A good Navratri spread balances light bites between dances with a proper meal later in the evening. TGP's [Gujarati & Kathiyavadi menu](/whats-on/gujarati-kathiyavadi-catering-sydney) is cooked fresh with traditional recipes and hand-ground masalas, and the team will curate it around your event.",
        ],
        items: [
          "Starters & Snacks\nLight vegetarian bites guests can enjoy standing up, between rounds of garba.",
          "Traditional Mains\nGujarati and Kathiyavadi curries, served with rice and breads for a full festive meal.",
          "Sweets\nClassic Indian desserts to finish the night on a festive note.",
        ],
      },
      {
        heading: "{{color:#c8720a}}How Much Food to Order{{/color}}",
        blockType: "text",
        body: [
          "Plan by **confirmed headcount**, not a guess. Share your final guest numbers as early as you can, and tell the team whether guests will eat a **full meal** or mostly **snacks** — garba nights run long, and appetites grow as the dancing goes on.",
          "Pricing depends on **guest numbers, menu selection and service style** (buffet or plated), and on whether the event is at The Grand Palace Indian Restaurant or at your own venue. A minimum group size applies for full buffet service — ask when you enquire.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Catering at Your Venue or Ours{{/color}}",
        blockType: "row",
        body: ["TGP caters Navratri celebrations wherever you're holding them."],
        items: [
          "At Your Venue\nFull catering for community halls and event spaces across Sydney, with buffet service and staff — see [venue catering](/venue-catering).",
          "At The Grand Palace Indian Restaurant\nHost your gathering in-house in Sydney CBD for up to 125 guests, 90 seconds from Wynyard Station.",
          "At the Office\nVegetarian [catering boxes](/office-catering) for a Navratri team lunch, ready for pickup.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Tips for Planning Navratri Catering{{/color}}",
        blockType: "text",
        bullets: [
          "**Book early** — allow 2–3 weeks for smaller events and 4–6 weeks for large ones, as festival weekends fill quickly",
          "**Flag dietary needs up front** — Jain, vrat or allergies — when you enquire, not on the day",
          "**Share your timeline** — when guests arrive, when garba starts and when food should be served",
          "**Choose a service style** — buffet suits a mingling crowd; plated suits a seated dinner",
        ],
        body: [],
      },
      {
        heading: "{{color:#c8720a}}Enquire About Navratri Catering{{/color}}",
        blockType: "box",
        body: [
          "Call [(02) 8021 7696](tel:+61280217696), WhatsApp [0422 984 570](https://wa.me/61422984570) for the fastest response, or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au) with your date, guest numbers, venue and any Jain or dietary requirements.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Conclusion{{/color}}",
        blockType: "text",
        body: [
          "Great Navratri catering comes down to a few early decisions — a **fully vegetarian menu**, **Jain dishes** where guests need them, and food that keeps a crowd going through a long night of garba.",
          "The Grand Palace Indian Restaurant handles all of it with its **100% vegetarian Gujarati & Kathiyavadi menu**, from $40 per person, at your venue or in-house in Sydney CBD.",
          "Once you know your date and guest numbers, [get in touch](tel:+61280217696) and the team will put your menu together.",
        ],
      },
    ],
    faq: [
      {
        q: "Does The Grand Palace Indian Restaurant cater Navratri events in Sydney?",
        a: "Yes — TGP caters Navratri garba nights, dandiya events and family gatherings across Sydney with a 100% vegetarian Gujarati & Kathiyavadi menu, at your venue or in-house in Sydney CBD.",
      },
      {
        q: "Is the Navratri catering menu vegetarian?",
        a: "Yes. The Gujarati & Kathiyavadi catering menu is 100% vegetarian, prepared in TGP's HACCP-certified kitchen.",
      },
      {
        q: "Can you prepare Jain food for Navratri?",
        a: "Yes — Jain-friendly dishes with no onion, no garlic and no root vegetables are available on request. Mention it when you enquire so the kitchen can prepare them separately.",
      },
      {
        q: "How much does Navratri catering cost?",
        a: "Gujarati & Kathiyavadi catering starts from $40 per person. The final price depends on guest numbers, menu, service style and venue; a minimum group size applies for full buffet service.",
      },
      {
        q: "Can you cater a garba night at a community hall?",
        a: "Yes — TGP caters at external venues across Sydney, including community halls, with buffet service and staff available. See [venue catering](/venue-catering) or call (02) 8021 7696.",
      },
      {
        q: "How far in advance should I book Navratri catering?",
        a: "Allow 2–3 weeks for smaller events and 4–6 weeks for large events. Navratri weekends are busy, so earlier is better.",
      },
      {
        q: "Can we hold our Navratri gathering at the restaurant?",
        a: "Yes — The Grand Palace Indian Restaurant hosts groups of up to 125 guests in-house at Basement, 261 George Street, Sydney CBD. Contact the team to check availability for your date.",
      },
      {
        q: "Can you cater for guests who are fasting during Navratri?",
        a: "Let the team know which guests are keeping a vrat when you enquire, and they'll advise what the kitchen can prepare for them.",
      },
    ],
    relatedSlugs: [
      "jain-restaurants-in-sydney-no-onion-no-garlic",
      "indian-wedding-catering-sydney",
      "find-right-indian-catering-for-event",
    ],
    ctaLabel: "Enquire About Navratri Catering",
    ctaHref: "/whats-on/gujarati-kathiyavadi-catering-sydney",
  },
  // Festive post — Navratri/Diwali 2026
  "navratri-celebration-dinner-sydney": {
    publishedDate: "2026-09-29",
    publishedDateDisplay: "Sep 29, 2026",
    updatedDate: "2026-09-29",
    updatedDateDisplay: "Sep 29, 2026",
    guideType: "normal",
    slug: "navratri-celebration-dinner-sydney",
    tag: "Dining",
    title: "Navratri Celebration Dinner in Sydney: Where to Eat Before or After Garba",
    metaTitle: "Navratri Dinner Sydney — Before or After Garba | TGP",
    metaDescription:
      "Celebrating Navratri in Sydney? Enjoy a vegetarian group dinner before or after garba at TGP, Sydney CBD — set menus, Jain dishes and room for groups.",
    excerpt:
      "Where to eat before or after garba in Sydney — vegetarian and Jain dishes, set menus for groups and easy access from Wynyard at TGP.",
    intro:
      "Garba nights mean dinner is either a quick meal before the dancing or a proper celebration once it's over. The Grand Palace Indian Restaurant in Sydney CBD is set up for both — a deep **vegetarian menu**, **Jain dishes** prepared separately, and space for **family and friend groups**, about a 90-second walk from Wynyard Station.",
    quickAnswer:
      "For a Navratri dinner in Sydney CBD, TGP (The Grand Palace Indian Restaurant) at [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000) serves vegetarian, vegan and Jain dishes for groups, with **three-course set menus from $65 per person**. Dinner runs **5pm–10pm Sunday to Thursday** and **5pm–10:30pm Friday and Saturday**. [Book a table](/book-a-table) or call [(02) 8021 7696](tel:+61280217696).",
    quickFacts: [
      {
        label: "Location",
        value: "Basement, 261 George Street, Sydney CBD",
      },
      {
        label: "Dinner",
        value: "Sun–Thu 5pm–10pm · Fri–Sat 5pm–10:30pm",
      },
      {
        label: "Set menus",
        value: "Vegetarian $65 · Non-Veg $70 · TGP Special $95 per person",
      },
      {
        label: "Dietary",
        value: "Vegetarian, vegan, Jain & halal options",
      },
    ],
    sections: [
      {
        heading: "{{color:#c8720a}}Before or After Garba? Planning Your Navratri Dinner{{/color}}",
        blockType: "row",
        body: [
          "The right booking depends on when your garba starts. Tell the team your plans when you book and they'll time the meal around them.",
        ],
        items: [
          "Dinner Before Garba\nBook an early table from 5pm and choose a set menu so the food arrives together and you leave on time.",
          "Dinner After Garba\nDinner runs until 10pm Sunday to Thursday and 10:30pm Friday and Saturday — book ahead and share your arrival time.",
          "Weekend Family Lunch\nLunch is served every day from 12pm to 3pm — ideal for a family get-together during the nine days.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Vegetarian & Jain Dishes for Navratri{{/color}}",
        blockType: "row",
        body: [
          "Many families eat vegetarian through Navratri, and some follow Jain practice. TGP's menu covers both without anyone settling for a side dish.",
        ],
        items: [
          "Vegetarian Entrées\nPaneer Schnitzel, Hariyali Kebab and Samosa to share at the table.",
          "Vegetarian Curries\nNavratan Korma, Shahi Paneer and Dal Makhani with rice and breads.",
          "Jain Dishes\nJain Veg Kolhapuri, Jain Paneer Butter Masala and Jain Papadi Chaat — made without onion, garlic or root vegetables. Mention it when you book.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Set Menus for Navratri Groups{{/color}}",
        blockType: "row",
        body: [
          "For a group, a [set menu](/set-menu) keeps things simple — everyone eats together and nobody has to split the bill by dish.",
        ],
        items: [
          "Vegetarian Set Menu — $65 per person\nA three-course vegetarian banquet, ideal for a Navratri table.",
          "Non-Vegetarian Set Menu — $70 per person\nThree courses for groups where not everyone is eating vegetarian.",
          "TGP Special — $95 per person\nOur premium three-course banquet for a bigger celebration.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Getting There on a Garba Night{{/color}}",
        blockType: "text",
        body: [
          "TGP is in the basement at **261 George Street**, opposite Bridge Street light rail and about a **90-second walk from Wynyard Station** — easy to reach by train before heading to your garba, or on the way home after it.",
          "Driving? **Wilson Parking on Clarence Street** and **Secure Parking on Erskine Street** are both nearby.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Book Your Navratri Dinner{{/color}}",
        blockType: "box",
        body: [
          "[Book a table online](/book-a-table), call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au). Let the team know your group size, the time your garba starts, and any Jain or dietary requirements.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Conclusion{{/color}}",
        blockType: "text",
        body: [
          "A Navratri dinner should fit around the dancing, not the other way round — an **early table before garba** or a **celebration meal after**, with food that works for vegetarian and Jain guests alike.",
          "The Grand Palace Indian Restaurant offers both, with **set menus from $65 per person** and a location a short walk from Wynyard.",
          "Pick your night, then [book your table](/book-a-table) and tell us when your garba starts.",
        ],
      },
    ],
    faq: [
      {
        q: "Where can I have a Navratri dinner in Sydney CBD?",
        a: "The Grand Palace Indian Restaurant at Basement, 261 George Street, Sydney CBD serves vegetarian, vegan and Jain dishes for groups, with set menus from $65 per person.",
      },
      {
        q: "Does The Grand Palace Indian Restaurant have vegetarian options?",
        a: "Yes — the menu has a wide vegetarian selection, including Paneer Schnitzel, Hariyali Kebab, Navratan Korma, Shahi Paneer and Dal Makhani, plus a $65 vegetarian set menu.",
      },
      {
        q: "Can I get Jain food for Navratri at TGP?",
        a: "Yes — Jain dishes such as Jain Veg Kolhapuri and Jain Paneer Butter Masala are prepared without onion, garlic or root vegetables. Mention it when you book.",
      },
      {
        q: "How much are the set menus?",
        a: "Three-course set menus are $65 per person (Vegetarian), $70 per person (Non-Vegetarian) and $95 per person (TGP Special).",
      },
      {
        q: "How late is dinner served?",
        a: "Dinner runs 5pm–10pm Sunday to Thursday and 5pm–10:30pm on Friday and Saturday.",
      },
      {
        q: "Can you seat a large Navratri group?",
        a: "Yes — TGP regularly hosts family and friend groups, and can accommodate up to 125 guests. For larger groups, call (02) 8021 7696 to plan seating and a set menu.",
      },
      {
        q: "How far is TGP from Wynyard Station?",
        a: "About a 90-second walk. The restaurant is in the basement at 261 George Street, opposite Bridge Street light rail.",
      },
      {
        q: "Do I need to book for a Navratri dinner?",
        a: "Booking is recommended, especially for groups and on Friday and Saturday nights. [Book online](/book-a-table) or call (02) 8021 7696.",
      },
    ],
    relatedSlugs: [
      "jain-restaurants-in-sydney-no-onion-no-garlic",
      "best-indian-restaurant-near-me-sydney-cbd-the-grand-palace-guide",
      "tgp-is-best-for-a-weekend-indian-lunch",
    ],
    ctaLabel: "Book a Table",
    ctaHref: "/book-a-table",
  },
  // Festive post — Navratri/Diwali 2026
  "diwali-catering-box-sydney": {
    publishedDate: "2026-09-28",
    publishedDateDisplay: "Sep 28, 2026",
    updatedDate: "2026-09-28",
    updatedDateDisplay: "Sep 28, 2026",
    guideType: "normal",
    slug: "diwali-catering-box-sydney",
    tag: "Catering",
    title: "Diwali Catering Box: Festive Snacks & Sweets for $99",
    metaTitle: "Diwali Catering Box Sydney — $99 Snacks & Sweets | TGP",
    metaDescription:
      "TGP's $99 Diwali Catering Box: paneer cigar rolls, palak pakora, dal kachori, samosas, motichur laddu and gulab jamun. Order by Thursday 5 November.",
    excerpt:
      "Six festive favourites, 33–35 pieces, $99 — what's inside the TGP Diwali Catering Box, who it's for, and how to order and collect.",
    intro:
      "Diwali is about coming together — lighting the diyas, sharing sweets and filling the table for family and friends. This year, The Grand Palace Indian Restaurant has packed the festive classics into one box: **four savoury bites and two traditional sweets**, 33 to 35 pieces in total, for **$99**. Here's what's inside, who it's for, and how to order and collect.",
    quickAnswer:
      "The TGP Diwali Catering Box is **$99** and includes Paneer Cigar Roll (5), Palak Pakora (8–10), Dal Kachori (5), Samosa (5), Motichur Laddu (5) and Gulab Jamun (5). **Orders close Thursday 5 November 2026.** Collection is in store only at [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000). To order, or for larger orders and delivery, call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au).",
    quickFacts: [
      {
        label: "Price",
        value: "$99 per box",
      },
      {
        label: "Inside",
        value: "6 items · 33–35 pieces",
      },
      {
        label: "Order by",
        value: "Thursday 5 November 2026",
      },
      {
        label: "Collection",
        value: "In store only — 261 George Street, Sydney CBD",
      },
    ],
    sections: [
      {
        heading: "{{color:#c8720a}}What's Inside the Diwali Catering Box{{/color}}",
        blockType: "row",
        body: [
          "Four savoury bites and two traditional sweets — the flavours families share across Diwali.",
        ],
        items: [
          "Paneer Cigar Roll — 5 pieces\nCrisp, golden pastry rolled around a spiced paneer filling.",
          "Palak Pakora — 8–10 pieces\nSpinach fritters in a lightly spiced gram-flour batter.",
          "Dal Kachori — 5 pieces\nFlaky, round pastry filled with a spiced lentil stuffing.",
          "Samosa — 5 pieces\nThe classic triangular pastry with a spiced savoury filling.",
          "Motichur Laddu — 5 pieces\nSoft sweet balls made from tiny gram-flour pearls bound in sugar syrup.",
          "Gulab Jamun — 5 pieces\nMilk-based dumplings, fried golden and soaked in fragrant syrup.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Why a Diwali Box Makes Hosting Easier{{/color}}",
        blockType: "text",
        body: [
          "Diwali snacks and sweets take time — rolling, frying and simmering syrup, usually on the same day you're getting the house ready and welcoming guests.",
          "One box covers **savouries and sweets together**, ready to plate, so you spend less time in the kitchen and more time with family and friends.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Who the Diwali Box Is For{{/color}}",
        blockType: "row",
        body: ["The box is designed for sharing, which makes it work for most Diwali plans."],
        items: [
          "Family Gatherings at Home\nSnacks and sweets for relatives arriving through the evening.",
          "Diwali Parties with Friends\nPlenty to go round a party, without hours of cooking.",
          "Office Diwali Celebrations\nA shared festive spread for the team.",
          "Visiting Family & Friends\nSharing mithai is a Diwali tradition — take a box with you.",
        ],
      },
      {
        heading: "{{color:#c8720a}}How to Order & Collect{{/color}}",
        blockType: "box",
        bullets: [
          "Call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au) with the number of boxes and your preferred collection day",
          "Order by **Thursday 5 November 2026**",
          "Collect in store at [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000) — opposite Bridge Street light rail, 90 seconds from Wynyard Station",
          "For larger orders or delivery, ask the team when you order",
        ],
        body: [],
      },
      {
        heading: "{{color:#c8720a}}Larger Orders, Delivery & Full Diwali Catering{{/color}}",
        blockType: "text",
        body: [
          "Hosting a bigger celebration? Contact the team for **larger orders and delivery** on [(02) 8021 7696](tel:+61280217696) or [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au).",
          "For a full Diwali spread with service at your venue, see [venue catering](/venue-catering); for team celebrations, see [office catering](/office-catering).",
        ],
      },
      {
        heading: "{{color:#c8720a}}Allergens & Storage{{/color}}",
        blockType: "text",
        body: [
          "The dishes in this box contain or may contain **wheat (gluten)**, **gram flour (chickpea)** and **dairy**, and the kitchen handles other common allergens. If you or a guest has a food allergy, call [(02) 8021 7696](tel:+61280217696) before ordering.",
          "Once collected, keep the savouries refrigerated at 5°C or below if you're not serving them within 2 hours, and reheat in the oven until piping hot.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Conclusion{{/color}}",
        blockType: "text",
        body: [
          "The TGP Diwali Catering Box puts **six festive favourites** in one order — four savouries, two sweets, 33 to 35 pieces — for **$99**.",
          "It suits family gatherings, parties, the office or a gift of mithai, with in-store collection at The Grand Palace Indian Restaurant in Sydney CBD.",
          "Orders close **Thursday 5 November 2026** — [call to order](tel:+61280217696) your boxes.",
        ],
      },
    ],
    faq: [
      {
        q: "What is in the TGP Diwali Catering Box?",
        a: "Paneer Cigar Roll (5 pieces), Palak Pakora (8–10 pieces), Dal Kachori (5 pieces), Samosa (5 pieces), Motichur Laddu (5 pieces) and Gulab Jamun (5 pieces) — 33 to 35 pieces in total.",
      },
      {
        q: "How much is the Diwali Catering Box?",
        a: "The Diwali Catering Box is $99 per box.",
      },
      {
        q: "When is the last day to order?",
        a: "Orders close on Thursday 5 November 2026.",
      },
      {
        q: "How do I order the Diwali box?",
        a: "Call (02) 8021 7696 or email bookings@thegrandpalace.com.au with the number of boxes and your preferred collection day.",
      },
      {
        q: "Where do I collect my Diwali box?",
        a: "Collection is in store only, at The Grand Palace Indian Restaurant, Basement, 261 George Street, Sydney CBD — about a 90-second walk from Wynyard Station.",
      },
      {
        q: "Do you deliver the Diwali box or take larger orders?",
        a: "Yes — for larger orders and delivery, call (02) 8021 7696 or email bookings@thegrandpalace.com.au and the team will arrange it with you.",
      },
      {
        q: "Is the Diwali box suitable for people with allergies?",
        a: "The box contains or may contain wheat, gram flour and dairy, and the kitchen handles other common allergens, so it can't be guaranteed allergen-free. Call before ordering if anyone has an allergy.",
      },
      {
        q: "Can I order the Diwali box for my office?",
        a: "Yes — the box is made for sharing and works well for an office Diwali celebration. For bigger team events, see [office catering](/office-catering).",
      },
    ],
    relatedSlugs: [
      "catering-boxes-in-sydney-for-parties",
      "indian-catering-box-sydney-cbd",
      "why-tgp-is-best-for-diwali-party",
    ],
    ctaLabel: "Call to Order Your Diwali Box",
    ctaHref: "/contact",
  },
  // Festive post — Navratri/Diwali 2026
  "diwali-dinner-sydney-cbd": {
    publishedDate: "2026-09-28",
    publishedDateDisplay: "Sep 28, 2026",
    updatedDate: "2026-09-28",
    updatedDateDisplay: "Sep 28, 2026",
    guideType: "normal",
    slug: "diwali-dinner-sydney-cbd",
    tag: "Dining",
    title:
      "Diwali Dinner in Sydney CBD: Celebrate the Festival of Lights at The Grand Palace Indian Restaurant",
    metaTitle: "Diwali Dinner in Sydney CBD — Indian Restaurant | TGP",
    metaDescription:
      "Celebrate Diwali over dinner at TGP, Sydney CBD — Indian set menus from $65pp, vegetarian, Jain and halal options, and room for family groups. Book ahead.",
    excerpt:
      "Planning Diwali dinner out with the family? What to order, how to book for a group and why to book early at TGP in Sydney CBD.",
    intro:
      "For many families, Diwali night is the biggest dinner of the year — everyone dressed up, the whole family around one table and plenty of sweets to finish. If you'd rather celebrate out than cook at home, The Grand Palace Indian Restaurant in Sydney CBD offers **festive Indian dining** in a dining room styled after India's royal palaces, with **set menus from $65 per person** and room for family groups.",
    quickAnswer:
      "Celebrate Diwali dinner at TGP (The Grand Palace Indian Restaurant), [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000). **Diwali falls on Sunday 8 November 2026**, and Sunday dinner runs **5pm–10pm**. Choose a three-course set menu (**Vegetarian $65, Non-Vegetarian $70, TGP Special $95 per person**) or the [à la carte menu](/menu/a-la-carte), with vegetarian, Jain and halal options. [Book a table](/book-a-table) or call [(02) 8021 7696](tel:+61280217696).",
    quickFacts: [
      {
        label: "Diwali 2026",
        value: "Sunday 8 November",
      },
      {
        label: "Dinner",
        value: "Sun–Thu 5pm–10pm · Fri–Sat 5pm–10:30pm",
      },
      {
        label: "Set menus",
        value: "Vegetarian $65 · Non-Veg $70 · TGP Special $95 per person",
      },
      {
        label: "Dietary",
        value: "Vegetarian, vegan, Jain & halal-certified meats",
      },
    ],
    sections: [
      {
        heading: "{{color:#c8720a}}Why Celebrate Diwali Dinner at TGP{{/color}}",
        blockType: "row",
        body: [
          "A Diwali dinner should feel like an occasion — somewhere the whole family is happy to dress up for.",
        ],
        items: [
          "A Palace-Inspired Setting\nA basement dining room styled after India's royal palaces, made for festive nights.",
          "Food for the Whole Family\nVegetarian, vegan, Jain and halal-certified dishes, so every generation eats well.",
          "Room for Family Groups\nFrom a table for four to large family groups, with semi-private sections available.",
          "Easy to Reach\nOpposite Bridge Street light rail and a 90-second walk from Wynyard Station.",
        ],
      },
      {
        heading: "{{color:#c8720a}}What to Order for a Diwali Dinner{{/color}}",
        blockType: "row",
        body: [
          "Diwali tables are about abundance and sharing — order a spread for the table rather than one dish each.",
        ],
        items: [
          "Entrées to Share\nPaneer Schnitzel, Hariyali Kebab or Saffron Chicken Tikka to start.",
          "Curries for the Table\nButter Chicken, Kashmiri Rogan Josh, Shahi Paneer and Dal Makhani with rice and breads.",
          "Finish with Mithai\nGulab Jamun, Ras Malai or Kulfi for a sweet Diwali ending.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Set Menus for Diwali Groups{{/color}}",
        blockType: "row",
        body: [
          "For family groups, a [set menu](/set-menu) keeps the evening easy — everyone shares the same courses and the food arrives together.",
        ],
        items: [
          "Vegetarian Set Menu — $65 per person\nA three-course vegetarian banquet.",
          "Non-Vegetarian Set Menu — $70 per person\nThree courses for mixed family tables.",
          "TGP Special — $95 per person\nOur premium three-course banquet for the big night.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Book Early — Diwali Is a Busy Night{{/color}}",
        blockType: "text",
        bullets: [
          "**Book ahead** — Diwali is one of the busiest nights of the year for Indian restaurants in Sydney",
          "**Share your group size** and any Jain, vegan or allergy needs when you book",
          "**Choose a set menu in advance** for larger groups so the kitchen can prepare",
          "**Plan your arrival** — Sunday dinner runs from 5pm to 10pm",
        ],
        body: [],
      },
      {
        heading: "{{color:#c8720a}}Celebrating at Home Instead?{{/color}}",
        blockType: "text",
        body: [
          "If you're hosting at home, the [TGP Diwali Catering Box](/blog/diwali-catering-box-sydney) brings six festive snacks and sweets to your table for $99 — order by Thursday 5 November 2026.",
          "For a larger celebration with full service at your venue, see [venue catering](/venue-catering).",
        ],
      },
      {
        heading: "{{color:#c8720a}}Book Your Diwali Dinner{{/color}}",
        blockType: "box",
        body: [
          "[Book a table online](/book-a-table), call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au). Tell us your group size, preferred time and any dietary requirements.",
        ],
      },
      {
        heading: "{{color:#c8720a}}Conclusion{{/color}}",
        blockType: "text",
        body: [
          "Diwali dinner out should feel special and stay easy — a **festive setting**, food for **every diet at the table**, and a booking made early.",
          "The Grand Palace Indian Restaurant brings all three together in Sydney CBD, with **set menus from $65 per person** and room for family groups.",
          "Diwali falls on **Sunday 8 November 2026** — [book your table](/book-a-table) now to secure your preferred time.",
        ],
      },
    ],
    faq: [
      {
        q: "Where can I celebrate Diwali dinner in Sydney CBD?",
        a: "The Grand Palace Indian Restaurant at Basement, 261 George Street, Sydney CBD offers festive Indian dining for Diwali, with set menus from $65 per person and room for family groups.",
      },
      {
        q: "When is Diwali in 2026?",
        a: "Diwali falls on Sunday 8 November 2026.",
      },
      {
        q: "What are TGP's hours on Diwali night?",
        a: "Diwali 2026 falls on a Sunday, when dinner runs from 5pm to 10pm. Book ahead, as it's a busy night.",
      },
      {
        q: "How much are the set menus?",
        a: "Three-course set menus are $65 per person (Vegetarian), $70 per person (Non-Vegetarian) and $95 per person (TGP Special).",
      },
      {
        q: "Does TGP have vegetarian and Jain options for Diwali?",
        a: "Yes — the menu includes a wide vegetarian selection, vegan options and dedicated Jain dishes made without onion, garlic or root vegetables. Mention it when you book.",
      },
      {
        q: "Is the meat halal?",
        a: "Yes — The Grand Palace Indian Restaurant serves halal-certified meats across the menu.",
      },
      {
        q: "Can TGP host a large family group for Diwali?",
        a: "Yes — the restaurant hosts family groups and can accommodate up to 125 guests. Call (02) 8021 7696 to plan seating and a set menu for larger groups.",
      },
      {
        q: "How do I book a Diwali dinner table?",
        a: "[Book online](/book-a-table), call (02) 8021 7696 or email bookings@thegrandpalace.com.au.",
      },
    ],
    relatedSlugs: [
      "why-tgp-is-best-for-diwali-party",
      "best-indian-restaurant-near-me-sydney-cbd-the-grand-palace-guide",
      "private-event-venue-hire-sydney",
    ],
    ctaLabel: "Book a Table",
    ctaHref: "/book-a-table",
  },
};

export function getGuide(slug: string): GuideContent | undefined {
  return guidesContent[slug];
}
