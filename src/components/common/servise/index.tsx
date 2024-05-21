'use client'

import Link from 'next/link'

import React, { useEffect, useState } from 'react'

import { Back } from '../../ui/back'
import { Title } from '../../ui/title'

import {
    SSection,
    SPaddingWrap,
    SH2,
    SDesc,
    SWrap
} from './style'
import {
    SContentLink
} from '../uniqueServices/style'

import { IService } from '@/types/servicesСategoryType'

export const Service = ({ service, apiUrl }: { service: IService; apiUrl: string; }) => {

	const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1600);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <SSection>
            <SPaddingWrap>
            <div style={{ display: 'flex', width: '100%' }}>
    <Link href="/unique_services" passHref>
      <Back />
    </Link>
  </div>
                <Title text={service.title}/>
            </SPaddingWrap>
            {service.main_img 
                ? <img
                    src={`${apiUrl}/public/uploads/images/${service.main_img}?height=${screenWidth > 1440 ? 1184 : screenWidth > 1024 ? 813 : screenWidth > 768 ? 613 : screenWidth > 425 ? 413 : 313 }`}
                    alt='BG'
                   
                    style={{'width': '100%', 'height': 'auto'}}
                  /> 
                : null
            }
            <SWrap>
                <SH2>
                    Описание услуги
                </SH2>
                <SDesc dangerouslySetInnerHTML={{ __html: service.text }}/>
                <Link
                    href='/price'
                    style={{
                        'maxWidth': '300px',
                        'width': '100%'
                    }}
                >
                    <SContentLink>
                        Узнать стоимость
                    </SContentLink>
                </Link>
            </SWrap>
        </SSection>
    )
}
