import type { Metadata } from 'next'
import { Stocks } from '@/components/common/stocks/index'

type CustomMetadata = Metadata & {
    customTitle?: string
    customDescription?: string
	previewDescription?: string
}

export async function generateMetadata(): Promise<CustomMetadata> {
    const resSeo = await fetch(`${process.env.API_URL}/api/seo/info/stock/index?city_id=${process.env.TOWN}`, {
        next: { revalidate: 60 }
    }).then(response => response.json())

    return {
        title: resSeo.data.seo.customTitle || resSeo.data.seo.name,
        description: resSeo.data.seo.customDescription || resSeo.data.seo.description,
        previewDescription: resSeo.data.seo.preview_description, 
        alternates: {
            canonical: `${process.env.URL}/stock`,
        }
    }
}

async function getData() {
    const resStocks = await fetch(`${process.env.API_URL}/api/publication/city/${process.env.TOWN}?type=1`, {
        next: { revalidate: 60 }
    }).then(response => response.json())

    return {
        stocks: resStocks.data.publication.reverse()
    }
}

export default async function StocksPage() {
    const { stocks } = await getData()

    return (
        <Stocks stocks={stocks} apiUrl={process.env.API_URL ? process.env.API_URL : ''}/>
    )
}
