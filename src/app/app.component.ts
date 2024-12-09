import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputFilter: string = '';
  servers: Server[] = [
    new Server('medium', 'Production Server', 'stable', new Date(15, 1, 2024)),
    new Server('small', 'Test Server', 'offline', new Date(17, 1, 2024)),
    new Server('medium', 'Stage Server', 'stable', new Date(20, 1, 2024)),
    new Server('medium', 'Stage Server', 'stable', new Date(20, 1, 2024)),
    new Server(
      'medium',
      'Production Server 2',
      'critical',
      new Date(20, 1, 2024)
    ),
  ];

  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('online')
    }, 2000)
  })

  onAddNewServer() {
    this.servers.push(
      new Server('small', 'Test Server', 'offline', new Date(17, 1, 2024))
    );
  }
}
