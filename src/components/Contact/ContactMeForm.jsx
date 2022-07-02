import { useFormik } from "formik";
import styles from "../Hero/Hero.module.scss";

function ContactMeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      message: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      className="flex flex-col space-y-5 md:w-2/3 p-6 mx-auto"
      onSubmit={formik.handleSubmit}
    >
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        className="input py-4 p-2 rounded-md "
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        className="input py-4 p-2 rounded-md "
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="subject"
        className="input py-4 p-2 rounded-md "
        onChange={formik.handleChange}
        value={formik.values.subject}
      />

      <textarea
        id="message"
        name="message"
        className="rounded-md p-2"
        placeholder="message"
        rows="6"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

      <div>
        <button className={`${styles.projects} rounded-md px-3 py-3`}>
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactMeForm;
