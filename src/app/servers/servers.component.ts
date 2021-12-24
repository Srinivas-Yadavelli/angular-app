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
   serverName = 'TestServer';
   onCreateServerStatus = 'Server is not created yet!!!!';
   serverCreated = false;
  constructor() {
   setTimeout( () =>
   {
    this.allowServer=true;
   },5000);
   }

  ngOnInit(): void {

  }
  onCreateServer(){
  this.serverCreated= true;
  this.onCreateServerStatus = 'Now Server Successfully Created  : ' + this.serverName;
  }
  onUpdateServerName(event : Event){
console.log(event);
  this.serverName = (<InputEvent>event).data;
  }

}
