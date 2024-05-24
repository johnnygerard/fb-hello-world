import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "register",
    loadComponent: () =>
      import("./pages/registration/registration.component").then(
        (module) => module.RegistrationComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
