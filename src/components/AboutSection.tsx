import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Download, MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Experiences professionnelles", value: "3", icon: BriefcaseBusiness },
    { label: "Formations superieures", value: "2", icon: GraduationCap },
    { label: "Ville actuelle", value: "Lille", icon: MapPin },
  ];

  const focus = [
    "Automatisation avec n8n",
    "Machine Learning (Scikit-learn)",
    "Data engineering (SQL / ETL)",
    "Developpement web avec Next.js",
    "Methodes Agile / Scrum",
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container-width section-padding">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">A propos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Etudiant en Master Ingenierie Data & IA, je recherche une alternance de 2 ans en architecture SI et innovation IA.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://github.com/JXPM.png"
                  alt="Photo de Johan Bile"
                  className="h-16 w-16 rounded-full border border-white/30 object-cover"
                />
                <div>
                  <p className="font-semibold">Johan Bile</p>
                  <p className="text-sm text-muted-foreground">Data / AI Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Mon positionnement</h3>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    J'accompagne les equipes dans la creation de solutions data et IA utiles au quotidien:
                    automatiser des flux, fiabiliser les donnees et faciliter la prise de decision.
                  </p>
                  <p>
                    Mon approche combine rigueur technique, comprehension metier et sens du produit.
                    Je privilegie des livrables concrets, mesurables, et faciles a maintenir.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Lille, France</span>
                </div>
                <a href="/CV_Bile_Kouame.pdf" download="CV_Bile_Kouame.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Telecharger mon CV
                  </Button>
                </a>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Focus actuels</h4>
                <div className="flex flex-wrap gap-2">
                  {focus.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="glass-strong">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-accent/60">
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass-strong">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-center">
                    "Transformer la data en impact metier mesurable."
                  </blockquote>
                  <cite className="block text-sm text-muted-foreground text-center mt-2">
                    - Johan Bile
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;