import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
import { MainContainer } from "../components/events/styles/Styles";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <MainContainer>
      <EventList items={featuredEvents} />
    </MainContainer>
  );
};

export default HomePage;
