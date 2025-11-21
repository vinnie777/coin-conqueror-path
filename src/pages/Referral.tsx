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
              <span className="font-bold text-sm sm:text-lg text-white">1,250</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block bg-gradient-to-r from-secondary via-accent to-secondary px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-secondary shadow-2xl mb-4 transform -rotate-1">
            <h1 className="text-2xl sm:text-4xl font-black text-white" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
              PROGRAMME PARRAINAGE
            </h1>
          </div>
          <p className="text-sm sm:text-lg text-muted-foreground font-bold max-w-2xl mx-auto">
            Partage Edufin360 avec tes amis et gagnez tous les deux des InvestCoins !
          </p>
        </div>

        {/* Rewards Banner */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <Card className="p-6 sm:p-8 border-2 sm:border-4 border-accent bg-gradient-to-br from-accent/20 via-secondary/20 to-accent/20 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 rounded-xl bg-white border-2 border-border">
                <div className="text-4xl sm:text-5xl mb-2">🎁</div>
                <div className="text-2xl sm:text-3xl font-black text-primary mb-1">100 🪙</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold">Pour chaque ami parrainé</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border-2 border-border">
                <div className="text-4xl sm:text-5xl mb-2">💎</div>
                <div className="text-2xl sm:text-3xl font-black text-secondary mb-1">50 🪙</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold">Pour ton ami à l'inscription</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Share Section */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <h2 className="text-xl sm:text-2xl font-black text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Partager ton code
              </h2>

              <div className="mb-4 sm:mb-6">
                <label className="text-xs sm:text-sm font-bold text-muted-foreground mb-2 block">
                  TON CODE DE PARRAINAGE
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-muted to-muted/50 border-2 border-border font-mono font-bold text-sm sm:text-lg text-center">
                    {referralCode}
                  </div>
                  <Button 
                    onClick={copyReferralCode}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={shareReferral}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-black border-2 border-primary shadow-lg"
                  size="lg"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Partager avec des amis
                </Button>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="font-bold border-2">
                    📧 Email
                  </Button>
                  <Button variant="outline" className="font-bold border-2">
                    💬 SMS
                  </Button>
                  <Button variant="outline" className="font-bold border-2">
                    📱 WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            {/* How it Works */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <h2 className="text-xl sm:text-2xl font-black text-foreground mb-4 sm:mb-6">Comment ça marche ?</h2>
              
              <div className="space-y-4">
                {[
                  { 
                    step: "1", 
                    title: "Partage ton code", 
                    desc: "Envoie ton code à tes amis",
                    icon: "🔗",
                    color: "from-primary to-primary"
                  },
                  { 
                    step: "2", 
                    title: "Ils s'inscrivent", 
                    desc: "Ils utilisent ton code à l'inscription",
                    icon: "✍️",
                    color: "from-secondary to-secondary"
                  },
                  { 
                    step: "3", 
                    title: "Gagnez des coins", 
                    desc: "Vous recevez tous les deux vos récompenses",
                    icon: "🎉",
                    color: "from-accent to-accent"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl sm:text-3xl border-2 border-white shadow-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-base sm:text-lg text-foreground mb-1">{item.title}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{item.desc}</div>
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
              <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-gradient-to-br from-primary/10 to-primary/20 shadow-xl">
                <div className="text-center">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 text-primary" />
                  <div className="text-2xl sm:text-3xl font-black text-primary mb-1">3</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-bold">Amis parrainés</div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-gradient-to-br from-accent/10 to-accent/20 shadow-xl">
                <div className="text-center">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 text-accent" />
                  <div className="text-2xl sm:text-3xl font-black text-accent mb-1">200 🪙</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-bold">Coins gagnés</div>
                </div>
              </Card>
            </div>

            {/* Referrals History */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <h2 className="text-xl sm:text-2xl font-black text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                Tes parrainages
              </h2>

              <div className="space-y-3">
                {referrals.map((ref, i) => (
                  <div 
                    key={i}
                    className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border-2 border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          {ref.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base text-foreground">{ref.name}</div>
                          <div className="text-xs text-muted-foreground">{ref.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                          ref.status === 'active' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-accent/20 text-accent'
                        }`}>
                          {ref.status === 'active' ? '✓ Actif' : '⏳ En attente'}
                        </div>
                        {ref.coins > 0 && (
                          <div className="font-black text-sm sm:text-base text-primary mt-1">
                            +{ref.coins} 🪙
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {referrals.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <div className="text-4xl mb-3">🎯</div>
                  <p className="font-bold">Aucun parrainage pour le moment</p>
                  <p className="text-sm mt-1">Commence à partager ton code !</p>
                </div>
              )}
            </Card>

            {/* Bonus Info */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-secondary bg-gradient-to-br from-secondary/20 to-accent/20 shadow-xl">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-3">🚀</div>
                <h3 className="text-lg sm:text-xl font-black text-foreground mb-2">Bonus spécial !</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-bold mb-4">
                  Parraine 10 amis et gagne un badge exclusif + 500 coins bonus !
                </p>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden border-2 border-border">
                  <div className="h-full bg-gradient-to-r from-secondary to-accent" style={{ width: '30%' }}></div>
                </div>
                <div className="text-xs text-muted-foreground font-bold mt-2">3/10 amis parrainés</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referral;
