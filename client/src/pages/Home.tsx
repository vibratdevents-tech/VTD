/**
 * VIBRA TD EVENTS — Landing Page
 * Design: "Vibrant Celebration Grid" — Contemporary Caribbean event branding
 * Colors: Teal (#2BBCB0), Gold (#F5A623), Magenta (#E91E8C), Navy (#1A2332)
 * Typography: Raleway ExtraBold (display) + Lato (body) + Dancing Script (accents)
 * Sections: Navbar, Hero, Brand Story, Services, Featured Event, Social Proof, Contact, Footer
 */

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Menu, X, Phone, Mail, MapPin, Facebook, Youtube,
  Users, Dumbbell, Smile, Heart, Sparkles, ChevronDown,
  Star, Quote, ArrowRight, Instagram
} from "lucide-react";

// ── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663665699238/WjhaBkRK7F8ozzSxCUztEu/vibra_hero_banner-HmdZbRkTKMYVKc8N7yVemz.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663665699238/WjhaBkRK7F8ozzSxCUztEu/vibra_team_building-nUo3hBYFQa7joZU3EoqSE2.webp";
const WELLNESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663665699238/WjhaBkRK7F8ozzSxCUztEu/vibra_wellness-Z39xKgSnnUmJFkysYvxg96.webp";
const KIDS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663665699238/WjhaBkRK7F8ozzSxCUztEu/vibra_kids_event-HfzePD8BcB28XMwCW7sdps.webp";
const DECOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663665699238/WjhaBkRK7F8ozzSxCUztEu/vibra_event_decor-XY4nwXz9ACVDaDLK8eMRKr.webp";
const LOGO_URL = "/manus-storage/vibra_td_logo_93cae3f1.webp";
const BALLOON_VIDEO = "/manus-storage/BalloonworkatDragon-Night_e6509da8.mp4";
const BALLOON_THUMBNAIL = "/manus-storage/balloon_thumbnail_e74d75fc.jpg";
const CARITAS_DECOR = "/manus-storage/Caritasdecor_ca8447e2.jpeg";
const FITFEST_VIDEO = "/manus-storage/Videos-FitfestSummary_74b82aa4.mp4";
const FITFEST_THUMBNAIL = "/manus-storage/fitfest_thumbnail_88d6f57d.jpg";
const TREASURE_HUNT = "/manus-storage/TreasureHuntWinnerspicture_a093d793.jpeg";

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    id: "01",
    title: "Team Buildings",
    tagline: "Connect & Conquer Together",
    description:
      "Dynamic corporate team building experiences designed to strengthen bonds, boost morale, and ignite collaboration. From beach challenges to creative workshops — we craft activities that bring your team closer.",
    image: TEAM_IMG,
    overlayClass: "img-overlay-teal",
    icon: <Users size={28} />,
    highlights: ["Beach Olympics", "Corporate Challenges", "Leadership Games", "Group Activities"],
  },
  {
    id: "02",
    title: "Sports & Leisure",
    tagline: "Play Hard, Live Well",
    description:
      "Exciting sports events and leisure activities tailored for all fitness levels. Whether it's a competitive tournament or a fun day out, we bring the energy and the equipment.",
    image: TEAM_IMG,
    overlayClass: "img-overlay-gold",
    icon: <Dumbbell size={28} />,
    highlights: ["Beach Sports", "Tournaments", "Fun Relays", "Water Activities"],
  },
  {
    id: "03",
    title: "Kids Entertainment",
    tagline: "Magic Moments for Little Ones",
    description:
      "Colourful, safe, and unforgettable entertainment for children of all ages. Face painting, balloon art, dance games, crafts — we make every child's celebration extraordinary.",
    image: KIDS_IMG,
    overlayClass: "img-overlay-magenta",
    icon: <Smile size={28} />,
    highlights: ["Face Painting", "Balloon Art", "Dance Games", "Arts & Crafts"],
  },
  {
    id: "04",
    title: "Wellness Programs",
    tagline: "Ignite Your Passion, Transform Your Life",
    description:
      "Holistic wellness experiences including sunrise yoga, Zumba, meditation, and fitness sessions. Our Aura Vibes programme runs year-round at Ernest Florent, Bel Air — open to all ages.",
    image: WELLNESS_IMG,
    overlayClass: "img-overlay-teal",
    icon: <Heart size={28} />,
    highlights: ["Sunrise Yoga", "Zumba & Dance", "Meditation", "Full Body Workout"],
  },
];

