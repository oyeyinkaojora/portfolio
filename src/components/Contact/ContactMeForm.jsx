import styles from "../Hero/Hero.module.scss";

function ContactMeForm() {
  return (
    <form
      className="flex flex-col space-y-5 md:w-2/3 p-6 mx-auto"
      action="https://formsubmit.co/oyeyinkaojoro@gmail.com"
      method="post"
    >
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        className="input py-4 p-2 rounded-md "
        required
      />

      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        className="input py-4 p-2 rounded-md "
        required
      />

      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="subject"
        className="input py-4 p-2 rounded-md "
        required
      />

      <textarea
        id="message"
        name="message"
        className="rounded-md p-2"
        placeholder="message"
        rows="6"
        required
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
