"use client";

import { useState, useEffect, useRef } from "react";
import { categories } from "./data/categories";
import type { CategoryType } from "./data/categories";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("pitching");
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentCategory = categories.find((cat) => cat.id === selectedCategory)!;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const handleCategoryChange = (newCategory: CategoryType) => {
    setSelectedCategory(newCategory);
    setExpandedItems(new Set()); // Reset expanded items when changing category
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-black">
      <div className="w-full max-w-2xl border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-white dark:bg-black shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-semibold text-black dark:text-white">
            Baseball Stats
          </h1>
          
          {/* Custom Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 text-sm border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-black text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors flex items-center gap-2 min-w-[160px] justify-between"
            >
              <span>{currentCategory.label}</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
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
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-full min-w-[200px] border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-black shadow-lg overflow-hidden z-10">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors ${
                      selectedCategory === category.id
                        ? "text-black dark:text-white font-medium"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          {currentCategory.description}
        </p>
        
        <div className="space-y-0 border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
          {currentCategory.stats.map((stat, index) => (
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
