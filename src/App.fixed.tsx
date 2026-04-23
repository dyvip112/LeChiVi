import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Play,
  Palette,
  Mail,
  Phone,
  MapPin,
  Trophy,
  Scissors,
  Box,
  Monitor,
  Github,
  Linkedin,
  QrCode,
  X,
  CheckCircle2,
} from 'lucide-react';
import { BlurText } from './components/BlurText';
import { VideoBackground } from './components/VideoBackground';
import educationProfileImage from '../public/education-profile.jpg';
import vinfastCover from '../public/vinfast/vf-01.jpg';
import vinfast01 from '../public/vinfast/vf-new-01.jpg';
import vinfast02 from '../public/vinfast/vf-new-02.jpg';
import vinfast03 from '../public/vinfast/vf-new-03.jpg';
import vinfast04 from '../public/vinfast/vf-new-04.jpg';
import vinfast05 from '../public/vinfast/vf-new-05.jpg';
import vinfast06 from '../public/vinfast/vf-new-06.jpg';
import vinfast07 from '../public/vinfast/vf-new-07.jpg';
import vinfast08 from '../public/vinfast/vf-new-08.jpg';
import vinfast09 from '../public/vinfast/vf-new-09.jpg';
import breakxCover from '../public/breakx/bx-01.png';
import breakx01 from '../public/breakx/bx-01.jpg';
import breakx02 from '../public/breakx/bx-02.jpg';
import breakx03 from '../public/breakx/bx-03.png';
import breakx04 from '../public/breakx/bx-04.png';
import breakx05 from '../public/breakx/bx-05.png';
import breakx06 from '../public/breakx/bx-06.png';
import cocopickCover from '../public/cocopick/cp-01.jpg';
import cocopick01 from '../public/cocopick/cp-02.jpg';
import cocopick02 from '../public/cocopick/cp-03.jpg';
import cocopick03 from '../public/cocopick/cp-04.jpg';
import cocopick04 from '../public/cocopick/cp-05.jpg';
import cocopick05 from '../public/cocopick/cp-06.jpg';
import cocopick06 from '../public/cocopick/cp-07.jpg';
import cocopick07 from '../public/cocopick/cp-08.jpg';
import cocopick08 from '../public/cocopick/cp-09.jpg';
import cocopick09 from '../public/cocopick/cp-10.jpg';

interface ProjectData {
  id: string;
  title: string;
  period: string;
  company: string;
  description: string;
  image: string;
  tags: string[];
  gallery: string[];
  details: {
    overview: string;
    tasks: string[];
    tools: string[];
  };
}

const ASSETS = {
  educationProfile: educationProfileImage,
  vinfast: {
    cover: vinfastCover,
    gallery: [
      vinfast01,
      vinfast02,
      vinfast03,
      vinfast04,
      vinfast05,
      vinfast06,
      vinfast07,
      vinfast08,
      vinfast09,
    ],
  },
  breakx: {
    cover: breakxCover,
    gallery: [breakx01, breakx02, breakx03, breakx04, breakx05, breakx06],
  },
  cocopick: {
    cover: cocopickCover,
    gallery: [
      cocopick01,
      cocopick02,
      cocopick03,
      cocopick04,
      cocopick05,
      cocopick06,
      cocopick07,
      cocopick08,
      cocopick09,
    ],
  },
};

const EDUCATION_PROFILE_IMAGE = ASSETS.educationProfile;

const SECTION_IDS = {
  projects: 'projects',
  experience: 'experience',
  skills: 'skills',
  education: 'education',
  contact: 'contact',
} as const;

const NAV_ITEMS = [
  { label: 'D? �n', href: `#${SECTION_IDS.projects}` },
  { label: 'Kinh nghi??m', href: `#${SECTION_IDS.experience}` },
  { label: 'K? n?fng', href: `#${SECTION_IDS.skills}` },
  { label: 'H?c v?n', href: `#${SECTION_IDS.education}` },
  { label: 'Li�n h??', href: `#${SECTION_IDS.contact}` },
];

