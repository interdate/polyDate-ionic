import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  messages: {dialogs: any , texts: any } = {
    dialogs: [],
    texts: [],
  };

  constructor() { }
}
