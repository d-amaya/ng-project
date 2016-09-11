import {CanDeactivate} from "@angular/router";
import {FormGroup} from "@angular/forms";


export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {
    canDeactivate(component: FormComponent, route, state) {
        if (component.hasUnsavedChanges()) {
            return confirm("Are you sure you want to leave this page?");
        }
        return true;
    }
}

export interface FormComponent {
    hasUnsavedChanges() : Boolean;
}