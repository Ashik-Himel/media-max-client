import axios from "axios";
import Swal from "sweetalert2";

const ContactSection = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const _subject = e.target._subject.value;
    const message = e.target.message.value;

    const document = {name, email, _subject, message};
    axios.post('https://formsubmit.co/ajax/c699e3699e9a0c4e9aa7ae85c64f252c', document)
    .then(res => {
      Swal.fire({
        title: "Message Sent!",
        text: "Your message sent successfully!",
        icon: "success"
      });
      e.target.reset();
      console.log(res.data);
    })
    .catch(error => console.log(error));
  }

  return (
    <section>
      <div className="container">
        <h2 className='text-title-color text-center text-[2rem] font-semibold mb-2 leading-tight'><span className="text-primary">Contact</span> Us</h2>
        <p className='max-w-[500px] mx-auto text-center mb-10'>You can contact with us via this form. We will reach you through email as soon as possible.</p>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="w-full max-w-[600px]" data-aos="fade-right">
            <iframe className="w-full h-[350px] md:h-[450px] rounded-lg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.604413036813!2d90.41058061479377!3d24.220630484359784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375677000bfba3a5%3A0xe2f31a006b02afaf!2sMedia%20Max%20(Authorised%20Distributor%20of%20Banglalink%20Digital%20Communications%20ltd.)!5e0!3m2!1sen!2sbd!4v1678726082039!5m2!1sen!2sbd"></iframe>
          </div>
          <form className="w-full max-w-[600px] [&>input]:text-black" onSubmit={handleSubmit} data-aos="fade-left">
            <label className="block font-medium mb-2" htmlFor="name">Your Name</label>
            <input className="w-full p-3 rounded-lg mb-5" type="text" name="name" id="name" placeholder="Enter your name" required />

            <label className="block font-medium mb-2" htmlFor="email">Your Email</label>
            <input className="w-full p-3 rounded-lg mb-5" type="email" name="email" id="email" placeholder="Enter your email" required />

            <label className="block font-medium mb-2" htmlFor="subject">Subject</label>
            <input className="w-full p-3 rounded-lg mb-5" type="text" name="_subject" id="subject" placeholder="Write the subject" required />
            <label className="block font-medium mb-2" htmlFor="message">Your Message</label>
            <textarea className="resize-none w-full h-[100px] p-3 rounded-lg mb-5 text-black" name="message" id="message" placeholder="Write your message" required></textarea>
            <button className="btn btn-primary" type="submit">Send Message</button>

            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;