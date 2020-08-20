import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <dt onClick={() => setActive(!active)} className={active && "active"}>
        {question}
      </dt>
      <dd className="ng-star-inserted">
        {active && (
          <>
            <p className="ng-star-inserted">{answer}</p>
            <span className="blades__permalink ng-star-inserted">
              <i className="icons">link</i>
            </span>
          </>
        )}
      </dd>
    </>
  );
};

export default Accordion;
