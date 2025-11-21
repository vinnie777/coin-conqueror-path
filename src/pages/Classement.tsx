import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Users, TrendingUp, Medal } from "lucide-react";

const generalRanking = [
  { rank: 1, name: "Marie D.", score: 2850, xp: 3200, zones: 7, avatar: "👩", trend: "up" },
  { rank: 2, name: "Thomas L.", score: 2720, xp: 3050, zones: 7, avatar: "👨", trend: "up" },
  { rank: 3, name: "Sophie M.", score: 2650, xp: 2980, zones: 6, avatar: "👩", trend: "same" },
  { rank: 4, name: "Lucas B.", score: 2480, xp: 2750, zones: 6, avatar: "👨", trend: "down" },
  { rank: 5, name: "Emma R.", score: 2350, xp: 2600, zones: 6, avatar: "👩", trend: "up" },
  { rank: 6, name: "Hugo F.", score: 2280, xp: 2520, zones: 5, avatar: "👨", trend: "up" },
  { rank: 7, name: "Léa K.", score: 2150, xp: 2400, zones: 5, avatar: "👩", trend: "same" },
  { rank: 8, name: "Nathan P.", score: 2080, xp: 2300, zones: 5, avatar: "👨", trend: "down" },
  { rank: 9, name: "Chloé V.", score: 1950, xp: 2150, zones: 4, avatar: "👩", trend: "up" },
  { rank: 10, name: "Antoine M.", score: 1820, xp: 2000, zones: 4, avatar: "👨", trend: "same" },
];

const teamRanking = [
  { rank: 1, name: "Les Loups de Wall Street", members: 12, avgScore: 2450, totalXP: 29400, avatar: "🐺" },
  { rank: 2, name: "Bull Market Gang", members: 15, avgScore: 2380, totalXP: 35700, avatar: "🐂" },
  { rank: 3, name: "Investment Masters", members: 10, avgScore: 2320, totalXP: 23200, avatar: "💼" },
  { rank: 4, name: "Les Stratèges", members: 8, avgScore: 2210, totalXP: 17680, avatar: "🎯" },
  { rank: 5, name: "Finance Warriors", members: 11, avgScore: 2150, totalXP: 23650, avatar: "⚔️" },
  { rank: 6, name: "Capital Builders", members: 9, avgScore: 2080, totalXP: 18720, avatar: "🏗️" },
  { rank: 7, name: "Smart Money", members: 13, avgScore: 1990, totalXP: 25870, avatar: "🧠" },
  { rank: 8, name: "Les Investisseurs", members: 7, avgScore: 1920, totalXP: 13440, avatar: "📈" },
];

const topPlayers = generalRanking.slice(0, 3);

