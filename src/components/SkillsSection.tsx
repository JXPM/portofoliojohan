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
  Brain
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

  const hardSkills: SkillCategory[] = [
    {
      titre: "Frontend",
      icone: <Code className="w-5 h-5" />,
      competences: [
        { 
          nom: "React/Next.js", 
          icone: <Code className="w-4 h-4" />,
          description: "Développement d'applications modernes avec React, Next.js et écosystème associé" 
        },
        { 
          nom: "Vue.js", 
          icone: <Code className="w-4 h-4" />,
          description: "Création d'interfaces réactives avec Vue 3 et Composition API" 
        },
        { 
          nom: "TypeScript", 
          icone: <Code className="w-4 h-4" />,
          description: "Typage statique pour des applications JavaScript plus robustes" 
        },
        { 
          nom: "Tailwind CSS", 
          icone: <Palette className="w-4 h-4" />,
          description: "Framework CSS utilitaire pour des designs rapides et cohérents" 
        },
        { 
          nom: "Sass/SCSS", 
          icone: <Palette className="w-4 h-4" />,
          description: "Préprocesseur CSS pour une stylisation maintenable et modulaire" 
        }
      ]
    },
    {
      titre: "Backend",
      icone: <Database className="w-5 h-5" />,
      competences: [
        { 
          nom: "Node.js", 
          icone: <Code className="w-4 h-4" />,
          description: "Environnement d'exécution JavaScript côté serveur" 
        },
        { 
          nom: "Express.js", 
          icone: <Code className="w-4 h-4" />,
          description: "Framework web minimaliste et flexible pour Node.js" 
        },
        { 
          nom: "PostgreSQL", 
          icone: <Database className="w-4 h-4" />,
          description: "Système de gestion de base de données relationnelle open source" 
        },
        { 
          nom: "MongoDB", 
          icone: <Database className="w-4 h-4" />,
          description: "Base de données NoSQL orientée documents" 
        },
        { 
          nom: "GraphQL", 
          icone: <Code className="w-4 h-4" />,
          description: "Langage de requête pour APIs et environnement d'exécution" 
        }
      ]
    },
    {
      titre: "DevOps & Cloud",
      icone: <Cloud className="w-5 h-5" />,
      competences: [
        { 
          nom: "AWS", 
          icone: <Cloud className="w-4 h-4" />,
          description: "Services cloud pour le déploiement, le stockage et la mise à l'échelle" 
        },
        { 
          nom: "Docker", 
          icone: <Cloud className="w-4 h-4" />,
          description: "Conteneurisation d'applications pour des déploiements cohérents" 
        },
        { 
          nom: "CI/CD", 
          icone: <Cloud className="w-4 h-4" />,
          description: "Intégration et déploiement continus avec GitHub Actions, Jenkins" 
        },
        { 
          nom: "Nginx", 
          icone: <Cloud className="w-4 h-4" />,
          description: "Serveur web et reverse proxy pour applications modernes" 
        },
        { 
          nom: "Linux", 
          icone: <Cloud className="w-4 h-4" />,
          description: "Administration de serveurs et environnements Linux" 
        }
      ]
    }
  ];

  const softSkills = [
    {
      nom: "Leadership",
      icone: <Users className="w-5 h-5" />,
      description: "Encadrement d'équipes et gestion de projets"
    },
    {
      nom: "Créativité",
      icone: <Lightbulb className="w-5 h-5" />,
      description: "Innovation et résolution créative de problèmes"
    },
    {
      nom: "Communication",
      icone: <MessageCircle className="w-5 h-5" />,
      description: "Communication claire avec clients et équipes"
    },
    {
      nom: "Adaptabilité",
      icone: <Zap className="w-5 h-5" />,
      description: "Flexibilité face aux changements technologiques"
    },
    {
      nom: "Résolution de problèmes",
      icone: <Brain className="w-5 h-5" />,
      description: "Analyse et résolution efficace des défis techniques"
    },
    {
      nom: "Orientation résultats",
      icone: <Target className="w-5 h-5" />,
      description: "Focus sur la livraison et la qualité"
    }
  ];

  const outils = [
    "VS Code", "Git", "Figma", "Postman", "Jira", "Slack",
    "Photoshop", "Notion", "Webpack", "Vite", "Jest", "Cypress"
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

              {hardSkills.map((category, categoryIndex) => (
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