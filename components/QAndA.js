import parse from "html-react-parser";

export default function QAndA({ qa: { question, answer }, index }) {
  return (
    <section className="section--small" key={index}>
      <div className="q-a">
        <h4 className="q-a__question">{question}</h4>
        <div className="q-a__answer markdown">{answer && parse(answer)}</div>
      </div>
    </section>
  );
}
