// Here is all the content of my website, links, files links, etc.
interface subMenuItems {
  name: string;
  link: string;
}

interface utilsData {
  devName: string;
  mainLanguage: string;
  subMenuItems: subMenuItems[];
  aboutContent: string;
}

export const utilsData: utilsData = {
  devName: 'krysthopher ruiz',
  mainLanguage: 'JavaScript TypeScript',
  subMenuItems: [
    { name: 'about', link: '#about' },
    { name: 'skills', link: '#' },
    { name: 'portfolio', link: '#' },
    { name: 'services', link: '#' },
    { name: 'certifications', link: '#' },
    { name: 'download CV', link: '#' },
    { name: 'contact Me', link: '#' }
  ],
  aboutContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};
