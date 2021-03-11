import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/angular";

import svLocale from "@fullcalendar/core/locales/sv";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  
 // @ViewChild('content') input: ElementRef;


  
  
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

  // handleEventClick(clickInfo){
  //   if (confirm(`'Vill du ta bort: '${clickInfo.event.title} '?'`)) {
  //     clickInfo.event.remove();
  //   }
  // }
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
  constructor(private modalService: NgbModal) {  }

  //constructor(private eventService: EventService) {}

  ngOnInit() {
    //this.eventService = this.eventService.getEvents();
  }


  /*  MODAL  */ 
  /*  Open modal. Show a form. Filled in details should be saved as event. 
      Make it possible to access this when clicking on a date. Or a span of dates.
  */
  closeResult = '' ;
  open(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log(`by pressing ESC`)
      return `by pressing ESC`;
    }else if (reason === ModalDismissReasons.BACKDROP_CLICK){
      console.log(`by clicking on a backdrop`)
      return `by clicking on a backdrop`;
    }
    console.log(reason)
    return `with: ${reason}`;
  }

  saveEventModal(saveInfo){
    console.log(`Event to be saved: ${saveInfo}`)
  }

}
