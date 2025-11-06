export interface StatItem {
  term: string;
  definition: string;
}

export const defensiveStats: StatItem[] = [
  {
    term: "FLD% (Fielding Percentage)",
    definition: "The percentage of plays a fielder makes successfully out of total chances. Higher is better. Formula: (Putouts + Assists) ÷ (Putouts + Assists + Errors)"
  },
  {
    term: "DRS (Defensive Runs Saved)",
    definition: "Measures how many runs a defender saves compared to the average player at their position. Positive numbers are better. Considers range, arm strength, and error avoidance."
  },
  {
    term: "UZR (Ultimate Zone Rating)",
    definition: "Quantifies a player's defensive contribution in runs above or below average. Positive is better. Measures range, errors, and arm strength based on batted ball location."
  },
  {
    term: "E (Errors)",
    definition: "The total number of fielding errors committed by a player. Lower is better. An error is a misplay that allows a batter to reach base or a runner to advance."
  },
  {
    term: "PO (Putouts)",
    definition: "The number of times a fielder records an out by catching a fly ball, tagging a runner, or receiving a throw for a force out. Higher is better."
  },
  {
    term: "A (Assists)",
    definition: "The number of times a fielder throws out a runner or assists in an out. Higher is better. Typically high for infielders and outfielders with strong arms."
  },
  {
    term: "DP (Double Plays)",
    definition: "The number of double plays a player has participated in. Higher is better. A double play occurs when two outs are recorded on a single play."
  },
  {
    term: "RF (Range Factor)",
    definition: "Estimates the number of plays a player makes per nine innings. Formula: 9 × (Putouts + Assists) ÷ Innings Played. Higher numbers suggest better range."
  },
  {
    term: "CS% (Caught Stealing Percentage)",
    definition: "For catchers, the percentage of base stealers thrown out. Higher is better. Formula: Caught Stealing ÷ (Caught Stealing + Stolen Bases Allowed). Average is around 25-30%."
  },
  {
    term: "PB (Passed Balls)",
    definition: "For catchers, the number of pitches that should have been caught but got past the catcher, allowing runners to advance. Lower is better."
  },
  {
    term: "OAA (Outs Above Average)",
    definition: "Uses Statcast data to measure how many outs a player records compared to average at their position based on catch probability. Positive numbers are better."
  },
  {
    term: "Arm Strength",
    definition: "Measured in MPH using Statcast technology. Measures the velocity of a fielder's throw. Higher numbers indicate stronger arms, important for outfielders and infielders."
  }
];

