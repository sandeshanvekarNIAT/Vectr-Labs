import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactTemplate';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    console.log("API Route /api/send hit");

    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not defined in environment variables");
        return NextResponse.json({ error: "Server configuration error (API Key missing)" }, { status: 500 });
    }

    try {
        const body = await req.json();
        console.log("Request Body:", JSON.stringify(body, null, 2));

        const { name, email, brand, service, website, budget, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['vectrlabsofficial@gmail.com'],
            subject: `New Lead: ${name} - ${brand}`,
            react: ContactEmail({
                name,
                email,
                brand,
                service,
                website,
                budget,
                message,
            }),
            replyTo: email,
        });

        if (error) {
            console.error("Resend SDK Error:", JSON.stringify(error, null, 2));
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log("Resend Success:", data);
        return NextResponse.json({ data });
    } catch (error: any) {
        console.error("Unexpected API Error:", error);
        return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }
}
