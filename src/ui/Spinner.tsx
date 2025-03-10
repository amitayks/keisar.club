function Spinner() {
  return (
    <div
      className='mx-auto my-[4.8rem] w-16 aspect-square rounded-full animate-spin'
      style={{
        background: `radial-gradient(farthest-side, #4f46e5 94%, transparent) top/10px 10px no-repeat,
          conic-gradient(transparent 30%, #4f46e5)`,
        WebkitMask:
          "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)",
      }}
    />
  );
}

export default Spinner;
