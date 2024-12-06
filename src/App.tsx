import React, { useState } from 'react';
import { ParticipantForm } from './components/ParticipantForm';
import { MatchList } from './components/MatchList';
import { Participant, Match } from './types';
import { generateMatches } from './utils/matchmaker';
import { TreePine } from 'lucide-react';

export default function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);

  const handleAddParticipants = (newParticipants: Participant[]) => {
    setParticipants(newParticipants);
    const newMatches = generateMatches(newParticipants);
    setMatches(newMatches);
  };

  const handleRegenerateMatches = () => {
    const newMatches = generateMatches(participants);
    setMatches(newMatches);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TreePine className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Secret Santa Gift Exchange
          </h1>
          <p className="text-gray-600">
            Spread holiday cheer with a magical gift exchange!
          </p>
        </div>

        {matches.length === 0 ? (
          <ParticipantForm onAddParticipants={handleAddParticipants} />
        ) : (
          <MatchList
            matches={matches}
            onRegenerateMatches={handleRegenerateMatches}
          />
        )}
      </div>
    </div>
  );
}