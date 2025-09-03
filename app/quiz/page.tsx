"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Quiz questions data
const quizQuestions = [
  {
    id: 1,
    question: "¿Cómo reaccionas cuando alguien te critica?",
    options: [
      { text: "Me siento devastada y no puedo dejar de pensar en ello", value: 0 },
      { text: "Me molesta pero trato de entender si hay algo válido", value: 1 },
      { text: "Evalúo objetivamente si es constructivo y sigo adelante", value: 2 },
    ],
    feedback: {
      0: "Es natural sentirse afectada, pero recuerda que las críticas no definen tu valor.",
      1: "Buena actitud de apertura, sigue desarrollando esa fortaleza emocional.",
      2: "Excelente capacidad de discernimiento y autocontrol emocional.",
    },
  },
  {
    id: 2,
    question: "¿Qué sientes al mirarte al espejo?",
    options: [
      { text: "Veo defectos y me cuesta aceptarme", value: 0 },
      { text: "A veces me gusto, otras no tanto", value: 1 },
      { text: "Siento orgullo de quién soy y lo que reflejo", value: 2 },
    ],
    feedback: {
      0: "Tu reflejo merece amor y aceptación, eres más hermosa de lo que crees.",
      1: "Estás en el camino hacia una relación más amorosa contigo misma.",
      2: "Tu autoestima radiante es la base de tu poder personal.",
    },
  },
  {
    id: 3,
    question: "Cuando cometes un error, ¿qué piensas?",
    options: [
      { text: "Siempre arruino todo", value: 0 },
      { text: "Me equivoqué, pero intentaré mejorar", value: 1 },
      { text: "Un error no me define, es parte del proceso", value: 2 },
    ],
    feedback: {
      0: "Los errores son maestros, no verdugos. Mereces compasión.",
      1: "Tu actitud de crecimiento te está fortaleciendo paso a paso.",
      2: "Tu sabiduría para ver los errores como aprendizaje es poderosa.",
    },
  },
  {
    id: 4,
    question: "En una relación, ¿cómo sueles comportarte?",
    options: [
      { text: "Me sacrifico y pongo al otro siempre primero", value: 0 },
      { text: "Busco equilibrio, pero muchas veces cedo", value: 1 },
      { text: "Establezco límites claros y me respeto", value: 2 },
    ],
    feedback: {
      0: "Amarte a ti misma no es egoísmo, es la base de relaciones sanas.",
      1: "Estás aprendiendo el arte del equilibrio, sigue practicando.",
      2: "Tus límites saludables crean relaciones más auténticas y profundas.",
    },
  },
  {
    id: 5,
    question: "¿Qué lugar ocupa la culpa en tu vida?",
    options: [
      { text: "La culpa me persigue casi siempre", value: 0 },
      { text: "La siento a veces, pero intento soltarla", value: 1 },
      { text: "Ya no me controla, sé cuándo no es mía", value: 2 },
    ],
    feedback: {
      0: "La culpa tóxica no te pertenece, mereces liberarte de esas cadenas.",
      1: "Reconocer la culpa es el primer paso para soltarla con amor.",
      2: "Tu capacidad de discernir la culpa sana de la tóxica es liberadora.",
    },
  },
  {
    id: 6,
    question: "¿Cómo gestionas tus emociones?",
    options: [
      { text: "Las reprimo y después exploto", value: 0 },
      { text: "Hablo con alguien cercano, pero me cuesta", value: 1 },
      { text: "Las observo, las siento y luego las suelto", value: 2 },
    ],
    feedback: {
      0: "Tus emociones son mensajeras valiosas que merecen ser escuchadas.",
      1: "Buscar apoyo es valiente, sigue desarrollando tu inteligencia emocional.",
      2: "Tu maestría emocional es una fortaleza que inspira a otras.",
    },
  },
  {
    id: 7,
    question: "¿Cómo describes tu autoestima?",
    options: [
      { text: "Muy baja, dudo de mí constantemente", value: 0 },
      { text: "En construcción, tengo días buenos y malos", value: 1 },
      { text: "Firme, me reconozco valiosa y capaz", value: 2 },
    ],
    feedback: {
      0: "Tu valor es inherente, no depende de logros externos.",
      1: "Cada día de construcción te acerca más a tu poder auténtico.",
      2: "Tu autoestima sólida es el cimiento de todos tus éxitos.",
    },
  },
  {
    id: 8,
    question: "Cuando alguien te pide algo que no quieres hacer, ¿qué haces?",
    options: [
      { text: "Acepto aunque no quiera, para no decepcionar", value: 0 },
      { text: "A veces digo no, pero me siento culpable", value: 1 },
      { text: "Digo no con tranquilidad y sin remordimiento", value: 2 },
    ],
    feedback: {
      0: "Tu 'no' es sagrado y protege tu energía y bienestar.",
      1: "La culpa por decir 'no' irá desapareciendo con la práctica.",
      2: "Tu capacidad de honrar tus límites inspira respeto genuino.",
    },
  },
  {
    id: 9,
    question: "¿Qué piensas de tu niña interior?",
    options: [
      { text: "Ni siquiera me había planteado eso", value: 0 },
      { text: "Sé que hay heridas, pero no sé cómo sanarlas", value: 1 },
      { text: "Ya estoy en contacto con ella y la protejo", value: 2 },
    ],
    feedback: {
      0: "Tu niña interior espera tu amor y atención para sanar.",
      1: "Reconocer las heridas es el primer paso valiente hacia la sanación.",
      2: "Tu conexión amorosa con tu niña interior es profundamente sanadora.",
    },
  },
  {
    id: 10,
    question: "¿Cuál es tu relación con tus logros?",
    options: [
      { text: "No me siento suficiente, aunque consiga cosas", value: 0 },
      { text: "Reconozco algunos logros, pero quiero más", value: 1 },
      { text: "Celebro cada victoria, grande o pequeña", value: 2 },
    ],
    feedback: {
      0: "Tus logros reflejan tu valor, permítete celebrarlos plenamente.",
      1: "Reconocer tus logros alimenta tu confianza para crear más.",
      2: "Tu capacidad de celebrarte multiplica tu poder de manifestación.",
    },
  },
  {
    id: 11,
    question: "¿Qué papel juega el miedo en tu vida?",
    options: [
      { text: "Me paraliza y evita que avance", value: 0 },
      { text: "Lo siento, pero a veces me arriesgo", value: 1 },
      { text: "Lo reconozco y avanzo a pesar de él", value: 2 },
    ],
    feedback: {
      0: "El miedo es una emoción natural, pero no tiene que dirigir tu vida.",
      1: "Tu valentía está creciendo, cada riesgo te fortalece más.",
      2: "Tu coraje para actuar a pesar del miedo es verdadero poder.",
    },
  },
  {
    id: 12,
    question: "¿Qué tan conectada te sientes con tu propósito de vida?",
    options: [
      { text: "No tengo idea de cuál es", value: 0 },
      { text: "Tengo intuiciones, pero no claridad", value: 1 },
      { text: "Lo tengo claro y vivo en coherencia", value: 2 },
    ],
    feedback: {
      0: "Tu propósito vive dentro de ti, esperando ser descubierto.",
      1: "Tus intuiciones son semillas de tu propósito floreciendo.",
      2: "Vivir tu propósito con claridad es la máxima expresión de tu poder.",
    },
  },
]

