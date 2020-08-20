import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	particlesCanva:{
		position: 'absolute'
	}
})

function Home() {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<Header />
			<Particles canvasClassName={classes.particlesCanva} params={{particles: {
				number:{
					value:45,
					density: {
						enable: true,
						value_area: 900
					}
				},
				shape: {
					type: 'circle',
					stroke: {
						width: 1,
						color: '#fff'
					}
				},
				size: {
					value: 5,
					random: true,
					anim: {
						enable: true,
						speed: 3,
						size_min: 0.1,
						sync: true
					} 
				},
				opacity: {
					value: 1,
					random: true,
					anim: {
						enable: true,
						speed: 1,
						opacity_min: 0.1,
						sync: true
					}
				},
				
				line_linked: {
          shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
          },
					size:{
						value: 5,
						random: true,
						anim: {
							enable: true,
							speed: 7,
							size_min: 0.1,
							sync: true
						}
					}
        }
			}}} />
		</div>
	);
}

export default Home;
