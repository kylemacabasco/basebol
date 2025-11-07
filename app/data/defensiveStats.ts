export interface StatItem {
  term: string;
  definition: string;
  formula?: string;
  whatsBetter?: string;
}

export const defensiveStats: StatItem[] = [
  {
    term: "FLD% (Fielding Percentage)",
    definition: "The percentage of plays a fielder makes successfully out of total chances.",
    formula: "(Putouts + Assists) ÷ (Putouts + Assists + Errors)",
    whatsBetter: "Higher is better"
  },
  {
    term: "DRS (Defensive Runs Saved)",
    definition: "Measures how many runs a defender saves compared to the average player at their position. Considers range, arm strength, and error avoidance.",
    whatsBetter: "Positive numbers are better"
  },
  {
    term: "UZR (Ultimate Zone Rating)",
    definition: "Quantifies a player's defensive contribution in runs above or below average. Measures range, errors, and arm strength based on batted ball location.",
    whatsBetter: "Positive is better"
  },
  {
    term: "E (Errors)",
    definition: "The total number of fielding errors committed by a player. An error is a misplay that allows a batter to reach base or a runner to advance.",
    whatsBetter: "Lower is better"
  },
  {
    term: "PO (Putouts)",
    definition: "The number of times a fielder records an out by catching a fly ball, tagging a runner, or receiving a throw for a force out.",
    whatsBetter: "Higher is better"
  },
  {
    term: "A (Assists)",
    definition: "The number of times a fielder throws out a runner or assists in an out. Typically high for infielders and outfielders with strong arms.",
    whatsBetter: "Higher is better"
  },
  {
    term: "DP (Double Plays)",
    definition: "The number of double plays a player has participated in. A double play occurs when two outs are recorded on a single play.",
    whatsBetter: "Higher is better"
  },
  {
    term: "RF (Range Factor)",
    definition: "Estimates the number of plays a player makes per nine innings. Higher numbers suggest better range.",
    formula: "9 × (Putouts + Assists) ÷ Innings Played",
    whatsBetter: "Higher is better"
  },
  {
    term: "CS% (Caught Stealing Percentage)",
    definition: "For catchers, the percentage of base stealers thrown out. Average is around 25-30%.",
    formula: "Caught Stealing ÷ (Caught Stealing + Stolen Bases Allowed)",
    whatsBetter: "Higher is better"
  },
  {
    term: "PB (Passed Balls)",
    definition: "For catchers, the number of pitches that should have been caught but got past the catcher, allowing runners to advance.",
    whatsBetter: "Lower is better"
  },
  {
    term: "OAA (Outs Above Average)",
    definition: "Uses Statcast data to measure how many outs a player records compared to average at their position based on catch probability.",
    whatsBetter: "Positive numbers are better"
  },
  {
    term: "Arm Strength",
    definition: "Measured in MPH using Statcast technology. Measures the velocity of a fielder's throw. Important for outfielders and infielders.",
    whatsBetter: "Higher is better"
  }
];

