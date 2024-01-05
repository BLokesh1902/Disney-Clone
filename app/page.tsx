// in the home page there will be one big carousel banner wrapper and 3 Movie carousel banners which are upcomming top rated and popular

import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";


export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">

      {/* Carousel Banner Wrapper*/}
      <CarouselBannerWrapper/>

      <div className="flex flex-col space-y-2 xl:-mt-48">

        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />   {/* All 3Movie Carousel Banners*/}
        <MoviesCarousel movies={topRatedMovies} title="Top Rated"  />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
