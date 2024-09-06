import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ContactInput = () => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [clickedElement, setClickedElement] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleClick = (element: string) => {
    setClickedElement(element);
    setTimeout(() => setClickedElement(null), 300); // Reset after 300ms
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        setMessage("");
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-x-4 justify-between px-5 pt-4 mb-5"
    >
      <div
        className={`flex justify-between items-center rounded-3xl border ${
          isFocused ? "border-Black_8" : "border-Gray"
        } px-4 w-full transition-colors duration-300`}
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Hi 👋, What do you need me to build?"
          className="text-Gray text-xs w-[90%] text-ellipsis py-3 outline-none bg-transparent resize-none overflow-hidden"
          rows={1}
        />
        <button
          title="microphone"
          type="button"
          className={`transition-opacity duration-300 hover:opacity-70 ${
            clickedElement === "microphone" ? "opacity-50" : ""
          }`}
          onClick={() => handleClick("microphone")}
        >
          <Image
            src="/icons/microphone.svg"
            alt="microphone"
            width={20}
            height={20}
          />
        </button>
      </div>
      <button
        title="send"
        type="submit"
        className={`bg-OraYel items-center justify-center rounded-3xl flex-shrink-0 p-[0.65rem] transition-opacity duration-300 hover:opacity-70 ${
          clickedElement === "send" ? "opacity-50" : ""
        }`}
        onClick={() => handleClick("send")}
      >
        <Image
          src="/icons/sen-message.svg"
          alt="Arrow Icon"
          width={20}
          height={20}
          className={`flex-shrink-0`}
          style={{ transformOrigin: "bottom right" }}
        />
      </button>
    </form>
  );
};

export default ContactInput;
