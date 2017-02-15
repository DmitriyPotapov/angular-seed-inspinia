import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent {
    toggleNavigation(): void {
        jQuery('body').toggleClass('mini-navbar');
        smoothlyMenu();
    }

}
