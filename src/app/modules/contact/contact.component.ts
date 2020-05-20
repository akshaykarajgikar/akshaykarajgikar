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

  copyText(val: string) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    document.querySelector("#email").innerHTML = "Copied";
    setTimeout(() => {
      document.querySelector("#email").innerHTML = "Copy";
    }, 3000);
  }
}
