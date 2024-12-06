export interface Participant {
  id: string;
  name: string;
}

export interface Match {
  giver: Participant;
  receiver: Participant;
}