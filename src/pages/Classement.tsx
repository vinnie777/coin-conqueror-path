import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Users, TrendingUp, Medal, Award, Star } from "lucide-react";

const generalRanking = [
  { rank: 1, name: "Marie D.", score: 2850, xp: 3200, zones: 7, initials: "MD", trend: "up" },
  { rank: 2, name: "Thomas L.", score: 2720, xp: 3050, zones: 7, initials: "TL", trend: "up" },
  { rank: 3, name: "Sophie M.", score: 2650, xp: 2980, zones: 6, initials: "SM", trend: "same" },
  { rank: 4, name: "Lucas B.", score: 2480, xp: 2750, zones: 6, initials: "LB", trend: "down" },
  { rank: 5, name: "Emma R.", score: 2350, xp: 2600, zones: 6, initials: "ER", trend: "up" },
  { rank: 6, name: "Hugo F.", score: 2280, xp: 2520, zones: 5, initials: "HF", trend: "up" },
  { rank: 7, name: "Léa K.", score: 2150, xp: 2400, zones: 5, initials: "LK", trend: "same" },
  { rank: 8, name: "Nathan P.", score: 2080, xp: 2300, zones: 5, initials: "NP", trend: "down" },
  { rank: 9, name: "Chloé V.", score: 1950, xp: 2150, zones: 4, initials: "CV", trend: "up" },
  { rank: 10, name: "Antoine M.", score: 1820, xp: 2000, zones: 4, initials: "AM", trend: "same" },
];

const teamRanking = [
  { rank: 1, name: "Les Loups de Wall Street", members: 12, avgScore: 2450, totalXP: 29400 },
  { rank: 2, name: "Bull Market Gang", members: 15, avgScore: 2380, totalXP: 35700 },
  { rank: 3, name: "Investment Masters", members: 10, avgScore: 2320, totalXP: 23200 },
  { rank: 4, name: "Les Stratèges", members: 8, avgScore: 2210, totalXP: 17680 },
  { rank: 5, name: "Finance Warriors", members: 11, avgScore: 2150, totalXP: 23650 },
  { rank: 6, name: "Capital Builders", members: 9, avgScore: 2080, totalXP: 18720 },
  { rank: 7, name: "Smart Money", members: 13, avgScore: 1990, totalXP: 25870 },
  { rank: 8, name: "Les Investisseurs", members: 7, avgScore: 1920, totalXP: 13440 },
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
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Classement</h1>
            <p className="text-muted-foreground">Les meilleurs investisseurs de la plateforme</p>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* 1st Place */}
          <Card className="p-6 border-2 border-accent/50 hover:border-accent transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-accent">#1</span>
                  <Medal className="w-5 h-5 text-accent" />
                </div>
                <div className="text-xs text-muted-foreground">Premier</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-white mb-3">
                {topPlayers[0].initials}
              </div>
              <h3 className="font-bold text-xl mb-1">{topPlayers[0].name}</h3>
              <div className="text-3xl font-bold text-accent mb-2">{topPlayers[0].score}</div>
              <div className="text-sm text-muted-foreground">points</div>
            </div>
            <div className="space-y-2 pt-4 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">XP</span>
                <span className="font-medium">{topPlayers[0].xp}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Zones</span>
                <span className="font-medium">{topPlayers[0].zones}/7</span>
              </div>
            </div>
          </Card>

          {/* 2nd Place */}
          <Card className="p-6 border-2 border-border hover:border-primary/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">#2</span>
                </div>
                <div className="text-xs text-muted-foreground">Deuxième</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-white mb-3">
                {topPlayers[1].initials}
              </div>
              <h3 className="font-bold text-xl mb-1">{topPlayers[1].name}</h3>
              <div className="text-3xl font-bold mb-2">{topPlayers[1].score}</div>
              <div className="text-sm text-muted-foreground">points</div>
            </div>
            <div className="space-y-2 pt-4 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">XP</span>
                <span className="font-medium">{topPlayers[1].xp}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Zones</span>
                <span className="font-medium">{topPlayers[1].zones}/7</span>
              </div>
            </div>
          </Card>

          {/* 3rd Place */}
          <Card className="p-6 border-2 border-border hover:border-primary/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">#3</span>
                </div>
                <div className="text-xs text-muted-foreground">Troisième</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-white mb-3">
                {topPlayers[2].initials}
              </div>
              <h3 className="font-bold text-xl mb-1">{topPlayers[2].name}</h3>
              <div className="text-3xl font-bold mb-2">{topPlayers[2].score}</div>
              <div className="text-sm text-muted-foreground">points</div>
            </div>
            <div className="space-y-2 pt-4 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">XP</span>
                <span className="font-medium">{topPlayers[2].xp}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Zones</span>
                <span className="font-medium">{topPlayers[2].zones}/7</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs for Rankings */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
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
              const getTrendIcon = (trend: string) => {
                if (trend === "up") return <TrendingUp className="w-4 h-4 text-secondary" />;
                if (trend === "down") return <TrendingUp className="w-4 h-4 text-destructive rotate-180" />;
                return <span className="text-muted-foreground text-sm">—</span>;
              };

              return (
                <Card 
                  key={player.rank} 
                  className="p-4 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center font-bold text-foreground">
                        {player.rank}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                        {player.initials}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{player.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {player.xp} XP
                          </span>
                          <span>{player.zones}/7 zones</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{player.score}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                      <div className="w-8 flex justify-center">
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
              return (
                <Card 
                  key={team.rank} 
                  className="p-4 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center font-bold text-foreground">
                        {team.rank}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{team.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{team.members} membres</span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {team.totalXP} XP
                          </span>
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
      </section>
    </div>
  );
};

export default Classement;
