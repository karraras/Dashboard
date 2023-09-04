import Form from "../component/Form";
import Title1 from "../component/Title1";

function Profile() {
  return (
    <section>
      <div className="my-4">
        <Title1 title="CREATE USER" text="Create a New User Profile" />
      </div>
      <Form />
    </section>
  );
}

export default Profile;
