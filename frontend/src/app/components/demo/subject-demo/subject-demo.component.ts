import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css'],
})
export class SubjectDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let sub = new Subject();

    // let sub = new BehaviorSubject("Starting...");

    // let sub = new ReplaySubject(2);

    let sub = new AsyncSubject();

    sub.subscribe({
      next: (data) => console.log('Subscribe 1 :', data),
    });

    sub.next('Package 1');

    sub.next('Package 2');

    sub.next('Package 3');

    sub.subscribe((data) => console.log('Subscription 2 : ', data));

    sub.next('Package 4');

    sub.complete();
  }
}
