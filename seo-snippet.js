// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.groundednorthwest.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.groundednorthwest.com/","title_tag":"Backup power, generators, EV charging systems | Grounded North West","meta_description":"Backup power, generator installation, EV charging systems, panel upgrades, service upgrades, troubleshooting, repairs, and custom residential lighting solutions."},{"page_url":"https://www.groundednorthwest.com/testimonials","title_tag":"Electrical service reviews & repairs feedback | Grounded North West","meta_description":"Read and leave reviews for Grounded North West electrical troubleshooting, repairs, backup power, and generator installation services."},{"page_url":"https://www.groundednorthwest.com/home","title_tag":"Residential electrician, backup power, panel upgrades | Grounded NW","meta_description":"Full-service residential electrician in Bothell, WA specializing in backup power, generator installation, EV charging, panel upgrades, and custom lighting."},{"page_url":"https://www.groundednorthwest.com/book-online","title_tag":"Book troubleshooting, repairs, generator maintenance | Grounded NW","meta_description":"Book online for residential electrical troubleshooting, repairs, and generator maintenance with Grounded North West’s licensed, bonded, insured electrician."},{"page_url":"https://www.groundednorthwest.com/projects-7","title_tag":"Backup power & generator installation services | Grounded North West","meta_description":"Generac Authorized Dealer for whole-home backup power, generator installation, portable generator sales, hookups, diagnostics, and repairs for your home."}],"keywords":["backup power","generator installation","ev charging systems","electrical panel upgrades","residential lighting","electrical service upgrades","troubleshooting and repairs","portable generator sales","code-compliant installations","custom lighting solutions","electrician","bothell","lynwood","seattle","edmonds","mill creek","everett","electrical panel","re-wire home","new wiring"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.groundednorthwest.com/#localbusiness",
  "name": "Grounded North West LLC",
  "url": "https://www.groundednorthwest.com/",
  "description": "Grounded North West LLC is a trusted, full-service residential electrical contractor specializing in high-quality installations, upgrades, and repairs tailored to modern homes. As a Generac Authorized Dealer, the company provides expert installation and service of whole-home standby generators, portable generator solutions and custom hook-ups, panel upgrades, electrical service replacements, EV charger installations, custom indoor and outdoor lighting, and advanced troubleshooting.",
  "image": [
    "https://static.wixstatic.com/media/1975f6_8b37d1f849054cab96d875d2659486bd~mv2.jpg/v1/fill/w_345,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Generac_AuthorizedDealer_VERT_COLOR.jpg",
    "https://static.wixstatic.com/media/1975f6_3dea309b16404560a7591f366bd4981a~mv2.png/v1/crop/x_168,y_0,w_285,h_414/fill/w_92,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BBB%20Accredited.png"
  ],
  "telephone": "+1-503-890-5523",
  "email": "GroundedNW@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bothell",
    "addressRegion": "WA",
    "postalCode": "98012",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Bothell, Washington"
  },
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Tyler Sherrill",
    "jobTitle": "Electrical Administrator"
  },
  "knowsAbout": [
    "residential electrical contractor",
    "standby generator installation",
    "Generac Authorized Dealer",
    "portable generators",
    "generator hookups",
    "electrical panel upgrades",
    "electrical service upgrades",
    "EV charger installation",
    "custom indoor lighting",
    "custom outdoor lighting",
    "electrical troubleshooting",
    "electrical repairs"
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://nextdoor.com"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-503-890-5523",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Residential Electrical Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Whole-Home Generator Installation",
        "description": "Complete backup power solutions specializing in the installation of whole-home automatic generator systems, including full service, warranty support, and repairs to keep systems running reliably."
      },
      {
        "@type": "Service",
        "name": "Portable Generators and Manual Hookups",
        "description": "Portable generator sales and professional installation of manual generator hookups for residential applications, delivering dependable backup power options."
      },
      {
        "@type": "Service",
        "name": "EV Charger Installation",
        "description": "Professional installation of Level 1 and Level 2 residential EV charging systems, including chargers from brands such as Generac, Wallbox, ChargePoint, and Tesla."
      },
      {
        "@type": "Service",
        "name": "Electrical Panel Upgrades",
        "description": "Residential electrical panel upgrades to improve safety, reliability, and capacity for modern power demands."
      },
      {
        "@type": "Service",
        "name": "Electrical Service Upgrades",
        "description": "Replacement and upgrade of residential electrical services, including overhead and underground systems, to increase capacity and improve safety and reliability."
      },
      {
        "@type": "Service",
        "name": "Troubleshooting and Electrical Repairs",
        "description": "Troubleshooting, diagnostics, and repair services for residential electrical systems, addressing power loss, tripping breakers, faulty wiring, and intermittent electrical problems."
      },
      {
        "@type": "Service",
        "name": "Custom Residential Lighting",
        "description": "Custom interior and exterior lighting design and installation, including under-cabinet, accent, landscape, pathway, and architectural lighting."
      },
      {
        "@type": "Service",
        "name": "Generator Maintenance",
        "description": "Factory-authorized service, warranty work, diagnostics, and maintenance for Generac generators to keep systems running safely and efficiently."
      }
    ]
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Trouble Shooting and Repair",
      "price": "235",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Generator Maintenance",
      "price": "365",
      "priceCurrency": "USD"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
