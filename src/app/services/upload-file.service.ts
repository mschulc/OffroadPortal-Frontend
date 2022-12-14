import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  baseApiUrl = environment.apiUrl;
  path = environment.assetsUrl;

  constructor(private http:HttpClient) { }

  // Returns an observable
  upload(file: any, detailPath: string):Observable<any> {

      // Create form data
      const formData = new FormData();

      // Store form name as "file" with file data
      formData.append("file", file);
      formData.append("rootpath", this.path + detailPath);

      // Make http post request over api
      // with formData as req
      return this.http.post<string>(this.baseApiUrl + 'file', formData);

  }
}
