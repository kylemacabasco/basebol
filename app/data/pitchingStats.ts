export interface StatItem {
  term: string;
  definition: string;
}

export const pitchingStats: StatItem[] = [
  {
    term: "ERA (Earned Run Average)",
    definition: "The average number of earned runs a pitcher allows per nine innings pitched. Lower is better. Formula: (Earned Runs × 9) ÷ Innings Pitched"
  },
  {
    term: "WHIP (Walks + Hits per Inning Pitched)",
    definition: "The average number of walks and hits allowed by a pitcher per inning. Lower is better. Formula: (Walks + Hits) ÷ Innings Pitched"
  },
  {
    term: "K/9 (Strikeouts per 9 Innings)",
    definition: "The average number of strikeouts a pitcher records per nine innings. Higher is better. Formula: (Strikeouts × 9) ÷ Innings Pitched"
  },
  {
    term: "BB/9 (Walks per 9 Innings)",
    definition: "The average number of walks a pitcher allows per nine innings. Lower is better. Formula: (Walks × 9) ÷ Innings Pitched"
  },
  {
    term: "FIP (Fielding Independent Pitching)",
    definition: "A metric that measures a pitcher's effectiveness at preventing home runs, walks, and hit by pitches, while causing strikeouts. Similar scale to ERA but removes defense from the equation."
  },
  {
    term: "Hits Allowed",
    definition: "The total number of hits a pitcher has allowed to opposing batters. Lower is better."
  },
  {
    term: "Strikeouts (K)",
    definition: "The total number of batters a pitcher has struck out. Higher is better. A strikeout occurs when a batter receives three strikes."
  },
  {
    term: "Walks (BB)",
    definition: "The total number of batters a pitcher has walked (given a base on balls). Lower is better. A walk occurs when a pitcher throws four balls outside the strike zone."
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

