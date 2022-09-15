import { object, string } from "yup";
import { withFormik } from "formik";

export const FormikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: object({
    email: string().email().required(),
    password: string().required(),
  }),

  handleSubmit: (values, { setSubmitting, props: { login } }) => {
    login({ values, setSubmitting });
  },
  displayName: "LoginForm",
});
