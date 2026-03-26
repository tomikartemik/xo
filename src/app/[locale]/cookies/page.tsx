import Link from "next/link";
import { dictionaries } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function CookiesPage({
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
        <h1>{t.legal.cookies}</h1>
        <p>This website uses technical cookies for language preference and analytics improvement.</p>
        <p>You can disable cookies in your browser settings, but language auto-detection may be limited.</p>
        <Link href={`/${locale}`} className="textLink">
          ← Xouston
        </Link>
      </article>
    </main>
  );
}
