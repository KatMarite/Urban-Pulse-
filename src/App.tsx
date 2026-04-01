import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Bell, 
  Map as MapIcon, 
  Bus, 
  Calendar, 
  Wallet,
  Search,
  SlidersHorizontal,
  ArrowRight,
  QrCode,
  MapPin,
  ChevronRight,
  History,
  CreditCard,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Info,
  Bookmark,
  Ticket,
  BrainCircuit,
  Pin,
  Star,
  User,
  PlusCircle,
  Zap,
  ShieldCheck,
  CircleX
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- Components ---

const TopBar = () => (
  <header className="fixed top-0 w-full z-50 bg-emerald-50/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
    <div className="flex items-center gap-4">
      <button className="p-2 transition-all duration-300 hover:bg-emerald-100/50 rounded-full text-emerald-800">
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="font-black text-xl text-emerald-900 uppercase tracking-widest">Urban Pulse</h1>
    </div>
    <button className="p-2 transition-all duration-300 hover:bg-emerald-100/50 rounded-full text-emerald-800">
      <Bell className="w-6 h-6" />
    </button>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'map', label: 'Map', icon: MapIcon },
    { id: 'routes', label: 'Routes', icon: Bus },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'account', label: 'Account', icon: Wallet },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-8 bg-white/90 backdrop-blur-2xl rounded-t-3xl z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex flex-col items-center justify-center px-4 py-2 transition-all duration-200 active:scale-95",
            activeTab === tab.id 
              ? "bg-secondary-container text-on-secondary-container rounded-2xl px-6 scale-105" 
              : "text-zinc-400"
          )}
        >
          <tab.icon className={cn("w-6 h-6", activeTab === tab.id && "fill-current")} />
          <span className="text-[11px] font-semibold tracking-wide uppercase mt-1">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

// --- Screens ---

