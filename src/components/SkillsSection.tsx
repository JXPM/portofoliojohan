"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Database,
  Cloud,
  Users,
  Lightbulb,
  MessageCircle,
  Target,
  Zap,
  Brain,
  ClipboardCheck,
  Shield,
  Volleyball,
  BookOpen,
  BarChart
} from "lucide-react";

interface Skill {
  nom: string;
  icone: React.ReactNode;
  description: string;
}

interface SkillCategory {
  titre: string;
  icone: React.ReactNode;
  competences: Skill[];
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("competences");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const hardSkillsConsulting: SkillCategory[] = [
    {
      titre: "Data Engineering & Cloud",
      icone: <Cloud className="w-5 h-5" />,
      competences: [
        { nom: "ETL / Pipelines", icone: <Database className="w-4 h-4" />, description: "Automatisation des flux de données pour l’intégration et la transformation" },
        { nom: "Cloud (AWS / GCP / Azure)", icone: <Cloud className="w-4 h-4" />, description: "Déploiement et gestion de données dans des environnements cloud" },
        { nom: "PostgreSQL", icone: <Database className="w-4 h-4" />, description: "Gestion et optimisation de bases de données relationnelles" }
      ]
    },
    {
      titre: "Data Science & IA",
      icone: <Brain className="w-5 h-5" />,
      competences: [
        { nom: "Python (Pandas, NumPy, Scikit-learn)", icone: <Code className="w-4 h-4" />, description: "Analyse de données et modélisation prédictive" },
        { nom: "Machine Learning", icone: <Brain className="w-4 h-4" />, description: "Création de modèles supervisés et non supervisés" },
        { nom: "IA Générative (OpenAI, LLMs)", icone: <Brain className="w-4 h-4" />, description: "Développement de solutions basées sur l’IA conversationnelle et générative" },
        { nom: "NLP / Chatbots", icone: <MessageCircle className="w-4 h-4" />, description: "Conception et intégration d’assistants virtuels intelligents" }
      ]
    },
    {
      titre: "Business Intelligence & Reporting",
      icone: <BarChart className="w-5 h-5" />,
      competences: [
        { nom: "Power BI", icone: <BarChart className="w-4 h-4" />, description: "Création de tableaux de bord pour la prise de décision" },
        { nom: "SQL Avancé", icone: <Database className="w-4 h-4" />, description: "Requêtes et analyses avancées pour extraction de données" },
        { nom: "Visualisation de données", icone: <BarChart className="w-4 h-4" />, description: "Présentation claire et interactive des insights" }
      ]
    },
    {
      titre: "Cybersécurité & Protection des Données",
      icone: <Shield className="w-5 h-5" />,
      competences: [
        { nom: "IoT Security", icone: <Shield className="w-4 h-4" />, description: "Gestion des risques liés aux objets connectés" },
        { nom: "Droits d’accès & Authentification", icone: <Shield className="w-4 h-4" />, description: "Mise en place et contrôle des accès aux données sensibles" },
        { nom: "RGPD", icone: <Shield className="w-4 h-4" />, description: "Conformité et protection des données personnelles" }
      ]
    }
  ];

  const softSkills = [
    { nom: "Leadership", icone: <Users className="w-5 h-5" />, description: "Capacité à diriger, motiver et coordonner des équipes" },
    { nom: "Gestion de projet", icone: <ClipboardCheck className="w-5 h-5" />, description: "Planification, organisation et suivi de projets IT & Data" },
    { nom: "Communication", icone: <MessageCircle className="w-5 h-5" />, description: "Échanges clairs et adaptés avec clients, partenaires et équipes" },
    { nom: "Adaptabilité", icone: <Zap className="w-5 h-5" />, description: "Flexibilité et réactivité face aux nouveaux environnements et technologies" },
    { nom: "Esprit analytique", icone: <Brain className="w-5 h-5" />, description: "Analyse des données et résolution efficace de problèmes complexes" },
    { nom: "Entrepreneuriat", icone: <Target className="w-5 h-5" />, description: "Vision stratégique orientée résultats et innovation" }
  ];

  const centresInteret = [
    { nom: "Mode & Design", icone: <Palette className="w-5 h-5" />, description: "Création de la marque de vêtements Akoma" },
    { nom: "Sport", icone: <Volleyball className="w-5 h-5" />, description: "Football, musculation et cardio" },
    { nom: "Technologie & Innovation", icone: <Lightbulb className="w-5 h-5" />, description: "Exploration des nouvelles tendances Data & IA" },
    { nom: "Animés (Manga)", icone: <BookOpen className="w-5 h-5" />, description: "Passion pour les animés japonais et la culture manga" }
  ];

  const outils = ["VS Code", "Git", "GitHub", "Linux", "Windows", "Suite Adobe"];

  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className={`fade-in ${isVisible ? "visible" : ""}`}>
          {/* Titre */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Compétences
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Un aperçu de mes compétences techniques et relationnelles
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Colonne gauche : Hard Skills */}
            <div className="flex-1 space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Compétences Techniques</h3>
              {hardSkillsConsulting.map((category, index) => (
                <Card key={index} className="border-border/50 hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      {category.icone} {category.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.competences.map((skill, i) => (
                        <Badge key={i} className="text-xs sm:text-sm py-1 px-2 sm:px-3 flex items-center gap-1 animate-fade-in bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                          {skill.icone} {skill.nom}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.competences.map((skill, i) => (
                        <div key={i} className="p-2 sm:p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 animate-slide-up">
                          <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                            {skill.icone} {skill.nom}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Colonne droite : Soft Skills + Centres d’intérêt */}
            <div className="flex-1 space-y-8 mt-6 lg:mt-0">
              {/* Soft Skills */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Soft Skills</h3>
                <div className="space-y-3">
                  {softSkills.map((skill, i) => (
                    <Card key={i} className="border-border/50 hover:shadow-md transition-all duration-300 animate-slide-up">
                      <CardContent className="p-3 sm:p-4 flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent flex-shrink-0">{skill.icone}</div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base mb-1">{skill.nom}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Centres d’intérêt */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Centres d’intérêt</h3>
                <div className="space-y-3">
                  {centresInteret.map((interet, i) => (
                    <Card key={i} className="border-border/50 hover:shadow-md transition-all duration-300 animate-slide-up">
                      <CardContent className="p-3 sm:p-4 flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent flex-shrink-0">{interet.icone}</div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base mb-1">{interet.nom}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{interet.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Outils */}
          <div className="mt-8">
            <Card className="border-border/50 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Outils et Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {outils.map((outil, i) => (
                    <Badge key={i} variant="outline" className="text-xs sm:text-sm py-1 px-2 animate-fade-in">{outil}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; opacity: 0; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; opacity: 0; }
        .visible .animate-fade-in, .visible .animate-slide-up { opacity: 1; }
      `}</style>
    </section>
  );
};

export default SkillsSection;
