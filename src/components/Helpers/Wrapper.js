{/* Small work around to avoid having multiple 'empty' <div> tags */}
const Wrapper = props => {
  return props.children;
}

export default Wrapper;
