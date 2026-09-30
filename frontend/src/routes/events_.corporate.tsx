import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, createContext, useContext } from "react";
import {
  Briefcase,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Check,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SimpleCaptcha, useSimpleCaptcha } from "@/components/SimpleCaptcha";
import mandala from "@/assets/mandala.png";
import { api } from "@/lib/admin-api";
import { fetchPageContent, useLiveContent, makeContent } from "@/lib/pageContent";
import { useSiteToggle } from "@/lib/useSiteToggle";
import corpImg from "@/assets/gallery/Corporate_084.jpeg";
import corp2 from "@/assets/gallery/Hero_007.jpg";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/events_/corporate")({
  loader: () => fetchPageContent("/events/corporate"),
  head: (ctx) => pageHead(ctx, "/events/corporate"),
  component: CorporatePage,
});

const PHONE_TEL = "+61280217696";
const PHONE_DISPLAY = "(02) 8021 7696";
const EMAIL = "bookings@thegrandpalace.com.au";

function CarvedBackdrop({ tone }: { tone: "gold" | "dark" }) {
  const opacity = tone === "gold" ? "opacity-[0.10]" : "opacity-[0.14]";
  return (
    <>
      <img
        src={mandala}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className={`pointer-events-none absolute -left-40 -top-32 w-[520px] ${opacity} animate-spin-slow`}
      />
      <img
        src={mandala}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className={`pointer-events-none absolute -right-40 -bottom-32 w-[520px] ${opacity} animate-spin-slow`}
        style={{ animationDirection: "reverse" }}
      />
    </>
  );
}

const corpPoints = [
  {
    title: "Boardroom Dinners",
    desc: "Impress clients with a sophisticated private dining experience — bold regional flavours in an opulent setting that does the talking for you.",
  },
  {
    title: "EOFY & Team Celebrations",
    desc: "Reward your team the right way. End-of-year parties, team milestones and staff appreciation nights done with warmth and flair.",
  },
  {
    title: "Client Entertainment",
    desc: "Turn a business dinner into a memorable event. Our attentive team and customisable menu make every client feel truly valued.",
  },
  {
    title: "Business Lunches",
    desc: "Available Friday to Sunday from 12pm–3pm. Private sections or full venue hire for daytime corporate events in the heart of Sydney CBD.",
  },
  {
    title: "Product Launches & Networking",
    desc: "A stunning backdrop for your brand moment. Canapé-style or seated — our events team works around your format and schedule.",
  },
  {
    title: "Conferences & Seminars",
    desc: "On-site AV support, fully customisable menus and dedicated coordination — everything you need for a seamless professional event.",
  },
];

const PageContentCtx = createContext<(key: string, fallback: string) => string>(
  (_, fallback) => fallback,
);

function CorporatePage() {
  const content = useLiveContent("/events/corporate", Route.useLoaderData());
  const c = makeContent(content);
  return (
    <PageContentCtx.Provider value={c}>
      <PageShell crumbs={[{ label: "Events", to: "/events" }, { label: "Corporate Functions" }]}>
        <Hero />
        <Content />
        <EnquiryForm />
      </PageShell>
    </PageContentCtx.Provider>
  );
}

function Hero() {
  const c = useContext(PageContentCtx);
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "46vh" }}
    >
      <img
        src={corpImg}
        alt="Corporate function at The Grand Palace"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,4,0,0.4) 0%, rgba(10,4,0,0.85) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-10 md:py-10 text-center w-full">
        <div className="text-[11px] tracking-[0.45em] uppercase text-saffron mb-3">
          For Business
        </div>
        <h1
          data-tgp-key="hero.title"
          className="font-display text-4xl md:text-6xl text-cream leading-tight mb-3"
        >
          {c("hero.title", "Corporate Functions")}
        </h1>
        <p
          data-tgp-key="hero.subtitle"
          className="text-cream/65 text-sm max-w-xl leading-relaxed"
        >
          {c(
            "hero.subtitle",
            "Personalised service and seamless event coordination in an elegant, sophisticated setting — where authentic Indian cuisine meets premier corporate hospitality.",
          )}
        </p>
        <div className="flex flex-nowrap gap-2 sm:gap-3 mt-6">
          <a
            href="#enquiry"
            className="btn-gold flex-1 sm:flex-initial justify-center whitespace-nowrap !text-[12px] !px-4 !py-2.5 sm:!text-sm sm:!px-8 sm:!py-3.5"
          >
            Make an Enquiry <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/book-a-table"
            className="btn-outline-gold flex-1 sm:flex-initial justify-center whitespace-nowrap !text-[12px] !px-4 !py-2.5 sm:!text-sm sm:!px-8 sm:!py-3.5"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}

