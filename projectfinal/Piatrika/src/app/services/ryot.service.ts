import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Ryot } from '../models/ryot';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RyotService {
  ryot:Ryot = new Ryot();
  submitted = false;
  ryots: Ryot[];
  private piatrikaUrl = 'http://localhost:3000/ryots';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getRyotDetails (): Observable<Ryot[]> {
    return this.http.get<Ryot[]>(`${this.piatrikaUrl}/`)
  }

  getRyotdetail(id: number): Observable<Ryot> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<Ryot>(url);
  }

  addRyotDetail (ryotDetail: Ryot): Observable<Ryot> {
    return this.http.post<Ryot>(`${this.piatrikaUrl}/`, ryotDetail, httpOptions);
  }
  deleteRyotDetail (ryot: Ryot | number): Observable<Ryot> {
    const id = typeof ryot === 'number' ? ryot : ryot.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Ryot>(url, httpOptions);
  }
  // updateRyotDetail (ryot: Ryot): Observable<any> {
  //   const id = typeof ryot === 'number' ? ryot : ryot.id;

  //   return this.http.put(`${this.piatrikaUrl}/${id}/`, ryot, httpOptions);
  // }
  updateRyotDetail (ryot: Ryot|number): Observable<number> {
    const id = typeof ryot === 'number' ? ryot : ryot.id;
    const url = `${this.piatrikaUrl}/${id}/`;

    return this.http.put<number>(url, ryot,httpOptions);
  }

}