import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  /* Declaring events: 
  * https://fullcalendar.io/docs/event-parsing 
  * https://fullcalendar.io/docs/event-object
  */
  private events = [
    {
      title: 'A',
      start: '2019-10-11 07:00',
      end: '2019-10-11 16:00',
      rest: '60',
      user: '100'
    },
    {
      title: 'A',
      start: '2019-10-07 07:00',
      end: '2019-10-07 16:00',
      rest: '60',
      user: '100'
    },
    {
      title: 'A',
      start: '2019-10-16 07:00',
      end: '2019-10-16 16:00',
      rest: '60',
      user: '100'
    },
    {
      title: 'A',
      start: '2019-10-02 07:00',
      end: '2019-10-02 16:00',
      rest: '60',
      user: '100'
    },
    {
      title: 'A',
      start: '2019-10-15 07:00',
      end: '2019-10-15 16:00',
      rest: '60',
      user: '100'
    },
    {
      title: 'C',
      start: '2019-10-22 16:00',
      end: '2019-10-22 22:00',
      rest: '20',
      user: '100'
    },
    {
      title: 'B',
      start: '2019-10-22 05:00',
      end: '2019-10-22 12:00',
      rest: '20',
      user: '100'
    },
    
    {
      title: 'B',
      start: '2019-10-11 05:00',
      end: '2019-10-11 12:00',
      rest: '20',
      user: '101'
    },
    {
      title: 'D',
      start: '2019-10-07 07:00',
      end: '2019-10-07 21:00',
      rest: '60',
      user: '101'
    },
    {
      title: 'E',
      start: '2019-10-16 14:00',
      end: '2019-10-16 23:00',
      rest: '20',
      user: '101'
    },
    {
      title: 'A',
      start: '2019-10-02 07:00',
      end: '2019-10-02 16:00',
      rest: '60',
      user: '101'
    },
    {
      title: 'C',
      start: '2019-10-15 16:00',
      end: '2019-10-15 22:00',
      rest: '20',
      user: '101'
    },
    {
      title: 'D',
      start: '2019-10-20 07:00',
      end: '2019-10-20 21:00',
      rest: '40',
      user: '101'
    },
    {
      title: 'B',
      start: '2019-10-13 05:00',
      end: '2019-10-13 12:00',
      rest: '20',
      user: '101'
    },

    
    {
      title: 'A',
      start: '2019-10-15 07:00',
      end: '2019-10-15 16:00',
      rest: '60',
      user: '102'
    },
    {
      title: 'B',
      start: '2019-10-10 05:00',
      end: '2019-10-10 12:00',
      rest: '20',
      user: '102'
    },
    {
      title: 'C',
      start: '2019-10-13 16:00',
      end: '2019-10-13 22:00',
      rest: '20',
      user: '102'
    },

    
    {
      title: 'F',
      start: '2019-10-16 09:00',
      end: '2019-10-16 18:00',
      rest: '30',
      user: '103'
    },
    {
      title: 'AA',
      start: '2019-10-10 08:00',
      end: '2019-10-10 17:00',
      rest: '40',
      user: '102'
    },
    {
      title: 'AA',
      start: '2019-10-26 08:00',
      end: '2019-10-26 17:00',
      rest: '40',
      user: '102'
    }
  ];

  constructor() { }

  getEvents(): any[]{
    return this.events;
  }
}
