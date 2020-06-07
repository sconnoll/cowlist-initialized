import CowListEntry from '.CowListEntry.js';

var CowList = ({cowList}) => {
  return (
    <table className="cow-list">
      <tbody>
        {cowList.map(cow => (
          <CowListEntry cow={cow}/>
        ))}
      </tbody>
    </table>
  )
};

export default CowList;