const MapScreen = () => (
  <div className="relative h-full w-full overflow-hidden">
    {/* Map Background */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(247, 250, 245, 0.7), rgba(247, 250, 245, 0.7)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` 
      }}
    >
      {/* User Location */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping" />
          <div className="relative w-6 h-6 bg-primary border-4 border-white rounded-full shadow-lg" />
        </div>
      </div>

      {/* Bus Markers */}
      <div className="absolute top-1/3 left-1/4 animate-pulse">
        <div className="bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
          <Bus className="w-4 h-4 fill-current" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Route 01</span>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/3">
        <div className="bg-primary text-on-primary px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
          <Bus className="w-4 h-4 fill-current" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Route 14</span>
        </div>
      </div>

      {/* Wayfinders */}
      <MapPin className="absolute top-1/4 right-1/4 text-primary-container opacity-60 w-6 h-6" />
      <MapPin className="absolute bottom-1/2 left-1/3 text-primary-container opacity-60 w-6 h-6" />
    </div>

    {/* Floating UI */}
    <div className="relative z-10 h-full flex flex-col p-6 pt-24 pb-32 pointer-events-none">
      <div className="w-full max-w-xl mx-auto pointer-events-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-outline-variant/10">
          <Search className="w-5 h-5 text-outline" />
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-medium placeholder-on-surface-variant/60" 
            placeholder="Where are you going today?" 
            type="text"
          />
          <button className="bg-surface-container-high p-2 rounded-xl text-on-surface hover:bg-surface-container-highest transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-auto pointer-events-auto space-y-4">
        <div className="flex justify-center">
          <div className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Live Network Tracking
          </div>
        </div>

        <div className="w-full max-w-xl mx-auto bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 shadow-[0_12px_48px_rgba(0,0,0,0.12)] border border-outline-variant/5">
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">Active Connection</span>
              <h2 className="text-2xl font-black text-on-surface flex items-center gap-2">
                Route 01 <ArrowRight className="w-6 h-6 text-primary" /> Pretoria Central
              </h2>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black text-primary leading-none">2</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Min Away</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center">
              <Bus className="w-8 h-8 text-primary-container fill-current" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-on-surface">Church Square Stop</span>
                <span className="text-xs font-semibold text-secondary">On Time</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(0, 107, 34, 0)", "0 0 0 10px rgba(0, 107, 34, 0.1)", "0 0 0 0px rgba(0, 107, 34, 0)"] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              className="bg-primary hover:bg-primary-container text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <QrCode className="w-5 h-5" />
              Board Now
            </motion.button>
            <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface py-4 px-6 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2">
              <MapIcon className="w-5 h-5" />
              Full Route
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RoutesScreen = ({ onSavedRoutesClick }: { onSavedRoutesClick: () => void }) => {
  const [routes, setRoutes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchRoutes = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const response = await fetch('/api/routes');
      const data = await response.json();
      setRoutes(data);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching routes:', error);
    } finally {
      if (isManual) setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
    const interval = setInterval(() => fetchRoutes(), 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pt-24 pb-32 px-6 max-w-2xl mx-auto overflow-y-auto">
      <section className="mb-10 flex justify-between items-end">
        <div>
          <p className="text-primary font-semibold text-xs tracking-widest uppercase mb-1">Live Updates</p>
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tighter leading-tight">Active Routes</h2>
          <div className="mt-2 h-1.5 w-12 bg-secondary-container rounded-full" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <button 
            onClick={() => fetchRoutes(true)}
            disabled={refreshing}
            className={cn(
              "flex items-center gap-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container px-3 py-1.5 rounded-full transition-all active:scale-95",
              refreshing && "opacity-50 cursor-not-allowed"
            )}
          >
            <div className={cn("w-1.5 h-1.5 bg-emerald-500 rounded-full", refreshing ? "animate-spin" : "animate-pulse")} />
            {refreshing ? 'Refreshing...' : 'Live'} • {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </button>
        </div>
      </section>

      <section className="mb-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
            <Search className="w-5 h-5" />
          </div>
          <input 
            className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-0 text-on-surface placeholder:text-outline transition-all duration-300 border-b-2 border-transparent focus:border-primary" 
            placeholder="Find your route or destination..." 
            type="text"
          />
        </div>
      </section>

      <div className="space-y-6">
        {loading ? (
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 bg-surface-container-low rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          routes.map((route) => (
            <article key={route.id} className="bg-white rounded-xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-on-surface leading-none">Line {route.id}: {route.name}</h3>
                  <p className="text-xs text-on-surface-variant mt-1 font-medium">{route.via}</p>
                </div>
                <div className="bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded-full text-[11px] font-bold tracking-tight whitespace-nowrap">
                  {route.time}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={cn("w-2.5 h-2.5 rounded-full", route.color)} />
                <span className="text-sm font-semibold text-on-surface">{route.status}</span>
                <span className="ml-auto text-xs text-outline font-medium">{route.bus}</span>
              </div>
              {route.progress !== undefined && (
                <div className="mt-4 pt-4 border-t border-surface-container flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                    <Bus className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <motion.div 
                        initial={false}
                        animate={{ width: `${route.progress}%` }}
                        className="h-full bg-primary-container rounded-full" 
                      />
                    </div>
                  </div>
                </div>
              )}
              {route.alert && (
                <div className="mt-4 pt-4 border-t border-surface-container flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-on-secondary-container">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-xs text-on-surface-variant leading-relaxed">
                    {route.alert}
                  </div>
                </div>
              )}
            </article>
          ))
        )}

        <div className="bg-emerald-900 rounded-3xl p-6 text-white overflow-hidden relative min-h-[160px] flex flex-col justify-end">
          <img 
            alt="City Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10">
            <h4 className="text-lg font-bold">Network Map</h4>
            <p className="text-sm text-emerald-100/80 mb-4">View all 14 active lines in real-time</p>
            <button className="bg-secondary-container text-emerald-950 font-bold px-4 py-2 rounded-xl text-sm w-max">
              Open Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleScreen = () => (
  <div className="absolute inset-0 pt-24 pb-32 px-6 max-w-2xl mx-auto overflow-y-auto">
    <section className="mb-10">
      <div className="flex flex-col gap-1">
        <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em]">Transit Hub</span>
        <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Live Schedules</h2>
      </div>
      <p className="text-on-surface-variant mt-2 text-sm leading-relaxed max-w-xs">
        Real-time departures and optimized routes across Pretoria’s central corridors.
      </p>
    </section>

    <div className="flex flex-col gap-4 mb-10">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
          <Search className="w-5 h-5" />
        </div>
        <input 
          className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface placeholder:text-outline shadow-sm" 
          placeholder="Find a route or destination..." 
          type="text"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap shadow-sm transition-transform active:scale-95">
          <SlidersHorizontal className="w-4 h-4" />
          Line 100-200
        </button>
        <button className="flex items-center gap-2 bg-surface-container-high text-on-surface px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-transform active:scale-95">
          <ArrowRight className="w-4 h-4 rotate-90" />
          Direction
        </button>
        <button className="flex items-center gap-2 bg-surface-container-high text-on-surface px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-transform active:scale-95">
          <History className="w-4 h-4" />
          Recent
        </button>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      {[
        { line: '102', name: 'Hatfield via CBD', start: 'Church Square', duration: '45 min', arrival: '08m', status: 'Live Now', statusColor: 'bg-secondary-container/30 text-secondary', lineBg: 'bg-primary', scheds: ['09:45', '10:15', '10:45'] },
        { line: '204', name: 'Menlyn Park', start: 'Loftus Versfeld', duration: '22 min', arrival: '14m', status: 'On Time', statusColor: 'bg-surface-container-high text-on-surface-variant', lineBg: 'bg-on-surface', scheds: ['09:50', '10:20', '10:50'], peak: true },
        { line: '155', name: 'Sunnyside North', start: 'University', duration: '30 min', arrival: '28m', status: 'Delayed', statusColor: 'bg-error-container text-error', lineBg: 'bg-primary', scheds: ['10:05', '10:35', '11:05'] },
      ].map((item) => (
        <div key={item.line} className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:translate-y-[-2px] hover:shadow-md">
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className={cn("px-3 py-1 text-white font-black text-lg rounded-lg tracking-tighter", item.lineBg)}>LINE {item.line}</span>
                <span className={cn("font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md", item.statusColor)}>{item.status}</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mt-2">{item.name}</h3>
              <p className="text-on-surface-variant text-xs font-medium">Starts: {item.start} • {item.duration} trip</p>
            </div>
            <div className="text-right">
              <span className={cn("text-[32px] font-black leading-none", item.line === '155' ? 'text-error' : 'text-primary')}>{item.arrival}</span>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Next arrival</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {item.scheds.map((time, i) => (
              <div key={i} className={cn(
                "p-3 rounded-xl flex flex-col gap-1 text-center",
                item.peak && i === 2 ? "bg-white border-2 border-primary/10" : "bg-surface-container-low"
              )}>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-tighter",
                  item.peak && i === 2 ? "text-primary" : "text-outline"
                )}>
                  {item.peak && i === 2 ? 'PEAK' : i === 0 ? 'EARLY' : i === 1 ? 'NEXT' : 'LATE'}
                </span>
                <span className="text-on-surface font-black text-lg">{time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="relative bg-primary-container overflow-hidden rounded-xl p-6 flex items-center justify-between min-h-[140px]">
        <div className="relative z-10 w-2/3">
          <h4 className="text-white font-extrabold text-xl leading-tight">Weekly Commuter Passes</h4>
          <p className="text-primary-fixed text-sm mt-1 mb-4">Save up to 15% on daily trips to the CBD.</p>
          <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-all">
            Upgrade Now
          </button>
        </div>
        <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20">
          <Ticket className="w-40 h-40 text-white" />
        </div>
      </div>
    </div>
  </div>
);

const AccountScreen = ({ onSavedRoutesClick, onRouteStatesClick }: { onSavedRoutesClick: () => void, onRouteStatesClick: () => void }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="absolute inset-0 pt-24 pb-32 px-6 max-w-2xl mx-auto overflow-y-auto space-y-8">
    <section className="flex items-center gap-5">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-surface-container-high ring-4 ring-white shadow-lg">
        <img 
          alt="User Profile" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">Kabelo Motau</h2>
        <p className="text-on-surface-variant font-medium">Gold Tier Member</p>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2rem] text-white flex flex-col justify-between aspect-[1.58/1] shadow-xl md:col-span-2 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="flex justify-between items-start relative z-10">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Current Balance</span>
            <div className="text-5xl font-black tracking-tighter">R 150.00</div>
            <p className="text-[10px] font-medium opacity-60 mt-1">Updated: 2 mins ago</p>
          </div>
          <CreditCard className="w-10 h-10 opacity-50" />
        </div>
        <div className="flex justify-between items-end relative z-10">
          <div>
            <div className="text-xs uppercase tracking-widest opacity-80 mb-1">Card Number</div>
            <div className="font-mono text-lg tracking-widest">•••• 8829</div>
          </div>
          <Building2 className="w-8 h-8 opacity-40" />
        </div>
      </div>

      <button className="bg-white p-6 rounded-3xl flex items-center gap-4 hover:scale-[1.02] transition-transform duration-200 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
          <Wallet className="w-6 h-6 fill-current" />
        </div>
        <div className="text-left">
          <span className="block font-bold text-lg">Reload Card</span>
          <span className="text-xs text-on-surface-variant font-medium">Instant top-up</span>
        </div>
      </button>
      <button className="bg-white p-6 rounded-3xl flex items-center gap-4 hover:scale-[1.02] transition-transform duration-200 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface">
          <History className="w-6 h-6" />
        </div>
        <div className="text-left">
          <span className="block font-bold text-lg">Transactions</span>
          <span className="text-xs text-on-surface-variant font-medium">View activity</span>
        </div>
      </button>
    </div>

    <section className="bg-surface-container-low p-1 rounded-3xl">
      <div className="bg-white p-6 rounded-[1.4rem] space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-bold flex items-center gap-1.5 relative">
                AI Smart Routes
                <div 
                  className="cursor-help p-1 -m-1"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => setShowTooltip(!showTooltip)}
                >
                  <Info className="w-3.5 h-3.5 text-on-surface-variant/70" />
                </div>
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-emerald-900 text-white text-[10px] rounded-xl shadow-xl z-50 leading-relaxed font-medium"
                    >
                      <div className="font-bold mb-1 flex items-center gap-1 text-emerald-300">
                        <BrainCircuit className="w-3 h-3" />
                        How it works
                      </div>
                      AI Smart Routes analyzes your frequent trips and live traffic to suggest the most efficient departure times and alternative lines automatically.
                      <div className="absolute bottom-[-4px] left-4 w-2 h-2 bg-emerald-900 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </h3>
              <p className="text-xs text-on-surface-variant">Personalized commute suggestions</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
          </label>
        </div>
        <div className="h-px bg-surface-container" />
        <button 
          onClick={onSavedRoutesClick}
          className="w-full flex items-center justify-between hover:bg-surface-container-low transition-colors rounded-lg p-1 -m-1"
        >
          <div className="flex items-center gap-3">
            <Bookmark className="w-6 h-6 text-primary fill-current" />
            <h3 className="font-bold">Saved Routes</h3>
          </div>
          <ChevronRight className="w-5 h-5 text-on-surface-variant" />
        </button>
        <div className="h-px bg-surface-container" />
        <button 
          onClick={onRouteStatesClick}
          className="w-full flex items-center justify-between hover:bg-surface-container-low transition-colors rounded-lg p-1 -m-1"
        >
          <div className="flex items-center gap-3">
            <Info className="w-6 h-6 text-secondary" />
            <h3 className="font-bold">Route Documentation</h3>
          </div>
          <ChevronRight className="w-5 h-5 text-on-surface-variant" />
        </button>
      </div>
    </section>

    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-extrabold tracking-tight">Payment Methods</h3>
        <button className="text-primary font-bold text-sm">Add New</button>
      </div>
      <div className="space-y-3">
        <div className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="font-bold">•••• 4412</p>
              <p className="text-xs text-on-surface-variant">Expires 12/26</p>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm opacity-60">
          <div className="flex items-center gap-4">
            <div className="w-14 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">EFT Payment</p>
              <p className="text-xs text-on-surface-variant">Linked Bank Account</p>
            </div>
          </div>
          <div className="w-6 h-6 rounded-full border-2 border-outline-variant" />
        </div>
      </div>
    </section>

    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-extrabold tracking-tight">Travel History</h3>
        <button className="text-primary font-bold text-sm">View All</button>
      </div>
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
        {[
          { date: 'Mar 31, 2026', route: 'Line A1: Menlyn Central', fare: 'R 15.50', time: '08:45 AM' },
          { date: 'Mar 30, 2026', route: 'Line X5: Pretoria CBD', fare: 'R 12.00', time: '05:15 PM' },
          { date: 'Mar 28, 2026', route: 'Line M2: Brooklyn Hub', fare: 'R 18.00', time: '09:30 AM' },
        ].map((trip, i) => (
          <div key={i} className={cn(
            "p-5 flex items-center justify-between",
            i !== 0 && "border-t border-surface-container"
          )}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">{trip.route}</p>
                <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">{trip.date} • {trip.time}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-black text-primary">{trip.fare}</p>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Completed</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <div className="flex items-center justify-center gap-2 py-4 text-on-surface-variant/60">
      <CheckCircle2 className="w-4 h-4" />
      <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Secure Transaction Layer</span>
    </div>
  </div>
  );
};

const SavedRoutesScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="absolute inset-0 pt-24 pb-32 px-8 overflow-y-auto">
    <div className="min-h-full flex flex-col items-center justify-center max-w-md mx-auto text-center space-y-12">
      <div className="relative w-full aspect-square max-w-[320px] mx-auto">
        <div className="absolute inset-0 bg-surface-container-low rounded-[48px] rotate-3 transform" />
        <div className="absolute inset-0 bg-surface-container-highest rounded-[48px] -rotate-3 transform overflow-hidden flex items-center justify-center">
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-primary-container/10 p-8 rounded-full mb-4">
              <Bus className="w-20 h-20 text-primary fill-current" />
            </div>
            <div className="w-24 h-1 bg-outline-variant/30 rounded-full" />
          </div>
          <svg className="absolute inset-0 opacity-10 pointer-events-none" viewBox="0 0 100 100">
            <path d="M0 20 Q 50 20, 50 50 T 100 80" fill="transparent" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20 0 Q 20 50, 50 50 T 80 100" fill="transparent" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
          <Pin className="w-4 h-4 fill-current" />
          <span className="text-xs font-bold uppercase tracking-widest">Quiet Zone</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="font-headline font-extrabold text-4xl tracking-tight text-on-surface">Your routes will live here</h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-[280px] mx-auto">
            Save your daily commutes for quick access to live tracking and schedules.
          </p>
        </div>
        <div className="pt-4">
          <button 
            onClick={onBack}
            className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold py-4 px-8 rounded-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-transform active:scale-95"
          >
            <Search className="w-5 h-5" />
            Find a Route
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left">
        <div className="bg-white p-5 rounded-2xl space-y-3 shadow-sm">
          <History className="w-6 h-6 text-primary" />
          <p className="text-[11px] font-bold uppercase tracking-widest text-outline">Real-time</p>
          <p className="text-sm font-semibold text-on-surface">Live arrival updates</p>
        </div>
        <div className="bg-white p-5 rounded-2xl space-y-3 shadow-sm">
          <Star className="w-6 h-6 text-secondary" />
          <p className="text-[11px] font-bold uppercase tracking-widest text-outline">Frequent</p>
          <p className="text-sm font-semibold text-on-surface">One-tap navigation</p>
        </div>
      </div>
    </div>
  </div>
);

const RouteStatesScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="absolute inset-0 pt-24 pb-32 px-6 max-w-5xl mx-auto overflow-y-auto">
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <button onClick={onBack} className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <h1 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tighter text-on-surface">Line 155 States</h1>
      </div>
      <p className="text-on-surface-variant font-medium tracking-wide">Status documentation for municipal transit routing system.</p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="group bg-white rounded-[24px] p-8 shadow-[0_24px_48px_-12px_rgba(25,28,26,0.08)] transition-all duration-300 hover:translate-y-[-4px]">
        <div className="flex justify-between items-start mb-12">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Route</span>
            <span className="text-5xl font-black font-headline text-on-surface">155</span>
          </div>
          <div className="bg-primary/10 p-4 rounded-2xl text-primary">
            <Calendar className="w-10 h-10 fill-current" />
          </div>
        </div>
        <div className="space-y-1 mb-8">
          <h3 className="text-2xl font-bold text-on-surface">On Time</h3>
          <p className="text-on-surface-variant leading-relaxed">System normal. All units operating according to frequency standards.</p>
        </div>
        <div className="flex items-center gap-2 bg-primary/5 py-3 px-4 rounded-xl border border-primary/10">
          <CheckCircle2 className="w-5 h-5 text-primary fill-current" />
          <span className="text-sm font-bold text-primary">Normal Service</span>
        </div>
      </div>

      <div className="group bg-white rounded-[24px] p-8 shadow-[0_24px_48px_-12px_rgba(25,28,26,0.08)] transition-all duration-300 hover:translate-y-[-4px]">
        <div className="flex justify-between items-start mb-12">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Route</span>
            <span className="text-5xl font-black font-headline text-on-surface">155</span>
          </div>
          <div className="bg-secondary-container/30 p-4 rounded-2xl text-secondary">
            <AlertTriangle className="w-10 h-10 fill-current" />
          </div>
        </div>
        <div className="space-y-1 mb-8">
          <h3 className="text-2xl font-bold text-on-surface">Delayed</h3>
          <p className="text-on-surface-variant leading-relaxed">Congestion on Eastern Artery causing minor schedule adjustments.</p>
        </div>
        <div className="flex items-center gap-2 bg-secondary-container/20 py-3 px-4 rounded-xl">
          <History className="w-5 h-5 text-secondary" />
          <span className="text-sm font-bold text-secondary">15m delay</span>
        </div>
      </div>

      <div className="group bg-white rounded-[24px] p-8 shadow-[0_24px_48px_-12px_rgba(25,28,26,0.08)] transition-all duration-300 hover:translate-y-[-4px]">
        <div className="flex justify-between items-start mb-12">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-error mb-1">Route</span>
            <span className="text-5xl font-black font-headline text-on-surface">155</span>
          </div>
          <div className="bg-error-container p-4 rounded-2xl text-error">
            <CircleX className="w-10 h-10 fill-current" />
          </div>
        </div>
        <div className="space-y-1 mb-8">
          <h3 className="text-2xl font-bold text-on-surface">Cancelled</h3>
          <p className="text-on-surface-variant leading-relaxed">Infrastructure maintenance required. Service will resume tomorrow.</p>
        </div>
        <div className="flex items-center gap-3 bg-error p-4 rounded-xl shadow-lg shadow-error/20">
          <Info className="w-5 h-5 text-white" />
          <span className="text-sm font-bold text-white uppercase tracking-wider">Service Suspended</span>
        </div>
      </div>
    </div>

    <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="font-headline font-bold text-3xl tracking-tight text-on-surface">Editorial Standards</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-12 bg-primary rounded-full mt-1" />
            <div>
              <h4 className="font-bold text-on-surface">Tonal Layering</h4>
              <p className="text-sm text-on-surface-variant">Visual depth is achieved through surface-container-lowest cards resting on surface-container-low backgrounds, avoiding heavy 1px borders.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-12 bg-secondary rounded-full mt-1" />
            <div>
              <h4 className="font-bold text-on-surface">Wayfinding Colors</h4>
              <p className="text-sm text-on-surface-variant">Secondary yellow is reserved for attention-critical cues, while Pretoria Green anchors the system stability.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl shadow-black/10">
        <img 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <span className="text-white/80 font-bold uppercase tracking-widest text-xs mb-1">Fleet Operations</span>
          <span className="text-white text-xl font-bold">Real-time Telemetry Active</span>
        </div>
      </div>
    </section>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [isSavedRoutesOpen, setIsSavedRoutesOpen] = useState(false);
  const [isRouteStatesOpen, setIsRouteStatesOpen] = useState(false);

  return (
    <div className="h-[100dvh] w-full bg-surface text-on-surface font-sans overflow-hidden flex flex-col">
      <TopBar />
      
      <main className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          {isSavedRoutesOpen ? (
            <motion.div
              key="saved-routes"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full relative"
            >
              <SavedRoutesScreen onBack={() => setIsSavedRoutesOpen(false)} />
            </motion.div>
          ) : isRouteStatesOpen ? (
            <motion.div
              key="route-states"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full relative"
            >
              <RouteStatesScreen onBack={() => setIsRouteStatesOpen(false)} />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full relative"
            >
              {activeTab === 'map' && <MapScreen />}
              {activeTab === 'routes' && <RoutesScreen onSavedRoutesClick={() => setIsSavedRoutesOpen(true)} />}
              {activeTab === 'schedule' && <ScheduleScreen />}
              {activeTab === 'account' && (
                <AccountScreen 
                  onSavedRoutesClick={() => setIsSavedRoutesOpen(true)} 
                  onRouteStatesClick={() => setIsRouteStatesOpen(true)}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={(tab) => {
        setActiveTab(tab);
        setIsSavedRoutesOpen(false);
        setIsRouteStatesOpen(false);
      }} />
    </div>
  );
}
