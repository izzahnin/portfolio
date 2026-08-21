import { profileLinks } from "../data";

export async function GET() {
  const response = await fetch(profileLinks.cv, {
    next: { revalidate: 3600 },
  });

  if (!response.ok || !response.body) {
    return new Response("CV is currently unavailable.", {
      status: 502,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return new Response(response.body, {
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "application/pdf",
      "Content-Disposition": 'inline; filename="Nurul_Izzah_Nurhidayat-CV.pdf"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
