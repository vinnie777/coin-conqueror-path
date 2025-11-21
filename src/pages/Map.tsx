import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, CheckCircle, Play, Star, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";
import zone1Img from "@/assets/zone1-bay.png";
import zone2Img from "@/assets/zone2-desert.png";
import zone3Img from "@/assets/zone3-forest.png";
import zone4Img from "@/assets/zone4-mountains.png";
import zone5Img from "@/assets/zone5-rivers.png";
import zone6Img from "@/assets/zone6-glacier.png";
import zone7Img from "@/assets/zone7-palace.png";

const zones = [
  {
    id: 1,
    name: "La Baie des Fondamentaux",
    description: "Risque, rendement, inflation et bases de l'investissement",
    status: "unlocked",
    color: "from-blue-500 to-blue-700",
    icon: "🌊",
    image: zone1Img,
    levels: 5,
    completedLevels: 5,
    xp: 500,
    rewards: ["Badge Explorateur", "150 InvestCoins"]
  },
  {
    id: 2,
    name: "Le Désert de la Volatilité",
    description: "Fluctuations et psychologie du marché",
    status: "current",
    color: "from-orange-500 to-orange-700",
    icon: "🏜️",
    image: zone2Img,
    levels: 5,
    completedLevels: 3,
    xp: 300,
    rewards: ["Badge Aventurier", "200 InvestCoins", "Power-Up Streak"]
  },
  {
    id: 3,
    name: "La Forêt de la Diversification",
    description: "Allocation d'actifs, ETF et corrélation",
    status: "locked",
    color: "from-green-500 to-green-700",
    icon: "🌲",
    image: zone3Img,
    levels: 6,
    completedLevels: 0,
    xp: 0,
    rewards: ["Badge Stratège", "250 InvestCoins", "Accès Portfolio"]
  },
  {
    id: 4,
    name: "Les Montagnes du Rendement",
    description: "Long terme, composition des gains et performance",
    status: "locked",
    color: "from-gray-500 to-gray-700",
    icon: "⛰️",
    image: zone4Img,
    levels: 7,
    completedLevels: 0,
    xp: 0,
    rewards: ["Badge Investisseur", "300 InvestCoins", "Calculateur ROI"]
  },
  {
    id: 5,
    name: "Les Rivières des Cash-Flows",
    description: "Dividendes, coupons et flux financiers",
    status: "locked",
    color: "from-cyan-500 to-cyan-700",
    icon: "💧",
    image: zone5Img,
    levels: 6,
    completedLevels: 0,
    xp: 0,
    rewards: ["Badge Capitaliste", "350 InvestCoins", "Tracker Dividendes"]
  },
  {
    id: 6,
    name: "Le Glacier de la Préservation",
    description: "Sécurité, obligations et protection du capital",
    status: "locked",
    color: "from-indigo-400 to-indigo-600",
    icon: "🧊",
    image: zone6Img,
    levels: 5,
    completedLevels: 0,
    xp: 0,
    rewards: ["Badge Protecteur", "400 InvestCoins", "Shield Bonus"]
  },
  {
    id: 7,
    name: "Le Palais du Patrimoine",
    description: "Gestion globale, PEA, assurance-vie et transmission",
    status: "locked",
    color: "from-yellow-500 to-yellow-700",
    icon: "🏛️",
    image: zone7Img,
    levels: 8,
    completedLevels: 0,
    xp: 0,
    rewards: ["Badge Maître", "500 InvestCoins", "Certificat Expert", "Consultation BNP"]
  }
];

