import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output() tick = new EventEmitter<any>();
  @Output() addMessage = new EventEmitter<any>();
  @Output() stop = new EventEmitter<any>();
  @Input() messages:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setValues(value: string, message:string) { 
    this.tick.emit(value);
    this.addMessage.emit(message);
  }

  stopAdding() { 
    this.stop.emit(true);
  }

}
