import { Injectable, computed, inject, signal } from "@angular/core";
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";

/**
 * This service allows users to create and destroy a session.
 */
@Injectable({
  providedIn: "root",
})
export class SessionService {
  #auth = inject(Auth);
  #user = signal(this.#auth.currentUser);
  public isAuthenticated = computed(() => this.#user() !== null);
  public user = computed(() => this.#user());

  constructor() {
    this.#auth.onAuthStateChanged((user) => {
      this.#user.set(user);
    });
  }

  public async logIn(email: string, password: string): Promise<void> {
    try {
      if (this.#auth.currentUser !== null)
        throw new Error("A user is already logged in.");
      await signInWithEmailAndPassword(this.#auth, email, password);
    } catch (error) {
      console.error("Login attempt failed:", error);
    }
  }

  public async logOut(): Promise<void> {
    try {
      if (this.#auth.currentUser === null)
        throw new Error("No user is currently logged in.");
      await this.#auth.signOut();
    } catch (error) {
      console.error("Logout attempt failed:", error);
    }
  }
}
