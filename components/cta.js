export default function Cta() {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h4 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <p>Leave your email to join the waitlist</p>
          </h4>
        </div>
        <div>
          <form className="search">
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
