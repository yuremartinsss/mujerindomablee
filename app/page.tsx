import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MujerIndomablePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-8 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-12">
            <Image
              src="/mujer-indomable-logo.png"
              alt="Mujer Indomable Logo"
              width={150}
              height={100}
              className="mx-auto"
              priority
            />
          </div>

          <div className="mb-6 md:mb-8">
            <div className="inline-block bg-accent/10 border-2 border-accent rounded-full px-3 py-2 md:px-6 md:py-3 shadow-lg">
              <p className="text-accent font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight">
                🌙 Para mujeres comunes, madres, empresarias o terapeutas poderosas... +5.000 Mujeres Indomables 🐅
              </p>
            </div>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8 text-balance px-2">
            <span className="text-foreground">Rompe tus</span>{" "}
            <span className="text-accent">cadenas en 30 días...</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 text-pretty max-w-3xl mx-auto leading-relaxed px-2">
            Descubre si todavía actúas como una Niña Herida o si ya está despertando la Mujer Indomable dentro de ti.
            Responde este breve diagnóstico y da tu primer paso hacia la libertad.
          </p>

          <div className="flex justify-center items-center px-4">
            <Button
              size="lg"
              asChild
              className="bg-red-800 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse min-h-[50px] sm:min-h-[60px] w-full sm:w-auto max-w-sm"
            >
              <a href="/quiz">Comenzar mi Transformación</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 bg-black text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs">© 2024 Mujer Indomable. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
