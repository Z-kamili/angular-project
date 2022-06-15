import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  post:any;
  postService;

  constructor(private route:ActivatedRoute) 
  {

    this.postService = new PostService();
    
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap)=>{

      this.id = params.get('id')

    })

    this.post = this.postService.getPostById(Number(this.id));

    console.log(this.post);

  }

}
