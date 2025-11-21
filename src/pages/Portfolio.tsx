import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Users, Trophy } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";

const Portfolio = () => {
  const [investedCoins, setInvestedCoins] = useState(500);
  const totalCoins = 1250;
  const availableCoins = totalCoins - investedCoins;

  const investments = [
    { name: "Actions Tech", amount: 200, performance: 12.5, color: "text-primary" },
    { name: "ETF Monde", amount: 150, performance: -3.2, color: "text-destructive" },
    { name: "Crypto", amount: 100, performance: 25.8, color: "text-primary" },
    { name: "Obligations", amount: 50, performance: 4.1, color: "text-primary" }
  ];

  const globalRanking = [
    { rank: 1, name: "Marie D.", coins: 5850, trend: "up" },
    { rank: 2, name: "Thomas L.", coins: 5720, trend: "up" },
    { rank: 3, name: "Sophie M.", coins: 5650, trend: "down" },
    { rank: 42, name: "Toi", coins: 1250, trend: "up", isUser: true },
    { rank: 4, name: "Lucas B.", coins: 5480, trend: "up" }
  ];

  const friendsRanking = [
    { rank: 1, name: "Alex M.", coins: 1850, avatar: "👨" },
    { rank: 2, name: "Toi", coins: 1250, avatar: "😊", isUser: true },
    { rank: 3, name: "Julie K.", coins: 980, avatar: "👩" },
    { rank: 4, name: "Marc P.", coins: 750, avatar: "👨" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-white">
      {/* Navigation */}
      <nav className="border-b-2 border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" className="font-bold">
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Retour</span>
            </Button>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Edufin360" className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-accent via-secondary to-accent border-2 border-primary shadow-lg">
              <span className="text-lg sm:text-2xl">🪙</span>
              <span className="font-bold text-sm sm:text-lg text-white">{totalCoins}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <div className="inline-block bg-gradient-to-r from-primary via-secondary to-primary px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-primary shadow-2xl mb-6 sm:mb-8 transform -rotate-1">
          <h1 className="text-2xl sm:text-4xl font-black text-white text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
            MON PORTFOLIO
          </h1>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">💰</div>
              <div className="text-xl sm:text-3xl font-black text-foreground">{availableCoins}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-bold">Coins disponibles</div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-2 sm:border-4 border-primary bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">📈</div>
              <div className="text-xl sm:text-3xl font-black text-primary">{investedCoins}</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-bold">Coins investis</div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-2 sm:border-4 border-accent bg-gradient-to-br from-accent/10 to-accent/20 shadow-xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2">🎯</div>
              <div className="text-xl sm:text-3xl font-black text-accent">+8.5%</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-bold">Performance totale</div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Investissements */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-foreground">Mes Investissements</h2>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                  + Investir
                </Button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {investments.map((inv, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border-2 border-border hover:border-primary/50 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm sm:text-base text-foreground">{inv.name}</span>
                      <div className="flex items-center gap-1 sm:gap-2">
                        {inv.performance > 0 ? (
                          <TrendingUp className="w-4 h-4 text-primary" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        )}
                        <span className={`font-bold text-sm sm:text-base ${inv.color}`}>
                          {inv.performance > 0 ? '+' : ''}{inv.performance}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-muted-foreground">Investi: {inv.amount} 🪙</span>
                      <span className="text-xs sm:text-sm font-bold text-primary">
                        Valeur: {Math.round(inv.amount * (1 + inv.performance / 100))} 🪙
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-primary/10 border-2 border-primary">
                <p className="text-xs sm:text-sm text-foreground font-bold text-center">
                  💡 Diversifie tes investissements pour réduire les risques !
                </p>
              </div>
            </Card>

            {/* Performance History */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <h2 className="text-xl sm:text-2xl font-black text-foreground mb-4 sm:mb-6">Performances Passées</h2>
              
              <div className="space-y-3">
                {[
                  { period: "Aujourd'hui", gain: 15, percentage: 1.2 },
                  { period: "Cette semaine", gain: 85, percentage: 7.1 },
                  { period: "Ce mois", gain: 105, percentage: 8.5 },
                  { period: "Total", gain: 150, percentage: 12.0 }
                ].map((perf, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                    <span className="font-bold text-sm sm:text-base text-foreground">{perf.period}</span>
                    <div className="text-right">
                      <div className="font-black text-primary text-sm sm:text-base">+{perf.gain} 🪙</div>
                      <div className="text-xs text-accent font-bold">+{perf.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Rankings */}
          <div className="space-y-4 sm:space-y-6">
            {/* Global Ranking */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <h2 className="text-xl sm:text-2xl font-black text-foreground">Classement Général</h2>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {globalRanking.map((player) => (
                  <div 
                    key={player.rank}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 transition-all ${
                      player.isUser 
                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-primary shadow-lg' 
                        : 'bg-muted/30 border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-sm sm:text-base ${
                        player.rank <= 3 ? 'bg-gradient-to-br from-accent to-accent/70 text-white' : 'bg-muted text-foreground'
                      }`}>
                        {player.rank <= 3 ? ['🥇', '🥈', '🥉'][player.rank - 1] : `#${player.rank}`}
                      </div>
                      <span className={`font-bold text-sm sm:text-base ${player.isUser ? 'text-primary' : 'text-foreground'}`}>
                        {player.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm sm:text-base text-foreground">{player.coins} 🪙</span>
                      {player.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-primary" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Friends Ranking */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-secondary bg-gradient-to-br from-secondary/10 to-accent/10 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                <h2 className="text-xl sm:text-2xl font-black text-foreground">Classement Amis</h2>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {friendsRanking.map((friend) => (
                  <div 
                    key={friend.rank}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 transition-all ${
                      friend.isUser 
                        ? 'bg-white border-secondary shadow-lg' 
                        : 'bg-white/80 border-white hover:border-secondary/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-2xl sm:text-3xl">{friend.avatar}</div>
                      <div>
                        <div className={`font-bold text-sm sm:text-base ${friend.isUser ? 'text-secondary' : 'text-foreground'}`}>
                          {friend.name}
                        </div>
                        <div className="text-xs text-muted-foreground">#{friend.rank}</div>
                      </div>
                    </div>
                    <span className="font-black text-sm sm:text-base text-foreground">{friend.coins} 🪙</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 sm:mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold border-2 border-white">
                <Users className="w-4 h-4 mr-2" />
                Inviter des amis
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
