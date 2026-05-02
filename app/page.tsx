'use client';
import React from 'react';
import Section from '@/components/Section';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import StarBackground from '@/components/StarBackground';
import { DEVELOPER_INFO, PROJECTS, SKILLS, EXPERIENCE } from '@/app/constants';
import { ArrowRight, MapPin, Users, Briefcase, Code2 } from 'lucide-react';

const Page: React.FC = () => {
  return (
      <div className="relative min-h-screen text-primary selection:bg-white selection:text-black overflow-x-hidden">
        {/* 3D Background - Fixed Layer */}
        <StarBackground />

        {/* Interactions - High Z-index */}
        <CustomCursor />

        {/* Main Application Content - Relative Layer on top of stars */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <div className="min-h-screen pt-20">

              {/* A. About Section */}
              <Section id="about" className="mt-12 md:mt-24">
                <p className="text-sm uppercase tracking-[0.25em] text-white/30 mb-6 font-medium">
                  {DEVELOPER_INFO.role}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                  {' '}
                  <span className="text-white">{DEVELOPER_INFO.name}</span>
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-3xl text-white/70 font-light whitespace-pre-line leading-none">
                    {DEVELOPER_INFO.bio}
                  </span>
                </h1>
              </Section>

              {/* B & D. Current Team + Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-start gap-4 p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="p-3 bg-white/5 rounded-xl text-white shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-2">Current Focus</h3>
                    <p className="text-secondary leading-relaxed text-sm">
                      {DEVELOPER_INFO.currentTeam}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="p-3 bg-white/5 rounded-xl text-white shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-2">Based In</h3>
                    <p className="text-secondary leading-relaxed text-sm">
                      {DEVELOPER_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* C. Extended Bio */}
              <Section id="description" delay={0.2}>
                <div className="border-l border-white/10 pl-8">
                  <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl">
                    {DEVELOPER_INFO.extendedBio}
                  </p>
                </div>
              </Section>

              {/* E. Experience Section */}
              <Section id="experience" delay={0.1}>
                <div className="flex items-center gap-4 mb-12">
                  <Briefcase size={18} className="text-white/30" />
                  <h2 className="text-sm uppercase tracking-[0.25em] text-white/30 font-medium">Experience</h2>
                </div>

                <div className="space-y-0 divide-y divide-white/5">
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 group">
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-1">{exp.period}</p>
                        <p className="text-white font-medium">{exp.role}</p>
                        <p className="text-secondary text-sm">{exp.org}</p>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((point, j) => (
                          <li key={j} className="text-secondary text-sm leading-relaxed flex gap-3">
                            <span className="text-white/20 mt-1 shrink-0">—</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>

              {/* F. Skills Section */}
              <Section id="skills" delay={0.1}>
                <div className="flex items-center gap-4 mb-12">
                  <Code2 size={18} className="text-white/30" />
                  <h2 className="text-sm uppercase tracking-[0.25em] text-white/30 font-medium">Skills</h2>
                </div>

                <div className="space-y-8">
                  {[
                    { label: 'Languages', items: SKILLS.languages },
                    { label: 'Frameworks & Libraries', items: SKILLS.frameworks },
                    { label: 'Tools & Platforms', items: SKILLS.tools },
                  ].map(({ label, items }) => (
                    <div key={label} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-start">
                      <p className="text-xs text-white/30 uppercase tracking-widest pt-1">{label}</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 text-xs text-secondary border border-white/[0.06] rounded-full bg-white/[0.02] hover:bg-white/[0.05] hover:text-white transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* G. Selected Works */}
              <Section id="works" delay={0.2}>
                <div className="flex items-end justify-between mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Works</h2>
                  <span className="hidden md:inline-block text-secondary text-sm">
                    {PROJECTS.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                  {PROJECTS.map((project) => (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={project.id}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6 bg-white/[0.03]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Tech chips on hover */}
                        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.technologies.slice(0, 3).map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full text-white/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1.5 group-hover:text-secondary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-secondary text-sm line-clamp-2 max-w-xs">
                            {project.shortDescription}
                          </p>
                        </div>
                        <div className="p-2 rounded-full border border-white/10 text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 shrink-0 ml-4">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </Section>

              {/* Footer */}
              <Section className="mb-12">
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-white/20">
                  <p>&copy; {new Date().getFullYear()} {DEVELOPER_INFO.name}. All Rights Reserved.</p>
                  <p className="mt-4 md:mt-0">Designed with simplicity.</p>
                </div>
              </Section>

            </div>
          </main>
        </div>
      </div>
  );
};

export default Page;