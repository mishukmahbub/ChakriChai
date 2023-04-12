import React from 'react';

const Blog = () => {
    return (
        <div className='mx-24 my-32 bg-blue-100 rounded-lg p-8'>
            <p><span className='font-bold'>Q:</span> When should you use Context API in react?</p>
            <p><span className='font-bold'>A:</span> Context API should be use to avoid props drilling. You should use the Context API in React when you need to pass data from a parent component to multiple child components without having to pass it down through intermediate components. This can help simplify your code and make it easier to manage state. Additionally, the Context API is useful when you have a global state that needs to be accessed by many components throughout your application.</p>
            <br />
            <p><span className='font-bold'>Q:</span> What is a custom hook?</p>
            <p><span className='font-bold'>A:</span> A custom hook in React is a JavaScript function that utilizes built-in hooks to encapsulate complex logic and stateful behavior, making it easy to reuse throughout your application. It allows you to create reusable code that can be imported and used like any other function.</p>
            <br />
            <p><span className='font-bold'>Q:</span> What is useRef?</p>
            <p><span className='font-bold'>A:</span> In React, useRef is a built-in hook that returns a mutable ref object whose current property is initialized to the passed argument (or null by default). It allows you to persist values across renders without triggering a re-render. useRef is commonly used to access DOM nodes or to store mutable values that do not trigger a re-render when changed.</p>
            <br />
            <p><span className='font-bold'>Q:</span> What is useMemo?</p>
            <p><span className='font-bold'>A:</span> In React, useMemo is a built-in hook that memoizes the result of a function call to optimize performance. It takes a function and an array of dependencies, and returns a memoized value that is only recomputed if one of the dependencies has changed. This hook is useful for expensive calculations or computations that only need to be performed when certain dependencies have changed.</p>

        </div>
    );
};

export default Blog;