import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})

export class AsideListComponent implements OnInit {
  @Input() headerTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
