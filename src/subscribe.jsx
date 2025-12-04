import  Ellipse  from './assets/Ellipse 699.png'
import Ellipse1 from './assets/Ellipse 700.png'
import Ellipse2 from './assets/Ellipse 701.png'

function Subscribe() {
    return(
        <section className="min-h-[60vh] bg-white ">
            <div className="px-[2em] sm:px-[3em] pt-[6em] pb-[6em] flex flex-col sm:flex-row justify-between gap-[2em]">
                <div className="max-w-[560px]">
                    <h2 className="font-semibold text-[2.6rem] pb-3">Stay in the loop</h2>
                    <p className="opacity-65 pb-4">Join our newsletter for updates on new features, challenges, and trends. Don’t miss out—get the latest from Vibra straight to your inbox! ✉️</p>
                    <input 
                        type="text" 
                        placeholder="Enter email address" 
                        className="border-2 border-gray-500 focus:outline-0 px-[1.3em] py-[.7em] rounded-[7px] placeholder:font-medium text-black"
                    />
                    <button 
                        className="cta3 block text-white bg-[#471359] px-[1.8em] py-[.6em] rounded-sm cursor-pointer font-normal mt-5 mb-5 "
                    >Subscribe
                    </button>
                    <p className="opacity-65">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>

                <div className='relative mt-[3em]'>
                    <img 
                        src={Ellipse} 
                        alt="girl dancing" 
                        className='max-w-full'
                    />
                    <div>
                        <img 
                            src={Ellipse1} 
                            alt="girl jumping" 
                            className='absolute top-[-7%] sm:top-[3%] left-[-2%] sm:left-[-16%] w-[45%] sm:w-[50%] md:w-[45%]'
                        />
                        <img 
                            src={Ellipse2} 
                            alt="girl taking a selfie"
                            className='absolute top-[56%] sm:top-[50%] right-[-3%] sm:right-[-6%] max-w-full w-[40%] sm:w-[45%] md:w-[40%]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe