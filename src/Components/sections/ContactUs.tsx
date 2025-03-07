import { useState } from "react";
import Title from "../Title";
import emailjs from "emailjs-com";
import { Images } from "../../images/Image";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
      );
      console.log(res);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };
  return (
    <div
      data-aos="zoom-in"
      aos-duration="3000"
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <Title
          data-aos="fade-down-right"
          aos-duration="2000"
          title="Reach me Out"
        />
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="p-3 flex flex-col w-96 gap-y-3"
      >
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          data-aos="fade-up"
          aos-duration="2000"
          type="text"
          className="font-Outfit rounded p-2 w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
          typeof="text"
          required
          name="name"
          id="name"
          placeholder="Please enter your name"
        />
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          data-aos="fade-up"
          aos-duration="4000"
          type="text"
          className="font-Outfit rounded p-2 w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
          typeof="text"
          required
          name="email"
          id="email"
          placeholder="Please enter your email"
        />
        <input
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
          data-aos="fade-up"
          aos-duration="6000"
          type="text"
          className="font-Outfit rounded p-2 w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
          typeof="text"
          required
          name="phone"
          id="phone"
          placeholder="Please enter your phone"
        />
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
          data-aos="fade-up"
          aos-duration="8000"
          className="font-Outfit rounded p-2 h-[100px] w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
          typeof="text"
          required
          name="message"
          id="message"
          placeholder="Please enter your message"
        />

        <button
          type="submit"
          className="relative border-amber-400 border-2 font-Outfit text-amber-400 py-3 px-6 rounded font-medium overflow-hidden
          duration-400 hover:translate-y-1 hover:shadow-[0_0_25px_rgba(255,165,0,0.7)] cursor-pointer
          hover:border-amber-500 hover:text-amber-500"
        >
          Send Me a Message{" "}
          {isLoading ? (
            <img
              className="w-8 absolute top-2.5 right-14"
              src={Images.Spinner}
            />
          ) : (
            ""
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
