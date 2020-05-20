import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {}
  public showContent: boolean = false;
  public ngOnInit(): void {
    setTimeout(() => (this.showContent = true), 1000);
  }
}
