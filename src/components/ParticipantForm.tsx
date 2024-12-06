import React, { useState } from 'react';
import { GiftIcon, PlusCircleIcon, XCircleIcon } from 'lucide-react';
import { Participant } from '../types';

interface ParticipantFormProps {
  onAddParticipants: (participants: Participant[]) => void;
}

export function ParticipantForm({ onAddParticipants }: ParticipantFormProps) {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');

  const addParticipant = () => {
    const trimmedName = newName.trim();
    if (!trimmedName) {
      setError('Please enter a name');
      return;
    }

    if (participants.some(p => p.name.toLowerCase() === trimmedName.toLowerCase())) {
      setError('This name is already in the list');
      return;
    }

    setParticipants([...participants, { id: crypto.randomUUID(), name: trimmedName }]);
    setNewName('');
    setError('');
  };

  const removeParticipant = (id: string) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (participants.length < 3) {
      setError('Please add at least 3 participants');
      return;
    }
    onAddParticipants(participants);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter participant name"
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addParticipant}
            className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <PlusCircleIcon className="w-6 h-6" />
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="space-y-2">
          {participants.map((participant) => (
            <div
              key={participant.id}
              className="flex items-center justify-between p-2 bg-red-50 rounded-lg"
            >
              <span className="flex items-center space-x-2">
                <GiftIcon className="w-4 h-4 text-red-500" />
                <span>{participant.name}</span>
              </span>
              <button
                type="button"
                onClick={() => removeParticipant(participant.id)}
                className="text-red-500 hover:text-red-700"
              >
                <XCircleIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={participants.length < 3}
          className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Match Santas ({participants.length}/3 participants minimum)
        </button>
      </form>
    </div>
  );
}