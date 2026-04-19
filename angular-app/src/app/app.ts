import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from "./components/home";

@Component({
  imports: [RouterModule, Home],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'angular-app';
}
