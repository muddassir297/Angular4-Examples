import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
 postArray:Post[];
   postDataById:Post;
   flag: boolean;
  
 
  constructor(private _postService: PostService) {
    this.flag = false;
     this.postDataById = {
     id:0,
     title:'',
     body: ''
   }
   }
  
  ngOnInit() {
    //this._postService.getPosts().subscribe(res=>this.postArray = res);
  }

  getSpecificPost(pid:number){
    this.flag = !this.flag;
    this._postService.getSpecificPosts(pid).subscribe(res=>this.postDataById = res);
  }
}
