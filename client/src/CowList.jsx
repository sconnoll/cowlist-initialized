import React from "react";
import CowListEntry from './CowListEntry';

var CowList = ({cowList}) => {
  return (
    <table className="cow-list">
      <tbody>
        {cowList.map((cow, i) => (
          <CowListEntry key={i} cow={cow}/>
        ))}
      </tbody>
    </table>
  )
};


export default CowList;