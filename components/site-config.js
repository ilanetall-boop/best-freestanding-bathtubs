/**
 * site-config.js — Best Freestanding Bathtubs
 * Loaded synchronously in <head> to set config & CSS variables before paint.
 */
window.SITE_CONFIG = {
  name: "Best Freestanding Bathtubs",
  domain: "best-freestanding-bathtubs.com",
  tagline: "Expert reviews of soaking, acrylic & clawfoot freestanding tubs",
  logo: "images/freestanding-bathtubs-logo.svg?v=2",
  newsletterUrl: "",
  affiliateTag: "best-bath-tubs-20",
  gaId: "G-JVE9WCRHDS",
  colors: {
    primary: "#0E4D64",
    primaryLight: "#2A7A94",
    primaryDark: "#08303F",
    accent: "#C8963E",
    accentDark: "#A67826"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "articles" },
    { label: "Comparisons", href: "comparisons" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ],
  footer: {
    description: "Your trusted source for freestanding bathtub reviews, comparisons, and buying guides. From compact acrylic soaking tubs to statement cast-iron clawfoots, we help you choose the tub that fits your bathroom and budget.",
    quickLinks: [
      { label: "All Articles", href: "articles" },
      { label: "Comparisons", href: "comparisons" },
      { label: "How We Research", href: "how-we-research" },
      { label: "About Us", href: "about" }
    ],
    legal: [
      { label: "Privacy Policy", href: "privacy" },
      { label: "Terms of Service", href: "terms" },
      { label: "Affiliate Disclosure", href: "disclosure" }
    ],
    network: [
      { label: "Best Bath Rugs", href: "https://www.bestbathrugs.com" },
      { label: "Best Shower Curtains", href: "https://www.best-shower-curtains.com" },
      { label: "Best Toilet Seats", href: "https://www.besttoiletseats.com" },
      { label: "Best Bathroom Vanities", href: "https://www.bestbathroomvanities.com" },
      { label: "Best Shower Heads", href: "https://www.best-shower-heads.com" },
      { label: "Best Soap Dispensers", href: "https://www.best-soap-dispensers.com" },
      { label: "Best Bathroom Mirrors", href: "https://www.bestbathroommirrors.com" },
      { label: "Best Bath Towels", href: "https://www.best-bath-towels.com" },
      { label: "Best Towel Warmers", href: "https://www.best-towel-warmers.com" },
      { label: "Best Bathroom Faucets", href: "https://www.best-bathroom-faucets.com" },
      { label: "Best Bathroom Storage", href: "https://bestbathroomstorage.com" }
    ]
  },
  networkBanners: [
    {
      id: "best-bathroom-vanities",
      domain: "bestbathroomvanities.com",
      headline: "Shopping for a Bathroom Vanity?",
      description: "Expert reviews of the best bathroom vanities — from floating modern designs to farmhouse styles.",
      ctaText: "Browse Bathroom Vanities",
      active: true
    },
    {
      id: "best-bathroom-faucets",
      domain: "best-bathroom-faucets.com",
      headline: "Upgrading Your Bathroom Faucet?",
      description: "Expert reviews of the best bathroom faucets — including freestanding tub fillers to match your new tub.",
      ctaText: "Browse Bathroom Faucets",
      active: true
    },
    {
      id: "best-shower-heads",
      domain: "best-shower-heads.com",
      headline: "Looking for the Perfect Shower Head?",
      description: "Expert reviews of the best shower heads — from rainfall to high-pressure to filtered designs.",
      ctaText: "Browse Shower Heads",
      active: true
    }
  ]
};

// Set CSS variables immediately
(function () {
  var c = window.SITE_CONFIG.colors;
  var r = document.documentElement.style;
  r.setProperty('--primary', c.primary);
  r.setProperty('--primary-light', c.primaryLight);
  r.setProperty('--primary-dark', c.primaryDark);
  r.setProperty('--accent', c.accent);
  r.setProperty('--accent-dark', c.accentDark);

  // Reserve header space to prevent CLS (layout shift)
  var s = document.createElement('style');
  s.textContent = '#site-header{min-height:89px;background:#fff;border-bottom:1px solid #e5e5e5;position:sticky;top:0;z-index:50}';
  document.head.appendChild(s);
})();
