import { Component, OnInit } from '@angular/core';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styles: []
})
export class BookingComponent implements OnInit {

  constructor(public service: MeetingRoomService) { }

  ngOnInit() {
    this.service.getList();
  }

}
