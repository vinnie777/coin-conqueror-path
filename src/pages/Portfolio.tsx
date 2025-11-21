import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Users, Trophy } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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

  const performanceData = [
    { time: "Sem 1", coins: 800 },
    { time: "Sem 2", coins: 950 },
    { time: "Sem 3", coins: 920 },
    { time: "Sem 4", coins: 1050 },
    { time: "Sem 5", coins: 1150 },
    { time: "Sem 6", coins: 1250 }
  ];

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
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
        <div className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-yellow-600 shadow-2xl mb-6 sm:mb-8 transform -rotate-1">
          <h1 className="text-2xl sm:text-4xl font-black text-yellow-900 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
            💼 MON PORTFOLIO 💼
          </h1>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-2 animate-float">💰</div>
              <div className="text-2xl sm:text-4xl font-black text-gray-800">{availableCoins}</div>
              <div className="text-xs sm:text-sm text-gray-600 font-black">Coins disponibles</div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-3 sm:border-4 border-green-700 bg-gradient-to-br from-green-400 to-green-600 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-2 animate-float">📈</div>
              <div className="text-2xl sm:text-4xl font-black text-white">{investedCoins}</div>
              <div className="text-xs sm:text-sm text-white/90 font-black">Coins investis</div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 border-3 sm:border-4 border-orange-700 bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-2 animate-float">🎯</div>
              <div className="text-2xl sm:text-4xl font-black text-white">+8.5%</div>
              <div className="text-xs sm:text-sm text-white/90 font-black">Performance totale</div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Investissements */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-gray-800">💼 Mes Investissements</h2>
                <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-black border-2 border-green-700 shadow-lg">
                  + Investir
                </Button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {investments.map((inv, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 border-3 border-gray-700 hover:border-green-500 transition-all hover:scale-105 duration-300 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-sm sm:text-base text-gray-800">{inv.name}</span>
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
                      <span className="text-xs sm:text-sm text-gray-700 font-bold">Investi: {inv.amount} 🪙</span>
                      <span className="text-xs sm:text-sm font-black text-green-600">
                        Valeur: {Math.round(inv.amount * (1 + inv.performance / 100))} 🪙
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-400 border-3 border-yellow-600 shadow-lg">
                <p className="text-xs sm:text-sm text-yellow-900 font-black text-center">
                  💡 Diversifie tes investissements pour réduire les risques !
                </p>
              </div>
            </Card>

            {/* Performance Chart */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-4 sm:mb-6">📈 Évolution des Coins</h2>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="time" 
                      stroke="#374151"
                      style={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <YAxis 
                      stroke="#374151"
                      style={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff',
                        border: '3px solid #374151',
                        borderRadius: '12px',
                        fontWeight: 'bold'
                      }}
                      formatter={(value) => [`${value} 🪙`, 'Coins']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="coins" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-gray-800">
                <p className="text-xs sm:text-sm text-gray-800 font-black text-center">
                  📈 +450 coins gagnés ces 6 dernières semaines !
                </p>
              </div>
            </Card>
          </div>

          {/* Rankings */}
          <div className="space-y-4 sm:space-y-6">
            {/* Global Ranking */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl">🏆</div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-800">Classement Général</h2>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {globalRanking.map((player) => (
                  <div 
                    key={player.rank}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border-3 transition-all duration-300 hover:scale-105 ${
                      player.isUser 
                        ? 'bg-gradient-to-r from-yellow-300 to-yellow-400 border-yellow-700 shadow-2xl animate-pulse-glow' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-700 hover:border-green-500 shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-black text-lg sm:text-xl border-2 border-gray-800 ${
                        player.rank <= 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-white'
                      }`}>
                        {player.rank <= 3 ? ['🥇', '🥈', '🥉'][player.rank - 1] : `#${player.rank}`}
                      </div>
                      <span className={`font-black text-sm sm:text-base ${player.isUser ? 'text-yellow-900' : 'text-gray-800'}`}>
                        {player.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm sm:text-base text-gray-800">{player.coins} 🪙</span>
                      {player.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Friends Ranking */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-purple-700 bg-gradient-to-br from-purple-400 to-pink-400 shadow-2xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl">👥</div>
                <h2 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg">Classement Amis</h2>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {friendsRanking.map((friend) => (
                  <div 
                    key={friend.rank}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border-3 transition-all duration-300 hover:scale-105 ${
                      friend.isUser 
                        ? 'bg-white border-yellow-600 shadow-2xl animate-pulse-glow' 
                        : 'bg-white/90 border-gray-700 hover:border-purple-500 shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-3xl sm:text-4xl">{friend.avatar}</div>
                      <div>
                        <div className={`font-black text-sm sm:text-base ${friend.isUser ? 'text-yellow-900' : 'text-gray-800'}`}>
                          {friend.name}
                        </div>
                        <div className="text-xs text-gray-600 font-bold">#{friend.rank}</div>
                      </div>
                    </div>
                    <span className="font-black text-sm sm:text-base text-gray-800">{friend.coins} 🪙</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 sm:mt-6 bg-white hover:bg-white/90 text-gray-800 font-black border-3 border-gray-800 shadow-xl hover:scale-105 transition-all duration-300">
                <Users className="w-4 h-4 mr-2" />
                👥 Inviter des amis
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
