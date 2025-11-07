export interface StatItem {
  term: string;
  definition: string;
  formula?: string;
  whatsBetter?: string;
}

export const hittingStats: StatItem[] = [
  {
    term: "BA (Batting Average)",
    definition: "The ratio of a batter's hits to their total at-bats. A .300 average is considered excellent.",
    formula: "Hits ÷ At-Bats",
    whatsBetter: "Higher is better"
  },
  {
    term: "OBP (On-Base Percentage)",
    definition: "The frequency with which a batter reaches base per plate appearance. Includes hits, walks, and hit-by-pitches.",
    formula: "(Hits + Walks + HBP) ÷ (At-Bats + Walks + HBP + Sacrifice Flies)",
    whatsBetter: "Higher is better"
  },
  {
    term: "SLG (Slugging Percentage)",
    definition: "A measure of the power of a hitter, calculated as total bases divided by at-bats.",
    formula: "Total Bases ÷ At-Bats",
    whatsBetter: "Higher is better"
  },
  {
    term: "OPS (On-Base Plus Slugging)",
    definition: "Combines on-base percentage and slugging percentage to measure overall offensive contribution. An OPS over .900 is excellent.",
    formula: "OBP + SLG",
    whatsBetter: "Higher is better"
  },
  {
    term: "HR (Home Runs)",
    definition: "The total number of home runs hit by a batter. A home run occurs when the ball is hit over the outfield fence in fair territory, allowing the batter to circle all bases."
  },
  {
    term: "RBI (Runs Batted In)",
    definition: "The number of runs a batter has driven in with hits, walks, or other offensive plays. A batter gets credit when their action causes a run to score.",
    whatsBetter: "Higher is better"
  },
  {
    term: "SO (Strikeouts)",
    definition: "The total number of times a batter has struck out. Occurs when a batter receives three strikes without putting the ball in play.",
    whatsBetter: "Lower is better"
  },
  {
    term: "BB (Walks/Base on Balls)",
    definition: "The number of times a batter has been walked. A walk occurs when a pitcher throws four balls outside the strike zone.",
    whatsBetter: "Higher is better"
  },
  {
    term: "SB (Stolen Bases)",
    definition: "The number of times a runner successfully advances to the next base while the pitcher is delivering the ball to home plate.",
    whatsBetter: "Higher is better"
  },
  {
    term: "wOBA (Weighted On-Base Average)",
    definition: "A comprehensive offensive statistic that weights different offensive events by their actual run value. Similar scale to OBP but more accurate.",
    whatsBetter: "Higher is better"
  },
  {
    term: "wRC+ (Weighted Runs Created Plus)",
    definition: "Measures a player's total offensive value compared to league average, adjusted for park factors. 100 is league average. A 130 wRC+ means 30% better than average.",
    whatsBetter: "Higher is better"
  },
  {
    term: "BABIP (Batting Average on Balls in Play)",
    definition: "Measures how often a ball in play goes for a hit, excluding home runs. Average is around .300.",
    formula: "(Hits - Home Runs) ÷ (At-Bats - Strikeouts - Home Runs + Sacrifice Flies)"
  }
];

