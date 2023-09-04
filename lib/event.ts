interface Event {
  meetings?: Meeting[];
}

interface Meeting {
  day: string;
  title: string;
  from?: string;
  to?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addons?: any[];
}

const getNextMeeting = (event: Event): Meeting | undefined => {
  if (!event.meetings) return null;
  const meeting = event.meetings
    .filter((m) => m.day && new Date() <= new Date(m.day))
    .sort((a, b) => new Date(a.day).getTime() - new Date(b.day).getTime())[0];
  return meeting;
};

const getNextMeetings = (event: Event, count: number): Meeting[] => {
  if (!event.meetings) return null;
  const meetings = event.meetings
    .filter((m) => m.day && new Date() <= new Date(m.day))
    .sort((a, b) => new Date(a.day).getTime() - new Date(b.day).getTime())
    .slice(0, count);
  return meetings;
};

const getAvailableMeetings = (event: Event) => {
  if (!event.meetings) return [];
  return event.meetings.filter((m) => m.day && new Date() <= new Date(m.day));
};

export { getAvailableMeetings, getNextMeeting, getNextMeetings };
