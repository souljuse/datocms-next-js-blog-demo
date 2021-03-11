export default function Cta() {
  return (
    <section className="section">
      <div className="half">
        <div>
          <h4 className="half__title">Join the waitlist!</h4>
          <p className="half__text">
            Leave your email to be notified as soon as AiMUG is available
          </p>
        </div>
        <div className="eform__container">
          <form className="eform">
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
