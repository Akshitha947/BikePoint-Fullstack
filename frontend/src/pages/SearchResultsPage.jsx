import { useSearchParams } from 'react-router-dom';
import { bikes } from '../bikeData';
import BikeCard from '../components/BikeCard';
import { motion } from 'framer-motion';
import Levenshtein from 'fast-levenshtein';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') || "";
  const category = searchParams.get('category') || "All";


  const categoryFilteredBikes = category && category !== 'All'
    ? bikes.filter(bike => bike.category === category)
    : bikes;

 
  const directMatches = query
    ? categoryFilteredBikes.filter(bike =>
        bike.name.toLowerCase().includes(query.toLowerCase())
      )
    : categoryFilteredBikes;

  let similarMatches = [];
  let suggestionText = `Found ${directMatches.length} matching model(s).`;

  
  if (directMatches.length === 0 && query) {
    suggestionText = "No direct matches found.";
    
    similarMatches = categoryFilteredBikes
      .map(bike => {
        const words = bike.name.toLowerCase().split(' ');
        const minDistance = Math.min(...words.map(word => Levenshtein.get(query.toLowerCase(), word)));
        return { ...bike, distance: minDistance };
      })
      .filter(bike => bike.distance <= 2) 
      .sort((a, b) => a.distance - b.distance);
  }

 
  const bikesToDisplay = directMatches.length > 0 ? directMatches : similarMatches;
  
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
        
          {query ? `Search Results for "${query}"` : 'Browse Models'}
          {category && category !== 'All' && ` in ${category}`}
        </h2>
        <p className="text-center text-white/60 mb-12">
          {suggestionText}
        </p>

       
        {directMatches.length === 0 && similarMatches.length > 0 && (
          <h3 className="text-xl font-bold text-center text-red-500 mb-8">
            Are you looking for one of these?
          </h3>
        )}

        {bikesToDisplay.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {bikesToDisplay.map((bike, index) => (
              <BikeCard key={bike.id} bike={bike} index={index} />
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-white text-lg">
            No models found matching your search. Please try another query or category.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;