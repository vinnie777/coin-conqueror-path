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
            <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-accent/20 border-2 border-accent text-xs sm:text-sm font-bold text-foreground shadow-lg">
              🎮 L'éducation financière gamifiée
            </span>
          </div>
          
          <div className="inline-block bg-gradient-to-r from-primary via-secondary to-primary px-4 sm:px-8 py-3 sm:py-6 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-primary shadow-2xl transform -rotate-1">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white leading-tight" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
              Transforme ton<br />
              Apprentissage Financier<br />
              en Aventure
            </h2>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl border-2 sm:border-4 border-border shadow-2xl p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-sm sm:text-lg text-foreground font-bold mb-4">
              Parcours une carte interactive, complète des défis quotidiens et deviens un expert de la finance tout en t'amusant.
            </p>
            <ul className="text-left space-y-2 text-sm sm:text-base text-foreground font-semibold">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>7 zones à explorer</span>
              </li>
              <li className="flex items-center gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span>Défis quotidiens</span>
              </li>
              <li className="flex items-center gap-2">
                <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>InvestCoins à gagner</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>Classement en temps réel</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4">
            <Link to="/map" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black border-2 sm:border-4 border-primary shadow-2xl text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7">
                ▶ COMMENCER L'AVENTURE
              </Button>
            </Link>
            <Link to="/dashboard" className="w-full sm:w-auto hidden sm:block">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold border-2 sm:border-4 border-border shadow-xl text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7 bg-white">
                📊 Tableau de bord
              </Button>
            </Link>
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
                className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border-2 sm:border-4 border-border shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-32 sm:h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-2xl border-2 sm:border-4 border-white`}>
                    {feature.step}
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <h4 className="text-lg sm:text-2xl font-black text-foreground mb-2 sm:mb-3">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground font-semibold leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent border-2 sm:border-4 border-primary shadow-2xl">
            <div className="inline-block bg-white rounded-xl sm:rounded-2xl border-2 sm:border-4 border-border shadow-xl px-4 sm:px-8 py-2 sm:py-4 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-3xl font-black text-foreground" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>
                Prêt à devenir un expert financier ?
              </h3>
            </div>
            <p className="text-sm sm:text-lg text-white font-bold mb-6 sm:mb-8 px-2 drop-shadow-lg">
              Rejoins des milliers d'utilisateurs qui transforment leur avenir financier chaque jour.
            </p>
            <Link to="/map">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-black border-2 sm:border-4 border-white shadow-2xl text-base sm:text-xl px-8 sm:px-12 py-5 sm:py-7">
                ▶ DÉMARRER MAINTENANT
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 sm:border-t-4 border-border bg-white backdrop-blur-sm py-6 sm:py-8 relative z-10">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <p className="text-xs sm:text-base font-bold text-foreground">© 2024 Edufin360. Transforme ton apprentissage financier en aventure.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
