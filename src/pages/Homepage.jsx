import React from "react";

const Homepage = () => {
  return (
    <main className="home min-h-screen w-full overflow-x-hidden relative">
      <div className="min-h-screen flex items-center justify-center px-6 lg:px-16 xl:px-24">
        <div className="w-full max-w-screen-2xl mx-auto">
          <section className="flex flex-col lg:flex-row justify-between items-center lg:items-end min-h-[80vh] lg:min-h-[70vh] pt-24 lg:pt-32">
            {/* Text Section */}
            <div className="mt-16 sm:mt-32 lg:mt-7 flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-1 lg:max-w-[50%]">
              <span className="font-BarlowCondensed text-[16px] sm:text-[18px] lg:text-[28px] text-Blue300 tracking-wider uppercase">
                so, you want to travel to
              </span>
              <h1 className="font-Bellefair text-[80px] sm:text-[100px] lg:text-[144px] xl:text-[150px] uppercase text-white leading-none">
                space
              </h1>
              <p className="font-Barlow text-[15px] sm:text-[16px] lg:text-[18px] text-Blue300 max-w-[480px] lg:max-w-[65%] leading-relaxed mt-4">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

            {/* Button Section */}
            <div className="flex-shrink-0 mt-8 lg:mt-0 lg:mb-8">
              <div className="bg-white rounded-full h-[150px] w-[150px] lg:h-[272px] lg:w-[272px] xl:h-[300px] xl:w-[300px] flex items-center justify-center hover:cursor-pointer transition-all duration-300 hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)]">
                <span className="font-Bellefair text-[20px] lg:text-[32px] xl:text-[36px] text-Blue900 uppercase tracking-wider">
                  Explore
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
