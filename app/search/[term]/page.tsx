import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props={
    params:{
        term:string;
    };
};


async function SearchPage({params:{term}}:Props) {
    if (!term) notFound();             // this is used to protect the page if nothing is typed after search

    const termToUse=decodeURI(term);  //when we give spaces when we are typing in search like star wars so it will place special characters in the url for that space and we don't want that to be shown on the screen so we use this the special characters will be present on the url but we use this term to display on the screen where ever we want so we use this  


    // Api call to get the searched movies
    
    const movies=await getSearchedMovies(termToUse)


    // Api call to get the popular movies
    
    const popularMovies = await getPopularMovies();

      return (
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
            <h1 className="text-6xl font-bold px-10">
              Results for {termToUse}
            </h1>
            {/* now we will have 2 movie carousel where 1 movies carousel is vertical and shows the movies that u have searched for and the other carousel will the popular movies that may have ur interest and this will be horizontally aligned */}
            <MoviesCarousel title="Movies" movies={movies} isVertical />
            <MoviesCarousel title="You May Also Like" movies={popularMovies} />
          </div>
        </div>
      );
}
export default SearchPage;