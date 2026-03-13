
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Please provide a valid email address' }), { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'PhaseOne Partners <noreply@updates.phaseonepartners.com.au>',
      to: ['info@phaseonepartners.com.au'],
      replyTo: email,
      subject: message === 'Stay in the loop' ? 'New Newsletter Subscription' : 'New Contact Form Submission',
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #000;">${message === 'Stay in the loop' ? 'New Newsletter Subscription' : 'New Contact Form Submission'}</h2>
          <div style="margin-top: 20px; border-top: 1px solid #eee; pt: 20px;">
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Message:</strong> ${message || 'No message'}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error details:', JSON.stringify(error, null, 2));
      return new Response(JSON.stringify({ 
        error: error.message || 'The email service encountered an error. Please try again later.',
        details: error 
      }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error('API Route Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error. Please check your network and try again.' }), { status: 500 });
  }
}
