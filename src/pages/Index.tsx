import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Trophy, Coins, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";
import zone1 from "@/assets/zone1-bay.png";
import zone2 from "@/assets/zone2-desert.png";
import zone3 from "@/assets/zone3-forest.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-16 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-40 h-20 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 left-1/3 w-36 h-18 bg-accent/10 rounded-full blur-xl"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-end">
          <div className="flex gap-2 sm:gap-3">
            <Link to="/map" className="hidden sm:block">
              <Button variant="outline" className="font-bold border-2">Connexion</Button>
            </Link>
            <Link to="/map">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-2 border-primary shadow-lg text-sm sm:text-base px-3 sm:px-4">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border-3 sm:border-4 border-gray-800 text-sm sm:text-base font-black text-gray-800 shadow-2xl animate-float">
              🎮 L'éducation financière gamifiée
            </span>
          </div>
          
          <div className="inline-block bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 px-6 sm:px-10 py-4 sm:py-8 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-green-800 shadow-2xl transform -rotate-1">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
              Transforme ton<br />
              Apprentissage Financier<br />
              en Aventure
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-gray-800 shadow-2xl p-5 sm:p-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-300">
            <p className="text-base sm:text-xl text-gray-800 font-black leading-relaxed">
              Parcours une carte interactive, complète des défis quotidiens et deviens un expert de la finance tout en t'amusant.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
            <Link to="/map" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-black border-3 sm:border-4 border-green-700 shadow-2xl hover:scale-110 transition-all duration-300 text-lg sm:text-2xl px-8 sm:px-12 py-6 sm:py-8">
                ▶ COMMENCER L'AVENTURE
              </Button>
            </Link>
            <Link to="/dashboard" className="w-full sm:w-auto hidden sm:block">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-black border-3 sm:border-4 border-gray-800 shadow-2xl text-lg sm:text-2xl px-8 sm:px-12 py-6 sm:py-8 bg-white hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                📊 Tableau de bord
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-10 max-w-3xl mx-auto">
            {[
              { icon: MapPin, label: "7 Zones", value: "à explorer", gradient: "from-blue-500 to-blue-700" },
              { icon: Trophy, label: "Défis", value: "quotidiens", gradient: "from-yellow-500 to-orange-600" },
              { icon: Coins, label: "InvestCoins", value: "à gagner", gradient: "from-green-500 to-emerald-600" },
              { icon: TrendingUp, label: "Classement", value: "en temps réel", gradient: "from-purple-500 to-pink-600" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} border-3 sm:border-4 border-gray-800 shadow-2xl transition-all duration-300 hover:scale-110 animate-slide-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2 sm:mb-3 mx-auto drop-shadow-lg" />
                <div className="text-xl sm:text-3xl font-black text-white drop-shadow-lg">{stat.label}</div>
                <div className="text-sm sm:text-base text-white/90 font-black">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-secondary via-primary to-secondary px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-primary shadow-2xl mb-8 sm:mb-12 mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black text-white text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
              COMMENT ÇA MARCHE ?
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                step: "01",
                title: "Explore la Carte",
                description: "Débute ton voyage dans la Baie des Fondamentaux et progresse à travers 7 zones thématiques.",
                gradient: "from-primary to-blue-600",
                image: zone1
              },
              {
                step: "02",
                title: "Complète les Défis",
                description: "Réponds à des quiz, regarde des vidéos et relève des défis quotidiens pour avancer.",
                gradient: "from-secondary to-green-600",
                image: zone2
              },
              {
                step: "03",
                title: "Gagne des Récompenses",
                description: "Accumule des InvestCoins, débloque des badges et grimpe dans le classement.",
                gradient: "from-accent to-orange-600",
                image: zone3
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border-3 sm:border-4 border-gray-800 shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-40 sm:h-56 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-2xl border-3 sm:border-4 border-white animate-float`}>
                    {feature.step}
                  </div>
                </div>
                <div className="p-5 sm:p-8 bg-white">
                  <h4 className="text-xl sm:text-3xl font-black text-gray-800 mb-2 sm:mb-4">{feature.title}</h4>
                  <p className="text-sm sm:text-lg text-gray-700 font-bold leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 sm:p-16 rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 border-3 sm:border-4 border-purple-800 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-white rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-gray-800 shadow-2xl px-6 sm:px-12 py-3 sm:py-6 mb-6 sm:mb-8 animate-pulse-glow">
                <h3 className="text-2xl sm:text-4xl font-black text-gray-800" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>
                  Prêt à devenir un expert financier ?
                </h3>
              </div>
              <p className="text-base sm:text-2xl text-white font-black mb-8 sm:mb-12 px-2 drop-shadow-2xl">
                Rejoins des milliers d'utilisateurs qui transforment leur avenir financier chaque jour.
              </p>
              <Link to="/map">
                <Button size="lg" className="bg-white hover:bg-gray-50 text-gray-800 font-black border-3 sm:border-4 border-gray-800 shadow-2xl text-xl sm:text-3xl px-10 sm:px-16 py-7 sm:py-10 hover:scale-110 transition-all duration-300">
                  🚀 DÉMARRER MAINTENANT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-3 sm:border-t-4 border-gray-800 bg-white/90 backdrop-blur-sm py-8 sm:py-10 relative z-10">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <p className="text-sm sm:text-lg font-black text-gray-800">© 2024 Edufin360. Transforme ton apprentissage financier en aventure. 🚀</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
