import { Component, OnInit } from '@angular/core';

@Component({
/*  selector: 'app-servers', //recogonised as elements
  selector: '[app-servers]', //recogonised as attribute*/
  selector: '.app-servers', //recogonised as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowServer = false;
   serverName = '';
   onCreateServerStatus = 'Server is not created yet!!!!';

  constructor() {
   setTimeout( () =>
   {
    this.allowServer=true;
   },5000);
   }

  ngOnInit(): void {

  }
  onCreateServer(){
  this.onCreateServerStatus = 'Now Server Successfully Created';
  }
  onUpdateServerName(event : Event){
console.log(event);
  this.serverName = (<InputEvent>event).data;
  }

}
