import ExploreBtn from "@/components/ExploreBtn"

const page = () => {
  return (
    <div>
      <section>
        <h1 className="text-center">The Hub For Every Dev <br/> Event You Cannot Miss</h1>
        <p className="text-center mt-5">Hackathons, Meet-ups and Conferences, All In One</p>
        <ExploreBtn/>

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <ul className="events">
            {[1, 2, 3, 4, 5].map((event) => (
  <li key={event}>Event {event}</li>
))}

          </ul>
        </div>

      </section>
    </div>
  )
}

export default page
