import { Injectable } from '@angular/core';
import { Plot } from '../models/plot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlotService {

  plot:Plot = new Plot();
  submitted = false;
  plots: Plot[];
  private piatrikaUrl = 'http://localhost:3000/plots';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getPlotDetails (): Observable<Plot[]> {
    return this.http.get<Plot[]>(`${this.piatrikaUrl}/`)
  }

  getPlotdetail(id: number): Observable<Plot> {
    const url = `${this.piatrikaUrl}/${id}`;
    return this.http.get<Plot>(url);
  }

  addPlotDetail (plot: Plot): Observable<Plot> {
    return this.http.post<Plot>(`${this.piatrikaUrl}/`, plot, httpOptions);
  }
  deletePlotDetail (plot: Plot | number): Observable<Plot> {
    const id = typeof plot === 'number' ? plot : plot.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.delete<Plot>(url, httpOptions);
  }
  // updatePlotDetail (plot: Plot): Observable<any> {
  //   const id = typeof plot === 'number' ? plot : plot.id;

  //   return this.http.put(`${this.piatrikaUrl}/${id}/`, plot, httpOptions);
  // }
  updatePlotDetail (plot: Plot|number): Observable<number> {
    const id = typeof plot === 'number' ? plot : plot.id;
    const url = `${this.piatrikaUrl}/${id}`;

    return this.http.put<number>(url,plot,httpOptions);
  }}
