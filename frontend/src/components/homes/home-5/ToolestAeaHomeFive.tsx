"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import toolset_icon_1 from "@/assets/img/shape/toolest-icon-1.png";
import toolset_icon_2 from "@/assets/img/shape/toolest-icon-2.png";
import toolset_icon_3 from "@/assets/img/shape/toolest-icon-3.png";
import toolset_icon_4 from "@/assets/img/shape/toolest-icon-4.png";

import toolset_shape_1 from "@/assets/img/shape/toolest-icon-shape-1.png";
import toolset_shape_2 from "@/assets/img/shape/toolest-icon-shape-2.png";
import toolset_shape_3 from "@/assets/img/shape/toolest-icon-shape-3.png";
import toolset_shape_4 from "@/assets/img/shape/toolest-icon-shape-4.png";

interface TabItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  iconImg: StaticImageData;
  shapeImg: StaticImageData;
  dotColor: string;
}

const tabList: TabItem[] = [
  {
    id: 1,
    tag: "Realtime Analytics",
    title: "Store Performance Overview",
    desc: "Track real-time revenue, incoming orders, and customer insights — fully branded for your clients with zero setup delay.",
    iconImg: toolset_icon_1,
    shapeImg: toolset_shape_1,
    dotColor: "#FC8A59",
  },
  {
    id: 2,
    tag: "White-Label Studio",
    title: "Brand Manager Dashboard",
    desc: "Seamlessly bind custom domains, upload high-res logos, configure timezone, and set up multi-currency localization in clicks.",
    iconImg: toolset_icon_2,
    shapeImg: toolset_shape_2,
    dotColor: "#0CC8B3",
  },
  {
    id: 3,
    tag: "Visual Designer",
    title: "Fully Customizable Themes",
    desc: "Personalize storefront color palettes, modular hero banners, navigation headers, and checkout workflows with live preview.",
    iconImg: toolset_icon_3,
    shapeImg: toolset_shape_3,
    dotColor: "#FF5EA7",
  },
  {
    id: 4,
    tag: "Plug & Play APIs",
    title: "Ready-to-Use API Integrations",
    desc: "Connect Razorpay, Stripe, Shiprocket & WhatsApp Business instantly. No technical steps — enter API keys and you're live.",
    iconImg: toolset_icon_4,
    shapeImg: toolset_shape_4,
    dotColor: "#6A90F9",
  },
];

interface ThemePalette {
  name: string;
  hex: string;
  gradient: string;
}

const themePalettes: ThemePalette[] = [
  {
    name: "Royal Blue",
    hex: "#0062f5",
    gradient: "linear-gradient(135deg, #0062f5 0%, #1e40af 100%)",
  },
  {
    name: "Emerald Luxury",
    hex: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
  },
  {
    name: "Sunset Coral",
    hex: "#e11d48",
    gradient: "linear-gradient(135deg, #e11d48 0%, #9f1239 100%)",
  },
  {
    name: "Neon Violet",
    hex: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
  },
];

const currencies = [
  { code: "INR", symbol: "₹", label: "INR (India)", price: "₹2,999" },
  { code: "USD", symbol: "$", label: "USD (Global)", price: "$39.99" },
  { code: "EUR", symbol: "€", label: "EUR (Europe)", price: "€36.50" },
  { code: "AED", symbol: "د.إ", label: "AED (UAE)", price: "145 AED" },
];

