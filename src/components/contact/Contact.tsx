import React, { useRef, useState } from "react";
import img from "../../assets/contact/contact.jpg"
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

  const form = useRef(null);
  
  const [user_name, setUser_name] = useState<string>("");
  const [user_surname, setUser_surname] = useState<string>("");
  const [user_email, setUser_email] = useState<string>("");
  const [user_message, setUser_messae] = useState<string>("");
  const [user_check, setUser_check] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      form.current && emailjs.sendForm("service_rmnuqnh", "template_8znoxcc", form.current, "p_ajtlGEtZo5p2FsZ")
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
    finally {
      setUser_name("");
      setUser_surname("");
      setUser_email("");
      setUser_messae("");
      setUser_check(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-mygreen">
      <div className="sm:w-[100%] 2xl:w-9/12 flex flex-col-reverse md:flex-row m-10 rounded-2xl shadow-2xl">
        <div className="2xl:w-1/3 w-[100%] relative rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none">
          <img
            src={img}
            alt="Logo"
            className="w-[100%] h-[100%] object-cover absolute mix-blend-soft-light rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none"
          />
          <div className="px-8 py-4 sm:p-10">
            <p className="text-mypink text-xl text-justify font-bold tracking-widest leading-8 sm:py-[50%]">
              Do you have questions about the project or do you want to propose
              a collaboration? Contact me by filling out the form and I will
              reply as soon as possible. Warm greetings from Healthy Day!
            </p>
          </div>
        </div>
        <div className="2xl:w-2/3 w-[100%] bg-pink-100 rounded-t-2xl sm:rounded-r-2xl sm:rounded-l-none sm:py-20 pt-4 px-4">
          {!success && !error ? (
            <form onSubmit={handleSubmit} ref={form}>
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 mb-6">
                <input
                  value={user_name}
                  name="user_name"
                  onChange={(e) => setUser_name(e.target.value)}
                  placeholder="First Name"
                  type="text"
                  required
                  className="py-1 px-2 text-mygreen"
                />
                <input
                  value={user_surname}
                  name="user_surname"
                  onChange={(e) => setUser_surname(e.target.value)}
                  placeholder="Last Name"
                  type="text"
                  required
                  className="py-1 px-2 text-mygreen"
                />
              </div>
              <div className="flex flex-col mt-5 gap-4 mb-6">
                <input
                  value={user_email}
                  name="user_email"
                  onChange={(e) => setUser_email(e.target.value)}
                  placeholder="Email"
                  type="email"
                  required
                  className="w-full py-1 px-2 mb-6 text-mygreen"
                />
                <textarea
                  value={user_message}
                  name="user_message"
                  onChange={(e) => setUser_messae(e.target.value)}
                  placeholder="Enter your message ..."
                  required
                  maxLength={500}
                  className="py-1 px-2 h-48 resize-none text-mygreen"
                ></textarea>
              </div>
              <div className="mt-5 flex justify-center">
                <input
                  required
                  checked={user_check}
                  onChange={(e) => setUser_check(e.target.checked)}
                  type="checkbox"
                  name="check"
                  id="check"
                  className="mr-4"
                />
                <span>
                  {" "}
                  I accept the{" "}
                  <a className="text-mygreen font-semibold" href="">
                    terms of Use
                  </a>{" "}
                  &{" "}
                  <a className="text-mygreen font-semibold" href="">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-10 w-full flex justify-center">
                <button className="bg-mypink w-1/2 rounded-2xl py-2 my-4 text-xl sm:text-2xl font-bold tracking-wide text-mygreen">
                  Send
                </button>
              </div>
            </form>
          ) : success ? (
            <div
              onClick={() => setSuccess(false)}
              className="my-[50%] sm:mt-10 py-4 px-2 text-center bg-mypink shadow-xl font-bold tracking-wide text-mygreen rounded-lg text-xl sm:text-2xl cursor-pointer"
            >
              Sent successfully
            </div>
          ) : (
            <div
              onClick={() => setError(false)}
              className="my-[50%] sm:mt-10 py-4 text-center bg-red-300 shadow-xl font-bold tracking-wide text-mygreen rounded-lg text-xl sm:text-2xl cursor-pointer"
            >
              Error: Please try again
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;