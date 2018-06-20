import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path:"players", component: PlayerComponent, children:[
    { path:'list', component: ListComponent},
    { path:'addplayer',component: AddComponent}
  ]},
  { path:"status/game/:id", component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
