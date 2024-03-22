import React from 'react';
import { useCustomHook } from '../context/CustomHooks';
import { BriefcaseBusiness, CalendarCheck2, CalendarClock, GraduationCap, HandPlatter, LogOut, Mail, Mails, MapPin, NotepadText, PhoneCall, Scale, School, Users } from 'lucide-react';
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';

import avatarImage from '../assets/images/users/avatar-1.jpg';

function Dashboard() {
  const { user } = useCustomHook();
  const { setUser, setToken } = useStateContext();

  const logout = (ev) => {
    ev.preventDefault();

    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
      });
  };

  return (

      <div className="flex gap-2  bg-white ">
        <div class="m-6">
          <div class="flex flex-wrap -mx-6">
              <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                      <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                        <Users className="h-8 w-8 text-white" />

                      </div>

                      <div class="mx-5">
                          <h4 class="text-2xl font-semibold text-gray-700">4644</h4>
                          <div class="text-gray-500">Users</div>
                      </div>
                  </div>
              </div>

              <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                  <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                      <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                        <BriefcaseBusiness className='h-8 w-8 text-white' />
                      </div>

                      <div class="mx-5">
                          <h4 class="text-2xl font-semibold text-gray-700">3453</h4>
                          <div class="text-gray-500">Jobs</div>
                      </div>
                  </div>
              </div>

              <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                  <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                      <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
                      <Mails className='h-8 w-8 text-white' />
                      </div>

                      <div class="mx-5">
                          <h4 class="text-2xl font-semibold text-gray-700">678</h4>
                          <div class="text-gray-500">Applicants</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div className="flex justify-between">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Applicant Info
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about applicant.
                </p>
            </div>
            <img
                src={avatarImage}
                alt="avatar Evan You"
                className="w-14 h-14 shrink-0 rounded-full m-2"
            />

          </div>
          <div class="border-t border-gray-200">
              <dl>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                          Full name
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.applicant && user.applicant[0].first_name+' '+user.applicant[0].other_names}
                      </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                          Profession
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          React JS
                      </dd>
                  </div>

                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                          About
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                      </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                          Contact details
                      </dt>
                        <div className="sm:col-span-2">
                          <dd class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <Mail className='h-4 w-4' /><span className='pl-4'>{user.email}</span>
                          </dd>
                          {user.applicant &&
                          <>
                            <dd class="py-2 text-sm text-gray-900 sm:mt-0  flex">
                              <PhoneCall className='h-4 w-4' /><span className='pl-4'>{user.applicant[0].phone_number }</span>
                            </dd>
                            <dd class="text-sm text-gray-900 sm:mt-0  flex">
                              <MapPin className='h-4 w-4'/><span className='pl-4'> {user.applicant[0].address }</span>
                            </dd>
                          </>
                          }
                        </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                          Qualifications
                      </dt>
                      {user.applicant && user.applicant[0].qualifications && user.applicant[0].qualifications.map((qualification, index) => (
                        <div className="">
                          <dd key={index} class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <NotepadText className='h-4 w-4'/><span className='pl-4'>{qualification.qualification_type} - {qualification.qualification_name}</span>
                          </dd>
                          <dd key={index} class="flex py-2 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <School className='h-4 w-4'/><span className='pl-4'> {qualification.institution}</span>
                          </dd>
                          <dd key={index} class="flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <CalendarCheck2 className='h-4 w-4'/><span className='pl-4'> {qualification.completion_date}</span>
                          </dd>
                        </div>

                      ))}
                  </div>

                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">
                          Skills
                      </dt>
                      {user.applicant && user.applicant[0].skills && user.applicant[0].skills.map((skill, index) => (
                        <div className="">
                          <dd key={index} class="flex mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <HandPlatter className='h-4 w-4'/><span className='pl-4'>{skill.skill_name}</span>
                          </dd>
                          <dd key={index} class="flex py-2 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <Scale className='h-4 w-4'/><span className='pl-4'> {skill.proficiency_level}</span>
                          </dd>
                          <dd key={index} class="flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <CalendarClock className='h-4 w-4'/><span className='pl-4'> {skill.experience_years}</span>
                          </dd>
                        </div>

                      ))}
                  </div>
              </dl>
          </div>
        </div>

      </div>
  );
}

export default Dashboard;
