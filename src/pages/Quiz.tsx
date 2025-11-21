import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-green-600 flex items-center justify-center text-5xl">
              🏆
            </div>
            <h2 className="text-4xl font-bold mb-4">Quiz terminé !</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tu as obtenu <span className="text-primary font-bold">{score}/{quizQuestions.length}</span> bonnes réponses
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-3xl mb-2">🪙</div>
              <div className="text-2xl font-bold text-primary">+{score * 30}</div>
              <div className="text-sm text-muted-foreground">InvestCoins</div>
            </div>
            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-secondary">+1</div>
              <div className="text-sm text-muted-foreground">Jour de Streak</div>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="text-3xl mb-2">🏅</div>
              <div className="text-2xl font-bold text-accent">Badge</div>
              <div className="text-sm text-muted-foreground">Débloqué</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to="/map">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                Retour à la carte
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">
                Voir le tableau de bord
              </Button>
            </Link>
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
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Question</span>
            <span className="font-bold text-lg">{currentQuestion + 1}/{quizQuestions.length}</span>
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
