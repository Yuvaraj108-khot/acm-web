export interface TeamMember {
  id: string;
  name?: string;
  role: string;
  code: string;
  group:
    | 'Leadership'
    | 'Administration'
    | 'Documentation'
    | 'Event Team'
    | 'Tech Team'
    | 'Graphics Team'
    | 'Media Team'
    | 'Social Media Team'
    | 'Publicity Team'
    | '3rd Year Representative'
    | '2nd Year Representative';
  bio?: string;
  image?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export const team: TeamMember[] = [
  {
    id: 'lead-1',
    name: 'Prakyath Yadav Suvarna',
    role: 'Vice President',
    code: 'NNM24CS336',
    group: 'Leadership',
  },
  {
    id: 'admin-1',
    name: 'Hasnain Khan',
    role: 'Secretary',
    code: 'NNM24CS335',
    group: 'Administration',
  },
  {
    id: 'admin-2',
    name: 'Sujanraj N',
    role: 'Joint Secretary',
    code: 'NN25ISE236',
    group: 'Administration',
  },
  {
    id: 'admin-3',
    name: 'Pranjal Shetty',
    role: 'Treasurer',
    code: 'NNM24CB043',
    group: 'Administration',
  },
  {
    id: 'admin-4',
    name: 'Aryan Verma',
    role: 'Treasurer',
    code: 'NNM24CS047',
    group: 'Administration',
  },
  {
    id: 'doc-1',
    name: 'Swasthik M Prabhu',
    role: 'Head',
    code: 'NNM24CS265',
    group: 'Documentation',
  },
  {
    id: 'doc-2',
    name: 'Sathwik S L',
    role: 'Member',
    code: 'NNM24IS204',
    group: 'Documentation',
  },
  {
    id: 'doc-3',
    name: 'Sharanya L Shetty',
    role: 'Member',
    code: 'NN25CSE311',
    group: 'Documentation',
  },
  {
    id: 'event-1',
    name: 'Trishal Hegde',
    role: 'Head',
    code: 'NNM24IS269',
    group: 'Event Team',
  },
  {
    id: 'event-2',
    name: 'Shrinidhi Katti',
    role: 'Co Head',
    code: 'NNM24IS238',
    group: 'Event Team',
  },
  {
    id: 'event-3',
    name: 'Ananya Shetty',
    role: 'Member',
    code: 'NN25ISE028',
    group: 'Event Team',
  },
  {
    id: 'event-4',
    name: 'Vyshnavi R Nambiar',
    role: 'Member',
    code: 'NN25CSE429',
    group: 'Event Team',
  },
  {
    id: 'tech-1',
    name: 'Yuvaraj Khot',
    role: 'Head',
    code: 'NNM24IS287',
    group: 'Tech Team',
  },
  {
    id: 'tech-2',
    name: 'Vagish Kora',
    role: 'Co Head',
    code: 'NN25CB506',
    group: 'Tech Team',
  },
  {
    id: 'tech-3',
    name: 'Likith Alva',
    role: 'Member',
    code: 'NN25CSE176',
    group: 'Tech Team',
  },
  {
    id: 'tech-4',
    name: 'Jithin Sathyendran',
    role: 'Member',
    code: 'NN25CSE151',
    group: 'Tech Team',
  },
  {
    id: 'graphics-1',
    name: 'Akshay S Mayya',
    role: 'Head',
    code: 'NNM24CS027',
    group: 'Graphics Team',
  },
  {
    id: 'graphics-2',
    name: 'Vivian Derick Lobo',
    role: 'Member',
    code: 'NNM24IS285',
    group: 'Graphics Team',
  },
  {
    id: 'graphics-3',
    name: 'Vaishakh Bangera',
    role: 'Member',
    code: 'NNM24IS270',
    group: 'Graphics Team',
  },
  {
    id: 'media-1',
    name: 'Udhbhav S Nayak',
    role: 'Head',
    code: 'NNM24CS277',
    group: 'Media Team',
  },
  {
    id: 'media-2',
    name: 'Shashanka Shanbhag',
    role: 'Member',
    code: 'NNM24IS214',
    group: 'Media Team',
  },
  {
    id: 'media-3',
    name: 'Sampath S Kulkarni',
    role: 'Member',
    code: 'NN25ECE140',
    group: 'Media Team',
  },
  {
    id: 'media-4',
    name: 'Shika Acharya',
    role: 'Member',
    code: 'NNM24IS219',
    group: 'Media Team',
  },
  {
    id: 'social-1',
    name: 'K Divya Kamath',
    role: 'Head',
    code: 'NNM24CS329',
    group: 'Social Media Team',
  },
  {
    id: 'social-2',
    name: 'Kruthika Upadhya',
    role: 'Member',
    code: 'NNM24EC077',
    group: 'Social Media Team',
  },
  {
    id: 'publicity-1',
    name: 'Atharva Joshi',
    role: 'Member',
    code: 'NNM24CS056',
    group: 'Publicity Team',
  },
  {
    id: 'publicity-2',
    name: 'Tarulata Priya',
    role: 'Member',
    code: 'NNM25BT901',
    group: 'Publicity Team',
  },
  {
    id: 'publicity-3',
    name: 'Prisha Shetty',
    role: 'Member',
    code: 'NN25AIM090',
    group: 'Publicity Team',
  },
  {
    id: 'publicity-4',
    name: 'Veeksha J',
    role: 'Member',
    code: 'NN25CSE413',
    group: 'Publicity Team',
  },
  {
    id: 'rep-3-1',
    name: 'Vansh Shetty',
    role: 'Representative',
    code: 'NNM24CS286',
    group: '3rd Year Representative',
  },
  {
    id: 'rep-2-1',
    name: 'Swasti Subramanya Hegde',
    role: 'Representative',
    code: 'NN25CCE061',
    group: '2nd Year Representative',
  },
  {
    id: 'rep-2-2',
    name: 'Suhas Chandra',
    role: 'Representative',
    code: 'NN25ISE234',
    group: '2nd Year Representative',
  },
];
