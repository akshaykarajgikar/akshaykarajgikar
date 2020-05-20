import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }
  public showContent: boolean = false;
  public ngOnInit(): void {
    setTimeout(() => (this.showContent = true), 1000);
  }

}
