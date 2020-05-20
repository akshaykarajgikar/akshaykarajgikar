import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  public showContent: boolean = false;
  public ngOnInit(): void {
    setTimeout(() => (this.showContent = true), 1000);
  }

  public projectSliderConfig: any = {
    grabCursor: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
}
