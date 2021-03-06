import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})

export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

   constructor(private messageService: MessageService) {}

  

   onDelete() {
    this.messageService.deleteMessage(this.message)
        .subscribe(
            result => console.log(result)
        );
}

}