import { Component, OnInit } from '@angular/core';

@Component({
/*  selector: 'app-servers', //recogonised as elements
  selector: '[app-servers]', //recogonised as attribute*/
  selector: '.app-servers', //recogonised as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}