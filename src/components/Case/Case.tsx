import "./Case.css";
/*
interface Props {
  children: string;
  caseTitle: string;
  caseTag: string;
}

const Case = ({ children, caseTitle, caseTag }: Props) => {

  const caseData = [
    {
      title: 'Card 1',
      content: 'Content for Card 1',
    },
    {
      title: 'Card 2',
      content: 'Content for Card 2',
    },
    {
      title: 'Card 3',
      content: 'Content for Card 3',
    },
    {
      title: 'Card 4',
      content: 'Content for Card 4',
    },
  ];

  return (
    <>
      <a href="#">
        <img src={"src/assets/react.svg"} alt="Logo" />
        {children}
      </a>
      <h2 className="caseCard">{caseTitle}</h2>
      <p>{caseTag}</p>
    </>
  );
};

export default Case;
// CardGroup.js
import React from 'react';
import CustomCard from './Card'; // Import your Card component

const CardGroup = () => {
  const cardsData = [
    {
      title: 'Card 1',
      content: 'Content for Card 1',
    },
    {
      title: 'Card 2',
      content: 'Content for Card 2',
    },
    {
      title: 'Card 3',
      content: 'Content for Card 3',
    },
    {
      title: 'Card 4',
      content: 'Content for Card 4',
    },
  ];

  return (
    <div className="card-group">
      {cardsData.map((card, index) => (
        <CustomCard key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardGroup;
*/

interface Props {
  // children: string;
  caseTitle: string;
  caseTag: string;
}

const Case = ({ caseTitle, caseTag }: Props) => {
  return (
    <>
      <a href="#">
        <img src={"src/assets/react.svg"} alt="Logo" />
      </a>
      <h2>{caseTitle}</h2>
      <p>{caseTag}</p>
    </>
  );
};

export default Case;
