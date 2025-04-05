export interface Project {
  id: number;
  title: string;
  description: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}