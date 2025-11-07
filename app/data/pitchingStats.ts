export interface StatItem {
  term: string;
  definition: string;
  formula?: string;
  whatsBetter?: string;
  example?: string;
}

export const pitchingStats: StatItem[] = [
  {
    term: "ERA (Earned Run Average)",
    definition: "The average number of earned runs a pitcher allows per nine innings pitched.",
    formula: "(Earned Runs × 9) ÷ Innings Pitched",
    whatsBetter: "Lower is better",
    example: "A 2.50 ERA is excellent, 3.50 is good, 4.50 is average, and 5.50+ is poor."
  },
  {
    term: "WHIP (Walks + Hits per Inning Pitched)",
    definition: "The average number of walks and hits allowed by a pitcher per inning.",
    formula: "(Walks + Hits) ÷ Innings Pitched",
    whatsBetter: "Lower is better",
    example: "A WHIP of 1.00 is elite, 1.30 is good, 1.50 is average, and 1.70+ is poor."
  },
  {
    term: "K/9 (Strikeouts per 9 Innings)",
    definition: "The average number of strikeouts a pitcher records per nine innings.",
    formula: "(Strikeouts × 9) ÷ Innings Pitched",
    whatsBetter: "Higher is better",
    example: "10+ K/9 is elite, 8-9 is very good, 6-7 is average, below 5 is poor."
  },
  {
    term: "BB/9 (Walks per 9 Innings)",
    definition: "The average number of walks a pitcher allows per nine innings.",
    formula: "(Walks × 9) ÷ Innings Pitched",
    whatsBetter: "Lower is better",
    example: "Under 2.0 BB/9 is excellent, 2.0-3.0 is good, 3.0-4.0 is average, 4.0+ is poor."
  },
  {
    term: "FIP (Fielding Independent Pitching)",
    definition: "A metric that measures a pitcher's effectiveness at preventing home runs, walks, and hit by pitches, while causing strikeouts. Similar scale to ERA but removes defense from the equation.",
    example: "FIP uses the same scale as ERA. A 3.00 FIP is excellent, 4.00 is average, 5.00+ is poor."
  },
  {
    term: "Hits Allowed",
    definition: "The total number of hits a pitcher has allowed to opposing batters.",
    whatsBetter: "Lower is better",
    example: "Fewer hits allowed per inning pitched is better. Top pitchers allow less than 1 hit per inning."
  },
  {
    term: "Strikeouts (K)",
    definition: "The total number of batters a pitcher has struck out. A strikeout occurs when a batter receives three strikes.",
    whatsBetter: "Higher is better",
    example: "200+ strikeouts in a season is excellent. Elite pitchers like Randy Johnson had 300+ in peak seasons."
  },
  {
    term: "Walks (BB)",
    definition: "The total number of batters a pitcher has walked (given a base on balls). A walk occurs when a pitcher throws four balls outside the strike zone.",
    whatsBetter: "Lower is better",
    example: "Fewer walks shows better control. Elite pitchers average less than 2 walks per 9 innings."
  },
  {
    term: "Innings Pitched (IP)",
    definition: "The total number of innings a pitcher has pitched. Each out recorded counts as 1/3 of an inning.",
    example: "200+ innings pitched in a season indicates durability. Ace starters typically pitch 180-220 innings."
  },
  {
    term: "Saves (SV)",
    definition: "A statistic credited to a relief pitcher who finishes a game for the winning team under certain conditions, preserving a narrow lead.",
    example: "40+ saves in a season is excellent for a closer. The record is 62 saves by Francisco Rodriguez in 2008."
  }
];

