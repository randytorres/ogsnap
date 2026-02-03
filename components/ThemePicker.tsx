'use client';

import { useState } from 'react';

interface ThemePickerProps {
  selected: string;
  onSelect: (theme: string) => void;
}

const themes = [
  { 
    id: 'gradient', 
    name: 'Gradient', 
    preview: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    description: 'Modern dark with blue tones'
  },
  { 
    id: 'dark', 
    name: 'Dark', 
    preview: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
    description: 'Classic dark mode'
  },
  { 
    id: 'light', 
    name: 'Light', 
    preview: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    description: 'Clean and minimal'
  },
  { 
    id: 'minimal', 
    name: 'Minimal', 
    preview: 'linear-gradient(180deg, #18181b 0%, #27272a 100%)',
    description: 'Subtle and elegant'
  },
  { 
    id: 'vibrant', 
    name: 'Vibrant', 
    preview: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 33%, #06b6d4 66%, #3b82f6 100%)',
    description: 'Bold and colorful'
  },
];

export default function ThemePicker({ selected, onSelect }: ThemePickerProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300">Theme</label>
      <div className="grid grid-cols-5 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onSelect(theme.id)}
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
              selected === theme.id 
                ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900 scale-105' 
                : 'hover:scale-105 hover:ring-1 hover:ring-white/20'
            }`}
          >
            <div
              className="aspect-video w-full"
              style={{ background: theme.preview }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-xs font-medium">{theme.name}</span>
            </div>
            {selected === theme.id && (
              <div className="absolute top-1 right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500">
        {themes.find(t => t.id === selected)?.description}
      </p>
    </div>
  );
}
