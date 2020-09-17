import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MeetingRoom } from './meeting-room';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  formData: MeetingRoom;
  // readonly rootUrl = 'https://localhost:44335/MeetingRooms';
  list: MeetingRoom[];

  // constructor(private http: HttpClient) { }

  rootUrl='';

  constructor(private http:HttpClient){
    console.log('environment' + environment.production);
    this.rootUrl = environment.production ? 'http://localhost/MyWebAPI/MeetingRooms' : 'https://localhost:44335/MeetingRooms';
  }

  getList() {
    this.http.get<MeetingRoom[]>(this.rootUrl)
      .toPromise()
      .then(resp => this.list = resp as MeetingRoom[]);
  }
  postMeetingRoom() {
    return this.http.post(this.rootUrl, this.formData);
  }
  putMeetingRoom() {
    return this.http.put(this.rootUrl + '/' + this.formData.id, this.formData);
  }
  deleteMeetingRoom(id) {
    return this.http.delete(this.rootUrl + '/' + id);
  }

}
