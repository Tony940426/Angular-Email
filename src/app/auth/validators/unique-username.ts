import { AsyncValidator, FormControl } from "@angular/forms";
import { Injectable } from '@angular/core';
import { map, catchError} from 'rxjs/operators';
import { of } from 'rxjs'
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})

export class UniqueUsername implements AsyncValidator {
    constructor(private authService: AuthService){}

    validate = (control: FormControl) => {
        const { value } = control
        return this.authService.userNameAvailable(value)
        .pipe(
            map(value => {
                //if the response contains a error, it skips pipes such as .map
                if(value.available) {
                    return null;
                }
            }),
            catchError((err) => {
                if(err.error.username){
                    return of({ nonUniqueUsername: true});
                } else {
                    return of ({noNetworkConnection: true});
                }
            })
        )
    }
}
