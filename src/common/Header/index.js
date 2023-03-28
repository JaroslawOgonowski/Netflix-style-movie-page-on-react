import { useDispatch, useSelector } from "react-redux";
import { selectMenu, selectMovies, toggleMenu, toggleMovie } from "../../features/Movie/movieSlice";
import { Box, HeaderContainer, Item, ListOfMoviesComponent, Logo, Menu, MenuContainer, MenuElement, MenuFrame, MenuTitle, NoSearchResultMsg, SearchMovieInput } from "./styled"
import TrailersLogo from "./images/Logo.png"
import { useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const hideMenu = useSelector(selectMenu);

  function MoviesList({ movies }) {
    if (movies.length > 0) {
      return (
        <ListOfMoviesComponent>
          {movies.map(movie => (
            <Item key={movie.description}
              onClick={
                () => dispatch(toggleMovie(movie.id))
              }>
              {movie.title}
            </Item>
          ))}
        </ListOfMoviesComponent>
      );
    }
    return <NoSearchResultMsg>We couldn't find <br />this video</NoSearchResultMsg>;
  };

  function getFilteredMoviesForText(text) {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
  };

  function filterMovies(e) {
    const text = e.currentTarget.value;
    const filteredMovies = getFilteredMoviesForText(text);
    setFilteredMovies(filteredMovies)
  };
  const [filteredMovies, setFilteredMovies] = useState("");

  return (
    <HeaderContainer>
      <a href="https://jaroslawogonowski.github.io/Trailer-dot-com/">
        <Logo src={TrailersLogo} alt="" />
      </a>
      <Menu>
        <MenuFrame onMouseEnter={() => dispatch(toggleMenu())}>
          <MenuElement>Get movie ⁞⁞</MenuElement>
        </MenuFrame>
        <Box hideMenu={hideMenu}>
          <SearchMovieInput placeholder="Search 🎬" onInput={filterMovies} />
          <MoviesList movies={filteredMovies || movies} />
        </Box>
      </Menu>
    </HeaderContainer>
  );
};
