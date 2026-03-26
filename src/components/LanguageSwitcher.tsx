"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="langSwitch" aria-label="Language switcher">
      {locales.map((locale) => {
        const targetPath = pathname.replace(`/${currentLocale}`, `/${locale}`);

        return (
          <Link
            key={locale}
            href={targetPath}
            className={locale === currentLocale ? "langOption active" : "langOption"}
            onClick={() => {
              document.cookie = `xouston_locale=${locale};path=/;max-age=31536000;samesite=lax`;
            }}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
