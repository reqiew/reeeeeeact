import './Wastedstyle.css'
import plusic from './assets/plusssss.png'

function Wasted(){
    return(
        <section className='sec4'>
            <div className='topbox'>
                <h1>Wasted food is worse than you think</h1>
                <div className='minitopbox'>
                    <h2>And most of it comes from</h2>
                    <div className='pluss'>
                        <p>our kitchens</p>
                        <img src={plusic} alt="" />
                    </div>
                    <div className='pluss'>
                        <p>airline indystry</p>
                        <img src={plusic} alt="" />
                    </div>
                </div>

            </div>
            <div className='picmid'>
            <div className='midboxx'>
                    <h3>Greenhouse gas from 
                        global food waste does more damage 
                        to the planet than the entire</h3>
                    <h3>We have to stop dumping what we can’t
                        eat into the trash.
                        Don’t worry, we’ve got a plan.</h3>
                    <button><a href="https://genshin.hoyoverse.com/ru/home">
                    See the impact</a></button>
                </div>
            </div>
        </section>
    )
}

export default Wasted