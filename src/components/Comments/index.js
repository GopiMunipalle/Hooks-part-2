import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeSearch = e => {
    setComment(e.target.value)
  }

  const onClickButton = e => {
    e.preventDefault()
    const newComment = {
      id: uuidv4(),
      comment,
      name,
    }
    setName('')
    setComment('')
    setList(prevList => [...prevList, newComment])
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form>
        <NameInput
          type="text"
          placeholder="Your name"
          value={comment}
          onChange={onChangeSearch}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={name}
          onChange={onChangeName}
        />
        <CommentButton type="submit" onClick={onClickButton}>
          Comment
        </CommentButton>
      </Form>
      <CommentsList>
        {list.map(each => (
          <CommentItem commentDetails={each} key={each.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
