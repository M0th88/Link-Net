import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PlanesComponent } from './planes/planes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CarruselComponent,FooterComponent,CoberturasComponent,AboutmeComponent,PlanesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoLink-Net';
}
