import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  generateTicket(){
    console.log(this.Ticket);
    this.ticketService.addTicket(this.Ticket);
    this.allTickets= this.ticketService.Tickets;
    alert("ticket added");
  }
}
