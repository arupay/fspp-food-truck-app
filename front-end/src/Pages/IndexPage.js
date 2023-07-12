import ShowAll from "../Components/ShowAll";

function IndexPage({ loggedUser }) {
  return (
    <section className="main">
      <ShowAll loggedUser={loggedUser} />
    </section>
  );
}

export default IndexPage;
