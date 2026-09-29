// Adds four festive blog posts for Navratri & Diwali 2026:
//   /blog/navratri-catering-sydney
//   /blog/navratri-celebration-dinner-sydney
//   /blog/diwali-catering-box-sydney
//   /blog/diwali-dinner-sydney-cbd
//
// They're created as DRAFTS (published: false) so they can be read and
// approved in Admin → Guides before going live — toggle "Published" there.
// Existing posts with the same slug are left untouched (re-run safe).
// Pass --force to overwrite an existing post with this copy.
//
// Run from backend/:  node scripts/add-festive-blogs-2026.js [--force]
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const FORCE = process.argv.includes("--force");

const BLOGS = [
  {
    "publishedDate": "2026-09-29",
    "publishedDateDisplay": "Sep 29, 2026",
    "updatedDate": "2026-09-29",
    "updatedDateDisplay": "Sep 29, 2026",
    "guideType": "normal",
    "heroImage": null,
    "heroImageAlt": null,
    "comparisonTable": null,
    "pricingTable": null,
    "externalLinks": null,
    "slug": "navratri-catering-sydney",
    "tag": "Catering",
    "title": "Navratri Catering in Sydney: Vegetarian Food for Garba Nights & Navratri Parties",
    "metaTitle": "Navratri Catering Sydney — Vegetarian & Jain-Friendly | TGP",
    "metaDescription": "Planning a garba night or Navratri party in Sydney? TGP caters 100% vegetarian Gujarati & Kathiyavadi menus, Jain-friendly on request, from $40pp.",
    "excerpt": "A practical guide to catering a garba night or Navratri get-together in Sydney — what to serve, dietary needs, how much to order and how to book with TGP.",
    "intro": "Navratri means nine nights of garba, dandiya and gatherings with family and community — and a lot of hungry guests between dances. For most hosts the food has to be **fully vegetarian**, often **Jain-friendly**, and ready to serve a crowd. The Grand Palace Indian Restaurant caters exactly that through its **[Gujarati & Kathiyavadi catering](/whats-on/gujarati-kathiyavadi-catering-sydney)** — 100% vegetarian menus from $40 per person, at your venue or ours.",
    "quickAnswer": "TGP (The Grand Palace Indian Restaurant) caters Navratri events across Sydney with **100% vegetarian Gujarati & Kathiyavadi menus from $40 per person**, with **Jain-friendly dishes** (no onion, no garlic, no root vegetables) on request. Catering is available at your own venue or in-house in Sydney CBD for up to 125 guests. Call [(02) 8021 7696](tel:+61280217696), WhatsApp [0422 984 570](https://wa.me/61422984570) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au).",
    "quickFacts": [
      {
        "label": "Price",
        "value": "From $40 per person"
      },
      {
        "label": "Menu",
        "value": "100% vegetarian Gujarati & Kathiyavadi"
      },
      {
        "label": "Jain",
        "value": "No onion, no garlic, no root vegetables — on request"
      },
      {
        "label": "Certified",
        "value": "HACCP Certified Kitchen · Gold Catering Licence"
      }
    ],
    "sections": [
      {
        "heading": "{{color:#c8720a}}Why Navratri Catering Needs Its Own Plan{{/color}}",
        "blockType": "row",
        "body": [
          "Navratri food isn't just any party menu. Most guests eat vegetarian through the festival, many follow Jain practice, and some keep a vrat (fast) on certain days — so a menu that works for everyone has to be planned that way from the start, not adjusted on the night."
        ],
        "items": [
          "100% Vegetarian\nNo meat, fish or egg on the menu, so no guest has to ask what's safe to eat.",
          "Jain-Friendly on Request\nDishes prepared without onion, garlic or root vegetables when you ask in advance.",
          "Built for a Crowd\nBuffet-style food that holds well through a long evening of garba and dandiya."
        ]
      },
      {
        "heading": "{{color:#c8720a}}What to Serve at a Garba Night or Navratri Party{{/color}}",
        "blockType": "row",
        "body": [
          "A good Navratri spread balances light bites between dances with a proper meal later in the evening. TGP's [Gujarati & Kathiyavadi menu](/whats-on/gujarati-kathiyavadi-catering-sydney) is cooked fresh with traditional recipes and hand-ground masalas, and the team will curate it around your event."
        ],
        "items": [
          "Starters & Snacks\nLight vegetarian bites guests can enjoy standing up, between rounds of garba.",
          "Traditional Mains\nGujarati and Kathiyavadi curries, served with rice and breads for a full festive meal.",
          "Sweets\nClassic Indian desserts to finish the night on a festive note."
        ]
      },
      {
        "heading": "{{color:#c8720a}}How Much Food to Order{{/color}}",
        "blockType": "text",
        "body": [
          "Plan by **confirmed headcount**, not a guess. Share your final guest numbers as early as you can, and tell the team whether guests will eat a **full meal** or mostly **snacks** — garba nights run long, and appetites grow as the dancing goes on.",
          "Pricing depends on **guest numbers, menu selection and service style** (buffet or plated), and on whether the event is at The Grand Palace Indian Restaurant or at your own venue. A minimum group size applies for full buffet service — ask when you enquire."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Catering at Your Venue or Ours{{/color}}",
        "blockType": "row",
        "body": [
          "TGP caters Navratri celebrations wherever you're holding them."
        ],
        "items": [
          "At Your Venue\nFull catering for community halls and event spaces across Sydney, with buffet service and staff — see [venue catering](/venue-catering).",
          "At The Grand Palace Indian Restaurant\nHost your gathering in-house in Sydney CBD for up to 125 guests, 90 seconds from Wynyard Station.",
          "At the Office\nVegetarian [catering boxes](/office-catering) for a Navratri team lunch, ready for pickup."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Tips for Planning Navratri Catering{{/color}}",
        "blockType": "text",
        "bullets": [
          "**Book early** — allow 2–3 weeks for smaller events and 4–6 weeks for large ones, as festival weekends fill quickly",
          "**Flag dietary needs up front** — Jain, vrat or allergies — when you enquire, not on the day",
          "**Share your timeline** — when guests arrive, when garba starts and when food should be served",
          "**Choose a service style** — buffet suits a mingling crowd; plated suits a seated dinner"
        ]
      },
      {
        "heading": "{{color:#c8720a}}Enquire About Navratri Catering{{/color}}",
        "blockType": "box",
        "body": [
          "Call [(02) 8021 7696](tel:+61280217696), WhatsApp [0422 984 570](https://wa.me/61422984570) for the fastest response, or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au) with your date, guest numbers, venue and any Jain or dietary requirements."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Conclusion{{/color}}",
        "blockType": "text",
        "body": [
          "Great Navratri catering comes down to a few early decisions — a **fully vegetarian menu**, **Jain dishes** where guests need them, and food that keeps a crowd going through a long night of garba.",
          "The Grand Palace Indian Restaurant handles all of it with its **100% vegetarian Gujarati & Kathiyavadi menu**, from $40 per person, at your venue or in-house in Sydney CBD.",
          "Once you know your date and guest numbers, [get in touch](tel:+61280217696) and the team will put your menu together."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does The Grand Palace Indian Restaurant cater Navratri events in Sydney?",
        "a": "Yes — TGP caters Navratri garba nights, dandiya events and family gatherings across Sydney with a 100% vegetarian Gujarati & Kathiyavadi menu, at your venue or in-house in Sydney CBD."
      },
      {
        "q": "Is the Navratri catering menu vegetarian?",
        "a": "Yes. The Gujarati & Kathiyavadi catering menu is 100% vegetarian, prepared in TGP's HACCP-certified kitchen."
      },
      {
        "q": "Can you prepare Jain food for Navratri?",
        "a": "Yes — Jain-friendly dishes with no onion, no garlic and no root vegetables are available on request. Mention it when you enquire so the kitchen can prepare them separately."
      },
      {
        "q": "How much does Navratri catering cost?",
        "a": "Gujarati & Kathiyavadi catering starts from $40 per person. The final price depends on guest numbers, menu, service style and venue; a minimum group size applies for full buffet service."
      },
      {
        "q": "Can you cater a garba night at a community hall?",
        "a": "Yes — TGP caters at external venues across Sydney, including community halls, with buffet service and staff available. See [venue catering](/venue-catering) or call (02) 8021 7696."
      },
      {
        "q": "How far in advance should I book Navratri catering?",
        "a": "Allow 2–3 weeks for smaller events and 4–6 weeks for large events. Navratri weekends are busy, so earlier is better."
      },
      {
        "q": "Can we hold our Navratri gathering at the restaurant?",
        "a": "Yes — The Grand Palace Indian Restaurant hosts groups of up to 125 guests in-house at Basement, 261 George Street, Sydney CBD. Contact the team to check availability for your date."
      },
      {
        "q": "Can you cater for guests who are fasting during Navratri?",
        "a": "Let the team know which guests are keeping a vrat when you enquire, and they'll advise what the kitchen can prepare for them."
      }
    ],
    "relatedSlugs": [
      "jain-restaurants-in-sydney-no-onion-no-garlic",
      "indian-wedding-catering-sydney",
      "find-right-indian-catering-for-event"
    ],
    "ctaLabel": "Enquire About Navratri Catering",
    "ctaHref": "/whats-on/gujarati-kathiyavadi-catering-sydney"
  },
  {
    "publishedDate": "2026-09-29",
    "publishedDateDisplay": "Sep 29, 2026",
    "updatedDate": "2026-09-29",
    "updatedDateDisplay": "Sep 29, 2026",
    "guideType": "normal",
    "heroImage": null,
    "heroImageAlt": null,
    "comparisonTable": null,
    "pricingTable": null,
    "externalLinks": null,
    "slug": "navratri-celebration-dinner-sydney",
    "tag": "Dining",
    "title": "Navratri Celebration Dinner in Sydney: Where to Eat Before or After Garba",
    "metaTitle": "Navratri Dinner Sydney — Before or After Garba | TGP",
    "metaDescription": "Celebrating Navratri in Sydney? Enjoy a vegetarian group dinner before or after garba at TGP, Sydney CBD — set menus, Jain dishes and room for groups.",
    "excerpt": "Where to eat before or after garba in Sydney — vegetarian and Jain dishes, set menus for groups and easy access from Wynyard at TGP.",
    "intro": "Garba nights mean dinner is either a quick meal before the dancing or a proper celebration once it's over. The Grand Palace Indian Restaurant in Sydney CBD is set up for both — a deep **vegetarian menu**, **Jain dishes** prepared separately, and space for **family and friend groups**, about a 90-second walk from Wynyard Station.",
    "quickAnswer": "For a Navratri dinner in Sydney CBD, TGP (The Grand Palace Indian Restaurant) at [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000) serves vegetarian, vegan and Jain dishes for groups, with **three-course set menus from $65 per person**. Dinner runs **5pm–10pm Sunday to Thursday** and **5pm–10:30pm Friday and Saturday**. [Book a table](/book-a-table) or call [(02) 8021 7696](tel:+61280217696).",
    "quickFacts": [
      {
        "label": "Location",
        "value": "Basement, 261 George Street, Sydney CBD"
      },
      {
        "label": "Dinner",
        "value": "Sun–Thu 5pm–10pm · Fri–Sat 5pm–10:30pm"
      },
      {
        "label": "Set menus",
        "value": "Vegetarian $65 · Non-Veg $70 · TGP Special $95 per person"
      },
      {
        "label": "Dietary",
        "value": "Vegetarian, vegan, Jain & halal options"
      }
    ],
    "sections": [
      {
        "heading": "{{color:#c8720a}}Before or After Garba? Planning Your Navratri Dinner{{/color}}",
        "blockType": "row",
        "body": [
          "The right booking depends on when your garba starts. Tell the team your plans when you book and they'll time the meal around them."
        ],
        "items": [
          "Dinner Before Garba\nBook an early table from 5pm and choose a set menu so the food arrives together and you leave on time.",
          "Dinner After Garba\nDinner runs until 10pm Sunday to Thursday and 10:30pm Friday and Saturday — book ahead and share your arrival time.",
          "Weekend Family Lunch\nLunch is served every day from 12pm to 3pm — ideal for a family get-together during the nine days."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Vegetarian & Jain Dishes for Navratri{{/color}}",
        "blockType": "row",
        "body": [
          "Many families eat vegetarian through Navratri, and some follow Jain practice. TGP's menu covers both without anyone settling for a side dish."
        ],
        "items": [
          "Vegetarian Entrées\nPaneer Schnitzel, Hariyali Kebab and Samosa to share at the table.",
          "Vegetarian Curries\nNavratan Korma, Shahi Paneer and Dal Makhani with rice and breads.",
          "Jain Dishes\nJain Veg Kolhapuri, Jain Paneer Butter Masala and Jain Papadi Chaat — made without onion, garlic or root vegetables. Mention it when you book."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Set Menus for Navratri Groups{{/color}}",
        "blockType": "row",
        "body": [
          "For a group, a [set menu](/set-menu) keeps things simple — everyone eats together and nobody has to split the bill by dish."
        ],
        "items": [
          "Vegetarian Set Menu — $65 per person\nA three-course vegetarian banquet, ideal for a Navratri table.",
          "Non-Vegetarian Set Menu — $70 per person\nThree courses for groups where not everyone is eating vegetarian.",
          "TGP Special — $95 per person\nOur premium three-course banquet for a bigger celebration."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Getting There on a Garba Night{{/color}}",
        "blockType": "text",
        "body": [
          "TGP is in the basement at **261 George Street**, opposite Bridge Street light rail and about a **90-second walk from Wynyard Station** — easy to reach by train before heading to your garba, or on the way home after it.",
          "Driving? **Wilson Parking on Clarence Street** and **Secure Parking on Erskine Street** are both nearby."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Book Your Navratri Dinner{{/color}}",
        "blockType": "box",
        "body": [
          "[Book a table online](/book-a-table), call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au). Let the team know your group size, the time your garba starts, and any Jain or dietary requirements."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Conclusion{{/color}}",
        "blockType": "text",
        "body": [
          "A Navratri dinner should fit around the dancing, not the other way round — an **early table before garba** or a **celebration meal after**, with food that works for vegetarian and Jain guests alike.",
          "The Grand Palace Indian Restaurant offers both, with **set menus from $65 per person** and a location a short walk from Wynyard.",
          "Pick your night, then [book your table](/book-a-table) and tell us when your garba starts."
        ]
      }
    ],
    "faq": [
      {
        "q": "Where can I have a Navratri dinner in Sydney CBD?",
        "a": "The Grand Palace Indian Restaurant at Basement, 261 George Street, Sydney CBD serves vegetarian, vegan and Jain dishes for groups, with set menus from $65 per person."
      },
      {
        "q": "Does The Grand Palace Indian Restaurant have vegetarian options?",
        "a": "Yes — the menu has a wide vegetarian selection, including Paneer Schnitzel, Hariyali Kebab, Navratan Korma, Shahi Paneer and Dal Makhani, plus a $65 vegetarian set menu."
      },
      {
        "q": "Can I get Jain food for Navratri at TGP?",
        "a": "Yes — Jain dishes such as Jain Veg Kolhapuri and Jain Paneer Butter Masala are prepared without onion, garlic or root vegetables. Mention it when you book."
      },
      {
        "q": "How much are the set menus?",
        "a": "Three-course set menus are $65 per person (Vegetarian), $70 per person (Non-Vegetarian) and $95 per person (TGP Special)."
      },
      {
        "q": "How late is dinner served?",
        "a": "Dinner runs 5pm–10pm Sunday to Thursday and 5pm–10:30pm on Friday and Saturday."
      },
      {
        "q": "Can you seat a large Navratri group?",
        "a": "Yes — TGP regularly hosts family and friend groups, and can accommodate up to 125 guests. For larger groups, call (02) 8021 7696 to plan seating and a set menu."
      },
      {
        "q": "How far is TGP from Wynyard Station?",
        "a": "About a 90-second walk. The restaurant is in the basement at 261 George Street, opposite Bridge Street light rail."
      },
      {
        "q": "Do I need to book for a Navratri dinner?",
        "a": "Booking is recommended, especially for groups and on Friday and Saturday nights. [Book online](/book-a-table) or call (02) 8021 7696."
      }
    ],
    "relatedSlugs": [
      "jain-restaurants-in-sydney-no-onion-no-garlic",
      "best-indian-restaurant-near-me-sydney-cbd-the-grand-palace-guide",
      "tgp-is-best-for-a-weekend-indian-lunch"
    ],
    "ctaLabel": "Book a Table",
    "ctaHref": "/book-a-table"
  },
  {
    "publishedDate": "2026-09-29",
    "publishedDateDisplay": "Sep 29, 2026",
    "updatedDate": "2026-09-29",
    "updatedDateDisplay": "Sep 29, 2026",
    "guideType": "normal",
    "heroImage": null,
    "heroImageAlt": null,
    "comparisonTable": null,
    "pricingTable": null,
    "externalLinks": null,
    "slug": "diwali-catering-box-sydney",
    "tag": "Catering",
    "title": "Diwali Catering Box: Festive Snacks & Sweets for $99",
    "metaTitle": "Diwali Catering Box Sydney — $99 Snacks & Sweets | TGP",
    "metaDescription": "TGP's $99 Diwali Catering Box: paneer cigar rolls, palak pakora, dal kachori, samosas, motichur laddu and gulab jamun. Order by Thursday 5 November.",
    "excerpt": "Six festive favourites, 33–35 pieces, $99 — what's inside the TGP Diwali Catering Box, who it's for, and how to order and collect.",
    "intro": "Diwali is about coming together — lighting the diyas, sharing sweets and filling the table for family and friends. This year, The Grand Palace Indian Restaurant has packed the festive classics into one box: **four savoury bites and two traditional sweets**, 33 to 35 pieces in total, for **$99**. Here's what's inside, who it's for, and how to order and collect.",
    "quickAnswer": "The TGP Diwali Catering Box is **$99** and includes Paneer Cigar Roll (5), Palak Pakora (8–10), Dal Kachori (5), Samosa (5), Motichur Laddu (5) and Gulab Jamun (5). **Orders close Thursday 5 November 2026.** Collection is in store only at [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000). To order, or for larger orders and delivery, call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au).",
    "quickFacts": [
      {
        "label": "Price",
        "value": "$99 per box"
      },
      {
        "label": "Inside",
        "value": "6 items · 33–35 pieces"
      },
      {
        "label": "Order by",
        "value": "Thursday 5 November 2026"
      },
      {
        "label": "Collection",
        "value": "In store only — 261 George Street, Sydney CBD"
      }
    ],
    "sections": [
      {
        "heading": "{{color:#c8720a}}What's Inside the Diwali Catering Box{{/color}}",
        "blockType": "row",
        "body": [
          "Four savoury bites and two traditional sweets — the flavours families share across Diwali."
        ],
        "items": [
          "Paneer Cigar Roll — 5 pieces\nCrisp, golden pastry rolled around a spiced paneer filling.",
          "Palak Pakora — 8–10 pieces\nSpinach fritters in a lightly spiced gram-flour batter.",
          "Dal Kachori — 5 pieces\nFlaky, round pastry filled with a spiced lentil stuffing.",
          "Samosa — 5 pieces\nThe classic triangular pastry with a spiced savoury filling.",
          "Motichur Laddu — 5 pieces\nSoft sweet balls made from tiny gram-flour pearls bound in sugar syrup.",
          "Gulab Jamun — 5 pieces\nMilk-based dumplings, fried golden and soaked in fragrant syrup."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Why a Diwali Box Makes Hosting Easier{{/color}}",
        "blockType": "text",
        "body": [
          "Diwali snacks and sweets take time — rolling, frying and simmering syrup, usually on the same day you're getting the house ready and welcoming guests.",
          "One box covers **savouries and sweets together**, ready to plate, so you spend less time in the kitchen and more time with family and friends."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Who the Diwali Box Is For{{/color}}",
        "blockType": "row",
        "body": [
          "The box is designed for sharing, which makes it work for most Diwali plans."
        ],
        "items": [
          "Family Gatherings at Home\nSnacks and sweets for relatives arriving through the evening.",
          "Diwali Parties with Friends\nPlenty to go round a party, without hours of cooking.",
          "Office Diwali Celebrations\nA shared festive spread for the team.",
          "Visiting Family & Friends\nSharing mithai is a Diwali tradition — take a box with you."
        ]
      },
      {
        "heading": "{{color:#c8720a}}How to Order & Collect{{/color}}",
        "blockType": "box",
        "bullets": [
          "Call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au) with the number of boxes and your preferred collection day",
          "Order by **Thursday 5 November 2026**",
          "Collect in store at [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000) — opposite Bridge Street light rail, 90 seconds from Wynyard Station",
          "For larger orders or delivery, ask the team when you order"
        ]
      },
      {
        "heading": "{{color:#c8720a}}Larger Orders, Delivery & Full Diwali Catering{{/color}}",
        "blockType": "text",
        "body": [
          "Hosting a bigger celebration? Contact the team for **larger orders and delivery** on [(02) 8021 7696](tel:+61280217696) or [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au).",
          "For a full Diwali spread with service at your venue, see [venue catering](/venue-catering); for team celebrations, see [office catering](/office-catering)."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Allergens & Storage{{/color}}",
        "blockType": "text",
        "body": [
          "The dishes in this box contain or may contain **wheat (gluten)**, **gram flour (chickpea)** and **dairy**, and the kitchen handles other common allergens. If you or a guest has a food allergy, call [(02) 8021 7696](tel:+61280217696) before ordering.",
          "Once collected, keep the savouries refrigerated at 5°C or below if you're not serving them within 2 hours, and reheat in the oven until piping hot."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Conclusion{{/color}}",
        "blockType": "text",
        "body": [
          "The TGP Diwali Catering Box puts **six festive favourites** in one order — four savouries, two sweets, 33 to 35 pieces — for **$99**.",
          "It suits family gatherings, parties, the office or a gift of mithai, with in-store collection at The Grand Palace Indian Restaurant in Sydney CBD.",
          "Orders close **Thursday 5 November 2026** — [call to order](tel:+61280217696) your boxes."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is in the TGP Diwali Catering Box?",
        "a": "Paneer Cigar Roll (5 pieces), Palak Pakora (8–10 pieces), Dal Kachori (5 pieces), Samosa (5 pieces), Motichur Laddu (5 pieces) and Gulab Jamun (5 pieces) — 33 to 35 pieces in total."
      },
      {
        "q": "How much is the Diwali Catering Box?",
        "a": "The Diwali Catering Box is $99 per box."
      },
      {
        "q": "When is the last day to order?",
        "a": "Orders close on Thursday 5 November 2026."
      },
      {
        "q": "How do I order the Diwali box?",
        "a": "Call (02) 8021 7696 or email bookings@thegrandpalace.com.au with the number of boxes and your preferred collection day."
      },
      {
        "q": "Where do I collect my Diwali box?",
        "a": "Collection is in store only, at The Grand Palace Indian Restaurant, Basement, 261 George Street, Sydney CBD — about a 90-second walk from Wynyard Station."
      },
      {
        "q": "Do you deliver the Diwali box or take larger orders?",
        "a": "Yes — for larger orders and delivery, call (02) 8021 7696 or email bookings@thegrandpalace.com.au and the team will arrange it with you."
      },
      {
        "q": "Is the Diwali box suitable for people with allergies?",
        "a": "The box contains or may contain wheat, gram flour and dairy, and the kitchen handles other common allergens, so it can't be guaranteed allergen-free. Call before ordering if anyone has an allergy."
      },
      {
        "q": "Can I order the Diwali box for my office?",
        "a": "Yes — the box is made for sharing and works well for an office Diwali celebration. For bigger team events, see [office catering](/office-catering)."
      }
    ],
    "relatedSlugs": [
      "catering-boxes-in-sydney-for-parties",
      "indian-catering-box-sydney-cbd",
      "why-tgp-is-best-for-diwali-party"
    ],
    "ctaLabel": "Call to Order Your Diwali Box",
    "ctaHref": "/contact"
  },
  {
    "publishedDate": "2026-09-29",
    "publishedDateDisplay": "Sep 29, 2026",
    "updatedDate": "2026-09-29",
    "updatedDateDisplay": "Sep 29, 2026",
    "guideType": "normal",
    "heroImage": null,
    "heroImageAlt": null,
    "comparisonTable": null,
    "pricingTable": null,
    "externalLinks": null,
    "slug": "diwali-dinner-sydney-cbd",
    "tag": "Dining",
    "title": "Diwali Dinner in Sydney CBD: Celebrate the Festival of Lights at The Grand Palace Indian Restaurant",
    "metaTitle": "Diwali Dinner in Sydney CBD — Indian Restaurant | TGP",
    "metaDescription": "Celebrate Diwali over dinner at TGP, Sydney CBD — Indian set menus from $65pp, vegetarian, Jain and halal options, and room for family groups. Book ahead.",
    "excerpt": "Planning Diwali dinner out with the family? What to order, how to book for a group and why to book early at TGP in Sydney CBD.",
    "intro": "For many families, Diwali night is the biggest dinner of the year — everyone dressed up, the whole family around one table and plenty of sweets to finish. If you'd rather celebrate out than cook at home, The Grand Palace Indian Restaurant in Sydney CBD offers **festive Indian dining** in a dining room styled after India's royal palaces, with **set menus from $65 per person** and room for family groups.",
    "quickAnswer": "Celebrate Diwali dinner at TGP (The Grand Palace Indian Restaurant), [Basement, 261 George Street, Sydney CBD](https://www.google.com/maps/search/?api=1&query=Basement%2C%20261%20George%20Street%2C%20Sydney%20NSW%202000). **Diwali falls on Sunday 8 November 2026**, and Sunday dinner runs **5pm–10pm**. Choose a three-course set menu (**Vegetarian $65, Non-Vegetarian $70, TGP Special $95 per person**) or the [à la carte menu](/menu/a-la-carte), with vegetarian, Jain and halal options. [Book a table](/book-a-table) or call [(02) 8021 7696](tel:+61280217696).",
    "quickFacts": [
      {
        "label": "Diwali 2026",
        "value": "Sunday 8 November"
      },
      {
        "label": "Dinner",
        "value": "Sun–Thu 5pm–10pm · Fri–Sat 5pm–10:30pm"
      },
      {
        "label": "Set menus",
        "value": "Vegetarian $65 · Non-Veg $70 · TGP Special $95 per person"
      },
      {
        "label": "Dietary",
        "value": "Vegetarian, vegan, Jain & halal-certified meats"
      }
    ],
    "sections": [
      {
        "heading": "{{color:#c8720a}}Why Celebrate Diwali Dinner at TGP{{/color}}",
        "blockType": "row",
        "body": [
          "A Diwali dinner should feel like an occasion — somewhere the whole family is happy to dress up for."
        ],
        "items": [
          "A Palace-Inspired Setting\nA basement dining room styled after India's royal palaces, made for festive nights.",
          "Food for the Whole Family\nVegetarian, vegan, Jain and halal-certified dishes, so every generation eats well.",
          "Room for Family Groups\nFrom a table for four to large family groups, with semi-private sections available.",
          "Easy to Reach\nOpposite Bridge Street light rail and a 90-second walk from Wynyard Station."
        ]
      },
      {
        "heading": "{{color:#c8720a}}What to Order for a Diwali Dinner{{/color}}",
        "blockType": "row",
        "body": [
          "Diwali tables are about abundance and sharing — order a spread for the table rather than one dish each."
        ],
        "items": [
          "Entrées to Share\nPaneer Schnitzel, Hariyali Kebab or Saffron Chicken Tikka to start.",
          "Curries for the Table\nButter Chicken, Kashmiri Rogan Josh, Shahi Paneer and Dal Makhani with rice and breads.",
          "Finish with Mithai\nGulab Jamun, Ras Malai or Kulfi for a sweet Diwali ending."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Set Menus for Diwali Groups{{/color}}",
        "blockType": "row",
        "body": [
          "For family groups, a [set menu](/set-menu) keeps the evening easy — everyone shares the same courses and the food arrives together."
        ],
        "items": [
          "Vegetarian Set Menu — $65 per person\nA three-course vegetarian banquet.",
          "Non-Vegetarian Set Menu — $70 per person\nThree courses for mixed family tables.",
          "TGP Special — $95 per person\nOur premium three-course banquet for the big night."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Book Early — Diwali Is a Busy Night{{/color}}",
        "blockType": "text",
        "bullets": [
          "**Book ahead** — Diwali is one of the busiest nights of the year for Indian restaurants in Sydney",
          "**Share your group size** and any Jain, vegan or allergy needs when you book",
          "**Choose a set menu in advance** for larger groups so the kitchen can prepare",
          "**Plan your arrival** — Sunday dinner runs from 5pm to 10pm"
        ]
      },
      {
        "heading": "{{color:#c8720a}}Celebrating at Home Instead?{{/color}}",
        "blockType": "text",
        "body": [
          "If you're hosting at home, the [TGP Diwali Catering Box](/blog/diwali-catering-box-sydney) brings six festive snacks and sweets to your table for $99 — order by Thursday 5 November 2026.",
          "For a larger celebration with full service at your venue, see [venue catering](/venue-catering)."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Book Your Diwali Dinner{{/color}}",
        "blockType": "box",
        "body": [
          "[Book a table online](/book-a-table), call [(02) 8021 7696](tel:+61280217696) or email [bookings@thegrandpalace.com.au](mailto:bookings@thegrandpalace.com.au). Tell us your group size, preferred time and any dietary requirements."
        ]
      },
      {
        "heading": "{{color:#c8720a}}Conclusion{{/color}}",
        "blockType": "text",
        "body": [
          "Diwali dinner out should feel special and stay easy — a **festive setting**, food for **every diet at the table**, and a booking made early.",
          "The Grand Palace Indian Restaurant brings all three together in Sydney CBD, with **set menus from $65 per person** and room for family groups.",
          "Diwali falls on **Sunday 8 November 2026** — [book your table](/book-a-table) now to secure your preferred time."
        ]
      }
    ],
    "faq": [
      {
        "q": "Where can I celebrate Diwali dinner in Sydney CBD?",
        "a": "The Grand Palace Indian Restaurant at Basement, 261 George Street, Sydney CBD offers festive Indian dining for Diwali, with set menus from $65 per person and room for family groups."
      },
      {
        "q": "When is Diwali in 2026?",
        "a": "Diwali falls on Sunday 8 November 2026."
      },
      {
        "q": "What are TGP's hours on Diwali night?",
        "a": "Diwali 2026 falls on a Sunday, when dinner runs from 5pm to 10pm. Book ahead, as it's a busy night."
      },
      {
        "q": "How much are the set menus?",
        "a": "Three-course set menus are $65 per person (Vegetarian), $70 per person (Non-Vegetarian) and $95 per person (TGP Special)."
      },
      {
        "q": "Does TGP have vegetarian and Jain options for Diwali?",
        "a": "Yes — the menu includes a wide vegetarian selection, vegan options and dedicated Jain dishes made without onion, garlic or root vegetables. Mention it when you book."
      },
      {
        "q": "Is the meat halal?",
        "a": "Yes — The Grand Palace Indian Restaurant serves halal-certified meats across the menu."
      },
      {
        "q": "Can TGP host a large family group for Diwali?",
        "a": "Yes — the restaurant hosts family groups and can accommodate up to 125 guests. Call (02) 8021 7696 to plan seating and a set menu for larger groups."
      },
      {
        "q": "How do I book a Diwali dinner table?",
        "a": "[Book online](/book-a-table), call (02) 8021 7696 or email bookings@thegrandpalace.com.au."
      }
    ],
    "relatedSlugs": [
      "why-tgp-is-best-for-diwali-party",
      "best-indian-restaurant-near-me-sydney-cbd-the-grand-palace-guide",
      "private-event-venue-hire-sydney"
    ],
    "ctaLabel": "Book a Table",
    "ctaHref": "/book-a-table"
  }
];

async function main() {
  for (const blog of BLOGS) {
    const { slug, ...data } = blog;
    const existing = await prisma.guide.findUnique({ where: { slug } });
    if (existing && !FORCE) {
      console.log(`- ${slug}: already exists — skipped (use --force to overwrite)`);
      continue;
    }
    if (existing) {
      await prisma.guide.update({ where: { slug }, data });
      console.log(`✓ ${slug}: updated`);
    } else {
      await prisma.guide.create({ data: { slug, ...data, published: false } });
      console.log(`✓ ${slug}: created as draft — publish it in Admin → Guides`);
    }
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
