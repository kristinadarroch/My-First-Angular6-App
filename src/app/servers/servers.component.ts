import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [
    `
    .online{
      color: white
    }
    `
  ]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'No Server was Created!'
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() { 
    setTimeout(() => {this.allowNewServer = true}, (2000))
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }

}
