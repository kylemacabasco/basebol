export interface StatItem {
  term: string;
  definition: string;
  formula?: string;
  whatsBetter?: string;
}

export const pitchingStats: StatItem[] = [
  {
    term: "ERA (Earned Run Average)",
    definition: "The average number of earned runs a pitcher allows per nine innings pitched.",
    formula: "(Earned Runs × 9) ÷ Innings Pitched",
    whatsBetter: "Lower is better"
  },
  {
    term: "WHIP (Walks + Hits per Inning Pitched)",
    definition: "The average number of walks and hits allowed by a pitcher per inning.",
    formula: "(Walks + Hits) ÷ Innings Pitched",
    whatsBetter: "Lower is better"
  },
  {
    term: "K/9 (Strikeouts per 9 Innings)",
    definition: "The average number of strikeouts a pitcher records per nine innings.",
    formula: "(Strikeouts × 9) ÷ Innings Pitched",
    whatsBetter: "Higher is better"
  },
  {
    term: "BB/9 (Walks per 9 Innings)",
    definition: "The average number of walks a pitcher allows per nine innings.",
    formula: "(Walks × 9) ÷ Innings Pitched",
    whatsBetter: "Lower is better"
  },
  {
    term: "FIP (Fielding Independent Pitching)",
    definition: "A metric that measures a pitcher's effectiveness at preventing home runs, walks, and hit by pitches, while causing strikeouts. Similar scale to ERA but removes defense from the equation."
  },
  {
    term: "Hits Allowed",
    definition: "The total number of hits a pitcher has allowed to opposing batters.",
    whatsBetter: "Lower is better"
  },
  {
    term: "Strikeouts (K)",
    definition: "The total number of batters a pitcher has struck out. A strikeout occurs when a batter receives three strikes.",
    whatsBetter: "Higher is better"
  },
  {
    term: "Walks (BB)",
    definition: "The total number of batters a pitcher has walked (given a base on balls). A walk occurs when a pitcher throws four balls outside the strike zone.",
    whatsBetter: "Lower is better"
  },
  {
    term: "Innings Pitched (IP)",
    definition: "The total number of innings a pitcher has pitched. Each out recorded counts as 1/3 of an inning."
  },
  {
    term: "Saves (SV)",
    definition: "A statistic credited to a relief pitcher who finishes a game for the winning team under certain conditions, preserving a narrow lead."
  }
];

