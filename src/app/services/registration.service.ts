import { Injectable, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";
import { SessionService } from "./session.service";
import { Router } from "@angular/router";

/**
 * This service allows users to create a new account.
 */
@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  #auth = inject(Auth);
  #router = inject(Router);
  #session = inject(SessionService); // Ensure the session service is initialized.

  public async register(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.#auth, email, password);
      this.#router.navigateByUrl("/");
    } catch (error) {
      console.error("Account creation failed:", error);
    }
  }
}
