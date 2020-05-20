import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./modules/index/index.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { AboutComponent } from "./modules/about/about.component";
import { ProjectsComponent } from "./modules/projects/projects.component";
import { P404Component } from "./modules/p404/p404.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full",
  },
  {
    path: "index",
    component: IndexComponent,
    data: { animation: "enter" },
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { animation: "enter" },
  },
  {
    path: "about",
    component: AboutComponent,
    data: { animation: "enter" },
  },
  {
    path: "projects",
    component: ProjectsComponent,
    data: { animation: "enter" },
  },
  {
    path: "**",
    component: P404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
