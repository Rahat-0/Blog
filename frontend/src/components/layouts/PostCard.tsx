import postOne from '../../assets/images/postOne.jpg'

type postCardType ={
  image : string,
  title : string,
  description : string
}

const PostCard = ({image, title, description} : postCardType ) => {
  return (
    <div>
        <div
        className="bg-gray-400 bg-opacity-80 m-6  h-full rounded-lg w-auto"
      >
        <img
          className="w-full object-cover"
          style={{height: "15rem"}}
          src={image}
          alt="logo"
        />
        <div className='m-3'>
        <h3 className="text-lg border-b font-bold uppercase border-red-300">{title}</h3>
        <p >{description?.length < 110 ? description : description.slice(0, 100)  } <a className=' font-bold text-blue-900' href="##">more...</a> </p>
        </div>
        
      </div>
    </div>
  )
}

export default PostCard