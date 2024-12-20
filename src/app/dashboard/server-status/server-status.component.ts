import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  ngOnInit() {
    setInterval(this.changeStatus, 5000);
  }

  constructor() {}

  changeStatus() {
    const rand = Math.random();

    if (rand < 0.5) {
      this.currentStatus = 'online';
    } else if (rand < 0.9) {
      this.currentStatus = 'offline';
    } else {
      this.currentStatus = 'unknown';
    }
  }
}
