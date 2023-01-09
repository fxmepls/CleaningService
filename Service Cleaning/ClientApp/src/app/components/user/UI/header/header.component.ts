import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../../../guards/auth.guard';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  isAdmin!: boolean;

  ngOnInit(): void {
    this.isAdmin = !this.authService.isAdmin;
  }

}
