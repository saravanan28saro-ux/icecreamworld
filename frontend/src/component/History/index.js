import {useEffect, useState} from "react"
import {getHistory} from "../../api"

import {
  MainContainer,
  Heading,
  HistoryList,
  HistoryCard,
  Title,
  Content,
} from "./styledComponents"

const History = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const fetchHistory = async () => {
      const historyData = await getHistory()
      setHistory(historyData)
    }

    fetchHistory()
  }, [])

  return (
    <MainContainer>
      <Heading>History of Ice Cream</Heading>

      <HistoryList>
        {history.map(item => (
          <HistoryCard key={item.id}>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
          </HistoryCard>
        ))}
      </HistoryList>
    </MainContainer>
  )
}

export default History