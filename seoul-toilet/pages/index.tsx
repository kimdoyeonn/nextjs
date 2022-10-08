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

const Home: NextPage<IProps> = (props: IProps) => {
  const { data: toiletLoc, err } = props;
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [displayMap, setDisplayMap] = useState(null);
  console.log(err)
  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`;
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);
  useEffect(() => {
    if (!mapLoaded) return;
    
    window?.kakao.maps.load(() => {
      var container = document.getElementById('map');
      let lat = 33.450701;
      let lon = 126.570667;
      if (navigator) {
        console.log(navigator)
        navigator.geolocation.getCurrentPosition((pos) => {
          const crd = pos.coords;
          lat = crd.latitude;
          lon = crd.longitude;
          var options = {
            center: new window.kakao.maps.LatLng(lat, lon),
            level: 3
          };
          
          var map = new window.kakao.maps.Map(container, options);
          setDisplayMap(map);
          var markerPosition  = new window.kakao.maps.LatLng(lat, lon);
          var marker = new window.kakao.maps.Marker({
            position: markerPosition
          });
          marker.setMap(map);
        }, (err) => {
          window.alert(err)
        })
      }

    })
    
  }, [mapLoaded]);

  const markPin = ({ lat, lon }: { lat: number, lon: number }) => {
    var markerPosition  = new window.kakao.maps.LatLng(lat, lon);
    var marker = new window.kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(displayMap);
  }

  useEffect(() => {
    if (!mapLoaded) return;
    toiletLoc?.map((toilet: IToilet) => {
      markPin({ lat: toilet.CENTER_X1, lon: toilet.CENTER_Y1 })
    })
  },[])

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
    const res = await axios.get(`http://openapi.seoul.go.kr:8088/${process.env.DATA_KEY}/json/SearchPublicToiletPOIService/1/1000`)
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
