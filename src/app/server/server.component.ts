import { Component, Input } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  @Input() server!: Server;

  getServerClass() {
    return {
      'list-group-item-success': this.server.status === 'stable',
      'list-group-item-warning': this.server.status === 'offline',
      'list-group-item-danger': this.server.status === 'critical',
    };
  }
}
