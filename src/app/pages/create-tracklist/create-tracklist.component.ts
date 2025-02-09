import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-create-tracklist',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './create-tracklist.component.html',
  styleUrls: ['./create-tracklist.component.css'],
  providers: [CookieService]
})
export class CreateTrackListComponent {
  name: string | null = null;
  description: string | null = null;
  newSong = { titulo: null, artista: null, album: null, anno: null, genero: null };
  canciones: any[] = [];
  apiUrl = 'http://localhost:8080/api/v1/lists';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  addSong() {
    if (this.newSong.titulo && this.newSong.artista && this.newSong.album && this.newSong.anno && this.newSong.genero) {
      this.canciones.push({ ...this.newSong });
      this.newSong = { titulo: null, artista: null, album: null, anno: null, genero: null };
    }
  }

  removeSong(song: any) {
    this.canciones = this.canciones.filter(s => s !== song);
  }

  createTrackList() {
    const body = {
      nombre: this.name,
      descripcion: this.description,
      canciones: this.canciones.length > 0 ? this.canciones : [{ titulo: null, artista: null, album: null, anno: null, genero: null }]
    };

    const token = this.cookieService.get('token');
    if (!token) {
      alert('Error: No se encontró el token de autenticación.');
      return;
    }

    console.log('Token obtenido de la cookie:', token);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    this.http.post(this.apiUrl, body, { headers }).subscribe(response => {
      alert('Lista creada con éxito');
      this.name = null;
      this.description = null;
      this.canciones = [];
    }, error => {
      alert('Error al crear la lista');
    });
  }
}