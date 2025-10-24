// src/modules/waitlist/form/EmailInputForm.tsx
import { useState } from "react";
import { supabase } from "../../../core/lib/supabaseClient";
import { toast } from "sonner";

interface EmailInputFormProps {
  onSuccess: (email: string) => void;
}

const EmailInputForm = ({ onSuccess }: EmailInputFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        toast.error("This email is already on the list!");
      } else {
        toast.error("There was a problem. Please try again.");
      }
    } else {
      toast.success("You're on the list!");
      onSuccess(email);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-6 py-4 bg-neutral-50 border border-neutral-200 rounded-full text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all duration-300"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
          isSubmitting
            ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
            : "bg-neutral-900 text-white hover:bg-neutral-800"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Reserve Your Spot"}
      </button>
    </form>
  );
};

export default EmailInputForm;
