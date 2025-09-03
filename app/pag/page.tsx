import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Trophy, Heart, Sparkles, Crown, Shield } from "lucide-react"

export default function PagPage() {
  return (
    <div className="min-h-screen">
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Tu Transformación Comienza Aquí</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre los pilares fundamentales que te llevarán de donde estás a donde quieres estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Crown,
                title: "Autoestima Inquebrantable",
                description: "Aprende a mirarte al espejo y sentir orgullo cada día, sin miedo ni dudas.",
              },
              {
                icon: Sparkles,
                title: "Mentalidad de Abundancia",
                description: "Rompe la escasez que heredaste y abre espacio a la abundancia que siempre fue tuya.",
              },
              {
                icon: Heart,
                title: "Amor Propio Radical",
                description: "Quiérete tanto que priorizarte deje de ser culpa y se convierta en libertad.",
              },
              {
                icon: Trophy,
                title: "Liderazgo Femenino",
                description: "Descubre la fuerza de guiar tu vida y a otros desde tu esencia indomable.",
              },
              {
                icon: Shield,
                title: "Límites Saludables",
                description: "Aprende a decir NO con amor, protegiendo tu energía y tu paz.",
              },
              {
                icon: Star,
                title: "Propósito de Vida",
                description: "Encuentra el camino que enciende tu alma y te conecta con tu deseo más profundo.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-card border-border/20 hover:shadow-lg transition-shadow p-3 sm:p-4 lg:p-6 hover:border-accent/30"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 border border-accent/30">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4 text-accent">
              Historias de Transformación Real
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mujeres como tú que rompieron sus cadenas y despertaron su poder interior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/elegant-spanish-woman-professional-portrait-confid.png"
                    alt="María testimonial"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div>
                    <CardTitle className="font-heading text-lg">María Elena</CardTitle>
                    <p className="text-sm text-muted-foreground">Empresaria, Madrid</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground italic">
                  "Después de 30 días, finalmente pude decir 'no' sin sentir culpa. Mi vida cambió completamente cuando
                  entendí que cuidarme a mí misma no es egoísmo, es necesidad."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/sophisticated-spanish-businesswoman-elegant-portra.png"
                    alt="Carmen testimonial"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div>
                    <CardTitle className="font-heading text-lg">Carmen Ruiz</CardTitle>
                    <p className="text-sm text-muted-foreground">Directora, Barcelona</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground italic">
                  "Llevaba años sintiéndome invisible en mi propia vida. Este programa me devolvió mi voz, mi poder y mi
                  autoestima. Ahora lidero con confianza en todos los aspectos."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/confident-spanish-woman-professional-elegant-portr.png"
                    alt="Isabel testimonial"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div>
                    <CardTitle className="font-heading text-lg">Isabel Moreno</CardTitle>
                    <p className="text-sm text-muted-foreground">Psicóloga, Valencia</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground italic">
                  "Como profesional de la salud mental, sabía la teoría, pero no podía aplicarla a mi vida. Este
                  programa me enseñó a ser mi propia prioridad sin culpa ni excusas."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">© 2024 Mujer Indomable. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