// Diagnosis results
const getDiagnosis = (score: number) => {
  if (score <= 8) {
    return {
      title: "🔴 La Niña Herida Aún Te Domina",
      story: `Todavía vives aprisionada en cadenas invisibles.
Cada crítica duele como una herida profunda, cada error se convierte en un peso enorme, cada decisión viene acompañada de culpa. Te entregas demasiado, pero sientes que nunca es suficiente.

Esto no significa debilidad. Significa que tu niña herida todavía conduce tus elecciones.
Ella pide atención, pide sanación, pero quizás nunca aprendiste a escucharla.

👉 Por eso tantas veces te sientes cansada, culpable y desconectada de ti misma.

La buena noticia es que nada de esto es definitivo. Con la metodología correcta, puedes sanar tus heridas emocionales, recuperar tu voz y despertar a la Mujer Indomable que siempre estuvo dentro de ti.`,
      color: "text-red-600",
      emoji: "🔴",
    }
  } else if (score <= 16) {
    return {
      title: "🟡 Estás en la Transición",
      story: `Ya no eres la misma mujer de antes.
Has logrado percibir que existe un dolor interno, pero aún no sabes cómo transformarlo en fuerza. Algunas veces logras decir "no", otras te culpas. En ciertos días te miras al espejo con orgullo, en otros no te reconoces.

Este lugar de transición es poderoso.
Significa que ya despertaste, pero aún necesitas claridad, disciplina y las herramientas correctas para romper de una vez por todas las cadenas de la niña herida.

👉 Es exactamente aquí donde muchas mujeres se detienen… o dan el paso definitivo hacia la libertad.

Lo que necesitas ahora es un camino guiado, que te ayude a consolidar tu autoestima, crear límites saludables y finalmente convertirte en la protagonista de tu vida.`,
      color: "text-yellow-600",
      emoji: "🟡",
    }
  } else {
    return {
      title: "🟢 La Mujer Indomable Está Naciendo",
      story: `Ya has recorrido un largo camino.
Hoy sabes reconocer tus logros, ya miras al miedo sin paralizarte, y estás en contacto con tu valor. Pero aún sientes que falta algo: consistencia.

La Mujer Indomable dentro de ti ya ha despertado, pero necesita ser fortalecida.
Todavía existen momentos en los que viejos patrones intentan arrastrarte hacia atrás.

👉 Es hora de consolidar todo lo que ya aprendiste y transformarlo en una nueva identidad inquebrantable.

Con disciplina, propósito y claridad, no solo podrás sanar lo que quedó atrás, sino también liderar tu vida con poder, amor propio radical y libertad plena.`,
      color: "text-green-600",
      emoji: "🟢",
    }
  }
}

