import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid totam officia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magni modi quis?
        </p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, molestias tenetur ex quia odit ut quae nostrum inventore deserunt magnam, nam eveniet?</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-3">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam assumenda maxime delectus ratione autem saepe odit expedita, aliquam, placeat impedit sed libero eum voluptates?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenice:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam assumenda maxime delectus ratione autem saepe odit expedita, aliquam, placeat impedit sed libero eum voluptates?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exception Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam assumenda maxime delectus ratione autem saepe odit expedita, aliquam, placeat impedit sed libero eum voluptates?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About