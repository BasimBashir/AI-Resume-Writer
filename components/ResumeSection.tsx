import React from 'react';

interface ResumeSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, icon, children }) => {
   return (
     <section>
      <div className="flex items-baseline gap-3 mb-3">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-gray-500">{icon}</span>
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider">{title}</h2>
        </div>
      </div>
      <hr className="border-t border-gray-200 mb-4" />
      {children}
    </section>
  );
};

export default ResumeSection;