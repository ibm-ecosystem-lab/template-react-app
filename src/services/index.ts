import {Container} from 'typescript-ioc';

import {MockFormApi} from './form/displayform.mock.api';
import {FormMock} from './form/displayform.mock';

import {SearchFormMockApi} from './form/searchform.mock.api';
import {SearchFormMock} from './form/searchform.mock';

import {FormApi} from './form/forms.api';



import {FormService} from './form/forms.service';

export * from './form/displayform.mock.api';
export * from './form/displayform.mock';

export * from './form/searchform.mock.api';
export * from './form/searchform.mock';

export * from './form/forms.api';
export * from './form/forms.service';

Container.bind(MockFormApi).to(FormMock);
Container.bind(SearchFormMockApi).to(SearchFormMock);

Container.bind(FormApi).to(FormService);