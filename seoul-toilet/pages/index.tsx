import axios from 'axios'
import type { NextPage } from 'next'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

interface IProps {
  toiletList?: IToilet[]
  count?: number
  err?: any
}

interface IToilet {
  POI_ID: string
  FNAME: string
  ANAME: string
  CNAME: string
  CENTER_X1: number
  CENTER_Y1: number
  X_WGS84: number
  Y_WGS84: number
  INSERTDATE: string
  UPDATEDATE: string
}

declare global {
  interface Window {
    kakao: any
  }
}

interface IPosition {
  title: string
  latlng: any
}

const Home: NextPage<IProps> = (props: IProps) => {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false)
  const [distance, setDistance] = useState<number>(100)
  const [map, setMap] = useState<any>(null)
  const [location, setLocation] = useState<{ lat: number; lon: number }>({
    lat: 0,
    lon: 0,
  })
  const [locMarker, setLocMarker] = useState<any>(null)
  const [markers, setMarkers] = useState<any[]>([])
  const { toiletList } = props

  useEffect(() => {
    const $script = document.createElement('script')
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`
    $script.addEventListener('load', () => setMapLoaded(true))
    document.head.appendChild($script)

    window?.kakao.maps.load(() => {
      var container = document.getElementById('map')
      let lat = 33.450701
      let lon = 126.570667
      if (navigator) {
        navigator.geolocation.watchPosition(
          (pos) => {
            const crd = pos.coords
            lat = crd.latitude
            lon = crd.longitude
            setLocation({ lat, lon })
            let options = {
              center: new window.kakao.maps.LatLng(lat, lon),
              level: 3,
            }
            var map = new window.kakao.maps.Map(container, options)

            var markerPosition = new window.kakao.maps.LatLng(lat, lon)
            var marker = new window.kakao.maps.Marker({
              position: markerPosition,
            })
            setLocMarker(marker)
            marker.setMap(map)
            setMap(map)
            const markPin = ({
              lat,
              lon,
              title,
            }: {
              lat: number
              lon: number
              title: string
            }) => {
              const imageSrc =
                'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
              const imageSize = new window.kakao.maps.Size(32, 34)
              const imageOption = {
                offset: new window.kakao.maps.Point(27, 69),
              }
              const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
              )
              var markerPosition = new window.kakao.maps.LatLng(lat, lon)
              var marker = new window.kakao.maps.Marker({
                map,
                title,
                position: markerPosition,
                image: markerImage,
              })
              setMarkers((prev) => [...prev, marker])
              marker.setMap(map)
            }
            toiletList?.forEach((toilet: IToilet) => {
              function getDistanceFromLatLonInKm(
                lat1: number,
                lng1: number,
                lat2: number,
                lng2: number
              ) {
                function deg2rad(deg: number) {
                  return deg * (Math.PI / 180)
                }

                var R = 6371 // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1) // deg2rad below
                var dLon = deg2rad(lng2 - lng1)
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) *
                    Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2)
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
                var d = R * c // Distance in km
                return d
              }
              if (
                getDistanceFromLatLonInKm(
                  lat,
                  lon,
                  toilet.Y_WGS84,
                  toilet.X_WGS84
                ) <
                distance / 1000
              ) {
                markPin({
                  lat: toilet.Y_WGS84,
                  lon: toilet.X_WGS84,
                  title: toilet.FNAME,
                })
              }
            })
          },
          (err) => {
            window.alert(err)
          }
        )
      }
    })
  }, [mapLoaded])

  useEffect(() => {
    toiletList?.forEach((toilet: IToilet) => {
      function getDistanceFromLatLonInKm(
        lat1: number,
        lng1: number,
        lat2: number,
        lng2: number
      ) {
        function deg2rad(deg: number) {
          return deg * (Math.PI / 180)
        }

        var R = 6371 // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1) // deg2rad below
        var dLon = deg2rad(lng2 - lng1)
        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2)
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        var d = R * c // Distance in km
        return d
      }

      const markPin = ({
        lat,
        lon,
        title,
      }: {
        lat: number
        lon: number
        title: string
      }) => {
        const imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
        const imageSize = new window.kakao.maps.Size(32, 34)
        const imageOption = {
          offset: new window.kakao.maps.Point(27, 69),
        }
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        )
        var markerPosition = new window.kakao.maps.LatLng(lat, lon)
        var marker = new window.kakao.maps.Marker({
          map,
          title,
          position: markerPosition,
          image: markerImage,
        })
        marker.setMap(map)
      }
      if (
        getDistanceFromLatLonInKm(
          location.lat,
          location.lon,
          toilet.Y_WGS84,
          toilet.X_WGS84
        ) <
        distance / 1000
      ) {
        markPin({
          lat: toilet.Y_WGS84,
          lon: toilet.X_WGS84,
          title: toilet.FNAME,
        })
      }
    })

    return () => {
      setMarkers([])
    }
  }, [distance])

  const searchToilet = (distance: number) => {
    setDistance(distance)
  }

  return (
    <>
      <div className={styles.container}>
        <h1>서울시 화장실 위치</h1>
        <button onClick={() => searchToilet(100)}>100m</button>
        <button onClick={() => searchToilet(300)}>300m</button>
        <button onClick={() => searchToilet(500)}>500m</button>
        <button onClick={() => searchToilet(700)}>700m</button>
        {distance}
        <div id="map" style={{ height: '500px', width: '500px' }}></div>
      </div>
    </>
  )
}

Home.getInitialProps = async function () {
  const { toiletList } = await (
    await fetch('http://localhost:3000/api/toilet')
  ).json()
  return { toiletList }
}

export default Home
