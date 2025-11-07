export interface StatItem {
  term: string;
  definition: string;
  formula?: string;
  whatsBetter?: string;
  example?: string;
}

export const defensiveStats: StatItem[] = [
  {
    term: "FLD% (Fielding Percentage)",
    definition: "The percentage of plays a fielder makes successfully out of total chances.",
    formula: "(Putouts + Assists) ÷ (Putouts + Assists + Errors)",
    whatsBetter: "Higher is better",
    example: ".990+ is excellent for infielders, .980+ is good. First basemen typically have .995+ fielding percentage."
  },
  {
    term: "DRS (Defensive Runs Saved)",
    definition: "Measures how many runs a defender saves compared to the average player at their position. Considers range, arm strength, and error avoidance.",
    whatsBetter: "Positive numbers are better",
    example: "+15 DRS is elite, +5 to +14 is good, -5 to +5 is average, below -5 is poor defense."
  },
  {
    term: "UZR (Ultimate Zone Rating)",
    definition: "Quantifies a player's defensive contribution in runs above or below average. Measures range, errors, and arm strength based on batted ball location.",
    whatsBetter: "Positive is better",
    example: "+15 UZR is Gold Glove caliber, +5 is above average, 0 is average, -10 or worse is poor."
  },
  {
    term: "E (Errors)",
    definition: "The total number of fielding errors committed by a player. An error is a misplay that allows a batter to reach base or a runner to advance.",
    whatsBetter: "Lower is better",
    example: "5 or fewer errors in a season is excellent. Middle infielders typically have 8-15 errors per season."
  },
  {
    term: "PO (Putouts)",
    definition: "The number of times a fielder records an out by catching a fly ball, tagging a runner, or receiving a throw for a force out.",
    whatsBetter: "Higher is better",
    example: "First basemen lead with 1,400+ putouts, catchers have 900+, outfielders typically 250-400."
  },
  {
    term: "A (Assists)",
    definition: "The number of times a fielder throws out a runner or assists in an out. Typically high for infielders and outfielders with strong arms.",
    whatsBetter: "Higher is better",
    example: "Shortstops lead with 450+ assists, third basemen 300+, strong-armed outfielders 10-20 per season."
  },
  {
    term: "DP (Double Plays)",
    definition: "The number of double plays a player has participated in. A double play occurs when two outs are recorded on a single play.",
    whatsBetter: "Higher is better",
    example: "Second basemen and shortstops typically turn 100+ double plays per season together as a combination."
  },
  {
    term: "RF (Range Factor)",
    definition: "Estimates the number of plays a player makes per nine innings. Higher numbers suggest better range.",
    formula: "9 × (Putouts + Assists) ÷ Innings Played",
    whatsBetter: "Higher is better",
    example: "Shortstops: 4.5+ is great. Second basemen: 5.0+ is great. Varies significantly by position."
  },
  {
    term: "CS% (Caught Stealing Percentage)",
    definition: "For catchers, the percentage of base stealers thrown out. Average is around 25-30%.",
    formula: "Caught Stealing ÷ (Caught Stealing + Stolen Bases Allowed)",
    whatsBetter: "Higher is better",
    example: "35%+ is elite, 28-34% is good, 20-27% is average, below 20% is poor."
  },
  {
    term: "PB (Passed Balls)",
    definition: "For catchers, the number of pitches that should have been caught but got past the catcher, allowing runners to advance.",
    whatsBetter: "Lower is better",
    example: "3 or fewer passed balls in a season is excellent. 5-10 is typical, 15+ is concerning."
  },
  {
    term: "OAA (Outs Above Average)",
    definition: "Uses Statcast data to measure how many outs a player records compared to average at their position based on catch probability.",
    whatsBetter: "Positive numbers are better",
    example: "+10 OAA is elite defense, +5 is very good, 0 is average, -5 or worse is below average."
  },
  {
    term: "Arm Strength",
    definition: "Measured in MPH using Statcast technology. Measures the velocity of a fielder's throw. Important for outfielders and infielders.",
    whatsBetter: "Higher is better",
    example: "Outfielders: 90+ MPH is elite. Infielders: 85+ MPH is strong. Catchers: 80+ MPH is good."
  }
];

