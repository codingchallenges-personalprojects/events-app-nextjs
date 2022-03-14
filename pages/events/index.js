import Link from "next/link";

const Events = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        <li>
          <Link href="/events/eventId">Details</Link>
        </li>
      </ul>
    </>
  );
};

export default Events;
