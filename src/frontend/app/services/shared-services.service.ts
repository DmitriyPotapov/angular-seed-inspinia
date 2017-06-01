import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SharedServices {
    constructor(public toastr: ToastrService, public translate: TranslateService) { }
}
