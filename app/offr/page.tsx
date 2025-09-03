"use client"

import { ArrowLeft, Smartphone, Infinity, Headphones, Clock, RefreshCw, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function OffrPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState("1-month")
  const [confirmationChecked, setConfirmationChecked] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(900)

  const toggleFaq = (index: number) => {
    setOpenFaq((prevOpenFaq) => (prevOpenFaq === index ? null : index))
  }

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleBack = () => {
    router.push("/quiz")
  }

  const handleLogoClick = () => {
    if (confirm("¿Estás segura de que quieres salir? Serás redirigida al inicio.")) {
      router.push("/")
    }
  }

  const getPlanPrice = () => {
    switch (selectedPlan) {
      case "1-month":
        return "17.00"
      case "lifetime":
        return "37.00" // Updated lifetime plan price from 47.00 to 37.00
      default:
        return "17.00"
    }
  }

  const getCheckoutUrl = () => {
    switch (selectedPlan) {
      case "1-month":
        return "https://pay.hotmart.com/K101722033G?off=g4o4k4pa&checkoutMode=10&bid=1756915738976"
      case "lifetime":
        return "https://pay.hotmart.com/K101722033G?off=psdicmts&checkoutMode=10&bid=1756915754290"
      default:
        return "https://pay.hotmart.com/K101722033G?off=g4o4k4pa&checkoutMode=10&bid=1756915738976"
    }
  }

  const handleCheckout = () => {
    if (confirmationChecked) {
      window.open(getCheckoutUrl(), "_blank")
    }
  }

  const faqData = [
    {
      question: "¿Qué es exactamente Mujer Indomable?",
      answer:
        "Es una aplicación digital de transformación personal de 30 días con desafíos diarios, meditaciones y un diario interactivo. Todo está diseñado para ayudarte a sanar heridas emocionales, fortalecer tu autoestima y reconectarte con tu verdadero poder.",
    },
    {
      question: "¿Necesito tener experiencia previa en terapia o meditación?",
      answer:
        "No. El programa está creado para mujeres de cualquier edad o experiencia. Todo está guiado paso a paso, de forma clara y práctica.",
    },
    {
      question: "¿Puedo acceder desde cualquier lugar?",
      answer: "Sí. Puedes usarlo en tu celular, tablet o computadora. Solo necesitas conexión a internet.",
    },
    {
      question: "¿Cuánto tiempo debo dedicar al día?",
      answer:
        "Entre 10 y 20 minutos diarios son suficientes para avanzar en el desafío. Tú eliges el momento que mejor se ajuste a tu rutina.",
    },
    {
      question: "¿Qué pasa si no tengo tiempo un día?",
      answer:
        "No pasa nada. El programa está diseñado para que avances a tu propio ritmo. Puedes retomar cuando quieras, sin perder tu progreso.",
    },
    {
      question: "¿Es un pago único o una suscripción?",
      answer:
        "Depende del plan que elijas: puedes hacer el desafío completo de 30 días o acceder de por vida con el plan vitalicio.",
    },
    {
      question: "¿Tengo garantía?",
      answer:
        "Sí. Tienes 7 días de garantía incondicional. Si no te gusta el programa, puedes cancelar y recibir el 100% de tu dinero.",
    },
    {
      question: "¿Los resultados son reales?",
      answer:
        "Sí. Más de 5.000 mujeres ya pasaron por este desafío y reportaron cambios profundos en su confianza, autoestima y relaciones.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50" style={{ backgroundColor: "#250003" }}>
        <div className="h-14 sm:h-16 md:h-20 flex items-center justify-between px-3 sm:px-4 md:px-6">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full hover:bg-black/20 transition-colors touch-manipulation"
            aria-label="Volver"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
          </button>

          <button onClick={handleLogoClick} className="touch-manipulation">
            <Image
              src="/mujer-indomable-logo.png"
              alt="Mujer Indomable"
              width={120}
              height={80}
              className="w-[80px] h-[53px] sm:w-[100px] sm:h-[67px] md:w-[120px] md:h-[80px] object-contain"
            />
          </button>

          <div className="flex items-center w-10"></div>
        </div>
        <div className="h-0.5 bg-accent"></div>
      </div>

      <div className="flex-1 flex items-center justify-center py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto w-full">
          {/* Headline */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
              Rompe tus cadenas en solo 30 días y despierta a la <span className="text-accent">Mujer Indomable</span>{" "}
              que vive dentro de ti.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
              Descubre el método que ya ayudó a más de 5.000 mujeres a dejar de vivir como "Niñas Heridas" y finalmente
              asumir su verdadera fuerza.
            </p>

            <div className="flex justify-center mb-6 sm:mb-8 px-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bgBfW6wMlwR7bZhWiqDeMlFfejLpMi.png"
                alt="Artículo sobre psicología y tecnología"
                width={600}
                height={400}
                className="rounded-lg shadow-lg max-w-full h-auto w-full max-w-md sm:max-w-lg md:max-w-xl"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              ¿Te sientes identificada?
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700">¿Alguna vez te has sentido atrapada por la culpa?</p>
              <p className="text-base sm:text-lg text-gray-700">¿Te has mirado al espejo y te ha costado aceptarte?</p>
              <p className="text-base sm:text-lg text-gray-700">
                ¿Has notado que das demasiado a los demás y queda poco para ti?
              </p>
              <p className="text-base sm:text-lg text-gray-700">¿Has tenido relaciones tóxicas y repetitivas?</p>
              <p className="text-base sm:text-lg text-gray-700">
                ¿Te sientes constantemente culpable por no ser "suficiente"?
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                ¿Sufres de ansiedad y pensamientos negativos que no se apagan?
              </p>
              <p className="text-base sm:text-lg text-gray-700">¿Tienes miedo al rechazo y al abandono?</p>
              <p className="text-base sm:text-lg text-gray-700">
                ¿Es difícil para ti confiar en ti misma y en los demás?
              </p>
              <p className="text-base sm:text-lg text-gray-700">¿Sientes dolorosas comparaciones con otras mujeres?</p>
              <p className="text-base sm:text-lg text-gray-700">¿Cargas con heridas del pasado que nunca sanan?</p>
            </div>

            <p className="text-gray-700 mb-4 text-base sm:text-lg">
              Muchas mujeres cargan heridas emocionales que vienen de la infancia, de relaciones tóxicas, de decepciones
              y de años poniéndose en segundo lugar.
            </p>

            <p className="text-base sm:text-lg font-semibold text-gray-900 mb-4">El resultado es claro:</p>

            <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
              <li>• Baja autoestima.</li>
              <li>• Dificultad para poner límites.</li>
              <li>• Un vacío interno que parece nunca llenarse.</li>
              <li>• Relaciones tóxicas y repetitivas.</li>
              <li>• Culpa constante por no ser "suficiente".</li>
              <li>• Ansiedad y pensamientos negativos que no se apagan.</li>
              <li>• Miedo al rechazo y al abandono.</li>
              <li>• Dificultad para confiar en sí misma y en los demás.</li>
              <li>• Comparaciones dolorosas con otras mujeres.</li>
              <li>• Sensación de cargar con heridas del pasado que nunca sanan.</li>
            </ul>
          </div>

          {/* Agravamiento */}
          <div className="mb-6 sm:mb-8 px-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Y cuanto más intentas ignorar ese dolor, más crece.
            </h3>
            <p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">
              Puede que hayas logrado cosas en tu vida — carrera, relaciones, independencia — pero por dentro sigues
              sintiendo que algo no está completo.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
              Este ciclo de autoexigencia y culpa no solo roba tu paz, también mina tus relaciones, tus sueños y tu
              capacidad de vivir plenamente.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-red-600 py-4 sm:py-6 px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Pero existe un camino.</h3>
          <p className="text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
            Con la <strong>App Mujer Indomable</strong>, tendrás acceso a un método estructurado, simple y poderoso para
            sanar tus heridas emocionales, recuperar tu autoestima y reconectarte con tu verdadero poder femenino.
          </p>
        </div>
      </div>

      {/* Prueba Social */}
      <div className="flex-1 flex items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ✅ Más de 5.000 mujeres ya vivieron esta transformación.
            </h3>
            <p className="text-gray-700 mb-4">
              Comenzaron sintiéndose atrapadas, llenas de dudas, y hoy viven con confianza, libertad y propósito.
            </p>
            <p className="text-gray-700">
              Mujeres comunes, madres, empresarias e incluso terapeutas reportan resultados profundos y duraderos.
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/janis-1109x1200-1-WWdFcT2D1rVNkC1eCMuGu8qlmRVJkk.jpeg"
                  alt="María Elena"
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-bold text-gray-900 mr-2">María Elena</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Madre de 2 hijos, México</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "Después de años sintiéndome perdida, finalmente encontré mi fuerza interior. Los 30 días me
                    ayudaron a sanar heridas que creía imposibles de curar. Ahora me siento completa y en paz conmigo
                    misma."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <img
                  src="/carmen-rodriguez-espana.jpeg"
                  alt="Carmen Rodríguez"
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-bold text-gray-900 mr-2">Carmen Rodríguez</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Empresaria, España</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "Tenía una autoestima muy baja y relaciones tóxicas repetitivas. Este programa me enseñó a valorarme
                    y poner límites. Mi vida cambió completamente, ahora atraigo personas que me respetan y valoran."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/free-photo-of-retrato-elegante-de-uma-mulher-com-tatuagem-cWab0Ujz6CwQgYN75PIRt7bx66uTfS.jpeg"
                  alt="Lucía Fernández"
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-bold text-gray-900 mr-2">Lucía Fernández</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Psicóloga, Argentina</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "Como terapeuta pensé que ya tenía todo resuelto, pero este programa me mostró aspectos de mí misma
                    que no había trabajado. Las meditaciones y ejercicios son profundos y realmente transformadores."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <img src="/maria-elena-mexico.jpeg" alt="Ana Sofía" className="w-15 h-15 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-bold text-gray-900 mr-2">Ana Sofía</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Estudiante, Colombia</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "Sufría de ansiedad constante y pensamientos negativos. En solo 30 días aprendí técnicas que me
                    ayudan todos los días. Ahora confío en mí misma y vivo sin ese miedo constante que me paralizaba."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Oferta */}
          <div className="bg-accent/10 rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Obtendrás acceso inmediato a la App Mujer Indomable:
            </h3>

            <p className="text-lg text-gray-900 mb-6 text-center font-semibold">
              Dentro de nuestra aplicación exclusiva tendrás acceso a:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-gray-700">
                  30 días de desafíos guiados, paso a paso, directamente desde tu celular o computadora.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-gray-700">
                  Meditaciones en audio y video, diseñadas para desbloquear tu fuerza interior.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-gray-700">
                  Diario digital interactivo, para registrar tus reflexiones y evolución diaria.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-gray-700">
                  Sistema de logros y recompensas, que te motiva y celebra cada pequeño avance.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-gray-700">
                  Comunidad privada, donde miles de mujeres comparten su proceso y se apoyan mutuamente.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dark background section */}
      <div style={{ backgroundColor: "#250003" }} className="w-full">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Copy section - first part */}
            <div className="flex-1 text-white lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
                ¿Qué es la Mujer Indomable?
              </h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Es una aplicación de transformación personal que te guía paso a paso durante 30 días. Cada día
                  desbloquearás un desafío práctico, una meditación exclusiva y un espacio en tu diario digital para
                  reflexionar. Además, ganarás logros al avanzar y compartirás tu proceso en una comunidad privada con
                  miles de mujeres.
                </p>
                <p className="hidden lg:block">
                  No es teoría: es un camino claro, estructurado y motivador para sanar heridas emocionales, fortalecer
                  tu autoestima y reconectarte con tu verdadero poder. En solo 30 días, experimentarás técnicas
                  terapéuticas reales que te restaurarán por completo, convirtiéndote en una nueva mujer.
                </p>
              </div>
            </div>

            {/* GIF section */}
            <div className="flex-shrink-0 lg:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brasil%20%285%29-WkWRc2NbJCCw8Ql4xw852BuYlhqYpN.gif"
                alt="App Mujer Indomable - Reto 30 días com fundo escuro e íconos de plataformas"
                width={400}
                height={300}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="text-white lg:hidden lg:order-3">
              <div className="space-y-4 text-lg leading-relaxed text-center">
                <p>
                  No es teoría: es un camino claro, estructurado y motivador para sanar heridas emocionales, fortalecer
                  tu autoestima y reconectarte con tu verdadero poder. En solo 30 días, experimentarás técnicas
                  terapéuticas reales que te restaurarán por completo, convirtiéndote en una nueva mujer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-8 sm:py-12 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-black">
            Lo que obtienes con tu acceso
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 - Acceso inmediato */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#dc2626" }}>
                    Acceso Inmediato
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Programa disponible desde cualquier dispositivo (móvil, tableta o ordenador). Comienza ahora mismo.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Acceso de por vida */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    <Infinity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#dc2626" }}>
                    Acceso de Por Vida
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Plan personalizado para siempre. Repite el desafío tantas veces como quieras.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Tareas y audios */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#dc2626" }}>
                    Contenido Guiado
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Tareas y audios guiados listos para usar a cualquier hora del día.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Disponibilidad 24/7 */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#dc2626" }}>
                    Disponibilidad 24/7
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Sin horarios fijos. Tú eliges cuándo avanzar respetando tu ritmo personal.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 - Actualizaciones - spans full width on mobile, takes remaining space on desktop */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm sm:col-span-2">
              <div className="flex items-start space-x-3 sm:space-x-4 max-w-md mx-auto sm:mx-0">
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#dc2626" }}
                  >
                    <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: "#dc2626" }}>
                    Actualizaciones Constantes
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Nuevos contenidos y meditaciones añadidas regularmente para enriquecer tu experiencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-8 sm:py-12 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center bg-red-50 border-2 border-red-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mb-4 sm:mb-6">
              <div className="text-center">
                <p className="text-xs sm:text-sm font-semibold text-red-600 mb-1">¡Oferta por tiempo limitado!</p>
                <div className="text-2xl sm:text-3xl font-bold text-red-600 font-mono">{formatTime(timeLeft)}</div>
                <p className="text-xs text-red-500 mt-1">Esta oferta expira pronto</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            Elige tu plan de transformación
          </h2>

          <p className="text-center mb-6 sm:mb-8 text-red-600 font-medium text-base sm:text-lg">
            No te preocupes por la conversión: el sistema ajusta el precio automáticamente a la moneda de tu país.
          </p>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {/* Plan 1 Mes - Más Popular */}
            <div
              className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg touch-manipulation ${
                selectedPlan === "1-month"
                  ? "border-[#c8a96a] bg-white shadow-md"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }`}
              onClick={() => setSelectedPlan("1-month")}
            >
              {/* Más Popular Badge */}
              <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6">
                <div className="px-3 sm:px-4 py-1 rounded-full text-xs font-bold text-white bg-[#c8a96a]">
                  ⭐ Más Popular
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 sm:pt-2">
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <input
                    type="radio"
                    name="plan"
                    value="1-month"
                    checked={selectedPlan === "1-month"}
                    onChange={() => setSelectedPlan("1-month")}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 border-gray-300 focus:ring-green-500 touch-manipulation"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Plan 1 Mes</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Acceso completo al desafío de 30 días</p>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 line-through text-sm">$30</span>
                      <span className="text-base sm:text-lg font-bold text-green-600">$17</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">$0.51</div>
                  <p className="text-gray-600 text-xs sm:text-sm">por día</p>
                </div>
              </div>
            </div>

            {/* Plan Vitalicio */}
            <div
              className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg touch-manipulation ${
                selectedPlan === "lifetime"
                  ? "border-[#c8a96a] bg-white shadow-md"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }`}
              onClick={() => setSelectedPlan("lifetime")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <input
                    type="radio"
                    name="plan"
                    value="lifetime"
                    checked={selectedPlan === "lifetime"}
                    onChange={() => setSelectedPlan("lifetime")}
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 border-gray-300 focus:ring-green-500 focus:ring-2 touch-manipulation"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Plan Vitalicio</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Para ti que quieres seguir siendo transformada todos los días de tu vida
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-bold text-green-600">$37</span>{" "}
                      {/* Updated lifetime plan display price from $47 to $37 */}
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">∞</div>
                  <p className="text-gray-600 text-xs sm:text-sm">para siempre</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4 sm:mb-6 max-w-md mx-auto">
              <label className="flex items-start space-x-3 cursor-pointer touch-manipulation">
                <input
                  type="checkbox"
                  checked={confirmationChecked}
                  onChange={(e) => setConfirmationChecked(e.target.checked)}
                  className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 touch-manipulation"
                />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Al hacer clic en DESBLOQUEAR MI ACCESO AHORA, estoy de acuerdo en pagar ${getPlanPrice()} y soy
                  consciente de que tengo una garantía incondicional de 7 días para cancelar si no me gusta el producto.
                </span>
              </label>
            </div>

            <button
              disabled={!confirmationChecked}
              onClick={handleCheckout}
              className={`w-full max-w-md mx-auto py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-white font-bold text-base sm:text-lg transition-all shadow-lg touch-manipulation min-h-[48px] ${
                confirmationChecked ? "hover:opacity-90 cursor-pointer" : "opacity-50 cursor-not-allowed"
              }`}
              style={{ backgroundColor: "#16a34a" }}
            >
              Desbloquear mi acceso ahora
            </button>
          </div>
        </div>
      </div>

      <div className="w-full py-4 sm:py-6 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 font-bold">
            Compra segura, intimidad protegida y satisfacción garantizada.
          </p>
          <Image
            src="/payment-methods.png"
            alt="Métodos de pago aceptados"
            width={500}
            height={80}
            className="w-full max-w-xs sm:max-w-md mx-auto h-auto opacity-80"
          />
        </div>
      </div>

      <div className="w-full py-8 sm:py-12 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-black">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border transition-all duration-200 hover:shadow-lg"
                style={{
                  borderColor: "#c8a96a",
                  backgroundColor: openFaq === index ? "rgba(200, 169, 106, 0.1)" : "white",
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between focus:outline-none touch-manipulation min-h-[48px]"
                >
                  <span className="text-black font-semibold text-base sm:text-lg pr-3 sm:pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    style={{ color: "#c8a96a" }}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <div className="pt-2 border-t" style={{ borderColor: "rgba(200, 169, 106, 0.3)" }}>
                      <p className="text-black/80 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-6 sm:py-8 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <Image
            src="/security-badges.png"
            alt="Certificados de seguridad y confianza"
            width={600}
            height={120}
            className="w-full max-w-sm sm:max-w-lg mx-auto h-auto opacity-70"
          />
        </div>
      </div>

      <footer className="py-4 sm:py-6 px-3 sm:px-4 bg-black text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm">© 2024 Mujer Indomable. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
