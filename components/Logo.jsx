function Logo() {
  return (
    <div className="relative">
      <img src="./img/K.svg" alt="K" className="h-14 py-3" />

      <div className="absolute -left-2 top-0 h-full aspect-square bg-black -z-10 blur-xl rounded-full "></div>

      <div className="absolute -right-3 top-1/2 -translate-y-1/2">
        <img src="./img/cube.svg" alt="cube" className="h-4 animate-spin" />
      </div>
    </div>
  );
}

export default Logo;
