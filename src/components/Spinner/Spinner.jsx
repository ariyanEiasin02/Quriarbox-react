import React, { useState, useEffect } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Spinner = () => {
    const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Simulating API call delay
    setTimeout(() => {
      setData('');
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
        
        {loading ? (
            <div className="w-full fixed  min-h-screen bg-[#000] z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className='text-white font-bold font-poppins text-3xl uppercase text-center'>Loading...</h1>
                <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
            </div>
        </div>
          ) : (
            <div>
              <p>{data}</p>
            </div>
          )}
    </div>
  )
}

export default Spinner