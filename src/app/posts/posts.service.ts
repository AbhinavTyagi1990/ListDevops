import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient){}

  getPosts() {
    this.httpClient.get('http://localhost:3000/posts');
  }
  getPostUpdate() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
