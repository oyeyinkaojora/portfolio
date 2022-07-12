import ContactMeForm from "./ContactMeForm";

function Contact() {
  return (
    <div id="contact" className="container  mx-auto w-2/3 mt-16 py-8 md:p-11">
      <h1 className="text-center text-3xl text-white">CONTACT</h1>
      <div>
         <ContactMeForm/>
      </div>
    </div>
  );
}

export default Contact;
