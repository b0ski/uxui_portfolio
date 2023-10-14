import Case from "../Case/Case.tsx";

const CaseGroup = () => {
  const caseData = [
    {
      title: "Card 1",
      content: "Content for Card 1",
    },
    {
      title: "Card 2",
      content: "Content for Card 2",
    },
    {
      title: "Card 3",
      content: "Content for Card 3",
    },
    {
      title: "Card 4",
      content: "Content for Card 4",
    },
  ];

  return (
    <div className="case-group">
      {caseData.map((card, index) => (
        <Case key={index} caseTitle={card.title} caseTag={card.content} />
      ))}
    </div>
  );
};

export default CaseGroup;
