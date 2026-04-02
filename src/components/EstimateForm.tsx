"use client";

import { useMemo, useState } from "react";
import { pricingConfig } from "@/content/pricing";
import type { Locale } from "@/lib/i18n";

type EstimateProps = {
  locale: Locale;
  labels: {
    projectType: string;
    complexity: string;
    timeline: string;
    integrations: string;
    submit: string;
    resultPrefix: string;
    resultSuffix: string;
    discussCta: string;
    quickHint: string;
    options: {
      type: string[];
      complexity: string[];
      timeline: string[];
      integrations: string[];
    };
  };
};

export function EstimateForm({ locale, labels }: EstimateProps) {
  const [typeIdx, setTypeIdx] = useState(0);
  const [complexityIdx, setComplexityIdx] = useState(1);
  const [timelineIdx, setTimelineIdx] = useState(1);
  const [integrationsIdx, setIntegrationsIdx] = useState(1);

  const estimate = useMemo(() => {
    const base = pricingConfig.typeRangesUSD[typeIdx];
    const modifier =
      pricingConfig.complexityMultipliers[complexityIdx] *
      pricingConfig.timelineMultipliers[timelineIdx] *
      pricingConfig.integrationMultipliers[integrationsIdx];
    const min = Math.round((base.min * modifier) / 100) * 100;
    const max = Math.round((base.max * modifier) / 100) * 100;
    const numberFormat = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US");

    return `${numberFormat.format(min)}$ - ${numberFormat.format(max)}$`;
  }, [complexityIdx, integrationsIdx, locale, timelineIdx, typeIdx]);

  const briefMessage = useMemo(() => {
    const lines =
      locale === "ru"
        ? [
            "Здравствуйте! Хочу обсудить проект.",
            `Тип: ${labels.options.type[typeIdx]}`,
            `Сложность: ${labels.options.complexity[complexityIdx]}`,
            `Срок: ${labels.options.timeline[timelineIdx]}`,
            `Интеграции: ${labels.options.integrations[integrationsIdx]}`,
            `Оценка на сайте: ${estimate}`,
          ]
        : [
            "Hi! I want to discuss a project.",
            `Type: ${labels.options.type[typeIdx]}`,
            `Complexity: ${labels.options.complexity[complexityIdx]}`,
            `Timeline: ${labels.options.timeline[timelineIdx]}`,
            `Integrations: ${labels.options.integrations[integrationsIdx]}`,
            `Website estimate: ${estimate}`,
          ];

    return lines.join("\n");
  }, [complexityIdx, estimate, integrationsIdx, labels.options, locale, timelineIdx, typeIdx]);

  const telegramHref = `${process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/XO_Contact"}?text=${encodeURIComponent(
    briefMessage,
  )}`;

  return (
    <div className="estimateForm">
      <div className="optionGroup">
        <p>{labels.projectType}</p>
        <div className="optionRow">
          {labels.options.type.map((option, idx) => (
            <button
              key={option}
              type="button"
              className={idx === typeIdx ? "chipButton active" : "chipButton"}
              onClick={() => setTypeIdx(idx)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="optionGroup">
        <p>{labels.complexity}</p>
        <div className="optionRow">
          {labels.options.complexity.map((option, idx) => (
            <button
              key={option}
              type="button"
              className={idx === complexityIdx ? "chipButton active" : "chipButton"}
              onClick={() => setComplexityIdx(idx)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="optionGroup">
        <p>{labels.timeline}</p>
        <div className="optionRow">
          {labels.options.timeline.map((option, idx) => (
            <button
              key={option}
              type="button"
              className={idx === timelineIdx ? "chipButton active" : "chipButton"}
              onClick={() => setTimelineIdx(idx)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="optionGroup">
        <p>{labels.integrations}</p>
        <div className="optionRow">
          {labels.options.integrations.map((option, idx) => (
            <button
              key={option}
              type="button"
              className={idx === integrationsIdx ? "chipButton active" : "chipButton"}
              onClick={() => setIntegrationsIdx(idx)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <p className="estimateResult">
        {labels.resultPrefix} <strong>{estimate}</strong> {labels.resultSuffix}
      </p>
      <a className="estimateCta" href={telegramHref} target="_blank" rel="noreferrer">
        {labels.discussCta}
      </a>
      <p className="estimateHint">{labels.quickHint}</p>
    </div>
  );
}
