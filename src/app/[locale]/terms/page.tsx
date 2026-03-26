import Link from "next/link";
import { dictionaries } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function TermsPage({
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
        <h1>{t.legal.terms}</h1>
        <p>
          All estimates on this website are preliminary and do not represent a public offer. Final scope, timeline,
          and pricing are documented in a signed agreement.
        </p>
        <p>
          By submitting a request, you confirm that the provided contact data can be used for communication about
          your project.
        </p>
        <Link href={`/${locale}`} className="textLink">
          ← Xouston
        </Link>
      </article>
    </main>
  );
}
