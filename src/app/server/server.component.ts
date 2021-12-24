import { Component } from "@angular/core";

@Component( {
selector: 'server-component',
templateUrl: './server.component.html'
} )
export class ServerComponent{

id : number =10;
serverStatus : string ='loading';

getServerStatus(){
return this.serverStatus;
}

}
