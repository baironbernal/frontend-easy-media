import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { PostResponse } from '../interfaces/post-response.interface';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  token: string = localStorage.getItem('token') || '';

  getPost(): Observable<PostResponse> {
    return this.http.get<PostResponse>(environment.base_url + '/posts', {
      headers: {
        'x-token': this.token
      }
    })
  }

  getMyPosts(userId: string): Observable<PostResponse> {
    
    return this.http.get<PostResponse>(environment.base_url + '/posts/' + userId, {
      headers: {
        'x-token': this.token
      }
    })
  }
}
