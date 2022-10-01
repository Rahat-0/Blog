import { useState } from "react";
import Modal from "../components/PMotal";

const Post = () => {
  const [visible, setvisible] = useState({
    comment: false,
    message: true
  });
  const [motal, setMotal] = useState(false)

  const data = [
    {
      title: "post title here",
      description:
        "lorem nt-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam repellendus debitis sed modi pariatur facilis excepturi hic! Impedit fugiat doloribus amet. Reprehenderit, quas. Praesentium earum consequuntur ab facilis quis, quod aliquid porro maiores molestiae in? Fugit ad itaque illum ipsam nam commodi veniam, ipsum neque! Ipsa dolor aliquam, exercitationem, eos placeat nulla cumque totam, inventore eum eius saepe quidem beatae! Impedit placeat ab omnis voluptatibus, eum esse hic quas debitis autem minus sed cupiditate aut amet! Numquam explicabo error obcaecati. Alias, itaque. Sit pariatur dolorum voluptates quis, nisi vero optio est hic ipsa labore possimus eveniet eius maiores voluptas delectus cum repudiandae dignissimos ad totam, perspiciatis quidem id? Amet aliquid at earum dicta optio porro deleniti sequi minus! Tempora exercitationem molestias laudantium iure, quis rerum dignissimos tenetur accusantium non ullam officia illum odit expedita, iusto, iste laborum. Consequatur, officia! Libero quae recusandae tenetur nesciunt incidunt veritatis, aspernatur nemo tempora deleniti soluta obcaecati repudiandae maxime? Vitae quod rem dignissimos perferendis in error necessitatibus repellendus doloremque temporibus ad, nihil at deserunt aut eaque omnis corrupti qui suscipit velit? Quae, delectus ullam deleniti corporis cupiditate quos ab, laboriosam suscipit est consequatur provident, rem beatae! Debitis est itaque repellat accusamus, quod ipsa dicta vero sequi. Soluta similique voluptatibus nihil accusamus repellendus iure laudantium, sapiente est magnam aliquid reprehenderit nostrum quasi velit vitae rerum laborum quo doloribus quidem pariatur atque iusto molestiae! Laborum nemo at veniam asperiores? Itaque ipsum distinctio assumenda facilis quasi, omnis quos illum officia, inventore cupiditate consequuntur, error eos saepe amet voluptatem placeat dicta sapiente? In totam mollitia dolorem commodi doloremque dicta illo nostrum, cupiditate pariatur placeat maxime ipsum blanditiis non quia saepe dolores esse explicabo. Facere nobis aliquam quidem! Dignissimos dolorem qui nemo porro natus sapiente ipsam sed dolor non consequuntur. Ipsam mollitia repudiandae commodi perspiciatis eius quidem est suscipit!bg-c",
      timeStamp: "6/3/2022",
      image : "https://source.unsplash.com/MP0IUfwrn0A",
      comment: [
        {
          image: "https://source.unsplash.com/MP0IUfwrn0A",
          timeStamp: "02/04/2022",
          message:
            "antialiased text-gray-900 led text-gray-900 leading-normal trackineading-normal tracking-wider bg-cover bg-c",
        },
        {
          image: "https://source.unsplash.com/MP0IUfwrn0A",
          timeStamp: "02/04/2022",
          message: "antialfsadng-normal tracking-wider bg-cover bg-c",
        },
        {
          image: "https://source.unsplash.com/MP0IUfwrn0A",
          timeStamp: "02/04/2022",
          message: "a-cover bg-c",
        },
        {
          image: "https://source.unsplash.com/MP0IUfwrn0A",
          timeStamp: "02/04/2022",
          message:
            "antialias ed text-gray-900 leading-normal trackined text-gray-900 leading-normal trackined text-gray-900 leading-normal tracking-wider bg-cover bg-c",
        },
        {
          image: "https://source.unsplash.com/MP0IUfwrn0A",
          timeStamp: "02/04/2022",
          message: "antialiased text-gray-900tracking-wider bg-cover bg-c",
        },
      ],
    },
  ];

  return (
    <div>
      <div
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center  "
        style={{
          backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')",
          backgroundSize : "cover",
          objectFit : 'cover'
        }}
      >
        <div className="w-full h-full backdrop-blur-sm">
          <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-28 lg:my-0 ">
            {/* <!--Main Col--> */}
            <div
              id="profile"
              className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
            >
              {data.map(({title, description, timeStamp, comment, image}) => {

                return (
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
                      onClick={() =>
                        setvisible({ comment: false, message: true })
                      }
                    >
                      <p className="pt-2  text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                        <svg
                          className="h-4 fill-current text-green-700 pr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                        </svg>{" "}
                        {timeStamp}
                      </p>
                      <div
                        className={`${
                          visible?.message ? "h-52" : "h-20"
                        } relative w-full overflow-auto`}
                      >
                        <p className="absolute p-2">
                          {description}
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() =>
                        setvisible({ comment: true, message: false })
                      }
                      className={`${
                        visible?.comment && "h-72"
                      } relative overflow-auto pt-12 pb-8 h-40 mt-3 scroll-m-6`}
                    >
                       
                      <div className="absolute w-full h-full">
                        {comment.map(({timeStamp, image, message})=>(
                            <div className="grid grid-cols-7 justify-start items-start p-1 ">
                          <img
                            className=" col-span-1 w-12 h-12 object-cover m-1 rounded-full mr-3  ring-4"
                            src={image}
                            alt="logo"
                          />
                          <div className="col-span-6  border p-1 rounded-xl bg-slate-300 hover:bg-slate-400">
                            <span className="text-sm">
                              {" "}
                             {timeStamp}
                            </span>
                            <p className=" text-gray-900 ">
                             {message}
                            </p>
                          </div>
                        </div>
                        ))}
                        

                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <!--Img Col--> */}
            <div className="w-full lg:w-2/5">
              {/* <!-- Big profile image for side bar (desktop) --> */}
              <img
                src="https://source.unsplash.com/MP0IUfwrn0A"
                alt=""
                className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal action={()=> ''} setState={setMotal} />
    </div>
  );
};

export default Post;
