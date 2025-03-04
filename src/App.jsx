import React from 'react'
import './App.css'
import Card from './components/Card';

//const
const metal = [
  {title: "System of a Down", description: "Armenian-American heavy metal band formed in Glendale, California in 1994. The band currently consists of Serj Tankian (lead vocals, keyboards), Daron Malakian (guitar, vocals), Shavo Odadjian (bass, backing vocals), and John Dolmayan (drums).", link: "https://en.wikipedia.org/wiki/System_of_a_Down"},
  {title: "MAXIMUM THE HORMONE", description: "Japanese nu metal band formed in Hachioji, Tokyo in 1998. The band's lineup has consisted of vocalist Daisuke-han, drummer Nao, guitarist Maximum the Ryo-kun, and bassist Ue-chan.", link: "https://en.wikipedia.org/wiki/Maximum_the_Hormone"},
  {title: "Babymetal", description: "Japanese kawaii metal band formed in 2010. The band consists of Suzuka Nakamoto as 'Su-metal', Moa Kikuchi as 'Moametal', and Riho Sayashi as 'Riho-metal'. The band is produced by Kobametal from the Amuse talent agency.", link: "https://en.wikipedia.org/wiki/Babymetal"},
  {title: "Rammstein", description: "German NDH hard rock band formed in Berlin in 1994. The band's lineup—consisting of lead vocalist Till Lindemann, lead guitarist Richard Kruspe, rhythm guitarist Paul Landers, bassist Oliver Riedel, drummer Christoph Schneider, and keyboardist Christian Lorenz—has remained unchanged throughout their history.", link: "https://en.wikipedia.org/wiki/Rammstein"}
]

const rock = [
  {title: "Yes", description: "English progressive rock band formed in London in 1968 by singer Jon Anderson, bassist Chris Squire, guitarist Peter Banks, keyboardist Tony Kaye, and drummer Bill Bruford. The band has undergone numerous formations throughout its history; nineteen musicians have been full-time members.", link: "https://en.wikipedia.org/wiki/Yes_(band)"},
  {title: "Asian-Kung Fu Generation", description: "Japanese alternative rock band formed in Yokohama, Japan, in 1996. For nearly its entire career, the band has consisted of vocalist Masafumi Gotoh, guitarist Kensuke Kita, bassist Takahiro Yamada, and drummer Kiyoshi Ijichi.", link: "https://en.wikipedia.org/wiki/Asian_Kung-Fu_Generation"},
  {title: "Queen", description: "British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals), and John Deacon (bass guitar).", link: "https://en.wikipedia.org/wiki/Queen_(band)"},
  {title: "Radiohead", description: "English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke (vocals, guitar, piano, keyboards), brothers Jonny Greenwood (lead guitar, keyboards, other instruments) and Colin Greenwood (bass), Ed O'Brien (guitar, backing vocals), and Philip Selway (drums, percussion).", link: "https://en.wikipedia.org/wiki/Radiohead"},
  {title: "Nirvana", description: "American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers before recruiting Dave Grohl in 1990.", link: "https://en.wikipedia.org/wiki/Nirvana_(band)"},
  {title: "Frederic", description: "Japanese rock band formed in Kobe in 2009. The band consist of Kenji Mihara(vocals,guitar), Koji Mihara(bass, vocals), Ryuji Akagashira(guitar), and Takeru Takahashi(drums)", link: "https://en.wikipedia.org/wiki/Frederic_(band)"}
]

const alt = [
  {title: "Gorillaz", description: "British virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett. The band primarily consists of four animated members: 2-D, Murdoc Niccals, Noodle, and Russel Hobbs.", link: "https://en.wikipedia.org/wiki/Gorillaz"},
  {title: "Twenty One Pilots", description: "American musical duo from Columbus, Ohio. The band was formed in 2009 by lead vocalist Tyler Joseph along with Nick Thomas and Chris Salih, who left in 2011. The current line-up is Joseph and drummer Josh Dun.", link: "https://en.wikipedia.org/wiki/Twenty_One_Pilots"},
  {title: "People In The Box", description: "Japanese alternative rock band formed in 2002. The band consist of Hirofumi Hatano (Vocals, Guitar, Keyboard), Kenta Fukui (Bass), and Daigo Yamaguchi (Drums). The band has two past members", link: "https://en.wikipedia.org/wiki/People_In_The_Box"},
  {title: "Coldplay", description: "British rock band formed in London in 1996. The band's lineup consists of lead vocalist and pianist Chris Martin, lead guitarist Jonny Buckland, bassist Guy Berryman, and drummer Will Champion.", link: "https://en.wikipedia.org/wiki/Coldplay"},
  {title:"Kana-Boon", description: "Japanese rock band formed in 2008. The current members are Maguro Taniguchi (Vocals, Guitar) and Masami Endō (Bass, Chorus) and the band has had several past members.", link: "https://en.wikipedia.org/wiki/Kana-Boon"}
]
const pop = [
  {title: "Wednesday Campanella", description: "Japanese pop band formed in 2012. The band consists of Utaha (Vocals), Kenmochi Hidefumi (Music, Lyrics), and Dir.F (Director). Former lead vocalist KOM_I left in 2021", link: "https://en.wikipedia.org/wiki/Wednesday_Campanella"},
  {title: "Kenshi Yonezu", description: "Japanese musician, singer-songwriter, record producer, and illustrator who began releasing Vocaloid music under the stage name Hachi in 2009. In 2012 he debuted under his real name, releasing music with his own voice.", link: "https://en.wikipedia.org/wiki/Kenshi_Yonezu"},
  {title: "Beyoncé", description: "American singer, songwriter, and actress from Houston, TX who started making solo music in 2001. Former lead singer of Destiny's Child (1997).", link: "https://en.wikipedia.org/wiki/Beyonc%C3%A9"},
  {title: "Zutomayo", description: "Japanese pop band formed in 2017. ACA-Ne is the anonymous vocalist and songwriter of this band.", link: "https://en.wikipedia.org/wiki/Zutomayo"},
  {title: "BTS", description: "South Korean k-pop boyband formed in 2010 and debuted in 2013 under Big Hit Entertainment. The group consists of seven members: Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook"}
]

