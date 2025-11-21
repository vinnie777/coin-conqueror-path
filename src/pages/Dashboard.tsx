import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Trophy, Coins, Flame, MapPin, Star, Briefcase, Users, Building2 } from "lucide-react";
import logo from "@/assets/logo.png";
import zone2Img from "@/assets/zone2-desert.png";

const Dashboard = () => {
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
          <Link to="/map">
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Voir la carte
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Tableau de bord</h1>
            <p className="text-muted-foreground">Continue ta progression et deviens un expert !</p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Link to="/portfolio">
            <Card className="p-4 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Portfolio</div>
                  <div className="text-xs text-muted-foreground">Gère tes investissements</div>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/referral">
            <Card className="p-4 border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Parrainage</div>
                  <div className="text-xs text-muted-foreground">Gagne des coins</div>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/banking">
            <Card className="p-4 border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">BNP Privée</div>
                  <div className="text-xs text-muted-foreground">Services bancaires</div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl">🪙</span>
            </div>
            <div className="text-3xl font-bold text-primary mb-1">1,250</div>
            <div className="text-sm text-muted-foreground">InvestCoins</div>
          </Card>

          <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-green-600 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl">🔥</span>
            </div>
            <div className="text-3xl font-bold text-secondary mb-1">5 jours</div>
            <div className="text-sm text-muted-foreground">Streak actuel</div>
          </Card>

          <Card className="p-6 border-2 border-accent/20 hover:border-accent/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl">🗺️</span>
            </div>
            <div className="text-3xl font-bold text-accent mb-1">1/7</div>
            <div className="text-sm text-muted-foreground">Zones complétées</div>
          </Card>

          <Card className="p-6 border-2 border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl">🏅</span>
            </div>
            <div className="text-3xl font-bold mb-1">#42</div>
            <div className="text-sm text-muted-foreground">Classement</div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity of the day */}
            <Card className="p-0 border-2 border-primary/20 overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={zone2Img} 
                  alt="Zone du jour"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-sm font-medium border border-secondary shadow-lg">
                  Disponible maintenant
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Activité du jour</h2>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                    🎯
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Quiz : Le Désert de la Volatilité</h3>
                <p className="text-muted-foreground mb-4">Réponds à 5 questions sur les fluctuations du marché et comprends la psychologie des investisseurs.</p>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <div className="text-2xl mb-1">⏱️</div>
                    <div className="text-xs text-muted-foreground">5 minutes</div>
                  </div>
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-center">
                    <div className="text-2xl mb-1">🪙</div>
                    <div className="text-xs font-bold text-accent">+150 coins</div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-center">
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="text-xs font-bold text-primary">+100 XP</div>
                  </div>
                </div>

                <Link to="/quiz/2">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                    Commencer l'activité
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Progress */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Progression sur la carte</h2>
              
              <div className="space-y-4">
                {[
                  { zone: "La Baie des Fondamentaux", status: "completed", progress: 100, color: "bg-secondary" },
                  { zone: "Le Désert de la Volatilité", status: "current", progress: 60, color: "bg-primary" },
                  { zone: "La Forêt de la Diversification", status: "locked", progress: 0, color: "bg-muted" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.zone}</span>
                        {item.status === "completed" && (
                          <span className="text-secondary">✓</span>
                        )}
                        {item.status === "current" && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            En cours
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/map">
                <Button variant="outline" className="w-full mt-6">
                  Voir la carte complète
                </Button>
              </Link>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Challenge of the week */}
            <Card className="p-6 border-2 border-accent/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                Challenge de la semaine
              </h2>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Progression</span>
                  <span className="text-sm font-bold">2/7 zones</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent to-orange-600 transition-all duration-500" style={{ width: "28%" }}></div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20 mb-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-bold text-accent mb-1">Prix : 100€</div>
                  <div className="text-xs text-muted-foreground">Pour le meilleur score</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Termine les 7 zones cette semaine pour participer au tirage au sort !
              </p>
            </Card>

            {/* Badges */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Badges récents
              </h2>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: "🌊", name: "Fondamentaux" },
                  { emoji: "🔥", name: "Streak 5j" },
                  { emoji: "🎯", name: "Premier quiz" },
                  { emoji: "⚡", name: "Rapide" },
                  { emoji: "🌟", name: "Débutant" },
                  { emoji: "📚", name: "Studieux" }
                ].map((badge, i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-card to-muted/50 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center p-2"
                  >
                    <div className="text-3xl mb-1">{badge.emoji}</div>
                    <div className="text-xs text-center text-muted-foreground font-medium">
                      {badge.name}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Leaderboard Preview */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Top 5 cette semaine</h2>
              
              <div className="space-y-3">
                {[
                  { rank: 1, name: "Marie D.", score: 2850, emoji: "🥇" },
                  { rank: 2, name: "Thomas L.", score: 2720, emoji: "🥈" },
                  { rank: 3, name: "Sophie M.", score: 2650, emoji: "🥉" },
                  { rank: 4, name: "Lucas B.", score: 2480, emoji: "4️⃣" },
                  { rank: 5, name: "Emma R.", score: 2350, emoji: "5️⃣" }
                ].map((player) => (
                  <div 
                    key={player.rank}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{player.emoji}</span>
                      <span className="font-medium">{player.name}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">{player.score}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
