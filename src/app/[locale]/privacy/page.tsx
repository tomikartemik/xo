import Link from "next/link";
import { dictionaries } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = dictionaries[locale as Locale];

  return (
    <main className="legalShell">
      <article className="legalCard">
        <h1>{t.legal.privacy}</h1>
        <p>
          We process only data provided in lead forms to contact you and discuss your project. Data is not sold
          to third parties.
        </p>
        <p>For deletion requests, contact us via Telegram or WhatsApp links on the main page.</p>
        <Link href={`/${locale}`} className="textLink">
          ← Xouston
        </Link>
      </article>
    </main>
  );
}
