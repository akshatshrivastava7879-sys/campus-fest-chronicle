import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  color: string;
  eventCount: number;
}

const CategoryCard = ({ id, name, color, eventCount }: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 p-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity`} />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground mb-4">{eventCount} Events</p>
          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
            <span className="font-medium">Explore</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
