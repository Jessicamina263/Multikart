import {React , useState} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';

export default function Home()
{
    return (
        <>
            <div style={{ width: '100%', height: '600px' }}>
                <AwesomeSlider bullets={false} style={{ height: '100%' }}>
                    <div style={{ position: 'relative', height: '100%' }}>
                        <img src={require('../components/images/8.jpg')} alt="Headset" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', left: 0, top: 0 }} />
                        <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 23 }} className='text-gray-700'>Headset For All Style</p>
                        <h3 style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 30 }}>Starting $19</h3>
                        <button className="bg-gray-700 text-white py-2 rounded" style={{ position: 'absolute', width: 150, height: 50, top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>SHOP NOW</button>
                    </div>
                    <div style={{ position: 'relative', height: '100%' }}>
                        <img src={require('../components/images/12.jpg')} alt="Furnishing" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', left: 0, top: 0 }} />
                        <p style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', fontSize: 23 }} className='text-gray-700'>Furnishing Deals</p>
                        <h3 style={{ position: 'absolute', top: '60%', left: '25%', transform: 'translate(-50%, -50%)', fontSize: 30 }}>UPTO 70% OFF</h3>
                        <button className="bg-gray-700 text-white py-2 rounded" style={{ position: 'absolute', width: 150, height: 50, top: '70%', left: '25%', transform: 'translate(-50%, -50%)' }}>SHOP NOW</button>
                    </div>
                </AwesomeSlider>
            </div>
            <div style={{ marginLeft: 75, marginTop: 50 }} className='p-4 flex gap-3'>
                <div style={{ position: 'relative' }}>
                    <div className="image-container">
                        <img src={require('../components/images/cam.jpg')} alt="Camera" style={{ width: 400, height: 250 }} />
                    </div>
                    <p style={{ position: 'absolute', top: 100, left: 250, fontSize: 23 }} className='text-gray-700'>Save 30%</p>
                    <h3 style={{ position: 'absolute', top: 120, left: 230, fontSize: 30 }}>CAMERA</h3>
                </div>
                <div style={{ position: 'relative' }}>
                    <div className="image-container">
                        <img src={require('../components/images/bags.jpg')} alt="Bags" style={{ width: 400, height: 250 }} />
                    </div>
                    <p style={{ position: 'absolute', top: 100, left: 260, fontSize: 23 }} className='text-gray-700'>Save 60%</p>
                    <h3 style={{ position: 'absolute', top: 120, left: 270, fontSize: 30 }}>BAGS</h3>
                </div>
                <div style={{ position: 'relative' }}>
                    <div className="image-container">
                        <img src={require('../components/images/toys.jpg')} alt="Toys" style={{ width: 400, height: 250 }} />
                    </div>
                    <p style={{ position: 'absolute', top: 100, left: 250, fontSize: 23 }} className='text-gray-700'>Save 60%</p>
                    <h3 style={{ position: 'absolute', top: 120, left: 255, fontSize: 30 }}>TOYS</h3>
                </div>
                <div style={{ position: 'relative' }}>
                    <div className="image-container">
                        <img src={require('../components/images/showes.jpg')} alt="Shoes" style={{ width: 400, height: 250 }} />
                    </div>
                    <p style={{ position: 'absolute', top: 100, left: 250, fontSize: 23 }} className='text-gray-700'>Save 60%</p>
                    <h3 style={{ position: 'absolute', top: 120, left: 255, fontSize: 30 }}>SHOES</h3>
                </div>
            </div>
            <div style={{ width: 730, height: 100, textAlign: 'center', marginLeft: 550, marginTop: 50 }}>
                <p className='text-gray-700' style={{ fontSize: 20 }}>Special Offer</p>
                <h2 style={{ fontSize: 30, marginTop: 5 }}>TOP COLLECTION</h2>
                <div className='w-20 h-1 bg-gray-700' style={{ marginLeft: 340, marginTop: 5 }}></div>
                <p className='text-gray-500' style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </>
    );
}