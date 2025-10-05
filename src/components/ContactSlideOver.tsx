import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Upload, Send } from 'lucide-react';
import { ContactForm } from '../types';

interface ContactSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactSlideOver: React.FC<ContactSlideOverProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budgetRange: '',
    targetStart: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form onSubmit={handleSubmit} className="flex h-full flex-col bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-montserrat font-bold text-[var(--dy-red-700)]">
                          Request a Quote
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <X className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Company
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Phone *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Project Type
                            </label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            >
                              <option value="">Select type</option>
                              <option value="residential">Residential</option>
                              <option value="commercial">Commercial</option>
                              <option value="industrial">Industrial</option>
                              <option value="healthcare">Healthcare</option>
                              <option value="infrastructure">Infrastructure</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Location
                            </label>
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Budget Range
                            </label>
                            <select
                              name="budgetRange"
                              value={formData.budgetRange}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            >
                              <option value="">Select range</option>
                              <option value="under-1m">Under ₱1M</option>
                              <option value="1m-5m">₱1M - ₱5M</option>
                              <option value="5m-10m">₱5M - ₱10M</option>
                              <option value="10m-25m">₱10M - ₱25M</option>
                              <option value="over-25m">Over ₱25M</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Target Start Date
                            </label>
                            <input
                              type="date"
                              name="targetStart"
                              value={formData.targetStart}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)]">
                              Project Details
                            </label>
                            <textarea
                              name="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your project requirements..."
                              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm 
                                       focus:border-[var(--dy-red-700)] focus:ring-[var(--dy-red-700)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--dy-charcoal)] mb-2">
                              Upload Plans/Documents
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                              <Upload className="mx-auto h-8 w-8 text-gray-400" />
                              <p className="mt-2 text-sm text-gray-500">
                                Drag files here or click to upload
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={onClose}
                          className="btn-secondary"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn-primary flex items-center"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Request
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ContactSlideOver;