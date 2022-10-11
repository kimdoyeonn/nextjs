// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { toiletsData } from '../../helpers/toilets-data'

export interface IToilet {
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

type Data = {
  toiletList: IToilet[],
  count?: number,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await toiletsData.fetch();
  const toiletList = toiletsData.getAll()
  res.status(200).json({ toiletList })
}
