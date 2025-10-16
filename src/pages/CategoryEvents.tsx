import { useParams } from 'react-router-dom';
import { events, categories } from '@/data/mockData';
import EventCard from '@/components/EventCard';
import Navbar from '@/components/Navbar';

const CategoryEvents = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = categories.find(cat => cat.id === categoryId);
  const categoryEvents = events.filter(event => event.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-foreground">Category not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-1 rounded-full text-sm font-medium mb-4`}>
            {category.name}
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">{category.name} Events</h1>
          <p className="text-muted-foreground">{categoryEvents.length} events in this category</p>
        </div>
        
        {categoryEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events available in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryEvents;
