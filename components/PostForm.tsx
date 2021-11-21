import React,{useState,useCallback} from 'react'

 

const PostForm: React.FC= (props) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  
  const onSubmit= async (e) => {
    e.preventDefault()
    try {
      const createdPost = await fetch('/api/createPost',{
        method:'POST',
        body:JSON.stringify({
          title ,
          content  ,
          published :true,
          authorId:null,
        })
      })
    } catch (error) {
      console.log(error)
    }

  }

  const onTitleChange= useCallback((event)=>{
     setTitle(event?.target?.value)
  },[setTitle])
  const onContentCHange= useCallback((event)=>{
     setContent(event?.target?.value)
  },[setContent])


  return (
      <form onSubmit={onSubmit} >
        <input value={title} placeholder="post title" onChange={onTitleChange}   />
        <textarea value={content} placeholder="post content" onChange={onContentCHange}   />
        <button type="submit" >
          submit
        </button>
      </form>
    )
  }
  

export default PostForm
