import { events } from '@/data/mockData';
import EventCard from '@/components/EventCard';
import Navbar from '@/components/Navbar';

const AllEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">All Events</h1>
          <p className="text-muted-foreground">Browse all upcoming campus events</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
