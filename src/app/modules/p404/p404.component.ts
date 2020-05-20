import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-p404",
  templateUrl: "./p404.component.html",
  styleUrls: ["./p404.component.scss"],
})
export class P404Component implements OnInit {
  constructor() {}

  public showContent: boolean = false;
  public ngOnInit(): void {
    setTimeout(() => (this.showContent = true), 1000);
  }
}
