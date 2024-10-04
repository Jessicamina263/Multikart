import React from "react";
import '../../pages/styles.css';


export default function PageFooter()
{
    return(
        <>
            <div className='flex' style={{marginLeft:380}}>
                <div style={{marginTop: 20}}>
                    <h1>KNOW IT ALL FIRST!</h1>
                    <p className='text-gray-500'>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                </div>
                <div className='line2 bg-gray-300' style={{marginLeft: 30, marginRight: 30}}></div>
                <input className='emailin' style={{borderColor: '#eeeeee', marginTop: 15}} type="text" placeholder='  Enter Your Email'/>
                <button className='subbutton' style={{marginTop: 15}}>SUBSCRIBE</button>
            </div>
            <div className='line1 bg-gray-300' style={{marginLeft: 400, marginTop: 50}}></div>
            <div className='flex' style={{marginTop: 50, marginLeft: 300, width: '70%'}}>
                <div style={{width: '40%', marginRight: 50}}>
                    <img src={require('../../components/images/18.png')} alt="Logo" style={{marginBottom: 20}}/>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <div className='flex' style={{marginTop: 20}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="black" style={{width: '3%', marginRight: 50}} className='iconfooter'>
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="black" style={{width: '8%', marginRight: 50}} className='iconfooter'>
                            <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6c-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" style={{width: '5%', marginRight: 50}} className='iconfooter'>
                            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="black" style={{width: '5%', marginRight: 50}} className='iconfooter'>
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="black" style={{width: '5%'}} className='iconfooter'>
                            <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                        </svg>

                    </div>
                </div>
                <div className='text-gray-500' style={{width: '20%'}}>
                    <h1 className='text-black' style={{marginBottom: 30, fontWeight: 'bold'}}>MY ACCOUNT</h1>
                    <h5 style={{marginBottom: 20}}>Womens</h5>
                    <h5 style={{marginBottom: 20}}>Clothing</h5>
                    <h5 style={{marginBottom: 20}}>Accessories</h5>
                    <h5 style={{marginBottom: 20}}>Featured</h5>
                </div>
                <div className='text-gray-500' style={{width: '20%'}}>
                    <h1 className='text-black' style={{marginBottom: 30, fontWeight: 'bold'}}>WHY WE CHOOSE</h1>
                    <h5 style={{marginBottom: 20}}>Shipping & Return</h5>
                    <h5 style={{marginBottom: 20}}>Secure Shopping</h5>
                    <h5 style={{marginBottom: 20}}>Gallary</h5>
                    <h5 style={{marginBottom: 20}}>Affiliates</h5>
                    <h5 style={{marginBottom: 20}}>Contacts</h5>
                </div>
                <div className='text-gray-500' style={{width: '20%'}}>
                    <h1 className='text-black' style={{fontWeight: 'bold'}}>STORE INFORMATION</h1>
                    <div className='flex' style={{marginTop: 5}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='#6e6e6e' style={{width: '5%', marginRight: 20}}>
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>
                        <p style={{marginTop: 20, fontSize: 15}}>Multikart Demo Store, Demo Store India 345-659</p>
                    </div>
                    <div className='flex' style={{marginTop: 20}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#6e6e6e' style={{width: '5%', marginRight: 20}}>
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                        </svg>
                        <p style={{marginTop: 4, fontSize: 15}}>Call Us: 123-456-7898</p>
                    </div>
                    <div className='flex' style={{marginTop: 20}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#6e6e6e' style={{width: '5%', marginRight: 20}}>
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                        </svg>
                        <p style={{marginTop: 3, fontSize: 15}}>Email Us: Support@Fiot.Com</p>
                    </div>
                    <div className='flex' style={{marginTop: 20}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#6e6e6e' style={{width: '5%', marginRight: 20}}>
                            <path d="M128 64l0 96 64 0 0-96 194.7 0L416 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0L192 0c-35.3 0-64 28.7-64 64zM0 160L0 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm480 32l-352 0 0 288c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                        <p style={{marginTop: 3, fontSize: 15}}>Fax: 123456</p>
                    </div>
                </div>
            </div>
            <div className='flex' style={{marginLeft: 230, marginTop: 40, marginBottom: 30}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width: 25 ,height: 15, marginTop: 4}}>
                    <path fill="#a6acb3" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
                    </svg>
                <p style={{color: 'gray', fontSize: 15}}>Copyright 2024. All rights reserved by 
                    <a style={{color: '#3e5168'}} href="https://www.linkedin.com/in/jessica-mina-3048a628b/"> Jessica Mina</a> .
                </p>
                <div className='flex' style={{height: 28, marginLeft: 810}}>
                    <img src={require('../../components/images/visa.png')} alt="" />
                    <img src={require('../../components/images/mastercard.png')} alt="" style={{marginLeft:20, marginRight: 20}}/>
                    <img src={require('../../components/images/paypal.png')} alt="" />
                    <img src={require('../../components/images/american-express.png')} alt="" style={{marginLeft:20, marginRight: 20}}/>
                    <img src={require('../../components/images/discover.png')} alt="" />
                </div>
            </div>
        </>
    );
}