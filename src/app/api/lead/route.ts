import { NextResponse } from "next/server";

type LeadPayload = {
  projectType?: string;
  contact?: string;
  details?: string;
};

function sanitize(input: string) {
  return input.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  const projectType = sanitize(body.projectType ?? "");
  const contact = sanitize(body.contact ?? "");
  const details = sanitize(body.details ?? "");

  if (!projectType || !contact || details.length < 10) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ ok: false, error: "Telegram env not configured" }, { status: 500 });
  }

  const text = [
    "New Xouston lead",
    `Project: ${projectType}`,
    `Contact: ${contact}`,
    "Details:",
    details,
  ].join("\n");

  const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!tgResponse.ok) {
    return NextResponse.json({ ok: false, error: "Telegram delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
