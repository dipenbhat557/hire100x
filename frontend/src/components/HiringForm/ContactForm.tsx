interface Props {
  onSubmit: (data: {
    email: string;
    companyName: string;
    contactName: string;
    phone?: string;
  }) => void;
}

export const ContactForm = ({ onSubmit }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    onSubmit({
      email: formData.get('email') as string,
      companyName: formData.get('companyName') as string,
      contactName: formData.get('contactName') as string,
      phone: formData.get('phone') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="my.name@company.com"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
          Contact name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="contactName"
          id="contactName"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone (Optional)
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Connect Me With Talent
      </button>

      <p className="text-xs text-gray-500 mt-4">
        By completing signup, you are agreeing to Hire100x's Terms of Service, Privacy Policy, 
        and that audio or video meetings made through Hire100x's systems may be recorded or 
        monitored for quality assurance, training, and compliance purposes.
      </p>
    </form>
  );
}; 