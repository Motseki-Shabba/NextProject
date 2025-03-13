"use client";
import React, { useState, useEffect } from "react";
import {
  useClientState,
  useClientActions,
} from "@/app/Providers/CreateClient/provider";
import {
  useUserState,
  useUserActions,
} from "@/app//Providers/CurrentUser/provider";

const CreateClientForm: React.FC = () => {
  const { isPending, isSuccess, isError, message } = useClientState();
  const { createClient } = useClientActions();
  const userState = useUserState();
  const { getCurrentUser } = useUserActions();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    sex: "male",
    dateOfBirth: "",
    activeState: true,
    trainerId: userState.user?.id || "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    dateOfBirth: "",
  });

  // Load user data when component mounts
  useEffect(() => {
    if (!userState.user) {
      getCurrentUser();
    }
  }, []);

  // Reset form after successful submission
  useEffect(() => {
    if (isSuccess) {
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        sex: "male",
        dateOfBirth: "",
        activeState: true,
        trainerId: userState.user?.id || "",
      });
    }
  }, [isSuccess]);

  const validateForm = () => {
    let valid = true;
    const errors = {
      fullName: "",
      email: "",
      contactNumber: "",
      dateOfBirth: "",
    };

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
      valid = false;
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Ensure we have a trainer ID
    if (!userState.user?.id) {
      alert(
        "Trainer information is missing. Please make sure you're logged in."
      );
      return;
    }

    // Prepare the client data with the trainer ID
    const clientData = {
      ...formData,
      trainerId: userState.user.id,
    };

    await createClient(clientData);
  };

  // If user data is still loading, show a loading indicator
  if (userState.isPending) {
    return (
      <div className="flex justify-center p-8">Loading trainer data...</div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Client
      </h2>

      {isSuccess && (
        <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
          {message || "Client created successfully!"}
        </div>
      )}

      {isError && (
        <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {message || "Failed to create client. Please try again."}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-1"
          >
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              formErrors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
          />
          {formErrors.fullName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 font-medium mb-1"
          >
            Contact Number*
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              formErrors.contactNumber ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="(123) 456-7890"
          />
          {formErrors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.contactNumber}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="sex" className="block text-gray-700 font-medium mb-1">
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-gray-700 font-medium mb-1"
          >
            Date of Birth*
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              formErrors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formErrors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.dateOfBirth}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="activeState"
              checked={formData.activeState}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700">Active Client</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-2 px-4 rounded-md font-medium text-white ${
            isPending
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isPending ? "Creating..." : "Create Client"}
        </button>
      </form>
    </div>
  );
};

export default CreateClientForm;
