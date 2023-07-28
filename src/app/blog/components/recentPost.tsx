import Image from 'next/image'
import React from 'react'
import MainImage from '@/../public/Profil-Jesslyn-JKT48-featured-640x360.jpg'
import Author from '@/../public/freya.webp'
const RecentPost = () => {
  return (
    <div>
        <div className="mainRecent">
            <Image src={MainImage} className='imageRecentMain' alt='Main Image' />
            <div className="descriptionMain">
                <p>Entertaiment</p>
                <h2>JKT48: Kisah Inspiratif di Balik Kesuksesan Idol Grup Tanah Air</h2>
                <span>JKT48 adalah sebuah grup idol asal Indonesia yang telah meraih popularitas dan kesuksesan yang gemilang. Artikel ini mengungkap cerita inspiratif di balik kesuksesan grup musik ini, yang telah mencuri hati jutaan penggemar di seluruh tanah air. Dari awal perjalanan mereka hingga mencapai puncak popularitas, JKT48 telah menorehkan jejak luar biasa dan menjadi bukti nyata bahwa impian bisa menjadi kenyataan. Mari kita telusuri perjalanan mengagumkan para anggota JKT48 dan pesan positif yang menginspirasi banyak orang.</span>
                <div className="author">
                    <Image src={Author} className='imageAuthor' alt='author1' />
                    <div className="creator">
                        <p>Name</p>
                        <p>Jun 27, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentPost