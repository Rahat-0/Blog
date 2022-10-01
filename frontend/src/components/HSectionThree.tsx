import PostCard from "./layouts/PostCard";
import postOne from "../assets/images/postOne.jpg";
import postTwo from "../assets/images/postTwo.png";
import postThree from "../assets/images/postThree.png";
import postFour from "../assets/images/postFour.png";
import postFive from "../assets/images/postFive.png";
const HSectionThree = () => {
  const data = [
    {
      image: postOne,
      title: "title one here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
    {
      image: postTwo,
      title: "title two here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
    {
      image: postThree,
      title: "title three here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
    {
      image: postFour,
      title: "title four here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
    {
      image: postOne,
      title: "title five here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
    {
      image: postFive,
      title: "title six here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
    {
      image: postOne,
      title: "title seven here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
    {
      image: postTwo,
      title: "title eight here",
      description:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,unde quia adipisci, nisi ipsum accusantium cumque distinctio    temporibus, rerum placeat quasi? Facilis cupiditate saepe accusa",
    },
  ];
  return (
    <>
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        All Post
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 justify-center">
        {data.map(({image, title, description})=>(
          <PostCard image={image} title={title} description={description} />
        ))}
      </div>
    </>
  );
};

export default HSectionThree;
