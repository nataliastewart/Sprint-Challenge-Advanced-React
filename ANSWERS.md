- [ ] Why would you use class component over function components (removing hooks from the question)?

Because a functional component is just a plain JavaScript function, you cannot use setState() in your component. That’s the reason why they also get called functional stateless components. So everytime you see a functional component you can be sure that this particular component doesn’t have its own state.
If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.

- [ ] Name three lifecycle methods and their purposes.

1. Mounting > constructor: initialize your state, setting the default values.

2. Render > Rendering does all the work. It returns the JSX of your actual component. Returning component JSX

3. componentDidMount > After we’ve rendered our component for the first time, this method is called. If you need to load data, here’s where you do it. Don’t try to load data in the constructor or render or anything crazy.

- [ ] What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic. Custom hooks works when you have many components that have the same logic(stateful logic) inside those components, you can abstract all that logic out of all of that components, put on a single function called “custom hook”, and use that custom hook inside of those components, then you’ve written that logic one time only and you showing that logic across those components.

- [ ] Why is it important to test our apps?

Automated testing minimizes the risk of bugs finding their way into production code. Testing is NOT optional. Testing should be a part of every developer’s workflow. A feature is not done until it is fully tested! In direct contrast to manual testing, automated testing significantly reduces the manpower and margin for error needed to confidently ship a product. Though it can’t entirely remove manual testing from the process, it certainly helps.
