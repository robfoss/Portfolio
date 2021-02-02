import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from "@material-ui/styles"



const useStyles = makeStyles({
    particleCanvas: {
        position: "absolute",
        opacity: "0.3"
    }
})

const Home = () => {

    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particleCanvas}
                params={{
                    particles: {
                        number:{
                            value: 65,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 6,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 5,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}    
            />  
        </>
    )
}

export default Home
