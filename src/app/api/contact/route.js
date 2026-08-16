import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, company, project } = await request.json();

    // Basic server-side validation — never trust client-side "required"
    // alone, since a request can hit this endpoint directly, bypassing
    // the form entirely.
    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Asridge Website <onboarding@resend.dev>", // swap to a verified domain address once set up, see note below
      to: "info@asridge.com",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "(not provided)"}

About the project:
${project || "(not provided)"}
      `.trim(),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong sending the message." },
      { status: 500 }
    );
  }
}
