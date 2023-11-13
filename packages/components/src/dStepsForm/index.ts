import { withInstall } from 'dcqc-utils';

import StepsForm from './src/stepsForm.vue';
import StepForm from './src/stepForm.vue';

export const DStepsForm = withInstall(StepsForm);
export default DStepsForm;

export const DStepForm = withInstall(StepForm);
