import { FormApi, } from './displayform.api';
import { FormDetails } from "../../models/form/FormDetails";
import { FormData } from "../../models/form/FromData";

export class FormService implements FormApi {
  async getFormDetails(): Promise<FormDetails[]> {

    // return fetch('/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.mapProductQuery(query))
    // }).then(response => response.json())
    return [];
  }

  async doPostFormValues(details: FormData): Promise<FormData[]> {
    console.log("Save the Form Values" + details);

    return [];

  }
  async doUpdateFormValues(details: FormData): Promise<FormData[]> {

    console.log("Update the Form Values" + details);
    return [];

  }
}
