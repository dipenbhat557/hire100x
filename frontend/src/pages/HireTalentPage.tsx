import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormOption } from '../components/HiringForm/FormOption';
import { SkillTag } from '../components/HiringForm/SkillTag';
import { StepIndicator } from '../components/HiringForm/StepIndicator';
import { ContactForm } from '../components/HiringForm/ContactForm';
import {
  COMPANY_SIZE_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  DURATION_OPTIONS,
  COMMITMENT_OPTIONS,
  START_DATE_OPTIONS,
  POPULAR_SKILLS
} from '../constants';
import type { HiringFormData } from '../types';

export const HireTalentPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<HiringFormData>({
    companySize: '',
    projectType: '',
    duration: '',
    commitment: '',
    skills: [],
    startDate: '',
    contactInfo: {
      email: '',
      companyName: '',
      contactName: '',
      phone: ''
    }
  });

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleOptionSelect = (field: keyof HiringFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    handleNext();
  };

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleContactSubmit = (contactInfo: HiringFormData['contactInfo']) => {
    setFormData((prev) => ({ ...prev, contactInfo }));
    // Here you would typically submit the form data to your backend
    console.log('Form submitted:', { ...formData, contactInfo });
    navigate('/success');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8">
              How many people are employed at your company?
            </h2>
            {COMPANY_SIZE_OPTIONS.map((option) => (
              <FormOption
                key={option.value}
                label={option.label}
                isSelected={formData.companySize === option.value}
                onClick={() => handleOptionSelect('companySize', option.value)}
              />
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8">
              What type of project are you hiring for?
            </h2>
            {PROJECT_TYPE_OPTIONS.map((option) => (
              <FormOption
                key={option.value}
                label={option.label}
                isSelected={formData.projectType === option.value}
                onClick={() => handleOptionSelect('projectType', option.value)}
              />
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8">
              How long do you need the developer?
            </h2>
            {DURATION_OPTIONS.map((option) => (
              <FormOption
                key={option.value}
                label={option.label}
                isSelected={formData.duration === option.value}
                onClick={() => handleOptionSelect('duration', option.value)}
              />
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8">
              What level of time commitment will you require from the developer?
            </h2>
            {COMMITMENT_OPTIONS.map((option) => (
              <FormOption
                key={option.value}
                label={option.label}
                isSelected={formData.commitment === option.value}
                onClick={() => handleOptionSelect('commitment', option.value)}
              />
            ))}
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              What skills would you like to see in your new hire?
            </h2>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Pick as many or as few as you'd like."
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Skills</h3>
              <div className="flex flex-wrap gap-3">
                {POPULAR_SKILLS.map((skill) => (
                  <SkillTag
                    key={skill.value}
                    label={skill.label}
                    isSelected={formData.skills.includes(skill.value)}
                    onClick={() => handleSkillToggle(skill.value)}
                  />
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => handleBack()}
                className="text-blue-600 hover:text-blue-700"
              >
                Skip
              </button>
              <button
                onClick={() => handleNext()}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8">
              When do you need the developer to start?
            </h2>
            {START_DATE_OPTIONS.map((option) => (
              <FormOption
                key={option.value}
                label={option.label}
                isSelected={formData.startDate === option.value}
                onClick={() => handleOptionSelect('startDate', option.value)}
              />
            ))}
          </div>
        );

      case 7:
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Success! Let's connect you with talent.
            </h2>
            <ContactForm onSubmit={handleContactSubmit} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <StepIndicator
          currentStep={currentStep}
          totalSteps={7}
          onBack={currentStep > 1 ? handleBack : undefined}
        />
        {renderStep()}
      </div>
    </div>
  );
};