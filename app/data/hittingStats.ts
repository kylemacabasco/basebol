export interface StatItem {
  term: string;
  definition: string;
  formula?: string;
  whatsBetter?: string;
  example?: string;
}

export const hittingStats: StatItem[] = [
  {
    term: "BA (Batting Average)",
    definition: "The ratio of a batter's hits to their total at-bats. A .300 average is considered excellent.",
    formula: "Hits ÷ At-Bats",
    whatsBetter: "Higher is better",
    example: ".300+ is excellent, .270-.299 is good, .250-.269 is average, below .250 is poor."
  },
  {
    term: "OBP (On-Base Percentage)",
    definition: "The frequency with which a batter reaches base per plate appearance. Includes hits, walks, and hit-by-pitches.",
    formula: "(Hits + Walks + HBP) ÷ (At-Bats + Walks + HBP + Sacrifice Flies)",
    whatsBetter: "Higher is better",
    example: ".400+ is elite, .360-.399 is excellent, .320-.359 is good, .310-.319 is average."
  },
  {
    term: "SLG (Slugging Percentage)",
    definition: "A measure of the power of a hitter, calculated as total bases divided by at-bats.",
    formula: "Total Bases ÷ At-Bats",
    whatsBetter: "Higher is better",
    example: ".550+ is elite, .450-.549 is good, .400-.449 is average, below .400 is poor."
  },
  {
    term: "OPS (On-Base Plus Slugging)",
    definition: "Combines on-base percentage and slugging percentage to measure overall offensive contribution. An OPS over .900 is excellent.",
    formula: "OBP + SLG",
    whatsBetter: "Higher is better",
    example: ".900+ is elite, .800-.899 is very good, .750-.799 is good, .700-.749 is average."
  },
  {
    term: "HR (Home Runs)",
    definition: "The total number of home runs hit by a batter. A home run occurs when the ball is hit over the outfield fence in fair territory, allowing the batter to circle all bases.",
    example: "30+ home runs in a season is excellent. The single-season record is 73 by Barry Bonds in 2001."
  },
  {
    term: "RBI (Runs Batted In)",
    definition: "The number of runs a batter has driven in with hits, walks, or other offensive plays. A batter gets credit when their action causes a run to score.",
    whatsBetter: "Higher is better",
    example: "100+ RBIs in a season is excellent. Elite hitters consistently drive in 120+ runs per season."
  },
  {
    term: "SO (Strikeouts)",
    definition: "The total number of times a batter has struck out. Occurs when a batter receives three strikes without putting the ball in play.",
    whatsBetter: "Lower is better",
    example: "High strikeout rates (150+/season) are increasingly common, but contact hitters keep it under 100."
  },
  {
    term: "BB (Walks/Base on Balls)",
    definition: "The number of times a batter has been walked. A walk occurs when a pitcher throws four balls outside the strike zone.",
    whatsBetter: "Higher is better",
    example: "80+ walks in a season shows excellent plate discipline. Barry Bonds walked 232 times in 2004."
  },
  {
    term: "SB (Stolen Bases)",
    definition: "The number of times a runner successfully advances to the next base while the pitcher is delivering the ball to home plate.",
    whatsBetter: "Higher is better",
    example: "30+ stolen bases in a season is very good. Rickey Henderson holds the record with 130 in 1982."
  },
  {
    term: "wOBA (Weighted On-Base Average)",
    definition: "A comprehensive offensive statistic that weights different offensive events by their actual run value. Similar scale to OBP but more accurate.",
    whatsBetter: "Higher is better",
    example: ".400+ is elite, .360+ is great, .320+ is above average, .310 is average."
  },
  {
    term: "wRC+ (Weighted Runs Created Plus)",
    definition: "Measures a player's total offensive value compared to league average, adjusted for park factors. 100 is league average. A 130 wRC+ means 30% better than average.",
    whatsBetter: "Higher is better",
    example: "160+ is MVP-caliber, 130-159 is excellent, 110-129 is above average, 100 is league average."
  },
  {
    term: "BABIP (Batting Average on Balls in Play)",
    definition: "Measures how often a ball in play goes for a hit, excluding home runs. Average is around .300.",
    formula: "(Hits - Home Runs) ÷ (At-Bats - Strikeouts - Home Runs + Sacrifice Flies)",
    example: ".340+ is high and may regress, .280-.320 is normal, below .260 suggests bad luck."
  }
];

