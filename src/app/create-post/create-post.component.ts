import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
import { TicketService } from '../Services/ticket.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  Ticket: Ticket=new Ticket();
  allTickets:any;
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }
  generateTicket(){
    console.log(this.Ticket);
    this.ticketService.addTicket(this.Ticket);
    this.allTickets= this.ticketService.Tickets;
    alert("ticket added");
  }
}
