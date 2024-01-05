import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Genres } from "@/typings";
import { ChevronDown } from "lucide-react";
import Link from "next/link";


async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };
  //   caching concept

  //   if i make a request the first person will make a real connection to the db get that value back and then it will cash it on the cdn to the servers now hat will happen is when the second users comes and makes the same request he will be getting the cached version and every one who comes after him will get the cached version and then after 24 hrs when someone comes around and makes a request
  //   as the 24 hrs time is done so the cache will do something called as cache miss where it will do a fresh request and then the process repeats so before if there were 10000 requests per day now u have limited it to one if something where the data changes continuosly dont cache it but if the data does not change cache it
  

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data.genres.map((genre) => (
          <DropdownMenuItem className="cursor-pointer" key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default GenreDropdown;
    