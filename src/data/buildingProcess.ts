import { Feature } from '../types';

export interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

export const buildingProcessFeatures: Feature[] = [
  { 
    step: 'Step 1', 
    title: 'Initial Consultation',
    content: '', 
    image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpQPZZ06N4PeHkbfMaG9UpDOywhmxCIJ3YKE0N'
  },
  { 
    step: 'Step 2',
    title: 'Design & Planning',
    content: '',
    image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpATHlD6WJ0C9ycZ5GeDYWuN4MdHFSqozOBsQI'
  },
  { 
    step: 'Step 3',
    title: 'Permits & Approvals',
    content: '',
    image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpvQNov3bcTPfI7edyLbQmjqts9N6O120EDCwp'
  },
  { 
    step: 'Step 4',
    title: 'Construction',
    content: '',
    image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDpQLhd7eN4PeHkbfMaG9UpDOywhmxCIJ3YKE0N'
  },
  { 
    step: 'Step 5',
    title: 'Final Turnover',
    content: '',
    image: 'https://42lxfly3fn.ufs.sh/f/t9YpzTMVcXDp5ocueMmdJcL19pf6OUEnACq2KVMX4waDvNlH'
  },
];