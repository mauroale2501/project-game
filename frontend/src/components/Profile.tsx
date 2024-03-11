import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstname: "Brown",
    lastname: "Asher",
    email: "brown@asher.me",
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 className="h3 mb-4 page-title">Profile</h2>
          <div className="my-4">
            <div className="text-center mb-5">
              <div className="avatar avatar-xl">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="Profile"
                  className="avatar-img rounded-circle"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Brown"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Asher"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Asher"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Save Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
