import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }
  
  getAll(){
    return this.http.get('/api/player')
  }
  create(newplayer){
    return this.http.post('/api/player',newplayer)
  }
  delete(id){
    return this.http.delete('/api/player/'+id)
  }
  updateStatus(id,status,game){
    return this.http.put('/api/playerstatus/'+id,{"game":game,"status":status})
  }
}
