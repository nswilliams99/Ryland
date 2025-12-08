"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { townGroups } from "@/lib/towns";
import { findNearbyHoliday, getDayName, getNextPickupDay, formatDate, getNextRegularPickup } from "@/lib/holidays";

type IssueType = "broken" | "missing" | "missed" | "stinks" | null;
type Step = "main" | "form" | "holiday-check" | "cart-out-check" | "return-options" | "success" | "tips";

type MissedStep = "bill" | "date" | "holiday" | "details";

interface FormData {
  issueType: IssueType;
  brokenParts: string[];
  cartSize: string;
  isRecurring: string;
  explanation: string;
  photos: File[];
  name: string;
  address: string;
  email: string;
  phone: string;
  town: string;
  preferredContact: string[];
  pickupDate: string;
  serviceType: string;
  blockingAccess: string;
  blockingOther: string;
  billCurrent: string;
  cartOutOnTime: string;
  cartOutDelayed: string;
  missedStep: MissedStep;
}

const initialFormData: FormData = {
  issueType: null,
  brokenParts: [],
  cartSize: "",
  isRecurring: "",
  explanation: "",
  photos: [],
  name: "",
  address: "",
  email: "",
  phone: "",
  town: "",
  preferredContact: [],
  pickupDate: "",
  serviceType: "",
  blockingAccess: "",
  blockingOther: "",
  billCurrent: "",
  cartOutOnTime: "",
  cartOutDelayed: "",
  missedStep: "bill",
};

