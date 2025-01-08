const Skeleton = ({
    height,
    width
  }) => {
    return (
      <div role="status" className="animate-pulse">
        <div style={{height: height, width: width}} className={`bg-gray-800 rounded-md`}></div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  
  export default Skeleton