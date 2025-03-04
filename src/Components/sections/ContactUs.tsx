import Title from "../Title";

const ContactUs = () => {
  return (
    <div data-aos="zoom-in" aos-duration="3000"
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <Title data-aos="fade-down-right" aos-duration="2000" title="Reach me Out" />
      </div>
      <form action="" className="p-3 flex flex-col w-96 gap-y-3">
        <input 
        data-aos="fade-up" aos-duration="2000" 
        type="text" className="font-Outfit rounded p-2 w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
        typeof="text"
        required
        name="name"
        id="name"
        placeholder="Please enter your name"/>
        <input 
        data-aos="fade-up" aos-duration="4000" 
        type="text" className="font-Outfit rounded p-2 w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
        typeof="text"
        required
        name="email"
        id="email"
        placeholder="Please enter your email"/>
        <input 
        data-aos="fade-up" aos-duration="6000" 
        type="text" className="font-Outfit rounded p-2 w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
        typeof="text"
        required
        name="Phone"
        id="Phone"
        placeholder="Please enter your phone"/>
        <textarea 
        data-aos="fade-up" aos-duration="8000" 
        type="text" className="font-Outfit rounded p-2 h-[100px] w-full bg-white/10 
        border border-white/30 transition focus:outline-none focus:border-amber-400
        focus:bg-white/40"
        typeof="text"
        required
        name="message"
        id="message"
        placeholder="Please enter your message"/>
      </form>
    </div>
  );
};

export default ContactUs;
