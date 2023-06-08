import ShowOne from "../Components/ShowOne";

function ShowPage({ loggedUser }) {
  return (
    <div className="main">
      <ShowOne loggedUser={loggedUser} />
    </div>
  );
}

export default ShowPage;
