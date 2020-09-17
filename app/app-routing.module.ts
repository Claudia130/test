import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { BookingComponent } from "./booking/booking.component";
import { MeetingRoomsAppComponent } from "./meeting-rooms-app/meeting-rooms-app.component";

const routes: Routes = [
  { path: '', redirectTo: 'booking', pathMatch: 'full'},
  { path: 'booking', component: BookingComponent},
  { path: 'booking/:id', component: BookingDetailComponent },
  { path: 'meetingroomapp', component: MeetingRoomsAppComponent},
  { path: '**', redirectTo: 'PageNotFoundComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