// Note: Event Décor & Set-ups removed as we currently focus on smaller events due to equipment limitations

const portfolio = [
  {
    id: "01",
    title: "Balloon Decoration Setup",
    category: "Event Décor",
    description: "Grand opening balloon arrangement at Dragon Night venue",
    type: "video",
    media: BALLOON_VIDEO,
    thumbnail: BALLOON_THUMBNAIL,
  },
  {
    id: "02",
    title: "Caritas 60th Anniversary Gala",
    category: "Event Décor",
    description: "Elegant anniversary celebration with floral arrangements, lighting design, and table setup",
    type: "image",
    media: CARITAS_DECOR,
    thumbnail: CARITAS_DECOR,
  },
  {
    id: "03",
    title: "Vibra Fit Fest Highlights",
    category: "Wellness Programme",
    description: "Beach wellness morning featuring sunrise yoga, Zumba, and full body workout at Belle Mare Plage",
    type: "video",
    media: FITFEST_VIDEO,
    thumbnail: FITFEST_THUMBNAIL,
  },
  {
    id: "04",
    title: "Treasure Hunt Team Building Challenge",
    category: "Team Building",
    description: "Corporate team building treasure hunt competition with winning team celebration",
    type: "image",
    media: TREASURE_HUNT,
    thumbnail: TREASURE_HUNT,
  },
];

const testimonials = [
  {
    name: "Leena Leen",
    role: "Event Attendee",
    text: "The Vibra Fit Fest was absolutely incredible! The sunrise yoga on the beach, the Zumba warm-up, and the whole vibe was just perfect. Vibra TD Events really knows how to create an unforgettable morning.",
    stars: 5,
    avatar: "LL",
  },
  {
    name: "Marie-Claire D.",
    role: "Corporate Client",
    text: "We hired Vibra TD Events for our company team building day and it exceeded all expectations. The activities were well-organised, fun, and our whole team is still talking about it weeks later!",
    stars: 5,
    avatar: "MC",
  },
  {
    name: "Raj Gobin",
    role: "Wedding Client",
    text: "The décor for our 50th anniversary was beyond beautiful. Every detail was thoughtfully arranged — the floral arch, the lighting, the table settings. Vibra TD Events turned our vision into reality.",
    stars: 5,
    avatar: "RG",
  },
  {
    name: "Priya Ramkhelawon",
    role: "Kids Party Host",
    text: "My daughter's birthday party was a dream come true! The kids entertainment team was so energetic and creative. Every child left with a huge smile. We will definitely book again!",
    stars: 5,
    avatar: "PR",
  },
];

const stats = [
  { value: "Diverse", label: "Event Types" },
  { value: "All Ages", label: "Activities For" },
  { value: "Mauritius", label: "Island-Wide Service" },
  { value: "Passionate", label: "Team" },
];

