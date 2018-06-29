import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { StatemanagementService } from '../services/statemanagement.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as globalVar from '../global'; //<==== this one
import { Internship } from '../models/internship';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  private url = globalVar.global_trx + "/internship";  // URL to web api
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  private token: any;
  constructor(private httpClient: HttpClient, private stateService: StatemanagementService) { }

  uploadVideo(fileToUpload: File): Observable<string> {
    this.stateService.setTraffic(true);
    this.token = JSON.parse(localStorage.getItem('currentUser'));
    let _headers = new HttpHeaders().set('x-access-token', this.token.token);
    const formData: FormData = new FormData();

    formData.append('internshipFile', fileToUpload, fileToUpload.name);
    return this.httpClient.post<any>(this.url + '/upload', formData, { headers: _headers })
      .map(res => {
        if (res) {
          var str: string = String(res.filename);
          this.stateService.setTraffic(false);
          return str;
        }
        throw new Error('Not Found');
      });
  }

  postInternship(internship: Internship): Observable<Internship> {
    this.stateService.setTraffic(true);
    this.token = JSON.parse(localStorage.getItem('currentUser'));
    const headers = this._headers.append('x-access-token', this.token.token);
    console.log(internship);
    return this.httpClient.post<Internship>(this.url, internship, { headers: headers })
      .map(res => {
        if (res) {
          this.stateService.setTraffic(false);
          return res;
        }
        throw new Error('Not Found');
      });
  }

  getLastestInternship(projectCode: string, branchCode: string): Observable<Internship> {
    this.token = JSON.parse(localStorage.getItem('currentUser'));
    const headers = this._headers.append('x-access-token', this.token.token);

    return this.httpClient.get<Internship>(this.url + '/last?br=' + branchCode + '&prj=' + projectCode, { headers: headers })
      .map(res => {
        if (res[0]) {
          return res;
        }
        throw new Error('Not Found');
      });
  }
}
