import { pitchingStats } from "./pitchingStats";
import { hittingStats } from "./hittingStats";
import { defensiveStats } from "./defensiveStats";
import type { StatItem } from "./pitchingStats";

export type CategoryType = "pitching" | "hitting" | "defensive";

export interface Category {
  id: CategoryType;
  label: string;
  description: string;
  stats: StatItem[];
}

export const categories: Category[] = [
  {
    id: "pitching",
    label: "Pitching Stats",
    description: "Essential metrics for evaluating pitcher performance",
    stats: pitchingStats,
  },
  {
    id: "hitting",
    label: "Hitting Stats",
    description: "Key statistics for measuring offensive production",
    stats: hittingStats,
  },
  {
    id: "defensive",
    label: "Defensive Stats",
    description: "Metrics for evaluating fielding performance and range",
    stats: defensiveStats,
  },
];

