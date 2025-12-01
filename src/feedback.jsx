import Ellipse from './assets/Ellipse 703.png'
import Ellipse2 from './assets/Ellipse 704.png'
import Ellipse3 from './assets/Ellipse 705.png'
import Ellipse4 from './assets/Ellipse 702.png'
import Rating from './assets/Frame 1000005097.png'

function Feedback() {

    return(
        <section className="bg-white min-h-[50vh]">
            <div className="con px-[2em] sm:px-[4em] pb-[5em] flex flex-col sm:flex-row items-start gap-[2em]">
                <div className='max-w-[530px]'>
                    <h2 className="text-[2.8rem] font-bold leading-12">Why our users <br /> love Vibra?</h2>
                    <p className="text-[#212529] pt-[.3em] pb-[1.3em]">Hear from our users who’ve found their vibe on Vibra. From going viral to making new connections, see how Vibra is all about fun and community.</p>
                    <button className="text-white bg-[#471359] px-[2em] py-[.6em] rounded-sm cursor-pointer cta2">
                        Create an account
                    </button>
                </div>
                <div className='grad ml-auto'>
                    <div>
                        <p className='max-w-[350px]'> <span className='text-[#471359] font-bold'>Vibra</span> helped me connect with people who share my interests. I never thought I'd go viral, but here I am with thousands of followers.</p>
                        <div className='flex gap-1.5 pt-[.6em] items-center'>
                            <img 
                                src={Ellipse} 
                                alt="white girl sitting and staring at the camera" 
                            />
                            <span>
                                <p className='font-bold'>Maya</p>
                                <img 
                                    src={Rating} 
                                    alt="five star rating" 
                                    className=''
                                />
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className='max-w-[350px]'> I love how easy it is to create and share content on 
                            <span className='text-[#471359] font-bold'>Vibra</span>. I've made so many new friends, and the community is so supportive.
                        </p>
                        <div className='flex gap-1.5 pt-[.6em] items-center'>
                            <img 
                                src={Ellipse2} 
                                alt="white guy smiling" 
                            />
                            <span>
                                <p className='font-bold'>Leo</p>
                                <img 
                                    src={Rating} 
                                    alt="five star rating" 
                                    className=''
                                />
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className='max-w-[350px]'> <span className='text-[#471359] font-bold'>Vibra</span> lets me be me. Whether I’m dancing, cooking, or just having fun, there’s always someone to vibe with.</p>
                        <div className='flex gap-1.5 pt-[.6em] items-center'>
                            <img 
                                src={Ellipse3} 
                                alt="guy posing" 
                            />
                            <span>
                                <p className='font-bold'>Jay</p>
                                <img 
                                    src={Rating} 
                                    alt="five star rating" 
                                    className=''
                                />
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className='max-w-[350px]'>I downloaded <span className='text-[#471359] font-bold'>Vibra</span> just for fun,but it quickly became my favorite app. The creative freedom is unmatched.</p>
                        <div className='flex gap-1.5 pt-[.6em] items-center'>
                            <img 
                                src={Ellipse4} 
                                alt="white girl sitting and staring at the camera" 
                            />
                            <span>
                                <p className='font-bold'>Zara</p>
                                <img 
                                    src={Rating} 
                                    alt="five star rating" 
                                    className=''
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feedback