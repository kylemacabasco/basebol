export interface StatItem {
  term: string;
  definition: string;
}

export const hittingStats: StatItem[] = [
  {
    term: "BA (Batting Average)",
    definition: "The ratio of a batter's hits to their total at-bats. Higher is better. Formula: Hits ÷ At-Bats. A .300 average is considered excellent."
  },
  {
    term: "OBP (On-Base Percentage)",
    definition: "The frequency with which a batter reaches base per plate appearance. Includes hits, walks, and hit-by-pitches. Higher is better. Formula: (Hits + Walks + HBP) ÷ (At-Bats + Walks + HBP + Sacrifice Flies)"
  },
  {
    term: "SLG (Slugging Percentage)",
    definition: "A measure of the power of a hitter, calculated as total bases divided by at-bats. Higher is better. Formula: Total Bases ÷ At-Bats"
  },
  {
    term: "OPS (On-Base Plus Slugging)",
    definition: "Combines on-base percentage and slugging percentage to measure overall offensive contribution. Higher is better. Formula: OBP + SLG. An OPS over .900 is excellent."
  },
  {
    term: "HR (Home Runs)",
    definition: "The total number of home runs hit by a batter. A home run occurs when the ball is hit over the outfield fence in fair territory, allowing the batter to circle all bases."
  },
  {
    term: "RBI (Runs Batted In)",
    definition: "The number of runs a batter has driven in with hits, walks, or other offensive plays. Higher is better. A batter gets credit when their action causes a run to score."
  },
  {
    term: "SO (Strikeouts)",
    definition: "The total number of times a batter has struck out. Lower is better. Occurs when a batter receives three strikes without putting the ball in play."
  },
  {
    term: "BB (Walks/Base on Balls)",
    definition: "The number of times a batter has been walked. Higher is better. A walk occurs when a pitcher throws four balls outside the strike zone."
  },
  {
    term: "SB (Stolen Bases)",
    definition: "The number of times a runner successfully advances to the next base while the pitcher is delivering the ball to home plate. Higher is better."
  },
  {
    term: "wOBA (Weighted On-Base Average)",
    definition: "A comprehensive offensive statistic that weights different offensive events by their actual run value. Similar scale to OBP but more accurate. Higher is better."
  },
  {
    term: "wRC+ (Weighted Runs Created Plus)",
    definition: "Measures a player's total offensive value compared to league average, adjusted for park factors. 100 is league average, higher is better. A 130 wRC+ means 30% better than average."
  },
  {
    term: "BABIP (Batting Average on Balls in Play)",
    definition: "Measures how often a ball in play goes for a hit, excluding home runs. Formula: (Hits - Home Runs) ÷ (At-Bats - Strikeouts - Home Runs + Sacrifice Flies). Average is around .300."
  }
];

