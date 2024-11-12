import { ref, reactive, toRefs } from 'vue';

interface Rule {
  (value: any): boolean | string;
}

interface ValidationRule {
  [key: string]: Rule | Rule[];
}

export function useFormValidation(initialValues: Record<string, any>, rules: ValidationRule) {
  const formData = reactive(initialValues);
  const errors = ref<Record<string, string[]>>({});
  const isValid = ref(true);

  const validateField = (field: string) => {
    let fieldErrors: string[] = [];
    const fieldRules = rules[field];
    if (fieldRules) {
      (Array.isArray(fieldRules) ? fieldRules : [fieldRules]).forEach(rule => {
        const error = rule(formData[field]);
        if (error) {
          fieldErrors.push(typeof error === 'string' ? error : 'valid input');
        }
      });
      errors.value[field] = fieldErrors;
      if (fieldErrors.length > 0) {
        isValid.value = false;
      } else {
        isValid.value = true;
      }
    }
  };

  const validateForm = () => {
    isValid.value = true;
    Object.keys(rules).forEach(field => {
      validateField(field);
    });
  };

  const resetForm = () => {
    Object.keys(formData).forEach(key => {
      formData[key] = initialValues[key];
    });
    errors.value = {};
    isValid.value = true;
  };

  return { ...toRefs(formData), errors, isValid, validateForm, resetForm };
}