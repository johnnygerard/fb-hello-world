import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from "@angular/core";
import { SessionService } from "../../services/session.service";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  session = inject(SessionService);
  email = model("");
  password = model("");

  logIn(): void {
    this.session.logIn(this.email(), this.password());
  }

  logOut(): void {
    this.session.logOut();
  }
}
