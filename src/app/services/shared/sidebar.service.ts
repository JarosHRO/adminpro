import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'dashboard', url: '/dashboard'},
        { title: 'progressBar', url: '/progress'},
        { title: 'graphics', url: '/graphics1'}
      ]
    }
  ];

  constructor() { }
}