export default function QuizPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<string[]>([])
  const [showNameCollection, setShowNameCollection] = useState(false)
  const [userName, setUserName] = useState("")
  const [visibleTitle, setVisibleTitle] = useState("")
  const [visibleSubtitle, setVisibleSubtitle] = useState("")
  const [visibleText, setVisibleText] = useState("")
  const [visibleCTA, setVisibleCTA] = useState("")
  const [visibleButton, setVisibleButton] = useState("")
  const [showTypewriter, setShowTypewriter] = useState(false)

  const progress = (currentStep / quizQuestions.length) * 100
  const progressAfterAnswer = ((currentStep + 1) / quizQuestions.length) * 100

  const loadingMessages = [
    "✔ Revisando tus respuestas",
    "✔ Analizando tu perfil de poder",
    "✔ Identificando tus fortalezas",
    "✔ Evaluando patrones emocionales",
    "✔ Detectando áreas de crecimiento",
    "✔ Calculando tu potencial",
    "✔ Preparando tu diagnóstico personalizado",
  ]

  const handleAnswerSelect = (value: number) => {
    setSelectedAnswer(value)
    setShowFeedback(true)

    // Analytics
    console.log("[v0] answer_selected", {
      question: currentStep + 1,
      option: value,
      questionText: quizQuestions[currentStep].question,
    })

    // Update answers array
    const newAnswers = [...answers]
    newAnswers[currentStep] = value
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedAnswer(answers[currentStep + 1] ?? null)
      setShowFeedback(answers[currentStep + 1] !== undefined)
    } else {
      setShowNameCollection(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setSelectedAnswer(answers[currentStep - 1] ?? null)
      setShowFeedback(answers[currentStep - 1] !== undefined)
    }
  }

  const handleStartQuiz = () => {
    console.log("[v0] quiz_started")
  }

  const handleResultCTA = () => {
    console.log("[v0] cta_result_clicked")
    router.push("/offr")
  }

  const handleBack = () => {
    if (currentStep > 0) {
      handlePrevious()
    } else {
      router.push("/")
    }
  }

  const handleLogoClick = () => {
    if (confirm("¿Estás segura de que quieres salir del quiz? Perderás tu progreso actual.")) {
      router.push("/")
    }
  }

  const handleNameSubmit = () => {
    if (userName.trim()) {
      setShowNameCollection(false)
      setIsLoading(true)
      setLoadingProgress(0)
      setVisibleMessages([loadingMessages[0]])

      // Progress animation from 0 to 100% over 10 seconds
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 1
        })
      }, 100) // 100ms * 100 = 10 seconds

      let messageIndex = 0
      const messageInterval = setInterval(() => {
        messageIndex++
        if (messageIndex < loadingMessages.length) {
          setVisibleMessages((prev) => [...prev, loadingMessages[messageIndex]])
        } else {
          clearInterval(messageInterval)
        }
      }, 1500)

      setTimeout(() => {
        const totalScore = answers.reduce((sum, answer) => sum + answer, 0)
        console.log("[v0] quiz_completed", {
          score: totalScore,
          diagnosis: getDiagnosis(totalScore).title,
        })
        clearInterval(progressInterval)
        clearInterval(messageInterval)
        setIsLoading(false)
        setShowResults(true)
      }, 10000)
    }
  }

  useEffect(() => {
    if (showResults) {
      setShowTypewriter(true)
      const diagnosis = getDiagnosis(answers.reduce((sum, answer) => sum + answer, 0))

      const title = "Diagnóstico Final"
      const subtitle = diagnosis.title
      const story = diagnosis.story
      const ctaText =
        "⚡ Independientemente de en qué punto estés hoy, existe un camino estructurado para romper tus cadenas y despertar a la Mujer Indomable en solo 30 días."
      const buttonText = "Desbloquear mi Reto de 30 Días"

      const totalChars = title.length + subtitle.length + story.length + ctaText.length + buttonText.length
      const charDelay = 6000 / totalChars // 6 seconds total divided by total characters

      let currentIndex = 0

      const typewriterInterval = setInterval(() => {
        if (currentIndex < title.length) {
          setVisibleTitle(title.slice(0, currentIndex + 1))
        } else if (currentIndex < title.length + subtitle.length) {
          const subtitleIndex = currentIndex - title.length
          setVisibleSubtitle(subtitle.slice(0, subtitleIndex + 1))
        } else if (currentIndex < title.length + subtitle.length + story.length) {
          const storyIndex = currentIndex - title.length - subtitle.length
          setVisibleText(story.slice(0, storyIndex + 1))
        } else if (currentIndex < title.length + subtitle.length + story.length + ctaText.length) {
          const ctaIndex = currentIndex - title.length - subtitle.length - story.length
          setVisibleCTA(ctaText.slice(0, ctaIndex + 1))
        } else if (currentIndex < totalChars) {
          const buttonIndex = currentIndex - title.length - subtitle.length - story.length - ctaText.length
          setVisibleButton(buttonText.slice(0, buttonIndex + 1))
        } else {
          clearInterval(typewriterInterval)
        }

        currentIndex++
      }, charDelay)

      return () => clearInterval(typewriterInterval)
    }
  }, [showResults, answers])

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="sticky top-0 z-50" style={{ backgroundColor: "#250003" }}>
          <div className="h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-accent opacity-50" />
            </div>
            <Image
              src="/mujer-indomable-logo.png"
              alt="Mujer Indomable"
              width={120}
              height={80}
              className="w-[90px] h-[60px] sm:w-[120px] sm:h-[80px] object-contain"
            />
            <div className="flex items-center">
              <span className="text-xs sm:text-sm font-medium text-accent opacity-0">12/12</span>
            </div>
          </div>
          <div className="h-0.5 bg-accent"></div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-xs sm:max-w-md mx-auto">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8">
              <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#8B1538"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 54}`}
                  strokeDashoffset={`${2 * Math.PI * 54 * (1 - loadingProgress / 100)}`}
                  className="transition-all duration-100 ease-out"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-gray-800">{loadingProgress}%</span>
              </div>
            </div>

            <div className="min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-start space-y-2">
              {visibleMessages.map((message, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-700 font-medium animate-fade-in">
                  {message}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showNameCollection) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="sticky top-0 z-50" style={{ backgroundColor: "#250003" }}>
          <div className="h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-accent opacity-50" />
            </div>
            <Image
              src="/mujer-indomable-logo.png"
              alt="Mujer Indomable"
              width={120}
              height={80}
              className="w-[90px] h-[60px] sm:w-[120px] sm:h-[80px] object-contain"
            />
            <div className="flex items-center">
              <span className="text-xs sm:text-sm font-medium text-accent opacity-0"></span>
            </div>
          </div>
          <div className="h-0.5 bg-accent"></div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-md mx-auto w-full">
            <div className="mb-8">
              <h1 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-gray-900">
                Tu diagnóstico está casi listo....
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Para entregarte un resultado personalizado, necesitamos saber tu nombre:
              </p>

              <div className="mb-6">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Escribe tu nombre aquí..."
                  className="w-full p-4 text-center text-lg border-2 border-gray-200 rounded-lg focus:border-red-800 focus:outline-none transition-colors text-black"
                  onKeyPress={(e) => e.key === "Enter" && handleNameSubmit()}
                />
              </div>

              <Button
                onClick={handleNameSubmit}
                disabled={!userName.trim()}
                className="bg-red-800 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              >
                Ver mi Diagnóstico Personalizado
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0)
    const diagnosis = getDiagnosis(totalScore)

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="sticky top-0 z-50" style={{ backgroundColor: "#250003" }}>
          <div className="h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6">
            <button
              onClick={() => router.push("/")}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-black/20 transition-colors"
              aria-label="Volver"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            </button>

            <Image
              src="/mujer-indomable-logo.png"
              alt="Mujer Indomable"
              width={120}
              height={80}
              className="w-[90px] h-[60px] sm:w-[120px] sm:h-[80px] object-contain"
            />

            <div className="flex items-center">
              <span className="text-xs sm:text-sm font-medium text-accent opacity-0">12/12</span>
            </div>
          </div>
          <div className="h-0.5 bg-accent"></div>
        </div>

        <div className="flex-1 flex items-center justify-center py-4 sm:py-8 px-4">
          <div className="max-w-3xl mx-auto text-center w-full">
            {userName && (
              <div className="mb-4">
                <p className="text-lg sm:text-xl font-semibold text-red-800">Ya casi estás {userName} 🌹</p>
              </div>
            )}

            <div className="mb-6 sm:mb-8">
              <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 px-2">
                {visibleTitle}
                {visibleTitle.length < "Diagnóstico Final".length && <span className="animate-pulse">|</span>}
              </h1>

              <h2
                className={`font-heading font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 ${diagnosis.color} px-2`}
              >
                {visibleSubtitle}
                {visibleTitle.length >= "Diagnóstico Final".length &&
                  visibleSubtitle.length < diagnosis.title.length && <span className="animate-pulse">|</span>}
              </h2>

              <div className="text-left bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="prose prose-sm sm:prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                    {visibleText}
                    {visibleSubtitle.length >= diagnosis.title.length &&
                      visibleText.length < diagnosis.story.length && <span className="animate-pulse">|</span>}
                  </div>
                </div>
              </div>

              {visibleText.length >= diagnosis.story.length && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    {visibleCTA}
                    {visibleCTA.length <
                      "⚡ Independientemente de en qué punto estés hoy, existe un camino estructurado para romper tus cadenas y despertar a la Mujer Indomable en solo 30 días."
                        .length && <span className="animate-pulse">|</span>}
                  </p>
                </div>
              )}
            </div>

            {visibleCTA.length >=
              "⚡ Independientemente de en qué punto estés hoy, existe un camino estructurado para romper tus cadenas y despertar a la Mujer Indomable en solo 30 días."
                .length && (
              <div className="mb-6 sm:mb-8 px-4">
                <Button
                  size="lg"
                  onClick={handleResultCTA}
                  className="bg-red-800 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[50px] sm:min-h-[60px] w-full sm:w-auto max-w-sm animate-bounce"
                >
                  {visibleButton}
                  {visibleButton.length < "Desbloquear mi Reto de 30 Días".length && (
                    <span className="animate-pulse">|</span>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = quizQuestions[currentStep]

  return (
    <div className="min-h-screen flex flex-col bg-white" onLoad={handleStartQuiz}>
      <div className="sticky top-0 z-50" style={{ backgroundColor: "#250003" }}>
        <div className="h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-black/20 transition-colors"
            aria-label="Volver"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
          </button>

          <button onClick={handleLogoClick}>
            <Image
              src="/mujer-indomable-logo.png"
              alt="Mujer Indomable"
              width={120}
              height={80}
              className="w-[90px] h-[60px] sm:w-[120px] sm:h-[80px] object-contain"
            />
          </button>

          <div className="flex items-center" aria-live="polite">
            <span className="text-xs sm:text-sm font-medium text-accent">
              {currentStep + 1}/{quizQuestions.length}
            </span>
          </div>
        </div>

        <div className="h-0.5" style={{ backgroundColor: "#3a1515" }}>
          <div
            className="h-full transition-all duration-300 ease-out bg-accent"
            style={{
              width: `${showFeedback ? progressAfterAnswer : progress}%`,
            }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(showFeedback ? progressAfterAnswer : progress)}
          ></div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto w-full">
          <div className="mb-6 sm:mb-8">
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 text-center text-balance text-gray-900 px-2">
              {currentQuestion.question}
            </h1>

            <div className="space-y-3 mb-4 sm:mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option.value)}
                  className={`w-full p-3 sm:p-4 text-left rounded-lg border transition-all duration-200 ${
                    selectedAnswer === option.value
                      ? "bg-red-50 border-red-800 text-red-900"
                      : "bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base pr-2">{option.text}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>

            {showFeedback && selectedAnswer !== null && (
              <div className="hidden">
                <p className="text-xs sm:text-sm text-yellow-800">
                  {currentQuestion.feedback[selectedAnswer as keyof typeof currentQuestion.feedback]}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center gap-4 px-2 pb-4 sm:pb-0">
            <div></div>

            <Button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="bg-red-800 hover:bg-red-700 text-white flex items-center gap-1 sm:gap-2 px-4 sm:px-6 text-sm sm:text-base ml-auto mr-4 sm:mr-0"
            >
              {currentStep === quizQuestions.length - 1 ? (
                <>
                  <span className="hidden sm:inline">Ver Resultado</span>
                  <span className="sm:hidden">Resultado</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Siguiente</span>
                  <span className="sm:hidden">Sig.</span>
                </>
              )}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
