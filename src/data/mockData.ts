export interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  organizer: string;
  seats: number;
}

export const categories = [
  { id: 'tech', name: 'Tech', color: 'from-blue-500 to-cyan-500' },
  { id: 'sports', name: 'Sports', color: 'from-green-500 to-emerald-500' },
  { id: 'cultural', name: 'Cultural', color: 'from-purple-500 to-pink-500' },
  { id: 'workshop', name: 'Workshop', color: 'from-orange-500 to-red-500' },
  { id: 'gaming', name: 'Gaming', color: 'from-violet-500 to-indigo-500' },
];

export const events: Event[] = [
  {
    id: 1,
    title: 'AI & Machine Learning Summit',
    category: 'tech',
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    venue: 'Tech Auditorium, Block A',
    description: 'Join us for an exciting summit exploring the latest developments in AI and Machine Learning. Industry experts will share insights on deep learning, neural networks, and practical applications. Perfect for students interested in cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    organizer: 'Tech Club',
    seats: 200,
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    category: 'tech',
    date: 'March 20, 2025',
    time: '9:00 AM - 5:00 PM',
    venue: 'Computer Lab 1',
    description: 'Intensive hands-on bootcamp covering modern web development technologies including React, Node.js, and cloud deployment. Build a complete web application from scratch with expert guidance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    organizer: 'Coding Society',
    seats: 50,
  },
  {
    id: 3,
    title: 'Basketball Championship',
    category: 'sports',
    date: 'March 18, 2025',
    time: '2:00 PM - 6:00 PM',
    venue: 'Main Sports Arena',
    description: 'Annual inter-department basketball tournament. Watch the best teams compete for the championship trophy. Exciting matches, great sportsmanship, and thrilling moments guaranteed!',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    organizer: 'Sports Committee',
    seats: 500,
  },
  {
    id: 4,
    title: 'Cricket Premier League',
    category: 'sports',
    date: 'March 25, 2025',
    time: '8:00 AM - 6:00 PM',
    venue: 'College Ground',
    description: 'Full-day cricket tournament featuring teams from different departments. Experience the thrill of competitive cricket with live commentary and refreshments.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
    organizer: 'Sports Club',
    seats: 300,
  },
  {
    id: 5,
    title: 'Cultural Night 2025',
    category: 'cultural',
    date: 'April 1, 2025',
    time: '6:00 PM - 10:00 PM',
    venue: 'Open Air Theatre',
    description: 'A spectacular evening celebrating diversity through music, dance, and drama. Featuring performances from talented students representing various cultural traditions and art forms.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    organizer: 'Cultural Committee',
    seats: 1000,
  },
  {
    id: 6,
    title: 'Fashion Show Extravaganza',
    category: 'cultural',
    date: 'April 5, 2025',
    time: '7:00 PM - 9:00 PM',
    venue: 'Main Auditorium',
    description: 'Glamorous fashion show showcasing student designers and models. Witness creativity, style, and innovation on the ramp with stunning collections and performances.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea1f9b66?w=800&q=80',
    organizer: 'Fashion Society',
    seats: 400,
  },
  {
    id: 7,
    title: 'Photography Workshop',
    category: 'workshop',
    date: 'March 22, 2025',
    time: '11:00 AM - 3:00 PM',
    venue: 'Media Lab',
    description: 'Learn professional photography techniques from industry experts. Covers composition, lighting, editing, and storytelling through images. Bring your camera and creative vision!',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
    organizer: 'Photography Club',
    seats: 30,
  },
  {
    id: 8,
    title: 'Digital Marketing Masterclass',
    category: 'workshop',
    date: 'March 28, 2025',
    time: '2:00 PM - 5:00 PM',
    venue: 'Seminar Hall 2',
    description: 'Master the art of digital marketing with hands-on training in SEO, social media marketing, content strategy, and analytics. Perfect for aspiring marketers and entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
    organizer: 'Marketing Club',
    seats: 80,
  },
  {
    id: 9,
    title: 'Esports Championship',
    category: 'gaming',
    date: 'April 10, 2025',
    time: '10:00 AM - 8:00 PM',
    venue: 'Gaming Zone',
    description: 'Epic gaming tournament featuring popular titles including Valorant, CS:GO, and FIFA. Compete for prizes, glory, and bragging rights. All skill levels welcome!',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    organizer: 'Gaming Club',
    seats: 100,
  },
  {
    id: 10,
    title: 'Game Development Workshop',
    category: 'gaming',
    date: 'April 12, 2025',
    time: '1:00 PM - 5:00 PM',
    venue: 'Computer Lab 3',
    description: 'Introduction to game development using Unity and Unreal Engine. Learn game design principles, programming basics, and create your first game prototype.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    organizer: 'Game Dev Society',
    seats: 40,
  },
];
