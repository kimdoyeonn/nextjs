import axios from 'axios'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

interface IProps {
  data: IToilet[],
  count: number,
}

interface IToilet {
  POI_ID: string,
  FNAME: string,
  ANAME: string,
  CNAME: string,
  CENTER_X1: number,
  CENTER_Y1: number,
  X_WGS84: number,
  Y_WGS84: number,
  INSERTDATE: string,
  UPDATEDATE: string,
}

const Home: NextPage<IProps> = (props: IProps) => {
  const { data: toiletLoc } = props;
  return (
    <>
      <div className={styles.container}>
        <h1>서울시 화장실 위치</h1>
        <ul>
          {toiletLoc.map((toilet: IToilet) => {
            return <li>{toilet.FNAME}</li>
          })}
        </ul>
      </div>
    </>
  )
}

Home.getInitialProps = async function () {
  const res = await axios.get(`http://openapi.seoul.go.kr:8088/4a73667662646f793130395567645751/json/SearchPublicToiletPOIService/1/100/`)
  console.log(res.data.SearchPublicToiletPOIService)

  const { row: data, list_total_count: count } = res.data.SearchPublicToiletPOIService
  return {
    data, count
  }
}

export default Home