const PROJECTS: ProjectData[] = [
  {
    id: 'vinfast',
    title: 'VINFAST',
    period: '2024 - 2025',
    company: 'VinFast',
    description:
      'Thi?t k? h?? th?'ng ?n ph?m truy?n th�ng n?.i b?t cho thuong hi??u � t� ?'i??n h�ng ?'?u Vi??t Nam.',
    image: ASSETS.vinfast.cover,
    tags: ['Social Media', 'Advertising'],
    gallery: ASSETS.vinfast.gallery,
    details: {
      overview:
        'D?"ng h�nh c�ng ?'?Ti ngu marketing VinFast trong vi??c ph�t tri?fn h�nh ?nh thuong hi??u tr�n c�c k�nh truy?n th�ng s?' v� ?n ph?m qu?ng b�.',
      tasks: [
        'Thi?t k? poster, banner qu?ng b� cho c�c d�ng xe m?>i nhu VF 3 v� VF 7.',
        'Ch??nh s?a h�nh ?nh xe chuy�n nghi??p theo ti�u chu?n thuong hi??u.',
      ],
      tools: ['Photoshop', 'Illustrator'],
    },
  },
  {
    id: 'twinpick',
    title: 'Nu?>c T?fng L?c BREAKX',
    period: '2024 - 2025',
    company: 'BREAKX',
    description:
      'X�y d?ng h�nh ?nh s?n ph?m v� b?T nh?n di??n truy?n th�ng cho thuong hi??u nu?>c t?fng l?c theo hu?>ng hi??n ?'?i, m?nh m?.',
    image: ASSETS.breakx.cover,
    tags: ['Product Design', 'Branding', 'Packaging'],
    gallery: ASSETS.breakx.gallery,
    details: {
      overview:
        'Th?c hi??n thi?t k? h�nh ?nh s?n ph?m, bao b� v� c�c key visual truy?n th�ng nh?m t?fng ?'?T nh?n di??n v� t?o c?m gi�c n?fng ?'?Tng cho thuong hi??u BREAKX.',
      tasks: [
        'Thi?t k? h�nh ?nh bao b� v� mockup s?n ph?m cho c�c d�ng Energy Drink v� Zero Sugar.',
        'X�y d?ng visual truy?n th�ng t?p trung v�o c?m gi�c m?nh m?, hi??n ?'?i v� d?. ghi nh?>.',
        'Ph�t tri?fn h�nh ?nh s?n ph?m ph?c v? truy?n th�ng s?' v� gi?>i thi??u thuong hi??u.',
      ],
      tools: ['Photoshop', 'Blender', 'Illustrator'],
    },
  },
  {
    id: 'cocopick',
    title: 'Coco Pick',
    period: '2025 - Hi??n t?i',
    company: 'Coco Pick',
    description:
      'Thi?t k? h�nh ?nh s? ki??n v� ?n ph?m truy?n th�ng cho c�c gi?i ?'?u pickleball v?>i nh?n di??n r� r�ng, n?.i b?t.',
    image: ASSETS.cocopick.cover,
    tags: ['Event Design', 'Social Visual', 'Branding'],
    gallery: ASSETS.cocopick.gallery,
    details: {
      overview:
        'Ph? tr�ch thi?t k? h�nh ?nh cho c�c gi?i ?'?u pickleball, t? poster th�ng b�o, ?n ph?m ?'?fng k� ?'?n visual truy?n th�ng tr�n m?ng x� h?Ti.',
      tasks: [
        'Thi?t k? poster, backdrop v� ?n ph?m truy?n th�ng cho c�c gi?i ?'?u v� s? ki??n.',
        'X�y d?ng chu?-i visual nh?n di??n ?'?"ng nh?t cho c�c chi?n d?<ch truy?n th�ng ?'?<nh k?.',
        'Thi?t k? c�c ?n ph?m ph?c v? qu?ng b�, ?'?fng k� v� truy?n th�ng sau s? ki??n.',
      ],
      tools: ['Photoshop', 'Illustrator'],
    },
  },
];

