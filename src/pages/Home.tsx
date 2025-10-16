import { events, categories } from '@/data/mockData';
import CategoryCard from '@/components/CategoryCard';
import Navbar from '@/components/Navbar';
import { Sparkles } from 'lucide-react';

const Home = () => {
  const getEventCountByCategory = (categoryId: string) => {
    return events.filter(event => event.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Welcome to CampusFest</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Discover Amazing
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Campus Events</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join exciting events, workshops, and competitions happening on campus. Your next adventure starts here!
            </p>
            <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-2xl px-8 py-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{events.length}</div>
                <div className="text-sm text-muted-foreground">Total Events</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">{categories.length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Explore Categories</h2>
          <p className="text-muted-foreground">Find events that match your interests</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              color={category.color}
              eventCount={getEventCountByCategory(category.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
