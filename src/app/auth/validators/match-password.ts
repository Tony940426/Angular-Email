import { Validator, FormGroup } from '@angular/forms'

export class MatchPassword implements Validator{
    validate(formGroup: FormGroup){
        return { };
        
    }
}
