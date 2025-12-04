import Vid from './assets/Frame 1000005105.png'
import Vid2 from './assets/Frame 1000005106.png'

function Creators() {
    return (
        <section className="min-h-[60vh] bg-[#EDE7EE]">
            <div className="px-[3em]  pt-[4.3em] pb-[5em]">
                <h2 className="font-medium text-[2.2rem]">Spotlight on creators</h2>
                <p className="opacity-65">Meet the stars of Vibra and see how they’re making waves. Get inspired by the creativity and join the fun!</p>

                <div className='flex flex-col sm:flex-row gap-[2em] justify-between items-baseline pt-[2em]'>
                    <div className=''>
                        <img 
                            src={Vid2} 
                            alt="a girl dancing" 
                        />
                    </div>
                    <div className='ml-auto'>
                        <img 
                            src={Vid} 
                            alt="two girls dancing" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Creators