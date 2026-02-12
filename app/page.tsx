import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"

const events = [
  {
    image: '/images/event1.png', 
    title: 'Event 1',
    slug: 'event-1',
    location: 'location-1',
    date: 'Date-1', 
    time: 'Time-1',
  },
]

const page = () => {
  return (
    <div>
      <section>
        <h1 className="text-center">The Hub For Every Dev <br/> Event You Cannot Miss</h1>
        <p className="text-center mt-5">Hackathons, Meet-ups and Conferences, All In One</p>
        <ExploreBtn/>

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <div className="events">
  {events.map((event) => (
    <div key={event.title}>
      <EventCard {...event} />
    </div>
  ))}
</div>

        </div>

      </section>
    </div>
  )
}

export default page
