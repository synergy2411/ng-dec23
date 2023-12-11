import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers: [CounterService],
})
export class C2Component implements OnInit {
  constructor(public ctrService: CounterService) {}

  ngOnInit(): void {}

  increaseCounter() {
    this.ctrService.counter++;
  }
}
