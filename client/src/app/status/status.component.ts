import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  game:number;
  players:object[]

  constructor(
    private route:ActivatedRoute,
    private playerService:PlayerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.game=params['id'])
    this.getAll()
  }
  getAll(){
    this.playerService.getAll().subscribe(data=>this.players=data['players'])
  }
  status(id,status){
    this.playerService.updateStatus(id,status,this.game-1).subscribe(data=>this.getAll())
  }
}
