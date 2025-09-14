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
  BarChart,
  Book
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
        { 
          nom: "ETL / Pipelines", 
          icone: <Database className="w-4 h-4" />,
          description: "Automatisation des flux de données pour l’intégration et la transformation" 
        },
        { 
          nom: "Cloud (AWS / GCP / Azure)", 
          icone: <Cloud className="w-4 h-4" />,
          description: "Déploiement et gestion de données dans des environnements cloud" 
        },
        { 
          nom: "PostgreSQL", 
          icone: <Database className="w-4 h-4" />,
          description: "Gestion et optimisation de bases de données relationnelles" 
        }
      ]
    },
    {
      titre: "Data Science & IA",
      icone: <Brain className="w-5 h-5" />,
      competences: [
        { 
          nom: "Python (Pandas, NumPy, Scikit-learn)", 
          icone: <Code className="w-4 h-4" />,
          description: "Analyse de données et modélisation prédictive" 
        },
        { 
          nom: "Machine Learning", 
          icone: <Brain className="w-4 h-4" />,
          description: "Création de modèles supervisés et non supervisés" 
        },
        { 
          nom: "IA Générative (OpenAI, LLMs)", 
          icone: <Brain className="w-4 h-4" />,
          description: "Développement de solutions basées sur l’IA conversationnelle et générative" 
        },
        { 
          nom: "NLP / Chatbots", 
          icone: <MessageCircle className="w-4 h-4" />,
          description: "Conception et intégration d’assistants virtuels intelligents" 
        }
      ]
    },
    {
      titre: "Business Intelligence & Reporting",
      icone: <BarChart className="w-5 h-5" />,
      competences: [
        { 
          nom: "Power BI", 
          icone: <BarChart className="w-4 h-4" />,
          description: "Création de tableaux de bord pour la prise de décision" 
        },
        { 
          nom: "SQL Avancé", 
          icone: <Database className="w-4 h-4" />,
          description: "Requêtes et analyses avancées pour extraction de données" 
        },
        { 
          nom: "Visualisation de données", 
          icone: <BarChart className="w-4 h-4" />,
          description: "Présentation claire et interactive des insights" 
        }
      ]
    },
    {
      titre: "Cybersécurité & Protection des Données",
      icone: <Shield className="w-5 h-5" />,
      competences: [
        { 
          nom: "IoT Security", 
          icone: <Shield className="w-4 h-4" />,
          description: "Gestion des risques liés aux objets connectés" 
        },
        { 
          nom: "Droits d’accès & Authentification", 
          icone: <Shield className="w-4 h-4" />,
          description: "Mise en place et contrôle des accès aux données sensibles" 
        },
        { 
          nom: "RGPD", 
          icone: <Shield className="w-4 h-4" />,
          description: "Conformité et protection des données personnelles" 
        }
      ]
    }
  ];
  
  const softSkills = [
    {
      nom: "Leadership",
      icone: <Users className="w-5 h-5" />,
      description: "Capacité à diriger, motiver et coordonner des équipes"
    },
    {
      nom: "Gestion de projet",
      icone: <ClipboardCheck className="w-5 h-5" />,
      description: "Planification, organisation et suivi de projets IT & Data"
    },
    {
      nom: "Communication",
      icone: <MessageCircle className="w-5 h-5" />,
      description: "Échanges clairs et adaptés avec clients, partenaires et équipes"
    },
    {
      nom: "Adaptabilité",
      icone: <Zap className="w-5 h-5" />,
      description: "Flexibilité et réactivité face aux nouveaux environnements et technologies"
    },
    {
      nom: "Esprit analytique",
      icone: <Brain className="w-5 h-5" />,
      description: "Analyse des données et résolution efficace de problèmes complexes"
    },
    {
      nom: "Entrepreneuriat",
      icone: <Target className="w-5 h-5" />,
      description: "Vision stratégique orientée résultats et innovation"
    }
  ];
  
  const centresInteret = [
    {
      nom: "Mode & Design",
      icone: <Palette className="w-5 h-5" />,
      description: "Création de la marque de vêtements Akoma"
    },
    {
      nom: "Sport",
      icone: <Volleyball className="w-5 h-5" />,
      description: "Football, musculation et cardio"
    },
    {
      nom: "Technologie & Innovation",
      icone: <Lightbulb className="w-5 h-5" />,
      description: "Exploration des nouvelles tendances Data & IA"
    },
    {
      nom: "Animés (Manga)",
      icone: <BookOpen className="w-5 h-5" />,
      description: "Passion pour les animés japonais et la culture manga"
    }
  ];

  const outils = [
    "VS Code", "Git", "GitHub", "Linux", "Windows", "Suite Adobe"
  ];

  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className={`fade-in ${isVisible ? "visible" : ""}`}>
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Compétences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un aperçu de mes compétences techniques et relationnelles
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Hard Skills */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Compétences Techniques</h3>

              {hardSkillsConsulting.map((category, categoryIndex) => (
                <Card 
                  key={categoryIndex} 
                  className="border-border/50 hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {category.icone}
                      {category.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.competences.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            className="text-sm py-1 px-3 flex items-center gap-1 animate-fade-in bg-primary/10 text-primary hover:bg-primary/20 border-transparent"
                            style={{ animationDelay: `${skillIndex * 100}ms` }}
                          >
                            {skill.icone}
                            {skill.nom}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.competences.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex} 
                            className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 animate-slide-up"
                            style={{ animationDelay: `${(category.competences.length + skillIndex) * 100}ms` }}
                          >
                            <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                              {skill.icone}
                              {skill.nom}
                            </h4>
                            <p className="text-xs text-muted-foreground">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Colonne droite : Soft Skills + Centres d’intérêt */}
            <div className="space-y-12">
              {/* Soft Skills */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
                <div className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <Card 
                      key={index} 
                      className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-md animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-accent flex-shrink-0">
                            {skill.icone}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{skill.nom}</h4>
                            <p className="text-sm text-muted-foreground">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Centres d’intérêt */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Centres d’intérêt</h3>
                <div className="space-y-4">
                  {centresInteret.map((interet, index) => (
                    <Card 
                      key={index} 
                      className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-md animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-accent flex-shrink-0">
                            {interet.icone}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{interet.nom}</h4>
                            <p className="text-sm text-muted-foreground">
                              {interet.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Outils et technologies */}
          <Card className="border-border/50 hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Outils et Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {outils.map((outil, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-1 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {outil}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .visible .animate-fade-in,
        .visible .animate-slide-up {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
