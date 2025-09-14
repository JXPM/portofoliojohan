import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nom, email, sujet, message } = await req.json();

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    // 1️⃣ Envoi du mail vers TOI
    await resend.emails.send({
      from: "portfolio Contact <onboarding@resend.dev>", // ⚠️ mettre un domaine validé si possible
      to: process.env.EMAIL_USER as string, // Ton email où tu reçois les messages
      subject: `[Portfolio] ${sujet}`,
      html: `
        <h3>Nouveau message depuis le portfolio</h3>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    // 2️⃣ Envoi d’un accusé de réception à l’expéditeur
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "bilejohan04@gmail.com", // L’expéditeur reçoit la copie
      subject: `Accusé de réception - ${sujet}`,
      html: `
        <h3>Bonjour ${nom},</h3>
        <p>Merci pour votre message !</p>
        <p>J'ai bien reçu votre demande concernant :</p>
        <blockquote>${sujet}</blockquote>
        <p>Votre message :</p>
        <blockquote>${message}</blockquote>
        <p>Je vous répondrai dans les plus brefs délais.</p>
        <br/>
        <p>Bien cordialement,</p>
        <p><strong>Kouamé Bilé</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi du mail." }, { status: 500 });
  }
}
