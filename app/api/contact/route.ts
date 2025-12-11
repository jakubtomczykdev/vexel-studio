import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("❌ BRAK KLUCZA API RESEND (RESEND_API_KEY) w zmiennych środowiskowych!");
        return NextResponse.json({ error: 'Missing API Key' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();
        const { name, email, phone, package: pkg, description } = body;

        console.log(`📩 Próba wysłania wiadomości od: ${email} (${name})`);

        const { data, error } = await resend.emails.send({
            from: 'Vexel Studio <onboarding@resend.dev>', // Update this with your verified domain
            to: ['jakubtomczykdev@gmail.com'], // Zmieniono na adres konta Resend dla celów testowych
            subject: `Nowe zapytanie: ${pkg || 'Ogólne'}`,
            html: `
        <div>
          <h1>Nowe zapytanie ofertowe</h1>
          <p><strong>Imię i nazwisko:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Pakiet:</strong> ${pkg}</p>
          <p><strong>Opis:</strong></p>
          <p>${description}</p>
        </div>
      `,
        });

        if (error) {
            console.error("❌ Błąd Resend:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log("✅ Wiadomość wysłana pomyślnie:", data);
        return NextResponse.json(data);
    } catch (error) {
        console.error("❌ Nieoczekiwany błąd serwera:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
