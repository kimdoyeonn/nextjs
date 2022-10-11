const fs = require('fs')
const axios = require('axios')

let toilets = require('data/toilets.json')


export const toiletsData = {
  getAll: () => toilets,
  getByName: (name: string) => toilets.find((t: any) => t.FNAME.includes(name)),
  fetch,
}

async function fetch() {
  async function getData(start: number, offset: number) {
    const res = await axios.get(`http://openapi.seoul.go.kr:8088/${process.env.DATA_KEY}/json/SearchPublicToiletPOIService/${start}/${start + offset - 1}`)

    const { row: data, list_total_count: count } = res.data?.SearchPublicToiletPOIService
    return {
      data, count
    }
  }
  try {
    let start = 1
    const offset = 1000
    const { data, count } = await getData(start, offset);
    let toiletList = [...data]
    while (count > start + offset) {
      start += offset
      const { data, count } = await getData(start, offset);
      toiletList = [...toiletList, ...data]
    }

    console.log(toiletList.length)

    toilets = toiletList

  } finally {
    saveData()
  }
}

function saveData() {
  fs.writeFileSync('data/toilets.json', JSON.stringify(toilets))
}