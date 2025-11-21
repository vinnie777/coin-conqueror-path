import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Trophy, Coins, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";
import zone1 from "@/assets/zone1-bay.png";
import zone2 from "@/assets/zone2-desert.png";
import zone3 from "@/assets/zone3-forest.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Edufin360" className="w-8 h-8 sm:w-12 sm:h-12" />
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Edufin360
            </h1>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Link to="/map" className="hidden sm:block">
              <Button variant="outline">Connexion</Button>
            </Link>
            <Link to="/map">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-sm sm:text-base px-3 sm:px-4">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 text-xs sm:text-sm font-medium border border-accent/30 animate-pulse-glow">
              🎮 L'éducation financière gamifiée
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight px-2">
            Transforme ton
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Apprentissage Financier
            </span>
            en Aventure
          </h2>
          
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Parcours une carte interactive, complète des défis quotidiens et deviens un expert de la finance tout en t'amusant.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
            <Link to="/map" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                Commencer l'aventure
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link to="/dashboard" className="w-full sm:w-auto hidden sm:block">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                Voir le tableau de bord
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-12 max-w-3xl mx-auto">
            {[
              { icon: MapPin, label: "7 Zones", value: "à explorer" },
              { icon: Trophy, label: "Défis", value: "quotidiens" },
              { icon: Coins, label: "InvestCoins", value: "à gagner" },
              { icon: TrendingUp, label: "Classement", value: "en temps réel" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="p-3 sm:p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3 mx-auto" />
                <div className="text-lg sm:text-2xl font-bold text-foreground">{stat.label}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 px-2">
            Comment ça marche ?
          </h3>
          
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
                className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-32 sm:h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                    {feature.step}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 px-2">
              Prêt à devenir un expert financier ?
            </h3>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
              Rejoins des milliers d'utilisateurs qui transforment leur avenir financier chaque jour.
            </p>
            <Link to="/map">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6">
                Démarrer maintenant
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm py-6 sm:py-8">
        <div className="container mx-auto px-2 sm:px-4 text-center text-muted-foreground">
          <p className="text-xs sm:text-base">© 2024 Edufin360. Transforme ton apprentissage financier en aventure.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
