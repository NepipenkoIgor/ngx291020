import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getDate(): number {
    return Date.now();
  }

  trigger(): void {
    console.log('on-push component');
  }
}
