import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SelfService } from 'src/app/services/self/self.service';

@Injectable()
export class SelfResolver implements Resolve<any> {
    constructor(private selfService: SelfService) { }

    resolve() {
        return this.selfService.getSelf()
            .catch(() => { })
    }
}