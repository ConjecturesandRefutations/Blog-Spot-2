import { React, useState, useContext } from "react";
import { ThemeContext } from './../context/theme.context'; 
import Navbar from "../components/navbar";
import axios from "axios";
import service from "../api/service";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";


function Homepage(props) {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");


  const { theme } = useContext(ThemeContext);


      // ******** this function handles the file upload ********
      const handleFileUpload = (e) => {
    
        e.preventDefault();
   
       const uploadData = new FormData();
       
       uploadData.append("imgUrl", e.target.files[0] );
   
       service
         .uploadImage(uploadData)
         .then((response) => {
           setImgUrl(response.fileUrl);
         
         })
         .catch((err) => console.log("Error while uploading the file: ", err));
     };
   
     
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, date, content, imgUrl };

    const storedToken = localStorage.getItem('authToken');
    
    axios
      .post(`${API_URL}/api/blogs`, requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } } 
      )
      .then((response) => {
        // Reset the state
        setTitle("");
        setDate("");
        setContent("");
        setImgUrl("");
        props.refreshBlogs();
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className={'homepage ' + theme}>

      <Navbar/> 
 
      <div className="homeContent">
      <section class="addBlog">
    <h4 class="blogTitle">Write a Blog</h4>
    <form onSubmit={handleSubmit} class={'blogForm ' + theme}>
        <div class="row">
            <div class="title">
                <label for="">Blog Title</label>
                <input type="text" name="title"/>
            </div>
            <div class="date">
                <label for="">Date</label>
                <input type="text" name="date"/>            
            </div>
        </div>
        <div class="content">
            <label for="content">Blog Content</label>
            <textarea id="content" name="content" class="" rows="10">content</textarea>
        </div>
        <div class="submit">
            <input type="submit" name='submit' value="Submit" class={'submitInput ' + theme}/>
        </div>
    </form>
</section>
      </div>
      
    </div>

  );
}

export default Homepage;
