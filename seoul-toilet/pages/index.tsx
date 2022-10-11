import axios from 'axios'
import type { NextPage } from 'next'
import Script from 'next/script';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

interface IProps {
  toiletList?: IToilet[],
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
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [toiletList, setToiletList] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('/api/toilet')
      const { toiletList } = await result.json();
      setToiletList(toiletList);
    })()
  }, [])

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
            level: 3
          };
          var map = new window.kakao.maps.Map(container, options);
          
          var markerPosition  = new window.kakao.maps.LatLng(lat, lon);
          var marker = new window.kakao.maps.Marker({
            position: markerPosition
          });
          marker.setMap(map);
          const markPin = ({ lat, lon, title }: { lat: number, lon: number, title: string }) => {
            const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
            const imageSize = new window.kakao.maps.Size(32, 34);
            const imageOption = {offset: new window.kakao.maps.Point(27, 69)}
            const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
            var markerPosition  = new window.kakao.maps.LatLng(lat, lon);
            var marker = new window.kakao.maps.Marker({
              map,
              title,
              position: markerPosition,
              image: markerImage,
            });
            marker.setMap(map);
          }
          toiletList?.forEach((toilet: IToilet) => {
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

// Home.getInitialProps = async function () {
  // async function getData(start: number, offset: number) {
  //   console.log(start, offset)
  //   const res = await axios.get(`http://openapi.seoul.go.kr:8088/${process.env.DATA_KEY}/json/SearchPublicToiletPOIService/${start}/${start + offset - 1}`)

  //   const { row: data, list_total_count: count } = res.data?.SearchPublicToiletPOIService
  //   return {
  //     data, count
  //   }
  // }
  // try {
  //   let start = 1
  //   const offset = 1000
  //   const { data, count } = await getData(start, offset);
  //   let toiletList = [...data]
  //   while (count > start + offset) {
  //     start += offset
  //     const { data, count } = await getData(start, offset);
  //     toiletList = [...toiletList, ...data]
  //   }

  //   console.log(toiletList.length)
//   try {

//   } catch(err) {
//     console.log(err)
//     return { err };
//   }
// }

export default Home
