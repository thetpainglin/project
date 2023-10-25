import { Component } from '@angular/core';
import {faFacebook,faTwitter,faTelegram} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 faFacebook = faFacebook;
 faTwitch = faTwitter;
 fatelegram = faTelegram;
}
