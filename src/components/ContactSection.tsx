"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  TwitterIcon,
  CheckCircle,  
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ nom: "", email: "", sujet: "", message: "" });

    // Reset le message de succès après 5 secondes
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      titre: "Email",
      valeur: "bilekouame04@gmail.com",
      lien: "mailto:votre.email@exemple.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      titre: "Téléphone",
      valeur: "+33 7 81 34 55 86",
    lien: "tel:+33781345586"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      titre: "Localisation",
      valeur: "Lille, France",
      lien: null
    }
  ];

  const reseauxSociaux = [
    {
      nom: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/kouam%C3%A9-johan-bile-8682b8296/",
      couleur: "hover:text-blue-600"
    },
    {
      nom: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/JXPM",
      couleur: "hover:text-gray-800"
    },
    {
      nom: "Twitter",
      icon: <TwitterIcon className="w-5 h-5" />,
      url: "https://X.com/bile_johan?s=11",
      couleur: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className={`fade-in ${isVisible ? "visible" : ""}`}>
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Contactez-moi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ou cherchez un alternant ? N'hésitez pas à me contacter pour en discuter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Je suis toujours ouvert aux nouvelles opportunités et aux projets intéressants.
                  Que ce soit pour un poste, une mission ou simplement pour échanger
                  sur la technologie, n'hésitez pas à me contacter.
                </p>
              </div>

              {/* Informations de contact */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.titre}</h4>
                      {info.lien ? (
                        <a
                          href={info.lien}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {info.valeur}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.valeur}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h4 className="font-semibold mb-4">Suivez-moi</h4>
                <div className="flex gap-4">
                  {reseauxSociaux.map((reseau, index) => (
                    <a
                      key={index}
                      href={reseau.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg border border-border hover:border-border/80 transition-all ${reseau.couleur}`}
                      aria-label={reseau.nom}
                    >
                      {reseau.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Disponibilité */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold">Disponible pour de nouveaux projets</h4>
                      <p className="text-sm text-muted-foreground">
                        Je réponds généralement sous 24h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium mb-2">
                          Nom complet
                        </label>
                        <Input
                          id="nom"
                          name="nom"
                          type="text"
                          value={formData.nom}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="votre.email@exemple.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <Input
                        id="sujet"
                        name="sujet"
                        type="text"
                        value={formData.sujet}
                        onChange={handleInputChange}
                        required
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
