import NewForm from "../Components/NewForm";

function NewPage({ loggedUser }) {
  return (
    <div className="main">
      <NewForm loggedUser={loggedUser} />
    </div>
  );
}
export default NewPage;
