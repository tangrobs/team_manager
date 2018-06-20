import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players:object[]

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.playerService.getAll().subscribe(data=>this.players = data['players'])
  }

  //delete is incomplete
  delete(player){
    if(confirm("are you sure you want to delete " + player.name + "?")){
      this.playerService.delete(player._id).subscribe(data=>this.getAll())
    }
  }
}
