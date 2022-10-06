import axios from 'axios'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

interface IProps {
  data?: IToilet[],
  count?: number,
  err?: any,
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
  const { data: toiletLoc, err } = props;
  console.log(err)
  return (
    <>
      <div className={styles.container}>
        <h1>서울시 화장실 위치</h1>
        <ul>
          {err ? <h3>err</h3> : toiletLoc?.map((toilet: IToilet) => {
            return <>
              <li>{toilet.FNAME}</li>
              <li>{toilet.POI_ID}</li>
            </>
          })}
        </ul>
      </div>
    </>
  )
}

Home.getInitialProps = async function () {
  try {
    const res = await axios.get(`http://openapi.seoul.go.kr:8088/4a73667662646f793130395567645751/json/SearchPublicToiletPOIService/1/100/우성스포츠센터`)
    console.log(res.data.SearchPublicToiletPOIService)
    
    const { row: data, list_total_count: count } = res.data.SearchPublicToiletPOIService
    return {
      data, count
    }
  } catch(err) {
    console.log(err)
    return { err };
  }
}

export default Home
