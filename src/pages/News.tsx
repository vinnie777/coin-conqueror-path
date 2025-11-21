import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Clock, ExternalLink } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Les marchés boursiers atteignent des sommets historiques",
      category: "Marchés",
      date: "Il y a 2 heures",
      summary: "Les principaux indices boursiers mondiaux ont clôturé en hausse, portés par des résultats d'entreprises meilleurs que prévu.",
      trend: "up",
      image: "📈"
    },
    {
      id: 2,
      title: "La BCE maintient ses taux d'intérêt",
      category: "Politique monétaire",
      date: "Il y a 5 heures",
      summary: "La Banque Centrale Européenne a décidé de maintenir ses taux directeurs inchangés lors de sa dernière réunion.",
      trend: "neutral",
      image: "🏦"
    },
    {
      id: 3,
      title: "L'inflation ralentit dans la zone euro",
      category: "Économie",
      date: "Il y a 8 heures",
      summary: "Les chiffres de l'inflation pour le mois dernier montrent un ralentissement bienvenu de la hausse des prix.",
      trend: "down",
      image: "📊"
    },
    {
      id: 4,
      title: "Nouvelle réglementation sur les crypto-monnaies",
      category: "Régulation",
      date: "Hier",
      summary: "L'Union Européenne adopte un nouveau cadre réglementaire pour encadrer les actifs numériques.",
      trend: "neutral",
      image: "🪙"
    },
    {
      id: 5,
      title: "Les obligations vertes gagnent en popularité",
      category: "Finance durable",
      date: "Hier",
      summary: "Les investisseurs se tournent massivement vers les produits financiers respectueux de l'environnement.",
      trend: "up",
      image: "🌱"
    },
    {
      id: 6,
      title: "Tech: Les géants du numérique publient leurs résultats",
      category: "Entreprises",
      date: "Il y a 2 jours",
      summary: "Apple, Google et Microsoft dévoilent des bénéfices en hausse malgré un contexte économique incertain.",
      trend: "up",
      image: "💻"
    }
  ];

  const trendColors = {
    up: "text-primary",
    down: "text-destructive",
    neutral: "text-muted-foreground"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="border-b bg-card backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="font-bold">
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Accueil</span>
            </Button>
          </Link>
          <h1 className="text-lg sm:text-xl font-bold">📰 Actualités Financières</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
        <div className="inline-block bg-gradient-to-r from-primary via-secondary to-primary px-4 sm:px-8 py-2 sm:py-4 rounded-xl border-2 border-border shadow-xl mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-black text-primary-foreground text-center">
            📰 ACTUALITÉS DU JOUR
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsArticles.map((article, index) => (
            <Card 
              key={article.id}
              className="overflow-hidden border-2 border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl sm:text-5xl mb-2">{article.image}</div>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-bold">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span className="font-semibold">{article.date}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-auto p-0 hover:text-primary font-bold"
                  >
                    Lire plus
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Market Summary */}
        <Card className="mt-8 p-4 sm:p-6 border-2 border-border bg-card shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            📊 Résumé des Marchés
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "CAC 40", value: "7,485.32", change: "+1.25%", trend: "up" },
              { name: "S&P 500", value: "4,783.45", change: "+0.87%", trend: "up" },
              { name: "Bitcoin", value: "€43,256", change: "-2.15%", trend: "down" }
            ].map((market, i) => (
              <div 
                key={i} 
                className="p-4 rounded-lg bg-muted border border-border hover:border-primary transition-all"
              >
                <div className="text-sm text-muted-foreground font-semibold mb-1">
                  {market.name}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                  {market.value}
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold ${trendColors[market.trend]}`}>
                  <TrendingUp className={`w-4 h-4 ${market.trend === 'down' ? 'rotate-180' : ''}`} />
                  {market.change}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default News;
