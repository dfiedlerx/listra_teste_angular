import { Component, OnInit } from '@angular/core';

import { faAngleDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shared-load-more',
  templateUrl: './shared-load-more.component.html',
  styleUrls: ['./shared-load-more.component.scss']
})
export class SharedLoadMoreComponent implements OnInit {

  faAngleDown : IconDefinition = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
