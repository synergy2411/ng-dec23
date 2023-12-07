import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data Arrived'), 3000);
  });

  todoCollection = [
    { label: 'shopping', status: 'done' },
    { label: 'grocery', status: 'pending' },
    { label: 'planting', status: 'done' },
    { label: 'insurance', status: 'pending' },
  ];

  filteredStatus = '';

  onAddNew() {
    this.todoCollection.push({ label: 'New Item', status: 'pending' });
  }

  contactNumber = 987654321;

  constructor() {}

  ngOnInit(): void {}
}
