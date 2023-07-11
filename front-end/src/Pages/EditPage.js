import EditForm from "../Components/EditForm";

function EditPage({ loggedUser }) {
  return (
    <div className="main">
      <EditForm loggedUser={loggedUser} />
    </div>
  );
}

export default EditPage;
