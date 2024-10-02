// Here is all the content of my website, links, files links, etc.
interface subMenuItems {
  name: string;
  link: string;
}

interface aboutContent {
  title: string;
  content: string;
}

interface utilsData {
  devName: string;
  mainLanguage: string;
  subMenuItems: subMenuItems[];
  aboutContent: aboutContent[];
  skillsContent: [];
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
  aboutContent: [
    {
      title: 'Who I am:',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'What I love:',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'What I am working on:',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ],
  skillsContent: []
};
