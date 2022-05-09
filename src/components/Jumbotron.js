import { Link } from 'react-router-dom';
import { FaDollarSign } from 'react-icons/fa';

export default function Jumbotron() {

  return (
    <div className="w-full min-h-[50vh] relative py-12">
        <div className="h-full max-w-[1360px] mx-auto p-8 z-20">
            <div className="h-full w-full grid gap-4 md:grid-cols-2">
              <div className="flex flex-col items-center md:items-start justify-center md:text-left">
                  <div className="max-w-xl">
                    <h3 className="text-3xl md:text-4xl text-red-400">The Future is Here</h3>
                    <h2 className="my-6 text-4xl md:text-5xl xl:text-6xl bg-gradient-to-tr from-blue-400 to-green-400 text-transparent bg-clip-text font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                    <div className="text-white my-6 flex items-center justify-center md:justify-start space-x-4">
                      <div className="main-btn">Start Tracking</div>
                      <Link to="/trending"><a className="p-2 text-cyan-500">Learn more</a></Link>
                    </div>
                  </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="max-w-md md:max-w-lg">
                  <img className="w-3/4 mx-auto object-cover" src="/assets/images/cyborg.png" alt="" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
