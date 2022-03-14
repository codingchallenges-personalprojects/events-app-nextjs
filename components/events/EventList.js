import EventItem from "./EventItem";
import { Lists } from "./Styles/Styles";

const EventList = (props) => {
  const { items } = props;
  return (
    <>
      <Lists>
        {items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </Lists>
    </>
  );
};

export default EventList;
