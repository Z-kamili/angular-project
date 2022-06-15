import { Injectable } from '@angular/core';
import { Post } from './Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[]=[];

  constructor() 
  {

    this.getPosts();

  }

  getPosts()
  {

    this.posts = [
  
      new Post(1,'subject','description','Zakaria kamili','safi'),
      new Post(2,'subject','description','Ahmed Mohammed','Marrakech'),
      new Post(3,'subject','description','hind sabri','Rabat'),
      new Post(4,'subject','description','kaouter ','tanger'),
      new Post(5,'subject','description','mili','japon'),
  
    ]
  
    return this.posts;
  }

  getPostById(id:number)
  {

    var result = this.posts.filter(obj=>{

      return obj.id === id

    })

    return result;

  }

}


