import MovieButtons from "./MovieButtons";
import { ReactComponent as Top10 } from "./images/Top10.svg";
import {
  Content,
  Description,
  Item,
  Label,
  MovieBox,
  MovieData,
  MovieInformation,
  OtherInfo,
  Specification,
  StyledPage,
  Subtitle,
  Title,
  Top,
  Trailer,
} from "./styled";
import { Tags } from "./Tags";
import { useSelector } from "react-redux";
import { selectHide, selectMovie, selectState } from "../../features/Movie/movieSlice";


export const MoviePage = () => {
  const hideTrailer = useSelector(selectHide);
  const load = useSelector(selectState);
  const movie = useSelector(selectMovie)
  if (load.success===true) 
  return (
    <StyledPage>
      {movie.map(movie => ( 
      <Item key={movie.name}>
      <MovieBox >        
        <Title>{movie.title}</Title>
        <Trailer 
          hideTrailer={hideTrailer} 
          width="" 
          height=""
          id="video"
          SameSite="none" 
          Secure
          src={movie.iFrame}
          title="YouTube video player"
          allow="accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
        />
      </MovieBox>
      <MovieButtons />
      <MovieInformation>
        <Specification>
          <Tags />
          <Top><Top10 /><Content>{movie.topContent}</Content></Top>
          <Subtitle>{movie.subtitle}</Subtitle>
          <Description>
            {movie.description}
          </Description>
        </Specification>
        <MovieData>
          <Label>Cast:<OtherInfo>{" "}{movie.cast}</OtherInfo></Label>
          <Label>Genres:<OtherInfo>{" "}{movie.genres}</OtherInfo></Label>
          <Label>This show is:<OtherInfo>{" "}{movie.thisShowIs}</OtherInfo></Label>
        </MovieData>
      </MovieInformation>
      </Item>
      ))}      
    </StyledPage>
    
    
  )
  else return;
};