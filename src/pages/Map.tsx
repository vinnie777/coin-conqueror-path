import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, CheckCircle, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const zones = [
  {
    id: 1,
    name: "La Baie des Fondamentaux",
    description: "Risque, rendement, inflation et bases de l'investissement",
    status: "unlocked",
    color: "from-blue-500 to-blue-700",
    icon: "🌊"
  },
  {
    id: 2,
    name: "Le Désert de la Volatilité",
    description: "Fluctuations et psychologie du marché",
    status: "current",
    color: "from-orange-500 to-orange-700",
    icon: "🏜️"
  },
  {
    id: 3,
    name: "La Forêt de la Diversification",
    description: "Allocation d'actifs, ETF et corrélation",
    status: "locked",
    color: "from-green-500 to-green-700",
    icon: "🌲"
  },
  {
    id: 4,
    name: "Les Montagnes du Rendement",
    description: "Long terme, composition des gains et performance",
    status: "locked",
    color: "from-gray-500 to-gray-700",
    icon: "⛰️"
  },
  {
    id: 5,
    name: "Les Rivières des Cash-Flows",
    description: "Dividendes, coupons et flux financiers",
    status: "locked",
    color: "from-cyan-500 to-cyan-700",
    icon: "💧"
  },
  {
    id: 6,
    name: "Le Glacier de la Préservation",
    description: "Sécurité, obligations et protection du capital",
    status: "locked",
    color: "from-indigo-400 to-indigo-600",
    icon: "🧊"
  },
  {
    id: 7,
    name: "Le Palais du Patrimoine",
    description: "Gestion globale, PEA, assurance-vie et transmission",
    status: "locked",
    color: "from-yellow-500 to-yellow-700",
    icon: "🏛️"
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
            <span className="text-sm font-bold text-primary">1/7 zones</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" style={{ width: "14%" }}></div>
          </div>
        </div>
      </section>

      {/* Map Zones */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto grid gap-6">
          {zones.map((zone, index) => {
            const isUnlocked = zone.status === "unlocked";
            const isCurrent = zone.status === "current";
            const isLocked = zone.status === "locked";

            return (
              <Card 
                key={zone.id}
                className={`p-6 border-2 transition-all duration-300 hover:scale-[1.02] ${
                  isCurrent ? "border-primary shadow-lg shadow-primary/20 animate-pulse-glow" :
                  isUnlocked ? "border-secondary/50 hover:border-secondary" :
                  "border-border/50 opacity-60"
                }`}
              >
                <div className="flex items-start gap-6">
                  {/* Zone Icon */}
                  <div className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${zone.color} flex items-center justify-center text-4xl ${isLocked && "grayscale"}`}>
                    {zone.icon}
                    {isUnlocked && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-secondary rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {isLocked && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-muted rounded-full flex items-center justify-center">
                        <Lock className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Zone Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{zone.name}</h3>
                        <p className="text-muted-foreground">{zone.description}</p>
                      </div>
                      {isCurrent && (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                          En cours
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-4">
                      {(isUnlocked || isCurrent) ? (
                        <Link to={`/quiz/${zone.id}`}>
                          <Button className={`${isCurrent ? "bg-gradient-to-r from-primary to-secondary" : ""}`}>
                            <Play className="w-4 h-4 mr-2" />
                            {isCurrent ? "Continuer" : "Rejouer"}
                          </Button>
                        </Link>
                      ) : (
                        <Button disabled variant="outline">
                          <Lock className="w-4 h-4 mr-2" />
                          Verrouillé
                        </Button>
                      )}
                      
                      {isUnlocked && (
                        <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Complétée
                        </div>
                      )}
                      
                      {isCurrent && (
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">🪙</span>
                            <span className="text-sm font-medium">+150 InvestCoins</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">🏆</span>
                            <span className="text-sm font-medium">Badge exclusif</span>
                          </div>
                        </div>
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