const rap = [
  {title:"Kendrick Lamar", description: "American rapper, songwriter, and record producer. He debuted in 2011.", link: "https://en.wikipedia.org/wiki/Kendrick_Lamar"},
  {title:"Eminem", description: "American rapper, songwriter, and record producer. Eminem debutted in 1996.", link: "https://en.wikipedia.org/wiki/Eminem"},
  {title:"Tyler, The Creator", description: "American rapper, singer, songwriter, record producer, and music video director. Released his first album in 2009. He was the co-founder of Odd Future (2007-2015).", link: "https://en.wikipedia.org/wiki/Tyler,_The_Creator"},
  {title:"Kim Namjoon", description: "South Korean rapper, songwriter, and record producer. Released his first album in 2015. He is the leader of the BTS.", link: "https://en.wikipedia.org/wiki/RM_(rapper)"},
  {title:"Suga", description: "South Korean rapper, songwriter, and record producer. Released his first album in 2016. He is a member of the BTS.", link: "https://en.wikipedia.org/wiki/Suga_(rapper)"},
  {title:"Lotus Juice", description: "Japanese rapper, songwriter, and record producer. He made his musical debut in 2006 and has created videogame and anime soundtracks.", link: "https://en.wikipedia.org/wiki/Lotus_Juice"}
]

const rnb = [
  {title:"Bruno Mars", description: "American singer, songwriter, record producer, and musician.", link: "https://en.wikipedia.org/wiki/Bruno_Mars"},
  {title:"Frank Ocean", description: "American singer, songwriter, record producer, photographer, and visual artist. Ocean began his musical career as a ghostwriter, prior to joining hip hop collective Odd Future in 2010. He is recognized for his idiosyncratic musical style, introspective and elliptical songwriting, unconventional production techniques, and wide vocal range.", link: "https://en.wikipedia.org/wiki/Frank_Ocean"},
  {title:"H.E.R", description: "American singer and songwriter. She signed to RCA Records and released her debut EP, H.E.R. Volume 1, in 2016.", link: "https://en.wikipedia.org/wiki/H.E.R._(singer)"},
  {title:"Daniel Caesar", description: "Canadian singer and songwriter. Released his debut EP in 2014.", link: "https://en.wikipedia.org/wiki/Daniel_Caesar"},
  {title:"DEAN", description: "South Korean alternative R&B singer-songwriter and record producer. He released his debut single \"I'm not Sorry\" in 2015.", link: "https://en.wikipedia.org/wiki/Dean_(South_Korean_singer)"},
  {title:"Joji", description: "Japanese American singer, songwriter, rapper, record producer, and former Internet personality and comedian. He made an unoffical release in 2015 and his debut album in 2018. He also released 2 comedic albums under the alias Pink Guy in 2014 and 2017.", link: "https://en.wikipedia.org/wiki/Joji_(musician)"}
  ]

function App() {

  return (
    <>
      <div className="app-name">
        <h1>Music Artists</h1>
      </div>

      <div className="section">
        <h2>Metal</h2>
        <div className="card-container" >
          {metal.map((band) => (
            <Card title={band.title} description={band.description} link={band.link} id="metal"/>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Rock</h2>
        <div className="card-container">
          {rock.map((band) => (
            <Card title={band.title} description={band.description} link={band.link} id="rock"/>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Alternative</h2>
        <div className="card-container">
          {alt.map((band) => (
            <Card title={band.title} description={band.description} link={band.link} id="alt"/>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Pop</h2>
        <div className="card-container">
          {pop.map((band) => (
            <Card title={band.title} description={band.description} link={band.link} id="pop"/>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Rap</h2>
        <div className="card-container">
          {rap.map((band) => (
            <Card title={band.title} description={band.description} link={band.link} id="rap"/>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>R&B</h2>
        <div className="card-container">
          {rnb.map((band) => (
            <Card title={band.title} description={band.description} link={band.link} id="rnb"/>
          ))}
        </div>
      </div>
     </>   
  )
}

export default App
