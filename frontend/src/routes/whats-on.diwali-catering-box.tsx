import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  MapPin,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SimpleCaptcha, useSimpleCaptcha } from "@/components/SimpleCaptcha";
import { api, SITE_URL } from "@/lib/admin-api";
import { faqSchema, pageHead } from "@/lib/seo";
import mandala from "@/assets/mandala.png";
import heroImg from "@/assets/diwali-catering-hero.jpg";
import boxImg from "@/assets/diwali-catering-box.jpg";

// Diwali 2026 festive catering box — a seasonal page with its own layout
// (modelled on the office-catering platter box). This static route takes
// precedence over the generic /whats-on/$slug template.

const PATH = "/whats-on/diwali-catering-box";
const PRICE = 99;
const ORDER_DEADLINE = "Thursday 5 November 2026";
const PHONE_TEL = "+61280217696";
const PHONE_DISPLAY = "(02) 8021 7696";
const EMAIL = "bookings@thegrandpalace.com.au";

const SAVOURIES = [
  { name: "Paneer Cigar Roll", qty: "5 pcs" },
  { name: "Palak Pakora", qty: "8–10 pcs" },
  { name: "Dal Kachori", qty: "5 pcs" },
  { name: "Samosa", qty: "5 pcs" },
];
const SWEETS = [
  { name: "Motichur Laddu", qty: "5 pcs" },
  { name: "Gulab Jamun", qty: "5 pcs" },
];

const faqs = [
  {
    q: "What is in the TGP Diwali Catering Box?",
    a: "Six festive Indian favourites: Paneer Cigar Roll (5 pieces), Palak Pakora (8–10 pieces), Dal Kachori (5 pieces), Samosa (5 pieces), Motichur Laddu (5 pieces) and Gulab Jamun (5 pieces) — 33 to 35 pieces in total.",
  },
  {
    q: "How much is the Diwali Catering Box?",
    a: "The Diwali Catering Box is $99 per box. You can order as many boxes as you need online; for large quantities, contact us for a custom order.",
  },
  {
    q: "What is the last day to order?",
    a: "Orders close on Thursday 5 November 2026.",
  },
  {
    q: "Where and when do I collect my order?",
    a: "Collection is in store only, from The Grand Palace Indian Restaurant, Basement, 261 George Street, Sydney CBD — about a 90-second walk from Wynyard Station. Choose your preferred collection day and time when you order, and we'll confirm it by email.",
  },
  {
    q: "Do you deliver, or take larger orders?",
    a: "Yes. For larger orders and delivery, please call (02) 8021 7696 or email bookings@thegrandpalace.com.au and our team will arrange it with you.",
  },
  {
    q: "How do I pay?",
    a: "You pay securely online by card when you place your order. For phone and email orders, our team will arrange payment with you directly.",
  },
  {
    q: "Can I order if I have a food allergy?",
    a: "Please contact us before ordering. The box includes dishes that contain or may contain wheat, gram flour and dairy, and our kitchen handles other common allergens, so we can't guarantee any item is allergen-free.",
  },
  {
    q: "Is the Diwali box good for office celebrations?",
    a: "Yes — the box is designed for sharing, which makes it an easy option for Diwali at the office. For office catering and larger teams, see our Office Catering page or call us.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Diwali Catering Box",
  description:
    "A festive box of six Indian savouries and sweets: Paneer Cigar Roll (5), Palak Pakora (8–10), Dal Kachori (5), Samosa (5), Motichur Laddu (5) and Gulab Jamun (5) — 33 to 35 pieces in total.",
  image: `${SITE_URL}${boxImg}`,
  brand: { "@type": "Brand", name: "The Grand Palace Indian Restaurant" },
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    validThrough: "2026-11-05T23:59:59+11:00",
    url: `${SITE_URL}${PATH}`,
    availableDeliveryMethod: "https://schema.org/OnSitePickup",
  },
};

export const Route = createFileRoute("/whats-on/diwali-catering-box")({
  head: (ctx) => pageHead(ctx, PATH, [productSchema, faqSchema(faqs)]),
  component: DiwaliCateringBoxPage,
});

function DiwaliCateringBoxPage() {
  return (
    <PageShell crumbs={[{ label: "What's On", to: "/whats-on" }, { label: "Diwali Catering Box" }]}>
      <Hero />
      <TrustBar />
      <Intro />
      <TheBox />
      <BoxDetails />
      <WhyAndHow />
      <OrderWizard />
      <FAQ />
    </PageShell>
  );
}

