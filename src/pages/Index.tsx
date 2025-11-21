import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Trophy, Coins, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Edufin360
            </h1>
          </div>
          <div className="flex gap-3">
            <Link to="/map">
              <Button variant="outline">Connexion</Button>
            </Link>
            <Link to="/map">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 text-sm font-medium border border-accent/30 animate-pulse-glow">
              🎮 L'éducation financière gamifiée
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Transforme ton
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Apprentissage Financier
            </span>
            en Aventure
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Parcours une carte interactive, complète des défis quotidiens et deviens un expert de la finance tout en t'amusant.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/map">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
                Commencer l'aventure
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Voir le tableau de bord
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { icon: MapPin, label: "7 Zones", value: "à explorer" },
              { icon: Trophy, label: "Défis", value: "quotidiens" },
              { icon: Coins, label: "InvestCoins", value: "à gagner" },
              { icon: TrendingUp, label: "Classement", value: "en temps réel" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                <div className="text-2xl font-bold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            Comment ça marche ?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Explore la Carte",
                description: "Débute ton voyage dans la Baie des Fondamentaux et progresse à travers 7 zones thématiques.",
                gradient: "from-primary to-blue-600"
              },
              {
                step: "02",
                title: "Complète les Défis",
                description: "Réponds à des quiz, regarde des vidéos et relève des défis quotidiens pour avancer.",
                gradient: "from-secondary to-green-600"
              },
              {
                step: "03",
                title: "Gagne des Récompenses",
                description: "Accumule des InvestCoins, débloque des badges et grimpe dans le classement.",
                gradient: "from-accent to-orange-600"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {feature.step}
                </div>
                <h4 className="text-2xl font-bold mb-4 mt-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-4xl font-bold mb-6">
              Prêt à devenir un expert financier ?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Rejoins des milliers d'utilisateurs qui transforment leur avenir financier chaque jour.
            </p>
            <Link to="/map">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-6">
                Démarrer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Edufin360. Transforme ton apprentissage financier en aventure.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
