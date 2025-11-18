import EventCard from "@/components/EventCard"
import ExplorBtn from "@/components/ExplorBtn"
import { IEvent } from "@/database";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`);

  const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center">The hub for very dev <br /> Event you can&apos;t miss</h1>
      <p className="text-center mt-5">Hackathons, meetups and conferences all in one place</p>

      <ExplorBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event: IEvent) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home