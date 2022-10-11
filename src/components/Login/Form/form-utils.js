import { object, string } from "yup";
import { withFormik } from "formik";

export const FormikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: object({
    email: string().email().required().matches('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?(adaa.gov.sa)$','Only Adaa registered emails allowed'),
    password: string().required(),
  }),

  handleSubmit: (values, { setSubmitting, props: { login } }) => {
    login({ values, setSubmitting });
  },
  displayName: "LoginForm",
});
