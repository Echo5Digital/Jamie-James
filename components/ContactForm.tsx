'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
  showSuccessMessage?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  heading = 'Request a Consultation',
  subheading = "Ready to bring trauma-informed leadership and training to your organization? Reach out and we'll be in touch within one business day.",
  buttonLabel = 'Send Message',
  showSuccessMessage = true,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (data.name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }

    if (!data.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (data.phone && !/^[\d\s\-\+\(\)\.]{7,20}$/.test(data.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!data.message.trim()) {
      errs.message = 'Please share a bit about your needs or inquiry.';
    } else if (data.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters.';
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (onSubmit) {
        onSubmit(formData);
      }
      if (showSuccessMessage) {
        setSubmitted(true);
      }
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const inputBase =
    'w-full bg-background text-foreground font-body text-sm border border-[#C9B99A] rounded-[0.375rem] px-4 py-3 pl-11 placeholder:text-[#8A7E72] focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200';
  const inputError =
    'border-red-600 focus:ring-red-400 focus:border-red-600';
  const labelBase =
    'block font-body text-xs font-semibold uppercase tracking-widest text-primary mb-1.5';

  if (submitted) {
    return (
      <div className="bg-background rounded-[0.375rem] shadow-lg p-8 md:p-12 flex flex-col items-center text-center gap-5 border border-[#D9CCBA]">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-secondary" />
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary mb-2">
            Message Received
          </h3>
          <p className="font-body text-sm text-foreground/70 max-w-sm">
            Thank you for reaching out. We'll review your message and respond within one business day.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="mt-2 font-body text-xs font-bold uppercase tracking-widest text-secondary underline underline-offset-4 hover:text-primary transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-[0.375rem] shadow-lg border border-[#D9CCBA] overflow-hidden">
      {/* Header accent bar */}
      <div className="h-1.5 w-full bg-secondary" />

      <div className="p-8 md:p-12">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
            {heading}
          </h2>
          <p className="font-body text-sm text-foreground/70 leading-relaxed max-w-xl">
            {subheading}
          </p>
          <div className="mt-4 w-12 h-0.5 bg-accent" />
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelBase}>
              Full Name <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} ${errors.name ? inputError : ''}`}
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700 font-body">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelBase}>
              Email Address <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jane@organization.org"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} ${errors.email ? inputError : ''}`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700 font-body">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelBase}>
              Phone Number{' '}
              <span className="text-[#8A7E72] normal-case tracking-normal font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A7E72]" />
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} ${errors.phone ? inputError : ''}`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700 font-body">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelBase}>
              Your Message <span className="text-accent">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8A7E72]" />
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your organization, the challenges you're facing, and how we can support your team…"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBase} pt-3 pl-11 resize-none leading-relaxed ${errors.message ? inputError : ''}`}
              />
            </div>
            <div className="flex items-start justify-between mt-1.5">
              {errors.message ? (
                <p className="flex items-center gap-1.5 text-xs text-red-700 font-body">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.message}
                </p>
              ) : (
                <span />
              )}
              <span className="text-xs text-[#8A7E72] font-body ml-auto tabular-nums">
                {formData.message.length}/500
              </span>
            </div>
          </div>

          {/* Privacy note */}
          <p className="font-body text-xs text-foreground/50 leading-relaxed">
            Your information is kept strictly confidential and will never be shared with third parties.
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full flex items-center justify-center gap-2.5
              bg-accent text-primary
              font-body font-bold text-sm uppercase tracking-widest
              px-8 py-4
              rounded-[0.375rem]
              shadow-md hover:shadow-lg
              hover:bg-[#B8883F]
              active:scale-[0.98]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
            "
          >
            <Send className="w-4 h-4" />
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;