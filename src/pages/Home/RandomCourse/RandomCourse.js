import React from 'react';

const RandomCourse = () => {
    return (

        <div>
            <h2 className='text-center text-2xl font-bold my-2'>Do you or your child need more help with your English?</h2>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 my-12 p-10'>

                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img className="rounded-t-lg" src="https://learnenglishkids.britishcouncil.org/sites/kids/files/styles/max_1300x1300/public/field/section/image/4_0_0.png?itok=oXEG3bcs" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grammar and vocabulary</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Learn about grammar rules, play word games and watch fun videos.</p>
                        <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img className="rounded-t-lg" src="https://learnenglishkids.britishcouncil.org/sites/kids/files/styles/max_1300x1300/public/field/section/image/5_0_0.png?itok=8Gte-DYy" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fun and games</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Play games and practise your speaking with our fun tongue twisters.</p>
                        <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img className="rounded-t-lg" src="https://learnenglishkids.britishcouncil.org/sites/kids/files/styles/max_1300x1300/public/field/section/image/6_0_0.png?itok=SUZtkuUQ" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Print and make</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Print flashcards, worksheets and colouring pages or make some crafts.</p>
                        <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RandomCourse;