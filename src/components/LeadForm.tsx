"use client";

import { useState } from "react";

type LeadFormProps = {
  labels: {
    projectType: string;
    contact: string;
    details: string;
    contactPlaceholder: string;
    detailsPlaceholder: string;
    submit: string;
    submitLoading: string;
    privacyNote: string;
    success: string;
    error: string;
  };
  options: string[];
};

export function LeadForm({ labels, options }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSending, setIsSending] = useState(false);

  return (
    <form
      className="leadForm"
      onSubmit={async (event) => {
        event.preventDefault();
        if (isSending) {
          return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);
        setStatus("idle");
        setIsSending(true);

        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            projectType: formData.get("projectType"),
            contact: formData.get("contact"),
            details: formData.get("details"),
          }),
        }).catch(() => null);

        if (response?.ok) {
          setStatus("success");
          form.reset();
          setIsSending(false);
          return;
        }

        setStatus("error");
        setIsSending(false);
      }}
    >
      <label>
        <span>{labels.projectType}</span>
        <select name="projectType" required>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>{labels.contact}</span>
        <input
          name="contact"
          required
          minLength={3}
          maxLength={120}
          placeholder={labels.contactPlaceholder}
          autoComplete="off"
        />
      </label>

      <label>
        <span>{labels.details}</span>
        <textarea
          name="details"
          required
          minLength={15}
          maxLength={1000}
          rows={4}
          placeholder={labels.detailsPlaceholder}
        />
      </label>

      <button type="submit" disabled={isSending}>
        {isSending ? labels.submitLoading : labels.submit}
      </button>
      <p className="privacyNote">{labels.privacyNote}</p>

      {status === "success" ? <p className="status success">{labels.success}</p> : null}
      {status === "error" ? <p className="status error">{labels.error}</p> : null}
    </form>
  );
}
