import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor() {}
  public showContent: boolean = false;
  public ngOnInit(): void {
    setTimeout(() => (this.showContent = true), 1000);
  }
}
