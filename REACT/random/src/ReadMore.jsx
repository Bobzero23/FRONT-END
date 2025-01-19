import React from 'react';

const info = "*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*dLorem*ipsum*dolor*sit*amet,*consectetur*adipiscing*elit.*Sed*do*eiusmod*tempor*incididunt*ut*labore*et*d";

const ReadMore = () => {
  const [readMore, setReadMore] = React.useState(false);

  const handleReadMore = () => {
    setReadMore((currentValue) => {
      const newValue = !currentValue;
      return newValue;
    }  
    )
  };

  return (
    <div style={{ width: "300px", height: "400px", overflow: "hidden", margin: "0 auto" }}>
      <p style={{ width: "200px", wordWrap: "break-word" }}>{readMore ? info: `${info.substring(0, 100)}`}
        <a style={{color: "blue"}} onClick={handleReadMore}>...read more</a>
      </p>
    </div>
  );
};

export default ReadMore;