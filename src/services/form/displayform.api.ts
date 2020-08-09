import { FormDetails } from "../../models/form/FormDetails";
import { FormData } from "../../models/form/FromData";
export abstract class FormApi {
  abstract  async  getFormDetails(): Promise<FormDetails[]> ;
  abstract  async  doPostFormValues(details:FormData):Promise<FormData[]> ;
  abstract  async  doUpdateFormValues(details:FormData):Promise<FormData[]> ;
}