const ToolestAeaHomeFive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("INR");
  const [selectedTheme, setSelectedTheme] = useState<ThemePalette>(themePalettes[0]);

  const currentPrice =
    currencies.find((c) => c.code === selectedCurrency)?.price || "₹2,999";

  return (
    <section className="ecommerce-solution-section" id="ecommerce-suite">
      {/* Decorative ambient auras */}
      <div className="solution-ambient-glow-1"></div>
      <div className="solution-ambient-glow-2"></div>

      <div className="container">
        {/* Section Header */}
        <div className="solution-header-wrap">
          <div className="solution-status-badge">
            <span className="badge-pulse-dot"></span>
            <span className="badge-label">All-in-One E-Commerce Suite</span>
          </div>
          <h2 className="solution-main-title">
            All-in-One E-Commerce Solution,{" "}
            <span className="gradient-highlight">Engineered for Rapid Growth.</span>
          </h2>
          <p className="solution-main-desc">
            We offer a complete E-commerce solution that includes a custom website,
            admin panel, and high-performance dashboard built for modern retail.
          </p>
        </div>

        {/* Main Interactive Showcase Row */}
        <div className="solution-showcase-row">
          {/* Left Console: 3D Layered Rich Interactive Software Preview */}
          <div className="solution-display-console">
            {/* Window Header */}
            <div className="console-header-bar">
              <div className="console-breadcrumbs">
                <div className="console-dot-group">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="console-path-badge">
                  <i className="fa-solid fa-server"></i>
                  {activeTab === 1 && "vastora-cloud / live-analytics.json"}
                  {activeTab === 2 && "brand-studio / custom-domain-ssl"}
                  {activeTab === 3 && "visual-studio / dynamic-theme-preview"}
                  {activeTab === 4 && "integrations-hub / live-webhooks"}
                </div>
              </div>
              <span className="console-status-pill">
                <span className="live-dot"></span>
                {activeTab === 1 && "Live Data Streaming"}
                {activeTab === 2 && "SSL 256-Bit Active"}
                {activeTab === 3 && "Hot Reload Ready"}
                {activeTab === 4 && "4/4 Gateways Connected"}
              </span>
            </div>

            {/* TAB 1: STORE PERFORMANCE CONSOLE (Rich Vibrant Pods + SVG Donut + Weekly Bars) */}
            {activeTab === 1 && (
              <div className="console-inner-view store-performance-grid">
                {/* 3 Vibrant Brand Metric Pods matching original screenshot colors */}
                <div className="vibrant-metrics-row">
                  {/* Teal Card: Today Orders */}
                  <div className="vibrant-metric-card card-teal">
                    <div className="metric-icon-wrap">
                      <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div className="metric-card-label">Today Orders</div>
                    <div className="metric-card-val">₹48,250.00</div>
                    <div className="metric-card-breakdown">
                      Cash: ₹18k &bull; Card: ₹20k &bull; UPI: ₹10.2k
                    </div>
                  </div>

                  {/* Blue Card: This Month */}
                  <div className="vibrant-metric-card card-blue">
                    <div className="metric-icon-wrap">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="metric-card-label">This Month</div>
                    <div className="metric-card-val">₹8,45,200.00</div>
                    <div className="metric-card-breakdown">
                      +38.4% growth vs previous month
                    </div>
                  </div>

                  {/* Magenta Card: All-Time Sales */}
                  <div className="vibrant-metric-card card-magenta">
                    <div className="metric-icon-wrap">
                      <i className="fa-solid fa-credit-card"></i>
                    </div>
                    <div className="metric-card-label">All-Time Sales</div>
                    <div className="metric-card-val">₹48,92,144.20</div>
                    <div className="metric-card-breakdown">
                      14,820 orders fulfilled successfully
                    </div>
                  </div>
                </div>

                {/* Middle Charts Split Row: Donut Chart + Weekly Sales Bars */}
                <div className="charts-split-row">
                  {/* Donut Chart: Best Selling Categories */}
                  <div className="chart-box-donut">
                    <div className="chart-box-header">
                      <span className="chart-heading">Best Selling Products</span>
                      <span className="donut-badge">Real-Time</span>
                    </div>

                    <div className="donut-visual-container">
                      <svg width="115" height="115" viewBox="0 0 120 120">
                        {/* Background track */}
                        <circle
                          cx="60"
                          cy="60"
                          r="46"
                          stroke="#e2e8f0"
                          strokeWidth="14"
                          fill="transparent"
                        />
                        {/* Segment 1: Fashion (48%) Blue */}
                        <circle
                          cx="60"
                          cy="60"
                          r="46"
                          stroke="#0062f5"
                          strokeWidth="14"
                          fill="transparent"
                          strokeDasharray="289"
                          strokeDashoffset="140"
                          strokeLinecap="round"
                        />
                        {/* Segment 2: Tech (30%) Emerald */}
                        <circle
                          cx="60"
                          cy="60"
                          r="46"
                          stroke="#10b981"
                          strokeWidth="14"
                          fill="transparent"
                          strokeDasharray="289"
                          strokeDashoffset="210"
                          strokeLinecap="round"
                        />
                        {/* Segment 3: Lifestyle (22%) Amber */}
                        <circle
                          cx="60"
                          cy="60"
                          r="46"
                          stroke="#f59e0b"
                          strokeWidth="14"
                          fill="transparent"
                          strokeDasharray="289"
                          strokeDashoffset="245"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="donut-center-info">
                        <div className="donut-center-num">14.8k</div>
                        <div className="donut-center-lbl">Units Sold</div>
                      </div>
                    </div>

                    <div className="donut-legend-row">
                      <div className="legend-item">
                        <span className="legend-dot" style={{ backgroundColor: "#0062f5" }}></span>
                        <span>Fashion</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-dot" style={{ backgroundColor: "#10b981" }}></span>
                        <span>Electronics</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-dot" style={{ backgroundColor: "#f59e0b" }}></span>
                        <span>Accessories</span>
                      </div>
                    </div>
                  </div>

                  {/* Weekly Sales Bar Chart Canvas */}
                  <div className="chart-box-bars">
                    <div className="chart-box-header">
                      <span className="chart-heading">Weekly Sales Velocity</span>
                      <div className="bar-filter-tags">
                        <span className="active">Sales</span>
                        <span>Orders</span>
                      </div>
                    </div>

                    <div className="bar-chart-track">
                      {[
                        { day: "Mon", height: "45%" },
                        { day: "Tue", height: "62%" },
                        { day: "Wed", height: "54%" },
                        { day: "Thu", height: "78%" },
                        { day: "Fri", height: "86%" },
                        { day: "Sat", height: "100%", isPeak: true },
                        { day: "Sun", height: "72%" },
                      ].map((bar, idx) => (
                        <div key={idx} className="bar-track-col">
                          <div
                            className={`bar-visual-pill ${bar.isPeak ? "peak-bar" : ""}`}
                            style={{ height: bar.height }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    <div className="bar-chart-days">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>

                {/* Live Order Notification Pill */}
                <div className="live-order-banner">
                  <div className="order-left-group">
                    <div className="order-avatar-ping">
                      <i className="fa-solid fa-bolt"></i>
                    </div>
                    <div>
                      <div className="order-title-txt">Live Transaction Synced • 2 sec ago</div>
                      <div className="order-sub-txt">Order #VT-9912 via Instant UPI • Mumbai, MH</div>
                    </div>
                  </div>
                  <div className="order-right-pill">
                    <span className="order-badge-amount">+ ₹4,299.00</span>
                    <span className="order-badge-status">Delivered</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: BRAND MANAGER DASHBOARD (Interactive controls + Live Phone/Store Mockup) */}
            {activeTab === 2 && (
              <div className="console-inner-view brand-manager-split">
                {/* Left Controls */}
                <div className="brand-controls-col">
                  <div className="brand-input-card">
                    <div className="input-card-title">
                      <span>Custom Domain Configuration</span>
                      <span className="badge-ssl">
                        <i className="fa-solid fa-lock"></i> SSL Active
                      </span>
                    </div>
                    <input
                      type="text"
                      className="brand-text-input"
                      readOnly
                      value="https://store.yourbrand.com"
                    />
                  </div>

                  <div className="brand-currency-card">
                    <div className="currency-card-title">
                      Primary Currency (Live Switcher)
                    </div>
                    <div className="currency-grid-pills">
                      {currencies.map((curr) => (
                        <div
                          key={curr.code}
                          className={`curr-pill ${selectedCurrency === curr.code ? "active" : ""}`}
                          onClick={() => setSelectedCurrency(curr.code)}
                        >
                          <span className="flag">{curr.symbol}</span>
                          <span>{curr.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="brand-input-card">
                    <div className="input-card-title">
                      <span>Store Timezone & Locale</span>
                      <span className="badge-ssl">Auto-Sync</span>
                    </div>
                    <input
                      type="text"
                      className="brand-text-input"
                      readOnly
                      value="Asia/Kolkata (IST +5:30) • English (US/IN)"
                    />
                  </div>
                </div>

                {/* Right Preview Card */}
                <div className="brand-preview-phone">
                  <div className="phone-top-status">
                    <span>Storefront Preview</span>
                    <span className="live-preview-tag">● Live Sync</span>
                  </div>

                  <div className="preview-store-hero">
                    <div className="store-logo-row">
                      <div className="store-brand-dot">V</div>
                      <div className="store-name-text">Vastora Luxe Store</div>
                    </div>
                    <div className="store-tagline">Curated Designer Apparel</div>
                    <div className="store-sub-badge">Spring &bull; Summer 2026 Collection</div>
                  </div>

                  <div className="preview-product-card">
                    <div className="prod-left">
                      <div className="prod-thumb">
                        <i className="fa-solid fa-shirt"></i>
                      </div>
                      <div>
                        <div className="prod-title">Premium Oxford Cotton Shirt</div>
                        <div className="prod-price">{currentPrice}</div>
                      </div>
                    </div>
                    <button className="prod-btn" type="button">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: THEME STUDIO (Live Color Swatches & Interactive Mini Storefront) */}
            {activeTab === 3 && (
              <div className="console-inner-view theme-studio-advanced">
                {/* Theme Color Picker */}
                <div className="theme-swatches-card">
                  <div className="swatches-top-title">
                    <span>Storefront Accent Color Scheme</span>
                    <span className="hot-reload-pill">
                      <i className="fa-solid fa-sparkles"></i> Click Color to Change Store Theme
                    </span>
                  </div>
                  <div className="color-options-row">
                    {themePalettes.map((palette) => (
                      <div
                        key={palette.name}
                        className={`color-choice-btn ${selectedTheme.name === palette.name ? "active" : ""}`}
                        onClick={() => setSelectedTheme(palette)}
                      >
                        <span
                          className="color-circle"
                          style={{ backgroundColor: palette.hex }}
                        ></span>
                        <span className="color-label">{palette.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic Store Preview (Banner responds to color click!) */}
                <div className="dynamic-theme-preview-box">
                  <div className="store-mock-header">
                    <div className="mock-nav-brand">
                      <i className="fa-solid fa-bag-shopping"></i> Vastora Storefront
                    </div>
                    <div className="mock-nav-links">
                      <span>Home</span>
                      <span>Catalog</span>
                      <span>Deals</span>
                    </div>
                    <div className="mock-nav-cart">
                      <i className="fa-solid fa-cart-shopping"></i> Bag (3)
                    </div>
                  </div>

                  <div
                    className="store-mock-banner"
                    style={{ background: selectedTheme.gradient }}
                  >
                    <div className="banner-info">
                      <span className="banner-tag">SPRING SPECIAL &bull; 40% OFF</span>
                      <div className="banner-heading">
                        Headless Shopping, Ultra-Fast Checkout.
                      </div>
                      <button className="banner-action-btn" type="button">
                        Explore Collection <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="banner-art-icon">
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                  </div>

                  <div className="store-modules-bar">
                    <span>
                      <i className="fa-solid fa-check"></i> 100% Mobile Responsive
                    </span>
                    <span>
                      <i className="fa-solid fa-bolt"></i> Sub-Second Page Speed
                    </span>
                    <span>
                      <i className="fa-solid fa-shield-check"></i> 1-Click UPI Checkout
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: API INTEGRATIONS (High-Fidelity Gateway Cards & Webhook Terminal) */}
            {activeTab === 4 && (
              <div className="console-inner-view api-integrations-advanced">
                <div className="api-gateway-grid">
                  {/* Razorpay */}
                  <div className="api-partner-card">
                    <div className="partner-top-row">
                      <div className="partner-logo-pod logo-razorpay">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                          <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                      </div>
                      <span className="partner-status-tag">
                        <span className="status-ping"></span> Live (0.1s latency)
                      </span>
                    </div>
                    <div className="partner-name">Razorpay Payment Suite</div>
                    <div className="partner-desc">
                      Accept UPI QR, Google Pay, Credit/Debit Cards & 50+ NetBanking options.
                    </div>
                    <div className="partner-bottom-key">
                      <span>rzp_live_92k84x••••••</span>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                  </div>

                  {/* Stripe */}
                  <div className="api-partner-card">
                    <div className="partner-top-row">
                      <div className="partner-logo-pod logo-stripe">
                        <span style={{ fontWeight: 800, fontSize: "16px", color: "#ffffff", fontFamily: "sans-serif" }}>S</span>
                      </div>
                      <span className="partner-status-tag">
                        <span className="status-ping"></span> Global Active
                      </span>
                    </div>
                    <div className="partner-name">Stripe Checkout Cloud</div>
                    <div className="partner-desc">
                      Accept 135+ currencies worldwide with Apple Pay & international cards.
                    </div>
                    <div className="partner-bottom-key">
                      <span>pk_live_8832a1••••••</span>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                  </div>

                  {/* Shiprocket */}
                  <div className="api-partner-card">
                    <div className="partner-top-row">
                      <div className="partner-logo-pod logo-shiprocket">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="3" width="15" height="13"></rect>
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                          <circle cx="5.5" cy="18.5" r="2.5"></circle>
                          <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                      </div>
                      <span className="partner-status-tag">
                        <span className="status-ping"></span> Auto-AWB
                      </span>
                    </div>
                    <div className="partner-name">Shiprocket Logistics</div>
                    <div className="partner-desc">
                      Connect 29,000+ pin codes with automated courier dispatch & tracking.
                    </div>
                    <div className="partner-bottom-key">
                      <span>Auto Courier Dispatch</span>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="api-partner-card">
                    <div className="partner-top-row">
                      <div className="partner-logo-pod logo-whatsapp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <span className="partner-status-tag">
                        <span className="status-ping"></span> Verified Bot
                      </span>
                    </div>
                    <div className="partner-name">WhatsApp Business API</div>
                    <div className="partner-desc">
                      Automated order receipts, shipping alerts & abandoned cart recovery bot.
                    </div>
                    <div className="partner-bottom-key">
                      <span>Cloud API Synced</span>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </div>

                {/* Webhook Activity Terminal Bar */}
                <div className="webhook-terminal-bar">
                  <div className="terminal-left">
                    <span className="term-dot"></span>
                    <span className="term-text">
                      webhook.production: event <span>payment.captured</span> [200 OK]
                    </span>
                  </div>
                  <span className="term-ping">12ms response time</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: High-End Interactive Bento Tabs */}
          <div className="solution-tabs-column">
            {tabList.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  className={`solution-tab-item ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveTab(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveTab(item.id);
                    }
                  }}
                >
                  <div className="tab-icon-box">
                    <Image
                      src={item.iconImg}
                      alt={item.title}
                      className="tab-icon-main-img"
                      priority
                    />
                    <div className="tab-icon-bg-shape">
                      <Image src={item.shapeImg} alt="shape" />
                    </div>
                    <span
                      className="tab-icon-dot"
                      style={{ backgroundColor: item.dotColor }}
                    ></span>
                  </div>
                  <div className="tab-content-block">
                    <div className="tab-meta-top">
                      <span className="tab-feature-pill">{item.tag}</span>
                    </div>
                    <h3 className="tab-title">{item.title}</h3>
                    <p className="tab-description">{item.desc}</p>
                  </div>
                  <div className="active-tab-progress-line"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolestAeaHomeFive;