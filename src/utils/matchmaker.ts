import { Participant, Match } from '../types';

export function generateMatches(participants: Participant[]): Match[] {
  const shuffled = [...participants].sort(() => Math.random() - 0.5);
  const matches: Match[] = [];

  for (let i = 0; i < participants.length; i++) {
    const giver = shuffled[i];
    const receiver = shuffled[(i + 1) % participants.length];
    matches.push({ giver, receiver });
  }

  // Verify no self-matches
  const hasNoSelfMatches = matches.every(match => match.giver.id !== match.receiver.id);
  if (!hasNoSelfMatches) {
    return generateMatches(participants);
  }

  return matches;
}