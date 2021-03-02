import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import StatDisplay from '../components/StatDisplay'

export default function Home() {

  const [miles, setMiles] = useState({
    tom: 0,
    ross: 0
  })

  const [money, setMoney] = useState({
    tom: 0,
    ross: 0
  })

  useEffect(() => {
    (async () => {
      let tomData = await fetch('api/justGiving/tom2727')
      let rossData = await fetch('api/justGiving/mindsocsoton')
      let distanceData = await fetch('api/googleSheet')
      
      tomData = await tomData.json()
      rossData = await rossData.json()
      distanceData = await distanceData.json()

      setMoney({
        tom: [tomData.totalRaised, tomData.fundraisingTarget],
        ross: [rossData.totalRaised, rossData.fundraisingTarget]
      })

      setMiles({
        tom: parseFloat(distanceData.tom.milesRan).toFixed(2),
        ross: parseFloat(distanceData.ross.milesRan).toFixed(2)
      })
    })()
  }, [])

  return (
    <>
    <Head>
      <title>Tom & Ross | Mind 27 27</title>
      <meta name="description" content="Hi! We're Tom & Ross and this month, we’re each running 27 miles to campaign for student mental wellbeing." />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#702285" />
      <meta name="msapplication-TileColor" content="#702285" />
      <meta name="theme-color" content="#702285" />

      <meta property="og:title" content="Tom & Ross | Mind 27 27" />
      <meta property="og:url" content="https://run.soton.rocks" />
      <meta property="og:description" content="Hi! We're Tom & Ross and this month, we’re each running 27 miles to campaign for student mental wellbeing." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/thumb.jpeg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://run.soton.rocks" />
      <meta property="twitter:title" content="Tom & Ross | Mind 27 27" />
      <meta property="twitter:description" content="Hi! We're Tom & Ross and this month, we’re each running 27 miles to campaign for student mental wellbeing." />
      <meta property="twitter:image" content="/thumb.jpeg" />
    </Head>
    <div id="modal-root" className="relative z-50"></div>
    <main className="bg-gradient-1 min-h-screen flex flex-col">
      <div className="min-h-screen md:min-h-0 md:flex-grow">
        <div className="fixed md:hidden w-full" style={{bottom: '-20px'}}>
          <Image className="mx-auto min-w-screen" src="/earth.gif" alt="Spinning Earth Gif (Bottom of page)" width={700} height={350} />
        </div>
        <div className="flex flex-col items-center p-8 xl:px-24 relative container mx-auto">
          <div className="w-4/5 pb-8 flex justify-center items-center">
            <Image src="/27.png" alt="Mind 27 27 Logo" width={366} height={207} />
          </div>
          <p className="font-hand text-white text-center text-3xl md:text-4xl xl:text-6xl pb-8">
            This month, we’re each running 27 miles to campaign for student mental wellbeing.
          </p>
          <div className="pb-8">
            <Button alt="true" modal="true" text="Donate Now"><p>Test!</p></Button>
          </div>
          <div className="flex justify-center items-center text-white pb-8">
            <StatDisplay value={parseFloat(miles.tom) + parseFloat(miles.ross)}>Combined miles run</StatDisplay>
            <StatDisplay prefix="£" value={parseFloat(money.tom) + parseFloat(money.ross)}>Total raised</StatDisplay>
          </div>
          <p className="md:hidden font-hand text-white text-center text-3xl md:text-4xl xl:text-6xl pb-8">
            View our individual progress:
          </p>
          <div className="md:hidden grid grid-cols-2 gap-4 text-white">
            <Button modal="true" text="Tom">Tom</Button>
            <Button modal="true" text="Ross">Ross</Button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex bg-white flex-col items-center justify-center h-full p-8">
        <p className="font-hand text-blue text-center text-3xl md:text-4xl xl:text-6xl pb-8">
          View our individual progress:
        </p>
        <div className="grid grid-cols-2 gap-8 text-white">
          <Button modal="true" text="Tom">Tom</Button>
          <Button modal="true" text="Ross">Ross</Button>
        </div>
      </div>
      <div className="fixed bottom-1 right-2 font-hand text-purple">Built by <a className="underline" href="https://tommitchelmore.com" target="_blank" rel="noopener">Tom Mitchelmore</a></div>
    </main>
    </>
  )
}
