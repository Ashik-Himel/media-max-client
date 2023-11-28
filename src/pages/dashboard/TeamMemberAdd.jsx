import { Helmet } from "react-helmet-async";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosInstance } from "../../hooks/useAxios";
import axios from "axios";

const TeamMemberAdd = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const designation = form.designation.value;
    const facebook = form.facebook.value;
    const email = form.email.value;
    const whatsapp = form.whatsapp.value;
    const phone = form.phone.value;
    const img = form.photo?.files[0];

    const formData = new FormData();
    formData.append('image', img);
  
    axios.post("https://api.imgbb.com/1/upload?key=efa03ba056d9d97f206451a43a8692bc", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        if (res.data.success) {
          const member = {name, photo: res.data.data.display_url, designation, contact: {
            facebook, email, whatsapp, phone
          }}

          axiosInstance.post(`/team`, member)
            .then(res => {
              if (res.data?.insertedId) {
                Swal.fire({
                  title: "Added!",
                  text: "Team member added!",
                  icon: "success"
                });
              }
            })
            .catch(err => {
              Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error"
              });
            })
        }
      })
      .catch(err => console.log(err))  
  }

  return (
    <div>
      <Helmet>
        <title>Add Member - Media Max</title>
      </Helmet>

      <section className="px-6 py-10">
        <div className="mb-4 w-full max-w-[900px] mx-auto">
          <div className="btn btn-primary inline-flex items-center gap-1 cursor-pointer" onClick={() => navigate(-1)}>
            <IoIosArrowBack />
            <span>Back</span>
          </div>
        </div>

        <form className="bg-secondary [&_input]:text-black p-6 rounded-lg max-w-[900px] mx-auto" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-medium text-center mb-6">Add Team Member</h2>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="name" id="name" placeholder="Enter Member Name" required />
            </div>
            <div className="w-full">
              <label htmlFor="designation"  className="block font-medium mb-2">Designation</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="designation" id="designation" placeholder="Enter Member Designation" required />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="facebook" className="block font-medium mb-2">Facebook</label>
              <input className="w-full px-4 py-2 rounded-md" type="url" name="facebook" id="facebook" placeholder="Enter Facebook ID Link" required />
            </div>
            <div className="w-full">
              <label htmlFor="email"  className="block font-medium mb-2">Email</label>
              <input className="w-full px-4 py-2 rounded-md" type="email" name="email" id="email" placeholder="Enter Member Email" required />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="whatsapp" className="block font-medium mb-2">WhatsApp</label>
              <input className="w-full px-4 py-2 rounded-md" type="tel" name="whatsapp" id="whatsapp" placeholder="Enter WhatsApp Number" required />
            </div>
            <div className="w-full">
              <label htmlFor="phone"  className="block font-medium mb-2">Phone</label>
              <input className="w-full px-4 py-2 rounded-md" type="tel" name="phone" id="phone" placeholder="Enter Phone Number" required />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="photo" className="block font-medium mb-2">Photo</label>
            <input className="w-full px-4 py-2 rounded-md bg-white" type="file" name="photo" id="photo" accept="image/*" />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-6">Add Member</button>
        </form>
      </section>
    </div>
  );
};

export default TeamMemberAdd;