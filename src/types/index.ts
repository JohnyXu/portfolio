import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IAbout {
  _id: string;
  title: string;
  description: string;
  imgUrl: SanityImageSource;
}

export interface IBrand {
  _id: string;
  imgUrl: SanityImageSource;
  name: string;
}

export interface IContact {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export interface ISkills {
  _id: string;
  name: string;
  bgColor: string;
  icon: SanityImageSource;
}

export interface ITestimonials {
  _id: string;
  name: string;
  company: string;
  imgurl: SanityImageSource;
  feedback: string;
}

export interface IWorkExperience {
  _id: string;
  name: string;
  company: string;
  desc: string;
}

export interface IWork {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: SanityImageSource;
  tags: string[];
}

export interface IExperiences {
  _id: string;
  year: string;
  works: IWorkExperience[];
}
