import { CommonModule } from '@angular/common';
import { Component, HostListener,OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isSticky: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
    this.isSticky = window.pageYOffset > navbarHeight;
  }
}
