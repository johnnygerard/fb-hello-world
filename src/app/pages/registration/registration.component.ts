import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from "@angular/core";
import { RegistrationService } from "../../services/registration.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-registration",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./registration.component.html",
  styleUrl: "./registration.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  #registrationService = inject(RegistrationService);
  email = model("");
  password = model("");

  register(): void {
    this.#registrationService.register(this.email(), this.password());
  }
}
