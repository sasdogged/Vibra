import Starfish from './assets/Vector.png'
import  Ellipse  from './assets/Ellipse 699.png'
import Ellipse1 from './assets/Ellipse 700.png'
import Ellipse2 from './assets/Ellipse 701.png'
import GooglePlay from './assets/teenyicons_google-play-store-solid.png'
import ApplePlay from './assets/ic_sharp-apple.png'
import Rectangle from './assets/Rectangle 1170.png'

function Section() {

    return(
        <div className="mt-[5em] mb-[6em]">
            <div 
                className="mx-[1.7em] mb-[3.8em] px-[1.7em] flex gap-[1.3em] items-center flex-col sm:flex-row bg-white min-h-[60vh]">
                <div className='max-w-[700px]'>
                    <h2 className="font-semibold text-[1.8rem] pb-4">What makes Vibra special?</h2>
                    {/*  */}
                    <div className='flex gap-6.5 my-3 items-baseline'>
                        <div>
                            <img 
                                src={Starfish} 
                                alt="starfish" 
                            />
                        </div>
                        <div>
                            <h3 className='font-semibold text-black pb-1.5'>Be YOU, unfiltered</h3>
                            <p className='text-[#212529]'>With tons of cool filters and tools, make videos that show off your unique style. Dance, lip-sync, or just have fun—Vibra is your playground.</p>
                        </div>
                    </div>

                    <div className='flex gap-6.5 my-3 items-baseline'>
                        <div>
                            <img 
                                src={Starfish} 
                                alt="starfish" 
                            />
                        </div>
                        <div>
                            <h3 className='font-semibold text-black pb-1.5'>Content you will love</h3>
                            <p className='text-[#212529]'>Our smart feed gets what you like and keeps serving up more. From trends to hidden gems, your feed is always fresh.</p>
                        </div>
                    </div>

                    <div className='flex gap-6.5 my-3 items-baseline'>
                        <div>
                            <img 
                                src={Starfish} 
                                alt="starfish" 
                            />
                        </div>
                        <div>
                            <h3 className='font-semibold text-black pb-1.5'>Join the world</h3>
                            <p className='text-[#212529]'>Follow cool creators, find new friends, and vibe with a community that's all about creativity. Vibra is where connections happen.</p>
                        </div>
                    </div>

                    <div className='flex gap-6.5 my-3 items-baseline'>
                        <div>
                            <img 
                                src={Starfish} 
                                alt="starfish" 
                            />
                        </div>
                        <div>
                            <h3 className='font-semibold text-black pb-1.5'>Go viral, effortlessly</h3>
                            <p className='text-[#212529]'>You don’t have to be famous to blow up. Share your videos and watch them take off with likes, comments, and shares from around the world.</p>
                        </div>
                    </div>
                </div>

                {/*Images  */}
                <div className='ml-auto relative'>
                    <img 
                        src={Ellipse} 
                        alt="girl dancing" 
                        className='max-w-full'
                    />
                    <div>
                        <img 
                            src={Ellipse1} 
                            alt="girl jumping"
                            className='absolute top-[3%] left-[-20%] w-[45%] sm:w-[50%] md:w-[45%]' 
                        />
                        <img 
                            src={Ellipse2} 
                            alt="girl taking a selfie" 
                            className='absolute bottom-[-3%] right-[-3%] max-w-full w-[40%] sm:w-[45%] md:w-[40%]' 
                        />
                    </div>
                </div>
            </div>
            <div className='z-10 -mb-66 sm:-mb-[18em] md:-mb-[21em] flex px-[2em] sm:px-[6em] pt-[3.7em]'>
                <img 
                    src={Rectangle} 
                    alt="girl with pink hair" 
                    className='mx-auto'
                />
            </div>
                {/*  */}
            <div className='bg-[#411151] min-h-[60vh] mt-[12em] pt-[12em] sm:pt-[16em]'>
                    <div className='px-[3em] flex flex-col sm:flex-row gap-[3em]'>
                        <div className='max-w-[530px]'>
                            <h2 className='text-white font-bold text-[2.4rem] pb-2'>Get Vibra app today!</h2>
                            <p className='text-white opacity-70'>Download Vibra now from the App Store or Google Play. It's free, easy to get and waiting for you to join the fun!</p>
                        </div>
                        <div className='ml-auto'>
                            <h3 className='text-white font-medium text-[1.4rem]'>Steps to get started</h3>
                            <p className='text-white opacity-70 mt-2.5'>Here are the three steps:</p>
                            <div className='flex gap-3 my-3 mb-6'>
                                <span className='text-[#411151] bg-white w-7 h-7 flex items-center justify-center rounded-full shrink-0'>1</span>
                                <p className='text-white opacity-70'>Sign up:Create an account in seconds.</p>
                            </div>

                            <div className='flex gap-3 mt-3 mb-6'>
                                <span className='text-[#411151] bg-white w-7 h-7 flex items-center justify-center rounded-full shrink-0'>2</span>
                                <p className='text-white opacity-70'>Create:Start making videos with our easy-to-use tools.</p>
                            </div>

                            <div className='flex gap-3 mt-3 mb-6'>
                                <span className='text-[#411151] bg-white w-7 h-7 flex items-center justify-center rounded-full shrink-0'>3</span>
                                <p className='text-white opacity-70'>Share:Post your creations and watch them spread.</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex gap-[3em] flex-col sm:flex-row items-center justify-center pt-[3em] pb-[3em] sm:pb-[3em]'>
                        <div className='flex items-center justify-center gap-3 bg-white/40 py-[.7em] w-[60%] max-w-60 rounded-lg cursor-pointer'>
                            <img 
                                src={GooglePlay} 
                                alt="google play store" 
                                style={{width:16}}
                            />
                            <p className='text-white opacity-40 text-[.9em]'>Google Play Store(Android)</p>
                        </div>

                        <div className='flex items-center justify-center gap-3 bg-white/40 py-[.7em] w-[60%] max-w-60 rounded-lg cursor-pointer'>
                            <img 
                                src={ApplePlay} 
                                alt="google play store" 
                                style={{width:16}}
                            />
                            <p className='text-white opacity-40 text-[.9em]'>Apple Store(IOS)</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Section