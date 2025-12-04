import Facebook from './assets/Facebook.png'
import Instagram from './assets/Instagram.png'
import Twitter from './assets/Twitter.png'
import LinkedIn from './assets/LinkedIn.png'

function Footer(){

    return (
        <footer className="min-h-[60vh] bg-[#471359]">
            <div className="px-[2.7em] pt-[5.6em] text-white flex flex-col sm:flex-row gap-[2em] justify-between">
                <div className=" max-w-[560px]">
                    <h3 className="font-medium text-[1.8rem] font-[Podkova]">Vibra</h3>
                    <p className=" opacity-60 pt-3.5 pb-2">Vibra is your new go-to social app for sharing short, fun videos with friends and the world. It is where you can express yourself freely and discover content that makes you smile.</p>
                    <p className="cursor-pointer font-normal text-[.9rem] pb-3">Learn more...</p>
                    <h4 className="font-semibold pb-2">Follow us</h4>
                    <p className="opacity-60">Stay updated by following us on social media</p>
                    <div className='pt-2.5 flex gap-3.5'>
                        <img 
                            src={Facebook} 
                            alt="facebook" 
                        />
                        <img 
                            src={Instagram} 
                            alt="instagram" 
                        />
                        <img 
                            src={Twitter} 
                            alt="twitter" 
                        />
                        <img 
                            src={LinkedIn} 
                            alt="linkedin" 
                        />
                    </div>
                </div>

                <div className='footer'>
                    <div className='flex flex-col gap-[1.6em]'>
                        <h4 className='font-medium text-[1.5rem] pb-3'>About</h4>
                        <p className='opacity-60 text-[.96rem]'>About us</p>
                        <p className='opacity-60 text-[.96rem]'>Features</p>
                        <p className='opacity-60 text-[.96rem]'>News</p>
                        <p className='opacity-60 text-[.96rem]'>Careers</p>
                    </div>

                    <div className='flex flex-col gap-[1.6em]'>
                        <h4 className='font-medium text-[1.5rem] pb-3'>Company</h4>
                        <p className='opacity-60 text-[.96rem]'>Our team</p>
                        <p className='opacity-60 text-[.96rem]'>Partner with us</p>
                        <p className='opacity-60 text-[.96rem]'>FAQ</p>
                        <p className='opacity-60 text-[.96rem]'>Blog</p>
                    </div>

                    <div className='flex flex-col gap-[1.6em]'>
                        <h4 className='font-medium text-[1.5rem] pb-3'>Support</h4>
                        <p className='opacity-60 text-[.96rem]'>Account</p>
                        <p className='opacity-60 text-[.96rem]'>Support center</p>
                        <p className='opacity-60 text-[.96rem]'>News</p>
                        <p className='opacity-60 text-[.96rem]'>Careers</p>
                    </div>

                    <div className='flex flex-col gap-[1.6em]'>
                        <h4 className='font-medium text-[1.5rem] pb-3'>Contact us</h4>
                        <p className='opacity-60 text-[.96rem]'>4140 Parker Rd. Allentown,</p>
                        <p className='opacity-60 text-[.96rem]'>New Mexico 31134</p>
                        <p className='opacity-60 text-[.96rem]'>(480) 555-0103</p>
                        <p className='opacity-60 text-[.96rem]'>vibra@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className='border-b pt-[6em] text-white'>

            </div>

            <div className='px-[3.2em] pt-[3.8em] pb-[6em] text-white flex flex-col gap-7 sm:flex-row justify-between'>
                    <div>
                        <h4 className='font-semibold pb-2'>Vibra</h4>
                        <p className='opacity-60'> &copy;2024 Vibra. All rights reserved.</p>
                    </div>

                    <div className='fle flex flex-col sm:flex-row gap-[2em] items-center'>
                        <p className='opacity-60 '>Privacy Policy</p>
                        <p className='opacity-60'>Terms and Conditions</p>
                        <p className='opacity-60'>Cookies Settings</p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer