import React, { Component } from "react";
import FormViewComponent from "../../components/form/DisplayForm";
import ValidateForm from "../../components/form/ValidateForm";
import UpdatingForm from "../../components/form/UpdateForm";
import ValidateFormWizard1 from "../../components/form/ValidateFormWizard1";
import ValidateFormWizard2 from "../../components/form/ValidateFormWizard2";


class UIShellBody extends Component {
  components = {
    "Display Form": FormViewComponent,
    "Validating Form": ValidateForm,
    "Update Form": UpdatingForm,
    "Validating Form Wizard 1": ValidateFormWizard1,
    "Validating Form Wizard 2": ValidateFormWizard2 
  };
  defaultComponent = "Display Form";

  render() {
    const PatternName = this.components[
      this.props.patternName || this.defaultComponent
    ];
    return (
     
        <PatternName showDescription={true} />
   
    );
  }
}
export default UIShellBody;
