import parse from "html-react-parser";

export default function QAndA({ qa: { question, answer } }) {
  return (
    <div className="q-a" key={question}>
      <h4 className="q-a__question"> {question} </h4>
      <p className="q-a__answer markdown">{parse(answer)}</p>
    </div>
  );
}
