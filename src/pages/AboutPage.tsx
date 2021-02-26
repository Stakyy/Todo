import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas exercitationem assumenda
        adipisci cumque illo voluptates dolor, minus non accusamus?
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Назад
      </button>
    </>
  );
};

export default AboutPage;
