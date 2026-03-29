import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Cloud,
  MessageCircle,
  Brain,
  BarChart,
  Wrench,
} from "lucide-react";

const SkillsSection = () => {
  const hardSkills = [
    {
      titre: "Data Engineering & Cloud",
      icon: Cloud,
      items: ["SQL (PostgreSQL)", "ETL & data pipelines", "Data warehouse", "Structuration des flux"],
    },
    {
      titre: "Data Science & IA",
      icon: Brain,
      items: ["Python (Pandas, NumPy, Scikit-learn)", "Modeles predictifs", "Machine Learning", "Detection d'anomalies"],
    },
    {
      titre: "Business Intelligence & Reporting",
      icon: BarChart,
      items: ["Tableaux de bord", "Requetes SQL avancees", "Visualisation des donnees", "Reporting automatise"],
    },
  ];

  const softSkills = ["Communication", "Adaptabilite", "Rigueur", "Travail d'equipe", "Esprit analytique", "Orientation resultats"];
  const outils = ["n8n", "Git/GitHub", "Linux", "Agile/Scrum", "UML", "Next.js"];
  const langues = [
    { nom: "Francais", niveau: "Natif" },
    { nom: "Anglais", niveau: "B2" },
  ];

  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">Competences</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Stack technique, soft skills et outils utilises au quotidien.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Competences techniques</h3>
              {hardSkills.map((category) => (
                <Card key={category.titre} className="border-border/70 bg-card/70">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <category.icon className="w-5 h-5" /> {category.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <Badge key={item} className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex-1 space-y-8 mt-6 lg:mt-0">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Soft skills</h3>
                <Card className="border-border/70 bg-card/70">
                  <CardContent className="p-5 flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Langues</h3>
                <Card className="border-border/70 bg-card/70">
                  <CardContent className="p-5 space-y-3">
                    {langues.map((langue) => (
                      <div key={langue.nom} className="flex items-center justify-between text-sm">
                        <span className="font-medium">{langue.nom}</span>
                        <span className="text-muted-foreground">{langue.niveau}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Outils & methodologie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {outils.map((outil) => (
                    <Badge key={outil} variant="outline" className="text-xs sm:text-sm py-1 px-2">
                      {outil}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
