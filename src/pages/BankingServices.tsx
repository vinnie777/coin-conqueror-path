import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Building2, ExternalLink, Shield, TrendingUp, Users, CreditCard } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BankingServices = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      toast({
        title: "Rendez-vous confirmé !",
        description: `Votre rendez-vous est prévu le ${selectedDate} à ${selectedTime}.`,
      });
    } else {
      toast({
        title: "Informations manquantes",
        description: "Veuillez sélectionner une date et une heure.",
        variant: "destructive"
      });
    }
  };

  const services = [
    {
      title: "Gestion de Patrimoine",
      description: "Conseils personnalisés pour optimiser votre patrimoine",
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-primary to-primary",
      features: ["Allocation d'actifs", "Fiscalité optimisée", "Succession"]
    },
    {
      title: "Investissements Premium",
      description: "Accès à des solutions d'investissement exclusives",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-secondary to-secondary",
      features: ["Private Equity", "Immobilier", "Art & Collection"]
    },
    {
      title: "Services Bancaires",
      description: "Une gamme complète de services bancaires haut de gamme",
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-accent to-accent",
      features: ["Carte premium", "Concierge 24/7", "Assurances voyage"]
    }
  ];

  const offers = [
    {
      title: "Compte Esprit Libre",
      description: "Le compte courant nouvelle génération",
      bonus: "80€ offerts + 1 an gratuit",
      link: "https://mabanque.bnpparibas/",
      icon: "💳"
    },
    {
      title: "PEA & Assurance-vie",
      description: "Investissez pour votre avenir",
      bonus: "Frais réduits la 1ère année",
      link: "https://mabanque.bnpparibas/",
      icon: "📈"
    },
    {
      title: "Crédit Immobilier",
      description: "Financez votre projet immobilier",
      bonus: "Taux préférentiels",
      link: "https://mabanque.bnpparibas/",
      icon: "🏡"
    }
  ];

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
          <a href="https://mabanque.bnpparibas/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="font-bold border-2">
              <ExternalLink className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Site BNP</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block bg-gradient-to-r from-primary via-secondary to-primary px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-primary shadow-2xl mb-4 transform -rotate-1">
            <h1 className="text-2xl sm:text-4xl font-black text-white" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
              BNP BANQUE PRIVÉE
            </h1>
          </div>
          <p className="text-sm sm:text-lg text-muted-foreground font-bold max-w-2xl mx-auto">
            Bénéficiez d'un accompagnement personnalisé pour vos projets patrimoniaux
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Appointment Booking */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-primary bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <h2 className="text-xl sm:text-2xl font-black text-foreground">Prendre Rendez-vous</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs sm:text-sm font-bold text-muted-foreground mb-2 block">
                    CHOISIR UNE DATE
                  </label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 rounded-xl border-2 border-border font-bold text-sm sm:text-base"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-bold text-muted-foreground mb-2 block">
                    CHOISIR UN HORAIRE
                  </label>
                  <select 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 rounded-xl border-2 border-border font-bold text-sm sm:text-base"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-bold text-muted-foreground mb-2 block">
                    TYPE DE RENDEZ-VOUS
                  </label>
                  <select className="w-full p-3 rounded-xl border-2 border-border font-bold text-sm sm:text-base">
                    <option>Première consultation</option>
                    <option>Gestion de patrimoine</option>
                    <option>Investissements</option>
                    <option>Ouverture de compte</option>
                  </select>
                </div>

                <Button 
                  onClick={handleBookAppointment}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-black border-2 border-primary shadow-lg"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Confirmer le rendez-vous
                </Button>
              </div>

              <div className="mt-4 p-3 sm:p-4 rounded-xl bg-white border-2 border-border">
                <div className="flex items-start gap-3">
                  <div className="text-2xl sm:text-3xl">👨‍💼</div>
                  <div>
                    <div className="font-black text-sm sm:text-base text-foreground mb-1">Votre conseiller dédié</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Un expert BNP Paribas vous accompagnera dans tous vos projets
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Services */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                <h2 className="text-xl sm:text-2xl font-black text-foreground">Nos Services</h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {services.map((service, i) => (
                  <div 
                    key={i}
                    className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border-2 border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white border-2 border-white shadow-lg flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-base sm:text-lg text-foreground mb-1">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, j) => (
                        <span 
                          key={j}
                          className="px-2 py-1 rounded-full bg-white border border-border text-xs font-bold text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Offers & Account Opening */}
          <div className="space-y-4 sm:space-y-6">
            {/* Open Account */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-accent bg-gradient-to-br from-accent/20 to-accent/10 shadow-xl">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🏦</div>
                <h2 className="text-xl sm:text-2xl font-black text-foreground mb-2">Ouvrir un Compte BNP</h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-bold">
                  Profitez d'offres exclusives pour les nouveaux clients
                </p>
              </div>

              <div className="space-y-3 mb-4 sm:mb-6">
                {[
                  "✓ Ouverture 100% en ligne",
                  "✓ Carte bancaire gratuite",
                  "✓ Application mobile intuitive",
                  "✓ Conseiller dédié"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white border border-border">
                    <span className="text-primary text-lg font-bold">{benefit.split(' ')[0]}</span>
                    <span className="text-sm font-bold text-foreground">{benefit.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>

              <a href="https://mabanque.bnpparibas/" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-black border-2 border-white shadow-lg"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Ouvrir un compte maintenant
                </Button>
              </a>
            </Card>

            {/* Special Offers */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-border bg-white shadow-xl">
              <h2 className="text-xl sm:text-2xl font-black text-foreground mb-4 sm:mb-6">Offres Spéciales</h2>

              <div className="space-y-3 sm:space-y-4">
                {offers.map((offer, i) => (
                  <a 
                    key={i}
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-border hover:border-primary transition-all group">
                      <div className="flex items-start gap-3">
                        <div className="text-3xl sm:text-4xl">{offer.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-black text-sm sm:text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                            {offer.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">{offer.description}</p>
                          <div className="inline-block px-2 py-1 rounded-full bg-accent/20 border border-accent text-xs font-bold text-accent">
                            {offer.bonus}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-4 sm:p-6 border-2 sm:border-4 border-secondary bg-gradient-to-br from-secondary/10 to-primary/10 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                <h2 className="text-xl sm:text-2xl font-black text-foreground">Besoin d'aide ?</h2>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white border-2 border-border">
                  <div className="font-bold text-sm text-muted-foreground mb-1">Téléphone</div>
                  <div className="font-black text-base sm:text-lg text-foreground">3477 (service gratuit + prix appel)</div>
                </div>

                <div className="p-3 rounded-lg bg-white border-2 border-border">
                  <div className="font-bold text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-black text-base sm:text-lg text-foreground">banque.privee@bnpparibas.com</div>
                </div>

                <div className="p-3 rounded-lg bg-white border-2 border-border">
                  <div className="font-bold text-sm text-muted-foreground mb-1">Horaires</div>
                  <div className="font-black text-base sm:text-lg text-foreground">Lun-Ven: 8h-20h</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingServices;
