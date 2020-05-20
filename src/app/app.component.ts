import { Component, HostListener } from "@angular/core";
import {
  NavigationError,
  Event,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  RoutesRecognized,
  RouterOutlet,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // Inject the Angular Router
  constructor(private _router: Router) {
    // Subscribe to the router events observable
    this._router.events.subscribe((routerEvent: Event) => {
      // On NavigationStart, set showLoadingIndicator to ture
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
        setTimeout(() => {}, 2000);
      }

      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel
      ) {
        setTimeout(() => {
          this.showLoadingIndicator = false;
        }, 500);
      }
    });
  }
  showLoadingIndicator = false;
  link: any;
  button: any;
  span: any;
  cursor: any;
  x: any;
  y: any;
  ngAfterViewInit() {
    this.link = document.querySelectorAll("a");
    this.button = document.querySelectorAll("button");
    this.link.forEach((b) => b.addEventListener("mousemove", this.animateit));
    this.link.forEach((b) => b.addEventListener("mouseleave", this.animateit));
    this.button.forEach((b) => b.addEventListener("mousemove", this.animateit));
    this.button.forEach((b) =>
      b.addEventListener("mouseleave", this.animateit)
    );
  }

  @HostListener("mousemove", ["$event"])
  animateit(event: MouseEvent) {
    this.span = document.querySelector(".cursor_inner");
    this.span.style.transform = `scale(7)`;
    if (event.type === "mouseleave") this.span.style.transform = "";
  }

  @HostListener("mousemove", ["$event"])
  onMousemove(event: MouseEvent) {
    this.cursor = document.querySelector(".cursor");
    // const { clientX: x, clientY: y } = event;
    this.x = event.clientX;
    this.y = event.clientY;
    this.cursor.style.left = this.x - 10 + "px";
    this.cursor.style.top = this.y - 10 + "px";
  }
}
