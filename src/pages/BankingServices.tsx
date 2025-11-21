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
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-green-100 relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-16 bg-white/60 rounded-full blur-sm"></div>
        <div className="absolute top-20 left-20 w-40 h-20 bg-white/50 rounded-full blur-sm"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-18 bg-white/40 rounded-full blur-sm"></div>
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
          <a href="https://mabanque.bnpparibas/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="font-bold border-2">
              <ExternalLink className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Site BNP</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-green-800 shadow-2xl mb-4 transform -rotate-1">
            <h1 className="text-2xl sm:text-4xl font-black text-white" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
              🏦 BNP BANQUE PRIVÉE 🏦
            </h1>
          </div>
          <p className="text-sm sm:text-lg text-gray-700 font-black max-w-2xl mx-auto drop-shadow-sm">
            Bénéficiez d'un accompagnement personnalisé pour vos projets patrimoniaux
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Appointment Booking */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl animate-float">📅</div>
                <h2 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg">Prendre Rendez-vous</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs sm:text-sm font-black text-white mb-2 block drop-shadow">
                    CHOISIR UNE DATE
                  </label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 rounded-xl border-3 border-gray-800 font-black text-sm sm:text-base shadow-lg"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-black text-white mb-2 block drop-shadow">
                    CHOISIR UN HORAIRE
                  </label>
                  <select 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 rounded-xl border-3 border-gray-800 font-black text-sm sm:text-base shadow-lg"
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
                  <label className="text-xs sm:text-sm font-black text-white mb-2 block drop-shadow">
                    TYPE DE RENDEZ-VOUS
                  </label>
                  <select className="w-full p-3 rounded-xl border-3 border-gray-800 font-black text-sm sm:text-base shadow-lg">
                    <option>Première consultation</option>
                    <option>Gestion de patrimoine</option>
                    <option>Investissements</option>
                    <option>Ouverture de compte</option>
                  </select>
                </div>

                <Button 
                  onClick={handleBookAppointment}
                  className="w-full bg-white hover:bg-white/90 text-gray-800 font-black border-3 border-gray-800 shadow-2xl hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  ✅ Confirmer le rendez-vous
                </Button>
              </div>

              <div className="mt-4 p-3 sm:p-4 rounded-xl bg-white border-3 border-gray-800 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="text-3xl sm:text-4xl animate-float">👨‍💼</div>
                  <div>
                    <div className="font-black text-sm sm:text-base text-gray-800 mb-1">Votre conseiller dédié</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-bold">
                      Un expert BNP Paribas vous accompagnera dans tous vos projets
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Services */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl">🏢</div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-800">Nos Services</h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {services.map((service, i) => (
                  <div 
                    key={i}
                    className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 border-3 border-gray-700 hover:border-green-500 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white border-3 border-white shadow-xl flex-shrink-0`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-base sm:text-lg text-gray-800 mb-1">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-bold">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, j) => (
                        <span 
                          key={j}
                          className="px-2 py-1 rounded-full bg-white border-2 border-gray-700 text-xs font-black text-gray-800 hover:scale-110 transition-all"
                        >
                          ✓ {feature}
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
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-yellow-600 bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl animate-pulse-glow">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-6xl sm:text-7xl mb-3 sm:mb-4 animate-float">🏦</div>
                <h2 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg mb-2">Ouvrir un Compte BNP</h2>
                <p className="text-xs sm:text-sm text-white font-black drop-shadow">
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
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white border-3 border-gray-800 shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="text-green-600 text-xl font-black">{benefit.split(' ')[0]}</span>
                    <span className="text-sm font-black text-gray-800">{benefit.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>

              <a href="https://mabanque.bnpparibas/" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="w-full bg-white hover:bg-white/90 text-gray-800 font-black border-3 border-gray-800 shadow-2xl hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  🚀 Ouvrir un compte maintenant
                </Button>
              </a>
            </Card>

            {/* Special Offers */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-gray-800 bg-white shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-4 sm:mb-6">🎁 Offres Spéciales</h2>

              <div className="space-y-3 sm:space-y-4">
                {offers.map((offer, i) => (
                  <a 
                    key={i}
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 border-3 border-gray-700 hover:border-green-500 hover:scale-105 transition-all duration-300 group shadow-lg">
                      <div className="flex items-start gap-3">
                        <div className="text-4xl sm:text-5xl">{offer.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-black text-sm sm:text-base text-gray-800 mb-1 group-hover:text-green-600 transition-colors">
                            {offer.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 font-bold mb-2">{offer.description}</p>
                          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 border-2 border-gray-800 text-xs font-black text-white shadow-lg">
                            {offer.bonus}
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-4 sm:p-6 border-3 sm:border-4 border-purple-700 bg-gradient-to-br from-purple-400 to-pink-400 shadow-2xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="text-3xl sm:text-4xl animate-float">👥</div>
                <h2 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg">Besoin d'aide ?</h2>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white border-3 border-gray-800 shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="font-black text-sm text-gray-700 mb-1">☎️ Téléphone</div>
                  <div className="font-black text-base sm:text-lg text-gray-800">3477 (service gratuit + prix appel)</div>
                </div>

                <div className="p-3 rounded-xl bg-white border-3 border-gray-800 shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="font-black text-sm text-gray-700 mb-1">📧 Email</div>
                  <div className="font-black text-base sm:text-lg text-gray-800">banque.privee@bnpparibas.com</div>
                </div>

                <div className="p-3 rounded-xl bg-white border-3 border-gray-800 shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="font-black text-sm text-gray-700 mb-1">🕐 Horaires</div>
                  <div className="font-black text-base sm:text-lg text-gray-800">Lun-Ven: 8h-20h</div>
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
