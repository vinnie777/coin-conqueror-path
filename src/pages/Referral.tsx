import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Share2, Copy, Gift, Users, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Referral = () => {
  const { toast } = useToast();
  const [referralCode] = useState("EDUFIN360-ABC123");
  const referrals = [
    { name: "Marie D.", status: "active", coins: 100, date: "Il y a 2 jours" },
    { name: "Thomas L.", status: "active", coins: 100, date: "Il y a 5 jours" },
    { name: "Sophie M.", status: "pending", coins: 0, date: "Il y a 1 jour" }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Code copié !",
      description: "Le code de parrainage a été copié dans le presse-papier.",
    });
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: "Rejoins Edufin360",
        text: `Utilise mon code ${referralCode} pour gagner 50 InvestCoins gratuits !`,
        url: window.location.origin
      });
    } else {
      copyReferralCode();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-green-100 relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-16 bg-white/60 rounded-full blur-sm"></div>
        <div className="absolute top-20 right-20 w-40 h-20 bg-white/50 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-18 bg-white/40 rounded-full blur-sm"></div>
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
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-accent via-secondary to-accent border-2 border-primary shadow-lg">
              <span className="text-lg sm:text-2xl">🪙</span>
              <span className="font-bold text-sm sm:text-lg text-white">1,250</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-green-700 shadow-2xl mb-4 transform -rotate-1">
            <h1 className="text-2xl sm:text-4xl font-black text-white" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
              🎁 PROGRAMME PARRAINAGE 🎁
            </h1>
          </div>
          <p className="text-sm sm:text-lg text-gray-700 font-black max-w-2xl mx-auto drop-shadow-sm">
            Partage Edufin360 avec tes amis et gagnez tous les deux des InvestCoins !
          </p>
        </div>

        {/* Rewards Banner */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <Card className="p-6 sm:p-8 border-3 sm:border-4 border-gray-800 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 shadow-2xl animate-pulse-glow">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 rounded-xl bg-white border-3 border-gray-800 shadow-xl hover:scale-110 transition-all duration-300">
                <div className="text-5xl sm:text-6xl mb-2 animate-float">🎁</div>
                <div className="text-3xl sm:text-4xl font-black text-gray-800 mb-1">100 🪙</div>
                <div className="text-xs sm:text-sm text-gray-600 font-black">Pour chaque ami parrainé</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border-3 border-gray-800 shadow-xl hover:scale-110 transition-all duration-300">
                <div className="text-5xl sm:text-6xl mb-2 animate-float">💎</div>
                <div className="text-3xl sm:text-4xl font-black text-gray-800 mb-1">50 🪙</div>
                <div className="text-xs sm:text-sm text-gray-600 font-black">Pour ton ami à l'inscription</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Share Section */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="text-2xl">🔗</div>
                Partager ton code
              </h2>

              <div className="mb-4 sm:mb-6">
                <label className="text-xs sm:text-sm font-black text-gray-700 mb-2 block">
                  TON CODE DE PARRAINAGE
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-300 border-3 border-gray-800 font-mono font-black text-sm sm:text-lg text-center shadow-lg">
                    {referralCode}
                  </div>
                  <Button 
                    onClick={copyReferralCode}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-black border-3 border-gray-800 shadow-lg hover:scale-110 transition-all duration-300"
                    size="lg"
                  >
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={shareReferral}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-black border-3 border-green-700 shadow-2xl hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  📢 Partager avec des amis
                </Button>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="font-black border-3 border-gray-800 bg-white hover:bg-blue-100 hover:scale-105 transition-all">
                    📧 Email
                  </Button>
                  <Button variant="outline" className="font-black border-3 border-gray-800 bg-white hover:bg-green-100 hover:scale-105 transition-all">
                    💬 SMS
                  </Button>
                  <Button variant="outline" className="font-black border-3 border-gray-800 bg-white hover:bg-emerald-100 hover:scale-105 transition-all">
                    📱 WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            {/* How it Works */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-4 sm:mb-6">❓ Comment ça marche ?</h2>
              
              <div className="space-y-4">
                {[
                  { 
                    step: "1", 
                    title: "Partage ton code", 
                    desc: "Envoie ton code à tes amis",
                    icon: "🔗",
                    color: "from-blue-400 to-blue-600"
                  },
                  { 
                    step: "2", 
                    title: "Ils s'inscrivent", 
                    desc: "Ils utilisent ton code à l'inscription",
                    icon: "✍️",
                    color: "from-purple-400 to-purple-600"
                  },
                  { 
                    step: "3", 
                    title: "Gagnez des coins", 
                    desc: "Vous recevez tous les deux vos récompenses",
                    icon: "🎉",
                    color: "from-yellow-400 to-orange-500"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 hover:border-gray-800 hover:scale-105 transition-all duration-300">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl sm:text-4xl border-3 border-white shadow-xl flex-shrink-0 animate-float`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-base sm:text-lg text-gray-800 mb-1">{item.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-bold">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Stats & History */}
          <div className="space-y-4 sm:space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mx-auto mb-2 animate-float">👥</div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">3</div>
                  <div className="text-xs sm:text-sm text-white/90 font-black">Amis parrainés</div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mx-auto mb-2 animate-float">🎁</div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">200 🪙</div>
                  <div className="text-xs sm:text-sm text-white/90 font-black">Coins gagnés</div>
                </div>
              </Card>
            </div>

            {/* Referrals History */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="text-2xl">📊</div>
                Tes parrainages
              </h2>

              <div className="space-y-3">
                {referrals.map((ref, i) => (
                  <div 
                    key={i}
                    className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 border-3 border-gray-700 hover:border-purple-500 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-base sm:text-lg border-2 border-white shadow-lg">
                          {ref.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-black text-sm sm:text-base text-gray-800">{ref.name}</div>
                          <div className="text-xs text-gray-600 font-bold">{ref.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-2 py-1 rounded-full text-xs font-black border-2 ${
                          ref.status === 'active' 
                            ? 'bg-green-400 text-white border-green-700' 
                            : 'bg-yellow-300 text-gray-800 border-yellow-600'
                        }`}>
                          {ref.status === 'active' ? '✓ Actif' : '⏳ En attente'}
                        </div>
                        {ref.coins > 0 && (
                          <div className="font-black text-sm sm:text-base text-green-600 mt-1">
                            +{ref.coins} 🪙
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {referrals.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3 animate-float">🎯</div>
                  <p className="font-black text-gray-800">Aucun parrainage pour le moment</p>
                  <p className="text-sm mt-1 text-gray-600 font-bold">Commence à partager ton code !</p>
                </div>
              )}
            </Card>

            {/* Bonus Info */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-orange-600 bg-gradient-to-br from-orange-300 via-red-300 to-pink-300 shadow-2xl animate-pulse-glow">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-3 animate-float">🚀</div>
                <h3 className="text-lg sm:text-xl font-black text-white drop-shadow-lg mb-2">Bonus spécial !</h3>
                <p className="text-xs sm:text-sm text-white font-black mb-4 drop-shadow">
                  Parraine 10 amis et gagne un badge exclusif + 500 coins bonus !
                </p>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden border-3 border-gray-800 shadow-inner">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500" style={{ width: '30%' }}></div>
                </div>
                <div className="text-xs text-white font-black mt-2 drop-shadow">3/10 amis parrainés 🎯</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referral;
