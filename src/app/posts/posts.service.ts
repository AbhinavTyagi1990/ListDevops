import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {}

  getPosts() {
      this.httpClient.get<{message: string, posts: any}>('http://localhost:3000/posts')
      .pipe(map((postData) =>{
        return postData.posts.map(post => {
          return{
            title: post.title,
            content: post.content,
            id: post._id
          }
        })
      }))
      .subscribe((transformData) => {
      this.posts = transformData;
      this.postUpdated.next([...this.posts]);
    });
  }
  getPostUpdate() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.httpClient
      .post<{ message: string }>("http://localhost:3000/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      });
  }

  deletePost(postId: string){
    this.httpClient
      .delete("http://localhost:3000/posts/"+ postId).subscribe(() =>{
      this.getPosts();
      });

  }
}
