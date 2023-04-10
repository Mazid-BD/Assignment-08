import React from 'react';

const QuestionAns = () => {
    return (
        <div className='w-9/12 mx-auto mt-20 mb-20' >
            <div className='text-center text-4xl text-black font-serif font-bold mb-16 '>

                <h1 className='border-b-4 border-black'>Answer The Following Questions.</h1>

            </div>

            <div className='border-4 border-black p-8 bg-orange-100  font-sans font-bold'>
                <h1 className='mb-4 text-3xl'>
                    Q-1: What is the difference between Props and State?
                </h1>
                <p className='mb-4 text-2xl'>
                    Ans: Props are used to pass data from a parent component to a child component.
                    While state is used to manage data that affects the rendering and behavior of the component itself.
                </p>
                <h1 className='mb-4 text-3xl'>
                    Q-2: How useState work?
                </h1>
                <p className='mb-4 text-2xl'>
                    Ans: useState hook is used to add state to functional components in React. It returns an array with two elements, the current state value and a function to update the state value. We can add as many state variables as necessary to a component using useState. To update the state variable, we call the setter function returned by useState, passing in the new state value. When the state is updated, the component is re-rendered to reflect the new state.
                </p>
                <h1 className='mb-4 text-3xl'>
                    Q-3: What can UseSate do other than data loading?
                </h1>
                <p className='mb-4 text-2xl'>
                    Ans: The useState hook in React is a versatile tool that can be used for many purposes beyond data loading. Some common use cases include managing UI state, implementing toggle functionality, creating counters and timers, implementing pagination, managing form data, and implementing dark mode. useState is a powerful and flexible tool that can help simplify the development of React applications.
                </p>
                <h1 className='mb-4 text-3xl'>
                    Q-4: How does react work?
                </h1>
                <p className='mb-4 text-2xl'>
                    Ans:  React is a JavaScript library for building user interfaces that works by creating a virtual representation of the UI called the virtual DOM. React updates the virtual DOM to reflect changes in the UI, then compares the new virtual DOM with the previous virtual DOM to determine what has changed. Once the changes have been identified, React updates the actual DOM with the minimum number of changes required to reflect the new state of the UI. React's declarative programming model and hooks make it easier to write reusable and testable code.
                </p>
            </div>
        </div>
    );
};

export default QuestionAns;