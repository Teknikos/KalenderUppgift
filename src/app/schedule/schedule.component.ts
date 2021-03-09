import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from "@fullcalendar/angular";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
