import { Helmet } from "react-helmet-async";
import { axiosInstance } from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ChairmanUpdate = () => {
  const navigate = useNavigate();
  const [achievementsString, setAchievementsString] = useState('');
  const {data: chairman = {}, isLoading, refetch} = useQuery({
    queryKey: ["chairman"],
    queryFn: async() => {
      const res = await axiosInstance('/chairman');
      return res.data;
    }
  })
  useEffect(() => {
    let achievementsTemp = '';
    chairman?.achievements?.forEach(item => achievementsTemp += `*** ${item}\n`);
    setAchievementsString(achievementsTemp);
  }, [isLoading, chairman]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const designation = form.designation.value;
    const about = form.about.value;
    const achieveTemp = form.achievements.value;
    const achievements = achieveTemp.split('***').filter(item => item).map(item => item.replaceAll("\n", "").trim());
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
            const chairmanDetails = {name, photo: res.data.data.display_url, designation, about, achievements}
  
            axiosInstance.put(`/chairman`, chairmanDetails)
              .then(res => {
                if (res.data?.modifiedCount > 0) {
                  Swal.fire({
                    title: "Updated!",
                    text: "Chairman details updated!",
                    icon: "success"
                  });
                  refetch();
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
        const chairmanDetails = {name, designation, about, achievements}
  
        axiosInstance.put(`/chairman`, chairmanDetails)
          .then(res => {
            if (res.data?.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Employee updated!",
                icon: "success"
              });
              refetch();
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
        <title>Update Chairman Details - Media Max</title>
      </Helmet>

      <section className="px-6 py-10">
        <div className="mb-4 w-full max-w-[900px] mx-auto">
          <div className="btn btn-primary inline-flex items-center gap-1 cursor-pointer" onClick={() => navigate(-1)}>
            <IoIosArrowBack />
            <span>Back</span>
          </div>
        </div>

        <form className="bg-secondary [&_input]:text-black p-6 rounded-lg max-w-[900px] mx-auto" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-medium text-center mb-6">Update Chairman Details</h2>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="name" id="name" placeholder="Enter Member Name" defaultValue={chairman?.name} required />
            </div>
            <div className="w-full">
              <label htmlFor="designation"  className="block font-medium mb-2">Designation</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="designation" id="designation" placeholder="Enter Member Designation" defaultValue={chairman?.designation} required />
            </div>
          </div>

          <div className="w-full mb-5">
            <label htmlFor="photo" className="block font-medium mb-2">Photo</label>
            <input className="w-full px-4 py-2 rounded-md bg-white" type="file" name="photo" id="photo" accept="image/*" />
          </div>

          <div className="w-full mb-5">
            <label htmlFor="about" className="block font-medium mb-2">About</label>
            <textarea className="w-full px-4 py-2 rounded-md bg-white text-black resize-none h-[100px]" name="about" id="about" placeholder="Write About Chairman" defaultValue={chairman?.about} required></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="achievements" className="block font-medium mb-2">Achievements</label>
            <textarea className="w-full px-4 py-2 rounded-md bg-white text-black resize-none h-[100px]" name="achievements" id="achievements" placeholder="Write achievements separated using ***" defaultValue={achievementsString} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-6">Update Chairman Details</button>
        </form>
      </section>
    </div>
  );
};

export default ChairmanUpdate;