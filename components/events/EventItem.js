import Link from "next/link";
import Button from "./ui/Button";
import {
  AdressContainer,
  ItemContainer,
  Image,
  TimeContainer,
  Title,
  List,
} from "./styles/Styles";
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAdress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <ItemContainer>
      <img
        src={"/" + image}
        alt={title}
        style={{ width: "200px", height: "200px" }}
      />

      <div>
        <Title>{title}</Title>
        <TimeContainer>
          <time>{readableDate}</time>
        </TimeContainer>
        <AdressContainer>
          <address>{formattedAdress}</address>
        </AdressContainer>
        <div>
          <Button link={exploreLink}>Explore Link</Button>
        </div>
      </div>
    </ItemContainer>
  );
};

export default EventItem;
