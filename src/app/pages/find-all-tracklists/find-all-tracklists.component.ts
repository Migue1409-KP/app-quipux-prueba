import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-find-all-tracklists',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './find-all-tracklists.component.html',
  styleUrls: ['./find-all-tracklists.component.css']
})
export class FindAllTrackListsComponent implements OnInit {
  trackLists: any[] = [];
  apiUrl = `${environment.apiUrl}lists`;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  ngOnInit() {
    this.loadTrackLists();
  }

  loadTrackLists() {
    const token = this.cookieService.get('token');
    this.http.get<{ status: string; message: string; data: any[] }>(this.apiUrl, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe(response => {
      // Transformar nombres para quitar los guiones bajos antes de enviarlo al HTML
      this.trackLists = response.data.map(track => ({
        ...track,
        nombre: track.nombre.replace(/_/g, ' '), // Mostrar sin guiones bajos
        nombreOriginal: track.nombre // Guardar el nombre original con guiones bajos para la petición DELETE
      }));
    });
  }

  deleteTrackList(track: any) {
    const token = this.cookieService.get('token');
    const encodedName = track.nombreOriginal;
    const deleteUrl = `${this.apiUrl}/${encodedName}`;

    if (confirm(`¿Estás seguro de que quieres eliminar la lista "${track.nombre}"?`)) {
      this.http.delete(deleteUrl, {
        headers: { Authorization: `Bearer ${token}` }
      }).subscribe(() => {
        alert(`Lista "${track.nombre}" eliminada con éxito`);
        this.trackLists = this.trackLists.filter(t => t.nombreOriginal !== track.nombreOriginal);
      }, error => {
        alert('Error al eliminar la lista');
      });
    }
  }
}