export default function HelpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [issueType, setIssueType] = useState<IssueType>(null);
  const [step, setStep] = useState<Step>("main");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [holidayInfo, setHolidayInfo] = useState<ReturnType<typeof findNearbyHoliday>>(null);
  const [stepHistory, setStepHistory] = useState<Step[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
    resetModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    resetModal();
  };

  const resetModal = () => {
    setIssueType(null);
    setStep("main");
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitting(false);
    setReferenceNumber("");
    setHolidayInfo(null);
    setStepHistory([]);
  };

  const goToStep = (newStep: Step) => {
    setStepHistory([...stepHistory, step]);
    setStep(newStep);
  };

  const goBack = () => {
    if (stepHistory.length > 0) {
      const prevStep = stepHistory[stepHistory.length - 1];
      setStepHistory(stepHistory.slice(0, -1));
      setStep(prevStep);
    } else if (issueType) {
      setIssueType(null);
      setStep("main");
    }
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const parts = [match[1], match[2], match[3]].filter(Boolean);
      if (parts.length === 0) return "";
      if (parts.length === 1) return `(${parts[0]}`;
      if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`;
      return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
    }
    return value;
  };

  const updateFormData = (field: keyof FormData, value: string | string[] | File[]) => {
    if (field === "phone" && typeof value === "string") {
      value = formatPhoneNumber(value);
    }
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const toggleArrayField = (field: "brokenParts" | "preferredContact", value: string) => {
    const current = formData[field];
    if (current.includes(value)) {
      updateFormData(field, current.filter((v) => v !== value));
    } else {
      updateFormData(field, [...current, value]);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    updateFormData("photos", [...formData.photos, ...files]);
  };

  const removePhoto = (index: number) => {
    updateFormData("photos", formData.photos.filter((_, i) => i !== index));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.town) {
      newErrors.town = "Please select your town";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/help-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          issueType,
          photos: formData.photos.map((f) => f.name),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setReferenceNumber(data.referenceNumber);
        setStep("success");
      } else {
        alert("Something went wrong. Please call us at (229) 382-4411.");
      }
    } catch {
      alert("Something went wrong. Please call us at (229) 382-4411.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectIssue = (type: IssueType) => {
    setIssueType(type);
    setFormData({ ...formData, issueType: type });
    if (type === "stinks") {
      goToStep("tips");
    } else if (type === "missed") {
      goToStep("form");
    } else {
      goToStep("form");
    }
  };

  const checkHoliday = () => {
    if (!formData.pickupDate) return;
    const selectedDate = new Date(formData.pickupDate);
    const holiday = findNearbyHoliday(selectedDate);
    setHolidayInfo(holiday);
    setFormData(prev => ({ ...prev, missedStep: "holiday" }));
    goToStep("holiday-check");
  };

  const renderMainOptions = () => (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-gray-900 mb-4">How can we help?</h2>
      <button
        onClick={() => selectIssue("broken")}
        className="w-full text-left p-4 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-colors"
      >
        <span className="font-medium text-gray-900">My cart is broken</span>
      </button>
      <button
        onClick={() => selectIssue("missing")}
        className="w-full text-left p-4 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-colors"
      >
        <span className="font-medium text-gray-900">My cart is missing or destroyed</span>
      </button>
      <button
        onClick={() => selectIssue("missed")}
        className="w-full text-left p-4 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-colors"
      >
        <span className="font-medium text-gray-900">My trash didn't get picked up</span>
      </button>
      <button
        onClick={() => selectIssue("stinks")}
        className="w-full text-left p-4 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-colors"
      >
        <span className="font-medium text-gray-900">My cart stinks</span>
      </button>
    </div>
  );

  const renderTips = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Cart Cleaning Tips</h2>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-primary-600 font-bold">1.</span>
          <span>Always bag your trash before putting it in the cart</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary-600 font-bold">2.</span>
          <span>Rinse inside with a garden hose</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary-600 font-bold">3.</span>
          <span>Spray with 1:10 bleach-water mix (1 part bleach, 10 parts water)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary-600 font-bold">4.</span>
          <span>Let dry in sun with lid open</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary-600 font-bold">5.</span>
          <span>Sprinkle baking soda in bottom between cleanings</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary-600 font-bold">6.</span>
          <span>For best results, clean monthly during summer</span>
        </li>
      </ul>
      <button
        onClick={closeModal}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mt-4"
      >
        Got it!
      </button>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
        <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900">Request Submitted!</h2>
      <p className="text-gray-600">
        Your request <span className="font-bold text-primary-600">#{referenceNumber}</span> has been submitted.
      </p>
      <p className="text-gray-600">We'll contact you within 1 business day.</p>
      <button
        onClick={closeModal}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mt-4"
      >
        Close
      </button>
    </div>
  );

  const renderFormFields = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          className={`w-full border rounded-lg px-4 py-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => updateFormData("address", e.target.value)}
          className={`w-full border rounded-lg px-4 py-2 ${errors.address ? "border-red-500" : "border-gray-300"}`}
          placeholder="Your address"
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
          className={`w-full border rounded-lg px-4 py-2 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          placeholder="(xxx) xxx-xxxx"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Town <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.town}
          onChange={(e) => updateFormData("town", e.target.value)}
          className={`w-full border rounded-lg px-4 py-2 ${errors.town ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="">Select your town...</option>
          {townGroups.map((group) => (
            <optgroup key={group.area} label={group.area}>
              {group.towns.map((town) => (
                <option key={town} value={town}>
                  {town}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {errors.town && <p className="text-red-500 text-sm mt-1">{errors.town}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
        <div className="flex gap-4">
          {["Email", "Phone", "Text"].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.preferredContact.includes(method)}
                onChange={() => toggleArrayField("preferredContact", method)}
                className="rounded border-gray-300 text-primary-600"
              />
              <span className="text-sm text-gray-700">{method}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBrokenCartForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Cart is Broken</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What's broken? (Select all that apply)</label>
        <div className="space-y-2">
          {["Wheels", "Cart body", "Lid"].map((part) => (
            <label key={part} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.brokenParts.includes(part)}
                onChange={() => toggleArrayField("brokenParts", part)}
                className="rounded border-gray-300 text-primary-600"
              />
              <span className="text-gray-700">{part}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos (optional)</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handlePhotoUpload}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        {formData.photos.length > 0 && (
          <div className="mt-2 space-y-1">
            {formData.photos.map((photo, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                <span className="text-sm text-gray-600 truncate">{photo.name}</span>
                <button onClick={() => removePhoto(i)} className="text-red-500 text-sm">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What size cart do you have?</label>
        <div className="flex gap-4">
          {["64-gallon", "96-gallon", "Not sure"].map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="radio"
                name="cartSize"
                value={size}
                checked={formData.cartSize === size}
                onChange={(e) => updateFormData("cartSize", e.target.value)}
                className="border-gray-300 text-primary-600"
              />
              <span className="text-gray-700">{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Is this a recurring issue?</label>
        <div className="flex gap-4">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="isRecurring"
                value={option}
                checked={formData.isRecurring === option}
                onChange={(e) => updateFormData("isRecurring", e.target.value)}
                className="border-gray-300 text-primary-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {renderFormFields()}

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </div>
  );

  const renderMissingCartForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Cart Missing or Destroyed</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Please explain what happened</label>
        <textarea
          value={formData.explanation}
          onChange={(e) => updateFormData("explanation", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24"
          placeholder="Describe what happened to your cart..."
        />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-800 text-sm">
          <strong>Note:</strong> Replacement carts may incur a fee if damaged due to misuse or negligence.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos (optional)</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handlePhotoUpload}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        {formData.photos.length > 0 && (
          <div className="mt-2 space-y-1">
            {formData.photos.map((photo, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                <span className="text-sm text-gray-600 truncate">{photo.name}</span>
                <button onClick={() => removePhoto(i)} className="text-red-500 text-sm">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What size cart do you need?</label>
        <div className="flex gap-4">
          {["64-gallon", "96-gallon"].map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="radio"
                name="cartSize"
                value={size}
                checked={formData.cartSize === size}
                onChange={(e) => updateFormData("cartSize", e.target.value)}
                className="border-gray-300 text-primary-600"
              />
              <span className="text-gray-700">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {renderFormFields()}

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </div>
  );

  const handleBillAnswer = (answer: string) => {
    setFormData({ ...formData, billCurrent: answer, missedStep: answer === "Yes" ? "date" : "bill" });
  };

  const renderMissedPickupForm = () => {
    if (formData.missedStep === "bill") {
      if (formData.billCurrent === "No") {
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Account Past Due</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800">Your service may be suspended due to a past-due balance.</p>
            </div>
            <Link
              href="/pay-my-bill"
              onClick={closeModal}
              className="block w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
            >
              Pay My Bill
            </Link>
          </div>
        );
      }
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Missed Pickup</h2>
          <p className="text-gray-700">Are you current on your trash bill?</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleBillAnswer("Yes")}
              className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => handleBillAnswer("No")}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      );
    }

    if (formData.missedStep === "date") {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Missed Pickup</h2>
          <p className="text-gray-700">What day was your scheduled pickup?</p>
          <input
            type="date"
            value={formData.pickupDate}
            onChange={(e) => updateFormData("pickupDate", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          <button
            onClick={checkHoliday}
            disabled={!formData.pickupDate}
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400"
          >
            Continue
          </button>
        </div>
      );
    }

    return renderMissedPickupDetails();
  };

  const renderMissedPickupDetails = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Report Missed Pickup</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What type of service was missed?</label>
        <div className="flex gap-4">
          {["Trash", "Recycling", "Yard waste"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="serviceType"
                value={type}
                checked={formData.serviceType === type}
                onChange={(e) => updateFormData("serviceType", e.target.value)}
                className="border-gray-300 text-primary-600"
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Was anything blocking access to your cart?</label>
        <select
          value={formData.blockingAccess}
          onChange={(e) => updateFormData("blockingAccess", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="">Select...</option>
          <option value="No">No</option>
          <option value="Parked car">Parked car</option>
          <option value="Construction">Construction</option>
          <option value="Other">Other</option>
        </select>
        {formData.blockingAccess === "Other" && (
          <input
            type="text"
            value={formData.blockingOther}
            onChange={(e) => updateFormData("blockingOther", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2"
            placeholder="Please describe..."
          />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Is this a recurring issue?</label>
        <div className="flex gap-4">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="isRecurring"
                value={option}
                checked={formData.isRecurring === option}
                onChange={(e) => updateFormData("isRecurring", e.target.value)}
                className="border-gray-300 text-primary-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {renderFormFields()}

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </div>
  );

  const renderHolidayCheck = () => {
    if (!holidayInfo) {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pickup Check</h2>
          <p className="text-gray-700">Was your cart at the curb by 6:30 AM?</p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                updateFormData("cartOutOnTime", "Yes");
                goToStep("form");
              }}
              className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => {
                updateFormData("cartOutOnTime", "No");
                goToStep("return-options");
              }}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      );
    }

    if (holidayInfo.delaysPickup) {
      const selectedDate = new Date(formData.pickupDate);
      const dayName = getDayName(selectedDate);
      const nextDay = getNextPickupDay(dayName);

      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Holiday Delay</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              Pickup was delayed one day after <strong>{holidayInfo.name}</strong>. If your normal day was{" "}
              <strong>{dayName}</strong>, your pickup moved to <strong>{nextDay}</strong>.
            </p>
          </div>
          <p className="text-gray-700">Did you put your cart out on the correct delayed day?</p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                updateFormData("cartOutDelayed", "Yes");
                goToStep("form");
              }}
              className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => {
                updateFormData("cartOutDelayed", "No");
                goToStep("return-options");
              }}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Normal Schedule</h2>
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
          <p className="text-primary-800">
            We operated on a normal schedule for <strong>{holidayInfo.name}</strong>.
          </p>
        </div>
        <p className="text-gray-700">Did you have your cart out by 6:30 AM?</p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              updateFormData("cartOutOnTime", "Yes");
              goToStep("form");
            }}
            className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Yes
          </button>
          <button
            onClick={() => {
              updateFormData("cartOutOnTime", "No");
              goToStep("return-options");
            }}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            No
          </button>
        </div>
      </div>
    );
  };

  const renderReturnOptions = () => {
    const selectedDate = new Date(formData.pickupDate);
    const nextPickup = getNextRegularPickup(selectedDate.getDay());

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Return Trip Options</h2>
        <p className="text-gray-700">
          That's likely why your trash wasn't picked up. Your next regular pickup will be{" "}
          <strong>{formatDate(nextPickup)}</strong>.
        </p>
        <p className="text-gray-700">Would you like us to return this week for a $25 fee?</p>
        <div className="space-y-3">
          <button
            onClick={() => goToStep("form")}
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Pay $25 for Return Trip
          </button>
          <button
            onClick={closeModal}
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Wait Until Next Week
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (step === "success") return renderSuccess();
    if (step === "tips") return renderTips();
    if (step === "holiday-check") return renderHolidayCheck();
    if (step === "return-options") return renderReturnOptions();

    if (!issueType) return renderMainOptions();

    if (issueType === "broken") return renderBrokenCartForm();
    if (issueType === "missing") return renderMissingCartForm();
    if (issueType === "missed") return renderMissedPickupForm();

    return renderMainOptions();
  };

  const showBackButton = step !== "main" && step !== "success";

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 bg-primary-600 text-white px-6 py-3 rounded-full shadow-xl hover:bg-primary-700 transition-colors z-40 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Need Help?
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              {showBackButton && (
                <button onClick={goBack} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <span className="flex-1" />
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">{renderContent()}</div>
          </div>
        </div>
      )}
    </>
  );
}
