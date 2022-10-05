import axios from 'axios'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styles from '../styles/Home.module.css'

interface IProps {
  data: any,
}

const Home: NextPage<IProps> = (props: IProps) => {
  const stationData = props.data.row
  console.log(stationData)
  return (
    <>
      <div className={styles.container}>
        <h1>따릉이 정류소 현황</h1>
        <ul>
          {stationData.map((station: any) => {
            return <li key={station.stationId}>
              { station.stationName }
            </li>
          })}
        </ul>
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "100%", height: '100%' }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{color:"#000"}}>Hello World!</div>
          </MapMarker>
        </Map>
      </div>
    </>
  )
}

Home.getInitialProps = async function () {
  const res = await axios.get(`http://openapi.seoul.go.kr:8088/7476585154646f7938364c686c4d52/json/bikeList/1/100/`)
  return {
    data: res.data.rentBikeStatus,
  }
}

export default Home
