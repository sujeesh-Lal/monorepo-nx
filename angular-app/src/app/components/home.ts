import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '@monorepo-nx/shared-ui';


@Component({
  selector: 'app-home',
  imports: [CommonModule, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
