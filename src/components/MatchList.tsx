import React from 'react';
import { Match } from '../types';
import { MatchCard } from './MatchCard';

interface MatchListProps {
  matches: Match[];
  onRegenerateMatches: () => void;
}

export function MatchList({ matches, onRegenerateMatches }: MatchListProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {matches.map((match, index) => (
          <MatchCard key={match.giver.id} match={match} index={index} />
        ))}
      </div>
      
      <button
        onClick={onRegenerateMatches}
        className="mt-8 mx-auto block py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Regenerate Matches
      </button>
    </div>
  );
}