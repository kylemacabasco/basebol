"use client";

import { useState } from "react";
import { pitchingStats } from "./data/pitchingStats";

export default function Home() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-black">
      <div className="w-full max-w-2xl border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-white dark:bg-black shadow-sm">
        <h1 className="text-3xl font-semibold mb-2 text-black dark:text-white">
          Pitching Stats
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Essential metrics for evaluating pitcher performance
        </p>
        
        <div className="space-y-0 border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
          {pitchingStats.map((stat, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-800 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <span className="text-sm font-medium text-black dark:text-white">
                  {stat.term}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    expandedItems.has(index) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  expandedItems.has(index) ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-900 pt-3">
                  {stat.definition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
