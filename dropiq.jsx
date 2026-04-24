import React, { useState, useMemo, useEffect } from 'react';
import { Search, TrendingUp, TrendingDown, Zap, AlertTriangle, Target, Globe, Package, DollarSign, Activity, BarChart3, Filter, Sparkles, Eye, ShoppingBag, ArrowUpRight, ArrowDownRight, Flame, Shield, Clock, Star, ChevronRight, Bell, Plus, Download, Play, Pause, Settings, Layers, Brain, TrendingUp as Trend, Box, Truck, Award, Crosshair, Radar, Users, Command, Menu as MenuIcon, X, ChevronDown, Check } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RechartsRadar, PieChart, Pie, Cell } from 'recharts';

export default function DropIQ() {
  const [activeView, setActiveView] = useState('discover');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterNiche, setFilterNiche] = useState('all');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [watchlist, setWatchlist] = useState([3, 7]);
  const [sortBy, setSortBy] = useState('score');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // AI-scored products (aggregated from multiple platforms)
  const products = [
    {
      id: 1, name: 'Magnetic Posture Corrector Pro', emoji: '🧘',
      niche: 'Health & Wellness', sourceCount: 4,
      sources: [
        { platform: 'AliExpress', price: 4.80, shipTime: '15-20d', moq: 1 },
        { platform: 'CJ Dropshipping', price: 6.20, shipTime: '7-10d', moq: 1 },
        { platform: 'Spocket (EU)', price: 11.50, shipTime: '3-5d', moq: 1 },
        { platform: 'Zendrop (US)', price: 8.90, shipTime: '5-7d', moq: 1 },
      ],
      bestPrice: 4.80, retailPrice: 34.99,
      aiScore: 94, saturation: 22, trend: 'rising', trendPct: 340,
      competitors: 127, monthlyVolume: '$2.4M',
      profitMargin: 62, riskLevel: 'low',
      signals: ['TikTok viral (2.1M views)', 'Low saturation', 'High margin', 'Evergreen'],
      redFlags: [],
      adCost: 8.40, estimatedROI: 315,
      countries: ['US', 'UK', 'DE', 'AU'],
      shippingDays: 7, reviewCount: 8420, avgRating: 4.6
    },
    {
      id: 2, name: 'LED Galaxy Star Projector', emoji: '🌌',
      niche: 'Home & Decor', sourceCount: 6,
      sources: [
        { platform: 'AliExpress', price: 12.30, shipTime: '15-25d', moq: 1 },
        { platform: 'CJ Dropshipping', price: 14.80, shipTime: '7-10d', moq: 1 },
        { platform: 'Temu', price: 9.99, shipTime: '10-15d', moq: 1 },
        { platform: 'Zendrop', price: 18.50, shipTime: '5-7d', moq: 1 },
      ],
      bestPrice: 9.99, retailPrice: 49.99,
      aiScore: 58, saturation: 89, trend: 'declining', trendPct: -12,
      competitors: 4820, monthlyVolume: '$18.2M',
      profitMargin: 41, riskLevel: 'high',
      signals: ['High search volume'],
      redFlags: ['Oversaturated (89%)', 'Declining trend', '4,820 competitors', 'Price race to bottom'],
      adCost: 22.10, estimatedROI: 68,
      countries: ['Global'],
      shippingDays: 10, reviewCount: 47200, avgRating: 4.2
    },
    {
      id: 3, name: 'Silicone Pet Grooming Glove Pro', emoji: '🐾',
      niche: 'Pet Supplies', sourceCount: 3,
      sources: [
        { platform: 'AliExpress', price: 2.40, shipTime: '15-20d', moq: 1 },
        { platform: 'CJ Dropshipping', price: 3.10, shipTime: '7-10d', moq: 1 },
        { platform: 'Spocket (US)', price: 5.80, shipTime: '3-5d', moq: 1 },
      ],
      bestPrice: 2.40, retailPrice: 19.99,
      aiScore: 87, saturation: 34, trend: 'rising', trendPct: 145,
      competitors: 412, monthlyVolume: '$890K',
      profitMargin: 71, riskLevel: 'low',
      signals: ['Seasonal spike (spring)', 'Pet niche growing', 'Strong margins', 'Repeat buyers'],
      redFlags: [],
      adCost: 6.20, estimatedROI: 285,
      countries: ['US', 'UK', 'CA'],
      shippingDays: 8, reviewCount: 3200, avgRating: 4.5
    },
    {
      id: 4, name: 'Smart Digital Kitchen Scale w/ App', emoji: '⚖️',
      niche: 'Kitchen Tech', sourceCount: 5,
      sources: [
        { platform: 'AliExpress', price: 8.90, shipTime: '15-20d', moq: 1 },
        { platform: 'CJ Dropshipping', price: 11.20, shipTime: '7-10d', moq: 1 },
        { platform: 'Banggood', price: 9.80, shipTime: '10-14d', moq: 1 },
      ],
      bestPrice: 8.90, retailPrice: 42.99,
      aiScore: 79, saturation: 48, trend: 'rising', trendPct: 67,
      competitors: 890, monthlyVolume: '$1.6M',
      profitMargin: 58, riskLevel: 'medium',
      signals: ['Fitness trend rising', 'App differentiator', 'Good margins'],
      redFlags: ['App reliability concerns'],
      adCost: 12.40, estimatedROI: 178,
      countries: ['US', 'EU'],
      shippingDays: 9, reviewCount: 1820, avgRating: 4.3
    },
    {
      id: 5, name: 'Crystal Healing Amethyst Lamp', emoji: '💎',
      niche: 'Spirituality & Wellness', sourceCount: 4,
      sources: [
        { platform: 'AliExpress', price: 15.60, shipTime: '20-30d', moq: 1 },
        { platform: 'CJ Dropshipping', price: 19.40, shipTime: '7-14d', moq: 1 },
      ],
      bestPrice: 15.60, retailPrice: 79.99,
      aiScore: 91, saturation: 18, trend: 'rising', trendPct: 420,
      competitors: 89, monthlyVolume: '$340K',
      profitMargin: 68, riskLevel: 'low',
      signals: ['Ultra-low saturation', 'Gift niche', 'Instagram worthy', 'Premium pricing'],
      redFlags: [],
      adCost: 9.80, estimatedROI: 342,
      countries: ['US', 'UK', 'AU'],
      shippingDays: 12, reviewCount: 420, avgRating: 4.7
    },
    {
      id: 6, name: 'Wireless Car Vacuum Cleaner', emoji: '🚗',
      niche: 'Auto Accessories', sourceCount: 7,
      sources: [
        { platform: 'AliExpress', price: 11.40, shipTime: '15-20d', moq: 1 },
      ],
      bestPrice: 11.40, retailPrice: 44.99,
      aiScore: 42, saturation: 92, trend: 'declining', trendPct: -28,
      competitors: 6200, monthlyVolume: '$24M',
      profitMargin: 45, riskLevel: 'high',
      signals: [],
      redFlags: ['Market saturated', 'Amazon competition', 'Declining Google trends', 'Price wars'],
      adCost: 28.50, estimatedROI: 32,
      countries: ['Global'],
      shippingDays: 12, reviewCount: 89000, avgRating: 4.0
    },
    {
      id: 7, name: 'Portable Neck Fan w/ LED', emoji: '💨',
      niche: 'Seasonal Tech', sourceCount: 5,
      sources: [
        { platform: 'AliExpress', price: 6.80, shipTime: '15-20d', moq: 1 },
        { platform: 'CJ Dropshipping', price: 8.40, shipTime: '7-10d', moq: 1 },
      ],
      bestPrice: 6.80, retailPrice: 29.99,
      aiScore: 83, saturation: 41, trend: 'rising', trendPct: 210,
      competitors: 620, monthlyVolume: '$1.2M',
      profitMargin: 64, riskLevel: 'medium',
      signals: ['Summer approaching', 'TikTok trend forming', 'Good margins'],
      redFlags: ['Seasonal - plan inventory'],
      adCost: 7.90, estimatedROI: 245,
      countries: ['US', 'EU', 'ME'],
      shippingDays: 8, reviewCount: 2400, avgRating: 4.4
    },
    {
      id: 8, name: 'Ergonomic Lumbar Support Pillow', emoji: '🪑',
      niche: 'Office & WFH', sourceCount: 6,
      sources: [
        { platform: 'AliExpress', price: 9.20, shipTime: '15-20d', moq: 1 },
        { platform: 'Spocket (US)', price: 16.80, shipTime: '3-5d', moq: 1 },
      ],
      bestPrice: 9.20, retailPrice: 39.99,
      aiScore: 76, saturation: 55, trend: 'stable', trendPct: 12,
      competitors: 1420, monthlyVolume: '$3.1M',
      profitMargin: 54, riskLevel: 'medium',
      signals: ['WFH evergreen', 'B2B potential', 'Corporate gifting'],
      redFlags: ['Size/shipping costs'],
      adCost: 11.20, estimatedROI: 152,
      countries: ['US', 'EU'],
      shippingDays: 9, reviewCount: 5200, avgRating: 4.3
    },
  ];

  const niches = ['all', 'Health & Wellness', 'Home & Decor', 'Pet Supplies', 'Kitchen Tech', 'Spirituality & Wellness', 'Auto Accessories', 'Seasonal Tech', 'Office & WFH'];

  const filtered = products
    .filter(p => filterNiche === 'all' || p.niche === filterNiche)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.niche.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'score') return b.aiScore - a.aiScore;
      if (sortBy === 'trend') return b.trendPct - a.trendPct;
      if (sortBy === 'margin') return b.profitMargin - a.profitMargin;
      if (sortBy === 'saturation') return a.saturation - b.saturation;
      return 0;
    });

  const getScoreColor = (score) => {
    if (score >= 85) return { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'WINNER' };
    if (score >= 70) return { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', label: 'STRONG' };
    if (score >= 55) return { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', label: 'MEDIUM' };
    return { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', label: 'AVOID' };
  };

  const getRiskColor = (risk) => {
    if (risk === 'low') return 'text-emerald-400 bg-emerald-500/10';
    if (risk === 'medium') return 'text-amber-400 bg-amber-500/10';
    return 'text-red-400 bg-red-500/10';
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const toggleWatchlist = (id) => {
    setWatchlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  // Chart data for selected product
  const trendData = [
    { day: '30d', value: 100 },
    { day: '25d', value: 118 },
    { day: '20d', value: 134 },
    { day: '15d', value: 172 },
    { day: '10d', value: 210 },
    { day: '5d', value: 289 },
    { day: 'Today', value: 340 },
  ];

  const radarData = selectedProduct ? [
    { metric: 'Margin', value: selectedProduct.profitMargin },
    { metric: 'Low Sat.', value: 100 - selectedProduct.saturation },
    { metric: 'Trend', value: Math.min(100, Math.max(0, 50 + selectedProduct.trendPct / 10)) },
    { metric: 'Demand', value: Math.min(100, selectedProduct.reviewCount / 100) },
    { metric: 'Rating', value: selectedProduct.avgRating * 20 },
    { metric: 'ROI', value: Math.min(100, selectedProduct.estimatedROI / 4) },
  ] : [];

  // Top stats
  const winnersCount = products.filter(p => p.aiScore >= 85).length;
  const risingCount = products.filter(p => p.trend === 'rising').length;
  const avgMargin = Math.round(products.reduce((s, p) => s + p.profitMargin, 0) / products.length);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-stone-200" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif&display=swap');
        body { font-family: 'Space Grotesk', sans-serif; background: #0a0a0f; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .display { font-family: 'Instrument Serif', serif; font-weight: 400; letter-spacing: -0.02em; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes pulse-green { 0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); } 50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); } }
        .pulse-dot { animation: pulse-green 2s infinite; }
        @keyframes scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .scan-line::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(16,185,129,0.1), transparent);
          animation: scan 3s infinite;
        }
        .gradient-border {
          background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(251,191,36,0.05), rgba(239,68,68,0.05));
          padding: 1px; border-radius: 12px;
        }
        .glow-emerald { box-shadow: 0 0 40px -10px rgba(16, 185, 129, 0.5); }
      `}</style>

      {/* Top Bar */}
      <header className="border-b border-stone-800/60 backdrop-blur-xl bg-[#0a0a0f]/80 sticky top-0 z-40">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 rounded-md flex items-center justify-center rotate-45">
                  <div className="w-4 h-4 bg-[#0a0a0f] rounded-sm -rotate-45 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full pulse-dot"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="display text-xl text-stone-100 leading-none">DropIQ</div>
                <div className="mono text-[9px] text-emerald-400 uppercase tracking-[0.2em] mt-0.5">Intelligence Terminal</div>
              </div>
            </div>

            <nav className="flex gap-1">
              {[
                { id: 'discover', icon: Crosshair, label: 'DISCOVER' },
                { id: 'watchlist', icon: Eye, label: 'WATCHLIST', count: watchlist.length },
                { id: 'sources', icon: Layers, label: 'SOURCES' },
                { id: 'analytics', icon: Activity, label: 'ANALYTICS' },
                { id: 'competitors', icon: Users, label: 'COMPETITORS' },
              ].map(item => (
                <button key={item.id} onClick={() => setActiveView(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs mono tracking-wider flex items-center gap-2 transition-all ${
                    activeView === item.id
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                  }`}>
                  <item.icon size={12} />
                  {item.label}
                  {item.count > 0 && <span className="text-emerald-400">{item.count}</span>}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 mono text-[10px]">
              <div>
                <div className="text-stone-500 uppercase">Live Data</div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  STREAMING
                </div>
              </div>
              <div>
                <div className="text-stone-500 uppercase">UTC</div>
                <div className="text-stone-300">{currentTime.toISOString().slice(11, 19)}</div>
              </div>
              <div>
                <div className="text-stone-500 uppercase">Scans/s</div>
                <div className="text-amber-400">2,847</div>
              </div>
            </div>

            <button className="w-8 h-8 rounded-md bg-stone-800/50 hover:bg-stone-800 flex items-center justify-center border border-stone-700">
              <Bell size={14} className="text-stone-400" />
            </button>
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 text-[10px] font-bold flex items-center justify-center text-[#0a0a0f]">
              MX
            </div>
          </div>
        </div>
      </header>

      <div className="grid-bg min-h-[calc(100vh-61px)]">
        {activeView === 'discover' && (
          <>
            {/* Hero stats bar */}
            <div className="border-b border-stone-800/60 px-6 py-5">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={14} className="text-emerald-400" />
                    <span className="mono text-[10px] text-emerald-400 uppercase tracking-wider">AI Product Discovery Engine</span>
                  </div>
                  <h1 className="display text-5xl text-stone-50 leading-none">
                    Winning products, <span className="italic text-emerald-400">decoded.</span>
                  </h1>
                  <p className="text-stone-500 text-sm mt-2 max-w-xl">
                    Multi-platform intelligence aggregated from 47 sources. Real-time saturation analysis. AI-scored opportunities before your competitors find them.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="border border-stone-800 rounded-lg px-4 py-3 bg-stone-900/30">
                    <div className="mono text-[9px] text-stone-500 uppercase">Winners Today</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="display text-3xl text-emerald-400">{winnersCount}</span>
                      <ArrowUpRight size={14} className="text-emerald-400" />
                    </div>
                  </div>
                  <div className="border border-stone-800 rounded-lg px-4 py-3 bg-stone-900/30">
                    <div className="mono text-[9px] text-stone-500 uppercase">Rising Trends</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="display text-3xl text-amber-400">{risingCount}</span>
                      <Flame size={14} className="text-amber-400" />
                    </div>
                  </div>
                  <div className="border border-stone-800 rounded-lg px-4 py-3 bg-stone-900/30">
                    <div className="mono text-[9px] text-stone-500 uppercase">Avg Margin</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="display text-3xl text-stone-100">{avgMargin}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search and filters */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-2xl">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, niches, keywords..."
                    className="w-full bg-stone-900/50 border border-stone-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-emerald-500/50 mono"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 mono text-[10px] text-stone-500">
                    <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">⌘</kbd>
                    <kbd className="px-1.5 py-0.5 bg-stone-800 rounded border border-stone-700">K</kbd>
                  </div>
                </div>

                <select value={filterNiche} onChange={(e) => setFilterNiche(e.target.value)}
                  className="bg-stone-900/50 border border-stone-800 rounded-lg px-3 py-2.5 text-xs text-stone-200 mono focus:outline-none focus:border-emerald-500/50">
                  {niches.map(n => <option key={n} value={n}>{n === 'all' ? 'ALL NICHES' : n.toUpperCase()}</option>)}
                </select>

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                  className="bg-stone-900/50 border border-stone-800 rounded-lg px-3 py-2.5 text-xs text-stone-200 mono focus:outline-none focus:border-emerald-500/50">
                  <option value="score">AI SCORE ↓</option>
                  <option value="trend">TREND ↓</option>
                  <option value="margin">MARGIN ↓</option>
                  <option value="saturation">LOW SATURATION</option>
                </select>

                <button className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-4 py-2.5 rounded-lg text-xs mono font-bold tracking-wider flex items-center gap-2 transition-colors">
                  <Brain size={14} />
                  AI SCAN
                </button>
              </div>
            </div>

            {/* Products list */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="mono text-[10px] text-stone-500 uppercase tracking-wider">Showing {filtered.length} opportunities</div>
                  <div className="h-3 w-px bg-stone-800"></div>
                  <div className="flex items-center gap-1.5 mono text-[10px] text-emerald-400">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                    Last scan: 3s ago
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] mono text-stone-500">
                  <span>Powered by</span>
                  <span className="text-emerald-400">DropIQ Neural v2.4</span>
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-[1fr_80px_100px_120px_100px_140px_auto] gap-4 px-4 py-2 border-b border-stone-800/50 mono text-[9px] text-stone-500 uppercase tracking-wider">
                <div>Product / Niche</div>
                <div className="text-right">AI Score</div>
                <div className="text-right">Saturation</div>
                <div className="text-right">Trend (30d)</div>
                <div className="text-right">Margin</div>
                <div className="text-right">Best Price</div>
                <div></div>
              </div>

              <div className="space-y-1.5 mt-2">
                {filtered.map((product, idx) => {
                  const score = getScoreColor(product.aiScore);
                  return (
                    <div
                      key={product.id}
                      onClick={() => openProductDetail(product)}
                      className="group relative grid grid-cols-[1fr_80px_100px_120px_100px_140px_auto] gap-4 px-4 py-3 bg-stone-900/30 hover:bg-stone-900/60 border border-stone-800/50 hover:border-stone-700 rounded-lg cursor-pointer transition-all"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {/* Product */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="text-2xl flex-shrink-0">{product.emoji}</div>
                        <div className="min-w-0">
                          <div className="text-sm text-stone-100 font-medium truncate group-hover:text-emerald-300 transition-colors">
                            {product.name}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="mono text-[9px] text-stone-500 uppercase tracking-wider">{product.niche}</span>
                            <span className="text-stone-700">·</span>
                            <div className="flex items-center gap-1">
                              <Layers size={9} className="text-stone-500" />
                              <span className="mono text-[9px] text-stone-500">{product.sourceCount} sources</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI Score */}
                      <div className="flex items-center justify-end">
                        <div className={`mono text-xl font-bold ${score.text}`}>{product.aiScore}</div>
                      </div>

                      {/* Saturation bar */}
                      <div className="flex items-center justify-end">
                        <div className="w-full">
                          <div className="flex items-center justify-end gap-1.5 mb-0.5">
                            <span className="mono text-xs text-stone-300">{product.saturation}%</span>
                          </div>
                          <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${
                              product.saturation < 35 ? 'bg-emerald-400' :
                              product.saturation < 65 ? 'bg-amber-400' : 'bg-red-400'
                            }`} style={{ width: `${product.saturation}%` }}></div>
                          </div>
                        </div>
                      </div>

                      {/* Trend */}
                      <div className="flex items-center justify-end gap-1.5">
                        {product.trend === 'rising' && <ArrowUpRight size={12} className="text-emerald-400" />}
                        {product.trend === 'declining' && <ArrowDownRight size={12} className="text-red-400" />}
                        {product.trend === 'stable' && <div className="w-3 h-px bg-stone-500"></div>}
                        <span className={`mono text-xs ${
                          product.trend === 'rising' ? 'text-emerald-400' :
                          product.trend === 'declining' ? 'text-red-400' : 'text-stone-400'
                        }`}>
                          {product.trendPct > 0 ? '+' : ''}{product.trendPct}%
                        </span>
                      </div>

                      {/* Margin */}
                      <div className="flex items-center justify-end">
                        <span className="mono text-sm text-stone-200">{product.profitMargin}%</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-end gap-2">
                        <div className="text-right">
                          <div className="mono text-sm text-stone-100">${product.bestPrice.toFixed(2)}</div>
                          <div className="mono text-[9px] text-stone-500">→ ${product.retailPrice.toFixed(2)}</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <button onClick={(e) => { e.stopPropagation(); toggleWatchlist(product.id); }}
                          className={`w-7 h-7 rounded-md flex items-center justify-center border transition-all ${
                            watchlist.includes(product.id)
                              ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                              : 'bg-stone-800/50 border-stone-700 text-stone-500 hover:text-amber-400 hover:border-amber-500/40'
                          }`}>
                          <Star size={12} fill={watchlist.includes(product.id) ? 'currentColor' : 'none'} />
                        </button>
                        <ChevronRight size={14} className="text-stone-600 group-hover:text-emerald-400 transition-colors" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {activeView === 'watchlist' && (
          <div className="p-6">
            <h1 className="display text-4xl text-stone-50 mb-1">Your Watchlist</h1>
            <p className="text-stone-500 text-sm mb-6">Tracked products — receive alerts on saturation changes, price drops, and trend shifts.</p>

            {watchlist.length === 0 ? (
              <div className="border border-dashed border-stone-800 rounded-xl p-16 text-center">
                <Eye size={40} className="mx-auto mb-4 text-stone-700" />
                <div className="mono text-xs text-stone-500 uppercase tracking-wider mb-2">No products tracked</div>
                <div className="text-stone-400">Star products in Discover to start monitoring</div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {products.filter(p => watchlist.includes(p.id)).map(product => {
                  const score = getScoreColor(product.aiScore);
                  return (
                    <div key={product.id} onClick={() => openProductDetail(product)}
                      className="bg-stone-900/40 border border-stone-800 hover:border-emerald-500/30 rounded-xl p-5 cursor-pointer transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{product.emoji}</div>
                          <div>
                            <div className="text-stone-100 font-medium">{product.name}</div>
                            <div className="mono text-[10px] text-stone-500 uppercase tracking-wider mt-0.5">{product.niche}</div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded border ${score.bg} ${score.border}`}>
                          <div className={`mono text-xs font-bold ${score.text}`}>{product.aiScore}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-800">
                        <div>
                          <div className="mono text-[9px] text-stone-500 uppercase">Trend</div>
                          <div className={`text-sm mono mt-0.5 ${product.trend === 'rising' ? 'text-emerald-400' : 'text-red-400'}`}>
                            {product.trendPct > 0 ? '+' : ''}{product.trendPct}%
                          </div>
                        </div>
                        <div>
                          <div className="mono text-[9px] text-stone-500 uppercase">Margin</div>
                          <div className="text-sm mono text-stone-200 mt-0.5">{product.profitMargin}%</div>
                        </div>
                        <div>
                          <div className="mono text-[9px] text-stone-500 uppercase">ROI</div>
                          <div className="text-sm mono text-amber-400 mt-0.5">{product.estimatedROI}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeView === 'sources' && (
          <div className="p-6">
            <h1 className="display text-4xl text-stone-50 mb-1">Supplier Network</h1>
            <p className="text-stone-500 text-sm mb-6">47 platforms aggregated · Real-time price & stock sync</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { name: 'AliExpress', region: 'China', products: '128M', shipAvg: '15-25d', reliability: 72, price: '$$', active: true },
                { name: 'CJ Dropshipping', region: 'China + Global WH', products: '1.2M', shipAvg: '7-14d', reliability: 89, price: '$$$', active: true },
                { name: 'Spocket', region: 'US + EU', products: '400K', shipAvg: '3-5d', reliability: 94, price: '$$$$', active: true },
                { name: 'Zendrop', region: 'US', products: '1M+', shipAvg: '5-7d', reliability: 91, price: '$$$', active: true },
                { name: 'Temu', region: 'China', products: '80M', shipAvg: '10-15d', reliability: 68, price: '$', active: true },
                { name: 'Modalyst', region: 'US + Global', products: '250K', shipAvg: '6-8d', reliability: 87, price: '$$$', active: true },
                { name: 'Banggood', region: 'China', products: '4M', shipAvg: '10-14d', reliability: 75, price: '$$', active: true },
                { name: 'DSers (AliExp)', region: 'China', products: '100M+', shipAvg: '15-25d', reliability: 74, price: '$$', active: false },
                { name: 'AutoDS', region: 'Multi-source', products: '25M', shipAvg: '7-14d', reliability: 82, price: '$$$', active: true },
              ].map(s => (
                <div key={s.name} className="bg-stone-900/40 border border-stone-800 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${s.active ? 'bg-emerald-400 animate-pulse' : 'bg-stone-600'}`}></div>
                        <div className="text-stone-100 font-medium">{s.name}</div>
                      </div>
                      <div className="mono text-[10px] text-stone-500 mt-1">{s.region}</div>
                    </div>
                    <div className="mono text-xs text-amber-400">{s.price}</div>
                  </div>

                  <div className="space-y-2 mono text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-stone-500 uppercase text-[9px] tracking-wider">Products</span>
                      <span className="text-stone-200">{s.products}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500 uppercase text-[9px] tracking-wider">Ship Avg</span>
                      <span className="text-stone-200">{s.shipAvg}</span>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-stone-500 uppercase text-[9px] tracking-wider">Reliability</span>
                        <span className={s.reliability >= 85 ? 'text-emerald-400' : s.reliability >= 75 ? 'text-amber-400' : 'text-red-400'}>{s.reliability}/100</span>
                      </div>
                      <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${s.reliability >= 85 ? 'bg-emerald-400' : s.reliability >= 75 ? 'bg-amber-400' : 'bg-red-400'}`} style={{ width: `${s.reliability}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'analytics' && (
          <div className="p-6">
            <h1 className="display text-4xl text-stone-50 mb-1">Market Analytics</h1>
            <p className="text-stone-500 text-sm mb-6">Cross-platform market intelligence</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-900/40 border border-stone-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="mono text-[10px] text-stone-500 uppercase tracking-wider">Top Niches by Momentum</div>
                    <div className="display text-2xl text-stone-100 mt-1">Rising Categories</div>
                  </div>
                  <TrendingUp size={20} className="text-emerald-400" />
                </div>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={[
                    { niche: 'Pet Care', growth: 145 },
                    { niche: 'Wellness', growth: 340 },
                    { niche: 'Home Tech', growth: 67 },
                    { niche: 'Auto', growth: -28 },
                    { niche: 'Fashion', growth: 12 },
                  ]} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#1c1917" />
                    <XAxis type="number" tick={{ fontSize: 10, fill: '#78716c' }} />
                    <YAxis dataKey="niche" type="category" tick={{ fontSize: 10, fill: '#78716c' }} width={70} />
                    <Tooltip contentStyle={{ background: '#0a0a0f', border: '1px solid #292524', borderRadius: 8, fontSize: 12 }} />
                    <Bar dataKey="growth" fill="#10b981" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-stone-900/40 border border-stone-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="mono text-[10px] text-stone-500 uppercase tracking-wider">Saturation Distribution</div>
                    <div className="display text-2xl text-stone-100 mt-1">Market Opportunity</div>
                  </div>
                  <Radar size={20} className="text-amber-400" />
                </div>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={[
                      { name: 'Low Sat (Winners)', value: 35, fill: '#10b981' },
                      { name: 'Medium', value: 40, fill: '#f59e0b' },
                      { name: 'High (Avoid)', value: 25, fill: '#ef4444' },
                    ]} dataKey="value" innerRadius={50} outerRadius={90}>
                    </Pie>
                    <Tooltip contentStyle={{ background: '#0a0a0f', border: '1px solid #292524', fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeView === 'competitors' && (
          <div className="p-6">
            <h1 className="display text-4xl text-stone-50 mb-1">Competitor Radar</h1>
            <p className="text-stone-500 text-sm mb-6">Track who's selling what — and how much</p>
            <div className="border border-dashed border-stone-800 rounded-xl p-16 text-center">
              <Users size={40} className="mx-auto mb-4 text-stone-700" />
              <div className="display text-xl text-stone-300 mb-2">Add competitor domains to track</div>
              <div className="text-stone-500 text-sm">See their product changes, ad spend estimates, and new launches in real-time</div>
              <button className="mt-6 bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-5 py-2.5 rounded-lg text-xs mono font-bold tracking-wider">
                + ADD COMPETITOR
              </button>
            </div>
          </div>
        )}
      </div>

      {/* PRODUCT DETAIL MODAL */}
      {showDetailModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto" onClick={() => setShowDetailModal(false)}>
          <div className="bg-[#0a0a0f] border border-stone-800 rounded-2xl w-full max-w-5xl my-8 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="relative">
              {/* Header */}
              <div className="border-b border-stone-800/60 p-6 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{selectedProduct.emoji}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${getScoreColor(selectedProduct.aiScore).bg} ${getScoreColor(selectedProduct.aiScore).text} border ${getScoreColor(selectedProduct.aiScore).border}`}>
                        {getScoreColor(selectedProduct.aiScore).label}
                      </div>
                      <div className="mono text-[10px] text-stone-500 uppercase tracking-wider">{selectedProduct.niche}</div>
                    </div>
                    <h2 className="display text-3xl text-stone-50">{selectedProduct.name}</h2>
                    <div className="flex items-center gap-4 mt-2 mono text-xs text-stone-400">
                      <span>${selectedProduct.bestPrice.toFixed(2)} cost</span>
                      <span className="text-stone-700">→</span>
                      <span className="text-emerald-400">${selectedProduct.retailPrice.toFixed(2)} retail</span>
                      <span className="text-stone-700">·</span>
                      <span>{selectedProduct.profitMargin}% margin</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setShowDetailModal(false)} className="p-2 hover:bg-stone-800 rounded-lg">
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 grid grid-cols-3 gap-6">
                {/* Left: AI Analysis */}
                <div className="col-span-2 space-y-5">
                  {/* AI Score Breakdown */}
                  <div className="bg-stone-900/40 border border-stone-800 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Brain size={14} className="text-emerald-400" />
                      <div className="mono text-[10px] text-emerald-400 uppercase tracking-wider">Neural Analysis</div>
                    </div>
                    <ResponsiveContainer width="100%" height={220}>
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="#292524" />
                        <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: '#a8a29e' }} />
                        <PolarRadiusAxis tick={{ fontSize: 9, fill: '#57534e' }} angle={90} />
                        <RechartsRadar name="Score" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Trend chart */}
                  <div className="bg-stone-900/40 border border-stone-800 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="mono text-[10px] text-stone-500 uppercase tracking-wider">30-Day Momentum</div>
                        <div className="display text-xl text-stone-100 mt-0.5">Trend Intelligence</div>
                      </div>
                      <div className="text-right">
                        <div className={`mono text-2xl ${selectedProduct.trend === 'rising' ? 'text-emerald-400' : 'text-red-400'}`}>
                          {selectedProduct.trendPct > 0 ? '+' : ''}{selectedProduct.trendPct}%
                        </div>
                      </div>
                    </div>
                    <ResponsiveContainer width="100%" height={160}>
                      <AreaChart data={trendData}>
                        <defs>
                          <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity={0.4}/>
                            <stop offset="100%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1c1917" />
                        <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#78716c' }} />
                        <YAxis tick={{ fontSize: 10, fill: '#78716c' }} />
                        <Tooltip contentStyle={{ background: '#0a0a0f', border: '1px solid #292524', fontSize: 12 }} />
                        <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fill="url(#trendGrad)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Source comparison */}
                  <div className="bg-stone-900/40 border border-stone-800 rounded-xl p-5">
                    <div className="mono text-[10px] text-stone-500 uppercase tracking-wider mb-4">Cross-Platform Price Comparison</div>
                    <div className="space-y-2">
                      {selectedProduct.sources.map((s, i) => {
                        const isBest = s.price === selectedProduct.bestPrice;
                        return (
                          <div key={i} className={`grid grid-cols-[140px_1fr_100px_80px_80px] gap-4 items-center py-2.5 px-3 rounded-lg ${isBest ? 'bg-emerald-500/5 border border-emerald-500/20' : 'bg-stone-900/50'}`}>
                            <div className="flex items-center gap-2">
                              {isBest && <Award size={12} className="text-emerald-400" />}
                              <span className="text-sm text-stone-200">{s.platform}</span>
                            </div>
                            <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${isBest ? 'bg-emerald-400' : 'bg-stone-600'}`}
                                style={{ width: `${(selectedProduct.bestPrice / s.price) * 100}%` }}></div>
                            </div>
                            <div className="mono text-sm text-right">{s.shipTime}</div>
                            <div className="mono text-xs text-right text-stone-500">MOQ {s.moq}</div>
                            <div className={`mono text-sm font-bold text-right ${isBest ? 'text-emerald-400' : 'text-stone-200'}`}>${s.price.toFixed(2)}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right: Signals + Actions */}
                <div className="space-y-4">
                  {/* Key metrics */}
                  <div className="bg-stone-900/40 border border-stone-800 rounded-xl p-5 space-y-3">
                    <div className="mono text-[10px] text-stone-500 uppercase tracking-wider">Key Metrics</div>
                    {[
                      { label: 'Competitors', value: selectedProduct.competitors.toLocaleString(), sub: `${selectedProduct.saturation}% saturated` },
                      { label: 'Monthly Volume', value: selectedProduct.monthlyVolume, sub: 'across platforms' },
                      { label: 'Est. Ad Cost/Sale', value: `$${selectedProduct.adCost}`, sub: 'Facebook+TikTok avg' },
                      { label: 'Projected ROI', value: `${selectedProduct.estimatedROI}%`, sub: 'after ad spend', highlight: true },
                    ].map((m, i) => (
                      <div key={i} className="border-t border-stone-800/50 pt-3 first:border-t-0 first:pt-0">
                        <div className="mono text-[10px] text-stone-500 uppercase">{m.label}</div>
                        <div className={`display text-2xl mt-0.5 ${m.highlight ? 'text-emerald-400' : 'text-stone-100'}`}>{m.value}</div>
                        <div className="mono text-[10px] text-stone-500 mt-0.5">{m.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Signals */}
                  {selectedProduct.signals.length > 0 && (
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap size={12} className="text-emerald-400" />
                        <div className="mono text-[10px] text-emerald-400 uppercase tracking-wider">Positive Signals</div>
                      </div>
                      <div className="space-y-1.5">
                        {selectedProduct.signals.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                            <Check size={12} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Red flags */}
                  {selectedProduct.redFlags.length > 0 && (
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle size={12} className="text-red-400" />
                        <div className="mono text-[10px] text-red-400 uppercase tracking-wider">Risk Flags</div>
                      </div>
                      <div className="space-y-1.5">
                        {selectedProduct.redFlags.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                            <X size={12} className="text-red-400 mt-0.5 flex-shrink-0" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="space-y-2">
                    <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 py-3 rounded-lg text-xs mono font-bold tracking-wider flex items-center justify-center gap-2">
                      <Sparkles size={14} /> GENERATE AI CONTENT
                    </button>
                    <button className="w-full bg-stone-800 hover:bg-stone-700 text-stone-100 py-3 rounded-lg text-xs mono font-bold tracking-wider flex items-center justify-center gap-2">
                      <ShoppingBag size={14} /> IMPORT TO STORE
                    </button>
                    <button onClick={() => toggleWatchlist(selectedProduct.id)} className="w-full bg-transparent border border-stone-700 hover:border-amber-500/40 text-stone-300 py-3 rounded-lg text-xs mono font-bold tracking-wider flex items-center justify-center gap-2">
                      <Star size={14} /> {watchlist.includes(selectedProduct.id) ? 'WATCHING' : 'ADD TO WATCHLIST'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
