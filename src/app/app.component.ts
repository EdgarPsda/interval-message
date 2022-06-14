import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interval-message';
  messages:any = [];
  interval:any;
  message: any;

  newInterval(newInterval:any) { 
    this.stopInterval(true);
    this.interval = setInterval(() => {
      this.messages.push(this.message);
    }, newInterval);
  }

  newMessage(newMessage: any) { 
    if (newMessage === '') {
      alert('Message cannot be empty');
    } else { 
      this.message = newMessage;
    }
  }

  stopInterval(isStoped:any) { 
    if (isStoped) { 
      clearInterval(this.interval);
    }
  }
}