function Content() {
  const c = useContext(PageContentCtx);
  return (
    <div className="relative z-0 section-cream py-16 px-6 overflow-hidden border-t border-saffron/10">
      <CarvedBackdrop tone="dark" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">
              Sydney CBD · Up to 125 Guests
            </div>
            <h2
              data-tgp-key="corp.heading"
              className="font-display text-3xl md:text-4xl text-palace mb-5"
            >
              {c("corp.heading", "Where business meets bold flavour")}
            </h2>
            <p data-tgp-key="corp.body1" className="text-palace/80 leading-relaxed mb-4">
              {c(
                "corp.body1",
                "The Grand Palace offers a sophisticated yet inviting atmosphere for corporate gatherings of all kinds. From intimate boardroom dinners to large EOFY celebrations, our team handles every detail — so you can focus on your guests.",
              )}
            </p>
            <p data-tgp-key="corp.body2" className="text-palace/80 leading-relaxed mb-7">
              {c(
                "corp.body2",
                "Our chefs craft traditional Indian recipes with bold regional flavours, using the finest ingredients. Menus are fully customisable to suit dietary requirements, themes, and budgets. Halal certified, HACCP approved.",
              )}
            </p>
            <div className="flex flex-nowrap gap-2 sm:gap-3">
              <a
                href="#enquiry"
                className="btn-gold flex-1 sm:flex-initial justify-center whitespace-nowrap !text-[12px] !px-4 !py-2.5 sm:!text-sm sm:!px-8 sm:!py-3.5"
              >
                Make an Enquiry <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn-outline-dark flex-1 sm:flex-initial justify-center whitespace-nowrap !text-[12px] !px-4 !py-2.5 sm:!text-sm sm:!px-8 sm:!py-3.5"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_50px_-18px_rgba(0,0,0,0.4)] min-h-[300px]">
            <img
              src={corp2}
              alt="Corporate dining"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-palace/40 to-transparent" />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">What We Host</div>
          <h3 className="font-display text-3xl md:text-4xl text-palace">
            Every kind of <span className="italic text-saffron">business occasion</span>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {corpPoints.map(({ title, desc }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-saffron/20 bg-white/70 p-6 hover:bg-white/90 hover:border-saffron/40 hover:shadow-[0_8px_28px_-10px_rgba(212,120,0,0.18)] transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-saffron flex-shrink-0" />
                <h4 className="font-display text-lg text-palace leading-tight">{title}</h4>
              </div>
              <p className="text-palace/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-palace px-6 py-5 grid sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: Users, label: "Capacity", value: "Up to 125 guests" },
            { icon: Clock, label: "Event Hours", value: "Mon–Sun 5pm · Fri–Sun Lunch 12pm" },
            { icon: Briefcase, label: "Packages", value: "From $45 per person" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon className="h-5 w-5 text-saffron mb-1" />
              <div className="text-[10px] uppercase tracking-widest text-gold/60">{label}</div>
              <div className="text-cream/80 text-sm font-medium">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const captcha = useSimpleCaptcha();
  const minChargeActive = useSiteToggle("min-charge-notice");

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[\d\s+()-]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.date.trim()) e.date = "Preferred date is required";
    if (!form.guests.trim()) e.guests = "Number of guests is required";
    return e;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    if (!captcha.verify()) return;
    setSaving(true);
    try {
      await api.post("/api/enquiries", {
        type: "events",
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: "Event Enquiry — Corporate Function",
        message: form.message || null,
        data: {
          eventType: "Corporate Function",
          preferredDate: form.date,
          preferredTime: form.time,
          guests: form.guests,
          budget: form.budget,
        },
      });
      setSent(true);
    } catch {
      setErrors({ submit: "Something went wrong. Please try again or call us directly." });
    } finally {
      setSaving(false);
    }
  }

  const field = (k: string) =>
    `w-full rounded-lg border px-4 py-3 text-palace placeholder:text-palace/40 focus:outline-none focus:ring-2 transition text-sm ${
      errors[k]
        ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200"
        : "border-saffron/30 bg-white/70 focus:border-saffron focus:ring-saffron/20"
    }`;
  const label = "text-xs uppercase tracking-[0.2em] text-palace/60 mb-1.5 block";

  return (
    <section
      id="enquiry"
      className="relative z-0 section-cream pt-16 pb-16 md:pt-24 md:pb-28 px-6 overflow-hidden scroll-mt-24"
    >
      <CarvedBackdrop tone="dark" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.4em] uppercase text-saffron mb-3">Event Enquiry</div>
          <h2 className="font-display text-4xl md:text-5xl text-palace">
            Let's plan something <span className="italic text-saffron">unforgettable</span>
          </h2>
        </div>

        <div className="rounded-3xl bg-white/70 backdrop-blur border border-saffron/20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] overflow-hidden grid lg:grid-cols-5">
          <div className="order-2 lg:order-1 lg:col-span-2 bg-palace text-cream p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            <CarvedBackdrop tone="gold" />
            <div className="relative z-10">
              <h3 className="font-display text-2xl text-gold">Get in touch</h3>
              <p className="text-cream/75 mt-3 text-sm leading-relaxed">
                Fill in the form and a member of our team will be in touch within{" "}
                <strong className="text-cream">24 to 48 hours</strong>.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-cream/85 hover:text-gold transition"
                >
                  <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-cream/85 hover:text-gold transition"
                >
                  <Mail className="h-4 w-4 text-gold" /> {EMAIL}
                </a>
                <div className="flex items-start gap-3 text-cream/85">
                  <MapPin className="h-4 w-4 text-gold mt-0.5" /> Basement, 261 George Street,
                  Sydney NSW 2000
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-gold/25 bg-white/[0.06] p-4 text-[12px] text-cream/70 leading-relaxed">
                <div className="text-gold font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Good to know
                </div>
                {minChargeActive && "Min charge $35pp ($25 kids 5–10) · "}No BYO · Card surcharge
                applies · 10% surcharge on public holidays &amp; special events.
              </div>
              <div className="mt-6">
                <div className="text-gold font-medium uppercase tracking-wider text-[11px] mb-3">
                  What's included
                </div>
                <ul className="space-y-2 text-[13px] text-cream/75">
                  {[
                    "Dedicated event coordinator",
                    "Customisable menu & dietary options",
                    "Private dining or full venue hire",
                    "Personalised table setup & décor",
                    "AV & background music support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-saffron mt-0.5">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-gold/20">
                <div className="text-gold font-medium uppercase tracking-wider text-[11px] mb-2">
                  Event Hours
                </div>
                <p className="text-[13px] text-cream/70">
                  Monday – Sunday
                  <br />
                  <span className="text-cream/90">5:00 pm – 11:00 pm</span>
                </p>
                <p className="text-[13px] text-cream/70 mt-1">
                  Lunch events available
                  <br />
                  <span className="text-cream/90">Friday – Sunday, 12:00 pm – 3:00 pm</span>
                </p>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="order-1 lg:order-2 lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="text-saffron text-5xl mb-4">✦</div>
              <h3 className="font-display text-2xl text-palace mb-2">
                Enquiry received — thank you!
              </h3>
              <p className="text-palace/60 text-sm max-w-sm">
                Our events team will be in touch within 24–48 hours to plan the details. For
                anything urgent, call us on (02) 8021 7696.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              noValidate
              className="order-1 lg:order-2 lg:col-span-3 p-6 sm:p-8 lg:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={label}>Your Name *</label>
                  <input
                    className={field("name")}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Sharma"
                  />
                  {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className={label}>Email *</label>
                  <input
                    type="email"
                    className={field("email")}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="jane@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className={label}>Phone *</label>
                  <input
                    className={field("phone")}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="04xx xxx xxx"
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className={label}>
                    <CalendarDays className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
                    Event Date *
                  </label>
                  <input
                    type="date"
                    className={field("date")}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                  {errors.date && <p className="text-red-500 text-[11px] mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className={label}>
                    <Clock className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
                    Event Time
                  </label>
                  <input
                    type="time"
                    className={field("time")}
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                  />
                </div>
                <div>
                  <label className={label}>
                    <Users className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
                    Approximate Guests *
                  </label>
                  <input
                    className={field("guests")}
                    value={form.guests}
                    onChange={(e) => update("guests", e.target.value)}
                    placeholder="e.g. 40"
                  />
                  {errors.guests && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.guests}</p>
                  )}
                </div>
                <div>
                  <label className={label}>Estimated Budget</label>
                  <select
                    className={field("budget")}
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                  >
                    <option value="">Select a range</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $3,000</option>
                    <option>$3,000 – $6,000</option>
                    <option>$6,000 – $10,000</option>
                    <option>$10,000+</option>
                    <option>To be discussed</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={label}>Tell us about your event</label>
                  <textarea
                    className={`${field("message")} min-h-[150px] resize-y`}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Theme, dietary requirements, décor preferences, anything special you have in mind…"
                  />
                </div>
              </div>
              <div className="mt-6">
                <SimpleCaptcha captcha={captcha} />
              </div>
              <button
                type="submit"
                disabled={saving}
                className="btn-gold w-full justify-center mt-4 disabled:opacity-60"
              >
                {saving ? (
                  "Sending…"
                ) : (
                  <>
                    Send Enquiry <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              {errors.submit && (
                <p className="text-red-500 text-[12px] text-center mt-3">{errors.submit}</p>
              )}
              <p className="text-[11px] text-palace/45 text-center mt-3">
                * Required fields. We reply within 24–48 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
