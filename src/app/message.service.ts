import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  constructor() {
  }

  add(message: string) {
    this.messages.push(message);
  }

<<<<<<< HEAD
  getLast() {
    if (this.messages.length === 0) {
      return "No Message";
    }else {
      return this.messages[this.messages.length - 1];
    }
  }

=======
>>>>>>> 53ef24a74462c4cac87652c8bc07a22a5ce7aeab
  clear() {
    this.messages = [];
  }

}
