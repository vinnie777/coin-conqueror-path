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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Edufin360" className="w-10 h-10" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
              <span className="text-2xl">🪙</span>
              <span className="font-bold text-lg">1,250</span>
              <span className="text-sm text-muted-foreground">InvestCoins</span>
            </div>
            <Link to="/dashboard">
              <Button variant="outline">Tableau de bord</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Carte de l'Aventure Financière
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Parcours les 7 zones pour maîtriser l'univers de la finance. Chaque zone débloque de nouvelles connaissances et récompenses.
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progression globale</span>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-bold text-primary">800 XP</span>
            </div>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500" style={{ width: "23%" }}></div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">Zone 1 complétée • Zone 2 en cours</span>
            <span className="text-xs font-bold text-primary">1/7 zones</span>
          </div>
        </div>
      </section>

      {/* Map Zones */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8">
          {zones.map((zone, index) => {
            const isUnlocked = zone.status === "unlocked";
            const isCurrent = zone.status === "current";
            const isLocked = zone.status === "locked";
            const progress = (zone.completedLevels / zone.levels) * 100;

            return (
              <Card 
                key={zone.id}
                className={`overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] ${
                  isCurrent ? "border-primary shadow-xl shadow-primary/20 animate-pulse-glow" :
                  isUnlocked ? "border-secondary/50 hover:border-secondary" :
                  "border-border/50 opacity-70"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Zone Image */}
                  <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={zone.image} 
                      alt={zone.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isLocked ? "grayscale blur-sm" : "hover:scale-110"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:to-card"></div>
                    
                    {/* Zone Number Badge */}
                    <div className={`absolute top-4 left-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${zone.color} flex items-center justify-center text-4xl shadow-lg ${isLocked && "grayscale"}`}>
                      {zone.icon}
                    </div>

                    {/* Status Indicator */}
                    {isUnlocked && (
                      <div className="absolute top-4 right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    )}
                    {isLocked && (
                      <div className="absolute top-4 right-4 w-10 h-10 bg-muted rounded-full flex items-center justify-center shadow-lg">
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Zone Info */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold">{zone.name}</h3>
                          {isCurrent && (
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 animate-pulse">
                              En cours
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-lg mb-4">{zone.description}</p>
                      </div>
                    </div>

                    {/* Level Progress */}
                    {(isUnlocked || isCurrent) && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Niveaux</span>
                          <span className="text-sm font-bold text-primary">{zone.completedLevels}/{zone.levels}</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${zone.color} transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Award className="w-4 h-4 text-accent" />
                          <span className="text-xs text-muted-foreground">{zone.xp} XP gagnés</span>
                        </div>
                      </div>
                    )}

                    {/* Rewards */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <span>🎁</span>
                        Récompenses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {zone.rewards.map((reward, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20"
                          >
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-6">
                      {(isUnlocked || isCurrent) ? (
                        <>
                          <Link to={`/quiz/${zone.id}`} className="flex-1">
                            <Button className={`w-full ${isCurrent ? "bg-gradient-to-r from-primary to-secondary" : ""}`}>
                              <Play className="w-4 h-4 mr-2" />
                              {isCurrent ? "Continuer l'aventure" : "Rejouer"}
                            </Button>
                          </Link>
                          {isUnlocked && (
                            <div className="flex items-center gap-2 text-sm text-secondary font-medium px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20">
                              <CheckCircle className="w-4 h-4" />
                              Complétée
                            </div>
                          )}
                        </>
                      ) : (
                        <Button disabled variant="outline" className="flex-1">
                          <Lock className="w-4 h-4 mr-2" />
                          Complète la zone précédente pour débloquer
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Map;
