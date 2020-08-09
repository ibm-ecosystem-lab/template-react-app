import {FormApi,} from './displayform.api';
import { FormDetails } from "../../models/form/FormDetails";
import {ObjectFactory} from 'typescript-ioc';
import { FormData } from '../../models/form/FromData';

export const productMockFactory: ObjectFactory = () => {
  console.log('ProductMock factory');
  return new FormMock();
};

export class FormMock implements FormApi  {
  async getFormDetails():Promise<FormDetails[]> {
    return [
        { label: "Name", txtvalue: "John Doe", type: "textinput" ,dwvalue:[]},
        { label: "Address", txtvalue: "123 Main Street", type: "textinput",dwvalue:[] },
        { label: "City", txtvalue: "Anytown", type: "textinput",dwvalue:[] },
        { label: "State", dwvalue: ["TX"], type: "dropdown",txtvalue:"" },
        { label: "ZipCode", txtvalue: "12345", type: "textinput",dwvalue:[] },
        { label: "Country", dwvalue: ["United States"], type: "dropdown",txtvalue:""  }
    ];
  }
  async doPostFormValues(formdata: FormData): Promise<FormData[]> {
    throw new Error("Method not implemented.");
  }
  async doUpdateFormValues(formdata: FormData): Promise<FormData[]> {
    throw new Error("Method not implemented.");
  }
  
}
