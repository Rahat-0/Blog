import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Modal from "../components/PMotal";
import {useQuery, gql} from '@apollo/client'

const GET_ONE_POST = gql`
  query GET_POST($id : String){
    post(_id : $id){
    _id
    title
    comment{
      message
      timeStamp
      comUser{
        name
      }
    }
  }
  }
`
type postCardType ={
  _id: string,
  image : string,
  title : string,
  description : string,
  timeStamp : string
}

const Post = () => {

  interface commentType{
    
      timeStamp : string;
      image : string;
      message : string
    
  }

  const id = useParams()

  const {error, loading, data} = useQuery(GET_ONE_POST, {variables : { id : id?.id}})
  console.log({error, loading, data});
  
  const comments : commentType[] | null = data?.post[0]?.comment;
  console.log(comments);
  
  const {state} = useLocation();
  const {_id, image, title, description, timeStamp} : postCardType = state;
  
  const [visible, setvisible] = useState({
    comment: false,
    message: true,
  });
  const [motal, setMotal] = useState(false);

  
  useEffect(() => {
    // setData(singlePost);
  }, []);

  return (
    <div>
      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider  ">
        <div
          className="absolute w-full h-full bg-cover bg-center hidden lg:block"
          style={{
            backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')",
          }}
        ></div>
        <div className="w-full h-full backdrop-blur">
          <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-28 lg:my-0 ">
            {/* <!--Main Col--> */}
            <div
              id="profile"
              className="w-full lg:w-3/5  rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
            >
              <div className="p-4 md:p-12 lg:text-left">
                {/* <!-- Image for mobile view--> */}
                <div
                  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>

                <h1 className="text-3xl font-bold pt-2 lg:pt-0">
                  {title}
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                <div
                  className="bg-slate-200 mt-1"
                  onClick={() => setvisible({ comment: false, message: true })}
                >
                  <p className="pt-2  text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <svg
                      className="h-4 fill-current text-green-700 pr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                    </svg>{" "}
                    {new Date(timeStamp).toLocaleString()}
                  </p>
                  <div
                    className={`${
                      visible?.message ? "h-52" : "h-20"
                    } relative w-full overflow-auto`}
                  >
                    <p className="absolute p-2">{description}</p>
                  </div>
                </div>

                <div
                  onClick={() => setvisible({ comment: true, message: false })}
                  className={`${
                    visible?.comment ? "h-72" : ""
                  } relative overflow-auto pt-12 pb-8  mt-3 `}
                >
                  <div className="absolute w-full h-full ">
                    {comments && comments?.length < 1 && <div className="text-center text-gray-800 w-full"> Nothing Comment Yet.</div>}
                    {comments?.map(({ timeStamp, image, message }) => (
                      <div
                        onDoubleClick={() => setMotal(true)}
                        className="grid grid-cols-7 justify-start items-start p-1 "
                      >
                        <img
                          className=" col-span-1 w-12 h-12 object-cover m-1 rounded-full mr-3  ring-4"
                          src={image}
                          alt="logo"
                        />
                        <div className="col-span-6  border p-1 rounded-xl bg-slate-300 hover:bg-slate-400">
                          <span className="text-sm"> {new Date(timeStamp).toLocaleString()}</span>
                          <p className=" text-gray-900 ">{message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* <!--Img Col--> */}
            <div className="w-full lg:w-2/5 ">
              {/* <!-- Big profile image for side bar (desktop) --> */}
              <img
                src="https://source.unsplash.com/MP0IUfwrn0A"
                alt=""
                className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block z-10"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        action={() => ""}
        data={[data]}
        state={[motal, setMotal]}
      />
    </div>
  );
};

export default Post;
