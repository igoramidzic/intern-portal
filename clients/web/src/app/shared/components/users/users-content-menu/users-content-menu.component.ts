import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-content-menu',
  templateUrl: './users-content-menu.component.html',
  styleUrls: ['./users-content-menu.component.scss']
})
export class UsersContentMenuComponent implements OnInit {

  links: { label: string, route: string }[] = [
    { label: 'Details', route: 'details' },
    { label: 'Team', route: 'team' },
  ]
  active: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.active = params.page;
    })
  }

  linkIsActive(route: string): boolean {
    if (!this.active && route == 'details')
      return true;
    return route == this.active
  }
}
