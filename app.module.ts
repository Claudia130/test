import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';


import { MeetingRoomsAppComponent } from './meeting-rooms-app/meeting-rooms-app.component';
import { MeetingRoomListComponent } from './meeting-rooms-app/meeting-room-list/meeting-room-list.component';
import { MeetingRoomDetailComponent } from './meeting-rooms-app/meeting-room-detail/meeting-room-detail.component';

import { ToastrModule } from 'ngx-toastr';
import { MeetingRoomService } from './shared/meeting-room.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    MeetingRoomsAppComponent,
    MeetingRoomListComponent, 
    MeetingRoomDetailComponent, PageNotFoundComponent, BookingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ MeetingRoomService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
