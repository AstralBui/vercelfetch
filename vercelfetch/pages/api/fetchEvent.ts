import { NextApiRequest, NextApiResponse } from 'next';
import { utcToZonedTime, format } from 'date-fns-tz';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { date } = req.query;

    if (!date || typeof date !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing date parameter' });
    }

    // San Francisco timezone for consistency
    const timeZone = 'America/Los_Angeles';

    // Simulate fetching events from a data source
    const events = [
      {
        date: '2025-01-01',
        eventId: 'mVVd1FYZNE14eRWNU6t3nX',
        registrants: 120,
        visitors: 80,
        regimp: 40,
        partiimp: 20,
        bracketimp: 10,
        overviewimp: 15,
        calendarimp: 5,
        footerimp: 30,
        otherimp: 10,
      },
      {
        date: '2025-01-02',
        eventId: '3BpVluwABOdxlUdYZKY5HD',
        registrants: 200,
        visitors: 150,
        regimp: 60,
        partiimp: 40,
        bracketimp: 20,
        overviewimp: 25,
        calendarimp: 10,
        footerimp: 50,
        otherimp: 15,
      },
    ];

    // Filter events based on the selected date
    const filteredEvents = events.filter((event) => event.date === date);

    res.status(200).json(filteredEvents);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
