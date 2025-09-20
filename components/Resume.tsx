import React from 'react';
import { ResumeData } from '../types';
import ResumeSection from './ResumeSection';
import { AcademicCapIcon } from './icons/AcademicCapIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { UserIcon } from './icons/UserIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { EmailIcon } from './icons/EmailIcon';
import { SkillsIcon } from './icons/SkillsIcon';
import { AchievementsIcon } from './icons/AchievementsIcon';
import { HobbiesIcon } from './icons/HobbiesIcon';
import { SocialIcon } from './icons/SocialIcon';
import { GoalIcon } from './icons/GoalIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { PlaneIcon } from './icons/PlaneIcon';
import { BookIcon } from './icons/BookIcon';
import { CameraIcon } from './icons/CameraIcon';
import { MusicIcon } from './icons/MusicIcon';
import { CricketIcon } from './icons/CricketIcon';

interface ResumeProps {
  data: ResumeData;
}

const hobbyIcons = {
    plane: <PlaneIcon />,
    book: <BookIcon />,
    camera: <CameraIcon />,
    music: <MusicIcon />,
    cricket: <CricketIcon />,
};

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const { personalInfo, profile, education, workExperience, skills, achievements, hobbies, socialMedia, goal } = data;

  return (
    <div className="text-gray-800">
      <div className="h-3 bg-rose-500" />
      <header className="px-8 pt-8 pb-4 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{personalInfo.name}</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <EmailIcon />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-rose-600">{personalInfo.email}</a>
          </div>
        </div>
      </header>

      <main className="px-8 pt-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <ResumeSection title="Profile" icon={<UserIcon />}>
            <p className="text-gray-700 leading-relaxed">{profile}</p>
          </ResumeSection>

          <ResumeSection title="Education" icon={<AcademicCapIcon />}>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-xs text-gray-500">{edu.dates}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{edu.institution} <span className="font-normal text-gray-500">| {edu.location}</span></p>
                  <p className="text-xs text-gray-500">{edu.details}</p>
                </div>
              ))}
            </div>
          </ResumeSection>
          
          <ResumeSection title="Work Experience" icon={<BriefcaseIcon />}>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-semibold text-gray-800">{job.role}</h3>
                      <p className="text-sm font-semibold text-gray-700">{job.company} <span className="font-normal text-gray-500">| {job.location}</span></p>
                    </div>
                    <p className="text-xs text-gray-500 whitespace-nowrap">{job.dates}</p>
                  </div>
                  <ul className="mt-2 list-disc list-outside space-y-2 pl-5 text-gray-700">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="leading-relaxed text-sm">{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>
        </div>

        <div className="md:col-span-1 space-y-8">
            <ResumeSection title="Skills" icon={<SkillsIcon />}>
                <div className="space-y-4">
                    {skills.map((skillCat, index) => (
                        <div key={index} className="text-sm">
                            <h4 className="font-semibold text-gray-800 mb-1">{skillCat.category}</h4>
                             <div className="flex flex-wrap gap-2">
                                 {skillCat.skills.filter(s => s).map((skill, i) => (
                                    <><span key={i} className="bg-gray-200 text-gray-700 text-xs px-2.5 py-0.5 rounded-full">{skill}</span><span key={i} title={skill} className="bg-gray-200 text-gray-700 text-xs px-2.5 py-0.5 rounded-full truncate">{skill}</span></>
                                 ))}
                             </div>
                         </div>
                    ))}
                </div>
            </ResumeSection>

            <ResumeSection title="Achievements" icon={<AchievementsIcon />}>
                <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700">
                    {achievements.map((ach, i) => (
                        <li key={i} className="leading-relaxed text-sm">{ach.text}</li>
                    ))}
                </ul>
            </ResumeSection>

            <ResumeSection title="Hobbies" icon={<HobbiesIcon />}>
                <div className="grid grid-cols-2 gap-4 text-sm text-center">
                    {hobbies.map((hobby, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 text-gray-600">
                            {hobbyIcons[hobby.icon]}
                            <span>{hobby.name}</span>
                        </div>
                    ))}
                </div>
            </ResumeSection>

            <ResumeSection title="Social Media" icon={<SocialIcon />}>
                {socialMedia.map((social, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <LinkedInIcon />
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-rose-600">{social.handle}</a>
                    </div>
                ))}
            </ResumeSection>
            
            <ResumeSection title="Goal" icon={<GoalIcon />}>
                <p className="text-gray-700 leading-relaxed text-sm">{goal}</p>
            </ResumeSection>
        </div>
      </main>
    </div>
  );
};

export default Resume;