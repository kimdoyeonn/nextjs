import axios from 'axios'
import type { NextPage } from 'next'
import Script from 'next/script';
import { useEffect, useState } from 'react';
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

declare global {
  interface Window {
    kakao: any;
  }
}

interface IPosition {
  title: string,
  latlng: any,
}

const Home: NextPage<IProps> = (props: IProps) => {
  const { data: toiletLoc, err } = props;
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
    
    window?.kakao.maps.load(() => {
      var container = document.getElementById('map');
      let lat = 33.450701;
      let lon = 126.570667;
      if (navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const crd = pos.coords;
          lat = crd.latitude;
          lon = crd.longitude;
          let options = {
            center: new window.kakao.maps.LatLng(lat, lon),
            level: 10
          };
          var map = new window.kakao.maps.Map(container, options);
          
          var markerPosition  = new window.kakao.maps.LatLng(lat, lon);
          var marker = new window.kakao.maps.Marker({
            position: markerPosition
          });
          marker.setMap(map);
          const markPin = ({ lat, lon, title }: { lat: number, lon: number, title: string }) => {
            var markerPosition  = new window.kakao.maps.LatLng(lat, lon);
            console.log(title);
            var marker = new window.kakao.maps.Marker({
              map,
              title,
              position: markerPosition
            });
            marker.setMap(map);
          }
          toiletLoc?.forEach((toilet: IToilet) => {
            console.log(toilet)
            markPin({ lat: toilet.Y_WGS84, lon: toilet.X_WGS84, title: toilet.FNAME })
          })
        }, (err) => {
          window.alert(err)
        })
      }
    })
    
  }, [mapLoaded]);

  return (
    <>
      <div className={styles.container}>
        <h1>서울시 화장실 위치</h1>
        <ul>
        </ul>
        <div id="map" style={{ height: '500px', width: '500px' }}></div>
      </div>
    </>
  )
}

Home.getInitialProps = async function () {
  try {
    const res = await axios.get(`http://openapi.seoul.go.kr:8088/${process.env.DATA_KEY}/json/SearchPublicToiletPOIService/1/100`)
    
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
