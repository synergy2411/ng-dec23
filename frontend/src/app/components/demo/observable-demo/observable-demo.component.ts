import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Subscription,
  interval,
  of,
  from,
  fromEvent,
  map,
  debounceTime,
  Observable,
  merge,
  mergeAll,
  take,
  takeWhile,
  filter,
  mergeMap,
  switchMap,
  concatMap,
  exhaustMap,
  combineLatest,
  forkJoin,
} from 'rxjs';

import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('mybtn') btnElement: ElementRef<HTMLButtonElement>;

  @ViewChild('searchTerm') searchTerm: ElementRef<HTMLInputElement>;

  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next('First Package'), 1000);
    setTimeout(() => observer.next('Second Package'), 1500);
    setTimeout(() => observer.next('Third Package'), 2000);
    setTimeout(() => observer.next('Fourth Package'), 4000);
    // setTimeout(() => observer.error(new Error('Something went wrong')), 5000);
    setTimeout(() => observer.next('Fifth Package'), 6000);
    setTimeout(() => observer.complete(), 7000);
  });

  repos: { name: string }[];

  interval$ = interval(500);

  of$ = of(101, 102, 103);

  from$ = from(['A', 'B', 'C', 'D']);

  unSub$: Subscription;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const interval1$ = interval(500).pipe(take(3));
    const interval2$ = interval(500).pipe(take(4));

    combineLatest({ interval1: interval1$, interval2: interval2$ }).subscribe(
      console.log
    );
    forkJoin({ val1: interval1$, val2: interval2$ }).subscribe(console.log);

    // const fromDocumentClick$ = fromEvent(document, 'click');

    // fromDocumentClick$
    //   .pipe(
    //     exhaustMap(() => {
    //       return interval(500).pipe(take(4));
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    // let fromEvent$ = fromEvent(this.btnElement.nativeElement, 'click');
    // fromEvent$.subscribe(
    //   (data) => console.log(data),
    //   (err) => console.log(err),
    //   () => console.log('COMPLETED')
    // );
    // let fromSerachChange$ = fromEvent(this.searchTerm.nativeElement, 'input');
    // fromSerachChange$
    //   .pipe(
    //     debounceTime(1500),
    //     map((event: any) => {
    //       return ajax(
    //         `https://api.github.com/users/${event.target.value}/repos`
    //       );
    //     }),
    //    mergeAll()
    //   )
    //   .subscribe((data) => {
    //     this.repos = <{ name: string }[]>data.response;
    //   });
  }

  onSubscribe() {
    // console.log('START');
    // this.obs$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.error('----->', err),
    //   complete: () => console.log('COMPLETED'),
    // });
    // console.log('END');
    // console.log('START');
    this.unSub$ = this.interval$
      .pipe(
        takeWhile((val) => val < 5),
        filter((val) => val % 2 === 0)
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.error(err),
        complete: () => console.log('COMPLETED'),
      });
    // console.log('END');
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }
}
