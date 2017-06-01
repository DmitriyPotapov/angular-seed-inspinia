import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { correctHeight, detectBody } from '../../../app.helpers';
declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'navigation-selector',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements AfterViewInit {

    constructor(private router: Router) { }

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
         // Correct height of wrapper after metisMenu animation.
    jQuery('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300);
    });
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}

