import { assets, testimonialsData } from "../../assets/assets"
import {motion }  from "framer-motion"
const Testimonials = () => {
  return (
    <motion.div initial = {{opacity:0, x:200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="container mx-auto py-10 lg:px-32 w-full overflow-hidden " id="testimonial">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light">Testimonial</span></h1>
        <p className="text-center text-gray-500 mb-12 max-w-90">Real Stories Who Find Best Home With Us</p>

        <div className="flex flex-wrap justify-center gap-8">
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className="border shadow-lg rounded px-8 py-12 max-w-[300px] text-center">
                    <img className="w-20 h-20 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.alt} />
                    <h2 className="text-xl font-medium text-gray-700">{testimonial.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">{testimonial.title}</p>
                    <div className="flex justify-center gap-1 text-red-500 mb-4">
                        {Array.from({length:testimonial.rating}, (item, index) => (
                            <img src={assets.star_icon} key={index} alt="" />
                        ))}
                    </div>
                    <p className="text-gray-500">{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials
