import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
Tickets:Array<Ticket>=[];
  constructor() { }
  addTicket(ticket:Ticket){
    let newTicket =  new Ticket();
    newTicket.Title = ticket.Title;
    newTicket.Description = ticket.Description;
    newTicket.Price = ticket.Price;
    this.Tickets.push(newTicket);
  }
}
