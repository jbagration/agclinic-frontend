'use client'

import { Section } from '../../ui/section'
import { Back } from '../../ui/back'
import { Title } from '../../ui/title'

import { SPartnersWrap } from './style'

import { IPartners } from '@/types/partnersType'
import Link from 'next/link'

export const Partners = ({ partners, apiUrl }: { partners: IPartners[]; apiUrl: string; }) => {
    return (
        <Section
            bgClass='bg3'
        >
            <div style={{ display: 'flex', width: '100%' }}>
    <Link href="/" passHref>
      <Back />
    </Link>
  </div>
            <Title text='Наши партнеры'/>
            <SPartnersWrap>
                {partners.map(({id, img, link}) => (
                    <a
                        key={id}
                        target='_blank'
                        rel='noopener noreferrer'
                        href={link}
                        
                        
                    >
                        <img
                            src={`${apiUrl}/public/uploads/images/${img}?height=212`}
                            alt={'partner1'}
                            style={{'borderRadius': '10px', 'width': 'auto'}}
                            width={530}
                            height={212}
                        />
                    </a>
                ))}
            </SPartnersWrap>
        </Section>
    )
}