const Badge = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-flex items-center gap-2 ${className}`}
  >
    {children}
  </div>
);

const LiquidButton = ({
  children,
  className = '',
  variant = 'glass',
  href = '#',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'solid';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const Component = onClick ? motion.button : motion.a;

  if (variant === 'solid') {
    return (
      <Component
        {...(onClick ? { onClick } : { href })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`bg-white text-black rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ${className}`}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      {...(onClick ? { onClick } : { href })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`liquid-glass-strong rounded-full px-6 py-3 text-sm font-semibold text-white inline-flex items-center gap-2 ${className}`}
    >
      {children}
    </Component>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectData | null;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative w-full max-w-6xl max-h-full bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-30 w-10 h-10 liquid-glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="md:w-1/2 min-h-[320px] md:min-h-0 relative overflow-hidden bg-[#050505] flex items-start justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full max-h-[78vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-10 left-10 space-y-2">
                <Badge className="bg-white/10 border-white/20">{project.period}</Badge>
                <h2 className="text-4xl font-heading italic text-white">{project.title}</h2>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
              <div className="space-y-10">
                <section className="space-y-4">
                  <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">
                    Gi?>i thi??u d? �n
                  </p>
                  <p className="text-white/70 font-body font-light text-lg leading-relaxed">
                    {project.details.overview}
                  </p>
                </section>

                <section className="space-y-6">
                  <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">
                    Nhi??m v? c? th?f
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {project.details.tasks.map((task, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="mt-1 text-white/40">
                          <CheckCircle2 size={16} />
                        </div>
                        <p className="text-white/60 font-body text-sm leading-relaxed">{task}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="grid grid-cols-2 gap-8">
                  <section className="space-y-4">
                    <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">
                      C�ng c? s? d?ng
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.details.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-white/5 rounded-lg text-white/50 text-xs font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </section>
                  <section className="space-y-4">
                    <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">
                      Don v?<
                    </p>
                    <p className="text-white text-sm font-heading italic">{project.company}</p>
                  </section>
                </div>

                <section className="space-y-6">
                  <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">
                    G�c trung b�y thi?t k?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    {project.gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="overflow-hidden rounded-md border border-white/10 bg-white/[0.02] p-1.5 flex items-center justify-center"
                      >
                        <img
                          src={img}
                          alt={`Showcase ${i + 1}`}
                          className="block w-full h-auto max-h-[360px] object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex justify-between items-center bg-transparent pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="h-10 w-10 liquid-glass rounded-xl flex items-center justify-center border border-white/20">
          <div className="w-5 h-5 bg-white rounded-full animate-pulse" />
        </div>
        <span className="font-heading italic text-2xl text-white tracking-tight">Vi.Design</span>
      </div>

      <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 pointer-events-auto">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors font-body"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="pointer-events-auto">
        <LiquidButton variant="solid" className="!px-4 !py-1.5" href={`#${SECTION_IDS.contact}`}>
          Li�n h?? <ArrowUpRight size={16} />
        </LiquidButton>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[1000px] flex flex-col items-center justify-center overflow-hidden bg-black">
      <VideoBackground
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        className="brightness-50"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-20 text-center px-6 pt-[150px]">
        <Badge className="mb-10">
          <span className="bg-white text-black rounded-full px-2 py-0.5 text-[10px] font-black uppercase">
            Hi!
          </span>
          <span className="text-white/80">T�i l� L� Ch� Vi - Chuy�n vi�n Thi?t k? D?" h?a</span>
        </Badge>

        <BlurText
          text="PORTFOLIO"
          animateBy="char"
          className="hero-huge text-white max-w-4xl mx-auto mb-8 justify-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/60 font-body font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          T�i l� L� Ch� Vi, sinh ng�y 19 th�ng 9 n?fm 2005, hi??n l� m?Tt nh� thi?t k? ?'?" h?a tr?
          ?'?y ?'am m�. T?'t nghi??p BTEC FPT chuy�n ng�nh Thi?t k? D?" h?a, t�i mong mu?'n ?'u?c l�m
          vi??c v� ?'�ng g�p cho c�c ?'?Ti ngu s�ng t?o chuy�n nghi??p.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <LiquidButton href={`#${SECTION_IDS.projects}`}>
            Xem d? �n <ArrowUpRight size={18} />
          </LiquidButton>
          <button className="flex items-center gap-3 text-white hover:text-white/80 transition-colors font-medium">
            <span className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center border border-white/20">
              <Play size={16} fill="white" />
            </span>
            Showreel 2025
          </button>
        </motion.div>
      </div>

      <div className="mt-auto w-full z-20 pb-16 px-8 lg:px-16 flex flex-wrap justify-between items-center gap-8">
        <div className="flex gap-12">
          <div className="space-y-1">
            <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">
              Kinh nghi??m
            </p>
            <p className="text-xl font-heading italic text-white">VinFast, BREAKX, Coco Pick</p>
          </div>
          <div className="space-y-1">
            <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">
              Ti�u ?'i?fm
            </p>
            <p className="text-xl font-heading italic text-white">Branding & Video Production</p>
          </div>
        </div>
        <div className="flex gap-10 opacity-30">
          {['Photoshop', 'Illustrator', 'Blender', 'InDesign'].map((tool) => (
            <span key={tool} className="font-heading italic text-2xl text-white">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = ({ onSelectProject }: { onSelectProject: (p: ProjectData) => void }) => (
  <section id={SECTION_IDS.projects} className="bg-black py-40 px-8 lg:px-24 space-y-40">
    <div id={SECTION_IDS.experience} className="absolute -mt-40" />
    <div className="text-center mb-32 space-y-6">
      <Badge>Visual Portfolio</Badge>
      <h2 className="text-5xl md:text-6xl font-heading italic text-white tracking-tight">
        D? �n ch?n l?c. B?n s?c ri�ng bi??t.
      </h2>
    </div>

    {[...PROJECTS]
      .sort((a, b) => {
        const order: Record<string, number> = { twinpick: 0, vinfast: 1, cocopick: 2 };
        return (order[a.id] ?? 99) - (order[b.id] ?? 99);
      })
      .map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col lg:flex-row items-center gap-20 ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1 space-y-8">
            <Badge className="bg-white/5">{project.period}</Badge>
            <h3 className="text-4xl font-heading italic text-white leading-tight">{project.title}</h3>
            <p className="text-white/60 font-body font-light text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <LiquidButton onClick={() => onSelectProject(project)}>
              Chi ti?t d? �n <ArrowUpRight size={18} />
            </LiquidButton>
          </div>
          <div
            className="flex-1 liquid-glass rounded-3xl p-4 border border-white/10 group cursor-pointer"
            onClick={() => onSelectProject(project)}
          >
            <div className="rounded-2xl overflow-hidden aspect-video relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 liquid-glass rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                  <Play size={24} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
  </section>
);

const Skills = () => (
  <section id={SECTION_IDS.skills} className="bg-black py-40 px-8 lg:px-24">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: Palette,
          title: 'Branding Design',
          text: 'Thi?t k? logo v� h?? th?'ng nh?n di??n chuy�n s�u v?>i tu duy thuong hi??u r� r�ng.',
        },
        {
          icon: Box,
          title: 'AI Fluency',
          text: 'Kh? n?fng s? d?ng AI linh ho?t ?'?f t?fng t?'c � tu?Yng, t?'i uu quy tr�nh v� n�ng ch?t lu?ng ?'?u ra.',
        },
        {
          icon: Monitor,
          title: 'UI/UX Experience',
          text: 'X�y d?ng giao di??n web/app hi??n ?'?i v?>i b?' c?c r� r�ng v� tr?i nghi??m tr?c quan.',
        },
        {
          icon: Scissors,
          title: 'Video Production',
          text: 'Bi�n t?p video truy?n th�ng v� motion graphics ph?c v? qu?ng b� thuong hi??u.',
        },
      ].map((card, i) => (
        <div
          key={i}
          className="liquid-glass rounded-3xl p-10 space-y-8 hover:border-white/20 transition-all border border-transparent"
        >
          <div className="w-12 h-12 liquid-glass-strong rounded-full flex items-center justify-center text-white">
            <card.icon size={24} />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-heading italic text-white">{card.title}</h4>
            <p className="text-white/50 font-body font-light leading-relaxed text-sm">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Achievements = () => (
  <section id={SECTION_IDS.education} className="bg-black py-40 px-8 lg:px-24 border-t border-white/5">
    <div className="flex flex-col lg:flex-row gap-20">
      <div className="flex-1 space-y-12">
        <Badge>H?c v?n & D�o t?o</Badge>
        <div className="liquid-glass rounded-[2rem] border border-white/10 overflow-hidden group">
          <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-[#d9dbe6]">
            <img
              src={EDUCATION_PROFILE_IMAGE}
              alt="Ch�n dung L� Ch� Vi"
              className="w-full h-full object-cover object-[center_18%] transition-transform duration-1000 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute left-6 top-6">
              <Badge className="bg-black/40 border-white/20 backdrop-blur-md">Profile</Badge>
            </div>
          </div>
          <div className="p-8 md:p-10 space-y-5">
            <h4 className="text-sm font-black uppercase text-white/40 tracking-widest">2023 - 2026</h4>
            <h3 className="text-4xl font-heading italic text-white leading-tight">
              Cao ?'?ng Anh Qu?'c BTEC FPT
            </h3>
            <p className="text-white/60 font-body text-lg leading-relaxed">
              T�i l� L� Ch� Vi, sinh ng�y 19 th�ng 9 n?fm 2005, hi??n l� m?Tt nh� thi?t k? ?'?" h?a tr?
              ?'?y ?'am m�. T?'t nghi??p BTEC FPT chuy�n ng�nh Thi?t k? D?" h?a, t�i mong mu?'n ?'u?c l�m
              vi??c ho?c h?p t�c c�ng c�c m�i tru?ng s�ng t?o chuy�n nghi??p.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-12">
        <Badge>Gi?i thu?Yng & Th�nh t�ch</Badge>
        <div className="space-y-6">
          {[
            { year: '2026', title: 'D?u ?n Vi??t Visual Legacy', rank: 'H?ng Ba' },
            { year: '2025', title: 'Logo Design Competition', rank: 'H?ng Nh�' },
            { year: '2025', title: 'C? vua Poly Game', rank: 'H?ng Nh�' },
            { year: '2025', title: 'POLY Pickleball', rank: 'H?ng Nh?t' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-6 liquid-glass rounded-2xl border border-white/5"
            >
              <div className="flex gap-4 items-center">
                <Trophy size={20} className="text-white/30" />
                <div>
                  <h5 className="text-white font-body font-medium">{item.title}</h5>
                  <p className="text-white/40 text-xs font-body uppercase">{item.year}</p>
                </div>
              </div>
              <span className="text-white underline decoration-white/20 underline-offset-4 font-heading italic">
                {item.rank}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <section
    id={SECTION_IDS.contact}
    className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6"
  >
    <VideoBackground
      src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
      isHls
      className="opacity-40"
    />
    <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black to-transparent z-10" />

    <div className="relative z-20 text-center max-w-4xl space-y-12">
      <h2
        className="mx-auto max-w-[18ch] text-[clamp(2.3rem,8vw,6rem)] font-heading italic text-white leading-[1] tracking-tight"
        style={{ textWrap: "balance" }}
      >
        Thi?t k? kh?ng ch? d?p
        <span className="hidden md:inline"> - </span>
        <span className="md:block">m? c?n c? chi?n lu?c.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-10">
        <div className="liquid-glass rounded-2xl p-6 text-center space-y-3">
          <Phone size={20} className="mx-auto text-white" />
          <p className="text-white font-body text-sm">0326.097.045</p>
        </div>
        <div className="liquid-glass rounded-2xl p-6 text-center space-y-3">
          <Mail size={20} className="mx-auto text-white" />
          <p className="text-white font-body text-sm">dyle91555@gmail.com</p>
        </div>
        <div className="liquid-glass rounded-2xl p-6 text-center space-y-3">
          <MapPin size={20} className="mx-auto text-white" />
          <p className="text-white font-body text-sm">TP. C?n Tho</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
        <LiquidButton
          className="!px-12 !py-5 text-base"
          href="https://www.facebook.com/chivi2005"
        >
          Li�n h?? ngay
        </LiquidButton>
        <LiquidButton
          variant="solid"
          className="!px-12 !py-5 text-base text-black"
          href={`#${SECTION_IDS.projects}`}
        >
          Xem Portfolio
        </LiquidButton>
      </div>

      <div className="pt-20 flex flex-col items-center gap-6">
        <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em]">
          L?S CH� VI - SINCE 2005
        </p>
        <div className="w-32 h-32 liquid-glass p-2 rounded-2xl border border-white/10 group cursor-pointer">
          <QrCode size={112} className="text-white opacity-40 group-hover:opacity-80 transition-opacity" />
        </div>
      </div>
    </div>

    <footer className="mt-auto w-full max-w-7xl z-20 pt-10 pb-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-white/30 text-xs font-body">� 2026 L� Ch� Vi Portfolio. Ki?n t?o b?Yi Vi Design.</p>
      <div className="flex gap-10">
        <a
          href="#"
          className="text-white/30 hover:text-white transition-colors text-xs font-body flex items-center gap-2"
        >
          <Linkedin size={14} /> LinkedIn
        </a>
        <a
          href="#"
          className="text-white/30 hover:text-white transition-colors text-xs font-body flex items-center gap-2"
        >
          <Github size={14} /> GitHub
        </a>
      </div>
    </footer>
  </section>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="bg-black selection:bg-white selection:text-black min-h-screen relative">
      <Navbar />
      <Hero />
      <main className="bg-black">
        <ProjectsSection onSelectProject={setSelectedProject} />
        <Skills />
        <Achievements />
        <Footer />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

