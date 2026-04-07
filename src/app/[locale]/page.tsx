import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { dictionaries, posts } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = dictionaries[locale as Locale];
  const localPosts = posts[locale as Locale];
  const quickMessage =
    locale === "ru"
      ? "Здравствуйте! Хочу обсудить проект и получить оценку."
      : "Hi! I want to discuss a project and get an estimate.";
  const telegramHref = `${process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/XO_Contact"}?text=${encodeURIComponent(
    quickMessage,
  )}`;

  return (
    <main className="pageShell">
      <SiteHeader locale={locale} nav={t.nav} />

      <section className="hero blockGrid">
        <div className="heroMain tile reveal">
          <p className="kicker">{t.hero.kicker}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="heroChips">
            {t.hero.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className="heroActions">
            <a href="#contact" className="btnPrimary">
              {t.hero.ctaPrimary}
            </a>
          </div>
          <p className="ctaInlineNote">{t.hero.ctaHint}</p>
        </div>

        <div className="heroMetric tile hoverTile reveal">
          <p>24/7</p>
          <span>{t.hero.metricSupport}</span>
        </div>

        <div className="heroAccent tile hoverTile reveal">
          <p className="kicker">{t.hero.visualTitle}</p>
          <div className="accentWave">
            <span className="waveLine one" />
            <span className="waveLine two" />
            <span className="waveLine three" />
          </div>
          <ul className="accentList">
            {t.hero.visualItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="heroMetric tile hoverTile reveal">
          <p>RU / EN</p>
          <span>{t.hero.metricMarket}</span>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <div>
            <h2>{t.proof.title}</h2>
            <p>{t.proof.subtitle}</p>
          </div>
        </div>
        <div className="proofGrid">
          {t.proof.items.map((item, idx) => (
            <article key={item.metric + item.context} className="tile proofCard hoverTile reveal">
              <span className="cardTag">
                {t.labels.caseLabel} 0{idx + 1}
              </span>
              <p className="proofMetric">{item.metric}</p>
              <h3>{item.context}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <h2>{t.nav.services}</h2>
        <div className="serviceGrid">
          {t.serviceCards.map((card, idx) => (
            <article key={card.title} className="tile serviceCard hoverTile reveal">
              <span className="cardTag">0{idx + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="section splitSection">
        <div className="tile trustCard hoverTile reveal">
          <h2>{t.trust.title}</h2>
          <ul>
            {t.trust.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="tile ndaCard hoverTile reveal">
          <h3>{t.trust.ndaTitle}</h3>
          <p>{t.trust.ndaText}</p>
        </div>
      </section>

      <section className="section">
        <h2>{t.process.title}</h2>
        <div className="processGrid">
          {t.process.steps.map((step) => (
            <article key={step.title} className="tile stepCard hoverTile reveal">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="blog">
        <div className="sectionHeading">
          <div>
            <h2>{t.blog.title}</h2>
            <p>{t.blog.subtitle}</p>
          </div>
          <Link href={`/${locale}/blog`} className="textLink">
            {t.blog.allPosts}
          </Link>
        </div>

        <div className="blogGrid">
          {localPosts.map((post, idx) => (
            <Link href={`/${locale}/blog/${post.slug}`} className="tile postCard hoverTile reveal" key={post.slug}>
              <span className="cardTag">
                {t.labels.articleLabel} 0{idx + 1}
              </span>
              <p className="postMeta">
                {post.date} · {post.readTime}
              </p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="postArrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="section splitSection contactSection">
        <div className="tile reveal contactInstant">
          <div className="contactInstantTop">
            <h2>{t.leadForm.instantTitle}</h2>
            <p>{t.leadForm.instantSubtitle}</p>
          </div>
          <div className="contactInstantFoot">
            <div className="instantActions">
              <a href={telegramHref} target="_blank" rel="noreferrer" className="instantBtn telegram">
                {t.leadForm.instantTelegram}
              </a>
            </div>
          </div>
          <p className="privacyNote">{t.leadForm.privacyNote}</p>
        </div>
        <div className="tile reveal contactTrust">
          <h3>{t.leadForm.title}</h3>
          <p>{t.leadForm.subtitle}</p>
          <ul>
            {t.leadForm.instantPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Xouston. {t.footer.rights}</p>
        <div className="footerLinks">
          <Link href={`/${locale}/privacy`}>{t.legal.privacy}</Link>
          <Link href={`/${locale}/terms`}>{t.legal.terms}</Link>
          <Link href={`/${locale}/cookies`}>{t.legal.cookies}</Link>
        </div>
      </footer>

      <a href="#contact" className="mobileStickyCta">
        {t.leadForm.stickyCta}
      </a>
    </main>
  );
}