function Mandalas({ opacity = "opacity-[0.09]" }: { opacity?: string }) {
  return (
    <>
      <img
        src={mandala}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className={`pointer-events-none absolute -left-36 -top-28 w-[460px] ${opacity} animate-spin-slow`}
      />
      <img
        src={mandala}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className={`pointer-events-none absolute -right-36 -bottom-28 w-[460px] ${opacity} animate-spin-slow`}
        style={{ animationDirection: "reverse" }}
      />
    </>
  );
}

/** Same ornament divider as the homepage's section headings. */
function OrnamentDivider() {
  const color = "var(--color-saffron)";
  return (
    <div className="flex items-center gap-4 justify-center mt-4">
      <span
        className="h-px flex-1 max-w-[80px]"
        style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
      />
      <svg
        width="36"
        height="16"
        viewBox="0 0 36 16"
        fill="none"
        style={{ color }}
        className="shrink-0"
        aria-hidden
      >
        <ellipse
          cx="6"
          cy="8"
          rx="5"
          ry="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <circle cx="18" cy="8" r="2.5" fill="currentColor" />
        <ellipse
          cx="30"
          cy="8"
          rx="5"
          ry="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
      <span
        className="h-px flex-1 max-w-[80px]"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </div>
  );
}

/* ─── Hero (same layout as /office-catering) ─── */
function Hero() {
  return (
    <section
      className="relative flex items-start md:items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "46vh" }}
    >
      <img
        src={heroImg}
        alt="Diwali snacks and sweets from The Grand Palace Indian Restaurant"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 62%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,2,0,0.82) 0%, rgba(8,3,0,0.78) 50%, rgba(10,4,0,0.85) 100%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-4 px-6 pt-20 pb-10 md:py-10">
        <p
          className="text-[9px] tracking-[0.7em] uppercase font-bold"
          style={{ color: "#f5c14a", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
        >
          Diwali Catering · Sydney CBD
        </p>
        <h1
          className="font-display leading-none"
          style={{
            fontSize: "clamp(32px,6vw,64px)",
            color: "#fdf6e8",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          Diwali Catering Box
        </h1>
        <div className="flex items-center gap-4" style={{ width: "10rem" }}>
          <span className="h-px flex-1" style={{ background: "rgba(210,165,65,0.65)" }} />
          <span style={{ color: "rgba(210,165,65,0.8)", fontSize: "9px" }}>◆</span>
          <span className="h-px flex-1" style={{ background: "rgba(210,165,65,0.65)" }} />
        </div>
        <p
          className="text-[13px] md:text-[15px] max-w-xl"
          style={{ color: "rgba(255,235,190,0.9)" }}
        >
          Celebrate the Festival of Lights with classic Indian savouries and traditional mithai,
          packed in one festive box to share with the people you love.
        </p>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-palace border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { label: "HACCP Certified & Gold Licensed", icon: ShieldCheck },
          { label: "Basement, 261 George Street, Sydney CBD", icon: MapPin },
          { label: "4.4 Stars · 1,000+ Reviews", icon: Star },
          { label: "Orders close Thursday 5 November", icon: CalendarDays },
        ].map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <Icon className="h-4 w-4 text-saffron" />
            <span className="text-cream/70 text-[11px] leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Intro + at a glance ─── */
function Intro() {
  const facts = [
    ["Price", "$99 per box — no hidden costs"],
    ["What's inside", "4 savouries & 2 sweets, 33–35 pieces"],
    ["Order deadline", ORDER_DEADLINE],
    ["Collection", "In store only — Basement, 261 George Street, Sydney NSW 2000"],
    ["Nearest station", "Wynyard — about a 90-second walk"],
    ["Larger orders & delivery", `Call ${PHONE_DISPLAY} or email ${EMAIL}`],
    ["Payment", "Secure online card payment when you order"],
  ];
  return (
    <section className="relative z-0 section-cream py-16 md:py-20 px-6 overflow-hidden">
      <Mandalas />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-saffron leading-tight">
            Festive Snacks &amp; Sweets for Your Diwali Celebration
          </h2>
          <OrnamentDivider />
          <p className="text-palace/65 leading-relaxed mt-6">
            Diwali is about coming together — lighting the diyas, sharing sweets and filling the
            table for the people you love. This year, leave the frying and the sugar syrup to us.
            Our Diwali box brings the festive classics to your celebration, so you spend less time
            in the kitchen and more time with family and friends.
          </p>
          <p className="text-palace/65 leading-relaxed mt-3">
            Whether it's a family puja, a Diwali party at home or sweets for the office, one box has
            everyone covered.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="#order" className="btn-gold">
              Reserve Your Diwali Box <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#box" className="btn-outline-dark">
              See What's Inside
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-saffron/25 border-l-4 border-l-saffron px-6 py-5 shadow-[0_20px_50px_-35px_rgba(40,20,0,0.45)] mb-7">
          <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-saffron mb-2">
            At a glance
          </div>
          <p className="text-palace">
            The TGP Diwali Catering Box is a <b>$99</b> box of six festive Indian savouries and
            sweets — <b>33 to 35 pieces</b> in total — available to order until{" "}
            <b>{ORDER_DEADLINE}</b> for in-store collection in Sydney CBD.
          </p>
        </div>

        <h3
          id="key-facts"
          className="text-[11px] tracking-[0.2em] uppercase font-bold text-palace/55 mb-2.5 px-1"
        >
          Diwali Catering Box — key facts
        </h3>
        <table
          aria-labelledby="key-facts"
          className="w-full text-left rounded-2xl overflow-hidden border border-saffron/20 bg-white/70 text-[14.5px]"
        >
          <tbody>
            {facts.map(([k, v]) => (
              <tr key={k} className="border-b border-saffron/15 last:border-0">
                <th
                  scope="row"
                  className="w-1/3 px-5 py-3 font-semibold text-palace/70 bg-white/50 align-top"
                >
                  {k}
                </th>
                <td className="px-5 py-3 text-palace">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ─── The box: photo + menu (mirrors the platter box section) ─── */
function MenuColumn({
  tag,
  tagColor,
  count,
  items,
}: {
  tag: string;
  tagColor: string;
  count: string;
  items: { name: string; qty: string }[];
}) {
  return (
    <div className="rounded-xl border border-gold/20 bg-white/[0.06] p-5">
      <div className="flex items-center justify-between pb-2.5 mb-1 border-b border-gold/15">
        <span className={`text-[10px] uppercase tracking-widest ${tagColor}`}>{tag}</span>
        <span className="text-[11px] text-cream/50">{count}</span>
      </div>
      <ul>
        {items.map((it) => (
          <li key={it.name} className="flex items-baseline gap-2 py-2">
            <span className="text-cream text-[15px] whitespace-nowrap">{it.name}</span>
            <span
              className="flex-1 border-b border-dotted border-gold/40 -translate-y-1 min-w-4"
              aria-hidden
            />
            <span className="text-gold text-[13px] font-semibold whitespace-nowrap">{it.qty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TheBox() {
  return (
    <section
      id="box"
      className="relative z-0 overflow-hidden border-t border-saffron/10 scroll-mt-20"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[520px]">
          <img
            src={boxImg}
            alt="The Grand Palace Indian Restaurant Diwali Catering Box with samosas, kachori, pakora, cigar rolls, laddu and gulab jamun"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-palace/20" />
        </div>
        <div className="relative bg-palace px-6 md:px-12 py-12 md:py-14 overflow-hidden">
          <Mandalas opacity="opacity-[0.06]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">
              The TGP Diwali Box
            </h2>

            <div className="flex items-center justify-between gap-3 rounded-xl border border-gold/25 bg-white/[0.05] px-5 py-4 mb-4">
              <div>
                <div className="font-display text-4xl text-gold leading-none">${PRICE}</div>
                <div className="text-cream/60 text-[13px] mt-1">
                  per box · everything packed and ready to share
                </div>
              </div>
              <div className="text-right text-cream/60 text-[13px]">
                Orders close
                <br />
                <b className="text-gold">Thu 5 November</b>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <MenuColumn
                tag="Savoury"
                tagColor="text-amber-400"
                count="4 dishes"
                items={SAVOURIES}
              />
              <MenuColumn tag="Sweet" tagColor="text-pink-300" count="2 mithai" items={SWEETS} />
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#order" className="btn-gold">
                <ShoppingBag className="h-4 w-4" /> Order Online Now
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-outline-gold">
                <Phone className="h-4 w-4" /> Order by Phone
              </a>
            </div>
            <p className="text-cream/35 text-[11px] mt-4">
              In-store collection only · Collection time confirmed by email · Larger orders and
              delivery on request: {PHONE_DISPLAY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Box details ─── */
function BoxDetails() {
  const items = [
    {
      icon: ShoppingBag,
      title: "Packed & Ready to Share",
      desc: "Savouries and sweets arrive together in one box, ready to open and plate for your guests.",
    },
    {
      icon: Star,
      title: "Plenty to Go Round",
      desc: "33–35 pieces in every box — generous portions for family, friends or the office.",
    },
    {
      icon: CalendarDays,
      title: "Order by Thursday 5 November",
      desc: "Orders close on Thursday 5 November. Choose your preferred collection day when you order.",
    },
    {
      icon: MapPin,
      title: "Collect in Store",
      desc: "Pick up from our restaurant at 261 George Street, Sydney CBD — larger orders and delivery on request.",
    },
  ];
  return (
    <section className="relative z-0 section-cream py-16 md:py-20 px-6 overflow-hidden">
      <Mandalas />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-10">
          <div className="text-xs tracking-[0.4em] uppercase text-saffron/80 mb-3">Box Details</div>
          <h2 className="font-display text-3xl md:text-4xl text-palace mb-3">
            Everything you need to know about <span className="italic text-saffron">your box</span>
          </h2>
          <p className="text-palace/60 max-w-2xl mx-auto">
            Simple to order, easy to collect and generous enough to share with everyone at your
            Diwali table.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-saffron/20 border-t-4 border-t-saffron bg-white p-6 shadow-[0_20px_40px_-32px_rgba(40,20,0,0.5)]"
            >
              <span className="h-11 w-11 rounded-xl bg-saffron/15 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-saffron" />
              </span>
              <h3 className="font-display text-lg text-palace mb-2">{title}</h3>
              <p className="text-palace/65 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why TGP + how to order ─── */
function WhyAndHow() {
  const why = [
    {
      icon: ShoppingBag,
      title: "The Festive Table in One Order",
      desc: "Savouries and sweets together, so there's one less thing to organise this Diwali.",
    },
    {
      icon: ShieldCheck,
      title: "HACCP Certified & Gold Licensed",
      desc: "Prepared under externally audited food safety systems, with a Gold Catering Licence.",
    },
    {
      icon: MapPin,
      title: "Heart of Sydney CBD",
      desc: "Basement, 261 George Street, opposite Bridge Street light rail and a short walk from Wynyard Station.",
    },
    {
      icon: Star,
      title: "Trusted by Sydney Diners",
      desc: "Rated 4.4 stars from more than 1,000 reviews for authentic Indian food.",
    },
    {
      icon: CalendarDays,
      title: "Honest, Upfront Price",
      desc: "$99 per box, paid securely online when you order. No hidden costs.",
    },
    {
      icon: Phone,
      title: "Bigger Celebrations Covered",
      desc: "Need more boxes or delivery? Our team will arrange larger orders with you directly.",
    },
  ];
  const steps = [
    {
      title: "Choose Your Boxes",
      desc: "Pick how many boxes you need and your preferred collection day — before Thursday 5 November.",
    },
    {
      title: "Pay Securely Online",
      desc: "Review your order and pay by card. Your confirmation arrives by email.",
    },
    {
      title: "Collect & Celebrate",
      desc: "Pick up your box from our restaurant at 261 George Street and enjoy Diwali with your people.",
    },
  ];
  return (
    <>
      <section className="relative z-0 section-cream py-16 md:py-20 px-6 overflow-hidden border-t border-saffron/10">
        <Mandalas opacity="opacity-[0.11]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-10">
            <div className="text-xs tracking-[0.4em] uppercase text-saffron/80 mb-3">Why TGP</div>
            <h2 className="font-display text-3xl md:text-4xl text-palace leading-tight">
              Why Order Your Diwali Box from <br className="hidden md:block" />
              The Grand Palace Indian Restaurant?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {why.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-saffron/20 bg-white/65 p-6 hover:bg-white/85 hover:border-saffron/40 hover:shadow-[0_8px_28px_-10px_rgba(212,120,0,0.18)] transition"
              >
                <span className="h-10 w-10 rounded-full bg-saffron/15 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-saffron" />
                </span>
                <h3 className="font-display text-lg text-palace mb-2">{title}</h3>
                <p className="text-palace/65 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to order — dark, as originally designed */}
      <section className="relative z-0 bg-palace py-16 md:py-20 px-6 overflow-hidden">
        <Mandalas opacity="opacity-[0.05]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">How to Order</div>
            <h2 className="font-display text-3xl md:text-4xl text-cream">
              How do I order the Diwali Catering Box?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gold/20 bg-white/[0.03] p-6 text-center"
              >
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 text-palace font-bold flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <h3 className="text-cream font-semibold mb-1.5">{s.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Order wizard (Order → Review → Confirm & Pay) ─── */
type OrderForm = {
  name: string;
  email: string;
  mobile: string;
  collectionDate: string;
  collectionTime: string;
  message: string;
};
const EMPTY_ORDER: OrderForm = {
  name: "",
  email: "",
  mobile: "",
  collectionDate: "",
  collectionTime: "",
  message: "",
};
const inputCls =
  "w-full rounded-lg border border-saffron/30 bg-white/70 px-4 py-3 text-palace placeholder:text-palace/40 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition text-sm";
const labelCls = "text-[11px] uppercase tracking-[0.2em] text-palace/60 mb-1.5 block";
const SESSION_KEY = "tgp-diwali-session";

function tomorrowISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

function OrderWizard() {
  const [step, setStep] = useState<0 | 1 | 2 | "done" | "cancelled">(0);
  const [form, setForm] = useState<OrderForm>(EMPTY_ORDER);
  const [qty, setQty] = useState(1);
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [agreeError, setAgreeError] = useState("");
  const captcha = useSimpleCaptcha();
  const ref = useRef<HTMLElement>(null);
  const first = useRef(true);
  const sessionId = useRef<string | null>(null);

  // Stripe returns here with ?payment=success|cancelled (same pattern as the
  // office-catering platter box checkout).
  useEffect(() => {
    const payment = new URLSearchParams(window.location.search).get("payment");
    if (payment === "success" || payment === "cancelled") {
      setStep(payment === "success" ? "done" : "cancelled");
      if (payment === "success") sessionStorage.removeItem(SESSION_KEY);
      window.history.replaceState({}, "", window.location.pathname);
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  function getSessionId(): string {
    if (sessionId.current) return sessionId.current;
    const existing = sessionStorage.getItem(SESSION_KEY);
    const id =
      existing ||
      (typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    if (!existing) sessionStorage.setItem(SESSION_KEY, id);
    sessionId.current = id;
    return id;
  }

  // Captures the lead as it's typed (Admin → Leads → Office Catering), like
  // the platter box wizard, so no order is lost if payment isn't completed.
  useEffect(() => {
    if (typeof step !== "number") return;
    if (!form.name.trim() && !form.email.trim() && !form.mobile.trim()) return;
    const t = setTimeout(() => {
      api
        .post("/api/enquiries/track", {
          sessionId: getSessionId(),
          type: "office-catering",
          name: form.name || null,
          email: form.email || null,
          phone: form.mobile || null,
          subject: "Diwali Catering Box Order",
          message: form.message || null,
          step: (["order", "review", "confirm"] as const)[step],
          status: "in-progress",
          data: {
            product: "diwali-catering-box",
            boxes: qty,
            collectionDate: form.collectionDate,
            collectionTime: form.collectionTime,
          },
        })
        .catch(() => {});
    }, 700);
    return () => clearTimeout(t);
  }, [form, qty, step]);

  const update = (k: keyof OrderForm, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const total = qty * PRICE;

  function handleOrderSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!captcha.verify()) return;
    setStep(1);
  }

  async function handleMakePayment(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) {
      setAgreeError("Please tick the box to confirm the collection details.");
      return;
    }
    setAgreeError("");
    setStatus("submitting");
    try {
      // TODO(developer): add this endpoint in backend/src/routes/stripe.routes.js,
      // modelled on create-catering-checkout-session — Stripe Checkout for
      // `boxes` × $99 AUD, success_url ?payment=success and cancel_url
      // ?payment=cancelled back to /whats-on/diwali-catering-box, and mark the
      // tracked enquiry (sessionId) as paid in the webhook.
      const { url } = await api.post<{ url: string }>(
        "/api/stripe/create-diwali-checkout-session",
        {
          sessionId: getSessionId(),
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          boxes: qty,
          collectionDate: form.collectionDate,
          collectionTime: form.collectionTime,
          message: form.message || null,
        },
      );
      window.location.href = url;
    } catch {
      setStatus("error");
    }
  }

  const collectionDateDisplay = form.collectionDate
    ? new Date(`${form.collectionDate}T00:00:00`).toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "—";
  const summary = [
    { label: "Full Name", value: form.name || "—" },
    { label: "Email", value: form.email || "—" },
    { label: "Mobile", value: form.mobile || "—" },
    {
      label: "Collection",
      value: `${collectionDateDisplay}${form.collectionTime ? ` · ${form.collectionTime}` : ""}`,
    },
    { label: "Where", value: "In store — Basement, 261 George Street, Sydney CBD" },
    { label: "Notes", value: form.message || "—" },
  ];

  return (
    <section
      ref={ref}
      id="order"
      className="relative z-0 section-cream py-16 px-6 overflow-hidden border-t border-saffron/10 scroll-mt-24"
    >
      <Mandalas opacity="opacity-[0.11]" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-xs tracking-[0.4em] uppercase text-saffron/80 mb-3">
            Easy Online Ordering
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-palace mb-3">
            Order Your Diwali Box
          </h2>
          <p className="text-palace/55 text-sm">
            Takes 2 minutes — choose your boxes, add your details, then confirm with secure payment
            of $99 per box.
          </p>
          {typeof step === "number" && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? "w-10 bg-saffron" : i < step ? "w-5 bg-saffron/50" : "w-5 bg-saffron/20"}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-saffron/20 bg-white/70 backdrop-blur-sm p-6 sm:p-8 shadow-[0_20px_50px_-24px_rgba(70,40,0,0.35)]">
          <div key={String(step)} className="animate-fade-swap">
            {step === 0 && (
              <form onSubmit={handleOrderSubmit} className="space-y-5">
                <div className="flex items-center gap-4 rounded-2xl border border-saffron/25 bg-white p-3">
                  <img src={boxImg} alt="" className="h-16 w-16 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-palace font-semibold text-sm">Diwali Catering Box</div>
                    <div className="text-palace/50 text-[12px]">
                      6 festive favourites · ${PRICE} per box
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Remove a box"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="h-8 w-8 rounded-full border border-saffron/30 flex items-center justify-center text-saffron hover:bg-saffron/10 transition"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-6 text-center text-palace font-semibold" aria-live="polite">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Add a box"
                      onClick={() => setQty((q) => Math.min(50, q + 1))}
                      className="h-8 w-8 rounded-full border border-saffron/30 flex items-center justify-center text-saffron hover:bg-saffron/10 transition"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>
                      Full Name <span className="text-saffron">*</span>
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Mobile Number <span className="text-saffron">*</span>
                    </label>
                    <input
                      required
                      value={form.mobile}
                      onChange={(e) => update("mobile", e.target.value)}
                      placeholder="+61 4xx xxx xxx"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>
                    Email <span className="text-saffron">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="your@email.com"
                    className={inputCls}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>
                      Preferred Collection Date <span className="text-saffron">*</span>
                    </label>
                    <input
                      required
                      type="date"
                      min={tomorrowISO()}
                      value={form.collectionDate}
                      onChange={(e) => update("collectionDate", e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Preferred Collection Time <span className="text-saffron">*</span>
                    </label>
                    <select
                      required
                      value={form.collectionTime}
                      onChange={(e) => update("collectionTime", e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Select a time</option>
                      <option>Lunch — 12:00pm to 3:00pm</option>
                      <option>Dinner — 5:00pm onwards</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Notes or Allergies</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={3}
                    placeholder="Tell us about any allergies or special requests"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <div className="flex items-center justify-between border-t border-saffron/20 pt-4">
                  <span className="text-palace/60 text-sm">Total</span>
                  <span className="font-display text-2xl text-palace">${total}</span>
                </div>
                <SimpleCaptcha captcha={captcha} />
                <button type="submit" className="btn-gold w-full justify-center text-base py-4">
                  Continue to Review <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-palace/40 text-[11px]">
                  Or call us directly on {PHONE_DISPLAY} · We respond within 24 hours
                </p>
              </form>
            )}

            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl text-palace text-center mb-6">
                  Review Your Order
                </h3>
                <div className="rounded-xl border border-saffron/20 bg-white overflow-hidden mb-5">
                  <div className="flex items-center justify-between px-5 py-3 text-sm bg-saffron/[0.04]">
                    <span className="text-stone-500">Diwali Catering Box × {qty}</span>
                    <span className="text-stone-800 font-medium">${total}</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3.5 bg-palace">
                    <span className="text-cream/70 text-sm">Order Total</span>
                    <span className="font-display text-xl text-gold">${total}</span>
                  </div>
                </div>
                <div className="rounded-xl border border-saffron/20 bg-white overflow-hidden mb-5">
                  {summary.map(({ label, value }, i) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between gap-4 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-saffron/[0.04]" : ""}`}
                    >
                      <span className="text-stone-500">{label}</span>
                      <span className="text-stone-800 font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="text-sm text-palace/55 hover:text-saffron transition"
                  >
                    ← Back
                  </button>
                  <button type="button" onClick={() => setStep(2)} className="btn-gold !py-3 !px-6">
                    Continue to Payment <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl text-palace text-center mb-6">
                  Confirm &amp; Pay
                </h3>
                <div className="rounded-xl border border-saffron/20 bg-white overflow-hidden mb-5">
                  <div className="flex items-center justify-between px-5 py-3.5 bg-palace">
                    <span className="text-cream/70 text-sm">Total Payable</span>
                    <span className="font-display text-xl text-gold">${total}</span>
                  </div>
                </div>
                <form onSubmit={handleMakePayment}>
                  <label className="flex items-start gap-3 text-sm text-palace/75 mb-4">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1"
                    />
                    <span>
                      I understand this order is for in-store collection at 261 George Street,
                      Sydney CBD, and that orders close Thursday 5 November.
                    </span>
                  </label>
                  {agreeError && <p className="text-red-600 text-[12px] mb-3">{agreeError}</p>}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-gold w-full justify-center text-base py-4 disabled:opacity-60"
                  >
                    <ShoppingBag className="h-5 w-5" />{" "}
                    {status === "submitting" ? "Redirecting…" : "Make Payment"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                {status === "error" && (
                  <p className="text-center text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm mt-4 py-2.5 px-4">
                    Couldn't start checkout — please try again or call us on {PHONE_DISPLAY}.
                  </p>
                )}
                <p className="text-center text-palace/40 text-[11px] mt-3">
                  Your order is confirmed the moment payment is made · Processed securely via Stripe
                </p>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-palace/55 hover:text-saffron transition mt-5"
                >
                  ← Back
                </button>
              </div>
            )}

            {step === "done" && (
              <div className="text-center py-6">
                <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <Check className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-display text-2xl text-palace mb-2">
                  Thank you — Happy Diwali!
                </h3>
                <p className="text-palace/60 text-sm max-w-sm mx-auto leading-relaxed">
                  Payment received. A confirmation email with your order is on its way, and we'll
                  confirm your collection time by email.
                </p>
                <p className="text-palace/40 text-[11px] mt-4">
                  Questions? Call us on {PHONE_DISPLAY}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStep(0);
                    setForm(EMPTY_ORDER);
                    setQty(1);
                    setAgree(false);
                  }}
                  className="btn-outline-gold mt-6 !py-2.5 !px-6"
                >
                  Place Another Order
                </button>
              </div>
            )}

            {step === "cancelled" && (
              <div className="text-center py-6">
                <h3 className="font-display text-2xl text-palace mb-2">Payment cancelled</h3>
                <p className="text-palace/60 text-sm max-w-sm mx-auto leading-relaxed">
                  Your order wasn't completed and you haven't been charged. You can start again
                  below.
                </p>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="btn-gold mt-6 !py-2.5 !px-6"
                >
                  Start a New Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative z-0 bg-palace py-16 px-6 overflow-hidden">
      <Mandalas opacity="opacity-[0.05]" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.4em] uppercase text-saffron mb-2">Questions</div>
          <h2 className="font-display text-3xl text-cream">Diwali Catering Box FAQs</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-xl border border-gold/20 bg-white/[0.03] overflow-hidden"
            >
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-cream text-[15px]">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gold shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-cream/65 leading-relaxed">
                  {faq.a.includes("Office Catering page") ? (
                    <>
                      Yes — the box is designed for sharing, which makes it an easy option for
                      Diwali at the office. For office catering and larger teams, see our{" "}
                      <Link to="/office-catering" className="text-gold underline">
                        Office Catering
                      </Link>{" "}
                      page or call us.
                    </>
                  ) : (
                    faq.a
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-cream/35 text-[12px] mt-6">
          Information checked by the TGP team · Last updated September 2026
        </p>
      </div>
    </section>
  );
}
