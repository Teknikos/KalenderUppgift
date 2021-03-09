import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from "@fullcalendar/angular";

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

    headerToolbar: {
      start: 'title',
      center: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      end: 'today prev,next'
    },
    selectable: true,
    eventClick: function(arg){
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
      }
    }
    
  };

  private events: any[];

  
  
  
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
    console.log(arg)
   
  }
  
  toggleWeeknumber() {
    this.calendarOptions.weekNumbers = !this.calendarOptions.weekNumbers
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
