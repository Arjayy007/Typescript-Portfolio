import React from "react";

const Contacts = () => {
  const [result, setResult] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData();
    formData.append("access_key", "8e0e3202-830f-41ea-ba63-5160d8d556be");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full max-w-2xl mx-auto p-10 mt-32 mb-32">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 text-center">
        Contact Me
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-lg font-semibold text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-6 py-3 text-lg border border-gray-300 focus:border-black outline-none transition-colors rounded-lg bg-white text-black"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg font-semibold text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-3 text-lg border border-gray-300 focus:border-black outline-none transition-colors rounded-lg bg-white text-black"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-lg font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-6 py-3 text-lg border border-gray-300 focus:border-black outline-none transition-colors rounded-lg resize-none bg-white text-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 text-lg bg-black text-white hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-lg"
        >
          Submit
        </button>
      </form>

      {result && (
        <div className="mt-6 p-6 text-lg border border-gray-300 bg-white text-black rounded-lg">
          {result}
        </div>
      )}
    </div>
  );
};

export default Contacts;
