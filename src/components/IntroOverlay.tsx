"use client";

import { useEffect, useMemo, useState } from "react";

const IntroOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [phase, setPhase] = useState<"intro" | "welcome" | "final">("intro");
  const [typedText, setTypedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const welcomeText = useMemo(
    () =>
      "Si tu es ici, c'est peut-etre parce que tu es recruteur, collaborateur potentiel, ou juste curieux d'en savoir plus sur moi. Bienvenue dans mon univers Data & IA.",
    []
  );

  useEffect(() => {
    if (phase !== "welcome") {
      return;
    }

    let index = 0;
    const typing = window.setInterval(() => {
      index += 1;
      setTypedText(welcomeText.slice(0, index));
      if (index >= welcomeText.length) {
        window.clearInterval(typing);
        setPhase("final");
      }
    }, 18);

    return () => window.clearInterval(typing);
  }, [phase, welcomeText]);

  if (!isVisible) {
    return null;
  }

  const handleClick = () => {
    if (isLeaving) {
      return;
    }

    if (!hasStarted) {
      setHasStarted(true);
      setPhase("welcome");
      return;
    }

    // Clic pendant le typing: terminer le texte
    if (phase === "welcome") {
      setTypedText(welcomeText);
      setPhase("final");
      return;
    }

    // Clic une fois le texte termine: entrer sur le site
    if (phase === "final") {
      setIsLeaving(true);
      window.setTimeout(() => setIsVisible(false), 500);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#040816]/90 backdrop-blur-lg transition-opacity duration-500 ${
        isLeaving ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
      onClick={handleClick}
    >
      <div className="w-[94%] max-w-6xl rounded-3xl border border-white/20 p-4 md:p-6 shadow-2xl glass-strong">
        <div className="relative rounded-2xl border border-white/15 overflow-hidden">
          <img
            src="/banner-linkedin.png"
            alt="Banniere d'accueil"
            className="w-full h-auto min-h-[180px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />
          <div className="absolute top-3 left-3 text-xs text-white/90 uppercase tracking-widest border border-white/25 rounded px-2 py-1 bg-black/40">
            Intro
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#5f2a2a] bg-gradient-to-b from-[#351919] to-[#160c0d] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="sm:flex-1 min-w-0">
              <div className="inline-flex rounded-md border border-[#8e3f3f] bg-[#5a2323] px-3 py-1 text-sm text-amber-100 font-semibold">
                Johan
              </div>
              {phase === "intro" ? (
                <div className="mt-3 space-y-2 text-amber-50">
                  <p className="text-base sm:text-lg font-medium">
                    Bienvenue sur mon portfolio interactif.
                  </p>
                  <p className="text-sm text-amber-100/90">
                    Clique pour lancer l'introduction.
                  </p>
                </div>
              ) : (
                <div className="mt-3">
                  <p className="text-sm sm:text-base leading-relaxed text-amber-100 min-h-[56px]">
                    {typedText}
                    {phase === "welcome" && <span className="animate-pulse">|</span>}
                  </p>
                  {phase === "final" && (
                    <p className="mt-2 text-xs text-amber-200/80">
                      Clique pour entrer sur le portfolio.
                    </p>
                  )}
                  {phase === "welcome" && (
                    <p className="mt-2 text-xs text-amber-200/80">
                      Clique pour passer directement.
                    </p>
                  )}
                </div>
              )}
            </div>
            <img
              src="/bitmoji.png"
              alt="Avatar de Johan"
              className="h-24 w-24 sm:h-28 sm:w-28 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
