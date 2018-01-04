import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  constructor() {
  }

  add(message: string) {
    this.messages.push(message);
  }

  getLast() {
    if (this.messages.length === 0) {
      return "No Message";
    }else {
      return this.messages[this.messages.length - 1];
    }
  }

  clear() {
    this.messages = [];
  }

}
