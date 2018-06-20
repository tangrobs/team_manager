import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newplayer:{}
  validationMessage:string[]

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newplayer = {
      name:"",
      position:""
    }
  }
  add(){
    this.validationMessage = []
    this.playerService.create(this.newplayer).subscribe(data=>{
      if(data['errors']){
        for(let key in data['errors']){
          this.validationMessage.push(data['errors'][key].message)
        }
      }else{
        this.router.navigate(['/players/list'])
      }
    })
  }

}
//this.router.navigate(['/players/list'])