const Classement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/map">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la carte
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
          </div>
          <Link to="/dashboard">
            <Button variant="outline" className="font-semibold">
              Tableau de bord
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-accent" />
            <h1 className="text-4xl sm:text-5xl font-bold">Classement</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Découvre les meilleurs investisseurs de Flow
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">🏆 Top 3</h2>
          <div className="grid md:grid-cols-3 gap-6 items-end">
            {/* 2nd Place */}
            <Card className="p-6 border-2 border-gray-400 bg-gradient-to-br from-gray-100/10 to-gray-200/10 order-1 md:order-1">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-4xl border-4 border-gray-300 shadow-xl">
                  {topPlayers[1].avatar}
                </div>
                <div className="text-6xl mb-3">🥈</div>
                <h3 className="font-bold text-xl mb-1">{topPlayers[1].name}</h3>
                <div className="text-3xl font-bold text-gray-400 mb-2">{topPlayers[1].score}</div>
                <div className="text-sm text-muted-foreground">points</div>
                <div className="mt-4 pt-4 border-t border-border space-y-1">
                  <div className="text-sm">⭐ {topPlayers[1].xp} XP</div>
                  <div className="text-sm">🗺️ {topPlayers[1].zones}/7 zones</div>
                </div>
              </div>
            </Card>

            {/* 1st Place */}
            <Card className="p-6 border-2 border-accent bg-gradient-to-br from-accent/20 to-yellow-500/20 order-first md:order-2 scale-105">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center text-5xl border-4 border-yellow-400 shadow-2xl animate-pulse">
                  {topPlayers[0].avatar}
                </div>
                <div className="text-7xl mb-3">🥇</div>
                <h3 className="font-bold text-2xl mb-1">{topPlayers[0].name}</h3>
                <div className="text-4xl font-bold text-accent mb-2">{topPlayers[0].score}</div>
                <div className="text-sm text-muted-foreground">points</div>
                <div className="mt-4 pt-4 border-t border-border space-y-1">
                  <div className="text-sm">⭐ {topPlayers[0].xp} XP</div>
                  <div className="text-sm">🗺️ {topPlayers[0].zones}/7 zones</div>
                </div>
              </div>
            </Card>

            {/* 3rd Place */}
            <Card className="p-6 border-2 border-orange-400 bg-gradient-to-br from-orange-100/10 to-orange-200/10 order-2 md:order-3">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-4xl border-4 border-orange-300 shadow-xl">
                  {topPlayers[2].avatar}
                </div>
                <div className="text-6xl mb-3">🥉</div>
                <h3 className="font-bold text-xl mb-1">{topPlayers[2].name}</h3>
                <div className="text-3xl font-bold text-orange-400 mb-2">{topPlayers[2].score}</div>
                <div className="text-sm text-muted-foreground">points</div>
                <div className="mt-4 pt-4 border-t border-border space-y-1">
                  <div className="text-sm">⭐ {topPlayers[2].xp} XP</div>
                  <div className="text-sm">🗺️ {topPlayers[2].zones}/7 zones</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tabs for Rankings */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="general" className="gap-2">
                <Medal className="w-4 h-4" />
                Classement Général
              </TabsTrigger>
              <TabsTrigger value="teams" className="gap-2">
                <Users className="w-4 h-4" />
                Classement par Équipe
              </TabsTrigger>
            </TabsList>

            {/* General Ranking */}
            <TabsContent value="general" className="space-y-3">
              {generalRanking.map((player) => {
                const getRankColor = (rank: number) => {
                  if (rank === 1) return "from-accent/20 to-yellow-500/20 border-accent";
                  if (rank === 2) return "from-gray-400/20 to-gray-500/20 border-gray-400";
                  if (rank === 3) return "from-orange-400/20 to-orange-500/20 border-orange-400";
                  return "from-card to-muted/30 border-border";
                };

                const getRankEmoji = (rank: number) => {
                  if (rank === 1) return "🥇";
                  if (rank === 2) return "🥈";
                  if (rank === 3) return "🥉";
                  return `${rank}`;
                };

                const getTrendIcon = (trend: string) => {
                  if (trend === "up") return <TrendingUp className="w-4 h-4 text-secondary" />;
                  if (trend === "down") return <TrendingUp className="w-4 h-4 text-destructive rotate-180" />;
                  return <span className="text-muted-foreground">—</span>;
                };

                return (
                  <Card 
                    key={player.rank} 
                    className={`p-4 border-2 bg-gradient-to-r ${getRankColor(player.rank)} hover:scale-[1.02] transition-all`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold border-2 border-border shadow-md">
                          {player.rank <= 3 ? getRankEmoji(player.rank) : player.rank}
                        </div>
                        <div className="text-3xl">{player.avatar}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{player.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>⭐ {player.xp} XP</span>
                            <span>🗺️ {player.zones}/7</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{player.score}</div>
                          <div className="text-xs text-muted-foreground">points</div>
                        </div>
                        <div className="w-8">
                          {getTrendIcon(player.trend)}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </TabsContent>

            {/* Team Ranking */}
            <TabsContent value="teams" className="space-y-3">
              {teamRanking.map((team) => {
                const getRankColor = (rank: number) => {
                  if (rank === 1) return "from-accent/20 to-yellow-500/20 border-accent";
                  if (rank === 2) return "from-gray-400/20 to-gray-500/20 border-gray-400";
                  if (rank === 3) return "from-orange-400/20 to-orange-500/20 border-orange-400";
                  return "from-card to-muted/30 border-border";
                };

                const getRankEmoji = (rank: number) => {
                  if (rank === 1) return "🥇";
                  if (rank === 2) return "🥈";
                  if (rank === 3) return "🥉";
                  return `${rank}`;
                };

                return (
                  <Card 
                    key={team.rank} 
                    className={`p-4 border-2 bg-gradient-to-r ${getRankColor(team.rank)} hover:scale-[1.02] transition-all`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold border-2 border-border shadow-md">
                          {team.rank <= 3 ? getRankEmoji(team.rank) : team.rank}
                        </div>
                        <div className="text-3xl">{team.avatar}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{team.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>👥 {team.members} membres</span>
                            <span>⭐ {team.totalXP} XP total</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{team.avgScore}</div>
                        <div className="text-xs text-muted-foreground">moy./membre</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Classement;
