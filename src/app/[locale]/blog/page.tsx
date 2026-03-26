import Link from "next/link";
import { dictionaries, posts } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = dictionaries[locale as Locale];
  const items = posts[locale as Locale];

  return (
    <main className="legalShell">
      <div className="legalCard">
        <p className="kicker">Xouston</p>
        <h1>{t.blog.title}</h1>
        <p>{t.blog.subtitle}</p>
        <div className="blogGrid standalone">
          {items.map((post) => (
            <Link href={`/${locale}/blog/${post.slug}`} className="tile postCard" key={post.slug}>
              <p className="postMeta">
                {post.date} · {post.readTime}
              </p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <Link className="textLink" href={`/${locale}`}>
          ← Xouston
        </Link>
      </div>
    </main>
  );
}
