import React, { Component } from "react";
import {Container} from 'typescript-ioc';
import DisplayForm from '../../ui-patterns/form/DisplayForm';
import {FormApi} from '../../services';
class FormViewComponent extends Component<any ,any> {
  formApi: FormApi;
  constructor(props: any) {
    super(props);
    this.formApi =  this.formService();
  }
 formService(): FormApi {
    return Container.get(FormApi);
  }  

  render() {
  return (
    <div className="pattern-container">
      <DisplayForm  data={this.formApi} />
    </div>
  );
  }
}
export default FormViewComponent;