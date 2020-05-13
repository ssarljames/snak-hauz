import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { OrderService } from 'src/app/services/order/order.service';

interface Link{
  displayName: string;
  url: string;
  exact?: boolean;
}

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.scss']
})
export class GuestPageComponent implements OnInit {

  is_dark_mode: boolean;

  @ViewChild('sidenav') sidenav: MatSidenav;

  isHandset: boolean;

  links: Link[] = [
    {
      displayName: 'Home',
      url: '',
      exact: true
    },
    {
      displayName: 'My Orders',
      url: '/orders',
      exact: true
    }
  ];

  orderedMealsCount: number = 0;

  constructor(private matDialog: MatDialog,
              private breakpointObserver: BreakpointObserver,
              private themeService: ThemeService,
              private orderService: OrderService) {

    breakpointObserver.observe(Breakpoints.XSmall).subscribe( result => {
      this.isHandset = result.matches;

      if(this.isHandset == false && this.sidenav)
        this.sidenav.close();
    });


    this.is_dark_mode = this.themeService.currentTheme.isDark
  }

  ngOnInit(): void {
    this.orderService.getOrderedMealsCount().subscribe( n => this.orderedMealsCount = n);
    this.orderService.updateActiveOrderedMeals();
  }

  signIn(): void{
    
  }

  openNav(): void{
    if(this.isHandset)
      this.sidenav.open();
  }

  closeNav(): void{
    if(this.isHandset)
      this.sidenav.close();
  }
  
  toggleDarkMode(): void{

    this.is_dark_mode = !this.is_dark_mode;

    this.is_dark_mode
      ? this.themeService.setDarkTheme()
      : this.themeService.setLightTheme();
  }

}
