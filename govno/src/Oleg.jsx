import './Olegstyle.css'
import image from './assets/IMAGE1.png'

function Oleg(){
    return(
        <section className='sec2'>
                <div className='lef'>
                    <h1>Outsmart waste from your home</h1>
                    <h2>The Mill Membership is a simple way to keep 
                        food out of landfills, send it back to farms,
                         and make your kitchen smell awesome.</h2>
                         <div className='minilef'>
                            <div className='cont1'>
                            <div className='num'>
                                    <p>1</p>
                                </div>
                                <p>Food-shrinking, de-stinking Mill kitchen bin</p>
                            </div>
                            <div className='cont1'>
                            <div className='num'>
                                    <p>2</p>
                                </div>
                                <p>Seamless mail-back pathway to farms</p>
                               
                            </div> 
                            <div className='cont1'>
                                <div className='num'>
                                    <p>3</p>
                                </div>
                                <p>Personalized impact tracking</p>
                                
                            </div>
                         </div>
                    <button>How it works</button>
                </div>
                <div className='rig'>
                    <img src={image} alt="" />
                </div>
        </section>
    )
}
export default Oleg