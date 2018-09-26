// a component is a typescript class
import { Component } from '@angular/core';

// decorator
@Component({
    // html tag to use in template
    selector: 'app-server',
    // tell where the file is that is going to be used
    templateUrl: './server.component.html'
})
export class serverComponent{
    serverId: number = 10;
    serverStatus: string = 'online';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