// ── Scroll reveal hook ────────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Services", "Events", "Testimonials", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A2332]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="Vibra TD Events" className="w-10 h-10 rounded-full ring-2 ring-[#2BBCB0]/60" />
          <div>
            <span className="font-black text-white text-lg leading-none block" style={{ fontFamily: "Raleway, sans-serif" }}>
              Vibra TD Events
            </span>
            <span className="text-[#F5A623] text-xs font-light tracking-widest" style={{ fontFamily: "Lato, sans-serif" }}>
              MAURITIUS
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="nav-link text-white/80 hover:text-white text-sm font-semibold tracking-wide transition-colors"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              {l}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("Contact")}
            className="btn-press bg-[#2BBCB0] hover:bg-[#1A8C85] text-white font-bold px-6 py-2 rounded-full text-sm transition-all"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1A2332] border-t border-white/10 py-4">
          <div className="container flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-white/80 hover:text-[#2BBCB0] text-left font-semibold py-2 transition-colors"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {l}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("Contact")}
              className="btn-press bg-[#2BBCB0] hover:bg-[#1A8C85] text-white font-bold rounded-full mt-2"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden clip-diagonal-bottom" style={{ background: "#1A2332" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Vibra TD Events" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 via-[#1A2332]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-28 pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2BBCB0]/20 border border-[#2BBCB0]/40 rounded-full px-4 py-1.5 mb-6 fade-up">
            <span className="w-2 h-2 rounded-full bg-[#2BBCB0] animate-pulse" />
            <span className="text-[#2BBCB0] text-sm font-semibold tracking-wide" style={{ fontFamily: "Lato, sans-serif" }}>
              Based in Trou d'Eau Douce, Mauritius
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-4 fade-up fade-up-delay-1"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            We Turn
            <br />
            <span className="text-[#F5A623]">Moments</span>
            <br />
            Into{" "}
            <span
              className="accent-script text-[#2BBCB0]"
              style={{ fontSize: "1.1em", fontStyle: "italic" }}
            >
              Memories
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-lg fade-up fade-up-delay-2"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Specialists in Team Buildings, Sports & Leisure, Kids Entertainment, Wellness Programs, and stunning Event Décor — serving all of Mauritius.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-up fade-up-delay-3">
            <Button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-press bg-[#2BBCB0] hover:bg-[#1A8C85] text-white font-bold px-8 py-3 rounded-full text-base shadow-lg shadow-[#2BBCB0]/30 transition-all"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Explore Services
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="btn-press border-white/40 text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full text-base transition-all"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Get a Quote
            </Button>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 mt-12 fade-up fade-up-delay-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-[#F5A623]" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {s.value}
                </div>
                <div className="text-white/60 text-xs tracking-wide" style={{ fontFamily: "Lato, sans-serif" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <ChevronDown size={20} className="text-white" />
      </div>
    </section>
  );
}

// ── Brand Story Section ───────────────────────────────────────────────────────
function BrandStory() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className={visible ? "fade-up" : "opacity-0"}>
            <span
              className="accent-script text-[#2BBCB0] text-2xl block mb-2"
            >
              Our Story
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-[#1A2332] leading-tight mb-6"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Every Event Should Be{" "}
              <span className="text-[#E91E8C]">More Than</span> a Gathering
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6" style={{ fontFamily: "Lato, sans-serif" }}>
              At Vibra TD Events, we believe every event should be more than just a gathering — it should be a <strong>vibe</strong>. Born in the heart of Trou d'Eau Douce, we design, decorate, and deliver experiences that connect people, inspire creativity, and bring communities closer together.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: "Lato, sans-serif" }}>
              From vibrant corporate team buildings on Mauritius's stunning beaches to intimate celebrations and energising wellness mornings, our passion is turning ideas into powerful memories that last a lifetime.
            </p>
            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {["Island-Wide Service", "All Ages Welcome", "Custom Experiences", "Passionate Team"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#2BBCB0]/10 text-[#1A8C85] border border-[#2BBCB0]/30 rounded-full px-4 py-1.5 text-sm font-semibold"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className={`relative ${visible ? "fade-up fade-up-delay-2" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                <img src={WELLNESS_IMG} alt="Wellness" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img src={KIDS_IMG} alt="Kids" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img src={DECOR_IMG} alt="Decor" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services Section ──────────────────────────────────────────────────────────
function Services() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="services" className="py-24 bg-[#F8F9FA] clip-diagonal-top clip-diagonal-bottom" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 ${visible ? "fade-up" : "opacity-0"}`}>
          <span className="accent-script text-[#2BBCB0] text-2xl block mb-2">What We Do</span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1A2332] mb-4"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Our <span className="text-[#2BBCB0]">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "Lato, sans-serif" }}>
            From corporate team buildings to magical kids' parties — we specialise in creating experiences that leave lasting impressions.
          </p>
        </div>

        {/* Cards grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`service-card relative rounded-2xl overflow-hidden shadow-md group cursor-default ${
                i === 0 ? "lg:row-span-2" : ""
              } ${visible ? `fade-up fade-up-delay-${Math.min(i + 1, 5)}` : "opacity-0"}`}
              style={{ minHeight: i === 0 ? "480px" : "280px" }}
            >
              {/* Background image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 ${s.overlayClass} transition-opacity duration-300`} />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/60 font-black text-xs tracking-widest" style={{ fontFamily: "Raleway, sans-serif" }}>
                    {s.id}
                  </span>
                  <span className="text-white/40 text-xs">—</span>
                  <span className="text-white/60 text-xs font-medium">{s.tagline}</span>
                </div>
                <h3
                  className="text-white text-2xl font-black mb-2 leading-tight"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3" style={{ fontFamily: "Lato, sans-serif" }}>
                  {s.description}
                </p>
                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-white/20 text-white text-xs rounded-full px-3 py-1 backdrop-blur-sm"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              {/* Icon badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
                {s.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Event Section ────────────────────────────────────────────────────
function FeaturedEvent() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="events" className="py-24 bg-[#1A2332]" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 ${visible ? "fade-up" : "opacity-0"}`}>
          <span className="accent-script text-[#F5A623] text-2xl block mb-2">Featured Programme</span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            The <span className="text-[#E91E8C]">Aura Vibes</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto" style={{ fontFamily: "Lato, sans-serif" }}>
            Ignite Your Passion, Transform Your Life
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center ${visible ? "fade-up fade-up-delay-2" : "opacity-0"}`}>
          {/* Poster */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#E91E8C]/20">
              <img src={WELLNESS_IMG} alt="The Aura Vibes" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/80 via-transparent to-transparent rounded-3xl" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#E91E8C] rounded-2xl p-5 shadow-xl max-w-[200px]">
              <div className="text-white font-black text-lg leading-tight" style={{ fontFamily: "Raleway, sans-serif" }}>
                Register Now
              </div>
              <div className="text-white/80 text-xs mt-1" style={{ fontFamily: "Lato, sans-serif" }}>
                Minimum participants required
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="space-y-5">
              {[
                { icon: <Dumbbell size={20} />, title: "Fitness Work Out", desc: "Full body workout sessions for all fitness levels" },
                { icon: <Heart size={20} />, title: "Zumba & Yoga", desc: "Energising Zumba warm-ups and calming yoga & meditation" },
                { icon: <Sparkles size={20} />, title: "Dance Choreo", desc: "Choreography classes for performances and events" },
                { icon: <Smile size={20} />, title: "Costumes & Crafting", desc: "Creative costume design and accessories crafting workshops" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E91E8C]/20 text-[#E91E8C] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold" style={{ fontFamily: "Raleway, sans-serif" }}>{item.title}</div>
                    <div className="text-white/60 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info box */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-white/70 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                <MapPin size={16} className="text-[#2BBCB0] flex-shrink-0" />
                <span>Ernest Florent, Bel Air, Mauritius</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                <Phone size={16} className="text-[#F5A623] flex-shrink-0" />
                <span>54298823 / 59293352</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                <Sparkles size={16} className="text-[#E91E8C] flex-shrink-0" />
                <span>Opening Hours: 9am – 5pm</span>
              </div>
            </div>

            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-press mt-6 bg-[#E91E8C] hover:bg-[#C0177A] text-white font-bold px-8 py-3 rounded-full text-base shadow-lg shadow-[#E91E8C]/30 transition-all"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Join the Aura Vibes
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Vibra Fit Fest banner */}
        <div className={`mt-20 rounded-3xl overflow-hidden relative ${visible ? "fade-up fade-up-delay-3" : "opacity-0"}`}>
          <img src={WELLNESS_IMG} alt="Vibra Fit Fest" className="w-full h-64 md:h-80 object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 via-[#1A2332]/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-lg">
                <span className="accent-script text-[#F5A623] text-xl block mb-2">Upcoming Event</span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Vibra Fit Fest
                </h3>
                <p className="text-white/70 mb-4" style={{ fontFamily: "Lato, sans-serif" }}>
                  Beach wellness mornings at Belle Mare Plage — Sunrise Yoga, Zumba, Full Body Workout, Detox Juice & Protein Bar. Register to join! We'll confirm the event once we have enough participants.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#F5A623] text-[#1A2332] rounded-full px-4 py-1.5 text-sm font-bold" style={{ fontFamily: "Raleway, sans-serif" }}>
                    @ Belle Mare Plage
                  </span>
                  <span className="bg-white/20 text-white rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                    07:30 – 11:30
                  </span>
                  <span className="bg-[#E91E8C]/30 text-[#E91E8C] border border-[#E91E8C]/40 rounded-full px-4 py-1.5 text-sm font-semibold" style={{ fontFamily: "Lato, sans-serif" }}>
                    Minimum Participants Required
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Portfolio Gallery Section ──────────────────────────────────────────────────────
function Portfolio() {
  const { ref, visible } = useScrollReveal();
  const [selectedItem, setSelectedItem] = useState<typeof portfolio[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container">
        <div className={`text-center mb-16 ${visible ? "fade-up" : "opacity-0"}`}>
          <span className="accent-script text-[#2BBCB0] text-2xl block mb-2">Our Work</span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#1A2332] mb-4"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Past Events & <span className="text-[#F5A623]">Portfolio</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "Lato, sans-serif" }}>
            See the magic we create at every event. From balloon decorations to unforgettable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item, i) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                visible ? `fade-up fade-up-delay-${Math.min(i + 1, 3)}` : "opacity-0"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.media}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      poster={item.thumbnail}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-8 border-l-transparent border-r-0 border-t-5 border-t-transparent border-b-5 border-b-transparent" style={{ borderLeft: "8px solid #E91E8C", borderTop: "5px solid transparent", borderBottom: "5px solid transparent" }} />
                      </div>
                    </div>
                  </>
                ) : (
                  <img src={item.media} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                )}
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/80 to-transparent p-6">
                <span className="inline-block bg-[#F5A623] text-[#1A2332] text-xs font-bold px-3 py-1 rounded-full mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {item.category}
                </span>
                <h3 className="text-white font-black text-lg mb-1" style={{ fontFamily: "Raleway, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.media}
                  controls
                  autoPlay
                  className="w-full rounded-2xl"
                />
              ) : (
                <img src={selectedItem.media} alt={selectedItem.title} className="w-full rounded-2xl" />
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Contact Section ───────────────────────────────────────────────────────────
function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#1A2332] clip-diagonal-top" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — info */}
          <div className={visible ? "fade-up" : "opacity-0"}>
            <span className="accent-script text-[#F5A623] text-2xl block mb-2">Get In Touch</span>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Let's Make Your Next Event <span className="text-[#2BBCB0]">Unforgettable</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10" style={{ fontFamily: "Lato, sans-serif" }}>
              Whether you're planning a corporate team building, a birthday celebration, or a wellness morning — we'd love to hear from you. Tell us your vision and we'll make it a vibe.
            </p>

            <div className="space-y-5">
              <a
                href="tel:54298823"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2BBCB0]/20 text-[#2BBCB0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2BBCB0]/30 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white/40 text-xs tracking-wide mb-0.5" style={{ fontFamily: "Lato, sans-serif" }}>CALL US</div>
                  <div className="text-white font-semibold" style={{ fontFamily: "Raleway, sans-serif" }}>54298823 / 59293352</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white/40 text-xs tracking-wide mb-0.5" style={{ fontFamily: "Lato, sans-serif" }}>LOCATION</div>
                  <div className="text-white font-semibold" style={{ fontFamily: "Raleway, sans-serif" }}>Trou d'Eau Douce, Mauritius</div>
                  <div className="text-white/50 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>Serving all of Mauritius</div>
                </div>
              </div>

              <a
                href="https://www.facebook.com/p/Vibra-TD-Events-61578143063200/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E91E8C]/20 text-[#E91E8C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E91E8C]/30 transition-colors">
                  <Facebook size={20} />
                </div>
                <div>
                  <div className="text-white/40 text-xs tracking-wide mb-0.5" style={{ fontFamily: "Lato, sans-serif" }}>FACEBOOK</div>
                  <div className="text-white font-semibold" style={{ fontFamily: "Raleway, sans-serif" }}>Vibra TD Events</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={visible ? "fade-up fade-up-delay-2" : "opacity-0"}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-xs tracking-wide block mb-1.5" style={{ fontFamily: "Lato, sans-serif" }}>
                    YOUR NAME *
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jean-Paul"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-[#2BBCB0] rounded-xl"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs tracking-wide block mb-1.5" style={{ fontFamily: "Lato, sans-serif" }}>
                    PHONE
                  </label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+230 5..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-[#2BBCB0] rounded-xl"
                    style={{ fontFamily: "Lato, sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-xs tracking-wide block mb-1.5" style={{ fontFamily: "Lato, sans-serif" }}>
                  EMAIL ADDRESS *
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-[#2BBCB0] rounded-xl"
                  style={{ fontFamily: "Lato, sans-serif" }}
                />
              </div>

              <div>
                <label className="text-white/60 text-xs tracking-wide block mb-1.5" style={{ fontFamily: "Lato, sans-serif" }}>
                  SERVICE INTERESTED IN
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#2BBCB0] transition-colors"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  <option value="" className="bg-[#1A2332]">Select a service...</option>
                  <option value="team-building" className="bg-[#1A2332]">Team Buildings</option>
                  <option value="sports" className="bg-[#1A2332]">Sports & Leisure</option>
                  <option value="kids" className="bg-[#1A2332]">Kids Entertainment</option>
                  <option value="wellness" className="bg-[#1A2332]">Wellness Programs</option>
                  <option value="decor" className="bg-[#1A2332]">Event Décor & Set-ups</option>
                  <option value="aura-vibes" className="bg-[#1A2332]">The Aura Vibes</option>
                  <option value="other" className="bg-[#1A2332]">Other</option>
                </select>
              </div>

              <div>
                <label className="text-white/60 text-xs tracking-wide block mb-1.5" style={{ fontFamily: "Lato, sans-serif" }}>
                  YOUR MESSAGE *
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your event — date, number of guests, vision..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-[#2BBCB0] rounded-xl resize-none"
                  style={{ fontFamily: "Lato, sans-serif" }}
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="btn-press w-full bg-[#2BBCB0] hover:bg-[#1A8C85] text-white font-bold py-3 rounded-full text-base shadow-lg shadow-[#2BBCB0]/30 transition-all disabled:opacity-60"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {sending ? "Sending..." : "Send Message"}
                {!sending && <ArrowRight size={18} className="ml-2" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#111827] py-12 border-t border-white/5">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_URL} alt="Vibra TD Events" className="w-10 h-10 rounded-full" />
              <div>
                <span className="font-black text-white text-base block" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Vibra TD Events
                </span>
                <span className="text-[#F5A623] text-xs tracking-widest" style={{ fontFamily: "Lato, sans-serif" }}>
                  MAURITIUS
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "Lato, sans-serif" }}>
              We design, decorate, and deliver experiences that connect people, inspire creativity, and bring communities closer together.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wider" style={{ fontFamily: "Raleway, sans-serif" }}>
              OUR SERVICES
            </h4>
            <ul className="space-y-2">
              {["Team Buildings", "Sports & Leisure", "Kids Entertainment", "Wellness Programs"].map((s) => (
                <li key={s}>
                  <span className="text-white/40 text-sm hover:text-[#2BBCB0] transition-colors cursor-default" style={{ fontFamily: "Lato, sans-serif" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wider" style={{ fontFamily: "Raleway, sans-serif" }}>
              CONTACT
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/40 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                <Phone size={14} className="text-[#2BBCB0]" />
                54298823 / 59293352
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm" style={{ fontFamily: "Lato, sans-serif" }}>
                <MapPin size={14} className="text-[#F5A623]" />
                Trou d'Eau Douce, Mauritius
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.facebook.com/p/Vibra-TD-Events-61578143063200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#1877F2] hover:text-white transition-all"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@VibraTDEventsMauritius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF0000] hover:text-white transition-all"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs" style={{ fontFamily: "Lato, sans-serif" }}>
            © 2026 Vibra TD Events. All rights reserved. Trou d'Eau Douce, Mauritius.
          </p>
          <p className="text-white/20 text-xs accent-script">
            We turn moments into memories
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandStory />
      <Services />
      <FeaturedEvent />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
