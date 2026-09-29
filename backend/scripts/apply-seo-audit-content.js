// One-off SEO content update for guides and blog posts, from the post-launch
// on-page audit (reports/seo-content-updates.html):
//   - 20 meta titles and 21 meta descriptions brought within 60 / 120–160
//     chars (plus a broken "�" character and a stale "2025")
//   - 5 page titles (H1) whose restaurant count didn't match the article
//   - 32 FAQs for the 8 guides that had none (FAQ schema is built from these)
//
// Safe by design:
//   - Dry run by default — prints what would change. Pass --apply to write.
//   - A field is only changed if it still holds the exact value captured at
//     audit time, so anything edited in admin since is left alone (reported
//     as "skipped").
//   - FAQs are only added to a guide whose FAQ list is still empty.
//   - Safe to re-run: already-applied fields show as "already done".
//
// Run from backend/:  node scripts/apply-seo-audit-content.js [--apply]
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");

const UPDATES = [
  {
    "slug": "best-asian-restaurants-in-sydney",
    "metaDescription": {
      "from": "From Cantonese banquet halls to modern izakayas, here are Sydney's 17 best Asian restaurants — plus where The Grand Palace fits in for Asian-inspired Indian dining.",
      "to": "From Cantonese banquet halls to modern izakayas — Sydney's 17 best Asian restaurants for 2026, plus The Grand Palace for Asian-inspired Indian dining."
    }
  },
  {
    "slug": "private-corporate-dining-sydney-cbd",
    "metaTitle": {
      "from": "Corporate Dining & Client Lunches Sydney CBD | TGP",
      "to": "Private Corporate Dining Sydney CBD | The Grand Palace"
    },
    "metaDescription": {
      "from": "Host client dinners, executive lunches or a product launch in a private dining room at The Grand Palace, Sydney CBD — Gold Licensed, halal-certified, up to 300 guests.",
      "to": "Host client dinners, executive lunches or a product launch in a private dining room at The Grand Palace, Sydney CBD. Gold Licensed and halal-certified."
    }
  },
  {
    "slug": "mocktails-drinks-in-indian-food",
    "metaDescription": {
      "from": "From Aam Panna Soda to premium Indian whisky — the best drinks to pair with Indian food at The Grand Palace, Sydney CBD. Halal-certified kitchen, full mocktail range.",
      "to": "From Aam Panna Soda to premium Indian whisky — the best drinks to pair with Indian food at The Grand Palace, Sydney CBD, including a full mocktail range."
    }
  },
  {
    "slug": "private-event-venue-hire-sydney",
    "metaTitle": {
      "from": "Private Event Venue Hire Sydney CBD | TGP",
      "to": "Private Event Venue Hire Sydney CBD | The Grand Palace"
    },
    "metaDescription": {
      "from": "Hire The Grand Palace's elegant Sydney CBD dining room for weddings, corporate events, birthdays and private celebrations. Up to 125 guests, packages from $45pp.",
      "to": "Hire The Grand Palace's Sydney CBD dining room for weddings, corporate events, birthdays and private celebrations. Up to 125 guests, from $45pp."
    }
  },
  {
    "slug": "christmas-lunch-and-dinner-restaurants-in-sydney",
    "metaDescription": {
      "from": "15 of Sydney's best restaurants for Christmas Eve dinner, Christmas lunch and festive group celebrations — from sky-high fine dining to The Grand Palace's Indian feast.",
      "to": "15 of Sydney's best restaurants for Christmas Eve dinner, Christmas lunch and festive group celebrations — from fine dining to an Indian Christmas feast."
    }
  },
  {
    "slug": "indian-restaurant-near-wynyard-station-sydney",
    "metaTitle": {
      "from": "Indian Restaurant Near Wynyard Station Sydney | The Grand Palace",
      "to": "Indian Restaurant Near Wynyard Station | The Grand Palace"
    }
  },
  {
    "slug": "best-indian-birthday-dinner-sydney-where-to-celebrate-in-style",
    "metaTitle": {
      "from": "Best Indian Birthday Dinner Sydney � Celebrate Birthday Package",
      "to": "Best Indian Birthday Dinner Sydney | $150 Birthday Package"
    }
  },
  {
    "slug": "asian-fusion-restaurants-in-sydney",
    "metaTitle": {
      "from": "Best Asian Fusion Restaurants in Sydney (2026) | Compared",
      "to": "12 Best Asian Fusion Restaurants in Sydney (2026)"
    },
    "metaDescription": {
      "from": "12 of Sydney's best Asian fusion restaurants, compared side by side - address, hours, dietary options and booking links, with The Grand Palace's Indian dining as our top pick.",
      "to": "12 of Sydney's best Asian fusion restaurants compared side by side — address, hours, dietary options and booking links, with our Indian dining top pick."
    }
  },
  {
    "slug": "make-birthday-memorable-with-tgp",
    "metaDescription": {
      "from": "From a basement dining room to a cake made just for you — what actually makes a birthday dinner memorable at The Grand Palace in Sydney CBD, in guests' own words.",
      "to": "From a basement dining room to a cake made just for you — what makes a birthday dinner memorable at The Grand Palace in Sydney CBD, in guests' own words."
    }
  },
  {
    "slug": "best-halal-restaurant-in-sydney",
    "metaTitle": {
      "from": "Best Halal Restaurant in Sydney – Top 15 Spots for Authentic Cuisine",
      "to": "15 Best Halal Restaurants in Sydney (2026 Guide)"
    },
    "metaDescription": {
      "from": "Authentic Indian fine dining in Sydney CBD. Birthday packages, events, catering and à la carte dining at The Grand Palace.",
      "to": "The 15 best halal restaurants in Sydney for authentic cuisine — compared by area, style and dietary options, with halal Indian fine dining in the CBD."
    }
  },
  {
    "slug": "best-vegan-restaurant-sydney",
    "metaTitle": {
      "from": "9 Best Vegan Restaurants in Sydney 2026 | Plant-Based Dining Guide",
      "to": "9 Best Vegan Restaurants in Sydney (2026 Guide)"
    },
    "metaDescription": {
      "from": "Discover the 9 best vegan restaurants in Sydney — from The Grand Palace Indian Restaurant in Sydney CBD to fully plant-based cafés in Surry Hills & Newtown. Expert 2026 guide with locations, hours & tips.\n",
      "to": "The 9 best vegan restaurants in Sydney — from Indian fine dining in the CBD to fully plant-based cafés in Surry Hills and Newtown. Locations, hours & tips."
    }
  },
  {
    "slug": "indian-restaurants-western-sydney",
    "metaTitle": {
      "from": "Top 10 Indian Restaurants in Western Sydney You Must Try in 2025",
      "to": "Top 10 Indian Restaurants in Western Sydney (2026)"
    },
    "metaDescription": {
      "from": "Western Sydney is a vibrant melting pot of cultures, and when it comes to Indian restaurants, there's no shortage of choices.",
      "to": "Western Sydney is a melting pot of cultures, and its Indian food shows it. Here are the top 10 Indian restaurants to try, compared by area and style."
    },
    "title": {
      "from": "Top 10 Indian Restaurants in Western Sydney You Must Try in 2025",
      "to": "Top 10 Indian Restaurants in Western Sydney to Try in 2026"
    }
  },
  {
    "slug": "indian-fine-dining-circular-quay",
    "metaTitle": {
      "from": "7 Best Indian Fine Dining Circular Quay 2026 | Top Restaurants",
      "to": "7 Best Indian Fine Dining Near Circular Quay (2026)"
    },
    "metaDescription": {
      "from": "Discover the 7 best Indian fine dining restaurants near Circular Quay in 2026. Premium Indian cuisine close to Sydney's harbour precinct — expert guide with addresses & booking tips.",
      "to": "The 7 best Indian fine dining restaurants near Circular Quay in 2026 — premium Indian cuisine close to Sydney's harbour, with addresses and booking tips."
    },
    "faq": [
      {
        "q": "What is the best Indian fine dining restaurant near Circular Quay?",
        "a": "The Grand Palace at Basement, 261 George Street, Sydney CBD is our top pick — palace-inspired Indian fine dining, halal-certified, with a deep vegetarian, vegan and Jain menu. The Spice Room is the closest Indian fine dining option right at Circular Quay."
      },
      {
        "q": "How far is The Grand Palace from Circular Quay?",
        "a": "The Grand Palace is in the Sydney CBD on George Street, a 90-second walk from Wynyard Station — one train stop or a short walk from Circular Quay."
      },
      {
        "q": "Which Indian restaurants near Circular Quay suit large groups?",
        "a": "In this guide, The Grand Palace, The Spice Room, Malabar South Indian Restaurant, Manjit's Wharf and Pinky Ji are all good for groups. The Grand Palace also has private dining for events of up to 125 guests."
      },
      {
        "q": "Is there halal and vegetarian Indian fine dining near Circular Quay?",
        "a": "Yes. The Grand Palace is halal-certified and has a full vegetarian, vegan and Jain menu. For the other restaurants in this guide, contact them directly to confirm dietary options."
      }
    ]
  },
  {
    "slug": "group-dining-restaurants-pyrmont",
    "metaTitle": {
      "from": "Top 10 Restaurants for Group Dining in Pyrmont | Group Venues in Sydney",
      "to": "Top 10 Group Dining Restaurants in Pyrmont, Sydney"
    },
    "metaDescription": {
      "from": "Explore the best restaurants for group dining in Pyrmont. Find ideal venues in Sydney for team dinners, birthday parties, and large gatherings with great food and ambiance.",
      "to": "The best restaurants for group dining in Pyrmont — venues for team dinners, birthday parties and large gatherings, with great food and atmosphere."
    },
    "faq": [
      {
        "q": "What are the best restaurants for group dining in Pyrmont?",
        "a": "This guide covers 10 group-friendly options, including Sokyo at The Star, Moche Peruvian Fusion Cuisine, Chefs Gallery, The Little Snail, Sala at Jones Bay Wharf and Blue Eye Dragon — plus The Grand Palace in the nearby Sydney CBD for Indian group dining."
      },
      {
        "q": "Is there a halal restaurant for group dinners near Pyrmont?",
        "a": "Yes — The Grand Palace at Basement, 261 George Street, Sydney CBD is halal-certified, with a deep vegetarian, vegan and Jain menu so mixed-diet groups can share one table."
      },
      {
        "q": "Where can I book a private dining room for a large group near Pyrmont?",
        "a": "The Grand Palace in Sydney CBD offers private dining and whole-venue hire for groups of up to 125 guests. For Pyrmont venues, contact each restaurant directly about private rooms."
      },
      {
        "q": "How far in advance should I book a group dinner in Pyrmont?",
        "a": "Book as early as you can, especially for Friday and Saturday nights and for larger groups. Some venues change hours or close, so confirm details directly with the restaurant before your event."
      }
    ]
  },
  {
    "slug": "vegetarian-restaurants-chippendale",
    "metaTitle": {
      "from": "8 Best Vegetarian Restaurants Near Chippendale 2026",
      "to": "8 Best Vegetarian Restaurants Near Chippendale (2026)"
    },
    "metaDescription": {
      "from": "Based near Chippendale and after proper sit-down vegetarian Indian food? The Grand Palace in Sydney CBD is a short trip away, with a full vegetarian and vegan menu.",
      "to": "Near Chippendale and after proper sit-down vegetarian food? These are the 8 best spots, including The Grand Palace with a full vegetarian and vegan menu."
    }
  },
  {
    "slug": "indian-restaurant-darling-harbour",
    "metaTitle": {
      "from": "8 Best Indian Restaurants Near Darling Harbour 2026",
      "to": "8 Best Indian Restaurants Near Darling Harbour (2026)"
    },
    "metaDescription": {
      "from": "The best Indian restaurants near Darling Harbour — from The Grand Palace Indian Restaurant in Sydney CBD 2026 guide.",
      "to": "The 8 best Indian restaurants near Darling Harbour, compared by style, dietary options and group size — including The Grand Palace in Sydney CBD."
    },
    "faq": [
      {
        "q": "What is the best Indian restaurant near Darling Harbour?",
        "a": "The Grand Palace at Basement, 261 George Street, Sydney CBD is our top pick — Indian fine dining in a palace-inspired setting, a short walk from Darling Harbour via Wynyard. Lal Qila on Lime Street is the closest option right at Darling Harbour, serving Mughlai fine dining."
      },
      {
        "q": "Are there halal Indian restaurants near Darling Harbour?",
        "a": "Yes. The Grand Palace is halal-certified and HACCP certified, with a full vegetarian, vegan and Jain menu. Lal Qila serves North Indian and Pakistani cuisine — contact them to confirm halal status."
      },
      {
        "q": "Which Indian restaurants near Darling Harbour are good for groups?",
        "a": "The Grand Palace, Lal Qila, Manjit's Wharf and 32 Miles Indian Restaurant are all good for groups. The Grand Palace has private dining for up to 125 guests."
      },
      {
        "q": "What are The Grand Palace's opening hours?",
        "a": "Lunch runs every day from 12pm to 3pm; dinner is 5pm–10pm Sunday to Thursday and 5pm–10:30pm on Friday and Saturday."
      }
    ]
  },
  {
    "slug": "best-indian-restaurant-sydney",
    "metaTitle": {
      "from": "15 Best Indian Restaurants in Sydney 2026 | Ultimate Guide",
      "to": "15 Best Indian Restaurants in Sydney (2026 Guide)"
    },
    "metaDescription": {
      "from": "Sydney's 20 best Indian restaurants in 2026 — from The Grand Palace fine dining in Sydney CBD to South Indian classics, Mughlai cuisine, and modern Indian. Expert guide.",
      "to": "Sydney's 15 best Indian restaurants in 2026 — from fine dining in the CBD to South Indian classics, Mughlai cuisine and modern Indian. Our expert guide."
    }
  },
  {
    "slug": "best-group-restaurant-sydney",
    "metaTitle": {
      "from": "12 Best Group Dining Restaurants in Sydney 2026 | Guide",
      "to": "10 Best Group Dining Restaurants in Sydney (2026)"
    },
    "metaDescription": {
      "from": "Sydney's best restaurants for group dining — from The Grand Palace Indian Restaurant (up to 125guests) to Lotus The Galeries, Bentley, NOMAD, and Sokyo. 2026 guide.\n",
      "to": "Sydney's best restaurants for group dining — from The Grand Palace (up to 125 guests) to Lotus The Galeries, Bentley, NOMAD and Sokyo. 2026 guide."
    },
    "title": {
      "from": "12 Best Group Restaurant in Sydney",
      "to": "10 Best Group Dining Restaurants in Sydney"
    },
    "faq": [
      {
        "q": "What are the best restaurants in Sydney for large groups?",
        "a": "This guide's 10 picks are The Grand Palace, Nour, The Little Snail, Flavour of India, The Malaya, Sokyo, NOMAD, Zahli, Sugarcane and The Apollo — covering Indian, Lebanese, French, Malaysian, Japanese, Modern Australian, Middle Eastern, Southeast Asian and Greek."
      },
      {
        "q": "Which Sydney CBD restaurant has private dining for big groups?",
        "a": "The Grand Palace at Basement, 261 George Street, Sydney CBD has private dining and whole-venue hire for groups of up to 125 guests, with set menus built for sharing."
      },
      {
        "q": "Where can a mixed-diet group eat together in Sydney?",
        "a": "The Grand Palace is halal-certified with a deep vegetarian, vegan and Jain menu, so meat-eaters, vegetarians, vegans and Jain guests can all order from the same table."
      },
      {
        "q": "How do I book a group dinner at The Grand Palace?",
        "a": "Book online through the Book a Table page, call (02) 8021 7696, or email bookings@thegrandpalace.com.au. For private hire, use the Venue for Hire enquiry form."
      }
    ]
  },
  {
    "slug": "best-corporate-catering-services-sydney",
    "metaTitle": {
      "from": "12 Best Corporate Catering Sydney 2026 | Top Office & Event Caterers",
      "to": "12 Best Corporate Catering Services Sydney (2026)"
    },
    "metaDescription": {
      "from": "Discover the 12 best corporate catering companies in Sydney for office lunches, boardroom events & staff functions. Expert 2026 guide with pricing, menus & booking tips.\n",
      "to": "The 12 best corporate caterers in Sydney for office lunches, boardroom events and staff functions — compared on menus, pricing and booking tips."
    }
  },
  {
    "slug": "best-wedding-caterers-sydney",
    "metaTitle": {
      "from": "8 Best Wedding Caterers Sydney 2026 | Top Catering Services",
      "to": "8 Best Wedding Caterers in Sydney (2026 Guide)"
    },
    "metaDescription": {
      "from": "Find the 8 best wedding caterers in Sydney for 2026. From luxury Indian wedding banquets to modern European-style receptions — expert guide with pricing & booking advice.\n",
      "to": "The 8 best wedding caterers in Sydney for 2026 — from luxury Indian wedding banquets to modern European-style receptions, with pricing and booking advice."
    }
  },
  {
    "slug": "best-birthday-party-caterer-sydney",
    "metaTitle": {
      "from": "15 Best Birthday Party Caterers Sydney 2026 | Top Dining Venues",
      "to": "15 Best Birthday Party Caterers in Sydney (2026)"
    },
    "metaDescription": {
      "from": "Find the 15 best birthday party caterers & venues in Sydney 2026. From private dining rooms in Sydney CBD to party catering services — expert guide with options for every budget.",
      "to": "The 15 best birthday party caterers and venues in Sydney — from private dining rooms in the CBD to party catering services, with options for every budget."
    },
    "faq": [
      {
        "q": "Who are the best birthday party caterers in Sydney?",
        "a": "This guide lists 15 options, including Flavours Catering + Events, Art Kitchen, Bella Catering & Events, Piquant Catering, Host Events, Kocagoz and Fabulous Finger Food — plus The Grand Palace for a hosted birthday dinner in Sydney CBD."
      },
      {
        "q": "What does The Grand Palace birthday package include?",
        "a": "The $150 Celebrate Birthday package includes an 8-inch cake, balloons, a banner and table props set up before guests arrive, plus a birthday song. Set menus start from $40 per person."
      },
      {
        "q": "Can The Grand Palace cater a birthday party at my own venue?",
        "a": "Yes. The Grand Palace offers Indian venue catering across Sydney, from canapés to multi-course banquets — see the Venue Catering page to enquire."
      },
      {
        "q": "Are there halal and vegetarian birthday catering options in Sydney?",
        "a": "Yes. The Grand Palace is halal-certified with vegetarian, vegan and Jain options. For the other caterers listed, contact them directly about dietary requirements."
      }
    ]
  },
  {
    "slug": "best-mothers-day-restaurant-sydney",
    "metaTitle": {
      "from": "15 Best Mother's Day Restaurants Sydney 2026 | Top Venues for Mum",
      "to": "12 Best Mother's Day Restaurants in Sydney (2026)"
    },
    "metaDescription": {
      "from": "Find the 15 best restaurants for Mother's Day in Sydney 2026. Harbour views, fine dining, Indian banquets & more. Expert guide with booking tips for family groups.",
      "to": "The 12 best restaurants for Mother's Day in Sydney — harbour views, fine dining, Indian banquets and more, with booking tips for family groups."
    },
    "title": {
      "from": "15 Best Mother's Day Restaurants\nin Sydney ",
      "to": "12 Best Mother's Day Restaurants in Sydney"
    },
    "faq": [
      {
        "q": "When should I book a Mother's Day restaurant in Sydney?",
        "a": "Book at least 4 to 8 weeks ahead. Mother's Day is one of Sydney's busiest dining days of the year, and popular venues fill up early."
      },
      {
        "q": "What are the best restaurants for Mother's Day in Sydney?",
        "a": "This guide's 12 picks include The Grand Palace, Sailmaker at Hyatt Regency, Restaurant Hubert, Aria, The Tea Room QVB, Gunners Barracks and Yellow — from Indian banquets to harbour views and high tea."
      },
      {
        "q": "Where can a big family celebrate Mother's Day in Sydney CBD?",
        "a": "The Grand Palace at Basement, 261 George Street, Sydney CBD suits family groups, with a halal-certified menu, a deep vegetarian, vegan and Jain selection, and private dining for larger family gatherings."
      },
      {
        "q": "Is there a vegetarian or vegan Mother's Day option in Sydney?",
        "a": "Yes — Yellow in Potts Point is plant-based fine dining, and The Grand Palace has a full vegetarian, vegan and Jain menu alongside its halal dishes."
      }
    ]
  },
  {
    "slug": "best-vivid-restaurant-sydney",
    "metaTitle": {
      "from": "20 Best Vivid Restaurant in Sydney",
      "to": "19 Best Restaurants for Vivid Sydney (2026 Guide)"
    },
    "metaDescription": {
      "from": "If you're looking for a unique dining experience during Vivid Sydney, then be sure to check out The Grand Palace.",
      "to": "Where to eat during Vivid Sydney — 19 restaurants for dinner before or after the light show, including Indian fine dining in Sydney CBD. Book ahead."
    },
    "title": {
      "from": "20 Best Vivid Restaurant in Sydney",
      "to": "19 Best Restaurants for Vivid Sydney"
    },
    "faq": [
      {
        "q": "Where should I eat during Vivid Sydney?",
        "a": "This guide covers 19 restaurants near the Vivid precincts — Circular Quay, The Rocks and Barangaroo — including Opera Bar, Cafe Sydney, Aria, Lotus Barangaroo and The Glenmore Hotel, plus The Grand Palace in Sydney CBD."
      },
      {
        "q": "Is there a restaurant near Vivid Sydney away from the crowds?",
        "a": "The Grand Palace on George Street is a quieter alternative to harbourside venues — a 90-second walk from Wynyard Station, so it's easy to fit in before or after a Vivid light walk."
      },
      {
        "q": "Do I need to book restaurants during Vivid Sydney?",
        "a": "Yes — book ahead, especially on weekends. Restaurants near Circular Quay and Barangaroo fill up quickly during the festival."
      },
      {
        "q": "Are there halal and vegetarian restaurants near Vivid Sydney?",
        "a": "Yes. The Grand Palace is halal-certified with a deep vegetarian, vegan and Jain menu. For the other venues listed, contact them directly about dietary options."
      }
    ]
  },
  {
    "slug": "best-vegetarian-restaurants-in-sydney",
    "metaTitle": {
      "from": "24 Best Vegetarian Restaurants in Sydney (2026 Guide)",
      "to": "20 Best Vegetarian Restaurants in Sydney (2026 Guide)"
    },
    "title": {
      "from": "Vegetarian Restaurants in Sydney CBD — 24 Places Worth Visiting",
      "to": "Vegetarian Restaurants in Sydney CBD — 20 Places Worth Visiting"
    }
  },
  {
    "slug": "best-restaurants-sydney-lunch",
    "faq": [
      {
        "q": "What are the best restaurants for lunch in Sydney CBD?",
        "a": "This guide's picks in the CBD include The Grand Palace for Indian fine dining, Rockpool Bar & Grill for steak and seafood, Manon Brasserie and Bistro Papillon for French, The Restaurant Pendolino for Italian and Bopp & Tone at Wynyard Park."
      },
      {
        "q": "Where can I get Indian food for lunch in Sydney CBD?",
        "a": "The Grand Palace at Basement, 261 George Street, Sydney CBD serves lunch every day from 12pm to 3pm, including lunch banquets, a 90-second walk from Wynyard Station."
      },
      {
        "q": "Which Sydney lunch restaurants are good for business or group lunches?",
        "a": "The Grand Palace, Rockpool Bar & Grill, Cucina Porto, Manon Brasserie, Bopp & Tone, Bistro Papillon and The Restaurant Pendolino are all good for groups in this guide."
      },
      {
        "q": "Are there halal and vegetarian lunch options in Sydney CBD?",
        "a": "Yes. The Grand Palace is halal-certified with a full vegetarian, vegan and Jain menu. For the other restaurants listed, contact them directly about dietary requirements."
      }
    ]
  }
];

