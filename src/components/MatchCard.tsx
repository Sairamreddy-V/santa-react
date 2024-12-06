import React from 'react';
import { GiftIcon } from 'lucide-react';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  index: number;
}

export function MatchCard({ match, index }: MatchCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.2}s both`
      }}
    >
      <div className="relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <GiftIcon className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-gray-800">{match.giver.name}</h3>
          <div className="my-2 text-green-600">is giving to</div>
          <h3 className="text-xl font-bold text-gray-800">{match.receiver.name}</h3>
        </div>
      </div>
    </div>
  );
}