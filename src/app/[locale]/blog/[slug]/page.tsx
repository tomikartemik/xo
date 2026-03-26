import Link from "next/link";
import { posts } from "@/content/site";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) => posts[locale].map((post) => ({ locale, slug: post.slug })));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const post = posts[locale as Locale].find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="legalShell">
      <article className="legalCard">
        <p className="postMeta">
          {post.date} · {post.readTime}
        </p>
        <h1>{post.title}</h1>
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link className="textLink" href={`/${locale}/blog`}>
          ← Blog
        </Link>
      </article>
    </main>
  );
}