async function main() {
  console.log(APPLY ? "APPLYING changes\n" : "DRY RUN — nothing is written. Re-run with --apply to save.\n");
  let changed = 0, skipped = 0, done = 0;
  for (const u of UPDATES) {
    const row = await prisma.guide.findUnique({ where: { slug: u.slug } });
    if (!row) { console.log(`✗ ${u.slug}: not found — skipped`); skipped++; continue; }
    const data = {};
    for (const field of ["metaTitle", "metaDescription", "title"]) {
      const f = u[field];
      if (!f) continue;
      if (row[field] === f.to) { done++; continue; }
      if (row[field] !== f.from) { console.log(`- ${u.slug} ${field}: edited since the audit — skipped`); skipped++; continue; }
      data[field] = f.to;
    }
    if (u.faq) {
      const existing = Array.isArray(row.faq) ? row.faq : [];
      if (existing.length === 0) data.faq = u.faq;
      else if (JSON.stringify(existing) === JSON.stringify(u.faq)) done++;
      else { console.log(`- ${u.slug} faq: already has FAQs — skipped`); skipped++; }
    }
    const fields = Object.keys(data);
    if (!fields.length) continue;
    console.log(`✓ ${u.slug}: ${fields.map((f) => (f === "faq" ? `faq (+${u.faq.length})` : f)).join(", ")}`);
    if (APPLY) await prisma.guide.update({ where: { slug: u.slug }, data });
    changed += fields.length;
  }
  console.log(`\n${APPLY ? "Updated" : "Would update"} ${changed} field(s); ${done} already done; ${skipped} skipped.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
