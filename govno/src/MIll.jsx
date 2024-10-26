import './MillStyle.css'
import strel from './assets/strelochka.png'

function Mill(){
    return(
        <section className='sec5'>
        <div className='midsec5'>
            <h1>Become a Mill member</h1>
            <p>Reserve a bin. De-stink your kitchen.
                 Stop wasting food.Shipping spring 2023.</p>
                 <button>Reserve now</button>
        </div>
        <div className='botsec5'>
            <div className='leftsec5'>
                <h2>Stay in the loop</h2>
            </div>
            <div className='rightsec5'>
                <div className='bdw'>
                    <textarea name="" className='txtarmill' id=""></textarea>
                    <button><img src={strel} alt="" /></button>
                </div>
                <div className='textsec5'>
                    <h2>By signing up for updates from Mill, 
                        you agree to our</h2>
                    <h2>Privacy Policy</h2>
                </div>
                
            </div>
        </div>
        </section>
    )
}
export default Mill