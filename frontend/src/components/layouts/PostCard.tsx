import { Link } from 'react-router-dom'

type postCardType ={
  _id: string,
  image : string,
  title : string,
  description : string,
  timeStamp : string
}

const PostCard = ({image, title, description, _id, timeStamp} : postCardType ) => {
  return (
    <div>
        <div
        className="bg-gray-400 bg-opacity-80 m-6  h-full rounded-lg w-auto"
      >
        <Link state={{image, title, description, _id, timeStamp}} to={`post/${_id}`}>
          <img
            className="w-full object-cover"
            style={{height: "15rem"}}
            src={image}
            alt="logo"
          />
        </Link>
        
        <div className='m-3'>
        <h3 className="text-lg border-b font-bold uppercase border-red-300">{title}</h3>
        <p >{description?.length < 110 ? description : description.slice(0, 100) + <Link  className=' font-bold text-blue-900' to={`post/${_id}`}>more...</Link> }  </p>
        </div>
        
      </div>
    </div>
  )
}

export default PostCard