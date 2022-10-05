import PostCard from "./layouts/PostCard";
import {useQuery, gql} from '@apollo/client'

const GET_POST = gql`
query{
  post{
    image
    title
    description
    _id
    timeStamp
  }
}`

type postType ={
  _id : string;
  title : string;
  description : string;
  image : string,
  timeStamp : string
}

const HSectionThree = () => {

  
  const {loading, data, error} = useQuery(GET_POST)
 
  let post : postType[] | null = data?.post;

  
  return (
    <>
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        All Post
      </h2>
      {loading && <span>Loading...</span>} 
      {error && <span>Error : {error.message}</span>} 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 justify-center">
        {post?.map(({image, title, description, _id, timeStamp})=>(
          <PostCard key={_id} image={image} title={title} description={description} timeStamp={timeStamp} _id={_id} />
        ))}
      </div>
    </>
  );
};

export default HSectionThree;
