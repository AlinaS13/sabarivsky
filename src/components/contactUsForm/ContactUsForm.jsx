import { Formik, Form, Field } from "formik";
import styles from "./ContactUsForm.module.scss";
import * as yup from "yup";
import { Report } from "notiflix/build/notiflix-report-aio";
const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Must be string")
    .required("Будь ласка введіть Ваше ім'я")
    .matches(/^[a-zA-Zа-яА-ЯІіЇї]+$/, "Не коректний формат імені")
    .min(1, "Ваше ім'я закоротке")
    .max(16, "Перевищено ліміт введених символів"),
  phone: yup
    .string()
    .typeError("Must be string")
    .trim()
    .required("Будь ласка введіть Ваш телефон")
    .min(10, "Ваш телефонний номер закороткий")
    .max(13, "Телефонний номер не повинен перевищувати 13 символів")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Не коректний формат номеру телефону "
    ),
});

export const ContactUsForm = ({ onClick }) => {
  const handleContactUs = (userData) => {
    const contasts = userData;
    console.log(contasts);
    Report.success(
      "Дякуємо за довіру!",
      "Очікуйте дзвінка від наших фахівців",
      "Ok",
      {
        className: "notiflix-report",
        svgSize: "32px",
        borderRadius: "8px",
        messageMaxLength: 1923,
        plainText: false,
        backgroundColor: "#000000",
        position: "center",
        backOverlayClickToClose: true,
        success: {
          svgColor: "#DFFF00",
          titleColor: "#ffffff",
          messageColor: "#ffffff",
          buttonColor: "#000000",
          buttonBackground: "#DFFF00",
          backOverlayColor: "rgba(50,198,130,0.2)",
          rtl: false,
        },
      }
    );
    onClick();
  };
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        name: "",
        phone: "",
      }}
      validateOnBlur
      onSubmit={(userData) => handleContactUs(userData)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => {
        return (
          <Form className={styles.contactUsForm}>
            <div className={styles.contactUscontactUsFieldWrp}>
              <label className={styles.contactUsLabel}>
                <Field
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Ваше ім’я"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={`${styles.contactUsField} ${
                    errors.name && touched.name ? styles.error : ""
                  } ${!errors.name && touched.name ? styles.success : ""}`}
                />
                {touched.name && errors.name && (
                  <p className={styles.errorMessage}>{errors.name}</p>
                )}
              </label>
              <label className={styles.contactUsLabel}>
                <Field
                  autoComplete="off"
                  name="phone"
                  type="phone"
                  placeholder="Номер телефону"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className={styles.contactUsField}
                />
                {touched.phone && errors.phone && (
                  <p className={styles.errorMessage}>{errors.phone}</p>
                )}
              </label>
            </div>
            <button
              type="submit"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              className={styles.contactUsSubmitBtn}
            >
              Надіслати
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
