import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  apiUrl: string = 'http://localhost:8080/api/v1/users/login';

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/create-tracklist']);
    }
  }

  login() {
    const body = { email: this.email, password: this.password };

    this.http.post<{ status: string, message: string, data: string }>(this.apiUrl, body).subscribe(
      (response) => {
        if (response.data) {
          this.setToken(response.data, 10);
          this.router.navigate(['/create-tracklist']);
        }
      },
      (error) => {
        this.errorMessage = 'Credenciales incorrectas. Verifica tu email y contraseña.';
      }
    );
  }

  private setToken(token: string, hours: number) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + hours * 60 * 60 * 1000);
    this.cookieService.set('token', token, expirationDate, '/', '', true, 'Strict'); 
  }

  private getToken(): string | null {
    return this.cookieService.get('token') || null;
  }
}