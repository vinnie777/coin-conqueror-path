import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Zap, Award, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import zone2Img from "@/assets/zone2-desert.png";

const quizQuestions = [
  {
    question: "Qu'est-ce que le rendement d'un investissement ?",
    options: [
      "Le gain ou la perte financière générée par un investissement",
      "Le montant initial investi",
      "Le temps nécessaire pour doubler son investissement",
      "Le niveau de risque associé à un investissement"
    ],
    correctAnswer: 0,
    explanation: "Le rendement représente le gain ou la perte générée par un investissement, généralement exprimé en pourcentage du capital initial."
  },
  {
    question: "Qu'est-ce que l'inflation ?",
    options: [
      "La hausse des taux d'intérêt",
      "L'augmentation générale des prix au fil du temps",
      "La baisse de la valeur des actions",
      "L'augmentation des salaires"
    ],
    correctAnswer: 1,
    explanation: "L'inflation est l'augmentation générale et durable des prix des biens et services, ce qui réduit le pouvoir d'achat de la monnaie."
  },
  {
    question: "Quelle est la relation entre risque et rendement ?",
    options: [
      "Plus le risque est élevé, plus le rendement potentiel est faible",
      "Le risque et le rendement ne sont pas liés",
      "Plus le risque est élevé, plus le rendement potentiel est élevé",
      "Le risque élimine toujours le rendement"
    ],
    correctAnswer: 2,
    explanation: "En général, plus un investissement est risqué, plus le rendement potentiel est élevé pour compenser ce risque pris par l'investisseur."
  },
  {
    question: "Qu'est-ce qu'un actif ?",
    options: [
      "Une dette à rembourser",
      "Un bien ou un placement qui a une valeur économique",
      "Un prêt accordé par une banque",
      "Une dépense mensuelle"
    ],
    correctAnswer: 1,
    explanation: "Un actif est un bien ou un placement qui possède une valeur économique et qui peut générer des revenus ou prendre de la valeur."
  },
  {
    question: "Pourquoi est-il important de diversifier ses investissements ?",
    options: [
      "Pour augmenter les frais de gestion",
      "Pour compliquer la gestion du portefeuille",
      "Pour réduire le risque global",
      "Pour garantir des pertes"
    ],
    correctAnswer: 2,
    explanation: "La diversification permet de répartir les risques en investissant dans différents types d'actifs, réduisant ainsi l'impact d'une mauvaise performance d'un seul investissement."
  }
];

const Quiz = () => {
  const { zoneId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
      const earnedCoins = score * 30;
      toast({
        title: "Quiz terminé ! 🎉",
        description: `Tu as obtenu ${score}/${quizQuestions.length} bonnes réponses et gagné ${earnedCoins} InvestCoins !`,
      });
    }
  };

  if (completed) {
    const earnedCoins = score * 30;
    const earnedXP = score * 20;
    const isNewStreak = true;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full overflow-hidden">
          {/* Header with image */}
          <div className="relative h-64">
            <img 
              src={zone2Img}
              alt="Quiz complété"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-green-600 flex items-center justify-center text-6xl shadow-2xl animate-scale-in">
                  {score === quizQuestions.length ? "🏆" : score >= 3 ? "🎉" : "💪"}
                </div>
                <h2 className="text-5xl font-bold text-white drop-shadow-lg animate-fade-in">
                  {score === quizQuestions.length ? "Parfait !" : score >= 3 ? "Bien joué !" : "Continue !"}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-2xl mb-2">
                Tu as obtenu <span className="text-primary font-bold text-3xl">{score}/{quizQuestions.length}</span> bonnes réponses
              </p>
              <p className="text-muted-foreground">
                {score === quizQuestions.length 
                  ? "Incroyable ! Tu maîtrises parfaitement ce sujet !" 
                  : score >= 3 
                  ? "Excellent travail ! Continue comme ça !" 
                  : "Ne t'inquiète pas, chaque essai te fait progresser !"}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 text-center">
                <div className="text-4xl mb-3">🪙</div>
                <div className="text-3xl font-bold text-accent mb-1">+{earnedCoins}</div>
                <div className="text-sm text-muted-foreground">InvestCoins</div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 text-center">
                <div className="text-4xl mb-3">⭐</div>
                <div className="text-3xl font-bold text-primary mb-1">+{earnedXP}</div>
                <div className="text-sm text-muted-foreground">XP</div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 border-2 border-secondary/30 text-center">
                <div className="text-4xl mb-3">🔥</div>
                <div className="text-3xl font-bold text-secondary mb-1">+1</div>
                <div className="text-sm text-muted-foreground">Jour de Streak</div>
                {isNewStreak && (
                  <div className="text-xs text-secondary font-medium mt-1">Nouveau record !</div>
                )}
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 border-2 border-purple-500/30 text-center">
                <div className="text-4xl mb-3">🏅</div>
                <div className="text-2xl font-bold mb-1">Badge</div>
                <div className="text-sm text-muted-foreground">Débloqué</div>
              </div>
            </div>

            {/* Progress info */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border mb-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Ta progression</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Niveau Zone 2</div>
                  <div className="font-bold">3/5 complétés</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Prochaine zone</div>
                  <div className="font-bold text-secondary">La Forêt (bientôt)</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Classement</div>
                  <div className="font-bold text-accent">#42 → #38 📈</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quiz/2" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Refaire le quiz
                </Button>
              </Link>
              <Link to="/map" className="flex-1">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Continuer l'aventure
                </Button>
              </Link>
              <Link to="/dashboard" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Tableau de bord
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/map">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quitter le quiz
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Edufin360" className="w-8 h-8" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span className="font-bold">{score * 30}</span>
              <span className="text-muted-foreground text-xs">coins gagnés</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-bold">{currentQuestion + 1}/{quizQuestions.length}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-muted">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Quiz Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 animate-scale-in">
            <h2 className="text-3xl font-bold mb-8">{question.question}</h2>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = showExplanation && isCorrect;
                const showWrong = showExplanation && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showExplanation}
                    className={`w-full p-5 rounded-xl text-left transition-all duration-300 ${
                      showCorrect
                        ? "bg-secondary/20 border-2 border-secondary"
                        : showWrong
                        ? "bg-destructive/20 border-2 border-destructive"
                        : isSelected
                        ? "bg-primary/20 border-2 border-primary"
                        : "bg-card border-2 border-border hover:border-primary/50 hover:bg-card/80"
                    } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{option}</span>
                      {showCorrect && <CheckCircle className="w-6 h-6 text-secondary" />}
                      {showWrong && <XCircle className="w-6 h-6 text-destructive" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Explication
                </h3>
                <p className="text-muted-foreground leading-relaxed">{question.explanation}</p>
              </div>
            )}

            {showExplanation && (
              <Button 
                onClick={handleNext}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary animate-fade-in"
              >
                {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Voir les résultats"}
              </Button>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
