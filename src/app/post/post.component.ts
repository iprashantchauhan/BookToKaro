import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  expandImg:any;
  imgText:any;
  constructor() { }

  ngOnInit(): void {
  }
  myFunction(imgs:any) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    this.expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    this.imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    this.expandImg.parentElement.style.display = "block";
  }
}
