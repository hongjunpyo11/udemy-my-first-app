import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNerServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNerServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

}
