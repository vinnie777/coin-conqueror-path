import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Zap, Award, TrendingUp, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import zone2Img from "@/assets/zone2-desert.png";
import quizReturn from "@/assets/quiz-return.png";
import quizInflation from "@/assets/quiz-inflation.png";
import quizRisk from "@/assets/quiz-risk.png";
import quizAsset from "@/assets/quiz-asset.png";
import quizDiversification from "@/assets/quiz-diversification.png";

const quizQuestions = [
  {
    question: "Qu'est-ce que le rendement d'un investissement ?",
    options: [
      { text: "Le gain ou la perte financière générée par un investissement", emoji: "📈" },
      { text: "Le montant initial investi", emoji: "💰" },
      { text: "Le temps nécessaire pour doubler son investissement", emoji: "⏰" },
      { text: "Le niveau de risque associé à un investissement", emoji: "⚠️" }
    ],
    correctAnswer: 0,
    explanation: "Le rendement représente le gain ou la perte générée par un investissement, généralement exprimé en pourcentage du capital initial.",
    image: quizReturn
  },
  {
    question: "Qu'est-ce que l'inflation ?",
    options: [
      { text: "La hausse des taux d'intérêt", emoji: "📊" },
      { text: "L'augmentation générale des prix au fil du temps", emoji: "🛒" },
      { text: "La baisse de la valeur des actions", emoji: "📉" },
      { text: "L'augmentation des salaires", emoji: "💵" }
    ],
    correctAnswer: 1,
    explanation: "L'inflation est l'augmentation générale et durable des prix des biens et services, ce qui réduit le pouvoir d'achat de la monnaie.",
    image: quizInflation
  },
  {
    question: "Quelle est la relation entre risque et rendement ?",
    options: [
      { text: "Plus le risque est élevé, plus le rendement potentiel est faible", emoji: "📉" },
      { text: "Le risque et le rendement ne sont pas liés", emoji: "❓" },
      { text: "Plus le risque est élevé, plus le rendement potentiel est élevé", emoji: "🎯" },
      { text: "Le risque élimine toujours le rendement", emoji: "⛔" }
    ],
    correctAnswer: 2,
    explanation: "En général, plus un investissement est risqué, plus le rendement potentiel est élevé pour compenser ce risque pris par l'investisseur.",
    image: quizRisk
  },
  {
    question: "Qu'est-ce qu'un actif ?",
    options: [
      { text: "Une dette à rembourser", emoji: "💳" },
      { text: "Un bien ou un placement qui a une valeur économique", emoji: "🏢" },
      { text: "Un prêt accordé par une banque", emoji: "🏦" },
      { text: "Une dépense mensuelle", emoji: "📝" }
    ],
    correctAnswer: 1,
    explanation: "Un actif est un bien ou un placement qui possède une valeur économique et qui peut générer des revenus ou prendre de la valeur.",
    image: quizAsset
  },
  {
    question: "Pourquoi est-il important de diversifier ses investissements ?",
    options: [
      { text: "Pour augmenter les frais de gestion", emoji: "💸" },
      { text: "Pour compliquer la gestion du portefeuille", emoji: "🤔" },
      { text: "Pour réduire le risque global", emoji: "🛡️" },
      { text: "Pour garantir des pertes", emoji: "❌" }
    ],
    correctAnswer: 2,
    explanation: "La diversification permet de répartir les risques en investissant dans différents types d'actifs, réduisant ainsi l'impact d'une mauvaise performance d'un seul investissement.",
    image: quizDiversification
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
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
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
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl animate-scale-in">
            {/* Question Image Header */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={question.image}
                alt="Question illustration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent"></div>
              
              {/* Floating Question Number */}
              <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">{currentQuestion + 1}</span>
              </div>

              {/* Score indicator */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border-2 border-accent/30 shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="font-bold text-accent">{score * 30} coins</span>
                </div>
              </div>

              {/* Question text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {question.question}
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
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
                      className={`group relative p-6 rounded-2xl text-left transition-all duration-300 transform ${
                        showCorrect
                          ? "bg-gradient-to-br from-secondary/30 to-secondary/10 border-2 border-secondary scale-105 shadow-xl"
                          : showWrong
                          ? "bg-gradient-to-br from-destructive/30 to-destructive/10 border-2 border-destructive scale-95 opacity-60"
                          : isSelected
                          ? "bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary scale-105 shadow-lg"
                          : "bg-gradient-to-br from-card to-muted/30 border-2 border-border hover:border-primary/50 hover:scale-105 hover:shadow-lg"
                      } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer hover:-translate-y-1"}`}
                    >
                      {/* Emoji badge */}
                      <div className={`absolute -top-3 -left-3 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 ${
                        showCorrect ? "bg-secondary scale-110" :
                        showWrong ? "bg-destructive/80 scale-90" :
                        isSelected ? "bg-primary" :
                        "bg-gradient-to-br from-accent to-accent/70 group-hover:scale-110"
                      }`}>
                        {option.emoji}
                      </div>

                      <div className="flex items-start justify-between gap-4 mt-2">
                        <span className="text-lg font-medium leading-snug pr-4">{option.text}</span>
                        <div className="flex-shrink-0">
                          {showCorrect && (
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center animate-scale-in">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                          )}
                          {showWrong && (
                            <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center animate-scale-in">
                              <XCircle className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      {!showExplanation && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      )}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/20 mb-6 animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-3xl">💡</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                        Explication
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              )}

              {showExplanation && (
                <Button 
                  onClick={handleNext}
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg py-6 animate-fade-in shadow-lg"
                >
                  <span className="mr-2">
                    {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Voir les résultats"}
                  </span>
                  <Sparkles className="w-5 h-5" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
