import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Trophy, Coins, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";
import zone1 from "@/assets/zone1-bay.png";
import zone2 from "@/assets/zone2-desert.png";
import zone3 from "@/assets/zone3-forest.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-end">
          <div className="flex gap-2 sm:gap-3">
            <Link to="/news">
              <Button variant="outline" className="font-semibold">News</Button>
            </Link>
            <Link to="/map" className="hidden sm:block">
              <Button variant="outline" className="font-semibold">Connexion</Button>
            </Link>
            <Link to="/map">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-premium text-sm sm:text-base px-3 sm:px-4">
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
            <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs sm:text-sm font-semibold text-foreground">
              L'éducation financière gamifiée
            </span>
          </div>
          
          <div className="inline-block bg-gradient-to-r from-primary to-secondary px-4 sm:px-8 py-3 sm:py-6 rounded-lg shadow-premium">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Transforme ton<br />
              Apprentissage Financier<br />
              en Aventure
            </h2>
          </div>
          
          <div className="bg-card rounded-lg border border-border shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-sm sm:text-lg text-foreground font-medium mb-4">
              Parcours une carte interactive, complète des défis quotidiens et deviens un expert de la finance tout en t'amusant.
            </p>
            <ul className="text-left space-y-2 text-sm sm:text-base text-foreground font-medium">
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
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-premium text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7">
                Commencer l'aventure
              </Button>
            </Link>
          </div>

          {/* Dashboard Card */}
          <Link to="/dashboard" className="block max-w-md mx-auto mt-6 sm:mt-8">
            <div className="bg-card rounded-lg border border-border p-4 sm:p-6 shadow-lg hover:shadow-premium hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base sm:text-xl font-semibold text-foreground">Tableau de bord</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Accède à tes stats et progression</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                step: "01",
                title: "Explore la Carte",
                description: "Débute ton voyage dans la Baie des Fondamentaux et progresse à travers 7 zones thématiques.",
                gradient: "from-primary to-secondary",
                image: zone1
              },
              {
                step: "02",
                title: "Complète les Défis",
                description: "Réponds à des quiz, regarde des vidéos et relève des défis quotidiens pour avancer.",
                gradient: "from-secondary to-accent",
                image: zone2
              },
              {
                step: "03",
                title: "Gagne des Récompenses",
                description: "Accumule des InvestCoins, débloque des badges et grimpe dans le classement.",
                gradient: "from-accent to-primary",
                image: zone3
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="relative overflow-hidden rounded-lg bg-card border border-border shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-premium animate-scale-in group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-32 sm:h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                    {feature.step}
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-card">
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-premium">
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Prêt à devenir un expert financier ?
            </h3>
            <p className="text-sm sm:text-lg text-white/90 font-medium mb-6 sm:mb-8 px-2">
              Rejoins des milliers d'utilisateurs qui transforment leur avenir financier chaque jour.
            </p>
            <Link to="/map">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold shadow-lg text-base sm:text-xl px-8 sm:px-12 py-5 sm:py-7">
                Démarrer maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-6 sm:py-8 relative z-10">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <p className="text-xs sm:text-base font-medium text-muted-foreground">© 2024 Edufin360. Transforme ton apprentissage financier en aventure.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
