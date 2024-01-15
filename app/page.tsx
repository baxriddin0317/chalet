import { Family, Footer, Gallery, Header, Hero, Nature, Services, Trip } from "@/components";
import Image from "next/image";
import { FaBroom, FaKey, FaRegCompass } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nature />
        <Gallery />
        <Family />
        <section className="max-w-main mx-auto px-4 lg:px-0 py-19">
          <div className="grid lg:grid-cols-2 items-center justify-center gap-14">
            <div className="md:pr-10">
              <h2 className='text-2xl md:text-3xl font-extrabold text-brand-black/80 uppercase mb-5'>A PERFECT WAY TO ESCAPE THE <span className='text-brand-blue'>WINTER</span> BLUES!</h2>
              <p className="mb-9 lg:leading-8 font-light">
              Our ski vacation package will take you to some of the best ski resorts in the world. From the slopes of the French Alps to the snow-capped peaks of the Rocky Mountains, we have a trip for you. 
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <FaRegCompass className="text-4xl text-brand-blue" />
                  <div className="flex-1">
                    <h4 className="text-brand-black font-bold">Location</h4>
                    <p className="text-sm leading-7 font-light">
                    This place is located in the heart of the slopes. This will give you easier access to the slopes and make it easier to get lessons.
                    </p>
                  </div>
                </div>
                <div className="h-px w-full bg-brand-black/10"></div>
                <div className="flex items-start gap-5">
                  <FaBroom className="text-4xl text-brand-blue" />
                  <div className="flex-1">
                    <h4 className="text-brand-black font-bold">Enhanced Clean</h4>
                    <p className="text-sm leading-7 font-light">
                    We work hard to ensure that your ski resort or vacation home is clean and ready for your next visit.
                    </p>
                  </div>
                </div>
                <div className="h-px w-full bg-brand-black/10"></div>
                <div className="flex items-start gap-5">
                  <FaKey className="text-4xl text-brand-blue" />
                  <div className="flex-1">
                    <h4 className="text-brand-black font-bold">Self check-in</h4>
                    <p className="text-sm leading-7 font-light">
                    This ski vacation self check in is perfect for those who love to ski! With all of the necessary supplies at your fingertips, you'll be able to hit the slopes as soon as you arrive!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <Image className="mx-auto" src={require('@/public/img-7.jpg')} alt="" />
            </div>
          </div>
        </section>
        <section className="max-w-main mx-auto px-4 lg:px-0 py-19">
          <div className="grid flex-col-reverse lg:grid-cols-2 items-center justify-center gap-14">
            <div className="w-full h-full">
              <Image className="mx-auto" src={require('@/public/img-8.jpg')} alt="" />
            </div>
            <div>
              <h2 className='text-3xl font-extrabold text-brand-black/80 uppercase mb-8'>A WINTER <span className='text-brand-blue'>SKI VACATION</span> THAT THE WHOLE FAMILY CAN ENJOY</h2>
              <p className="mb-9 leading-8 font-light">
              Looking for a winter ski vacation that the whole family can enjoy? Look no further! Our chalet is located in the heart of the ski slopes and offers all the amenities you need to make your stay comfortable. With plenty of space for everyone, our chalet is perfect for groups of all sizes. Book your vacation today and enjoy a winter wonderland the whole family can enjoy! 
              </p>
            </div>
          </div>
        </section>
        <Services />
        <Trip />
      </main>
      <Footer />
    </>
  )
}
