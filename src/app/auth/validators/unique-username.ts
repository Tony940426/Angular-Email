import { AsyncValidator, FormControl } from "@angular/forms";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, catchError} from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class UniqueUsername implements AsyncValidator {
    validate = (control: FormControl) => {
        const {value} = control
        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value
        }).pipe(
            map((value) => {
                //if the response contains a error, it skips pipes wuch as .map
                if(value.available) {
                    return null;
                }
            }),
            catchError((err) => {
                if(err.error.message.username){
                    return of({ nonUniqueUsername: true});
                } else {
                    return of ({noNetworkConnection: true});
                }
            })
        )
    }
    constructor(private http: HttpClient){}
}
