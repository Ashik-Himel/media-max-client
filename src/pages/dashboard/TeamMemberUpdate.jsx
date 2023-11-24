import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosInstance } from "../../hooks/useAxios";
import axios from "axios";

const TeamMemberUpdate = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data : teamMember = {}} = useQuery({
    queryKey: ["team", id],
    queryFn: async() => {
      const res = await axiosInstance(`team/${id}`);
      return res.data;
    }
  })

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

    if (img) {
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
  
            axiosInstance.put(`/team/${id}`, member)
              .then(res => {
                if (res.data?.modifiedCount > 0) {
                  Swal.fire({
                    title: "Updated!",
                    text: "Team member updated!",
                    icon: "success"
                  });
                  e.target.reset();
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
    } else {
        const member = {name, designation, contact: {
          facebook, email, whatsapp, phone
        }}
  
        axiosInstance.put(`/team/${id}`, member)
          .then(res => {
            if (res.data?.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Employee updated!",
                icon: "success"
              });
              e.target.reset();
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
    
  }

  return (
    <div>
      <Helmet>
        <title>Update Team Member - Media Max</title>
      </Helmet>

      <section className="px-6 py-10">
        <div className="mb-4 w-full max-w-[900px] mx-auto">
          <div className="btn btn-primary inline-flex items-center gap-1 cursor-pointer" onClick={() => navigate(-1)}>
            <IoIosArrowBack />
            <span>Back</span>
          </div>
        </div>

        <form className="bg-secondary [&_input]:text-black p-6 rounded-lg max-w-[900px] mx-auto" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-medium text-center mb-6">Update Team Member</h2>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="name" id="name" placeholder="Enter Member Name" defaultValue={teamMember?.name} required />
            </div>
            <div className="w-full">
              <label htmlFor="designation"  className="block font-medium mb-2">Designation</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="designation" id="designation" placeholder="Enter Member Designation" defaultValue={teamMember?.designation} required />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="facebook" className="block font-medium mb-2">Facebook</label>
              <input className="w-full px-4 py-2 rounded-md" type="url" name="facebook" id="facebook" placeholder="Enter Facebook ID Link" defaultValue={teamMember?.contact?.facebook} required />
            </div>
            <div className="w-full">
              <label htmlFor="email"  className="block font-medium mb-2">Email</label>
              <input className="w-full px-4 py-2 rounded-md" type="email" name="email" id="email" placeholder="Enter Member Email" defaultValue={teamMember?.contact?.email} required />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="whatsapp" className="block font-medium mb-2">WhatsApp</label>
              <input className="w-full px-4 py-2 rounded-md" type="tel" name="whatsapp" id="whatsapp" placeholder="Enter WhatsApp Number" defaultValue={teamMember?.contact?.whatsapp} required />
            </div>
            <div className="w-full">
              <label htmlFor="phone"  className="block font-medium mb-2">Phone</label>
              <input className="w-full px-4 py-2 rounded-md" type="tel" name="phone" id="phone" placeholder="Enter Phone Number" defaultValue={teamMember?.contact?.phone} required />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="photo" className="block font-medium mb-2">Photo</label>
            <input className="w-full px-4 py-2 rounded-md bg-white" type="file" name="photo" id="photo" accept="image/*" />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-6">Update Member</button>
        </form>
      </section>
    </div>
  );
};

export default TeamMemberUpdate;