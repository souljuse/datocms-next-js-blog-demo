import Date from "components/date";

export default function Cta() {
  return (
    <div className="half">
      <div>
        <Date dateString={"2021-03-12T14:07:45.265Z"} />
        <h4 className="half__title">Join the waitlist!</h4>
        <p className="half__text">
          AiMUG is not available yet but it will be shortly! Leave your email to
          be notified as soon as AiMUG is available.
        </p>
      </div>
      <div className="eform__container">
        <form
          className="eform"
          name="waiting-list"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="waiting-list" />
          <input
            type="email"
            name="email"
            required
            placeholder="myemail@mail.com"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
