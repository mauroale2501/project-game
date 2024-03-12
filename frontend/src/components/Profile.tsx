import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    // oldPassword: "",
    // newPassword: "",
    // confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("form sent", formData);
  };

  return (
    <div className="container-profile">
      <h2 className="h2-profile">Profile</h2>
      <div className="avatar">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar6.png"
          alt="Profile"
          className="avatar-img rounded-circle"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-name-all">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="name"
              placeholder="John"
            />
          </div>
          <div className="input-last-name-all">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="last-name"
              placeholder="Doe"
            />
          </div>
          <div className="input-email-all">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="email"
              placeholder="john@doe.me"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Change
        </button>
      </form>
    </div>
  );
};

export default Profile;
