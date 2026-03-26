export type Range = {
  min: number;
  max: number;
};

export const pricingConfig = {
  // Base ranges in USD by project type order from site.ts estimate.options.type
  typeRangesUSD: [
    { min: 32000, max: 78000 }, // mobile app
    { min: 9000, max: 28000 }, // website
    { min: 7000, max: 22000 }, // telegram bot
    { min: 4000, max: 12000 }, // dedicated specialist engagement
  ] satisfies Range[],

  // Multipliers by options order from site.ts
  complexityMultipliers: [0.88, 1, 1.35],
  timelineMultipliers: [1.22, 1, 0.9],
  integrationMultipliers: [1, 1.14, 1.28],
};
