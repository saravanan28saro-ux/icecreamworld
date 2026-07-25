import {useEffect, useState} from "react"
import {getReviews} from "../../api"

import {
  MainContainer,
  Heading,
  ReviewContainer,
  ReviewCard,
  User,
  Review,
} from "./styledComponents"

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = async () => {
    const data = await getReviews()
    setReviews(data)
  }

  return (
    <MainContainer>
      <Heading>User Reviews</Heading>

      <ReviewContainer>
        {reviews.map(item => (
          <ReviewCard key={item.userid}>
            <User>User #{item.userid}</User>
            <Review>{item.review}</Review>
          </ReviewCard>
        ))}
      </ReviewContainer>
    </MainContainer>
  )
}

export default Reviews