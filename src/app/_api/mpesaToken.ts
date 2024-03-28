import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth = Buffer.from(`${process.env.MPESA_API_KEY}:${process.env.MPESA_API_SECRET}`).toString(
    'base64',
  )

  try {
    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      },
    )

    res.status(200).json({ token: response.data.access_token })
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || {})
  }
}