const Map = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-green-100 relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-16 bg-white/60 rounded-full blur-sm"></div>
        <div className="absolute top-20 right-20 w-40 h-20 bg-white/50 rounded-full blur-sm"></div>
        <div className="absolute top-40 left-1/3 w-36 h-18 bg-white/40 rounded-full blur-sm"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="font-bold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Edufin360" className="w-10 h-10" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 border-2 border-yellow-600 shadow-lg">
              <span className="text-2xl">🪙</span>
              <span className="font-bold text-lg text-yellow-900">1,250</span>
            </div>
            <Link to="/dashboard">
              <Button variant="outline" className="font-bold border-2">Tableau de bord</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* World Header */}
      <div className="container mx-auto px-4 py-8 text-center relative z-10">
        <div className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-8 py-4 rounded-2xl border-4 border-yellow-600 shadow-2xl transform -rotate-1">
          <h1 className="text-5xl font-black text-yellow-900 tracking-tight" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
            MONDE FINANCIER
          </h1>
        </div>
        
        {/* Stats Bar */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/90 rounded-full border-3 border-gray-800 shadow-lg">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-gray-800">800 XP</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/90 rounded-full border-3 border-gray-800 shadow-lg">
            <Award className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="font-bold text-gray-800">1/7 Zones</span>
          </div>
        </div>
      </div>

      {/* Game Map Path */}
      <div className="container mx-auto px-4 pb-20 relative">
        <div className="max-w-5xl mx-auto relative">
          {/* SVG Path connecting zones */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <path
              d="M 150 100 Q 200 150, 250 100 T 450 100 Q 550 150, 650 200 T 850 300 Q 900 400, 800 500 T 450 600 Q 300 650, 150 700"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20,10"
            />
          </svg>

          {/* Zone Nodes */}
          <div className="relative space-y-32 pt-10" style={{ zIndex: 1 }}>
            {zones.map((zone, index) => {
              const isUnlocked = zone.status === "unlocked";
              const isCurrent = zone.status === "current";
              const isLocked = zone.status === "locked";
              
              // Alternating left/right positioning
              const isLeft = index % 2 === 0;
              const positions = [
                { x: 150, y: 100 },   // Zone 1 - left
                { x: 650, y: 200 },   // Zone 2 - right
                { x: 200, y: 300 },   // Zone 3 - left
                { x: 700, y: 400 },   // Zone 4 - right
                { x: 250, y: 500 },   // Zone 5 - left
                { x: 650, y: 600 },   // Zone 6 - right
                { x: 300, y: 700 }    // Zone 7 - left
              ];

              return (
                <div
                  key={zone.id}
                  className={`flex items-center gap-8 ${isLeft ? 'justify-start' : 'justify-end'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Zone Content Card */}
                  <Card 
                    className={`w-80 border-4 shadow-2xl transition-all duration-300 hover:scale-105 ${
                      isCurrent ? 'border-red-500 animate-pulse-glow' :
                      isUnlocked ? 'border-green-500' :
                      'border-gray-400 opacity-60'
                    } ${isLeft ? 'order-2' : 'order-1'}`}
                  >
                    <div className="p-0 overflow-hidden">
                      {/* Zone Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={zone.image} 
                          alt={zone.name}
                          className={`w-full h-full object-cover ${isLocked ? 'grayscale' : ''}`}
                        />
                        {isLocked && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Lock className="w-12 h-12 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Zone Info */}
                      <div className="p-4 bg-white">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-black text-xl text-gray-800">{zone.name}</h3>
                          {isUnlocked && <CheckCircle className="w-6 h-6 text-green-500 fill-green-500" />}
                          {isCurrent && <Play className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" />}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{zone.description}</p>
                        
                        {/* Progress for unlocked/current zones */}
                        {(isUnlocked || isCurrent) && (
                          <div className="mb-3">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-bold text-gray-700">Niveaux</span>
                              <span className="font-bold text-gray-900">{zone.completedLevels}/{zone.levels}</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden border border-gray-400">
                              <div 
                                className={`h-full bg-gradient-to-r ${zone.color}`}
                                style={{ width: `${(zone.completedLevels / zone.levels) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Action Button */}
                        {(isUnlocked || isCurrent) ? (
                          <Link to={`/quiz/${zone.id}`}>
                            <Button 
                              className={`w-full font-bold border-2 shadow-lg ${
                                isCurrent 
                                  ? 'bg-gradient-to-r from-red-500 to-orange-500 border-red-700 hover:from-red-600 hover:to-orange-600' 
                                  : 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-700 hover:from-green-600 hover:to-emerald-600'
                              }`}
                            >
                              {isCurrent ? '▶ JOUER' : '↻ REJOUER'}
                            </Button>
                          </Link>
                        ) : (
                          <Button disabled className="w-full font-bold border-2 border-gray-400 opacity-50">
                            🔒 VERROUILLÉ
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>

                  {/* Zone Node/Icon */}
                  <div className={`relative ${isLeft ? 'order-1' : 'order-2'}`}>
                    <div 
                      className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl border-4 shadow-2xl transition-transform duration-300 ${
                        isCurrent 
                          ? 'bg-gradient-to-br from-red-400 to-red-600 border-red-800 animate-bounce' 
                          : isUnlocked 
                          ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-800' 
                          : 'bg-gradient-to-br from-gray-400 to-gray-600 border-gray-800 grayscale'
                      }`}
                    >
                      {zone.icon}
                    </div>
                    
                    {/* Zone Number */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-3 border-gray-800 rounded-full flex items-center justify-center font-black text-gray-800 shadow-lg">
                      {zone.id}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Map;
