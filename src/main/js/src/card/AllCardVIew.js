import React from 'react';
import CardViewInfo from './CardViewInfo';
import CardComponent from './CardComponent';

function AllCardView(props) {
  const isCardViewEnable = true;
  const isCardAvailable = true;
  return (
    <React.Fragment>
      <main>
        { isCardViewEnable ? <CardViewInfo /> : ""}
        { isCardAvailable ? <CardComponent/> : "No Card Available"}
      </main>
    </React.Fragment>
  );
}

export default AllCardView;