import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/angular";

import svLocale from "@fullcalendar/core/locales/sv";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1,
    locale: svLocale,
    headerToolbar: {
      start: 'title',
      center: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      end: 'today prev,next'
    },
    selectable: true,
    selectMirror: true,
    dateClick: this.handleDateClick.bind(this),
    events: function(info, successCallback, failureCallback){
      let eventsArr = 
      [
        {title: 'event 1', start: '2021-03-11'},
        {title: 'event 2', start: '2021-03-01', end:'2021-03-05'},
        {title: 'event 3', start:'2021-03-22T12:30:00', allDay: false /* will make the time show*/}
      ]
      successCallback(eventsArr);
    },
    /*eventClick: function(arg){
      console.log(arg)
      console.log(arg.event.title)
      arg.el.style.borderColor='';
    },
    select: function(info) {
      var title = prompt("Event Content:");
      var eventData;
      if (title) 
      {
        eventData = {
          title: title,
          start: info.start,
          end: info.end
        };
        //@ViewChild('calendar').addEvent();
      }
      //@ViewChild('calendar').unselect();

    }*/
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };

  // private events: any[];

  currentevents: EventApi[] = [];

  toggleWeeknumber() {
    this.calendarOptions.weekNumbers = !this.calendarOptions.weekNumbers
  }
  
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
    console.log(arg)
  }
  
  handleDateSelect(selectInfo: DateSelectArg){
    const title = prompt('Namnge ditt event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title){
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
    // ingen titel = ingen händelse.
  }

  handleEventClick(clickInfo){
    if (confirm(`'Vill du ta bort: '${clickInfo.event.title} '?'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: any[]){
    this.currentevents = events;
  }

  /**
   *
   */
  constructor() {  }

  //constructor(private eventService: EventService) {}

  ngOnInit() {
    //this.eventService = this.eventService.getEvents();
  }

}
